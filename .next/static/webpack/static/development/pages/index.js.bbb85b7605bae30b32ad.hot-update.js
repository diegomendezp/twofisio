webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterStyles */ "./components/Footer/FooterStyles.js");
/* harmony import */ var _content_contact_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/contact.json */ "./content/contact.json");
var _content_contact_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/contact.json */ "./content/contact.json", 1);
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Footer/Footer.js";




var displayContactElements = function displayContactElements(contactList) {
  return contactList.keys().map(function (element, i) {
    return element === "Dirección" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://goo.gl/maps/K6zbJ39jVTn",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Direcci\xF3n: Avenida del Padre Piquer, 39, 28024 Madrid") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, element), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "contactList[element]"));
  });
};

var Footer = function Footer() {
  console.log(_content_contact_json__WEBPACK_IMPORTED_MODULE_2__);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, displayContactElements(_content_contact_json__WEBPACK_IMPORTED_MODULE_2__));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.bbb85b7605bae30b32ad.hot-update.js.map