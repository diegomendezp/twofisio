webpackHotUpdate("static/development/pages/ecografia.js",{

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
  return contactList.map(function (element, i) {
    return element.name === "Dirección" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      href: "https://goo.gl/maps/K6zbJ39jVTn",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "contact-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, element.name, ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "contact-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, element.value))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "contact-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, element.name, ":"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      lassName: "contact-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, element.value));
  });
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FooterStyles__WEBPACK_IMPORTED_MODULE_1__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Contacto"), displayContactElements(_content_contact_json__WEBPACK_IMPORTED_MODULE_2__), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\xA9 2019 by tailor "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "footerLogo",
    src: "../../static/iconWhite.svg",
    alt: "logo-tailor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=ecografia.js.7f8b7f66ac04355f5466.hot-update.js.map