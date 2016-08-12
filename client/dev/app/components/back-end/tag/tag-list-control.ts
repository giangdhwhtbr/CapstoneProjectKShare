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

@Component({
    selector: 'tag-list-clt',
    templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES,PaginationControlsCmp,Paginator],
    providers: [TagService,PaginationService,PagerService],
    pipes: [PaginatePipe, StringFilterPipe]
})
export class TagListCtlComponent implements OnInit {

    tagsAt:any[] = [];
    tagsDa:any[] = [];

    filter: string = '';
    filter1: string = '';

    total:any=0;
    total1:any=0;

    status:string="true";

    firstESave:any=0;
    firstESave1:any=0;


    constructor(private _tagService:TagService, private router:Router,private _pagerService:PagerService) {

    }

    ngOnInit() {
        this.getTagsAt();
        this.getTagsDa();

    }

    getTagsAt(){
        this._pagerService.getAPage("tag",0,"true").subscribe((tags)=> {
            this._pagerService.getTotalNum("tagtot","true").subscribe((num)=>{
                this.tagsAt=tags;
                this.total=num;
            });
        });
    }

    getTagsDa(){
        this._pagerService.getAPage("tag",0,"false").subscribe((tags)=> {
            this._pagerService.getTotalNum("tagtot","false").subscribe((num)=>{
                this.tagsDa=tags;
                this.total1=num;
            });
        });
    }


    deactiveTag(id:string){
        this._tagService.deactivateTag(id).subscribe((mess)=>{
            this._pagerService.getAPage("tag",this.firstESave,"true").subscribe((tags)=> {
                this._pagerService.getTotalNum("tagtot","true").subscribe((num)=>{
                    this.total=num;
                    this.tagsAt=tags;
                    this._pagerService.getAPage("tag",this.firstESave1,"false").subscribe((tags)=> {
                        this._pagerService.getTotalNum("tagtot","false").subscribe((num)=>{
                            this.total1=num;
                            this.tagsDa=tags;
                        });
                    });
                });
            });
        });
    }
    activeTag(id:string){
        this._tagService.activeTag(id).subscribe((tag)=>{
            this._pagerService.getAPage("tag",this.firstESave1,"false").subscribe((tags)=> {
                this._pagerService.getTotalNum("tagtot","false").subscribe((num)=>{
                    this.total1=num;
                    this.tagsDa=tags;
                    this._pagerService.getAPage("tag",this.firstESave,"true").subscribe((tags)=> {
                        this._pagerService.getTotalNum("tagtot","true").subscribe((num)=>{
                            this.total=num;
                            this.tagsAt=tags;
                        });
                    });
                });
            });
        });
    }
    paginate(event:any) {

        this._pagerService.getAPage("tag",event.first,"true").subscribe((tags)=> {
            this.tagsAt=tags;
        });
        this.firstESave=event.first;
    }
    paginate1(event:any) {

        this._pagerService.getAPage("tag",event.first,"false").subscribe((tags)=> {
            this.tagsDa=tags;
        });
        this.firstESave1=event.first;
    }
}