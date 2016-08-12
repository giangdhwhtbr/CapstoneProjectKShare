/**
 * Created by Duc Duong on 7/25/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tag_1 = require('../../../services/tag');
var displayArtByTagComponent = (function () {
    function displayArtByTagComponent(router, route, _tagService) {
        this.router = router;
        this.route = route;
        this._tagService = _tagService;
    }
    displayArtByTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this._tagService.getArtByTag(_this.id).subscribe(function (arts) {
                _this.listArt = arts;
            });
        });
    };
    displayArtByTagComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    displayArtByTagComponent = __decorate([
        core_1.Component({
            selector: 'list-article-by-tag',
            templateUrl: 'client/dev/app/components/front-end/tag/templates/display-article-by-tag.html',
            styleUrls: ['client/dev/app/components/front-end/tag/styles/tag.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [tag_1.TagService]
        })
    ], displayArtByTagComponent);
    return displayArtByTagComponent;
})();
exports.displayArtByTagComponent = displayArtByTagComponent;
//# sourceMappingURL=displayArtByTag.js.map