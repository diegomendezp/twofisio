module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Member/Member.js":
/*!*************************************!*\
  !*** ./components/Member/Member.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/components/Member/Member.js";


var displayCurriculum = function displayCurriculum(curriculum) {
  return curriculum.map(function (element, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, element);
  });
};

var Member = function Member(_ref) {
  var name = _ref.name,
      number = _ref.number,
      curriculum = _ref.curriculum;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1514672013381-c6d0df1c8b18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    alt: "".concat(name, "-photo"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "N\xBAColegiado: ", number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, displayCurriculum(curriculum)));
};

/* harmony default export */ __webpack_exports__["default"] = (Member);

/***/ }),

/***/ "./content/team.json":
/*!***************************!*\
  !*** ./content/team.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = [{"name":"Rebeca Poyatos","number":5474,"curriculum":["Grado en fisioterapia (Universidad San Pablo Ceu)","Experto en osteopatía (Universidad Alcalá de Henares)","Ecografía músculo esquelética (Universidad autónoma de Madrid ONCE y MVClinic)","Fisioterapia invasiva (MVClinic)","Integración clínica osteopática (Escuela Thuban)","Experta en terapia miofascial (Universidad Europea de Madrid y 1 er curso en la Escuela de Andreu Pilat)","Formación en drenaje linfático manual (Escuela de formación en terapias manulaes Kabat)","Terapia manual y punción seca en el Síndrome miofascial. Puntos gatillo miofasciales (Escuela de Osteopatía de Madrid)","Curso de terapia cráneo-sacral I (Instituto Upledger)","Tratamiento fisioterápico en disfunciones articulación témporo-mandibular (Fisioterapia Arguelles)","Monitora de pilates (Federación Madrileña de Gimnasia)"],"photo":""},{"name":"Clara Taboada","number":6184,"curriculum":["Diplomada en fisioterapia (Universidad Rey Juan Carlos)","Experto en terapia miofascial (Universidad Europea de Madrid)","Ecografía músculo esquelética (Universidad autónoma de Madrid ONCE y MVClinic)","Fisioterapia invasiva (MVClinic)","Monitor pilates suelo, aparatos estabilizadores nivel I y nivel II (Federación Madrileña de Gimnasia)","Terapia Manual y Punción Seca en el Síndrome de Dolor Miofascial. Puntos Gatillo Miofasciales (Escuela de Osteopatía de Madrid)","XXI Jornadas de Fisioterapia Deportiva. Actualizaciones en Regeneración Muscular y Tendinosa (Escuela de fisioterapia de la ONCE)","Terapia manual osteopática (Instituto Relater)","Integración clínica osteopática (Escuela Thuban)","Máster en fisioterapia deportiva (Universidad Europea de Madrid y Escuela de fisioterapia del Real Madrid)","Kinesiotaping nivel I y nivel II (Universidad Europea de Madrid)"],"photo":""},{"name":"Alejandro Méndez","number":9775,"curriculum":["Grado en fisioterapia (Universidad Pontificia de Comillas)","Especialista en Fisioterapia Deportiva (Universidad Complutense de Madrid)","Especialista en Nutrición Deportiva y Fisiología del ejercicio (Dietas, Deportes y Tecnología S.L)","Experto en pilates y su aplicación a la fisioterapia (AEFEP)"],"photo":""},{"name":"Lara González","number":0,"curriculum":["Grado en fisioterapia (Universidad Rey Juan Carlos)","Certificado “Ejercicio terapéutico y control motor basado en el método pilates suelo por la Dirección General de Investigación y Gestión del Conocimiento de la Consejería de Salud de la Junta de Andalucía (20h).","Certificado “Kinesio Taping Fundamentals And Advanced (KT1 &amp; KT2)” por la Kinesio Taping International Association","Máster en fisioterapia deportiva (Universidad Pontificia de Salamanca y Clinica Cemtro)"],"photo":""}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/nosotros.js":
/*!***************************!*\
  !*** ./pages/nosotros.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_team_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/team.json */ "./content/team.json");
var _content_team_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/team.json */ "./content/team.json", 1);
/* harmony import */ var _components_Member_Member_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Member/Member.js */ "./components/Member/Member.js");

var _jsxFileName = "/Users/Diegomendez1997/Tailor/twofisio/pages/nosotros.js";




var displayTeam = function displayTeam() {
  return _content_team_json__WEBPACK_IMPORTED_MODULE_2__.map(function (member, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Member_Member_js__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i
    }, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }));
  });
};

var nosotros = function nosotros(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, displayTeam());
};

/* harmony default export */ __webpack_exports__["default"] = (nosotros);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/nosotros.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Diegomendez1997/Tailor/twofisio/pages/nosotros.js */"./pages/nosotros.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=nosotros.js.map