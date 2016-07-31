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
var router_1 = require('@angular/router');
var badword_1 = require('../../../services/badword');
var CreateBadwordComponent = (function () {
    function CreateBadwordComponent(fb, _badwordService, router) {
        this._badwordService = _badwordService;
        this.router = router;
        this.navigated = false;
        this.badwordForm = fb.group({
            "word": [""],
        });
    }
    CreateBadwordComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    CreateBadwordComponent.prototype.getAll = function () {
        var _this = this;
        this._badwordService
            .getAllBadwords()
            .subscribe(function (badwords) {
            _this.badwords = badwords;
        });
    };
    CreateBadwordComponent.prototype.addBadword = function (word) {
        var _this = this;
        this._badwordService
            .addBadword(word)
            .subscribe(function (word) {
            _this.badwords.push(word);
        });
    };
    CreateBadwordComponent = __decorate([
        core_1.Component({
            selector: 'badword-create',
            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-create.html',
            styleUrls: ['client/dev/app/components/back-end/badword/styles/badword.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, badword_1.BadwordService, router_1.Router])
    ], CreateBadwordComponent);
    return CreateBadwordComponent;
})();
exports.CreateBadwordComponent = CreateBadwordComponent;
//# sourceMappingURL=badword-create.js.map