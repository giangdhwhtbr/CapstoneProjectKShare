"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//components
var notification_1 = require('../shared/notification');
var request_record_1 = require('./request-record');
//services
var users_1 = require('../../../services/users');
var knowledge_1 = require('../../../services/knowledge');
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
        this.buttonTitle = "Thêm bạn";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserByUserName(this.name).subscribe(function (user) {
            _this.userProfile = user;
        }, function (error) {
            console.log(error);
        });
        //check if current user is staying in his/her profile page
        if (this.name === this.userToken) {
            this.checkUser = true;
        }
        this.getFriendList();
        this.getRequestByUser();
        setTimeout(function () {
            _this.differ = _this.friendList;
            console.log(_this.friendList);
            console.log(_this.differ);
        }, 1000);
    };
    UserProfileComponent.prototype.ngDoCheck = function () {
        var _this = this;
        //boolean change = this.differ.diff(this.friendlist);
        var isDiffirent;
        setTimeout(function () {
            if (_this.differ !== _this.friendList) {
                isDiffirent = true;
            }
            if (_this.differ === _this.friendList) {
                isDiffirent = false;
            }
            console.log(isDiffirent);
        }, 1000);
    };
    UserProfileComponent.prototype.addFriend = function () {
        var _this = this;
        this._userService
            .addFriend(this.userToken, this.name)
            .subscribe(function (r) {
            console.log('friendship was created by ' + _this.userToken + ' and ' + _this.name);
        });
        this.getFriendList();
        // setTimeout(() => {
        //   console.log(this.friendList);
        //   console.log(this.differ);
        // }, 1000);
    };
    UserProfileComponent.prototype.deleteFriend = function () {
        this._userService
            .deleteFriendRequest(this.userToken, this.name)
            .subscribe(function () {
            console.log('delete successfull');
        });
        this.getFriendList();
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
            console.log(_this.requests);
        });
    };
    //get friend list: pending and accepted
    UserProfileComponent.prototype.getFriendList = function () {
        var _this = this;
        this.checkSentRequestUser = false;
        this._userService
            .getFriendList(this.userToken)
            .subscribe(function (friendlist) {
            _this.friendList = friendlist;
            //check sent request
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user2 === _this.name && _this.friendList[i].status === "pending") {
                    _this.checkSentRequestUser = true;
                    break;
                }
            }
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
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                notification_1.PushNotificationComponent,
                request_record_1.RequestRecordComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, knowledge_1.KnowledgeService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.js.map