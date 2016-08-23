import {
    Component,
    OnInit,Input,ElementRef,Output
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
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';
import { Knowledge } from '../../../interface/knowledge';
import { Request } from '../../../interface/request';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService } from '../../../services/requests';
import { UpdateKnowledgeComponent } from './knowledge-update';
import { CreateSubCategoryComponent } from './sub-knowledge-create';
import { AuthService} from '../../../services/auth';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
import {TreeTable} from 'primeng/primeng';
import {TreeNode} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $:any
@Component({
    selector: 'knowledge-list',
    templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
    directives: [
        UpdateKnowledgeComponent,
        CreateSubCategoryComponent,
        ROUTER_DIRECTIVES, PaginationControlsCmp,DataTable,Column,Header,Footer,TreeTable,Dialog,PrivateChatComponent],
    providers: [KnowledgeService, PaginationService],
    pipes: [PaginatePipe, StringFilterPipe]
})
export class KnowledgeListComponent {
    pageTitle:string = 'Knowledge List';
    errorMessage:string;
    knowledgeForm:ControlGroup;
    subCategoryForm:ControlGroup;
    knowledges:Knowledge[];
    knowledgeAdmin:TreeNode[];
    requests:Request[];
    displayDialog=false;
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
    }
    ngOnInit():void {
        this.getAllKnowledgesForAdmin();
        $(document).ready(function() {
            $('.collapsible').collapsible();
        });
    }
    openModal(id:string):void{
        console.log(id);
        $("#"+id).openModal();
    }
    action(data:any):void{
        this.knowledges=data;
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
                this.getAll();
                (<Control>this.knowledgeForm.controls["name"]).updateValue("");
                (<Control>this.knowledgeForm.controls["description"]).updateValue("");
            });
    }
    changeKnowledgeStatus(id):void {
        this._knowledgeService
            .changeKnowledgeStatus(id)
            .subscribe((response)=>{
                this.getAllKnowledgesForAdmin();
            });
    }
    getAll():void {
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.knowledges = this._knowledgeService.getChildFromParentAdmin(knowledges);
            for(var i = 0;i<this.knowledges.length;i++){
                this.knowledges[i]["num"]=i+1;
            }
        });
    }
    hide():void {
        $(".collapse").collapse("hide");
    }
    getAllKnowledgesForAdmin():void{
        this._knowledgeService
            .getAllKnowledgesForAdmin()
            .then(knowledge =>{
                this.knowledgeAdmin = knowledge;
                for(var i =0;i<this.knowledgeAdmin.length;i++){
                    this.knowledgeAdmin[i].data["num"]=i+1;
                }
                console.log(this.knowledgeAdmin);
            } );
    }
    showDialogToAdd() {
        this.displayDialog = true;
    }
}
