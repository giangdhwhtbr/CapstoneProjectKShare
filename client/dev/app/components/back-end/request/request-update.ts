import { Component, OnInit, Inject } from '@angular/core';
import { Request } from '../../../interface/request';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';
import { KnowledgeService } from '../../../services/knowledge';
import { TagService } from '../../../services/tag';
import {AutoComplete} from 'primeng/primeng';

import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

@Component({
    selector: 'request-update-cli',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, AutoComplete],
    providers: [TagService]
})

export class UpdateRequestComponent {
    updateRequestFormCli:ControlGroup;

    knowledges:Knowledge[];

    id:string;

    request:Request;
    _id:string;
    title:string;
    description:string;
    knowledgeId:string;

    filteredKnw:string[];

    tags:any[];
    tagsEx:Array<any>;

    constructor(@Inject(FormBuilder) fb:FormBuilder,
                @Inject(RequestService) private _requestService:RequestService,
                public router:Router,
                private route:ActivatedRoute,
                private _tagService:TagService,
                @Inject(KnowledgeService)
                private _knowledgeService:KnowledgeService) {
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });

        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""]
        });
    }

    ngOnInit():void {
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
        });

        this._requestService.getRequestById(this.id).subscribe(
            (request) => {

                let ids:string[] = [];
                ids = request.tags;

                this._tagService.getTagsByIds(ids).subscribe((tags)=> {

                    this.request = request;
                    this.title = request.title;
                    this.description = request.description;
                    this._id = request._id;

                    console.log(tags);
                    let nameArr :string[]=[];
                    for (let e of tags) {
                        nameArr.push(e.name);
                    }
                    this.tags=nameArr;

                    this.loadAllTags();


                });
            },
            (error) => {
                console.log(error.text());
            }
        );
    }

    filterONTag() {
        let oldTag:any[] = [];
        for (let e of this.tagsEx) {
            for (let e1 of this.tags) {
                if (e.name == e1) {
                    oldTag.push(e._id);
                    let index = this.tags.indexOf(e1);
                    if (index > -1) {
                        this.tags.splice(index, 1);
                    }
                }
            }
        }
        return [oldTag, this.tags];
    }


    filterKnw(event) {
        let query = event.query;
        this.filteredKnw = [];
        for (let i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (i == this.tagsEx.length - 1) {
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    }

    //load all knowledge
    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
            console.log(this.tagsEx);
        });
    }

    updateRequest(request) {
        let tags:any[] = [];
        tags = this.filterONTag();
        this._requestService.updateRequest(request, tags[0], tags[1]).subscribe((request) => {
                this.router.navigateByUrl('/requests/'+request._id+'/info');
            },
            (error) => {
                console.log(error.text());
            }
        );
    }

}
