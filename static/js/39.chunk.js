(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "./src/page/coldWallet/ethereumColdWallet/createTx.jsx":
/*!*************************************************************!*\
  !*** ./src/page/coldWallet/ethereumColdWallet/createTx.jsx ***!
  \*************************************************************/
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _lib_utf8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/utf8 */ "./src/lib/utf8.js");





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/ethereumColdWallet/createTx.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




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
// @observer

var CreateTx =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CreateTx, _Component);

  function CreateTx(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateTx);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateTx).call(this, props));

    _this.render = function () {
      return (// <form>
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box box-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-header with-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          className: "box-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "\u767C\u8D77\u4EE5\u592A\u5E63\u4EA4\u6613")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "box-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "\u767C\u8D77\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRcodeInput"], {
          placeholder: "Ethereum Address",
          onChange: function onChange(e) {
            _this.state.address = e.target.value;

            _this.props.ethereumState.web3.eth.getBalance(_this.state.address, function (err, v) {
              _this.state.balance = v.div(1000000000).div(1000000000);

              _this.forceUpdate();
            });

            _this.forceUpdate();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "\u4EE5\u592A\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          value: _this.state.balance,
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          htmlFor: "qrcodefile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "\u6536\u6B3E\u4EBA\u5730\u5740(\u6383\u63CF\u6216\u8F38\u5165\u5C0D\u65B9QRCode)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRcodeInput"], {
          placeholder: "0x",
          onChange: function onChange(e) {
            _this.state.target = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "\u4EE5\u592A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          className: "form-control",
          type: "number",
          defaultValue: '0',
          onChange: function onChange(e) {
            _this.state.amount = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "radio",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "radio",
          name: "dataType",
          value: "bytes",
          defaultChecked: "true",
          onClick: function onClick(e) {
            return _this.state.dataType = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), "Bytes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "radio",
          name: "dataType",
          value: "utf8",
          onClick: function onClick(e) {
            return _this.state.dataType = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), "UTF8"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "form-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, "\u8CC7\u6599"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
          onChange: function onChange(e) {
            _this.state.data = e.target.value;
          },
          className: "form-control",
          rows: "3",
          placeholder: "0x",
          style: {
            "margin": "0px 3px 0px 0px",
            "width": "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: _this.submit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "\u7522\u751F\u539F\u59CB\u4EA4\u6613\u8A0A\u606FQrCode"))) // </form>

      );
    };

    _this.state = {
      gasLimit: 'auto',
      gasPrice: 10000000000,
      target: '0x',
      amount: 0,
      dataType: 'bytes',
      data: ''
    };
    return _this;
  } // componentWillUnmount = () => {
  // }
  // makeQrcode = (tx) => {
  //     window.$('#qrcodeModal').modal('show')
  //     document.getElementById('qrcode').innerHTML = ''
  //     new QRCodeMake(document.getElementById('qrcode'), tx.serialize().toString('hex'));
  // }
  // submit = () => {
  //     let data = this.state.data;
  //     if (this.state.dataType === "utf8") {
  //         data = '0x' + textToUtf8(this.state.data);
  //     } else if (!this.state.data.match(/^0x/)) {
  //         data = '0x' + this.state.data;
  //     }
  //     let jsonTx = this.props.ethereumState.getJsonTx(
  //         this.state.address,
  //         this.target || undefined,
  //         this.props.ethereumState.web3.toWei(this.amount),
  //         data
  //     )
  //     if (this.state.gasLimit === "auto") {
  //         this.props.ethereumState.getGasLimit(jsonTx).then((gasLimit) => {
  //             let tx = this.props.ethereumState.getTx(jsonTx, this.state.gasPrice, gasLimit)
  //             this.makeQrcode(tx)
  //         })
  //     } else {
  //         let tx = this.props.ethereumState.getTx(jsonTx, this.state.gasPrice, this.state.gasLimit)
  //         this.makeQrcode(tx)
  //     }
  // }


  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateTx, [{
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

  reactHotLoader.register(CreateTx, "CreateTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/ethereumColdWallet/createTx.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=39.chunk.js.map