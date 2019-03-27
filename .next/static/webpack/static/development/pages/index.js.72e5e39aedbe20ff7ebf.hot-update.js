webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/SectionTitle.js":
/*!*****************************************!*\
  !*** ./components/Home/SectionTitle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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






var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Home/SectionTitle.js";
// import React, { Component } from "react";
// export const SectionTitle = props => {
//   return (
//     <div className="sectionTitle">
//       <h1 onClick={props.changeForm}>{props.title}</h1>
//       <p>{props.body}</p>
//       <a href={props.link}>+ Mas Info</a>
//     </div>
//   );
// };



var SectionTitle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SectionTitle, _Component);

  function SectionTitle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SectionTitle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SectionTitle).call(this, props));
    _this.state = {
      topData: props,
      bottomOpacity: 0,
      topOpacity: 1,
      bottomData: props
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SectionTitle, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var _this2 = this;

      var oldSrc = this.state.topSrc;
      var newSrc = newProps;

      if (newSrc !== oldSrc) {
        // Reset the component everytime we receive new prop, to
        // cancel out any animation that's still going on
        this.setState({
          bottomSrc: false,
          topSrc: false
        }, function () {
          return _this2.setState( // Opacity less than 1 takes precendence in stacking order
          {
            bottomSrc: newSrc,
            topSrc: newSrc,
            bottomOpacity: 1
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
          timingFunction = _this$props.timingFunction;
      var _this$state = this.state,
          topSrc = _this$state.topSrc,
          bottomOpacity = _this$state.bottomOpacity,
          bottomSrc = _this$state.bottomSrc,
          topOpacity = _this$state.topOpacity;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, topSrc && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sectionTitle",
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, {
          opacity: topOpacity,
          transition: "opacity ".concat(duration / 1000, "s ").concat(timingFunction)
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, topSrc.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, topSrc.body), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: topSrc.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "+ Mas Info")), bottomSrc && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sectionTitle",
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, {
          opacity: bottomOpacity,
          transition: "opacity ".concat(duration / 1000, "s ").concat(timingFunction)
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, bottomSrc.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, bottomSrc.body), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: bottomSrc.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "+ Mas Info")));
    }
  }]);

  return SectionTitle;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // const defaultStyle = { width: "100vw", height: "100vh" };


SectionTitle.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  timingFunction: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
SectionTitle.defaultProps = {
  duration: 200,
  timingFunction: "ease",
  delay: 0
};
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ })

})
//# sourceMappingURL=index.js.72e5e39aedbe20ff7ebf.hot-update.js.map