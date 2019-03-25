webpackHotUpdate("static/development/pages/pilates.js",{

/***/ "./components/HeaderAnimated/HeaderAnimated.js":
/*!*****************************************************!*\
  !*** ./components/HeaderAnimated/HeaderAnimated.js ***!
  \*****************************************************/
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
/* harmony import */ var _PagesStyles_HeaderAnimatedStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PagesStyles/HeaderAnimatedStyles */ "./PagesStyles/HeaderAnimatedStyles.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flubber */ "./node_modules/flubber/build/flubber.min.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flubber__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/animations */ "./utils/animations.js");







var _jsxFileName = "/home/alberto/Escritorio/TaylorHUB/Proyectos/Clientes/twofisio/components/HeaderAnimated/HeaderAnimated.js";



 // ES6


var star = "M103.04 162.52L39.36 196l12.16-70.9L0 74.86 71.2 64.5 103.04 0l31.85 64.52 71.2 10.35-51.57 50.22L166.7 196z";
var circle = "M86,171.5 C38.7796539,171.5 0.5,133.220346 0.5,86 C0.5,38.7796539 38.7796539,0.5 86,0.5 C133.220346,0.5 171.5,38.7796539 171.5,86 C171.5,133.220346 133.220346,171.5 86,171.5 Z";

var HeaderAnimated =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeaderAnimated, _React$Component);

  function HeaderAnimated(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderAnimated);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeaderAnimated).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_manageResize", function () {// _bubleAnimation(-100, 0, 5, 5.2);
      // switch (true) {
      //   case window.innerWidth <= 375:
      //     _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
      //     break;
      //   case window.innerWidth <= 768:
      //     // _bubleAnimation(350, -100, 2.9, 3, 1.8, 2);
      //     break;
      //   default:
      //   _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
      // }
    });

    _this.props = props;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderAnimated, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this._manageResize();
      Object(popmotion__WEBPACK_IMPORTED_MODULE_9__["tween"])({
        duration: 700,
        ease: popmotion__WEBPACK_IMPORTED_MODULE_9__["easing"].easeInOut,
        flip: Infinity
      }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_10__["interpolate"])(circle, star, {
        maxSegmentLength: 2
      })).start(Object(popmotion__WEBPACK_IMPORTED_MODULE_9__["styler"])(document.querySelector("#target")).set("d")); // tween({
      //   from: { transalteX: -100, scale: 5 },
      //   to: { transalteX: 0, scale: 5.2 },
      //   duration: 1800,
      //   ease: easing.easeInOut,
      //   flip: Infinity
      // }).start(v => {
      //   if (document.getElementById("target") !== null) {
      //     document.getElementById("target").style.webkitTransform = `translate(${v.transalteX}px, -300px) scale(${v.scale})`;
      //     // document.getElementById("target").style.webkitTransform = `scaleY(${v.scaleY})`;
      //     // document.getElementById("target").style.MozTransform = `translate(${500}px, ${-250}px) scale(${v.scaleX})`;
      //   }
      // });
      // this._manageResize();
      // window.addEventListener("resize", this._manageResize);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PagesStyles_HeaderAnimatedStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
        backImage: this.props.img,
        backPositionY: this.props.positionY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("clipPath", {
        id: "svgPath",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        id: "target",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))));
    }
  }]);

  return HeaderAnimated;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (HeaderAnimated);

/***/ })

})
//# sourceMappingURL=pilates.js.38d8cda4dec3ceb8498e.hot-update.js.map