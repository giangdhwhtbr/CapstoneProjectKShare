/**
 * Created by Duc Duong on 7/24/2016.
 */
import { Component, OnInit,AfterViewChecked ,Pipe,PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { ArticleService } from '../../../services/article';
import { AuthService } from '../../../services/auth';
import { ReportComponent } from '../report/report';
declare var $:any;

@Component({
    selector: 'detail-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [
        ROUTER_DIRECTIVES,ReportComponent
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

            if ((art.ofUser == this.userToken && art.status == 'private')
                || (this.roleToken == 'admin')
                || (this.roleToken != 'admin' && art.status == 'public')) {
                this.article = art;

                this.tags = art.tagsFD;

                this.article.createdAt = new Date(this.article.createdAt);

                if (art.status == "deactivate") {
                    this.isDeAc = true;
                }

            }else{
                this.canSee=false;
            }


        });
    }

    deactivateArticle(id:string) {
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
        $("#btnRp").click(function(){
            $("#btnRp").hide();
        });
    }

    editArt(id:string) {
        this.router.navigateByUrl('/article/edit/' + this.id);
    }

}
