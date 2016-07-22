import {
  Component,
  Inject,Input,EventEmitter,Output
} from '@angular/core';
import  {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control
} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import  { Badword } from '../../../interface/badword';
import  { BadwordService} from '../../../services/badword';

@Component({
  selector: 'badword-create',
  templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-create.html',
  styleUrls: ['client/dev/app/components/back-end/badword/styles/badword.css'],
  directives: [FORM_DIRECTIVES]
})
export class CreateBadwordComponent {
  badwordForm: ControlGroup;
  badwords: Badword[];
  word:Badword;
  navigated = false;
  constructor(fb: FormBuilder, private _badwordService: BadwordService,private router: Router) {
    this.badwordForm = fb.group({
      "word": [""],
    });

  }

  ngOnInit(){
    this.getAll();
  }
  getAll():void {
    this._badwordService
        .getAllBadwords()
        .subscribe((badwords) => {
          this.badwords=badwords;
        });
  }

  addBadword(word):void {
    this._badwordService
        .addBadword(word)
        .subscribe((word) => {
            this.badwords.push(word);
        });
  }
}
