import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    AfterViewChecked,
    Inject
} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { TagService } from '../../../services/tag';
import { FriendListComponent} from '../shared/friend-list';
import { CreateRequestComponent } from '../../back-end/request/request-create';
import { RequestCategoryComponent} from './request-category';
import { AuthService } from '../../../services/auth';
import { Router } from "@angular/router";

declare var $ :any;

@Component({
    selector: 'request-list-cli',
    templateUrl: 'client/dev/app/components/front-end/request/templates/request-list.html',
    styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FriendListComponent,
        CreateRequestComponent,
        RequestCategoryComponent
    ],
    providers: [TagService]
})

export class RequestListClientComponent implements AfterViewChecked{
    pageTitle: string = 'Welcome to Knowledge Sharing Network';
    text: string;
    isExistRecord: boolean = false;
    roleToken: string;
    userToken: string;
    link: string;
    arrIds: any[] = [];
    _data: any[] = [];

    constructor(private _requestService: RequestService, private _tagService: TagService, private _auth: AuthService, private router: Router) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }

    requests: Request[];

    ngOnInit(): void {
        // this.hide = false;
        this.getAllRequests();
    }

    ngAfterViewChecked(){

    }

    getAllRequests() {
        this._data = [];
        this._requestService.getAllRequests().subscribe((requests) => {

            //get all tag's ids of list request
            for (let e of requests) {
                for (let t of e.tags) {
                    let i = this.arrIds.indexOf(t);
                    if (i < 0) {
                        this.arrIds.push(t);
                    }
                }
            }

            //get all tag relate to ids
            this._tagService.getTagsByIds(this.arrIds).subscribe((tags) => {

                for (var i = 0; i < requests.length; i++) {

                    this._data.push({
                        req: requests[i],
                        tags: [],
                        sum:''
                    });

                    requests[i].createdAt = new Date(requests[i].createdAt);
                    requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                    requests[i].link = requests[i]._id + '/info';
                    if (requests[i].status === 'pending') {
                        requests[i].status = 'Đang chờ';
                    }
                    //get summary
                    let html = requests[i].description;
                    let div = document.createElement("div");
                    div.innerHTML = html;
                    let text = div.textContent || div.innerText || "";

                    this._data[i].sum=text.substr(0,100)+" ......";

                    for (let t of tags) {
                        if (requests[i].tags.indexOf(t._id) > -1) {
                            this._data[i].tags.push(t);
                        }
                    }
                }
                console.log(this._data);
                this.requests = requests;
            });


        });
    }

    search(search: string) {
        if (search === '') {
            this.isExistRecord = false;
            this.getAllRequests();
        } else {
            this._requestService.searchRequest(search).subscribe((requests) => {

                this.arrIds = [];

                //get all tag's ids of list request
                for (let e of requests) {
                    for (let t of e.tags) {
                        let i = this.arrIds.indexOf(t);
                        if (i < 0) {
                            this.arrIds.push(t);
                        }
                    }
                }

                //get all tag relate to ids
                this._tagService.getTagsByIds(this.arrIds).subscribe((tags) => {
                    this._data = [];
                    for (var i = 0; i < requests.length; i++) {
                        this._data.push({
                            req: requests[i],
                            tags: []
                        });
                        requests[i].createdAt = new Date(requests[i].createdAt);
                        if (requests[i].status === 'pending') {
                            requests[i].status = 'Đang chờ';
                        }

                        for (let t of tags) {
                            if (requests[i].tags.indexOf(t._id) > -1) {
                                this._data[i].tags.push(t);
                            }
                        }
                    }
                    if (requests.length === 0) {
                        this.isExistRecord = true;
                    } else {
                        this.isExistRecord = false;
                    }
                    this.requests = requests;
                });

            });
        }
    }

}