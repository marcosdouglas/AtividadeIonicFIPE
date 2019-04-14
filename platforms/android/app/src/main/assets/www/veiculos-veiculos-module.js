(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["veiculos-veiculos-module"],{

/***/ "./src/app/veiculos/veiculos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/veiculos/veiculos.module.ts ***!
  \*********************************************/
/*! exports provided: VeiculosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosPageModule", function() { return VeiculosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _veiculos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./veiculos.page */ "./src/app/veiculos/veiculos.page.ts");







var routes = [
    {
        path: '',
        component: _veiculos_page__WEBPACK_IMPORTED_MODULE_6__["VeiculosPage"]
    }
];
var VeiculosPageModule = /** @class */ (function () {
    function VeiculosPageModule() {
    }
    VeiculosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_veiculos_page__WEBPACK_IMPORTED_MODULE_6__["VeiculosPage"]]
        })
    ], VeiculosPageModule);
    return VeiculosPageModule;
}());



/***/ }),

/***/ "./src/app/veiculos/veiculos.page.html":
/*!*********************************************!*\
  !*** ./src/app/veiculos/veiculos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Marcas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar>\n</ion-searchbar>\n\n    <ion-list>\n      <ion-item ion-item *ngFor=\"let cod_marca of codigo_marcas\" (click)=\"listaModelo(marcas[cod_marca].id);\">\n        {{marcas[cod_marca].name}}\n      </ion-item>\n    </ion-list>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/veiculos/veiculos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/veiculos/veiculos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaWN1bG9zL3ZlaWN1bG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/veiculos/veiculos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/veiculos/veiculos.page.ts ***!
  \*******************************************/
/*! exports provided: VeiculosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosPage", function() { return VeiculosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fipe.service */ "./src/app/services/fipe.service.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var VeiculosPage = /** @class */ (function () {
    function VeiculosPage(fipeService, navCtrl) {
        var _this = this;
        this.fipeService = fipeService;
        this.navCtrl = navCtrl;
        this.codigo_marcas = [];
        this.fipeService.getMarcas(_home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].veiculo).subscribe(function (resposta) {
            console.log(resposta);
            _this.marcas = resposta;
            _services_fipe_service__WEBPACK_IMPORTED_MODULE_2__["FipeService"].items = resposta;
            _this.codigo_marcas = Object.keys(resposta);
            console.log(_this.codigo_marcas);
        });
    }
    //atribui a chave para a variavel id_marca e redireciona para a pagina modelos
    VeiculosPage.prototype.listaModelo = function (id) {
        _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"].id_marca = id;
        this.navCtrl.navigateForward('modelos');
        console.log(id);
    };
    VeiculosPage.prototype.ngOnInit = function () {
    };
    VeiculosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-veiculos',
            template: __webpack_require__(/*! ./veiculos.page.html */ "./src/app/veiculos/veiculos.page.html"),
            styles: [__webpack_require__(/*! ./veiculos.page.scss */ "./src/app/veiculos/veiculos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fipe_service__WEBPACK_IMPORTED_MODULE_2__["FipeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], VeiculosPage);
    return VeiculosPage;
}());



/***/ })

}]);
//# sourceMappingURL=veiculos-veiculos-module.js.map