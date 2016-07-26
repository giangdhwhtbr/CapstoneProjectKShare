var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var PushNotificationComponent = (function () {
    function PushNotificationComponent() {
        this.dir = 'auto';
        this.lang = 'en-US';
        this.renotify = false;
        this.sticky = false;
        this.noscreen = false;
        this.silent = true;
        this.closeDelay = 0;
        this.onLoad = new core_1.EventEmitter();
        this.onShow = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
    }
    PushNotificationComponent.prototype.checkCompatibility = function () {
        return !!('Notification' in window);
    };
    PushNotificationComponent.prototype.isPermissionGranted = function (permission) {
        return permission === 'granted';
    };
    PushNotificationComponent.prototype.requestPermission = function () {
        return Notification.requestPermission();
    };
    PushNotificationComponent.prototype.show = function () {
        var _this = this;
        if (!this.checkCompatibility()) {
            return console.log('Notification API not available in this browser.');
        }
        return this.requestPermission()
            .then(function (permission) { return _this.isPermissionGranted(permission); })
            .then(function () { return _this.create(); });
    };
    PushNotificationComponent.prototype.create = function () {
        var notification = new Notification(this.title, {
            dir: this.dir,
            lang: this.lang,
            data: this.data,
            tag: this.tag,
            body: this.body,
            icon: this.icon,
            silent: this.silent,
            sound: this.sound,
            renotify: this.renotify,
            sticky: this.sticky,
            vibrate: this.vibrate,
            noscreen: this.noscreen
        });
        this.attachEventHandlers(notification);
        this.close(notification);
        return notification;
    };
    PushNotificationComponent.prototype.close = function (notification) {
        if (this.closeDelay) {
            setTimeout(function () {
                notification.close();
            }, this.closeDelay);
        }
        else {
            notification.close();
        }
    };
    PushNotificationComponent.prototype.closeAll = function () {
        Notification.close();
    };
    PushNotificationComponent.prototype.attachEventHandlers = function (notification) {
        var _this = this;
        notification.onshow = function () {
            _this.onShow.emit({ notification: notification });
        };
        notification.onclick = function (event) {
            _this.onClick.emit({ event: event, notification: notification });
        };
        notification.onerror = function () {
            _this.onError.emit({ notification: notification });
        };
        notification.onclose = function () {
            _this.onClose.emit({ notification: notification });
        };
    };
    PushNotificationComponent.prototype.ngOnInit = function () {
        this.onLoad.emit({});
    };
    PushNotificationComponent.prototype.ngOnDestroy = function () {
        this.closeAll();
    };
    PushNotificationComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "body");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "sound");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "tag");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "dir");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "lang");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "renotify");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "sticky");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "vibrate");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "noscreen");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "silent");
    __decorate([
        core_1.Input()
    ], PushNotificationComponent.prototype, "closeDelay");
    __decorate([
        core_1.Output('load')
    ], PushNotificationComponent.prototype, "onLoad");
    __decorate([
        core_1.Output('show')
    ], PushNotificationComponent.prototype, "onShow");
    __decorate([
        core_1.Output('close')
    ], PushNotificationComponent.prototype, "onClose");
    __decorate([
        core_1.Output('error')
    ], PushNotificationComponent.prototype, "onError");
    __decorate([
        core_1.Output('action')
    ], PushNotificationComponent.prototype, "onClick");
    PushNotificationComponent = __decorate([
        core_1.Component({
            selector: 'push-notification',
            styles: [':host { display: none; }'],
            template: ''
        })
    ], PushNotificationComponent);
    return PushNotificationComponent;
})();
exports.PushNotificationComponent = PushNotificationComponent;
//# sourceMappingURL=notification.js.map