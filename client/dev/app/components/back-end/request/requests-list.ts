import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Inject,
    AfterViewChecked
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FORM_DIRECTIVES, ControlGroup, Control } from '@angular/common';
import { Request } from '../../../interface/request';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService} from '../../../services/requests';
import { Knowledge } from '../../../interface/knowledge';
import { AuthService} from '../../../services/auth';
import { PagerService} from '../../../services/pager';
import { OfferService } from '../../../services/request-offer';
import { CreateRequestComponent } from './request-create';
import { CreateOfferComponent  } from '../../front-end/offer/offer-create';
import { UpdateRequestComponent } from './request-update';
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';
import {Paginator} from 'primeng/primeng';
declare var $:any;
@Component({
    selector: 'request-list',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
    directives: [UpdateRequestComponent, ROUTER_DIRECTIVES, FORM_DIRECTIVES, Paginator,FORM_DIRECTIVES,DataTable,Column,Header,Footer],
    providers: [RequestService, PagerService]
})
export class RequestListComponent implements AfterViewChecked {
    pageTitle: string = 'Request List';
    errorMessage: string;
    user: string;
    roleToken: string;
    requestForm: ControlGroup;
    public filter: string = '';
    knowledges: Knowledge[];
    deactiveRequests: Request[];
    activeRequests: Request[];
    acceptepRequests: Request[];

    constructor(private _requestService: RequestService,
                private _knowledgeService: KnowledgeService,
                private _pagerService: PagerService,
                private _authService: AuthService) {
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
        });
    }
    ngOnInit(): void {
        this.getAllRequest();
        $('ul.tabs').tabs();
    }

    getAllRequest() {
        this.activeRequests = [];
        this.deactiveRequests = [];
        this.acceptepRequests = [];
        this._requestService.getAllRequestAdmin().subscribe((reqs)=> {
            for(let e of reqs){
                if(e.status == "pending"){
                    this.activeRequests.push(e);
                }else if(e.status =="deactive"){
                    this.deactiveRequests.push(e);
                }else if(e.status =="accepted"){
                    this.acceptepRequests.push(e);
                }
            }
        });
    }
    deactivateRequest(id: string) {
        this._requestService
            .changeStatusRequest(id)
            .subscribe((r) => {
                console.log("deactivate sucess");
                this.getAllRequest();
            })
    }
    activateRequest(request: Request) {
        request.status = 'pending';
        this._requestService
            .updateRequest(request, request.tags, [])
            .subscribe((r) => {
                this.getAllRequest();
            })
    }
}