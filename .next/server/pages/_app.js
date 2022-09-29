/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/GlobalContext.tsx":
/*!************************************!*\
  !*** ./contexts/GlobalContext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Languages\": () => (/* binding */ Languages),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Languages;\n(function(Languages) {\n    Languages[\"English\"] = \"english\";\n    Languages[\"German\"] = \"german\";\n})(Languages || (Languages = {}));\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    languagePreference: Languages.English\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9HbG9iYWxDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0lBRS9CLFNBR047VUFIV0MsU0FBUztJQUFUQSxTQUFTLENBQ25CLFNBQVMsSUFBRyxTQUFTO0lBRFhBLFNBQVMsQ0FFbkIsUUFBUSxJQUFHLFFBQVE7R0FGVEEsU0FBUyxLQUFUQSxTQUFTO0FBS3JCLE1BQU1DLGFBQWEsaUJBQUdGLG9EQUFhLENBQU07SUFDdkNHLGtCQUFrQixFQUFFRixTQUFTLENBQUNHLE9BQU87Q0FDdEMsQ0FBQztBQUVGLGlFQUFlRixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldm9wYWNrLW5leHQtdWkvLi9jb250ZXh0cy9HbG9iYWxDb250ZXh0LnRzeD8wOGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VzIHtcbiAgXCJFbmdsaXNoXCIgPSBcImVuZ2xpc2hcIixcbiAgXCJHZXJtYW5cIiA9IFwiZ2VybWFuXCIsXG59XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4oe1xuICBsYW5ndWFnZVByZWZlcmVuY2U6IExhbmd1YWdlcy5FbmdsaXNoLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkxhbmd1YWdlcyIsIkdsb2JhbENvbnRleHQiLCJsYW5ndWFnZVByZWZlcmVuY2UiLCJFbmdsaXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/GlobalContext.tsx\n");

/***/ }),

/***/ "./hooks/useStickyStorage/useStickyStorage.tsx":
/*!*****************************************************!*\
  !*** ./hooks/useStickyStorage/useStickyStorage.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useStickyStorage),\n/* harmony export */   \"deleteLocalItem\": () => (/* binding */ deleteLocalItem),\n/* harmony export */   \"getInitialState\": () => (/* binding */ getInitialState),\n/* harmony export */   \"storeState\": () => (/* binding */ storeState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useStickyStorage(key, defaultValue) {\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);\n    // useEffect(() => {\n    //   const stickyValue = window.localStorage.getItem(key);\n    //   return stickyValue ? JSON.parse(stickyValue) : defaultValue;\n    // });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        window.localStorage.setItem(key, JSON.stringify(value));\n    }, [\n        key,\n        value\n    ]);\n    return [\n        value,\n        setValue\n    ];\n}\nfunction getInitialState(initialState) {\n    const storedState = localStorage.getItem(\"Stored tasks\");\n    return storedState ? JSON.parse(storedState) : initialState;\n}\nfunction storeState(state) {\n    localStorage.setItem(\"Stored tasks\", JSON.stringify(state));\n}\nfunction deleteLocalItem(key) {\n    localStorage.removeItem(key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTdGlja3lTdG9yYWdlL3VzZVN0aWNreVN0b3JhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTRSxnQkFBZ0IsQ0FBQ0MsR0FBVyxFQUFFQyxZQUFpQixFQUFFO0lBQ3ZFLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUNHLFlBQVksQ0FBQztJQUVoRCxvQkFBb0I7SUFDcEIsMERBQTBEO0lBQzFELGlFQUFpRTtJQUNqRSxNQUFNO0lBRU5KLGdEQUFTLENBQUMsSUFBTTtRQUNkTyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTixHQUFHLEVBQUVPLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUMsRUFBRTtRQUFDRixHQUFHO1FBQUVFLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDakIsT0FBTztRQUFDQSxLQUFLO1FBQUVDLFFBQVE7S0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFTSxTQUFTTSxlQUFlLENBQUNDLFlBQWlCLEVBQUU7SUFDakQsTUFBTUMsV0FBVyxHQUFHTixZQUFZLENBQUNPLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDeEQsT0FBT0QsV0FBVyxHQUFHSixJQUFJLENBQUNNLEtBQUssQ0FBQ0YsV0FBVyxDQUFDLEdBQUdELFlBQVksQ0FBQztBQUM5RCxDQUFDO0FBRU0sU0FBU0ksVUFBVSxDQUFDQyxLQUFVLEVBQUU7SUFDckNWLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVNLFNBQVNDLGVBQWUsQ0FBQ2hCLEdBQVEsRUFBRTtJQUN4Q0ssWUFBWSxDQUFDWSxVQUFVLENBQUNqQixHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZvcGFjay1uZXh0LXVpLy4vaG9va3MvdXNlU3RpY2t5U3RvcmFnZS91c2VTdGlja3lTdG9yYWdlLnRzeD8zOWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RpY2t5U3RvcmFnZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3Qgc3RpY2t5VmFsdWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgLy8gICByZXR1cm4gc3RpY2t5VmFsdWUgPyBKU09OLnBhcnNlKHN0aWNreVZhbHVlKSA6IGRlZmF1bHRWYWx1ZTtcbiAgLy8gfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9LCBba2V5LCB2YWx1ZV0pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgY29uc3Qgc3RvcmVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlN0b3JlZCB0YXNrc1wiKTtcbiAgcmV0dXJuIHN0b3JlZFN0YXRlID8gSlNPTi5wYXJzZShzdG9yZWRTdGF0ZSkgOiBpbml0aWFsU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVN0YXRlKHN0YXRlOiBhbnkpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTdG9yZWQgdGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxvY2FsSXRlbShrZXk6IGFueSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU3RpY2t5U3RvcmFnZSIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEluaXRpYWxTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInN0b3JlZFN0YXRlIiwiZ2V0SXRlbSIsInBhcnNlIiwic3RvcmVTdGF0ZSIsInN0YXRlIiwiZGVsZXRlTG9jYWxJdGVtIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useStickyStorage/useStickyStorage.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stylesystem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/stylesystem.scss */ \"./styles/stylesystem.scss\");\n/* harmony import */ var _styles_stylesystem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_stylesystem_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/GlobalContext */ \"./contexts/GlobalContext.tsx\");\n/* harmony import */ var _hooks_useStickyStorage_useStickyStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useStickyStorage/useStickyStorage */ \"./hooks/useStickyStorage/useStickyStorage.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [language, setLanguage] = (0,_hooks_useStickyStorage_useStickyStorage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"languagePreference\", _contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_2__.Languages.English);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            language,\n            setLanguage\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/eddietierney/Desktop/Developer/evopack-spa-ui/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eddietierney/Desktop/Developer/evopack-spa-ui/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBb0M7QUFJaUM7QUFFSztBQUUxRSxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdMLG9GQUFnQixDQUM5QyxvQkFBb0IsRUFDcEJELHNFQUFpQixDQUNsQjtJQUNELHFCQUNFLDhEQUFDRCx3RUFBc0I7UUFBQ1UsS0FBSyxFQUFFO1lBQUVKLFFBQVE7WUFBRUMsV0FBVztTQUFFO2tCQUN0RCw0RUFBQ0gsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNMLENBQ3pCO0FBQ0osQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldm9wYWNrLW5leHQtdWkvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXN5c3RlbS5zY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IEdsb2JhbENvbnRleHQsIHsgTGFuZ3VhZ2VzIH0gZnJvbSBcIi4uL2NvbnRleHRzL0dsb2JhbENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVN0aWNreVN0b3JhZ2UgZnJvbSBcIi4uL2hvb2tzL3VzZVN0aWNreVN0b3JhZ2UvdXNlU3RpY2t5U3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RpY2t5U3RvcmFnZShcbiAgICBcImxhbmd1YWdlUHJlZmVyZW5jZVwiLFxuICAgIExhbmd1YWdlcy5FbmdsaXNoXG4gICk7XG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIH19PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiR2xvYmFsQ29udGV4dCIsIkxhbmd1YWdlcyIsInVzZVN0aWNreVN0b3JhZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJFbmdsaXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/stylesystem.scss":
/*!*********************************!*\
  !*** ./styles/stylesystem.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();