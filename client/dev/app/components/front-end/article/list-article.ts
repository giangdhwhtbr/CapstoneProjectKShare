/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { PrivateChatComponent } from './../../shared/private-chat';
import { listTagComponent } from '../tag/tag';
import { infoHover } from '../user/user-profile/info-hover';

declare var $:any;

@Component({
    selector: 'list-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES,
        PrivateChatComponent,
        listTagComponent,
        infoHover
    ],
    providers: [ArticleService]
})

export class listArticleComponent implements OnInit {

    listArt:Array<any> = [];
    roleToken:string;
    userToken:string;
    num:number = 5;
    articles:any[] = [];
    height:number = 400;
    isExist:boolean = true;
    text:string;

    constructor(public router:Router, private route:ActivatedRoute, private _artService:ArticleService) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }

    ngOnInit() {
        this.getAllArticles();
        $(window).on("scroll", () => {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                setTimeout(() => {
                    this.seeMore();
                }, 1000);
                this.height += 30;
            }
        });
    }

    seeMore() {
        this.num = this.num + 5;
        this.getAllArticles();
    }

    getAllArticles() {
        this.text = "";
        this._artService.getAllArts(this.num).subscribe((arts) => {
            if (arts.length==0) {
            }else{
                for (let i = 0; i < arts.length; i++) {
                    this.listArt.push(arts[i]);
                }
            }
        });
    }

    backToAll(){
        this.isExist = true;
        this.num = 5;
        this.getAllArticles();
    }

    searchArticle() {
        this.num = 5;
        this.listArt = [];
        if (!this.text) {
            this.getAllArticles();
            this.isExist = true;
        } else {
            this._artService.searchArticle(this.text).subscribe((arts) => {
                console.log(arts.length);
                for (var i = 0; i < arts.length; i++) {
                    this.listArt.push(arts[i]);
                }
                if (arts.length <= 0) {
                    this.isExist = false;
                }else{
                    this.isExist = true;
                }
            });
        }

    }
}
