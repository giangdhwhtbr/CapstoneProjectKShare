var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 8/24/16.
 */
var core_1 = require('@angular/core');
var RatingPoint = (function () {
    function RatingPoint() {
    }
    __decorate([
        core_1.Input()
    ], RatingPoint.prototype, "rate");
    RatingPoint = __decorate([
        core_1.Component({
            selector: "rating-point",
            template: "\n      <div *ngIf=\"!rate\">\n        <div  class=\"ui massive heart rating\">\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"rate && rate <= 1\">\n        <div  class=\"ui massive heart rating\">\n          <i class=\"icon active\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"rate > 1 && rate <= 2\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 2 && rate <= 3\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 3 && rate <= 4\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 4 && rate <= 5\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n          </div>\n      </div>\n  "
        })
    ], RatingPoint);
    return RatingPoint;
})();
exports.RatingPoint = RatingPoint;
//# sourceMappingURL=ratingPoint.js.map