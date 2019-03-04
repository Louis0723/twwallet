(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./src/lib/bitcoin.js":
/*!****************************!*\
  !*** ./src/lib/bitcoin.js ***!
  \****************************/
/*! exports provided: legacyAddress, bech32Address, segwitAddress, transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyAddress", function() { return legacyAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bech32Address", function() { return bech32Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segwitAddress", function() { return segwitAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/lib/website.js");
/* harmony import */ var blockchain_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blockchain.info */ "./node_modules/blockchain.info/index.js");
/* harmony import */ var blockchain_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockchain_info__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var legacyAddress = function legacyAddress(r, byte) {
  r.unshift(byte || window.coinjs.pub);
  var hash = Crypto.SHA256(Crypto.SHA256(r, {
    asBytes: true
  }), {
    asBytes: true
  });
  var checksum = hash.slice(0, 4);
  return window.coinjs.base58encode(r.concat(checksum));
};

var bech32Address = function bech32Address(pubkey) {
  var program = window.ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(pubkey), {
    asBytes: true
  }), {
    asBytes: true
  });
  var address = window.coinjs.bech32_encode(window.coinjs.bech32.hrp, [window.coinjs.bech32.version].concat(window.coinjs.bech32_convert(program, 8, 5, true)));
  return {
    'address': address,
    'type': 'bech32',
    'redeemscript': Crypto.util.bytesToHex(program)
  };
};

var segwitAddress = function segwitAddress(pubkey) {
  var keyhash = [0x00, 0x14].concat(window.ripemd160(Crypto.SHA256(Crypto.util.hexToBytes(pubkey), {
    asBytes: true
  }), {
    asBytes: true
  }));
  var x = window.ripemd160(Crypto.SHA256(keyhash, {
    asBytes: true
  }), {
    asBytes: true
  });
  x.unshift(window.coinjs.multisig);
  var r = x;
  r = Crypto.SHA256(Crypto.SHA256(r, {
    asBytes: true
  }), {
    asBytes: true
  });
  var checksum = r.slice(0, 4);
  var address = window.coinjs.base58encode(x.concat(checksum));
  return {
    'address': address,
    'type': 'segwit',
    'redeemscript': Crypto.util.bytesToHex(keyhash)
  };
}; // let transaction = ({privatekeyHex, network=bitcoinlib.networks.bitcoin, to , fees = 200000}, callback) => {
//     const keyPair = bitcoinlib.ECPair.fromPrivateKey(Buffer.from(privatekeyHex, 'hex'), { network })
//     const { address } = bitcoinlib.payments.p2pkh({ pubkey: keyPair.publicKey, network })
//     website.testnetQuery(address).then(({data: res})=>{
//         let txs = res.unspent_outputs
//         .map((v) => ({value: v.value, txid: v.tx_hash_big_endian, vout: v.tx_output_n}))
//         .sort((a, b) => a.value - b.value);
//         let amount = to.reduce((x,y)=>x + y.amount * 100000000, 0) + fees;
//         let tb = new bitcoinlib.TransactionBuilder(network);
//         let txAmount = 0, index = 0;
//         for(let tx of txs) {
//             txAmount += tx.value;
//             tb.addInput(tx.txid, tx.vout)
//             index++;
//             if(txAmount > amount) {
//                 tb.addOutput(address, txAmount - amount)
//                 break;
//             }
//         }
//         if (txAmount < amount) {
//             callback({error:'balance insufficient'})
//         } else {
//             to.forEach(({address, amount})=>{
//                 tb.addOutput(address, amount * 100000000)
//             })
//             for(let i = 0; i < index; i++){
//                 tb.sign(i, keyPair);
//             }
//             let pushtx3 = pushtx.usingNetwork(3);
//             let txstring=tb.build().toHex()
//             pushtx3.pushtx(txstring)
//             callback(txstring)
//         }
//     })
// }


var transaction = function transaction(privateKeyHex, network, segwit) {
  var _network, _keyPair, _address, _query, _pushtx, _fee, script;

  switch (network) {
    case 'testnet':
      _fee = 10000000;
      _pushtx = blockchain_info__WEBPACK_IMPORTED_MODULE_2__["pushtx"].usingNetwork(3);
      _query = _website__WEBPACK_IMPORTED_MODULE_1__["website"].testnetQuery;
      _network = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.networks.testnet;
      break;

    default:
      _fee = 100000;
      _pushtx = blockchain_info__WEBPACK_IMPORTED_MODULE_2__["pushtx"];
      _query = _website__WEBPACK_IMPORTED_MODULE_1__["website"].bitcoinQuery;
      _network = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.networks.bitcoin;
  }

  _keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.ECPair.fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
    network: _network
  });

  if (segwit) {
    var p2wpkh = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.payments.p2wpkh({
      pubkey: _keyPair.publicKey,
      network: _network
    });
    var p2sh = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.payments.p2sh({
      redeem: p2wpkh,
      network: _network
    });
    _address = p2sh.address;
    script = p2sh.redeem.output;
  } else {
    var p2pkh = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.payments.p2pkh({
      pubkey: _keyPair.publicKey,
      network: _network
    });
    _address = p2pkh.address;
  }

  return function (_ref, callback) {
    var to = _ref.to,
        _ref$fees = _ref.fees,
        fees = _ref$fees === void 0 ? _fee : _ref$fees;

    _query(_address).then(function (_ref2) {
      var res = _ref2.data;
      var txs = res.unspent_outputs.map(function (v) {
        return {
          value: v.value,
          txid: v.tx_hash_big_endian,
          vout: v.tx_output_n
        };
      }).sort(function (a, b) {
        return b.value - a.value;
      });
      var amount = to.reduce(function (x, y) {
        return x + y.amount * 100000000;
      }, 0) + fees;
      var tb = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0___default.a.TransactionBuilder(_network);
      var txAmount = 0,
          index = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = txs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _tx = _step.value;
          txAmount += _tx.value;
          tb.addInput(_tx.txid, _tx.vout);
          index++;

          if (txAmount > amount) {
            tb.addOutput(_address, txAmount - amount);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (txAmount < amount) {
        callback({
          error: 'balance insufficient'
        });
      } else {
        to.forEach(function (_ref3) {
          var address = _ref3.address,
              amount = _ref3.amount;
          tb.addOutput(address, amount * 100000000);
        });

        for (var i = 0; i < index; i++) {
          // tb.sign(i, _keyPair);
          tb.sign(i, _keyPair, script, null, script && txs[i].value);
        }

        var tx = tb.buildIncomplete();
        var txstring = tx.toHex();

        _pushtx.pushtx(txstring);

        callback(tx.getId());
      }
    });
  };
};


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(legacyAddress, "legacyAddress", "/Users/linyitang/Desktop/newWallet2/src/lib/bitcoin.js");
  reactHotLoader.register(bech32Address, "bech32Address", "/Users/linyitang/Desktop/newWallet2/src/lib/bitcoin.js");
  reactHotLoader.register(segwitAddress, "segwitAddress", "/Users/linyitang/Desktop/newWallet2/src/lib/bitcoin.js");
  reactHotLoader.register(transaction, "transaction", "/Users/linyitang/Desktop/newWallet2/src/lib/bitcoin.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/lib/website.js":
/*!****************************!*\
  !*** ./src/lib/website.js ***!
  \****************************/
/*! exports provided: website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "website", function() { return website; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var website = {
  testnetQuery: function testnetQuery(address) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/proxy/https://testnet.blockchain.info/unspent?active=".concat(address));
  },
  bitcoinQuery: function bitcoinQuery(address) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/proxy/https://blockchain.info/unspent?active=".concat(address));
  }
};

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(website, "website", "/Users/linyitang/Desktop/newWallet2/src/lib/website.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/bitcoin/general/transfer.jsx":
/*!***********************************************!*\
  !*** ./src/page/bitcoin/general/transfer.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transfer; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _lib_bitcoin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/bitcoin */ "./src/lib/bitcoin.js");
/* harmony import */ var _lib_website__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/website */ "./src/lib/website.js");
/* harmony import */ var _component_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../component/qrcode */ "./src/component/qrcode/index.jsx");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qrcode-react */ "./node_modules/qrcode-react/dist/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_10__);






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/general/transfer.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var Transfer = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('bitcoinStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Transfer, _Component);

  function Transfer(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Transfer);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Transfer).call(this, props));

    _this.submit = function () {
      Object(_lib_bitcoin__WEBPACK_IMPORTED_MODULE_7__["transaction"])(_this.props.bitcoinStore.privateKeyHex, _this.state.network, _this.state.segwit)({
        to: _this.state.to,
        fees: _this.state.fees * 100000000
      }, function (hex) {
        return alert("\u4EA4\u6613 ".concat(hex, " \u5DF2\u767C\u9001"));
      });
    };

    _this.state = {
      address: _this.props.bitcoinStore.testnetAddress,
      receiverNumber: 1,
      network: 'testnet',
      segwit: false,
      balance: 0,
      fees: 0.07,
      txs: [],
      to: [{}]
    };
    _lib_website__WEBPACK_IMPORTED_MODULE_8__["website"].testnetQuery(_this.props.bitcoinStore.testnetAddress).then(function (_ref) {
      var res = _ref.data;
      _this.state.balance = res.unspent_outputs.reduce(function (x, y) {
        return y.value + x;
      }, 0) / 100000000;

      _this.forceUpdate();
    });
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Transfer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u81EA\u5DF1\u9322\u5305\u7684QR Code")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_10___default.a, {
        size: 200,
        value: this.state.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u767C\u9001Bitcoin")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u6BD4\u7279\u5E63\u7DB2\u8DEF"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        onChange: function onChange(e) {
          _this2.state.address = [_this2.props.bitcoinStore.testnetAddress, _this2.props.bitcoinStore.testnetSegwitAddress, _this2.props.bitcoinStore.legacyAddress, _this2.props.bitcoinStore.segwitAddress][e.target.value]; // document.getElementById('qrcode').innerHTML = ''
          // new QRCodeMake(document.getElementById('qrcode'), this.state.address);

          _this2.forceUpdate();

          switch ((e.target.value | 1) <= 1) {
            case true:
              _this2.state.network = 'testnet';
              _this2.state.fees = 0.07;
              _lib_website__WEBPACK_IMPORTED_MODULE_8__["website"].testnetQuery(_this2.state.address).then(function (_ref2) {
                var res = _ref2.data;
                _this2.state.balance = res.unspent_outputs.map(function (v) {
                  return {
                    value: v.value / 100000000
                  };
                }).reduce(function (x, y) {
                  return y.value + x;
                }, 0);

                _this2.forceUpdate();
              }).catch(function () {
                _this2.setState({
                  balance: 0
                });
              });
              break;

            case false:
              _this2.state.network = 'mainnet';
              _this2.state.fees = 0.001;
              _lib_website__WEBPACK_IMPORTED_MODULE_8__["website"].bitcoinQuery(_this2.state.address).then(function (_ref3) {
                var res = _ref3.data;
                _this2.state.balance = res.unspent_outputs.map(function (v) {
                  return {
                    value: v.value / 100000000
                  };
                }).reduce(function (x, y) {
                  return y.value + x;
                }, 0);

                _this2.forceUpdate();
              }).catch(function () {
                _this2.setState({
                  balance: 0
                });
              });
              break;
          }

          _this2.state.segwit = e.target.value % 2 === 1;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "bitcoin testnet(legacy)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "bitcoin testnet(segwit)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "bitcoin(legacy)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "bitcoin(segwit)"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "\u767C\u9001\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Bitcoin Address",
        value: this.state.address,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
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
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\u4EA4\u6613\u8CBB(\u7926\u5DE5\u4EA4\u6613\u8CBB\u53EF\u81EA\u7531\u8ABF\u6574\uFF0C\u53EF\u53C3\u8003\u6B64", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://bitcoinfees.earn.com/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
            _this2.state.to[i] = {};
          }

          _this2.setState({
            receiverNumber: Number(e.target.value)
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), function () {
        var inputs = [];

        var _loop = function _loop(i) {
          inputs.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, "\u6536\u6B3E\u4EBA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_9__["QRcodeInput"], {
            placeholder: "Address",
            onChange: function onChange(e) {
              _this2.state.to[i].address = e.target.value;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
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
              lineNumber: 164
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
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "\u767C\u9001"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Transfer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Transfer, "Transfer", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/general/transfer.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=10.chunk.js.map