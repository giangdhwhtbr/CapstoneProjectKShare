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
        })
    ], FriendListComponent);
    return FriendListComponent;
})();
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map