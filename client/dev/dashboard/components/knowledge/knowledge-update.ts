
import { Component,Inject,Input } from 'angular2/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from 'angular2/common';
import { KnowledgeService } from '../../services/knowledge-service';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from'angular2/router';
import { KnowledgeListComponent } from '../../components/knowledge/knowledges-list';
import { Knowledge } from '../../interface/knowledge';

@Component({
  selector: 'knowledge-update',
  templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-update.html',
  styleUrls: ['client/dev/dashboard/styles/knowledge-update.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [KnowledgeService]
})

export class UpdateKnowledgeComponent {
  updateKnowledgeForm: ControlGroup;

  id: string;

  knowledge: Knowledge;
  _id: string;
  name: string;
  description: string;

  ngOnInit():void {
    this._knowledgeService.findKnowledgeById(this.id).subscribe(
      (knowledge) => {
        this.knowledge = knowledge;
        this.name = knowledge.description;
        this._id = knowledge._id;

    },
      (error) => {
        console.log(error.text());
      }
    );
  }

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(KnowledgeService) private _knowledgeService: KnowledgeService,
            public router: Router, rParam: RouteParams) {
    this.id = rParam.get('id');

    this.updateKnowledgeForm = fb.group({
      "name": [""],
      "description": [""],
      "_id":[""],
    });
  }

  updateKnowledge(knowledge) {
    this._knowledgeService.updateKnowledge(knowledge).subscribe((knowledge)=> {
      console.log('update successed');
    },
    (error) => {
      console.log(error.text());
    }
    );
    window.location.href = 'admin/knowledges';
  }

}
