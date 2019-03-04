(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "./src/page/coldWallet/bitcoinColdWallet/createTx.jsx":
/*!************************************************************!*\
  !*** ./src/page/coldWallet/bitcoinColdWallet/createTx.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateTx; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../component/qrcode */ "./src/component/qrcode/index.jsx");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/bitcoinColdWallet/createTx.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


 // import { website } from '../../../lib/website';
// import QRCodeMake from '../../../lib/qrcodeMake';

 // class DialogQrcode extends Component {
//     render() {
//         return (
//             <div id="qrcodeModal" className="modal fade" role="dialog">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <button type="button" className="close" data-dismiss="modal" >&times;</button>
//                             <h4 className="modal-title">掃描Qrcode</h4>
//                         </div>
//                         <div className="modal-body">
//                             <div id="qrcode"></div>
//                         </div>
//                         {/* <div className="modal-footer">
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

var CreateTx =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CreateTx, _Component);

  function CreateTx(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateTx);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateTx).call(this, props));
    _this.state = {
      address: '',
      network: 'testnet',
      balance: 0,
      fees: 0.07,
      segwit: false,
      receiverNumber: 1,
      to: [{}]
    };
    return _this;
  } // componentWillUnmount = () => { }
  // query = ({ network = this.state.network, address = this.state.address }) => {
  //     let req = website[network === 'testnet' ? 'testnetQuery' : 'bitcoinQuery'](address)
  //     req.then(({ data: res }) => {
  //         this.state.balance = res.unspent_outputs
  //             .map((v) => ({ value: v.value / 100000000 }))
  //             .reduce((x, y) => y.value + x, 0)
  //         this.forceUpdate()
  //     }).catch(() => {
  //         this.setState({ balance: 0 })
  //     })
  // }
  // submit = () => {
  //     website[this.state.network === 'testnet' ? 'testnetQuery' : 'bitcoinQuery'](this.state.address)
  //     .then(({data: res})=>{
  //         let txs = res.unspent_outputs
  //         .map((v) => ({value: v.value, txid: v.tx_hash_big_endian, vout: v.tx_output_n}))
  //         .sort((a, b) => b.value - a.value);
  //         let amount = this.state.to.reduce((x,y)=>x + y.amount * 100000000, 0) + this.state.fees* 100000000;
  //         let tb = new bitcoinlib.TransactionBuilder(this.state.network === 'testnet'? bitcoinlib.networks.testnet : undefined);
  //         let txAmount = 0
  //         for(let tx of txs) {
  //             txAmount += tx.value;
  //             tb.addInput(tx.txid, tx.vout)
  //             if(txAmount > amount) {
  //                 tb.addOutput(this.state.address, txAmount - amount)
  //                 break;
  //             }
  //         }
  //         if (txAmount < amount) {
  //             alert({error:'balance insufficient'})
  //         } else {
  //             this.state.to.forEach(({address, amount})=>{
  //                 tb.addOutput(address, amount * 100000000)
  //             })
  //             let tx = tb.buildIncomplete();
  //             let txstring = tx.toHex()
  //             window.$('#qrcodeModal').modal('show')
  //             document.getElementById('qrcode').innerHTML = ''
  //             new QRCodeMake(document.getElementById('qrcode'), txstring);
  //         }
  //     })
  // }


  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateTx, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\u767C\u8D77\u6BD4\u7279\u5E63\u4EA4\u6613")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u6BD4\u7279\u5E63\u7DB2\u8DEF"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        onChange: function onChange(e) {
          switch ((e.target.value | 1) <= 1) {
            case true:
              _this2.state.network = 'testnet';
              _this2.state.fees = 0.07;
              break;

            case false:
              _this2.state.network = 'mainnet';
              _this2.state.fees = 0.001;
              break;
          }

          _this2.state.segwit = e.target.value % 2 === 1;

          _this2.forceUpdate();

          _this2.query({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "bitcoin testnet(legacy)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "bitcoin testnet(segwit)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "bitcoin(legacy)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "bitcoin(segwit)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\u767C\u8D77\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRcodeInput"], {
        placeholder: "Bitcoin Address",
        onChange: function onChange(e) {
          _this2.state.address = e.target.value;

          _this2.forceUpdate();

          _this2.query({});
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Balance",
        value: this.state.balance,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "\u4EA4\u6613\u8CBB(\u7926\u5DE5\u4EA4\u6613\u8CBB\u53EF\u81EA\u7531\u8ABF\u6574\uFF0C\u53EF\u53C3\u8003\u6B64", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://bitcoinfees.earn.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "\u7DB2\u7AD9"), ")"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "Number",
        className: "form-control",
        placeholder: "fees",
        value: this.state.fees,
        onChange: function onChange(e) {
          _this2.state.fees = e.target.value;

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "\u6536\u6B3E\u4EBA\u6578"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        placeholder: "\u6536\u6B3E\u4EBA\u6578",
        type: "text",
        className: "form-control",
        value: this.state.receiverNumber,
        onChange: function onChange(e) {
          _this2.state.to.length = Number(e.target.value);

          for (var i = 0; i < e.target.value; i++) {
            _this2.state.to[i] = _this2.state.to[i] || {};
          }

          _this2.setState({
            receiverNumber: Number(e.target.value)
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      })), function () {
        var inputs = [];

        var _loop = function _loop(i) {
          inputs.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }, "\u6536\u6B3E\u4EBA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRcodeInput"], {
            placeholder: "Address",
            onChange: function onChange(e) {
              _this2.state.to[i].address = e.target.value;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
            type: "Number",
            className: "form-control",
            placeholder: "Amount",
            onChange: function onChange(e) {
              _this2.state.to[i].amount = e.target.value;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          })));
        };

        for (var i = 0; i < _this2.state.receiverNumber; i++) {
          _loop(i);
        }

        return inputs;
      }()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "\u7522\u751F\u539F\u59CB\u4EA4\u6613\u8A0A\u606FQrCode"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return CreateTx;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateTx, "CreateTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/bitcoinColdWallet/createTx.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=37.chunk.js.map