
import { Component,Inject,Input } from 'angular2/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from 'angular2/common';
import { BadwordService } from '../../services/badwords-service';
import { CreateBadwordComponent } from '../../components/badword/badword-create';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from'angular2/router';
import { BadwordListComponent } from '../../components/badword/badwords-list';
import { Badword } from '../../interface/badword';

@Component({
  selector: 'badword-update',
  templateUrl: 'client/dev/dashboard/templates/badword/badword-update.html',
  styleUrls: ['client/dev/dashboard/styles/badword-update.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [BadwordService]
})

export class UpdateBadwordComponent {
  updateBadwordForm: ControlGroup;

  id: string;

  badword: Badword;
  _id: string;
  word: string;

  ngOnInit():void {
    this._badwordService.findBadwordById(this.id).subscribe(
      (badword) => {
        this.badword = badword;
        this.word = badword.word;
        this._id = badword._id;

    },
      (error) => {
        console.log(error.text());
      }
    );
  }

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(BadwordService) private _badwordService: BadwordService,
            public router: Router, rParam: RouteParams) {
    this.id = rParam.get('id');

    this.updateBadwordForm = fb.group({
      "word": [""],
      "_id":[""],
    });
  }

  updateBadword(badword) {
    this._badwordService.updateBadword(badword).subscribe((badword)=> {
      console.log('update successed');
    },
    (error) => {
      console.log(error.text());
    }
    );
    window.location.href = 'admin/badwords';
  }

}
