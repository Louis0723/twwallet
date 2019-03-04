(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/page/dapp/multiSignWallet/config.json":
/*!***************************************************!*\
  !*** ./src/page/dapp/multiSignWallet/config.json ***!
  \***************************************************/
/*! exports provided: ABI, contractAddress, bytecode, default */
/***/ (function(module) {

module.exports = {"ABI":[{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_lastDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"m_spentToday","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ownerIndex","type":"uint256"}],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"tokenAddress","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"tokenAddress","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"tokenAddress","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"}],"name":"ConfirmationNeeded","type":"event"}],"contractAddress":"","bytecode":"608060405234801561001057600080fd5b5060405161128938038061128983398101604090815281516020808401518385015192909401805160019081018155336003819055600090815261010290935293822093909355919291818484835b82518110156100e057828181518110151561007657fe5b60209081029091010151600160a060020a03166002828101610100811061009957fe5b018190555080600201610102600085848151811015156100b557fe5b6020908102909101810151600160a060020a031682528101919091526040016000205560010161005f565b50600055506101058190556100fc64010000000061014e810204565b6101075550600090505b8351811015610145578351339085908390811061011f57fe5b60209081029091010151600160a060020a0316141561013d57600080fd5b600101610106565b50505050610157565b62015180420490565b611123806101666000396000f3006080604052600436106100e55763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663173825d9811461012b5780634123cb6b1461014c57806352375093146101735780635c52c2f514610188578063659010e71461019d5780637065cb48146101b2578063746c9171146101d3578063797af627146101e8578063b20d30a914610214578063b75c7dc61461022c578063ba51a6df14610244578063c2cf73261461025c578063c41a360a14610280578063eafaddfd146102b4578063f00d4b5d146102de578063f1736d8614610305575b6000341115610129576040805133815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b005b34801561013757600080fd5b50610129600160a060020a036004351661031a565b34801561015857600080fd5b50610161610400565b60408051918252519081900360200190f35b34801561017f57600080fd5b50610161610406565b34801561019457600080fd5b5061012961040d565b3480156101a957600080fd5b50610161610443565b3480156101be57600080fd5b50610129600160a060020a036004351661044a565b3480156101df57600080fd5b50610161610531565b3480156101f457600080fd5b50610200600435610537565b604080519115158252519081900360200190f35b34801561022057600080fd5b50610129600435610736565b34801561023857600080fd5b50610129600435610769565b34801561025057600080fd5b50610129600435610801565b34801561026857600080fd5b50610200600435600160a060020a0360243516610880565b34801561028c57600080fd5b50610298600435610900565b60408051600160a060020a039092168252519081900360200190f35b3480156102c057600080fd5b50610161600160a060020a036004358116906024351660443561091d565b3480156102ea57600080fd5b50610129600160a060020a0360043581169060243516610b7e565b34801561031157600080fd5b50610161610c70565b6000803660405180838380828437820191505092505050604051809103902061034281610c77565b156103fb57600160a060020a03831660009081526101026020526040902054915081151561036f576103fb565b60018054036000541115610382576103fb565b6000600283610100811061039257fe5b0155600160a060020a038316600090815261010260205260408120556103b6610dc3565b6103be610e43565b60408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b505050565b60015481565b6101075481565b60003660405180838380828437820191505092505050604051809103902061043481610c77565b15610440576000610106555b50565b6101065481565b60003660405180838380828437820191505092505050604051809103902061047181610c77565b1561052d5761047f82610f59565b156104895761052d565b610491610dc3565b60015460fa116104a3576104a3610e43565b60015460fa116104b25761052d565b60018054810190819055600160a060020a0383169060029061010081106104d557fe5b0155600154600160a060020a03831660008181526101026020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a15b5050565b60005481565b60008161054381610c77565b156107305760008381526101086020526040902060010154600160a060020a0316156107305760008381526101086020526040902054600160a060020a031615156105dd576000838152610108602052604080822060018101546002909101549151600160a060020a039091169282156108fc02929190818181858888f193505050501580156105d7573d6000803e3d6000fd5b50610677565b600083815261010860205260408082208054600182015460029092015483517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a0393841660048201526024810191909152925191169263a9059cbb926044808201939182900301818387803b15801561065e57600080fd5b505af1158015610672573d6000803e3d6000fd5b505050505b60008381526101086020908152604091829020805460028201546001909201548451338152938401889052600160a060020a0391821684860152606084019290925216608082015290517f1c19c78b697b5c057708dba20daf1425a7bd06482181b24f58132f181513904b9181900360a00190a1600083815261010860205260408120805473ffffffffffffffffffffffffffffffffffffffff1990811682556001808301805490921690915560029091019190915591505b50919050565b60003660405180838380828437820191505092505050604051809103902061075d81610c77565b1561052d575061010555565b3360009081526101026020526040812054908082151561078857600080fd5b50506000828152610103602052604081206001810154600284900a9290831611156107fb57805460019081018255810180548390039055604080513381526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b60003660405180838380828437820191505092505050604051809103902061082881610c77565b1561052d5760015482111561083c5761052d565b6000829055610849610dc3565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b600061088a611079565b5060008381526101036020908152604080832081516060810183528154815260018201548185015260029091015481830152600160a060020a038616845261010290925282205490918115156108e357600093506108f7565b8160020a9050808360200151166000141593505b50505092915050565b6000600260018301610100811061091357fe5b015490505b919050565b600061092833610f59565b151561093357600080fd5b61093c82610f76565b15610a7a5760408051338152600160a060020a0380871660208301528183018590528516606082015290517f6bcff53555900da9f1c9f7d89243b4285d01ffc676668ba8fb3f015ea74c6a449181900360800190a1600160a060020a03841615156109dd57604051600160a060020a0384169083156108fc029084906000818181858888f193505050501580156109d7573d6000803e3d6000fd5b50610a72565b83600160a060020a031663a9059cbb84846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015610a5957600080fd5b505af1158015610a6d573d6000803e3d6000fd5b505050505b506000610b77565b60003643604051808484808284378201915050828152602001935050505060405180910390209050610aab81610537565b158015610ad1575060008181526101086020526040902060010154600160a060020a0316155b15610b7757600081815261010860209081526040918290208054600160a060020a0380891673ffffffffffffffffffffffffffffffffffffffff1992831681178455600184018054928a169290931682179092556002909201869055835185815233938101939093528284015260608201859052608082015290517f83bef736dfd3a4321fe9546ce8f0d4fc9931704f6a8c4f235ba6972a7a7650199181900360a00190a15b9392505050565b60008036604051808383808284378201915050925050506040518091039020610ba681610c77565b156107fb57610bb483610f59565b15610bbe57600080fd5b600160a060020a038416600090815261010260205260409020549150811515610be657600080fd5b610bee610dc3565b600160a060020a0383166002836101008110610c0657fe5b0155600160a060020a0380851660008181526101026020908152604080832083905593871680835291849020869055835192835282015281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a150505050565b6101055481565b33600090815261010260205260408120548180821515610c9657610dbb565b60008581526101036020526040902080549092501515610cf557600080548355600180840191909155610104805491610cd19190830161109b565b6002830181905561010480548792908110610ce857fe5b6000918252602090912001555b8260020a90508082600101541660001415610dbb57604080513381526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a18154600110610da8576000858152610103602052604090206002015461010480549091908110610d7157fe5b6000918252602080832090910182905586825261010390526040812081815560018082018390556002909101919091559350610dbb565b8154600019018255600182018054821790555b505050919050565b6101045460005b81811015610e3b57610108600061010483815481101515610de757fe5b600091825260208083209091015483528201929092526040018120805473ffffffffffffffffffffffffffffffffffffffff1990811682556001808301805490921690915560029091019190915501610dca565b61052d610fec565b60015b600154811015610440575b60015481108015610e7057506002816101008110610e6b57fe5b015415155b15610e7d57600101610e51565b60018054118015610e9e57506001546002906101008110610e9a57fe5b0154155b15610eb25760018054600019019055610e7d565b60015481108015610ed457506001546002906101008110610ecf57fe5b015415155b8015610eed57506002816101008110610ee957fe5b0154155b15610f54576001546002906101008110610f0357fe5b01546002826101008110610f1357fe5b01558061010260006002836101008110610f2957fe5b01548152602001908152602001600020819055506000600260015461010081101515610f5157fe5b01555b610e46565b600160a060020a0316600090815261010260205260408120541190565b6000610f8133610f59565b1515610f8c57600080fd5b61010754610f9861106f565b1115610fb157600061010655610fac61106f565b610107555b6101065482810110801590610fce57506101055482610106540111155b15610fe457506101068054820190556001610918565b506000919050565b6101045460005b818110156110625761010480548290811061100a57fe5b6000918252602090912001541561105a5761010360006101048381548110151561103057fe5b60009182526020808320909101548352820192909252604001812081815560018101829055600201555b600101610ff3565b61052d61010460006110bf565b6201518042045b90565b6060604051908101604052806000815260200160008152602001600081525090565b8154818355818111156103fb576000838152602090206103fb9181019083016110d9565b508054600082559060005260206000209081019061044091905b61107691905b808211156110f357600081556001016110df565b50905600a165627a7a72305820267e26c108e9c5cc5d3705ec13043d04932ca5dc98957d0f00152f809c4fe7ac0029"};

/***/ }),

/***/ "./src/page/dapp/multiSignWallet/manage.jsx":
/*!**************************************************!*\
  !*** ./src/page/dapp/multiSignWallet/manage.jsx ***!
  \**************************************************/
/*! exports provided: default, Manage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manage", function() { return Manage; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.json */ "./src/page/dapp/multiSignWallet/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/page/dapp/multiSignWallet/config.json", 1);





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/multiSignWallet/manage.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Manage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Manage, _Component);

  function Manage(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Manage);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Manage).call(this, props));

    _this.addOwner = function (e) {
      _this.EDInstance['addOwner'](_this.state.addOwner, function (e, r) {});
    };

    _this.removeOwner = function (e) {
      _this.EDInstance['removeOwner'](_this.state.removeOwner, function (e, r) {});
    };

    _this.changeRequirement = function (e) {
      _this.EDInstance['changeRequirement'](_this.state.changeRequirement, function (e, r) {});
    };

    _this.setTitle = function (e) {
      _this.EDInstance['setTitle'](_this.state.address, _this.state.title, function (e, r) {});
    };

    _this.setName = function (e) {
      _this.EDInstance['setName'](_this.state.name, function (e, r) {});
    };

    _this.state = {
      isOwner: false,
      addOwner: '',
      removeOwner: '',
      changeRequirement: '',
      name: '',
      title: ''
    };
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Manage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u589E\u52A0\u64C1\u6709\u8005")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Address",
        onChange: function onChange(e) {
          _this2.state.addOwner = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.addOwner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u9001\u51FA"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u522A\u9664\u64C1\u6709\u8005")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Address",
        onChange: function onChange(e) {
          _this2.state.removeOwner = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.removeOwner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u9001\u51FA"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u6539\u8B8A\u6838\u51C6\u6578")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Number",
        onChange: function onChange(e) {
          _this2.state.changeRequirement = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.changeRequirement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u9001\u51FA"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u8A2D\u5B9A\u982D\u929C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: "Address",
        onChange: function onChange(e) {
          _this2.state.address = e.target.value;

          _this2.EDInstance['peopleTitle'].call(_this2.state.address, function (e, r) {
            _this2.setState({
              title: r
            });
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        placeholder: this.state.title || 'Title',
        onChange: function onChange(e) {
          _this2.setState({
            title: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.setTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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

  return Manage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Manage, "Manage", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/multiSignWallet/manage.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=18.chunk.js.map