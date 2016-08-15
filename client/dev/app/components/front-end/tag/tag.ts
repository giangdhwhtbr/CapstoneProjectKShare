/**
 * Created by Duc Duong on 8/15/2016.
 */
import { Component, OnInit, Pipe, PipeTransform ,Input,Output,EventEmitter ,AfterViewChecked,OnDestroy} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TagService } from '../../../services/tag';
import { Subscription }       from 'rxjs/Subscription';


@Component({
    selector: 'tags',
    templateUrl: 'client/dev/app/components/front-end/tag/templates/tag.html',
    styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [TagService]
})

export class listTagComponent implements OnInit{

    @Input() listTagId:Array<any>;
    tags:Array<any>;

    constructor(public router:Router, private route:ActivatedRoute, private _tagService:TagService){

    }

    ngOnInit(){
        this._tagService.getTagsByIds(this.listTagId).subscribe((tags)=>{
            this.tags=tags;
        });
    }


}