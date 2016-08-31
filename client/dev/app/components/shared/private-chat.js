var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 8/12/16.
 */
var core_1 = require('@angular/core');
var chat_1 = require('../../services/chat');
var notification_1 = require('../../services/notification');
var users_1 = require('../../services/users');
var PrivateChatComponent = (function () {
    function PrivateChatComponent(_chatService, _noti, _userService) {
        this._chatService = _chatService;
        this._noti = _noti;
        this._userService = _userService;
        this.currentRoom = {
            id: '',
            messages: []
        };
        this.username = localStorage.getItem('username');
        this.socket = io('https://localhost:80');
        this.allChatRooms = [];
    }
    PrivateChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numItems = $('.text-message').length;
        $("#cntAllText").animate({ scrollTop: 200 * numItems });
        this.socket.on('private-message-return', function (data) {
            var news = 0;
            // New message token
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.user === _this.username) {
                    news = user.newMessages;
                    var numItems = $('.text-message').length;
                    $("#cntAllText").animate({ scrollTop: 200 * numItems });
                }
            }
            // Enter message to the current room
            if (data.id === _this.currentRoom.id) {
                _this.currentRoom.messages.push(data);
            }
            // update room last message
            for (var _b = 0, _c = _this.allChatRooms; _b < _c.length; _b++) {
                var room = _c[_b];
                if (room._id === data.id) {
                    room.lastSent = data.sentAt;
                    room.lastMsg = data.message;
                    room.newMessages = news;
                }
            }
            // Sort chat room by the newest
            _this.allChatRooms.sort(function (a, b) {
                if (a.lastSent > b.lastSent) {
                    return -1;
                }
                else if (a.lastSent < b.lastSent) {
                    return 1;
                }
                return 0;
            });
        });
        // Reset news notification
        this.socket.on('private-message-reset', function (data) {
            var news = 0;
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.user === _this.username) {
                    news = user.newMessages;
                }
            }
            for (var _b = 0, _c = _this.allChatRooms; _b < _c.length; _b++) {
                var room = _c[_b];
                if (room.friendName === data.receiver) {
                    room.newMessages = news;
                }
            }
        });
        if (this.username) {
            this.loadAva();
            this.listAllChatRoom();
        }
    };
    PrivateChatComponent.prototype.loadAva = function () {
        var _this = this;
        this._userService.loadAva(this.username)
            .subscribe(function (res) {
            _this.avatar = res.linkImg;
        }, function (err) {
            console.log(err);
        });
    };
    PrivateChatComponent.prototype.listAllChatRoom = function () {
        var _this = this;
        this.allChatRooms = [];
        if (localStorage.getItem('username')) {
            this.sub = this._chatService.getAllChatRoomOfUser(this.username)
                .subscribe(function (chatRooms) {
                if (chatRooms) {
                    for (var _i = 0; _i < chatRooms.length; _i++) {
                        var chatRoom = chatRooms[_i];
                        _this.socket.emit('subscribe-private-chat', chatRoom._id);
                        var room = {
                            _id: chatRoom._id,
                            chatLogs: chatRoom.chatLogs,
                            newMessages: 0
                        };
                        if (chatRoom.chatLogs.length) {
                            room.lastMsg = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].message;
                            room.lastSent = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].sentAt;
                        }
                        for (var _a = 0, _b = chatRoom.users; _a < _b.length; _a++) {
                            var user = _b[_a];
                            if (user.user !== _this.username) {
                                room.friendName = user.user;
                                room.friendAva = user.avatar;
                            }
                            if (user.user === _this.username) {
                                room.newMessages = user.newMessages;
                            }
                        }
                        _this.allChatRooms.push(room);
                        _this.allChatRooms.sort(function (a, b) {
                            if (a.lastSent > b.lastSent) {
                                return -1;
                            }
                            if (a.lastSent < b.lastSent) {
                                return 1;
                            }
                            return 0;
                        });
                        _this.receiver = _this.allChatRooms[0].friendName;
                        _this.currentRoom.id = _this.allChatRooms[0]._id;
                        _this.currentRoom.messages = _this.allChatRooms[0].chatLogs;
                    }
                }
            });
        }
    };
    PrivateChatComponent.prototype.getReceiver = function (slRoom) {
        var numItems = $('.text-message').length;
        $("#cntAllText").animate({ scrollTop: 200 * numItems });
        this.currentRoom.id = slRoom._id;
        this.receiver = slRoom.friendName;
        this.currentRoom.messages = slRoom.chatLogs;
        var data = {
            sender: this.username,
            receiver: this.receiver
        };
        this.socket.emit('reset-new-message', data);
    };
    PrivateChatComponent.prototype.sendMessage = function () {
        if (this.mess) {
            var data = {
                sender: this.username,
                message: this.mess,
                receiver: this.receiver,
                avatar: this.avatar
            };
            this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
            this.socket.emit('private-message', data);
            this.socket.emit('reset-new-message', data);
            this.mess = "";
        }
        var numItems = $('.text-message').length;
        $("#cntAllText").animate({ scrollTop: 200 * numItems });
    };
    PrivateChatComponent = __decorate([
        core_1.Component({
            selector: 'private-chat',
            templateUrl: 'client/dev/app/components/shared/templates/chatbox.html',
            styleUrls: ['client/dev/app/components/shared/styles/chatbox.css']
        }), 
        __metadata('design:paramtypes', [chat_1.ChatService, notification_1.NotificationService, users_1.UserService])
    ], PrivateChatComponent);
    return PrivateChatComponent;
})();
exports.PrivateChatComponent = PrivateChatComponent;
//# sourceMappingURL=private-chat.js.map