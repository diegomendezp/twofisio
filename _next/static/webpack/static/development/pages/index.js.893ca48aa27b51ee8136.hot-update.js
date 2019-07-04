webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _PagesStyles_NavBarStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PagesStyles/NavBarStyle */ "./PagesStyles/NavBarStyle.js");
/* harmony import */ var _PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PagesStyles/NavTextStyle */ "./PagesStyles/NavTextStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PagesStyles_FontStyle_FontBold__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PagesStyles/FontStyle/FontBold */ "./PagesStyles/FontStyle/FontBold.js");







var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/NavBar.js";






var Box = react_pose__WEBPACK_IMPORTED_MODULE_8__["default"].div({
  up: {
    y: function y(_ref) {
      var _y = _ref.y;
      return _y;
    },
    transition: {
      duration: 400,
      ease: 'linear'
    }
  },
  down: {
    y: function y(_ref2) {
      var y2 = _ref2.y2;
      return y2;
    },
    transition: {
      duration: 400,
      ease: 'linear'
    }
  }
});

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$Component);

  function NavBar() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_manageResize", function () {
      switch (true) {
        case window.innerWidth < 376:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };

        case window.innerWidth < 415:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };

        case window.innerWidth < 769:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };

        default:
          return {
            y: -window.innerHeight * 1.20,
            y2: 0
          };
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hamburgerEffect", function () {
      var el = _this.state.hamburger;
      var log = _this.state.navLogo;

      if (el.classList) {
        el.classList.toggle('is-active');
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf('is-active');
        if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push('is-active');
        el.className = classes.join(' ');
      }

      if (!_this.state.logoVisible) {
        setTimeout(function () {
          _this.setState({
            logoVisible: !_this.state.logoVisible
          });
        }, 400);
      } else {
        _this.setState({
          logoVisible: !_this.state.logoVisible
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_managePositionNav", function () {
      if (_this.state.pos) {
        _this.setState({
          position: !_this.state.position,
          pos: !_this.state.pos
        }, function () {
          return _this.hamburgerEffect();
        });
      } else {
        _this.setState({
          position: !_this.state.position
        }, function () {
          _this.hamburgerEffect();

          setTimeout(function () {
            _this.setState({
              pos: !_this.state.pos
            });
          }, 400);
        });
      }
    });

    _this.state = {
      hamburger: undefined,
      position: true,
      pos: true,
      menuSizes: {
        y: -1000,
        y2: 0
      },
      visible: false,
      logoVisible: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        visible: true,
        hamburger: document.getElementsByClassName("hamburger")[0],
        navLogo: document.getElementsByClassName("navLogo")[0],
        menuSizes: this._manageResize()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var backgroundColor = this.props.backgroundColor;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavBarStyle__WEBPACK_IMPORTED_MODULE_9__["NavWrapperStyle"], {
        position: this.state.pos,
        visible: this.state.visible,
        lvisible: this.state.logoVisible,
        backgroundColor: backgroundColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menuIcon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "navLogo",
        src: "".concat("", "/static/logo.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        href: "/static/css/hamburger.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "hamburger hamburger--spin",
        type: "button",
        onClick: function onClick() {
          return _this2._managePositionNav();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "hamburger-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_FontStyle_FontBold__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.state.logoVisible ? "Menu" : "Cerrar")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Box, {
        pose: this.state.position ? "up" : "down",
        className: "menu",
        y: this.state.menuSizes !== undefined && this.state.menuSizes.y,
        y2: this.state.menuSizes !== undefined && this.state.menuSizes.y2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "logoSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "logo",
        src: "".concat("", "/static/logo.png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menuSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subMenuSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "navInfoContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Tel\xE9fono:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:".concat("917116205"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "917 116 205"), " | ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:".concat("609 058 398"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "609 058 398"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "navInfoContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Email: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:centrodefisioterapia@twofisio.es",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "centrodefisioterapia@twofisio.es"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "navInfoContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Direcci\xF3n:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://goo.gl/maps/K6zbJ39jVTn",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Avenida del Padre Piquer, 39")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "navInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "28024 Madrid"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subMenuSection2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/fisioterapia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Fisioterapia")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/tratamientos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Tratamientos")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/ecografia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Ecograf\xEDas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/pilates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Pilates")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/nosotros",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_NavTextStyle__WEBPACK_IMPORTED_MODULE_10__["NavTextStyle"], {
        title: true,
        margin: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Nosotros"))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.893ca48aa27b51ee8136.hot-update.js.map