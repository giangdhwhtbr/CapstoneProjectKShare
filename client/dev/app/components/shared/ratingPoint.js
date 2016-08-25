var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 8/24/16.
 */
var core_1 = require('@angular/core');
var RatingPoint = (function () {
    function RatingPoint() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingPoint.prototype, "rate", void 0);
    RatingPoint = __decorate([
        core_1.Component({
            selector: "rating-point",
            template: "\n      <div *ngIf=\"!rate\">\n        <div  class=\"ui massive heart rating\">\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"rate && rate <= 1\">\n        <div  class=\"ui massive heart rating\">\n          <i class=\"icon active\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n          <i class=\"icon\"></i>\n        </div>\n      </div>\n      <div *ngIf=\"rate > 1 && rate <= 2\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 2 && rate <= 3\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 3 && rate <= 4\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon\"></i>\n          </div>\n      </div>\n      <div *ngIf=\"rate > 4 && rate <= 5\">\n          <div  class=\"ui massive heart rating\">\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n            <i class=\"icon active\"></i>\n          </div>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RatingPoint);
    return RatingPoint;
})();
exports.RatingPoint = RatingPoint;
//# sourceMappingURL=ratingPoint.js.map