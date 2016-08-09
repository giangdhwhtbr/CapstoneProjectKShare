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
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
import {Paginator} from 'primeng/primeng';

declare var $:any;

@Component({
    selector: 'art-list-clt',
    templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, PaginationControlsCmp,Paginator],
    providers: [ArticleService, PaginationService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class ArtListCtlComponent implements OnInit {

    deArts:any[] = [];
    filter:string = '';


    constructor(private _articleService:ArticleService, private router:Router) {

    }

    ngOnInit() {
        this._articleService.getAllDeArts().subscribe((deArts)=> {
            this.deArts=deArts;
        });
    }

    activeArt(id:string){
        this._articleService.activeArt(id).subscribe((art)=>{
            this._articleService.getAllDeArts().subscribe((deArts)=> {
                this.deArts=deArts;
                $('.messOn').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ' + art.title + ' đã được mở lại và ở trạng thái riêng tư</div>');
            });
        });
    }
}