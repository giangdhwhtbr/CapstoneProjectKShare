/**
 * Created by Duc Duong on 7/12/2016.
 */
import {
  Component,
  OnInit,
  ElementRef
} from '@angular/core';

import {ArticleService} from '../../../services/article';
import {TagService} from '../../../services/tag';
import {AutoComplete} from 'primeng/primeng';

import * as $ from 'jquery';


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
  styleUrls: ['client/dev/app/components/front-end/article/styles/create-article.css'],
  directives: [CKEditor,AutoComplete],
  providers: [ArticleService,TagService]
})

export class CreateArticleComponent implements OnInit {
  filesToUpload:Array<File>;
  textCk:string;
  titelArticle:string;
  summary:string;


  filteredKnw: string[];

  tags:any[];
  tagsEx:Array<string>;

  constructor(private _articleService:ArticleService, private _tagService:TagService) {
    this.filesToUpload = [];
    this.textCk = "";
  }

  ngOnInit() {
    this.CreateUploadImageCkeditor();
    this.addCommandBtnCk();
    this.loadAllKnw();
    console.log($('#ModalUploadImgCkeditor'));
  }

  filterKnwTag(){

  }

  show(){
    console.log(this.tags);
  }


  filterKnw(event) {
    let query = event.query;
    this.filteredKnw=[];
    for(let i = 0 ; i < this.tagsEx.length;i++){
      if(this.tagsEx[i].name.includes(query.toLowerCase())){
        this.filteredKnw.push(this.tagsEx[i].name);
      }
    }
    if(this.filteredKnw.length==0){
      this.filteredKnw.push(query);
    }
  }

  //load all knowledge
  loadAllKnw() {
    this._tagService.getAllTags().subscribe((tags) => {
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

  postArticle() {
    this.textCk = CKEDITOR.instances.editor1.getData();

    this.summary = CKEDITOR.instances.editor1.getSelection().root.$.innerText;

    this._articleService.addArticle(this.titelArticle, this.textCk).subscribe((article)=> {
        console.log(article);
      },
      (error) => {
        console.log(error.text());
      }
    );
  }
}
