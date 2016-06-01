import {
  Component,OnInit
} from 'angular2/core';
//import { ROUTER_DIRECTIVES } from 'angular2/router';
import  { Badword} from '../../interface/badword';
import  { BadwordService} from '../../services/badwords-service';
import  { UpdateBadwordComponent} from '../../components/badword/badword-update';
@Component({
  selector: 'badword-list',
  templateUrl: 'client/dev/dashboard/templates/badword/badword-list.html',
  styleUrls: ['client/dev/dashboard/styles/badword-list.css'],
  directives: [UpdateBadwordComponent]
})

export class BadwordListComponent {
  pageTitle: string = 'Badword List';
  errorMessage: string;

  badwords: Badword[];

  constructor(private badwordService: BadwordService){

  }
  ngOnInit() {
    this.getAll();
  }

  getAll():void {
    this.badwordService
        .getAllBadwords()
        .subscribe((badwords) => {
          this.badwords = badwords;
          console.log("1234");
        });
  }

  private deleteBadword(id):void {
    this.badwordService
      .deleteBadword(id)
      .subscribe(() => {
        this.badwords.forEach((t, i) => {
          if (t._id === id)
            return this.badwords.splice(i, 1);
        });
      })
  }

  findBadwordById(id):void {
    this.badwordService
        .findBadwordById(id)
        .subscribe((badwords) => {
          return badwords;
        });
  }
}
