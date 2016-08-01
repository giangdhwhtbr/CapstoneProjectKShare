/**
 * Created by Duc Duong on 7/24/2016.
 */
import { Component, OnInit,AfterViewChecked ,Pipe,PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import * as $ from 'jquery';

@Component({
    selector: 'detail-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES,MD_CARD_DIRECTIVES,MD_BUTTON_DIRECTIVES
    ],
    providers: [ArticleService]
})

export class detailArticleComponent implements OnInit,AfterViewChecked {

    article:any;
    id:string;
    tags:Array<any>;

    roleToken:string;
    userToken:string;

    canSee:boolean = true;
    isDeAc:boolean = false;

    constructor(public router:Router, private route:ActivatedRoute, private _articleService:ArticleService) {
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }

    ngOnInit() {
        this._articleService.getArtById(this.id).subscribe((art)=> {
            if ((art.ofUser != this.userToken && this.roleToken != "admin" && art.status == "private") || (this.roleToken != "admin" && art.status == "deactivate")) {
                this.canSee = false;
            } else {

                this.article = art;

                this.tags = art.tagsFD;

                this.article.createdAt = new Date(this.article.createdAt);

                if (art.status == "deactivate") {
                    this.isDeAc = true;
                }
            }

        });
    }

    deactivateArticle(id) {
        if (id) {
            this._articleService.deactivateArticle(id).subscribe((mes)=> {
                $('.messOff').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Success!</strong> ' + mes.mes + ' </div>');
                this.isDeAc = true;
                $('#clsArtBtn').hide();
            });
        }
    }

    ngAfterViewChecked() {
        if (this.article != undefined) {
            $('.bodyArt').html(this.article.content);
        }
    }

    editArt(id:string) {
        this.router.navigateByUrl('/article/edit/' + this.id);
    }

}