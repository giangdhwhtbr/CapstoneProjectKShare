var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
    function UpdateBadwordComponent(fb, _badwordService, router, route) {
        var _this = this;
        this._badwordService = _badwordService;
        this.router = router;
        this.route = route;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.updateBadwordForm = fb.group({
            "word": [""],
            "_id": [""]
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
        this.router.navigateByUrl('admin/badwords');
    };
    UpdateBadwordComponent = __decorate([
        core_1.Component({
            selector: 'badword-update',
            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-update.html',
            directives: [
                common_1.FORM_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [badword_1.BadwordService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(badword_1.BadwordService))
    ], UpdateBadwordComponent);
    return UpdateBadwordComponent;
})();
exports.UpdateBadwordComponent = UpdateBadwordComponent;
//# sourceMappingURL=badword-update.js.map