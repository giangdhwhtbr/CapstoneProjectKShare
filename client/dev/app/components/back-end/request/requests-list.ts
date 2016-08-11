import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Inject,
    AfterViewChecked
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';


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
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
import {Paginator} from 'primeng/primeng';

@Component({
    selector: 'request-list',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
    directives: [UpdateRequestComponent, ROUTER_DIRECTIVES, PaginationControlsCmp, FORM_DIRECTIVES,Paginator],
    providers: [RequestService, PaginationService, PagerService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class RequestListComponent implements AfterViewChecked {
    pageTitle:string = 'Request List';
    errorMessage:string;
    user:string;
    roleToken:string;
    requestForm:ControlGroup;
    public filter:string = '';

    knowledges:Knowledge[];

    deactiveRequests:Request[];
    activeRequests:Request[];
    acceptepRequests:Request[];

    totalActive:number=0;
    totalDeac:number=0;
    totalAccepted:number=0;

    constructor(@Inject(FormBuilder) fb:FormBuilder,
                @Inject(RequestService) private _requestService:RequestService,
                private _knowledgeService:KnowledgeService,
                private _pagerService:PagerService,
                private _authService:AuthService) {
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');

        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
        });
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
        });
    }

    ngOnInit():void {
        this.getAllRequest();
    }

    deactivateRequest(id:string) {
        this._requestService
            .changeStatusRequest(id)
            .subscribe((r) => {
                console.log("deactivate sucess");
                this.getAllRequest();
            })
    }

    activateRequest(request:Request) {
        request.status = 'pending';
        this._requestService
            .updateRequest(request, request.tags, [])
            .subscribe((r) => {
                this.getAllRequest();
            })
    }

    getAllRequest() {


        this.activeRequests = [];
        this.deactiveRequests = [];
        this.acceptepRequests = [];

        this._pagerService.getAPage("request",0,"pending").subscribe((reqs)=> {
            this._pagerService.getTotalNum("requesttot","pending").subscribe((num)=>{
                console.log(reqs);
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
                        reqs[i].status = "Đang chờ";
                    }
                }
                this.activeRequests=reqs;
                this.totalActive=num;
            });
        });
        this._pagerService.getAPage("request",0,"deactive").subscribe((reqs)=> {
            this._pagerService.getTotalNum("requesttot","deactive").subscribe((num)=>{
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'deactive' ) {
                        reqs[i].status = "Kết thúc";
                    }
                }
                this.deactiveRequests=reqs;
                this.totalDeac=num;
            });
        });
        this._pagerService.getAPage("request",0,"accepted").subscribe((reqs)=> {
            this._pagerService.getTotalNum("requesttot","accepted").subscribe((num)=>{
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'accepted' ) {
                        reqs[i].status = "Được chấp thuận";
                    }
                }
                this.acceptepRequests=reqs;
                this.totalAccepted=num;
            });
        });
    }

    paginate1(event:any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});

        this._pagerService.getAPage("request",event.first,"pending").subscribe((reqs)=> {
            this.activeRequests=reqs;
        });

    }
    paginate2(event:any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});

        this._pagerService.getAPage("request",event.first,"deactive").subscribe((reqs)=> {
            this.deactiveRequests=reqs;
        });

    }
    paginate3(event:any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});

        this._pagerService.getAPage("request",event.first,"accepted").subscribe((reqs)=> {
            this.acceptepRequests=reqs;
        });

    }

}
