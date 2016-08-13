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
var users_1 = require('../../../services/users');
var FriendListComponent = (function () {
    function FriendListComponent(_userService) {
        this._userService = _userService;
    }
    FriendListComponent.prototype.ngOnInit = function () {
        //ẩn hiện danh sách chat
        $('.chat_head').click(function () {
            $('.chat_body').slideToggle('slow');
        });
        $('.msg_head').click(function () {
            $('.msg_wrap').slideToggle('slow');
        });
        //đóng phần đang chat
        $('.close').click(function () {
            $('.msg_box').hide();
        });
        //hiện phần chat
        $('.user').click(function () {
            $('.msg_wrap').show();
            $('.msg_box').show();
        });
        //nhấn nút enter
        $('textarea').keypress(function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                var msg = $(this).val();
                $(this).val('');
                if (msg != '')
                    $('<div class="msg_b">' + msg + '</div>').insertBefore('.msg_push');
                $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
            }
        });
        //
        //this._userService.getFriendList()
        //  .subscribe(
        //    (friends) => {
        //
        //    },
        //    (error) => {
        //
        //    }
        //  );
        //
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'friend-list',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/friend-list.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/friend-list.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [users_1.UserService])
    ], FriendListComponent);
    return FriendListComponent;
})();
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map