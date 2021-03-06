var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
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
            user = {
                _id: this.userId,
                fullName: user.fullName,
                phone: user.phone,
                birthday: birthday
            };
            this._userService.updateUser(user, []).subscribe(function (res) {
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
        })
    ], RegisterInfoComponent);
    return RegisterInfoComponent;
})();
exports.RegisterInfoComponent = RegisterInfoComponent;
//# sourceMappingURL=info.js.map