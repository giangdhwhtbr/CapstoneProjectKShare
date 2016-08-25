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
 * Created by Duc Duong on 8/15/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tag_1 = require('../../../services/tag');
var listTagComponent = (function () {
    function listTagComponent(router, route, _tagService) {
        this.router = router;
        this.route = route;
        this._tagService = _tagService;
    }
    listTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tagService.getTagsByIds(this.listTagId).subscribe(function (tags) {
            _this.tags = tags;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], listTagComponent.prototype, "listTagId", void 0);
    listTagComponent = __decorate([
        core_1.Component({
            selector: 'tags',
            templateUrl: 'client/dev/app/components/front-end/tag/templates/tag.html',
            styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [tag_1.TagService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, tag_1.TagService])
    ], listTagComponent);
    return listTagComponent;
})();
exports.listTagComponent = listTagComponent;
//# sourceMappingURL=tag.js.map