import {
  Component,
  Inject,
} from 'angular2/core';
import  { Badword} from '../../interface/badword';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from 'angular2/common';
import  { BadwordService} from '../../services/badwords-service';

@Component({
  selector: 'badword-create',
  templateUrl: 'client/dev/dashboard/templates/badword/badword-create.html',
  styleUrls: ['client/dev/dashboard/styles/badword-create.css'],
  directives: [FORM_DIRECTIVES]
})
export class CreateBadwordComponent {
  badwordForm: ControlGroup;
  badwords: Badword[]= [];
  constructor(fb: FormBuilder, private _badwordService: BadwordService) {
    this.badwordForm = fb.group({
      "word": [""],
    });
  }


  addBadword(word):void {
    this._badwordService
        .addBadword(word)
        .subscribe((m) => {
          this.badwords.push(m);
          window.location.reload();
        });
  }
}
