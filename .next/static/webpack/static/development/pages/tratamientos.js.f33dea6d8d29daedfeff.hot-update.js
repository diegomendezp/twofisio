webpackHotUpdate("static/development/pages/tratamientos.js",{

/***/ "./components/Treatment.js":
/*!*********************************!*\
  !*** ./components/Treatment.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PagesStyles/FontStyle/FontRegular.js */ "./PagesStyles/FontStyle/FontRegular.js");
/* harmony import */ var _PagesStyles_FontStyle_FontBold_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PagesStyles/FontStyle/FontBold.js */ "./PagesStyles/FontStyle/FontBold.js");
var _jsxFileName = "/Users/simon/Desktop/twofisio/components/Treatment.js";




var displayDescription = function displayDescription(description) {
  return description.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "- ", element);
  });
};

var Treatment = function Treatment(_ref) {
  var name = _ref.name,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "treatment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "treatment-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, name), displayDescription(description));
};

/* harmony default export */ __webpack_exports__["default"] = (Treatment);

/***/ })

})
//# sourceMappingURL=tratamientos.js.f33dea6d8d29daedfeff.hot-update.js.map