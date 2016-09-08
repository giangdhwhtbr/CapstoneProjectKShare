/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ArticleService } from '../../../services/article';

@Component({
    selector: 'top-articles',
    templateUrl: 'client/dev/app/components/front-end/newsfeed/templates/topArticles.html',
    styleUrls: ['client/dev/app/components/front-end/newsfeed/styles/newsfeed.css'],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class topArticlesComponent {
    articles: any[]=[];
    constructor(private _articleService:ArticleService,
                private router:Router) {
       
    }

    ngOnInit():void {
       this._articleService.topArticle().subscribe((articles) => {
           this.articles = articles;
       });
    }
    
}
