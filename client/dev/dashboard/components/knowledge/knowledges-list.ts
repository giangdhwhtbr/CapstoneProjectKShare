import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Knowledge } from '../../interface/knowledge';
import { KnowledgeService } from '../../services/knowledge-service';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { UpdateKnowledgeComponent } from '../../components/knowledge/knowledge-update';
import { CreateSubCategoryComponent } from '../../components/knowledge/sub-create';
import { AuthService} from '../../services/auth-services';
import { CreateKnowledgeComponent } from '../../components/knowledge/knowledge-create';

@Component({
  selector: 'knowledge-list',
  templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-list.html',
  styleUrls:
  ['client/dev/dashboard/styles/knowledge-list.css',
    'client/dev/dashboard/styles/styles.css'],
  directives: [
              UpdateKnowledgeComponent,
              CreateSubCategoryComponent,
              CreateKnowledgeComponent,
              ROUTER_DIRECTIVES]
})

export class KnowledgeListComponent {
  pageTitle: string = 'Knowledge List';
  errorMessage: string;

  knowledges: Knowledge[];

  constructor(private _knowledgeService: KnowledgeService){

  }

  ngOnInit(): void {
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
      console.log(this.knowledges);
    });
  }
  private deleteKnowledge(id):void {
    this._knowledgeService
      .deleteKnowledge(id)
      .subscribe(() => {
          window.location.reload();
      })
  }
}
