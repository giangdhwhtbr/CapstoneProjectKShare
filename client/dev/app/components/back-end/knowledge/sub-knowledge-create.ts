import {
    Component,
    Inject,
    Input,Output,EventEmitter
} from '@angular/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control,
    AbstractControl
} from '@angular/common';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import { KnowledgeService } from '../../../services/knowledge';
import { Knowledge } from '../../../interface/knowledge';
import {Dialog} from 'primeng/primeng';
import {PrivateChatComponent} from '../../shared/private-chat';
import {TreeNode} from 'primeng/primeng';
declare var $:any
@Component({
    selector: 'sub-create',
    templateUrl: 'client/dev/app/components/back-end/knowledge/templates/sub-knowledge-create.html',
    directives: [FORM_DIRECTIVES,Dialog,PrivateChatComponent]
})
export class CreateSubCategoryComponent {
    @Input('kId') kId: string;
    @Input() knowledges: TreeNode[];
    @Output() knowledge: EventEmitter<Knowledge> = new EventEmitter<Knowledge>();
    router:Router;
    subCategoryForm: ControlGroup;
    constructor(fb: FormBuilder, private _knowledgeService: KnowledgeService) {
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
    }
    ngOnInit(): void {

    }
    addKnowledge(knowledge) {
        this._knowledgeService.addKnowledge(knowledge).subscribe((knowledge)=> {
                (<Control>this.subCategoryForm.controls["name"]).updateValue("");
                (<Control>this.subCategoryForm.controls["description"]).updateValue("");
                for(var i = 0;i<this.knowledges.length;i++){
                  if(knowledge.parent==this.knowledges[i].data._id){
                    this.knowledges[i].children.push(knowledge);
                  }
                }
                this.knowledge.emit(knowledge);
            }
        );

    }
}
