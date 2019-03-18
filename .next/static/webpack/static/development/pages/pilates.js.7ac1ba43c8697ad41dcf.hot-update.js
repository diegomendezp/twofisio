webpackHotUpdate("static/development/pages/pilates.js",{

/***/ "./PagesStyles/FontStyle/FontRegular.js":
/*!**********************************************!*\
  !*** ./PagesStyles/FontStyle/FontRegular.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FontRegular = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "FontRegular",
  componentId: "sc-1rq8xai-0"
})(["font-family:\"Monserrat-Regular\";color:black;font-size:1rem;letter-spacing:0.03rem;line-height:1.45rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (FontRegular);

/***/ }),

/***/ "./pages/pilates.js":
/*!**************************!*\
  !*** ./pages/pilates.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-SemiBold.ttf */ "./static/fonts/Montserrat/Montserrat-SemiBold.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/fonts/Montserrat/Montserrat-Regular.ttf */ "./static/fonts/Montserrat/Montserrat-Regular.ttf");
/* harmony import */ var _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _PagesStyles_PilatesStyles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PagesStyles/PilatesStyles.js */ "./PagesStyles/PilatesStyles.js");
/* harmony import */ var _PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PagesStyles/FontStyle/FontRegular.js */ "./PagesStyles/FontStyle/FontRegular.js");
var _jsxFileName = "/Users/simongnegrete/Desktop/Tailor/Twofisio/twofisio/pages/pilates.js";










var pilates = function pilates() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3898954932",
    dynamic: [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a],
    __self: this
  }, "@font-face{font-family:\"Monserrat-Semibold\";src:url(".concat(_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}@font-face{font-family:\"Monserrat-Regular\";src:url(").concat(_static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a, ") format(\"truetype\");font-weight:normal;font-style:normal;}body{margin:0;padding:0;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbmduZWdyZXRlL0Rlc2t0b3AvVGFpbG9yL1R3b2Zpc2lvL3R3b2Zpc2lvL3BhZ2VzL3BpbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J5QixBQUc0QyxBQU1ELEFBT3ZCLFNBQ0MsVUFDSyxhQVIwQyxDQU5BLENBZTNELHVEQVJxQixDQU5BLGtCQU9ELENBTkEsaUJBT3BCLENBTkEiLCJmaWxlIjoiL1VzZXJzL3NpbW9uZ25lZ3JldGUvRGVza3RvcC9UYWlsb3IvVHdvZmlzaW8vdHdvZmlzaW8vcGFnZXMvcGlsYXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb25zZXJyYXRTZW1pQm9sZCBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1TZW1pQm9sZC50dGZcIjtcbmltcG9ydCBNb25zZXJyYXRSZWd1bGFyIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LVJlZ3VsYXIudHRmXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IFBpbGF0ZXNTdHlsZXMgZnJvbSBcIi4uL1BhZ2VzU3R5bGVzL1BpbGF0ZXNTdHlsZXMuanNcIjtcblxuaW1wb3J0IEZvbnRSZWd1bGFyIGZyb20gXCIuLi9QYWdlc1N0eWxlcy9Gb250U3R5bGUvRm9udFJlZ3VsYXIuanNcIlxuY29uc3QgcGlsYXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnNlcnJhdC1TZW1pYm9sZFwiO1xuICAgICAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0U2VtaUJvbGR9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJNb25zZXJyYXQtUmVndWxhclwiO1xuICAgICAgICAgIHNyYzogdXJsKCR7TW9uc2VycmF0UmVndWxhcn0pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8TmF2YmFyIGxpbms9XCJOb3NvdHJvc1wiIC8+XG4gICAgICA8UGlsYXRlc1N0eWxlcz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cInBpbGF0ZXMtaW1nXCJcbiAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvaW1nUGlsYXRlcy5qcGdcIlxuICAgICAgICAgIGFsdD1cInBpbGF0ZXMtaW1nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWxhdGVzLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDI+UGlsYXRlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWxhdGVzXCI+XG4gICAgICAgICAgICA8Rm9udFJlZ3VsYXI+XG4gICAgICAgICAgICAgIEVsIG3DqXRvZG8gcGlsYXRlcyBlcyB1bmEgdMOpY25pY2EgdXRpbGl6YWRhIHBhcmEgZWwgZW50cmVuYW1pZW50b1xuICAgICAgICAgICAgICBmw61zaWNvIHkgbWVudGFsIGRlbCBjdWVycG8gbWVkaWFudGUgdW5hIHNlcmllIGRlIGVqZXJjaWNpb3MgcXVlIHNlXG4gICAgICAgICAgICAgIHJlYWxpemFuIGRlIGZvcm1hIGZsdWlkYSBtYW50ZW5pZW5kbyB1biBjb250cm9sIGV4aGF1c3Rpdm8gZGUgbGFcbiAgICAgICAgICAgICAgcmVzcGlyYWNpw7NuLlxuICAgICAgICAgICAgPC9Gb250UmVndWxhcj5cbiAgICAgICAgICAgIDxGb250UmVndWxhcj5cbiAgICAgICAgICAgICAgTG8gcHVlZGVuIHJlYWxpemFyLCB0YW50byBhcXVlbGxvcyBxdWUgc2UgaW50cm9kdWNlbiBwb3IgcHJpbWVyYVxuICAgICAgICAgICAgICBlbiBsYSBhY3RpdmlkYWQgZsOtc2ljYSwgY29tbyBsb3MgcXVlIHlhIGhhY2VuIGFsZ8O6biB0aXBvIGRlXG4gICAgICAgICAgICAgIGVqZXJjaWNpbywgeWEgc2VhbiBqw7N2ZW5lcyBvIG1heW9yZXMuIFRhbWJpw6luIGVzIG11eSByZWNvbWVuZGFibGVcbiAgICAgICAgICAgICAgcGFyYSBsYXMgcGVyc29uYXMgcXVlIHNlIGVuY3VlbnRyYW4gZW4gdW4gcHJvY2VzbyBkZSByZWN1cGVyYWNpw7NuXG4gICAgICAgICAgICAgIGRlIHVuYSBsZXNpw7NuLCBlbWJhcmF6YWRhcywgZGVwb3J0aXN0YXMgZGUgYWx0byByZW5kaW1pZW50b+KAplxuICAgICAgICAgICAgPC9Gb250UmVndWxhcj5cbiAgICAgICAgICAgIDxGb250UmVndWxhcj5cbiAgICAgICAgICAgICAgTGFzIGNsYXNlcyBkZSBwaWxhdGVzIHNlIGltcGFydGVuIGVuIGdydXBvcyByZWR1Y2lkb3MsIChtw6F4aW1vIDNcbiAgICAgICAgICAgICAgcGVyc29uYXMgcG9yIGdydXBvKSwgbyBpbmRpdmlkdWFsbWVudGUgeSBzaWVtcHJlIHNlcsOhbiBpbXBhcnRpZGFzXG4gICAgICAgICAgICAgIHBvciBmaXNpb3RlcmFwZXV0YXMgY29sZWdpYWRvcy5cbiAgICAgICAgICAgIDwvRm9udFJlZ3VsYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QaWxhdGVzU3R5bGVzPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwaWxhdGVzO1xuIl19 */\n/*@ sourceURL=/Users/simongnegrete/Desktop/Tailor/Twofisio/twofisio/pages/pilates.js */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    link: "Nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PagesStyles_PilatesStyles_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/imgPilates.jpg",
    alt: "pilates-img",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + "pilates-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + "pilates-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Pilates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3898954932", [_static_fonts_Montserrat_Montserrat_SemiBold_ttf__WEBPACK_IMPORTED_MODULE_2___default.a, _static_fonts_Montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + "pilates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "El m\xE9todo pilates es una t\xE9cnica utilizada para el entrenamiento f\xEDsico y mental del cuerpo mediante una serie de ejercicios que se realizan de forma fluida manteniendo un control exhaustivo de la respiraci\xF3n."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Lo pueden realizar, tanto aquellos que se introducen por primera en la actividad f\xEDsica, como los que ya hacen alg\xFAn tipo de ejercicio, ya sean j\xF3venes o mayores. Tambi\xE9n es muy recomendable para las personas que se encuentran en un proceso de recuperaci\xF3n de una lesi\xF3n, embarazadas, deportistas de alto rendimiento\u2026"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PagesStyles_FontStyle_FontRegular_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Las clases de pilates se imparten en grupos reducidos, (m\xE1ximo 3 personas por grupo), o individualmente y siempre ser\xE1n impartidas por fisioterapeutas colegiados.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (pilates);

/***/ })

})
//# sourceMappingURL=pilates.js.7ac1ba43c8697ad41dcf.hot-update.js.map