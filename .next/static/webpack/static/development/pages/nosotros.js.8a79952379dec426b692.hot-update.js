webpackHotUpdate("static/development/pages/nosotros.js",{

/***/ "./components/Member/Member.js":
/*!*************************************!*\
  !*** ./components/Member/Member.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/umd/index.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Member/Member.js";



var open = false;

var rotateImage = function rotateImage(id) {
  !open ? document.getElementById(id).style.webkitTransform = "rotate(180deg)" : document.getElementById(id).style.webkitTransform = "rotate(-180deg)";
  open = !open;
};

var displayCurriculum = function displayCurriculum(curriculum) {
  return curriculum.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemBody"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "- ", element);
  });
};

var Member = function Member(_ref) {
  var name = _ref.name,
      number = _ref.number,
      curriculum = _ref.curriculum;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "member-img",
    src: "https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    alt: "".concat(name, "-photo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    onClick: function onClick() {
      rotateImage("up-down-icon-".concat(name));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "member-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "N\xBAColegiado: ", number)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../static/iconUpdown.svg",
    alt: "up-down-icon",
    id: "up-down-icon-".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), displayCurriculum(curriculum))));
};

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ })

})
//# sourceMappingURL=nosotros.js.8a79952379dec426b692.hot-update.js.map