var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var CreateBadwordComponent = (function () {
    function CreateBadwordComponent(fb, _badwordService, router) {
        this._badwordService = _badwordService;
        this.router = router;
        this.navigated = false;
        this.badwordForm = fb.group({
            "word": [""]
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
        })
    ], CreateBadwordComponent);
    return CreateBadwordComponent;
})();
exports.CreateBadwordComponent = CreateBadwordComponent;
//# sourceMappingURL=badword-create.js.map