/**
 * Created by Duc Duong on 8/8/2016.
 */
import {
    Component, OnInit, ViewChild, ElementRef, AfterViewInit, Pipe,
    PipeTransform
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import {ArticleService} from '../../../services/article';
import {PagerService} from '../../../services/pager';
import {Paginator} from 'primeng/primeng';
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';

declare var $:any;

@Component({
    selector: 'art-list-clt',
    templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
    directives: [ROUTER_DIRECTIVES,Paginator,FORM_DIRECTIVES,DataTable,Column,Header,Footer],
    providers: [ArticleService, PagerService]
})

export class ArtListCtlComponent implements OnInit {

    artsAt: any[] = [];
    artsDa: any[] = [];
    artsPr: any[] = [];


    constructor(private _articleService: ArticleService, private _pagerService: PagerService, private router: Router) {

    }

    ngOnInit() {
        this.getAllArt();
        $('ul.tabs').tabs();
    }

    getAllArt(){
        this.artsAt=[];
        this.artsDa=[];
        this.artsPr=[];
        this._articleService.getAllArtAdmin().subscribe((arts)=>{
            for(let e of arts){
                if(e.status=="public"){
                    this.artsAt.push(e);
                }else if(e.status=="deactivate"){
                    this.artsDa.push(e);
                }else if(e.status=="private"){
                    this.artsPr.push(e);
                }
            }
        });
    }

    openArticle(articleId: string): void {
        var specs = 'width=1200,height=1200';
        var url = '/article/' + articleId;
        window.open(url, '', specs);
    }


    activeArt(id: string) {
        this._articleService.activeArt(id).subscribe((art) => {

            this.getAllArt();

        });
    }

    deActiveArt(id: string) {
        this._articleService.deactivateArticle(id).subscribe((art) => {
            this.getAllArt();
        });
    }

}