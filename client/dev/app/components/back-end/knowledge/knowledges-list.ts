import {
    Component,
    OnInit,Input,ElementRef
} from '@angular/core';

import {
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router';

import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control
} from '@angular/common';


import { Knowledge } from '../../../interface/knowledge';
import { Request } from '../../../interface/request';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService } from '../../../services/requests';
import { UpdateKnowledgeComponent } from './knowledge-update';
import { CreateSubCategoryComponent } from './sub-knowledge-create';
import { AuthService} from '../../../services/auth';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
declare var $:any
@Component({
    selector: 'knowledge-list',
    templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
    directives: [
        UpdateKnowledgeComponent,
        CreateSubCategoryComponent,
        ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [KnowledgeService, PaginationService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class KnowledgeListComponent {
    pageTitle:string = 'Knowledge List';
    errorMessage:string;
    knowledgeForm:ControlGroup;
    subCategoryForm:ControlGroup;
    knowledges:Knowledge[];
    requests:Request[];
    @Input() knowledge:Knowledge;

    constructor(fb:FormBuilder, private _elRef:ElementRef, private _knowledgeService:KnowledgeService, private _requestService:RequestService) {
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""],
        });
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
        this.sort();
    }

    ngOnInit():void {
        this.sort();
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

    addKnowledge(knowledge):void {
        this._knowledgeService
            .addKnowledge(knowledge)
            .subscribe((m) => {
                this.knowledges.push(m);
                this.sort();
                (<Control>this.knowledgeForm.controls["name"]).updateValue("");
                (<Control>this.knowledgeForm.controls["description"]).updateValue("");
            });
    }

    changeKnowledgeStatus(knowledge):void {
      this._knowledgeService
          .changeKnowledgeStatus(knowledge)
          .subscribe((knowledge) => {
          });
          if(knowledge.hasOwnProperty("subCategory")){
            for(var i = 0 ;i < knowledge["subCategory"].length;i++){
              if(knowledge["subCategory"][i].status==knowledge.status){
                this._knowledgeService
                    .changeKnowledgeStatus(knowledge["subCategory"][i])
                    .subscribe((knowledge) => {})
              }
            }
          }
        this.sort();
    }
    //sắp xếp knowledge dựa vào số lượng request
    sort():void {
      this._requestService.getAllRequests().subscribe((requests) => {
          this.requests = requests;
      });
      this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
          for (var i = 0; i < knowledges.length; i++) {
              var length = 0;
              knowledges[i]["requestLength"]=0;
              for (var j = 0; j < this.requests.length; j++) {
                  if (this.requests[j].knowledgeId == knowledges[i]._id) {
                      length++;
                      knowledges[i]["requestLength"] = length;
                  }
              }
          }
          this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
          for (var i = 0; i < this.knowledges.length; i++) {
              var a = 0;
              for (var j = 0; j < this.knowledges[i]["subCategory"].length; j++) {
                  a += this.knowledges[i]["subCategory"][j]["requestLength"];
                  this.knowledges[i]["requestLength"] = a;
              }
          }

          for (var i = 0; i < this.knowledges.length - 1; i++) {
              for (var j = i+1; j < this.knowledges.length; j++) {
                  if (this.knowledges[i]["requestLength"] < this.knowledges[j]["requestLength"]) {
                      this.knowledge = this.knowledges[i];
                      this.knowledges[i] = this.knowledges[j];
                      this.knowledges[j] = this.knowledge;
                  }
              }
          }
      });
    }
    hide():void {
        $(".collapse").collapse("hide");
    }

}
