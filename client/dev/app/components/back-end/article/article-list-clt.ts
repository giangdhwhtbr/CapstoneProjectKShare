/**
 * Created by Duc Duong on 8/8/2016.
 */
import {
    Component, OnInit, ViewChild, ElementRef, AfterViewInit,Pipe,
    PipeTransform
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import {ArticleService} from '../../../services/article';
import {PagerService} from '../../../services/pager';
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
import {Paginator} from 'primeng/primeng';

declare var $:any;

@Component({
    selector: 'art-list-clt',
    templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, PaginationControlsCmp,Paginator],
    providers: [ArticleService, PaginationService,PagerService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class ArtListCtlComponent implements OnInit {

    arts:any[] = [];
    filter:string = '';
    total:number=0;


    constructor(private _articleService:ArticleService,private _pagerService:PagerService, private router:Router) {

    }

    ngOnInit() {
        this._pagerService.getAPage("article",0,"public").subscribe((Arts)=> {
            this._pagerService.getTotalNum("articletot","public").subscribe((num)=>{
                this.arts=Arts;
                this.total=num;
            });
        });
    }

    activeArt(id:string){
        //this._articleService.activeArt(id).subscribe((art)=>{
        //    this._articleService.getAllDeArts().subscribe((arts)=> {
        //        this.arts=arts;
        //        $('.messOn').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ' + art.title + ' đã được mở lại và ở trạng thái riêng tư</div>');
        //    });
        //});
    }

    paginate(event:any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});

        this._pagerService.getAPage("article",event.first,"public").subscribe((Arts)=> {
            this.arts=Arts;
        });

    }
}