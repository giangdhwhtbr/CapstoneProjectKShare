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
import {StringFilterPipe} from '../shared/filter';

@Component({
    selector: 'tag-list-clt',
    templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES,PaginationControlsCmp],
    providers: [TagService,PaginationService],
    pipes: [PaginatePipe, StringFilterPipe]
})
export class TagListCtlComponent implements OnInit {

    tags:any[] = [];
    deTags:any[] = [];
    filter: string = '';


    constructor(private _tagService:TagService, private router:Router) {

    }

    ngOnInit() {
        this._tagService.getAllTag().subscribe((tags)=> {
            this._tagService.getAllDeactiveTag().subscribe((deTags)=>{
                this.tags = tags;
                this.deTags=deTags;
            });
        });
    }
    deactiveTag(id:string){
        this._tagService.deactivateTag(id).subscribe((mess)=>{
            this._tagService.getAllTag().subscribe((tags)=> {
                this._tagService.getAllDeactiveTag().subscribe((deTags)=>{
                    this.tags = tags;
                    this.deTags=deTags;
                });
            });
        });
    }
    activeTag(id:string){
        this._tagService.activeTag(id).subscribe((tag)=>{
            this._tagService.getAllTag().subscribe((tags)=> {
                this._tagService.getAllDeactiveTag().subscribe((deTags)=>{
                    this.tags = tags;
                    this.deTags=deTags;
                });
            });
        });
    }
}