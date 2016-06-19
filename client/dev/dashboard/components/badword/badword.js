"use strict";
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
var nav_bar_1 = require('../../components/shared/nav-bar');
var sidebar_1 = require('../../components/shared/sidebar');
var badwords_list_1 = require('../../components/badword/badwords-list');
var badword_create_1 = require('../../components/badword/badword-create');
var badword_update_1 = require('../../components/badword/badword-update');
var badwords_service_1 = require('../../services/badwords-service');
var BadwordComponent = (function () {
    function BadwordComponent() {
    }
    BadwordComponent = __decorate([
        core_1.Component({
            selector: 'badword-mgn',
            templateUrl: 'client/dev/dashboard/templates/badword/badword.html',
            directives: [badwords_list_1.BadwordListComponent, badword_update_1.UpdateBadwordComponent, badword_create_1.CreateBadwordComponent, nav_bar_1.NavbarComponent, sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES],
            providers: [badwords_service_1.BadwordService],
        }), 
        __metadata('design:paramtypes', [])
    ], BadwordComponent);
    return BadwordComponent;
}());
exports.BadwordComponent = BadwordComponent;
//# sourceMappingURL=badword.js.map
