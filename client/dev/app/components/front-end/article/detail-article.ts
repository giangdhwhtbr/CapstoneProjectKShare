/**
 * Created by Duc Duong on 7/24/2016.
 */
import { Component, OnInit, AfterViewChecked, Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';
import { PrivateChatComponent } from './../../shared/private-chat';

import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { NotificationService } from '../../../services/notification';
import { ReportComponent } from '../report/report';

import {commentComponent} from './comment';

import {listTagComponent} from '../tag/tag';
import { infoHover } from '../user/user-profile/info-hover';
import { topArticlesComponent } from '../newsfeed/topArticle';
declare var $:any;
declare var io:any;
declare var Materialize:any;

@Component({
    selector: 'detail-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES, ReportComponent, FORM_DIRECTIVES,
        commentComponent, listTagComponent, PrivateChatComponent,infoHover,topArticlesComponent
    ],
    providers: [ArticleService]
})

export class detailArticleComponent implements OnInit, AfterViewChecked {

    article:any;
    id:string;
    tags:Array<any>;

    roleToken:string;
    userToken:string;

    canSee:boolean = true;
    isDeAc:boolean = false;

    textCmt:string = "";
    cmts:any[] = [];

    cmtEditForm:ControlGroup;
    cntCmt:string;
    cmtId:string;

    liked:boolean;

    isBindData:boolean=false;

    constructor(fb:FormBuilder, public router:Router, private route:ActivatedRoute,
                private _articleService:ArticleService,
                private _noti:NotificationService) {
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');

        this.cmtEditForm = fb.group({
            "cntCmt": [""],
            "cmtId": [""]
        });
    }

    ngOnInit() {
        this._articleService.getArtById(this.id).subscribe((art) => {

            if ((art.author == this.userToken && art.status == 'private')
                || (this.roleToken == 'admin')
                || (this.roleToken != 'admin' && art.status == 'public')) {
                //check user liked
                let i = art.userLiked.indexOf(this.userToken);
                if (i >= 0) {
                    this.liked = true;
                }else{
                    this.liked=false;
                }

                console.log(this.liked);

                this.article = art;

                this.tags = art.tagsFD;

                this.article.createdAt = new Date(this.article.createdAt);

                if (art.status == "deactivate") {
                    this.isDeAc = true;
                }

                for (let e of this.article.comments) {
                    this.cmts.push({
                        cmt: e,
                        isEdit: true
                    });
                }

            } else {
                this.canSee = false;
            }


        },(error)=>{
            if(error.status==400){
                window.location.href="/error";
            }
        });
        $('.modal-trigger').leanModal();
    }

    openCloseArt(){
        $('#mdCfClose').openModal();
    }

    openRp(){
        $('#myModal').openModal();
    }

    deactivateArticle(id:string) {
        if (id) {
            this._articleService.deactivateArticle(id).subscribe((mes) => {
                var title = 'Một bài viết của bạn đã bị đóng';
                var link = '/article/' + this.article._id;
                //call function using socket io to send notification
                this._noti.alertNotification(title, this.article.author, link);
                //save notification to database
                this._noti.createNotification(title, this.article.author, link).subscribe(
                    (notification) => {
                        console.log('create a notification to ' + this.article.author);
                    });
                Materialize.toast('Đã đóng bài viết!', 4000);
                this.isDeAc = true;
                $('#clsArtBtn').hide();
            });
        }
    }

    ngAfterViewChecked() {
        if (this.article != undefined) {
            if(this.isBindData==false){
                $('#bdArticle').html(()=> {
                    this.isBindData=true;
                    return this.article.content;
                });
                $('#bdArticle img').css('max-width','100%');
                $('#bdArticle iframe').css('max-width','100%');
            }

        }
    }

    editArt(id:string) {
        this.router.navigateByUrl('/article/edit/' + this.id);
    }

    postCmt() {
        if(this.textCmt.length!=0){
            this._articleService.addComment(this.id, this.userToken, this.textCmt).subscribe((cmts)=> {
                this.textCmt = "";
                this.article.comments = cmts;
            });
        }
    }

    actionComment(data:any):void {
        switch (data[1]) {
            case'delete':
                this._articleService.removeComment(this.id, data[0]).subscribe((cmts)=> {
                    this.article.comments = cmts;
                    Materialize.toast('Đã xoá bình luận!', 4000);
                });
                break;
            case'edit':
                this._articleService.editComment(this.id, data[0], data[2]).subscribe((cmts)=> {
                    this.article.comments = cmts;
                });
                break;
            case'like':
                this._articleService.likeComment(this.id, data[0], this.userToken).subscribe((cmts)=> {
                    this.article.comments = cmts;
                });
                break;
            case'unlike':
                this._articleService.unlikeComment(this.id, data[0], this.userToken).subscribe((cmts)=> {
                    this.article.comments = cmts;
                });
                break;
            default:
                console.log("action is empty");
        }

    }

    unlikeArt(){
        this._articleService.unlikeArt(this.id,this.userToken).subscribe((like)=>{
            this.article.like=like;
            this.liked=false;
        });
    }
    likeArt(){
        this._articleService.likeArt(this.id,this.userToken).subscribe((like)=>{
            this.article.like=like;
            this.liked=true;
        });
    }

}
