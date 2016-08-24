/**
 * Created by Duc Duong on 8/19/2016.
 */
import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Inject,
    OnDestroy
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../../../../services/users';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import { Subscription } from 'rxjs/Subscription';
import { PrivateChatComponent } from '../../../shared/private-chat';

declare var $:any;
@Component({
    selector: 'rs-user-search',
    templateUrl: 'client/dev/app/components/front-end/user/search/templates/search-rs.html',
    styleUrls: ['client/dev/app/components/front-end/user/search/styles/search-rs.css'],
    directives: [ROUTER_DIRECTIVES,PaginationControlsCmp,PrivateChatComponent],
    providers:[UserService,PaginationService],
    pipes: [PaginatePipe]
})

export class userSearchRsComponent {

    name:string;
    users:any=[];

    constructor( private _userService:UserService,private router:Router,
                 private route:ActivatedRoute) {

    }

    ngOnInit(){
        this.route
            .params
            .subscribe(params => {
                this.name = params['name'];
                this._userService.searchUserByUsername(this.name).subscribe((users)=>{
                    this.users=users;
                });
            });


    }

}