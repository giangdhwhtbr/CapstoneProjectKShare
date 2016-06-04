import {
  Component,OnInit
} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import  { NavbarComponent } from '../../components/shared/nav-bar';
import  { SidebarComponent }  from '../../components/shared/sidebar';
import  { KnowledgeListComponent } from '../../components/knowledge/knowledges-list';
import  { CreateKnowledgeComponent } from '../../components/knowledge/knowledge-create';

import  { Knowledge } from '../../interface/knowledge';
import  { KnowledgeService} from '../../services/knowledge-service';

@Component({
  selector: 'knowledge-mgn',
  templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge.html',
  directives: [KnowledgeListComponent,CreateKnowledgeComponent,NavbarComponent,SidebarComponent,ROUTER_DIRECTIVES],
  providers:[KnowledgeService]
})
export class KnowledgeComponent {

}
