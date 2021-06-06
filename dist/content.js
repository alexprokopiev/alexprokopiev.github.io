/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/content/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/menu/_menu.js":
/*!**********************************!*\
  !*** ./components/menu/_menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar menu = function menu() {\n  var openBtn = document.querySelector(\".header__menu-icon\"),\n      closeBtn = document.querySelector(\".menu__close-icon\"),\n      menu = document.querySelector(\".menu\");\n  openBtn.addEventListener(\"click\", function () {\n    menu.style.left = 0;\n  });\n  closeBtn.addEventListener(\"click\", function () {\n    menu.style.left = -30 + \"rem\";\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./components/menu/_menu.js?");

/***/ }),

/***/ "./components/modal/_modal.js":
/*!************************************!*\
  !*** ./components/modal/_modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar modal = function modal() {\n  var inputFile = document.querySelector(\"input[type='file']\"),\n      textBlock = document.querySelector(\".modal__file-left\"),\n      inputCheckbox = document.querySelector(\"input[type='checkbox']\"),\n      checkboxLabel = document.querySelector(\".modal__label_checkbox\"),\n      okButton = document.querySelector(\"button[type='submit']\");\n  inputFile.addEventListener(\"change\", function () {\n    textBlock.textContent = \"File upload\";\n    textBlock.style.color = \"#000000\";\n  });\n  inputCheckbox.addEventListener(\"change\", function () {\n    okButton.classList.toggle(\"button_disabled\");\n    checkboxLabel.classList.toggle(\"modal__label_checkbox-checked\");\n  });\n\n  function bindModal(modalSelector, closeSelector) {\n    var triggerSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var trigger = document.querySelectorAll(triggerSelector),\n        modal = document.querySelector(modalSelector),\n        close = document.querySelector(closeSelector),\n        scroll = calcScroll();\n\n    if (triggerSelector != false) {\n      trigger.forEach(function (item) {\n        item.addEventListener(\"click\", function (e) {\n          if (e.target) {\n            e.preventDefault();\n          }\n\n          modal.style.display = \"block\";\n          setTimeout(function () {\n            modal.style.opacity = 1;\n          }, 100);\n          document.body.style.overflow = \"hidden\";\n          document.body.style.marginRight = \"\".concat(scroll, \"px\");\n        });\n      });\n    }\n\n    close.addEventListener(\"click\", function () {\n      modal.style.opacity = 0;\n      setTimeout(function () {\n        modal.style.display = \"none\";\n      }, 500);\n      document.body.style.overflow = \"\";\n      document.body.style.marginRight = \"0px\";\n    });\n  }\n\n  function calcScroll() {\n    var div = document.createElement(\"div\");\n    div.style.width = \"50px\";\n    div.style.height = \"50px\";\n    div.style.overflowY = \"scroll\";\n    div.style.visibility = \"hidden\";\n    document.body.appendChild(div);\n    var scrollWidth = div.offsetWidth - div.clientWidth;\n    div.remove();\n    return scrollWidth;\n  }\n\n  bindModal(\".overlay\", \".button_close\", \".base__button\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./components/modal/_modal.js?");

/***/ }),

/***/ "./pages/content/content.js":
/*!**********************************!*\
  !*** ./pages/content/content.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.sass */ \"./pages/content/content.sass\");\n/* harmony import */ var _content_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/menu/_menu.js */ \"./components/menu/_menu.js\");\n/* harmony import */ var _components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal/_modal.js */ \"./components/modal/_modal.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  \"use strict\";\n\n  Object(_components_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_components_modal_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./pages/content/content.js?");

/***/ }),

/***/ "./pages/content/content.sass":
/*!************************************!*\
  !*** ./pages/content/content.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/content/content.sass?");

/***/ })

/******/ });