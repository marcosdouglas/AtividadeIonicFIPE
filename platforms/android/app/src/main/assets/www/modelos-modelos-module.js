(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modelos-modelos-module"],{

/***/ "./src/app/modelos/modelos.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modelos/modelos.module.ts ***!
  \*******************************************/
/*! exports provided: ModelosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosPageModule", function() { return ModelosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modelos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modelos.page */ "./src/app/modelos/modelos.page.ts");







var routes = [
    {
        path: '',
        component: _modelos_page__WEBPACK_IMPORTED_MODULE_6__["ModelosPage"]
    }
];
var ModelosPageModule = /** @class */ (function () {
    function ModelosPageModule() {
    }
    ModelosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modelos_page__WEBPACK_IMPORTED_MODULE_6__["ModelosPage"]]
        })
    ], ModelosPageModule);
    return ModelosPageModule;
}());



/***/ }),

/***/ "./src/app/modelos/modelos.page.html":
/*!*******************************************!*\
  !*** ./src/app/modelos/modelos.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Modelos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n  [(ngModel)]=\"myInput\">\n</ion-searchbar>\n\n    <ion-list>\n      <ion-item ion-item *ngFor=\"let cod_modelo of codigo_modelos\" (click)=\"listaAnos(modelos[cod_modelo].id);\">\n        {{modelos[cod_modelo].name}}\n      </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/modelos/modelos.page.scss":
/*!*******************************************!*\
  !*** ./src/app/modelos/modelos.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsb3MvbW9kZWxvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modelos/modelos.page.ts":
/*!*****************************************!*\
  !*** ./src/app/modelos/modelos.page.ts ***!
  \*****************************************/
/*! exports provided: ModelosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelosPage", function() { return ModelosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fipe.service */ "./src/app/services/fipe.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");





var ModelosPage = /** @class */ (function () {
    function ModelosPage(fipeService, navCtrl) {
        var _this = this;
        this.fipeService = fipeService;
        this.navCtrl = navCtrl;
        this.modelos = [];
        //this.veiculo = this.navParams.get();
        this.fipeService.getModelos(_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_marca).subscribe(function (resposta) {
            console.log(resposta);
            _this.modelos = resposta;
            _this.codigo_modelos = Object.keys(resposta);
            console.log(_this.codigo_modelos);
        });
    }
    //atribui a chave para a variavel id_ano e redireciona para a pagina anos
    ModelosPage.prototype.listaAnos = function (id) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_ano = id;
        this.navCtrl.navigateForward('anos');
        console.log(_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_ano);
    };
    ModelosPage.prototype.ngOnInit = function () {
    };
    ModelosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modelos',
            template: __webpack_require__(/*! ./modelos.page.html */ "./src/app/modelos/modelos.page.html"),
            styles: [__webpack_require__(/*! ./modelos.page.scss */ "./src/app/modelos/modelos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fipe_service__WEBPACK_IMPORTED_MODULE_2__["FipeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ModelosPage);
    return ModelosPage;
}());



/***/ })

}]);
//# sourceMappingURL=modelos-modelos-module.js.map