(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/page/bitcoin/general/balance.jsx":
/*!**********************************************!*\
  !*** ./src/page/bitcoin/general/balance.jsx ***!
  \**********************************************/
/*! exports provided: default, Balance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return Balance; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/general/balance.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Balance = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('bitcoinStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Balance, _Component);

  function Balance(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Balance);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Balance).call(this, props));

    _this.componentWillMount = function () {
      _this.subscriber1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
          window.$.ajax("https://blockchain.info/q/addressbalance/".concat(_this.state.legacyAddress), {
            success: function success(balance) {
              observer.next(balance);
            }
          });
        });
      })).subscribe(function (btc) {
        _this.state.lbalance = btc / 100000000;

        _this.forceUpdate();
      });
      _this.subscriber2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
          window.$.ajax("https://blockchain.info/q/addressbalance/".concat(_this.state.segwitAddress), {
            success: function success(balance) {
              observer.next(balance);
            }
          });
        });
      })).subscribe(function (btc) {
        _this.state.sbalance = btc / 100000000;

        _this.forceUpdate();
      });
      _this.subscriber3 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
          window.$.ajax("https://testnet.blockchain.info/q/addressbalance/".concat(_this.state.testnetAddress), {
            success: function success(balance) {
              observer.next(balance);
            }
          });
        });
      })).subscribe(function (btc) {
        _this.state.tbalance = btc / 100000000;

        _this.forceUpdate();
      });
      _this.subscriber4 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
          window.$.ajax("https://testnet.blockchain.info/q/addressbalance/".concat(_this.state.testnetSegwitAddress), {
            success: function success(balance) {
              observer.next(balance);
            }
          });
        });
      })).subscribe(function (btc) {
        _this.state.tsbalance = btc / 100000000;

        _this.forceUpdate();
      });
      _this.subscriber5 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
          window.$.ajax("https://chain.so/api/v2/get_address_balance/ltc/".concat(_this.state.litecoinAddress, "/24"), {
            success: function success(_ref) {
              var balance = _ref.data.confirmed_balance;
              observer.next(balance / 1);
            }
          });
        });
      })).subscribe(function (ltc) {
        _this.state.liteBalance = ltc;

        _this.forceUpdate();
      });
    };

    _this.state = {
      legacyAddress: _this.props.bitcoinStore.legacyAddress,
      segwitAddress: _this.props.bitcoinStore.segwitAddress,
      testnetAddress: _this.props.bitcoinStore.testnetAddress,
      testnetSegwitAddress: _this.props.bitcoinStore.testnetSegwitAddress,
      litecoinAddress: _this.props.bitcoinStore.litecoinAddress
    };
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Balance, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.subscriber1.unsubscribe();
      this.subscriber2.unsubscribe();
      this.subscriber3.unsubscribe();
      this.subscriber4.unsubscribe();
      this.subscriber5.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      return (// <form>
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box box-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-header with-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          className: "box-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "\u9918\u984D\u67E5\u8A62")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Bitcoin\u5730\u5740(legacy\u683C\u5F0F)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Bitcoin Address",
          defaultValue: this.state.legacyAddress,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: this.state.sbalance || 0,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Bitcoin\u5730\u5740(segwit\u683C\u5F0F)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Bitcoin Address",
          defaultValue: this.state.segwitAddress,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: this.state.sbalance || 0,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Bitcoin Testnet\u5730\u5740(legacy\u683C\u5F0F)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Bitcoin Address",
          defaultValue: this.state.testnetAddress,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: this.state.tbalance || 0,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Bitcoin Testnet\u5730\u5740(segwit\u683C\u5F0F)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Bitcoin Address",
          defaultValue: this.state.testnetSegwitAddress,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: this.state.tsbalance || 0,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, "Litecoin\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "LiteCoin Address",
          defaultValue: this.state.litecoinAddress,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: this.state.liteBalance || 0,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }))) // </form>

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

  return Balance;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/general/balance.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=8.chunk.js.map