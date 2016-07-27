/**
 * Created by GiangDH on 7/9/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { KSpaceService } from '../../../services/kspace';

@Component ({
  template: `
      <div class="container mg-top-50">
        <h3>{{title}}</h3>
        <br>
        <button (click)="accessRoom()">{{accessRoomBtn}}</button>
        <hr>
        <h3>images</h3>
        <div *ngFor="let img of images">
          <h4>{{img.des}}</h4>
          <img src="{{img.url}}" style="background-color: black; border-radius: 10px;" alt="kspace" width="300" height="200">
          <br>
        </div>
      </div>
    `,
  directives: [ROUTER_DIRECTIVES],
})

export class KSpaceInfoComponent implements OnInit {
  accessRoomBtn: string = 'Access Room';
  kspaceId: string;

  constructor( private router: Router, private route: ActivatedRoute, private _kspaceService: KSpaceService) {
    this.route.params.subscribe(params => {
      this.kspaceId = params['id'];
    })
  }

  images: Array<any> = [];
  title: string;
  ngOnInit(): void {
    this._kspaceService
    .getKSpaceById(this.kspaceId)
    .subscribe(
      kspace => {
        this.title = kspace.requestTitle;
        for (var log of kspace.chatlog){
          if(log.dataURL){

            var data = {
              des: log.message,
              url: log.dataURL
            }
            this.images.push(data);
          }
        }
      }
    )

  }

  accessRoom(): void {
    var specs = 'resizable=yes, fullscreen=yes';
    var name = '_blank';
    var url = '/room/'+this.kspaceId;
    window.open(url, name ,specs);
    //this.router.navigateByUrl('/kspace/room/'+this.kspaceId);
  }
}
