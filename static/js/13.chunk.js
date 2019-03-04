(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./src/page/ethereum/general/otherBalance.jsx":
/*!****************************************************!*\
  !*** ./src/page/ethereum/general/otherBalance.jsx ***!
  \****************************************************/
/*! exports provided: default, Balance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return Balance; });
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








var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/otherBalance.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var Balance = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_10__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Balance, _Component);

  function Balance(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Balance);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Balance).call(this, props));

    _this.onSearch = function (value) {
      if (/^0x[0-9a-f]{40}$/ig.test(value)) {
        _this.subject.next(value);
      }
    };

    _this.componentWillMount = function () {
      _this.subject.subscribe({
        next: function () {
          var _next = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
            var _ref, data, tokens, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token;

            return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("/proxy/http://api.ethplorer.io/getAddressInfo/".concat(value, "?apiKey=freekey"));

                  case 3:
                    _ref = _context.sent;
                    data = _ref.data;
                    tokens = [];
                    tokens.push({
                      symbol: 'ETH',
                      balance: data.ETH.balance
                    });

                    if (!data.tokens) {
                      _context.next = 27;
                      break;
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 11;

                    for (_iterator = data.tokens[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      token = _step.value;
                      tokens.push({
                        symbol: token.tokenInfo.symbol,
                        balance: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(token.balance).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(10).pow(token.tokenInfo.decimals))
                      });
                    }

                    _context.next = 19;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](11);
                    _didIteratorError = true;
                    _iteratorError = _context.t0;

                  case 19:
                    _context.prev = 19;
                    _context.prev = 20;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 22:
                    _context.prev = 22;

                    if (!_didIteratorError) {
                      _context.next = 25;
                      break;
                    }

                    throw _iteratorError;

                  case 25:
                    return _context.finish(22);

                  case 26:
                    return _context.finish(19);

                  case 27:
                    _this.setState({
                      balance: tokens
                    });

                    _context.next = 32;
                    break;

                  case 30:
                    _context.prev = 30;
                    _context.t1 = _context["catch"](0);

                  case 32:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 30], [11, 15, 19, 27], [20,, 22, 26]]);
          }));

          function next(_x) {
            return _next.apply(this, arguments);
          }

          return next;
        }()
      }); // this.subscriber = interval(1000).pipe(
      //     mergeMap(() =>
      //         Observable.create((observer) => {
      //             (this.state.address !== '0x0000000000000000000000000000000000000000' && this.state.address !== '') &&
      //                 axios.get(`/proxy/http://api.ethplorer.io/getAddressInfo/${this.state.address}?apiKey=freekey`)
      //                     .then(({ data }) => {
      //                         observer.next(data);
      //                     })
      //         })
      //         // Observable.create((observer) => {
      //         //     this.props.ethereumState.web3.eth.getBalance(this.state.address, (e, r) => {
      //         //         e && observer.error(e);
      //         //         e || observer.next(r);
      //         //     })
      //         // })
      //     )).subscribe((info) => {
      //         let token = []
      //         token.push({ symbol: 'ETH', balance: info.ETH.balance })
      //         if (info.tokens) {
      //             for (let _t of info.tokens) {
      //                 token.push({
      //                     symbol: _t.tokenInfo.symbol, balance: utils.toBigNumber(_t.balance).div(
      //                         utils.toBigNumber(10).pow(_t.tokenInfo.decimals)
      //                     )
      //                 })
      //             }
      //         }
      //         this.state['balance'] = token;
      //         this.forceUpdate();
      //     })

    };

    _this.state = {
      balance: []
    };
    _this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Balance, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputs = this.state.balance.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "form-control",
          disabled: true,
          value: x.balance + ' ' + x.symbol,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u9918\u984D\u67E5\u8A62(\u50C5\u80FD\u67E5\u8A62\u4E3B\u7DB2)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
      }, "\u9322\u5305\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRcodeInput"], {
        placeholder: "0x ...",
        onChange: function onChange(e) {
          _this2.onSearch(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), inputs));
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
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/otherBalance.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=13.chunk.js.map