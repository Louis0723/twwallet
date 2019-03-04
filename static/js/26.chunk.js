(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ "./src/page/dapp/game/1000guess.jsx":
/*!******************************************!*\
  !*** ./src/page/dapp/game/1000guess.jsx ***!
  \******************************************/
/*! exports provided: default, Guess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Guess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guess", function() { return Guess; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contract_config_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../contract/config.json */ "./src/contract/config.json");
var _contract_config_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contract/config.json */ "./src/contract/config.json", 1);
/* harmony import */ var _contract_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../contract/index */ "./src/contract/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_15__);











var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/game/1000guess.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var Guess = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Guess, _Component);

  function Guess(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Guess);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Guess).call(this, props));

    _this.componentWillMount = function () {
      _this.getInfo();

      _this.interval = setInterval(function () {
        _this.getInfo();

        _this.state.openHistory && _this.getHistory();
      }, 4000);
    };

    _this.componentWillUnmount = function () {
      clearInterval(_this.interval);
    };

    _this.getInfo =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _this$setState;

      var getBettingStatus, getBalance, getDeveloperAddress, getMaxContenders, getBettingPrice, getDeveloperFee, getLotteryMoney, state, _JSON$parse, _JSON$parse2, i;

      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getBettingStatus = _this.contract.getBettingStatus();
              _context.next = 3;
              return _this.contract.getBalance();

            case 3:
              getBalance = _context.sent;
              _context.next = 6;
              return _this.contract.getDeveloperAddress();

            case 6:
              getDeveloperAddress = _context.sent;
              getMaxContenders = _this.contract.getMaxContenders();
              getBettingPrice = _this.contract.getBettingPrice();
              getDeveloperFee = _this.contract.getDeveloperFee();
              getLotteryMoney = _this.contract.getLotteryMoney();
              state = _this.contract.state();
              _context.t0 = JSON;
              _context.t1 = JSON;
              _context.next = 16;
              return Promise.all([getBettingStatus, getBalance, getDeveloperAddress, getMaxContenders, getBettingPrice, getDeveloperFee, getLotteryMoney, state]);

            case 16:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1.stringify.call(_context.t1, _context.t2);
              _JSON$parse = _context.t0.parse.call(_context.t0, _context.t3);
              _JSON$parse2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_JSON$parse, 8);
              getBettingStatus = _JSON$parse2[0];
              getBalance = _JSON$parse2[1];
              getDeveloperAddress = _JSON$parse2[2];
              getMaxContenders = _JSON$parse2[3];
              getBettingPrice = _JSON$parse2[4];
              getDeveloperFee = _JSON$parse2[5];
              getLotteryMoney = _JSON$parse2[6];
              state = _JSON$parse2[7];
              getBalance = ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(getBalance);
              getDeveloperFee = ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(getDeveloperFee);
              getBettingPrice = ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(getBettingPrice);
              getLotteryMoney = ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(getLotteryMoney);

              for (i = 2; i <= 4; i++) {
                getBettingStatus[i] = ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(getBettingStatus[i]);
              }

              _this.setState((_this$setState = {
                getBettingStatus: getBettingStatus,
                getBalance: getBalance,
                getDeveloperAddress: getDeveloperAddress,
                getMaxContenders: getMaxContenders
              }, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$setState, "getMaxContenders", getMaxContenders), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$setState, "getBettingPrice", getBettingPrice), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$setState, "getDeveloperFee", getDeveloperFee), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$setState, "getLotteryMoney", getLotteryMoney), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$setState, "state", state), _this$setState));

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    _this.addguessBtn =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var signer, tx;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              signer = _this.contract.connect(_this.props.ethereumStore.wallet.connect(_this.provider));
              _context2.next = 3;
              return signer.addguess(_this.guess, {
                value: ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].parseEther(_this.state.getBettingPrice)
              });

            case 3:
              tx = _context2.sent;
              alert('txid: ' + tx.hash);
              _context2.next = 7;
              return tx.wait();

            case 7:
              _this.getInfo();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    _this.finishBtn =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var signer, tx;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              signer = _this.contract.connect(_this.props.ethereumStore.wallet.connect(_this.provider));
              _context3.next = 3;
              return signer.finish();

            case 3:
              tx = _context3.sent;
              alert('txid: ' + tx.hash);
              _context3.next = 7;
              return tx.wait();

            case 7:
              _this.getInfo();

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    _this.setBettingConditionBtn =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var signer, tx;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              signer = _this.contract.connect(_this.props.ethereumStore.wallet.connect(_this.provider));
              _context4.next = 3;
              return signer.setBettingCondition(_this.contenders, ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].parseEther(_this.bettingprice));

            case 3:
              tx = _context4.sent;
              alert('txid: ' + tx.hash);
              _context4.next = 7;
              return tx.wait();

            case 7:
              _this.getInfo();

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    _this.getHistory =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var SentPrizeToWinner, SentDeveloperFee, rows;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              SentPrizeToWinner = _contract_index__WEBPACK_IMPORTED_MODULE_14__["Event"].bind(_this.provider)(_this.contract, 'SentPrizeToWinner');
              SentDeveloperFee = _contract_index__WEBPACK_IMPORTED_MODULE_14__["Event"].bind(_this.provider)(_this.contract, 'SentDeveloperFee');
              _context5.next = 4;
              return SentPrizeToWinner;

            case 4:
              SentPrizeToWinner = _context5.sent;
              _context5.next = 7;
              return SentDeveloperFee;

            case 7:
              SentDeveloperFee = _context5.sent;
              SentPrizeToWinner = SentPrizeToWinner.map(function (v) {
                var _v = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(v, 6),
                    winner = _v[0],
                    money = _v[1],
                    guess = _v[2],
                    gameindex = _v[3],
                    lotterynumber = _v[4],
                    timestamp = _v[5];

                return {
                  winner: winner,
                  money: ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(money),
                  guess: guess,
                  gameindex: gameindex,
                  lotterynumber: lotterynumber,
                  timestamp: dayjs__WEBPACK_IMPORTED_MODULE_15___default()(timestamp * 1000).format('YYYY年MM月DD日 HH:mm:ss'),
                  transactionHash: v.transactionHash
                };
              });
              SentDeveloperFee = SentDeveloperFee.map(function (v) {
                var _v2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(v, 2),
                    amount = _v2[0],
                    balance = _v2[1];

                return {
                  amount: ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(amount),
                  balance: ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["utils"].formatEther(balance),
                  transactionHash: v.transactionHash
                };
              });
              rows = SentDeveloperFee.map(function (v) {
                var winners = SentPrizeToWinner.filter(function (x) {
                  return x.transactionHash == v.transactionHash;
                });
                return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, v, {
                  winners: winners
                });
              });
              rows = rows.reverse();

              _this.setState({
                history: JSON.parse(JSON.stringify(rows))
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    _this.state = {
      openHistory: false,
      history: [],
      getBettingPrice: '',
      getBettingStatus: []
    };
    _this.provider = _this.props.ethereumStore.provider;
    _this.contract = new ethers_index_js__WEBPACK_IMPORTED_MODULE_12__["Contract"](_contract_config_json__WEBPACK_IMPORTED_MODULE_13__["1000Guess"][3].contractAddress, _contract_config_json__WEBPACK_IMPORTED_MODULE_13__["1000Guess"].abi, _this.provider);
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Guess, [{
    key: "getHistoryReact",
    value: function getHistoryReact() {
      var rows = this.state.history.map(function (v, i) {
        var winners = v.winners.map(function (winner, i) {
          return [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: winner.guess,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, winner.guess), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: winner.lotterynumber,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, winner.lotterynumber), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: winner.money,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, winner.money), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: winner.timestamp,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, winner.timestamp), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
            key: winner.winner,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, winner.winner)];
        });
        var winner = winners.shift();
        winners = winners.map(function (winner) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
            key: winner.winner,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, winner);
        });
        return [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          rowSpan: v.winners.length || 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, i + 1), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          rowSpan: v.winners.length || 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, v.amount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          rowSpan: v.winners.length || 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, v.balance), v.winners.length ? winner : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          colSpan: v.winners.length ? 1 : 5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        })), winners];
      });
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "table table-bordered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "\u838A\u5BB6\u624B\u7E8C\u8CBB(ether)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "\u9918\u984D(ether)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "\u731C\u6E2C\u503C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "\u958B\u734E\u865F\u78BC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "\u8D0F\u5BB6\u6240\u7372\u5F97\u5F69\u91D1(ether)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "\u958B\u724C\u65E5\u671F"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "\u8D0F\u5BB6"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, rows));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var getBettingStatus = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "\u5408\u7D04\u72C0\u614B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, this.state.getBettingStatus[0])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "\u7D2F\u7A4D\u731C\u6E2C\u6B21\u6578"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, this.state.getBettingStatus[1])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "\u7D2F\u7A4D\u6A02\u900F\u6DE8\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, this.state.getBettingStatus[2])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "\u5408\u7D04\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, this.state.getBettingStatus[3])), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "\u6BCF\u6CE8\u91D1\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, this.state.getBettingStatus[4]))));
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "\u72C0\u614B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, this.state.state), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "\u5408\u7D04\u9918\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, this.state.getBalance)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "\u6700\u5927\u7AF6\u722D\u4EBA\u6578"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, this.state.getMaxContenders), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "\u7D2F\u7A4D\u6A02\u900F\u6DE8\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, this.state.getLotteryMoney)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "\u838A\u5BB6\u62BD\u982D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, this.state.getDeveloperFee), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "\u6295\u6CE8\u91D1\u984D"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, this.state.getBettingPrice)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "\u958B\u767C\u8005\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, this.state.getDeveloperAddress), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "\u6295\u6CE8\u72C0\u614B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, getBettingStatus)))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "\u4E0B\u6CE8")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "\u4E0B\u6CE8\u8CED\u91D1(\u53EA\u80FD\u4F9D\u53F3\u4E0A\u89D2\u4E4B\u6295\u6CE8\u91D1\u984D\u4E0B\u6CE8)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        value: this.state.getBettingPrice,
        onChange: function onChange() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "\u8F38\u5165\u731C\u6E2C\u503C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        onChange: function onChange(e) {
          _this2.guess = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, this.props.ethereumStore.address ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.addguessBtn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "\u9001\u51FA") : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "\u53F3\u4E0A\u89D2\u8ACB\u5148\u9032\u884C\u767B\u5165"))), this.props.ethereumStore.address === this.state.getDeveloperAddress && [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        key: "1",
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "\u958B\u724C\u8207\u6D3E\u5F69")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.finishBtn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "\u9001\u51FA")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        key: "2",
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\u8A2D\u7F6E")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "\u8A2D\u5B9A\u7AF6\u722D\u689D\u4EF6 \u7AF6\u722D\u4EBA\u6578"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        onChange: function onChange(e) {
          return _this2.contenders = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "\u6295\u6CE8\u50F9\u683C(eth)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        onChange: function onChange(e) {
          return _this2.bettingprice = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.setBettingConditionBtn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "\u8A2D\u5B9A")))], react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        key: "1",
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "\u6B77\u53F2\u7D00\u9304")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          _this2.state.openHistory || _this2.setState({
            openHistory: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "\u67E5\u8A62\u6B77\u53F2\u8CED\u5C40\u7D50\u679C"), this.getHistoryReact())));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Guess;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Guess, "Guess", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/game/1000guess.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=26.chunk.js.map