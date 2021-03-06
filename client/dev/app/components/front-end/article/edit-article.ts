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
import { PrivateChatComponent } from './../../shared/private-chat';

declare var $:any;
declare var CKEDITOR:any;
declare var Materialize:any;

@Component({
    selector: 'ck-editor',
    template: ``
})

class CKEditor implements OnInit,AfterViewChecked {

    art:any;
    id:string;

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
    directives: [CKEditor, AutoComplete, ROUTER_DIRECTIVES, PrivateChatComponent],
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

    stt:string = "public";

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

            if (art.author != this.userToken && (this.roleToken != "admin"||this.roleToken != 'mod')) {
                this.isEdited = false;
            } else {
                this.art = art;
                this.stt = art.status;
                this.titelArticle = art.title;
                for (let e of this.art.tagsFD) {
                    this.tags.push(e.name);
                }
                this.CreateUploadImageCkeditor();
                this.CreateYoutubeBtnCkeditor();
                this.addCommandBtnCk();
                this.loadAllTags();

                $('#preLoad').hide();
                $('.collapsible').collapsible({});
            }

        }, (error)=> {
            if (error.status == 400) {
                window.location.href = "/error";
            }
        });

    }

    ngAfterViewChecked() {
    }

    filterONTag() {
        let oldTag:any[] = [];
        if (this.tags.length > 0) {
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
            console.log(this.tagsEx);
        });
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

    openModalImg() {
        $('#ModalUploadImgCkeditor').openModal();
    }

    openModalYoutube() {
        $('#ModalYTCkeditor').openModal();
    }

    editArticle() {
        this.art.content = CKEDITOR.instances.editor1.getData();
        let tags:any[] = [];
        tags = this.filterONTag();
        this.art.tags = tags[0];
        this.art.title = this.titelArticle;
        this.art.status = this.stt;
        if (this.titelArticle.length < 5 || this.titelArticle.length > 220) {
            Materialize.toast('Tiêu đề quá ngắn hoặc quá dài', 4000);
        } else if (this.art.content.length < 50) {
            Materialize.toast('Nội dung phải trên 50 ký tự', 4000);
        } else {
            $('#preLoad').show();
            this._articleService.updateArtById(this.art, tags[1], this.art._id).subscribe((article)=> {
                    Materialize.toast('Đã sửa xong', 4000);
                    this.router.navigateByUrl('/article/' + article._id);
                },
                (error) => {
                    $('#preLoad').hide();
                    if (error._body.includes('arrDe')) {
                        var arrayTags = error._body.replace("arrDe", "").replace(":", "").replace("}", "").replace("{", "").replace("]", "").replace("[", "").replace('"', '').replace('""', '').split(',');
                        let s = "";
                        for (let e of arrayTags) {
                            s += e;
                        }
                        Materialize.toast('Từ khoá ' + s + ' đã bị đóng', 10000);
                    }
                }
            );
        }
    }
}
