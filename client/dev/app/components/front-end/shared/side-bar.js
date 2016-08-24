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
var knowledge_1 = require('../../../services/knowledge');
var router_2 = require('@angular/router');
var SideBarComponent = (function () {
    function SideBarComponent(_knowledgeService, router, route) {
        this._knowledgeService = _knowledgeService;
        this.router = router;
        this.route = route;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            var parent = [];
            var subCate = [];
            for (var i = 0; i < knowledges.length; i++) {
                if (!knowledges[i].hasOwnProperty('parent') && knowledges[i].status == true) {
                    parent.push(knowledges[i]);
                }
            }
            for (var i = 0; i < parent.length; i++) {
                for (var j = 0; j < knowledges.length; j++) {
                    if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id) && (knowledges[j].status == true)) {
                        subCate.push(knowledges[j]);
                    }
                }
                parent[i]["subCategory"] = subCate;
                subCate = [];
            }
            knowledges = parent;
            _this.knowledges = parent;
        });
        $('.collapsible').collapsible({
            accordion: true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
    };
    SideBarComponent.prototype.ngAfterViewChecked = function () {
        $('#sidenav-overlay').remove();
        $('.drag-target').remove();
    };
    SideBarComponent.prototype.closeNav = function () {
        $('.btnOpenNavF').sideNav({ closeOnClick: "true" });
    };
    SideBarComponent.prototype.backHome = function () {
        this.router.navigateByUrl('/');
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/side-bar.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/side-bar.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [knowledge_1.KnowledgeService, router_1.Router, router_2.ActivatedRoute])
    ], SideBarComponent);
    return SideBarComponent;
})();
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=side-bar.js.map