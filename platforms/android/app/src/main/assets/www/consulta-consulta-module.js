(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulta-consulta-module"],{

/***/ "./src/app/consulta/consulta.module.ts":
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.module.ts ***!
  \*********************************************/
/*! exports provided: ConsultaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPageModule", function() { return ConsultaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta.page */ "./src/app/consulta/consulta.page.ts");







var routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaPage"]
    }
];
var ConsultaPageModule = /** @class */ (function () {
    function ConsultaPageModule() {
    }
    ConsultaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaPage"]]
        })
    ], ConsultaPageModule);
    return ConsultaPageModule;
}());



/***/ }),

/***/ "./src/app/consulta/consulta.page.html":
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Consulta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 10%; background-color: rgba(56, 128, 255, 0.8); border-radius: 3%;margin: 10%;text-align: center;margin-top: 15%; color:white; font-size: 1.3em;\">\n    <div>\n      Modelo: {{consulta.name}} {{consulta.ano_modelo}}\n      <br>\n      <br>\n      Código: {{consulta.fipe_codigo}}\n      <br>\n      Valor: <div style=\"color: rgb(202, 72, 32);\">{{consulta.preco}}</div>\n      <br>\n      Referência: {{consulta.referencia}}\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/consulta/consulta.page.scss":
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRhL2NvbnN1bHRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/consulta/consulta.page.ts":
/*!*******************************************!*\
  !*** ./src/app/consulta/consulta.page.ts ***!
  \*******************************************/
/*! exports provided: ConsultaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPage", function() { return ConsultaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fipe.service */ "./src/app/services/fipe.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");





var ConsultaPage = /** @class */ (function () {
    function ConsultaPage(fipeService, navCtrl) {
        var _this = this;
        this.fipeService = fipeService;
        this.navCtrl = navCtrl;
        this.codigo_consulta = [];
        //this.veiculo = this.navParams.get();
        this.fipeService.getConsulta(_home_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"].id_fipe).subscribe(function (resposta) {
            console.log(resposta);
            _this.consulta = resposta;
            _this.codigo_consulta = Object.keys(resposta);
            console.log(_this.codigo_consulta);
        });
    }
    ConsultaPage.prototype.ngOnInit = function () {
    };
    ConsultaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.page.html */ "./src/app/consulta/consulta.page.html"),
            styles: [__webpack_require__(/*! ./consulta.page.scss */ "./src/app/consulta/consulta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fipe_service__WEBPACK_IMPORTED_MODULE_2__["FipeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ConsultaPage);
    return ConsultaPage;
}());



/***/ })

}]);
//# sourceMappingURL=consulta-consulta-module.js.map