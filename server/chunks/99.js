"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": () => (/* binding */ LAYOUTS),
/* harmony export */   "GA": () => (/* binding */ WIDTH_PARAMS),
/* harmony export */   "TD": () => (/* binding */ DEFAULT_VALUES),
/* harmony export */   "jf": () => (/* binding */ INFO_REGEX)
/* harmony export */ });
const DEFAULT_VALUES = {
    token: "",
    domain: "cloudimg.io",
    customDomain: false,
    lazyLoading: true,
    lazyLoadOffset: 100,
    baseURL: "",
    apiVersion: "v7",
    params: "org_if_sml=1",
    doNotReplaceURL: false,
    limitFactor: 100,
    quality: 75,
    layout: "fill",
    objectFit: "cover",
    lowPreviewQuality: 50,
    transitionDuration: "800ms",
    objectPosition: "center",
    devicePixelRatioList: [
        1,
        1.5,
        2
    ],
    ssr: false
};
const LAYOUTS = {
    FILL: "fill",
    RESPONSIVE: "responsive",
    INTRINSIC: "intrinsic",
    FIXED: "fixed"
};
const WIDTH_PARAMS = [
    "w",
    "width"
];
const INFO_REGEX = /&ci_info=\d|\?ci_info=\d|ci_info=\d/;



/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ CloudimageContext),
  "Z": () => (/* binding */ provider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(854);
;// CONCATENATED MODULE: ./src/utils/generate-config.js

const generateConfig = (config = {})=>({
        domain: config.customDomain,
        ...constants/* DEFAULT_VALUES */.TD,
        ...config
    });


;// CONCATENATED MODULE: ./src/provider.js



const CloudimageContext = /*#__PURE__*/ (0,external_react_.createContext)({
    cloudImageConfig: {}
});
function CloudimageProvider({ config ={} , children  } = {}) {
    const cloudImageConfig = (0,external_react_.useMemo)(()=>generateConfig(config), [
        config
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(CloudimageContext.Provider, {
        value: cloudImageConfig,
        children: children
    });
}

/* harmony default export */ const provider = (CloudimageProvider);


/***/ })

};
;