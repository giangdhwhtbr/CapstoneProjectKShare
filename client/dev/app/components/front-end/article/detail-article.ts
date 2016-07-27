/**
 * Created by Duc Duong on 7/24/2016.
 */
import { Component, OnInit,AfterViewChecked ,Pipe,PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { ArticleService } from '../../../services/article';

import * as $ from 'jquery';

@Component({
    selector: 'detail-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
    styleUrls:  ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers:[ArticleService]
})

export class detailArticleComponent implements OnInit,AfterViewChecked{

    article:any;
    id:string;
    tags:Array<any>;

    constructor( public router:Router,private route: ActivatedRoute,private _articleService:ArticleService){
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
    }

    ngOnInit(){
        this._articleService.getArtById(this.id).subscribe((art)=>{
            this.article=art;

            this.tags=art.tagsFD;

            this.article.createdAt = new Date(this.article.createdAt);

            console.log(this.article);
        });
    }

    ngAfterViewChecked(){
        if(this.article!=undefined){
            $('.bodyArt').html(this.article.content);
        }
    }

    editArt(id:string){
        this.router.navigateByUrl('/article/edit/'+this.id);
    }

}