var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var knowledge_1 = require('../../../services/knowledge');
var requests_1 = require('../../../services/requests');
var auth_1 = require('../../../services/auth');
var tag_1 = require('../../../services/tag');
var private_chat_1 = require('./../../shared/private-chat');
var primeng_1 = require('primeng/primeng');
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
var CreateRequestComponent = (function () {
    function CreateRequestComponent(_tagService, fb, _requestService, _knowledgeService, _authService, router) {
        this._tagService = _tagService;
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._authService = _authService;
        this.router = router;
        this.check = true;
        this.tags = [];
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
        });
    }
    CreateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CreateUploadImageCkeditor();
        this.CreateYoutubeBtnCkeditor();
        this.addCommandBtnCk();
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.loadAllTags();
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
        $('.modal-trigger').leanModal();
        $('select').material_select();
        $('.collapsible').collapsible();
    };
    CreateRequestComponent.prototype.filterONTag = function () {
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
    CreateRequestComponent.prototype.filterKnw = function (event) {
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
    CreateRequestComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
            console.log(_this.tagsEx);
        });
    };
    CreateRequestComponent.prototype.addRequest = function (request) {
        var _this = this;
        var tags = [];
        tags = this.filterONTag();
        this.contentCk = CKEDITOR.instances.editor1.getData();
        if (this.check == true) {
            this._requestService.addRequest(request, this.contentCk, tags[0], tags[1]).subscribe(function (request) {
                _this.check = false;
                _this.router.navigateByUrl('/requests/' + request._id + '/info');
            }, function (error) {
                console.log(error.text());
            });
        }
    };
    // ckeditor
    CreateRequestComponent.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    CreateRequestComponent.prototype.insertYoutubeToBox = function (link) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        var i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        var s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    };
    CreateRequestComponent.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
        CKEDITOR.instances.editor1.addCommand('youtube', { exec: this.openModalYoutube });
    };
    CreateRequestComponent.prototype.openModalImg = function () {
        $("#bdOpenModal").trigger("click");
    };
    CreateRequestComponent.prototype.openModalYoutube = function () {
        $("#youtubeOpenModal").trigger("click");
    };
    CreateRequestComponent.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    CreateRequestComponent.prototype.CreateYoutubeBtnCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('youtube', {
            label: 'Add youtube',
            command: 'youtube',
            icon: '/client/dev/asserts/images/icon-youtube.png'
        });
    };
    CreateRequestComponent.prototype.makeFileRequest = function (url, params, files) {
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
    CreateRequestComponent.prototype.uploadImageCk = function () {
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
    CreateRequestComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-create',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
            styleUrls: ['client/dev/app/components/bac  k-end/request/templates/request.css'],
            directives: [common_1.FORM_DIRECTIVES, primeng_1.AutoComplete, CKEditor, private_chat_1.PrivateChatComponent],
            providers: [tag_1.TagService]
        }),
        __param(1, core_1.Inject(common_1.FormBuilder)),
        __param(2, core_1.Inject(requests_1.RequestService)), 
        __metadata('design:paramtypes', [tag_1.TagService, common_1.FormBuilder, requests_1.RequestService, knowledge_1.KnowledgeService, auth_1.AuthService, router_1.Router])
    ], CreateRequestComponent);
    return CreateRequestComponent;
})();
exports.CreateRequestComponent = CreateRequestComponent;
//# sourceMappingURL=request-create.js.map