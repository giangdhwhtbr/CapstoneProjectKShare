import {
    Component,
    Inject,
    OnInit,
    AfterViewChecked
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { Knowledge } from '../../../interface/knowledge';
import { KnowledgeService } from '../../../services/knowledge';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
declare var $:any;
@Component({
    selector: 'sidebar',
    templateUrl: 'client/dev/app/components/front-end/shared/templates/side-bar.html',
    styleUrls: ['client/dev/app/components/front-end/shared/styles/side-bar.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent {
    constructor(private _knowledgeService:KnowledgeService,public router:Router,private route: ActivatedRoute) {
    }

    knowledges:Knowledge[];

    ngOnInit():void {
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            var parent = [];
            var subCate = [];
            for (var i = 0; i < knowledges.length; i++) {
                if (!knowledges[i].hasOwnProperty('parent') && knowledges[i].status == true) {
                    parent.push(knowledges[i]);
                }
            }
            for (var i = 0; i < parent.length; i++) {
                for (var j = 0; j < knowledges.length; j++) {
                    if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id) && (knowledges[j].status == true)) {
                        subCate.push(knowledges[j]);
                    }
                }
                parent[i]["subCategory"] = subCate;
                subCate = [];
            }
            knowledges = parent;
            this.knowledges = parent;
        });
        $('.collapsible').collapsible({
            accordion: true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    }

    ngAfterViewChecked(){
        $('#sidenav-overlay').remove();
        $('.drag-target').remove();
    }

    closeNav() {
        $('.btnOpenNavF').sideNav({closeOnClick: "true"});
    }

    backHome(){
        this.router.navigateByUrl('/');
    }
}