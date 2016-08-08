/**
 * Created by Duc Duong on 7/12/2016.
 */
import {
    Component,
    OnInit,
    ElementRef
} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import {ArticleService} from '../../../services/article';
import {TagService} from '../../../services/tag';
import { AuthService } from '../../../services/auth';
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
    selector: 'create-article',
    templateUrl: 'client/dev/app/components/front-end/article/templates/create-article.html',
    styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
    directives: [CKEditor, AutoComplete,ROUTER_DIRECTIVES],
    providers: [ArticleService, TagService]
})

export class CreateArticleComponent implements OnInit {
    filesToUpload:Array<File>;
    contentCk:string="";
    titelArticle:string="";
    status:string;


    filteredKnw:string[];

    tags:any[]=[];
    tagsEx:Array<any> =[];

    userToken: string;
    roleToken: string;

    constructor(private _articleService:ArticleService, private _tagService:TagService, public router:Router,private route: ActivatedRoute) {
        this.filesToUpload = [];
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }

    ngOnInit() {
        if(this.userToken==null){
            this.router.navigateByUrl('/');
        }
        this.CreateUploadImageCkeditor();
        this.CreateYoutubeBtnCkeditor();
        this.addCommandBtnCk();
        this.loadAllTags();
    }

    filterONTag() {
        let oldTag: any[]=[];
        for (let e of this.tagsEx) {
            for (let e1 of this.tags) {
                //catch old tags
                if (e.name == e1) {
                    oldTag.push(e._id);
                    //find out old tags in data tags user
                    let index = this.tags.indexOf(e1);
                    if(index>-1){
                        //remove old tags to catch new tags
                        this.tags.splice(index,1);
                    }
                }
            }
        }
        return [oldTag,this.tags];
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

    //load all knowledge
    loadAllTags() {
        this._tagService.getAllTag().subscribe((tags) => {
            this.tagsEx = tags;
        });
    }


    // ckeditor

    insertLinkToBox(link:string) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    }
    insertYoutubeToBox(link:string){
        //https://www.youtube.com/watch?v=mraul5-1TBE
        let i = link.indexOf("=");
        link = link.substring(i+1,link.length);
        let s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/'+link+'" width="500"></iframe></p>';
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


    postArticle(stt:any) {
        this.contentCk = CKEDITOR.instances.editor1.getData();
        let tags:any[]=[];
        tags = this.filterONTag();
        this._articleService.addArticle(this.titelArticle, this.contentCk,tags[0],tags[1],stt,this.userToken).subscribe((article)=> {
                this.router.navigateByUrl('/article/'+article._id);
            },
            (error) => {
                console.log(error.text());
            }
        );
    }
}
