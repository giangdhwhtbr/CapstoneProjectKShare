/**
 * Created by Duc Duong on 7/26/2016.
 */
import {
    Component,
    OnInit,
    ElementRef,
    AfterViewChecked
} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import {ArticleService} from '../../../services/article';
import {TagService} from '../../../services/tag';
import {AutoComplete} from 'primeng/primeng';
import { AuthService } from '../../../services/auth';

import * as $ from 'jquery';

@Component({
    selector: 'ck-editor',
    template: ``
})

class CKEditor implements OnInit,AfterViewChecked {

    art:any;

    constructor(_elm:ElementRef, private _articleService:ArticleService, public router:Router, private route:ActivatedRoute) {
        CKEDITOR.replace(_elm.nativeElement);
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
    }

    ngOnInit() {
        this.getDataArt();
    }

    getDataArt() {
        this._articleService.getArtById(this.id).subscribe((art)=> {
            this.art = art;
            CKEDITOR.instances.editor1.setData(this.art.content + '');
        });
    }

}

@Component({
    selector: 'create-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/edit-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [CKEditor, AutoComplete, ROUTER_DIRECTIVES],
    providers: [ArticleService, TagService]
})

export class EditArticleComponent implements OnInit,AfterViewChecked {
    filesToUpload:Array<File>;
    contentCk:string;
    titelArticle:string;
    id:string;
    art:any;

    filteredKnw:string[];

    tags:any[];
    tagsEx:Array<any>;

    isEdited:boolean = true;

    roleToken:string;
    userToken:string;

    constructor(private _articleService:ArticleService, private _tagService:TagService, public router:Router, private route:ActivatedRoute) {
        this.filesToUpload = [];
        this.tags = [];
        this.route
            .params
            .subscribe(params => {
                this.id = params['id'];
            });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }

    ngOnInit() {
        this._articleService.getArtById(this.id).subscribe((art)=> {
            if (art.ofUser != this.userToken && this.roleToken!="admin") {
                this.isEdited = false;
            } else {
                this.art = art;
                this.titelArticle = art.title;
                for (let e of this.art.tagsFD) {
                    this.tags.push(e.name);
                }
                this.CreateUploadImageCkeditor();
                this.addCommandBtnCk();
                this.loadAllTags();

            }

        });

    }

    ngAfterViewChecked() {
    }

    filterONTag() {
        let oldTag :any[]=[];
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
        return [oldTag, this.tags];
    }


    filterKnw(event) {
        let query = event.query;
        this.filteredKnw = [];
        for (let i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if(i==this.tagsEx.length-1){
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    }

    //load all knowledge
    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
            console.log(this.tagsEx);
        });
    }

    insertLinkToBox(link:string) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    }

    // ckeditor
    addCommandBtnCk() {
        CKEDITOR.instances.editor1.addCommand('uploadImage', {exec: this.openModalImg});
    }

    CreateUploadImageCkeditor() {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage',
            {
                label: 'Upload Image',
                command: 'uploadImage',
                icon: '/client/dev/asserts/images/icon-img-ck.png'
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

    openModalImg() {
        $("#bdOpenModal").trigger("click");
    }

    editArticle(stt:string) {
        this.art.content = CKEDITOR.instances.editor1.getData();
        let tags = this.filterONTag();
        this.art.tags = tags[0];
        this.art.title = this.titelArticle;
        console.log(this.art.status);
        this.art.status = stt;
        console.log(this.art.status);
        this._articleService.updateArtById(this.art, tags[1], this.art._id).subscribe((article)=> {
                this.router.navigateByUrl('/article/' + article._id);
            },
            (error) => {
                console.log(error.text());
            }
        );
    }
}