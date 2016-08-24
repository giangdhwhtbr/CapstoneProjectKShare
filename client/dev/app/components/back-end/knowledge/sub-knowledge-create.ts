import {
    Component,
    Inject,
    Input,Output
} from '@angular/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control,
    AbstractControl
} from '@angular/common';
import { KnowledgeService } from '../../../services/knowledge';
import { Knowledge } from '../../../interface/knowledge';
import {Dialog} from 'primeng/primeng';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $:any
@Component({
    selector: 'sub-create',
    templateUrl: 'client/dev/app/components/back-end/knowledge/templates/sub-knowledge-create.html',
    directives: [FORM_DIRECTIVES,Dialog,PrivateChatComponent]
})
export class CreateSubCategoryComponent {
    @Input('kId') kId: string;
    @Input() knowledges: Knowledge[];
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
                for(var i=0;i<this.knowledges.length;i++){
                    var a = this.knowledges[i]["subCategory"];
                    console.log(a);
                    if(this.knowledges[i]._id===knowledge.parent){
                        a.push(knowledge);
                        this.knowledges[i]["subCategory"]=a;
                    }
                }
            }
        );
    }
}