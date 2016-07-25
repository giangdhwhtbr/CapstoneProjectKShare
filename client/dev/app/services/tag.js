var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 7/19/2016.
 */
var core_1 = require('@angular/core');
var TagService = (function () {
    function TagService(_http) {
        this._http = _http;
        this._tagUrl = '/api/tags/:id';
    }
    TagService.prototype.getArtByTag = function () {
        return this._http.get(this._tagUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService = __decorate([
        core_1.Injectable()
    ], TagService);
    return TagService;
})();
exports.TagService = TagService;
//# sourceMappingURL=tag.js.map