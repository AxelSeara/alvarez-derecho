"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Footer = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), legalModalOpen = _useState[0], setLegalModalOpen = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), imageModalOpen = _useState1[0], setImageModalOpen = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (legalModalOpen || imageModalOpen) {\n            document.body.style.overflow = \"hidden\";\n        } else {\n            document.body.style.overflow = \"unset\";\n        }\n        return function() {\n            document.body.style.overflow = \"unset\";\n        };\n    }, [\n        legalModalOpen,\n        imageModalOpen\n    ]);\n    var ModalContent = function(param) {\n        var title = param.title, children = param.children;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex sm:items-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-lg leading-6 font-medium text-gray-900\",\n                                    id: \"modal-title\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: children\n                                }, void 0, false, {\n                                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            setLegalModalOpen(false);\n                            setImageModalOpen(false);\n                        },\n                        type: \"button\",\n                        className: \"mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\",\n                        children: \"Cerrar\"\n                    }, void 0, false, {\n                        fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"py-2 text-sm cursor-pointer\",\n                        onClick: function() {\n                            return setLegalModalOpen(true);\n                        },\n                        children: \"Aviso legal\"\n                    }, void 0, false, {\n                        fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"py-2 text-sm cursor-pointer\",\n                        onClick: function() {\n                            return setImageModalOpen(true);\n                        },\n                        children: \"Uso de imagenes\"\n                    }, void 0, false, {\n                        fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            legalModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed z-50 inset-0 overflow-y-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"hidden sm:inline-block sm:align-middle sm:h-screen\",\n                            \"aria-hidden\": \"true\",\n                            children: \"​\"\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContent, {\n                            title: \"Aviso Legal\"\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            imageModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed z-50 inset-0 overflow-y-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\",\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"hidden sm:inline-block sm:align-middle sm:h-screen\",\n                            \"aria-hidden\": \"true\",\n                            children: \"​\"\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContent, {\n                            title: \"Uso de im\\xe1genes\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: [\n                                    \"Imagen de publicaci\\xf3n de blog 1. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"https://www.freepik.es/foto-gratis/concepto-negocio-automoviles-venta-automoviles-consumo-personas_9144933.htm#query=conductor&position=0&from_view=search&track=sph\",\n                                        children: \"Imagen de standret\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 50\n                                    }, _this),\n                                    \" en Freepik.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/axel/code/AxelSeara/projects/alvarez-despacho/components/Footer.jsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Footer, \"822bEnIsmTnoP7plABS1JH+tme8=\");\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUN1QjtBQUUxRSxJQUFNTSxTQUFTOztJQUNiLElBQTRDTCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBOUNNLGlCQUFxQ04sY0FBckJPLG9CQUFxQlA7SUFDNUMsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUE5Q1EsaUJBQXFDUixlQUFyQlMsb0JBQXFCVDtJQUU1Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxrQkFBa0JFLGdCQUFnQjtZQUNwQ0UsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQyxPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7UUFFQSxPQUFPO1lBQ0xILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7SUFDRixHQUFHO1FBQUNQO1FBQWdCRTtLQUFlO0lBRW5DLElBQU1NLGVBQWU7WUFBR0MsY0FBQUEsT0FBT0MsaUJBQUFBOzZCQUM3Qiw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTtvQ0FBOENFLElBQUc7OENBQzVETDs7Ozs7OzhDQUVILDhEQUFDRTtvQ0FBSUMsV0FBVTs4Q0FBUUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSTdCLDhEQUFDQztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQ0NDLFNBQVM7NEJBQ1BmLGtCQUFrQjs0QkFDbEJFLGtCQUFrQjt3QkFDcEI7d0JBQ0FjLE1BQUs7d0JBQ0xMLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9QLHFCQUNFOzswQkFFRSw4REFBQ007O2tDQUVDLDhEQUFDQzt3QkFBR1AsV0FBVTt3QkFBOEJJLFNBQVM7bUNBQU1mLGtCQUFrQjs7a0NBQU87Ozs7OztrQ0FDcEYsOERBQUNrQjt3QkFBR1AsV0FBVTt3QkFBOEJJLFNBQVM7bUNBQU1iLGtCQUFrQjs7a0NBQU87Ozs7Ozs7Ozs7OztZQUVyRkgsZ0NBQ0MsOERBQUNXO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzRCQUE2RFEsZUFBWTs7Ozs7O3NDQUN4Riw4REFBQ0M7NEJBQUtULFdBQVU7NEJBQXFEUSxlQUFZO3NDQUFPOzs7Ozs7c0NBQ3hGLDhEQUFDWjs0QkFBYUMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNekJQLGdDQUNDLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBNkRRLGVBQVk7Ozs7OztzQ0FDeEYsOERBQUNDOzRCQUFLVCxXQUFVOzRCQUFxRFEsZUFBWTtzQ0FBTzs7Ozs7O3NDQUN4Riw4REFBQ1o7NEJBQWFDLE9BQU07c0NBQ2xCLDRFQUFDYTtnQ0FBRVYsV0FBVTs7b0NBQXdCO2tEQUNGLDhEQUFDVzt3Q0FBRUMsTUFBSztrREFBdUs7Ozs7OztvQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdFA7R0E3RU16QjtLQUFBQTtBQStFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qc3g/Mzg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhSW5zdGFncmFtLCBGYUxpbmtlZGluLCBGYVR3aXR0ZXJTcXVhcmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2xlZ2FsTW9kYWxPcGVuLCBzZXRMZWdhbE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZU1vZGFsT3Blbiwgc2V0SW1hZ2VNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlZ2FsTW9kYWxPcGVuIHx8IGltYWdlTW9kYWxPcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0JztcbiAgICB9O1xuICB9LCBbbGVnYWxNb2RhbE9wZW4sIGltYWdlTW9kYWxPcGVuXSk7XG5cbiAgY29uc3QgTW9kYWxDb250ZW50ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhbGlnbi1ib3R0b20gYmctd2hpdGUgcm91bmRlZC1sZyB0ZXh0LWxlZnQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgc206bXktOCBzbTphbGlnbi1taWRkbGUgc206bWF4LXctbGcgc206dy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHQtNSBwYi00IHNtOnAtNiBzbTpwYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206ZmxleCBzbTppdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWNlbnRlciBzbTptdC0wIHNtOm1sLTQgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiIGlkPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC00IHB5LTMgc206cHgtNiBzbTpmbGV4IHNtOmZsZXgtcm93LXJldmVyc2VcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldExlZ2FsTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEltYWdlTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgdy1mdWxsIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLXJlZC02MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6YmctcmVkLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1yZWQtNTAwIHNtOm10LTAgc206bWwtMyBzbTp3LWF1dG8gc206dGV4dC1zbVwiXG4gICAgICAgID5cbiAgICAgICAgICBDZXJyYXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogcmVzdCBvZiB5b3VyIGNvbXBvbmVudC4uLiAqL31cbiAgICAgIDx1bD5cbiAgICAgICAgey8qIG90aGVyIGxpc3QgaXRlbXMuLi4gKi99XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJweS0yIHRleHQtc20gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRMZWdhbE1vZGFsT3Blbih0cnVlKX0+QXZpc28gbGVnYWw8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNtIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0SW1hZ2VNb2RhbE9wZW4odHJ1ZSl9PlVzbyBkZSBpbWFnZW5lczwvbGk+XG4gICAgICA8L3VsPlxuICAgICAge2xlZ2FsTW9kYWxPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHQtNCBweC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrIHNtOmFsaWduLW1pZGRsZSBzbTpoLXNjcmVlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjODIwMzs8L3NwYW4+XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IHRpdGxlPVwiQXZpc28gTGVnYWxcIj5cbiAgICAgICAgICAgICAgey8qIFlvdXIgbGVnYWwgbm90aWNlIGhlcmUgKi99XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2ltYWdlTW9kYWxPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHQtNCBweC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrIHNtOmFsaWduLW1pZGRsZSBzbTpoLXNjcmVlblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjODIwMzs8L3NwYW4+XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IHRpdGxlPVwiVXNvIGRlIGltw6FnZW5lc1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBJbWFnZW4gZGUgcHVibGljYWNpw7NuIGRlIGJsb2cgMS4gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuZXMvZm90by1ncmF0aXMvY29uY2VwdG8tbmVnb2Npby1hdXRvbW92aWxlcy12ZW50YS1hdXRvbW92aWxlcy1jb25zdW1vLXBlcnNvbmFzXzkxNDQ5MzMuaHRtI3F1ZXJ5PWNvbmR1Y3RvciZwb3NpdGlvbj0wJmZyb21fdmlldz1zZWFyY2gmdHJhY2s9c3BoXCI+SW1hZ2VuIGRlIHN0YW5kcmV0PC9hPiBlbiBGcmVlcGlrLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYUluc3RhZ3JhbSIsIkZhTGlua2VkaW4iLCJGYVR3aXR0ZXJTcXVhcmUiLCJGb290ZXIiLCJsZWdhbE1vZGFsT3BlbiIsInNldExlZ2FsTW9kYWxPcGVuIiwiaW1hZ2VNb2RhbE9wZW4iLCJzZXRJbWFnZU1vZGFsT3BlbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJNb2RhbENvbnRlbnQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwidWwiLCJsaSIsImFyaWEtaGlkZGVuIiwic3BhbiIsInAiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.jsx\n"));

/***/ })

});