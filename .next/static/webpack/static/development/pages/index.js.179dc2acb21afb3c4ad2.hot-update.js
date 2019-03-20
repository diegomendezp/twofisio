webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CrossFadeImage.js":
/*!**************************************!*\
  !*** ./components/CrossFadeImage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrossfadeImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/alberto/Escritorio/TaylorHUB/Proyectos/Clientes/twofisio/components/CrossFadeImage.js";



var CrossfadeImage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CrossfadeImage, _Component);

  function CrossfadeImage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CrossfadeImage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CrossfadeImage).call(this, props));
    _this.state = {
      topSrc: props.src,
      bottomOpacity: 0,
      bottomSrc: props.src
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CrossfadeImage, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      var oldSrc = this.state.topSrc;
      var newSrc = newProps.src;

      if (newSrc !== oldSrc) {
        // Reset the component everytime we receive new prop, to
        // cancel out any animation that's still going on
        this.setState({
          bottomSrc: false,
          topSrc: false
        }, function () {
          return _this2.setState( // Opacity less than 1 takes precendence in stacking order
          {
            bottomSrc: oldSrc,
            topSrc: newSrc,
            bottomOpacity: 0.99
          }, function () {
            // One of the few times setTimeout does wonders, this is for
            // getting fade out transition without css keyframe
            if (!_this2.timeout) clearTimeout(_this2.timeout);
            _this2.timeout = setTimeout(function () {
              return _this2.setState({
                bottomOpacity: 0
              });
            }, 20);
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          duration = _this$props.duration,
          timingFunction = _this$props.timingFunction,
          delay = _this$props.delay,
          style = _this$props.style,
          alt = _this$props.alt;
      var _this$state = this.state,
          topSrc = _this$state.topSrc,
          bottomOpacity = _this$state.bottomOpacity,
          bottomSrc = _this$state.bottomSrc;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultStyle, {
          position: "relative"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, topSrc && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        id: "imgSlider",
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultStyle, style, {
          position: "absolute"
        }),
        src: topSrc,
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), bottomSrc && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultStyle, style, {
          opacity: bottomOpacity,
          transition: "opacity ".concat(duration / 1000, "s ").concat(timingFunction, " ").concat(delay / 1000, "s")
        }),
        src: bottomSrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }));
    }
  }]);

  return CrossfadeImage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


var defaultStyle = {
  width: "140vw",
  height: "100vh"
};
CrossfadeImage.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  timingFunction: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
CrossfadeImage.defaultProps = {
  duration: 500,
  timingFunction: "ease",
  delay: 0
};

/***/ })

})
//# sourceMappingURL=index.js.179dc2acb21afb3c4ad2.hot-update.js.map