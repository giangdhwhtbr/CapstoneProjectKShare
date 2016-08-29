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
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../../shared/private-chat');
var RegisterInfoComponent = (function () {
    function RegisterInfoComponent(fb, router, _userService, route, _tagService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.route = route;
        this._tagService = _tagService;
        this.user = [];
        this.userId = '';
        this.errorMessage = '';
        this.route
            .params
            .subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.updateUserForm = fb.group({
            fullName: [""],
            birthday: [""],
            phone: [""]
        });
    }
    RegisterInfoComponent.prototype.ngOnInit = function () {
        $('.datepicker').pickadate({
            monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            monthsShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            weekdaysFull: ['Chủ nhật ', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
            // Buttons
            today: '',
            clear: 'Xoá',
            close: 'Đóng',
            selectMonths: true,
            selectYears: 15,
            format: 'dd-mm-yyyy',
            min: new Date(1950, 1, 1),
            max: new Date(2010, 12, 31),
            selectYears: 60
        });
        this.loadAllTags();
    };
    //tags control
    RegisterInfoComponent.prototype.filterONTag = function () {
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
    RegisterInfoComponent.prototype.filterKnw = function (event) {
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
    RegisterInfoComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
        });
    };
    //end control tags
    RegisterInfoComponent.prototype.update = function (user) {
        var _this = this;
        var birthday = $(".datepicker").val();
        var pattern = new RegExp("^[0-9]{1,13}$");
        if (!pattern.test(user.phone)) {
            this.errorMessage = "Số điện thoại chỉ bao gồm số và không nhiều hơn 13 kí tự";
        }
        else {
            var tags;
            tags = this.filterONTag(); //0 -> oldTags , 1 -> newTags
            user = {
                _id: this.userId,
                fullName: user.fullName,
                phone: user.phone,
                birthday: birthday,
                ownKnowledgeIds: tags[0]
            };
            console.log(user);
            console.log(tags[1]);
            this._userService.updateUser(user, tags[1]).subscribe(function (res) {
                _this.router.navigateByUrl('/');
            }, function (err) {
                console.log(err);
            });
        }
    };
    RegisterInfoComponent.prototype.returnHome = function () {
        this.router.navigateByUrl('/');
    };
    RegisterInfoComponent = __decorate([
        core_1.Component({
            templateUrl: "client/dev/app/components/front-end/user/register/templates/info.html",
            styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
            directives: [primeng_1.AutoComplete, private_chat_1.PrivateChatComponent],
            providers: [tag_1.TagService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_1.UserService, router_1.ActivatedRoute, tag_1.TagService])
    ], RegisterInfoComponent);
    return RegisterInfoComponent;
})();
exports.RegisterInfoComponent = RegisterInfoComponent;
//# sourceMappingURL=info.js.map