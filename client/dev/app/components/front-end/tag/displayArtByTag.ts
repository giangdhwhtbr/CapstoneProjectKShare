/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit,Pipe,PipeTransform, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TagService } from '../../../services/tag';

import {listTagComponent} from '../tag/tag';

import { Subscription }       from 'rxjs/Subscription';

@Component ({
    selector: 'list-article-by-tag',
    templateUrl: 'client/dev/app/components/front-end/tag/templates/display-article-by-tag.html',
    styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
    directives: [
        ROUTER_DIRECTIVES,listTagComponent
    ],
    providers: [TagService]
})

export class displayArtByTagComponent implements OnInit{
    listReq:Array<any>=[];
    listArt:Array<any>=[];
    id:string;
    haveArt:boolean=false;
    private sub :Subscription;

    constructor(public router:Router, private route:ActivatedRoute, private _tagService:TagService){

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
                        console.log(this.listReqst);
                    });
                });
            });
        $('ul.tabs').tabs();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goTab1(){
        console.log("ok");
        $('ul.tabs').tabs('select_tab', 'test1');
    }
    goTab2(){
        $('ul.tabs').tabs('select_tab', 'test2');
    }

}