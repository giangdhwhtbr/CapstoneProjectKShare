webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular
	 */
	var platform_browser_dynamic_1 = __webpack_require__(389);
	var app_routes_1 = __webpack_require__(599);
	/*
	 * components
	 */
	var app_component_1 = __webpack_require__(598);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, app_routes_1.APP_ROUTER_PROVIDERS).catch(function (err) { return console.error(err); });
	// import {DemoPaper} from './demo/demo-paper';
	// bootstrap(DemoPaper);
	

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var KnowledgeService = (function () {
	    function KnowledgeService(_http) {
	        this._http = _http;
	        this._knowledgesUrl = '/api/knowledges/:id';
	    }
	    KnowledgeService.prototype.getAllKnowledges = function () {
	        return this._http.get(this._knowledgesUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    KnowledgeService.prototype.addKnowledge = function (knowledge) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _knowledge = JSON.stringify({
	            name: knowledge.name,
	            description: knowledge.description,
	            parent: knowledge.parent,
	        });
	        return this._http
	            .post(this._knowledgesUrl.replace(':id', ''), _knowledge, options)
	            .map(function (r) { return r.json(); });
	    };
	    KnowledgeService.prototype.deleteKnowledge = function (id) {
	        return this._http
	            .delete(this._knowledgesUrl.replace(':id', id));
	    };
	    KnowledgeService.prototype.findKnowledgeById = function (id) {
	        return this._http
	            .get(this._knowledgesUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    KnowledgeService.prototype.updateKnowledge = function (knowledge) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _knowledge = JSON.stringify({
	            name: knowledge.name,
	            description: knowledge.description,
	        });
	        return this._http
	            .put(this._knowledgesUrl.replace(':id', knowledge._id), _knowledge, options)
	            .map(function (r) { return r.json(); });
	    };
	    //get child of a back.knowledge parent
	    KnowledgeService.prototype.getChildFromParent = function (knowledges) {
	        var parent = [];
	        var subCate = [];
	        for (var i = 0; i < knowledges.length; i++) {
	            if (!knowledges[i].hasOwnProperty('parent')) {
	                parent.push(knowledges[i]);
	            }
	        }
	        for (var i = 0; i < parent.length; i++) {
	            for (var j = 0; j < knowledges.length; j++) {
	                if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
	                    subCate.push(knowledges[j]);
	                }
	            }
	            parent[i]["subCategory"] = subCate;
	            subCate = [];
	        }
	        knowledges = parent;
	        return parent;
	    };
	    KnowledgeService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    KnowledgeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], KnowledgeService);
	    return KnowledgeService;
	    var _a;
	}());
	exports.KnowledgeService = KnowledgeService;
	

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 5/19/16.
	 */
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var AuthService = (function () {
	    function AuthService(_http) {
	        this._http = _http;
	        this._regUrl = '/api/user/';
	        this._loginUrl = '/api/login';
	        this._logOutUrl = '/api/logout';
	        this._checkLoginUrl = '/api/checkLogin/';
	    }
	    AuthService.prototype.login = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            username: user.username,
	            password: user.password
	        });
	        var usertoken = user.username;
	        return this._http.post(this._loginUrl, _user, options)
	            .map(function (res) { return res.json(); });
	    };
	    AuthService.prototype.register = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            username: user.username,
	            password: user.password,
	            email: user.email
	        });
	        return this._http.post(this._regUrl, _user, options)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    AuthService.prototype.logout = function () {
	        return this._http.get(this._logOutUrl)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    AuthService.prototype.logoutClient = function () {
	        localStorage.removeItem('username');
	        localStorage.removeItem('userrole');
	    };
	    AuthService.prototype.isLoggedIn = function () {
	        return this._http.get(this._checkLoginUrl).map(function (res) { return res.json(); }).catch(this.handleError);
	    };
	    AuthService.prototype.dashboardFilter = function () {
	        var roleToken = localStorage.getItem('userrole');
	        if (!roleToken) {
	            return false;
	        }
	        else if (roleToken !== 'admin') {
	            return false;
	        }
	        return true;
	    };
	    AuthService.prototype.handleError = function (error) {
	        return Observable_1.Observable.throw(error.json());
	    };
	    AuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], AuthService);
	    return AuthService;
	    var _a;
	}());
	exports.AuthService = AuthService;
	

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var RequestService = (function () {
	    function RequestService(_http) {
	        this._http = _http;
	        this._requestsUrl = '/api/requests/:id';
	        this._getKnowledgeByParentUrl = '/api/knowledges/parent/:id';
	        this._searchRequetsUrl = '/api/requests-search/:id';
	        this._statusSubcriberUrl = '/api/requests-subcriber/:id';
	        this._requestStatusUrl = '/api/requests-status/:id';
	    }
	    RequestService.prototype.getAllRequests = function () {
	        return this._http.get(this._requestsUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    RequestService.prototype.addRequest = function (request) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _request = JSON.stringify({
	            title: request.title,
	            description: request.description,
	            knowledgeId: request.knowledgeId,
	            user: request.user
	        });
	        return this._http
	            .post(this._requestsUrl.replace(':id', ''), _request, options)
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.getRequestById = function (id) {
	        return this._http.get(this._requestsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //delete templates
	    RequestService.prototype.deleteRequest = function (request) {
	        return this._http
	            .delete(this._requestsUrl.replace(':id', request._id))
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.deleteRequestById = function (id) {
	        return this._http
	            .delete(this._requestsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.updateRequest = function (request) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _request = JSON.stringify({
	            _id: '',
	            title: request.title,
	            description: request.description,
	            knowledgeId: request.knowledgeId
	        });
	        console.log(_request);
	        return this._http
	            .put(this._requestsUrl.replace(':id', request._id), _request, options)
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.getRequestByKnowledgeId = function (id) {
	        return this._http
	            .post(this._requestsUrl.replace(':id', id), '')
	            .map(function (r) { return r.json(); });
	    };
	    // get child back.knowledge from parent back.knowledge
	    RequestService.prototype.getKnowledgeByParent = function (id) {
	        return this._http.get(this._getKnowledgeByParentUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //add a subcriber to templates subcribers
	    RequestService.prototype.updateSubcriber = function (id, subcriber) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _subcriber = JSON.stringify({
	            subcriber: subcriber
	        });
	        return this._http.post(this._statusSubcriberUrl.replace(':id', id), _subcriber, options)
	            .map(function (r) { return r.json(); });
	    };
	    //change status request
	    RequestService.prototype.changeStatusRequest = function (id) {
	        return this._http.get(this._requestStatusUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    //search request
	    RequestService.prototype.searchRequest = function (search) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _search = JSON.stringify({
	            text: search
	        });
	        return this._http
	            .post(this._searchRequetsUrl.replace(':id', ''), _search, options)
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    RequestService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], RequestService);
	    return RequestService;
	    var _a;
	}());
	exports.RequestService = RequestService;
	

/***/ },
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by GiangDH on 5/8/16.
	 */
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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var UserService = (function () {
	    function UserService(_http) {
	        this._http = _http;
	        this._usersUrl = '/api/user/:id';
	        this._friendUrl = '/api/friendship/:id';
	        this._getFriendUrl = '/api/getFriendship';
	        this._getRequestByUserUrl = '/api/requests-user/:user';
	    }
	    UserService.prototype.getAllUsers = function () {
	        return this._http.get(this._usersUrl.replace(':id', ''))
	            .toPromise()
	            .then(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    UserService.prototype.getUserById = function (id) {
	        return this._http.get(this._usersUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //get user informations by username
	    UserService.prototype.getUserByUserName = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _search = JSON.stringify({
	            username: user
	        });
	        return this._http.put(this._usersUrl.replace(':id', ''), _search, options)
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    UserService.prototype.addUser = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var formatDate = function (date) {
	            if (date) {
	                var newDate, day, month, year;
	                year = date.substr(6, 4);
	                day = date.substr(3, 2);
	                month = date.substr(0, 2);
	                return newDate = year + '-' + month + '-' + day;
	            }
	        };
	        var _user = JSON.stringify({
	            firstName: user.firstName,
	            lastName: user.lastName,
	            displayName: user.displayName,
	            birthday: formatDate(user.birthday),
	            username: user.username,
	            password: user.password,
	            email: user.email,
	            role: user.role,
	            ownKnowledgeId: user.ownKnowledgeId.split(","),
	            interestedKnowledgeId: user.interestedKnowledgeId.split(","),
	            onlineTime: user.onlineTime.split(",")
	        });
	        return this._http
	            .post(this._usersUrl.replace(':id', ''), _user, options)
	            .map(function (r) { return r.json(); });
	    };
	    UserService.prototype.updateUser = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            _id: user._id,
	            firstName: user.firstName,
	            lastName: user.lastName,
	            displayName: user.displayName,
	            username: user.username,
	            password: user.password,
	            email: user.email,
	            role: user.role
	        });
	        return this._http
	            .put(this._usersUrl.replace(':id', user._id), _user, options)
	            .map(function (r) { return r.json(); });
	    };
	    //add friend service
	    UserService.prototype.addFriend = function (requestUser, acceptUser) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _friendship = JSON.stringify({
	            user1: requestUser,
	            user2: acceptUser
	        });
	        return this._http
	            .post(this._friendUrl.replace(':id', ''), _friendship, options)
	            .map(function (r) { return r.json(); });
	    };
	    //select friend of logined user
	    UserService.prototype.getFriendList = function (currentUser) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _friendship = JSON.stringify({
	            user: currentUser
	        });
	        return this._http
	            .post(this._getFriendUrl, _friendship, options)
	            .map(function (r) { return r.json(); });
	    };
	    //get request of an user
	    UserService.prototype.getRequestByUser = function (user) {
	        return this._http
	            .get(this._getRequestByUserUrl.replace(':user', user))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //delete friend request
	    UserService.prototype.deleteFriendRequest = function (user1, user2) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _friendship = JSON.stringify({
	            requestUser: user1,
	            acceptUser: user2
	        });
	        return this._http
	            .put(this._friendUrl.replace(':id', ''), _friendship, options)
	            .map(function (r) { return r.json(); });
	    };
	    UserService.prototype.handleError = function (error) {
	        return Observable_1.Observable.throw(error);
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], UserService);
	    return UserService;
	    var _a;
	}());
	exports.UserService = UserService;
	

/***/ },
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(986));


/***/ },
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var StringFilterPipe = (function () {
	    function StringFilterPipe() {
	    }
	    StringFilterPipe.prototype.transform = function (value, args) {
	        if (!args) {
	            return value;
	        }
	        else if (args) {
	            return value.filter(function (item) {
	                for (var key in item) {
	                    if ((typeof item[key] === 'string' || item[key] instanceof String) &&
	                        (item[key].indexOf(args) > -1) && (key !== "_id")) {
	                        return true;
	                    }
	                }
	            });
	        }
	    };
	    StringFilterPipe = __decorate([
	        core_1.Pipe({
	            name: 'stringFilter'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], StringFilterPipe);
	    return StringFilterPipe;
	}());
	exports.StringFilterPipe = StringFilterPipe;
	

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var KSpaceService = (function () {
	    function KSpaceService(_http) {
	        this._http = _http;
	        this._kspaceUrl = '/api/kspace/:id';
	    }
	    KSpaceService.prototype.getAllKSpace = function () {
	        return this._http.get(this._kspaceUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    KSpaceService.prototype.getKSpaceById = function (id) {
	        return this._http.get(this._kspaceUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    KSpaceService.prototype.addKSpace = function (learner, lecturer, requestId, requestTitle, offerId) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _kspace = JSON.stringify({
	            lecturer: lecturer,
	            learner: learner,
	            requestId: requestId,
	            requestTitle: requestTitle,
	            offerId: offerId,
	        });
	        return this._http
	            .post(this._kspaceUrl.replace(':id', ''), _kspace, options)
	            .map(function (r) { return r.json(); });
	    };
	    KSpaceService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error || 'server error');
	    };
	    KSpaceService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], KSpaceService);
	    return KSpaceService;
	    var _a;
	}());
	exports.KSpaceService = KSpaceService;
	

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	/**
	 * @class AsyncSubject<T>
	 */
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.apply(this, arguments);
	        this.value = null;
	        this.hasNext = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.hasCompleted && this.hasNext) {
	            subscriber.next(this.value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype._next = function (value) {
	        this.value = value;
	        this.hasNext = true;
	    };
	    AsyncSubject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.isUnsubscribed = true;
	        if (this.hasNext) {
	            while (++index < len) {
	                var o = observers[index];
	                o.next(this.value);
	                o.complete();
	            }
	        }
	        else {
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    return AsyncSubject;
	}(Subject_1.Subject));
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(9);
	//services
	var badword_1 = __webpack_require__(419);
	var UpdateBadwordComponent = (function () {
	    function UpdateBadwordComponent(fb, _badwordService, router, route) {
	        var _this = this;
	        this._badwordService = _badwordService;
	        this.router = router;
	        this.route = route;
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.updateBadwordForm = fb.group({
	            "word": [""],
	            "_id": [""],
	        });
	    }
	    UpdateBadwordComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._badwordService.findBadwordById(this.id).subscribe(function (badword) {
	            _this.badword = badword;
	            _this.word = badword.word;
	            _this._id = badword._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    UpdateBadwordComponent.prototype.updateBadword = function (badword) {
	        this._badwordService.updateBadword(badword).subscribe(function (badword) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        this.router.navigateByUrl('admin/badwords');
	    };
	    UpdateBadwordComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-update',
	            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-update.html',
	            directives: [
	                common_1.FORM_DIRECTIVES,
	                router_1.ROUTER_DIRECTIVES
	            ],
	            providers: [badword_1.BadwordService]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(badword_1.BadwordService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof badword_1.BadwordService !== 'undefined' && badword_1.BadwordService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object])
	    ], UpdateBadwordComponent);
	    return UpdateBadwordComponent;
	    var _a, _b, _c, _d;
	}());
	exports.UpdateBadwordComponent = UpdateBadwordComponent;
	

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var knowledge_1 = __webpack_require__(38);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var UpdateKnowledgeComponent = (function () {
	    function UpdateKnowledgeComponent(fb, _knowledgeService, router, route) {
	        var _this = this;
	        this._knowledgeService = _knowledgeService;
	        this.router = router;
	        this.route = route;
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.updateKnowledgeForm = fb.group({
	            "name": [""],
	            "description": [""],
	            "_id": [""],
	        });
	    }
	    UpdateKnowledgeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.findKnowledgeById(this.id).subscribe(function (knowledge) {
	            _this.knowledge = knowledge;
	            _this.name = knowledge.name;
	            _this.description = knowledge.description;
	            _this._id = knowledge._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    UpdateKnowledgeComponent.prototype.updateKnowledge = function (knowledge) {
	        this._knowledgeService.updateKnowledge(knowledge).subscribe(function (knowledge) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        this.router.navigateByUrl('admin/knowledges');
	    };
	    UpdateKnowledgeComponent = __decorate([
	        core_1.Component({
	            selector: 'knowledge-update',
	            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-update.html',
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
	            providers: [knowledge_1.KnowledgeService]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(knowledge_1.KnowledgeService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object])
	    ], UpdateKnowledgeComponent);
	    return UpdateKnowledgeComponent;
	    var _a, _b, _c, _d;
	}());
	exports.UpdateKnowledgeComponent = UpdateKnowledgeComponent;
	

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var requests_1 = __webpack_require__(78);
	var knowledge_1 = __webpack_require__(38);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var UpdateRequestComponent = (function () {
	    function UpdateRequestComponent(fb, _requestService, router, route, _knowledgeService) {
	        var _this = this;
	        this._requestService = _requestService;
	        this.router = router;
	        this.route = route;
	        this._knowledgeService = _knowledgeService;
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.updateRequestFormCli = fb.group({
	            "_id": [""],
	            "title": [""],
	            "description": [""],
	            "knowledgeId": [""]
	        });
	    }
	    UpdateRequestComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get all back.knowledge
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	        this._requestService.getRequestById(this.id).subscribe(function (request) {
	            _this.request = request;
	            _this.title = request.title;
	            _this.description = request.description;
	            _this._id = request._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    UpdateRequestComponent.prototype.updateRequest = function (request) {
	        console.log(request);
	        this._requestService.updateRequest(request).subscribe(function (request) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        this.router.navigateByUrl('admin/requests');
	    };
	    UpdateRequestComponent = __decorate([
	        core_1.Component({
	            selector: 'request-update-cli',
	            templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_1.RequestService)),
	        __param(4, core_1.Inject(knowledge_1.KnowledgeService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object, (typeof (_e = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _e) || Object])
	    ], UpdateRequestComponent);
	    return UpdateRequestComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.UpdateRequestComponent = UpdateRequestComponent;
	

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var requests_1 = __webpack_require__(78);
	var RequestCategoryComponent = (function () {
	    function RequestCategoryComponent(_requestService, router, route) {
	        var _this = this;
	        this._requestService = _requestService;
	        this.router = router;
	        this.route = route;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.changeRoute = false;
	        this.route.params.subscribe(function (params) {
	            _this.id = params['id'];
	            _this.type = params['type'];
	        });
	    }
	    RequestCategoryComponent.prototype.ngOnInit = function () {
	        this.loadRequest(s);
	    };
	    RequestCategoryComponent.prototype.loadRequests = function () {
	        var _this = this;
	        //get templates from children category
	        if (this.type === "subcategory") {
	            this._requestService.getRequestByKnowledgeId(this.id).subscribe(function (requests) {
	                //format date
	                var formatDate = function (date) {
	                    if (date) {
	                        var newDate, day, month, year;
	                        year = date.substr(0, 4);
	                        month = date.substr(5, 2);
	                        day = date.substr(8, 2);
	                        return newDate = day + '/' + month + '/' + year;
	                    }
	                };
	                for (var i = 0; i < requests.length; i++) {
	                    requests[i].createdAt = formatDate(requests[i].createdAt);
	                    requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	                }
	                _this.requests = requests;
	            });
	        }
	        //get templates from parent category
	        if (this.type === "category") {
	            this._requestService.getKnowledgeByParent(this.id).subscribe(function (knowledges) {
	                var formatDate = function (date) {
	                    if (date) {
	                        var newDate, day, month, year;
	                        year = date.substr(0, 4);
	                        month = date.substr(5, 2);
	                        day = date.substr(8, 2);
	                        return newDate = day + '/' + month + '/' + year;
	                    }
	                };
	                var a = [];
	                _this.knowledges = knowledges;
	                for (var i = 0; i < _this.knowledges.length; i++) {
	                    _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
	                        //for each child back.knowledge get requests
	                        for (var j = 0; j < requests.length; j++) {
	                            a.push(requests[j]);
	                        }
	                        for (var i = 0; i < a.length; i++) {
	                            a[i].createdAt = formatDate(requests[i].createdAt);
	                            a[i].modifiedDate = formatDate(requests[i].modifiedDate);
	                        }
	                        _this.requests = a;
	                    });
	                }
	            }, function (Error) {
	                console.log(Error);
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RequestCategoryComponent.prototype, "search", void 0);
	    RequestCategoryComponent = __decorate([
	        core_1.Component({
	            selector: 'request-search-cli',
	            templateUrl: 'client/dev/app/components/front-end/request/templates/request-search.html',
	            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
	    ], RequestCategoryComponent);
	    return RequestCategoryComponent;
	    var _a, _b, _c;
	}());
	exports.RequestCategoryComponent = RequestCategoryComponent;
	

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
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
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "body", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "icon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "sound", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], PushNotificationComponent.prototype, "data", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "tag", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "dir", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PushNotificationComponent.prototype, "lang", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PushNotificationComponent.prototype, "renotify", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PushNotificationComponent.prototype, "sticky", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], PushNotificationComponent.prototype, "vibrate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PushNotificationComponent.prototype, "noscreen", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PushNotificationComponent.prototype, "silent", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PushNotificationComponent.prototype, "closeDelay", void 0);
	    __decorate([
	        core_1.Output('load'), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], PushNotificationComponent.prototype, "onLoad", void 0);
	    __decorate([
	        core_1.Output('show'), 
	        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
	    ], PushNotificationComponent.prototype, "onShow", void 0);
	    __decorate([
	        core_1.Output('close'), 
	        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
	    ], PushNotificationComponent.prototype, "onClose", void 0);
	    __decorate([
	        core_1.Output('error'), 
	        __metadata('design:type', (typeof (_d = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _d) || Object)
	    ], PushNotificationComponent.prototype, "onError", void 0);
	    __decorate([
	        core_1.Output('action'), 
	        __metadata('design:type', (typeof (_e = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _e) || Object)
	    ], PushNotificationComponent.prototype, "onClick", void 0);
	    PushNotificationComponent = __decorate([
	        core_1.Component({
	            selector: 'push-notification',
	            styles: [':host { display: none; }'],
	            template: ''
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PushNotificationComponent);
	    return PushNotificationComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.PushNotificationComponent = PushNotificationComponent;
	

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var OfferService = (function () {
	    function OfferService(_http) {
	        this._http = _http;
	        this._Url = '/api/offers/:id';
	    }
	    OfferService.prototype.addOffer = function (offer) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _offer = JSON.stringify({
	            price: offer.price,
	            requestId: offer.requestId,
	            numberOfLecture: offer.numOfLecture,
	            message: offer.message,
	            user: offer.user
	        });
	        //console.log(_offer);
	        return this._http
	            .post(this._Url.replace(':id', ''), _offer, options)
	            .map(function (r) { return r.json(); });
	    };
	    OfferService.prototype.getOfferByRequestId = function (id) {
	        return this._http.post(this._Url.replace(':id', id), '')
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    OfferService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    OfferService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], OfferService);
	    return OfferService;
	    var _a;
	}());
	exports.OfferService = OfferService;
	

/***/ },
/* 278 */,
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(79);
	var isArray_1 = __webpack_require__(82);
	var isScheduler_1 = __webpack_require__(95);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from this Observable with values from
	 * Observables passed as arguments. This is done by subscribing to each
	 * Observable, in order, and collecting an array of each of the most recent
	 * values any time any of the input Observables emits, then either taking that
	 * array and passing it as arguments to an optional `project` function and
	 * emitting the return value of that, or just emitting the array of recent
	 * values directly if there is no `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	/**
	 * Combines the values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @return {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 * @static true
	 * @name combineLatest
	 * @owner Observable
	 */
	function combineLatestStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
	}
	exports.combineLatestStatic = combineLatestStatic;
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	        this.toRespond = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        var toRespond = this.toRespond;
	        toRespond.push(toRespond.length);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	        if (toRespond.length === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(95);
	var ArrayObservable_1 = __webpack_require__(79);
	var mergeAll_1 = __webpack_require__(184);
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 282 */,
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(79);
	var isArray_1 = __webpack_require__(82);
	var Subscriber_1 = __webpack_require__(6);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	var iterator_1 = __webpack_require__(132);
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @method zip
	 * @owner Observable
	 */
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	exports.zipProto = zipProto;
	/* tslint:enable:max-line-length */
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @static true
	 * @name zip
	 * @owner Observable
	 */
	function zipStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
	}
	exports.zipStatic = zipStatic;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ZipSubscriber(subscriber, this.project));
	    };
	    return ZipOperator;
	}());
	exports.ZipOperator = ZipOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray_1.isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[iterator_1.$$iterator] === 'function') {
	            iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                this.add(iterator.subscribe(iterator, i));
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        if (this.project) {
	            this._tryProject(args);
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    ZipSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return ZipSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	}());
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[iterator_1.$$iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
	    };
	    return ZipBufferIterator;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=zip.js.map

/***/ },
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(82);
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var PaginationService = (function () {
	    function PaginationService() {
	        this.change = new core_1.EventEmitter();
	        this.instances = {};
	        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
	    }
	    Object.defineProperty(PaginationService.prototype, "defaultId", {
	        get: function () { return this.DEFAULT_ID; },
	        enumerable: true,
	        configurable: true
	    });
	    PaginationService.prototype.register = function (instance) {
	        if (!instance.id) {
	            instance.id = this.DEFAULT_ID;
	        }
	        if (!this.instances[instance.id]) {
	            this.instances[instance.id] = instance;
	            this.change.emit(instance.id);
	        }
	        else {
	            var changed = this.updateInstance(instance);
	            if (changed) {
	                this.change.emit(instance.id);
	            }
	        }
	    };
	    /**
	     * Check each property of the instance and update any that have changed. Return
	     * true if any changes were made, else return false.
	     */
	    PaginationService.prototype.updateInstance = function (instance) {
	        var changed = false;
	        for (var prop in this.instances[instance.id]) {
	            if (instance[prop] !== this.instances[instance.id][prop]) {
	                this.instances[instance.id][prop] = instance[prop];
	                changed = true;
	            }
	        }
	        return changed;
	    };
	    /**
	     * Returns the current page number.
	     */
	    PaginationService.prototype.getCurrentPage = function (id) {
	        if (this.instances[id]) {
	            return this.instances[id].currentPage;
	        }
	    };
	    /**
	     * Sets the current page number.
	     */
	    PaginationService.prototype.setCurrentPage = function (id, page) {
	        if (this.instances[id]) {
	            var instance = this.instances[id];
	            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
	            if (page <= maxPage && 1 <= page) {
	                this.instances[id].currentPage = page;
	                this.change.emit(id);
	            }
	        }
	    };
	    /**
	     * Sets the value of instance.totalItems
	     */
	    PaginationService.prototype.setTotalItems = function (id, totalItems) {
	        if (this.instances[id] && 0 <= totalItems) {
	            this.instances[id].totalItems = totalItems;
	            this.change.emit(id);
	        }
	    };
	    /**
	     * Sets the value of instance.itemsPerPage.
	     */
	    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
	        if (this.instances[id]) {
	            this.instances[id].itemsPerPage = itemsPerPage;
	            this.change.emit(id);
	        }
	    };
	    /**
	     * Returns a clone of the pagination instance object matching the id. If no
	     * id specified, returns the instance corresponding to the default id.
	     */
	    PaginationService.prototype.getInstance = function (id) {
	        if (id === void 0) { id = this.DEFAULT_ID; }
	        if (this.instances[id]) {
	            return this.clone(this.instances[id]);
	        }
	        return {};
	    };
	    /**
	     * Perform a shallow clone of an object.
	     */
	    PaginationService.prototype.clone = function (obj) {
	        var target = {};
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i)) {
	                target[i] = obj[i];
	            }
	        }
	        return target;
	    };
	    return PaginationService;
	}());
	exports.PaginationService = PaginationService;


/***/ },
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var badword_1 = __webpack_require__(419);
	var badword_update_1 = __webpack_require__(272);
	var ng2_pagination_1 = __webpack_require__(140);
	var filter_1 = __webpack_require__(177);
	var BadwordListComponent = (function () {
	    function BadwordListComponent(fb, badwordService, router) {
	        this.badwordService = badwordService;
	        this.router = router;
	        this.pageTitle = 'Badword List';
	        this.filter = '';
	        this.maxSize = 7;
	        this.directionLinks = true;
	        this.autoHide = false;
	        this.config = {
	            id: 'advanced',
	            itemsPerPage: 10,
	            currentPage: 1
	        };
	        this.badwordForm = fb.group({
	            "word": [""],
	        });
	    }
	    BadwordListComponent.prototype.ngOnInit = function () {
	        this.getAll();
	    };
	    BadwordListComponent.prototype.getAll = function () {
	        var _this = this;
	        this.badwordService
	            .getAllBadwords()
	            .subscribe(function (badwords) {
	            _this.badwords = badwords;
	        });
	    };
	    BadwordListComponent.prototype.deleteBadword = function (id) {
	        var _this = this;
	        this.badwordService
	            .deleteBadword(id)
	            .subscribe(function () {
	            _this.badwords.forEach(function (t, i) {
	                if (t._id === id)
	                    return _this.badwords.splice(i, 1);
	            });
	        });
	    };
	    BadwordListComponent.prototype.findBadwordById = function (id) {
	        this.badwordService
	            .findBadwordById(id)
	            .subscribe(function (badwords) {
	            return badwords;
	        });
	    };
	    BadwordListComponent.prototype.addBadword = function (word) {
	        var _this = this;
	        this.badwordService
	            .addBadword(word)
	            .subscribe(function (word) {
	            _this.badwords.push(word);
	            _this.badwordForm.controls["word"].updateValue("");
	        });
	    };
	    BadwordListComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-list',
	            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-list.html',
	            directives: [ng2_pagination_1.PaginationControlsCmp, badword_update_1.UpdateBadwordComponent, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
	            providers: [badword_1.BadwordService, ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof badword_1.BadwordService !== 'undefined' && badword_1.BadwordService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], BadwordListComponent);
	    return BadwordListComponent;
	    var _a, _b, _c;
	}());
	exports.BadwordListComponent = BadwordListComponent;
	

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var knowledge_1 = __webpack_require__(38);
	var knowledge_update_1 = __webpack_require__(273);
	var sub_knowledge_create_1 = __webpack_require__(601);
	var ng2_pagination_1 = __webpack_require__(140);
	var filter_1 = __webpack_require__(177);
	var KnowledgeListComponent = (function () {
	    function KnowledgeListComponent(fb, _knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	        this.pageTitle = 'Knowledge List';
	        this.knowledgeForm = fb.group({
	            "name": [""],
	            "description": [""],
	        });
	        this.subCategoryForm = fb.group({
	            "name": [""],
	            "description": [""],
	            "parent": [""]
	        });
	    }
	    KnowledgeListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            console.log(knowledges);
	            /*this.knowledges = this._knowledgeService.getChildFromParent(knowledges);*/
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	    };
	    KnowledgeListComponent.prototype.deleteKnowledge = function (id) {
	        var _this = this;
	        this._knowledgeService
	            .deleteKnowledge(id)
	            .subscribe(function () {
	            _this.knowledges.forEach(function (t, i) {
	                if (t._id === id)
	                    return _this.knowledges.splice(i, 1);
	            });
	        });
	    };
	    KnowledgeListComponent.prototype.addKnowledge = function (knowledge) {
	        var _this = this;
	        this._knowledgeService
	            .addKnowledge(knowledge)
	            .subscribe(function (m) {
	            _this.knowledges.push(m);
	            _this.knowledgeForm.controls["name"].updateValue("");
	            _this.knowledgeForm.controls["description"].updateValue("");
	        });
	    };
	    KnowledgeListComponent.prototype.addSubKnowledge = function (knowledge) {
	        var _this = this;
	        this._knowledgeService
	            .addKnowledge(knowledge)
	            .subscribe(function (m) {
	            _this.subCategoryForm.controls["name"].updateValue("");
	            _this.subCategoryForm.controls["description"].updateValue("");
	            for (var i = 0; i < _this.knowledges.length; i++) {
	                if (_this.knowledges[i]._id === m.parent) {
	                    console.log(_this.knowledges[i]._id);
	                    var a = [];
	                    a.push(m);
	                    _this.knowledges[i]["subCategory"] = a;
	                }
	            }
	        });
	    };
	    KnowledgeListComponent = __decorate([
	        core_1.Component({
	            selector: 'knowledge-list',
	            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
	            directives: [
	                knowledge_update_1.UpdateKnowledgeComponent,
	                sub_knowledge_create_1.CreateSubCategoryComponent,
	                router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
	            providers: [knowledge_1.KnowledgeService, ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _b) || Object])
	    ], KnowledgeListComponent);
	    return KnowledgeListComponent;
	    var _a, _b;
	}());
	exports.KnowledgeListComponent = KnowledgeListComponent;
	

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var knowledge_1 = __webpack_require__(38);
	var requests_1 = __webpack_require__(78);
	var auth_1 = __webpack_require__(54);
	var request_update_1 = __webpack_require__(274);
	var ng2_pagination_1 = __webpack_require__(140);
	var filter_1 = __webpack_require__(177);
	var RequestListComponent = (function () {
	    function RequestListComponent(fb, _requestService, _knowledgeService, _authService) {
	        var _this = this;
	        this._requestService = _requestService;
	        this._knowledgeService = _knowledgeService;
	        this._authService = _authService;
	        this.pageTitle = 'Request List';
	        this.filter = '';
	        this.user = localStorage.getItem('username');
	        this.roleToken = localStorage.getItem('userrole');
	        this.requestForm = fb.group({
	            "knowledgeId": [""],
	            "title": [""],
	            "description": [""],
	            "user": [""]
	        });
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	    }
	    RequestListComponent.prototype.addRequest = function (request) {
	        var _this = this;
	        this._requestService.addRequest(request).subscribe(function (request) {
	            _this.requests.push(request);
	            _this.requestForm.controls["title"].updateValue("");
	            _this.requestForm.controls["description"].updateValue("");
	            _this.requestForm.controls["knowledgeId"].updateValue("");
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    RequestListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._requestService.getAllRequests().subscribe(function (requests) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < requests.length; i++) {
	                requests[i].createdAt = formatDate(requests[i].createdAt);
	                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	            }
	            _this.requests = requests;
	        });
	    };
	    RequestListComponent.prototype.deleteRequest = function (id) {
	        var _this = this;
	        this._requestService
	            .deleteRequest(id)
	            .subscribe(function () {
	            _this.requests.forEach(function (t, i) {
	                if (t._id === id)
	                    return _this.requests.splice(i, 1);
	            });
	        });
	    };
	    RequestListComponent = __decorate([
	        core_1.Component({
	            selector: 'request-list',
	            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
	            directives: [request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
	            providers: [requests_1.RequestService, ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_1.RequestService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _c) || Object, (typeof (_d = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _d) || Object])
	    ], RequestListComponent);
	    return RequestListComponent;
	    var _a, _b, _c, _d;
	}());
	exports.RequestListComponent = RequestListComponent;
	

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var users_1 = __webpack_require__(131);
	var auth_1 = __webpack_require__(54);
	var ng2_pagination_1 = __webpack_require__(140);
	var filter_1 = __webpack_require__(177);
	var UserListComponent = (function () {
	    function UserListComponent(fb, _userService, _auth, router) {
	        this._userService = _userService;
	        this._auth = _auth;
	        this.router = router;
	        this.pageTitle = 'users';
	        this.filter = '';
	        this.numOfUser = 0;
	        this.userForm = fb.group({
	            firstName: [""],
	            lastName: [""],
	            displayName: [""],
	            birthday: [""],
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.required],
	            email: ["", common_1.Validators.required],
	            role: ["", common_1.Validators.required],
	            ownKnowledgeId: [""],
	            interestedKnowledgeId: [""],
	            onlineTime: [""]
	        });
	    }
	    UserListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._userService
	            .getAllUsers()
	            .then(function (users) {
	            for (var i = 0; i < users.length; i++) {
	                if (users[i].birthday) {
	                    users[i].birthday = new Date(users[i].birthday);
	                }
	                users[i].createdAt = new Date(users[i].createdAt);
	                if (users[i].updatedAt) {
	                    users[i].updatedAt = new Date(users[i].updatedAt);
	                }
	            }
	            _this.users = users;
	            _this.numOfUser = i;
	        }, function (error) {
	            _this.errorMessage = error.message;
	            console.log(error);
	        });
	    };
	    UserListComponent = __decorate([
	        core_1.Component({
	            selector: 'user-list',
	            templateUrl: 'client/dev/app/components/back-end/users/templates/user-list.html',
	            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
	            providers: [users_1.UserService, ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof users_1.UserService !== 'undefined' && users_1.UserService) === 'function' && _b) || Object, (typeof (_c = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
	    ], UserListComponent);
	    return UserListComponent;
	    var _a, _b, _c, _d;
	}());
	exports.UserListComponent = UserListComponent;
	

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
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
	            templateUrl: 'client/dev/app/components/front-end/home/templates/home.html',
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 7/9/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var KSpaceInfoComponent = (function () {
	    function KSpaceInfoComponent(router, route) {
	        var _this = this;
	        this.router = router;
	        this.route = route;
	        this.accessRoomBtn = 'Access Room';
	        this.route.params.subscribe(function (params) {
	            _this.kspaceId = params['id'];
	        });
	    }
	    KSpaceInfoComponent.prototype.ngOnInit = function () {
	    };
	    KSpaceInfoComponent.prototype.accessRoom = function () {
	        var specs = 'resizable=yes, fullscreen=yes';
	        var name = '_blank';
	        var url = '/room/' + this.kspaceId;
	        window.open(url, name, specs);
	        //this.router.navigateByUrl('/kspace/room/'+this.kspaceId);
	    };
	    KSpaceInfoComponent = __decorate([
	        core_1.Component({
	            template: "\n      <div class=\"container mg-top-50\">\n      <button (click)=\"accessRoom()\">{{accessRoomBtn}}</button>\n      </div>\n    ",
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
	    ], KSpaceInfoComponent);
	    return KSpaceInfoComponent;
	    var _a, _b;
	}());
	exports.KSpaceInfoComponent = KSpaceInfoComponent;
	

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 7/9/16.
	 */
	var core_1 = __webpack_require__(1);
	var kspace_1 = __webpack_require__(178);
	var router_1 = __webpack_require__(9);
	var KSpaceListComponent = (function () {
	    function KSpaceListComponent(_kspaceService, router) {
	        this._kspaceService = _kspaceService;
	        this.router = router;
	    }
	    KSpaceListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        console.log('dmc');
	        this._kspaceService
	            .getAllKSpace()
	            .subscribe(function (kspaces) {
	            console.log(kspaces);
	            for (var i = 0; i < kspaces.length; i++) {
	                kspaces[i].createdAt = new Date(kspaces[i].createdAt);
	            }
	            _this.kspaces = kspaces;
	        }, function (error) {
	            _this.errorMessage = error.message;
	            console.log(error);
	        });
	    };
	    KSpaceListComponent = __decorate([
	        core_1.Component({
	            template: "\n    <div class=\"container mg-top-50\">\n          <!-- list all-->\n          <div class=\"search-container\">\n             <form role=\"search\">\n                     <div class=\"search-component\">\n                        <input #text type=\"text\" class=\"form-control search-input\" placeholder=\"Nh\u1EADp n\u1ED9i dung t\u00ECm ki\u1EBFm\">\n                        <button (click)=\"search(text.value)\" type=\"submit\"\n                        class=\"search-button fa fa-search fa-2x\"\n                        aria-hidden=\"true\"></button>\n                     </div>\n              </form>\n           </div><!-- /.search-component -->\n          <div *ngIf=\"kspaces\" id=\"kspace-list-component\" class=\"col-md-12\">\n            <div class=\"panel panel-default card-rq\" *ngFor=\"let kspace of kspaces\">\n              <div class=\"panel-body\">\n                <a [routerLink]=\"['/kspace/info/',kspace._id]\" >\n                  <p class=\"lead\">{{kspace.requestTitle}}</p>\n                </a>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Ng\u01B0\u1EDDi y\u00EAu c\u1EA7u : {{kspace.learner}}\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Ng\u01B0\u1EDDi d\u1EA1y : {{kspace.lecturer}}\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Tr\u1EA1ng th\u00E1i : ddddddd\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left fixEfMenu\">\n                  Ng\u00E0y t\u1EA1o : {{kspace.createdAt | date:\"dd/MM/yyyy\"}}\n                </div>\n            </div>\n          </div>\n    </div><!-- /.container -->\n    ",
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ],
	            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace-list.css']
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof kspace_1.KSpaceService !== 'undefined' && kspace_1.KSpaceService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], KSpaceListComponent);
	    return KSpaceListComponent;
	    var _a, _b;
	}());
	exports.KSpaceListComponent = KSpaceListComponent;
	

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var kspace_1 = __webpack_require__(178);
	var rtc_services_1 = __webpack_require__(606);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	//import { ChatComponent } from './chat';
	var chalkboard_1 = __webpack_require__(605);
	var KSpaceComponent = (function () {
	    function KSpaceComponent(router, route, _kspaceService, rtcService) {
	        var _this = this;
	        this.router = router;
	        this.route = route;
	        this._kspaceService = _kspaceService;
	        this.rtcService = rtcService;
	        this.messages = [];
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.username = localStorage.getItem('username');
	    }
	    KSpaceComponent.prototype.chatting = function (mess) {
	        var username = this.username;
	        var messages = this.messages;
	        messages.push(username + ': ' + mess);
	        this.messages = messages;
	    };
	    /*
	    * Init when the component is initiated
	    *
	    * */
	    KSpaceComponent.prototype.ngOnInit = function () {
	        // DOM elements
	        var _this = this;
	        var shareScreenBtn = $('#sharescreen-btn');
	        var chalkBoardBtn = $('#chalkboard-btn');
	        var videoCallBtn = $('#videocall-btn');
	        var localVideo = $('#localVideo');
	        var remoteVideos = $('#remoteVideos');
	        var kspacePanel = $('#kspace-panel');
	        var chatBox = $('#chat-box-panel');
	        var drawTools = $('#draw-tools-panel');
	        // initiate setting
	        var chatToolShow = false;
	        $('#chat-panel').hide();
	        //show chat-panel
	        $('#chat').click(function () {
	            if (!chatToolShow) {
	                $('#chat-panel').show();
	                $('#kspace-panel').css('right', '18%');
	                $('#draw-option').css('margin-left', '96.8%');
	                chatToolShow = true;
	            }
	            else {
	                $('#chat-panel').hide();
	                $('#kspace-panel').css('right', '6%');
	                $('#draw-option').css('margin-left', '97.15%');
	                chatToolShow = false;
	            }
	        });
	        this._kspaceService
	            .getKSpaceById(this.id)
	            .subscribe(function (kspace) {
	            var room = kspace._id;
	            var username = _this.username;
	            var rtc = _this.rtcService;
	            var socket = io('http://localhost:3333');
	            socket.emit('subscribe', room);
	            // $('#chat-form').submit(function () {
	            //   var message = $('#chat-input').val()
	            //   if(message && username){
	            //     var messages = showMessage(username, message);
	            //     this.messages = messages;
	            //   }
	            // })
	            var isKspaceUser = function () {
	                if (username === kspace.lecturer || username === kspace.learner) {
	                    return true;
	                }
	                return false;
	            };
	            if (isKspaceUser) {
	                // initiate webrtc
	                if (username === kspace.lecturer) {
	                    var webrtc = new SimpleWebRTC({
	                        localVideoEl: 'localVideo',
	                        remoteVideosEl: '',
	                        autoRequestMedia: true,
	                        nick: username,
	                        localVideo: {
	                            autoplay: true,
	                            mirror: true,
	                            muted: true // mute local video stream to prevent echo
	                        },
	                        log: true,
	                        debug: false
	                    });
	                }
	                else if (username === kspace.learner) {
	                    var webrtc = new SimpleWebRTC({
	                        remoteVideosEl: '',
	                        nick: username,
	                        media: { video: false, audio: true }
	                    });
	                }
	                console.log(webrtc);
	                rtc.rtcSetting(webrtc, room, kspace.lecturer);
	                var peers = webrtc.getPeers();
	                var sharescreenToken = false;
	                shareScreenBtn.click(function () {
	                    sharescreenToken = rtc.shareScreen(webrtc, sharescreenToken);
	                });
	                chalkBoardBtn.click(function () {
	                    kspacePanel.find('video').remove();
	                });
	            }
	            else {
	                _this.router.navigateByUrl('/');
	            }
	        }, function (error) {
	            _this.router.navigateByUrl('/');
	        });
	    };
	    KSpaceComponent = __decorate([
	        core_1.Component({
	            selector: 'kspace',
	            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
	            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                common_1.FORM_DIRECTIVES,
	                chalkboard_1.ChalkBoardComponent
	            ],
	            providers: [
	                rtc_services_1.WebRCTService
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof kspace_1.KSpaceService !== 'undefined' && kspace_1.KSpaceService) === 'function' && _c) || Object, (typeof (_d = typeof rtc_services_1.WebRCTService !== 'undefined' && rtc_services_1.WebRCTService) === 'function' && _d) || Object])
	    ], KSpaceComponent);
	    return KSpaceComponent;
	    var _a, _b, _c, _d;
	}());
	exports.KSpaceComponent = KSpaceComponent;
	

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var requests_1 = __webpack_require__(78);
	var request_offer_1 = __webpack_require__(277);
	var knowledge_1 = __webpack_require__(38);
	var kspace_1 = __webpack_require__(178);
	var offer_create_1 = __webpack_require__(607);
	var RequestDetailClientComponent = (function () {
	    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, _kspaceService, route) {
	        var _this = this;
	        this._requestService = _requestService;
	        this._offerService = _offerService;
	        this.router = router;
	        this._knowledgeService = _knowledgeService;
	        this._kspaceService = _kspaceService;
	        this.route = route;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.roleToken = localStorage.getItem('role');
	        this.userToken = localStorage.getItem('username');
	    }
	    RequestDetailClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get templates when load the page
	        this._requestService.getRequestById(this.id)
	            .subscribe(function (request) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            request.createdAt = formatDate(request.createdAt);
	            request.userlink = '/user/' + request.user;
	            _this._id = request._id;
	            _this.updateLink = '/requests/' + request._id + '/update';
	            _this.knowledgeId = request.knowledgeId;
	            _this.subscribers = request.subcribers;
	            if (request.status === "deactive") {
	                _this.checkDeactive = true;
	            }
	            if (request.user === _this.userToken) {
	                _this.checkCreatedUser = true;
	            }
	            for (var i = 0; i < _this.subscribers.length; i++) {
	                if (_this.userToken === _this.subscribers[i]) {
	                    _this.checkSubcribedUser = true;
	                    console.log(_this.checkSubcribedUser + " " + i);
	                    break;
	                }
	            }
	            _this.request = request;
	            //get back.knowledge name by knowledgeId
	            _this._knowledgeService.findKnowledgeById(_this.knowledgeId)
	                .subscribe(function (knowledge) {
	                _this.knowledge = knowledge;
	                //this.knowledgeName = this.knowledge.name;
	            }, function (error) {
	                console.log(error);
	            });
	        }, function (error) { return console.log(error); });
	        //get front.offer of the templates when load the page
	        this._offerService.getOfferByRequestId(this.id).subscribe(function (offers) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < offers.length; i++) {
	                offers[i].createdAt = formatDate(offers[i].createdAt);
	            }
	            _this.offers = offers;
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    RequestDetailClientComponent.prototype.deactivateRequest = function (id) {
	        var _this = this;
	        var r = confirm("Bạn có muốn kết thúc yêu cầu này?");
	        if (r == true) {
	            this._requestService
	                .changeStatusRequest(this.id)
	                .subscribe(function (r) {
	                console.log("deactivate sucess");
	                _this.router.navigateByUrl('/kshare/requests/');
	            });
	        }
	    };
	    RequestDetailClientComponent.prototype.addKshare = function (learner, lecturer, requestId, requestTitle, offerId) {
	        var _this = this;
	        this._kspaceService
	            .addKSpace(learner, lecturer, requestId, requestTitle, offerId)
	            .subscribe(function (r) {
	            _this.router.navigateByUrl('/kspace/info/' + r._id);
	        });
	    };
	    RequestDetailClientComponent.prototype.addSubcriber = function (id) {
	        var _this = this;
	        if (this.checkSubcribedUser == true) {
	            alert('Bạn đã theo dõi vài viết này');
	        }
	        else {
	            this._requestService
	                .updateSubcriber(id, this.userToken)
	                .subscribe(function (r) {
	                console.log(r);
	                console.log("add subcriber successfull");
	                _this.checkSubcribedUser = true;
	            });
	            this._requestService.getRequestById(this.id).subscribe(function (request) {
	                _this.subscribers = request.subcribers;
	            });
	        }
	    };
	    RequestDetailClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-detail-cli',
	            templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
	            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                offer_create_1.CreateOfferComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof request_offer_1.OfferService !== 'undefined' && request_offer_1.OfferService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _d) || Object, (typeof (_e = typeof kspace_1.KSpaceService !== 'undefined' && kspace_1.KSpaceService) === 'function' && _e) || Object, (typeof (_f = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _f) || Object])
	    ], RequestDetailClientComponent);
	    return RequestDetailClientComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.RequestDetailClientComponent = RequestDetailClientComponent;
	

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var requests_1 = __webpack_require__(78);
	var friend_list_1 = __webpack_require__(609);
	var request_create_1 = __webpack_require__(602);
	var request_search_1 = __webpack_require__(275);
	var auth_1 = __webpack_require__(54);
	var router_2 = __webpack_require__(9);
	var ng2_pagination_1 = __webpack_require__(140);
	var RequestListClientComponent = (function () {
	    function RequestListClientComponent(_requestService, _auth, router) {
	        this._requestService = _requestService;
	        this._auth = _auth;
	        this.router = router;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.configRq = {
	            id: 'rq',
	            itemsPerPage: 10,
	            currentPage: 1
	        };
	        this.configRs = {
	            id: 'rs',
	            itemsPerPage: 10,
	            currentPage: 1
	        };
	        this.roleToken = localStorage.getItem('role');
	        this.userToken = localStorage.getItem('username');
	    }
	    RequestListClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.hide = false;
	        this._requestService.getAllRequests().subscribe(function (requests) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < requests.length; i++) {
	                requests[i].createdAt = formatDate(requests[i].createdAt);
	                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	                requests[i].link = requests[i]._id + '/info';
	            }
	            _this.requests = requests;
	        });
	    };
	    RequestListClientComponent.prototype.search = function (search) {
	        var _this = this;
	        this._requestService.searchRequest(search).subscribe(function (requests) {
	            _this.searchs = requests;
	            _this.hide = true;
	        });
	    };
	    RequestListClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-list-cli',
	            templateUrl: 'client/dev/app/components/front-end/request/templates/request-list.html',
	            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
	            directives: [
	                ng2_pagination_1.PaginationControlsCmp,
	                router_1.ROUTER_DIRECTIVES,
	                friend_list_1.FriendListComponent,
	                request_create_1.CreateRequestComponent,
	                request_search_1.RequestCategoryComponent
	            ],
	            providers: [ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_2.Router !== 'undefined' && router_2.Router) === 'function' && _c) || Object])
	    ], RequestListClientComponent);
	    return RequestListClientComponent;
	    var _a, _b, _c;
	}());
	exports.RequestListClientComponent = RequestListClientComponent;
	

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(18);
	var requests_1 = __webpack_require__(78);
	var knowledge_1 = __webpack_require__(38);
	var RequestUpdateClientComponent = (function () {
	    function RequestUpdateClientComponent(fb, _requestService, router, route, _knowledgeService) {
	        var _this = this;
	        this._requestService = _requestService;
	        this.router = router;
	        this.route = route;
	        this._knowledgeService = _knowledgeService;
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.id = params['id'];
	        });
	        this.updateRequestFormCli = fb.group({
	            "_id": [""],
	            "title": [""],
	            "description": [""],
	            "knowledgeId": [""]
	        });
	    }
	    RequestUpdateClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get all back.knowledge
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	        this._requestService.getRequestById(this.id).subscribe(function (request) {
	            _this.request = request;
	            _this.title = request.title;
	            _this._id = request._id;
	            _this.description = request.description;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    RequestUpdateClientComponent.prototype.updateRequest = function (request) {
	        this._requestService.updateRequest(request).subscribe(function (request) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        //window.location.href = '/kshare/requests/'+this.id;
	    };
	    RequestUpdateClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-update-cli',
	            templateUrl: 'client/dev/app/components/front-end/request/templates/request-update.html',
	            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_1.RequestService)),
	        __param(4, core_1.Inject(knowledge_1.KnowledgeService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object, (typeof (_e = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _e) || Object])
	    ], RequestUpdateClientComponent);
	    return RequestUpdateClientComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.RequestUpdateClientComponent = RequestUpdateClientComponent;
	

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	//components
	var notification_1 = __webpack_require__(276);
	//services
	var users_1 = __webpack_require__(131);
	var knowledge_1 = __webpack_require__(38);
	var FriendListComponent = (function () {
	    function FriendListComponent(router, route, _userService, _knowledgeService) {
	        var _this = this;
	        this.router = router;
	        this.route = route;
	        this._userService = _userService;
	        this._knowledgeService = _knowledgeService;
	        this.roleToken = localStorage.getItem('role');
	        this.userToken = localStorage.getItem('username');
	        this.route
	            .params
	            .subscribe(function (params) {
	            _this.name = params['name'];
	        });
	    }
	    FriendListComponent.prototype.ngOnInit = function () {
	        console.log(this.name);
	        this.pendingRequests = [];
	        this.getFriendList();
	    };
	    //get friend list: pending and accepted
	    FriendListComponent.prototype.getFriendList = function () {
	        var _this = this;
	        this._userService
	            .getFriendList(this.name)
	            .subscribe(function (friendlist) {
	            _this.friendships = friendlist;
	            //check sent request
	            for (var i = 0; i < _this.friendships.length; i++) {
	                if (_this.friendships[i].user2 === _this.name && _this.friendships[i].status === "pending") {
	                    _this.pendingRequests.push(_this.friendships[i]);
	                }
	            }
	        });
	    };
	    FriendListComponent = __decorate([
	        core_1.Component({
	            selector: 'request-record',
	            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/friend-list.html',
	            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                notification_1.PushNotificationComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof users_1.UserService !== 'undefined' && users_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _d) || Object])
	    ], FriendListComponent);
	    return FriendListComponent;
	    var _a, _b, _c, _d;
	}());
	exports.FriendListComponent = FriendListComponent;
	

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	//components
	var notification_1 = __webpack_require__(276);
	var request_record_1 = __webpack_require__(614);
	//services
	var users_1 = __webpack_require__(131);
	var knowledge_1 = __webpack_require__(38);
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
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof users_1.UserService !== 'undefined' && users_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _d) || Object])
	    ], UserProfileComponent);
	    return UserProfileComponent;
	    var _a, _b, _c, _d;
	}());
	exports.UserProfileComponent = UserProfileComponent;
	

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 6/4/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	/**
	 * Shared components
	 */
	var header_1 = __webpack_require__(610);
	var side_bar_1 = __webpack_require__(613);
	var footer_1 = __webpack_require__(608);
	var login_1 = __webpack_require__(611);
	var register_1 = __webpack_require__(612);
	var user_profile_1 = __webpack_require__(417);
	/**
	 * Page components
	 */
	var home_1 = __webpack_require__(409);
	var request_list_1 = __webpack_require__(414);
	var request_detail_1 = __webpack_require__(413);
	var request_update_1 = __webpack_require__(415);
	var request_search_1 = __webpack_require__(275);
	var kspace_1 = __webpack_require__(412);
	var kspace_list_1 = __webpack_require__(411);
	var kspace_info_1 = __webpack_require__(410);
	var friend_list_1 = __webpack_require__(416);
	/**
	 * Page components
	 */
	var KshareComponent = (function () {
	    function KshareComponent() {
	    }
	    KshareComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare-app',
	            template: "\n    <header></header>\n    <sidebar></sidebar>\n    <router-outlet></router-outlet>\n    <login></login>\n    <register></register>\n    <footer></footer>\n  ",
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                header_1.HeaderComponent,
	                side_bar_1.SideBarComponent,
	                footer_1.FooterComponent,
	                login_1.LoginComponent,
	                register_1.RegisterComponent
	            ],
	            precompile: [
	                home_1.HomeComponent,
	                request_list_1.RequestListClientComponent,
	                request_detail_1.RequestDetailClientComponent,
	                request_update_1.RequestUpdateClientComponent,
	                request_search_1.RequestCategoryComponent,
	                kspace_1.KSpaceComponent,
	                kspace_list_1.KSpaceListComponent,
	                kspace_info_1.KSpaceInfoComponent,
	                user_profile_1.UserProfileComponent,
	                friend_list_1.FriendListComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], KshareComponent);
	    return KshareComponent;
	}());
	exports.KshareComponent = KshareComponent;
	

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	var Observable_1 = __webpack_require__(2);
	var BadwordService = (function () {
	    function BadwordService(_http) {
	        this._http = _http;
	        this._badwordsUrl = '/api/badwords/:id';
	    }
	    BadwordService.prototype.getAllBadwords = function () {
	        return this._http.get(this._badwordsUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    BadwordService.prototype.addBadword = function (badword) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _badword = JSON.stringify({
	            word: badword.word,
	        });
	        console.log(_badword);
	        console.log(header);
	        return this._http
	            .post(this._badwordsUrl.replace(':id', ''), _badword, options)
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.deleteBadword = function (id) {
	        return this._http
	            .delete(this._badwordsUrl.replace(':id', id));
	    };
	    BadwordService.prototype.findBadwordById = function (id) {
	        return this._http
	            .get(this._badwordsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.updateBadword = function (badword) {
	        console.log(badword);
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _badword = JSON.stringify({
	            word: badword.word,
	        });
	        return this._http
	            .put(this._badwordsUrl.replace(':id', badword._id), _badword, options)
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    BadwordService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], BadwordService);
	    return BadwordService;
	    var _a;
	}());
	exports.BadwordService = BadwordService;
	

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var queue_1 = __webpack_require__(444);
	var observeOn_1 = __webpack_require__(282);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	var Subject_1 = __webpack_require__(17);
	exports.Subject = Subject_1.Subject;
	/* tslint:enable:no-unused-variable */
	var Observable_1 = __webpack_require__(2);
	exports.Observable = Observable_1.Observable;
	// statics
	/* tslint:disable:no-use-before-declare */
	__webpack_require__(622);
	__webpack_require__(623);
	__webpack_require__(624);
	__webpack_require__(625);
	__webpack_require__(626);
	__webpack_require__(627);
	__webpack_require__(422);
	__webpack_require__(423);
	__webpack_require__(628);
	__webpack_require__(629);
	__webpack_require__(424);
	__webpack_require__(630);
	__webpack_require__(631);
	__webpack_require__(634);
	__webpack_require__(632);
	__webpack_require__(633);
	__webpack_require__(635);
	__webpack_require__(636);
	__webpack_require__(637);
	__webpack_require__(638);
	//operators
	__webpack_require__(641);
	__webpack_require__(642);
	__webpack_require__(643);
	__webpack_require__(644);
	__webpack_require__(645);
	__webpack_require__(646);
	__webpack_require__(647);
	__webpack_require__(648);
	__webpack_require__(649);
	__webpack_require__(650);
	__webpack_require__(651);
	__webpack_require__(652);
	__webpack_require__(653);
	__webpack_require__(654);
	__webpack_require__(659);
	__webpack_require__(655);
	__webpack_require__(425);
	__webpack_require__(656);
	__webpack_require__(657);
	__webpack_require__(658);
	__webpack_require__(660);
	__webpack_require__(661);
	__webpack_require__(662);
	__webpack_require__(663);
	__webpack_require__(664);
	__webpack_require__(665);
	__webpack_require__(666);
	__webpack_require__(667);
	__webpack_require__(639);
	__webpack_require__(640);
	__webpack_require__(668);
	__webpack_require__(669);
	__webpack_require__(426);
	__webpack_require__(182);
	__webpack_require__(670);
	__webpack_require__(671);
	__webpack_require__(672);
	__webpack_require__(427);
	__webpack_require__(278);
	__webpack_require__(673);
	__webpack_require__(674);
	__webpack_require__(428);
	__webpack_require__(675);
	__webpack_require__(676);
	__webpack_require__(429);
	__webpack_require__(677);
	__webpack_require__(679);
	__webpack_require__(678);
	__webpack_require__(680);
	__webpack_require__(430);
	__webpack_require__(681);
	__webpack_require__(682);
	__webpack_require__(683);
	__webpack_require__(684);
	__webpack_require__(685);
	__webpack_require__(686);
	__webpack_require__(687);
	__webpack_require__(688);
	__webpack_require__(689);
	__webpack_require__(690);
	__webpack_require__(691);
	__webpack_require__(692);
	__webpack_require__(693);
	__webpack_require__(694);
	__webpack_require__(695);
	__webpack_require__(696);
	__webpack_require__(431);
	__webpack_require__(697);
	__webpack_require__(698);
	__webpack_require__(699);
	__webpack_require__(700);
	__webpack_require__(701);
	__webpack_require__(702);
	__webpack_require__(703);
	__webpack_require__(704);
	__webpack_require__(432);
	__webpack_require__(705);
	__webpack_require__(706);
	__webpack_require__(707);
	__webpack_require__(708);
	__webpack_require__(709);
	__webpack_require__(710);
	__webpack_require__(711);
	__webpack_require__(712);
	/* tslint:disable:no-unused-variable */
	var Operator_1 = __webpack_require__(620);
	exports.Operator = Operator_1.Operator;
	var Subscription_1 = __webpack_require__(39);
	exports.Subscription = Subscription_1.Subscription;
	var Subscriber_1 = __webpack_require__(6);
	exports.Subscriber = Subscriber_1.Subscriber;
	var AsyncSubject_1 = __webpack_require__(179);
	exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
	var ReplaySubject_1 = __webpack_require__(420);
	exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
	var BehaviorSubject_1 = __webpack_require__(180);
	exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
	var ConnectableObservable_1 = __webpack_require__(433);
	exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
	var Notification_1 = __webpack_require__(181);
	exports.Notification = Notification_1.Notification;
	var EmptyError_1 = __webpack_require__(188);
	exports.EmptyError = EmptyError_1.EmptyError;
	var ArgumentOutOfRangeError_1 = __webpack_require__(285);
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	var ObjectUnsubscribedError_1 = __webpack_require__(286);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
	var UnsubscriptionError_1 = __webpack_require__(445);
	exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
	var asap_1 = __webpack_require__(443);
	var async_1 = __webpack_require__(40);
	var queue_1 = __webpack_require__(444);
	var rxSubscriber_1 = __webpack_require__(187);
	var observable_1 = __webpack_require__(186);
	var iterator_1 = __webpack_require__(132);
	/* tslint:enable:no-unused-variable */
	/**
	 * @typedef {Object} Rx.Scheduler
	 * @property {Scheduler} queue Schedules on a queue in the current event frame
	 * (trampoline scheduler). Use this for iteration operations.
	 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
	 * fastest transport mechanism available, either Node.js' `process.nextTick()`
	 * or Web Worker MessageChannel or setTimeout or others. Use this for
	 * asynchronous conversions.
	 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
	 * time-based operations.
	 */
	var Scheduler = {
	    asap: asap_1.asap,
	    async: async_1.async,
	    queue: queue_1.queue
	};
	exports.Scheduler = Scheduler;
	/**
	 * @typedef {Object} Rx.Symbol
	 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
	 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
	 * an object that has all of the traits of an Rx Subscriber, including the
	 * ability to add and remove subscriptions to the subscription chain and
	 * guarantees involving event triggering (can't "next" after unsubscription,
	 * etc).
	 * @property {Symbol|string} observable A symbol to use as a property name to
	 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
	 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
	 * to retrieve an iterator from an object.
	 */
	var Symbol = {
	    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
	    observable: observable_1.$$observable,
	    iterator: iterator_1.$$iterator
	};
	exports.Symbol = Symbol;
	//# sourceMappingURL=Rx.js.map

/***/ },
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 437 */,
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(79);
	var mergeAll_1 = __webpack_require__(184);
	var isScheduler_1 = __webpack_require__(95);
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 439 */,
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in the output Observable.
	 *
	 * <span class="informal">It's like {@link mergeMap}, but maps each value always
	 * to the same inner Observable.</span>
	 *
	 * <img src="./img/mergeMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then merges those resulting Observables into one
	 * single Observable, which is the output Observable.
	 *
	 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeScan}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable.
	 * @method mergeMapTo
	 * @owner Observable
	 */
	function mergeMapTo(innerObservable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
	//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
	    };
	    return MergeMapToOperator;
	}());
	exports.MergeMapToOperator = MergeMapToOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(420);
	var multicast_1 = __webpack_require__(116);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(82);
	var ArrayObservable_1 = __webpack_require__(79);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item
	 * from the combination of this Observable and supplied Observables
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 * @method race
	 * @owner Observable
	 */
	function race() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return raceStatic.apply(this, observables);
	}
	exports.race = race;
	function raceStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1) {
	        if (isArray_1.isArray(observables[0])) {
	            observables = observables[0];
	        }
	        else {
	            return observables[0];
	        }
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
	}
	exports.raceStatic = raceStatic;
	var RaceOperator = (function () {
	    function RaceOperator() {
	    }
	    RaceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RaceSubscriber(subscriber));
	    };
	    return RaceOperator;
	}());
	exports.RaceOperator = RaceOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RaceSubscriber = (function (_super) {
	    __extends(RaceSubscriber, _super);
	    function RaceSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasFirst = false;
	        this.observables = [];
	        this.subscriptions = [];
	    }
	    RaceSubscriber.prototype._next = function (observable) {
	        this.observables.push(observable);
	    };
	    RaceSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
	                this.subscriptions.push(subscription);
	                this.add(subscription);
	            }
	            this.observables = null;
	        }
	    };
	    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (!this.hasFirst) {
	            this.hasFirst = true;
	            for (var i = 0; i < this.subscriptions.length; i++) {
	                if (i !== outerIndex) {
	                    var subscription = this.subscriptions[i];
	                    subscription.unsubscribe();
	                    this.remove(subscription);
	                }
	            }
	            this.subscriptions = null;
	        }
	        this.destination.next(innerValue);
	    };
	    return RaceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.RaceSubscriber = RaceSubscriber;
	//# sourceMappingURL=race.js.map

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(814);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(284);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 5/8/16.
	 */
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(62);
	__webpack_require__(421); // Load all features
	var router_1 = __webpack_require__(9);
	var kshare_component_1 = __webpack_require__(418);
	//import { UserComponent } from "./user.component";
	/**
	 * services
	 **/
	var knowledge_1 = __webpack_require__(38);
	var request_offer_1 = __webpack_require__(277);
	var requests_1 = __webpack_require__(78);
	var users_1 = __webpack_require__(131);
	var auth_1 = __webpack_require__(54);
	var kspace_1 = __webpack_require__(178);
	var socket_io_services_1 = __webpack_require__(617);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.pageTitle = 'Knowledge Sharing Network';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare-app',
	            template: '<router-outlet></router-outlet>',
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ],
	            precompile: [kshare_component_1.KshareComponent],
	            providers: [
	                auth_1.AuthService,
	                users_1.UserService,
	                http_1.HTTP_PROVIDERS,
	                requests_1.RequestService,
	                request_offer_1.OfferService,
	                knowledge_1.KnowledgeService,
	                kspace_1.KSpaceService,
	                socket_io_services_1.SocketIOService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Created by GiangDH on 7/9/16.
	 */
	var router_1 = __webpack_require__(9);
	var kshare_routes_1 = __webpack_require__(616);
	var admin_routes_1 = __webpack_require__(615);
	exports.routes = kshare_routes_1.KShareRoutes.concat(admin_routes_1.AdminRoutes);
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];
	

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 6/4/16.
	 */
	var core_1 = __webpack_require__(1);
	__webpack_require__(421); // Load all features
	var router_1 = __webpack_require__(9);
	// Layout component
	var nav_bar_1 = __webpack_require__(603);
	var side_bar_1 = __webpack_require__(604);
	// Functions
	var knowledge_update_1 = __webpack_require__(273);
	var knowledges_list_1 = __webpack_require__(406);
	var requests_list_1 = __webpack_require__(407);
	var request_update_1 = __webpack_require__(274);
	var badword_update_1 = __webpack_require__(272);
	var badwords_list_1 = __webpack_require__(405);
	var user_list_1 = __webpack_require__(408);
	var AdminComponent = (function () {
	    function AdminComponent() {
	    }
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare',
	            template: "\n  <div id=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <nav-bar></nav-bar>\n      <sidebar></sidebar>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n  ",
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                nav_bar_1.NavbarComponent,
	                side_bar_1.SidebarComponent
	            ],
	            precompile: [
	                user_list_1.UserListComponent,
	                requests_list_1.RequestListComponent,
	                knowledges_list_1.KnowledgeListComponent,
	                badwords_list_1.BadwordListComponent,
	                badword_update_1.UpdateBadwordComponent,
	                knowledge_update_1.UpdateKnowledgeComponent,
	                request_update_1.UpdateRequestComponent,
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdminComponent);
	    return AdminComponent;
	}());
	exports.AdminComponent = AdminComponent;
	

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var knowledge_1 = __webpack_require__(38);
	var CreateSubCategoryComponent = (function () {
	    function CreateSubCategoryComponent(fb, _knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	        this.subCategoryForm = fb.group({
	            "name": [""],
	            "description": [""],
	            "parent": [""]
	        });
	    }
	    CreateSubCategoryComponent.prototype.ngOnInit = function () {
	    };
	    CreateSubCategoryComponent.prototype.addKnowledge = function (knowledge) {
	        this._knowledgeService.addKnowledge(knowledge).subscribe(function (knowledge) {
	            console.log('success');
	        }, function (error) {
	            console.log(error.text());
	        });
	        window.location.reload();
	    };
	    __decorate([
	        core_1.Input('kId'), 
	        __metadata('design:type', String)
	    ], CreateSubCategoryComponent.prototype, "kId", void 0);
	    CreateSubCategoryComponent = __decorate([
	        core_1.Component({
	            selector: 'sub-create',
	            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/sub-knowledge-create.html',
	            directives: [common_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _b) || Object])
	    ], CreateSubCategoryComponent);
	    return CreateSubCategoryComponent;
	    var _a, _b;
	}());
	exports.CreateSubCategoryComponent = CreateSubCategoryComponent;
	

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var knowledge_1 = __webpack_require__(38);
	var requests_1 = __webpack_require__(78);
	var auth_1 = __webpack_require__(54);
	var CreateRequestComponent = (function () {
	    function CreateRequestComponent(fb, _requestService, _knowledgeService, _authService) {
	        this._requestService = _requestService;
	        this._knowledgeService = _knowledgeService;
	        this._authService = _authService;
	        this.user = localStorage.getItem('username');
	        this.roleToken = localStorage.getItem('userrole');
	        this.requestForm = fb.group({
	            "knowledgeId": [""],
	            "title": [""],
	            "description": [""],
	            "user": [""]
	        });
	    }
	    CreateRequestComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	    };
	    CreateRequestComponent.prototype.addRequest = function (request) {
	        console.log(request);
	        this._requestService.addRequest(request).subscribe(function (request) {
	            console.log('success');
	        }, function (error) {
	            console.log(error.text());
	        });
	        console.log(request);
	        window.location.reload();
	    };
	    CreateRequestComponent = __decorate([
	        core_1.Component({
	            selector: 'request-create',
	            templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
	            styleUrls: ['client/dev/app/components/back-end/request/templates/request.css'],
	            directives: [common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_1.RequestService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_1.RequestService !== 'undefined' && requests_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _c) || Object, (typeof (_d = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _d) || Object])
	    ], CreateRequestComponent);
	    return CreateRequestComponent;
	    var _a, _b, _c, _d;
	}());
	exports.CreateRequestComponent = CreateRequestComponent;
	

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var auth_1 = __webpack_require__(54);
	var router_1 = __webpack_require__(9);
	var NavbarComponent = (function () {
	    function NavbarComponent(_auth, router) {
	        this._auth = _auth;
	        this.router = router;
	    }
	    NavbarComponent.prototype.logout = function () {
	        this._auth.logout();
	        this._auth.logoutClient();
	        this.router.navigateByUrl('/kshare');
	    };
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-bar',
	            templateUrl: 'client/dev/app/components/back-end/shared/templates/nav-bar.html',
	            styleUrls: ['client/dev/asserts/css/admin.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], NavbarComponent);
	    return NavbarComponent;
	    var _a, _b;
	}());
	exports.NavbarComponent = NavbarComponent;
	

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	    }
	    __decorate([
	        core_2.Input(), 
	        __metadata('design:type', String)
	    ], SidebarComponent.prototype, "pageTitle", void 0);
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            templateUrl: 'client/dev/app/components/back-end/shared/templates/side-bar.html',
	            styleUrls: ['client/dev/asserts/css/admin.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;
	

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var brushColor = $('#color-picker').val();
	var ChalkBoardComponent = (function () {
	    function ChalkBoardComponent() {
	        this.colors = [
	            { label: '#ffffff', value: '#ffffff' },
	            { label: '#de3535', value: '#DE3535' },
	            { label: '#03a9f4', value: '#03a9f4' }
	        ];
	        this.brushSizes = [
	            { label: '1', value: '1' },
	            { label: '2', value: '3' },
	            { label: '3', value: '5' },
	            { label: '4', value: '10' },
	            { label: '5', value: '20' },
	            { label: '6', value: '30' },
	            { label: '7', value: '50' }
	        ];
	    }
	    ChalkBoardComponent.prototype.ngOnInit = function () {
	        var sessionId;
	        var drawing = false;
	        var mode = 'draw';
	        var path;
	        var streamPath;
	        var strokeColor = 'white';
	        var strokeWidth = 1;
	        var colorStore;
	        var room = this.id;
	        var socket = io('http://localhost:3333');
	        socket.emit('subscribe', room);
	        var chalkboard = document.getElementById('chalkboard');
	        // Initiate the paper at canvas id="chalkboard"
	        paper.setup(chalkboard);
	        //initiate setting
	        var drawToolShow = false;
	        $('#draw-tools').hide();
	        //show draw-tools
	        $('#draw-option').click(function () {
	            if (!drawToolShow) {
	                $('#draw-tools').show();
	                drawToolShow = true;
	            }
	            else {
	                $('#draw-tools').hide();
	                drawToolShow = false;
	            }
	        });
	        $('#color-picker').change(function () {
	            if ($('#color-picker').val() !== 'white') {
	                $('#color-picker').css('color', 'white');
	            }
	            if ($('#color-picker').val()) {
	                $('#color-picker').css('background-color', $('#color-picker').val());
	                strokeColor = $('#color-picker').val();
	            }
	        });
	        $('#brush-size').change(function () {
	            if ($('#brush-size').val()) {
	                strokeWidth = $('#brush-size').val();
	            }
	        });
	        $('#eraser').click(function () {
	            strokeColor = '#000000';
	        });
	        /**
	         * Catch event when mouse down, create new path, emit start point
	         */
	        $('#chalkboard').mousedown(function (event) {
	            drawing = true;
	            path = new paper.Path();
	            path.strokeColor = strokeColor;
	            path.strokeWidth = strokeWidth;
	            var x = event.pageX - 0.1879935275 * $(window).width();
	            var y = event.pageY - 0.036667 * $(window).height();
	            path.add(new paper.Point(x, y));
	            emitStartPoint(x, y, strokeColor, strokeWidth);
	        });
	        /**
	         * Catch event when mouse move and drawing token is true
	         * Then call function draw (x,y) Emit the points of the path to server
	         */
	        $('#chalkboard').mousemove(function (event) {
	            if (drawing) {
	                var x = event.pageX - 0.1879935275 * $(window).width();
	                var y = event.pageY - 0.036667 * $(window).height();
	                draw(x, y);
	                emitPathPoint(x, y);
	            }
	        });
	        /**
	         * When mouse up, set drawing is false, finish the path
	         */
	        $('#chalkboard').mouseup(function (event) {
	            drawing = false;
	        });
	        /**
	         * function draw(x, y)
	         * Add point(x,y) to the path
	         */
	        function draw(x, y) {
	            path.add(new paper.Point(x, y));
	            path.smooth();
	            paper.view.draw();
	        }
	        /**
	         * function streamStartPath(x,y)
	         * When receive the start point from server, create the stream path
	         */
	        function streamStartPath(x, y, color, width) {
	            streamPath = new paper.Path();
	            streamPath.strokeColor = color;
	            streamPath.strokeWidth = width;
	            streamPath.add(new paper.Point(x, y));
	            streamPath.smooth();
	        }
	        /**
	         * function streamDraw(x,y)
	         * Add point(x,y) to the stream path
	         */
	        function streamDraw(x, y) {
	            streamPath.add(new paper.Point(x, y));
	            paper.view.draw();
	        }
	        /**
	         * function emitStartPoint(x,y)
	         * Send the start point (x,y) to the server
	         */
	        function emitStartPoint(x, y, color, width) {
	            var data = {
	                x: x,
	                y: y,
	                color: color,
	                width: width,
	                room: room
	            };
	            socket.emit('startPoint', data);
	        }
	        /**
	        * function emitPathPoint(x,y)
	        * Send the path's point (x,y) to the server
	        */
	        function emitPathPoint(x, y) {
	            var data = {
	                x: x,
	                y: y,
	                room: room
	            };
	            socket.emit('pathpoint', data);
	        }
	        /**
	         * When socket receive startPoint, call function streamStartPath(x,y)
	         */
	        socket.on('startPoint', function (data) {
	            streamStartPath(data.x, data.y, data.color, data.width);
	        });
	        /**
	         * When socket receive pathpoint, call function streamDraw(x,y)
	         */
	        socket.on('pathpoint', function (data) {
	            streamDraw(data.x, data.y);
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ChalkBoardComponent.prototype, "id", void 0);
	    ChalkBoardComponent = __decorate([
	        core_1.Component({
	            selector: 'chalkboard',
	            template: "\n        <button id=\"draw-option\"><i class=\"fa fa-bars fa-2x\" aria-hidden=\"true\"></i></button>\n        <canvas id=\"chalkboard\" resize=true keepalive=true></canvas>\n        <div id=\"draw-tools\">\n            <select id=\"color-picker\" class=\"tool-btn\">\n                <option *ngFor=\"let color of colors\" value=\"{{color.value}}\">{{color.label}}</option>\n            </select>\n            <hr>\n            <select id=\"brush-size\" class=\"tool-btn\">\n                <option *ngFor=\"let size of brushSizes\" value=\"{{size.value}}\">{{size.label}}</option>\n            </select>\n            <hr>\n            <p id=\"eraser\">\n                <i class=\"fa fa-eraser fa-2x\" aria-hidden=\"true\"></i>\n            </p>\n        </div>\n    ",
	            styleUrls: ["client/dev/app/components/front-end/kspace/styles/chalkboard.css"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ChalkBoardComponent);
	    return ChalkBoardComponent;
	}());
	exports.ChalkBoardComponent = ChalkBoardComponent;
	

/***/ },
/* 606 */
/***/ function(module, exports) {

	/**
	 * Created by GiangDH on 7/12/16.
	 */
	"use strict";
	var WebRCTService = (function () {
	    function WebRCTService() {
	    }
	    WebRCTService.prototype.rtcSetting = function (webrtc, room, lecturer) {
	        // If there is a peer join room, add Remote Video
	        webrtc.on('videoAdded', function (video, peer) {
	            // if(lecturer === peer.nick){
	            console.log('video added', peer);
	            var remotes = document.getElementById('remoteVideos');
	            if (remotes) {
	                var container = document.createElement('div');
	                container.className = 'videoContainer';
	                container.id = 'container_' + webrtc.getDomId(peer);
	                container.appendChild(video);
	                // suppress contextmenu
	                video.oncontextmenu = function () { return false; };
	                remotes.appendChild(container);
	                var kspacePanel = $('#kspace-panel');
	                var v = webrtc.getDomId(peer);
	                var vid = document.getElementById(v);
	                vid.setAttribute("control", "");
	                $('#' + v).click(function () {
	                    var chalkboard = document.getElementById('chalkboard');
	                    var ctx = chalkboard.getContext('2d');
	                    ctx.drawImage(vid, 5, 5, chalkboard.clientWidth, chalkboard.clientHeight);
	                });
	            }
	            // }
	        });
	        // a peer video was removed
	        webrtc.on('videoRemoved', function (video, peer) {
	            console.log('video removed ', peer);
	            $('#kspace-panel').find('video').remove();
	            var remotes = document.getElementById('remoteVideos');
	            var el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');
	            if (remotes && el) {
	                remotes.removeChild(el);
	            }
	        });
	        webrtc.on('readyToCall', function () {
	            if (room) {
	                console.log("Join " + room + " success!");
	                webrtc.joinRoom(room);
	            }
	        });
	    };
	    WebRCTService.prototype.shareScreen = function (webrtc, shareScreenToken) {
	        if (shareScreenToken) {
	            webrtc.stopScreenShare();
	            $('#kspace-panel').find('video').remove();
	            return false;
	        }
	        else {
	            webrtc.shareScreen();
	            return true;
	        }
	    };
	    return WebRCTService;
	}());
	exports.WebRCTService = WebRCTService;
	

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var request_offer_1 = __webpack_require__(277);
	var auth_1 = __webpack_require__(54);
	var CreateOfferComponent = (function () {
	    function CreateOfferComponent(fb, _offerService, _authService) {
	        this._offerService = _offerService;
	        this._authService = _authService;
	        this.user = localStorage.getItem('username');
	        this.offerForm = fb.group({
	            "price": [""],
	            "numberOfLecture": [""],
	            "requestId": [""],
	            "message": [""],
	            "user": [""]
	        });
	    }
	    CreateOfferComponent.prototype.addOffer = function (offer) {
	        this._offerService.addOffer(offer).subscribe(function (offer) {
	            console.log('success');
	        }, function (error) {
	            console.log(error.text());
	        });
	        window.location.reload();
	    };
	    __decorate([
	        core_1.Input('rid'), 
	        __metadata('design:type', String)
	    ], CreateOfferComponent.prototype, "rid", void 0);
	    CreateOfferComponent = __decorate([
	        core_1.Component({
	            selector: 'offer-create',
	            templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
	            directives: [common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof request_offer_1.OfferService !== 'undefined' && request_offer_1.OfferService) === 'function' && _b) || Object, (typeof (_c = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _c) || Object])
	    ], CreateOfferComponent);
	    return CreateOfferComponent;
	    var _a, _b, _c;
	}());
	exports.CreateOfferComponent = CreateOfferComponent;
	

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer',
	            templateUrl: 'client/dev/app/components/front-end/shared/templates/footer.html',
	            styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;
	

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var FriendListComponent = (function () {
	    function FriendListComponent() {
	    }
	    FriendListComponent = __decorate([
	        core_1.Component({
	            selector: 'friend-list',
	            templateUrl: 'client/dev/app/components/front-end/asserts/templates/friend-list.html',
	            styleUrls: ['client/dev/app/components/front-end/asserts/styles/friend-list.html'],
	            directives: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FriendListComponent);
	    return FriendListComponent;
	}());
	exports.FriendListComponent = FriendListComponent;
	

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

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
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var auth_1 = __webpack_require__(54);
	var HeaderComponent = (function () {
	    function HeaderComponent(_auth, router) {
	        this._auth = _auth;
	        this.router = router;
	        this.loginToken = false;
	        this.userToken = localStorage.getItem('username');
	        this.roleToken = localStorage.getItem('userrole');
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	        if (this.userToken) {
	            this.loginToken = true;
	        }
	    };
	    HeaderComponent.prototype.logout = function () {
	        this._auth.logout();
	        this._auth.logoutClient();
	        window.location.reload();
	    };
	    HeaderComponent = __decorate([
	        core_1.Component({
	            selector: 'header',
	            templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
	            styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], HeaderComponent);
	    return HeaderComponent;
	    var _a, _b;
	}());
	exports.HeaderComponent = HeaderComponent;
	

/***/ },
/* 611 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(9);
	var auth_1 = __webpack_require__(54);
	var LoginComponent = (function () {
	    function LoginComponent(fb, _authService, router) {
	        this._authService = _authService;
	        this.router = router;
	        this.user = [];
	        this.loginForm = fb.group({
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.required]
	        });
	    }
	    LoginComponent.prototype.login = function (user) {
	        var _this = this;
	        this._authService
	            .login(user)
	            .subscribe(function (res) {
	            if (res.invalidUsername) {
	                _this.userValid = '*' + res.invalidUsername;
	                _this.passValid = null;
	            }
	            else if (res.invalidPassword) {
	                _this.passValid = '*' + res.invalidPassword;
	                _this.userValid = null;
	            }
	            else {
	                localStorage.setItem('username', res.username);
	                if (res.role == 'admin') {
	                    localStorage.setItem('userrole', res.role);
	                }
	                else {
	                    localStorage.setItem('userrole', 'normal');
	                }
	                window.location.reload();
	            }
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            templateUrl: 'client/dev/app/components/front-end/shared/templates/login.html',
	            styleUrls: ['client/dev/app/components/front-end/shared/styles/login.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                common_1.CORE_DIRECTIVES,
	                common_1.FORM_DIRECTIVES
	            ]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(auth_1.AuthService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a, _b, _c;
	}());
	exports.LoginComponent = LoginComponent;
	

/***/ },
/* 612 */
/***/ function(module, exports, __webpack_require__) {

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by GiangDH on 5/19/16.
	 */
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(18);
	var router_1 = __webpack_require__(9);
	var auth_1 = __webpack_require__(54);
	var RegisterComponent = (function () {
	    function RegisterComponent(fb, _authService, router) {
	        this._authService = _authService;
	        this.router = router;
	        this.user = [];
	        this.regForm = fb.group({
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
	            email: ["", common_1.Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
	        });
	    }
	    RegisterComponent.prototype.register = function (user) {
	        this._authService
	            .register(user)
	            .subscribe(function (response) {
	            window.location.reload();
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    RegisterComponent = __decorate([
	        core_1.Component({
	            selector: 'register',
	            templateUrl: 'client/dev/app/components/front-end/shared/templates/register.html',
	            styleUrls: ['client/dev/app/components/front-end/shared/styles/login.css'],
	            directives: [common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(auth_1.AuthService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof auth_1.AuthService !== 'undefined' && auth_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], RegisterComponent);
	    return RegisterComponent;
	    var _a, _b, _c;
	}());
	exports.RegisterComponent = RegisterComponent;
	

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	var knowledge_1 = __webpack_require__(38);
	var SideBarComponent = (function () {
	    function SideBarComponent(_knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	    }
	    SideBarComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            var parent = [];
	            var subCate = [];
	            for (var i = 0; i < knowledges.length; i++) {
	                if (!knowledges[i].hasOwnProperty('parent')) {
	                    parent.push(knowledges[i]);
	                }
	            }
	            for (var i = 0; i < parent.length; i++) {
	                for (var j = 0; j < knowledges.length; j++) {
	                    if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
	                        subCate.push(knowledges[j]);
	                    }
	                }
	                parent[i]["subCategory"] = subCate;
	                subCate = [];
	            }
	            _this.knowledges = parent;
	        });
	    };
	    SideBarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            templateUrl: 'client/dev/app/components/front-end/shared/templates/side-bar.html',
	            styleUrls: ['client/dev/app/components/front-end/shared/styles/side-bar.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _a) || Object])
	    ], SideBarComponent);
	    return SideBarComponent;
	    var _a;
	}());
	exports.SideBarComponent = SideBarComponent;
	

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(9);
	//components
	var notification_1 = __webpack_require__(276);
	//services
	var users_1 = __webpack_require__(131);
	var knowledge_1 = __webpack_require__(38);
	var RequestRecordComponent = (function () {
	    function RequestRecordComponent(router, route, _userService, _knowledgeService) {
	        this.router = router;
	        this.route = route;
	        this._userService = _userService;
	        this._knowledgeService = _knowledgeService;
	        this.formatDate = function (date) {
	            if (date) {
	                var newDate, day, month, year;
	                year = date.substr(0, 4);
	                month = date.substr(5, 2);
	                day = date.substr(8, 2);
	                return newDate = day + '/' + month + '/' + year;
	            }
	        };
	    }
	    RequestRecordComponent.prototype.ngOnInit = function () {
	        //this.createdAt = this.formatDate(createdAt);
	        this.id = this.knowledgeId;
	        console.log(this.id);
	        this.getKnowledgeNameOfRequest();
	    };
	    RequestRecordComponent.prototype.getKnowledgeNameOfRequest = function () {
	        var _this = this;
	        //get back.knowledge name by knowledgeId
	        this._knowledgeService.findKnowledgeById(this.knowledgeId).subscribe(function (knowledge) {
	            _this.knowledgeName = knowledge.name;
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    __decorate([
	        core_1.Input('title'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "title", void 0);
	    __decorate([
	        core_1.Input('description'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "description", void 0);
	    __decorate([
	        core_1.Input('createdAt'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "createdAt", void 0);
	    __decorate([
	        core_1.Input('knowledgeId'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "knowledgeId", void 0);
	    __decorate([
	        core_1.Input('status'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "status", void 0);
	    __decorate([
	        core_1.Input('requestId'), 
	        __metadata('design:type', String)
	    ], RequestRecordComponent.prototype, "requestId", void 0);
	    RequestRecordComponent = __decorate([
	        core_1.Component({
	            selector: 'request-record',
	            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/request-record.html',
	            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                notification_1.PushNotificationComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof users_1.UserService !== 'undefined' && users_1.UserService) === 'function' && _c) || Object, (typeof (_d = typeof knowledge_1.KnowledgeService !== 'undefined' && knowledge_1.KnowledgeService) === 'function' && _d) || Object])
	    ], RequestRecordComponent);
	    return RequestRecordComponent;
	    var _a, _b, _c, _d;
	}());
	exports.RequestRecordComponent = RequestRecordComponent;
	

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var admin_component_1 = __webpack_require__(600);
	var knowledge_update_1 = __webpack_require__(273);
	var knowledges_list_1 = __webpack_require__(406);
	var requests_list_1 = __webpack_require__(407);
	var request_update_1 = __webpack_require__(274);
	var badword_update_1 = __webpack_require__(272);
	var badwords_list_1 = __webpack_require__(405);
	var user_list_1 = __webpack_require__(408);
	exports.AdminRoutes = [
	    {
	        path: 'admin',
	        component: admin_component_1.AdminComponent,
	        children: [
	            {
	                path: 'users',
	                children: [
	                    {
	                        path: '',
	                        component: user_list_1.UserListComponent
	                    }
	                ]
	            },
	            {
	                path: 'knowledges',
	                children: [
	                    {
	                        path: '',
	                        component: knowledges_list_1.KnowledgeListComponent
	                    },
	                    {
	                        path: ':id',
	                        component: knowledge_update_1.UpdateKnowledgeComponent
	                    }
	                ]
	            },
	            {
	                path: 'requests',
	                children: [
	                    {
	                        path: '',
	                        component: requests_list_1.RequestListComponent
	                    },
	                    {
	                        path: ':id',
	                        component: request_update_1.UpdateRequestComponent
	                    }
	                ]
	            },
	            {
	                path: 'badwords',
	                children: [
	                    {
	                        path: '',
	                        component: badwords_list_1.BadwordListComponent
	                    },
	                    {
	                        path: ':id',
	                        component: badword_update_1.UpdateBadwordComponent
	                    }
	                ]
	            },
	            {
	                path: '',
	                redirectTo: 'knowledges'
	            }
	        ]
	    }
	];
	

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	//Root Component
	var kshare_component_1 = __webpack_require__(418);
	//Function Components
	var home_1 = __webpack_require__(409);
	var request_list_1 = __webpack_require__(414);
	var request_detail_1 = __webpack_require__(413);
	var request_update_1 = __webpack_require__(415);
	var request_search_1 = __webpack_require__(275);
	var kspace_1 = __webpack_require__(412);
	var kspace_list_1 = __webpack_require__(411);
	var kspace_info_1 = __webpack_require__(410);
	var friend_list_1 = __webpack_require__(416);
	var user_profile_1 = __webpack_require__(417);
	exports.KShareRoutes = [
	    {
	        path: '',
	        component: kshare_component_1.KshareComponent,
	        children: [
	            {
	                path: 'user',
	                children: [
	                    {
	                        path: ':name',
	                        children: [
	                            {
	                                path: 'friends',
	                                component: friend_list_1.FriendListComponent
	                            },
	                            {
	                                path: '',
	                                component: user_profile_1.UserProfileComponent
	                            }
	                        ]
	                    }
	                ]
	            },
	            {
	                path: 'kspace',
	                children: [
	                    {
	                        path: 'info',
	                        children: [{
	                                path: ':id',
	                                component: kspace_info_1.KSpaceInfoComponent
	                            }]
	                    },
	                    {
	                        path: '',
	                        component: kspace_list_1.KSpaceListComponent
	                    }
	                ]
	            },
	            {
	                path: 'requests',
	                children: [
	                    {
	                        path: ':id',
	                        children: [
	                            {
	                                path: 'info',
	                                component: request_detail_1.RequestDetailClientComponent
	                            },
	                            {
	                                path: 'update',
	                                component: request_update_1.RequestUpdateClientComponent
	                            }
	                        ]
	                    },
	                    {
	                        path: ':type/:id',
	                        pathMatch: 'full',
	                        component: request_search_1.RequestCategoryComponent
	                    },
	                    {
	                        path: '',
	                        component: request_list_1.RequestListClientComponent
	                    }
	                ]
	            },
	            {
	                path: '',
	                component: home_1.HomeComponent
	            }
	        ],
	    },
	    {
	        path: 'room',
	        children: [{
	                path: ':id',
	                component: kspace_1.KSpaceComponent
	            }]
	    },
	];
	

/***/ },
/* 617 */
/***/ function(module, exports) {

	"use strict";
	var socket;
	var SocketIOService = (function () {
	    function SocketIOService() {
	    }
	    SocketIOService.prototype.ioInit = function () {
	        socket = io('http://localhost:3333');
	        return socket;
	    };
	    SocketIOService.prototype.ioSubscribeRoom = function (room) {
	        socket.emit('subscribe', room);
	    };
	    SocketIOService.prototype.emitStartPoint = function (x, y, color, width) {
	        var data = {
	            x: x,
	            y: y,
	            color: color,
	            width: width
	        };
	        socket.emit('startPoint', data);
	    };
	    SocketIOService.prototype.emitPathPoint = function (x, y) {
	        var data = {
	            x: x,
	            y: y
	        };
	        socket.emit('pathpoint', data);
	    };
	    return SocketIOService;
	}());
	exports.SocketIOService = SocketIOService;
	

/***/ },
/* 618 */,
/* 619 */,
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(6);
	var Operator = (function () {
	    function Operator() {
	    }
	    Operator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new Subscriber_1.Subscriber(subscriber));
	    };
	    return Operator;
	}());
	exports.Operator = Operator;
	//# sourceMappingURL=Operator.js.map

/***/ },
/* 621 */,
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bindCallback_1 = __webpack_require__(728);
	Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bindNodeCallback_1 = __webpack_require__(729);
	Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var combineLatest_1 = __webpack_require__(280);
	Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concat_1 = __webpack_require__(730);
	Observable_1.Observable.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var defer_1 = __webpack_require__(731);
	Observable_1.Observable.defer = defer_1.defer;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var empty_1 = __webpack_require__(732);
	Observable_1.Observable.empty = empty_1.empty;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var fromEvent_1 = __webpack_require__(734);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var fromEventPattern_1 = __webpack_require__(735);
	Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var interval_1 = __webpack_require__(736);
	Observable_1.Observable.interval = interval_1.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var merge_1 = __webpack_require__(737);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var never_1 = __webpack_require__(738);
	Observable_1.Observable.never = never_1.never;
	//# sourceMappingURL=never.js.map

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var of_1 = __webpack_require__(183);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var race_1 = __webpack_require__(442);
	Observable_1.Observable.race = race_1.raceStatic;
	//# sourceMappingURL=race.js.map

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var range_1 = __webpack_require__(739);
	Observable_1.Observable.range = range_1.range;
	//# sourceMappingURL=range.js.map

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var throw_1 = __webpack_require__(740);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timer_1 = __webpack_require__(741);
	Observable_1.Observable.timer = timer_1.timer;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var zip_1 = __webpack_require__(742);
	Observable_1.Observable.zip = zip_1.zip;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var audit_1 = __webpack_require__(743);
	Observable_1.Observable.prototype.audit = audit_1.audit;
	//# sourceMappingURL=audit.js.map

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var auditTime_1 = __webpack_require__(744);
	Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var buffer_1 = __webpack_require__(745);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferCount_1 = __webpack_require__(746);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferTime_1 = __webpack_require__(747);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferToggle_1 = __webpack_require__(748);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferWhen_1 = __webpack_require__(749);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 646 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var cache_1 = __webpack_require__(750);
	Observable_1.Observable.prototype.cache = cache_1.cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 647 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var catch_1 = __webpack_require__(751);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 648 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var combineAll_1 = __webpack_require__(752);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var combineLatest_1 = __webpack_require__(280);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 650 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concat_1 = __webpack_require__(281);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 651 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatAll_1 = __webpack_require__(753);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatMap_1 = __webpack_require__(754);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatMapTo_1 = __webpack_require__(755);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var count_1 = __webpack_require__(756);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var debounce_1 = __webpack_require__(757);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var defaultIfEmpty_1 = __webpack_require__(759);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var delay_1 = __webpack_require__(760);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var delayWhen_1 = __webpack_require__(761);
	Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var dematerialize_1 = __webpack_require__(762);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var distinctUntilChanged_1 = __webpack_require__(763);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var do_1 = __webpack_require__(764);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var expand_1 = __webpack_require__(766);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var filter_1 = __webpack_require__(436);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var finally_1 = __webpack_require__(767);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var first_1 = __webpack_require__(768);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var groupBy_1 = __webpack_require__(769);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var ignoreElements_1 = __webpack_require__(770);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var last_1 = __webpack_require__(771);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var let_1 = __webpack_require__(772);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mapTo_1 = __webpack_require__(773);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 671 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var materialize_1 = __webpack_require__(774);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var merge_1 = __webpack_require__(438);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 673 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mergeMapTo_1 = __webpack_require__(440);
	Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 674 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var multicast_1 = __webpack_require__(116);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 675 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var partition_1 = __webpack_require__(775);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 676 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var pluck_1 = __webpack_require__(776);
	Observable_1.Observable.prototype.pluck = pluck_1.pluck;
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 677 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishBehavior_1 = __webpack_require__(778);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 678 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishLast_1 = __webpack_require__(779);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishReplay_1 = __webpack_require__(441);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 680 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var race_1 = __webpack_require__(442);
	Observable_1.Observable.prototype.race = race_1.race;
	//# sourceMappingURL=race.js.map

/***/ },
/* 681 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var repeat_1 = __webpack_require__(781);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 682 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var retry_1 = __webpack_require__(782);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 683 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var retryWhen_1 = __webpack_require__(783);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 684 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var sample_1 = __webpack_require__(784);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 685 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var sampleTime_1 = __webpack_require__(785);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 686 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var scan_1 = __webpack_require__(786);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 687 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var share_1 = __webpack_require__(787);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 688 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var single_1 = __webpack_require__(788);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 689 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skip_1 = __webpack_require__(789);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 690 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skipUntil_1 = __webpack_require__(790);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skipWhile_1 = __webpack_require__(791);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 692 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var startWith_1 = __webpack_require__(792);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 693 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var subscribeOn_1 = __webpack_require__(793);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 694 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switch_1 = __webpack_require__(794);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 695 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switchMap_1 = __webpack_require__(795);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 696 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switchMapTo_1 = __webpack_require__(796);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var takeLast_1 = __webpack_require__(798);
	Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var takeUntil_1 = __webpack_require__(799);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var takeWhile_1 = __webpack_require__(800);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 700 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var throttle_1 = __webpack_require__(801);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 701 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var throttleTime_1 = __webpack_require__(802);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 702 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timeout_1 = __webpack_require__(803);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 703 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timeoutWith_1 = __webpack_require__(804);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 704 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var toArray_1 = __webpack_require__(805);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 705 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var window_1 = __webpack_require__(806);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 706 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowCount_1 = __webpack_require__(807);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowTime_1 = __webpack_require__(808);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 708 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowToggle_1 = __webpack_require__(809);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 709 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowWhen_1 = __webpack_require__(810);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 710 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var withLatestFrom_1 = __webpack_require__(811);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 711 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var zip_1 = __webpack_require__(283);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 712 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var zipAll_1 = __webpack_require__(812);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 713 */,
/* 714 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var AsyncSubject_1 = __webpack_require__(179);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a callback function to an observable sequence.
	     * @param {function} callbackFunc Function with a callback as the last
	     * parameter.
	     * @param {function} selector A selector which takes the arguments from the
	     * callback to produce a single item to yield on next.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule
	     * the callbacks.
	     * @return {function(...params: *): Observable<T>} a function which returns the
	     * Observable that corresponds to the callback.
	     * @static true
	     * @name bindCallback
	     * @owner Observable
	     */
	    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 715 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var AsyncSubject_1 = __webpack_require__(179);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundNodeCallbackObservable = (function (_super) {
	    __extends(BoundNodeCallbackObservable, _super);
	    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a node callback to an Observable.
	     * @param callbackFunc
	     * @param selector
	     * @param scheduler
	     * @return {function(...params: *): Observable<T>}
	     * @static true
	     * @name bindNodeCallback
	     * @owner Observable
	     */
	    BoundNodeCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    var err = innerArgs.shift();
	                    if (err) {
	                        subject.error(err);
	                    }
	                    else if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundNodeCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            var err = innerArgs.shift();
	            if (err) {
	                subject.error(err);
	            }
	            else if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value, subject = arg.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err, subject = arg.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 716 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var subscribeToResult_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(12);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    /**
	     * Creates an Observable that, on subscribe, calls an Observable factory to
	     * make an Observable for each new Observer.
	     *
	     * <span class="informal">Creates the Observable lazily, that is, only when it
	     * is subscribed.
	     * </span>
	     *
	     * <img src="./img/defer.png" width="100%">
	     *
	     * `defer` allows you to create the Observable only when the Observer
	     * subscribes, and create a fresh Observable for each Observer. It waits until
	     * an Observer subscribes to it, and then it generates an Observable,
	     * typically with an Observable factory function. It does this afresh for each
	     * subscriber, so although each subscriber may think it is subscribing to the
	     * same Observable, in fact each subscriber gets its own individual
	     * Observable.
	     *
	     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
	     * var clicksOrInterval = Rx.Observable.defer(function () {
	     *   if (Math.random() > 0.5) {
	     *     return Rx.Observable.fromEvent(document, 'click');
	     *   } else {
	     *     return Rx.Observable.interval(1000);
	     *   }
	     * });
	     * clicksOrInterval.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     *
	     * @param {function(): Observable|Promise} observableFactory The Observable
	     * factory function to invoke for each Observer that subscribes to the output
	     * Observable. May also return a Promise, which will be converted on the fly
	     * to an Observable.
	     * @return {Observable} An Observable whose Observers' subscriptions trigger
	     * an invocation of the given Observable factory function.
	     * @static true
	     * @name defer
	     * @owner Observable
	     */
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        return new DeferSubscriber(subscriber, this.observableFactory);
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	var DeferSubscriber = (function (_super) {
	    __extends(DeferSubscriber, _super);
	    function DeferSubscriber(destination, factory) {
	        _super.call(this, destination);
	        this.factory = factory;
	        this.tryDefer();
	    }
	    DeferSubscriber.prototype.tryDefer = function () {
	        try {
	            this._callFactory();
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    DeferSubscriber.prototype._callFactory = function () {
	        var result = this.factory();
	        if (result) {
	            this.add(subscribeToResult_1.subscribeToResult(this, result));
	        }
	    };
	    return DeferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (arg) {
	        var error = arg.error, subscriber = arg.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 718 */,
/* 719 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var Subscription_1 = __webpack_require__(39);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    /**
	     * @param sourceObj
	     * @param eventName
	     * @param selector
	     * @return {FromEventObservable}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 720 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(39);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    /**
	     * @param addHandler
	     * @param removeHandler
	     * @param selector
	     * @return {FromEventPatternObservable}
	     * @static true
	     * @name fromEventPattern
	     * @owner Observable
	     */
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	}(Observable_1.Observable));
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 721 */,
/* 722 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(287);
	var Observable_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(40);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = async_1.async;
	        }
	    }
	    /**
	     * Creates an Observable that emits sequential numbers every specified
	     * interval of time, on a specified Scheduler.
	     *
	     * <span class="informal">Emits incremental numbers periodically in time.
	     * </span>
	     *
	     * <img src="./img/interval.png" width="100%">
	     *
	     * `interval` returns an Observable that emits an infinite sequence of
	     * ascending integers, with a constant interval of time of your choosing
	     * between those emissions. The first emission is not sent immediately, but
	     * only after the first period has passed. By default, this operator uses the
	     * `async` Scheduler to provide a notion of time, but you may pass any
	     * Scheduler to it.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
	     * var numbers = Rx.Observable.interval(1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link delay}
	     *
	     * @param {number} [period=0] The interval size in milliseconds (by default)
	     * or the time unit determined by the scheduler's clock.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a sequential number each time
	     * interval.
	     * @static true
	     * @name interval
	     * @owner Observable
	     */
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = async_1.async; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	}(Observable_1.Observable));
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 723 */,
/* 724 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var noop_1 = __webpack_require__(448);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer.
	     *
	     * <span class="informal">An Observable that never emits anything.</span>
	     *
	     * <img src="./img/never.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that emits
	     * neither values nor errors nor the completion notification. It can be used
	     * for testing purposes or for composing with other Observables. Please not
	     * that by never emitting a complete notification, this Observable keeps the
	     * subscription from being disposed automatically. Subscriptions need to be
	     * manually disposed.
	     *
	     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
	     * function info() {
	     *   console.log('Will not be called');
	     * }
	     * var result = Rx.Observable.never().startWith(7);
	     * result.subscribe(x => console.log(x), info, info);
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @return {Observable} A "never" Observable: never emits anything.
	     * @static true
	     * @name never
	     * @owner Observable
	     */
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, count, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this._count = count;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits a sequence of numbers within a specified
	     * range.
	     *
	     * <span class="informal">Emits a sequence of numbers in a range.</span>
	     *
	     * <img src="./img/range.png" width="100%">
	     *
	     * `range` operator emits a range of sequential integers, in order, where you
	     * select the `start` of the range and its `length`. By default, uses no
	     * Scheduler and just delivers the notifications synchronously, but may use
	     * an optional Scheduler to regulate those deliveries.
	     *
	     * @example <caption>Emits the numbers 1 to 10</caption>
	     * var numbers = Rx.Observable.range(1, 10);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link interval}
	     *
	     * @param {number} [start=0] The value of the first integer in the sequence.
	     * @param {number} [count=0] The number of sequential integers to generate.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the notifications.
	     * @return {Observable} An Observable of numbers that emits a finite range of
	     * sequential integers.
	     * @static true
	     * @name range
	     * @owner Observable
	     */
	    RangeObservable.create = function (start, count, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (count === void 0) { count = 0; }
	        return new RangeObservable(start, count, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var count = this._count;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, count: count, start: start, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                if (index++ >= count) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	}(Observable_1.Observable));
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var asap_1 = __webpack_require__(443);
	var isNumeric_1 = __webpack_require__(287);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (arg) {
	        var source = arg.source, subscriber = arg.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        });
	    };
	    return SubscribeOnObservable;
	}(Observable_1.Observable));
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(287);
	var Observable_1 = __webpack_require__(2);
	var async_1 = __webpack_require__(40);
	var isScheduler_1 = __webpack_require__(95);
	var isDate_1 = __webpack_require__(189);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = -1;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this.period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = async_1.async;
	        }
	        this.scheduler = scheduler;
	        this.dueTime = isDate_1.isDate(dueTime) ?
	            (+dueTime - this.scheduler.now()) :
	            dueTime;
	    }
	    /**
	     * Creates an Observable that starts emitting after an `initialDelay` and
	     * emits ever increasing numbers after each `period` of time thereafter.
	     *
	     * <span class="informal">Its like {@link interval}, but you can specify when
	     * should the emissions start.</span>
	     *
	     * <img src="./img/timer.png" width="100%">
	     *
	     * `timer` returns an Observable that emits an infinite sequence of ascending
	     * integers, with a constant interval of time, `period` of your choosing
	     * between those emissions. The first emission happens after the specified
	     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
	     * operator uses the `async` Scheduler to provide a notion of time, but you
	     * may pass any Scheduler to it. If `period` is not specified, the output
	     * Observable emits only one value, `0`. Otherwise, it emits an infinite
	     * sequence.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
	     * var numbers = Rx.Observable.timer(3000, 1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @example <caption>Emits one number after five seconds</caption>
	     * var numbers = Rx.Observable.timer(5000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link interval}
	     * @see {@link delay}
	     *
	     * @param {number|Date} initialDelay The initial delay time to wait before
	     * emitting the first value of `0`.
	     * @param {number} [period] The period of time between emissions of the
	     * subsequent numbers.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a `0` after the
	     * `initialDelay` and ever increasing numbers after each `period` of time
	     * thereafter.
	     * @static true
	     * @name timer
	     * @owner Observable
	     */
	    TimerObservable.create = function (initialDelay, period, scheduler) {
	        if (initialDelay === void 0) { initialDelay = 0; }
	        return new TimerObservable(initialDelay, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (period === -1) {
	            return subscriber.complete();
	        }
	        state.index = index + 1;
	        action.schedule(state, period);
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
	        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	            index: index, period: period, subscriber: subscriber
	        });
	    };
	    return TimerObservable;
	}(Observable_1.Observable));
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 728 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundCallbackObservable_1 = __webpack_require__(714);
	exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 729 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BoundNodeCallbackObservable_1 = __webpack_require__(715);
	exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 730 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var concat_1 = __webpack_require__(281);
	exports.concat = concat_1.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DeferObservable_1 = __webpack_require__(716);
	exports.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 732 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EmptyObservable_1 = __webpack_require__(80);
	exports.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 733 */,
/* 734 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(719);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 735 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventPatternObservable_1 = __webpack_require__(720);
	exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 736 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var IntervalObservable_1 = __webpack_require__(722);
	exports.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 737 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var merge_1 = __webpack_require__(438);
	exports.merge = merge_1.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 738 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var NeverObservable_1 = __webpack_require__(724);
	exports.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 739 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var RangeObservable_1 = __webpack_require__(725);
	exports.range = RangeObservable_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 740 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(717);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 741 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TimerObservable_1 = __webpack_require__(727);
	exports.timer = TimerObservable_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(283);
	exports.zip = zip_1.zipStatic;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * @param durationSelector
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method audit
	 * @owner Observable
	 */
	function audit(durationSelector) {
	    return this.lift(new AuditOperator(durationSelector));
	}
	exports.audit = audit;
	var AuditOperator = (function () {
	    function AuditOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    AuditOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
	    };
	    return AuditOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditSubscriber = (function (_super) {
	    __extends(AuditSubscriber, _super);
	    function AuditSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	    }
	    AuditSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	            }
	        }
	    };
	    AuditSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    AuditSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return AuditSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=audit.js.map

/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(40);
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method auditTime
	 * @owner Observable
	 */
	function auditTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new AuditTimeOperator(delay, scheduler));
	}
	exports.auditTime = auditTime;
	var AuditTimeOperator = (function () {
	    function AuditTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    AuditTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new AuditTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return AuditTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AuditTimeSubscriber = (function (_super) {
	    __extends(AuditTimeSubscriber, _super);
	    function AuditTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	    }
	    AuditTimeSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
	        }
	    };
	    AuditTimeSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    return AuditTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 745 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Buffers the source Observable values until `closingNotifier` emits.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when another Observable emits.</span>
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * Buffers the incoming Observable values until the given `closingNotifier`
	 * Observable emits a value, at which point it emits the buffer on the output
	 * Observable and starts a new buffer internally, awaiting the next time
	 * `closingNotifier` emits.
	 *
	 * @example <caption>On every click, emit array of most recent interval events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var buffered = interval.buffer(clicks);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link window}
	 *
	 * @param {Observable<any>} closingNotifier An Observable that signals the
	 * buffer to be emitted on the output Observable.
	 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
	 * values.
	 * @method buffer
	 * @owner Observable
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
	    };
	    return BufferOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	    };
	    return BufferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Buffers the source Observable values until the size hits the maximum
	 * `bufferSize` given.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when its size reaches `bufferSize`.</span>
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * Buffers a number of values from the source Observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * @example <caption>Emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>On every click, emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2, 1);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowCount}
	 *
	 * @param {number} bufferSize The maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
	 * For example if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source. A new buffer is started at the
	 * beginning of the source by default.
	 * @return {Observable<T[]>} An Observable of arrays of buffered values.
	 * @method bufferCount
	 * @owner Observable
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
	    };
	    return BufferCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    return BufferCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 747 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var async_1 = __webpack_require__(40);
	/**
	 * Buffers the source Observable values for a specific time period.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * those arrays periodically in time.</span>
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
	 * Unless the optional argument `bufferCreationInterval` is given, it emits and
	 * resets the buffer every `bufferTimeSpan` milliseconds. If
	 * `bufferCreationInterval` is given, this operator opens the buffer every
	 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
	 * buffer every `bufferTimeSpan` milliseconds.
	 *
	 * @example <caption>Every second, emit an array of the recent click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(1000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(2000, 5000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowTime}
	 *
	 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
	 * @param {number} [bufferCreationInterval] The interval at which to start new
	 * buffers.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine buffer boundaries.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferTime
	 * @owner Observable
	 */
	function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
	    if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler));
	    };
	    return BufferTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	        this.buffers = [];
	        var buffer = this.openBuffer();
	        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
	            var closeState = { subscriber: this, buffer: buffer };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        else {
	            var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
	            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var buffers = this.buffers;
	        var len = buffers.length;
	        for (var i = 0; i < len; i++) {
	            buffers[i].push(value);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.buffers.length = 0;
	        _super.prototype._error.call(this, err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var _a = this, buffers = _a.buffers, destination = _a.destination;
	        while (buffers.length > 0) {
	            destination.next(buffers.shift());
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferTimeSubscriber.prototype._unsubscribe = function () {
	        this.buffers = null;
	    };
	    BufferTimeSubscriber.prototype.openBuffer = function () {
	        var buffer = [];
	        this.buffers.push(buffer);
	        return buffer;
	    };
	    BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
	        this.destination.next(buffer);
	        var buffers = this.buffers;
	        buffers.splice(buffers.indexOf(buffer), 1);
	    };
	    return BufferTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevBuffer = state.buffer;
	    if (prevBuffer) {
	        subscriber.closeBuffer(prevBuffer);
	    }
	    state.buffer = subscriber.openBuffer();
	    if (!subscriber.isUnsubscribed) {
	        this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var buffer = subscriber.openBuffer();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(arg) {
	    var subscriber = arg.subscriber, buffer = arg.buffer;
	    subscriber.closeBuffer(buffer);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(39);
	var subscribeToResult_1 = __webpack_require__(13);
	var OuterSubscriber_1 = __webpack_require__(12);
	/**
	 * Buffers the source Observable values starting from an emission from
	 * `openings` and ending when the output of `closingSelector` emits.
	 *
	 * <span class="informal">Collects values from the past as an array. Starts
	 * collecting only when `opening` emits, and calls the `closingSelector`
	 * function to get an Observable that tells when to close the buffer.</span>
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * a Subscribable or Promise returned by the `closingSelector` function emits.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var buffered = clicks.bufferToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferWhen}
	 * @see {@link windowToggle}
	 *
	 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
	 * buffers.
	 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
	 * which, when it emits, signals that the associated buffer should be emitted
	 * and cleared.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferToggle
	 * @owner Observable
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return BufferToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, openings));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._error.call(this, err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._complete.call(this);
	    };
	    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
	    };
	    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.closeBuffer(innerSub.context);
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        try {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = closingSelector.call(this, value);
	            if (closingNotifier) {
	                this.trySubscribe(closingNotifier);
	            }
	        }
	        catch (err) {
	            this._error(err);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts && context) {
	            var buffer = context.buffer, subscription = context.subscription;
	            this.destination.next(buffer);
	            contexts.splice(contexts.indexOf(context), 1);
	            this.remove(subscription);
	            subscription.unsubscribe();
	        }
	    };
	    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
	        var contexts = this.contexts;
	        var buffer = [];
	        var subscription = new Subscription_1.Subscription();
	        var context = { buffer: buffer, subscription: subscription };
	        contexts.push(context);
	        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            this.closeBuffer(context);
	        }
	        else {
	            innerSubscription.context = context;
	            this.add(innerSubscription);
	            subscription.add(innerSubscription);
	        }
	    };
	    return BufferToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(39);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Buffers the source Observable values, using a factory function of closing
	 * Observables to determine when to close, emit, and reset the buffer.
	 *
	 * <span class="informal">Collects values from the past as an array. When it
	 * starts collecting values, it calls a function that returns an Observable that
	 * tells when to close the buffer and restart collecting.</span>
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` function emits a value. When it closes
	 * the buffer, it immediately opens a new buffer and repeats the process.
	 *
	 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferWhen(() =>
	 *   Rx.Observable.interval(1000 + Math.random() * 4000)
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link windowWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals buffer closure.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferWhen
	 * @owner Observable
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
	    };
	    return BufferWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.subscribing = false;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferWhenSubscriber.prototype._unsubscribe = function () {
	        this.buffer = null;
	        this.subscribing = false;
	    };
	    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openBuffer();
	    };
	    BufferWhenSubscriber.prototype.notifyComplete = function () {
	        if (this.subscribing) {
	            this.complete();
	        }
	        else {
	            this.openBuffer();
	        }
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var closingSubscription = this.closingSubscription;
	        if (closingSubscription) {
	            this.remove(closingSubscription);
	            closingSubscription.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (this.buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            closingSubscription = new Subscription_1.Subscription();
	            this.closingSubscription = closingSubscription;
	            this.add(closingSubscription);
	            this.subscribing = true;
	            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.subscribing = false;
	        }
	    };
	    return BufferWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 750 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var publishReplay_1 = __webpack_require__(441);
	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {Observable<any>}
	 * @method cache
	 * @owner Observable
	 */
	function cache(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
	}
	exports.cache = cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var combineLatest_1 = __webpack_require__(280);
	/**
	 * Converts a higher-order Observable into a first-order Observable by waiting
	 * for the outer Observable to complete, then applying {@link combineLatest}.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by applying
	 * {@link combineLatest} when the Observable-of-Observables completes.</span>
	 *
	 * <img src="./img/combineAll.png" width="100%">
	 *
	 * Takes an Observable of Observables, and collects all Observables from it.
	 * Once the outer Observable completes, it subscribes to all collected
	 * Observables and combines their values using the {@link combineLatest}
	 * strategy, such that:
	 * - Every time an inner Observable emits, the output Observable emits.
	 * - When the returned observable emits, it emits all of the latest values by:
	 *   - If a `project` function is provided, it is called with each recent value
	 *     from each inner Observable in whatever order they arrived, and the result
	 *     of the `project` function is what is emitted by the output Observable.
	 *   - If there is no `project` function, an array of all of the most recent
	 *     values is emitted by the output Observable.
	 *
	 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev =>
	 *   Rx.Observable.interval(Math.random()*2000).take(3)
	 * ).take(2);
	 * var result = higherOrder.combineAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 * @see {@link mergeAll}
	 *
	 * @param {function} [project] An optional function to map the most recent
	 * values from each inner Observable into a new result. Takes each of the most
	 * recent values from each collected inner Observable as arguments, in order.
	 * @return {Observable} An Observable of projected results or arrays of recent
	 * values.
	 * @method combineAll
	 * @owner Observable
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(184);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(439);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMapTo_1 = __webpack_require__(440);
	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in a serialized fashion on the output Observable.
	 *
	 * <span class="informal">It's like {@link concatMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/concatMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. Each new `innerObservable`
	 * instance emitted on the output Observable is concatenated with the previous
	 * `innerObservable` instance.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
	 * set to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link mergeMapTo}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An observable of values merged together by joining the
	 * passed observable with itself, one after the other, for each value emitted
	 * from the source.
	 * @method concatMapTo
	 * @owner Observable
	 */
	function concatMapTo(innerObservable, resultSelector) {
	    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Counts the number of emissions on the source and emits that number when the
	 * source completes.
	 *
	 * <span class="informal">Tells how many values were emitted, when the source
	 * completes.</span>
	 *
	 * <img src="./img/count.png" width="100%">
	 *
	 * `count` transforms an Observable that emits values into an Observable that
	 * emits a single value that represents the number of values emitted by the
	 * source Observable. If the source Observable terminates with an error, `count`
	 * will pass this error notification along without emitting an value first. If
	 * the source Observable does not terminate at all, `count` will neither emit
	 * a value nor terminate. This operator takes an optional `predicate` function
	 * as argument, in which case the output emission will represent the number of
	 * source values that matched `true` with the `predicate`.
	 *
	 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var secondsBeforeClick = seconds.takeUntil(clicks);
	 * var result = secondsBeforeClick.count();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
	 * var numbers = Rx.Observable.range(1, 7);
	 * var result = numbers.count(i => i % 2 === 1);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link max}
	 * @see {@link min}
	 * @see {@link reduce}
	 *
	 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
	 * boolean function to select what values are to be counted. It is provided with
	 * arguments of:
	 * - `value`: the value from the source Observable.
	 * - `index`: the (zero-based) "index" of the value from the source Observable.
	 * - `source`: the source Observable instance itself.
	 * @return {Observable} An Observable of one number that represents the count as
	 * described above.
	 * @method count
	 * @owner Observable
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
	    };
	    return CountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        if (this.predicate) {
	            this._tryPredicate(value);
	        }
	        else {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._tryPredicate = function (value) {
	        var result;
	        try {
	            result = this.predicate(value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=count.js.map

/***/ },
/* 757 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence as long as the `durationSelector` specifies,
	 * and only then emits the latest source item on the result Observable.
	 * @param {function} durationSelector function for computing the timeout duration for each item.
	 * @return {Observable} an Observable the same as source Observable, but drops items.
	 * @method debounce
	 * @owner Observable
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
	    };
	    return DebounceOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	        this.durationSubscription = null;
	    }
	    DebounceSubscriber.prototype._next = function (value) {
	        try {
	            var result = this.durationSelector.call(this, value);
	            if (result) {
	                this._tryNext(value, result);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.emitValue();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype._tryNext = function (value, duration) {
	        var subscription = this.durationSubscription;
	        this.value = value;
	        this.hasValue = true;
	        if (subscription) {
	            subscription.unsubscribe();
	            this.remove(subscription);
	        }
	        subscription = subscribeToResult_1.subscribeToResult(this, duration);
	        if (!subscription.isUnsubscribed) {
	            this.add(this.durationSubscription = subscription);
	        }
	    };
	    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            var value = this.value;
	            var subscription = this.durationSubscription;
	            if (subscription) {
	                this.durationSubscription = null;
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            this.value = null;
	            this.hasValue = false;
	            _super.prototype._next.call(this, value);
	        }
	    };
	    return DebounceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 758 */,
/* 759 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that emits the elements of the source or a specified default value if empty.
	 * @param {any} defaultValue the default value used if source is empty; defaults to null.
	 * @return {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
	 * @method defaultIfEmpty
	 * @owner Observable
	 */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	    };
	    return DefaultIfEmptyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 760 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(40);
	var isDate_1 = __webpack_require__(189);
	var Subscriber_1 = __webpack_require__(6);
	var Notification_1 = __webpack_require__(181);
	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return DelayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },
/* 761 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Observable_1 = __webpack_require__(2);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that delays the emission of items from the source Observable
	 * by a subscription delay and a delay selector function for each element.
	 * @param {Function} selector function to retrieve a sequence indicating the delay for each given element.
	 * @param {Observable} sequence indicating the delay for the subscription to the source.
	 * @return {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
	 * @method delayWhen
	 * @owner Observable
	 */
	function delayWhen(delayDurationSelector, subscriptionDelay) {
	    if (subscriptionDelay) {
	        return new SubscriptionDelayObservable(this, subscriptionDelay)
	            .lift(new DelayWhenOperator(delayDurationSelector));
	    }
	    return this.lift(new DelayWhenOperator(delayDurationSelector));
	}
	exports.delayWhen = delayWhen;
	var DelayWhenOperator = (function () {
	    function DelayWhenOperator(delayDurationSelector) {
	        this.delayDurationSelector = delayDurationSelector;
	    }
	    DelayWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
	    };
	    return DelayWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelayWhenSubscriber = (function (_super) {
	    __extends(DelayWhenSubscriber, _super);
	    function DelayWhenSubscriber(destination, delayDurationSelector) {
	        _super.call(this, destination);
	        this.delayDurationSelector = delayDurationSelector;
	        this.completed = false;
	        this.delayNotifierSubscriptions = [];
	        this.values = [];
	    }
	    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(outerValue);
	        this.removeSubscription(innerSub);
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
	        var value = this.removeSubscription(innerSub);
	        if (value) {
	            this.destination.next(value);
	        }
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype._next = function (value) {
	        try {
	            var delayNotifier = this.delayDurationSelector(value);
	            if (delayNotifier) {
	                this.tryDelay(delayNotifier, value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DelayWhenSubscriber.prototype._complete = function () {
	        this.completed = true;
	        this.tryComplete();
	    };
	    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
	        subscription.unsubscribe();
	        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
	        var value = null;
	        if (subscriptionIdx !== -1) {
	            value = this.values[subscriptionIdx];
	            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
	            this.values.splice(subscriptionIdx, 1);
	        }
	        return value;
	    };
	    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
	        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
	        this.add(notifierSubscription);
	        this.delayNotifierSubscriptions.push(notifierSubscription);
	        this.values.push(value);
	    };
	    DelayWhenSubscriber.prototype.tryComplete = function () {
	        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
	            this.destination.complete();
	        }
	    };
	    return DelayWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelayObservable = (function (_super) {
	    __extends(SubscriptionDelayObservable, _super);
	    function SubscriptionDelayObservable(source, subscriptionDelay) {
	        _super.call(this);
	        this.source = source;
	        this.subscriptionDelay = subscriptionDelay;
	    }
	    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
	        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
	    };
	    return SubscriptionDelayObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubscriptionDelaySubscriber = (function (_super) {
	    __extends(SubscriptionDelaySubscriber, _super);
	    function SubscriptionDelaySubscriber(parent, source) {
	        _super.call(this);
	        this.parent = parent;
	        this.source = source;
	        this.sourceSubscribed = false;
	    }
	    SubscriptionDelaySubscriber.prototype._next = function (unused) {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype._error = function (err) {
	        this.unsubscribe();
	        this.parent.error(err);
	    };
	    SubscriptionDelaySubscriber.prototype._complete = function () {
	        this.subscribeToSource();
	    };
	    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
	        if (!this.sourceSubscribed) {
	            this.sourceSubscribed = true;
	            this.unsubscribe();
	            this.source.subscribe(this.parent);
	        }
	    };
	    return SubscriptionDelaySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 762 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that transforms Notification objects into the items or notifications they represent.
	 *
	 * @see {@link Notification}
	 *
	 * @return {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
	 * @method dematerialize
	 * @owner Observable
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DeMaterializeSubscriber(subscriber));
	    };
	    return DeMaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 763 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 764 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 765 */,
/* 766 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
	 * resulting in a new value to then be applied again with the function.
	 * @param {function} project the function for projecting the next emitted item of the Observable.
	 * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
	 * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
	 * @return {Observable} an Observable containing the expansions of the source Observable.
	 * @method expand
	 * @owner Observable
	 */
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
	    };
	    return ExpandOperator;
	}());
	exports.ExpandOperator = ExpandOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (arg) {
	        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        this.active++;
	        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._next(innerValue);
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return ExpandSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 767 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(39);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 768 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(188);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 769 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(39);
	var Observable_1 = __webpack_require__(2);
	var Subject_1 = __webpack_require__(17);
	var Map_1 = __webpack_require__(819);
	var FastMap_1 = __webpack_require__(817);
	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one
	 * {@link GroupedObservable} per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {function(value: T): K} keySelector a function that extracts the key
	 * for each item.
	 * @param {function(value: T): R} [elementSelector] a function that extracts the
	 * return element for each item.
	 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
	 * a function that returns an Observable to determine how long each group should
	 * exist.
	 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
	 * GroupedObservables, each of which corresponds to a unique key value and each
	 * of which emits those items from the source Observable that share that key
	 * value.
	 * @method groupBy
	 * @owner Observable
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}
	exports.groupBy = groupBy;
	var GroupByOperator = (function () {
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
	    };
	    return GroupByOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.attemptedToUnsubscribe = false;
	        this.count = 0;
	        this.destination = destination;
	        this.add(destination);
	    }
	    GroupBySubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            key = this.keySelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this._group(value, key);
	    };
	    GroupBySubscriber.prototype._group = function (value, key) {
	        var groups = this.groups;
	        if (!groups) {
	            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	        }
	        var group = groups.get(key);
	        if (!group) {
	            groups.set(key, group = new Subject_1.Subject());
	            var groupedObservable = new GroupedObservable(key, group, this);
	            if (this.durationSelector) {
	                this._selectDuration(key, group);
	            }
	            this.destination.next(groupedObservable);
	        }
	        if (this.elementSelector) {
	            this._selectElement(value, group);
	        }
	        else {
	            this.tryGroupNext(value, group);
	        }
	    };
	    GroupBySubscriber.prototype._selectElement = function (value, group) {
	        var result;
	        try {
	            result = this.elementSelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.tryGroupNext(result, group);
	    };
	    GroupBySubscriber.prototype._selectDuration = function (key, group) {
	        var duration;
	        try {
	            duration = this.durationSelector(new GroupedObservable(key, group));
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	    };
	    GroupBySubscriber.prototype.tryGroupNext = function (value, group) {
	        if (!group.isUnsubscribed) {
	            group.next(value);
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	            });
	            groups.clear();
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	            });
	            groups.clear();
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    GroupBySubscriber.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
	            this.attemptedToUnsubscribe = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	            }
	        }
	    };
	    return GroupBySubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        this.tryError(err);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype.tryError = function (err) {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.error(err);
	        }
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype.tryComplete = function () {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.complete();
	        }
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	}(Subscriber_1.Subscriber));
	/**
	 * An Observable representing values belonging to the same group represented by
	 * a common key. The values emitted by a GroupedObservable come from the source
	 * Observable. The common key is available as the field `key` on a
	 * GroupedObservable instance.
	 *
	 * @class GroupedObservable<K, T>
	 */
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
	        if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(refCountSubscription));
	        }
	        subscription.add(groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	}(Observable_1.Observable));
	exports.GroupedObservable = GroupedObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        var parent = this.parent;
	        if (!parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            parent.count -= 1;
	            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                parent.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 770 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var noop_1 = __webpack_require__(448);
	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @return {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 * @method ignoreElements
	 * @owner Observable
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new IgnoreElementsSubscriber(subscriber));
	    };
	    return IgnoreElementsOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 771 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(188);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @return {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 * @method last
	 * @owner Observable
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer, source) {
	        return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return LastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },
/* 772 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapToSubscriber(subscriber, this.value));
	    };
	    return MapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 774 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Notification_1 = __webpack_require__(181);
	/**
	 * Returns an Observable that represents all of the emissions and notifications
	 * from the source Observable into emissions marked with their original types
	 * within a `Notification` objects.
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * @see {@link Notification}
	 *
	 * @scheduler materialize does not operate by default on a particular Scheduler.
	 * @return {Observable<Notification<T>>} an Observable that emits items that are the result of
	 * materializing the items and notifications of the source Observable.
	 * @method materialize
	 * @owner Observable
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MaterializeSubscriber(subscriber));
	    };
	    return MaterializeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 775 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var not_1 = __webpack_require__(821);
	var filter_1 = __webpack_require__(436);
	/**
	 * @param predicate
	 * @param thisArg
	 * @return {Observable<T>[]}
	 * @method partition
	 * @owner Observable
	 */
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 776 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var map_1 = __webpack_require__(437);
	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    var properties = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        properties[_i - 0] = arguments[_i];
	    }
	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('List of properties cannot be empty.');
	    }
	    return map_1.map.call(this, plucker(properties, length));
	}
	exports.pluck = pluck;
	function plucker(props, length) {
	    var mapper = function (x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            }
	            else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 777 */,
/* 778 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BehaviorSubject_1 = __webpack_require__(180);
	var multicast_1 = __webpack_require__(116);
	/**
	 * @param value
	 * @return {ConnectableObservable<T>}
	 * @method publishBehavior
	 * @owner Observable
	 */
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 779 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncSubject_1 = __webpack_require__(179);
	var multicast_1 = __webpack_require__(116);
	/**
	 * @return {ConnectableObservable<T>}
	 * @method publishLast
	 * @owner Observable
	 */
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 780 */,
/* 781 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyObservable_1 = __webpack_require__(80);
	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 * @method repeat
	 * @owner Observable
	 */
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    }
	    else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
	    };
	    return RepeatOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RepeatSubscriber = (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RepeatSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.complete.call(this);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RepeatSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 782 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @return {Observable} the source Observable modified with the retry logic.
	 * @method retry
	 * @owner Observable
	 */
	function retry(count) {
	    if (count === void 0) { count = -1; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
	    };
	    return RetryOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetrySubscriber = (function (_super) {
	    __extends(RetrySubscriber, _super);
	    function RetrySubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RetrySubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.error.call(this, err);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RetrySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=retry.js.map

/***/ },
/* 783 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @return {Observable} the source Observable modified with retry logic.
	 * @method retryWhen
	 * @owner Observable
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
	    };
	    return RetryWhenOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RetryWhenSubscriber = (function (_super) {
	    __extends(RetryWhenSubscriber, _super);
	    function RetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;
	            if (!retries) {
	                errors = new Subject_1.Subject();
	                retries = tryCatch_1.tryCatch(this.notifier)(errors);
	                if (retries === errorObject_1.errorObject) {
	                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
	                }
	                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
	            }
	            else {
	                this.errors = null;
	                this.retriesSubscription = null;
	            }
	            this.unsubscribe();
	            this.isUnsubscribed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            errors.next(err);
	        }
	    };
	    RetryWhenSubscriber.prototype._unsubscribe = function () {
	        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
	        if (errors) {
	            errors.unsubscribe();
	            this.errors = null;
	        }
	        if (retriesSubscription) {
	            retriesSubscription.unsubscribe();
	            this.retriesSubscription = null;
	        }
	        this.retries = null;
	    };
	    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
	        this.errors = null;
	        this.retries = null;
	        this.retriesSubscription = null;
	        this.unsubscribe();
	        this.isStopped = false;
	        this.isUnsubscribed = false;
	        this.errors = errors;
	        this.retries = retries;
	        this.retriesSubscription = retriesSubscription;
	        this.source.subscribe(this);
	    };
	    return RetryWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 784 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that, when the specified sampler Observable emits an item or completes, it then emits the most
	 * recently emitted item (if any) emitted by the source Observable since the previous emission from the sampler
	 * Observable.
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * @param {Observable} sampler - the Observable to use for sampling the source Observable.
	 * @return {Observable<T>} an Observable that emits the results of sampling the items emitted by this Observable
	 * whenever the sampler Observable emits an item or completes.
	 * @method sample
	 * @owner Observable
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
	    };
	    return SampleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.value);
	        }
	    };
	    return SampleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=sample.js.map

/***/ },
/* 785 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var async_1 = __webpack_require__(40);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method sampleTime
	 * @owner Observable
	 */
	function sampleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new SampleTimeOperator(delay, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SampleTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return SampleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, delay = state.delay;
	    subscriber.notifyNext();
	    this.schedule(state, delay);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 786 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Applies an accumulation function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	    };
	    return ScanOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 787 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(116);
	var Subject_1 = __webpack_require__(17);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 788 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(188);
	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 * @method single
	 * @owner Observable
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
	    };
	    return SingleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        this.index++;
	        if (predicate) {
	            this.tryNext(value);
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype.tryNext = function (value) {
	        try {
	            var result = this.predicate(value, this.index, this.source);
	            if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=single.js.map

/***/ },
/* 789 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipSubscriber(subscriber, this.total));
	    };
	    return SkipOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 790 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	 *
	 * <img src="./img/skipUntil.png" width="100%">
	 *
	 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	 * be mirrored by the resulting Observable.
	 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	 * an item, then emits the remaining items.
	 * @method skipUntil
	 * @owner Observable
	 */
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
	    };
	    return SkipUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.isInnerStopped = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.hasValue) {
	            _super.prototype._next.call(this, value);
	        }
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.isInnerStopped) {
	            _super.prototype._complete.call(this);
	        }
	        else {
	            this.unsubscribe();
	        }
	    };
	    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.hasValue = true;
	    };
	    SkipUntilSubscriber.prototype.notifyComplete = function () {
	        this.isInnerStopped = true;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 791 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 * @method skipWhile
	 * @owner Observable
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
	    };
	    return SkipWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 792 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(79);
	var ScalarObservable_1 = __webpack_require__(279);
	var EmptyObservable_1 = __webpack_require__(80);
	var concat_1 = __webpack_require__(281);
	var isScheduler_1 = __webpack_require__(95);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 793 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(726);
	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 * @method subscribeOn
	 * @owner Observable
	 */
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 794 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * subscribing to only the most recently emitted of those inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * previous inner Observable once a new one appears.</span>
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * `switch` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable subscribes to the inner Observable and
	 * begins emitting the items emitted by that. So far, it behaves
	 * like {@link mergeAll}. However, when a new inner Observable is emitted,
	 * `switch` unsubscribes from the earlier-emitted inner Observable and
	 * subscribes to the new inner Observable and begins emitting items from it. It
	 * continues to behave like this for subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * // Each click event is mapped to an Observable that ticks every second
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var switched = higherOrder.switch();
	 * // The outcome is that `switched` is essentially a timer that restarts
	 * // on every click. The interval Observables from older clicks do not merge
	 * // with the current interval Observable.
	 * switched.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switchMap}
	 * @see {@link switchMapTo}
	 * @see {@link zipAll}
	 *
	 * @return {Observable<T>} An Observable that emits the items emitted by the
	 * Observable most recently emitted by the source Observable.
	 * @method switch
	 * @name switch
	 * @owner Observable
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchSubscriber(subscriber));
	    };
	    return SwitchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switch.js.map

/***/ },
/* 795 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 796 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	    };
	    return SwitchMapToOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 797 */,
/* 798 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var ArgumentOutOfRangeError_1 = __webpack_require__(285);
	var EmptyObservable_1 = __webpack_require__(80);
	/**
	 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 * @param total
	 * @return {any}
	 * @method takeLast
	 * @owner Observable
	 */
	function takeLast(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeLastOperator(total));
	    }
	}
	exports.takeLast = takeLast;
	var TakeLastOperator = (function () {
	    function TakeLastOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeLastOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
	    };
	    return TakeLastOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeLastSubscriber = (function (_super) {
	    __extends(TakeLastSubscriber, _super);
	    function TakeLastSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.ring = new Array();
	        this.count = 0;
	    }
	    TakeLastSubscriber.prototype._next = function (value) {
	        var ring = this.ring;
	        var total = this.total;
	        var count = this.count++;
	        if (ring.length < total) {
	            ring.push(value);
	        }
	        else {
	            var index = count % total;
	            ring[index] = value;
	        }
	    };
	    TakeLastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var count = this.count;
	        if (count > 0) {
	            var total = this.count >= this.total ? this.total : this.count;
	            var ring = this.ring;
	            for (var i = 0; i < total; i++) {
	                var idx = (count++) % total;
	                destination.next(ring[idx]);
	            }
	        }
	        destination.complete();
	    };
	    return TakeLastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 799 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * @param notifier
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	    };
	    return TakeUntilOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 800 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * @param predicate
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method takeWhile
	 * @owner Observable
	 */
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
	    };
	    return TakeWhileOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result;
	        try {
	            result = this.predicate(value, this.index++);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        this.nextOrComplete(value, result);
	    };
	    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
	        var destination = this.destination;
	        if (Boolean(predicateResult)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 801 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * @param durationSelector
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method throttle
	 * @owner Observable
	 */
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
	    };
	    return ThrottleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.tryDurationSelector(value);
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        var duration = null;
	        try {
	            duration = this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.emitAndThrottle(value, duration);
	    };
	    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
	        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	        this.destination.next(value);
	    };
	    ThrottleSubscriber.prototype._unsubscribe = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._unsubscribe();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this._unsubscribe();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 802 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var async_1 = __webpack_require__(40);
	/**
	 * @param delay
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method throttleTime
	 * @owner Observable
	 */
	function throttleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new ThrottleTimeOperator(delay, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return ThrottleTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(arg) {
	    var subscriber = arg.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 803 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(40);
	var isDate_1 = __webpack_require__(189);
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * @param due
	 * @param errorToSend
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeout
	 * @owner Observable
	 */
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
	    };
	    return TimeoutOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 804 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(40);
	var isDate_1 = __webpack_require__(189);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * @param due
	 * @param withObservable
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeoutWith
	 * @owner Observable
	 */
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
	    };
	    return TimeoutWithOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 805 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new ToArraySubscriber(subscriber));
	    };
	    return ToArrayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 806 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Branch out the source Observable values as a nested Observable whenever
	 * `windowBoundaries` emits.
	 *
	 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
	 * instead of an array.</span>
	 *
	 * <img src="./img/window.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping
	 * windows. It emits the current window and opens a new one whenever the
	 * Observable `windowBoundaries` emits an item. Because each window is an
	 * Observable, the output is a higher-order Observable.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var result = clicks.window(interval)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link buffer}
	 *
	 * @param {Observable<any>} windowBoundaries An Observable that completes the
	 * previous window and starts a new window.
	 * @return {Observable<Observable<T>>} An Observable of windows, which are
	 * Observables emitting values of the source Observable.
	 * @method window
	 * @owner Observable
	 */
	function window(windowBoundaries) {
	    return this.lift(new WindowOperator(windowBoundaries));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(windowBoundaries) {
	        this.windowBoundaries = windowBoundaries;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.windowBoundaries));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, windowBoundaries) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowBoundaries = windowBoundaries;
	        this.add(subscribeToResult_1.subscribeToResult(this, windowBoundaries));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow();
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this._complete();
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=window.js.map

/***/ },
/* 807 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subject_1 = __webpack_require__(17);
	/**
	 * Branch out the source Observable values as a nested Observable with each
	 * nested Observable emitting at most `windowSize` values.
	 *
	 * <span class="informal">It's like {@link bufferCount}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowCount.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows every `startWindowEvery`
	 * items, each containing no more than `windowSize` items. When the source
	 * Observable completes or encounters an error, the output Observable emits
	 * the current window and propagates the notification from the source
	 * Observable. If `startWindowEvery` is not provided, then new windows are
	 * started immediately at the start of the source and when each window completes
	 * with size `windowSize`.
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(3)
	 *   .map(win => win.skip(1)) // skip first of every 3 clicks
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(2, 3)
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferCount}
	 *
	 * @param {number} windowSize The maximum number of values emitted by each
	 * window.
	 * @param {number} [startWindowEvery] Interval at which to start a new window.
	 * For example if `startWindowEvery` is `2`, then a new window will be started
	 * on every other value from the source. A new window is started at the
	 * beginning of the source by default.
	 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
	 * are Observable of values.
	 * @method windowCount
	 * @owner Observable
	 */
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
	    };
	    return WindowCountOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 808 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subject_1 = __webpack_require__(17);
	var async_1 = __webpack_require__(40);
	/**
	 * Branch out the source Observable values as a nested Observable periodically
	 * in time.
	 *
	 * <span class="informal">It's like {@link bufferTime}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowTime.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable starts a new window periodically, as
	 * determined by the `windowCreationInterval` argument. It emits each window
	 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
	 * source Observable completes or encounters an error, the output Observable
	 * emits the current window and propagates the notification from the source
	 * Observable. If `windowCreationInterval` is not provided, the output
	 * Observable starts a new window when the previous window of duration
	 * `windowTimeSpan` completes.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000, 5000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferTime}
	 *
	 * @param {number} windowTimeSpan The amount of time to fill each window.
	 * @param {number} [windowCreationInterval] The interval at which to start new
	 * windows.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine window boundaries.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowTime
	 * @owner Observable
	 */
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
	    };
	    return WindowTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            var window_3 = windows[i];
	            if (!window_3.isUnsubscribed) {
	                window_3.next(value);
	            }
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            var window_4 = windows.shift();
	            if (!window_4.isUnsubscribed) {
	                window_4.complete();
	            }
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(arg) {
	    var subscriber = arg.subscriber, window = arg.window, context = arg.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 809 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var Subscription_1 = __webpack_require__(39);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Branch out the source Observable values as a nested Observable starting from
	 * an emission from `openings` and ending when the output of `closingSelector`
	 * emits.
	 *
	 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowToggle.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows that contain those items
	 * emitted by the source Observable between the time when the `openings`
	 * Observable emits an item and when the Observable returned by
	 * `closingSelector` emits an item.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var result = clicks.windowToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * ).mergeAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowWhen}
	 * @see {@link bufferToggle}
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * windows.
	 * @param {function(value: O): Observable} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns an Observable,
	 * which, when it emits (either `next` or `complete`), signals that the
	 * associated window should complete.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowToggle
	 * @owner Observable
	 */
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
	    };
	    return WindowToggleOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        if (contexts) {
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].window.next(value);
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.error(err);
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._error.call(this, err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.complete();
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    WindowToggleSubscriber.prototype._unsubscribe = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.unsubscribe();
	                context.subscription.unsubscribe();
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (outerValue === this.openings) {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
	            if (closingNotifier === errorObject_1.errorObject) {
	                return this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                var window_1 = new Subject_1.Subject();
	                var subscription = new Subscription_1.Subscription();
	                var context = { window: window_1, subscription: subscription };
	                this.contexts.push(context);
	                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	                if (innerSubscription.isUnsubscribed) {
	                    this.closeWindow(this.contexts.length - 1);
	                }
	                else {
	                    innerSubscription.context = context;
	                    subscription.add(innerSubscription);
	                }
	                this.destination.next(window_1);
	            }
	        }
	        else {
	            this.closeWindow(this.contexts.indexOf(outerValue));
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyError = function (err) {
	        this.error(err);
	    };
	    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
	        if (inner !== this.openSubscription) {
	            this.closeWindow(this.contexts.indexOf(inner.context));
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (index) {
	        if (index === -1) {
	            return;
	        }
	        var contexts = this.contexts;
	        var context = contexts[index];
	        var window = context.window, subscription = context.subscription;
	        contexts.splice(index, 1);
	        window.complete();
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 810 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(17);
	var tryCatch_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Branch out the source Observable values as a nested Observable using a
	 * factory function of closing Observables to determine when to start a new
	 * window.
	 *
	 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowWhen.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping windows.
	 * It emits the current window and opens a new one whenever the Observable
	 * produced by the specified `closingSelector` function emits an item. The first
	 * window is opened immediately when subscribing to the output Observable.
	 *
	 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks
	 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link bufferWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals (on either `next` or
	 * `complete`) when to close the previous window and start a new one.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowWhen
	 * @owner Observable
	 */
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
	    };
	    return WindowOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
	        if (this.closingNotification) {
	            this.closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function (innerSub) {
	        if (innerSub === void 0) { innerSub = null; }
	        if (innerSub) {
	            this.remove(innerSub);
	            innerSub.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = errorObject_1.errorObject.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 811 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(13);
	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	    };
	    return WithLatestFromOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 812 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(283);
	/**
	 * @param project
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method zipAll
	 * @owner Observable
	 */
	function zipAll(project) {
	    return this.lift(new zip_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 813 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(818);
	var FutureAction_1 = __webpack_require__(185);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 814 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(813);
	var QueueScheduler_1 = __webpack_require__(284);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 815 */,
/* 816 */,
/* 817 */
/***/ function(module, exports) {

	"use strict";
	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	}());
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 818 */
/***/ function(module, exports, __webpack_require__) {

	/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(48);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map

/***/ },
/* 819 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(48);
	var MapPolyfill_1 = __webpack_require__(820);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 820 */
/***/ function(module, exports) {

	"use strict";
	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this.size = 0;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	}());
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 821 */
/***/ function(module, exports) {

	"use strict";
	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var paginate_pipe_1 = __webpack_require__(987);
	exports.PaginatePipe = paginate_pipe_1.PaginatePipe;
	var pagination_service_1 = __webpack_require__(309);
	exports.PaginationService = pagination_service_1.PaginationService;
	var pagination_controls_cmp_1 = __webpack_require__(988);
	exports.PaginationControlsCmp = pagination_controls_cmp_1.PaginationControlsCmp;


/***/ },
/* 987 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var pagination_service_1 = __webpack_require__(309);
	var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
	var PaginatePipe = (function () {
	    function PaginatePipe(service) {
	        this.service = service;
	        // store the values from the last time the pipe was invoked
	        this.state = {};
	    }
	    PaginatePipe.prototype.transform = function (collection, args) {
	        // When an observable is passed through the AsyncPipe, it will output
	        // `null` until the subscription resolves. In this case, we want to
	        // use the cached data from the `state` object to prevent the NgFor
	        // from flashing empty until the real values arrive.
	        if (args instanceof Array) {
	            // compatible with angular2 before beta16
	            args = args[0];
	        }
	        if (!(collection instanceof Array)) {
	            var _id = args.id || this.service.defaultId;
	            if (this.state[_id]) {
	                return this.state[_id].slice;
	            }
	            else {
	                return collection;
	            }
	        }
	        var serverSideMode = args.totalItems !== undefined;
	        var instance = this.createInstance(collection, args);
	        var id = instance.id;
	        var start, end;
	        var perPage = instance.itemsPerPage;
	        this.service.register(instance);
	        if (!serverSideMode && collection instanceof Array) {
	            perPage = perPage || LARGE_NUMBER;
	            start = (instance.currentPage - 1) * perPage;
	            end = start + perPage;
	            var isIdentical = this.stateIsIdentical(id, collection, start, end);
	            if (isIdentical) {
	                return this.state[id].slice;
	            }
	            else {
	                var slice = collection.slice(start, end);
	                this.saveState(id, collection, slice, start, end);
	                this.service.change.emit(id);
	                return slice;
	            }
	        }
	        // save the state for server-side collection to avoid null
	        // flash as new data loads.
	        this.saveState(id, collection, collection, start, end);
	        return collection;
	    };
	    /**
	     * Create an IPaginationInstance object, using defaults for any optional properties not supplied.
	     */
	    PaginatePipe.prototype.createInstance = function (collection, args) {
	        var config = args;
	        this.checkConfig(config);
	        return {
	            id: config.id || this.service.defaultId,
	            itemsPerPage: config.itemsPerPage || 0,
	            currentPage: config.currentPage || 1,
	            totalItems: config.totalItems || collection.length
	        };
	    };
	    /**
	     * Ensure the argument passed to the filter contains the required properties.
	     */
	    PaginatePipe.prototype.checkConfig = function (config) {
	        var required = ['itemsPerPage', 'currentPage'];
	        var missing = required.filter(function (prop) { return !config.hasOwnProperty(prop); });
	        if (0 < missing.length) {
	            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
	        }
	    };
	    /**
	     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
	     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
	     * need to check that the collection, start and end points are all identical, and if so, return the
	     * last sliced array.
	     */
	    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
	        this.state[id] = {
	            collection: collection,
	            size: collection.length,
	            slice: slice,
	            start: start,
	            end: end
	        };
	    };
	    /**
	     * For a given id, returns true if the collection, size, start and end values are identical.
	     */
	    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
	        var state = this.state[id];
	        if (!state) {
	            return false;
	        }
	        var isMetaDataIdentical = state.size === collection.length &&
	            state.start === start &&
	            state.end === end;
	        if (!isMetaDataIdentical) {
	            return false;
	        }
	        return state.slice.every(function (element, index) { return element === collection[start + index]; });
	    };
	    PaginatePipe = __decorate([
	        core_1.Pipe({
	            name: 'paginate',
	            pure: false
	        }), 
	        __metadata('design:paramtypes', [pagination_service_1.PaginationService])
	    ], PaginatePipe);
	    return PaginatePipe;
	}());
	exports.PaginatePipe = PaginatePipe;


/***/ },
/* 988 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(1);
	var pagination_service_1 = __webpack_require__(309);
	var template_1 = __webpack_require__(989);
	var PaginationControlsCmp = (function () {
	    function PaginationControlsCmp(service, changeDetectorRef) {
	        var _this = this;
	        this.service = service;
	        this.changeDetectorRef = changeDetectorRef;
	        this.maxSize = 7;
	        this.pageChange = new core_1.EventEmitter();
	        this.pages = [];
	        this.hasTemplate = false;
	        this._directionLinks = true;
	        this._autoHide = false;
	        this.changeSub = this.service.change
	            .subscribe(function (id) {
	            if (_this.id === id) {
	                _this.updatePageLinks();
	                _this.changeDetectorRef.markForCheck();
	            }
	        });
	    }
	    Object.defineProperty(PaginationControlsCmp.prototype, "directionLinks", {
	        get: function () {
	            return this._directionLinks;
	        },
	        set: function (value) {
	            this._directionLinks = !!value && value !== 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PaginationControlsCmp.prototype, "autoHide", {
	        get: function () {
	            return this._autoHide;
	        },
	        set: function (value) {
	            this._autoHide = !!value && value !== 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PaginationControlsCmp.prototype.ngOnInit = function () {
	        if (this.id === undefined) {
	            this.id = this.service.defaultId;
	        }
	        this.updatePageLinks();
	    };
	    PaginationControlsCmp.prototype.ngOnChanges = function () {
	        this.updatePageLinks();
	    };
	    PaginationControlsCmp.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        if (this.template && 0 < this.template.nativeElement.children.length) {
	            this.hasTemplate = true;
	            setTimeout(function () { return _this.changeDetectorRef.markForCheck(); });
	        }
	    };
	    PaginationControlsCmp.prototype.ngOnDestroy = function () {
	        this.changeSub.unsubscribe();
	    };
	    /**
	     * Go to the previous page
	     */
	    PaginationControlsCmp.prototype.previous = function () {
	        this.setCurrent(this.getCurrent() - 1);
	    };
	    /**
	     * Go to the next page
	     */
	    PaginationControlsCmp.prototype.next = function () {
	        this.setCurrent(this.getCurrent() + 1);
	    };
	    /**
	     * Returns true if current page is first page
	     */
	    PaginationControlsCmp.prototype.isFirstPage = function () {
	        return this.getCurrent() === 1;
	    };
	    /**
	     * Returns true if current page is last page
	     */
	    PaginationControlsCmp.prototype.isLastPage = function () {
	        return this.getLastPage() === this.getCurrent();
	    };
	    /**
	     * Set the current page number.
	     */
	    PaginationControlsCmp.prototype.setCurrent = function (page) {
	        this.pageChange.emit(page);
	    };
	    /**
	     * Get the current page number.
	     */
	    PaginationControlsCmp.prototype.getCurrent = function () {
	        return this.service.getCurrentPage(this.id);
	    };
	    /**
	     * Returns the last page number
	     */
	    PaginationControlsCmp.prototype.getLastPage = function () {
	        var inst = this.service.getInstance(this.id);
	        if (inst.totalItems < 1) {
	            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
	            // but it makes sense to consider a single, empty page as the last page.
	            return 1;
	        }
	        return Math.ceil(inst.totalItems / inst.itemsPerPage);
	    };
	    /**
	     * Updates the page links and checks that the current page is valid. Should run whenever the
	     * PaginationService.change stream emits a value matching the current ID, or when any of the
	     * input values changes.
	     */
	    PaginationControlsCmp.prototype.updatePageLinks = function () {
	        var inst = this.service.getInstance(this.id);
	        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
	        var correctedCurrentPage = this.outOfBoundCorrection(inst);
	        if (correctedCurrentPage !== inst.currentPage) {
	            this.setCurrent(correctedCurrentPage);
	        }
	    };
	    /**
	     * Checks that the instance.currentPage property is within bounds for the current page range.
	     * If not, return a correct value for currentPage, or the current value if OK.
	     */
	    PaginationControlsCmp.prototype.outOfBoundCorrection = function (instance) {
	        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
	        if (totalPages < instance.currentPage && 0 < totalPages) {
	            return totalPages;
	        }
	        else if (instance.currentPage < 1) {
	            return 1;
	        }
	        return instance.currentPage;
	    };
	    /**
	     * Returns an array of IPage objects to use in the pagination controls.
	     */
	    PaginationControlsCmp.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
	        // paginationRange could be a string if passed from attribute, so cast to number.
	        paginationRange = +paginationRange;
	        var pages = [];
	        var totalPages = Math.ceil(totalItems / itemsPerPage);
	        var halfWay = Math.ceil(paginationRange / 2);
	        var isStart = currentPage <= halfWay;
	        var isEnd = totalPages - halfWay < currentPage;
	        var isMiddle = !isStart && !isEnd;
	        var ellipsesNeeded = paginationRange < totalPages;
	        var i = 1;
	        while (i <= totalPages && i <= paginationRange) {
	            var label = void 0;
	            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
	            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
	            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
	            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
	                label = '...';
	            }
	            else {
	                label = pageNumber;
	            }
	            pages.push({
	                label: label,
	                value: pageNumber
	            });
	            i++;
	        }
	        return pages;
	    };
	    /**
	     * Given the position in the sequence of pagination links [i],
	     * figure out what page number corresponds to that position.
	     */
	    PaginationControlsCmp.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
	        var halfWay = Math.ceil(paginationRange / 2);
	        if (i === paginationRange) {
	            return totalPages;
	        }
	        else if (i === 1) {
	            return i;
	        }
	        else if (paginationRange < totalPages) {
	            if (totalPages - halfWay < currentPage) {
	                return totalPages - paginationRange + i;
	            }
	            else if (halfWay < currentPage) {
	                return currentPage - halfWay + i;
	            }
	            else {
	                return i;
	            }
	        }
	        else {
	            return i;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationControlsCmp.prototype, "id", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PaginationControlsCmp.prototype, "maxSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationControlsCmp.prototype, "directionLinks", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationControlsCmp.prototype, "autoHide", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], PaginationControlsCmp.prototype, "pageChange", void 0);
	    __decorate([
	        core_1.ViewChild('template'), 
	        __metadata('design:type', Object)
	    ], PaginationControlsCmp.prototype, "template", void 0);
	    PaginationControlsCmp = __decorate([
	        core_1.Component({
	            selector: 'pagination-controls',
	            template: template_1.DEFAULT_TEMPLATE,
	            styles: [template_1.DEFAULT_STYLES],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [pagination_service_1.PaginationService, core_1.ChangeDetectorRef])
	    ], PaginationControlsCmp);
	    return PaginationControlsCmp;
	}());
	exports.PaginationControlsCmp = PaginationControlsCmp;


/***/ },
/* 989 */
/***/ function(module, exports) {

	/**
	 * The default template and styles for the pagination links are borrowed directly
	 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
	 */
	"use strict";
	exports.DEFAULT_TEMPLATE = "\n    <div #template>\n        <ng-content></ng-content>\n    </div>\n    <ul class=\"ng2-pagination\" \n        role=\"navigation\" \n        aria-label=\"Pagination\" \n        *ngIf=\"!hasTemplate && !(autoHide && pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < getCurrent()\" (click)=\"previous()\" aria-label=\"Next page\">\n                Previous <span class=\"show-for-sr\">page</span>\n            </a>\n            <span *ngIf=\"isFirstPage()\">Previous <span class=\"show-for-sr\">page</span></span>\n        </li>\n\n        <li [class.current]=\"getCurrent() === page.value\" *ngFor=\"let page of pages\">\n            <a (click)=\"setCurrent(page.value)\" *ngIf=\"getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">Page</span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"getCurrent() === page.value\">\n                <span class=\"show-for-sr\">You're on page</span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!isLastPage()\" (click)=\"next()\" aria-label=\"Next page\">\n                Next <span class=\"show-for-sr\">page</span>\n            </a>\n            <span *ngIf=\"isLastPage()\">Next <span class=\"show-for-sr\">page</span></span>\n        </li>\n\n    </ul>\n    ";
	exports.DEFAULT_STYLES = "\n.ng2-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ng2-pagination::before, .ng2-pagination::after {\n    content: ' ';\n    display: table; }\n  .ng2-pagination::after {\n    clear: both; }\n  .ng2-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    font-size: 0.875rem;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ng2-pagination li {\n    display: inline-block; }\n  .ng2-pagination a,\n  .ng2-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ng2-pagination a:hover,\n    .ng2-pagination button:hover {\n      background: #e6e6e6; }\n  .ng2-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ng2-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ng2-pagination .disabled:hover {\n      background: transparent; }\n  .ng2-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.ng2-pagination .pagination-previous a::before,\n.ng2-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ng2-pagination .pagination-next a::after,\n.ng2-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ng2-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";


/***/ }
]);
//# sourceMappingURL=main.map