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
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
import {Paginator} from 'primeng/primeng';


@Component({
    selector: 'art-list-clt',
    templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, PaginationControlsCmp, Paginator],
    providers: [ArticleService, PaginationService, PagerService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class ArtListCtlComponent implements OnInit {

    artsAt: any[] = [];
    artsDa: any[] = [];
    artsPr: any[] = [];
    filter: string = '';
    filter1: string = '';
    filter2: string = '';
    total: any = 0;
    total1: any = 0;
    total2: any = 0;

    status: string = "public";

    firstESave: any = 0;
    firstESave1: any = 0;
    firstESave2: any = 0;


    constructor(private _articleService: ArticleService, private _pagerService: PagerService, private router: Router) {

    }

    ngOnInit() {
        this.getAtArts();
        this.getdaArts();
        this.getPrArts();
    }

    openArticle(articleId: string): void {
        var specs = 'width=1200,height=1200';
        var url = '/article/' + articleId;
        window.open(url, '', specs);
    }

    getAtArts() {
        this._pagerService.getAPage("article", 0, "public").subscribe((Arts) => {
            this._pagerService.getTotalNum("articletot", "public").subscribe((num) => {
                this.artsAt = Arts;
                this.total = num;
            });
        });
    }

    getdaArts() {
        this._pagerService.getAPage("article", 0, "deactivate").subscribe((Arts) => {
            this._pagerService.getTotalNum("articletot", "deactivate").subscribe((num) => {
                this.artsDa = Arts;
                this.total1 = num;
            });
        });
    }

    getPrArts() {
        this._pagerService.getAPage("article", 0, "private").subscribe((Arts) => {
            this._pagerService.getTotalNum("articletot", "private").subscribe((num) => {
                this.artsPr = Arts;
                this.total2 = num;
            });
        });
    }

    activeArt(id: string) {
        this._articleService.activeArt(id).subscribe((art) => {

            this._pagerService.getAPage("article", this.firstESave1, "deactivate").subscribe((Arts) => {
                this._pagerService.getTotalNum("articletot", "deactivate").subscribe((num) => {
                    this.artsDa = Arts;
                    this.total1 = num;
                    this.getPrArts();
                });
            });

        });
    }

    deActiveArt(id: string, stt: string) {
        this._articleService.deactivateArticle(id).subscribe((art) => {
            if (stt == "private") {
                this._pagerService.getAPage("article", this.firstESave2, "private").subscribe((Arts) => {
                    this._pagerService.getTotalNum("articletot", "private").subscribe((num) => {
                        this.artsPr = Arts;
                        this.total2 = num;
                        this.getdaArts();
                    });
                });
            } else {
                this._pagerService.getAPage("article", this.firstESave, "public").subscribe((Arts) => {
                    this._pagerService.getTotalNum("articletot", "public").subscribe((num) => {
                        this.artsAt = Arts;
                        this.total = num;
                        this.getdaArts();
                    });
                });
            }
        });
    }

    paginate(event: any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        this._pagerService.getAPage("article", event.first, "public").subscribe((Arts) => {
            this.artsAt = Arts;
        });
        this.firstESave = event.first;
    }
    paginate1(event: any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages

        this._pagerService.getAPage("article", event.first, "deactivate").subscribe((Arts) => {
            this.artsDa = Arts;
        });
        this.firstESave1 = event.first;
    }
    paginate2(event: any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages

        this._pagerService.getAPage("article", event.first, "private").subscribe((Arts) => {
            this.artsPr = Arts;
        });
        this.firstESave2 = event.first;
    }
}