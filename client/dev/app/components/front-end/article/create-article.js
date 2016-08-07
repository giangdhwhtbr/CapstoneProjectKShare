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
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
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
    function CreateArticleComponent(_articleService, _tagService, router, route) {
        this._articleService = _articleService;
        this._tagService = _tagService;
        this.router = router;
        this.route = route;
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
    CreateArticleComponent.prototype.filterONTag = function () {
        var oldTag = [];
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
            console.log(_this.tagsEx);
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
        $("#bdOpenModal").trigger("click");
    };
    CreateArticleComponent.prototype.openModalYoutube = function () {
        $("#youtubeOpenModal").trigger("click");
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
        this._articleService.addArticle(this.titelArticle, this.contentCk, tags[0], tags[1], stt, this.userToken).subscribe(function (article) {
            _this.router.navigateByUrl('/article/' + article._id);
        }, function (error) {
            console.log(error.text());
        });
    };
    CreateArticleComponent = __decorate([
        core_1.Component({
            selector: 'create-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/create-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [CKEditor, primeng_1.AutoComplete, router_1.ROUTER_DIRECTIVES],
            providers: [article_1.ArticleService, tag_1.TagService]
        })
    ], CreateArticleComponent);
    return CreateArticleComponent;
})();
exports.CreateArticleComponent = CreateArticleComponent;
//# sourceMappingURL=create-article.js.map