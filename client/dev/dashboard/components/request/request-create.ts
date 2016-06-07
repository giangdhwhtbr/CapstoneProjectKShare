import { Component,Inject, OnInit } from '@angular/core';
import { KnowledgeService } from '../../services/knowledge-service';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { RequestService} from '../../services/requests-service';
import { Knowledge } from '../../interface/knowledge';
import { AuthService } from '../../../dashboard/services/auth-services';
import { ROUTER_DIRECTIVES } from'@angular/router';

@Component({
  selector: 'request-create',
  templateUrl: 'client/dev/dashboard/templates/request/request-create.html',
  styleUrls: ['client/dev/dashboard/styles/request-create.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class CreateRequestComponent {
  user:string;
  roleToken:string;
  requestForm: ControlGroup;

  knowledges: Knowledge[];

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(RequestService) private _requestService: RequestService, private _knowledgeService: KnowledgeService,
                    private _authService: AuthService) {
    this.user = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');
    
    this.requestForm = fb.group({
      "knowledgeId": [""],
      "title": [""],
      "description": [""],
      "user": [""]
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
