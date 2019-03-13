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
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL2Zpc2lvdGVyYXBpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm1CLEFBR3NDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy9maXNpb3RlcmFwaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlY25pY2FzIGZyb20gJy4uL2NvbnRlbnQvdGVjbmljYXMuanNvbidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBNb25zZXJyYXRTZW1pQm9sZCBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVNlbWlCb2xkLnR0Zic7XG5pbXBvcnQgTW9uc2VycmF0UmVndWxhciBmcm9tICcuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBUZWNobmlxdWUgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobmlxdWUuanMnO1xuaW1wb3J0IEZpc2lvdGVyYXBpYVN0eWxlcyBmcm9tICcuLi9QYWdlc1N0eWxlcy9GaXNpb3RlcmFwaWFTdHlsZXMuanMnO1xuXG5jb25zdCBkaXNwbGF5VGVjaG5pcXVlcyA9ICh0ZWNobmlxdWVzKSA9PiB7XG4gIHJldHVybiB0ZWNobmlxdWVzLm1hcCgodGVjaG5pcXVlLCBpKSA9PiA8VGVjaG5pcXVlIGtleT17aX0gey4uLnRlY2huaXF1ZX0gLz4pXG59XG5jb25zdCBmaXNpb3RlcmFwaWEgPSAoKSA9PiB7XG4gIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PlxuICA8SGVhZD5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbjwvSGVhZD5cbjxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnNlcnJhdC1TZW1pYm9sZFwiO1xuICAgIHNyYzogdXJsKCR7TW9uc2VycmF0U2VtaUJvbGR9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNb25zZXJyYXQtUmVndWxhclwiO1xuICAgIHNyYzogdXJsKCR7TW9uc2VycmF0UmVndWxhcn0pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gfTwvc3R5bGU+XG48TmF2YmFyIGxpbms9XCJOb3NvdHJvc1wiLz5cbiAgPEZpc2lvdGVyYXBpYVN0eWxlcz5cbiAgICA8aW1nIGNsYXNzTmFtZT1cInBpbGF0ZXMtaW1nXCIgc3JjPVwiLi4vc3RhdGljL2ltZ0Zpc2lvdGVyYXBpYS5qcGdcIiBhbHQ9XCJmaXNpb3RlcmFwaWEtaW1nXCIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGlsYXRlcy1jb250ZW50XCI+XG4gICAgICA8aDI+UGlsYXRlczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbGF0ZXNcIj5cbiAgICAgICAge2Rpc3BsYXlUZWNobmlxdWVzKHRlY2huaXF1ZXMpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9GaXNpb3RlcmFwaWFTdHlsZXM+XG4gIDxGb290ZXIgLz5cbjwvUmVhY3QuRnJhZ21lbnQ+XG4pXG59O1xuZXhwb3J0IGRlZmF1bHQgZmlzaW90ZXJhcGlhO1xuIl19 */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/fisioterapia.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_FisioterapiaStyles_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/imgFisioterapia.jpg",
    alt: "fisioterapia-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "pilates-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "pilates-content",
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
  }, "Pilates"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1991372527", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "pilates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, displayTechniques(techniques)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (fisioterapia);

/***/ })

})
//# sourceMappingURL=fisioterapia.js.72d0c301273e725ab0ea.hot-update.js.map