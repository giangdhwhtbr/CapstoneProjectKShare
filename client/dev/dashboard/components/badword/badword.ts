import {
  Component,OnInit
} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import  { NavbarComponent } from '../../components/shared/nav-bar';
import  { SidebarComponent }  from '../../components/shared/sidebar';
import  { BadwordListComponent } from '../../components/badword/badwords-list';
import  { CreateBadwordComponent } from '../../components/badword/badword-create';
import  { UpdateBadwordComponent} from '../../components/badword/badword-update';
import  { Badword } from '../../interface/badword';
import  { BadwordService} from '../../services/badwords-service';

@Component({
  selector: 'badword-mgn',
  templateUrl: 'client/dev/dashboard/templates/badword/badword.html',
  directives: [BadwordListComponent,UpdateBadwordComponent,CreateBadwordComponent,NavbarComponent,SidebarComponent,ROUTER_DIRECTIVES],
  providers:[BadwordService],
})
export class BadwordComponent {

}
