(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tile-panels"] = factory();
	else
		root["vue-tile-panels"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile_frame__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical_split__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horizontal_split__ = __webpack_require__(7);




const COMPONENTS = [__WEBPACK_IMPORTED_MODULE_0__tile_frame__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__vertical_split__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__horizontal_split__["a" /* default */]];
/* harmony export (immutable) */ __webpack_exports__["COMPONENTS"] = COMPONENTS;


// vue plugin
const TilePanels = {
  install(Vue) {
    for (let component of COMPONENTS) {
      Vue.component(component.name, component);
    }
  }
};

window.VueTilePanels = TilePanels;

/* harmony default export */ __webpack_exports__["default"] = (TilePanels);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_styl__);



const TileFrame = {
  template: __WEBPACK_IMPORTED_MODULE_0__template_pug___default.a,
  name: 'tile-frame'
};

/* harmony default export */ __webpack_exports__["a"] = (TileFrame);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile-frame\"><slot></slot></div>";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_styl__);



const VerticalSplit = {
  template: __WEBPACK_IMPORTED_MODULE_0__template_pug___default.a,
  name: 'vertical-split',
  data() {
    return {
      startClientX: null,
      splitWidth: 50,
      splitUnit: '%'
    };
  },
  computed: {
    styleWidth() {
      return `${this.splitWidth}${this.splitUnit}`;
    }
  },
  methods: {
    startResize(event) {
      this.startClientX = event.clientX;
      document.documentElement.addEventListener('mouseup', this.stopResize);
      document.documentElement.addEventListener('mousemove', this.resize);
    },
    resize(event) {
      if (event.clientX <= this.$refs.leftPanel.parentElement.getBoundingClientRect().left || event.clientX >= this.$refs.leftPanel.parentElement.getBoundingClientRect().right) {
        return;
      }
      const diff = event.clientX - this.startClientX;
      this.startClientX = event.clientX;
      this.splitWidth = this.$refs.leftPanel.offsetWidth + diff;
      this.splitUnit = 'px';
    },
    stopResize() {
      document.documentElement.removeEventListener('mouseup', this.stopResize);
      document.documentElement.removeEventListener('mousemove', this.resize);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (VerticalSplit);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile-vertical\"><div class=\"tv-panel tv-left\" :style=\"{ width: styleWidth }\" ref=\"leftPanel\"><slot name=\"left\"></slot><div class=\"tv-resizer\" @mousedown=\"startResize\"></div></div><div class=\"tv-panel tv-right\"><slot name=\"right\"></slot></div></div>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_styl__);



const HorizontalSplit = {
  template: __WEBPACK_IMPORTED_MODULE_0__template_pug___default.a,
  name: 'horizontal-split',
  data() {
    return {
      startClientY: null,
      splitHeight: 50,
      splitUnit: '%'
    };
  },
  computed: {
    styleHeight() {
      return `${this.splitHeight}${this.splitUnit}`;
    }
  },
  methods: {
    startResize(event) {
      this.startClientY = event.clientY;
      document.documentElement.addEventListener('mouseup', this.stopResize);
      document.documentElement.addEventListener('mousemove', this.resize);
    },
    resize(event) {
      if (event.clientY <= this.$refs.topPanel.parentElement.getBoundingClientRect().top || event.clientY >= this.$refs.topPanel.parentElement.getBoundingClientRect().bottom) {
        return;
      }
      const diff = event.clientY - this.startClientY;
      this.startClientY = event.clientY;
      this.splitHeight = this.$refs.topPanel.offsetHeight + diff;
      this.splitUnit = 'px';
    },
    stopResize() {
      document.documentElement.removeEventListener('mouseup', this.stopResize);
      document.documentElement.removeEventListener('mousemove', this.resize);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (HorizontalSplit);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile-horizontal\"><div class=\"th-panel th-top\" :style=\"{ height: styleHeight }\" ref=\"topPanel\"><slot name=\"top\"></slot><div class=\"th-resizer\" @mousedown=\"startResize\"></div></div><div class=\"th-panel th-bottom\"><slot name=\"bottom\"></slot></div></div>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue2-tile-panels.js.map