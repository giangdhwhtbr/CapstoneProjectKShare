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
var SideBarComponent = (function () {
    function SideBarComponent(_knowledgeService) {
        this._knowledgeService = _knowledgeService;
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
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/side-bar.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/side-bar.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], SideBarComponent);
    return SideBarComponent;
})();
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=side-bar.js.map