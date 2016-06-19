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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
//services
var badword_1 = require('../../../services/badword');
var UpdateBadwordComponent = (function () {
    function UpdateBadwordComponent(fb, _badwordService, router, rParam) {
        this._badwordService = _badwordService;
        this.router = router;
        this.id = rParam.getParam('id');
        this.updateBadwordForm = fb.group({
            "word": [""],
            "_id": [""],
        });
    }
    UpdateBadwordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._badwordService.findBadwordById(this.id).subscribe(function (badword) {
            _this.badword = badword;
            _this.word = badword.word;
            _this._id = badword._id;
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateBadwordComponent.prototype.updateBadword = function (badword) {
        this._badwordService.updateBadword(badword).subscribe(function (badword) {
            console.log('update successed');
        }, function (error) {
            console.log(error.text());
        });
        window.location.href = 'admin/badwords';
    };
    UpdateBadwordComponent = __decorate([
        core_1.Component({
            selector: 'badword-update',
            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-update.html',
            styleUrls: ['client/dev/app/components/back-end/badword/styles/badword.css'],
            directives: [
                common_1.FORM_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [badword_1.BadwordService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(badword_1.BadwordService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, badword_1.BadwordService, router_1.Router, router_1.RouteSegment])
    ], UpdateBadwordComponent);
    return UpdateBadwordComponent;
}());
exports.UpdateBadwordComponent = UpdateBadwordComponent;
