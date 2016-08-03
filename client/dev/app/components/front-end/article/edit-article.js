var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 7/26/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var $ = require('jquery');
var CKEditor = (function () {
    function CKEditor(_elm, _articleService, router, route) {
        var _this = this;
        this._articleService = _articleService;
        this.router = router;
        this.route = route;
        CKEDITOR.replace(_elm.nativeElement);
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    CKEditor.prototype.ngOnInit = function () {
        this.getDataArt();
    };
    CKEditor.prototype.getDataArt = function () {
        var _this = this;
        this._articleService.getArtById(this.id).subscribe(function (art) {
            _this.art = art;
            CKEDITOR.instances.editor1.setData(_this.art.content + '');
        });
    };
    CKEditor = __decorate([
        core_1.Component({
            selector: 'ck-editor',
            template: ""
        })
    ], CKEditor);
    return CKEditor;
})();
var EditArticleComponent = (function () {
    function EditArticleComponent(_articleService, _tagService, router, route) {
        var _this = this;
        this._articleService = _articleService;
        this._tagService = _tagService;
        this.router = router;
        this.route = route;
        this.isEdited = true;
        this.filesToUpload = [];
        this.tags = [];
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articleService.getArtById(this.id).subscribe(function (art) {
            if (art.ofUser != _this.userToken && _this.roleToken != "admin") {
                _this.isEdited = false;
            }
            else {
                _this.art = art;
                _this.titelArticle = art.title;
                for (var _i = 0, _a = _this.art.tagsFD; _i < _a.length; _i++) {
                    var e = _a[_i];
                    _this.tags.push(e.name);
                }
                _this.CreateUploadImageCkeditor();
                _this.addCommandBtnCk();
                _this.loadAllTags();
            }
        });
    };
    EditArticleComponent.prototype.ngAfterViewChecked = function () {
    };
    EditArticleComponent.prototype.filterONTag = function () {
        var oldTag = [];
        for (var _i = 0, _a = this.tagsEx; _i < _a.length; _i++) {
            var e = _a[_i];
            for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
                var e1 = _c[_b];
                if (e.name == e1) {
                    oldTag.push(e._id);
                    var index = this.tags.indexOf(e1);
                    if (index > -1) {
                        this.tags.splice(index, 1);
                    }
                }
            }
        }
        return [oldTag, this.tags];
    };
    EditArticleComponent.prototype.filterKnw = function (event) {
        var query = event.query;
        this.filteredKnw = [];
        for (var i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (i == this.tagsEx.length - 1) {
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    };
    //load all knowledge
    EditArticleComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
            console.log(_this.tagsEx);
        });
    };
    EditArticleComponent.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    // ckeditor
    EditArticleComponent.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
    };
    EditArticleComponent.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    EditArticleComponent.prototype.makeFileRequest = function (url, params, files) {
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
    EditArticleComponent.prototype.uploadImageCk = function () {
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
    EditArticleComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditArticleComponent.prototype.openModalImg = function () {
        $("#bdOpenModal").trigger("click");
    };
    EditArticleComponent.prototype.editArticle = function (stt) {
        var _this = this;
        this.art.content = CKEDITOR.instances.editor1.getData();
        var tags = this.filterONTag();
        this.art.tags = tags[0];
        this.art.title = this.titelArticle;
        console.log(this.art.status);
        this.art.status = stt;
        console.log(this.art.status);
        this._articleService.updateArtById(this.art, tags[1], this.art._id).subscribe(function (article) {
            _this.router.navigateByUrl('/article/' + article._id);
        }, function (error) {
            console.log(error.text());
        });
    };
    EditArticleComponent = __decorate([
        core_1.Component({
            selector: 'create-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/edit-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [CKEditor, primeng_1.AutoComplete, router_1.ROUTER_DIRECTIVES],
            providers: [article_1.ArticleService, tag_1.TagService]
        })
    ], EditArticleComponent);
    return EditArticleComponent;
})();
exports.EditArticleComponent = EditArticleComponent;
//# sourceMappingURL=edit-article.js.map