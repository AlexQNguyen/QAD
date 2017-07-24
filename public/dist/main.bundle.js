webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    //constructor, Service to talk to DB, Router for redirect & carrying user across
    function DashboardComponent(_httpService, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.userName = "";
        this.deeps = [];
        this.subscription = _httpService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    //talks to services and the from in the dashboard.html
    DashboardComponent.prototype.onDelete = function (id) {
        var _this = this;
        this._httpService.destroydeep(id)
            .then(function (deeps) { _this.deeps = deeps, _this.ngOnInit(); })
            .catch(function (err) { console.log("delete error"); });
    };
    DashboardComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    //when you intialize the Dashboard it will load all deeps
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getAll()
            .then(function (deeps) { _this.deeps = deeps; })
            .catch(function (err) {
            console.log("TEST ERROR");
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(239),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deep; });
var Deep = (function () {
    function Deep(id, userName, description, answer, answer_count, likes, created_at, updated_at) {
        if (id === void 0) { id = null; }
        if (userName === void 0) { userName = ""; }
        if (description === void 0) { description = ""; }
        if (answer === void 0) { answer = []; }
        if (answer_count === void 0) { answer_count = 0; }
        if (likes === void 0) { likes = 0; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.id = id;
        this.userName = userName;
        this.description = description;
        this.answer = answer;
        this.answer_count = answer_count;
        this.likes = likes;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Deep;
}());

//# sourceMappingURL=deep.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    //constructor, Service to talk to DB, ActivatedRoute for params, Router for redirect
    function EditComponent(_httpService, _route, router) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
        this.param = null;
        this.userName = "";
        this._route.params.subscribe(function (param) {
            _this.param = param._id;
        });
    }
    //talks to services and the from in the edit.html
    EditComponent.prototype.submitAnswer = function () {
        var _this = this;
        console.log(this.userName);
        this._httpService.addAnswer(this.deep, this.param)
            .then(function (newdeep) { _this.deep = newdeep, _this.goBack(); })
            .catch(function (err) { return console.log(err); });
    };
    //Redirect function
    EditComponent.prototype.goBack = function () {
        this.router.navigate(["/dashboard"]);
    };
    //showdeep service initates when you click edit.html---> grabs the deep info
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.param);
        this._httpService.showdeep(this.param)
            .then(function (deep) { _this.deep = deep; })
            .catch(function (err) { return console.log("this is an", err); });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__(240),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    //constructor, Service to talk to DB, Router for redirect & carrying user across
    function HomeComponent(_httpService, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.userName = "";
        this.deeps = [];
        this.subscription = _httpService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    //talks to services and the from in the dashboard.html
    HomeComponent.prototype.onDelete = function (id) {
        var _this = this;
        this._httpService.destroydeep(id)
            .then(function (deeps) { _this.deeps = deeps, _this.ngOnInit(); })
            .catch(function (err) { console.log("delete error"); });
    };
    HomeComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    //when you intialize the Dashboard it will load all deeps
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getAll()
            .then(function (deeps) { _this.deeps = deeps; })
            .catch(function (err) {
            console.log("TEST ERROR");
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(241),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deep__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, _httpService) {
        this.router = router;
        this._httpService = _httpService;
        this.deep = new __WEBPACK_IMPORTED_MODULE_3__deep__["a" /* Deep */]();
    }
    LoginComponent.prototype.onLogin = function () {
        this._httpService.updateUser(this.userName);
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(242),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deep__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = (function () {
    //constructor, Service to talk to DB, Router for redirect
    function NewComponent(_httpService, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.deep = new __WEBPACK_IMPORTED_MODULE_2__deep__["a" /* Deep */]();
        this.userName = "";
        this.subscription = _httpService.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    //
    // //talks to services and the form in the new.html
    NewComponent.prototype.onSubmit = function (deep) {
        var _this = this;
        console.log(this.deep);
        this._httpService.adddeep(this.deep)
            .then(function (newdeep) { _this.deep = newdeep, _this.goBack(); })
            .catch(function (err) { return console.log(err); });
    };
    //
    NewComponent.prototype.onDestroy = function () {
        this.subscription.unsubscribe();
    };
    //
    NewComponent.prototype.goBack = function () {
        this._route.navigate(["/dashboard"]);
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__(243),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewComponent);

var _a, _b;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    //constructor, Service to talk to DB, ActivatedRoute for params
    function ShowComponent(_httpService, _route, router) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
        this.param = null;
        this.userName = "";
        this._route.params.subscribe(function (param) {
            _this.param = param._id;
        });
    }
    ShowComponent.prototype.submitNote = function () {
        var _this = this;
        console.log(this.deep);
        this._httpService.addAnswer(this.deep, this.param)
            .then(function (newdeep) { _this.deep = newdeep, _this.goBack(); })
            .catch(function (err) { return console.log(err); });
    };
    ShowComponent.prototype.onLike = function () {
        var _this = this;
        this._httpService.updatedeep(this.param, this.deep)
            .then(function (newstar) { _this.deep = newstar, _this.ngOnInit(); })
            .catch(function (err) { return console.log(err); });
    };
    ShowComponent.prototype.goBack = function () {
        this.router.navigate(["/dashboard"]);
    };
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.showdeep(this.param)
            .then(function (deep) { _this.deep = deep; })
            .catch(function (err) { return console.log("this is an", err); });
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__(244),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ShowComponent);

var _a, _b, _c;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 162;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(177);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_new_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_show_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDgFCNdjaWx1ncVzPnSuQs-mhwBgp9Gz9Q'
            }),
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_new_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_2__new_new_component__["a" /* NewComponent */] },
    { path: 'dashboard/show/:_id', component: __WEBPACK_IMPORTED_MODULE_3__show_show_component__["a" /* ShowComponent */] },
    { path: 'edit/:_id', component: __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* EditComponent */] },
    { path: 'delete/:_id', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    //this file talks directly to the routes.js file in your server
    function HttpService(_http) {
        var _this = this;
        this._http = _http;
        this.userName = "";
        this.observedUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.subscription = this.observedUser.subscribe(function (updateUser) { _this.userName = updateUser; }, function (err) { console.log('error', err); }, function () { });
    }
    HttpService.prototype.updateUser = function (user) {
        this.observedUser.next(user);
    };
    //this function hits the /deeps in routes.js
    HttpService.prototype.getAll = function () {
        return this._http.get('/deeps').map(function (deeps) { return deeps.json(); }).toPromise();
    };
    //this function hits the /newdeeps in routes.js (deep) is the object you pass
    //to the create contorller
    HttpService.prototype.adddeep = function (deep) {
        deep.userName = this.userName;
        return this._http.post('/newdeeps', deep).map(function (deeps) { return deeps.json(); }).toPromise();
    };
    HttpService.prototype.addAnswer = function (deep, id) {
        deep.answers.author = this.userName;
        return this._http.post('/addnote/' + id, deep).map(function (deeps) { return deeps.json(); }).toPromise();
    };
    //this function hits the /deeps/show/:id
    HttpService.prototype.showdeep = function (id) {
        return this._http.get('/deep/show/' + id).map(function (deeps) { return deeps.json(); }).toPromise();
    };
    //this function hits the /updatedeep/:id
    //id is from params, deep is the object you are updating
    HttpService.prototype.updatedeep = function (id, deep) {
        console.log(deep);
        return this._http.post('/updatedeep/' + id, deep).map(function (deeps) { return deeps.json(); }).toPromise();
    };
    //this function hits the /deep/destory/:id
    HttpService.prototype.destroydeep = function (id) {
        return this._http.get('/deep/destroy/' + id).map(function (deeps) { return deeps.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "#border{\n  margin: 10px;\n  border: 2px solid black;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.agm-map-container {\n  height: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n    padding: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n    padding: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n\n\n<div class=\"container\" id=\"border\">\n  <h1>Deep Thoughts</h1>\n      <a [routerLink]=\"['/login']\">Login</a>\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-maker [latitude]=\"lat\" [longitude]=\"lng\"></agm-maker>\n      </agm-map>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "  <h4>Hi, {{ userName }}</h4>\n  <a href=\"\" (click)=\"onDestroy()\">Logout</a><br />\n\n\n    <a [routerLink]=\"['/new']\"> | Add a Deep thought</a>\n\n\n\n\n\n\n<table style=\"width:80%; text-align:center\">\n  <tr>\n    <th>Deep Thought</th>\n    <th>Answers</th>\n    <th>Last Answered</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let deep of deeps \">\n    <td> {{ deep.thought}}</td>\n    <td>{{ deep.answers.length }}</td>\n    <td>{{ deep.updatedAt | date:\"longDate\"}}</td>\n    <td>\n      <a [routerLink]=\"['/dashboard/show',deep._id]\">Show </a>\n      <a [routerLink]=\"['/edit',deep._id]\">| Answer </a>\n    </td>\n\n  </tr>\n\n</table>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"deep\">\n<a href=\"\" (click)=\"onDestroy()\">Logout</a><br />\n<a [routerLink]=\"['/dashboard']\">Dashboard</a>\n<a [routerLink]=\"['/home']\">|Home</a>\n\n\n<h4>What is the Answer to the Ultimate Question?</h4>\n  <h6>{{ deep.thought }}</h6>\n  <form  (ngSubmit)=\"submitAnswer()\">\n    Answer: <textarea rows=\"5\" cols=\"50\" type=\"text\" name=\"answer\" required minlength=\"10\" [(ngModel)]=\"deep.content\" #answer=\"ngModel\"></textarea><br>\n    <div *ngIf=\"answer.errors && (answer.dirty || answer.touched)\">\n        <div [hidden]= \"!answer.errors.required \">\n          answer is required\n        </div>\n        <div [hidden]= \"!answer.errors.minlength\">\n          answer must be at least 10 characters\n        </div>\n    </div>\n    <hr >\n    Supporting Details for your Answer (optional) <textarea rows=\"5\" cols=\"50\" type=\"text\" name=\"answer\" [(ngModel)]=\"deep.detail\"></textarea><br>\n    <input type=\"submit\" value=\"Answer\"/>  <button (click)='goBack()'>Cancel </button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "\n<a href=\"\" (click)=\"onDestroy()\">Logout</a><br />\n  <h4>Hi, {{ userName }}</h4>\n\n    <a [routerLink]=\"['/dashboard']\">deeps Dashboard</a>\n    <a [routerLink]=\"['/new']\"> | Register a deep</a>\n\n\n<table style=\"width:50%\">\n  <tr>\n    <th>Deep Thought</th>\n    <th>Notes</th>\n  </tr>\n  <tr *ngFor=\"let deep of deeps\">\n    <td><a [routerLink]=\"['/dashboard/show',deep._id]\"> {{ deep.userName }}</a></td>\n    <td>{{deep.answer_count}}</td>\n  </tr>\n\n</table>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<h6>Please enter a User Name</h6>\n<div class=\"login\">\n  <form #loginform=\"ngForm\" (submit)=\"onLogin()\">\n    <input type='text' name=\"userName\" [(ngModel)]=\"userName\" required minlength='4' #user_name=\"ngModel\"/>\n      <br />\n      <button [disabled]=\"!loginform.valid\" type=\"submit\" name=\"button\">Login</button>\n    <div *ngIf=\"user_name.errors && (user_name.dirty || user_name.touched)\">\n        <div [hidden]= \"!user_name.errors.required \">\n          User Name is required\n        </div>\n        <div [hidden]= \"!user_name.errors.minlength\">\n          User Name must be at least 4 characters\n        </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<h2>Add a Deep Thought</h2>\n  <a href=\"\" (click)=\"onDestroy()\">Logout</a><br />\n  <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n  <a [routerLink]=\"['/home']\">| Home</a>\n<router-outlet></router-outlet>\n<form  (ngSubmit)=\"onSubmit()\">\n\n\n  Thought: <textarea rows=\"5\" cols=\"50\" type=\"text\" name=\"thought\" required minlength=\"10\"[(ngModel)]=\"deep.thought\" #thought=\"ngModel\"></textarea><br />\n  <div *ngIf=\"thought.errors && (thought.dirty || thought.touched)\">\n      <div [hidden]= \"!thought.errors.required \">\n        Thought is required\n      </div>\n      <div [hidden]= \"!thought.errors.minlength\">\n        Thought must be at least 10 characters\n      </div>\n  </div>\n  <hr>\n  Description: <textarea rows=\"5\" cols=\"50\" type=\"text\" name=\"description\" [(ngModel)]=\"deep.description\" #description=\"ngModel\"></textarea><br />\n\n  <input type=\"submit\" value=\"Register deep\"/>\n</form>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"deep\">\n  <h3>What is the Answer to the Ultimate Question?</h3>\n  <h4> {{ deep.thought }} </h4>\n  <h6> {{ deep.description }} </h6>\n\n\n  <a [routerLink]=\"['/edit',deep._id]\">Answer this Question</a>\n  <a [routerLink]=\"['/dashboard']\">|Dashboard</a><br>\n  <a href=\"\" (click)=\"onDestroy()\"> Logout</a>\n\n  <div *ngFor=\"let answer of deep?.answers\">\n    <h4>Answered By: {{ answer.author }}</h4>\n    <h5>{{ answer.content }}</h5>\n    <h6>Details: {{ answer.detail }}</h6>\n\n    <p>{{ deep.updatedAt | date: \"medium\" }}</p>\n      0{{ deep.likes }} Likes\n      <button (click)=\"onLike()\">Like!</button>\n\n</div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ })

},[513]);
//# sourceMappingURL=main.bundle.js.map