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
var requests_1 = require('../../../services/requests');
var knowledge_1 = require('../../../services/knowledge');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
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
            "knowledgeId": [""]
        });
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            var ids = [];
            ids = request.tags;
            _this._tagService.getTagsByIds(ids).subscribe(function (tags) {
                _this.request = request;
                _this.title = request.title;
                _this.description = request.description;
                _this._id = request._id;
                console.log(tags);
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
    };
    UpdateRequestComponent.prototype.filterONTag = function () {
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
    UpdateRequestComponent.prototype.filterKnw = function (event) {
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
    UpdateRequestComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
            console.log(_this.tagsEx);
        });
    };
    UpdateRequestComponent.prototype.updateRequest = function (request) {
        var tags = [];
        tags = this.filterONTag();
        console.log(request);
        //this._requestService.updateRequest(request, tags[0], tags[1]).subscribe((request) => {
        //        console.log('update successed');
        //    },
        //    (error) => {
        //        console.log(error.text());
        //    }
        //);
        // this.router.navigateByUrl('admin/requests');
    };
    UpdateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, primeng_1.AutoComplete],
            providers: [tag_1.TagService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)),
        __param(5, core_1.Inject(knowledge_1.KnowledgeService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_1.RequestService, router_1.Router, router_1.ActivatedRoute, tag_1.TagService, knowledge_1.KnowledgeService])
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
})();
exports.UpdateRequestComponent = UpdateRequestComponent;
//# sourceMappingURL=request-update.js.map