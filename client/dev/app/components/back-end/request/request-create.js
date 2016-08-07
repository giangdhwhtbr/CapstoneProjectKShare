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
var knowledge_1 = require('../../../services/knowledge');
var requests_1 = require('../../../services/requests');
var auth_1 = require('../../../services/auth');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var CreateRequestComponent = (function () {
    function CreateRequestComponent(_tagService, fb, _requestService, _knowledgeService, _authService) {
        this._tagService = _tagService;
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._authService = _authService;
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
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.loadAllTags();
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    };
    CreateRequestComponent.prototype.filterONTag = function () {
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
    CreateRequestComponent.prototype.filterKnw = function (event) {
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
    CreateRequestComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
            console.log(_this.tagsEx);
        });
    };
    CreateRequestComponent.prototype.addRequest = function (request) {
        var tags = [];
        tags = this.filterONTag();
        this._requestService.addRequest(request, tags[0], tags[1]).subscribe(function (request) {
            console.log(request);
        }, function (error) {
            console.log(error.text());
        });
        window.location.reload();
    };
    CreateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-create',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
            styleUrls: ['client/dev/app/components/bac  k-end/request/templates/request.css'],
            directives: [common_1.FORM_DIRECTIVES, primeng_1.AutoComplete],
            providers: [tag_1.TagService]
        }),
        __param(1, core_1.Inject(common_1.FormBuilder)),
        __param(2, core_1.Inject(requests_1.RequestService)), 
        __metadata('design:paramtypes', [tag_1.TagService, common_1.FormBuilder, requests_1.RequestService, knowledge_1.KnowledgeService, auth_1.AuthService])
    ], CreateRequestComponent);
    return CreateRequestComponent;
})();
exports.CreateRequestComponent = CreateRequestComponent;
//# sourceMappingURL=request-create.js.map