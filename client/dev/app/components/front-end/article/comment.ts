/**
 * Created by Duc Duong on 8/15/2016.
 */
import { Component, OnInit, Pipe, PipeTransform ,Input,Output,EventEmitter ,AfterViewChecked} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { infoHover } from '../user/user-profile/info-hover';
declare var $: any;
declare var Materialize: any;

@Component({
    selector: 'comment',
    templateUrl: 'client/dev/app/components/front-end/article/templates/comment.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/comment.css'],
    directives: [
        ROUTER_DIRECTIVES,infoHover
    ],
    providers: [ArticleService]
})

export class commentComponent implements OnInit ,AfterViewChecked{

    userToken:string;
    roleToken:string;

    @Input() comment:any;
    @Input() author:string;
    @Output() sendDataToP: EventEmitter<string> = new EventEmitter<string>();
    textEdit:string="";

    isEditing:boolean=false;
    liked:boolean=false;

    constructor(public router: Router, private route: ActivatedRoute, private _artService: ArticleService) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    ngOnInit() {
        let i = this.comment.userLiked.indexOf(this.userToken);
        if(i>=0){
            this.liked=true;
        }
    }
    deleteCmt(idCmt:string){
        this.sendDataToP.emit([this.comment._id,"delete"]);
    }
    editCmt(){
        this.sendDataToP.emit([this.comment._id,"edit",this.textEdit]);
        this.isEditing=false;
    }
    likeCmt(){
        this.sendDataToP.emit([this.comment._id,"like"]);
        this.liked=true;
    }
    unlikeCmt(){
        this.sendDataToP.emit([this.comment._id,"unlike"]);
        this.liked=false;
    }
    openEditCmt(){
        this.isEditing=true;
    }
}