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
var common_1 = require('@angular/common');
var badwords_service_1 = require('../../services/badwords-service');
var CreateBadwordComponent = (function () {
    function CreateBadwordComponent(fb, _badwordService) {
        this._badwordService = _badwordService;
        this.badwords = [];
        this.badwordForm = fb.group({
            "word": [""],
        });
    }
    CreateBadwordComponent.prototype.addBadword = function (word) {
        var _this = this;
        this._badwordService
            .addBadword(word)
            .subscribe(function (m) {
            _this.badwords.push(m);
            window.location.reload();
        });
    };
    CreateBadwordComponent = __decorate([
        core_1.Component({
            selector: 'badword-create',
            templateUrl: 'client/dev/dashboard/templates/badword/badword-create.html',
            styleUrls: ['client/dev/dashboard/styles/badword-create.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, badwords_service_1.BadwordService])
    ], CreateBadwordComponent);
    return CreateBadwordComponent;
}());
exports.CreateBadwordComponent = CreateBadwordComponent;
