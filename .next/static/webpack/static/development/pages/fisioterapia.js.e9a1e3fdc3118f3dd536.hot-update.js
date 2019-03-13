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
/* harmony import */ var _PagesStyles_FisioterapiaStyles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PagesStyles/FisioterapiaStyles.js */ "./PagesStyles/FisioterapiaStyles.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js";











var displayTechniques = function displayTechniques(techniques) {
  return techniques.map(function (technique, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Technique_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, technique, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
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
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1991372527",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL2Zpc2lvdGVyYXBpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm1CLEFBR3NDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy9maXNpb3RlcmFwaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlY25pY2FzIGZyb20gJy4uL2NvbnRlbnQvdGVjbmljYXMuanNvbidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBNb25zZXJyYXRTZW1pQm9sZCBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVNlbWlCb2xkLnR0Zic7XG5pbXBvcnQgTW9uc2VycmF0UmVndWxhciBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUZWNobmlxdWUgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobmlxdWUuanMnO1xuaW1wb3J0IEZpc2lvdGVyYXBpYVN0eWxlcyBmcm9tICcuLi9QYWdlc1N0eWxlcy9GaXNpb3RlcmFwaWFTdHlsZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5VGVjaG5pcXVlcyA9ICh0ZWNobmlxdWVzKSA9PiB7XG4gIHJldHVybiB0ZWNobmlxdWVzLm1hcCgodGVjaG5pcXVlLCBpKSA9PiA8VGVjaG5pcXVlIGtleT17aX0gey4uLnRlY2huaXF1ZX0gLz4pXG59XG5jb25zdCBmaXNpb3RlcmFwaWEgPSAoKSA9PiB7XG4gIGNvbnN0IHtkZXNjcmlwdGlvbiwgdGVjaG5pcXVlc30gPSB0ZWNuaWNhcztcbiAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gIDxIZWFkPlxuICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuPC9IZWFkPlxuPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9uc2VycmF0LVNlbWlib2xkXCI7XG4gICAgc3JjOiB1cmwoJHtNb25zZXJyYXRTZW1pQm9sZH0pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnNlcnJhdC1SZWd1bGFyXCI7XG4gICAgc3JjOiB1cmwoJHtNb25zZXJyYXRSZWd1bGFyfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmB9PC9zdHlsZT5cbjxOYXZiYXIgbGluaz1cIk5vc290cm9zXCIvPlxuICA8RmlzaW90ZXJhcGlhU3R5bGVzPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwicGlsYXRlcy1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvaW1nRmlzaW90ZXJhcGlhLmpwZ1wiIGFsdD1cImZpc2lvdGVyYXBpYS1pbWdcIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaWxhdGVzLWNvbnRlbnRcIj5cbiAgICAgIDxoMj5GaXNpb3RlcmFwaWE8L2gyPlxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5pcXVlc1wiPlxuICAgICAgICB7ZGlzcGxheVRlY2huaXF1ZXModGVjaG5pcXVlcyl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L0Zpc2lvdGVyYXBpYVN0eWxlcz5cbiAgPEZvb3RlciAvPlxuPC9SZWFjdC5GcmFnbWVudD5cbilcbn07XG5leHBvcnQgZGVmYXVsdCBmaXNpb3RlcmFwaWE7XG4iXX0= */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_FisioterapiaStyles_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/imgFisioterapia.jpg",
    alt: "fisioterapia-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "pilates-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "pilates-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Fisioterapia"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, displayTechniques(techniques)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (fisioterapia);

/***/ })

})
//# sourceMappingURL=fisioterapia.js.e9a1e3fdc3118f3dd536.hot-update.js.map