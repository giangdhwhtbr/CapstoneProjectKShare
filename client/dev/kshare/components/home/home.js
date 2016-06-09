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
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { SideBarComponent} from '../shared/sidebar'
//import { HeaderComponent } from '../shared/header';
//import { FooterComponent } from '../shared/footer';
//import { LoginComponent } from '../shared/login';
//import { RegisterComponent } from '../shared/register';
var HomeComponent = (function () {
    function HomeComponent() {
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
    }
    HomeComponent.prototype.ngOinit = function () {
        console.log("what the fuck");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'client/dev/kshare/templates/home/home.html',
            styleUrls: ['client/dev/kshare/styles/home.css'],
            directives: [
                //HeaderComponent,
                //FooterComponent,
                //LoginComponent,
                //RegisterComponent,
                //SideBarComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.js.map