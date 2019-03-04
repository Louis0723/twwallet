(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/lib/utf8.js":
/*!*************************!*\
  !*** ./src/lib/utf8.js ***!
  \*************************/
/*! exports provided: utf8ToText, textToUtf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utf8ToText", function() { return utf8ToText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToUtf8", function() { return textToUtf8; });
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var branah = {};
branah.util = {
  mobile: /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent),
  keyCode: function keyCode(b) {
    if (!b) {
      var b = window.event;
    }

    if (window.$.browser.mozilla) {
      var a = b.keyCode;

      switch (a) {
        case 59:
          a = 186;
          break;

        case 107:
          a = 187;
          break;

        case 109:
          a = 189;
          break;
      }

      return a;
    }

    if (window.$.browser.opera) {
      var a = b.keyCode;

      switch (a) {
        case 59:
          a = 186;
          break;

        case 61:
          a = 187;
          break;

        case 109:
          a = 189;
          break;
      }

      return a;
    }

    return b.keyCode;
  },
  isCtrl: function isCtrl(a) {
    if (!a) {
      var a = window.event;
    }

    return a.ctrlKey;
  },
  isAlt: function isAlt(a) {
    if (!a) {
      var a = window.event;
    }

    return a.altKey;
  },
  isShift: function isShift(a) {
    if (!a) {
      var a = window.event;
    }

    return a.shiftKey;
  },
  isCaps: function isCaps(a) {
    var b = this.keyCode(a);
    var c = this.isShift(a);

    if (b >= 65 && b <= 90 && !c || b >= 97 && b <= 122 && c) {
      return true;
    }

    if (b >= 65 && b <= 90 && c || b >= 97 && b <= 122 && !c) {
      return false;
    }

    return false;
  },
  padLeft: function padLeft(b, a) {
    if (!a || b.length >= a) {
      return b;
    }

    return Math.pow(10, a - b.length).toString().slice(1) + b;
  },
  indexOf: function indexOf(a, d) {
    var c = a.length;

    for (var b = 0; b < c; b++) {
      if (a[b] == d) {
        return b;
      }
    }

    return -1;
  },
  keyOf: function keyOf(a, c) {
    for (var b in a) {
      if (b === "length" || !a.hasOwnProperty(b)) {
        continue;
      }

      if (a[b] == c) {
        return b;
      }
    }

    return null;
  },
  insertAtCaret: function insertAtCaret(a, f) {
    var d = this.getSelectionStart(a);
    var b = this.getSelectionEnd(a);
    var c = a.value.length;
    a.value = a.value.substring(0, d) + f + a.value.substring(b, c);
    this.setCaretPosition(a, d + f.length, 0);
  },
  deleteAtCaret: function deleteAtCaret(c, b, a) {
    var g = this.getSelectionStart(c);
    var d = this.getSelectionEnd(c);
    var f = c.value.length;

    if (b > g) {
      b = g;
    }

    if (d + a > f) {
      a = f - d;
    }

    var h = c.value.substring(g - b, d + a);
    c.value = c.value.substring(0, g - b) + c.value.substring(d + a);
    this.setCaretPosition(c, g - b, 0);
    return h;
  },
  getSelectionStart: function getSelectionStart(a) {
    a.focus();

    if (a.selectionStart !== undefined) {
      return a.selectionStart;
    } else {
      if (document.selection) {
        var b = document.selection.createRange();

        if (b == null) {
          return 0;
        }

        var d = a.createTextRange();
        var c = d.duplicate();
        d.moveToBookmark(b.getBookmark());
        c.setEndPoint("EndToStart", d);
        return c.text.length;
      }
    }

    return 0;
  },
  getSelectionEnd: function getSelectionEnd(a) {
    a.focus();

    if (a.selectionEnd !== undefined) {
      return a.selectionEnd;
    } else {
      if (document.selection) {
        var b = document.selection.createRange();

        if (b == null) {
          return 0;
        }

        var d = a.createTextRange();
        var c = d.duplicate();
        d.moveToBookmark(b.getBookmark());
        c.setEndPoint("EndToStart", d);
        return c.text.length + b.text.length;
      }
    }

    return a.value.length;
  },
  setCaretPosition: function setCaretPosition(b, d, a) {
    var c = b.value.length;

    if (d > c) {
      d = c;
    }

    if (d + a > c) {
      a = c - a;
    }

    b.focus();

    if (b.setSelectionRange) {
      b.setSelectionRange(d, d + a);
    } else {
      if (b.createTextRange) {
        var f = b.createTextRange();
        f.collapse(true);
        f.moveEnd("character", d + a);
        f.moveStart("character", d);
        f.select();
      }
    }

    b.focus();
  },
  selectAll: function selectAll(a) {
    this.setCaretPosition(a, 0, a.value.length);
  }
};

String.fromCharCodeS = function () {
  var d = arguments.length;
  var e = "";
  var a, c, f;

  for (var b = 0; b < d; b++) {
    f = arguments[b];

    if (f < 1114112 && 65535 < f) {
      a = Math.floor((f - 65536) / 1024) + 55296;
      c = (f - 65536) % 1024 + 56320;
      e = e + String.fromCharCode(a, c);
    } else {
      if (f < 65536) {
        e = e + String.fromCharCode(f);
      }
    }
  }

  return e;
};

function isWhitespace(a) {
  if (a == 9 || a == 10 || a == 13 || a == 32) {
    return true;
  }

  return false;
}

function separate() {
  var c = window.$("#text").attr("value");
  var f = c.length;

  if (f < 2) {
    return;
  }

  var e = c.charCodeAt(0);
  var g = [c.charAt(0)];
  var a, d;

  for (var b = 1; b < f; b++) {
    if (isWhitespace(e) == false && isWhitespace(c.charCodeAt(b)) == false) {
      a = c.charCodeAt(b - 1);
      d = c.charCodeAt(b);

      if (a < 56320 && 55295 < a && d < 57344 && 56319 < d) {} else {
        g.push(" ");
      }
    }

    e = c.charCodeAt(b);
    g.push(c.charAt(b));
  }

  window.$("#text").attr("value", g.join(""));
}

function combine() {
  var a = window.$("#text").attr("value");
  window.$("#text").attr("value", a.replace(/\u0020/g, ""));
}

function textToUnicode(f) {
  var h = [];
  var g = f.length;
  var k = true; // 轉換空白字元

  var a = "";
  var c = window.$("#endian").is(":checked");
  var j;

  for (var d = 0; d < g; d++) {
    j = f.charCodeAt(d);

    if (k == false && isWhitespace(j) == true) {
      h.push(f.charAt(d));
    } else {
      h.push(a);

      if (c == true) {
        h.push(branah.util.padLeft((j & 255).toString(16), 2));
        h.push(branah.util.padLeft(((j & 65280) >>> 8).toString(16), 2));
      } else {
        h.push(branah.util.padLeft(j.toString(16), 4));
      }
    }
  }

  return h.join("");
}

function textToUtf32(d) {
  var h = [];
  var g = d.length;
  var l = true; // 轉換空白字元

  var k = "";
  var a = window.$("#endian").is(":checked");
  var b, f, j;

  for (var c = 0; c < g; c++) {
    j = d.charCodeAt(c);

    if (l == false && isWhitespace(j) == true) {
      h.push(d.charAt(c));
    } else {
      b = j;

      if (b < 56320 && 55295 < b && c + 1 < g) {
        f = d.charCodeAt(c + 1);

        if (f < 57344 && 56319 < f) {
          b = (b - 55296) * 1024 + (f - 56320) + 65536;
          c++;
        }
      }

      h.push(k);

      if (a == true) {
        h.push(branah.util.padLeft((b & 65535 & 255).toString(16), 2));
        h.push(branah.util.padLeft(((b & 65535 & 65280) >>> 8).toString(16), 2));
        h.push(branah.util.padLeft((b >>> 16 & 255).toString(16), 2));
        h.push(branah.util.padLeft(((b >>> 16 & 65280) >>> 8).toString(16), 2));
      } else {
        h.push(branah.util.padLeft((b >>> 16).toString(16), 4));
        h.push(branah.util.padLeft((b & 65535).toString(16), 4));
      }
    }
  }

  return h.join("");
}

function textToText8(c) {
  var g = [];
  var f = c.length;
  var k = true; // 轉換空白字元

  var a, e, h;

  for (var b = 0; b < f; b++) {
    if (k == false && isWhitespace(c.charCodeAt(b)) == true) {
      g.push(c.charAt(b));
    } else {
      a = c.charCodeAt(b);

      if (a < 56320 && 55295 < a && b + 1 < f) {
        e = c.charCodeAt(b + 1);

        if (e < 57344 && 56319 < e) {
          a = (a - 55296) * 1024 + (e - 56320) + 65536;
          b++;
        }
      }

      h = utf8(a);

      for (var d = 0; d < h.length; d++) {
        g.push(String.fromCharCode(h[d]));
      }
    }
  }

  return g.join("");
}

function textToUtf8(c) {
  var g = [];
  var f = c.length;
  var k = true; // 轉換空白字元

  var l = "";
  var a, e, h;

  for (var b = 0; b < f; b++) {
    if (k == false && isWhitespace(c.charCodeAt(b)) == true) {
      g.push(c.charAt(b));
    } else {
      a = c.charCodeAt(b);

      if (a < 56320 && 55295 < a && b + 1 < f) {
        e = c.charCodeAt(b + 1);

        if (e < 57344 && 56319 < e) {
          a = (a - 55296) * 1024 + (e - 56320) + 65536;
          b++;
        }
      }

      h = utf8(a);

      for (var d = 0; d < h.length; d++) {
        g.push(l);
        g.push(branah.util.padLeft(h[d].toString(16), 2));
      }
    }
  }

  return g.join("");
}

function textToUrl(e) {
  var l = [];
  var h = e.length;
  var n = true; // 轉換空白字元

  var k = new RegExp("[a-zA-Z0-9-_.~]");
  var b, g, m, a;

  for (var d = 0; d < h; d++) {
    a = e.charAt(d);

    if (k.test(a) == true) {
      l.push(a);
    } else {
      b = e.charCodeAt(d);

      if (b < 56320 && 55295 < b && d + 1 < h) {
        g = e.charCodeAt(d + 1);

        if (g < 57344 && 56319 < g) {
          b = (b - 55296) * 1024 + (g - 56320) + 65536;
          d++;
        }
      }

      m = utf8(b);

      for (var f = 0; f < m.length; f++) {
        l.push("%");
        l.push(branah.util.padLeft(m[f].toString(16), 2));
      }
    }
  }

  return l.join("");
}

function textToDec(c) {
  var f = [];
  var e = c.length;
  var g = true; // 轉換空白字元

  var a, d;

  for (var b = 0; b < e; b++) {
    if (g == false && isWhitespace(c.charCodeAt(b)) == true) {
      f.push(c.charAt(b));
    } else {
      a = c.charCodeAt(b);

      if (a < 56320 && 55295 < a && b + 1 < e) {
        d = c.charCodeAt(b + 1);

        if (d < 57344 && 56319 < d) {
          a = (a - 55296) * 1024 + (d - 56320) + 65536;
          b++;
        }
      }

      f.push(branah.util.padLeft(a.toString(), 5));
    }
  }

  return f.join("");
}

function unicodeToText(b) {
  var a = window.$("#endian").is(":checked");
  var d,
      c = ""; //   if (window.$("#backslashu").is(":checked") == false) {
  //     c = "\\\\u"
  //   }

  return b.replace(new RegExp(c + "([0-9a-fA-F]{4})", "g"), function (e, f) {
    d = parseInt(f, 16);

    if (a == true) {
      d = (d & 255) << 8 | (d & 65280) >>> 8;
    }

    return String.fromCharCode(d);
  });
}

function utf32ToText(b) {
  var a = window.$("#endian").is(":checked");
  var c,
      d = ""; //   if (window.$("#uplus").is(":checked") == false) {
  //     d = "u\\+"
  //   }

  return b.replace(new RegExp(d + "([0-9a-fA-F]{8})", "g"), function (e, f) {
    c = parseInt(f, 16);

    if (a == true) {
      c = (c & 255) << 24 | (c & 65280) << 8 | (c & 16711680) >>> 8 | (c & 4278190080) >>> 24;
    }

    return String.fromCharCodeS(c);
  });
}

function text8ToText(b) {
  var d = [];
  var c = b.length;
  var f = true; // 轉換空白字元

  var e;

  for (var a = 0; a < c; a++) {
    e = b.charCodeAt(a);

    if (f == false && isWhitespace(e) == true) {
      d.push(b.charAt(a));
    } else {
      if (e < 128) {
        d.push(b.charAt(a));
      } else {
        if (e < 224) {
          d.push(String.fromCharCodeS((e & 31) << 6 | b.charCodeAt(++a) & 63));
        } else {
          if (e < 240) {
            d.push(String.fromCharCodeS((e & 15) << 12 | (b.charCodeAt(++a) & 63) << 6 | b.charCodeAt(++a) & 63));
          } else {
            if (e < 248) {
              d.push(String.fromCharCodeS((e & 7) << 18 | (b.charCodeAt(++a) & 63) << 12 | (b.charCodeAt(++a) & 63) << 6 | b.charCodeAt(++a) & 63));
            } else {
              if (e < 252) {
                d.push(String.fromCharCodeS((e & 3) << 24 | (b.charCodeAt(++a) & 63) << 18 | (b.charCodeAt(++a) & 63) << 12 | (b.charCodeAt(++a) & 63) << 6 | b.charCodeAt(++a) & 63));
              } else {
                if (e < 254) {
                  d.push(String.fromCharCodeS((e & 1) << 30 | (b.charCodeAt(++a) & 63) << 24 | (b.charCodeAt(++a) & 63) << 18 | (b.charCodeAt(++a) & 63) << 12 | (b.charCodeAt(++a) & 63) << 6 | b.charCodeAt(++a) & 63));
                }
              }
            }
          }
        }
      }
    }
  }

  return d.join("");
}

function utf8ToText(a) {
  return text8ToText(utf8ToText8(a));
}

function utf8ToText8(a) {
  var b = ""; //   if (window.$("#backslashx").is(":checked") == false) {
  //     b = "\\\\x"
  //   }

  return a.replace(new RegExp(b + "([0-9a-fA-F]{2})", "g"), function (c, d) {
    return String.fromCharCode(parseInt(d, 16));
  });
}

function urlToText(a) {
  var b = a.replace(new RegExp("%([0-9a-fA-F]{2})", "g"), function (c, d) {
    return String.fromCharCode(parseInt(d, 16));
  });
  return text8ToText(b);
}

function decToText(a) {
  return a.replace(new RegExp("([0-9]{1,5})", "g"), function (b, c) {
    return String.fromCharCodeS(parseInt(c));
  });
}

function utf8(a) {
  if (a < 128) {
    return [a];
  } else {
    if (a < 2048) {
      return [(a & 1984) >>> 6 | 192, a & 63 | 128];
    } else {
      if (a < 65536) {
        return [(a & 61440) >>> 12 | 224, (a & 4032) >>> 6 | 128, a & 63 | 128];
      } else {
        if (a < 2097152) {
          return [(a & 1835008) >>> 18 | 240, (a & 258048) >>> 12 | 128, (a & 4032) >>> 6 | 128, a & 63 | 128];
        } else {
          if (a < 67108864) {
            return [(a & 12582912) >>> 24 | 248, (a & 16711680) >>> 18 | 128, (a & 258048) >>> 12 | 128, (a & 4032) >>> 6 | 128, a & 63 | 128];
          } else {
            if (a < 2147483648) {
              return [(a & 2147483648) >>> 30 | 252, (a & 1056964608) >>> 24 | 128, (a & 16711680) >>> 18 | 128, (a & 258048) >>> 12 | 128, (a & 4032) >>> 6 | 128, a & 63 | 128];
            }
          }
        }
      }
    }
  }

  return [];
}


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(branah, "branah", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(isWhitespace, "isWhitespace", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(separate, "separate", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(combine, "combine", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToUnicode, "textToUnicode", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToUtf32, "textToUtf32", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToText8, "textToText8", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToUtf8, "textToUtf8", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToUrl, "textToUrl", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(textToDec, "textToDec", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(unicodeToText, "unicodeToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(utf32ToText, "utf32ToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(text8ToText, "text8ToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(utf8ToText, "utf8ToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(utf8ToText8, "utf8ToText8", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(urlToText, "urlToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(decToText, "decToText", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  reactHotLoader.register(utf8, "utf8", "/Users/linyitang/Desktop/newWallet2/src/lib/utf8.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=7.chunk.js.map