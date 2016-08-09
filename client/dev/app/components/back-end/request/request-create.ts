import { Component, Inject, OnInit,ElementRef } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { KnowledgeService } from '../../../services/knowledge';
import { RequestService} from '../../../services/requests';
import { Knowledge } from '../../../interface/knowledge';
import { AuthService} from '../../../services/auth';
import {TagService} from '../../../services/tag';
import {AutoComplete,SelectButton,SelectItem} from 'primeng/primeng';

declare var $ :any;

@Component({
    selector: 'ck-editor',
    template: ``
})
class CKEditor {
    constructor(_elm:ElementRef) {
        CKEDITOR.replace(_elm.nativeElement);
    }
}

@Component({
    selector: 'request-create',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
    styleUrls: ['client/dev/app/components/bac  k-end/request/templates/request.css'],
    directives: [FORM_DIRECTIVES, AutoComplete, CKEditor],
    providers: [TagService]
})
export class CreateRequestComponent {

    user:string;
    roleToken:string;
    requestForm:ControlGroup;

    knowledges:Knowledge[];

    filteredKnw:string[];

    tags:any[]=[];
    tagsEx:Array<any>;

    contentCk:string;
    filesToUpload:Array<File>;

    constructor(private _tagService:TagService, @Inject(FormBuilder) fb:FormBuilder, @Inject(RequestService) private _requestService:RequestService, private _knowledgeService:KnowledgeService,
                private _authService:AuthService, public router:Router) {
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');

        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
        });
    }

    ngOnInit():void {
        this.CreateUploadImageCkeditor();
        this.CreateYoutubeBtnCkeditor();
        this.addCommandBtnCk();
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
            this.loadAllTags();
            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);

        });
    }

    filterONTag() {
        let oldTag:any[] = [];
        if(this.tags){
            for (let e of this.tagsEx) {
                for (let e1 of this.tags) {
                    //catch old tags
                    if (e.name == e1) {
                        oldTag.push(e._id);
                        //find out old tags in data tags user
                        let index = this.tags.indexOf(e1);
                        if (index > -1) {
                            //remove old tags to catch new tags
                            this.tags.splice(index, 1);
                        }
                    }
                }
            }
        }

        return [oldTag, this.tags];
    }

    filterKnw(event) {
        let query = event.query;
        this.filteredKnw = [];
        for (let i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if(this.filteredKnw.indexOf(query.trim())<0){
                this.filteredKnw.unshift(query.trim());
            }
        }
    }

    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
            console.log(this.tagsEx);
        });
    }

    addRequest(request) {
        let tags:any[] = [];
        tags = this.filterONTag();

        this.contentCk = CKEDITOR.instances.editor1.getData();

        this._requestService.addRequest(request, this.contentCk, tags[0], tags[1]).subscribe((request)=> {

                this.router.navigateByUrl('/requests/' + request._id + '/info');
            },
            (error) => {
                console.log(error.text());
            }
        );
    }

    // ckeditor

    insertLinkToBox(link:string) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    }

    insertYoutubeToBox(link:string) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        let i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        let s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    }

    addCommandBtnCk() {
        CKEDITOR.instances.editor1.addCommand('uploadImage', {exec: this.openModalImg});
        CKEDITOR.instances.editor1.addCommand('youtube', {exec: this.openModalYoutube});
    }

    openModalImg() {
        $("#bdOpenModal").trigger("click");
    }

    openModalYoutube() {
        $("#youtubeOpenModal").trigger("click");
    }

    CreateUploadImageCkeditor() {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage',
            {
                label: 'Upload Image',
                command: 'uploadImage',
                icon: '/client/dev/asserts/images/icon-img-ck.png'
            });
    }

    CreateYoutubeBtnCkeditor() {
        CKEDITOR.instances.editor1.ui.addButton('youtube',
            {
                label: 'Add youtube',
                command: 'youtube',
                icon: '/client/dev/asserts/images/icon-youtube.png'
            });
    }

    makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
        return new Promise((resolve, reject) => {
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    // uploading image
    uploadImageCk() {
        if (this.filesToUpload) {
            this.makeFileRequest("/api/media", [], this.filesToUpload).then((result) => {
                var link = '/uploads/' + result[0].filename;
                CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" style="height:536px; width:858px" /></p>');
            }, (error) => {
                console.error(error);
            });
        }
    }

    //action button upload
    fileChangeEvent(fileInput:any) {
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    //finish control Ckeditor

}
