/**
 * Created by Duc Duong on 7/25/2016.
 */

import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TagService } from '../../../services/tag';

@Component ({
    selector: 'list-article-by-tag',
    templateUrl: 'client/dev/app/components/front-end/tag/templates/display-article-by-tag.html',
    styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [TagService]
})

export class displayArtByTagComponent implements OnInit{

    listArt:Array<any>;
    id:string;

    constructor(public router:Router, private route:ActivatedRoute, private _tagService:TagService){
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
    }

    ngOnInit(){
        this._tagService.getArtByTag(this.id).subscribe((arts)=>{
            this.listArt =arts;
        });
    }

}