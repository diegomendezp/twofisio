webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/nosotros.js":
/*!***************************!*\
  !*** ./pages/nosotros.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/team.json */ "./content/team.json", 1);
/* harmony import */ var _components_Member_Member_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Member/Member.js */ "./components/Member/Member.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/nosotros.js";




var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_2__.map(function (member, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Member_Member_js__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
};

var nosotros = function nosotros(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
//# sourceMappingURL=nosotros.js.16cff7c763d13b2578a3.hot-update.js.map