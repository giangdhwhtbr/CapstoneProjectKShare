/**
 * Created by Duc Duong on 8/19/2016.
 */
/**
 * Created by Duc Duong on 8/19/2016.
 */
//cores
import {
    Component,
    OnInit,
    Pipe,
    Input,
    PipeTransform,
    Inject,
    OnDestroy
} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';
import { ArticleService } from '../../../../services/article';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';
import { Request } from '../../../../interface/request';
import { Knowledge } from '../../../../interface/knowledge';
import { KSpace } from '../../../../interface/kspace';

import {listTagComponent} from '../../tag/tag';
import { infoHover } from './info-hover';

@Component({
    selector: 'article-list',
    templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/list-article.html',
    styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
    directives: [
        ROUTER_DIRECTIVES,listTagComponent,infoHover
    ],
    providers:[ArticleService]
})

export class ArticleListComponent {
    @Input() article:any;
    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(){
    }
}
