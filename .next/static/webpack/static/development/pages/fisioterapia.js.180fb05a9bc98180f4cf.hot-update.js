webpackHotUpdate("static/development/pages/fisioterapia.js",{

/***/ "./pages/fisioterapia.js":
/*!*******************************!*\
  !*** ./pages/fisioterapia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_tecnicas_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/tecnicas.json */ "./content/tecnicas.json");
var _content_tecnicas_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/tecnicas.json */ "./content/tecnicas.json", 1);
/* harmony import */ var _components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar/Navbar.js */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-SemiBold.ttf */ "./static/fonts/Montserrat/Montserrat-SemiBold.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-Regular.ttf */ "./static/fonts/Montserrat/Montserrat-Regular.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Technique_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Technique.js */ "./components/Technique.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js";










var displayTechniques = function displayTechniques(techniques) {
  techniques.map(function (technique, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Technique_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, technique, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  });
};

var fisioterapia = function fisioterapia() {
  var description = _content_tecnicas_json__WEBPACK_IMPORTED_MODULE_3__.description,
      techniques = _content_tecnicas_json__WEBPACK_IMPORTED_MODULE_3__.techniques;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1991372527",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL2Zpc2lvdGVyYXBpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm1CLEFBR3NDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy9maXNpb3RlcmFwaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlY25pY2FzIGZyb20gJy4uL2NvbnRlbnQvdGVjbmljYXMuanNvbidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBNb25zZXJyYXRTZW1pQm9sZCBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVNlbWlCb2xkLnR0Zic7XG5pbXBvcnQgTW9uc2VycmF0UmVndWxhciBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUZWNobmlxdWUgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobmlxdWUuanMnO1xuXG5jb25zdCBkaXNwbGF5VGVjaG5pcXVlcyA9ICh0ZWNobmlxdWVzKSA9PiB7XG4gIHRlY2huaXF1ZXMubWFwKCh0ZWNobmlxdWUsIGkpID0+IDxUZWNobmlxdWUga2V5PXtpfSB7Li4udGVjaG5pcXVlfSAvPilcbn1cbmNvbnN0IGZpc2lvdGVyYXBpYSA9ICgpID0+IHtcbiAgY29uc3Qge2Rlc2NyaXB0aW9uLCB0ZWNobmlxdWVzfSA9IHRlY25pY2FzO1xuICByZXR1cm4gKDxSZWFjdC5GcmFnbWVudD5cbiAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG48L0hlYWQ+XG48c3R5bGUganN4IGdsb2JhbD57YFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNb25zZXJyYXQtU2VtaWJvbGRcIjtcbiAgICBzcmM6IHVybCgke01vbnNlcnJhdFNlbWlCb2xkfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9uc2VycmF0LVJlZ3VsYXJcIjtcbiAgICBzcmM6IHVybCgke01vbnNlcnJhdFJlZ3VsYXJ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuYH08L3N0eWxlPlxuPE5hdmJhciBsaW5rPVwiTm9zb3Ryb3NcIi8+XG4gIFxuICAgIDxpbWcgY2xhc3NOYW1lPVwidGVjaG5pcXVlcy1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvaW1nRmlzaW90ZXJhcGlhLmpwZ1wiIGFsdD1cImZpc2lvdGVyYXBpYS1pbWdcIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobmlxdWVzLWNvbnRlbnRcIj5cbiAgICAgIDxoMj5GaXNpb3RlcmFwaWE8L2gyPlxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlYXRtZW50c1wiPlxuICAgICAgICB7ZGlzcGxheVRlY2huaXF1ZXModGVjaG5pcXVlcyl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8Rm9vdGVyIC8+XG48L1JlYWN0LkZyYWdtZW50PlxuKVxufTtcbmV4cG9ydCBkZWZhdWx0IGZpc2lvdGVyYXBpYTtcbiJdfQ== */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/imgFisioterapia.jpg",
    alt: "fisioterapia-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Fisioterapia"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "treatments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, displayTechniques(techniques))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (fisioterapia);

/***/ })

})
//# sourceMappingURL=fisioterapia.js.180fb05a9bc98180f4cf.hot-update.js.map