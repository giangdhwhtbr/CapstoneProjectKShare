import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
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
      var parent = [];
      var subCate = [];
      for(var i = 0;i < knowledges.length;i++){
        if(!knowledges[i].hasOwnProperty('parent')){
          parent.push(knowledges[i]);
        }
      }
      for(var i = 0;i<parent.length;i++){
        for(var j = 0;j< knowledges.length;j++){
          if((knowledges[j].hasOwnProperty('parent'))&&(knowledges[j].parent===parent[i]._id)){
            subCate.push(knowledges[j]);
          }
        }
        parent[i]["subCategory"] = subCate;
        subCate = [];
      }
      this.knowledges = parent;
    });
  }
}
