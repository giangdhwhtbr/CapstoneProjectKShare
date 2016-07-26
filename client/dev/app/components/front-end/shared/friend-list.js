var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var FriendListComponent = (function () {
    function FriendListComponent() {
    }
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'friend-list',
            templateUrl: 'client/dev/app/components/front-end/asserts/templates/friend-list.html',
            styleUrls: ['client/dev/app/components/front-end/asserts/styles/friend-list.html'],
            directives: []
        })
    ], FriendListComponent);
    return FriendListComponent;
})();
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map