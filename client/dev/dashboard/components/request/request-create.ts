import { Component,Inject, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/knowledge-service';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { RequestService} from '../../services/requests-service';
import { Knowledge } from '../../interface/knowledge';

@Component({
  selector: 'request-create',
  templateUrl: 'client/dev/dashboard/templates/request/request-create.html',
  styleUrls: ['client/dev/dashboard/styles/request-create.css'],
  directives: [FORM_DIRECTIVES]
})
export class CreateRequestComponent {
  requestForm: ControlGroup;

  knowledges: Knowledge[];

  constructor(fb: FormBuilder, private _requestService: RequestService, private _knowledgeService: KnowledgeService) {
    this.requestForm = fb.group({
      "knowledgeId": [""],
      "title": [""],
      "description": [""]
    });
  }

  ngOnInit(): void {
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
    });
  }

  addRequest(request) {
    console.log(request);
    this._requestService.addRequest(request).subscribe((request)=> {
      console.log('success');
    },
    (error) => {
      console.log(error.text());
    }
    );
    console.log(request);
    window.location.reload();
  }

}
