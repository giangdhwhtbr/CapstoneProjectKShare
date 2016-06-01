import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';
import { Knowledge } from '../../../dashboard/interface/knowledge';
import { KnowledgeService } from '../../../dashboard/services/knowledge-service';
@Component({
  selector : 'sidebar',
  templateUrl: 'client/dev/kshare/templates/shared/sidebar.html',
  styleUrls: ['client/dev/kshare/styles/sidebar.css'],
  directives: []
})

export class SideBarComponent {
  constructor(private _knowledgeService: KnowledgeService){

  }
  
  knowledges: Knowledge[];
  
  ngOnInit(): void {
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
    });
  }
 
}
  