webpackHotUpdate("static/development/pages/tratamientos.js",{

/***/ "./components/Member/Treatment.js":
false,

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
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Treatment.js";


var displayDescription = function displayDescription(description) {
  return description.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
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
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "treatment-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, name), displayDescription(description));
};

/* harmony default export */ __webpack_exports__["default"] = (Treatment);

/***/ }),

/***/ "./pages/tratamientos.js":
/*!*******************************!*\
  !*** ./pages/tratamientos.js ***!
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
/* harmony import */ var _content_treatments_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/treatments.json */ "./content/treatments.json");
var _content_treatments_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/treatments.json */ "./content/treatments.json", 1);
/* harmony import */ var _components_Treatment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Treatment.js */ "./components/Treatment.js");
/* harmony import */ var _PagesStyles_TratamientosStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PagesStyles/TratamientosStyles.js */ "./PagesStyles/TratamientosStyles.js");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-SemiBold.ttf */ "./static/fonts/Montserrat/Montserrat-SemiBold.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-Regular.ttf */ "./static/fonts/Montserrat/Montserrat-Regular.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar/Navbar.js */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer/Footer.js */ "./components/Footer/Footer.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/tratamientos.js";











var displayTreatments = function displayTreatments() {
  return _content_treatments_json__WEBPACK_IMPORTED_MODULE_3__.map(function (treatment, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Treatment_js__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, treatment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  });
};

var tratamientos = function tratamientos(props) {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "434473200",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL3RyYXRhbWllbnRvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCLEFBRzBDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy90cmF0YW1pZW50b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHJlYXRtZW50cyBmcm9tICcuLi9jb250ZW50L3RyZWF0bWVudHMuanNvbidcbmltcG9ydCBUcmVhdG1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVhdG1lbnQuanMnO1xuaW1wb3J0IFRyYXRhbWllbnRvc1N0eWxlcyBmcm9tICcuLi9QYWdlc1N0eWxlcy9UcmF0YW1pZW50b3NTdHlsZXMuanMnO1xuaW1wb3J0IE1vbnNlcnJhdFNlbWlCb2xkIGZyb20gJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtU2VtaUJvbGQudHRmJztcbmltcG9ydCBNb25zZXJyYXRSZWd1bGFyIGZyb20gJy4uL3N0YXRpYy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGYnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMnO1xuXG5jb25zdCBkaXNwbGF5VHJlYXRtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHRyZWF0bWVudHMubWFwKCh0cmVhdG1lbnQsIGkpID0+IDxUcmVhdG1lbnQga2V5PXtpfSB7Li4udHJlYXRtZW50fS8+KVxufVxuXG5jb25zdCB0cmF0YW1pZW50b3MgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnNlcnJhdC1TZW1pYm9sZFwiO1xuICAgICAgICBzcmM6IHVybCgke01vbnNlcnJhdFNlbWlCb2xkfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJNb25zZXJyYXQtUmVndWxhclwiO1xuICAgICAgICBzcmM6IHVybCgke01vbnNlcnJhdFJlZ3VsYXJ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgfVxuICBcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPE5hdmJhciBsaW5rPVwiTm9zb3Ryb3NcIi8+XG4gICAgICA8VHJhdGFtaWVudG9zU3R5bGVzPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRyZWF0bWVudHMtaW1nXCIgc3JjPVwiLi4vc3RhdGljL2ltZ1RyYXRhbWllbnRvcy5qcGdcIiBhbHQ9XCJ0cmF0YW1pZW50b3MtaW1nXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWF0bWVudHMtY29udGVudFwiPlxuICAgICAgICAgIDxoMj5UcmF0YW1pZW50b3M8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlYXRtZW50c1wiPlxuICAgICAgICAgICAge2Rpc3BsYXlUcmVhdG1lbnRzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UcmF0YW1pZW50b3NTdHlsZXM+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgdHJhdGFtaWVudG9zXG5cbiJdfQ== */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/tratamientos.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_TratamientosStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/imgTratamientos.jpg",
    alt: "tratamientos-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "treatments-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "treatments-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Tratamientos"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_6___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_7___default.a]]]) + " " + "treatments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, displayTreatments()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (tratamientos);

/***/ })

})
//# sourceMappingURL=tratamientos.js.23dfdfb1e91acd30a033.hot-update.js.map