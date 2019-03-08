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
  curriculum.map(function (element) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
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
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "N\xBAColegiado: ", number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, displayCurriculum(curriculum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ }),

/***/ "./pages/nosotros.js":
/*!***************************!*\
  !*** ./pages/nosotros.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/team.json */ "./content/team.json", 1);
/* harmony import */ var _components_Member_Member_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Member/Member.js */ "./components/Member/Member.js");
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/nosotros.js";




var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_1__.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, member.name);
  });
};

var nosotros = function nosotros(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, displayTeam());
};

/* harmony default export */ __webpack_exports__["default"] = (nosotros);

/***/ })

})
//# sourceMappingURL=nosotros.js.9ffad8565f0201fc2048.hot-update.js.map