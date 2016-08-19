/**
 * Created by Duc Duong on 8/8/2016.
 */
import {
    Component, OnInit, ViewChild, ElementRef, AfterViewInit,Pipe,
    PipeTransform
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import {TagService} from '../../../services/tag';
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {PagerService} from '../../../services/pager';
import {StringFilterPipe} from '../shared/filter';
import {Paginator} from 'primeng/primeng';
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';

@Component({
    selector: 'tag-list-clt',
    templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES,PaginationControlsCmp,Paginator,DataTable,Column, Header, MultiSelect, Footer, InputText],
    providers: [TagService,PaginationService,PagerService],
    pipes: [PaginatePipe, StringFilterPipe]
})
export class TagListCtlComponent implements OnInit {

    tagsAt:any[] = [];
    tagsDa:any[] = [];



    constructor(private _tagService:TagService, private router:Router,private _pagerService:PagerService) {

    }

    ngOnInit() {
        this.getAllTag();
        $('ul.tabs').tabs();
    }

    getAllTag(){
        this.tagsAt=[];
        this.tagsDa=[];
        this._tagService.getAllTagAdmin().subscribe((tags)=>{
            for(let e of tags){
                if(e.status==true){
                    this.tagsAt.push(e);
                }else{
                    this.tagsDa.push(e);
                }
            }
        });
    }



    deactiveTag(id:string){
        this._tagService.deactivateTag(id).subscribe((mess)=>{
            this.getAllTag();
        });
    }
    activeTag(id:string){
        this._tagService.activeTag(id).subscribe((tag)=>{
            this.getAllTag();
        });
    }
}