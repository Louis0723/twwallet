(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/component/qrcode/index.jsx":
/*!****************************************!*\
  !*** ./src/component/qrcode/index.jsx ***!
  \****************************************/
/*! exports provided: default, qrcode, QRcodeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrcode */ "./src/component/qrcode/qrcode.js");
/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_qrcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "qrcode", function() { return _qrcode__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _qrcodeInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrcodeInput */ "./src/component/qrcode/qrcodeInput.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRcodeInput", function() { return _qrcodeInput__WEBPACK_IMPORTED_MODULE_1__["default"]; });

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


 // import QRcodeView from './qrcodeView';

var _default = {
  qrcode: _qrcode__WEBPACK_IMPORTED_MODULE_0___default.a,
  QRcodeInput: _qrcodeInput__WEBPACK_IMPORTED_MODULE_1__["default"] // QRcodeView

};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/component/qrcode/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/ethereum/general/etherTransfer.jsx":
/*!*****************************************************!*\
  !*** ./src/page/ethereum/general/etherTransfer.jsx ***!
  \*****************************************************/
/*! exports provided: default, EtherTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EtherTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtherTransfer", function() { return EtherTransfer; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _component_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../component/qrcode */ "./src/component/qrcode/index.jsx");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qrcode-react */ "./node_modules/qrcode-react/dist/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_14__);








var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/etherTransfer.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









var EtherTransfer = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EtherTransfer, _Component);

  function EtherTransfer(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, EtherTransfer);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(EtherTransfer).call(this, props));

    _this.onSearch = function (value) {
      if (/^0x[0-9a-f]{40}$/ig.test(value)) {
        _this.subject.next(value);
      }
    };

    _this.componentWillMount = function () {
      _this.subject = _this.subject.subscribe({
        next: function () {
          var _next = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
            var provider, balance;
            return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    provider = _this.props.ethereumStore.provider;
                    _context.next = 4;
                    return provider.getBalance(_this.props.ethereumStore.address);

                  case 4:
                    balance = _context.sent;

                    _this.setState({
                      balance: balance / Math.pow(10, 18)
                    });

                    _context.next = 10;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 8]]);
          }));

          function next(_x) {
            return _next.apply(this, arguments);
          }

          return next;
        }()
      });

      _this.onSearch(_this.state.address);
    };

    _this.submit =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var transaction, tx;
        return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                transaction = {
                  to: _this.target,
                  value: ethers_index_js__WEBPACK_IMPORTED_MODULE_14__["utils"].parseEther(_this.amount + '')
                };
                console.log(transaction);
                _context2.next = 4;
                return _this.props.ethereumStore.wallet.connect(_this.props.ethereumStore.provider).sendTransaction(transaction);

              case 4:
                tx = _context2.sent;
                alert('txid: ' + tx.hash);
                _context2.next = 8;
                return tx.wait();

              case 8:
                _this.onSearch(_this.state.address);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      address: props.ethereumStore.address || '0x'.padEnd(42, '0'),
      balance: []
    };
    _this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(EtherTransfer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.state = {
        address: props.ethereumStore.address || '0x'.padEnd(42, '0'),
        balance: []
      };
      this.onSearch(this.state.address);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u81EA\u5DF1\u9322\u5305\u7684QR Code")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: 200,
        key: this.props.ethereumStore.address,
        value: this.props.ethereumStore.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "ETH\u8F49\u5E33")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u7576\u524D\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: this.props.ethereumStore.address,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "ETH\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        value: this.state.balance,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "qrcodefile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u6536\u6B3E\u4EBA\u5730\u5740(\u6383\u63CF\u6216\u8F38\u5165\u5C0D\u65B9QRCode)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRcodeInput"], {
        placeholder: "0x",
        onChange: function onChange(e) {
          _this2.target = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "ETH"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        defaultValue: '0',
        onChange: function onChange(e) {
          _this2.amount = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u9001\u51FA"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EtherTransfer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EtherTransfer, "EtherTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/etherTransfer.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=15.chunk.js.map