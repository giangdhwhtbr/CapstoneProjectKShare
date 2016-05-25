import { Component,Inject } from 'angular2/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from 'angular2/common';
import { RequestService} from '../../services/requests-service';

@Component({
  selector: 'request-create',
  templateUrl: 'client/dev/dashboard/templates/request/request-create.html',
  styleUrls: ['client/dev/dashboard/styles/request-create.css'],
  directives: [FORM_DIRECTIVES]
})
export class CreateRequestComponent {
  requestForm: ControlGroup;

  constructor(fb: FormBuilder, private _requestService: RequestService) {
    this.requestForm = fb.group({
      "title": [""],
      "description": [""]
    });
  }
  //RequestService requestServiceObject = new RequestService();
  addRequest(request) {
    this._requestService.addRequest(request).subscribe((request)=> {
      console.log('success');
    },
    (error) => {
      console.log(error.text());
    }
    );
    window.location.reload();
  }
  
}
