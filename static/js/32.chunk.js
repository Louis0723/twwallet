(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/page/other/tool/privateKeyTransfer.jsx":
/*!****************************************************!*\
  !*** ./src/page/other/tool/privateKeyTransfer.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateKeyTransfer; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/privateKeyTransfer.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var LITECOIN = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
};

var PrivateKeyTransfer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PrivateKeyTransfer, _Component);

  function PrivateKeyTransfer(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PrivateKeyTransfer);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PrivateKeyTransfer).call(this, props));

    _this.changePrivFormat = function (e) {
      _this.state.network = _this.networks[e.target.value];

      _this.forceUpdate();
    };

    _this.state = {
      network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["networks"].testnet,
      priv: ''
    };
    _this.networks = [bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["networks"].testnet, Object.assign({}, bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["networks"].testnet), bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["networks"].bitcoin, Object.assign({}, bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["networks"].bitcoin), LITECOIN, Object.assign({}, LITECOIN)];
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PrivateKeyTransfer, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var keyPair = null;
      var address = '';

      try {
        keyPair = this.state.priv ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["ECPair"].fromPrivateKey(Buffer.from(this.state.priv, 'hex'), {
          network: this.state.network
        }) : null;
        address = keyPair ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["payments"].p2pkh({
          pubkey: keyPair.publicKey,
          network: this.state.network
        }).address : '';

        if (this.state.network === this.networks[1] || this.state.network === this.networks[3] || this.state.network === this.networks[5]) {
          address = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["payments"].p2sh({
            network: this.state.network,
            redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["payments"].p2wpkh({
              pubkey: keyPair.publicKey,
              network: this.state.network
            })
          }).address;
        }

        this.state.wif = keyPair && keyPair.toWIF();
      } catch (e) {}

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u79C1\u9470\u8F49\u63DB")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        onChange: this.changePrivFormat,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "btc testnet"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "btc testnet(segwit)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "btc(legacy)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "btc(segwit)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "litecoin"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "litecoin(segwit)")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "form-control",
        placeholder: "hex",
        value: this.state.priv,
        onChange: function onChange(e) {
          _this2.state.priv = e.target.value;

          try {
            bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["ECPair"].fromPrivateKey(Buffer.from(_this2.state.priv, 'hex'), {
              network: _this2.state.network
            });
          } catch (e) {
            _this2.state.wif = '';
          }

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", (_React$createElement = {
        className: "form-control",
        placeholder: "wif"
      }, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "className", "form-control"), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "placeholder", "wif"), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "value", this.state.wif), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onChange", function onChange(e) {
        try {
          var _keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__["ECPair"].fromWIF(e.target.value, _this2.state.network);

          _this2.state.priv = Buffer.from(_keyPair.__d).toString('hex');
        } catch (err) {
          _this2.state.wif = e.target.value;
          _this2.state.priv = '';
        }

        _this2.forceUpdate();
      }), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 90
      }), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "form-control",
        value: address,
        placeholder: "Address",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PrivateKeyTransfer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LITECOIN, "LITECOIN", "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/privateKeyTransfer.jsx");
  reactHotLoader.register(PrivateKeyTransfer, "PrivateKeyTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/privateKeyTransfer.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

}]);
//# sourceMappingURL=32.chunk.js.map