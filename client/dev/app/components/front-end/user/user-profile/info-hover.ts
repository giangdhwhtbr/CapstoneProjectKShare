/**
 * Created by Duc Duong on 8/27/2016.
 */
import {
    Component,
    OnInit,
    Pipe,
    Input,
    PipeTransform,
    Inject,
    OnDestroy
} from '@angular/core';


import { UserService } from '../../../../services/users';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import {RatingPoint} from '../../../shared/ratingPoint';

@Component({
    selector: 'hover-info-user',
    templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/info-hover.html',
    styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
    directives: [
        ROUTER_DIRECTIVES,RatingPoint
    ],
    providers:[UserService]
})

export class infoHover{
    @Input() username:string;
    private user:any;
    constructor(private router: Router, private route: ActivatedRoute, private _userService:UserService) {

    }

    ngOnInit(){
        this._userService.getUserByUserName(this.username).subscribe((user)=>{
            this.user=user;
        },(error)=>{
            console.log(error);
        });
    }
}