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

/***/ "./global-context.tsx":
/*!****************************!*\
  !*** ./global-context.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst GlobalProvider = ({ initialLocales , children  })=>{\n    const localeValue = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const { 0: locales , 1: setLocales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLocales ?? [\n        {\n            \"name\": \"English\",\n            \"short\": \"en\"\n        }\n    ]);\n    const { 0: locale , 1: setLocale  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"name\": \"English\",\n        \"short\": \"en\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!locales) {\n            return;\n        }\n        const currentLangValue = locales.find((el)=>el.short === localeValue);\n        if (currentLangValue) {\n            setLocale(currentLangValue);\n        }\n    }, [\n        locales,\n        localeValue\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            locales,\n            locale,\n            setLocales,\n            setLocale\n        };\n    }, [\n        locales,\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\Projects\\\\React\\\\kzaverde-app\\\\global-context.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error(\"useGlobalContext must be used within a GlobalProvider\");\n    }\n    return {\n        ...context\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nbG9iYWwtY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5RztBQUNuRTtBQWN0QyxNQUFNTyxhQUFhLGlCQUFHTixvREFBYSxDQUE0QixJQUFJLENBQUM7QUFNN0QsTUFBTU8sY0FBYyxHQUFHLENBQUMsRUFBRUMsY0FBYyxHQUFFQyxRQUFRLEdBQTBDLEdBQUs7SUFDdEcsTUFBTUMsV0FBVyxHQUFHTCxvREFBUyxFQUFFO0lBQy9CLE1BQU0sS0FBQ00sT0FBTyxNQUFFQyxVQUFVLE1BQUlULCtDQUFRLENBQVdLLGNBQWMsSUFBSTtRQUFDO1lBQUMsTUFBTSxFQUFDLFNBQVM7WUFBQyxPQUFPLEVBQUMsSUFBSTtTQUFDO0tBQUMsQ0FBQztJQUNyRyxNQUFNLEtBQUNLLE1BQU0sTUFBRUMsU0FBUyxNQUFJWCwrQ0FBUSxDQUFTO1FBQUMsTUFBTSxFQUFDLFNBQVM7UUFBQyxPQUFPLEVBQUMsSUFBSTtLQUFDLENBQUM7SUFFN0VDLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sT0FBTyxFQUFFO1lBQ1osT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNSSxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsRUFBRSxHQUFLQSxFQUFFLENBQUNDLEtBQUssS0FBS1IsV0FBVyxDQUFDO1FBQ3ZFLElBQUlLLGdCQUFnQixFQUFFO1lBQ3BCRCxTQUFTLENBQUNDLGdCQUFnQixDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ0osT0FBTztRQUFFRCxXQUFXO0tBQUMsQ0FBQztJQUUxQixNQUFNUyxLQUFLLEdBQUdsQiw4Q0FBTyxDQUFDLElBQU07UUFDMUIsT0FBTztZQUNMVSxPQUFPO1lBQ1BFLE1BQU07WUFDTkQsVUFBVTtZQUNWRSxTQUFTO1NBQ1Y7SUFDSCxDQUFDLEVBQUU7UUFBQ0gsT0FBTztRQUFFRSxNQUFNO0tBQUMsQ0FBQztJQUVyQixxQkFDRSw4REFBQ1AsYUFBYSxDQUFDYyxRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFDakNWLFFBQVE7Ozs7O2lCQUNjLENBQzFCO0FBQ0gsQ0FBQztBQUVNLE1BQU1ZLGdCQUFnQixHQUFHLElBQU07SUFDcEMsTUFBTUMsT0FBTyxHQUFHcEIsaURBQVUsQ0FBQ0ksYUFBYSxDQUFDO0lBQ3pDLElBQUksQ0FBQ2dCLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDO0lBQzFFLENBQUM7SUFFRCxPQUFPO1FBQ0wsR0FBR0QsT0FBTztLQUNYO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2t6YXZlcmRlLWFwcC8uL2dsb2JhbC1jb250ZXh0LnRzeD9lZmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VNZW1vLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwibmV4dC1pbnRsXCI7XHJcblxyXG5pbnRlcmZhY2UgTG9jYWxlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2hvcnQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEdsb2JhbENvbnRleHRWYWx1ZSB7XHJcbiAgbG9jYWxlczogTG9jYWxlW107XHJcbiAgbG9jYWxlOiBMb2NhbGU7XHJcbiAgc2V0TG9jYWxlczogKGxvY2FsZXM6IExvY2FsZVtdKSA9PiB2b2lkO1xyXG4gIHNldExvY2FsZTogKGxvY2FsZTogTG9jYWxlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxHbG9iYWxDb250ZXh0VmFsdWUgfCBudWxsPihudWxsKSFcclxuXHJcbmludGVyZmFjZSBHbG9iYWxQcm92aWRlclByb3BzIHtcclxuICBpbml0aWFsTG9jYWxlcz86IExvY2FsZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBpbml0aWFsTG9jYWxlcywgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW48R2xvYmFsUHJvdmlkZXJQcm9wcz4pID0+IHtcclxuICBjb25zdCBsb2NhbGVWYWx1ZSA9IHVzZUxvY2FsZSgpXHJcbiAgY29uc3QgW2xvY2FsZXMsIHNldExvY2FsZXNdID0gdXNlU3RhdGU8TG9jYWxlW10+KGluaXRpYWxMb2NhbGVzID8/IFt7XCJuYW1lXCI6XCJFbmdsaXNoXCIsXCJzaG9ydFwiOlwiZW5cIn1dKVxyXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZTxMb2NhbGU+KHtcIm5hbWVcIjpcIkVuZ2xpc2hcIixcInNob3J0XCI6XCJlblwifSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhbGVzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRMYW5nVmFsdWUgPSBsb2NhbGVzLmZpbmQoKGVsKSA9PiBlbC5zaG9ydCA9PT0gbG9jYWxlVmFsdWUpXHJcbiAgICBpZiAoY3VycmVudExhbmdWYWx1ZSkge1xyXG4gICAgICBzZXRMb2NhbGUoY3VycmVudExhbmdWYWx1ZSlcclxuICAgIH1cclxuICB9LCBbbG9jYWxlcywgbG9jYWxlVmFsdWVdKVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9jYWxlcyxcclxuICAgICAgbG9jYWxlLFxyXG4gICAgICBzZXRMb2NhbGVzLFxyXG4gICAgICBzZXRMb2NhbGVcclxuICAgIH1cclxuICB9LCBbbG9jYWxlcywgbG9jYWxlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdsb2JhbENvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdsb2JhbFByb3ZpZGVyJylcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5jb250ZXh0XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTG9jYWxlIiwiR2xvYmFsQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiaW5pdGlhbExvY2FsZXMiLCJjaGlsZHJlbiIsImxvY2FsZVZhbHVlIiwibG9jYWxlcyIsInNldExvY2FsZXMiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJjdXJyZW50TGFuZ1ZhbHVlIiwiZmluZCIsImVsIiwic2hvcnQiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlR2xvYmFsQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./global-context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _global_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-context */ \"./global-context.tsx\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_4__.NextIntlProvider, {\n        messages: pageProps?.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_context__WEBPACK_IMPORTED_MODULE_3__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"G:\\\\Development\\\\Projects\\\\React\\\\kzaverde-app\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"G:\\\\Development\\\\Projects\\\\React\\\\kzaverde-app\\\\pages\\\\_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\Development\\\\Projects\\\\React\\\\kzaverde-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0I7QUFFTTtBQUN3QjtBQUNOO0FBUzdCLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBYyxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDSCx1REFBZ0I7UUFBQ0ksUUFBUSxFQUFFRCxTQUFTLEVBQUVDLFFBQVE7a0JBQzdDLDRFQUFDTCwyREFBYztzQkFDYiw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2I7Ozs7O1lBQ0EsQ0FDcEI7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3phdmVyZGUtYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tICcuLi9nbG9iYWwtY29udGV4dCdcclxuaW1wb3J0IHsgTmV4dEludGxQcm92aWRlciB9IGZyb20gJ25leHQtaW50bCdcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuXHJcbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xyXG4gIHBhZ2VQcm9wczogQXBwUHJvcHNbJ3BhZ2VQcm9wcyddICYge1xyXG4gICAgbWVzc2FnZXM/OiBhbnlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogTXlBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dEludGxQcm92aWRlciBtZXNzYWdlcz17cGFnZVByb3BzPy5tZXNzYWdlc30+XHJcbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICA8L05leHRJbnRsUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkdsb2JhbFByb3ZpZGVyIiwiTmV4dEludGxQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWVzc2FnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

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