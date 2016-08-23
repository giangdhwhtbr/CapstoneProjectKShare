/**
 * Created by Duc Duong on 7/25/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tag_1 = require('../../../services/tag');
var tag_2 = require('../tag/tag');
var ng2_pagination_1 = require('ng2-pagination');
var displayArtByTagComponent = (function () {
    function displayArtByTagComponent(router, route, _tagService) {
        this.router = router;
        this.route = route;
        this._tagService = _tagService;
        this.listReq = [];
        this.listArt = [];
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'req',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.maxSizeArt = 7;
        this.directionLinksArt = true;
        this.autoHideArt = false;
        this.configArt = {
            id: 'art',
            itemsPerPage: 10,
            currentPage: 1
        };
    }
    displayArtByTagComponent.prototype.onPageChange = function (number) {
        this.config.currentPage = number;
    };
    displayArtByTagComponent.prototype.onPageChangeArt = function (number) {
        this.configArt.currentPage = number;
    };
    displayArtByTagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this._tagService.getArtByTag(_this.id).subscribe(function (arts) {
                _this._tagService.getReqByTag(_this.id).subscribe(function (reqs) {
                    _this.listReq = reqs;
                    _this.listArt = arts;
                });
            });
        });
        $('ul.tabs').tabs();
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
                router_1.ROUTER_DIRECTIVES, tag_2.listTagComponent, ng2_pagination_1.PaginationControlsCmp
            ],
            providers: [tag_1.TagService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, tag_1.TagService])
    ], displayArtByTagComponent);
    return displayArtByTagComponent;
})();
exports.displayArtByTagComponent = displayArtByTagComponent;
//# sourceMappingURL=displayArtByTag.js.map