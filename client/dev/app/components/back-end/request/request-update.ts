import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Request } from '../../../interface/request';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';
import { KnowledgeService } from '../../../services/knowledge';
import { TagService } from '../../../services/tag';
import {AutoComplete} from 'primeng/primeng';

import {PrivateChatComponent} from '../../shared/private-chat'

import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

import * as $ from 'jquery';

@Component({
    selector: 'ck-editor',
    template: ``
})

class CKEditor implements OnInit, AfterViewChecked {

    req: any;
    id: string;

    constructor(_elm: ElementRef, private _requestService: RequestService, public router: Router, private route: ActivatedRoute) {
        CKEDITOR.replace(_elm.nativeElement);
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
    }

    ngOnInit() {
        this._requestService.getRequestById(this.id).subscribe((request) => {
            this.req = request
            console.log(this.req);
            CKEDITOR.instances.editor1.setData(this.req.description + '');

            this.CreateUploadImageCkeditor();
            this.CreateYoutubeBtnCkeditor();
            this.addCommandBtnCk();
        });

    }

    ngAfterViewChecked(){
        if(!this.req){
            this._requestService.getRequestById(this.id).subscribe((request) => {
                this.req=request;
                CKEDITOR.instances.editor1.setData(this.req.description + '');

                this.CreateUploadImageCkeditor();
                this.CreateYoutubeBtnCkeditor();
                this.addCommandBtnCk();
            });
        }
    }

    openModalImg() {
        $("#bdOpenModal").trigger("click");
    }
    openModalYoutube() {
        $("#youtubeOpenModal").trigger("click");
    }

    insertLinkToBox(link: string) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    }

    insertYoutubeToBox(link: string) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        let i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        let s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    }

    addCommandBtnCk() {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
        CKEDITOR.instances.editor1.addCommand('youtube', { exec: this.openModalYoutube });
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


}

@Component({
    selector: 'request-update-cli',
    templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, AutoComplete, CKEditor,PrivateChatComponent],
    providers: [TagService]
})

export class UpdateRequestComponent {
    updateRequestFormCli: ControlGroup;

    knowledges: Knowledge[];

    id: string;

    request: Request;
    _id: string;
    title: string;
    description: string;
    knowledgeId: string;
    status: string;
    kname: string

    filteredKnw: string[];

    tags: any[];
    tagsEx: Array<any>;

    filesToUpload: Array<File>;
    contentCk: string;

    constructor( @Inject(FormBuilder) fb: FormBuilder,
        @Inject(RequestService) private _requestService: RequestService,
        public router: Router,
        private route: ActivatedRoute,
        private _tagService: TagService,
        @Inject(KnowledgeService)
        private _knowledgeService: KnowledgeService) {

        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });

        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""],
            "status": [""]
        });
    }

    ngOnInit(): void {
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {


            this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
            this._requestService.getRequestById(this.id).subscribe(
                (request) => {
                    this._knowledgeService.findKnowledgeById(request.knowledgeId).subscribe((knowledge)=>{
                        this.kname = knowledge.name;
                        this.knowledgeId = knowledge._id;
                    });
                    let ids: string[] = [];
                    ids = request.tags;

                    this._tagService.getTagsByIds(ids).subscribe((tags) => {

                        this.request = request;
                        this.title = request.title;
                        this.description = request.description;
                        this._id = request._id;
                        this.status = request.status;

                        let nameArr:string[] = [];
                        for (let e of tags) {
                            nameArr.push(e.name);
                        }
                        this.tags = nameArr;

                        this.loadAllTags();

                    });
                },
                (error) => {
                    console.log(error.text());
                }
            );
        });




    }

    filterONTag() {
        let oldTag: any[] = [];
        if(this.tags.length>0){
            for (let e of this.tagsEx) {
                for (let e1 of this.tags) {
                    if (e.name == e1) {
                        oldTag.push(e._id);
                        let index = this.tags.indexOf(e1);
                        if (index > -1) {
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
            if (this.filteredKnw.indexOf(query.trim()) < 0) {
                this.filteredKnw.unshift(query.trim());
            }
        }
    }

    //load all knowledge
    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
        });
    }

    // ckeditor


    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
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
    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

    updateRequest(request) {
        let tags: any[] = [];
        tags = this.filterONTag();
        request.description=CKEDITOR.instances.editor1.getData();
        this._requestService.updateRequest(request, tags[0], tags[1]).subscribe((request) => {
            this.router.navigateByUrl('/requests/' + request._id + '/info');
        },
            (error) => {
                console.log(error.text());
            }
        );
    }

}
