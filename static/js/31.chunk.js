(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/page/other/tool/utf8.jsx":
/*!**************************************!*\
  !*** ./src/page/other/tool/utf8.jsx ***!
  \**************************************/
/*! exports provided: default, UTF8Convert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UTF8Convert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTF8Convert", function() { return UTF8Convert; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utf8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/utf8 */ "./src/lib/utf8.js");





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/utf8.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var UTF8Convert =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UTF8Convert, _Component);

  function UTF8Convert() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UTF8Convert);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UTF8Convert).apply(this, arguments));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UTF8Convert, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (// <form>
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box box-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-header with-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          className: "box-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, "UTF8 Convert")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "Text"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
          onChange: function onChange(event) {
            _this.encoded = Object(_lib_utf8__WEBPACK_IMPORTED_MODULE_6__["textToUtf8"])(event.target.value);
            _this.decoded = event.target.value;

            _this.forceUpdate();
          },
          className: "form-control",
          rows: "3",
          placeholder: "TEXT",
          style: {
            "margin": "0px 3px 0px 0px",
            "width": "671px",
            "height": "291px"
          },
          value: this.decoded || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "UTF8"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
          onChange: function onChange(event) {
            _this.encoded = event.target.value;
            _this.decoded = Object(_lib_utf8__WEBPACK_IMPORTED_MODULE_6__["utf8ToText"])(event.target.value);

            _this.forceUpdate();
          },
          className: "form-control",
          rows: "3",
          placeholder: "bytes",
          style: {
            "margin": "0px 3px 0px 0px",
            "width": "671px",
            "height": "291px"
          },
          value: this.encoded || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })))) // </form>

      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return UTF8Convert;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UTF8Convert, "UTF8Convert", "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/utf8.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=31.chunk.js.map