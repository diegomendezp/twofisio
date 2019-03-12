webpackHotUpdate("static/development/pages/tratamientos.js",{

/***/ "./pages/tratamientos.js":
/*!*******************************!*\
  !*** ./pages/tratamientos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_treatments_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/treatments.json */ "./content/treatments.json");
var _content_treatments_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/treatments.json */ "./content/treatments.json", 1);
/* harmony import */ var _components_Member_Treatment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Member/Treatment.js */ "./components/Member/Treatment.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/tratamientos.js";




var displayTreatments = function displayTreatments() {
  return _content_treatments_json__WEBPACK_IMPORTED_MODULE_2__.map(function (treatment, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Member_Treatment_js__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, treatment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
};

var tratamientos = function tratamientos(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "treatments-img",
    src: "../static/imgTratamientos.jpg",
    alt: "tratamientos-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), displayTreatments());
};

/* harmony default export */ __webpack_exports__["default"] = (tratamientos);

/***/ })

})
//# sourceMappingURL=tratamientos.js.36da2598dbd91c004804.hot-update.js.map