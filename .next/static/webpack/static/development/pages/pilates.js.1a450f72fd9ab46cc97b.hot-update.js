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


var star = "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0";
var circle = "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z";

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
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("clipPath", {
        id: "svgPath",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        id: "target",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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
//# sourceMappingURL=pilates.js.1a450f72fd9ab46cc97b.hot-update.js.map