var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
        })
    ], StringFilterPipe);
    return StringFilterPipe;
})();
exports.StringFilterPipe = StringFilterPipe;
//# sourceMappingURL=filter.js.map