(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/component/qrcode/camera.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/qrcode/camera.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".camera {\n  position: fixed !important;\n  width: 500px;\n  top: 50% !important;\n  left: 50% !important;\n  z-index: 9999 !important;\n  -webkit-transform:translate(-50%,-80%);\n          transform:translate(-50%,-80%);\n}\n@media (max-width: 600px){\n  .camera {\n    width: 100%;\n  }\n}", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ "./src/layout/index.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page */ "./src/page/index.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/App.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;




var App = (_dec = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_6__["hot"])(module), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrapper",
        style: {
          "height": "auto",
          "minHeight": "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Sidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["BitcoinRoute"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["EthereumRoute"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["Dapp"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["ColdWalletRoute"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["WelcomeRoute"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_page__WEBPACK_IMPORTED_MODULE_8__["OtherRoute"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Setting"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/linyitang/Desktop/newWallet2/src/App.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/component/password/index.js":
/*!*****************************************!*\
  !*** ./src/component/password/index.js ***!
  \*****************************************/
/*! exports provided: default, InputPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPassword", function() { return InputPassword; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/component/password/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function InputPassword(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      eyesopen = _useState2[0],
      setEyes = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: eyesopen ? 'text' : 'password',
    className: "form-control",
    inputMode: "numeric",
    placeholder: "Password",
    defaultValue: props ? props.value : '',
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "input-group-addon",
    onClick: function onClick() {
      return setEyes(!eyesopen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: 'fa fa-eye' + (eyesopen ? '' : '-slash'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputPassword, "InputPassword", "/Users/linyitang/Desktop/newWallet2/src/component/password/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/component/qrcode/camera.css":
/*!*****************************************!*\
  !*** ./src/component/qrcode/camera.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./camera.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/component/qrcode/camera.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./camera.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/component/qrcode/camera.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./camera.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/component/qrcode/camera.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/qrcode/qrcode.js":
/*!****************************************!*\
  !*** ./src/component/qrcode/qrcode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/* Packed with Google Closure
*
* Ported to JavaScript by Lazar Laszlo 2011 
* lazarsoft@gmail.com, www.lazarsoft.info
*
* Copyright 2007 ZXing authors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qrcode = function () {
  "use strict";

  function a(h, b) {
    this.count = h;
    this.dataCodewords = b;

    this.__defineGetter__("Count", function () {
      return this.count;
    });

    this.__defineGetter__("DataCodewords", function () {
      return this.dataCodewords;
    });
  }

  function f(h, b, e) {
    this.ecCodewordsPerBlock = h;
    this.ecBlocks = e ? [b, e] : Array(b);

    this.__defineGetter__("ECCodewordsPerBlock", function () {
      return this.ecCodewordsPerBlock;
    });

    this.__defineGetter__("TotalECCodewords", function () {
      return this.ecCodewordsPerBlock * this.NumBlocks;
    });

    this.__defineGetter__("NumBlocks", function () {
      for (var d = 0, c = 0; c < this.ecBlocks.length; c++) {
        d += this.ecBlocks[c].length;
      }

      return d;
    });

    this.getECBlocks = function () {
      return this.ecBlocks;
    };
  }

  function k(h, b, e, d, c, a) {
    this.versionNumber = h;
    this.alignmentPatternCenters = b;
    this.ecBlocks = [e, d, c, a];
    h = 0;
    b = e.ECCodewordsPerBlock;
    e = e.getECBlocks();

    for (d = 0; d < e.length; d++) {
      c = e[d], h += c.Count * (c.DataCodewords + b);
    }

    this.totalCodewords = h;

    this.__defineGetter__("VersionNumber", function () {
      return this.versionNumber;
    });

    this.__defineGetter__("AlignmentPatternCenters", function () {
      return this.alignmentPatternCenters;
    });

    this.__defineGetter__("TotalCodewords", function () {
      return this.totalCodewords;
    });

    this.__defineGetter__("DimensionForVersion", function () {
      return 17 + 4 * this.versionNumber;
    });

    this.buildFunctionPattern = function () {
      var d = this.DimensionForVersion,
          c = new I(d);
      c.setRegion(0, 0, 9, 9);
      c.setRegion(d - 8, 0, 8, 9);
      c.setRegion(0, d - 8, 9, 8);

      for (var e = this.alignmentPatternCenters.length, b = 0; b < e; b++) {
        for (var a = this.alignmentPatternCenters[b] - 2, h = 0; h < e; h++) {
          0 == b && (0 == h || h == e - 1) || b == e - 1 && 0 == h || c.setRegion(this.alignmentPatternCenters[h] - 2, a, 5, 5);
        }
      }

      c.setRegion(6, 9, 1, d - 17);
      c.setRegion(9, 6, d - 17, 1);
      6 < this.versionNumber && (c.setRegion(d - 11, 0, 3, 6), c.setRegion(0, d - 11, 6, 3));
      return c;
    };

    this.getECBlocksForLevel = function (c) {
      return this.ecBlocks[c.ordinal()];
    };
  }

  function z(h, b, e, d, c, a, l, m, f) {
    this.a11 = h;
    this.a12 = d;
    this.a13 = l;
    this.a21 = b;
    this.a22 = c;
    this.a23 = m;
    this.a31 = e;
    this.a32 = a;
    this.a33 = f;

    this.transformPoints1 = function (c) {
      for (var d = c.length, e = this.a11, b = this.a12, h = this.a13, a = this.a21, l = this.a22, p = this.a23, m = this.a31, f = this.a32, g = this.a33, y = 0; y < d; y += 2) {
        var q = c[y],
            k = c[y + 1],
            n = h * q + p * k + g;
        c[y] = (e * q + a * k + m) / n;
        c[y + 1] = (b * q + l * k + f) / n;
      }
    };

    this.transformPoints2 = function (c, d) {
      for (var e = c.length, b = 0; b < e; b++) {
        var h = c[b],
            a = d[b],
            l = this.a13 * h + this.a23 * a + this.a33;
        c[b] = (this.a11 * h + this.a21 * a + this.a31) / l;
        d[b] = (this.a12 * h + this.a22 * a + this.a32) / l;
      }
    };

    this.buildAdjoint = function () {
      return new z(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    };

    this.times = function (c) {
      return new z(this.a11 * c.a11 + this.a21 * c.a12 + this.a31 * c.a13, this.a11 * c.a21 + this.a21 * c.a22 + this.a31 * c.a23, this.a11 * c.a31 + this.a21 * c.a32 + this.a31 * c.a33, this.a12 * c.a11 + this.a22 * c.a12 + this.a32 * c.a13, this.a12 * c.a21 + this.a22 * c.a22 + this.a32 * c.a23, this.a12 * c.a31 + this.a22 * c.a32 + this.a32 * c.a33, this.a13 * c.a11 + this.a23 * c.a12 + this.a33 * c.a13, this.a13 * c.a21 + this.a23 * c.a22 + this.a33 * c.a23, this.a13 * c.a31 + this.a23 * c.a32 + this.a33 * c.a33);
    };
  }

  function P(h, b) {
    this.bits = h;
    this.points = b;
  }

  function Q(h) {
    this.image = h;
    this.resultPointCallback = null;

    this.sizeOfBlackWhiteBlackRun = function (b, e, d, c) {
      var h = Math.abs(c - e) > Math.abs(d - b);

      if (h) {
        var a = b;
        b = e;
        e = a;
        a = d;
        d = c;
        c = a;
      }

      for (var m = Math.abs(d - b), f = Math.abs(c - e), q = -m >> 1, k = e < c ? 1 : -1, x = b < d ? 1 : -1, v = 0, t = b, a = e; t != d; t += x) {
        var J = h ? a : t,
            n = h ? t : a;
        1 == v ? this.image[J + n * g.width] && v++ : this.image[J + n * g.width] || v++;
        if (3 == v) return c = t - b, e = a - e, Math.sqrt(c * c + e * e);
        q += f;

        if (0 < q) {
          if (a == c) break;
          a += k;
          q -= m;
        }
      }

      b = d - b;
      e = c - e;
      return Math.sqrt(b * b + e * e);
    };

    this.sizeOfBlackWhiteBlackRunBothWays = function (b, e, d, c) {
      var a = this.sizeOfBlackWhiteBlackRun(b, e, d, c),
          h = 1;
      d = b - (d - b);
      0 > d ? (h = b / (b - d), d = 0) : d >= g.width && (h = (g.width - 1 - b) / (d - b), d = g.width - 1);
      c = Math.floor(e - (c - e) * h);
      h = 1;
      0 > c ? (h = e / (e - c), c = 0) : c >= g.height && (h = (g.height - 1 - e) / (c - e), c = g.height - 1);
      d = Math.floor(b + (d - b) * h);
      a += this.sizeOfBlackWhiteBlackRun(b, e, d, c);
      return a - 1;
    };

    this.calculateModuleSizeOneWay = function (b, e) {
      var d = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(b.X), Math.floor(b.Y), Math.floor(e.X), Math.floor(e.Y)),
          c = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.X), Math.floor(e.Y), Math.floor(b.X), Math.floor(b.Y));
      return isNaN(d) ? c / 7 : isNaN(c) ? d / 7 : (d + c) / 14;
    };

    this.calculateModuleSize = function (b, e, d) {
      return (this.calculateModuleSizeOneWay(b, e) + this.calculateModuleSizeOneWay(b, d)) / 2;
    };

    this.distance = function (b, e) {
      var d = b.X - e.X,
          c = b.Y - e.Y;
      return Math.sqrt(d * d + c * c);
    };

    this.computeDimension = function (b, e, d, c) {
      e = Math.round(this.distance(b, e) / c);
      b = Math.round(this.distance(b, d) / c);
      b = (e + b >> 1) + 7;

      switch (b & 3) {
        case 0:
          b++;
          break;

        case 2:
          b--;
          break;

        case 3:
          throw "Error";
      }

      return b;
    };

    this.findAlignmentInRegion = function (b, e, d, c) {
      c = Math.floor(c * b);
      var h = Math.max(0, e - c);
      e = Math.min(g.width - 1, e + c);
      if (e - h < 3 * b) throw "Error";
      var a = Math.max(0, d - c);
      return new R(this.image, h, a, e - h, Math.min(g.height - 1, d + c) - a, b, this.resultPointCallback).find();
    };

    this.createTransform = function (b, e, d, c, h) {
      h -= 3.5;
      var a;

      if (null != c) {
        var p = c.X;
        c = c.Y;
        var f = a = h - 3;
      } else p = e.X - b.X + d.X, c = e.Y - b.Y + d.Y, f = a = h;

      return z.quadrilateralToQuadrilateral(3.5, 3.5, h, 3.5, f, a, 3.5, h, b.X, b.Y, e.X, e.Y, p, c, d.X, d.Y);
    };

    this.sampleGrid = function (b, e, d) {
      return F.sampleGrid3(b, d, e);
    };

    this.processFinderPatternInfo = function (b) {
      var e = b.TopLeft,
          d = b.TopRight;
      b = b.BottomLeft;
      var c = this.calculateModuleSize(e, d, b);
      if (1 > c) throw "Error";
      var h = this.computeDimension(e, d, b, c),
          a = k.getProvisionalVersionForDimension(h),
          m = a.DimensionForVersion - 7,
          f = null;
      if (0 < a.AlignmentPatternCenters.length) for (a = 1 - 3 / m, f = Math.floor(e.X + a * (d.X - e.X + b.X - e.X)), a = Math.floor(e.Y + a * (d.Y - e.Y + b.Y - e.Y));;) {
        f = this.findAlignmentInRegion(c, f, a, 4);
        break;
      }
      c = this.createTransform(e, d, b, f, h);
      h = this.sampleGrid(this.image, c, h);
      return new P(h, null == f ? [b, e, d] : [b, e, d, f]);
    };

    this.detect = function () {
      var b = new S().findFinderPattern(this.image);
      return this.processFinderPatternInfo(b);
    };
  }

  function r(h) {
    this.errorCorrectionLevel = C.forBits(h >> 3 & 3);
    this.dataMask = h & 7;

    this.__defineGetter__("ErrorCorrectionLevel", function () {
      return this.errorCorrectionLevel;
    });

    this.__defineGetter__("DataMask", function () {
      return this.dataMask;
    });

    this.GetHashCode = function () {
      return this.errorCorrectionLevel.ordinal() << 3 | this.dataMask;
    };

    this.Equals = function (b) {
      return this.errorCorrectionLevel == b.errorCorrectionLevel && this.dataMask == b.dataMask;
    };
  }

  function C(h, b, e) {
    this.ordinal_Renamed_Field = h;
    this.bits = b;
    this.name = e;

    this.__defineGetter__("Bits", function () {
      return this.bits;
    });

    this.__defineGetter__("Name", function () {
      return this.name;
    });

    this.ordinal = function () {
      return this.ordinal_Renamed_Field;
    };
  }

  function I(h, b) {
    b || (b = h);
    if (1 > h || 1 > b) throw "Both dimensions must be greater than 0";
    this.width = h;
    this.height = b;
    var e = h >> 5;
    0 != (h & 31) && e++;
    this.rowSize = e;
    this.bits = Array(e * b);

    for (e = 0; e < this.bits.length; e++) {
      this.bits[e] = 0;
    }

    this.__defineGetter__("Width", function () {
      return this.width;
    });

    this.__defineGetter__("Height", function () {
      return this.height;
    });

    this.__defineGetter__("Dimension", function () {
      if (this.width != this.height) throw "Can't call getDimension() on a non-square matrix";
      return this.width;
    });

    this.get_Renamed = function (d, c) {
      return 0 != (u(this.bits[c * this.rowSize + (d >> 5)], d & 31) & 1);
    };

    this.set_Renamed = function (d, c) {
      this.bits[c * this.rowSize + (d >> 5)] |= 1 << (d & 31);
    };

    this.flip = function (d, c) {
      this.bits[c * this.rowSize + (d >> 5)] ^= 1 << (d & 31);
    };

    this.clear = function () {
      for (var d = this.bits.length, c = 0; c < d; c++) {
        this.bits[c] = 0;
      }
    };

    this.setRegion = function (d, c, e, b) {
      if (0 > c || 0 > d) throw "Left and top must be nonnegative";
      if (1 > b || 1 > e) throw "Height and width must be at least 1";
      e = d + e;
      b = c + b;
      if (b > this.height || e > this.width) throw "The region must fit inside the matrix";

      for (; c < b; c++) {
        for (var h = c * this.rowSize, a = d; a < e; a++) {
          this.bits[h + (a >> 5)] |= 1 << (a & 31);
        }
      }
    };
  }

  function G(a, b) {
    this.numDataCodewords = a;
    this.codewords = b;

    this.__defineGetter__("NumDataCodewords", function () {
      return this.numDataCodewords;
    });

    this.__defineGetter__("Codewords", function () {
      return this.codewords;
    });
  }

  function T(a) {
    var b = a.Dimension;
    if (21 > b || 1 != (b & 3)) throw "Error BitMatrixParser";
    this.bitMatrix = a;
    this.parsedFormatInfo = this.parsedVersion = null;

    this.copyBit = function (e, d, c) {
      return this.bitMatrix.get_Renamed(e, d) ? c << 1 | 1 : c << 1;
    };

    this.readFormatInformation = function () {
      if (null != this.parsedFormatInfo) return this.parsedFormatInfo;

      for (var e = 0, d = 0; 6 > d; d++) {
        e = this.copyBit(d, 8, e);
      }

      e = this.copyBit(7, 8, e);
      e = this.copyBit(8, 8, e);
      e = this.copyBit(8, 7, e);

      for (d = 5; 0 <= d; d--) {
        e = this.copyBit(8, d, e);
      }

      this.parsedFormatInfo = r.decodeFormatInformation(e);
      if (null != this.parsedFormatInfo) return this.parsedFormatInfo;

      for (var c = this.bitMatrix.Dimension, e = 0, b = c - 8, d = c - 1; d >= b; d--) {
        e = this.copyBit(d, 8, e);
      }

      for (d = c - 7; d < c; d++) {
        e = this.copyBit(8, d, e);
      }

      this.parsedFormatInfo = r.decodeFormatInformation(e);
      if (null != this.parsedFormatInfo) return this.parsedFormatInfo;
      throw "Error readFormatInformation";
    };

    this.readVersion = function () {
      if (null != this.parsedVersion) return this.parsedVersion;
      var e = this.bitMatrix.Dimension,
          d = e - 17 >> 2;
      if (6 >= d) return k.getVersionForNumber(d);

      for (var d = 0, c = e - 11, b = 5; 0 <= b; b--) {
        for (var a = e - 9; a >= c; a--) {
          d = this.copyBit(a, b, d);
        }
      }

      this.parsedVersion = k.decodeVersionInformation(d);
      if (null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
      d = 0;

      for (a = 5; 0 <= a; a--) {
        for (b = e - 9; b >= c; b--) {
          d = this.copyBit(a, b, d);
        }
      }

      this.parsedVersion = k.decodeVersionInformation(d);
      if (null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
      throw "Error readVersion";
    };

    this.readCodewords = function () {
      var b = this.readFormatInformation(),
          d = this.readVersion(),
          c = H.forReference(b.DataMask),
          b = this.bitMatrix.Dimension;
      c.unmaskBitMatrix(this.bitMatrix, b);

      for (var c = d.buildFunctionPattern(), a = !0, h = Array(d.TotalCodewords), m = 0, f = 0, g = 0, k = b - 1; 0 < k; k -= 2) {
        6 == k && k--;

        for (var x = 0; x < b; x++) {
          for (var v = a ? b - 1 - x : x, t = 0; 2 > t; t++) {
            c.get_Renamed(k - t, v) || (g++, f <<= 1, this.bitMatrix.get_Renamed(k - t, v) && (f |= 1), 8 == g && (h[m++] = f, f = g = 0));
          }
        }

        a ^= 1;
      }

      if (m != d.TotalCodewords) throw "Error readCodewords";
      return h;
    };
  }

  function w(a, b) {
    if (null == b || 0 == b.length) throw "System.ArgumentException";
    this.field = a;
    var e = b.length;

    if (1 < e && 0 == b[0]) {
      for (var d = 1; d < e && 0 == b[d];) {
        d++;
      }

      if (d == e) this.coefficients = a.Zero.coefficients;else {
        this.coefficients = Array(e - d);

        for (e = 0; e < this.coefficients.length; e++) {
          this.coefficients[e] = 0;
        }

        for (e = 0; e < this.coefficients.length; e++) {
          this.coefficients[e] = b[d + e];
        }
      }
    } else this.coefficients = b;

    this.__defineGetter__("Zero", function () {
      return 0 == this.coefficients[0];
    });

    this.__defineGetter__("Degree", function () {
      return this.coefficients.length - 1;
    });

    this.__defineGetter__("Coefficients", function () {
      return this.coefficients;
    });

    this.getCoefficient = function (c) {
      return this.coefficients[this.coefficients.length - 1 - c];
    };

    this.evaluateAt = function (c) {
      if (0 == c) return this.getCoefficient(0);
      var d = this.coefficients.length;

      if (1 == c) {
        for (var b = c = 0; b < d; b++) {
          c = n.addOrSubtract(c, this.coefficients[b]);
        }

        return c;
      }

      for (var e = this.coefficients[0], b = 1; b < d; b++) {
        e = n.addOrSubtract(this.field.multiply(c, e), this.coefficients[b]);
      }

      return e;
    };

    this.addOrSubtract = function (c) {
      if (this.field != c.field) throw "GF256Polys do not have same GF256 field";
      if (this.Zero) return c;
      if (c.Zero) return this;
      var d = this.coefficients;
      c = c.coefficients;

      if (d.length > c.length) {
        var b = d,
            d = c;
        c = b;
      }

      for (var b = Array(c.length), e = c.length - d.length, h = 0; h < e; h++) {
        b[h] = c[h];
      }

      for (h = e; h < c.length; h++) {
        b[h] = n.addOrSubtract(d[h - e], c[h]);
      }

      return new w(a, b);
    };

    this.multiply1 = function (c) {
      if (this.field != c.field) throw "GF256Polys do not have same GF256 field";
      if (this.Zero || c.Zero) return this.field.Zero;
      var d = this.coefficients,
          b = d.length;
      c = c.coefficients;

      for (var e = c.length, a = Array(b + e - 1), h = 0; h < b; h++) {
        for (var f = d[h], g = 0; g < e; g++) {
          a[h + g] = n.addOrSubtract(a[h + g], this.field.multiply(f, c[g]));
        }
      }

      return new w(this.field, a);
    };

    this.multiply2 = function (c) {
      if (0 == c) return this.field.Zero;
      if (1 == c) return this;

      for (var d = this.coefficients.length, b = Array(d), e = 0; e < d; e++) {
        b[e] = this.field.multiply(this.coefficients[e], c);
      }

      return new w(this.field, b);
    };

    this.multiplyByMonomial = function (c, d) {
      if (0 > c) throw "System.ArgumentException";
      if (0 == d) return this.field.Zero;

      for (var b = this.coefficients.length, e = Array(b + c), a = 0; a < e.length; a++) {
        e[a] = 0;
      }

      for (a = 0; a < b; a++) {
        e[a] = this.field.multiply(this.coefficients[a], d);
      }

      return new w(this.field, e);
    };

    this.divide = function (c) {
      if (this.field != c.field) throw "GF256Polys do not have same GF256 field";
      if (c.Zero) throw "Divide by 0";

      for (var d = this.field.Zero, b = this, e = c.getCoefficient(c.Degree), e = this.field.inverse(e); b.Degree >= c.Degree && !b.Zero;) {
        var a = b.Degree - c.Degree,
            h = this.field.multiply(b.getCoefficient(b.Degree), e),
            f = c.multiplyByMonomial(a, h),
            a = this.field.buildMonomial(a, h),
            d = d.addOrSubtract(a),
            b = b.addOrSubtract(f);
      }

      return [d, b];
    };
  }

  function n(a) {
    this.expTable = Array(256);
    this.logTable = Array(256);

    for (var b = 1, e = 0; 256 > e; e++) {
      this.expTable[e] = b, b <<= 1, 256 <= b && (b ^= a);
    }

    for (e = 0; 255 > e; e++) {
      this.logTable[this.expTable[e]] = e;
    }

    a = Array(1);
    a[0] = 0;
    this.zero = new w(this, Array(a));
    a = Array(1);
    a[0] = 1;
    this.one = new w(this, Array(a));

    this.__defineGetter__("Zero", function () {
      return this.zero;
    });

    this.__defineGetter__("One", function () {
      return this.one;
    });

    this.buildMonomial = function (d, c) {
      if (0 > d) throw "System.ArgumentException";
      if (0 == c) return this.zero;

      for (var b = Array(d + 1), e = 0; e < b.length; e++) {
        b[e] = 0;
      }

      b[0] = c;
      return new w(this, b);
    };

    this.exp = function (d) {
      return this.expTable[d];
    };

    this.log = function (d) {
      if (0 == d) throw "System.ArgumentException";
      return this.logTable[d];
    };

    this.inverse = function (d) {
      if (0 == d) throw "System.ArithmeticException";
      return this.expTable[255 - this.logTable[d]];
    };

    this.multiply = function (d, c) {
      return 0 == d || 0 == c ? 0 : 1 == d ? c : 1 == c ? d : this.expTable[(this.logTable[d] + this.logTable[c]) % 255];
    };
  }

  function u(a, b) {
    return 0 <= a ? a >> b : (a >> b) + (2 << ~b);
  }

  function U(a, b, e) {
    this.x = a;
    this.y = b;
    this.count = 1;
    this.estimatedModuleSize = e;

    this.__defineGetter__("EstimatedModuleSize", function () {
      return this.estimatedModuleSize;
    });

    this.__defineGetter__("Count", function () {
      return this.count;
    });

    this.__defineGetter__("X", function () {
      return this.x;
    });

    this.__defineGetter__("Y", function () {
      return this.y;
    });

    this.incrementCount = function () {
      this.count++;
    };

    this.aboutEquals = function (d, c, b) {
      return Math.abs(c - this.y) <= d && Math.abs(b - this.x) <= d ? (d = Math.abs(d - this.estimatedModuleSize), 1 >= d || 1 >= d / this.estimatedModuleSize) : !1;
    };
  }

  function V(a) {
    this.bottomLeft = a[0];
    this.topLeft = a[1];
    this.topRight = a[2];

    this.__defineGetter__("BottomLeft", function () {
      return this.bottomLeft;
    });

    this.__defineGetter__("TopLeft", function () {
      return this.topLeft;
    });

    this.__defineGetter__("TopRight", function () {
      return this.topRight;
    });
  }

  function S() {
    this.image = null;
    this.possibleCenters = [];
    this.hasSkipped = !1;
    this.crossCheckStateCount = [0, 0, 0, 0, 0];
    this.resultPointCallback = null;

    this.__defineGetter__("CrossCheckStateCount", function () {
      this.crossCheckStateCount[0] = 0;
      this.crossCheckStateCount[1] = 0;
      this.crossCheckStateCount[2] = 0;
      this.crossCheckStateCount[3] = 0;
      this.crossCheckStateCount[4] = 0;
      return this.crossCheckStateCount;
    });

    this.foundPatternCross = function (a) {
      for (var b = 0, e = 0; 5 > e; e++) {
        var d = a[e];
        if (0 == d) return !1;
        b += d;
      }

      if (7 > b) return !1;
      b = Math.floor((b << D) / 7);
      e = Math.floor(b / 2);
      return Math.abs(b - (a[0] << D)) < e && Math.abs(b - (a[1] << D)) < e && Math.abs(3 * b - (a[2] << D)) < 3 * e && Math.abs(b - (a[3] << D)) < e && Math.abs(b - (a[4] << D)) < e;
    };

    this.centerFromEnd = function (a, b) {
      return b - a[4] - a[3] - a[2] / 2;
    };

    this.crossCheckVertical = function (a, b, e, d) {
      for (var c = this.image, h = g.height, l = this.CrossCheckStateCount, m = a; 0 <= m && c[b + m * g.width];) {
        l[2]++, m--;
      }

      if (0 > m) return NaN;

      for (; 0 <= m && !c[b + m * g.width] && l[1] <= e;) {
        l[1]++, m--;
      }

      if (0 > m || l[1] > e) return NaN;

      for (; 0 <= m && c[b + m * g.width] && l[0] <= e;) {
        l[0]++, m--;
      }

      if (l[0] > e) return NaN;

      for (m = a + 1; m < h && c[b + m * g.width];) {
        l[2]++, m++;
      }

      if (m == h) return NaN;

      for (; m < h && !c[b + m * g.width] && l[3] < e;) {
        l[3]++, m++;
      }

      if (m == h || l[3] >= e) return NaN;

      for (; m < h && c[b + m * g.width] && l[4] < e;) {
        l[4]++, m++;
      }

      return l[4] >= e || 5 * Math.abs(l[0] + l[1] + l[2] + l[3] + l[4] - d) >= 2 * d ? NaN : this.foundPatternCross(l) ? this.centerFromEnd(l, m) : NaN;
    };

    this.crossCheckHorizontal = function (a, b, e, d) {
      for (var c = this.image, h = g.width, l = this.CrossCheckStateCount, m = a; 0 <= m && c[m + b * g.width];) {
        l[2]++, m--;
      }

      if (0 > m) return NaN;

      for (; 0 <= m && !c[m + b * g.width] && l[1] <= e;) {
        l[1]++, m--;
      }

      if (0 > m || l[1] > e) return NaN;

      for (; 0 <= m && c[m + b * g.width] && l[0] <= e;) {
        l[0]++, m--;
      }

      if (l[0] > e) return NaN;

      for (m = a + 1; m < h && c[m + b * g.width];) {
        l[2]++, m++;
      }

      if (m == h) return NaN;

      for (; m < h && !c[m + b * g.width] && l[3] < e;) {
        l[3]++, m++;
      }

      if (m == h || l[3] >= e) return NaN;

      for (; m < h && c[m + b * g.width] && l[4] < e;) {
        l[4]++, m++;
      }

      return l[4] >= e || 5 * Math.abs(l[0] + l[1] + l[2] + l[3] + l[4] - d) >= d ? NaN : this.foundPatternCross(l) ? this.centerFromEnd(l, m) : NaN;
    };

    this.handlePossibleCenter = function (a, b, e) {
      var d = a[0] + a[1] + a[2] + a[3] + a[4];
      e = this.centerFromEnd(a, e);
      b = this.crossCheckVertical(b, Math.floor(e), a[2], d);

      if (!isNaN(b) && (e = this.crossCheckHorizontal(Math.floor(e), Math.floor(b), a[2], d), !isNaN(e))) {
        a = d / 7;

        for (var d = !1, c = this.possibleCenters.length, h = 0; h < c; h++) {
          var l = this.possibleCenters[h];

          if (l.aboutEquals(a, b, e)) {
            l.incrementCount();
            d = !0;
            break;
          }
        }

        d || (e = new U(e, b, a), this.possibleCenters.push(e), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(e));
        return !0;
      }

      return !1;
    };

    this.selectBestPatterns = function () {
      var a = this.possibleCenters.length;
      if (3 > a) throw "Couldn't find enough finder patterns (found " + a + ")";

      if (3 < a) {
        for (var b = 0, e = 0, d = 0; d < a; d++) {
          var c = this.possibleCenters[d].EstimatedModuleSize,
              b = b + c,
              e = e + c * c;
        }

        var p = b / a;
        this.possibleCenters.sort(function (c, d) {
          var b = Math.abs(d.EstimatedModuleSize - p),
              e = Math.abs(c.EstimatedModuleSize - p);
          return b < e ? -1 : b == e ? 0 : 1;
        });
        a = Math.max(.2 * p, Math.sqrt(e / a - p * p));

        for (d = this.possibleCenters.length - 1; 0 <= d; d--) {
          Math.abs(this.possibleCenters[d].EstimatedModuleSize - p) > a && this.possibleCenters.splice(d, 1);
        }
      }

      3 < this.possibleCenters.length && this.possibleCenters.sort(function (c, d) {
        return c.count > d.count ? -1 : c.count < d.count ? 1 : 0;
      });
      return [this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2]];
    };

    this.findRowSkip = function () {
      var a = this.possibleCenters.length;
      if (1 >= a) return 0;

      for (var b = null, e = 0; e < a; e++) {
        var d = this.possibleCenters[e];
        if (d.Count >= K) if (null == b) b = d;else return this.hasSkipped = !0, Math.floor((Math.abs(b.X - d.X) - Math.abs(b.Y - d.Y)) / 2);
      }

      return 0;
    };

    this.haveMultiplyConfirmedCenters = function () {
      for (var a, b = 0, e = 0, d = this.possibleCenters.length, c = 0; c < d; c++) {
        a = this.possibleCenters[c], a.Count >= K && (b++, e += a.EstimatedModuleSize);
      }

      if (3 > b) return !1;

      for (var b = e / d, p = 0, c = 0; c < d; c++) {
        a = this.possibleCenters[c], p += Math.abs(a.EstimatedModuleSize - b);
      }

      return p <= .05 * e;
    };

    this.findFinderPattern = function (a) {
      var b;
      this.image = a;
      var e = g.height,
          d = g.width,
          c = Math.floor(3 * e / (4 * W));
      c < L && (c = L);

      for (var h = !1, l = Array(5), m = c - 1; m < e && !h; m += c) {
        l[0] = 0;
        l[1] = 0;
        l[2] = 0;
        l[3] = 0;

        for (var f = b = l[4] = 0; f < d; f++) {
          if (a[f + m * g.width]) 1 == (b & 1) && b++, l[b]++;else if (0 == (b & 1)) {
            if (4 == b) {
              if (this.foundPatternCross(l)) {
                if (b = this.handlePossibleCenter(l, m, f)) c = 2, this.hasSkipped ? h = this.haveMultiplyConfirmedCenters() : (b = this.findRowSkip(), b > l[2] && (m += b - l[2] - c, f = d - 1));else {
                  do {
                    f++;
                  } while (f < d && !a[f + m * g.width]);

                  f--;
                }
                b = 0;
                l[0] = 0;
                l[1] = 0;
                l[2] = 0;
                l[3] = 0;
                l[4] = 0;
              } else l[0] = l[2], l[1] = l[3], l[2] = l[4], l[3] = 1, l[4] = 0, b = 3;
            } else l[++b]++;
          } else l[b]++;
        }

        this.foundPatternCross(l) && (b = this.handlePossibleCenter(l, m, d)) && (c = l[0], this.hasSkipped && (h = this.haveMultiplyConfirmedCenters()));
      }

      a = this.selectBestPatterns();
      g.orderBestPatterns(a);
      return new V(a);
    };
  }

  function M(a, b, e) {
    this.x = a;
    this.y = b;
    this.count = 1;
    this.estimatedModuleSize = e;

    this.__defineGetter__("EstimatedModuleSize", function () {
      return this.estimatedModuleSize;
    });

    this.__defineGetter__("Count", function () {
      return this.count;
    });

    this.__defineGetter__("X", function () {
      return Math.floor(this.x);
    });

    this.__defineGetter__("Y", function () {
      return Math.floor(this.y);
    });

    this.incrementCount = function () {
      this.count++;
    };

    this.aboutEquals = function (d, c, b) {
      return Math.abs(c - this.y) <= d && Math.abs(b - this.x) <= d ? (d = Math.abs(d - this.estimatedModuleSize), 1 >= d || 1 >= d / this.estimatedModuleSize) : !1;
    };
  }

  function R(a, b, e, d, c, f, l) {
    this.image = a;
    this.possibleCenters = [];
    this.startX = b;
    this.startY = e;
    this.width = d;
    this.height = c;
    this.moduleSize = f;
    this.crossCheckStateCount = [0, 0, 0];
    this.resultPointCallback = l;

    this.centerFromEnd = function (c, d) {
      return d - c[2] - c[1] / 2;
    };

    this.foundPatternCross = function (c) {
      for (var d = this.moduleSize, b = d / 2, a = 0; 3 > a; a++) {
        if (Math.abs(d - c[a]) >= b) return !1;
      }

      return !0;
    };

    this.crossCheckVertical = function (c, d, b, a) {
      var e = this.image,
          h = g.height,
          f = this.crossCheckStateCount;
      f[0] = 0;
      f[1] = 0;
      f[2] = 0;

      for (var l = c; 0 <= l && e[d + l * g.width] && f[1] <= b;) {
        f[1]++, l--;
      }

      if (0 > l || f[1] > b) return NaN;

      for (; 0 <= l && !e[d + l * g.width] && f[0] <= b;) {
        f[0]++, l--;
      }

      if (f[0] > b) return NaN;

      for (l = c + 1; l < h && e[d + l * g.width] && f[1] <= b;) {
        f[1]++, l++;
      }

      if (l == h || f[1] > b) return NaN;

      for (; l < h && !e[d + l * g.width] && f[2] <= b;) {
        f[2]++, l++;
      }

      return f[2] > b || 5 * Math.abs(f[0] + f[1] + f[2] - a) >= 2 * a ? NaN : this.foundPatternCross(f) ? this.centerFromEnd(f, l) : NaN;
    };

    this.handlePossibleCenter = function (c, d, b) {
      var a = c[0] + c[1] + c[2];
      b = this.centerFromEnd(c, b);
      d = this.crossCheckVertical(d, Math.floor(b), 2 * c[1], a);

      if (!isNaN(d)) {
        c = (c[0] + c[1] + c[2]) / 3;

        for (var a = this.possibleCenters.length, e = 0; e < a; e++) {
          if (this.possibleCenters[e].aboutEquals(c, d, b)) return new M(b, d, c);
        }

        b = new M(b, d, c);
        this.possibleCenters.push(b);
        null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(b);
      }

      return null;
    };

    this.find = function () {
      for (var c, b = this.startX, h = this.height, f = b + d, l = e + (h >> 1), p = [0, 0, 0], k = 0; k < h; k++) {
        var n = l + (0 == (k & 1) ? k + 1 >> 1 : -(k + 1 >> 1));
        p[0] = 0;
        p[1] = 0;
        p[2] = 0;

        for (var A = b; A < f && !a[A + g.width * n];) {
          A++;
        }

        for (c = 0; A < f;) {
          if (a[A + n * g.width]) {
            if (1 == c) p[c]++;else if (2 == c) {
              if (this.foundPatternCross(p) && (c = this.handlePossibleCenter(p, n, A), null != c)) return c;
              p[0] = p[2];
              p[1] = 1;
              p[2] = 0;
              c = 1;
            } else p[++c]++;
          } else 1 == c && c++, p[c]++;
          A++;
        }

        if (this.foundPatternCross(p) && (c = this.handlePossibleCenter(p, n, f), null != c)) return c;
      }

      if (0 != this.possibleCenters.length) return this.possibleCenters[0];
      throw "Couldn't find enough alignment patterns";
    };
  }

  function X(a, b, e) {
    this.blockPointer = 0;
    this.bitPointer = 7;
    this.dataLength = 0;
    this.blocks = a;
    this.numErrorCorrectionCode = e;
    9 >= b ? this.dataLengthMode = 0 : 10 <= b && 26 >= b ? this.dataLengthMode = 1 : 27 <= b && 40 >= b && (this.dataLengthMode = 2);

    this.getNextBits = function (b) {
      var c, d;

      if (b < this.bitPointer + 1) {
        var a = 0;

        for (d = 0; d < b; d++) {
          a += 1 << d;
        }

        a <<= this.bitPointer - b + 1;
        d = (this.blocks[this.blockPointer] & a) >> this.bitPointer - b + 1;
        this.bitPointer -= b;
        return d;
      }

      if (b < this.bitPointer + 1 + 8) {
        for (d = c = 0; d < this.bitPointer + 1; d++) {
          c += 1 << d;
        }

        d = (this.blocks[this.blockPointer] & c) << b - (this.bitPointer + 1);
        this.blockPointer++;
        d += this.blocks[this.blockPointer] >> 8 - (b - (this.bitPointer + 1));
        this.bitPointer -= b % 8;
        0 > this.bitPointer && (this.bitPointer = 8 + this.bitPointer);
        return d;
      }

      if (b < this.bitPointer + 1 + 16) {
        for (d = a = c = 0; d < this.bitPointer + 1; d++) {
          c += 1 << d;
        }

        c = (this.blocks[this.blockPointer] & c) << b - (this.bitPointer + 1);
        this.blockPointer++;
        var e = this.blocks[this.blockPointer] << b - (this.bitPointer + 1 + 8);
        this.blockPointer++;

        for (d = 0; d < b - (this.bitPointer + 1 + 8); d++) {
          a += 1 << d;
        }

        a <<= 8 - (b - (this.bitPointer + 1 + 8));
        d = (this.blocks[this.blockPointer] & a) >> 8 - (b - (this.bitPointer + 1 + 8));
        this.bitPointer -= (b - 8) % 8;
        0 > this.bitPointer && (this.bitPointer = 8 + this.bitPointer);
        return c + e + d;
      }

      return 0;
    };

    this.NextMode = function () {
      return this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2 ? 0 : this.getNextBits(4);
    };

    this.getDataLength = function (b) {
      for (var c = 0; 1 != b >> c;) {
        c++;
      }

      return this.getNextBits(g.sizeOfDataLengthInfo[this.dataLengthMode][c]);
    };

    this.getRomanAndFigureString = function (b) {
      var c = "",
          d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");

      do {
        if (1 < b) {
          var a = this.getNextBits(11);
          var e = a % 45,
              c = c + d[Math.floor(a / 45)],
              c = c + d[e];
          b -= 2;
        } else 1 == b && (a = this.getNextBits(6), c += d[a], --b);
      } while (0 < b);

      return c;
    };

    this.getFigureString = function (b) {
      var c = 0,
          d = "";

      do {
        3 <= b ? (c = this.getNextBits(10), 100 > c && (d += "0"), 10 > c && (d += "0"), b -= 3) : 2 == b ? (c = this.getNextBits(7), 10 > c && (d += "0"), b -= 2) : 1 == b && (c = this.getNextBits(4), --b), d += c;
      } while (0 < b);

      return d;
    };

    this.get8bitByteArray = function (b) {
      var c = [];

      do {
        var d = this.getNextBits(8);
        c.push(d);
        b--;
      } while (0 < b);

      return c;
    };

    this.getKanjiString = function (b) {
      var c = "";

      do {
        var d = this.getNextBits(13);
        d = (d / 192 << 8) + d % 192;
        c += String.fromCharCode(40956 >= d + 33088 ? d + 33088 : d + 49472);
        b--;
      } while (0 < b);

      return c;
    };

    this.parseECIValue = function () {
      var b = 0,
          c = this.getNextBits(8);
      0 == (c & 128) && (b = c & 127);
      128 == (c & 192) && (b = this.getNextBits(8), b |= (c & 63) << 8);
      192 == (c & 224) && (b = this.getNextBits(8), b |= (c & 31) << 16);
      return b;
    };

    this.__defineGetter__("DataByte", function () {
      var b = [];

      do {
        var c = this.NextMode();
        if (0 == c) if (0 < b.length) break;else throw "Empty data block";
        if (1 != c && 2 != c && 4 != c && 8 != c && 7 != c) throw "Invalid mode: " + c + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
        if (7 == c) this.parseECIValue();else {
          var a = this.getDataLength(c);
          if (1 > a) throw "Invalid data length: " + a;

          switch (c) {
            case 1:
              c = this.getFigureString(a);

              for (var a = Array(c.length), e = 0; e < c.length; e++) {
                a[e] = c.charCodeAt(e);
              }

              b.push(a);
              break;

            case 2:
              c = this.getRomanAndFigureString(a);
              a = Array(c.length);

              for (e = 0; e < c.length; e++) {
                a[e] = c.charCodeAt(e);
              }

              b.push(a);
              break;

            case 4:
              c = this.get8bitByteArray(a);
              b.push(c);
              break;

            case 8:
              c = this.getKanjiString(a), b.push(c);
          }
        }
      } while (1);

      return b;
    });
  }

  var F = {
    checkAndNudgePoints: function checkAndNudgePoints(a, b) {
      for (var e, d, c = g.width, h = g.height, f = !0, m = 0; m < b.length && f; m += 2) {
        d = Math.floor(b[m]);
        e = Math.floor(b[m + 1]);
        if (-1 > d || d > c || -1 > e || e > h) throw "Error.checkAndNudgePoints ";
        f = !1;
        -1 == d ? (b[m] = 0, f = !0) : d == c && (b[m] = c - 1, f = !0);
        -1 == e ? (b[m + 1] = 0, f = !0) : e == h && (b[m + 1] = h - 1, f = !0);
      }

      f = !0;

      for (m = b.length - 2; 0 <= m && f; m -= 2) {
        d = Math.floor(b[m]);
        e = Math.floor(b[m + 1]);
        if (-1 > d || d > c || -1 > e || e > h) throw "Error.checkAndNudgePoints ";
        f = !1;
        -1 == d ? (b[m] = 0, f = !0) : d == c && (b[m] = c - 1, f = !0);
        -1 == e ? (b[m + 1] = 0, f = !0) : e == h && (b[m + 1] = h - 1, f = !0);
      }
    },
    sampleGrid3: function sampleGrid3(a, b, e) {
      for (var d = new I(b), c = Array(b << 1), h = 0; h < b; h++) {
        for (var f = c.length, m = h + .5, k = 0; k < f; k += 2) {
          c[k] = (k >> 1) + .5, c[k + 1] = m;
        }

        e.transformPoints1(c);
        F.checkAndNudgePoints(a, c);

        try {
          for (k = 0; k < f; k += 2) {
            a[Math.floor(c[k]) + g.width * Math.floor(c[k + 1])] && d.set_Renamed(k >> 1, h);
          }
        } catch (q) {
          throw "Error.checkAndNudgePoints";
        }
      }

      return d;
    },
    sampleGridx: function sampleGridx(a, b, e, d, c, f, l, g, k, q, n, x, v, t, r, A, u, w) {
      e = z.quadrilateralToQuadrilateral(e, d, c, f, l, g, k, q, n, x, v, t, r, A, u, w);
      return F.sampleGrid3(a, b, e);
    }
  };
  k.VERSION_DECODE_INFO = [31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017];
  k.VERSIONS = [new k(1, [], new f(7, new a(1, 19)), new f(10, new a(1, 16)), new f(13, new a(1, 13)), new f(17, new a(1, 9))), new k(2, [6, 18], new f(10, new a(1, 34)), new f(16, new a(1, 28)), new f(22, new a(1, 22)), new f(28, new a(1, 16))), new k(3, [6, 22], new f(15, new a(1, 55)), new f(26, new a(1, 44)), new f(18, new a(2, 17)), new f(22, new a(2, 13))), new k(4, [6, 26], new f(20, new a(1, 80)), new f(18, new a(2, 32)), new f(26, new a(2, 24)), new f(16, new a(4, 9))), new k(5, [6, 30], new f(26, new a(1, 108)), new f(24, new a(2, 43)), new f(18, new a(2, 15), new a(2, 16)), new f(22, new a(2, 11), new a(2, 12))), new k(6, [6, 34], new f(18, new a(2, 68)), new f(16, new a(4, 27)), new f(24, new a(4, 19)), new f(28, new a(4, 15))), new k(7, [6, 22, 38], new f(20, new a(2, 78)), new f(18, new a(4, 31)), new f(18, new a(2, 14), new a(4, 15)), new f(26, new a(4, 13), new a(1, 14))), new k(8, [6, 24, 42], new f(24, new a(2, 97)), new f(22, new a(2, 38), new a(2, 39)), new f(22, new a(4, 18), new a(2, 19)), new f(26, new a(4, 14), new a(2, 15))), new k(9, [6, 26, 46], new f(30, new a(2, 116)), new f(22, new a(3, 36), new a(2, 37)), new f(20, new a(4, 16), new a(4, 17)), new f(24, new a(4, 12), new a(4, 13))), new k(10, [6, 28, 50], new f(18, new a(2, 68), new a(2, 69)), new f(26, new a(4, 43), new a(1, 44)), new f(24, new a(6, 19), new a(2, 20)), new f(28, new a(6, 15), new a(2, 16))), new k(11, [6, 30, 54], new f(20, new a(4, 81)), new f(30, new a(1, 50), new a(4, 51)), new f(28, new a(4, 22), new a(4, 23)), new f(24, new a(3, 12), new a(8, 13))), new k(12, [6, 32, 58], new f(24, new a(2, 92), new a(2, 93)), new f(22, new a(6, 36), new a(2, 37)), new f(26, new a(4, 20), new a(6, 21)), new f(28, new a(7, 14), new a(4, 15))), new k(13, [6, 34, 62], new f(26, new a(4, 107)), new f(22, new a(8, 37), new a(1, 38)), new f(24, new a(8, 20), new a(4, 21)), new f(22, new a(12, 11), new a(4, 12))), new k(14, [6, 26, 46, 66], new f(30, new a(3, 115), new a(1, 116)), new f(24, new a(4, 40), new a(5, 41)), new f(20, new a(11, 16), new a(5, 17)), new f(24, new a(11, 12), new a(5, 13))), new k(15, [6, 26, 48, 70], new f(22, new a(5, 87), new a(1, 88)), new f(24, new a(5, 41), new a(5, 42)), new f(30, new a(5, 24), new a(7, 25)), new f(24, new a(11, 12), new a(7, 13))), new k(16, [6, 26, 50, 74], new f(24, new a(5, 98), new a(1, 99)), new f(28, new a(7, 45), new a(3, 46)), new f(24, new a(15, 19), new a(2, 20)), new f(30, new a(3, 15), new a(13, 16))), new k(17, [6, 30, 54, 78], new f(28, new a(1, 107), new a(5, 108)), new f(28, new a(10, 46), new a(1, 47)), new f(28, new a(1, 22), new a(15, 23)), new f(28, new a(2, 14), new a(17, 15))), new k(18, [6, 30, 56, 82], new f(30, new a(5, 120), new a(1, 121)), new f(26, new a(9, 43), new a(4, 44)), new f(28, new a(17, 22), new a(1, 23)), new f(28, new a(2, 14), new a(19, 15))), new k(19, [6, 30, 58, 86], new f(28, new a(3, 113), new a(4, 114)), new f(26, new a(3, 44), new a(11, 45)), new f(26, new a(17, 21), new a(4, 22)), new f(26, new a(9, 13), new a(16, 14))), new k(20, [6, 34, 62, 90], new f(28, new a(3, 107), new a(5, 108)), new f(26, new a(3, 41), new a(13, 42)), new f(30, new a(15, 24), new a(5, 25)), new f(28, new a(15, 15), new a(10, 16))), new k(21, [6, 28, 50, 72, 94], new f(28, new a(4, 116), new a(4, 117)), new f(26, new a(17, 42)), new f(28, new a(17, 22), new a(6, 23)), new f(30, new a(19, 16), new a(6, 17))), new k(22, [6, 26, 50, 74, 98], new f(28, new a(2, 111), new a(7, 112)), new f(28, new a(17, 46)), new f(30, new a(7, 24), new a(16, 25)), new f(24, new a(34, 13))), new k(23, [6, 30, 54, 74, 102], new f(30, new a(4, 121), new a(5, 122)), new f(28, new a(4, 47), new a(14, 48)), new f(30, new a(11, 24), new a(14, 25)), new f(30, new a(16, 15), new a(14, 16))), new k(24, [6, 28, 54, 80, 106], new f(30, new a(6, 117), new a(4, 118)), new f(28, new a(6, 45), new a(14, 46)), new f(30, new a(11, 24), new a(16, 25)), new f(30, new a(30, 16), new a(2, 17))), new k(25, [6, 32, 58, 84, 110], new f(26, new a(8, 106), new a(4, 107)), new f(28, new a(8, 47), new a(13, 48)), new f(30, new a(7, 24), new a(22, 25)), new f(30, new a(22, 15), new a(13, 16))), new k(26, [6, 30, 58, 86, 114], new f(28, new a(10, 114), new a(2, 115)), new f(28, new a(19, 46), new a(4, 47)), new f(28, new a(28, 22), new a(6, 23)), new f(30, new a(33, 16), new a(4, 17))), new k(27, [6, 34, 62, 90, 118], new f(30, new a(8, 122), new a(4, 123)), new f(28, new a(22, 45), new a(3, 46)), new f(30, new a(8, 23), new a(26, 24)), new f(30, new a(12, 15), new a(28, 16))), new k(28, [6, 26, 50, 74, 98, 122], new f(30, new a(3, 117), new a(10, 118)), new f(28, new a(3, 45), new a(23, 46)), new f(30, new a(4, 24), new a(31, 25)), new f(30, new a(11, 15), new a(31, 16))), new k(29, [6, 30, 54, 78, 102, 126], new f(30, new a(7, 116), new a(7, 117)), new f(28, new a(21, 45), new a(7, 46)), new f(30, new a(1, 23), new a(37, 24)), new f(30, new a(19, 15), new a(26, 16))), new k(30, [6, 26, 52, 78, 104, 130], new f(30, new a(5, 115), new a(10, 116)), new f(28, new a(19, 47), new a(10, 48)), new f(30, new a(15, 24), new a(25, 25)), new f(30, new a(23, 15), new a(25, 16))), new k(31, [6, 30, 56, 82, 108, 134], new f(30, new a(13, 115), new a(3, 116)), new f(28, new a(2, 46), new a(29, 47)), new f(30, new a(42, 24), new a(1, 25)), new f(30, new a(23, 15), new a(28, 16))), new k(32, [6, 34, 60, 86, 112, 138], new f(30, new a(17, 115)), new f(28, new a(10, 46), new a(23, 47)), new f(30, new a(10, 24), new a(35, 25)), new f(30, new a(19, 15), new a(35, 16))), new k(33, [6, 30, 58, 86, 114, 142], new f(30, new a(17, 115), new a(1, 116)), new f(28, new a(14, 46), new a(21, 47)), new f(30, new a(29, 24), new a(19, 25)), new f(30, new a(11, 15), new a(46, 16))), new k(34, [6, 34, 62, 90, 118, 146], new f(30, new a(13, 115), new a(6, 116)), new f(28, new a(14, 46), new a(23, 47)), new f(30, new a(44, 24), new a(7, 25)), new f(30, new a(59, 16), new a(1, 17))), new k(35, [6, 30, 54, 78, 102, 126, 150], new f(30, new a(12, 121), new a(7, 122)), new f(28, new a(12, 47), new a(26, 48)), new f(30, new a(39, 24), new a(14, 25)), new f(30, new a(22, 15), new a(41, 16))), new k(36, [6, 24, 50, 76, 102, 128, 154], new f(30, new a(6, 121), new a(14, 122)), new f(28, new a(6, 47), new a(34, 48)), new f(30, new a(46, 24), new a(10, 25)), new f(30, new a(2, 15), new a(64, 16))), new k(37, [6, 28, 54, 80, 106, 132, 158], new f(30, new a(17, 122), new a(4, 123)), new f(28, new a(29, 46), new a(14, 47)), new f(30, new a(49, 24), new a(10, 25)), new f(30, new a(24, 15), new a(46, 16))), new k(38, [6, 32, 58, 84, 110, 136, 162], new f(30, new a(4, 122), new a(18, 123)), new f(28, new a(13, 46), new a(32, 47)), new f(30, new a(48, 24), new a(14, 25)), new f(30, new a(42, 15), new a(32, 16))), new k(39, [6, 26, 54, 82, 110, 138, 166], new f(30, new a(20, 117), new a(4, 118)), new f(28, new a(40, 47), new a(7, 48)), new f(30, new a(43, 24), new a(22, 25)), new f(30, new a(10, 15), new a(67, 16))), new k(40, [6, 30, 58, 86, 114, 142, 170], new f(30, new a(19, 118), new a(6, 119)), new f(28, new a(18, 47), new a(31, 48)), new f(30, new a(34, 24), new a(34, 25)), new f(30, new a(20, 15), new a(61, 16)))];

  k.getVersionForNumber = function (a) {
    if (1 > a || 40 < a) throw "ArgumentException";
    return k.VERSIONS[a - 1];
  };

  k.getProvisionalVersionForDimension = function (a) {
    if (1 != a % 4) throw "Error getProvisionalVersionForDimension";

    try {
      return k.getVersionForNumber(a - 17 >> 2);
    } catch (b) {
      throw "Error getVersionForNumber";
    }
  };

  k.decodeVersionInformation = function (a) {
    for (var b = 4294967295, e = 0, d = 0; d < k.VERSION_DECODE_INFO.length; d++) {
      var c = k.VERSION_DECODE_INFO[d];
      if (c == a) return this.getVersionForNumber(d + 7);
      c = r.numBitsDiffering(a, c);
      c < b && (e = d + 7, b = c);
    }

    return 3 >= b ? this.getVersionForNumber(e) : null;
  };

  z.quadrilateralToQuadrilateral = function (a, b, e, d, c, f, g, m, k, q, n, x, v, t, r, u) {
    a = this.quadrilateralToSquare(a, b, e, d, c, f, g, m);
    return this.squareToQuadrilateral(k, q, n, x, v, t, r, u).times(a);
  };

  z.squareToQuadrilateral = function (a, b, e, d, c, f, g, m) {
    var h = m - f,
        l = b - d + f - m;
    if (0 == h && 0 == l) return new z(e - a, c - e, a, d - b, f - d, b, 0, 0, 1);
    var p = e - c,
        k = g - c;
    c = a - e + c - g;
    f = d - f;
    var n = p * h - k * f,
        h = (c * h - k * l) / n,
        l = (p * l - c * f) / n;
    return new z(e - a + h * e, g - a + l * g, a, d - b + h * d, m - b + l * m, b, h, l, 1);
  };

  z.quadrilateralToSquare = function (a, b, e, d, c, f, g, m) {
    return this.squareToQuadrilateral(a, b, e, d, c, f, g, m).buildAdjoint();
  };

  var N = [[21522, 0], [20773, 1], [24188, 2], [23371, 3], [17913, 4], [16590, 5], [20375, 6], [19104, 7], [30660, 8], [29427, 9], [32170, 10], [30877, 11], [26159, 12], [25368, 13], [27713, 14], [26998, 15], [5769, 16], [5054, 17], [7399, 18], [6608, 19], [1890, 20], [597, 21], [3340, 22], [2107, 23], [13663, 24], [12392, 25], [16177, 26], [14854, 27], [9396, 28], [8579, 29], [11994, 30], [11245, 31]],
      B = [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4];

  r.numBitsDiffering = function (a, b) {
    a ^= b;
    return B[a & 15] + B[u(a, 4) & 15] + B[u(a, 8) & 15] + B[u(a, 12) & 15] + B[u(a, 16) & 15] + B[u(a, 20) & 15] + B[u(a, 24) & 15] + B[u(a, 28) & 15];
  };

  r.decodeFormatInformation = function (a) {
    var b = r.doDecodeFormatInformation(a);
    return null != b ? b : r.doDecodeFormatInformation(a ^ 21522);
  };

  r.doDecodeFormatInformation = function (a) {
    for (var b = 4294967295, e = 0, d = 0; d < N.length; d++) {
      var c = N[d],
          h = c[0];
      if (h == a) return new r(c[1]);
      h = this.numBitsDiffering(a, h);
      h < b && (e = c[1], b = h);
    }

    return 3 >= b ? new r(e) : null;
  };

  C.forBits = function (a) {
    if (0 > a || a >= O.length) throw "ArgumentException";
    return O[a];
  };

  var Y = new C(0, 1, "L"),
      Z = new C(1, 0, "M"),
      aa = new C(2, 3, "Q"),
      ba = new C(3, 2, "H"),
      O = [Z, Y, ba, aa];

  G.getDataBlocks = function (a, b, e) {
    if (a.length != b.TotalCodewords) throw "ArgumentException";
    var d = b.getECBlocksForLevel(e);
    e = 0;
    var c = d.getECBlocks();

    for (b = 0; b < c.length; b++) {
      e += c[b].Count;
    }

    e = Array(e);

    for (var h = 0, f = 0; f < c.length; f++) {
      var g = c[f];

      for (b = 0; b < g.Count; b++) {
        var k = g.DataCodewords,
            q = d.ECCodewordsPerBlock + k;
        e[h++] = new G(k, Array(q));
      }
    }

    b = e[0].codewords.length;

    for (c = e.length - 1; 0 <= c && e[c].codewords.length != b;) {
      c--;
    }

    c++;
    d = b - d.ECCodewordsPerBlock;

    for (b = g = 0; b < d; b++) {
      for (f = 0; f < h; f++) {
        e[f].codewords[b] = a[g++];
      }
    }

    for (f = c; f < h; f++) {
      e[f].codewords[d] = a[g++];
    }

    k = e[0].codewords.length;

    for (b = d; b < k; b++) {
      for (f = 0; f < h; f++) {
        e[f].codewords[f < c ? b : b + 1] = a[g++];
      }
    }

    return e;
  };

  var H = {
    forReference: function forReference(a) {
      if (0 > a || 7 < a) throw "System.ArgumentException";
      return H.DATA_MASKS[a];
    }
  };
  H.DATA_MASKS = [new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == (a + b & 1);
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == (a & 1);
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == b % 3;
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == (a + b) % 3;
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == (u(a, 1) + b / 3 & 1);
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      var e = a * b;
      return 0 == (e & 1) + e % 3;
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      var e = a * b;
      return 0 == ((e & 1) + e % 3 & 1);
    };
  }(), new function () {
    this.unmaskBitMatrix = function (a, b) {
      for (var e = 0; e < b; e++) {
        for (var d = 0; d < b; d++) {
          this.isMasked(e, d) && a.flip(d, e);
        }
      }
    };

    this.isMasked = function (a, b) {
      return 0 == ((a + b & 1) + a * b % 3 & 1);
    };
  }()];
  n.QR_CODE_FIELD = new n(285);
  n.DATA_MATRIX_FIELD = new n(301);

  n.addOrSubtract = function (a, b) {
    return a ^ b;
  };

  var E = {};
  E.rsDecoder = new function (a) {
    this.field = a;

    this.decode = function (a, e) {
      for (var b = new w(this.field, a), c = Array(e), f = 0; f < c.length; f++) {
        c[f] = 0;
      }

      for (var h = !0, f = 0; f < e; f++) {
        var g = b.evaluateAt(this.field.exp(f));
        c[c.length - 1 - f] = g;
        0 != g && (h = !1);
      }

      if (!h) for (f = new w(this.field, c), b = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), f, e), f = b[1], b = this.findErrorLocations(b[0]), c = this.findErrorMagnitudes(f, b, !1), f = 0; f < b.length; f++) {
        h = a.length - 1 - this.field.log(b[f]);
        if (0 > h) throw "ReedSolomonException Bad error location";
        a[h] = n.addOrSubtract(a[h], c[f]);
      }
    };

    this.runEuclideanAlgorithm = function (a, e, d) {
      if (a.Degree < e.Degree) {
        var b = a;
        a = e;
        e = b;
      }

      for (var b = this.field.One, f = this.field.Zero, h = this.field.Zero, g = this.field.One; e.Degree >= Math.floor(d / 2);) {
        var k = a,
            q = b,
            n = h;
        a = e;
        b = f;
        h = g;
        if (a.Zero) throw "r_{i-1} was zero";
        e = k;
        g = this.field.Zero;
        f = a.getCoefficient(a.Degree);

        for (f = this.field.inverse(f); e.Degree >= a.Degree && !e.Zero;) {
          var k = e.Degree - a.Degree,
              r = this.field.multiply(e.getCoefficient(e.Degree), f),
              g = g.addOrSubtract(this.field.buildMonomial(k, r));
          e = e.addOrSubtract(a.multiplyByMonomial(k, r));
        }

        f = g.multiply1(b).addOrSubtract(q);
        g = g.multiply1(h).addOrSubtract(n);
      }

      d = g.getCoefficient(0);
      if (0 == d) throw "ReedSolomonException sigmaTilde(0) was zero";
      d = this.field.inverse(d);
      a = g.multiply2(d);
      d = e.multiply2(d);
      return [a, d];
    };

    this.findErrorLocations = function (a) {
      var b = a.Degree;
      if (1 == b) return Array(a.getCoefficient(1));

      for (var d = Array(b), c = 0, f = 1; 256 > f && c < b; f++) {
        0 == a.evaluateAt(f) && (d[c] = this.field.inverse(f), c++);
      }

      if (c != b) throw "Error locator degree does not match number of roots";
      return d;
    };

    this.findErrorMagnitudes = function (a, e, d) {
      for (var b = e.length, f = Array(b), h = 0; h < b; h++) {
        for (var g = this.field.inverse(e[h]), k = 1, q = 0; q < b; q++) {
          h != q && (k = this.field.multiply(k, n.addOrSubtract(1, this.field.multiply(e[q], g))));
        }

        f[h] = this.field.multiply(a.evaluateAt(g), this.field.inverse(k));
        d && (f[h] = this.field.multiply(f[h], g));
      }

      return f;
    };
  }(n.QR_CODE_FIELD);

  E.correctErrors = function (a, b) {
    for (var e = a.length, d = Array(e), c = 0; c < e; c++) {
      d[c] = a[c] & 255;
    }

    e = a.length - b;

    try {
      E.rsDecoder.decode(d, e);
    } catch (p) {
      throw p;
    }

    for (c = 0; c < b; c++) {
      a[c] = d[c];
    }
  };

  E.decode = function (a) {
    var b = new T(a);
    a = b.readVersion();

    for (var e = b.readFormatInformation().ErrorCorrectionLevel, b = b.readCodewords(), b = G.getDataBlocks(b, a, e), d = 0, c = 0; c < b.length; c++) {
      d += b[c].NumDataCodewords;
    }

    for (var d = Array(d), f = 0, h = 0; h < b.length; h++) {
      var c = b[h],
          g = c.Codewords,
          k = c.NumDataCodewords;
      E.correctErrors(g, k);

      for (c = 0; c < k; c++) {
        d[f++] = g[c];
      }
    }

    return new X(d, a.VersionNumber, e.Bits);
  };

  var g = {
    imagedata: null,
    width: 0,
    height: 0,
    qrCodeSymbol: null,
    debug: !1,
    maxImgSize: 1048576,
    sizeOfDataLengthInfo: [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]],
    callback: null,
    vidSuccess: function vidSuccess(a) {
      g.localstream = a;
      g.webkit ? g.video.src = window.webkitURL.createObjectURL(a) : g.moz ? (g.video.mozSrcObject = a, g.video.play()) : g.video.src = a;
      g.gUM = !0;
      g.canvas_qr2 = document.createElement("canvas");
      g.canvas_qr2.id = "qr-canvas";
      g.qrcontext2 = g.canvas_qr2.getContext("2d");
      g.canvas_qr2.width = g.video.videoWidth;
      g.canvas_qr2.height = g.video.videoHeight;
      setTimeout(g.captureToCanvas, 500);
    },
    vidError: function vidError(a) {
      g.gUM = !1;
    },
    captureToCanvas: function captureToCanvas() {
      if (g.gUM) try {
        if (0 == g.video.videoWidth) setTimeout(g.captureToCanvas, 500);else {
          g.canvas_qr2.width = g.video.videoWidth;
          g.canvas_qr2.height = g.video.videoHeight;
          g.qrcontext2.drawImage(g.video, 0, 0);

          try {
            g.decode();
          } catch (h) {
            console.log(h), setTimeout(g.captureToCanvas, 500);
          }
        }
      } catch (h) {
        console.log(h), setTimeout(g.captureToCanvas, 500);
      }
    },
    setWebcam: function setWebcam(a) {
      var b = navigator;
      g.video = document.getElementById(a);
      var e = !0;
      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) try {
        navigator.mediaDevices.enumerateDevices().then(function (a) {
          a.forEach(function (a) {
            console.log("deb1");
            "videoinput" === a.kind && -1 < a.label.toLowerCase().search("back") && (e = [{
              sourceId: a.deviceId
            }]);
            console.log(a.kind + ": " + a.label + " id = " + a.deviceId);
          });
        });
      } catch (d) {
        console.log(d);
      } else console.log("no navigator.mediaDevices.enumerateDevices");
      b.getUserMedia ? b.getUserMedia({
        video: e,
        audio: !1
      }, g.vidSuccess, g.vidError) : b.webkitGetUserMedia ? (g.webkit = !0, b.webkitGetUserMedia({
        video: e,
        audio: !1
      }, g.vidSuccess, g.vidError)) : b.mozGetUserMedia && (g.moz = !0, b.mozGetUserMedia({
        video: e,
        audio: !1
      }, g.vidSuccess, g.vidError));
    },
    decode: function decode(a) {
      if (0 == arguments.length) {
        if (g.canvas_qr2) {
          var b = g.canvas_qr2;
          var e = g.qrcontext2;
        } else b = document.getElementById("qr-canvas"), e = b.getContext("2d");

        g.width = b.width;
        g.height = b.height;
        g.imagedata = e.getImageData(0, 0, g.width, g.height);
        g.result = g.process(e);
        null != g.callback && g.callback(g.result);
        return g.result;
      }

      var d = new Image();
      d.crossOrigin = "Anonymous";

      d.onload = function () {
        var a = document.getElementById("out-canvas");
        null != a && (a = a.getContext("2d"), a.clearRect(0, 0, 320, 240), a.drawImage(d, 0, 0, 320, 240));
        var a = document.createElement("canvas"),
            b = a.getContext("2d"),
            e = d.height,
            f = d.width;
        d.width * d.height > g.maxImgSize && (f = d.width / d.height, e = Math.sqrt(g.maxImgSize / f), f *= e);
        a.width = f;
        a.height = e;
        b.drawImage(d, 0, 0, a.width, a.height);
        g.width = a.width;
        g.height = a.height;

        try {
          g.imagedata = b.getImageData(0, 0, a.width, a.height);
        } catch (y) {
          g.result = Error("Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!");
          null != g.callback && g.callback(g.result);
          return;
        }

        try {
          g.result = g.process(b);
        } catch (y) {
          console.log(y), g.result = Error("error decoding QR Code");
        }

        null != g.callback && g.callback(g.result);
      };

      d.onerror = function () {
        null != g.callback && g.callback(Error("Failed to load the image"));
      };

      d.src = a;
    },
    isUrl: function isUrl(a) {
      return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(a);
    },
    decode_url: function decode_url(a) {
      var b = "";

      try {
        b = escape(a);
      } catch (e) {
        console.log(e), b = a;
      }

      a = "";

      try {
        a = decodeURIComponent(b);
      } catch (e) {
        console.log(e), a = b;
      }

      return a;
    },
    decode_utf8: function decode_utf8(a) {
      return g.isUrl(a) ? g.decode_url(a) : a;
    },
    process: function process(a) {
      var b = new Date().getTime(),
          e = g.grayScaleToBitmap(g.grayscale());

      if (g.debug) {
        for (var d = 0; d < g.height; d++) {
          for (var c = 0; c < g.width; c++) {
            var f = 4 * c + d * g.width * 4;
            g.imagedata.data[f] = 0;
            g.imagedata.data[f + 1] = 0;
            g.imagedata.data[f + 2] = e[c + d * g.width] ? 255 : 0;
          }
        }

        a.putImageData(g.imagedata, 0, 0);
      }

      e = new Q(e).detect();

      if (g.debug) {
        for (d = 0; d < e.bits.Height; d++) {
          for (c = 0; c < e.bits.Width; c++) {
            f = 8 * c + 2 * d * g.width * 4, g.imagedata.data[f] = (e.bits.get_Renamed(c, d), 0), g.imagedata.data[f + 1] = (e.bits.get_Renamed(c, d), 0), g.imagedata.data[f + 2] = e.bits.get_Renamed(c, d) ? 255 : 0;
          }
        }

        a.putImageData(g.imagedata, 0, 0);
      }

      f = E.decode(e.bits).DataByte;
      a = "";

      for (d = 0; d < f.length; d++) {
        for (c = 0; c < f[d].length; c++) {
          a += String.fromCharCode(f[d][c]);
        }
      }

      f = new Date().getTime();
      console.log(f - b);
      return g.decode_utf8(a);
    },
    getPixel: function getPixel(a, b) {
      if (g.width < a) throw "point error";
      if (g.height < b) throw "point error";
      var e = 4 * a + b * g.width * 4;
      return (33 * g.imagedata.data[e] + 34 * g.imagedata.data[e + 1] + 33 * g.imagedata.data[e + 2]) / 100;
    },
    binarize: function binarize(a) {
      for (var b = Array(g.width * g.height), e = 0; e < g.height; e++) {
        for (var d = 0; d < g.width; d++) {
          var c = g.getPixel(d, e);
          b[d + e * g.width] = c <= a ? !0 : !1;
        }
      }

      return b;
    },
    getMiddleBrightnessPerArea: function getMiddleBrightnessPerArea(a) {
      for (var b = Math.floor(g.width / 4), e = Math.floor(g.height / 4), d = Array(4), c = 0; 4 > c; c++) {
        d[c] = Array(4);

        for (var f = 0; 4 > f; f++) {
          d[c][f] = [0, 0];
        }
      }

      for (c = 0; 4 > c; c++) {
        for (f = 0; 4 > f; f++) {
          d[f][c][0] = 255;

          for (var h = 0; h < e; h++) {
            for (var m = 0; m < b; m++) {
              var k = a[b * f + m + (e * c + h) * g.width];
              k < d[f][c][0] && (d[f][c][0] = k);
              k > d[f][c][1] && (d[f][c][1] = k);
            }
          }
        }
      }

      a = Array(4);

      for (b = 0; 4 > b; b++) {
        a[b] = Array(4);
      }

      for (c = 0; 4 > c; c++) {
        for (f = 0; 4 > f; f++) {
          a[f][c] = Math.floor((d[f][c][0] + d[f][c][1]) / 2);
        }
      }

      return a;
    },
    grayScaleToBitmap: function grayScaleToBitmap(a) {
      for (var b = g.getMiddleBrightnessPerArea(a), e = b.length, d = Math.floor(g.width / e), c = Math.floor(g.height / e), f = new ArrayBuffer(g.width * g.height), f = new Uint8Array(f), h = 0; h < e; h++) {
        for (var m = 0; m < e; m++) {
          for (var k = 0; k < c; k++) {
            for (var n = 0; n < d; n++) {
              f[d * m + n + (c * h + k) * g.width] = a[d * m + n + (c * h + k) * g.width] < b[m][h] ? !0 : !1;
            }
          }
        }
      }

      return f;
    },
    grayscale: function grayscale() {
      for (var a = new ArrayBuffer(g.width * g.height), a = new Uint8Array(a), b = 0; b < g.height; b++) {
        for (var e = 0; e < g.width; e++) {
          var d = g.getPixel(e, b);
          a[e + b * g.width] = d;
        }
      }

      return a;
    }
  },
      L = 3,
      W = 57,
      D = 8,
      K = 2;

  g.orderBestPatterns = function (a) {
    function b(a, b) {
      var c = a.X - b.X,
          d = a.Y - b.Y;
      return Math.sqrt(c * c + d * d);
    }

    var e = b(a[0], a[1]),
        d = b(a[1], a[2]),
        c = b(a[0], a[2]);
    d >= e && d >= c ? (d = a[0], e = a[1], c = a[2]) : c >= d && c >= e ? (d = a[1], e = a[0], c = a[2]) : (d = a[2], e = a[0], c = a[1]);
    if (0 > function (a, b, c) {
      var d = b.x;
      b = b.y;
      return (c.x - d) * (a.y - b) - (c.y - b) * (a.x - d);
    }(e, d, c)) var f = e,
        e = c,
        c = f;
    a[0] = e;
    a[1] = d;
    a[2] = c;
  };

  return g;
}();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = qrcode;
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(qrcode, "qrcode", "/Users/linyitang/Desktop/newWallet2/src/component/qrcode/qrcode.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/component/qrcode/qrcodeInput.jsx":
/*!**********************************************!*\
  !*** ./src/component/qrcode/qrcodeInput.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QRcodeInput; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qrcode */ "./src/component/qrcode/qrcode.js");
/* harmony import */ var _qrcode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_qrcode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-qr-reader */ "./node_modules/react-qr-reader/lib/index.js");
/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_qr_reader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _camera_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera.css */ "./src/component/qrcode/camera.css");
/* harmony import */ var _camera_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_camera_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/component/qrcode/qrcodeInput.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






function phone() {
  var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Android'];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) {
        return true;
      }
    }
  }

  return false;
}

var QRcodeInput =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QRcodeInput, _Component);

  function QRcodeInput(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QRcodeInput);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QRcodeInput).call(this, props));

    _this.componentWillUnmount = function () {};

    _this.openQRCamera = function (e) {
      if (phone()) {
        var reader = new FileReader();

        _qrcode__WEBPACK_IMPORTED_MODULE_6___default.a.callback = function (res) {
          if (res instanceof Error) {
            alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
          } else {
            _this.props.onChange({
              target: {
                value: res
              }
            });

            _this.forceUpdate();
          }
        };

        reader.onload = function () {
          _qrcode__WEBPACK_IMPORTED_MODULE_6___default.a.decode(reader.result);
        };

        reader.readAsDataURL(e.target.files[0]);
      } else {
        _this.setState({
          scanner: !_this.state.scanner
        });
      }
    };

    _this.state = {
      value: '',
      scanner: false
    };
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QRcodeInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control",
        defaultValue: this.props.value,
        value: this.state.value,
        type: this.props.type,
        placeholder: this.props.placeholder,
        onChange: function onChange(e) {
          _this2.setState({
            value: e.target.value,
            scanner: false
          });

          _this2.props.onChange(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "input-group-addon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, phone() ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "file",
        accept: "image/*",
        capture: "environment",
        onChange: this.openQRCamera,
        tabIndex: "-1",
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "button",
        onClick: this.openQRCamera,
        tabIndex: "-1",
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-qrcode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, this.state.scanner && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_qr_reader__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onClick: function onClick() {
          _this2.setState({
            scanner: false
          });
        },
        delay: 300,
        onError: console.log,
        onScan: function onScan(value) {
          if (value) {
            _this2.setState({
              value: value,
              scanner: false
            });

            _this2.props.onChange({
              target: {
                value: value
              }
            });
          }
        },
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return QRcodeInput;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(phone, "phone", "/Users/linyitang/Desktop/newWallet2/src/component/qrcode/qrcodeInput.jsx");
  reactHotLoader.register(QRcodeInput, "QRcodeInput", "/Users/linyitang/Desktop/newWallet2/src/component/qrcode/qrcodeInput.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: company, version, provider, privateKey, route, default */
/***/ (function(module) {

module.exports = {"company":"台灣證鏈科技","version":"0.0.1","provider":"https://ropsten.infura.io/1X7dJh7cug7xPnZdCjR1","privateKey":"1995072319950723199507231995072319950723199507231995072319950723","route":{"home":"/","about":"/about","bitcoin":{"general":{"balance":"/bitcoin/general/balance","transfer":"/bitcoin/general/transfer","otherBalance":"/bitcoin/general/otherBalance"}},"ethereum":{"general":{"balance":"/ethereum/general/balance","etherTransfer":"/ethereum/general/etherTransfer","transfer":"/ethereum/general/transfer","tokenTransfer":"/ethereum/general/tokenTransfer","tokenManage":"/ethereum/general/tokenManage","tokenCreate":"/ethereum/general/tokenCreate","ethNetwork":"/ethereum/general/ethNetwork","otherBalance":"/ethereum/general/otherBalance"}},"dapp":{"mutilSignWallet":{"balance":"/dapp/mutilSignWallet/balance","tokenManage":"/dapp/mutilSignWallet/tokenManage","etherTransfer":"/dapp/mutilSignWallet/etherTransfer","tokenTransfer":"/dapp/mutilSignWallet/tokenTransfer"},"electonDocument":{"sign":"/dapp/electonDocument/sign","manage":"/dapp/electonDocument/manage"},"voting":{"allProject":"/dapp/voting/allProject","createProject":"/dapp/voting/createProject","project":"/dapp/voting/project"},"ethMail":{"inbox":"/dapp/ethMail/inbox","reading":"/dapp/ethMail/reading","sendMail":"/dapp/ethMail/sendMail"},"game":{"1000guess":"/dapp/game/1000guess","winOrLose":"/dapp/game/winOrLose"}},"other":{"tool":{"utf8":"/other/tool/utf8","privateKeyTransfer":"/other/tool/privateKeyTransfer","qrcode":"/other/tool/qrcode","abiToHumanReadable":"/other/tool/abiToHumanReadable"}},"coldWallet":{"bitcoinColdWallet":{"createTx":"/coldWallet/bitcoinColdWallet/createTx","sendTx":"/coldWallet/bitcoinColdWallet/sendTx"},"ethereumColdWallet":{"createTx":"/coldWallet/ethereumColdWallet/createTx","sendTx":"/coldWallet/ethereumColdWallet/sendTx"}}}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mobx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobx */ "./src/mobx/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();










ethers_index_js__WEBPACK_IMPORTED_MODULE_8__["utils"].BigNumber.prototype.toJSON = function () {
  return this.toString();
};

var accountStore = new _mobx__WEBPACK_IMPORTED_MODULE_7__["AccountStore"]();
var bitcoinStore = new _mobx__WEBPACK_IMPORTED_MODULE_7__["BitcoinStore"](accountStore);
var ethereumStore = new _mobx__WEBPACK_IMPORTED_MODULE_7__["EthereumStore"](accountStore);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  accountStore: accountStore,
  bitcoinStore: bitcoinStore,
  ethereumStore: ethereumStore,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
  locale: "en",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
})))), document.getElementById('root')); // safe code
// try { if (window.opener) { window.opener.window.location.href; window.opener.window.close() } } catch (e) { window.open(window.location.href) }
// Loadable.preloadReady().then(() => {
//   hydrate(
//     <Provider>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </Provider>
//     ,
//     document.getElementById('root')
//   );
// });

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(accountStore, "accountStore", "/Users/linyitang/Desktop/newWallet2/src/index.js");
  reactHotLoader.register(bitcoinStore, "bitcoinStore", "/Users/linyitang/Desktop/newWallet2/src/index.js");
  reactHotLoader.register(ethereumStore, "ethereumStore", "/Users/linyitang/Desktop/newWallet2/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/content/index.js":
/*!*************************************!*\
  !*** ./src/layout/content/index.js ***!
  \*************************************/
/*! exports provided: default, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/content/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function Content(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-wrapper",
    style: {
      "minHeight": "901px"
    },
    onClick: function onClick(e) {
      if (document.querySelector('.control-sidebar-open')) {
        document.querySelector('[data-toggle="control-sidebar"]').click();
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "content row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Loding . . ."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children)));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "/Users/linyitang/Desktop/newWallet2/src/layout/content/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/footer/index.js":
/*!************************************!*\
  !*** ./src/layout/footer/index.js ***!
  \************************************/
/*! exports provided: default, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/footer/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "main-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-right hidden-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Version"), " ", _config_json__WEBPACK_IMPORTED_MODULE_1__.version), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Copyright \xA9 2018-2019 ", _config_json__WEBPACK_IMPORTED_MODULE_1__.company), " All rights reserved.");
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/Users/linyitang/Desktop/newWallet2/src/layout/footer/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/header/index.js":
/*!************************************!*\
  !*** ./src/layout/header/index.js ***!
  \************************************/
/*! exports provided: default, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/header/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





function phone() {
  var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Android'];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) {
        return true;
      }
    }
  }

  return false;
}

var Header = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.componentDidMount = function () {
      document.querySelector('.navbar-custom-menu').addEventListener('click', function (e) {
        if (phone()) {
          e.stopPropagation();
          document.querySelector('.control-sidebar-dark').classList.toggle('control-sidebar-open');
          e.cancelBubble = true;
          return false;
        }
      }, false); // if (document.querySelector('[data-toggle="control-sidebar"]').onclick) {
      //     document.querySelector('[data-toggle="control-sidebar"]').click()
      // }
    };

    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var title = this.props.ethereumStore.address ? this.props.ethereumStore.address.substr(0, 10) : '登入';
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "main-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "logo",
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "logo-mini",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u53F0\u7063\u8B49\u93C8\u79D1\u6280"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "logo-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u53F0\u7063\u8B49\u93C8\u79D1\u6280")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navbar navbar-static-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "sidebar-toggle",
        "data-toggle": "push-menu",
        role: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u4F38\u7E2E\u9215")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar-custom-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        "data-toggle": "control-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, title, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-gears",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(phone, "phone", "/Users/linyitang/Desktop/newWallet2/src/layout/header/index.js");
  reactHotLoader.register(Header, "Header", "/Users/linyitang/Desktop/newWallet2/src/layout/header/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! exports provided: default, Footer, Header, Setting, Sidebar, Content, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/layout/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/layout/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting */ "./src/layout/setting/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return _setting__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/layout/sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/layout/content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _content__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./src/layout/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var _default = {
  Footer: _footer__WEBPACK_IMPORTED_MODULE_0__["default"],
  Header: _header__WEBPACK_IMPORTED_MODULE_1__["default"],
  Setting: _setting__WEBPACK_IMPORTED_MODULE_2__["default"],
  Sidebar: _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
  Content: _content__WEBPACK_IMPORTED_MODULE_4__["default"],
  Modal: _modal__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/layout/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/modal/index.js":
/*!***********************************!*\
  !*** ./src/layout/modal/index.js ***!
  \***********************************/
/*! exports provided: default, Modal, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/modal/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function Modal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "modal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    role: "document",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.header)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
}

function toggle() {
  window.$('#modal').modal({
    backdrop: 'static'
  });
}


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Modal, "Modal", "/Users/linyitang/Desktop/newWallet2/src/layout/modal/index.js");
  reactHotLoader.register(toggle, "toggle", "/Users/linyitang/Desktop/newWallet2/src/layout/modal/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/account/detail.jsx":
/*!***********************************************!*\
  !*** ./src/layout/setting/account/detail.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qrcode-react */ "./node_modules/qrcode-react/dist/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_8__);






var _dec,
    _dec2,
    _dec3,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/detail.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { QRcodeView } from '../../../component/qrcode'


var LITECOIN = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
};
var Detail = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('bitcoinStore'), _dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('ethereumStore'), _dec3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('accountStore'), _dec(_class = _dec2(_class = _dec3(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Detail, _Component);

  function Detail(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Detail);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail).call(this, props));

    _this.logout = function () {
      _this.props.accountStore.logout();
    };

    _this.remove = function () {
      _this.props.accountStore.remove();
    };

    _this.showPrivateKey = function () {
      _this.setState({
        privateKey: '於3秒後顯示'
      });

      setTimeout(function () {
        _this.setState({
          showPrivateKey: true
        });

        setTimeout(function () {
          _this.count++;

          _this.setState({
            privateKey: "\u5DF2\u986F\u793A\u904E\u79C1\u9470".concat(_this.count, "\u6B21"),
            showPrivateKey: false
          });
        }, 60000);
      }, 3000);
    };

    _this.state = {
      addressType: "ethereumAddress",
      showPrivateKey: false,
      privateKey: ''
    };
    _this.count = 0;
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Detail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var keyPair;

      if (this.state.showPrivateKey) {
        switch (this.state.addressType) {
          case "ethereumAddress":
            this.state.privateKey = this.props.accountStore.privateKeyHex;
            break;

          case "segwitAddress":
          case "legacyAddress":
            keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(this.props.accountStore.privateKeyHex, 'hex'), {
              network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].bitcoin
            });
            this.state.privateKey = keyPair.toWIF();
            break;

          case "testnetSegwitAddress":
          case "testnetAddress":
            keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(this.props.accountStore.privateKeyHex, 'hex'), {
              network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet
            });
            this.state.privateKey = keyPair.toWIF();
            break;

          case "litecoinAddress":
            keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(this.props.accountStore.privateKeyHex, 'hex'), {
              network: LITECOIN
            });
            this.state.privateKey = keyPair.toWIF();
            break;
        }
      }

      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "1",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-sidebar-subheading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u7576\u524D\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        defaultValue: "ethereumAddress",
        onChange: function onChange(e) {
          _this2.setState({
            addressType: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "ethereumAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4EE5\u592A\u574A\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "legacyAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u6BD4\u7279\u5E63(legacy)\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "segwitAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\u6BD4\u7279\u5E63(segwit)\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "testnetAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\u6BD4\u7279\u5E63\u6E2C\u8A66\u93C8(legacy)\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "testnetSegwitAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u6BD4\u7279\u5E63\u6E2C\u8A66\u934A(segwit)\u5730\u5740"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "litecoinAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\u840A\u7279\u5E63\u5730\u5740")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          "display": "inline-flex",
          "padding": "5px",
          "backgroundColor": "#FFFFFF"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        size: 190,
        value: this.props['ethereumAddress' === this.state.addressType ? 'ethereumStore' : 'bitcoinStore']['ethereumAddress' === this.state.addressType ? 'address' : this.state.addressType],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          "overflow": "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, this.props['ethereumAddress' === this.state.addressType ? 'ethereumStore' : 'bitcoinStore']['ethereumAddress' === this.state.addressType ? 'address' : this.state.addressType])), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "2",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.showPrivateKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u986F\u793A\u79C1\u9470"), this.state.showPrivateKey && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          "display": "inline-flex",
          "padding": "5px",
          "backgroundColor": "#FFFFFF"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        size: 190,
        key: this.state.privateKey,
        value: this.state.privateKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          "overflow": "hidden"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.privateKey)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "3",
        className: "pull-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "\u767B\u51FA")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "4",
        className: "pull-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: this.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\u79FB\u9664\u5E33\u865F"))];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class) || _class) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LITECOIN, "LITECOIN", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/detail.jsx");
  reactHotLoader.register(Detail, "Detail", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/detail.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/layout/setting/account/index.jsx":
/*!**********************************************!*\
  !*** ./src/layout/setting/account/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountOfSetting; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail */ "./src/layout/setting/account/detail.jsx");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ "./src/layout/setting/account/login.jsx");






var _dec,
    _dec2,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/index.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var AccountOfSetting = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('ethereumStore'), _dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('accountStore'), _dec(_class = _dec2(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountOfSetting, _Component);

  function AccountOfSetting() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AccountOfSetting);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountOfSetting).apply(this, arguments));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AccountOfSetting, [{
    key: "render",
    value: function render() {
      var View = this.props.accountStore.privateKeyHex ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_detail__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_login__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-pane active",
        id: "account-manage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "control-sidebar-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "\u5E33\u865F\u7BA1\u7406"), View));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AccountOfSetting;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AccountOfSetting, "AccountOfSetting", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/account/item/brain.jsx":
/*!***************************************************!*\
  !*** ./src/layout/setting/account/item/brain.jsx ***!
  \***************************************************/
/*! exports provided: default, Brain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brain", function() { return Brain; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _component_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../component/password */ "./src/component/password/index.js");







var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/brain.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Brain = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('accountStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Brain, _Component);

  function Brain(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Brain);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Brain).call(this, props));

    _this.submit = function (e) {
      _this.props.accountStore.brainLogin(_this.state.email, _this.state.password, _this.state.remember, _this.state.name);
    };

    _this.state = {
      remember: true
    };
    _this.submit = _this.submit.bind(Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Brain, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return [this.state.remember && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u540D\u7A31"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Name",
        value: this.state.name,
        onChange: function onChange(e) {
          _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        key: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u5E33\u865F"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Email",
        value: this.state.email,
        onChange: function onChange(e) {
          _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "input-group-addon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fa fa-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        key: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u5BC6\u78BC"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_password__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: function onChange(e) {
          _this2.setState({
            password: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.remember,
        onChange: function onChange(e) {
          _this2.setState({
            remember: e.target.checked
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), " \u8A18\u4F4F\u6211"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u78BA\u8A8D")];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Brain;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Brain, "Brain", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/brain.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/account/item/import.jsx":
/*!****************************************************!*\
  !*** ./src/layout/setting/account/item/import.jsx ***!
  \****************************************************/
/*! exports provided: default, Import */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Import; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Import", function() { return Import; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _component_qrcode_qrcodeInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../component/qrcode/qrcodeInput */ "./src/component/qrcode/qrcodeInput.jsx");
/* harmony import */ var _component_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../component/password */ "./src/component/password/index.js");







var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/import.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Import = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('accountStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Import, _Component);

  function Import(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Import);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Import).call(this, props));

    _this.submit = function (e) {
      if (/0x\w{64}/.test(_this.state.privateKey)) {
        _this.state.privateKey = _this.state.privateKey.substr(2);
      }

      if (_this.state.privateKey.length != 64) {
        alert('私鑰長度不正確');
      } else {
        _this.props.accountStore.importLogin(_this.state.privateKey, _this.state.password, _this.state.remember, _this.state.name);
      }
    };

    _this.state = {
      remember: true,
      privateKey: ''
    };
    _this.submit = _this.submit.bind(Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Import, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return [this.state.remember && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u540D\u7A31"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Name",
        value: this.state.name,
        onChange: function onChange(e) {
          _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        key: "privateKey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u79C1\u9470"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_qrcode_qrcodeInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "password",
        placeholder: "PrivateKey",
        value: this.state.privateKey,
        onChange: function onChange(e) {
          _this2.setState({
            privateKey: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), this.state.remember && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u5BC6\u78BC"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_password__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onChange: function onChange(e) {
          _this2.setState({
            password: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        checked: this.state.remember,
        onChange: function onChange(e) {
          _this2.setState({
            remember: e.target.checked
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), " \u8A18\u4F4F\u6211"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u78BA\u8A8D")];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Import;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Import, "Import", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/import.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/account/item/save.jsx":
/*!**************************************************!*\
  !*** ./src/layout/setting/account/item/save.jsx ***!
  \**************************************************/
/*! exports provided: default, Save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Save", function() { return Save; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _component_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../component/password */ "./src/component/password/index.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/save.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Save = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('accountStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Save, _Component);

  function Save(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Save);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Save).call(this, props));

    _this.submit = function (e) {
      _this.props.accountStore.saveLogin(_this.accounts[_this.sha256], _this.state.password);
    };

    _this.state = {
      accounts: JSON.parse(localStorage.getItem('accounts') || '[]')
    };
    _this.accounts = {};

    _this.state.accounts.forEach(function (v) {
      _this.accounts[v.sha256] = v;
    });

    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Save, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.state.accounts.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
          key: x.sha256,
          value: x.sha256,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, x.name, " ", x.address && "- ".concat(x.address));
      });
      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: 1,
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u5E33\u865F"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        onChange: function onChange(e) {
          _this2.sha256 = e.target.value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u8ACB\u9078\u64C7"), options)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: 2,
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u5BC6\u78BC"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_password__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onChange: function onChange(e) {
          _this2.setState({
            password: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        key: 3,
        className: "btn btn-primary",
        onClick: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u78BA\u8A8D")];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Save;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Save, "Save", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/item/save.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/account/login.jsx":
/*!**********************************************!*\
  !*** ./src/layout/setting/account/login.jsx ***!
  \**********************************************/
/*! exports provided: default, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _item_brain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item/brain */ "./src/layout/setting/account/item/brain.jsx");
/* harmony import */ var _item_import__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/import */ "./src/layout/setting/account/item/import.jsx");
/* harmony import */ var _item_save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item/save */ "./src/layout/setting/account/item/save.jsx");





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/login.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { HDWallet } from './item/hd';



var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));

    _this.changeWallet = function (e) {
      _this.setState({
        accountComponentIndex: e.target.value
      });
    };

    _this.state = {
      accountComponentIndex: "0"
    };
    _this.wallets = [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_item_save__WEBPACK_IMPORTED_MODULE_8__["Save"], {
      key: "save",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_item_brain__WEBPACK_IMPORTED_MODULE_6__["Brain"], {
      key: "brain",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_item_import__WEBPACK_IMPORTED_MODULE_7__["Import"], {
      key: "import",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })];
    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "choose",
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "form-control",
        onChange: this.changeWallet,
        defaultValue: '0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\u5132\u5B58\u9322\u5305"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u5927\u8166\u9322\u5305"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u532F\u5165\u79C1\u9470"))), this.wallets[this.state.accountComponentIndex]];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, "Login", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/account/login.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/setting/index.js":
/*!*************************************!*\
  !*** ./src/layout/setting/index.js ***!
  \*************************************/
/*! exports provided: default, Setting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Setting", function() { return Setting; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account */ "./src/layout/setting/account/index.jsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");






var _dec,
    _dec2,
    _dec3,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/setting/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Setting = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('accountStore'), _dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('bitcoinStore'), _dec3 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])('ethereumStore'), _dec(_class = _dec2(_class = _dec3(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Setting, _Component);

  function Setting(props) {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Setting);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Setting).call(this, props));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Setting, [{
    key: "render",
    value: function render() {
      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        key: "setting",
        className: "control-sidebar control-sidebar-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-tabs nav-justified control-sidebar-tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#account-manage",
        "data-toggle": "tab",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#general-setting",
        "data-toggle": "tab",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-gears",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_account__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        key: "control-sidebar-bg",
        className: "control-sidebar-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Setting;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class) || _class) || _class);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Setting, "Setting", "/Users/linyitang/Desktop/newWallet2/src/layout/setting/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/component/index.jsx":
/*!************************************************!*\
  !*** ./src/layout/sidebar/component/index.jsx ***!
  \************************************************/
/*! exports provided: Leaf, Root, Stem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaf */ "./src/layout/sidebar/component/leaf.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Leaf", function() { return _leaf__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ "./src/layout/sidebar/component/root.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return _root__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _stem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stem */ "./src/layout/sidebar/component/stem.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stem", function() { return _stem__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/layout/sidebar/component/leaf.jsx":
/*!***********************************************!*\
  !*** ./src/layout/sidebar/component/leaf.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leaf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/leaf.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



function Leaf(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: props.to,
    style: {
      'textIndent': '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), ' ' + props.title)));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Leaf, "Leaf", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/leaf.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/component/root.jsx":
/*!***********************************************!*\
  !*** ./src/layout/sidebar/component/root.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Root; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/root.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function Root(props) {
  return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: props.header,
    className: "header",
    style: {
      color: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.header), props.children];
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Root, "Root", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/root.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/component/stem.jsx":
/*!***********************************************!*\
  !*** ./src/layout/sidebar/component/stem.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/stem.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


function Stem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "treeview tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: 'fa ' + props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pull-right-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-left pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "treeview-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Stem, "Stem", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/component/stem.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/index.js":
/*!*************************************!*\
  !*** ./src/layout/sidebar/index.js ***!
  \*************************************/
/*! exports provided: default, Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/layout/sidebar/item/index.jsx");
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



function Sidebar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "main-sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "sidebar",
    style: {
      "height": "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sidebar-menu tree",
    "data-widget": "tree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["Bitcoin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["Ethereum"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["Dapp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["Exchange"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_1__["Other"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
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

  reactHotLoader.register(Sidebar, "Sidebar", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/bitcoin.jsx":
/*!*********************************************!*\
  !*** ./src/layout/sidebar/item/bitcoin.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bitcoin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/bitcoin.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function Bitcoin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    header: "Bitcoin/Litecoin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u4E00\u822C\u64CD\u4F5C",
    icon: "fa-laptop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u67E5\u8A62\u9918\u984D",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.bitcoin.general.balance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u6536\u4ED8\u6B3E",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.bitcoin.general.transfer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u67E5\u8A62\u4ED6\u4EBA\u5E33\u865F\u9918\u984D",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.bitcoin.general.otherBalance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Bitcoin, "Bitcoin", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/bitcoin.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/coldWallet.jsx":
/*!************************************************!*\
  !*** ./src/layout/sidebar/item/coldWallet.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColdWallet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/coldWallet.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function ColdWallet(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    header: "\u51B7\u9322\u5305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u6BD4\u7279\u5E63\u51B7\u9322\u5305",
    icon: "fa-qrcode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u767C\u8D77\u4EA4\u6613",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.bitcoinColdWallet.createTx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u767C\u9001\u4EA4\u6613",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.bitcoinColdWallet.sendTx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u4EE5\u592A\u574A\u51B7\u9322\u5305",
    icon: "fa-qrcode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u767C\u8D77\u4EA4\u6613",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.ethereumColdWallet.createTx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u767C\u9001\u4EA4\u6613",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.ethereumColdWallet.sendTx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ColdWallet, "ColdWallet", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/coldWallet.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/dapp.jsx":
/*!******************************************!*\
  !*** ./src/layout/sidebar/item/dapp.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dapp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/dapp.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function Dapp(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    header: "Dapp\u5C08\u5340",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u96FB\u5B50\u516C\u8B49",
    icon: "fa-files-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u7C3D\u7F72",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.electonDocument.sign,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u6295\u7968",
    icon: "fa-users",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u6295\u7968\u6E05\u55AE",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.voting.allProject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u5EFA\u7ACB\u6295\u7968",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.voting.createProject,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "ethMail",
    icon: "fa-envelope-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u6536\u4FE1\u593E",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.ethMail.inbox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u5BC4\u4FE1",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.ethMail.sendMail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u904A\u6232",
    icon: "fa-gamepad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u4E0B\u6CE8\u731C\u5E78\u904B\u6578\u5B57\u5F97\u5927\u734E",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.game['1000guess'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u901F\u98DF\u6A02\u900F",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.game.winOrLose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dapp, "Dapp", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/dapp.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/ethereum.jsx":
/*!**********************************************!*\
  !*** ./src/layout/sidebar/item/ethereum.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ethereum; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "./src/config.json", 1);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/ethereum.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Ethereum = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Ethereum, _Component);

  function Ethereum() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ethereum);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Ethereum).apply(this, arguments));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ethereum, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Root"], {
        header: "Ethereum",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Stem"], {
        title: "\u4E00\u822C\u64CD\u4F5C",
        icon: "fa-laptop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "\u67E5\u8A62\u9918\u984D",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.balance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), this.props.ethereumStore.networkId === 1 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "\u6536\u4ED8\u6B3E",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.transfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), this.props.ethereumStore.networkId === 3 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "Ether\u6536\u4ED8\u6B3E",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.etherTransfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), this.props.ethereumStore.networkId === 3 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "Token\u6536\u4ED8\u6B3E",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.tokenTransfer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "Ethereum\u7DB2\u8DEF",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.ethNetwork,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_6__["Leaf"], {
        title: "\u67E5\u8A62\u4ED6\u4EBA\u5E33\u865F\u9918\u984D",
        to: _config_json__WEBPACK_IMPORTED_MODULE_7__.route.ethereum.general.otherBalance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Ethereum;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Ethereum, "Ethereum", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/ethereum.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/exchange.jsx":
/*!**********************************************!*\
  !*** ./src/layout/sidebar/item/exchange.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exchange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/exchange.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function Exchange(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    header: "\u4EA4\u6613\u6240",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.newtonxchange.pro/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-balance-scale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, '牛盾交易所'))));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Exchange, "Exchange", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/exchange.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layout/sidebar/item/index.jsx":
/*!*******************************************!*\
  !*** ./src/layout/sidebar/item/index.jsx ***!
  \*******************************************/
/*! exports provided: Bitcoin, Ethereum, Other, ColdWallet, Exchange, Dapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bitcoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitcoin */ "./src/layout/sidebar/item/bitcoin.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bitcoin", function() { return _bitcoin__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethereum */ "./src/layout/sidebar/item/ethereum.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ethereum", function() { return _ethereum__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other */ "./src/layout/sidebar/item/other.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Other", function() { return _other__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _coldWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coldWallet */ "./src/layout/sidebar/item/coldWallet.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColdWallet", function() { return _coldWallet__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange */ "./src/layout/sidebar/item/exchange.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exchange", function() { return _exchange__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _dapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dapp */ "./src/layout/sidebar/item/dapp.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dapp", function() { return _dapp__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/layout/sidebar/item/other.jsx":
/*!*******************************************!*\
  !*** ./src/layout/sidebar/item/other.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Other; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/index */ "./src/layout/sidebar/component/index.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "./src/config.json", 1);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/other.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





function Other(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    header: "Other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Stem"], {
    title: "\u5C0F\u5DE5\u5177",
    icon: "fa-cut",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "UTF8\u8F49\u63DB",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.utf8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "\u79C1\u9470\u683C\u5F0F\u8F49\u63DB",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.privateKeyTransfer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "QRCode",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.qrcode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_index__WEBPACK_IMPORTED_MODULE_1__["Leaf"], {
    title: "ABI\u4EBA\u985E\u53EF\u8B80\u683C\u5F0F\u8F49\u63DB",
    to: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.abiToHumanReadable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, '開發團隊'))));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Other, "Other", "/Users/linyitang/Desktop/newWallet2/src/layout/sidebar/item/other.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/passwordEDcode.js":
/*!***********************************!*\
  !*** ./src/lib/passwordEDcode.js ***!
  \***********************************/
/*! exports provided: encode, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aes-js */ "./node_modules/aes-js/index.js");
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aes_js__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function encode(text, pw) {
  var pwhashBytes = ethereumjs_util__WEBPACK_IMPORTED_MODULE_0___default.a.sha256(pw);
  var textBytes = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.utf8.toBytes(text); //encrypt

  var aesCtr = new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.ModeOfOperation.ctr(pwhashBytes, new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.Counter(5));
  var encryptedBytes = aesCtr.encrypt(textBytes);
  var encryptedHex = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}

function decode(encryptedHex, pw) {
  var pwhashBytes = ethereumjs_util__WEBPACK_IMPORTED_MODULE_0___default.a.sha256(pw); //decrypt

  var aesCtr = new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.ModeOfOperation.ctr(pwhashBytes, new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.Counter(5));
  var encryptedBytes = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.hex.toBytes(encryptedHex);
  var textBytes = aesCtr.decrypt(encryptedBytes); // Convert our bytes back into text

  var text = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.utf8.fromBytes(textBytes);
  return text;
}


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "/Users/linyitang/Desktop/newWallet2/src/lib/passwordEDcode.js");
  reactHotLoader.register(decode, "decode", "/Users/linyitang/Desktop/newWallet2/src/lib/passwordEDcode.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mobx/account.js":
/*!*****************************!*\
  !*** ./src/mobx/account.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountStore; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_passwordEDcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/passwordEDcode */ "./src/lib/passwordEDcode.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_8__);






var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var AccountStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec3 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec4 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec5 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, (_class =
/*#__PURE__*/
function () {
  function AccountStore() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AccountStore);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "privateKeyHex", _descriptor, this);
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AccountStore, [{
    key: "logout",
    value: function logout() {
      this.privateKeyHex = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this = this;

      this.logout();
      var accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
      accounts = accounts.filter(function (x) {
        return x.sha256 !== _this.sha256;
      });
      localStorage.setItem('accounts', JSON.stringify(accounts));
    }
  }, {
    key: "brainLogin",
    value: function brainLogin(email, password, remember) {
      var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      this.privateKeyHex = toPrivateKey(email, password);
      if (remember) this.save(this.privateKeyHex, password, name);
    }
  }, {
    key: "importLogin",
    value: function importLogin(privateKey, password, remember) {
      var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      this.privateKeyHex = privateKey, password;
      if (remember) this.save(this.privateKeyHex, password, name);
    }
  }, {
    key: "saveLogin",
    value: function saveLogin() {
      var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        encode: ''
      };
      var password = arguments.length > 1 ? arguments[1] : undefined;
      var privateKeyHex = Object(_lib_passwordEDcode__WEBPACK_IMPORTED_MODULE_7__["decode"])(account.encode, password);

      if (account.sha256 !== ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default.a.sha256(privateKeyHex).toString('hex')) {
        this.privateKeyHex = '';
        alert('密碼錯誤');
      } else {
        this.sha256 = account.sha256;
        this.privateKeyHex = privateKeyHex;
      }
    }
  }, {
    key: "save",
    value: function save(privateKey, password, name) {
      var accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
      accounts.push({
        sha256: ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default.a.sha256(privateKey).toString('hex'),
        name: name,
        encode: Object(_lib_passwordEDcode__WEBPACK_IMPORTED_MODULE_7__["encode"])(privateKey, password),
        address: new ethers_index_js__WEBPACK_IMPORTED_MODULE_8__["Wallet"](privateKey).address.substr(0, 10)
      });
      localStorage.setItem('accounts', JSON.stringify(accounts));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AccountStore;
}(), (_descriptor = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "privateKeyHex", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "logout", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "remove", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "brainLogin", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "brainLogin"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "importLogin", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "importLogin"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "saveLogin", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "saveLogin"), _class.prototype)), _class));


function toPrivateKey(email, pass) {
  var s = email;
  s += '|' + pass + '|';
  s += s.length + '|!@' + (pass.length * 7 + email.length) * 7;
  var regchars = pass.match(/[a-z]+/g) ? pass.match(/[a-z]+/g).length : 1;
  var regupchars = pass.match(/[A-Z]+/g) ? pass.match(/[A-Z]+/g).length : 1;
  var regnums = pass.match(/[0-9]+/g) ? pass.match(/[0-9]+/g).length : 1;
  s += (regnums + regchars + regupchars) * pass.length + '3571';
  s += s + '' + s;

  for (var i = 0; i <= 50; i++) {
    s = ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default.a.sha256(s);
  }

  var privateKey = ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default.a.sha256(s);
  return privateKey.toString('hex');
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AccountStore, "AccountStore", "/Users/linyitang/Desktop/newWallet2/src/mobx/account.js");
  reactHotLoader.register(toPrivateKey, "toPrivateKey", "/Users/linyitang/Desktop/newWallet2/src/mobx/account.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mobx/bitcoin.js":
/*!*****************************!*\
  !*** ./src/mobx/bitcoin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitcoinStore; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bitcoinjs-lib */ "./node_modules/bitcoinjs-lib/src/index.js");
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__);






var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var LITECOIN = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
};
var BitcoinStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, (_class =
/*#__PURE__*/
function () {
  function BitcoinStore(accountStore) {
    var _this = this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BitcoinStore);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "litecoinAddress", _descriptor, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "testnetAddress", _descriptor2, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "testnetSegwitAddress", _descriptor3, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "legacyAddress", _descriptor4, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "segwitAddress", _descriptor5, this);

    Object(mobx__WEBPACK_IMPORTED_MODULE_5__["autorun"])(function () {
      _this.setAddress(accountStore.privateKeyHex);
    });
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BitcoinStore, [{
    key: "setAddress",
    value: function setAddress(privateKeyHex) {
      var keyPair;

      if (!privateKeyHex) {
        this.litecoinAddress = '';
        this.testnetAddress = '';
        this.testnetSegwitAddress = '';
        this.legacyAddress = '';
        this.segwitAddress = '';
      } else {
        keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
          network: LITECOIN
        });
        this.litecoinAddress = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2pkh({
          pubkey: keyPair.publicKey,
          network: LITECOIN
        }).address;
        keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet
        });
        this.testnetAddress = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2pkh({
          pubkey: keyPair.publicKey,
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet
        }).address;
        keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet
        });
        this.testnetSegwitAddress = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2sh({
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet,
          redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2wpkh({
            pubkey: keyPair.publicKey,
            network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].testnet
          })
        }).address;
        bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].bitcoin
        });
        this.legacyAddress = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2pkh({
          pubkey: keyPair.publicKey,
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].bitcoin
        }).address;
        keyPair = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["ECPair"].fromPrivateKey(Buffer.from(privateKeyHex, 'hex'), {
          network: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["networks"].bitcoin
        });
        this.segwitAddress = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2sh({
          redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_6__["payments"].p2wpkh({
            pubkey: keyPair.publicKey
          })
        }).address;
      }

      ;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinStore;
}(), (_descriptor = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "litecoinAddress", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "testnetAddress", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "testnetSegwitAddress", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "legacyAddress", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "segwitAddress", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "setAddress", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setAddress"), _class.prototype)), _class));

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LITECOIN, "LITECOIN", "/Users/linyitang/Desktop/newWallet2/src/mobx/bitcoin.js");
  reactHotLoader.register(BitcoinStore, "BitcoinStore", "/Users/linyitang/Desktop/newWallet2/src/mobx/bitcoin.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/mobx/ethereum.js":
/*!******************************!*\
  !*** ./src/mobx/ethereum.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EthereumStore; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers/index.js */ "./node_modules/ethers/index.js");
/* harmony import */ var ethers_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers_index_js__WEBPACK_IMPORTED_MODULE_6__);






var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var EthereumStore = (_dec = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_5__["action"].bound, (_class =
/*#__PURE__*/
function () {
  function EthereumStore(accountStore) {
    var _this = this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EthereumStore);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "wallet", _descriptor, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "provider", _descriptor2, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "networkId", _descriptor3, this);

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "address", _descriptor4, this);

    Object(mobx__WEBPACK_IMPORTED_MODULE_5__["autorun"])(function () {
      _this.setWallet(accountStore.privateKeyHex);
    });
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EthereumStore, [{
    key: "setWallet",
    value: function setWallet(privateKeyHex) {
      if (!privateKeyHex) {
        this.address = '';
      } else {
        this.wallet = new ethers_index_js__WEBPACK_IMPORTED_MODULE_6__["Wallet"](privateKeyHex);
        this.address = this.wallet.address;
      }
    }
  }, {
    key: "setProvider",
    value: function setProvider(id) {
      localStorage.setItem('eth_net', id);
      this.provider = ethers_index_js__WEBPACK_IMPORTED_MODULE_6__["getDefaultProvider"](id);
      this.networkId = id;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EthereumStore;
}(), (_descriptor = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "wallet", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "provider", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return ethers_index_js__WEBPACK_IMPORTED_MODULE_6__["getDefaultProvider"](parseInt(localStorage.getItem('eth_net') || 3));
  }
}), _descriptor3 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "networkId", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return parseInt(localStorage.getItem('eth_net') || 3);
  }
}), _descriptor4 = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "address", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "setWallet", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setWallet"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "setProvider", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setProvider"), _class.prototype)), _class));

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EthereumStore, "EthereumStore", "/Users/linyitang/Desktop/newWallet2/src/mobx/ethereum.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mobx/index.js":
/*!***************************!*\
  !*** ./src/mobx/index.js ***!
  \***************************/
/*! exports provided: default, AccountStore, BitcoinStore, EthereumStore, ObjectStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ "./src/mobx/account.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountStore", function() { return _account__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bitcoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bitcoin */ "./src/mobx/bitcoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitcoinStore", function() { return _bitcoin__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ethereum */ "./src/mobx/ethereum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EthereumStore", function() { return _ethereum__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./src/mobx/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectStore", function() { return _object__WEBPACK_IMPORTED_MODULE_3__["default"]; });

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _default = {
  AccountStore: _account__WEBPACK_IMPORTED_MODULE_0__["default"],
  BitcoinStore: _bitcoin__WEBPACK_IMPORTED_MODULE_1__["default"],
  EthereumStore: _ethereum__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/mobx/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/mobx/object.js":
/*!****************************!*\
  !*** ./src/mobx/object.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");





var _dec, _dec2, _class;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var object = {};
var array = [];
var ObjectState = (_dec = mobx__WEBPACK_IMPORTED_MODULE_4__["action"].bound, _dec2 = mobx__WEBPACK_IMPORTED_MODULE_4__["action"].bound, (_class =
/*#__PURE__*/
function () {
  function ObjectState() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ObjectState);
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ObjectState, [{
    key: "setObject",
    value: function setObject(_object) {
      object = Object.assign({}, _object);
    }
  }, {
    key: "setArray",
    value: function setArray(_array) {
      array = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_array);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: "object",
    get: function get() {
      return object;
    }
  }, {
    key: "array",
    get: function get() {
      return array;
    }
  }]);

  return ObjectState;
}(), (Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "object", [mobx__WEBPACK_IMPORTED_MODULE_4__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "object"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "array", [mobx__WEBPACK_IMPORTED_MODULE_4__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "array"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "setObject", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setObject"), _class.prototype), Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "setArray", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setArray"), _class.prototype)), _class));
var _default = ObjectState;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(object, "object", "/Users/linyitang/Desktop/newWallet2/src/mobx/object.js");
  reactHotLoader.register(array, "array", "/Users/linyitang/Desktop/newWallet2/src/mobx/object.js");
  reactHotLoader.register(ObjectState, "ObjectState", "/Users/linyitang/Desktop/newWallet2/src/mobx/object.js");
  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/mobx/object.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/bitcoin/index.js":
/*!***********************************!*\
  !*** ./src/page/bitcoin/index.js ***!
  \***********************************/
/*! exports provided: default, BitcoinRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitcoinRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinRoute", function() { return BitcoinRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _pleaseLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pleaseLogin */ "./src/page/pleaseLogin.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Balance = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./general/balance */ "./src/page/bitcoin/general/balance.jsx"));
});
var OtherBalance = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./general/otherBalance */ "./src/page/bitcoin/general/otherBalance.jsx"));
});
var Transfer = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(42), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./general/transfer */ "./src/page/bitcoin/general/transfer.jsx"));
});
function BitcoinRoute(props) {
  return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "balance",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_3__.route.bitcoin.general.balance,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
        accountState: props.accountState,
        ethereumState: props.ethereumState,
        langugeState: props.langugeState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Balance, {
        accountState: props.accountState,
        bitcoinState: props.bitcoinState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "transfer",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_3__.route.bitcoin.general.transfer,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
        accountState: props.accountState,
        ethereumState: props.ethereumState,
        langugeState: props.langugeState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Transfer, {
        accountState: props.accountState,
        bitcoinState: props.bitcoinState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "otherbalance",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_3__.route.bitcoin.general.otherBalance,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OtherBalance, {
        accountState: props.accountState,
        bitcoinState: props.bitcoinState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })];
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/index.js");
  reactHotLoader.register(OtherBalance, "OtherBalance", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/index.js");
  reactHotLoader.register(Transfer, "Transfer", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/index.js");
  reactHotLoader.register(BitcoinRoute, "BitcoinRoute", "/Users/linyitang/Desktop/newWallet2/src/page/bitcoin/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/coldWallet/index.jsx":
/*!***************************************!*\
  !*** ./src/page/coldWallet/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColdWalletRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { BitcoinCreateTx, BitcoinSendTx, EthereumCreateTx, EthereumSendTx } from './Loadables/Loadables'

var BitcoinCreateTx = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./bitcoinColdWallet/createTx */ "./src/page/coldWallet/bitcoinColdWallet/createTx.jsx"));
});
var BitcoinSendTx = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./bitcoinColdWallet/sendTx */ "./src/page/coldWallet/bitcoinColdWallet/sendTx.jsx"));
});
var EthereumCreateTx = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, /*! ./ethereumColdWallet/createTx */ "./src/page/coldWallet/ethereumColdWallet/createTx.jsx"));
});
var EthereumSendTx = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./ethereumColdWallet/sendTx */ "./src/page/coldWallet/ethereumColdWallet/sendTx.jsx"));
});
function ColdWalletRoute(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.bitcoinColdWallet.createTx,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BitcoinCreateTx // langugeState={props.langugeState}
      , {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.bitcoinColdWallet.sendTx,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BitcoinSendTx // langugeState={props.langugeState}
      , {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.ethereumColdWallet.createTx,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EthereumCreateTx, {
        ethereumState: props.ethereumState,
        langugeState: props.langugeState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.coldWallet.ethereumColdWallet.sendTx,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EthereumSendTx, {
        langugeState: props.langugeState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
}
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinCreateTx, "BitcoinCreateTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx");
  reactHotLoader.register(BitcoinSendTx, "BitcoinSendTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx");
  reactHotLoader.register(EthereumCreateTx, "EthereumCreateTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx");
  reactHotLoader.register(EthereumSendTx, "EthereumSendTx", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx");
  reactHotLoader.register(ColdWalletRoute, "ColdWalletRoute", "/Users/linyitang/Desktop/newWallet2/src/page/coldWallet/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/dapp/index.js":
/*!********************************!*\
  !*** ./src/page/dapp/index.js ***!
  \********************************/
/*! exports provided: default, Dapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dapp", function() { return Dapp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
/* harmony import */ var _pleaseLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pleaseLogin */ "./src/page/pleaseLogin.jsx");
/* harmony import */ var _mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mobx */ "./src/mobx/index.js");
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var Balance = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./multiSignWallet/balance */ "./src/page/dapp/multiSignWallet/balance.jsx"));
});
var Manage = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./multiSignWallet/manage */ "./src/page/dapp/multiSignWallet/manage.jsx"));
});
var Transfer = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./multiSignWallet/transfer */ "./src/page/dapp/multiSignWallet/transfer.jsx"));
});
var EDSign = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(43), __webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ./electronicDocument/sign */ "./src/page/dapp/electronicDocument/sign.jsx"));
});
var EDCreateContract = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./electronicDocument/createContract */ "./src/page/dapp/electronicDocument/createContract.jsx"));
});
var EDManage = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./electronicDocument/manage */ "./src/page/dapp/electronicDocument/manage.jsx"));
});
var SendMail = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ./ethMail/sendMail */ "./src/page/dapp/ethMail/sendMail.jsx"));
});
var Reading = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./ethMail/reading */ "./src/page/dapp/ethMail/reading.jsx"));
});
var Inbox = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ./ethMail/inbox */ "./src/page/dapp/ethMail/inbox.jsx"));
});
var Guess1000 = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(1), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./game/1000guess */ "./src/page/dapp/game/1000guess.jsx"));
});
var WinOrLost = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, /*! ./game/winOrLose */ "./src/page/dapp/game/winOrLose.jsx"));
});
var CreateProject = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./voting/createProject */ "./src/page/dapp/voting/createProject.jsx"));
});
var AllProject = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, /*! ./voting/allProject */ "./src/page/dapp/voting/allProject.jsx"));
});
var VotingProject = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(30)]).then(__webpack_require__.bind(null, /*! ./voting/votingProject */ "./src/page/dapp/voting/votingProject.jsx"));
});
function Dapp(props) {
  var voting = new _mobx__WEBPACK_IMPORTED_MODULE_4__["ObjectStore"]();
  var ethMail = new _mobx__WEBPACK_IMPORTED_MODULE_4__["ObjectStore"]();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "balance",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.mutilSignWallet.balance,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Balance, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "tokenManage",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.mutilSignWallet.tokenManage,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Manage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "etherTransfer",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.mutilSignWallet.etherTransfer,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Transfer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "tokenTransfer",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.mutilSignWallet.tokenTransfer,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Transfer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "sign",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.electonDocument.sign,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        unlogin: true,
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EDSign, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "manage",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.electonDocument.manage,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EDManage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "allProject",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.voting.allProject,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllProject, {
        voting: voting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "createProject",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.voting.createProject,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        unlogin: true,
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateProject, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "project",
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.voting.project,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VotingProject, {
        voting: voting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "inbox",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.ethMail.inbox,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inbox, {
        ethMail: ethMail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "reading",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.ethMail.reading,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Reading, {
        ethMail: ethMail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "sendMail",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.ethMail.sendMail,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SendMail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "1000guess",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.game['1000guess'],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        unlogin: true,
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Guess1000, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), ",", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "winOrLose",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.dapp.game.winOrLose,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        unlogin: true,
        networkId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WinOrLost, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Manage, "Manage", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Transfer, "Transfer", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(EDSign, "EDSign", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(EDCreateContract, "EDCreateContract", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(EDManage, "EDManage", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(SendMail, "SendMail", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Reading, "Reading", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Inbox, "Inbox", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Guess1000, "Guess1000", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(WinOrLost, "WinOrLost", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(CreateProject, "CreateProject", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(AllProject, "AllProject", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(VotingProject, "VotingProject", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  reactHotLoader.register(Dapp, "Dapp", "/Users/linyitang/Desktop/newWallet2/src/page/dapp/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/ethereum/general/_network.jsx":
/*!************************************************!*\
  !*** ./src/page/ethereum/general/_network.jsx ***!
  \************************************************/
/*! exports provided: default, _Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Network", function() { return _Network; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.json */ "./src/page/ethereum/general/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/page/ethereum/general/config.json", 1);






var _dec,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/_network.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var _Network = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('ethereumStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_Network, _Component);

  function _Network(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _Network);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_Network).call(this, props));

    _this.setProvider = function (provider) {
      _this.props.ethereumStore.setProvider(provider);

      _this.forceUpdate();
    };

    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_Network, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Ethereum Network", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "radio",
        name: "network",
        checked: this.props.ethereumStore.networkId === 1,
        onChange: function onChange() {
          _this2.setProvider(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), "\u4E3B\u7DB2\u8DEF")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "radio",
        name: "network",
        checked: this.props.ethereumStore.networkId === 3,
        onChange: function onChange() {
          _this2.setProvider(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), "\u6E2C\u8A66\u7DB2\u8DEF")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return _Network;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class);



;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_Network, "_Network", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/general/_network.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/ethereum/general/config.json":
/*!***********************************************!*\
  !*** ./src/page/ethereum/general/config.json ***!
  \***********************************************/
/*! exports provided: ABI, contractAddress, bytecode, eth_mainnet, eth_ropsten, default */
/***/ (function(module) {

module.exports = {"ABI":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"contractAddress":"","bytecode":"","eth_mainnet":"https://mainnet.infura.io/1X7dJh7cug7xPnZdCjR1","eth_ropsten":"https://ropsten.infura.io/1X7dJh7cug7xPnZdCjR1"};

/***/ }),

/***/ "./src/page/ethereum/index.jsx":
/*!*************************************!*\
  !*** ./src/page/ethereum/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EthereumRoute; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _pleaseLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pleaseLogin */ "./src/page/pleaseLogin.jsx");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);





var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Balance = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./general/balance */ "./src/page/ethereum/general/balance.jsx"));
}); // const TokenCreate = lazy(() => import('./general/tokenCreate'));

var Network = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./general/network */ "./src/page/ethereum/general/network.jsx"));
});
var OtherBalance = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./general/otherBalance */ "./src/page/ethereum/general/otherBalance.jsx"));
});
var Transfer = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(1), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./general/transfer */ "./src/page/ethereum/general/transfer.jsx"));
});
var EtherTransfer = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! ./general/etherTransfer */ "./src/page/ethereum/general/etherTransfer.jsx"));
});
var TokenTransfer = Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./general/tokenTransfer */ "./src/page/ethereum/general/tokenTransfer.jsx"));
});

var EthereumRoute =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EthereumRoute, _Component);

  function EthereumRoute() {
    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EthereumRoute);

    return Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EthereumRoute).apply(this, arguments));
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EthereumRoute, [{
    key: "render",
    value: function render() {
      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "balance",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.balance,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Balance, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "etherTransfer",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.etherTransfer,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
            networkId: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(EtherTransfer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), // <Route exact path={Config.route.ethereum.general.tokenManage} render={() => (
      //     <PleaseLogin>
      //         <TokenManage/>
      //     </PleaseLogin>
      // )} />,
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "tokenTransfer",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.tokenTransfer,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
            networkId: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TokenTransfer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "transfer",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.transfer,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
            networkId: "1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Transfer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "tokenCreate",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.tokenCreate,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TokenCreate, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "network",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.ethNetwork,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Network, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        key: "otherBalance",
        exact: true,
        path: _config_json__WEBPACK_IMPORTED_MODULE_8__.route.ethereum.general.otherBalance,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_pleaseLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
            unlogin: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(OtherBalance, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EthereumRoute;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Balance, "Balance", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(Network, "Network", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(OtherBalance, "OtherBalance", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(Transfer, "Transfer", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(EtherTransfer, "EtherTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(TokenTransfer, "TokenTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  reactHotLoader.register(EthereumRoute, "EthereumRoute", "/Users/linyitang/Desktop/newWallet2/src/page/ethereum/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/index.js":
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
/*! exports provided: default, BitcoinRoute, EthereumRoute, OtherRoute, WelcomeRoute, Dapp, ColdWalletRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _bitcoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitcoin */ "./src/page/bitcoin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BitcoinRoute", function() { return _bitcoin__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethereum */ "./src/page/ethereum/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EthereumRoute", function() { return _ethereum__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _dapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dapp */ "./src/page/dapp/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dapp", function() { return _dapp__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other */ "./src/page/other/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtherRoute", function() { return _other__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome */ "./src/page/welcome/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoute", function() { return _welcome__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _coldWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coldWallet */ "./src/page/coldWallet/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColdWalletRoute", function() { return _coldWallet__WEBPACK_IMPORTED_MODULE_5__["default"]; });

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







var _default = {
  BitcoinRoute: _bitcoin__WEBPACK_IMPORTED_MODULE_0__["default"],
  EthereumRoute: _ethereum__WEBPACK_IMPORTED_MODULE_1__["default"],
  OtherRoute: _other__WEBPACK_IMPORTED_MODULE_3__["default"],
  WelcomeRoute: _welcome__WEBPACK_IMPORTED_MODULE_4__["default"],
  Dapp: _dapp__WEBPACK_IMPORTED_MODULE_2__["default"],
  ColdWalletRoute: _coldWallet__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/linyitang/Desktop/newWallet2/src/page/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/other/index.jsx":
/*!**********************************!*\
  !*** ./src/page/other/index.jsx ***!
  \**********************************/
/*! exports provided: default, OtherRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OtherRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherRoute", function() { return OtherRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var UTF8Convert = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, /*! ./tool/utf8 */ "./src/page/other/tool/utf8.jsx"));
});
var PrivateKeyTransfer = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./tool/privateKeyTransfer */ "./src/page/other/tool/privateKeyTransfer.jsx"));
});
var QRcode = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./tool/qrcode */ "./src/page/other/tool/qrcode.js"));
});
var AbiToHumanReadable = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! ./tool/abiToHumanReadable */ "./src/page/other/tool/abiToHumanReadable.jsx"));
});
function OtherRoute() {
  return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "utf8convert",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.utf8,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UTF8Convert, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "privateKeyTransfer",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.privateKeyTransfer,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateKeyTransfer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "qrcode",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.qrcode,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QRcode, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "abiToHumanReadable",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.other.tool.abiToHumanReadable,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AbiToHumanReadable, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })];
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UTF8Convert, "UTF8Convert", "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx");
  reactHotLoader.register(PrivateKeyTransfer, "PrivateKeyTransfer", "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx");
  reactHotLoader.register(QRcode, "QRcode", "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx");
  reactHotLoader.register(AbiToHumanReadable, "AbiToHumanReadable", "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx");
  reactHotLoader.register(OtherRoute, "OtherRoute", "/Users/linyitang/Desktop/newWallet2/src/page/other/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/pleaseLogin.jsx":
/*!**********************************!*\
  !*** ./src/page/pleaseLogin.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PleaseLogin; });
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _layout_setting_account_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/setting/account/login */ "./src/layout/setting/account/login.jsx");
/* harmony import */ var _ethereum_general_network__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ethereum/general/_network */ "./src/page/ethereum/general/_network.jsx");






var _dec,
    _dec2,
    _class,
    _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/pleaseLogin.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { Brain } from './component/item/brain';
// import { Import } from './component/item/import';
// import { HDWallet } from './component/item/hd';
// import { Save } from './component/item/save';


var PleaseLogin = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('ethereumStore'), _dec2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["inject"])('accountStore'), _dec(_class = _dec2(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__["observer"])(_class =
/*#__PURE__*/
function (_Component) {
  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PleaseLogin, _Component);

  function PleaseLogin(props) {
    var _this;

    Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PleaseLogin);

    _this = Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PleaseLogin).call(this, props));

    _this.changeWallet = function (e) {
      _this.setState({
        accountComponentIndex: e.target.value
      });
    };

    _this.logout = function () {
      _this.props.accountStore.logout();
    };

    return _this;
  }

  Object(_Users_linyitang_Desktop_newWallet2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PleaseLogin, [{
    key: "render",
    value: function render() {
      if (this.props.networkId) {
        if ((this.props.ethereumStore.networkId ^ this.props.networkId) !== 0) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "box box-primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "box-header with-border",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
            className: "box-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, "\u6B64Dapp\u66AB\u4E0D\u958B\u653E\u65BC\u6B64\u7DB2\u8DEF\uFF0C\u8ACB\u66F4\u6539Network")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "box-body",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ethereum_general_network__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          })));
        }
      }

      if (this.props.unlogin || this.props.accountStore.privateKeyHex) {
        return this.props.children;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box box-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-header with-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "box-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u8ACB\u5148\u767B\u5165")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "box-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_setting_account_login__WEBPACK_IMPORTED_MODULE_7__["Login"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PleaseLogin;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"])) || _class) || _class) || _class);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PleaseLogin, "PleaseLogin", "/Users/linyitang/Desktop/newWallet2/src/page/pleaseLogin.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/page/welcome/index.jsx":
/*!************************************!*\
  !*** ./src/page/welcome/index.jsx ***!
  \************************************/
/*! exports provided: default, WelcomeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WelcomeRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoute", function() { return WelcomeRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ "./src/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./src/config.json", 1);
var _jsxFileName = "/Users/linyitang/Desktop/newWallet2/src/page/welcome/index.jsx";

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import { Balance, OtherBalance, Transfer } from './Loadables/Loadables'
// import Balance from './general/balance';
// import OtherBalance from './general/otherBalance';
// import Transfer from './general/transfer';

var Welcome = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./welcome */ "./src/page/welcome/welcome.jsx"));
});
var About = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./about */ "./src/page/welcome/about.jsx"));
});
function WelcomeRoute(props) {
  return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "home",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.home,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Welcome, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    key: "about",
    exact: true,
    path: _config_json__WEBPACK_IMPORTED_MODULE_2__.route.about,
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })];
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Welcome, "Welcome", "/Users/linyitang/Desktop/newWallet2/src/page/welcome/index.jsx");
  reactHotLoader.register(About, "About", "/Users/linyitang/Desktop/newWallet2/src/page/welcome/index.jsx");
  reactHotLoader.register(WelcomeRoute, "WelcomeRoute", "/Users/linyitang/Desktop/newWallet2/src/page/welcome/index.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/linyitang/Desktop/newWallet2/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/linyitang/Desktop/newWallet2/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",41]]]);
//# sourceMappingURL=main.chunk.js.map