/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';

@Component ({
    selector: 'list-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [ArticleService]
})

export class listArticleComponent implements OnInit {

    listArt:Array<any>;
    roleToken:string;
    userToken:string;

    constructor(public router:Router, private route:ActivatedRoute, private _artService:ArticleService) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }

    ngOnInit() {
        this._artService.getAllArts().subscribe((arts)=> {
            console.log(arts.length);
            for(let i =0;i < arts.length;i++){
                if(arts[i].status=="private" && arts[i].ofUser!=this.userToken){
                    console.log(arts[i].status);
                    arts.splice(i,1);
                }

            }
            this.listArt=arts;
        });
    }
}