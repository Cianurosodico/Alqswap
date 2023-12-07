"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(463);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__, connectkit__WEBPACK_IMPORTED_MODULE_3__]);
([wagmi__WEBPACK_IMPORTED_MODULE_1__, wagmi_chains__WEBPACK_IMPORTED_MODULE_2__, connectkit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const chains = [
    wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.bsc,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_2__.polygon
];
const config = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultConfig)({
    // Required API Keys
    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",
    // Required
    appName: "0x Next.js Demo App",
    // Optional
    appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
    chains
}));
function App({ Component , pageProps  }) {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col justify-center items-center padding-24 h-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {
            config: config,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(connectkit__WEBPACK_IMPORTED_MODULE_3__.ConnectKitProvider, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(connectkit__WEBPACK_IMPORTED_MODULE_3__.ConnectKitButton, {}),
                    mounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 463:
/***/ ((module) => {

module.exports = import("connectkit");;

/***/ }),

/***/ 998:
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ 697:
/***/ ((module) => {

module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(656));
module.exports = __webpack_exports__;

})();