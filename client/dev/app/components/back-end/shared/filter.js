var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StringFilterPipe = (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        else if (args) {
            return value.filter(function (item) {
                for (var key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String) &&
                        (item[key].trim().toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) && (key === "title")) {
                        return true;
                    }
                }
            });
        }
    };
    StringFilterPipe = __decorate([
        core_1.Pipe({
            name: 'stringFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], StringFilterPipe);
    return StringFilterPipe;
})();
exports.StringFilterPipe = StringFilterPipe;
//# sourceMappingURL=filter.js.map