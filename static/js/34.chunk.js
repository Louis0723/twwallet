(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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

/***/ "./src/page/other/tool/abiToHumanReadable.jsx":
/*!****************************************************!*\
  !*** ./src/page/other/tool/abiToHumanReadable.jsx ***!
  \****************************************************/
/*! exports provided: default, AbiToHumanReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbiToHumanReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiToHumanReadable", function() { return AbiToHumanReadable; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contract_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contract/index */ "./src/contract/index.js");

var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/abiToHumanReadable.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



function AbiToHumanReadable() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      abi = _useState2[0],
      setAbi = _useState2[1];

  var hrabi = Object(_contract_index__WEBPACK_IMPORTED_MODULE_2__["toHumanReadable"])(abi);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      Rabi = _useState4[0],
      setRAbi = _useState4[1];

  var Rhrabi = Object(_contract_index__WEBPACK_IMPORTED_MODULE_2__["toAbi"])(Rabi);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box box-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box-header with-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "ABI \u4EBA\u985E\u53EF\u8B80\u683C\u5F0F\u8F49\u63DB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    placeholder: "ABI",
    rows: "20",
    onChange: function onChange(e) {
      try {
        setAbi(JSON.parse(e.target.value));
      } catch (e) {}
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    placeholder: "Human-Readable ABI",
    rows: "10",
    value: hrabi,
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box box-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box-header with-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "box-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "ABI \u4EBA\u985E\u53EF\u8B80\u683C\u5F0F\u8F49\u63DB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "box-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    placeholder: "Human-Readable ABI",
    rows: "20",
    onChange: function onChange(e) {
      try {
        setRAbi(JSON.parse(e.target.value));
      } catch (e) {}
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "form-control",
    placeholder: "ABI",
    rows: "10",
    value: Rhrabi,
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AbiToHumanReadable, "AbiToHumanReadable", "/Users/linyitang/Desktop/newWallet2/src/page/other/tool/abiToHumanReadable.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=34.chunk.js.map