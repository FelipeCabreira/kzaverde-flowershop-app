"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next-intl"
const external_next_intl_namespaceObject = require("next-intl");
;// CONCATENATED MODULE: ./global-context.tsx



const GlobalContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const GlobalProvider = ({ initialLocales , children  })=>{
    const localeValue = (0,external_next_intl_namespaceObject.useLocale)();
    const { 0: locales , 1: setLocales  } = (0,external_react_.useState)(initialLocales ?? [
        {
            "name": "English",
            "short": "en"
        }
    ]);
    const { 0: locale , 1: setLocale  } = (0,external_react_.useState)({
        "name": "English",
        "short": "en"
    });
    (0,external_react_.useEffect)(()=>{
        if (!locales) {
            return;
        }
        const currentLangValue = locales.find((el)=>el.short === localeValue);
        if (currentLangValue) {
            setLocale(currentLangValue);
        }
    }, [
        locales,
        localeValue
    ]);
    const value = (0,external_react_.useMemo)(()=>{
        return {
            locales,
            locale,
            setLocales,
            setLocale
        };
    }, [
        locales,
        locale
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalContext.Provider, {
        value: value,
        children: children
    });
};
const useGlobalContext = ()=>{
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return {
        ...context
    };
};

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_intl_namespaceObject.NextIntlProvider, {
        messages: pageProps?.messages,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GlobalProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(778));
module.exports = __webpack_exports__;

})();