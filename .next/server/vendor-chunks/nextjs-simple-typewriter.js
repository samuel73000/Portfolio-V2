"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nextjs-simple-typewriter";
exports.ids = ["vendor-chunks/nextjs-simple-typewriter"];
exports.modules = {

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/components/Cursor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/components/Cursor.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cursor: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.module.css.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/styles.module.css.js");
/* __next_internal_client_entry_do_not_use__ Cursor auto */ 


const i = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ cursorBlinking: o = !0, cursorStyle: i = "|", cursorColor: t = "inherit" })=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", Object.assign({
        style: {
            color: t
        },
        className: `${_styles_module_css_js__WEBPACK_IMPORTED_MODULE_2__["default"].blinkingCursor} ${o ? _styles_module_css_js__WEBPACK_IMPORTED_MODULE_2__["default"].blinking : ""}`
    }, {
        children: i
    })));
 //# sourceMappingURL=Cursor.js.map


/***/ }),

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/components/Typewriter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/components/Typewriter.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Typewriter: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useTypewriter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useTypewriter.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/hooks/useTypewriter.js");
/* harmony import */ var _Cursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cursor.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/components/Cursor.js");
/* __next_internal_client_entry_do_not_use__ Typewriter auto */ 


const p = ({ words: p = [
    "Hello World!",
    "This is",
    "a simple Typewriter"
], loop: s = 1, typeSpeed: t = 80, deleteSpeed: i = 50, delaySpeed: d = 1500, cursor: c = !1, cursorStyle: y = "|", cursorColor: u = "inherit", cursorBlinking: m = !0, onLoopDone: S, onType: a, onDelay: D, onDelete: h })=>{
    const [T] = (0,_hooks_useTypewriter_js__WEBPACK_IMPORTED_MODULE_1__.useTypewriter)({
        words: p,
        loop: s,
        typeSpeed: t,
        deleteSpeed: i,
        delaySpeed: d,
        onLoopDone: S,
        onType: a,
        onDelay: D,
        onDelete: h
    });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: T
            }),
            c && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cursor_js__WEBPACK_IMPORTED_MODULE_2__.Cursor, {
                cursorStyle: y,
                cursorColor: u,
                cursorBlinking: m
            })
        ]
    });
};
 //# sourceMappingURL=Typewriter.js.map


/***/ }),

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/hooks/useTypewriter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/hooks/useTypewriter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTypewriter: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/reducer.js");
/* __next_internal_client_entry_do_not_use__ useTypewriter auto */ 

const o = ({ words: o = [
    "Hello World!",
    "This is",
    "a simple Typewriter"
], loop: u = 1, typeSpeed: p = 80, deleteSpeed: s = 50, delaySpeed: l = 1500, onLoopDone: d, onType: i, onDelete: y, onDelay: a })=>{
    const [{ speed: T, text: m, count: D }, E] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer_js__WEBPACK_IMPORTED_MODULE_1__.reducer, {
        speed: p,
        text: "",
        count: 0
    }), h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0), x = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1), L = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1), S = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1), f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1), g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const e = D % o.length, r = o[e];
        L.current ? (E({
            type: "DELETE",
            payload: r,
            speed: s
        }), "" === m && (L.current = !1, E({
            type: "COUNT"
        }))) : (E({
            type: "TYPE",
            payload: r,
            speed: p
        }), S.current = !0, m === r && (E({
            type: "DELAY",
            payload: l
        }), S.current = !1, f.current = !0, setTimeout(()=>{
            f.current = !1, L.current = !0;
        }, l), u > 0 && (h.current += 1, h.current / o.length === u && (f.current = !1, x.current = !0)))), S.current && i && i(h.current), L.current && y && y(), f.current && a && a();
    }, [
        D,
        l,
        s,
        u,
        p,
        o,
        m,
        i,
        y,
        a
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const e = setTimeout(g, T);
        return x.current && clearTimeout(e), ()=>clearTimeout(e);
    }, [
        g,
        T
    ]), (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        d && x.current && d();
    }, [
        d
    ]), [
        m,
        {
            isType: S.current,
            isDelay: f.current,
            isDelete: L.current,
            isDone: x.current
        }
    ];
};
 //# sourceMappingURL=useTypewriter.js.map


/***/ }),

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cursor: () => (/* reexport safe */ _components_Cursor_js__WEBPACK_IMPORTED_MODULE_1__.Cursor),
/* harmony export */   Typewriter: () => (/* reexport safe */ _components_Typewriter_js__WEBPACK_IMPORTED_MODULE_0__.Typewriter),
/* harmony export */   useTypewriter: () => (/* reexport safe */ _hooks_useTypewriter_js__WEBPACK_IMPORTED_MODULE_2__.useTypewriter)
/* harmony export */ });
/* harmony import */ var _components_Typewriter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Typewriter.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/components/Typewriter.js");
/* harmony import */ var _components_Cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Cursor.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/components/Cursor.js");
/* harmony import */ var _hooks_useTypewriter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useTypewriter.js */ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/hooks/useTypewriter.js");
/* __next_internal_client_entry_do_not_use__ Typewriter,Cursor,useTypewriter auto */ 

 //# sourceMappingURL=index.js.map


/***/ }),

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/reducer.js":
/*!***************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/reducer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducer: () => (/* binding */ e)\n/* harmony export */ });\nfunction e(e,t){var s,n;switch(t.type){case\"TYPE\":return Object.assign(Object.assign({},e),{speed:t.speed,text:null===(s=t.payload)||void 0===s?void 0:s.substring(0,e.text.length+1)});case\"DELAY\":return Object.assign(Object.assign({},e),{speed:t.payload});case\"DELETE\":return Object.assign(Object.assign({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case\"COUNT\":return Object.assign(Object.assign({},e),{count:e.count+1});default:return e}}\n//# sourceMappingURL=reducer.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dGpzLXNpbXBsZS10eXBld3JpdGVyL2Rpc3QvcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0JBQWdCLFFBQVEsZUFBZSxnREFBZ0QsS0FBSywwRkFBMEYsRUFBRSxpREFBaUQsS0FBSyxnQkFBZ0IsRUFBRSxrREFBa0QsS0FBSywwRkFBMEYsRUFBRSxpREFBaUQsS0FBSyxnQkFBZ0IsRUFBRSxrQkFBdUM7QUFDbGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYyLy4vbm9kZV9tb2R1bGVzL25leHRqcy1zaW1wbGUtdHlwZXdyaXRlci9kaXN0L3JlZHVjZXIuanM/OGVjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKGUsdCl7dmFyIHMsbjtzd2l0Y2godC50eXBlKXtjYXNlXCJUWVBFXCI6cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxlKSx7c3BlZWQ6dC5zcGVlZCx0ZXh0Om51bGw9PT0ocz10LnBheWxvYWQpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLnN1YnN0cmluZygwLGUudGV4dC5sZW5ndGgrMSl9KTtjYXNlXCJERUxBWVwiOnJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3NwZWVkOnQucGF5bG9hZH0pO2Nhc2VcIkRFTEVURVwiOnJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse3NwZWVkOnQuc3BlZWQsdGV4dDpudWxsPT09KG49dC5wYXlsb2FkKXx8dm9pZCAwPT09bj92b2lkIDA6bi5zdWJzdHJpbmcoMCxlLnRleHQubGVuZ3RoLTEpfSk7Y2FzZVwiQ09VTlRcIjpyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtjb3VudDplLmNvdW50KzF9KTtkZWZhdWx0OnJldHVybiBlfX1leHBvcnR7ZSBhcyByZWR1Y2VyfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHVjZXIuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nextjs-simple-typewriter/dist/reducer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/nextjs-simple-typewriter/dist/styles.module.css.js":
/*!*************************************************************************!*\
  !*** ./node_modules/nextjs-simple-typewriter/dist/styles.module.css.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ l)\n/* harmony export */ });\nvar l={blinkingCursor:\"styles-module_blinkingCursor__yugAC\",blinking:\"styles-module_blinking__9VXRT\",blink:\"styles-module_blink__rqfaf\"};\n//# sourceMappingURL=styles.module.css.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dGpzLXNpbXBsZS10eXBld3JpdGVyL2Rpc3Qvc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sa0lBQXVKO0FBQzlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYyLy4vbm9kZV9tb2R1bGVzL25leHRqcy1zaW1wbGUtdHlwZXdyaXRlci9kaXN0L3N0eWxlcy5tb2R1bGUuY3NzLmpzPzc2YTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGw9e2JsaW5raW5nQ3Vyc29yOlwic3R5bGVzLW1vZHVsZV9ibGlua2luZ0N1cnNvcl9feXVnQUNcIixibGlua2luZzpcInN0eWxlcy1tb2R1bGVfYmxpbmtpbmdfXzlWWFJUXCIsYmxpbms6XCJzdHlsZXMtbW9kdWxlX2JsaW5rX19ycWZhZlwifTtleHBvcnR7bCBhcyBkZWZhdWx0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5tb2R1bGUuY3NzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nextjs-simple-typewriter/dist/styles.module.css.js\n");

/***/ })

};
;