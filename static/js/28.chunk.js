(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./src/page/dapp/voting/createProject.jsx":
/*!************************************************!*\
  !*** ./src/page/dapp/voting/createProject.jsx ***!
  \************************************************/
/*! exports provided: default, CreateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProject", function() { return CreateProject; });
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _contract_config_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../contract/config.json */ "./src/contract/config.json");
var _contract_config_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../contract/config.json */ "./src/contract/config.json", 1);
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_10__);








var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/voting/createProject.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var CreateProject = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CreateProject, _Component);

  function CreateProject(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CreateProject);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateProject).call(this, props));
    _this.submit =
    /*#__PURE__*/
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var signer, tx;
      return _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              signer = _this.contract.connect(_this.props.ethereumStore.wallet.connect(_this.provider));
              _context.next = 3;
              return signer.init(_this.state.title, _this.state.candidates);

            case 3:
              tx = _context.sent;
              alert('txid: ' + tx.hash);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    _this.state = {
      title: '',
      number: 1,
      candidates: []
    };
    _this.provider = _this.props.ethereumStore.provider;
    _this.contract = new ethers_index_js__WEBPACK_IMPORTED_MODULE_10__["Contract"](_contract_config_json__WEBPACK_IMPORTED_MODULE_9__.voting[3].contractAddress, _contract_config_json__WEBPACK_IMPORTED_MODULE_9__.voting.abi, _this.provider);
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateProject, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var candidates = [];

      var _loop = function _loop(i) {
        candidates.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "form-group",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          className: "control-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "\u5019\u9078\u540D\u7A31", i + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "form-control",
          type: "name",
          value: _this2.state.candidates[i],
          onChange: function onChange(e) {
            _this2.state.candidates[i] = e.target.value;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        })));
      };

      for (var i = this.state.number; i-- > 0;) {
        _loop(i);
      }

      candidates.reverse();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-xs-6 col-md-4 col-lg-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u5EFA\u7ACB\u6295\u7968"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u6295\u7968\u62AC\u982D"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        value: this.state.title,
        onChange: function onChange(e) {
          _this2.state.title = e.target.value;

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u5019\u9078\u6578\u91CF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        value: this.state.number,
        onChange: function onChange(e) {
          _this2.state.number = e.target.value;
          _this2.state.candidates.length = Number(_this2.state.number);

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), candidates), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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

  return CreateProject;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CreateProject, "CreateProject", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/voting/createProject.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=28.chunk.js.map