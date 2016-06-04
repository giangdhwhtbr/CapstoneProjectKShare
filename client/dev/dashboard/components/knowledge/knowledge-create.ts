import {
  Component,
  Inject,
} from '@angular/core';
import  { Knowledge} from '../../interface/knowledge';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import  { KnowledgeService} from '../../services/knowledge-service';

@Component({
  selector: 'knowledge-create',
  templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-create.html',
  styleUrls: ['client/dev/dashboard/styles/knowledge/knowledge-create.css'],
  directives: [FORM_DIRECTIVES]
})
export class CreateKnowledgeComponent {
  knowledgeForm: ControlGroup;
  knowledges: Knowledge[]= [];
  constructor(fb: FormBuilder, private _knowledgeService: KnowledgeService) {
    this.knowledgeForm = fb.group({
      "name": [""],
      "description": [""],
    });
  }


  addKnowledge(word):void {
    this._knowledgeService
        .addKnowledge(word)
        .subscribe((m) => {
          this.knowledges.push(m);
          window.location.reload();
        });
  }
}
