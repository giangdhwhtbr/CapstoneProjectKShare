/**
 * Created by GiangDH on 7/9/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { KSpaceService } from '../../../services/kspace';
import { NgForm }    from '@angular/forms';
import { PrivateChatComponent } from './../../shared/private-chat';

// import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@Component ({
  template: `
      <div class="container mg-top-50">
        <h3>{{title}}</h3>
        {{rateAve}}
         <sm-rating class="massive star" disable="disable" [initialRating]="[rateAve]"></sm-rating>
        <br>
        <button (click)="accessRoom()">{{accessRoomBtn}}</button>
        <hr>
        <h3>images</h3>
        <div *ngFor="let img of images">
          <h4>{{img.des}}</h4>
          <img src="{{img.url}}" style="background-color: black; border-radius: 10px;" alt="kspace" width="300" height="200">
          <br>
        </div>
        <hr>
        <h3>boards</h3>
        <div *ngFor="let board of boards">
          <h4>Board {{board.des}}</h4>
          <img src="{{board.url}}"           style="background-color: whitesmoke; border:black; border-weight:1px ;                                                                      border-radius: 10px;" alt="kspace" width="300" height="200">
          <br>
        </div>
        <div id="createReview">
            <sm-message *ngIf="errorMessage" class="warning">
              <message-header>{{errorMessage.header}}</message-header>
              <message-content>
                  {{errorMessage.content}}
              </message-content>
            </sm-message>
            <sm-rating class="massive star" (onRate)="onReceiveRating($event)" [maxRating]="5"></sm-rating>
            <form class="ui form" #reviewForm="ngForm" (ngSubmit)="onSubmit(reviewForm.value)">
                <textarea  ngControl="content" required ></textarea>
                <button type="submit">Review</button>
            </form>
        </div>
        <div id="reviews">
          <div *ngFor="let review of reviews">
            <sm-segment class="raised">
              <p>{{review.createdUser}}</p>
              <p>{{review.content}}</p>
            </sm-segment>
          </div>
        </div>
      </div>
      <private-chat></private-chat>
    `,
  directives: [
    ROUTER_DIRECTIVES,
    PrivateChatComponent
  ],
})

export class KSpaceInfoComponent implements OnInit {
  accessRoomBtn: string = 'Access Room';
  kspaceId: string;
  lecturer: string;
  ratePoint: number;
  reviews: any;

  rateAve: number;

  // error message
  errorMessage: any;

  constructor( private router: Router, private route: ActivatedRoute, private _kspaceService: KSpaceService) {
    this.route.params.subscribe(params => {
      this.kspaceId = params['id'];
      this.lecturer = params['lecturer'];
    })
  }

  images: Array<any> = [];
  boards: Array<any> = [];
  title: string;
  ngOnInit(): void {
    this._kspaceService
    .getKSpaceById(this.kspaceId)
    .subscribe(
      kspace => {
        this.title = kspace.requestTitle;
        this.reviews = kspace.reviews;
        this.rateAve = parseInt(kspace.rateAve);
        for (var log of kspace.chatlog){
          if(log.dataURL){
            var data = {
              des: log.message,
              url: log.dataURL
            }
            this.images.push(data);
          }
        }
        for (var board of kspace.boards){
          if(board.dataURL){
            var data = {
              des: board.boardNumber,
              url: board.dataURL
            }
            this.boards.push(data);
          }
        }
      }
    )

  }

  onSubmit(value): void {
    if(!this.ratePoint){
      this.errorMessage = {
        header: '',
        content: 'Vui lòng chấm điểm cho bài giảng'
      };
    }else {
      var data = {
        id : this.kspaceId,
        createdUser: localStorage.getItem('username'),
        content: value.content,
        rate: this.ratePoint
      };
      this._kspaceService.createReview(data).subscribe(
        (reviews) => {
          this.reviews = reviews;
        },
        (error) => {
          if(error._body) {
            console.log(error);
            error = JSON.parse(error._body);
            if(error.message){
              this.errorMessage = {
                header: '',
                content: error.message
              };
            }
          }
        }
      );
    }
  }

  onReceiveRating(event){
    this.errorMessage = '';
    this.ratePoint = event;
  }

  accessRoom(): void {
    var specs = 'resizable=yes, fullscreen=yes';
    var name = '_blank';
    var url = '/room/'+this.kspaceId+'/'+this.lecturer;
    window.open(url, name ,specs);
  }
}
