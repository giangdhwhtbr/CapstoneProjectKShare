import {
  Component,OnInit
} from 'angular2/core';
//import { ROUTER_DIRECTIVES } from 'angular2/router';
import  { Knowledge } from '../../interface/knowledge';
import  { KnowledgeService} from '../../services/knowledge-service';
@Component({
  selector: 'knowledge-list',
  templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-list.html',
  styleUrls: ['client/dev/dashboard/styles/knowledge-list.css']
})

export class KnowledgeListComponent {
  pageTitle: string = 'Knowledge List';
  errorMessage: string;

  knowledges: Knowledge[];

  constructor(private _knowledgeService: KnowledgeService){

  }

  ngOnInit(): void {
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      var formatDate = function (date){
        if(date) {
          var newDate, day, month, year;
          year = date.substr(0, 4);
          month = date.substr(5, 2);
          day = date.substr(8, 2);
          return newDate = day + '/' + month + '/' + year;
        }
      }
      for (var i = 0; i < knowledges.length; i++) {
        knowledges[i].update = formatDate(knowledges[i].update);
      }
      this.knowledges = knowledges;
    });
  }
  private deleteKnowledge(id):void {
    this._knowledgeService
      .deleteKnowledge(id)
      .subscribe(() => {
        this.knowledges.forEach((t, i) => {
          if (t._id === id)
            return this.knowledges.splice(i, 1);
        });
      })
  }
}
