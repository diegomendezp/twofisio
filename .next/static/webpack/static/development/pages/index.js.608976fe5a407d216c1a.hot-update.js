webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/animations.js":
/*!*****************************!*\
  !*** ./utils/animations.js ***!
  \*****************************/
/*! exports provided: _bubleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_bubleAnimation", function() { return _bubleAnimation; });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");

var _bubleAnimation = function _bubleAnimation(posX, posY, fromScaleY, toScaleY, fromScaleX, toScaleX) {
  Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"])({
    from: {
      scaleY: fromScaleY,
      scaleX: fromScaleX
    },
    to: {
      scaleY: toScaleY,
      scaleX: toScaleX
    },
    duration: 1800,
    ease: popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].easeInOut,
    flip: Infinity
  }).start(function (v) {
    if (document.getElementById('target') !== null) {
      document.getElementById('target').style.webkitTransform = '';
      document.getElementById('target').style.webkitTransform = "translate3d(".concat(posX, "px, ").concat(posY, "px,0) scaleY(").concat(v.scaleY, ") scaleX(").concat(v.scaleX, ")");
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.608976fe5a407d216c1a.hot-update.js.map