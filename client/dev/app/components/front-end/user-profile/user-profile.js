var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Component
var request_record_1 = require('./request-record');
var user_profile_bar_1 = require('./user-profile-bar');
var UserProfileComponent = (function () {
    function UserProfileComponent(router, route, _userService, _knowledgeService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._knowledgeService = _knowledgeService;
        this.notification = {
            show: false,
            title: 'Demo notification!',
            body: 'ng2-notifications',
            icon: 'https://goo.gl/3eqeiE',
            action: function () {
                window.open('https://github.com/alexcastillo/ng2-notifications');
            }
        };
        this.formatDate = function (date) {
            if (date) {
                var newDate, day, month, year;
                year = date.substr(0, 4);
                month = date.substr(5, 2);
                day = date.substr(8, 2);
                return newDate = day + '/' + month + '/' + year;
            }
        };
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserByUserName(this.name).subscribe(function (user) {
            _this.userProfile = user;
        }, function (error) {
            console.log(error);
        });
        this.checkUserExist();
        if (this.isExist = true) {
            this.getRequestByUser();
        }
    };
    UserProfileComponent.prototype.getRequestByUser = function () {
        var _this = this;
        this._userService
            .getRequestByUser(this.name)
            .subscribe(function (requests) {
            for (var i = 0; i < requests.length; i++) {
                requests[i].createdAt = _this.formatDate(requests[i].createdAt);
                requests[i].modifiedDate = _this.formatDate(requests[i].modifiedDate);
            }
            _this.requests = requests;
        });
    };
    UserProfileComponent.prototype.getKnowledgeNameOfRequest = function (knowledgeId) {
        var _this = this;
        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(knowledgeId).subscribe(function (knowledge) {
            _this.knowledgeName = knowledge.name;
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent.prototype.checkUserExist = function () {
        var _this = this;
        this._userService.checkUserExist(this.name).subscribe(function (isExist) {
            if (isExist._body === '0') {
                _this.isExist = false;
            }
            else {
                _this.isExist = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                request_record_1.RequestRecordComponent,
                user_profile_bar_1.UserProfileBarComponent
            ]
        })
    ], UserProfileComponent);
    return UserProfileComponent;
})();
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.js.map