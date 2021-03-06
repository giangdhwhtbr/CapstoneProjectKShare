var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Duc Duong on 7/12/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('./../../shared/private-chat');
var CKEditor = (function () {
    function CKEditor(_elm) {
        CKEDITOR.replace(_elm.nativeElement);
    }
    CKEditor = __decorate([
        core_1.Component({
            selector: 'ck-editor',
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CKEditor);
    return CKEditor;
})();
var CreateArticleComponent = (function () {
    function CreateArticleComponent(_articleService, _tagService, router, route) {
        this._articleService = _articleService;
        this._tagService = _tagService;
        this.router = router;
        this.route = route;
        this.contentCk = "";
        this.titelArticle = "";
        this.tags = [];
        this.tagsEx = [];
        this.filesToUpload = [];
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        if (this.userToken == null) {
            this.router.navigateByUrl('/');
        }
        this.CreateUploadImageCkeditor();
        this.CreateYoutubeBtnCkeditor();
        this.addCommandBtnCk();
        this.loadAllTags();
    };
    CreateArticleComponent.prototype.ngOnDestroy = function () {
        CKEDITOR.instances.editor1.destroy();
    };
    CreateArticleComponent.prototype.filterONTag = function () {
        var oldTag = [];
        if (this.tags.length > 0) {
            for (var _i = 0, _a = this.tagsEx; _i < _a.length; _i++) {
                var e = _a[_i];
                for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
                    var e1 = _c[_b];
                    //catch old tags
                    if (e.name == e1) {
                        oldTag.push(e._id);
                        //find out old tags in data tags user
                        var index = this.tags.indexOf(e1);
                        if (index > -1) {
                            //remove old tags to catch new tags
                            this.tags.splice(index, 1);
                        }
                    }
                }
            }
        }
        return [oldTag, this.tags];
    };
    CreateArticleComponent.prototype.filterKnw = function (event) {
        var query = event.query;
        this.filteredKnw = [];
        for (var i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (this.filteredKnw.indexOf(query.trim()) < 0) {
                this.filteredKnw.unshift(query.trim());
            }
        }
    };
    //load all knowledge
    CreateArticleComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
            $('#preLoad').hide();
        });
    };
    // ckeditor
    CreateArticleComponent.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    CreateArticleComponent.prototype.insertYoutubeToBox = function (link) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        var i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        var s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    };
    CreateArticleComponent.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
        CKEDITOR.instances.editor1.addCommand('youtube', { exec: this.openModalYoutube });
    };
    CreateArticleComponent.prototype.openModalImg = function () {
        $('#ModalUploadImgCkeditor').openModal();
    };
    CreateArticleComponent.prototype.openModalYoutube = function () {
        $('#ModalYTCkeditor').openModal();
    };
    CreateArticleComponent.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    CreateArticleComponent.prototype.CreateYoutubeBtnCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('youtube', {
            label: 'Add youtube',
            command: 'youtube',
            icon: '/client/dev/asserts/images/icon-youtube.png'
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
    //finish control Ckeditor
    CreateArticleComponent.prototype.postArticle = function (stt) {
        var _this = this;
        this.contentCk = CKEDITOR.instances.editor1.getData();
        var tags = [];
        tags = this.filterONTag();
        if (this.titelArticle.length < 5 || this.titelArticle.length > 220) {
            Materialize.toast('Tiêu đề quá ngắn hoặc quá dài', 4000);
        }
        else if (this.contentCk.length < 50) {
            Materialize.toast('Nội dung bài viết phải trên 50 ký tự', 4000);
        }
        else {
            $('#preLoad').show();
            this._articleService.addArticle(this.titelArticle, this.contentCk, tags[0], tags[1], stt, this.userToken).subscribe(function (articleId) {
                _this.router.navigateByUrl('/article/' + articleId);
            }, function (error) {
                $('#preLoad').hide();
                if (error._body.includes('arrDe')) {
                    var arrayTags = error._body.replace("arrDe", "").replace(":", "").replace("}", "").replace("{", "").replace("]", "").replace("[", "").replace('"', '').replace('""', '').split(',');
                    var s = "";
                    for (var _i = 0; _i < arrayTags.length; _i++) {
                        var e = arrayTags[_i];
                        s += e;
                    }
                    Materialize.toast('Từ khoá ' + s + ' đã bị đóng', 10000);
                }
            });
        }
    };
    CreateArticleComponent = __decorate([
        core_1.Component({
            selector: 'create-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/create-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [CKEditor, primeng_1.AutoComplete, router_1.ROUTER_DIRECTIVES, private_chat_1.PrivateChatComponent],
            providers: [article_1.ArticleService, tag_1.TagService]
        }), 
        __metadata('design:paramtypes', [article_1.ArticleService, tag_1.TagService, router_1.Router, router_1.ActivatedRoute])
    ], CreateArticleComponent);
    return CreateArticleComponent;
})();
exports.CreateArticleComponent = CreateArticleComponent;
//# sourceMappingURL=create-article.js.map