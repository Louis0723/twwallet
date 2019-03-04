(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

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

/***/ "./src/contract/index.js":
/*!*******************************!*\
  !*** ./src/contract/index.js ***!
  \*******************************/
/*! exports provided: default, toAbi, toHumanReadable, deployErc20Token, deployMutiWalletToken, erc20, Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAbi", function() { return toAbi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHumanReadable", function() { return toHumanReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployErc20Token", function() { return deployErc20Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deployMutiWalletToken", function() { return deployMutiWalletToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erc20", function() { return erc20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.json */ "./src/contract/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/contract/config.json", 1);





(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function toHumanReadable(abi) {
  if (!Array.isArray(abi)) {
    return;
  }

  abi = abi.filter(function (v) {
    return v.type !== 'fallback';
  });
  var hrabi = abi.map(function (v) {
    var type = v.type;
    var name = v.name ? ' ' + v.name : '';
    var inputs = v.inputs ? v.inputs.map(function (i) {
      return i.type + (i.indexed ? ' indexed' : '') + (i.name ? ' ' + i.name : '');
    }).join() : '';
    var stateMutability = v.stateMutability ? v.stateMutability !== "nonpayable" ? ' ' + v.stateMutability : '' : '';
    var returns = v.outputs ? v.outputs.length >= 0 ? " returns (".concat(v.outputs.map(function (i) {
      return i.type + (i.name ? ' ' + i.name : '');
    }).join(), ")") : '' : '';
    return "".concat(type).concat(name, "(").concat(inputs, ")").concat(stateMutability).concat(returns);
  });
  return JSON.stringify(hrabi, null, 2);
}

function toAbi(hrabi) {
  if (!Array.isArray(hrabi)) {
    return;
  }

  var abi = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["utils"].Interface(hrabi).abi.map(function (abi) {
    abi = JSON.parse(JSON.stringify(abi));
    delete abi.gas;

    if (abi.stateMutability === null) {
      delete abi.stateMutability;
    }

    return abi;
  });
  return JSON.stringify(abi, null, 2);
}

function erc20(tokenAddress, provider) {
  var contract = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["Contract"](tokenAddress, _config_json__WEBPACK_IMPORTED_MODULE_5__.erc20.abi, provider);
  return contract;
}

function deployErc20Token(_x, _x2, _x3, _x4) {
  return _deployErc20Token.apply(this, arguments);
}

function _deployErc20Token() {
  _deployErc20Token = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name, symbol, decimals, wallet) {
    var erc20, contract;
    return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            erc20 = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["ContractFactory"](_config_json__WEBPACK_IMPORTED_MODULE_5__.erc20.abi, _config_json__WEBPACK_IMPORTED_MODULE_5__.erc20.bytecode);
            erc20 = erc20.connect(wallet);
            _context.next = 4;
            return erc20.deploy(name, symbol, decimals);

          case 4:
            contract = _context.sent;
            return _context.abrupt("return", contract);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _deployErc20Token.apply(this, arguments);
}

function deployMutiWalletToken(_x5, _x6, _x7, _x8) {
  return _deployMutiWalletToken.apply(this, arguments);
}

function _deployMutiWalletToken() {
  _deployMutiWalletToken = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_owners, _required, _daylimit, wallet) {
    var mutiWallet, contract;
    return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mutiWallet = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["ContractFactory"](_config_json__WEBPACK_IMPORTED_MODULE_5__.mutiWallet.abi, _config_json__WEBPACK_IMPORTED_MODULE_5__.mutiWallet.bytecode);
            mutiWallet = mutiWallet.connect(wallet);
            _context2.next = 4;
            return mutiWallet.deploy(name, symbol, decimals);

          case 4:
            contract = _context2.sent;
            return _context2.abrupt("return", contract);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _deployMutiWalletToken.apply(this, arguments);
}

function Event(contract, eventName) {
  var _contract$filters;

  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fromBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var toBlock = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'latest';
  args = Array.isArray(args) ? args : [args];

  var event = (_contract$filters = contract.filters)[eventName].apply(_contract$filters, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(args));

  var abi = contract.interface.abi.find(function (v) {
    return v.name === eventName;
  }).inputs;

  var filter = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    fromBlock: fromBlock,
    toBlock: toBlock
  }, event);

  return this.getLogs(filter).then(function (result) {
    var coder = new ethers_index_js__WEBPACK_IMPORTED_MODULE_4__["utils"].AbiCoder();
    var abi1 = abi.filter(function (v) {
      return v.indexed;
    });
    var abi2 = abi.filter(function (v) {
      return !v.indexed;
    });
    var r = result.map(function (r) {
      r.topics.shift();
      var topics = r.topics.map(function (t, i) {
        return coder.decode([abi1[i]], t)[0];
      });
      var datas = coder.decode(abi2, r.data);

      var _r = abi.map(function (v) {
        return v.indexed ? topics.shift() : datas.shift();
      });

      _r.transactionHash = r.transactionHash;
      _r.blockNumber = Number(r.blockNumber);
      return _r;
    });
    return r;
  });
  return Promise.resolve(1);
}

var _default = {
  toAbi: toAbi,
  toHumanReadable: toHumanReadable,
  deployErc20Token: deployErc20Token,
  deployMutiWalletToken: deployMutiWalletToken,
  erc20: erc20,
  Event: Event
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(toHumanReadable, "toHumanReadable", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(toAbi, "toAbi", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(erc20, "erc20", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(deployErc20Token, "deployErc20Token", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(deployMutiWalletToken, "deployMutiWalletToken", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(Event, "Event", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/contract/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/ethereum/general/tokenTransfer.jsx":
/*!*****************************************************!*\
  !*** ./src/page/ethereum/general/tokenTransfer.jsx ***!
  \*****************************************************/
/*! exports provided: default, TokenTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TokenTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenTransfer", function() { return TokenTransfer; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _component_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../component/qrcode */ "./src/component/qrcode/index.jsx");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qrcode-react */ "./node_modules/qrcode-react/dist/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../contract */ "./src/contract/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_15__);









var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/tokenTransfer.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









var TokenTransfer = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(TokenTransfer, _Component);

  function TokenTransfer(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, TokenTransfer);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(TokenTransfer).call(this, props));

    _this.onSearch = function (value) {
      if (/^0x[0-9a-f]{40}$/ig.test(value)) {
        _this.subject.next(value);
      }
    };

    _this.componentWillMount = function () {
      _this.subject = _this.subject.subscribe({
        next: function () {
          var _next = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
            var contract, _ref, _ref2, _symbol, _decimals, balance;

            return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    // console.log(value)
                    contract = Object(_contract__WEBPACK_IMPORTED_MODULE_14__["erc20"])(value, _this.props.ethereumStore.provider);
                    _context.next = 4;
                    return Promise.all([contract.symbol(), contract.decimals(), contract.balanceOf(_this.props.ethereumStore.address)]);

                  case 4:
                    _ref = _context.sent;
                    _ref2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 3);
                    _symbol = _ref2[0];
                    _decimals = _ref2[1];
                    balance = _ref2[2];
                    // console.log(contract, symbol, decimals, balance)
                    _this.state.token = value;
                    console.log(_this.state);
                    _this.state.balance = balance.toString() / Math.pow(10, _decimals);
                    _this.state.decimals = _decimals;
                    _this.state.symbol = _symbol;

                    _this.forceUpdate();

                    _context.next = 19;
                    break;

                  case 17:
                    _context.prev = 17;
                    _context.t0 = _context["catch"](0);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 17]]);
          }));

          function next(_x) {
            return _next.apply(this, arguments);
          }

          return next;
        }()
      });

      _this.onSearch(_this.state.token);
    };

    _this.submit =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var contract, tx;
        return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contract = Object(_contract__WEBPACK_IMPORTED_MODULE_14__["erc20"])(_this.state.token, _this.props.ethereumStore.provider);
                contract = contract.connect(_this.props.ethereumStore.wallet.connect(_this.props.ethereumStore.provider));
                console.log(contract);
                _context2.next = 5;
                return contract.transfer(_this.target, new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(_this.amount).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(10).pow(_this.state.decimals)).toString());

              case 5:
                tx = _context2.sent;
                alert('txid: ' + tx.hash);
                _context2.next = 9;
                return tx.wait();

              case 9:
                _this.onSearch(_this.state.address);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.state = {
      address: props.ethereumStore.address || '0x'.padEnd(42, '0'),
      symbol: 'Token',
      decimals: '0',
      token: '0x0',
      balance: 0
    };
    _this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TokenTransfer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.state = {
        address: props.ethereumStore.address || '0x'.padEnd(42, '0'),
        symbol: symbol,
        decimals: decimals,
        token: '0x0',
        balance: 0
      };
      this.onSearch(this.state.token);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('render', this.state);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u81EA\u5DF1\u9322\u5305\u7684QR Code")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: 200,
        key: this.props.ethereumStore.address,
        value: this.props.ethereumStore.address,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Token\u8F49\u5E33")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u7576\u524D\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        value: this.props.ethereumStore.address,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Token\u9078\u64C7"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRcodeInput"], {
        placeholder: "0x",
        onChange: function onChange(e) {
          _this2.onSearch(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, this.state.symbol, "\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control",
        value: this.state.balance,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "qrcodefile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u6536\u6B3E\u4EBA\u5730\u5740(\u6383\u63CF\u6216\u8F38\u5165\u5C0D\u65B9QRCode)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRcodeInput"], {
        placeholder: "0x",
        onChange: function onChange(e) {
          _this2.target = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.symbol), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        defaultValue: '0',
        onChange: function onChange(e) {
          _this2.amount = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u9001\u51FA")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TokenTransfer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TokenTransfer, "TokenTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/tokenTransfer.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=16.chunk.js.map