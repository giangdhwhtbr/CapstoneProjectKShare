var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 7/12/2016.
 */
var core_1 = require('@angular/core');
var article_1 = require('../../../services/article');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var $ = require('jquery');
var CKEditor = (function () {
    function CKEditor(_elm) {
        CKEDITOR.replace(_elm.nativeElement);
    }
    CKEditor = __decorate([
        core_1.Component({
            selector: 'ck-editor',
            template: ""
        })
    ], CKEditor);
    return CKEditor;
})();
var CreateArticleComponent = (function () {
    function CreateArticleComponent(_articleService, _tagService) {
        this._articleService = _articleService;
        this._tagService = _tagService;
        this.filesToUpload = [];
        this.textCk = "";
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        this.CreateUploadImageCkeditor();
        this.addCommandBtnCk();
        this.loadAllKnw();
        console.log($('#ModalUploadImgCkeditor'));
    };
    CreateArticleComponent.prototype.filterKnwTag = function () {
    };
    CreateArticleComponent.prototype.show = function () {
        console.log(this.tags);
    };
    CreateArticleComponent.prototype.filterKnw = function (event) {
        var query = event.query;
        this.filteredKnw = [];
        for (var i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query);
        }
    };
    //load all knowledge
    CreateArticleComponent.prototype.loadAllKnw = function () {
        var _this = this;
        this._tagService.getAllTags().subscribe(function (tags) {
            _this.tagsEx = tags;
            console.log(_this.tagsEx);
        });
    };
    CreateArticleComponent.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    // ckeditor
    CreateArticleComponent.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
    };
    CreateArticleComponent.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    CreateArticleComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    // uploading image
    CreateArticleComponent.prototype.uploadImageCk = function () {
        if (this.filesToUpload) {
            this.makeFileRequest("/api/media", [], this.filesToUpload).then(function (result) {
                var link = '/uploads/' + result[0].filename;
                CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" style="height:536px; width:858px" /></p>');
            }, function (error) {
                console.error(error);
            });
        }
    };
    //action button upload
    CreateArticleComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateArticleComponent.prototype.openModalImg = function () {
        $("#bdOpenModal").trigger("click");
    };
    CreateArticleComponent.prototype.postArticle = function () {
        this.textCk = CKEDITOR.instances.editor1.getData();
        this.summary = CKEDITOR.instances.editor1.getSelection().root.$.innerText;
        this._articleService.addArticle(this.titelArticle, this.textCk).subscribe(function (article) {
            console.log(article);
        }, function (error) {
            console.log(error.text());
        });
    };
    CreateArticleComponent = __decorate([
        core_1.Component({
            selector: 'create-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/create-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/create-article.css'],
            directives: [CKEditor, primeng_1.AutoComplete],
            providers: [article_1.ArticleService, tag_1.TagService]
        })
    ], CreateArticleComponent);
    return CreateArticleComponent;
})();
exports.CreateArticleComponent = CreateArticleComponent;
//# sourceMappingURL=create-article.js.map