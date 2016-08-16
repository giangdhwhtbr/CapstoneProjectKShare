/**
 * Created by GiangDH on 7/9/16.
 */
import { Component, OnInit, OnDestroy,Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { KSpaceService } from '../../../services/kspace';
import { ArticleService } from '../../../services/article';
import { NgForm }    from '@angular/forms';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
declare var $:any;
@Component ({
    templateUrl:'client/dev/app/components/front-end/kspace/templates/kspace-info.html',
    directives: [
        ROUTER_DIRECTIVES,
        SEMANTIC_COMPONENTS,
        SEMANTIC_DIRECTIVES
    ],
    providers:[ArticleService]
})

export class KSpaceInfoComponent implements OnInit {
    accessRoomBtn:string = 'Access Room';
    kspaceId:string;
    lecturer:string;
    ratePoint:number;
    reviews:any;

    kspace:any;

    rateAve:number;

    // error message
    errorMessage:any;

    isFinish:boolean=false;
    finishDate:any;

    constructor(private router:Router, private route:ActivatedRoute, private _kspaceService:KSpaceService, private _articleService:ArticleService) {
        this.route.params.subscribe(params => {
            this.kspaceId = params['id'];
            this.lecturer = params['lecturer'];
        })
    }

    images:Array<any> = [];
    boards:Array<any> = [];
    title:string;

    isCreatingArt:boolean=false;

    ngOnInit():void {
        this._kspaceService
            .getKSpaceById(this.kspaceId)
            .subscribe(
                kspace => {
                    this.kspace=kspace;
                    this.title = kspace.requestTitle;
                    this.reviews = kspace.reviews;
                    this.rateAve = parseInt(kspace.rateAve);
                    for (var log of kspace.chatlog) {
                        if (log.dataURL) {
                            var data = {
                                id:log._id,
                                des: log.message,
                                url: log.dataURL
                            }
                            this.images.push(data);
                        }
                    }
                    for (var board of kspace.boards) {
                        if (board._id) {
                            var data = {
                                id: board._id,
                                des: board.boardNumber,
                                url: board.dataURL
                            }
                            this.boards.push(data);
                        }
                    }
                    if(kspace.finishedAt){
                        this.isFinish=true;
                        this.finishDate=kspace.finishedAt;
                    }
                }
            )
        console.log(this.isCreatingArt);

    }

    onSubmit(value):void {
        if (!this.ratePoint) {
            this.errorMessage = {
                header: '',
                content: 'Vui lòng chấm điểm cho bài giảng'
            };
        } else {
            var data = {
                id: this.kspaceId,
                createdUser: localStorage.getItem('username'),
                content: value.content,
                rate: this.ratePoint
            };
            this._kspaceService.createReview(data).subscribe(
                (reviews) => {
                    this.reviews = reviews;
                },
                (error) => {
                    if (error._body) {
                        console.log(error);
                        error = JSON.parse(error._body);
                        if (error.message) {
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

    onReceiveRating(event) {
        this.errorMessage = '';
        this.ratePoint = event;
    }

    accessRoom():void {
        var specs = 'resizable=yes, fullscreen=yes';
        var name = '_blank';
        var url = '/room/' + this.kspaceId + '/' + this.lecturer;
        window.open(url, name, specs);
    }
    finishKp(){
        this._kspaceService.finish(this.kspaceId).subscribe((kspace)=>{
            this.isFinish=true;
            this.finishDate=kspace.finishedAt;
        });
    }

    openSelectElement(){
        this.isCreatingArt=true;
    }

    createArt(){
        let contentArt='';
        for(let i =0 ; i< this.images.length;i++){
            contentArt+="<h5>"+this.images[i].des+"</h5><br>";
            contentArt+='<img class="responsive-img" src="'+this.images[i].url+'" style="background-color: black; border-radius: 10px;"><br>';
        }
        for(let i =0 ; i< this.boards.length;i++){
            contentArt+="<h5>"+this.boards[i].des+"</h5><br>";
            contentArt+='<img class="responsive-img" src="'+this.boards[i].url+'" style="background-color: black; border-radius: 10px;" ><br>';
        }
        let dateKs = new Date(this.kspace.createdAt);
        dateKs = dateKs.toLocaleDateString();
        let title =  this.kspace.requestTitle+" " +dateKs ;
        this._articleService.addArticle(title,contentArt)
    }

    deleteElement(id:string){
        for(let i =0 ; i< this.images.length;i++){
            if(this.images[i].id==id){
                this.images.splice(i,1);
                break;
            }
        }
        for(let i =0 ; i < this.boards.length;i++){
            if(this.boards[i].id==id){
                this.boards.splice(i,1);
                break;
            }
        }
    }
}
