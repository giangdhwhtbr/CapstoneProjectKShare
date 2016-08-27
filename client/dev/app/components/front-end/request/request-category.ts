import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Inject,
    OnDestroy
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import { Request } from '../../../interface/request';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';
import { ArticleService } from '../../../services/article';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import { Subscription } from 'rxjs/Subscription';
import { PrivateChatComponent } from './../../shared/private-chat';
import { infoHover } from '../user/user-profile/info-hover';

import {listTagComponent} from '../tag/tag';
declare var $:any;
@Component({
    selector: 'request-category-cli',
    templateUrl: 'client/dev/app/components/front-end/request/templates/request-category.html',
    styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
    directives: [ROUTER_DIRECTIVES,PaginationControlsCmp,listTagComponent,PrivateChatComponent,infoHover],
    providers:[ArticleService,PaginationService],
    pipes: [PaginatePipe]
})

export class RequestCategoryComponent {
    pageTitle:string = 'Welcome to Knowledge Sharing Network';

    id:string;
    isExistRecord:boolean;
    type:string;
    requests:Request[]=[];
    knowledges:Knowledge[]=[];
    arts:any[]=[];
    private sub:Subscription;

    public maxSizeReq: number = 7;
    public directionLinksReq: boolean = true;
    public autoHideReq: boolean = false;
    public configReq: IPaginationInstance = {
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

    constructor(private _requestService:RequestService,private _articleService:ArticleService, public router:Router,
                private route:ActivatedRoute) {
    }

    onPageChangeReq(number: number) {
        this.configReq.currentPage = number;
    }
    onPageChangeArt(number: number) {
        this.configArt.currentPage = number;
    }

    ngOnInit():void {

        this.sub = this.route
            .params
            .subscribe(params => {
                let type = params['type'];
                let id = params['id'];

                this._articleService.getArtByKnwId(id).subscribe((arts)=>{
                    this.arts=arts;
                });

                //get templates from children category
                if (type === "subcategory") {
                    this._requestService.getRequestByKnowledgeId(id).subscribe(
                        (requests) => {
                            if (requests.length == 0) {
                                this.isExistRecord = true;
                            }
                            else {
                                this.isExistRecord = false;
                            }
                            for (var i = 0; i < requests.length; i++) {
                                requests[i].createdAt = new Date(requests[i].createdAt);
                                requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                            }
                            this.requests = requests;
                        });
                }

                //get templates from parent category
                if (type === "category") {
                    this._requestService.getKnowledgeByParent(id).subscribe(
                        (knowledges) => {

                            var a = [];
                            this.knowledges = knowledges;
                            for (var i = 0; i < this.knowledges.length; i++) {
                                this._requestService.getRequestByKnowledgeId(this.knowledges[i]._id).subscribe(
                                    (requests) => {
                                        //for each child knowledge get requests
                                        for (var j = 0; j < requests.length; j++) {
                                            a.push(requests[j]);
                                        }

                                        for (var i = 0; i < a.length; i++) {
                                            a[i].createdAt = new Date(requests[i].createdAt);
                                            a[i].modifiedDate = new Date(requests[i].modifiedDate);
                                            if (requests[i].status === 'pending') {
                                                requests[i].status = 'Đang chờ';
                                            }
                                        }
                                        if (a.length == 0) {
                                            this.isExistRecord = true;
                                        }
                                        else {
                                            this.isExistRecord = false;
                                        }
                                        this.requests = a;
                                    });
                            }
                        },
                        (Error) => {
                            console.log(Error);
                        });
                }
            });
        $('ul.tabs').tabs();
    }

    ngOnDestroy():void {
        this.sub.unsubscribe();
    }
}
