var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var requests_1 = require('../../../services/requests');
var knowledge_1 = require('../../../services/knowledge');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var $ = require('jquery');
var CKEditor = (function () {
    function CKEditor(_elm, _requestService, router, route) {
        var _this = this;
        this._requestService = _requestService;
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
        var _this = this;
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            _this.req = request;
            console.log(_this.req);
            CKEDITOR.instances.editor1.setData(_this.req.description + '');
            _this.CreateUploadImageCkeditor();
            _this.CreateYoutubeBtnCkeditor();
            _this.addCommandBtnCk();
        });
    };
    CKEditor.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.req) {
            this._requestService.getRequestById(this.id).subscribe(function (request) {
                _this.req = request;
                CKEDITOR.instances.editor1.setData(_this.req.description + '');
                _this.CreateUploadImageCkeditor();
                _this.CreateYoutubeBtnCkeditor();
                _this.addCommandBtnCk();
            });
        }
    };
    CKEditor.prototype.openModalImg = function () {
        $("#bdOpenModal").trigger("click");
    };
    CKEditor.prototype.openModalYoutube = function () {
        $("#youtubeOpenModal").trigger("click");
    };
    CKEditor.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    CKEditor.prototype.insertYoutubeToBox = function (link) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        var i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        var s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    };
    CKEditor.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
        CKEDITOR.instances.editor1.addCommand('youtube', { exec: this.openModalYoutube });
    };
    CKEditor.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    CKEditor.prototype.CreateYoutubeBtnCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('youtube', {
            label: 'Add youtube',
            command: 'youtube',
            icon: '/client/dev/asserts/images/icon-youtube.png'
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
var UpdateRequestComponent = (function () {
    function UpdateRequestComponent(fb, _requestService, router, route, _tagService, _knowledgeService) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this._tagService = _tagService;
        this._knowledgeService = _knowledgeService;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""],
            "status": [""]
        });
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
            _this._requestService.getRequestById(_this.id).subscribe(function (request) {
                _this._knowledgeService.findKnowledgeById(request.knowledgeId).subscribe(function (knowledge) {
                    _this.kname = knowledge.name;
                    _this.knowledgeId = knowledge._id;
                });
                var ids = [];
                ids = request.tags;
                _this._tagService.getTagsByIds(ids).subscribe(function (tags) {
                    _this.request = request;
                    _this.title = request.title;
                    _this.description = request.description;
                    _this._id = request._id;
                    _this.status = request.status;
                    var nameArr = [];
                    for (var _i = 0; _i < tags.length; _i++) {
                        var e = tags[_i];
                        nameArr.push(e.name);
                    }
                    _this.tags = nameArr;
                    _this.loadAllTags();
                });
            }, function (error) {
                console.log(error.text());
            });
        });
    };
    UpdateRequestComponent.prototype.filterONTag = function () {
        var oldTag = [];
        if (this.tags.length > 0) {
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
        }
        return [oldTag, this.tags];
    };
    UpdateRequestComponent.prototype.filterKnw = function (event) {
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
    UpdateRequestComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
        });
    };
    // ckeditor
    UpdateRequestComponent.prototype.makeFileRequest = function (url, params, files) {
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
    UpdateRequestComponent.prototype.uploadImageCk = function () {
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
    UpdateRequestComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UpdateRequestComponent.prototype.updateRequest = function (request) {
        var _this = this;
        var tags = [];
        tags = this.filterONTag();
        request.description = CKEDITOR.instances.editor1.getData();
        this._requestService.updateRequest(request, tags[0], tags[1]).subscribe(function (request) {
            _this.router.navigateByUrl('/requests/' + request._id + '/info');
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, primeng_1.AutoComplete, CKEditor, private_chat_1.PrivateChatComponent],
            providers: [tag_1.TagService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)),
        __param(5, core_1.Inject(knowledge_1.KnowledgeService))
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
})();
exports.UpdateRequestComponent = UpdateRequestComponent;
//# sourceMappingURL=request-update.js.map