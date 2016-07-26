import {
  Component,
  OnInit
} from '@angular/core';

import {
  ROUTER_DIRECTIVES,
  Router
} from '@angular/router';

import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control
} from '@angular/common';


import { Knowledge } from '../../../interface/knowledge';

import { KnowledgeService } from '../../../services/knowledge';
import { UpdateKnowledgeComponent } from './knowledge-update';
import { CreateSubCategoryComponent } from './sub-knowledge-create';
import { AuthService} from '../../../services/auth';
import { CreateKnowledgeComponent } from './knowledge-create';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
declare var $:any
@Component({
  selector: 'knowledge-list',
  templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
  directives: [
    UpdateKnowledgeComponent,
    CreateSubCategoryComponent,
    ROUTER_DIRECTIVES,PaginationControlsCmp],
  providers: [KnowledgeService,PaginationService],
  pipes: [PaginatePipe,StringFilterPipe]
})

export class KnowledgeListComponent {
  pageTitle: string = 'Knowledge List';
  errorMessage: string;
  knowledgeForm: ControlGroup;
  subCategoryForm: ControlGroup;
  knowledges: Knowledge[];

  constructor(fb: FormBuilder,private _knowledgeService: KnowledgeService){
    this.knowledgeForm = fb.group({
      "name": [""],
      "description": [""],
    });
    this.subCategoryForm = fb.group({
      "name": [""],
      "description": [""],
      "parent": [""]
    });
  }

  ngOnInit(): void {
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      console.log(knowledges);
      /*this.knowledges = this._knowledgeService.getChildFromParent(knowledges);*/
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
    });

  }
  private deleteKnowledge(id):void {
    this._knowledgeService
      .deleteKnowledge(id)
      .subscribe(() => {
        this.knowledges.forEach((t, i) => {
          if (t._id === id)
            return this.knowledges.splice(i, 1);
        });
      })
  }
  addKnowledge(knowledge):void {
    this._knowledgeService
        .addKnowledge(knowledge)
        .subscribe((m) => {
          this.knowledges.push(m);
          (<Control>this.knowledgeForm.controls["name"]).updateValue("");
          (<Control>this.knowledgeForm.controls["description"]).updateValue("");
        });
  }

  addSubKnowledge(knowledge):void {
    this._knowledgeService
        .addKnowledge(knowledge)
        .subscribe((m) => {
          (<Control>this.subCategoryForm.controls["name"]).updateValue("");
          (<Control>this.subCategoryForm.controls["description"]).updateValue("");
            for(var i=0;i<this.knowledges.length;i++){
              if(this.knowledges[i]._id===m.parent){
                console.log(this.knowledges[i]._id);
                var a = [];
                a.push(m);
                this.knowledges[i]["subCategory"]=a;
              }
            }
        });
  }
}
