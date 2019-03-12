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
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/umd/index.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Member/Member.js";




var displayCurriculum = function displayCurriculum(curriculum) {
  return curriculum.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
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
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    alt: "".concat(name, "-photo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "N\xBAColegiado: ", number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, displayCurriculum(curriculum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ })

})
//# sourceMappingURL=nosotros.js.d793516138a66830b0f4.hot-update.js.map