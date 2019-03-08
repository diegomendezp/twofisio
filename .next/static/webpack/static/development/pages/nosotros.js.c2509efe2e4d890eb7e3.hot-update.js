webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./components/Member/Member.js":
/*!*************************************!*\
  !*** ./components/Member/Member.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Member/Member.js";


var displayCurriculum = function displayCurriculum(curriculum) {
  return curriculum.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, element);
  });
};

var Member = function Member(_ref) {
  var name = _ref.name,
      number = _ref.number,
      curriculum = _ref.curriculum;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    alt: "".concat(name, "-photo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "N\xBAColegiado: ", number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, displayCurriculum(curriculum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ })

})
//# sourceMappingURL=nosotros.js.c2509efe2e4d890eb7e3.hot-update.js.map