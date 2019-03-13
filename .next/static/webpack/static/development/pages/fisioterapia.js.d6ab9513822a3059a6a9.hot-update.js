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
/* harmony import */ var _PagesStyles_PilatesStyles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PagesStyles/PilatesStyles.js */ "./PagesStyles/PilatesStyles.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js";












var displayTechniques = function displayTechniques(techniques) {
  return techniques.map(function (technique, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Technique_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, technique, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
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
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3077783533",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL2Zpc2lvdGVyYXBpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnFCLEFBR3dDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy9maXNpb3RlcmFwaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGVjbmljYXMgZnJvbSBcIi4uL2NvbnRlbnQvdGVjbmljYXMuanNvblwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanNcIjtcbmltcG9ydCBNb25zZXJyYXRTZW1pQm9sZCBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcbmltcG9ydCBNb25zZXJyYXRSZWd1bGFyIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgVGVjaG5pcXVlIGZyb20gXCIuLi9jb21wb25lbnRzL1RlY2huaXF1ZS5qc1wiO1xuaW1wb3J0IEZpc2lvdGVyYXBpYVN0eWxlcyBmcm9tIFwiLi4vUGFnZXNTdHlsZXMvRmlzaW90ZXJhcGlhU3R5bGVzLmpzXCI7XG5pbXBvcnQgUGlsYXRlc1N0eWxlcyBmcm9tIFwiLi4vUGFnZXNTdHlsZXMvUGlsYXRlc1N0eWxlcy5qc1wiO1xuXG5jb25zdCBkaXNwbGF5VGVjaG5pcXVlcyA9IHRlY2huaXF1ZXMgPT4ge1xuICByZXR1cm4gdGVjaG5pcXVlcy5tYXAoKHRlY2huaXF1ZSwgaSkgPT4gPFRlY2huaXF1ZSBrZXk9e2l9IHsuLi50ZWNobmlxdWV9IC8+KTtcbn07XG5jb25zdCBmaXNpb3RlcmFwaWEgPSAoKSA9PiB7XG4gIGNvbnN0IHtkZXNjcmlwdGlvbiwgdGVjaG5pcXVlc30gPSB0ZWNuaWNhcztcbiAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlYWQ+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICA8L0hlYWQ+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogXCJNb25zZXJyYXQtU2VtaWJvbGRcIjtcbiAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0U2VtaUJvbGR9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgfVxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTW9uc2VycmF0LVJlZ3VsYXJcIjtcbiAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0UmVndWxhcn0pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG4gIFxuICAgIGJvZHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPE5hdmJhciBsaW5rPVwiTm9zb3Ryb3NcIi8+XG4gICAgPEZpc2lvdGVyYXBpYVN0eWxlcz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGVjaG5pcXVlcy1pbWdcIiBzcmM9XCIuLi9zdGF0aWMvaW1nRmlzaW90ZXJhcGlhLmpwZ1wiIGFsdD1cImZpc2lvdGVyYXBpYS1pbWdcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2huaXF1ZXMtY29udGVudFwiPlxuICAgICAgICA8aDI+RmlzaW90ZXJhcGlhPC9oMj5cbiAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobmlxdWVzXCI+XG4gICAgICAgICAge2Rpc3BsYXlUZWNobmlxdWVzKHRlY2huaXF1ZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9GaXNpb3RlcmFwaWFTdHlsZXM+XG4gICAgPEZvb3RlciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG5cbn07XG5leHBvcnQgZGVmYXVsdCBmaXNpb3RlcmFwaWE7XG4iXX0= */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_FisioterapiaStyles_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/imgFisioterapia.jpg",
    alt: "fisioterapia-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Fisioterapia"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3077783533", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "techniques",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, displayTechniques(techniques)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (fisioterapia);

/***/ })

})
//# sourceMappingURL=fisioterapia.js.d6ab9513822a3059a6a9.hot-update.js.map