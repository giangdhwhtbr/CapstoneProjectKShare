webpackJsonp([0],[
/* 0 */
/***/ function(module, exports) {

	eval("\n/*\n * Angular\n */\nimport { bootstrap } from '@angular/platform-browser-dynamic';\nimport { provide } from '@angular/core';\nimport { FORM_PROVIDERS } from '@angular/common';\nimport { ROUTER_PROVIDERS } from '@angular/router-deprecated';\nimport { Http, HTTP_PROVIDERS } from '@angular/http';\nimport { AuthConfig, AuthHttp } from 'angular2-jwt';\n\n/*\n * Components\n */\nimport {AppComponent} from './app/app.component';\nbootstrap(\n  AppComponent,\n  [\n    FORM_PROVIDERS,\n    ROUTER_PROVIDERS,\n    HTTP_PROVIDERS,\n    provide(AuthHttp, {\n      useFactory: (http) => {\n        return new AuthHttp(new AuthConfig({\n          username: 'username',\n          role: 'role'\n        }), http);\n      },\n      deps: [Http]\n    })\n  ]\n);\n\n//import {DemoComponent} from './demo/demo';\n//\n//bootstrap(DemoComponent);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9kZXYvaW5kZXgudHM/Y2IyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gKiBBbmd1bGFyXG4gKi9cbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGT1JNX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgSHR0cCwgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEF1dGhDb25maWcsIEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuLypcbiAqIENvbXBvbmVudHNcbiAqL1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwL2FwcC5jb21wb25lbnQnO1xuYm9vdHN0cmFwKFxuICBBcHBDb21wb25lbnQsXG4gIFtcbiAgICBGT1JNX1BST1ZJREVSUyxcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIEhUVFBfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoQXV0aEh0dHAsIHtcbiAgICAgIHVzZUZhY3Rvcnk6IChodHRwKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoe1xuICAgICAgICAgIHVzZXJuYW1lOiAndXNlcm5hbWUnLFxuICAgICAgICAgIHJvbGU6ICdyb2xlJ1xuICAgICAgICB9KSwgaHR0cCk7XG4gICAgICB9LFxuICAgICAgZGVwczogW0h0dHBdXG4gICAgfSlcbiAgXVxuKTtcblxuLy9pbXBvcnQge0RlbW9Db21wb25lbnR9IGZyb20gJy4vZGVtby9kZW1vJztcbi8vXG4vL2Jvb3RzdHJhcChEZW1vQ29tcG9uZW50KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jbGllbnQvZGV2L2luZGV4LnRzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
]);