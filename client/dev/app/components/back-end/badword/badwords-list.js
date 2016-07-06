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
var badword_1 = require('../../../services/badword');
var badword_update_1 = require('./badword-update');
var BadwordListComponent = (function () {
    function BadwordListComponent(badwordService) {
        this.badwordService = badwordService;
        this.pageTitle = 'Badword List';
    }
    BadwordListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BadwordListComponent.prototype.getAll = function () {
        var _this = this;
        this.badwordService
            .getAllBadwords()
            .subscribe(function (badwords) {
            _this.badwords = badwords;
            console.log("1234");
        });
    };
    BadwordListComponent.prototype.deleteBadword = function (id) {
        var _this = this;
        this.badwordService
            .deleteBadword(id)
            .subscribe(function () {
            _this.badwords.forEach(function (t, i) {
                if (t._id === id)
                    return _this.badwords.splice(i, 1);
            });
        });
    };
    BadwordListComponent.prototype.findBadwordById = function (id) {
        this.badwordService
            .findBadwordById(id)
            .subscribe(function (badwords) {
            return badwords;
        });
    };
    BadwordListComponent = __decorate([
        core_1.Component({
            selector: 'badword-list',
            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-list.html',
            styleUrls: ['client/dev/app/components/back-end/badword/styles/badword.css'],
            directives: [badword_update_1.UpdateBadwordComponent]
        }), 
        __metadata('design:paramtypes', [badword_1.BadwordService])
    ], BadwordListComponent);
    return BadwordListComponent;
})();
exports.BadwordListComponent = BadwordListComponent;
//# sourceMappingURL=badwords-list.js.map