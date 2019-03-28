webpackHotUpdate("static/development/pages/tratamientos.js",{

/***/ "./PagesStyles/TratamientosStyles.js":
/*!*******************************************!*\
  !*** ./PagesStyles/TratamientosStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var TratamientosStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "TratamientosStyles",
  componentId: "sc-1i0q5f0-0"
})(["font-family:\"Monserrat-Regular\";.treatments-img{width:100%;object-fit:cover;}.treatment-name{font-family:\"Monserrat-Semibold\";color:#740a64;}.treatments-content{width:90%;margin:0 auto;}.treatment{margin-bottom:20%;}.treatments{margin-bottom:50%;}li{list-style:none;letter-spacing:0.2px;margin-top:2%;margin-bottom:2%;}@media only screen and (min-width:415px) and (max-width:768px){.treatment{width:48%;margin-bottom:10%;}.treatments{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:15%;}}@media only screen and (min-width:769px) and (max-width:1440px){.treatments-img{height:50vh;}.treatment{width:48%;margin-bottom:8%;}.treatments{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:15%;}}@media only screen and (min-width:1441px){.treatments-img{height:48vh;}.treatments-content{margin-top:8%;}.treatment{width:48%;margin-bottom:5%;}.treatments{display:flex;flex-wrap:wrap;justify-content:space-between;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (TratamientosStyles);

/***/ }),

/***/ "./components/Footer/FooterStyles.js":
/*!*******************************************!*\
  !*** ./components/Footer/FooterStyles.js ***!
  \*******************************************/
/*! exports provided: FooterWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.png */ "./components/Footer/map.png");
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map_png__WEBPACK_IMPORTED_MODULE_1__);


var FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles",
  componentId: "sc-41nnwu-0"
})(["font-family:\"Monserrat-Regular\";width:100%;color:white;background-position:center;background-size:cover;background-image:url(", ");.contact{font-family:\"Monserrat-Semibold\"}.footer-content{width:90%;margin-top:30%;margin-bottom:5%;}.footerLogo{width:10%;margin-left:2%;}.copyright{display:flex;align-items:center;margin-top:10%;}li{list-style:none;}a{text-decoration:none;list-style:none;color:white;}a:visited{color:white;}.contact-name{margin-bottom:0;}.contact-value{margin-top:0;}@media only screen and (min-width:769px) and (max-width:1440px){.footerLogo{width:5%;margin-left:2%;}.footer-content{margin-bottom:2%;margin-top:25%;}.copyright{margin-top:5%}}@media only screen and (min-width:1441px){.footer-content{width:90%;margin-top:6%;margin-bottom:1%;}.footerLogo{width:4%;margin-left:2%;}.copyright{margin-top:5%;}}"], _map_png__WEBPACK_IMPORTED_MODULE_1___default.a);
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-41nnwu-1"
})(["width:100%;background-color:#740A64E6;display:flex;justify-content:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (FooterStyles);

/***/ }),

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
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Treatment.js";




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
/* harmony import */ var _PagesStyles_FontStyle_FontBold_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PagesStyles/FontStyle/FontBold.js */ "./PagesStyles/FontStyle/FontBold.js");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-SemiBold.ttf */ "./static/fonts/Montserrat/Montserrat-SemiBold.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-Regular.ttf */ "./static/fonts/Montserrat/Montserrat-Regular.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar/Navbar.js */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var _static_imgTratamientos_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/imgTratamientos.jpg */ "./static/imgTratamientos.jpg");
/* harmony import */ var _static_imgTratamientos_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_imgTratamientos_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_HeaderAnimated_HeaderAnimated__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/HeaderAnimated/HeaderAnimated */ "./components/HeaderAnimated/HeaderAnimated.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/tratamientos.js";














var displayTreatments = function displayTreatments() {
  return _content_treatments_json__WEBPACK_IMPORTED_MODULE_3__.map(function (treatment, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Treatment_js__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, treatment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  });
};

var tratamientos = function tratamientos(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "434473200",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9EaWVnb21lbmRlejE5OTcvVGFpbG9yL3R3b2Zpc2lvL3BhZ2VzL3RyYXRhbWllbnRvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnVCLEFBRzBDLEFBTUQsQUFPdkIsU0FDQyxVQUNLLGFBUjBDLENBTkEsQ0FlM0QsdURBUnFCLENBTkEsa0JBT0QsQ0FOQSxpQkFPcEIsQ0FOQSIsImZpbGUiOiIvVXNlcnMvRGllZ29tZW5kZXoxOTk3L1RhaWxvci90d29maXNpby9wYWdlcy90cmF0YW1pZW50b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHJlYXRtZW50cyBmcm9tICcuLi9jb250ZW50L3RyZWF0bWVudHMuanNvbidcbmltcG9ydCBUcmVhdG1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVhdG1lbnQuanMnO1xuaW1wb3J0IFRyYXRhbWllbnRvc1N0eWxlcyBmcm9tICcuLi9QYWdlc1N0eWxlcy9UcmF0YW1pZW50b3NTdHlsZXMuanMnO1xuXG5pbXBvcnQgRm9udEJvbGQgZnJvbSBcIi4uL1BhZ2VzU3R5bGVzL0ZvbnRTdHlsZS9Gb250Qm9sZC5qc1wiO1xuXG5pbXBvcnQgTW9uc2VycmF0U2VtaUJvbGQgZnJvbSAnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1TZW1pQm9sZC50dGYnO1xuaW1wb3J0IE1vbnNlcnJhdFJlZ3VsYXIgZnJvbSAnLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1SZWd1bGFyLnR0Zic7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzJztcbmltcG9ydCBpbWdUcmF0YSBmcm9tIFwiLi4vc3RhdGljL2ltZ1RyYXRhbWllbnRvcy5qcGdcIlxuaW1wb3J0IEhlYWRlckFuaW1hdGVkIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlckFuaW1hdGVkL0hlYWRlckFuaW1hdGVkXCJcbmNvbnN0IGRpc3BsYXlUcmVhdG1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gdHJlYXRtZW50cy5tYXAoKHRyZWF0bWVudCwgaSkgPT4gPFRyZWF0bWVudCBrZXk9e2l9IHsuLi50cmVhdG1lbnR9Lz4pXG59XG5cbmNvbnN0IHRyYXRhbWllbnRvcyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9uc2VycmF0LVNlbWlib2xkXCI7XG4gICAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0U2VtaUJvbGR9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnNlcnJhdC1SZWd1bGFyXCI7XG4gICAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0UmVndWxhcn0pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG4gIFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8TmF2YmFyIGxpbms9XCJOb3NvdHJvc1wiLz5cbiAgICAgIDxUcmF0YW1pZW50b3NTdHlsZXM+XG4gICAgICA8SGVhZGVyQW5pbWF0ZWQgaW1nPXtpbWdUcmF0YX0gcG9zaXRpb25ZPXsxM30vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWF0bWVudHMtY29udGVudFwiPlxuICAgICAgICAgIDxGb250Qm9sZD5UcmF0YW1pZW50b3M8L0ZvbnRCb2xkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlYXRtZW50c1wiPlxuICAgICAgICAgICAge2Rpc3BsYXlUcmVhdG1lbnRzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UcmF0YW1pZW50b3NTdHlsZXM+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgdHJhdGFtaWVudG9zXG5cbiJdfQ== */\n/*@ sourceURL=/Users/Diegomendez1997/Tailor/twofisio/pages/tratamientos.js */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navbar_Navbar_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_TratamientosStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_HeaderAnimated_HeaderAnimated__WEBPACK_IMPORTED_MODULE_13__["default"], {
    img: _static_imgTratamientos_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    positionY: 13,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a]]]) + " " + "treatments-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PagesStyles_FontStyle_FontBold_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Tratamientos"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["434473200", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_7___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_8___default.a]]]) + " " + "treatments",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, displayTreatments()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (tratamientos);

/***/ })

})
//# sourceMappingURL=tratamientos.js.b28e3bfaad7b9984b316.hot-update.js.map