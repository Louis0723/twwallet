(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./src/page/dapp/electronicDocument/fileReader.jsx":
/*!*********************************************************!*\
  !*** ./src/page/dapp/electronicDocument/fileReader.jsx ***!
  \*********************************************************/
/*! exports provided: default, FileReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReader", function() { return FileReader; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/electronicDocument/fileReader.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var FileReader =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FileReader, _Component);

  function FileReader(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FileReader);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FileReader).call(this, props));

    _this.getFile = function (e) {
      var reader = new window.FileReader();
      var target = e.target;
      var file = target.files[0];

      if (target.files.length === 0) {
        return;
      }

      if (file.size / 1024 / 1024 < 50) {
        reader.onprogress = function (_ref) {
          var loaded = _ref.loaded,
              total = _ref.total;

          _this.setState({
            hash: Math.round(loaded / total * 10000) / 100,
            data: ''
          });
        };

        reader.onload = function (e) {
          var sha256 = '0x' + ethereumjs_util__WEBPACK_IMPORTED_MODULE_7___default.a.sha256(reader.result).toString('hex');

          _this.setState({
            hash: 'sha256: ' + sha256,
            data: reader.result,
            type: file.type
          });

          _this.props.onLoaded(sha256);
        };
      } else {
        _this.setState({
          hash: 'file size too big',
          data: ''
        });
      }

      if (file.type.indexOf('text') >= 0) {
        reader.readAsText(file);
      } else {
        reader.readAsDataURL(file);
      }

      _this.setState({
        type: '',
        data: ''
      });
    };

    _this.state = {
      data: '',
      type: '',
      hash: ''
    };
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FileReader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var view;
      var type = this.state.type;

      if (type.indexOf('image') >= 0) {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          style: {
            maxWidth: "100%",
            maxHeight: "600px"
          },
          src: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      } else if (type.indexOf('audio') >= 0) {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("audio", {
          controls: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
          src: this.state.data,
          type: type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), "\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u6301  ", type, " \u3002");
      } else if (type.indexOf('video') >= 0) {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
          controls: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
          src: this.state.data,
          type: type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), "\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u6301 ", type, " \u3002");
      } else if (type.indexOf('markdown') >= 0) {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
          source: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        });
      } else if (type.indexOf('text') >= 0) {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, this.state.data);
      } else if (type !== '') {
        view = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "\u7121\u6CD5\u8655\u7406\u6A94\u6848");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u5167\u5BB9\u986F\u793A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "SHA256",
        value: this.state.hash,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "input-group-addon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-folder-open-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "file",
        style: {
          "display": "none"
        },
        onChange: function onChange(e) {
          _this2.getFile(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))), view), this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FileReader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FileReader, "FileReader", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/electronicDocument/fileReader.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/dapp/electronicDocument/sign.jsx":
/*!***************************************************!*\
  !*** ./src/page/dapp/electronicDocument/sign.jsx ***!
  \***************************************************/
/*! exports provided: default, Sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sign", function() { return Sign; });
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
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qrcode-react */ "./node_modules/qrcode-react/dist/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fileReader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fileReader */ "./src/page/dapp/electronicDocument/fileReader.jsx");
/* harmony import */ var _contract_config_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../contract/config.json */ "./src/contract/config.json");
var _contract_config_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contract/config.json */ "./src/contract/config.json", 1);
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contract_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../contract/index */ "./src/contract/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");








var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/electronicDocument/sign.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var Sign = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_13__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_13__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Sign, _Component);

  function Sign(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Sign);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Sign).call(this, props));
    _this.getConfirmState =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var name, hasConfirmed, confirmText;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.contract.peopleName(_this.props.ethereumStore.address);

            case 2:
              name = _context3.sent;
              hasConfirmed = false;
              _context3.next = 6;
              return _contract_index__WEBPACK_IMPORTED_MODULE_12__["Event"].bind(_this.provider)(_this.contract, 'Approver', [_this.props.ethereumStore.address, _this.state.hash]);

            case 6:
              if (!_context3.sent.length) {
                _context3.next = 8;
                break;
              }

              hasConfirmed = true;

            case 8:
              confirmText = 'No Set Name';
              console.log('test');

              if (name) {
                confirmText = 'Confirm';

                if (hasConfirmed) {
                  confirmText = 'Confirmed';
                }
              }

              _this.setState({
                name: name,
                hasConfirmed: hasConfirmed,
                confirmText: confirmText,
                hash: _this.state.hash
              });

              setTimeout(
              /*#__PURE__*/
              Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
              /*#__PURE__*/
              _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                var r;
                return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _contract_index__WEBPACK_IMPORTED_MODULE_12__["Event"].bind(_this.provider)(_this.contract, 'DocumentApproved', [_this.state.hash]);

                      case 2:
                        r = _context2.sent;
                        r = r.map(
                        /*#__PURE__*/
                        function () {
                          var _ref3 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                          /*#__PURE__*/
                          _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(v) {
                            var userAddress, name;
                            return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    userAddress = v[1];
                                    _context.next = 3;
                                    return _this.contract.peopleName(userAddress);

                                  case 3:
                                    name = _context.sent;
                                    return _context.abrupt("return", {
                                      name: name,
                                      transactionHash: v.transactionHash,
                                      blockNumber: v.blockNumber
                                    });

                                  case 5:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));

                          return function (_x) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                        Promise.all(r).then(function (r) {
                          _this.setState({
                            approvers: r
                          });
                        });

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              })));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    _this.onLoaded = function (hash) {
      _this.state.hash = hash;

      _this.getConfirmState();
    };

    _this.confirm =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var signer, tx;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              signer = _this.contract.connect(_this.props.ethereumStore.wallet.connect(_this.provider));
              _context5.next = 3;
              return _contract_index__WEBPACK_IMPORTED_MODULE_12__["Event"].bind(_this.provider)(_this.contract, 'NewDocument', _this.state.hash);

            case 3:
              if (!_context5.sent.length) {
                _context5.next = 9;
                break;
              }

              _context5.next = 6;
              return signer.documentApproved(_this.state.hash);

            case 6:
              tx = _context5.sent;
              _context5.next = 13;
              break;

            case 9:
              console.log(signer);
              _context5.next = 12;
              return signer.newDocument(_this.state.hash, []);

            case 12:
              tx = _context5.sent;

            case 13:
              alert('txid: ' + tx.hash);
              setTimeout(
              /*#__PURE__*/
              Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
              /*#__PURE__*/
              _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return tx.wait();

                      case 2:
                        _this.getConfirmState();

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              })));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    console.log(_this.props.ethereumStore);
    _this.state = {
      confirmText: 'Choose File',
      name: '',
      hash: '',
      isExist: '',
      hasConfirmed: true,
      approvers: []
    };
    _this.provider = _this.props.ethereumStore.provider;
    _this.contract = new ethers_index_js__WEBPACK_IMPORTED_MODULE_11__["Contract"](_contract_config_json__WEBPACK_IMPORTED_MODULE_10__.edoc[3].contractAddress, _contract_config_json__WEBPACK_IMPORTED_MODULE_10__.edoc.abi, _this.provider);
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Sign, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {
      this.state.hash && this.getConfirmState();
    }
  }, {
    key: "render",
    value: function render() {
      var approvers = this.state.approvers.map(function (v, i) {
        var link = "https://ropsten.etherscan.io/tx/".concat(v.transactionHash);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: v.transactionHash,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, i), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, v.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
          size: 150,
          value: link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, v.blockNumber));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.props.ethereumStore.address), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fileReader__WEBPACK_IMPORTED_MODULE_9__["FileReader"], {
        onLoaded: this.onLoaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: this.state.hasConfirmed || !this.state.name,
        onClick: this.confirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-pencil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.confirmText)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u7C3D\u7F72\u8005")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "table table-striped",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        style: {
          "width": "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "\u7C3D\u7F72\u8005"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Txid"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Block")), approvers)))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Sign;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sign, "Sign", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/electronicDocument/sign.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=20.chunk.js.map