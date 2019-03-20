webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Home.js":
/*!*********************************!*\
  !*** ./components/Home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PagesStyles_HomeStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../PagesStyles/HomeStyle */ "./PagesStyles/HomeStyle.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flubber */ "./node_modules/flubber/build/flubber.min.js");
/* harmony import */ var flubber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flubber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SectionTitle */ "./components/Home/SectionTitle.js");
/* harmony import */ var _content_home_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../content/home.json */ "./content/home.json");
var _content_home_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/home.json */ "./content/home.json", 1);
/* harmony import */ var _CrossFadeImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CrossFadeImage */ "./components/CrossFadeImage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Bubles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Bubles */ "./components/Home/Bubles.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/home/alberto/Escritorio/TaylorHUB/Proyectos/Clientes/twofisio/components/Home/Home.js";



 // ES6







var images = ["../../static/imgPilates.jpg", "../../static/imgTratamientos.jpg", "../../static/imgEcografía.jpg", "../../static/imgFisioterapia.jpg"];
var interval;

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_makeAnimation", function (from, to) {
      Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["tween"])({
        duration: 1000,
        ease: popmotion__WEBPACK_IMPORTED_MODULE_11__["easing"].easeInOut
      }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_12__["interpolate"])(_this.state.form[from], _this.state.form[to], {
        maxSegmentLength: 2
      })).start(Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["styler"])(document.querySelector("#target")).set("d"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_getEventTarget", function (e) {
      e = e || window.event;
      return e.target || e.srcElement;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_listenSliderButtons", function () {
      var listItems = document.querySelectorAll("ul li");
      listItems.forEach(function (item, i) {
        item.onclick = function (e) {
          _this._changeSVGForm("down", "slider", i);

          _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state, {
            formPosition: i + 1
          }));
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_mouseWheel", function () {
      var delta = 0; // detect available wheel event

      var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" // Modern browsers support "wheel"
      : document.onmousewheel !== undefined ? "mousewheel" // Webkit and IE support at least "mousewheel"
      : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

      jquery__WEBPACK_IMPORTED_MODULE_16___default()(window).on(wheelEvent, function (e) {
        if (e.originalEvent.wheelDelta > 0) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          delta++;

          if (delta >= 15) {
            delta = 0;

            if (_this.state.formPosition > 1) {
              if (document.getElementsByTagName("body")[0].style.overflowY = "hidden") {
                _this._changeSVGForm("up");
              }
            }
          }
        } else {
          delta--;

          if (delta <= -15) {
            delta = 0;

            if (_this.state.formPosition < 4) {
              _this._changeSVGForm("down");
            } else {
              window.scrollTo({
                top: 1000,
                left: 0,
                behavior: "smooth"
              });
            }
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_changeSVGForm", function (direction) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
      var fromTo = arguments.length > 2 ? arguments[2] : undefined;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state, {
        prevPosition: _this.state.formPosition,
        formPosition: type === "default" ? direction === "down" ? _this.state.formPosition + 1 : _this.state.formPosition - 1 : fromTo + 1
      }), function () {
        _this._changeBubble(_this.state.formPosition - 1);

        _this._makeAnimation(_this.state.prevPosition, _this.state.formPosition);
      });
    });

    _this.state = {
      shape: undefined,
      vw: undefined,
      vh: undefined,
      animation: undefined,
      formPosition: 1,
      count: 0,
      form: ["M 150.9 -224.2 C 196.3 -205.7 234.1 -165 246.2 -118.4 C 258.2 -71.8 244.4 -19.3 234.1 31.7 C 223.8 82.8 216.9 132.4 189.6 164.8 C 162.3 197.2 114.5 212.3 66.4 226.7 C 18.2 241.2 -30.3 254.9 -72.7 244.1 C -115.1 233.2 -151.2 197.8 -173.1 158.1 C -194.9 118.3 -202.4 74.2 -209.2 29.8 C -216 -14.6 -222.2 -59.5 -211 -101.5 C -199.8 -143.5 -171.3 -182.8 -133.2 -204.6 C -95.2 -226.4 -47.6 -230.7 2.6 -234.8 C 52.8 -238.8 105.6 -242.7 150.9 -224.2 Z", "M 115.7 -186.7 C 150 -158 177.8 -126 192.7 -89.2 C 207.7 -52.4 209.7 -11 207.2 32.2 C 204.7 75.3 197.6 120.2 174.7 157.3 C 151.8 194.5 113.1 223.9 67.7 242.9 C 22.3 261.9 -29.9 270.6 -74 255.9 C -118.1 241.1 -154.3 203.1 -189.1 163.5 C -224 124 -257.5 82.9 -258.3 40.5 C -259.2 -1.9 -227.4 -45.6 -203.5 -90.8 C -179.6 -136.1 -163.6 -182.9 -131 -212.3 C -98.4 -241.8 -49.2 -253.9 -4.2 -247.3 C 40.7 -240.7 81.5 -215.4 115.7 -186.7 Z", "M 93.9 -104.7 C 135.9 -76.6 194 -60.5 203.7 -32 C 213.4 -3.5 174.7 37.5 141.3 68.7 C 108 99.9 80 121.4 52 122.9 C 24.1 124.4 -3.9 105.9 -52.2 105 C -100.6 104.1 -169.4 120.8 -197.2 100.4 C -225.1 80 -212 22.4 -195.9 -28.6 C -179.8 -79.6 -160.6 -124 -127.4 -153.7 C -94.3 -183.4 -47.1 -198.2 -10.6 -185.5 C 25.9 -172.9 51.9 -132.8 93.9 -104.7 Z", "M 183.6 -174.4 C 230.9 -136.2 257.5 -68.1 245.2 -12.3 C 232.9 43.6 181.9 87.2 134.5 127.5 C 87.2 167.9 43.6 204.9 -6.2 211.2 C -56.1 217.4 -112.2 192.9 -149.9 152.5 C -187.5 112.2 -206.8 56.1 -207.9 -1.2 C -209.1 -58.5 -192.2 -116.9 -154.6 -155.1 C -116.9 -193.2 -58.5 -211.1 4.8 -216 C 68.1 -220.8 136.2 -212.6 183.6 -174.4 Z", "M 154 -190.7 C 194.1 -150 217.2 -96.2 216.5 -46.1 C 215.9 3.9 191.5 50.2 159.7 80 C 128 109.8 88.8 123 50.1 136.5 C 11.5 150 -26.6 163.8 -66.3 159.3 C -106 154.7 -147.4 131.9 -169.6 96.4 C -191.8 61 -194.9 13.1 -183.1 -28.6 C -171.4 -70.3 -144.8 -105.6 -111.8 -147.6 C -78.8 -189.6 -39.4 -238.3 8.8 -248.8 C 57 -259.3 114 -231.5 154 -190.7 Z"]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "_changeBubble",
    value: function _changeBubble(pos) {
      console.log(pos);
      document.querySelectorAll(".bubble").forEach(function (div, i) {
        if (i === pos) {
          document.querySelectorAll(".bubble")[pos].className = "bubble active";
        } else {
          document.querySelectorAll(".bubble")[i].className = "bubble";
        }
      });
    }
  }, {
    key: "_positioningSVG",
    value: function _positioningSVG() {
      document.getElementById("target").style.transform = "translate(".concat(this.state.vw / 2, "px, ").concat(this.state.vh / 2, "px) scale(2.4)");
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._positioningSVG();

      this.state.animation.start(Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["styler"])(document.querySelector("#target")).set("d"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._listenSliderButtons();

      this._mouseWheel();

      if (window.innerWidth < 768) {
        Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["tween"])({
          from: {
            scale: 4
          },
          to: {
            scale: 4.05
          },
          duration: 1800,
          ease: popmotion__WEBPACK_IMPORTED_MODULE_11__["easing"].easeInOut,
          flip: Infinity
        }).start(function (v) {
          document.getElementById("target").style.transform = "translate(".concat(_this2.state.vw + 850, "px, ").concat(_this2.state.vh / 2, "px) scale(").concat(v.scale, ")");
        });
      } else {
        Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["tween"])({
          from: {
            scale: 2.4
          },
          to: {
            scale: 2.6
          },
          duration: 1800,
          ease: popmotion__WEBPACK_IMPORTED_MODULE_11__["easing"].easeInOut,
          flip: Infinity
        }).start(function (v) {
          document.getElementById("target").style.transform = "translate(".concat(_this2.state.vw / 1.7, "px, ").concat(_this2.state.vh / 2, "px) scale(").concat(v.scale, ")");
        });
      } // interval = setInterval(() => {
      //   this._changeSVGForm("down");
      // }, 9000);


      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state, {
        shape: Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["styler"])(document.querySelector("#target")),
        vw: window.innerWidth,
        vh: window.innerHeight,
        animation: Object(popmotion__WEBPACK_IMPORTED_MODULE_11__["tween"])({
          duration: 1000,
          ease: popmotion__WEBPACK_IMPORTED_MODULE_11__["easing"].easeInOut
        }).pipe(Object(flubber__WEBPACK_IMPORTED_MODULE_12__["interpolate"])(this.state.form[this.state.formPosition - 1], this.state.form[this.state.formPosition], {
          maxSegmentLength: 2
        }))
      }), this._startAnimation);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_PagesStyles_HomeStyle__WEBPACK_IMPORTED_MODULE_10__["HomeWrapperStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Bubles__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_CrossFadeImage__WEBPACK_IMPORTED_MODULE_15__["default"], {
        src: images[this.state.formPosition - 1],
        duration: 3000,
        timingFunction: "ease-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("svg", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("clipPath", {
        id: "svgPath",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("path", {
        id: "target",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SectionTitle__WEBPACK_IMPORTED_MODULE_13__["SectionTitle"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _content_home_json__WEBPACK_IMPORTED_MODULE_14__[this.state.formPosition - 1], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.f530e4829333bc44dbde.hot-update.js.map