/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article';
import {ArticleService} from "../../../services/article";

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

    constructor(public router:Router, private route:ActivatedRoute, private _artService:ArticleService) {

    }

    ngOnInit() {
        this._artService.getAllArts().subscribe((arts)=> {
            this.listArt = arts;
        });
    }
}