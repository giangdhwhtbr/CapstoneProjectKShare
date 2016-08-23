/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit,Pipe,PipeTransform, OnDestroy,
    Pipe,
    PipeTransform, } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TagService } from '../../../services/tag';

import {listTagComponent} from '../tag/tag';


import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import { Subscription }       from 'rxjs/Subscription';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $:any;

@Component ({
    selector: 'list-article-by-tag',
    templateUrl: 'client/dev/app/components/front-end/tag/templates/display-article-by-tag.html',
    styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
    directives: [
        ROUTER_DIRECTIVES,listTagComponent,PaginationControlsCmp,PrivateChatComponent
    ],
    providers: [TagService,PaginationService],
    pipes: [PaginatePipe]
})

export class displayArtByTagComponent implements OnInit{
    listReq:any[]=[];
    listArt:any[]=[];
    id:string;
    private sub :Subscription;

    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: IPaginationInstance = {
        id: 'req',
        itemsPerPage: 10,
        currentPage: 1
    };

    public maxSizeArt: number = 7;
    public directionLinksArt: boolean = true;
    public autoHideArt: boolean = false;
    public configArt: IPaginationInstance = {
        id: 'art',
        itemsPerPage: 10,
        currentPage: 1
    };

    constructor(public router:Router, private route:ActivatedRoute, private _tagService:TagService){

    }


    onPageChange(number: number) {
        this.config.currentPage = number;
    }
    onPageChangeArt(number: number) {
        this.configArt.currentPage = number;
    }


    ngOnInit(){
        this.sub = this.route
            .params
            .subscribe(params => {
                this.id = params['id'];

                this._tagService.getArtByTag(this.id).subscribe((arts)=>{
                    this._tagService.getReqByTag(this.id).subscribe((reqs)=>{
                        this.listReq=reqs;
                        this.listArt =arts;
                    });
                });
            });
        $('ul.tabs').tabs();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}