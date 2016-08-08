import { Component, Inject, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { KnowledgeService } from '../../../services/knowledge';
import { RequestService} from '../../../services/requests';
import { Knowledge } from '../../../interface/knowledge';
import { AuthService} from '../../../services/auth';
import {TagService} from '../../../services/tag';
import {AutoComplete,SelectButton,SelectItem} from 'primeng/primeng';

@Component({
    selector: 'request-create',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
    styleUrls: ['client/dev/app/components/bac  k-end/request/templates/request.css'],
    directives: [FORM_DIRECTIVES,AutoComplete],
    providers: [ TagService]
})
export class CreateRequestComponent {
    user:string;
    roleToken:string;
    requestForm:ControlGroup;

    knowledges:Knowledge[];

    filteredKnw:string[];

    tags:any[];
    tagsEx:Array<any>;

    constructor( private _tagService:TagService,@Inject(FormBuilder) fb:FormBuilder, @Inject(RequestService) private _requestService:RequestService, private _knowledgeService:KnowledgeService,
                private _authService:AuthService, public router:Router) {
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');

        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
        });
    }

    ngOnInit():void {
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.loadAllTags();
            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
        });
    }

    filterONTag() {
        let oldTag: any[]=[];
        for (let e of this.tagsEx) {
            for (let e1 of this.tags) {
                //catch old tags
                if (e.name == e1) {
                    oldTag.push(e._id);
                    //find out old tags in data tags user
                    let index = this.tags.indexOf(e1);
                    if(index>-1){
                        //remove old tags to catch new tags
                        this.tags.splice(index,1);
                    }
                }
            }
        }
        return [oldTag,this.tags];
    }

    filterKnw(event) {
        let query = event.query;
        this.filteredKnw = [];
        for (let i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if(i==this.tagsEx.length-1){
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    }

    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
            console.log(this.tagsEx);
        });
    }

    addRequest(request) {
        let tags:any[]=[];
        tags = this.filterONTag();

        this._requestService.addRequest(request,tags[0],tags[1]).subscribe((request)=> {
                console.log(request);
                this.router.navigateByUrl('/requests/' + request._id + '/info');
            },
            (error) => {
                console.log(error.text());
            }
        );
    }

}
