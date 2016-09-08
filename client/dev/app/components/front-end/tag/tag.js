var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
        core_1.Input()
    ], listTagComponent.prototype, "listTagId");
    listTagComponent = __decorate([
        core_1.Component({
            selector: 'tags',
            templateUrl: 'client/dev/app/components/front-end/tag/templates/tag.html',
            styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [tag_1.TagService]
        })
    ], listTagComponent);
    return listTagComponent;
})();
exports.listTagComponent = listTagComponent;
//# sourceMappingURL=tag.js.map