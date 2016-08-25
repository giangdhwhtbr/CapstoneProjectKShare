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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var users_1 = require('../../../../services/users');
var tag_1 = require('../../../../services/tag');
var private_chat_1 = require('./../../../shared/private-chat');
var primeng_1 = require('primeng/primeng');
var UpdateUserComponent = (function () {
    function UpdateUserComponent(fb, router, _userService, route, _tagService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.route = route;
        this._tagService = _tagService;
        this.user = [];
        this.userId = '';
        this.route
            .params
            .subscribe(function (params) {
            _this.username = params['name'];
        });
        this.updateUserForm = fb.group({
            fullName: [""],
            birthday: [""],
            phone: [""]
        });
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        this.loadAllTags();
        this.getUserByUsername();
    };
    UpdateUserComponent.prototype.getUserByUsername = function () {
        var _this = this;
        this._userService.getUserByUserName(this.username).subscribe(function (user) {
            _this.userinfo = user;
            console.log(_this.userinfo);
        });
    };
    //tags control
    UpdateUserComponent.prototype.filterONTag = function () {
        var oldTag = [];
        for (var _i = 0, _a = this.tagsEx; _i < _a.length; _i++) {
            var e = _a[_i];
            for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
                var e1 = _c[_b];
                //catch old tags
                if (e.name == e1) {
                    oldTag.push(e._id);
                    //find out old tags in data tags user
                    var index = this.tags.indexOf(e1);
                    if (index > -1) {
                        //remove old tags to catch new tags
                        this.tags.splice(index, 1);
                    }
                }
            }
        }
        return [oldTag, this.tags];
    };
    UpdateUserComponent.prototype.filterKnw = function (event) {
        var query = event.query;
        this.filteredKnw = [];
        for (var i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (i == this.tagsEx.length - 1) {
                this.filteredKnw.unshift(query.trim());
            }
        }
        if (this.filteredKnw.length == 0) {
            this.filteredKnw.push(query.trim());
        }
    };
    UpdateUserComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
        });
    };
    //end control tags
    UpdateUserComponent.prototype.update = function (user) {
        var _this = this;
        var tags;
        tags = this.filterONTag(); //0 -> oldTags , 1 -> newTags
        user = {
            _id: this.userinfo._id,
            fullName: user.fullName,
            displayName: user.displayName,
            birthday: user.birthday,
            ownKnowledgeIds: tags[0],
            phone: user.phone
        };
        this._userService.updateUser(user, tags[1]).subscribe(function (res) {
            _this.router.navigateByUrl('/');
            location.reload();
        }, function (err) {
            console.log(err);
        });
    };
    UpdateUserComponent.prototype.returnHome = function () {
        this.router.navigateByUrl('/');
    };
    UpdateUserComponent = __decorate([
        core_1.Component({
            templateUrl: "client/dev/app/components/front-end/user/user-profile/templates/user-info-update.html",
            styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
            directives: [primeng_1.AutoComplete, private_chat_1.PrivateChatComponent],
            providers: [tag_1.TagService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_1.UserService, router_1.ActivatedRoute, tag_1.TagService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
})();
exports.UpdateUserComponent = UpdateUserComponent;
//# sourceMappingURL=user-info-update.js.map