(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anos-anos-module"],{

/***/ "./src/app/anos/anos.module.ts":
/*!*************************************!*\
  !*** ./src/app/anos/anos.module.ts ***!
  \*************************************/
/*! exports provided: AnosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnosPageModule", function() { return AnosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _anos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anos.page */ "./src/app/anos/anos.page.ts");







var routes = [
    {
        path: '',
        component: _anos_page__WEBPACK_IMPORTED_MODULE_6__["AnosPage"]
    }
];
var AnosPageModule = /** @class */ (function () {
    function AnosPageModule() {
    }
    AnosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_anos_page__WEBPACK_IMPORTED_MODULE_6__["AnosPage"]]
        })
    ], AnosPageModule);
    return AnosPageModule;
}());



/***/ }),

/***/ "./src/app/anos/anos.page.html":
/*!*************************************!*\
  !*** ./src/app/anos/anos.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Anos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n  [(ngModel)]=\"myInput\">\n</ion-searchbar>\n\n    <ion-list>\n      <ion-item ion-item *ngFor=\"let cod_ano of codigo_anos\" (click)=\"listaFipe(anos[cod_ano].id);\">\n        {{anos[cod_ano].name}}\n      </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/anos/anos.page.scss":
/*!*************************************!*\
  !*** ./src/app/anos/anos.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fub3MvYW5vcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/anos/anos.page.ts":
/*!***********************************!*\
  !*** ./src/app/anos/anos.page.ts ***!
  \***********************************/
/*! exports provided: AnosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnosPage", function() { return AnosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fipe.service */ "./src/app/services/fipe.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");





var AnosPage = /** @class */ (function () {
    function AnosPage(fipeService, navCtrl) {
        var _this = this;
        this.fipeService = fipeService;
        this.navCtrl = navCtrl;
        this.anos = [];
        //this.veiculo = this.navParams.get();
        this.fipeService.getAnos(_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_ano).subscribe(function (resposta) {
            console.log(resposta);
            _this.anos = resposta;
            _this.codigo_anos = Object.keys(resposta);
            console.log(_this.codigo_anos);
        });
    }
    AnosPage.prototype.listaFipe = function (id) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_fipe = id;
        this.navCtrl.navigateForward('consulta');
        console.log(_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_fipe);
    };
    AnosPage.prototype.ngOnInit = function () {
    };
    AnosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anos',
            template: __webpack_require__(/*! ./anos.page.html */ "./src/app/anos/anos.page.html"),
            styles: [__webpack_require__(/*! ./anos.page.scss */ "./src/app/anos/anos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fipe_service__WEBPACK_IMPORTED_MODULE_2__["FipeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AnosPage);
    return AnosPage;
}());



/***/ })

}]);
//# sourceMappingURL=anos-anos-module.js.map