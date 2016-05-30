import { Component,Inject,Input } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from 'angular2/common';
import { RequestService } from '../../services/requests-service';
import { CreateRequestComponent } from '../../components/request/request-create';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from'angular2/router';
import { RequestListComponent } from '../../components/request/requests-list';
import { Request } from '../../interface/request';

@Component({
  selector: 'request-update-cli',
  templateUrl:'client/dev/kshare/templates/request-cli/request-update-cli.html',
  styleUrls: [],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UpdateRequestComponent {
  updateRequestForm: ControlGroup;
  
  id: string;
  
  request: Request;
  _id: string;
  title: string;
  description: string;
  ngOnInit():void {
    this._requestService.getRequestById(this.id).subscribe(
      (request) => {
        console.log(request);
        this.request = request;
        this.title = request.title;
        this.description = request.description;
        this._id = request._id;

    },
      (error) => {
        console.log(error.text());
      }
    );
  }
  
  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(RequestService) private _requestService: RequestService,
            public router: Router, rParam: RouteParams) {
    this.id = rParam.get('id');
    
    this.updateRequestForm = fb.group({
      "_id": [""],
      "title": [""],
      "description": [""]
    });
  }
  
  updateRequest(request) {
    this._requestService.updateRequest(request).subscribe((request)=> {
      console.log('update successed');
    },
    (error) => {
      console.log(error.text());
    }
    );
    window.location.href = 'admin/requests';
  }

}
