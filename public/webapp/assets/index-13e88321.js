var pb = Object.defineProperty;
var hb = (e, t, n) =>
  t in e
    ? pb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var mb = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var mu = (e, t, n) => (hb(e, typeof t != "symbol" ? t + "" : t, n), n);
var _R = mb((NR, od) => {
  function vb(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
          if (i !== "default" && !(i in e)) {
            const o = Object.getOwnPropertyDescriptor(r, i);
            o &&
              Object.defineProperty(
                e,
                i,
                o.get ? o : { enumerable: !0, get: () => r[i] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const a of o.addedNodes)
            a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  var uo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function Na(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Cy = { exports: {} },
    kl = {},
    ky = { exports: {} },
    te = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Oa = Symbol.for("react.element"),
    yb = Symbol.for("react.portal"),
    gb = Symbol.for("react.fragment"),
    wb = Symbol.for("react.strict_mode"),
    xb = Symbol.for("react.profiler"),
    bb = Symbol.for("react.provider"),
    Sb = Symbol.for("react.context"),
    Eb = Symbol.for("react.forward_ref"),
    _b = Symbol.for("react.suspense"),
    Cb = Symbol.for("react.memo"),
    kb = Symbol.for("react.lazy"),
    Zp = Symbol.iterator;
  function Nb(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Zp && e[Zp]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ny = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Oy = Object.assign,
    Py = {};
  function no(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Py),
      (this.updater = n || Ny);
  }
  no.prototype.isReactComponent = {};
  no.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  no.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Ty() {}
  Ty.prototype = no.prototype;
  function ad(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Py),
      (this.updater = n || Ny);
  }
  var sd = (ad.prototype = new Ty());
  sd.constructor = ad;
  Oy(sd, no.prototype);
  sd.isPureReactComponent = !0;
  var Jp = Array.isArray,
    My = Object.prototype.hasOwnProperty,
    ld = { current: null },
    Dy = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ry(e, t, n) {
    var r,
      i = {},
      o = null,
      a = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (a = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        My.call(t, r) && !Dy.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
    return {
      $$typeof: Oa,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: ld.current,
    };
  }
  function Ob(e, t) {
    return {
      $$typeof: Oa,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function ud(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Oa;
  }
  function Pb(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var eh = /\/+/g;
  function vu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Pb("" + e.key)
      : t.toString(36);
  }
  function vs(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
      switch (o) {
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Oa:
            case yb:
              a = !0;
          }
      }
    if (a)
      return (
        (a = e),
        (i = i(a)),
        (e = r === "" ? "." + vu(a, 0) : r),
        Jp(i)
          ? ((n = ""),
            e != null && (n = e.replace(eh, "$&/") + "/"),
            vs(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (ud(i) &&
              (i = Ob(
                i,
                n +
                  (!i.key || (a && a.key === i.key)
                    ? ""
                    : ("" + i.key).replace(eh, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((a = 0), (r = r === "" ? "." : r + ":"), Jp(e)))
      for (var s = 0; s < e.length; s++) {
        o = e[s];
        var l = r + vu(o, s);
        a += vs(o, t, n, l, i);
      }
    else if (((l = Nb(e)), typeof l == "function"))
      for (e = l.call(e), s = 0; !(o = e.next()).done; )
        (o = o.value), (l = r + vu(o, s++)), (a += vs(o, t, n, l, i));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return a;
  }
  function $a(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      vs(e, r, "", "", function (o) {
        return t.call(n, o, i++);
      }),
      r
    );
  }
  function Tb(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ye = { current: null },
    ys = { transition: null },
    Mb = {
      ReactCurrentDispatcher: Ye,
      ReactCurrentBatchConfig: ys,
      ReactCurrentOwner: ld,
    };
  te.Children = {
    map: $a,
    forEach: function (e, t, n) {
      $a(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        $a(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        $a(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!ud(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  te.Component = no;
  te.Fragment = gb;
  te.Profiler = xb;
  te.PureComponent = ad;
  te.StrictMode = wb;
  te.Suspense = _b;
  te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mb;
  te.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Oy({}, e.props),
      i = e.key,
      o = e.ref,
      a = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (a = ld.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (l in t)
        My.call(t, l) &&
          !Dy.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      s = Array(l);
      for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
      r.children = s;
    }
    return { $$typeof: Oa, type: e.type, key: i, ref: o, props: r, _owner: a };
  };
  te.createContext = function (e) {
    return (
      (e = {
        $$typeof: Sb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: bb, _context: e }),
      (e.Consumer = e)
    );
  };
  te.createElement = Ry;
  te.createFactory = function (e) {
    var t = Ry.bind(null, e);
    return (t.type = e), t;
  };
  te.createRef = function () {
    return { current: null };
  };
  te.forwardRef = function (e) {
    return { $$typeof: Eb, render: e };
  };
  te.isValidElement = ud;
  te.lazy = function (e) {
    return { $$typeof: kb, _payload: { _status: -1, _result: e }, _init: Tb };
  };
  te.memo = function (e, t) {
    return { $$typeof: Cb, type: e, compare: t === void 0 ? null : t };
  };
  te.startTransition = function (e) {
    var t = ys.transition;
    ys.transition = {};
    try {
      e();
    } finally {
      ys.transition = t;
    }
  };
  te.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  te.useCallback = function (e, t) {
    return Ye.current.useCallback(e, t);
  };
  te.useContext = function (e) {
    return Ye.current.useContext(e);
  };
  te.useDebugValue = function () {};
  te.useDeferredValue = function (e) {
    return Ye.current.useDeferredValue(e);
  };
  te.useEffect = function (e, t) {
    return Ye.current.useEffect(e, t);
  };
  te.useId = function () {
    return Ye.current.useId();
  };
  te.useImperativeHandle = function (e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n);
  };
  te.useInsertionEffect = function (e, t) {
    return Ye.current.useInsertionEffect(e, t);
  };
  te.useLayoutEffect = function (e, t) {
    return Ye.current.useLayoutEffect(e, t);
  };
  te.useMemo = function (e, t) {
    return Ye.current.useMemo(e, t);
  };
  te.useReducer = function (e, t, n) {
    return Ye.current.useReducer(e, t, n);
  };
  te.useRef = function (e) {
    return Ye.current.useRef(e);
  };
  te.useState = function (e) {
    return Ye.current.useState(e);
  };
  te.useSyncExternalStore = function (e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n);
  };
  te.useTransition = function () {
    return Ye.current.useTransition();
  };
  te.version = "18.2.0";
  ky.exports = te;
  var S = ky.exports;
  const Je = Na(S),
    Db = vb({ __proto__: null, default: Je }, [S]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Rb = S,
    jb = Symbol.for("react.element"),
    Ab = Symbol.for("react.fragment"),
    Ib = Object.prototype.hasOwnProperty,
    Fb =
      Rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lb = { key: !0, ref: !0, __self: !0, __source: !0 };
  function jy(e, t, n) {
    var r,
      i = {},
      o = null,
      a = null;
    n !== void 0 && (o = "" + n),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (a = t.ref);
    for (r in t) Ib.call(t, r) && !Lb.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: jb,
      type: e,
      key: o,
      ref: a,
      props: i,
      _owner: Fb.current,
    };
  }
  kl.Fragment = Ab;
  kl.jsx = jy;
  kl.jsxs = jy;
  Cy.exports = kl;
  var w = Cy.exports,
    Ay = { exports: {} },
    yt = {},
    Iy = { exports: {} },
    Fy = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(O, A) {
      var I = O.length;
      O.push(A);
      e: for (; 0 < I; ) {
        var V = (I - 1) >>> 1,
          z = O[V];
        if (0 < i(z, A)) (O[V] = A), (O[I] = z), (I = V);
        else break e;
      }
    }
    function n(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0) return null;
      var A = O[0],
        I = O.pop();
      if (I !== A) {
        O[0] = I;
        e: for (var V = 0, z = O.length, Y = z >>> 1; V < Y; ) {
          var U = 2 * (V + 1) - 1,
            X = O[U],
            K = U + 1,
            J = O[K];
          if (0 > i(X, I))
            K < z && 0 > i(J, X)
              ? ((O[V] = J), (O[K] = I), (V = K))
              : ((O[V] = X), (O[U] = I), (V = U));
          else if (K < z && 0 > i(J, I)) (O[V] = J), (O[K] = I), (V = K);
          else break e;
        }
      }
      return A;
    }
    function i(O, A) {
      var I = O.sortIndex - A.sortIndex;
      return I !== 0 ? I : O.id - A.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var a = Date,
        s = a.now();
      e.unstable_now = function () {
        return a.now() - s;
      };
    }
    var l = [],
      u = [],
      c = 1,
      f = null,
      d = 3,
      p = !1,
      g = !1,
      y = !1,
      b = typeof setTimeout == "function" ? setTimeout : null,
      m = typeof clearTimeout == "function" ? clearTimeout : null,
      h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(O) {
      for (var A = n(u); A !== null; ) {
        if (A.callback === null) r(u);
        else if (A.startTime <= O)
          r(u), (A.sortIndex = A.expirationTime), t(l, A);
        else break;
        A = n(u);
      }
    }
    function x(O) {
      if (((y = !1), v(O), !g))
        if (n(l) !== null) (g = !0), R(E);
        else {
          var A = n(u);
          A !== null && T(x, A.startTime - O);
        }
    }
    function E(O, A) {
      (g = !1), y && ((y = !1), m(N), (N = -1)), (p = !0);
      var I = d;
      try {
        for (
          v(A), f = n(l);
          f !== null && (!(f.expirationTime > A) || (O && !L()));

        ) {
          var V = f.callback;
          if (typeof V == "function") {
            (f.callback = null), (d = f.priorityLevel);
            var z = V(f.expirationTime <= A);
            (A = e.unstable_now()),
              typeof z == "function" ? (f.callback = z) : f === n(l) && r(l),
              v(A);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var Y = !0;
        else {
          var U = n(u);
          U !== null && T(x, U.startTime - A), (Y = !1);
        }
        return Y;
      } finally {
        (f = null), (d = I), (p = !1);
      }
    }
    var _ = !1,
      C = null,
      N = -1,
      M = 5,
      P = -1;
    function L() {
      return !(e.unstable_now() - P < M);
    }
    function B() {
      if (C !== null) {
        var O = e.unstable_now();
        P = O;
        var A = !0;
        try {
          A = C(!0, O);
        } finally {
          A ? D() : ((_ = !1), (C = null));
        }
      } else _ = !1;
    }
    var D;
    if (typeof h == "function")
      D = function () {
        h(B);
      };
    else if (typeof MessageChannel < "u") {
      var k = new MessageChannel(),
        j = k.port2;
      (k.port1.onmessage = B),
        (D = function () {
          j.postMessage(null);
        });
    } else
      D = function () {
        b(B, 0);
      };
    function R(O) {
      (C = O), _ || ((_ = !0), D());
    }
    function T(O, A) {
      N = b(function () {
        O(e.unstable_now());
      }, A);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (O) {
        O.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || p || ((g = !0), R(E));
      }),
      (e.unstable_forceFrameRate = function (O) {
        0 > O || 125 < O
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (M = 0 < O ? Math.floor(1e3 / O) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (O) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var A = 3;
            break;
          default:
            A = d;
        }
        var I = d;
        d = A;
        try {
          return O();
        } finally {
          d = I;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (O, A) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var I = d;
        d = O;
        try {
          return A();
        } finally {
          d = I;
        }
      }),
      (e.unstable_scheduleCallback = function (O, A, I) {
        var V = e.unstable_now();
        switch (
          (typeof I == "object" && I !== null
            ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? V + I : V))
            : (I = V),
          O)
        ) {
          case 1:
            var z = -1;
            break;
          case 2:
            z = 250;
            break;
          case 5:
            z = 1073741823;
            break;
          case 4:
            z = 1e4;
            break;
          default:
            z = 5e3;
        }
        return (
          (z = I + z),
          (O = {
            id: c++,
            callback: A,
            priorityLevel: O,
            startTime: I,
            expirationTime: z,
            sortIndex: -1,
          }),
          I > V
            ? ((O.sortIndex = I),
              t(u, O),
              n(l) === null &&
                O === n(u) &&
                (y ? (m(N), (N = -1)) : (y = !0), T(x, I - V)))
            : ((O.sortIndex = z), t(l, O), g || p || ((g = !0), R(E))),
          O
        );
      }),
      (e.unstable_shouldYield = L),
      (e.unstable_wrapCallback = function (O) {
        var A = d;
        return function () {
          var I = d;
          d = A;
          try {
            return O.apply(this, arguments);
          } finally {
            d = I;
          }
        };
      });
  })(Fy);
  Iy.exports = Fy;
  var Bb = Iy.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ly = S,
    ht = Bb;
  function $(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var By = new Set(),
    Zo = {};
  function Hr(e, t) {
    ji(e, t), ji(e + "Capture", t);
  }
  function ji(e, t) {
    for (Zo[e] = t, e = 0; e < t.length; e++) By.add(t[e]);
  }
  var yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hc = Object.prototype.hasOwnProperty,
    zb =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    th = {},
    nh = {};
  function $b(e) {
    return hc.call(nh, e)
      ? !0
      : hc.call(th, e)
      ? !1
      : zb.test(e)
      ? (nh[e] = !0)
      : ((th[e] = !0), !1);
  }
  function Vb(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Hb(e, t, n, r) {
    if (t === null || typeof t > "u" || Vb(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Ge(e, t, n, r, i, o, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = a);
  }
  var Le = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Le[e] = new Ge(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    Le[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Le[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Le[e] = new Ge(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Le[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Le[e] = new Ge(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Le[e] = new Ge(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Le[e] = new Ge(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Le[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var cd = /[\-:]([a-z])/g;
  function fd(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(cd, fd);
      Le[t] = new Ge(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(cd, fd);
      Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(cd, fd);
    Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Le.xlinkHref = new Ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function dd(e, t, n, r) {
    var i = Le.hasOwnProperty(t) ? Le[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Hb(t, n, i, r) && (n = null),
      r || i === null
        ? $b(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var _n = Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Va = Symbol.for("react.element"),
    ri = Symbol.for("react.portal"),
    ii = Symbol.for("react.fragment"),
    pd = Symbol.for("react.strict_mode"),
    mc = Symbol.for("react.profiler"),
    zy = Symbol.for("react.provider"),
    $y = Symbol.for("react.context"),
    hd = Symbol.for("react.forward_ref"),
    vc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.suspense_list"),
    md = Symbol.for("react.memo"),
    Tn = Symbol.for("react.lazy"),
    Vy = Symbol.for("react.offscreen"),
    rh = Symbol.iterator;
  function co(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (rh && e[rh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Object.assign,
    yu;
  function Po(e) {
    if (yu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        yu = (t && t[1]) || "";
      }
    return (
      `
` +
      yu +
      e
    );
  }
  var gu = !1;
  function wu(e, t) {
    if (!e || gu) return "";
    gu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var i = u.stack.split(`
`),
            o = r.stack.split(`
`),
            a = i.length - 1,
            s = o.length - 1;
          1 <= a && 0 <= s && i[a] !== o[s];

        )
          s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (i[a] !== o[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || i[a] !== o[s])) {
                  var l =
                    `
` + i[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (gu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Po(e) : "";
  }
  function Ub(e) {
    switch (e.tag) {
      case 5:
        return Po(e.type);
      case 16:
        return Po("Lazy");
      case 13:
        return Po("Suspense");
      case 19:
        return Po("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = wu(e.type, !1)), e;
      case 11:
        return (e = wu(e.type.render, !1)), e;
      case 1:
        return (e = wu(e.type, !0)), e;
      default:
        return "";
    }
  }
  function gc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ii:
        return "Fragment";
      case ri:
        return "Portal";
      case mc:
        return "Profiler";
      case pd:
        return "StrictMode";
      case vc:
        return "Suspense";
      case yc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $y:
          return (e.displayName || "Context") + ".Consumer";
        case zy:
          return (e._context.displayName || "Context") + ".Provider";
        case hd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case md:
          return (
            (t = e.displayName || null), t !== null ? t : gc(e.type) || "Memo"
          );
        case Tn:
          (t = e._payload), (e = e._init);
          try {
            return gc(e(t));
          } catch {}
      }
    return null;
  }
  function Qb(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return gc(t);
      case 8:
        return t === pd ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function er(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Hy(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qb(e) {
    var t = Hy(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (a) {
            (r = "" + a), o.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ha(e) {
    e._valueTracker || (e._valueTracker = qb(e));
  }
  function Uy(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Hy(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function zs(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function wc(e, t) {
    var n = t.checked;
    return xe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ih(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = er(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Qy(e, t) {
    (t = t.checked), t != null && dd(e, "checked", t, !1);
  }
  function xc(e, t) {
    Qy(e, t);
    var n = er(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? bc(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && bc(e, t.type, er(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function oh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function bc(e, t, n) {
    (t !== "number" || zs(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var To = Array.isArray;
  function wi(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + er(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error($(91));
    return xe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ah(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error($(92));
        if (To(n)) {
          if (1 < n.length) throw Error($(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: er(n) };
  }
  function qy(e, t) {
    var n = er(t.value),
      r = er(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function sh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Wy(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ec(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Wy(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ua,
    Yy = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ua = Ua || document.createElement("div"),
            Ua.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ua.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Jo(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Wb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fo).forEach(function (e) {
    Wb.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fo[t] = Fo[e]);
    });
  });
  function Gy(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Fo.hasOwnProperty(e) && Fo[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Xy(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Gy(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Yb = xe(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function _c(e, t) {
    if (t) {
      if (Yb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error($(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error($(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error($(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error($(62));
    }
  }
  function Cc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kc = null;
  function vd(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Nc = null,
    xi = null,
    bi = null;
  function lh(e) {
    if ((e = Ma(e))) {
      if (typeof Nc != "function") throw Error($(280));
      var t = e.stateNode;
      t && ((t = Ml(t)), Nc(e.stateNode, e.type, t));
    }
  }
  function Ky(e) {
    xi ? (bi ? bi.push(e) : (bi = [e])) : (xi = e);
  }
  function Zy() {
    if (xi) {
      var e = xi,
        t = bi;
      if (((bi = xi = null), lh(e), t)) for (e = 0; e < t.length; e++) lh(t[e]);
    }
  }
  function Jy(e, t) {
    return e(t);
  }
  function eg() {}
  var xu = !1;
  function tg(e, t, n) {
    if (xu) return e(t, n);
    xu = !0;
    try {
      return Jy(e, t, n);
    } finally {
      (xu = !1), (xi !== null || bi !== null) && (eg(), Zy());
    }
  }
  function ea(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ml(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error($(231, t, typeof n));
    return n;
  }
  var Oc = !1;
  if (yn)
    try {
      var fo = {};
      Object.defineProperty(fo, "passive", {
        get: function () {
          Oc = !0;
        },
      }),
        window.addEventListener("test", fo, fo),
        window.removeEventListener("test", fo, fo);
    } catch {
      Oc = !1;
    }
  function Gb(e, t, n, r, i, o, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Lo = !1,
    $s = null,
    Vs = !1,
    Pc = null,
    Xb = {
      onError: function (e) {
        (Lo = !0), ($s = e);
      },
    };
  function Kb(e, t, n, r, i, o, a, s, l) {
    (Lo = !1), ($s = null), Gb.apply(Xb, arguments);
  }
  function Zb(e, t, n, r, i, o, a, s, l) {
    if ((Kb.apply(this, arguments), Lo)) {
      if (Lo) {
        var u = $s;
        (Lo = !1), ($s = null);
      } else throw Error($(198));
      Vs || ((Vs = !0), (Pc = u));
    }
  }
  function Ur(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ng(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function uh(e) {
    if (Ur(e) !== e) throw Error($(188));
  }
  function Jb(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Ur(e)), t === null)) throw Error($(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return uh(i), e;
          if (o === r) return uh(i), t;
          o = o.sibling;
        }
        throw Error($(188));
      }
      if (n.return !== r.return) (n = i), (r = o);
      else {
        for (var a = !1, s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) {
          for (s = o.child; s; ) {
            if (s === n) {
              (a = !0), (n = o), (r = i);
              break;
            }
            if (s === r) {
              (a = !0), (r = o), (n = i);
              break;
            }
            s = s.sibling;
          }
          if (!a) throw Error($(189));
        }
      }
      if (n.alternate !== r) throw Error($(190));
    }
    if (n.tag !== 3) throw Error($(188));
    return n.stateNode.current === n ? e : t;
  }
  function rg(e) {
    return (e = Jb(e)), e !== null ? ig(e) : null;
  }
  function ig(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ig(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var og = ht.unstable_scheduleCallback,
    ch = ht.unstable_cancelCallback,
    eS = ht.unstable_shouldYield,
    tS = ht.unstable_requestPaint,
    _e = ht.unstable_now,
    nS = ht.unstable_getCurrentPriorityLevel,
    yd = ht.unstable_ImmediatePriority,
    ag = ht.unstable_UserBlockingPriority,
    Hs = ht.unstable_NormalPriority,
    rS = ht.unstable_LowPriority,
    sg = ht.unstable_IdlePriority,
    Nl = null,
    Jt = null;
  function iS(e) {
    if (Jt && typeof Jt.onCommitFiberRoot == "function")
      try {
        Jt.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Bt = Math.clz32 ? Math.clz32 : sS,
    oS = Math.log,
    aS = Math.LN2;
  function sS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((oS(e) / aS) | 0)) | 0;
  }
  var Qa = 64,
    qa = 4194304;
  function Mo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Us(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var s = a & ~i;
      s !== 0 ? (r = Mo(s)) : ((o &= a), o !== 0 && (r = Mo(o)));
    } else (a = n & ~i), a !== 0 ? (r = Mo(a)) : o !== 0 && (r = Mo(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Bt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function lS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uS(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var a = 31 - Bt(o),
        s = 1 << a,
        l = i[a];
      l === -1
        ? (!(s & n) || s & r) && (i[a] = lS(s, t))
        : l <= t && (e.expiredLanes |= s),
        (o &= ~s);
    }
  }
  function Tc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function lg() {
    var e = Qa;
    return (Qa <<= 1), !(Qa & 4194240) && (Qa = 64), e;
  }
  function bu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pa(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Bt(t)),
      (e[t] = n);
  }
  function cS(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Bt(n),
        o = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
  }
  function gd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Bt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var ae = 0;
  function ug(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var cg,
    wd,
    fg,
    dg,
    pg,
    Mc = !1,
    Wa = [],
    Un = null,
    Qn = null,
    qn = null,
    ta = new Map(),
    na = new Map(),
    Ln = [],
    fS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function fh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        ta.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        na.delete(t.pointerId);
    }
  }
  function po(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = Ma(t)), t !== null && wd(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function dS(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Un = po(Un, e, t, n, r, i)), !0;
      case "dragenter":
        return (Qn = po(Qn, e, t, n, r, i)), !0;
      case "mouseover":
        return (qn = po(qn, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return ta.set(o, po(ta.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), na.set(o, po(na.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function hg(e) {
    var t = Sr(e.target);
    if (t !== null) {
      var n = Ur(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ng(n)), t !== null)) {
            (e.blockedOn = t),
              pg(e.priority, function () {
                fg(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (kc = r), n.target.dispatchEvent(r), (kc = null);
      } else return (t = Ma(n)), t !== null && wd(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function dh(e, t, n) {
    gs(e) && n.delete(t);
  }
  function pS() {
    (Mc = !1),
      Un !== null && gs(Un) && (Un = null),
      Qn !== null && gs(Qn) && (Qn = null),
      qn !== null && gs(qn) && (qn = null),
      ta.forEach(dh),
      na.forEach(dh);
  }
  function ho(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Mc ||
        ((Mc = !0),
        ht.unstable_scheduleCallback(ht.unstable_NormalPriority, pS)));
  }
  function ra(e) {
    function t(i) {
      return ho(i, e);
    }
    if (0 < Wa.length) {
      ho(Wa[0], e);
      for (var n = 1; n < Wa.length; n++) {
        var r = Wa[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Un !== null && ho(Un, e),
        Qn !== null && ho(Qn, e),
        qn !== null && ho(qn, e),
        ta.forEach(t),
        na.forEach(t),
        n = 0;
      n < Ln.length;
      n++
    )
      (r = Ln[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
      hg(n), n.blockedOn === null && Ln.shift();
  }
  var Si = _n.ReactCurrentBatchConfig,
    Qs = !0;
  function hS(e, t, n, r) {
    var i = ae,
      o = Si.transition;
    Si.transition = null;
    try {
      (ae = 1), xd(e, t, n, r);
    } finally {
      (ae = i), (Si.transition = o);
    }
  }
  function mS(e, t, n, r) {
    var i = ae,
      o = Si.transition;
    Si.transition = null;
    try {
      (ae = 4), xd(e, t, n, r);
    } finally {
      (ae = i), (Si.transition = o);
    }
  }
  function xd(e, t, n, r) {
    if (Qs) {
      var i = Dc(e, t, n, r);
      if (i === null) Mu(e, t, r, qs, n), fh(e, r);
      else if (dS(i, e, t, n, r)) r.stopPropagation();
      else if ((fh(e, r), t & 4 && -1 < fS.indexOf(e))) {
        for (; i !== null; ) {
          var o = Ma(i);
          if (
            (o !== null && cg(o),
            (o = Dc(e, t, n, r)),
            o === null && Mu(e, t, r, qs, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else Mu(e, t, r, null, n);
    }
  }
  var qs = null;
  function Dc(e, t, n, r) {
    if (((qs = null), (e = vd(r)), (e = Sr(e)), e !== null))
      if (((t = Ur(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ng(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (qs = e), null;
  }
  function mg(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (nS()) {
          case yd:
            return 1;
          case ag:
            return 4;
          case Hs:
          case rS:
            return 16;
          case sg:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var $n = null,
    bd = null,
    ws = null;
  function vg() {
    if (ws) return ws;
    var e,
      t = bd,
      n = t.length,
      r,
      i = "value" in $n ? $n.value : $n.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
    return (ws = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function xs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ya() {
    return !0;
  }
  function ph() {
    return !1;
  }
  function gt(e) {
    function t(n, r, i, o, a) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ya
          : ph),
        (this.isPropagationStopped = ph),
        this
      );
    }
    return (
      xe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ya));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ya));
        },
        persist: function () {},
        isPersistent: Ya,
      }),
      t
    );
  }
  var ro = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Sd = gt(ro),
    Ta = xe({}, ro, { view: 0, detail: 0 }),
    vS = gt(Ta),
    Su,
    Eu,
    mo,
    Ol = xe({}, Ta, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ed,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== mo &&
              (mo && e.type === "mousemove"
                ? ((Su = e.screenX - mo.screenX), (Eu = e.screenY - mo.screenY))
                : (Eu = Su = 0),
              (mo = e)),
            Su);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Eu;
      },
    }),
    hh = gt(Ol),
    yS = xe({}, Ol, { dataTransfer: 0 }),
    gS = gt(yS),
    wS = xe({}, Ta, { relatedTarget: 0 }),
    _u = gt(wS),
    xS = xe({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bS = gt(xS),
    SS = xe({}, ro, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ES = gt(SS),
    _S = xe({}, ro, { data: 0 }),
    mh = gt(_S),
    CS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    NS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function OS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = NS[e])
      ? !!t[e]
      : !1;
  }
  function Ed() {
    return OS;
  }
  var PS = xe({}, Ta, {
      key: function (e) {
        if (e.key) {
          var t = CS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = xs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? kS[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ed,
      charCode: function (e) {
        return e.type === "keypress" ? xs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? xs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    TS = gt(PS),
    MS = xe({}, Ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    vh = gt(MS),
    DS = xe({}, Ta, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ed,
    }),
    RS = gt(DS),
    jS = xe({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    AS = gt(jS),
    IS = xe({}, Ol, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    FS = gt(IS),
    LS = [9, 13, 27, 32],
    _d = yn && "CompositionEvent" in window,
    Bo = null;
  yn && "documentMode" in document && (Bo = document.documentMode);
  var BS = yn && "TextEvent" in window && !Bo,
    yg = yn && (!_d || (Bo && 8 < Bo && 11 >= Bo)),
    yh = String.fromCharCode(32),
    gh = !1;
  function gg(e, t) {
    switch (e) {
      case "keyup":
        return LS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wg(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var oi = !1;
  function zS(e, t) {
    switch (e) {
      case "compositionend":
        return wg(t);
      case "keypress":
        return t.which !== 32 ? null : ((gh = !0), yh);
      case "textInput":
        return (e = t.data), e === yh && gh ? null : e;
      default:
        return null;
    }
  }
  function $S(e, t) {
    if (oi)
      return e === "compositionend" || (!_d && gg(e, t))
        ? ((e = vg()), (ws = bd = $n = null), (oi = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return yg && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var VS = {
    "color": !0,
    "date": !0,
    "datetime": !0,
    "datetime-local": !0,
    "email": !0,
    "month": !0,
    "number": !0,
    "password": !0,
    "range": !0,
    "search": !0,
    "tel": !0,
    "text": !0,
    "time": !0,
    "url": !0,
    "week": !0,
  };
  function wh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!VS[e.type] : t === "textarea";
  }
  function xg(e, t, n, r) {
    Ky(r),
      (t = Ws(t, "onChange")),
      0 < t.length &&
        ((n = new Sd("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var zo = null,
    ia = null;
  function HS(e) {
    Mg(e, 0);
  }
  function Pl(e) {
    var t = li(e);
    if (Uy(t)) return e;
  }
  function US(e, t) {
    if (e === "change") return t;
  }
  var bg = !1;
  if (yn) {
    var Cu;
    if (yn) {
      var ku = "oninput" in document;
      if (!ku) {
        var xh = document.createElement("div");
        xh.setAttribute("oninput", "return;"),
          (ku = typeof xh.oninput == "function");
      }
      Cu = ku;
    } else Cu = !1;
    bg = Cu && (!document.documentMode || 9 < document.documentMode);
  }
  function bh() {
    zo && (zo.detachEvent("onpropertychange", Sg), (ia = zo = null));
  }
  function Sg(e) {
    if (e.propertyName === "value" && Pl(ia)) {
      var t = [];
      xg(t, ia, e, vd(e)), tg(HS, t);
    }
  }
  function QS(e, t, n) {
    e === "focusin"
      ? (bh(), (zo = t), (ia = n), zo.attachEvent("onpropertychange", Sg))
      : e === "focusout" && bh();
  }
  function qS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Pl(ia);
  }
  function WS(e, t) {
    if (e === "click") return Pl(t);
  }
  function YS(e, t) {
    if (e === "input" || e === "change") return Pl(t);
  }
  function GS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Vt = typeof Object.is == "function" ? Object.is : GS;
  function oa(e, t) {
    if (Vt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!hc.call(t, i) || !Vt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Sh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Eh(e, t) {
    var n = Sh(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Sh(n);
    }
  }
  function Eg(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Eg(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function _g() {
    for (var e = window, t = zs(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zs(e.document);
    }
    return t;
  }
  function Cd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function XS(e) {
    var t = _g(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Eg(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Cd(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          (r = r.end === void 0 ? o : Math.min(r.end, i)),
            !e.extend && o > r && ((i = r), (r = o), (o = i)),
            (i = Eh(n, o));
          var a = Eh(n, r);
          i &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var KS = yn && "documentMode" in document && 11 >= document.documentMode,
    ai = null,
    Rc = null,
    $o = null,
    jc = !1;
  function _h(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jc ||
      ai == null ||
      ai !== zs(r) ||
      ((r = ai),
      "selectionStart" in r && Cd(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      ($o && oa($o, r)) ||
        (($o = r),
        (r = Ws(Rc, "onSelect")),
        0 < r.length &&
          ((t = new Sd("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ai))));
  }
  function Ga(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var si = {
      animationend: Ga("Animation", "AnimationEnd"),
      animationiteration: Ga("Animation", "AnimationIteration"),
      animationstart: Ga("Animation", "AnimationStart"),
      transitionend: Ga("Transition", "TransitionEnd"),
    },
    Nu = {},
    Cg = {};
  yn &&
    ((Cg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete si.animationend.animation,
      delete si.animationiteration.animation,
      delete si.animationstart.animation),
    "TransitionEvent" in window || delete si.transitionend.transition);
  function Tl(e) {
    if (Nu[e]) return Nu[e];
    if (!si[e]) return e;
    var t = si[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Cg) return (Nu[e] = t[n]);
    return e;
  }
  var kg = Tl("animationend"),
    Ng = Tl("animationiteration"),
    Og = Tl("animationstart"),
    Pg = Tl("transitionend"),
    Tg = new Map(),
    Ch =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function sr(e, t) {
    Tg.set(e, t), Hr(t, [e]);
  }
  for (var Ou = 0; Ou < Ch.length; Ou++) {
    var Pu = Ch[Ou],
      ZS = Pu.toLowerCase(),
      JS = Pu[0].toUpperCase() + Pu.slice(1);
    sr(ZS, "on" + JS);
  }
  sr(kg, "onAnimationEnd");
  sr(Ng, "onAnimationIteration");
  sr(Og, "onAnimationStart");
  sr("dblclick", "onDoubleClick");
  sr("focusin", "onFocus");
  sr("focusout", "onBlur");
  sr(Pg, "onTransitionEnd");
  ji("onMouseEnter", ["mouseout", "mouseover"]);
  ji("onMouseLeave", ["mouseout", "mouseover"]);
  ji("onPointerEnter", ["pointerout", "pointerover"]);
  ji("onPointerLeave", ["pointerout", "pointerover"]);
  Hr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Hr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Hr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Hr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Hr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Do =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    eE = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Do)
    );
  function kh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zb(r, t, void 0, e), (e.currentTarget = null);
  }
  function Mg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var s = r[a],
              l = s.instance,
              u = s.currentTarget;
            if (((s = s.listener), l !== o && i.isPropagationStopped()))
              break e;
            kh(i, s, u), (o = l);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((s = r[a]),
              (l = s.instance),
              (u = s.currentTarget),
              (s = s.listener),
              l !== o && i.isPropagationStopped())
            )
              break e;
            kh(i, s, u), (o = l);
          }
      }
    }
    if (Vs) throw ((e = Pc), (Vs = !1), (Pc = null), e);
  }
  function fe(e, t) {
    var n = t[Bc];
    n === void 0 && (n = t[Bc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Dg(t, e, 2, !1), n.add(r));
  }
  function Tu(e, t, n) {
    var r = 0;
    t && (r |= 4), Dg(n, e, r, t);
  }
  var Xa = "_reactListening" + Math.random().toString(36).slice(2);
  function aa(e) {
    if (!e[Xa]) {
      (e[Xa] = !0),
        By.forEach(function (n) {
          n !== "selectionchange" && (eE.has(n) || Tu(n, !1, e), Tu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xa] || ((t[Xa] = !0), Tu("selectionchange", !1, t));
    }
  }
  function Dg(e, t, n, r) {
    switch (mg(t)) {
      case 1:
        var i = hS;
        break;
      case 4:
        i = mS;
        break;
      default:
        i = xd;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Oc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Mu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = a.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (((a = Sr(s)), a === null)) return;
            if (((l = a.tag), l === 5 || l === 6)) {
              r = o = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    tg(function () {
      var u = o,
        c = vd(n),
        f = [];
      e: {
        var d = Tg.get(e);
        if (d !== void 0) {
          var p = Sd,
            g = e;
          switch (e) {
            case "keypress":
              if (xs(n) === 0) break e;
            case "keydown":
            case "keyup":
              p = TS;
              break;
            case "focusin":
              (g = "focus"), (p = _u);
              break;
            case "focusout":
              (g = "blur"), (p = _u);
              break;
            case "beforeblur":
            case "afterblur":
              p = _u;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = gS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = RS;
              break;
            case kg:
            case Ng:
            case Og:
              p = bS;
              break;
            case Pg:
              p = AS;
              break;
            case "scroll":
              p = vS;
              break;
            case "wheel":
              p = FS;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = ES;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = vh;
          }
          var y = (t & 4) !== 0,
            b = !y && e === "scroll",
            m = y ? (d !== null ? d + "Capture" : null) : d;
          y = [];
          for (var h = u, v; h !== null; ) {
            v = h;
            var x = v.stateNode;
            if (
              (v.tag === 5 &&
                x !== null &&
                ((v = x),
                m !== null &&
                  ((x = ea(h, m)), x != null && y.push(sa(h, x, v)))),
              b)
            )
              break;
            h = h.return;
          }
          0 < y.length &&
            ((d = new p(d, g, null, n, c)), f.push({ event: d, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            d &&
              n !== kc &&
              (g = n.relatedTarget || n.fromElement) &&
              (Sr(g) || g[gn]))
          )
            break e;
          if (
            (p || d) &&
            ((d =
              c.window === c
                ? c
                : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            p
              ? ((g = n.relatedTarget || n.toElement),
                (p = u),
                (g = g ? Sr(g) : null),
                g !== null &&
                  ((b = Ur(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((p = null), (g = u)),
            p !== g)
          ) {
            if (
              ((y = hh),
              (x = "onMouseLeave"),
              (m = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = vh),
                (x = "onPointerLeave"),
                (m = "onPointerEnter"),
                (h = "pointer")),
              (b = p == null ? d : li(p)),
              (v = g == null ? d : li(g)),
              (d = new y(x, h + "leave", p, n, c)),
              (d.target = b),
              (d.relatedTarget = v),
              (x = null),
              Sr(c) === u &&
                ((y = new y(m, h + "enter", g, n, c)),
                (y.target = v),
                (y.relatedTarget = b),
                (x = y)),
              (b = x),
              p && g)
            )
              t: {
                for (y = p, m = g, h = 0, v = y; v; v = Wr(v)) h++;
                for (v = 0, x = m; x; x = Wr(x)) v++;
                for (; 0 < h - v; ) (y = Wr(y)), h--;
                for (; 0 < v - h; ) (m = Wr(m)), v--;
                for (; h--; ) {
                  if (y === m || (m !== null && y === m.alternate)) break t;
                  (y = Wr(y)), (m = Wr(m));
                }
                y = null;
              }
            else y = null;
            p !== null && Nh(f, d, p, y, !1),
              g !== null && b !== null && Nh(f, b, g, y, !0);
          }
        }
        e: {
          if (
            ((d = u ? li(u) : window),
            (p = d.nodeName && d.nodeName.toLowerCase()),
            p === "select" || (p === "input" && d.type === "file"))
          )
            var E = US;
          else if (wh(d))
            if (bg) E = YS;
            else {
              E = qS;
              var _ = QS;
            }
          else
            (p = d.nodeName) &&
              p.toLowerCase() === "input" &&
              (d.type === "checkbox" || d.type === "radio") &&
              (E = WS);
          if (E && (E = E(e, u))) {
            xg(f, E, n, c);
            break e;
          }
          _ && _(e, d, u),
            e === "focusout" &&
              (_ = d._wrapperState) &&
              _.controlled &&
              d.type === "number" &&
              bc(d, "number", d.value);
        }
        switch (((_ = u ? li(u) : window), e)) {
          case "focusin":
            (wh(_) || _.contentEditable === "true") &&
              ((ai = _), (Rc = u), ($o = null));
            break;
          case "focusout":
            $o = Rc = ai = null;
            break;
          case "mousedown":
            jc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (jc = !1), _h(f, n, c);
            break;
          case "selectionchange":
            if (KS) break;
          case "keydown":
          case "keyup":
            _h(f, n, c);
        }
        var C;
        if (_d)
          e: {
            switch (e) {
              case "compositionstart":
                var N = "onCompositionStart";
                break e;
              case "compositionend":
                N = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N = "onCompositionUpdate";
                break e;
            }
            N = void 0;
          }
        else
          oi
            ? gg(e, n) && (N = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (N = "onCompositionStart");
        N &&
          (yg &&
            n.locale !== "ko" &&
            (oi || N !== "onCompositionStart"
              ? N === "onCompositionEnd" && oi && (C = vg())
              : (($n = c),
                (bd = "value" in $n ? $n.value : $n.textContent),
                (oi = !0))),
          (_ = Ws(u, N)),
          0 < _.length &&
            ((N = new mh(N, e, null, n, c)),
            f.push({ event: N, listeners: _ }),
            C ? (N.data = C) : ((C = wg(n)), C !== null && (N.data = C)))),
          (C = BS ? zS(e, n) : $S(e, n)) &&
            ((u = Ws(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new mh("onBeforeInput", "beforeinput", null, n, c)),
              f.push({ event: c, listeners: u }),
              (c.data = C)));
      }
      Mg(f, t);
    });
  }
  function sa(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ws(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = ea(e, n)),
        o != null && r.unshift(sa(e, o, i)),
        (o = ea(e, t)),
        o != null && r.push(sa(e, o, i))),
        (e = e.return);
    }
    return r;
  }
  function Wr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nh(e, t, n, r, i) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var s = n,
        l = s.alternate,
        u = s.stateNode;
      if (l !== null && l === r) break;
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        i
          ? ((l = ea(n, o)), l != null && a.unshift(sa(n, l, s)))
          : i || ((l = ea(n, o)), l != null && a.push(sa(n, l, s)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var tE = /\r\n?/g,
    nE = /\u0000|\uFFFD/g;
  function Oh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        tE,
        `
`
      )
      .replace(nE, "");
  }
  function Ka(e, t, n) {
    if (((t = Oh(t)), Oh(e) !== t && n)) throw Error($(425));
  }
  function Ys() {}
  var Ac = null,
    Ic = null;
  function Fc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lc = typeof setTimeout == "function" ? setTimeout : void 0,
    rE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ph = typeof Promise == "function" ? Promise : void 0,
    iE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ph < "u"
        ? function (e) {
            return Ph.resolve(null).then(e).catch(oE);
          }
        : Lc;
  function oE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Du(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), ra(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    ra(t);
  }
  function Wn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Th(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var io = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + io,
    la = "__reactProps$" + io,
    gn = "__reactContainer$" + io,
    Bc = "__reactEvents$" + io,
    aE = "__reactListeners$" + io,
    sE = "__reactHandles$" + io;
  function Sr(e) {
    var t = e[Zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[gn] || n[Zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Th(e); e !== null; ) {
            if ((n = e[Zt])) return n;
            e = Th(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Ma(e) {
    return (
      (e = e[Zt] || e[gn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function li(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error($(33));
  }
  function Ml(e) {
    return e[la] || null;
  }
  var zc = [],
    ui = -1;
  function lr(e) {
    return { current: e };
  }
  function pe(e) {
    0 > ui || ((e.current = zc[ui]), (zc[ui] = null), ui--);
  }
  function ue(e, t) {
    ui++, (zc[ui] = e.current), (e.current = t);
  }
  var tr = {},
    Ue = lr(tr),
    nt = lr(!1),
    Rr = tr;
  function Ai(e, t) {
    var n = e.type.contextTypes;
    if (!n) return tr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function rt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Gs() {
    pe(nt), pe(Ue);
  }
  function Mh(e, t, n) {
    if (Ue.current !== tr) throw Error($(168));
    ue(Ue, t), ue(nt, n);
  }
  function Rg(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error($(108, Qb(e) || "Unknown", i));
    return xe({}, n, r);
  }
  function Xs(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        tr),
      (Rr = Ue.current),
      ue(Ue, e),
      ue(nt, nt.current),
      !0
    );
  }
  function Dh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error($(169));
    n
      ? ((e = Rg(e, t, Rr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        pe(nt),
        pe(Ue),
        ue(Ue, e))
      : pe(nt),
      ue(nt, n);
  }
  var dn = null,
    Dl = !1,
    Ru = !1;
  function jg(e) {
    dn === null ? (dn = [e]) : dn.push(e);
  }
  function lE(e) {
    (Dl = !0), jg(e);
  }
  function ur() {
    if (!Ru && dn !== null) {
      Ru = !0;
      var e = 0,
        t = ae;
      try {
        var n = dn;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (dn = null), (Dl = !1);
      } catch (i) {
        throw (dn !== null && (dn = dn.slice(e + 1)), og(yd, ur), i);
      } finally {
        (ae = t), (Ru = !1);
      }
    }
    return null;
  }
  var ci = [],
    fi = 0,
    Ks = null,
    Zs = 0,
    xt = [],
    bt = 0,
    jr = null,
    pn = 1,
    hn = "";
  function yr(e, t) {
    (ci[fi++] = Zs), (ci[fi++] = Ks), (Ks = e), (Zs = t);
  }
  function Ag(e, t, n) {
    (xt[bt++] = pn), (xt[bt++] = hn), (xt[bt++] = jr), (jr = e);
    var r = pn;
    e = hn;
    var i = 32 - Bt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Bt(t) + i;
    if (30 < o) {
      var a = i - (i % 5);
      (o = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (i -= a),
        (pn = (1 << (32 - Bt(t) + i)) | (n << i) | r),
        (hn = o + e);
    } else (pn = (1 << o) | (n << i) | r), (hn = e);
  }
  function kd(e) {
    e.return !== null && (yr(e, 1), Ag(e, 1, 0));
  }
  function Nd(e) {
    for (; e === Ks; )
      (Ks = ci[--fi]), (ci[fi] = null), (Zs = ci[--fi]), (ci[fi] = null);
    for (; e === jr; )
      (jr = xt[--bt]),
        (xt[bt] = null),
        (hn = xt[--bt]),
        (xt[bt] = null),
        (pn = xt[--bt]),
        (xt[bt] = null);
  }
  var pt = null,
    dt = null,
    me = !1,
    It = null;
  function Ig(e, t) {
    var n = Et(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Rh(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (pt = e), (dt = Wn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (pt = e), (dt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = jr !== null ? { id: pn, overflow: hn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Et(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (pt = e),
              (dt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function $c(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vc(e) {
    if (me) {
      var t = dt;
      if (t) {
        var n = t;
        if (!Rh(e, t)) {
          if ($c(e)) throw Error($(418));
          t = Wn(n.nextSibling);
          var r = pt;
          t && Rh(e, t)
            ? Ig(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (me = !1), (pt = e));
        }
      } else {
        if ($c(e)) throw Error($(418));
        (e.flags = (e.flags & -4097) | 2), (me = !1), (pt = e);
      }
    }
  }
  function jh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    pt = e;
  }
  function Za(e) {
    if (e !== pt) return !1;
    if (!me) return jh(e), (me = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Fc(e.type, e.memoizedProps))),
      t && (t = dt))
    ) {
      if ($c(e)) throw (Fg(), Error($(418)));
      for (; t; ) Ig(e, t), (t = Wn(t.nextSibling));
    }
    if ((jh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error($(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                dt = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        dt = null;
      }
    } else dt = pt ? Wn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fg() {
    for (var e = dt; e; ) e = Wn(e.nextSibling);
  }
  function Ii() {
    (dt = pt = null), (me = !1);
  }
  function Od(e) {
    It === null ? (It = [e]) : It.push(e);
  }
  var uE = _n.ReactCurrentBatchConfig;
  function jt(e, t) {
    if (e && e.defaultProps) {
      (t = xe({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Js = lr(null),
    el = null,
    di = null,
    Pd = null;
  function Td() {
    Pd = di = el = null;
  }
  function Md(e) {
    var t = Js.current;
    pe(Js), (e._currentValue = t);
  }
  function Hc(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ei(e, t) {
    (el = e),
      (Pd = di = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (et = !0), (e.firstContext = null));
  }
  function kt(e) {
    var t = e._currentValue;
    if (Pd !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), di === null)) {
        if (el === null) throw Error($(308));
        (di = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else di = di.next = e;
    return t;
  }
  var Er = null;
  function Dd(e) {
    Er === null ? (Er = [e]) : Er.push(e);
  }
  function Lg(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Dd(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      wn(e, r)
    );
  }
  function wn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Mn = !1;
  function Rd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Bg(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function vn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), re & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        wn(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Dd(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      wn(e, n)
    );
  }
  function bs(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gd(e, n);
    }
  }
  function Ah(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function tl(e, t, n, r) {
    var i = e.updateQueue;
    Mn = !1;
    var o = i.firstBaseUpdate,
      a = i.lastBaseUpdate,
      s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var l = s,
        u = l.next;
      (l.next = null), a === null ? (o = u) : (a.next = u), (a = l);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (s = c.lastBaseUpdate),
        s !== a &&
          (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (o !== null) {
      var f = i.baseState;
      (a = 0), (c = u = l = null), (s = o);
      do {
        var d = s.lane,
          p = s.eventTime;
        if ((r & d) === d) {
          c !== null &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var g = e,
              y = s;
            switch (((d = t), (p = n), y.tag)) {
              case 1:
                if (((g = y.payload), typeof g == "function")) {
                  f = g.call(p, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = y.payload),
                  (d = typeof g == "function" ? g.call(p, f, d) : g),
                  d == null)
                )
                  break e;
                f = xe({}, f, d);
                break e;
              case 2:
                Mn = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (d = i.effects),
            d === null ? (i.effects = [s]) : d.push(s));
        } else
          (p = {
            eventTime: p,
            lane: d,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
            (a |= d);
        if (((s = s.next), s === null)) {
          if (((s = i.shared.pending), s === null)) break;
          (d = s),
            (s = d.next),
            (d.next = null),
            (i.lastBaseUpdate = d),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (l = f),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (a |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (Ir |= a), (e.lanes = a), (e.memoizedState = f);
    }
  }
  function Ih(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error($(191, i));
          i.call(r);
        }
      }
  }
  var zg = new Ly.Component().refs;
  function Uc(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : xe({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Rl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Ur(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        i = Xn(e),
        o = vn(r, i);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, i)),
        t !== null && (zt(t, e, i, r), bs(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = We(),
        i = Xn(e),
        o = vn(r, i);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Yn(e, o, i)),
        t !== null && (zt(t, e, i, r), bs(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = We(),
        r = Xn(e),
        i = vn(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Yn(e, i, r)),
        t !== null && (zt(t, e, r, n), bs(t, e, r));
    },
  };
  function Fh(e, t, n, r, i, o, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !oa(n, r) || !oa(i, o)
        : !0
    );
  }
  function $g(e, t, n) {
    var r = !1,
      i = tr,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = kt(o))
        : ((i = rt(t) ? Rr : Ue.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Ai(e, i) : tr)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Rl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Lh(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
  }
  function Qc(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = zg), Rd(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = kt(o))
      : ((o = rt(t) ? Rr : Ue.current), (i.context = Ai(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Uc(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Rl.enqueueReplaceState(i, i.state, null),
        tl(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vo(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error($(309));
          var r = n.stateNode;
        }
        if (!r) throw Error($(147, e));
        var i = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (a) {
              var s = i.refs;
              s === zg && (s = i.refs = {}),
                a === null ? delete s[o] : (s[o] = a);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error($(284));
      if (!n._owner) throw Error($(290, e));
    }
    return e;
  }
  function Ja(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        $(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Bh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vg(e) {
    function t(m, h) {
      if (e) {
        var v = m.deletions;
        v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h);
      }
    }
    function n(m, h) {
      if (!e) return null;
      for (; h !== null; ) t(m, h), (h = h.sibling);
      return null;
    }
    function r(m, h) {
      for (m = new Map(); h !== null; )
        h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
      return m;
    }
    function i(m, h) {
      return (m = Kn(m, h)), (m.index = 0), (m.sibling = null), m;
    }
    function o(m, h, v) {
      return (
        (m.index = v),
        e
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
              : ((m.flags |= 2), h))
          : ((m.flags |= 1048576), h)
      );
    }
    function a(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function s(m, h, v, x) {
      return h === null || h.tag !== 6
        ? ((h = zu(v, m.mode, x)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h);
    }
    function l(m, h, v, x) {
      var E = v.type;
      return E === ii
        ? c(m, h, v.props.children, x, v.key)
        : h !== null &&
          (h.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Tn &&
              Bh(E) === h.type))
        ? ((x = i(h, v.props)), (x.ref = vo(m, h, v)), (x.return = m), x)
        : ((x = Ns(v.type, v.key, v.props, null, m.mode, x)),
          (x.ref = vo(m, h, v)),
          (x.return = m),
          x);
    }
    function u(m, h, v, x) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = $u(v, m.mode, x)), (h.return = m), h)
        : ((h = i(h, v.children || [])), (h.return = m), h);
    }
    function c(m, h, v, x, E) {
      return h === null || h.tag !== 7
        ? ((h = Or(v, m.mode, x, E)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h);
    }
    function f(m, h, v) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = zu("" + h, m.mode, v)), (h.return = m), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Va:
            return (
              (v = Ns(h.type, h.key, h.props, null, m.mode, v)),
              (v.ref = vo(m, null, h)),
              (v.return = m),
              v
            );
          case ri:
            return (h = $u(h, m.mode, v)), (h.return = m), h;
          case Tn:
            var x = h._init;
            return f(m, x(h._payload), v);
        }
        if (To(h) || co(h))
          return (h = Or(h, m.mode, v, null)), (h.return = m), h;
        Ja(m, h);
      }
      return null;
    }
    function d(m, h, v, x) {
      var E = h !== null ? h.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return E !== null ? null : s(m, h, "" + v, x);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Va:
            return v.key === E ? l(m, h, v, x) : null;
          case ri:
            return v.key === E ? u(m, h, v, x) : null;
          case Tn:
            return (E = v._init), d(m, h, E(v._payload), x);
        }
        if (To(v) || co(v)) return E !== null ? null : c(m, h, v, x, null);
        Ja(m, v);
      }
      return null;
    }
    function p(m, h, v, x, E) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (m = m.get(v) || null), s(h, m, "" + x, E);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Va:
            return (
              (m = m.get(x.key === null ? v : x.key) || null), l(h, m, x, E)
            );
          case ri:
            return (
              (m = m.get(x.key === null ? v : x.key) || null), u(h, m, x, E)
            );
          case Tn:
            var _ = x._init;
            return p(m, h, v, _(x._payload), E);
        }
        if (To(x) || co(x)) return (m = m.get(v) || null), c(h, m, x, E, null);
        Ja(h, x);
      }
      return null;
    }
    function g(m, h, v, x) {
      for (
        var E = null, _ = null, C = h, N = (h = 0), M = null;
        C !== null && N < v.length;
        N++
      ) {
        C.index > N ? ((M = C), (C = null)) : (M = C.sibling);
        var P = d(m, C, v[N], x);
        if (P === null) {
          C === null && (C = M);
          break;
        }
        e && C && P.alternate === null && t(m, C),
          (h = o(P, h, N)),
          _ === null ? (E = P) : (_.sibling = P),
          (_ = P),
          (C = M);
      }
      if (N === v.length) return n(m, C), me && yr(m, N), E;
      if (C === null) {
        for (; N < v.length; N++)
          (C = f(m, v[N], x)),
            C !== null &&
              ((h = o(C, h, N)),
              _ === null ? (E = C) : (_.sibling = C),
              (_ = C));
        return me && yr(m, N), E;
      }
      for (C = r(m, C); N < v.length; N++)
        (M = p(C, m, N, v[N], x)),
          M !== null &&
            (e && M.alternate !== null && C.delete(M.key === null ? N : M.key),
            (h = o(M, h, N)),
            _ === null ? (E = M) : (_.sibling = M),
            (_ = M));
      return (
        e &&
          C.forEach(function (L) {
            return t(m, L);
          }),
        me && yr(m, N),
        E
      );
    }
    function y(m, h, v, x) {
      var E = co(v);
      if (typeof E != "function") throw Error($(150));
      if (((v = E.call(v)), v == null)) throw Error($(151));
      for (
        var _ = (E = null), C = h, N = (h = 0), M = null, P = v.next();
        C !== null && !P.done;
        N++, P = v.next()
      ) {
        C.index > N ? ((M = C), (C = null)) : (M = C.sibling);
        var L = d(m, C, P.value, x);
        if (L === null) {
          C === null && (C = M);
          break;
        }
        e && C && L.alternate === null && t(m, C),
          (h = o(L, h, N)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L),
          (C = M);
      }
      if (P.done) return n(m, C), me && yr(m, N), E;
      if (C === null) {
        for (; !P.done; N++, P = v.next())
          (P = f(m, P.value, x)),
            P !== null &&
              ((h = o(P, h, N)),
              _ === null ? (E = P) : (_.sibling = P),
              (_ = P));
        return me && yr(m, N), E;
      }
      for (C = r(m, C); !P.done; N++, P = v.next())
        (P = p(C, m, N, P.value, x)),
          P !== null &&
            (e && P.alternate !== null && C.delete(P.key === null ? N : P.key),
            (h = o(P, h, N)),
            _ === null ? (E = P) : (_.sibling = P),
            (_ = P));
      return (
        e &&
          C.forEach(function (B) {
            return t(m, B);
          }),
        me && yr(m, N),
        E
      );
    }
    function b(m, h, v, x) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === ii &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Va:
            e: {
              for (var E = v.key, _ = h; _ !== null; ) {
                if (_.key === E) {
                  if (((E = v.type), E === ii)) {
                    if (_.tag === 7) {
                      n(m, _.sibling),
                        (h = i(_, v.props.children)),
                        (h.return = m),
                        (m = h);
                      break e;
                    }
                  } else if (
                    _.elementType === E ||
                    (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === Tn &&
                      Bh(E) === _.type)
                  ) {
                    n(m, _.sibling),
                      (h = i(_, v.props)),
                      (h.ref = vo(m, _, v)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                  n(m, _);
                  break;
                } else t(m, _);
                _ = _.sibling;
              }
              v.type === ii
                ? ((h = Or(v.props.children, m.mode, x, v.key)),
                  (h.return = m),
                  (m = h))
                : ((x = Ns(v.type, v.key, v.props, null, m.mode, x)),
                  (x.ref = vo(m, h, v)),
                  (x.return = m),
                  (m = x));
            }
            return a(m);
          case ri:
            e: {
              for (_ = v.key; h !== null; ) {
                if (h.key === _)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    n(m, h.sibling),
                      (h = i(h, v.children || [])),
                      (h.return = m),
                      (m = h);
                    break e;
                  } else {
                    n(m, h);
                    break;
                  }
                else t(m, h);
                h = h.sibling;
              }
              (h = $u(v, m.mode, x)), (h.return = m), (m = h);
            }
            return a(m);
          case Tn:
            return (_ = v._init), b(m, h, _(v._payload), x);
        }
        if (To(v)) return g(m, h, v, x);
        if (co(v)) return y(m, h, v, x);
        Ja(m, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          h !== null && h.tag === 6
            ? (n(m, h.sibling), (h = i(h, v)), (h.return = m), (m = h))
            : (n(m, h), (h = zu(v, m.mode, x)), (h.return = m), (m = h)),
          a(m))
        : n(m, h);
    }
    return b;
  }
  var Fi = Vg(!0),
    Hg = Vg(!1),
    Da = {},
    en = lr(Da),
    ua = lr(Da),
    ca = lr(Da);
  function _r(e) {
    if (e === Da) throw Error($(174));
    return e;
  }
  function jd(e, t) {
    switch ((ue(ca, t), ue(ua, e), ue(en, Da), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ec(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ec(t, e));
    }
    pe(en), ue(en, t);
  }
  function Li() {
    pe(en), pe(ua), pe(ca);
  }
  function Ug(e) {
    _r(ca.current);
    var t = _r(en.current),
      n = Ec(t, e.type);
    t !== n && (ue(ua, e), ue(en, n));
  }
  function Ad(e) {
    ua.current === e && (pe(en), pe(ua));
  }
  var ge = lr(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ju = [];
  function Id() {
    for (var e = 0; e < ju.length; e++)
      ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0;
  }
  var Ss = _n.ReactCurrentDispatcher,
    Au = _n.ReactCurrentBatchConfig,
    Ar = 0,
    we = null,
    ke = null,
    Me = null,
    rl = !1,
    Vo = !1,
    fa = 0,
    cE = 0;
  function $e() {
    throw Error($(321));
  }
  function Fd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Vt(e[n], t[n])) return !1;
    return !0;
  }
  function Ld(e, t, n, r, i, o) {
    if (
      ((Ar = o),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ss.current = e === null || e.memoizedState === null ? hE : mE),
      (e = n(r, i)),
      Vo)
    ) {
      o = 0;
      do {
        if (((Vo = !1), (fa = 0), 25 <= o)) throw Error($(301));
        (o += 1),
          (Me = ke = null),
          (t.updateQueue = null),
          (Ss.current = vE),
          (e = n(r, i));
      } while (Vo);
    }
    if (
      ((Ss.current = il),
      (t = ke !== null && ke.next !== null),
      (Ar = 0),
      (Me = ke = we = null),
      (rl = !1),
      t)
    )
      throw Error($(300));
    return e;
  }
  function Bd() {
    var e = fa !== 0;
    return (fa = 0), e;
  }
  function Xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Me === null ? (we.memoizedState = Me = e) : (Me = Me.next = e), Me;
  }
  function Nt() {
    if (ke === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ke.next;
    var t = Me === null ? we.memoizedState : Me.next;
    if (t !== null) (Me = t), (ke = e);
    else {
      if (e === null) throw Error($(310));
      (ke = e),
        (e = {
          memoizedState: ke.memoizedState,
          baseState: ke.baseState,
          baseQueue: ke.baseQueue,
          queue: ke.queue,
          next: null,
        }),
        Me === null ? (we.memoizedState = Me = e) : (Me = Me.next = e);
    }
    return Me;
  }
  function da(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Iu(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error($(311));
    n.lastRenderedReducer = e;
    var r = ke,
      i = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var a = i.next;
        (i.next = o.next), (o.next = a);
      }
      (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
      (o = i.next), (r = r.baseState);
      var s = (a = null),
        l = null,
        u = o;
      do {
        var c = u.lane;
        if ((Ar & c) === c)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
            (we.lanes |= c),
            (Ir |= c);
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? (a = r) : (l.next = s),
        Vt(r, t.memoizedState) || (et = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (we.lanes |= o), (Ir |= o), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Fu(e) {
    var t = Nt(),
      n = t.queue;
    if (n === null) throw Error($(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = (i = i.next);
      do (o = e(o, a.action)), (a = a.next);
      while (a !== i);
      Vt(o, t.memoizedState) || (et = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Qg() {}
  function qg(e, t) {
    var n = we,
      r = Nt(),
      i = t(),
      o = !Vt(r.memoizedState, i);
    if (
      (o && ((r.memoizedState = i), (et = !0)),
      (r = r.queue),
      zd(Gg.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        pa(9, Yg.bind(null, n, r, i, t), void 0, null),
        Re === null)
      )
        throw Error($(349));
      Ar & 30 || Wg(n, t, i);
    }
    return i;
  }
  function Wg(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Yg(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Xg(t) && Kg(e);
  }
  function Gg(e, t, n) {
    return n(function () {
      Xg(t) && Kg(e);
    });
  }
  function Xg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Vt(e, n);
    } catch {
      return !0;
    }
  }
  function Kg(e) {
    var t = wn(e, 1);
    t !== null && zt(t, e, 1, -1);
  }
  function zh(e) {
    var t = Xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = pE.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function pa(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Zg() {
    return Nt().memoizedState;
  }
  function Es(e, t, n, r) {
    var i = Xt();
    (we.flags |= e),
      (i.memoizedState = pa(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function jl(e, t, n, r) {
    var i = Nt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ke !== null) {
      var a = ke.memoizedState;
      if (((o = a.destroy), r !== null && Fd(r, a.deps))) {
        i.memoizedState = pa(t, n, o, r);
        return;
      }
    }
    (we.flags |= e), (i.memoizedState = pa(1 | t, n, o, r));
  }
  function $h(e, t) {
    return Es(8390656, 8, e, t);
  }
  function zd(e, t) {
    return jl(2048, 8, e, t);
  }
  function Jg(e, t) {
    return jl(4, 2, e, t);
  }
  function e0(e, t) {
    return jl(4, 4, e, t);
  }
  function t0(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function n0(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), jl(4, 4, t0.bind(null, t, e), n)
    );
  }
  function $d() {}
  function r0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fd(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function i0(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fd(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function o0(e, t, n) {
    return Ar & 21
      ? (Vt(n, t) ||
          ((n = lg()), (we.lanes |= n), (Ir |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
  }
  function fE(e, t) {
    var n = ae;
    (ae = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Au.transition;
    Au.transition = {};
    try {
      e(!1), t();
    } finally {
      (ae = n), (Au.transition = r);
    }
  }
  function a0() {
    return Nt().memoizedState;
  }
  function dE(e, t, n) {
    var r = Xn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      s0(e))
    )
      l0(t, n);
    else if (((n = Lg(e, t, n, r)), n !== null)) {
      var i = We();
      zt(n, e, r, i), u0(n, t, r);
    }
  }
  function pE(e, t, n) {
    var r = Xn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (s0(e)) l0(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var a = t.lastRenderedState,
            s = o(a, n);
          if (((i.hasEagerState = !0), (i.eagerState = s), Vt(s, a))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), Dd(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Lg(e, t, i, r)),
        n !== null && ((i = We()), zt(n, e, r, i), u0(n, t, r));
    }
  }
  function s0(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function l0(e, t) {
    Vo = rl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function u0(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), gd(e, n);
    }
  }
  var il = {
      readContext: kt,
      useCallback: $e,
      useContext: $e,
      useEffect: $e,
      useImperativeHandle: $e,
      useInsertionEffect: $e,
      useLayoutEffect: $e,
      useMemo: $e,
      useReducer: $e,
      useRef: $e,
      useState: $e,
      useDebugValue: $e,
      useDeferredValue: $e,
      useTransition: $e,
      useMutableSource: $e,
      useSyncExternalStore: $e,
      useId: $e,
      unstable_isNewReconciler: !1,
    },
    hE = {
      readContext: kt,
      useCallback: function (e, t) {
        return (Xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: kt,
      useEffect: $h,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Es(4194308, 4, t0.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Es(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Es(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = dE.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: zh,
      useDebugValue: $d,
      useDeferredValue: function (e) {
        return (Xt().memoizedState = e);
      },
      useTransition: function () {
        var e = zh(!1),
          t = e[0];
        return (e = fE.bind(null, e[1])), (Xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          i = Xt();
        if (me) {
          if (n === void 0) throw Error($(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error($(349));
          Ar & 30 || Wg(r, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          $h(Gg.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          pa(9, Yg.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Xt(),
          t = Re.identifierPrefix;
        if (me) {
          var n = hn,
            r = pn;
          (n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fa++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = cE++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    mE = {
      readContext: kt,
      useCallback: r0,
      useContext: kt,
      useEffect: zd,
      useImperativeHandle: n0,
      useInsertionEffect: Jg,
      useLayoutEffect: e0,
      useMemo: i0,
      useReducer: Iu,
      useRef: Zg,
      useState: function () {
        return Iu(da);
      },
      useDebugValue: $d,
      useDeferredValue: function (e) {
        var t = Nt();
        return o0(t, ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Iu(da)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: qg,
      useId: a0,
      unstable_isNewReconciler: !1,
    },
    vE = {
      readContext: kt,
      useCallback: r0,
      useContext: kt,
      useEffect: zd,
      useImperativeHandle: n0,
      useInsertionEffect: Jg,
      useLayoutEffect: e0,
      useMemo: i0,
      useReducer: Fu,
      useRef: Zg,
      useState: function () {
        return Fu(da);
      },
      useDebugValue: $d,
      useDeferredValue: function (e) {
        var t = Nt();
        return ke === null ? (t.memoizedState = e) : o0(t, ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Fu(da)[0],
          t = Nt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qg,
      useSyncExternalStore: qg,
      useId: a0,
      unstable_isNewReconciler: !1,
    };
  function Bi(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Ub(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Lu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function qc(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var yE = typeof WeakMap == "function" ? WeakMap : Map;
  function c0(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        al || ((al = !0), (nf = r)), qc(e, t);
      }),
      n
    );
  }
  function f0(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          qc(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          qc(e, t),
            typeof r != "function" &&
              (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Vh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new yE();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = ME.bind(null, e, t, n)), t.then(e, e));
  }
  function Hh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Uh(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = vn(-1, 1)), (t.tag = 2), Yn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var gE = _n.ReactCurrentOwner,
    et = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? Hg(t, null, n, r) : Fi(t, e.child, n, r);
  }
  function Qh(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      Ei(t, i),
      (r = Ld(e, t, n, r, o, i)),
      (n = Bd()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          xn(e, t, i))
        : (me && n && kd(t), (t.flags |= 1), qe(e, t, r, i), t.child)
    );
  }
  function qh(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Gd(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), d0(e, t, o, r, i))
        : ((e = Ns(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var a = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : oa), n(a, r) && e.ref === t.ref)
      )
        return xn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Kn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function d0(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (oa(o, r) && e.ref === t.ref)
        if (((et = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (et = !0);
        else return (t.lanes = e.lanes), xn(e, t, i);
    }
    return Wc(e, t, n, r, i);
  }
  function p0(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ue(hi, ft),
          (ft |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ue(hi, ft),
            (ft |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ue(hi, ft),
          (ft |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ue(hi, ft),
        (ft |= r);
    return qe(e, t, i, n), t.child;
  }
  function h0(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Wc(e, t, n, r, i) {
    var o = rt(n) ? Rr : Ue.current;
    return (
      (o = Ai(t, o)),
      Ei(t, i),
      (n = Ld(e, t, n, r, o, i)),
      (r = Bd()),
      e !== null && !et
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          xn(e, t, i))
        : (me && r && kd(t), (t.flags |= 1), qe(e, t, n, i), t.child)
    );
  }
  function Wh(e, t, n, r, i) {
    if (rt(n)) {
      var o = !0;
      Xs(t);
    } else o = !1;
    if ((Ei(t, i), t.stateNode === null))
      _s(e, t), $g(t, n, r), Qc(t, n, r, i), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        s = t.memoizedProps;
      a.props = s;
      var l = a.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = kt(u))
        : ((u = rt(n) ? Rr : Ue.current), (u = Ai(t, u)));
      var c = n.getDerivedStateFromProps,
        f =
          typeof c == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== r || l !== u) && Lh(t, a, r, u)),
        (Mn = !1);
      var d = t.memoizedState;
      (a.state = d),
        tl(t, r, a, i),
        (l = t.memoizedState),
        s !== r || d !== l || nt.current || Mn
          ? (typeof c == "function" && (Uc(t, n, c, r), (l = t.memoizedState)),
            (s = Mn || Fh(t, n, s, r, d, l, u))
              ? (f ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (a.props = r),
            (a.state = l),
            (a.context = u),
            (r = s))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        Bg(e, t),
        (s = t.memoizedProps),
        (u = t.type === t.elementType ? s : jt(t.type, s)),
        (a.props = u),
        (f = t.pendingProps),
        (d = a.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = kt(l))
          : ((l = rt(n) ? Rr : Ue.current), (l = Ai(t, l)));
      var p = n.getDerivedStateFromProps;
      (c =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((s !== f || d !== l) && Lh(t, a, r, l)),
        (Mn = !1),
        (d = t.memoizedState),
        (a.state = d),
        tl(t, r, a, i);
      var g = t.memoizedState;
      s !== f || d !== g || nt.current || Mn
        ? (typeof p == "function" && (Uc(t, n, p, r), (g = t.memoizedState)),
          (u = Mn || Fh(t, n, u, r, d, g, l) || !1)
            ? (c ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, g, l),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, g, l)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (s === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (a.props = r),
          (a.state = g),
          (a.context = l),
          (r = u))
        : (typeof a.componentDidUpdate != "function" ||
            (s === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Yc(e, t, n, r, o, i);
  }
  function Yc(e, t, n, r, i, o) {
    h0(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && Dh(t, n, !1), xn(e, t, o);
    (r = t.stateNode), (gE.current = t);
    var s =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Fi(t, e.child, null, o)), (t.child = Fi(t, null, s, o)))
        : qe(e, t, s, o),
      (t.memoizedState = r.state),
      i && Dh(t, n, !0),
      t.child
    );
  }
  function m0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Mh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Mh(e, t.context, !1),
      jd(e, t.containerInfo);
  }
  function Yh(e, t, n, r, i) {
    return Ii(), Od(i), (t.flags |= 256), qe(e, t, n, r), t.child;
  }
  var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function v0(e, t, n) {
    var r = t.pendingProps,
      i = ge.current,
      o = !1,
      a = (t.flags & 128) !== 0,
      s;
    if (
      ((s = a) ||
        (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      s
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      ue(ge, i & 1),
      e === null)
    )
      return (
        Vc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((a = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (a = { mode: "hidden", children: a }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = a))
                  : (o = Fl(a, r, 0, null)),
                (e = Or(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Xc(n)),
                (t.memoizedState = Gc),
                e)
              : Vd(t, a))
      );
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
      return wE(e, t, a, r, s, i, n);
    if (o) {
      (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(a & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Kn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        s !== null ? (o = Kn(s, o)) : ((o = Or(o, a, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Xc(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (o.memoizedState = a),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Gc),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Kn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Vd(e, t) {
    return (
      (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function es(e, t, n, r) {
    return (
      r !== null && Od(r),
      Fi(t, e.child, null, n),
      (e = Vd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wE(e, t, n, r, i, o, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Lu(Error($(422)))), es(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Fl({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Or(o, i, a, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Fi(t, e.child, null, a),
          (t.child.memoizedState = Xc(a)),
          (t.memoizedState = Gc),
          o);
    if (!(t.mode & 1)) return es(e, t, a, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (o = Error($(419))), (r = Lu(o, r, void 0)), es(e, t, a, r)
      );
    }
    if (((s = (a & e.childLanes) !== 0), et || s)) {
      if (((r = Re), r !== null)) {
        switch (a & -a) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | a) ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), wn(e, i), zt(r, e, i, -1));
      }
      return Yd(), (r = Lu(Error($(421)))), es(e, t, a, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = DE.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (dt = Wn(i.nextSibling)),
        (pt = t),
        (me = !0),
        (It = null),
        e !== null &&
          ((xt[bt++] = pn),
          (xt[bt++] = hn),
          (xt[bt++] = jr),
          (pn = e.id),
          (hn = e.overflow),
          (jr = t)),
        (t = Vd(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Gh(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Hc(e.return, t, n);
  }
  function Bu(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = i));
  }
  function y0(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if ((qe(e, t, r.children, n), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Gh(e, n, t);
          else if (e.tag === 19) Gh(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && nl(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Bu(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && nl(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Bu(t, !0, n, null, o);
          break;
        case "together":
          Bu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function _s(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function xn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ir |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error($(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Kn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function xE(e, t, n) {
    switch (t.tag) {
      case 3:
        m0(t), Ii();
        break;
      case 5:
        Ug(t);
        break;
      case 1:
        rt(t.type) && Xs(t);
        break;
      case 4:
        jd(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        ue(Js, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? v0(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = xn(e, t, n)),
              e !== null ? e.sibling : null);
        ue(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return y0(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ue(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), p0(e, t, n);
    }
    return xn(e, t, n);
  }
  var g0, Kc, w0, x0;
  g0 = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  Kc = function () {};
  w0 = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), _r(en.current);
      var o = null;
      switch (n) {
        case "input":
          (i = wc(e, i)), (r = wc(e, r)), (o = []);
          break;
        case "select":
          (i = xe({}, i, { value: void 0 })),
            (r = xe({}, r, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (i = Sc(e, i)), (r = Sc(e, r)), (o = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = Ys);
      }
      _c(n, r);
      var a;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var s = i[u];
            for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (Zo.hasOwnProperty(u)
                ? o || (o = [])
                : (o = o || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((s = i != null ? i[u] : void 0),
          r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        )
          if (u === "style")
            if (s) {
              for (a in s)
                !s.hasOwnProperty(a) ||
                  (l && l.hasOwnProperty(a)) ||
                  (n || (n = {}), (n[a] = ""));
              for (a in l)
                l.hasOwnProperty(a) &&
                  s[a] !== l[a] &&
                  (n || (n = {}), (n[a] = l[a]));
            } else n || (o || (o = []), o.push(u, n)), (n = l);
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (s = s ? s.__html : void 0),
                l != null && s !== l && (o = o || []).push(u, l))
              : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Zo.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && fe("scroll", e),
                    o || s === l || (o = []))
                  : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  x0 = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function yo(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function bE(e, t, n) {
    var r = t.pendingProps;
    switch ((Nd(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return rt(t.type) && Gs(), Ve(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Li(),
          pe(nt),
          pe(Ue),
          Id(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Za(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), It !== null && (af(It), (It = null)))),
          Kc(e, t),
          Ve(t),
          null
        );
      case 5:
        Ad(t);
        var i = _r(ca.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          w0(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error($(166));
            return Ve(t), null;
          }
          if (((e = _r(en.current)), Za(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Zt] = t), (r[la] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Do.length; i++) fe(Do[i], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                ih(r, o), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                ah(r, o), fe("invalid", r);
            }
            _c(n, o), (i = null);
            for (var a in o)
              if (o.hasOwnProperty(a)) {
                var s = o[a];
                a === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Ka(r.textContent, s, e),
                      (i = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (o.suppressHydrationWarning !== !0 &&
                        Ka(r.textContent, s, e),
                      (i = ["children", "" + s]))
                  : Zo.hasOwnProperty(a) &&
                    s != null &&
                    a === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Ha(r), oh(r, o, !0);
                break;
              case "textarea":
                Ha(r), sh(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ys);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Wy(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[Zt] = t),
              (e[la] = r),
              g0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = Cc(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Do.length; i++) fe(Do[i], e);
                  i = r;
                  break;
                case "source":
                  fe("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (i = r);
                  break;
                case "details":
                  fe("toggle", e), (i = r);
                  break;
                case "input":
                  ih(e, r), (i = wc(e, r)), fe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = xe({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  ah(e, r), (i = Sc(e, r)), fe("invalid", e);
                  break;
                default:
                  i = r;
              }
              _c(n, i), (s = i);
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var l = s[o];
                  o === "style"
                    ? Xy(e, l)
                    : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Yy(e, l))
                    : o === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Jo(e, l)
                      : typeof l == "number" && Jo(e, "" + l)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (Zo.hasOwnProperty(o)
                        ? l != null && o === "onScroll" && fe("scroll", e)
                        : l != null && dd(e, o, l, a));
                }
              switch (n) {
                case "input":
                  Ha(e), oh(e, r, !1);
                  break;
                case "textarea":
                  Ha(e), sh(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + er(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? wi(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        wi(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ys);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) x0(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error($(166));
          if (((n = _r(ca.current)), _r(en.current), Za(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Zt] = t),
              (o = r.nodeValue !== n) && ((e = pt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ka(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ka(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Zt] = t),
              (t.stateNode = r);
        }
        return Ve(t), null;
      case 13:
        if (
          (pe(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (me && dt !== null && t.mode & 1 && !(t.flags & 128))
            Fg(), Ii(), (t.flags |= 98560), (o = !1);
          else if (((o = Za(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error($(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error($(317));
              o[Zt] = t;
            } else
              Ii(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ve(t), (o = !1);
          } else It !== null && (af(It), (It = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Oe === 0 && (Oe = 3) : Yd())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (
          Li(),
          Kc(e, t),
          e === null && aa(t.stateNode.containerInfo),
          Ve(t),
          null
        );
      case 10:
        return Md(t.type._context), Ve(t), null;
      case 17:
        return rt(t.type) && Gs(), Ve(t), null;
      case 19:
        if ((pe(ge), (o = t.memoizedState), o === null)) return Ve(t), null;
        if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
          if (r) yo(o, !1);
          else {
            if (Oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((a = nl(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      yo(o, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (a = o.alternate),
                      a === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = a.childLanes),
                          (o.lanes = a.lanes),
                          (o.child = a.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = a.memoizedProps),
                          (o.memoizedState = a.memoizedState),
                          (o.updateQueue = a.updateQueue),
                          (o.type = a.type),
                          (e = a.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ue(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              _e() > zi &&
              ((t.flags |= 128), (r = !0), yo(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yo(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !a.alternate &&
                  !me)
              )
                return Ve(t), null;
            } else
              2 * _e() - o.renderingStartTime > zi &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yo(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = o.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (o.last = a));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = _e()),
            (t.sibling = null),
            (n = ge.current),
            ue(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Wd(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? ft & 1073741824 &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error($(156, t.tag));
  }
  function SE(e, t) {
    switch ((Nd(t), t.tag)) {
      case 1:
        return (
          rt(t.type) && Gs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Li(),
          pe(nt),
          pe(Ue),
          Id(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ad(t), null;
      case 13:
        if (
          (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error($(340));
          Ii();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return pe(ge), null;
      case 4:
        return Li(), null;
      case 10:
        return Md(t.type._context), null;
      case 22:
      case 23:
        return Wd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ts = !1,
    He = !1,
    EE = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null;
  function pi(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Se(e, t, r);
        }
      else n.current = null;
  }
  function Zc(e, t, n) {
    try {
      n();
    } catch (r) {
      Se(e, t, r);
    }
  }
  var Xh = !1;
  function _E(e, t) {
    if (((Ac = Qs), (e = _g()), Cd(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              s = -1,
              l = -1,
              u = 0,
              c = 0,
              f = e,
              d = null;
            t: for (;;) {
              for (
                var p;
                f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                  f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                  f.nodeType === 3 && (a += f.nodeValue.length),
                  (p = f.firstChild) !== null;

              )
                (d = f), (f = p);
              for (;;) {
                if (f === e) break t;
                if (
                  (d === n && ++u === i && (s = a),
                  d === o && ++c === r && (l = a),
                  (p = f.nextSibling) !== null)
                )
                  break;
                (f = d), (d = f.parentNode);
              }
              f = p;
            }
            n = s === -1 || l === -1 ? null : { start: s, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ic = { focusedElem: e, selectionRange: n }, Qs = !1, Q = t;
      Q !== null;

    )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Q = e);
      else
        for (; Q !== null; ) {
          t = Q;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var y = g.memoizedProps,
                      b = g.memoizedState,
                      m = t.stateNode,
                      h = m.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : jt(t.type, y),
                        b
                      );
                    m.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error($(163));
              }
          } catch (x) {
            Se(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Q = e);
            break;
          }
          Q = t.return;
        }
    return (g = Xh), (Xh = !1), g;
  }
  function Ho(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && Zc(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Al(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Jc(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function b0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), b0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[la],
          delete t[Bc],
          delete t[aE],
          delete t[sE])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function S0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Kh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || S0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ys));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ef(e, t, n), e = e.sibling; e !== null; )
        ef(e, t, n), (e = e.sibling);
  }
  function tf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (tf(e, t, n), e = e.sibling; e !== null; )
        tf(e, t, n), (e = e.sibling);
  }
  var Ie = null,
    At = !1;
  function Nn(e, t, n) {
    for (n = n.child; n !== null; ) E0(e, t, n), (n = n.sibling);
  }
  function E0(e, t, n) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Nl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        He || pi(n, t);
      case 6:
        var r = Ie,
          i = At;
        (Ie = null),
          Nn(e, t, n),
          (Ie = r),
          (At = i),
          Ie !== null &&
            (At
              ? ((e = Ie),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ie.removeChild(n.stateNode));
        break;
      case 18:
        Ie !== null &&
          (At
            ? ((e = Ie),
              (n = n.stateNode),
              e.nodeType === 8
                ? Du(e.parentNode, n)
                : e.nodeType === 1 && Du(e, n),
              ra(e))
            : Du(Ie, n.stateNode));
        break;
      case 4:
        (r = Ie),
          (i = At),
          (Ie = n.stateNode.containerInfo),
          (At = !0),
          Nn(e, t, n),
          (Ie = r),
          (At = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !He &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var o = i,
              a = o.destroy;
            (o = o.tag),
              a !== void 0 && (o & 2 || o & 4) && Zc(n, t, a),
              (i = i.next);
          } while (i !== r);
        }
        Nn(e, t, n);
        break;
      case 1:
        if (
          !He &&
          (pi(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            Se(n, t, s);
          }
        Nn(e, t, n);
        break;
      case 21:
        Nn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((He = (r = He) || n.memoizedState !== null), Nn(e, t, n), (He = r))
          : Nn(e, t, n);
        break;
      default:
        Nn(e, t, n);
    }
  }
  function Zh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new EE()),
        t.forEach(function (r) {
          var i = RE.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            a = t,
            s = a;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (Ie = s.stateNode), (At = !1);
                break e;
              case 3:
                (Ie = s.stateNode.containerInfo), (At = !0);
                break e;
              case 4:
                (Ie = s.stateNode.containerInfo), (At = !0);
                break e;
            }
            s = s.return;
          }
          if (Ie === null) throw Error($(160));
          E0(o, a, i), (Ie = null), (At = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (u) {
          Se(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) _0(t, e), (t = t.sibling);
  }
  function _0(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Dt(t, e), Gt(e), r & 4)) {
          try {
            Ho(3, e, e.return), Al(3, e);
          } catch (y) {
            Se(e, e.return, y);
          }
          try {
            Ho(5, e, e.return);
          } catch (y) {
            Se(e, e.return, y);
          }
        }
        break;
      case 1:
        Dt(t, e), Gt(e), r & 512 && n !== null && pi(n, n.return);
        break;
      case 5:
        if (
          (Dt(t, e),
          Gt(e),
          r & 512 && n !== null && pi(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Jo(i, "");
          } catch (y) {
            Se(e, e.return, y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            a = n !== null ? n.memoizedProps : o,
            s = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              s === "input" && o.type === "radio" && o.name != null && Qy(i, o),
                Cc(s, a);
              var u = Cc(s, o);
              for (a = 0; a < l.length; a += 2) {
                var c = l[a],
                  f = l[a + 1];
                c === "style"
                  ? Xy(i, f)
                  : c === "dangerouslySetInnerHTML"
                  ? Yy(i, f)
                  : c === "children"
                  ? Jo(i, f)
                  : dd(i, c, f, u);
              }
              switch (s) {
                case "input":
                  xc(i, o);
                  break;
                case "textarea":
                  qy(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  p != null
                    ? wi(i, !!o.multiple, p, !1)
                    : d !== !!o.multiple &&
                      (o.defaultValue != null
                        ? wi(i, !!o.multiple, o.defaultValue, !0)
                        : wi(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[la] = o;
            } catch (y) {
              Se(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((Dt(t, e), Gt(e), r & 4)) {
          if (e.stateNode === null) throw Error($(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (y) {
            Se(e, e.return, y);
          }
        }
        break;
      case 3:
        if (
          (Dt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ra(t.containerInfo);
          } catch (y) {
            Se(e, e.return, y);
          }
        break;
      case 4:
        Dt(t, e), Gt(e);
        break;
      case 13:
        Dt(t, e),
          Gt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Qd = _e())),
          r & 4 && Zh(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((He = (u = He) || c), Dt(t, e), (He = u)) : Dt(t, e),
          Gt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (Q = e, c = e.child; c !== null; ) {
              for (f = Q = c; Q !== null; ) {
                switch (((d = Q), (p = d.child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ho(4, d, d.return);
                    break;
                  case 1:
                    pi(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (y) {
                        Se(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    pi(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      em(f);
                      continue;
                    }
                }
                p !== null ? ((p.return = d), (Q = p)) : em(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (i = f.stateNode),
                    u
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((s = f.stateNode),
                        (l = f.memoizedProps.style),
                        (a =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (s.style.display = Gy("display", a)));
                } catch (y) {
                  Se(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (y) {
                  Se(e, e.return, y);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        Dt(t, e), Gt(e), r & 4 && Zh(e);
        break;
      case 21:
        break;
      default:
        Dt(t, e), Gt(e);
    }
  }
  function Gt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (S0(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error($(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Jo(i, ""), (r.flags &= -33));
            var o = Kh(e);
            tf(e, o, i);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              s = Kh(e);
            ef(e, s, a);
            break;
          default:
            throw Error($(161));
        }
      } catch (l) {
        Se(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function CE(e, t, n) {
    (Q = e), C0(e);
  }
  function C0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var i = Q,
        o = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || ts;
        if (!a) {
          var s = i.alternate,
            l = (s !== null && s.memoizedState !== null) || He;
          s = ts;
          var u = He;
          if (((ts = a), (He = l) && !u))
            for (Q = i; Q !== null; )
              (a = Q),
                (l = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? tm(i)
                  : l !== null
                  ? ((l.return = a), (Q = l))
                  : tm(i);
          for (; o !== null; ) (Q = o), C0(o), (o = o.sibling);
          (Q = i), (ts = s), (He = u);
        }
        Jh(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (Q = o)) : Jh(e);
    }
  }
  function Jh(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || Al(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : jt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ih(t, o, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ih(t, a, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && ra(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error($(163));
            }
          He || (t.flags & 512 && Jc(t));
        } catch (d) {
          Se(t, t.return, d);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function em(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function tm(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Al(4, t);
            } catch (l) {
              Se(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Se(t, i, l);
              }
            }
            var o = t.return;
            try {
              Jc(t);
            } catch (l) {
              Se(t, o, l);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Jc(t);
            } catch (l) {
              Se(t, a, l);
            }
        }
      } catch (l) {
        Se(t, t.return, l);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (Q = s);
        break;
      }
      Q = t.return;
    }
  }
  var kE = Math.ceil,
    ol = _n.ReactCurrentDispatcher,
    Hd = _n.ReactCurrentOwner,
    Ct = _n.ReactCurrentBatchConfig,
    re = 0,
    Re = null,
    Ce = null,
    Fe = 0,
    ft = 0,
    hi = lr(0),
    Oe = 0,
    ha = null,
    Ir = 0,
    Il = 0,
    Ud = 0,
    Uo = null,
    Ze = null,
    Qd = 0,
    zi = 1 / 0,
    fn = null,
    al = !1,
    nf = null,
    Gn = null,
    ns = !1,
    Vn = null,
    sl = 0,
    Qo = 0,
    rf = null,
    Cs = -1,
    ks = 0;
  function We() {
    return re & 6 ? _e() : Cs !== -1 ? Cs : (Cs = _e());
  }
  function Xn(e) {
    return e.mode & 1
      ? re & 2 && Fe !== 0
        ? Fe & -Fe
        : uE.transition !== null
        ? (ks === 0 && (ks = lg()), ks)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mg(e.type))),
          e)
      : 1;
  }
  function zt(e, t, n, r) {
    if (50 < Qo) throw ((Qo = 0), (rf = null), Error($(185)));
    Pa(e, n, r),
      (!(re & 2) || e !== Re) &&
        (e === Re && (!(re & 2) && (Il |= n), Oe === 4 && Bn(e, Fe)),
        it(e, r),
        n === 1 &&
          re === 0 &&
          !(t.mode & 1) &&
          ((zi = _e() + 500), Dl && ur()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    uS(e, t);
    var r = Us(e, e === Re ? Fe : 0);
    if (r === 0)
      n !== null && ch(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ch(n), t === 1))
        e.tag === 0 ? lE(nm.bind(null, e)) : jg(nm.bind(null, e)),
          iE(function () {
            !(re & 6) && ur();
          }),
          (n = null);
      else {
        switch (ug(r)) {
          case 1:
            n = yd;
            break;
          case 4:
            n = ag;
            break;
          case 16:
            n = Hs;
            break;
          case 536870912:
            n = sg;
            break;
          default:
            n = Hs;
        }
        n = R0(n, k0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function k0(e, t) {
    if (((Cs = -1), (ks = 0), re & 6)) throw Error($(327));
    var n = e.callbackNode;
    if (_i() && e.callbackNode !== n) return null;
    var r = Us(e, e === Re ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
    else {
      t = r;
      var i = re;
      re |= 2;
      var o = O0();
      (Re !== e || Fe !== t) && ((fn = null), (zi = _e() + 500), Nr(e, t));
      do
        try {
          PE();
          break;
        } catch (s) {
          N0(e, s);
        }
      while (1);
      Td(),
        (ol.current = o),
        (re = i),
        Ce !== null ? (t = 0) : ((Re = null), (Fe = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Tc(e)), i !== 0 && ((r = i), (t = of(e, i)))),
        t === 1)
      )
        throw ((n = ha), Nr(e, 0), Bn(e, r), it(e, _e()), n);
      if (t === 6) Bn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !NE(i) &&
            ((t = ll(e, r)),
            t === 2 && ((o = Tc(e)), o !== 0 && ((r = o), (t = of(e, o)))),
            t === 1))
        )
          throw ((n = ha), Nr(e, 0), Bn(e, r), it(e, _e()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error($(345));
          case 2:
            gr(e, Ze, fn);
            break;
          case 3:
            if (
              (Bn(e, r),
              (r & 130023424) === r && ((t = Qd + 500 - _e()), 10 < t))
            ) {
              if (Us(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                We(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Lc(gr.bind(null, e, Ze, fn), t);
              break;
            }
            gr(e, Ze, fn);
            break;
          case 4:
            if ((Bn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - Bt(r);
              (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
            }
            if (
              ((r = i),
              (r = _e() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * kE(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Lc(gr.bind(null, e, Ze, fn), r);
              break;
            }
            gr(e, Ze, fn);
            break;
          case 5:
            gr(e, Ze, fn);
            break;
          default:
            throw Error($(329));
        }
      }
    }
    return it(e, _e()), e.callbackNode === n ? k0.bind(null, e) : null;
  }
  function of(e, t) {
    var n = Uo;
    return (
      e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256),
      (e = ll(e, t)),
      e !== 2 && ((t = Ze), (Ze = n), t !== null && af(t)),
      e
    );
  }
  function af(e) {
    Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
  }
  function NE(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!Vt(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Bn(e, t) {
    for (
      t &= ~Ud,
        t &= ~Il,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Bt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function nm(e) {
    if (re & 6) throw Error($(327));
    _i();
    var t = Us(e, 0);
    if (!(t & 1)) return it(e, _e()), null;
    var n = ll(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Tc(e);
      r !== 0 && ((t = r), (n = of(e, r)));
    }
    if (n === 1) throw ((n = ha), Nr(e, 0), Bn(e, t), it(e, _e()), n);
    if (n === 6) throw Error($(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gr(e, Ze, fn),
      it(e, _e()),
      null
    );
  }
  function qd(e, t) {
    var n = re;
    re |= 1;
    try {
      return e(t);
    } finally {
      (re = n), re === 0 && ((zi = _e() + 500), Dl && ur());
    }
  }
  function Fr(e) {
    Vn !== null && Vn.tag === 0 && !(re & 6) && _i();
    var t = re;
    re |= 1;
    var n = Ct.transition,
      r = ae;
    try {
      if (((Ct.transition = null), (ae = 1), e)) return e();
    } finally {
      (ae = r), (Ct.transition = n), (re = t), !(re & 6) && ur();
    }
  }
  function Wd() {
    (ft = hi.current), pe(hi);
  }
  function Nr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), rE(n)), Ce !== null))
      for (n = Ce.return; n !== null; ) {
        var r = n;
        switch ((Nd(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Gs();
            break;
          case 3:
            Li(), pe(nt), pe(Ue), Id();
            break;
          case 5:
            Ad(r);
            break;
          case 4:
            Li();
            break;
          case 13:
            pe(ge);
            break;
          case 19:
            pe(ge);
            break;
          case 10:
            Md(r.type._context);
            break;
          case 22:
          case 23:
            Wd();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (Ce = e = Kn(e.current, null)),
      (Fe = ft = t),
      (Oe = 0),
      (ha = null),
      (Ud = Il = Ir = 0),
      (Ze = Uo = null),
      Er !== null)
    ) {
      for (t = 0; t < Er.length; t++)
        if (((n = Er[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            o = n.pending;
          if (o !== null) {
            var a = o.next;
            (o.next = i), (r.next = a);
          }
          n.pending = r;
        }
      Er = null;
    }
    return e;
  }
  function N0(e, t) {
    do {
      var n = Ce;
      try {
        if ((Td(), (Ss.current = il), rl)) {
          for (var r = we.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          rl = !1;
        }
        if (
          ((Ar = 0),
          (Me = ke = we = null),
          (Vo = !1),
          (fa = 0),
          (Hd.current = null),
          n === null || n.return === null)
        ) {
          (Oe = 1), (ha = t), (Ce = null);
          break;
        }
        e: {
          var o = e,
            a = n.return,
            s = n,
            l = t;
          if (
            ((t = Fe),
            (s.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = s,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = Hh(a);
            if (p !== null) {
              (p.flags &= -257),
                Uh(p, a, s, o, t),
                p.mode & 1 && Vh(o, u, t),
                (t = p),
                (l = u);
              var g = t.updateQueue;
              if (g === null) {
                var y = new Set();
                y.add(l), (t.updateQueue = y);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Vh(o, u, t), Yd();
                break e;
              }
              l = Error($(426));
            }
          } else if (me && s.mode & 1) {
            var b = Hh(a);
            if (b !== null) {
              !(b.flags & 65536) && (b.flags |= 256),
                Uh(b, a, s, o, t),
                Od(Bi(l, s));
              break e;
            }
          }
          (o = l = Bi(l, s)),
            Oe !== 4 && (Oe = 2),
            Uo === null ? (Uo = [o]) : Uo.push(o),
            (o = a);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = c0(o, l, t);
                Ah(o, m);
                break e;
              case 1:
                s = l;
                var h = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Gn === null || !Gn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var x = f0(o, s, t);
                  Ah(o, x);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        T0(n);
      } catch (E) {
        (t = E), Ce === n && n !== null && (Ce = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function O0() {
    var e = ol.current;
    return (ol.current = il), e === null ? il : e;
  }
  function Yd() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      Re === null || (!(Ir & 268435455) && !(Il & 268435455)) || Bn(Re, Fe);
  }
  function ll(e, t) {
    var n = re;
    re |= 2;
    var r = O0();
    (Re !== e || Fe !== t) && ((fn = null), Nr(e, t));
    do
      try {
        OE();
        break;
      } catch (i) {
        N0(e, i);
      }
    while (1);
    if ((Td(), (re = n), (ol.current = r), Ce !== null)) throw Error($(261));
    return (Re = null), (Fe = 0), Oe;
  }
  function OE() {
    for (; Ce !== null; ) P0(Ce);
  }
  function PE() {
    for (; Ce !== null && !eS(); ) P0(Ce);
  }
  function P0(e) {
    var t = D0(e.alternate, e, ft);
    (e.memoizedProps = e.pendingProps),
      t === null ? T0(e) : (Ce = t),
      (Hd.current = null);
  }
  function T0(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = SE(n, t)), n !== null)) {
          (n.flags &= 32767), (Ce = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (Ce = null);
          return;
        }
      } else if (((n = bE(n, t, ft)), n !== null)) {
        Ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function gr(e, t, n) {
    var r = ae,
      i = Ct.transition;
    try {
      (Ct.transition = null), (ae = 1), TE(e, t, n, r);
    } finally {
      (Ct.transition = i), (ae = r);
    }
    return null;
  }
  function TE(e, t, n, r) {
    do _i();
    while (Vn !== null);
    if (re & 6) throw Error($(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error($(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (cS(e, o),
      e === Re && ((Ce = Re = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        ns ||
        ((ns = !0),
        R0(Hs, function () {
          return _i(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = Ct.transition), (Ct.transition = null);
      var a = ae;
      ae = 1;
      var s = re;
      (re |= 4),
        (Hd.current = null),
        _E(e, n),
        _0(n, e),
        XS(Ic),
        (Qs = !!Ac),
        (Ic = Ac = null),
        (e.current = n),
        CE(n),
        tS(),
        (re = s),
        (ae = a),
        (Ct.transition = o);
    } else e.current = n;
    if (
      (ns && ((ns = !1), (Vn = e), (sl = i)),
      (o = e.pendingLanes),
      o === 0 && (Gn = null),
      iS(n.stateNode),
      it(e, _e()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (al) throw ((al = !1), (e = nf), (nf = null), e);
    return (
      sl & 1 && e.tag !== 0 && _i(),
      (o = e.pendingLanes),
      o & 1 ? (e === rf ? Qo++ : ((Qo = 0), (rf = e))) : (Qo = 0),
      ur(),
      null
    );
  }
  function _i() {
    if (Vn !== null) {
      var e = ug(sl),
        t = Ct.transition,
        n = ae;
      try {
        if (((Ct.transition = null), (ae = 16 > e ? 16 : e), Vn === null))
          var r = !1;
        else {
          if (((e = Vn), (Vn = null), (sl = 0), re & 6)) throw Error($(331));
          var i = re;
          for (re |= 4, Q = e.current; Q !== null; ) {
            var o = Q,
              a = o.child;
            if (Q.flags & 16) {
              var s = o.deletions;
              if (s !== null) {
                for (var l = 0; l < s.length; l++) {
                  var u = s[l];
                  for (Q = u; Q !== null; ) {
                    var c = Q;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ho(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (Q = f);
                    else
                      for (; Q !== null; ) {
                        c = Q;
                        var d = c.sibling,
                          p = c.return;
                        if ((b0(c), c === u)) {
                          Q = null;
                          break;
                        }
                        if (d !== null) {
                          (d.return = p), (Q = d);
                          break;
                        }
                        Q = p;
                      }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var y = g.child;
                  if (y !== null) {
                    g.child = null;
                    do {
                      var b = y.sibling;
                      (y.sibling = null), (y = b);
                    } while (y !== null);
                  }
                }
                Q = o;
              }
            }
            if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (Q = a);
            else
              e: for (; Q !== null; ) {
                if (((o = Q), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(9, o, o.return);
                  }
                var m = o.sibling;
                if (m !== null) {
                  (m.return = o.return), (Q = m);
                  break e;
                }
                Q = o.return;
              }
          }
          var h = e.current;
          for (Q = h; Q !== null; ) {
            a = Q;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (Q = v);
            else
              e: for (a = h; Q !== null; ) {
                if (((s = Q), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Al(9, s);
                    }
                  } catch (E) {
                    Se(s, s.return, E);
                  }
                if (s === a) {
                  Q = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  (x.return = s.return), (Q = x);
                  break e;
                }
                Q = s.return;
              }
          }
          if (
            ((re = i),
            ur(),
            Jt && typeof Jt.onPostCommitFiberRoot == "function")
          )
            try {
              Jt.onPostCommitFiberRoot(Nl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ae = n), (Ct.transition = t);
      }
    }
    return !1;
  }
  function rm(e, t, n) {
    (t = Bi(n, t)),
      (t = c0(e, t, 1)),
      (e = Yn(e, t, 1)),
      (t = We()),
      e !== null && (Pa(e, 1, t), it(e, t));
  }
  function Se(e, t, n) {
    if (e.tag === 3) rm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(r)))
          ) {
            (e = Bi(n, e)),
              (e = f0(t, e, 1)),
              (t = Yn(t, e, 1)),
              (e = We()),
              t !== null && (Pa(t, 1, e), it(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function ME(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = We()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (Fe & n) === n &&
        (Oe === 4 || (Oe === 3 && (Fe & 130023424) === Fe && 500 > _e() - Qd)
          ? Nr(e, 0)
          : (Ud |= n)),
      it(e, t);
  }
  function M0(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = qa), (qa <<= 1), !(qa & 130023424) && (qa = 4194304))
        : (t = 1));
    var n = We();
    (e = wn(e, t)), e !== null && (Pa(e, t, n), it(e, n));
  }
  function DE(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), M0(e, n);
  }
  function RE(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error($(314));
    }
    r !== null && r.delete(t), M0(e, n);
  }
  var D0;
  D0 = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), xE(e, t, n);
        et = !!(e.flags & 131072);
      }
    else (et = !1), me && t.flags & 1048576 && Ag(t, Zs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        _s(e, t), (e = t.pendingProps);
        var i = Ai(t, Ue.current);
        Ei(t, n), (i = Ld(null, t, r, e, i, n));
        var o = Bd();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              rt(r) ? ((o = !0), Xs(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Rd(t),
              (i.updater = Rl),
              (t.stateNode = i),
              (i._reactInternals = t),
              Qc(t, r, e, n),
              (t = Yc(null, t, r, !0, o, n)))
            : ((t.tag = 0), me && o && kd(t), qe(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (_s(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = AE(r)),
            (e = jt(r, e)),
            i)
          ) {
            case 0:
              t = Wc(null, t, r, e, n);
              break e;
            case 1:
              t = Wh(null, t, r, e, n);
              break e;
            case 11:
              t = Qh(null, t, r, e, n);
              break e;
            case 14:
              t = qh(null, t, r, jt(r.type, e), n);
              break e;
          }
          throw Error($(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : jt(r, i)),
          Wc(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : jt(r, i)),
          Wh(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((m0(t), e === null)) throw Error($(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            Bg(e, t),
            tl(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = Bi(Error($(423)), t)), (t = Yh(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Bi(Error($(424)), t)), (t = Yh(e, t, r, n, i));
              break e;
            } else
              for (
                dt = Wn(t.stateNode.containerInfo.firstChild),
                  pt = t,
                  me = !0,
                  It = null,
                  n = Hg(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Ii(), r === i)) {
              t = xn(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ug(t),
          e === null && Vc(t),
          (r = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Fc(r, i) ? (a = null) : o !== null && Fc(r, o) && (t.flags |= 32),
          h0(e, t),
          qe(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && Vc(t), null;
      case 13:
        return v0(e, t, n);
      case 4:
        return (
          jd(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fi(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : jt(r, i)),
          Qh(e, t, r, i, n)
        );
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (a = i.value),
            ue(Js, r._currentValue),
            (r._currentValue = a),
            o !== null)
          )
            if (Vt(o.value, a)) {
              if (o.children === i.children && !nt.current) {
                t = xn(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var s = o.dependencies;
                if (s !== null) {
                  a = o.child;
                  for (var l = s.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (o.tag === 1) {
                        (l = vn(-1, n & -n)), (l.tag = 2);
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (u.pending = l);
                        }
                      }
                      (o.lanes |= n),
                        (l = o.alternate),
                        l !== null && (l.lanes |= n),
                        Hc(o.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((a = o.return), a === null)) throw Error($(341));
                  (a.lanes |= n),
                    (s = a.alternate),
                    s !== null && (s.lanes |= n),
                    Hc(a, n, t),
                    (a = o.sibling);
                } else a = o.child;
                if (a !== null) a.return = o;
                else
                  for (a = o; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((o = a.sibling), o !== null)) {
                      (o.return = a.return), (a = o);
                      break;
                    }
                    a = a.return;
                  }
                o = a;
              }
          qe(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Ei(t, n),
          (i = kt(i)),
          (r = r(i)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = jt(r, t.pendingProps)),
          (i = jt(r.type, i)),
          qh(e, t, r, i, n)
        );
      case 15:
        return d0(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : jt(r, i)),
          _s(e, t),
          (t.tag = 1),
          rt(r) ? ((e = !0), Xs(t)) : (e = !1),
          Ei(t, n),
          $g(t, r, i),
          Qc(t, r, i, n),
          Yc(null, t, r, !0, e, n)
        );
      case 19:
        return y0(e, t, n);
      case 22:
        return p0(e, t, n);
    }
    throw Error($(156, t.tag));
  };
  function R0(e, t) {
    return og(e, t);
  }
  function jE(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Et(e, t, n, r) {
    return new jE(e, t, n, r);
  }
  function Gd(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function AE(e) {
    if (typeof e == "function") return Gd(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === hd)) return 11;
      if (e === md) return 14;
    }
    return 2;
  }
  function Kn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ns(e, t, n, r, i, o) {
    var a = 2;
    if (((r = e), typeof e == "function")) Gd(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case ii:
          return Or(n.children, i, o, t);
        case pd:
          (a = 8), (i |= 8);
          break;
        case mc:
          return (
            (e = Et(12, n, t, i | 2)), (e.elementType = mc), (e.lanes = o), e
          );
        case vc:
          return (e = Et(13, n, t, i)), (e.elementType = vc), (e.lanes = o), e;
        case yc:
          return (e = Et(19, n, t, i)), (e.elementType = yc), (e.lanes = o), e;
        case Vy:
          return Fl(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case zy:
                a = 10;
                break e;
              case $y:
                a = 9;
                break e;
              case hd:
                a = 11;
                break e;
              case md:
                a = 14;
                break e;
              case Tn:
                (a = 16), (r = null);
                break e;
            }
          throw Error($(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Et(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Or(e, t, n, r) {
    return (e = Et(7, e, r, t)), (e.lanes = n), e;
  }
  function Fl(e, t, n, r) {
    return (
      (e = Et(22, e, r, t)),
      (e.elementType = Vy),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function zu(e, t, n) {
    return (e = Et(6, e, null, t)), (e.lanes = n), e;
  }
  function $u(e, t, n) {
    return (
      (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function IE(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = bu(0)),
      (this.expirationTimes = bu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Xd(e, t, n, r, i, o, a, s, l) {
    return (
      (e = new IE(e, t, n, s, l)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = Et(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rd(o),
      e
    );
  }
  function FE(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ri,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function j0(e) {
    if (!e) return tr;
    e = e._reactInternals;
    e: {
      if (Ur(e) !== e || e.tag !== 1) throw Error($(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (rt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error($(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (rt(n)) return Rg(e, n, t);
    }
    return t;
  }
  function A0(e, t, n, r, i, o, a, s, l) {
    return (
      (e = Xd(n, r, !0, e, i, o, a, s, l)),
      (e.context = j0(null)),
      (n = e.current),
      (r = We()),
      (i = Xn(n)),
      (o = vn(r, i)),
      (o.callback = t ?? null),
      Yn(n, o, i),
      (e.current.lanes = i),
      Pa(e, i, r),
      it(e, r),
      e
    );
  }
  function Ll(e, t, n, r) {
    var i = t.current,
      o = We(),
      a = Xn(i);
    return (
      (n = j0(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = vn(o, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Yn(i, t, a)),
      e !== null && (zt(e, i, a, o), bs(e, i, a)),
      a
    );
  }
  function ul(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function im(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Kd(e, t) {
    im(e, t), (e = e.alternate) && im(e, t);
  }
  function LE() {
    return null;
  }
  var I0 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Zd(e) {
    this._internalRoot = e;
  }
  Bl.prototype.render = Zd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error($(409));
    Ll(e, t, null, null);
  };
  Bl.prototype.unmount = Zd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fr(function () {
        Ll(null, e, null, null);
      }),
        (t[gn] = null);
    }
  };
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = dg();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
      Ln.splice(n, 0, e), n === 0 && hg(e);
    }
  };
  function Jd(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function om() {}
  function BE(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var u = ul(a);
          o.call(u);
        };
      }
      var a = A0(t, r, e, 0, null, !1, !1, "", om);
      return (
        (e._reactRootContainer = a),
        (e[gn] = a.current),
        aa(e.nodeType === 8 ? e.parentNode : e),
        Fr(),
        a
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ul(l);
        s.call(u);
      };
    }
    var l = Xd(e, 0, !1, null, null, !1, !1, "", om);
    return (
      (e._reactRootContainer = l),
      (e[gn] = l.current),
      aa(e.nodeType === 8 ? e.parentNode : e),
      Fr(function () {
        Ll(t, l, n, r);
      }),
      l
    );
  }
  function $l(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof i == "function") {
        var s = i;
        i = function () {
          var l = ul(a);
          s.call(l);
        };
      }
      Ll(t, a, e, i);
    } else a = BE(n, t, e, i, r);
    return ul(a);
  }
  cg = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Mo(t.pendingLanes);
          n !== 0 &&
            (gd(t, n | 1), it(t, _e()), !(re & 6) && ((zi = _e() + 500), ur()));
        }
        break;
      case 13:
        Fr(function () {
          var r = wn(e, 1);
          if (r !== null) {
            var i = We();
            zt(r, e, 1, i);
          }
        }),
          Kd(e, 1);
    }
  };
  wd = function (e) {
    if (e.tag === 13) {
      var t = wn(e, 134217728);
      if (t !== null) {
        var n = We();
        zt(t, e, 134217728, n);
      }
      Kd(e, 134217728);
    }
  };
  fg = function (e) {
    if (e.tag === 13) {
      var t = Xn(e),
        n = wn(e, t);
      if (n !== null) {
        var r = We();
        zt(n, e, t, r);
      }
      Kd(e, t);
    }
  };
  dg = function () {
    return ae;
  };
  pg = function (e, t) {
    var n = ae;
    try {
      return (ae = e), t();
    } finally {
      ae = n;
    }
  };
  Nc = function (e, t, n) {
    switch (t) {
      case "input":
        if ((xc(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ml(r);
              if (!i) throw Error($(90));
              Uy(r), xc(r, i);
            }
          }
        }
        break;
      case "textarea":
        qy(e, n);
        break;
      case "select":
        (t = n.value), t != null && wi(e, !!n.multiple, t, !1);
    }
  };
  Jy = qd;
  eg = Fr;
  var zE = { usingClientEntryPoint: !1, Events: [Ma, li, Ml, Ky, Zy, qd] },
    go = {
      findFiberByHostInstance: Sr,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    $E = {
      bundleType: go.bundleType,
      version: go.version,
      rendererPackageName: go.rendererPackageName,
      rendererConfig: go.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: _n.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = rg(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: go.findFiberByHostInstance || LE,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rs.isDisabled && rs.supportsFiber)
      try {
        (Nl = rs.inject($E)), (Jt = rs);
      } catch {}
  }
  yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zE;
  yt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jd(t)) throw Error($(200));
    return FE(e, t, null, n);
  };
  yt.createRoot = function (e, t) {
    if (!Jd(e)) throw Error($(299));
    var n = !1,
      r = "",
      i = I0;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Xd(e, 1, !1, null, null, n, !1, r, i)),
      (e[gn] = t.current),
      aa(e.nodeType === 8 ? e.parentNode : e),
      new Zd(t)
    );
  };
  yt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error($(188))
        : ((e = Object.keys(e).join(",")), Error($(268, e)));
    return (e = rg(t)), (e = e === null ? null : e.stateNode), e;
  };
  yt.flushSync = function (e) {
    return Fr(e);
  };
  yt.hydrate = function (e, t, n) {
    if (!zl(t)) throw Error($(200));
    return $l(null, e, t, !0, n);
  };
  yt.hydrateRoot = function (e, t, n) {
    if (!Jd(e)) throw Error($(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      o = "",
      a = I0;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
      (t = A0(t, null, e, 1, n ?? null, i, !1, o, a)),
      (e[gn] = t.current),
      aa(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new Bl(t);
  };
  yt.render = function (e, t, n) {
    if (!zl(t)) throw Error($(200));
    return $l(null, e, t, !1, n);
  };
  yt.unmountComponentAtNode = function (e) {
    if (!zl(e)) throw Error($(40));
    return e._reactRootContainer
      ? (Fr(function () {
          $l(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[gn] = null);
          });
        }),
        !0)
      : !1;
  };
  yt.unstable_batchedUpdates = qd;
  yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!zl(n)) throw Error($(200));
    if (e == null || e._reactInternals === void 0) throw Error($(38));
    return $l(e, t, n, !1, r);
  };
  yt.version = "18.2.0-next-9e3b772b8-20220608";
  function F0() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0);
      } catch (e) {
        console.error(e);
      }
  }
  F0(), (Ay.exports = yt);
  var L0 = Ay.exports;
  const mi = Na(L0);
  var B0,
    am = L0;
  (B0 = am.createRoot), am.hydrateRoot;
  /**
   * @remix-run/router v1.7.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function cl() {
    return (
      (cl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      cl.apply(this, arguments)
    );
  }
  var Hn;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(Hn || (Hn = {}));
  const sm = "popstate";
  function VE(e) {
    e === void 0 && (e = {});
    function t(r, i) {
      let { pathname: o, search: a, hash: s } = r.location;
      return sf(
        "",
        { pathname: o, search: a, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      );
    }
    function n(r, i) {
      return typeof i == "string" ? i : z0(i);
    }
    return UE(t, n, null, e);
  }
  function st(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function ep(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function HE() {
    return Math.random().toString(36).substr(2, 8);
  }
  function lm(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function sf(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      cl(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Vl(t) : t,
        { state: n, key: (t && t.key) || r || HE() }
      )
    );
  }
  function z0(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function Vl(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function UE(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r,
      a = i.history,
      s = Hn.Pop,
      l = null,
      u = c();
    u == null && ((u = 0), a.replaceState(cl({}, a.state, { idx: u }), ""));
    function c() {
      return (a.state || { idx: null }).idx;
    }
    function f() {
      s = Hn.Pop;
      let b = c(),
        m = b == null ? null : b - u;
      (u = b), l && l({ action: s, location: y.location, delta: m });
    }
    function d(b, m) {
      s = Hn.Push;
      let h = sf(y.location, b, m);
      n && n(h, b), (u = c() + 1);
      let v = lm(h, u),
        x = y.createHref(h);
      try {
        a.pushState(v, "", x);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        i.location.assign(x);
      }
      o && l && l({ action: s, location: y.location, delta: 1 });
    }
    function p(b, m) {
      s = Hn.Replace;
      let h = sf(y.location, b, m);
      n && n(h, b), (u = c());
      let v = lm(h, u),
        x = y.createHref(h);
      a.replaceState(v, "", x),
        o && l && l({ action: s, location: y.location, delta: 0 });
    }
    function g(b) {
      let m =
          i.location.origin !== "null" ? i.location.origin : i.location.href,
        h = typeof b == "string" ? b : z0(b);
      return (
        st(
          m,
          "No window.location.(origin|href) available to create URL for href: " +
            h
        ),
        new URL(h, m)
      );
    }
    let y = {
      get action() {
        return s;
      },
      get location() {
        return e(i, a);
      },
      listen(b) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          i.addEventListener(sm, f),
          (l = b),
          () => {
            i.removeEventListener(sm, f), (l = null);
          }
        );
      },
      createHref(b) {
        return t(i, b);
      },
      createURL: g,
      encodeLocation(b) {
        let m = g(b);
        return { pathname: m.pathname, search: m.search, hash: m.hash };
      },
      push: d,
      replace: p,
      go(b) {
        return a.go(b);
      },
    };
    return y;
  }
  var um;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(um || (um = {}));
  function QE(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Vl(t) : t,
      i = H0(r.pathname || "/", n);
    if (i == null) return null;
    let o = $0(e);
    qE(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) a = t_(o[s], i_(i));
    return a;
  }
  function $0(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let i = (o, a, s) => {
      let l = {
        relativePath: s === void 0 ? o.path || "" : s,
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: a,
        route: o,
      };
      l.relativePath.startsWith("/") &&
        (st(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let u = Ci([r, l.relativePath]),
        c = n.concat(l);
      o.children &&
        o.children.length > 0 &&
        (st(
          o.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        $0(o.children, t, c, u)),
        !(o.path == null && !o.index) &&
          t.push({ path: u, score: JE(u, o.index), routesMeta: c });
    };
    return (
      e.forEach((o, a) => {
        var s;
        if (o.path === "" || !((s = o.path) != null && s.includes("?")))
          i(o, a);
        else for (let l of V0(o.path)) i(o, a, l);
      }),
      t
    );
  }
  function V0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let a = V0(r.join("/")),
      s = [];
    return (
      s.push(...a.map((l) => (l === "" ? o : [o, l].join("/")))),
      i && s.push(...a),
      s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function qE(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : e_(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
          )
    );
  }
  const WE = /^:\w+$/,
    YE = 3,
    GE = 2,
    XE = 1,
    KE = 10,
    ZE = -2,
    cm = (e) => e === "*";
  function JE(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(cm) && (r += ZE),
      t && (r += GE),
      n
        .filter((i) => !cm(i))
        .reduce((i, o) => i + (WE.test(o) ? YE : o === "" ? XE : KE), r)
    );
  }
  function e_(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function t_(e, t) {
    let { routesMeta: n } = e,
      r = {},
      i = "/",
      o = [];
    for (let a = 0; a < n.length; ++a) {
      let s = n[a],
        l = a === n.length - 1,
        u = i === "/" ? t : t.slice(i.length) || "/",
        c = n_(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
          u
        );
      if (!c) return null;
      Object.assign(r, c.params);
      let f = s.route;
      o.push({
        params: r,
        pathname: Ci([i, c.pathname]),
        pathnameBase: a_(Ci([i, c.pathnameBase])),
        route: f,
      }),
        c.pathnameBase !== "/" && (i = Ci([i, c.pathnameBase]));
    }
    return o;
  }
  function n_(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = r_(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let o = i[0],
      a = o.replace(/(.)\/+$/, "$1"),
      s = i.slice(1);
    return {
      params: r.reduce((u, c, f) => {
        if (c === "*") {
          let d = s[f] || "";
          a = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
        }
        return (u[c] = o_(s[f] || "", c)), u;
      }, {}),
      pathname: o,
      pathnameBase: a,
      pattern: e,
    };
  }
  function r_(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      ep(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
      );
    let r = [],
      i =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
          .replace(/\/:(\w+)/g, (a, s) => (r.push(s), "/([^\\/]+)"));
    return (
      e.endsWith("*")
        ? (r.push("*"),
          (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
      [new RegExp(i, t ? void 0 : "i"), r]
    );
  }
  function i_(e) {
    try {
      return decodeURI(e);
    } catch (t) {
      return (
        ep(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ").")
        ),
        e
      );
    }
  }
  function o_(e, t) {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      return (
        ep(
          !1,
          'The value for the URL param "' +
            t +
            '" will not be decoded because' +
            (' the string "' +
              e +
              '" is a malformed URL segment. This is probably') +
            (" due to a bad percent encoding (" + n + ").")
        ),
        e
      );
    }
  }
  function H0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  const Ci = (e) => e.join("/").replace(/\/\/+/g, "/"),
    a_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  function s_(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const U0 = ["post", "put", "patch", "delete"];
  new Set(U0);
  const l_ = ["get", ...U0];
  new Set(l_);
  /**
   * React Router v6.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function lf() {
    return (
      (lf = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      lf.apply(this, arguments)
    );
  }
  const u_ = S.createContext(null),
    c_ = S.createContext(null),
    Q0 = S.createContext(null),
    Hl = S.createContext(null),
    Ul = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    q0 = S.createContext(null);
  function tp() {
    return S.useContext(Hl) != null;
  }
  function f_() {
    return tp() || st(!1), S.useContext(Hl).location;
  }
  function d_(e, t) {
    return p_(e, t);
  }
  function p_(e, t, n) {
    tp() || st(!1);
    let { navigator: r } = S.useContext(Q0),
      { matches: i } = S.useContext(Ul),
      o = i[i.length - 1],
      a = o ? o.params : {};
    o && o.pathname;
    let s = o ? o.pathnameBase : "/";
    o && o.route;
    let l = f_(),
      u;
    if (t) {
      var c;
      let y = typeof t == "string" ? Vl(t) : t;
      s === "/" || ((c = y.pathname) != null && c.startsWith(s)) || st(!1),
        (u = y);
    } else u = l;
    let f = u.pathname || "/",
      d = s === "/" ? f : f.slice(s.length) || "/",
      p = QE(e, { pathname: d }),
      g = g_(
        p &&
          p.map((y) =>
            Object.assign({}, y, {
              params: Object.assign({}, a, y.params),
              pathname: Ci([
                s,
                r.encodeLocation
                  ? r.encodeLocation(y.pathname).pathname
                  : y.pathname,
              ]),
              pathnameBase:
                y.pathnameBase === "/"
                  ? s
                  : Ci([
                      s,
                      r.encodeLocation
                        ? r.encodeLocation(y.pathnameBase).pathname
                        : y.pathnameBase,
                    ]),
            })
          ),
        i,
        n
      );
    return t && g
      ? S.createElement(
          Hl.Provider,
          {
            value: {
              location: lf(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u
              ),
              navigationType: Hn.Pop,
            },
          },
          g
        )
      : g;
  }
  function h_() {
    let e = S_(),
      t = s_(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      o = null;
    return S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? S.createElement("pre", { style: i }, n) : null,
      o
    );
  }
  const m_ = S.createElement(h_, null);
  class v_ extends S.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n
      );
    }
    render() {
      return this.state.error
        ? S.createElement(
            Ul.Provider,
            { value: this.props.routeContext },
            S.createElement(q0.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function y_(e) {
    let { routeContext: t, match: n, children: r } = e,
      i = S.useContext(u_);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      S.createElement(Ul.Provider, { value: t }, r)
    );
  }
  function g_(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
      var i;
      if ((i = n) != null && i.errors) e = n.matches;
      else return null;
    }
    let o = e,
      a = (r = n) == null ? void 0 : r.errors;
    if (a != null) {
      let s = o.findIndex(
        (l) => l.route.id && (a == null ? void 0 : a[l.route.id])
      );
      s >= 0 || st(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
    }
    return o.reduceRight((s, l, u) => {
      let c = l.route.id ? (a == null ? void 0 : a[l.route.id]) : null,
        f = null;
      n && (f = l.route.errorElement || m_);
      let d = t.concat(o.slice(0, u + 1)),
        p = () => {
          let g;
          return (
            c
              ? (g = f)
              : l.route.Component
              ? (g = S.createElement(l.route.Component, null))
              : l.route.element
              ? (g = l.route.element)
              : (g = s),
            S.createElement(y_, {
              match: l,
              routeContext: { outlet: s, matches: d, isDataRoute: n != null },
              children: g,
            })
          );
        };
      return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
        ? S.createElement(v_, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: p(),
            routeContext: { outlet: null, matches: d, isDataRoute: !0 },
          })
        : p();
    }, null);
  }
  var fm;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate");
  })(fm || (fm = {}));
  var fl;
  (function (e) {
    (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId");
  })(fl || (fl = {}));
  function w_(e) {
    let t = S.useContext(c_);
    return t || st(!1), t;
  }
  function x_(e) {
    let t = S.useContext(Ul);
    return t || st(!1), t;
  }
  function b_(e) {
    let t = x_(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || st(!1), n.route.id;
  }
  function S_() {
    var e;
    let t = S.useContext(q0),
      n = w_(fl.UseRouteError),
      r = b_(fl.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
  }
  function uf(e) {
    st(!1);
  }
  function E_(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = Hn.Pop,
      navigator: o,
      static: a = !1,
    } = e;
    tp() && st(!1);
    let s = t.replace(/^\/*/, "/"),
      l = S.useMemo(
        () => ({ basename: s, navigator: o, static: a }),
        [s, o, a]
      );
    typeof r == "string" && (r = Vl(r));
    let {
        pathname: u = "/",
        search: c = "",
        hash: f = "",
        state: d = null,
        key: p = "default",
      } = r,
      g = S.useMemo(() => {
        let y = H0(u, s);
        return y == null
          ? null
          : {
              location: { pathname: y, search: c, hash: f, state: d, key: p },
              navigationType: i,
            };
      }, [s, u, c, f, d, p, i]);
    return g == null
      ? null
      : S.createElement(
          Q0.Provider,
          { value: l },
          S.createElement(Hl.Provider, { children: n, value: g })
        );
  }
  function __(e) {
    let { children: t, location: n } = e;
    return d_(cf(t), n);
  }
  var dm;
  (function (e) {
    (e[(e.pending = 0)] = "pending"),
      (e[(e.success = 1)] = "success"),
      (e[(e.error = 2)] = "error");
  })(dm || (dm = {}));
  new Promise(() => {});
  function cf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      S.Children.forEach(e, (r, i) => {
        if (!S.isValidElement(r)) return;
        let o = [...t, i];
        if (r.type === S.Fragment) {
          n.push.apply(n, cf(r.props.children, o));
          return;
        }
        r.type !== uf && st(!1), !r.props.index || !r.props.children || st(!1);
        let a = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (a.children = cf(r.props.children, o)), n.push(a);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ const C_ = "startTransition",
    pm = Db[C_];
  function k_(e) {
    let { basename: t, children: n, future: r, window: i } = e,
      o = S.useRef();
    o.current == null && (o.current = VE({ window: i, v5Compat: !0 }));
    let a = o.current,
      [s, l] = S.useState({ action: a.action, location: a.location }),
      { v7_startTransition: u } = r || {},
      c = S.useCallback(
        (f) => {
          u && pm ? pm(() => l(f)) : l(f);
        },
        [l, u]
      );
    return (
      S.useLayoutEffect(() => a.listen(c), [a, c]),
      S.createElement(E_, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: a,
      })
    );
  }
  var hm;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
  })(hm || (hm = {}));
  var mm;
  (function (e) {
    (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(mm || (mm = {}));
  const W0 = (e) => {
    document.title = e;
  };
  function Xe(e) {
    if (typeof e == "string" || typeof e == "number") return "" + e;
    let t = "";
    if (Array.isArray(e))
      for (let n = 0, r; n < e.length; n++)
        (r = Xe(e[n])) !== "" && (t += (t && " ") + r);
    else for (let n in e) e[n] && (t += (t && " ") + n);
    return t;
  }
  const vm = (e) => {
      let t;
      const n = new Set(),
        r = (l, u) => {
          const c = typeof l == "function" ? l(t) : l;
          if (!Object.is(c, t)) {
            const f = t;
            (t = u ?? typeof c != "object" ? c : Object.assign({}, t, c)),
              n.forEach((d) => d(t, f));
          }
        },
        i = () => t,
        s = {
          setState: r,
          getState: i,
          subscribe: (l) => (n.add(l), () => n.delete(l)),
          destroy: () => {
            (({
              BASE_URL: "/webapp",
              MODE: "production",
              DEV: !1,
              PROD: !0,
              SSR: !1,
            }) && "production") !== "production" &&
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
              ),
              n.clear();
          },
        };
      return (t = e(r, i, s)), s;
    },
    N_ = (e) => (e ? vm(e) : vm);
  var Y0 = { exports: {} },
    G0 = {},
    X0 = { exports: {} },
    K0 = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var $i = S;
  function O_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var P_ = typeof Object.is == "function" ? Object.is : O_,
    T_ = $i.useState,
    M_ = $i.useEffect,
    D_ = $i.useLayoutEffect,
    R_ = $i.useDebugValue;
  function j_(e, t) {
    var n = t(),
      r = T_({ inst: { value: n, getSnapshot: t } }),
      i = r[0].inst,
      o = r[1];
    return (
      D_(
        function () {
          (i.value = n), (i.getSnapshot = t), Vu(i) && o({ inst: i });
        },
        [e, n, t]
      ),
      M_(
        function () {
          return (
            Vu(i) && o({ inst: i }),
            e(function () {
              Vu(i) && o({ inst: i });
            })
          );
        },
        [e]
      ),
      R_(n),
      n
    );
  }
  function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !P_(e, n);
    } catch {
      return !0;
    }
  }
  function A_(e, t) {
    return t();
  }
  var I_ =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? A_
      : j_;
  K0.useSyncExternalStore =
    $i.useSyncExternalStore !== void 0 ? $i.useSyncExternalStore : I_;
  X0.exports = K0;
  var F_ = X0.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ql = S,
    L_ = F_;
  function B_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var z_ = typeof Object.is == "function" ? Object.is : B_,
    $_ = L_.useSyncExternalStore,
    V_ = Ql.useRef,
    H_ = Ql.useEffect,
    U_ = Ql.useMemo,
    Q_ = Ql.useDebugValue;
  G0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var o = V_(null);
    if (o.current === null) {
      var a = { hasValue: !1, value: null };
      o.current = a;
    } else a = o.current;
    o = U_(
      function () {
        function l(p) {
          if (!u) {
            if (((u = !0), (c = p), (p = r(p)), i !== void 0 && a.hasValue)) {
              var g = a.value;
              if (i(g, p)) return (f = g);
            }
            return (f = p);
          }
          if (((g = f), z_(c, p))) return g;
          var y = r(p);
          return i !== void 0 && i(g, y) ? g : ((c = p), (f = y));
        }
        var u = !1,
          c,
          f,
          d = n === void 0 ? null : n;
        return [
          function () {
            return l(t());
          },
          d === null
            ? void 0
            : function () {
                return l(d());
              },
        ];
      },
      [t, n, r, i]
    );
    var s = $_(e, o[0], o[1]);
    return (
      H_(
        function () {
          (a.hasValue = !0), (a.value = s);
        },
        [s]
      ),
      Q_(s),
      s
    );
  };
  Y0.exports = G0;
  var q_ = Y0.exports;
  const W_ = Na(q_),
    { useSyncExternalStoreWithSelector: Y_ } = W_;
  function G_(e, t = e.getState, n) {
    const r = Y_(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
    return S.useDebugValue(r), r;
  }
  function Qe(e, t) {
    if (Object.is(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (const [r, i] of e) if (!Object.is(i, t.get(r))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (const r of e) if (!t.has(r)) return !1;
      return !0;
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; r++)
      if (
        !Object.prototype.hasOwnProperty.call(t, n[r]) ||
        !Object.is(e[n[r]], t[n[r]])
      )
        return !1;
    return !0;
  }
  var X_ = { value: () => {} };
  function ql() {
    for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
      if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
        throw new Error("illegal type: " + r);
      n[r] = [];
    }
    return new Os(n);
  }
  function Os(e) {
    this._ = e;
  }
  function K_(e, t) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (n) {
        var r = "",
          i = n.indexOf(".");
        if (
          (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
          n && !t.hasOwnProperty(n))
        )
          throw new Error("unknown type: " + n);
        return { type: n, name: r };
      });
  }
  Os.prototype = ql.prototype = {
    constructor: Os,
    on: function (e, t) {
      var n = this._,
        r = K_(e + "", n),
        i,
        o = -1,
        a = r.length;
      if (arguments.length < 2) {
        for (; ++o < a; )
          if ((i = (e = r[o]).type) && (i = Z_(n[i], e.name))) return i;
        return;
      }
      if (t != null && typeof t != "function")
        throw new Error("invalid callback: " + t);
      for (; ++o < a; )
        if ((i = (e = r[o]).type)) n[i] = ym(n[i], e.name, t);
        else if (t == null) for (i in n) n[i] = ym(n[i], e.name, null);
      return this;
    },
    copy: function () {
      var e = {},
        t = this._;
      for (var n in t) e[n] = t[n].slice();
      return new Os(e);
    },
    call: function (e, t) {
      if ((i = arguments.length - 2) > 0)
        for (var n = new Array(i), r = 0, i, o; r < i; ++r)
          n[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (o = this._[e], r = 0, i = o.length; r < i; ++r)
        o[r].value.apply(t, n);
    },
    apply: function (e, t, n) {
      if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
      for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(t, n);
    },
  };
  function Z_(e, t) {
    for (var n = 0, r = e.length, i; n < r; ++n)
      if ((i = e[n]).name === t) return i.value;
  }
  function ym(e, t, n) {
    for (var r = 0, i = e.length; r < i; ++r)
      if (e[r].name === t) {
        (e[r] = X_), (e = e.slice(0, r).concat(e.slice(r + 1)));
        break;
      }
    return n != null && e.push({ name: t, value: n }), e;
  }
  var ff = "http://www.w3.org/1999/xhtml";
  const gm = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: ff,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };
  function Wl(e) {
    var t = (e += ""),
      n = t.indexOf(":");
    return (
      n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
      gm.hasOwnProperty(t) ? { space: gm[t], local: e } : e
    );
  }
  function J_(e) {
    return function () {
      var t = this.ownerDocument,
        n = this.namespaceURI;
      return n === ff && t.documentElement.namespaceURI === ff
        ? t.createElement(e)
        : t.createElementNS(n, e);
    };
  }
  function eC(e) {
    return function () {
      return this.ownerDocument.createElementNS(e.space, e.local);
    };
  }
  function Z0(e) {
    var t = Wl(e);
    return (t.local ? eC : J_)(t);
  }
  function tC() {}
  function np(e) {
    return e == null
      ? tC
      : function () {
          return this.querySelector(e);
        };
  }
  function nC(e) {
    typeof e != "function" && (e = np(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (
        var o = t[i], a = o.length, s = (r[i] = new Array(a)), l, u, c = 0;
        c < a;
        ++c
      )
        (l = o[c]) &&
          (u = e.call(l, l.__data__, c, o)) &&
          ("__data__" in l && (u.__data__ = l.__data__), (s[c] = u));
    return new mt(r, this._parents);
  }
  function rC(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
  }
  function iC() {
    return [];
  }
  function J0(e) {
    return e == null
      ? iC
      : function () {
          return this.querySelectorAll(e);
        };
  }
  function oC(e) {
    return function () {
      return rC(e.apply(this, arguments));
    };
  }
  function aC(e) {
    typeof e == "function" ? (e = oC(e)) : (e = J0(e));
    for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
      for (var a = t[o], s = a.length, l, u = 0; u < s; ++u)
        (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), i.push(l));
    return new mt(r, i);
  }
  function e1(e) {
    return function () {
      return this.matches(e);
    };
  }
  function t1(e) {
    return function (t) {
      return t.matches(e);
    };
  }
  var sC = Array.prototype.find;
  function lC(e) {
    return function () {
      return sC.call(this.children, e);
    };
  }
  function uC() {
    return this.firstElementChild;
  }
  function cC(e) {
    return this.select(e == null ? uC : lC(typeof e == "function" ? e : t1(e)));
  }
  var fC = Array.prototype.filter;
  function dC() {
    return Array.from(this.children);
  }
  function pC(e) {
    return function () {
      return fC.call(this.children, e);
    };
  }
  function hC(e) {
    return this.selectAll(
      e == null ? dC : pC(typeof e == "function" ? e : t1(e))
    );
  }
  function mC(e) {
    typeof e != "function" && (e = e1(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (var o = t[i], a = o.length, s = (r[i] = []), l, u = 0; u < a; ++u)
        (l = o[u]) && e.call(l, l.__data__, u, o) && s.push(l);
    return new mt(r, this._parents);
  }
  function n1(e) {
    return new Array(e.length);
  }
  function vC() {
    return new mt(this._enter || this._groups.map(n1), this._parents);
  }
  function dl(e, t) {
    (this.ownerDocument = e.ownerDocument),
      (this.namespaceURI = e.namespaceURI),
      (this._next = null),
      (this._parent = e),
      (this.__data__ = t);
  }
  dl.prototype = {
    constructor: dl,
    appendChild: function (e) {
      return this._parent.insertBefore(e, this._next);
    },
    insertBefore: function (e, t) {
      return this._parent.insertBefore(e, t);
    },
    querySelector: function (e) {
      return this._parent.querySelector(e);
    },
    querySelectorAll: function (e) {
      return this._parent.querySelectorAll(e);
    },
  };
  function yC(e) {
    return function () {
      return e;
    };
  }
  function gC(e, t, n, r, i, o) {
    for (var a = 0, s, l = t.length, u = o.length; a < u; ++a)
      (s = t[a]) ? ((s.__data__ = o[a]), (r[a] = s)) : (n[a] = new dl(e, o[a]));
    for (; a < l; ++a) (s = t[a]) && (i[a] = s);
  }
  function wC(e, t, n, r, i, o, a) {
    var s,
      l,
      u = new Map(),
      c = t.length,
      f = o.length,
      d = new Array(c),
      p;
    for (s = 0; s < c; ++s)
      (l = t[s]) &&
        ((d[s] = p = a.call(l, l.__data__, s, t) + ""),
        u.has(p) ? (i[s] = l) : u.set(p, l));
    for (s = 0; s < f; ++s)
      (p = a.call(e, o[s], s, o) + ""),
        (l = u.get(p))
          ? ((r[s] = l), (l.__data__ = o[s]), u.delete(p))
          : (n[s] = new dl(e, o[s]));
    for (s = 0; s < c; ++s) (l = t[s]) && u.get(d[s]) === l && (i[s] = l);
  }
  function xC(e) {
    return e.__data__;
  }
  function bC(e, t) {
    if (!arguments.length) return Array.from(this, xC);
    var n = t ? wC : gC,
      r = this._parents,
      i = this._groups;
    typeof e != "function" && (e = yC(e));
    for (
      var o = i.length,
        a = new Array(o),
        s = new Array(o),
        l = new Array(o),
        u = 0;
      u < o;
      ++u
    ) {
      var c = r[u],
        f = i[u],
        d = f.length,
        p = SC(e.call(c, c && c.__data__, u, r)),
        g = p.length,
        y = (s[u] = new Array(g)),
        b = (a[u] = new Array(g)),
        m = (l[u] = new Array(d));
      n(c, f, y, b, m, p, t);
      for (var h = 0, v = 0, x, E; h < g; ++h)
        if ((x = y[h])) {
          for (h >= v && (v = h + 1); !(E = b[v]) && ++v < g; );
          x._next = E || null;
        }
    }
    return (a = new mt(a, r)), (a._enter = s), (a._exit = l), a;
  }
  function SC(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e);
  }
  function EC() {
    return new mt(this._exit || this._groups.map(n1), this._parents);
  }
  function _C(e, t, n) {
    var r = this.enter(),
      i = this,
      o = this.exit();
    return (
      typeof e == "function"
        ? ((r = e(r)), r && (r = r.selection()))
        : (r = r.append(e + "")),
      t != null && ((i = t(i)), i && (i = i.selection())),
      n == null ? o.remove() : n(o),
      r && i ? r.merge(i).order() : i
    );
  }
  function CC(e) {
    for (
      var t = e.selection ? e.selection() : e,
        n = this._groups,
        r = t._groups,
        i = n.length,
        o = r.length,
        a = Math.min(i, o),
        s = new Array(i),
        l = 0;
      l < a;
      ++l
    )
      for (
        var u = n[l],
          c = r[l],
          f = u.length,
          d = (s[l] = new Array(f)),
          p,
          g = 0;
        g < f;
        ++g
      )
        (p = u[g] || c[g]) && (d[g] = p);
    for (; l < i; ++l) s[l] = n[l];
    return new mt(s, this._parents);
  }
  function kC() {
    for (var e = this._groups, t = -1, n = e.length; ++t < n; )
      for (var r = e[t], i = r.length - 1, o = r[i], a; --i >= 0; )
        (a = r[i]) &&
          (o &&
            a.compareDocumentPosition(o) ^ 4 &&
            o.parentNode.insertBefore(a, o),
          (o = a));
    return this;
  }
  function NC(e) {
    e || (e = OC);
    function t(f, d) {
      return f && d ? e(f.__data__, d.__data__) : !f - !d;
    }
    for (
      var n = this._groups, r = n.length, i = new Array(r), o = 0;
      o < r;
      ++o
    ) {
      for (
        var a = n[o], s = a.length, l = (i[o] = new Array(s)), u, c = 0;
        c < s;
        ++c
      )
        (u = a[c]) && (l[c] = u);
      l.sort(t);
    }
    return new mt(i, this._parents).order();
  }
  function OC(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
  }
  function PC() {
    var e = arguments[0];
    return (arguments[0] = this), e.apply(null, arguments), this;
  }
  function TC() {
    return Array.from(this);
  }
  function MC() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
        var a = r[i];
        if (a) return a;
      }
    return null;
  }
  function DC() {
    let e = 0;
    for (const t of this) ++e;
    return e;
  }
  function RC() {
    return !this.node();
  }
  function jC(e) {
    for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
      for (var i = t[n], o = 0, a = i.length, s; o < a; ++o)
        (s = i[o]) && e.call(s, s.__data__, o, i);
    return this;
  }
  function AC(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function IC(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function FC(e, t) {
    return function () {
      this.setAttribute(e, t);
    };
  }
  function LC(e, t) {
    return function () {
      this.setAttributeNS(e.space, e.local, t);
    };
  }
  function BC(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
    };
  }
  function zC(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null
        ? this.removeAttributeNS(e.space, e.local)
        : this.setAttributeNS(e.space, e.local, n);
    };
  }
  function $C(e, t) {
    var n = Wl(e);
    if (arguments.length < 2) {
      var r = this.node();
      return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
    }
    return this.each(
      (t == null
        ? n.local
          ? IC
          : AC
        : typeof t == "function"
        ? n.local
          ? zC
          : BC
        : n.local
        ? LC
        : FC)(n, t)
    );
  }
  function r1(e) {
    return (
      (e.ownerDocument && e.ownerDocument.defaultView) ||
      (e.document && e) ||
      e.defaultView
    );
  }
  function VC(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function HC(e, t, n) {
    return function () {
      this.style.setProperty(e, t, n);
    };
  }
  function UC(e, t, n) {
    return function () {
      var r = t.apply(this, arguments);
      r == null
        ? this.style.removeProperty(e)
        : this.style.setProperty(e, r, n);
    };
  }
  function QC(e, t, n) {
    return arguments.length > 1
      ? this.each(
          (t == null ? VC : typeof t == "function" ? UC : HC)(e, t, n ?? "")
        )
      : Vi(this.node(), e);
  }
  function Vi(e, t) {
    return (
      e.style.getPropertyValue(t) ||
      r1(e).getComputedStyle(e, null).getPropertyValue(t)
    );
  }
  function qC(e) {
    return function () {
      delete this[e];
    };
  }
  function WC(e, t) {
    return function () {
      this[e] = t;
    };
  }
  function YC(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      n == null ? delete this[e] : (this[e] = n);
    };
  }
  function GC(e, t) {
    return arguments.length > 1
      ? this.each((t == null ? qC : typeof t == "function" ? YC : WC)(e, t))
      : this.node()[e];
  }
  function i1(e) {
    return e.trim().split(/^|\s+/);
  }
  function rp(e) {
    return e.classList || new o1(e);
  }
  function o1(e) {
    (this._node = e), (this._names = i1(e.getAttribute("class") || ""));
  }
  o1.prototype = {
    add: function (e) {
      var t = this._names.indexOf(e);
      t < 0 &&
        (this._names.push(e),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (e) {
      var t = this._names.indexOf(e);
      t >= 0 &&
        (this._names.splice(t, 1),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (e) {
      return this._names.indexOf(e) >= 0;
    },
  };
  function a1(e, t) {
    for (var n = rp(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
  }
  function s1(e, t) {
    for (var n = rp(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
  }
  function XC(e) {
    return function () {
      a1(this, e);
    };
  }
  function KC(e) {
    return function () {
      s1(this, e);
    };
  }
  function ZC(e, t) {
    return function () {
      (t.apply(this, arguments) ? a1 : s1)(this, e);
    };
  }
  function JC(e, t) {
    var n = i1(e + "");
    if (arguments.length < 2) {
      for (var r = rp(this.node()), i = -1, o = n.length; ++i < o; )
        if (!r.contains(n[i])) return !1;
      return !0;
    }
    return this.each((typeof t == "function" ? ZC : t ? XC : KC)(n, t));
  }
  function ek() {
    this.textContent = "";
  }
  function tk(e) {
    return function () {
      this.textContent = e;
    };
  }
  function nk(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.textContent = t ?? "";
    };
  }
  function rk(e) {
    return arguments.length
      ? this.each(e == null ? ek : (typeof e == "function" ? nk : tk)(e))
      : this.node().textContent;
  }
  function ik() {
    this.innerHTML = "";
  }
  function ok(e) {
    return function () {
      this.innerHTML = e;
    };
  }
  function ak(e) {
    return function () {
      var t = e.apply(this, arguments);
      this.innerHTML = t ?? "";
    };
  }
  function sk(e) {
    return arguments.length
      ? this.each(e == null ? ik : (typeof e == "function" ? ak : ok)(e))
      : this.node().innerHTML;
  }
  function lk() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function uk() {
    return this.each(lk);
  }
  function ck() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function fk() {
    return this.each(ck);
  }
  function dk(e) {
    var t = typeof e == "function" ? e : Z0(e);
    return this.select(function () {
      return this.appendChild(t.apply(this, arguments));
    });
  }
  function pk() {
    return null;
  }
  function hk(e, t) {
    var n = typeof e == "function" ? e : Z0(e),
      r = t == null ? pk : typeof t == "function" ? t : np(t);
    return this.select(function () {
      return this.insertBefore(
        n.apply(this, arguments),
        r.apply(this, arguments) || null
      );
    });
  }
  function mk() {
    var e = this.parentNode;
    e && e.removeChild(this);
  }
  function vk() {
    return this.each(mk);
  }
  function yk() {
    var e = this.cloneNode(!1),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function gk() {
    var e = this.cloneNode(!0),
      t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e;
  }
  function wk(e) {
    return this.select(e ? gk : yk);
  }
  function xk(e) {
    return arguments.length
      ? this.property("__data__", e)
      : this.node().__data__;
  }
  function bk(e) {
    return function (t) {
      e.call(this, t, this.__data__);
    };
  }
  function Sk(e) {
    return e
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          r = t.indexOf(".");
        return (
          r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
          { type: t, name: n }
        );
      });
  }
  function Ek(e) {
    return function () {
      var t = this.__on;
      if (t) {
        for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
          (o = t[n]),
            (!e.type || o.type === e.type) && o.name === e.name
              ? this.removeEventListener(o.type, o.listener, o.options)
              : (t[++r] = o);
        ++r ? (t.length = r) : delete this.__on;
      }
    };
  }
  function _k(e, t, n) {
    return function () {
      var r = this.__on,
        i,
        o = bk(t);
      if (r) {
        for (var a = 0, s = r.length; a < s; ++a)
          if ((i = r[a]).type === e.type && i.name === e.name) {
            this.removeEventListener(i.type, i.listener, i.options),
              this.addEventListener(i.type, (i.listener = o), (i.options = n)),
              (i.value = t);
            return;
          }
      }
      this.addEventListener(e.type, o, n),
        (i = { type: e.type, name: e.name, value: t, listener: o, options: n }),
        r ? r.push(i) : (this.__on = [i]);
    };
  }
  function Ck(e, t, n) {
    var r = Sk(e + ""),
      i,
      o = r.length,
      a;
    if (arguments.length < 2) {
      var s = this.node().__on;
      if (s) {
        for (var l = 0, u = s.length, c; l < u; ++l)
          for (i = 0, c = s[l]; i < o; ++i)
            if ((a = r[i]).type === c.type && a.name === c.name) return c.value;
      }
      return;
    }
    for (s = t ? _k : Ek, i = 0; i < o; ++i) this.each(s(r[i], t, n));
    return this;
  }
  function l1(e, t, n) {
    var r = r1(e),
      i = r.CustomEvent;
    typeof i == "function"
      ? (i = new i(t, n))
      : ((i = r.document.createEvent("Event")),
        n
          ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
          : i.initEvent(t, !1, !1)),
      e.dispatchEvent(i);
  }
  function kk(e, t) {
    return function () {
      return l1(this, e, t);
    };
  }
  function Nk(e, t) {
    return function () {
      return l1(this, e, t.apply(this, arguments));
    };
  }
  function Ok(e, t) {
    return this.each((typeof t == "function" ? Nk : kk)(e, t));
  }
  function* Pk() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
      for (var r = e[t], i = 0, o = r.length, a; i < o; ++i)
        (a = r[i]) && (yield a);
  }
  var u1 = [null];
  function mt(e, t) {
    (this._groups = e), (this._parents = t);
  }
  function Ra() {
    return new mt([[document.documentElement]], u1);
  }
  function Tk() {
    return this;
  }
  mt.prototype = Ra.prototype = {
    constructor: mt,
    select: nC,
    selectAll: aC,
    selectChild: cC,
    selectChildren: hC,
    filter: mC,
    data: bC,
    enter: vC,
    exit: EC,
    join: _C,
    merge: CC,
    selection: Tk,
    order: kC,
    sort: NC,
    call: PC,
    nodes: TC,
    node: MC,
    size: DC,
    empty: RC,
    each: jC,
    attr: $C,
    style: QC,
    property: GC,
    classed: JC,
    text: rk,
    html: sk,
    raise: uk,
    lower: fk,
    append: dk,
    insert: hk,
    remove: vk,
    clone: wk,
    datum: xk,
    on: Ck,
    dispatch: Ok,
    [Symbol.iterator]: Pk,
  };
  function Ft(e) {
    return typeof e == "string"
      ? new mt([[document.querySelector(e)]], [document.documentElement])
      : new mt([[e]], u1);
  }
  function Mk(e) {
    let t;
    for (; (t = e.sourceEvent); ) e = t;
    return e;
  }
  function Kt(e, t) {
    if (((e = Mk(e)), t === void 0 && (t = e.currentTarget), t)) {
      var n = t.ownerSVGElement || t;
      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return (
          (r.x = e.clientX),
          (r.y = e.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        );
      }
      if (t.getBoundingClientRect) {
        var i = t.getBoundingClientRect();
        return [
          e.clientX - i.left - t.clientLeft,
          e.clientY - i.top - t.clientTop,
        ];
      }
    }
    return [e.pageX, e.pageY];
  }
  const Dk = { passive: !1 },
    ma = { capture: !0, passive: !1 };
  function Hu(e) {
    e.stopImmediatePropagation();
  }
  function ki(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function c1(e) {
    var t = e.document.documentElement,
      n = Ft(e).on("dragstart.drag", ki, ma);
    "onselectstart" in t
      ? n.on("selectstart.drag", ki, ma)
      : ((t.__noselect = t.style.MozUserSelect),
        (t.style.MozUserSelect = "none"));
  }
  function f1(e, t) {
    var n = e.document.documentElement,
      r = Ft(e).on("dragstart.drag", null);
    t &&
      (r.on("click.drag", ki, ma),
      setTimeout(function () {
        r.on("click.drag", null);
      }, 0)),
      "onselectstart" in n
        ? r.on("selectstart.drag", null)
        : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
  }
  const is = (e) => () => e;
  function df(
    e,
    {
      sourceEvent: t,
      subject: n,
      target: r,
      identifier: i,
      active: o,
      x: a,
      y: s,
      dx: l,
      dy: u,
      dispatch: c,
    }
  ) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      subject: { value: n, enumerable: !0, configurable: !0 },
      target: { value: r, enumerable: !0, configurable: !0 },
      identifier: { value: i, enumerable: !0, configurable: !0 },
      active: { value: o, enumerable: !0, configurable: !0 },
      x: { value: a, enumerable: !0, configurable: !0 },
      y: { value: s, enumerable: !0, configurable: !0 },
      dx: { value: l, enumerable: !0, configurable: !0 },
      dy: { value: u, enumerable: !0, configurable: !0 },
      _: { value: c },
    });
  }
  df.prototype.on = function () {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e;
  };
  function Rk(e) {
    return !e.ctrlKey && !e.button;
  }
  function jk() {
    return this.parentNode;
  }
  function Ak(e, t) {
    return t ?? { x: e.x, y: e.y };
  }
  function Ik() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function Fk() {
    var e = Rk,
      t = jk,
      n = Ak,
      r = Ik,
      i = {},
      o = ql("start", "drag", "end"),
      a = 0,
      s,
      l,
      u,
      c,
      f = 0;
    function d(x) {
      x.on("mousedown.drag", p)
        .filter(r)
        .on("touchstart.drag", b)
        .on("touchmove.drag", m, Dk)
        .on("touchend.drag touchcancel.drag", h)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function p(x, E) {
      if (!(c || !e.call(this, x, E))) {
        var _ = v(this, t.call(this, x, E), x, E, "mouse");
        _ &&
          (Ft(x.view).on("mousemove.drag", g, ma).on("mouseup.drag", y, ma),
          c1(x.view),
          Hu(x),
          (u = !1),
          (s = x.clientX),
          (l = x.clientY),
          _("start", x));
      }
    }
    function g(x) {
      if ((ki(x), !u)) {
        var E = x.clientX - s,
          _ = x.clientY - l;
        u = E * E + _ * _ > f;
      }
      i.mouse("drag", x);
    }
    function y(x) {
      Ft(x.view).on("mousemove.drag mouseup.drag", null),
        f1(x.view, u),
        ki(x),
        i.mouse("end", x);
    }
    function b(x, E) {
      if (e.call(this, x, E)) {
        var _ = x.changedTouches,
          C = t.call(this, x, E),
          N = _.length,
          M,
          P;
        for (M = 0; M < N; ++M)
          (P = v(this, C, x, E, _[M].identifier, _[M])) &&
            (Hu(x), P("start", x, _[M]));
      }
    }
    function m(x) {
      var E = x.changedTouches,
        _ = E.length,
        C,
        N;
      for (C = 0; C < _; ++C)
        (N = i[E[C].identifier]) && (ki(x), N("drag", x, E[C]));
    }
    function h(x) {
      var E = x.changedTouches,
        _ = E.length,
        C,
        N;
      for (
        c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, 500),
          C = 0;
        C < _;
        ++C
      )
        (N = i[E[C].identifier]) && (Hu(x), N("end", x, E[C]));
    }
    function v(x, E, _, C, N, M) {
      var P = o.copy(),
        L = Kt(M || _, E),
        B,
        D,
        k;
      if (
        (k = n.call(
          x,
          new df("beforestart", {
            sourceEvent: _,
            target: d,
            identifier: N,
            active: a,
            x: L[0],
            y: L[1],
            dx: 0,
            dy: 0,
            dispatch: P,
          }),
          C
        )) != null
      )
        return (
          (B = k.x - L[0] || 0),
          (D = k.y - L[1] || 0),
          function j(R, T, O) {
            var A = L,
              I;
            switch (R) {
              case "start":
                (i[N] = j), (I = a++);
                break;
              case "end":
                delete i[N], --a;
              case "drag":
                (L = Kt(O || T, E)), (I = a);
                break;
            }
            P.call(
              R,
              x,
              new df(R, {
                sourceEvent: T,
                subject: k,
                target: d,
                identifier: N,
                active: I,
                x: L[0] + B,
                y: L[1] + D,
                dx: L[0] - A[0],
                dy: L[1] - A[1],
                dispatch: P,
              }),
              C
            );
          }
        );
    }
    return (
      (d.filter = function (x) {
        return arguments.length
          ? ((e = typeof x == "function" ? x : is(!!x)), d)
          : e;
      }),
      (d.container = function (x) {
        return arguments.length
          ? ((t = typeof x == "function" ? x : is(x)), d)
          : t;
      }),
      (d.subject = function (x) {
        return arguments.length
          ? ((n = typeof x == "function" ? x : is(x)), d)
          : n;
      }),
      (d.touchable = function (x) {
        return arguments.length
          ? ((r = typeof x == "function" ? x : is(!!x)), d)
          : r;
      }),
      (d.on = function () {
        var x = o.on.apply(o, arguments);
        return x === o ? d : x;
      }),
      (d.clickDistance = function (x) {
        return arguments.length ? ((f = (x = +x) * x), d) : Math.sqrt(f);
      }),
      d
    );
  }
  function ip(e, t, n) {
    (e.prototype = t.prototype = n), (n.constructor = e);
  }
  function d1(e, t) {
    var n = Object.create(e.prototype);
    for (var r in t) n[r] = t[r];
    return n;
  }
  function ja() {}
  var va = 0.7,
    pl = 1 / va,
    Ni = "\\s*([+-]?\\d+)\\s*",
    ya = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Lk = /^#([0-9a-f]{3,8})$/,
    Bk = new RegExp(`^rgb\\(${Ni},${Ni},${Ni}\\)$`),
    zk = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`),
    $k = new RegExp(`^rgba\\(${Ni},${Ni},${Ni},${ya}\\)$`),
    Vk = new RegExp(`^rgba\\(${tn},${tn},${tn},${ya}\\)$`),
    Hk = new RegExp(`^hsl\\(${ya},${tn},${tn}\\)$`),
    Uk = new RegExp(`^hsla\\(${ya},${tn},${tn},${ya}\\)$`),
    wm = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  ip(ja, ga, {
    copy(e) {
      return Object.assign(new this.constructor(), this, e);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: xm,
    formatHex: xm,
    formatHex8: Qk,
    formatHsl: qk,
    formatRgb: bm,
    toString: bm,
  });
  function xm() {
    return this.rgb().formatHex();
  }
  function Qk() {
    return this.rgb().formatHex8();
  }
  function qk() {
    return p1(this).formatHsl();
  }
  function bm() {
    return this.rgb().formatRgb();
  }
  function ga(e) {
    var t, n;
    return (
      (e = (e + "").trim().toLowerCase()),
      (t = Lk.exec(e))
        ? ((n = t[1].length),
          (t = parseInt(t[1], 16)),
          n === 6
            ? Sm(t)
            : n === 3
            ? new tt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1
              )
            : n === 8
            ? os(
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                (t & 255) / 255
              )
            : n === 4
            ? os(
                ((t >> 12) & 15) | ((t >> 8) & 240),
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                (((t & 15) << 4) | (t & 15)) / 255
              )
            : null)
        : (t = Bk.exec(e))
        ? new tt(t[1], t[2], t[3], 1)
        : (t = zk.exec(e))
        ? new tt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
        : (t = $k.exec(e))
        ? os(t[1], t[2], t[3], t[4])
        : (t = Vk.exec(e))
        ? os((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
        : (t = Hk.exec(e))
        ? Cm(t[1], t[2] / 100, t[3] / 100, 1)
        : (t = Uk.exec(e))
        ? Cm(t[1], t[2] / 100, t[3] / 100, t[4])
        : wm.hasOwnProperty(e)
        ? Sm(wm[e])
        : e === "transparent"
        ? new tt(NaN, NaN, NaN, 0)
        : null
    );
  }
  function Sm(e) {
    return new tt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
  }
  function os(e, t, n, r) {
    return r <= 0 && (e = t = n = NaN), new tt(e, t, n, r);
  }
  function Wk(e) {
    return (
      e instanceof ja || (e = ga(e)),
      e ? ((e = e.rgb()), new tt(e.r, e.g, e.b, e.opacity)) : new tt()
    );
  }
  function pf(e, t, n, r) {
    return arguments.length === 1 ? Wk(e) : new tt(e, t, n, r ?? 1);
  }
  function tt(e, t, n, r) {
    (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
  }
  ip(
    tt,
    pf,
    d1(ja, {
      brighter(e) {
        return (
          (e = e == null ? pl : Math.pow(pl, e)),
          new tt(this.r * e, this.g * e, this.b * e, this.opacity)
        );
      },
      darker(e) {
        return (
          (e = e == null ? va : Math.pow(va, e)),
          new tt(this.r * e, this.g * e, this.b * e, this.opacity)
        );
      },
      rgb() {
        return this;
      },
      clamp() {
        return new tt(Pr(this.r), Pr(this.g), Pr(this.b), hl(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: Em,
      formatHex: Em,
      formatHex8: Yk,
      formatRgb: _m,
      toString: _m,
    })
  );
  function Em() {
    return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}`;
  }
  function Yk() {
    return `#${Cr(this.r)}${Cr(this.g)}${Cr(this.b)}${Cr(
      (isNaN(this.opacity) ? 1 : this.opacity) * 255
    )}`;
  }
  function _m() {
    const e = hl(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${Pr(this.r)}, ${Pr(this.g)}, ${Pr(
      this.b
    )}${e === 1 ? ")" : `, ${e})`}`;
  }
  function hl(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
  }
  function Pr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0));
  }
  function Cr(e) {
    return (e = Pr(e)), (e < 16 ? "0" : "") + e.toString(16);
  }
  function Cm(e, t, n, r) {
    return (
      r <= 0
        ? (e = t = n = NaN)
        : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
      new Lt(e, t, n, r)
    );
  }
  function p1(e) {
    if (e instanceof Lt) return new Lt(e.h, e.s, e.l, e.opacity);
    if ((e instanceof ja || (e = ga(e)), !e)) return new Lt();
    if (e instanceof Lt) return e;
    e = e.rgb();
    var t = e.r / 255,
      n = e.g / 255,
      r = e.b / 255,
      i = Math.min(t, n, r),
      o = Math.max(t, n, r),
      a = NaN,
      s = o - i,
      l = (o + i) / 2;
    return (
      s
        ? (t === o
            ? (a = (n - r) / s + (n < r) * 6)
            : n === o
            ? (a = (r - t) / s + 2)
            : (a = (t - n) / s + 4),
          (s /= l < 0.5 ? o + i : 2 - o - i),
          (a *= 60))
        : (s = l > 0 && l < 1 ? 0 : a),
      new Lt(a, s, l, e.opacity)
    );
  }
  function Gk(e, t, n, r) {
    return arguments.length === 1 ? p1(e) : new Lt(e, t, n, r ?? 1);
  }
  function Lt(e, t, n, r) {
    (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
  }
  ip(
    Lt,
    Gk,
    d1(ja, {
      brighter(e) {
        return (
          (e = e == null ? pl : Math.pow(pl, e)),
          new Lt(this.h, this.s, this.l * e, this.opacity)
        );
      },
      darker(e) {
        return (
          (e = e == null ? va : Math.pow(va, e)),
          new Lt(this.h, this.s, this.l * e, this.opacity)
        );
      },
      rgb() {
        var e = (this.h % 360) + (this.h < 0) * 360,
          t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < 0.5 ? n : 1 - n) * t,
          i = 2 * n - r;
        return new tt(
          Uu(e >= 240 ? e - 240 : e + 120, i, r),
          Uu(e, i, r),
          Uu(e < 120 ? e + 240 : e - 120, i, r),
          this.opacity
        );
      },
      clamp() {
        return new Lt(km(this.h), as(this.s), as(this.l), hl(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const e = hl(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${km(this.h)}, ${
          as(this.s) * 100
        }%, ${as(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
      },
    })
  );
  function km(e) {
    return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
  }
  function as(e) {
    return Math.max(0, Math.min(1, e || 0));
  }
  function Uu(e, t, n) {
    return (
      (e < 60
        ? t + ((n - t) * e) / 60
        : e < 180
        ? n
        : e < 240
        ? t + ((n - t) * (240 - e)) / 60
        : t) * 255
    );
  }
  const h1 = (e) => () => e;
  function Xk(e, t) {
    return function (n) {
      return e + n * t;
    };
  }
  function Kk(e, t, n) {
    return (
      (e = Math.pow(e, n)),
      (t = Math.pow(t, n) - e),
      (n = 1 / n),
      function (r) {
        return Math.pow(e + r * t, n);
      }
    );
  }
  function Zk(e) {
    return (e = +e) == 1
      ? m1
      : function (t, n) {
          return n - t ? Kk(t, n, e) : h1(isNaN(t) ? n : t);
        };
  }
  function m1(e, t) {
    var n = t - e;
    return n ? Xk(e, n) : h1(isNaN(e) ? t : e);
  }
  const Nm = (function e(t) {
    var n = Zk(t);
    function r(i, o) {
      var a = n((i = pf(i)).r, (o = pf(o)).r),
        s = n(i.g, o.g),
        l = n(i.b, o.b),
        u = m1(i.opacity, o.opacity);
      return function (c) {
        return (
          (i.r = a(c)), (i.g = s(c)), (i.b = l(c)), (i.opacity = u(c)), i + ""
        );
      };
    }
    return (r.gamma = e), r;
  })(1);
  function Dn(e, t) {
    return (
      (e = +e),
      (t = +t),
      function (n) {
        return e * (1 - n) + t * n;
      }
    );
  }
  var hf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Qu = new RegExp(hf.source, "g");
  function Jk(e) {
    return function () {
      return e;
    };
  }
  function e2(e) {
    return function (t) {
      return e(t) + "";
    };
  }
  function t2(e, t) {
    var n = (hf.lastIndex = Qu.lastIndex = 0),
      r,
      i,
      o,
      a = -1,
      s = [],
      l = [];
    for (e = e + "", t = t + ""; (r = hf.exec(e)) && (i = Qu.exec(t)); )
      (o = i.index) > n &&
        ((o = t.slice(n, o)), s[a] ? (s[a] += o) : (s[++a] = o)),
        (r = r[0]) === (i = i[0])
          ? s[a]
            ? (s[a] += i)
            : (s[++a] = i)
          : ((s[++a] = null), l.push({ i: a, x: Dn(r, i) })),
        (n = Qu.lastIndex);
    return (
      n < t.length && ((o = t.slice(n)), s[a] ? (s[a] += o) : (s[++a] = o)),
      s.length < 2
        ? l[0]
          ? e2(l[0].x)
          : Jk(t)
        : ((t = l.length),
          function (u) {
            for (var c = 0, f; c < t; ++c) s[(f = l[c]).i] = f.x(u);
            return s.join("");
          })
    );
  }
  var Om = 180 / Math.PI,
    mf = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function v1(e, t, n, r, i, o) {
    var a, s, l;
    return (
      (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
      (l = e * n + t * r) && ((n -= e * l), (r -= t * l)),
      (s = Math.sqrt(n * n + r * r)) && ((n /= s), (r /= s), (l /= s)),
      e * r < t * n && ((e = -e), (t = -t), (l = -l), (a = -a)),
      {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(t, e) * Om,
        skewX: Math.atan(l) * Om,
        scaleX: a,
        scaleY: s,
      }
    );
  }
  var ss;
  function n2(e) {
    const t = new (
      typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix
    )(e + "");
    return t.isIdentity ? mf : v1(t.a, t.b, t.c, t.d, t.e, t.f);
  }
  function r2(e) {
    return e == null ||
      (ss || (ss = document.createElementNS("http://www.w3.org/2000/svg", "g")),
      ss.setAttribute("transform", e),
      !(e = ss.transform.baseVal.consolidate()))
      ? mf
      : ((e = e.matrix), v1(e.a, e.b, e.c, e.d, e.e, e.f));
  }
  function y1(e, t, n, r) {
    function i(u) {
      return u.length ? u.pop() + " " : "";
    }
    function o(u, c, f, d, p, g) {
      if (u !== f || c !== d) {
        var y = p.push("translate(", null, t, null, n);
        g.push({ i: y - 4, x: Dn(u, f) }, { i: y - 2, x: Dn(c, d) });
      } else (f || d) && p.push("translate(" + f + t + d + n);
    }
    function a(u, c, f, d) {
      u !== c
        ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
          d.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: Dn(u, c) }))
        : c && f.push(i(f) + "rotate(" + c + r);
    }
    function s(u, c, f, d) {
      u !== c
        ? d.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: Dn(u, c) })
        : c && f.push(i(f) + "skewX(" + c + r);
    }
    function l(u, c, f, d, p, g) {
      if (u !== f || c !== d) {
        var y = p.push(i(p) + "scale(", null, ",", null, ")");
        g.push({ i: y - 4, x: Dn(u, f) }, { i: y - 2, x: Dn(c, d) });
      } else
        (f !== 1 || d !== 1) && p.push(i(p) + "scale(" + f + "," + d + ")");
    }
    return function (u, c) {
      var f = [],
        d = [];
      return (
        (u = e(u)),
        (c = e(c)),
        o(u.translateX, u.translateY, c.translateX, c.translateY, f, d),
        a(u.rotate, c.rotate, f, d),
        s(u.skewX, c.skewX, f, d),
        l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, d),
        (u = c = null),
        function (p) {
          for (var g = -1, y = d.length, b; ++g < y; ) f[(b = d[g]).i] = b.x(p);
          return f.join("");
        }
      );
    };
  }
  var i2 = y1(n2, "px, ", "px)", "deg)"),
    o2 = y1(r2, ", ", ")", ")"),
    a2 = 1e-12;
  function Pm(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2;
  }
  function s2(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2;
  }
  function l2(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1);
  }
  const u2 = (function e(t, n, r) {
    function i(o, a) {
      var s = o[0],
        l = o[1],
        u = o[2],
        c = a[0],
        f = a[1],
        d = a[2],
        p = c - s,
        g = f - l,
        y = p * p + g * g,
        b,
        m;
      if (y < a2)
        (m = Math.log(d / u) / t),
          (b = function (C) {
            return [s + C * p, l + C * g, u * Math.exp(t * C * m)];
          });
      else {
        var h = Math.sqrt(y),
          v = (d * d - u * u + r * y) / (2 * u * n * h),
          x = (d * d - u * u - r * y) / (2 * d * n * h),
          E = Math.log(Math.sqrt(v * v + 1) - v),
          _ = Math.log(Math.sqrt(x * x + 1) - x);
        (m = (_ - E) / t),
          (b = function (C) {
            var N = C * m,
              M = Pm(E),
              P = (u / (n * h)) * (M * l2(t * N + E) - s2(E));
            return [s + P * p, l + P * g, (u * M) / Pm(t * N + E)];
          });
      }
      return (b.duration = (m * 1e3 * t) / Math.SQRT2), b;
    }
    return (
      (i.rho = function (o) {
        var a = Math.max(0.001, +o),
          s = a * a,
          l = s * s;
        return e(a, s, l);
      }),
      i
    );
  })(Math.SQRT2, 2, 4);
  var Hi = 0,
    Ro = 0,
    wo = 0,
    g1 = 1e3,
    ml,
    jo,
    vl = 0,
    Lr = 0,
    Yl = 0,
    wa = typeof performance == "object" && performance.now ? performance : Date,
    w1 =
      typeof window == "object" && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (e) {
            setTimeout(e, 17);
          };
  function op() {
    return Lr || (w1(c2), (Lr = wa.now() + Yl));
  }
  function c2() {
    Lr = 0;
  }
  function yl() {
    this._call = this._time = this._next = null;
  }
  yl.prototype = x1.prototype = {
    constructor: yl,
    restart: function (e, t, n) {
      if (typeof e != "function")
        throw new TypeError("callback is not a function");
      (n = (n == null ? op() : +n) + (t == null ? 0 : +t)),
        !this._next &&
          jo !== this &&
          (jo ? (jo._next = this) : (ml = this), (jo = this)),
        (this._call = e),
        (this._time = n),
        vf();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), vf());
    },
  };
  function x1(e, t, n) {
    var r = new yl();
    return r.restart(e, t, n), r;
  }
  function f2() {
    op(), ++Hi;
    for (var e = ml, t; e; )
      (t = Lr - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
    --Hi;
  }
  function Tm() {
    (Lr = (vl = wa.now()) + Yl), (Hi = Ro = 0);
    try {
      f2();
    } finally {
      (Hi = 0), p2(), (Lr = 0);
    }
  }
  function d2() {
    var e = wa.now(),
      t = e - vl;
    t > g1 && ((Yl -= t), (vl = e));
  }
  function p2() {
    for (var e, t = ml, n, r = 1 / 0; t; )
      t._call
        ? (r > t._time && (r = t._time), (e = t), (t = t._next))
        : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (ml = n)));
    (jo = e), vf(r);
  }
  function vf(e) {
    if (!Hi) {
      Ro && (Ro = clearTimeout(Ro));
      var t = e - Lr;
      t > 24
        ? (e < 1 / 0 && (Ro = setTimeout(Tm, e - wa.now() - Yl)),
          wo && (wo = clearInterval(wo)))
        : (wo || ((vl = wa.now()), (wo = setInterval(d2, g1))),
          (Hi = 1),
          w1(Tm));
    }
  }
  function Mm(e, t, n) {
    var r = new yl();
    return (
      (t = t == null ? 0 : +t),
      r.restart(
        (i) => {
          r.stop(), e(i + t);
        },
        t,
        n
      ),
      r
    );
  }
  var h2 = ql("start", "end", "cancel", "interrupt"),
    m2 = [],
    b1 = 0,
    Dm = 1,
    yf = 2,
    Ps = 3,
    Rm = 4,
    gf = 5,
    Ts = 6;
  function Gl(e, t, n, r, i, o) {
    var a = e.__transition;
    if (!a) e.__transition = {};
    else if (n in a) return;
    v2(e, n, {
      name: t,
      index: r,
      group: i,
      on: h2,
      tween: m2,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: b1,
    });
  }
  function ap(e, t) {
    var n = Ht(e, t);
    if (n.state > b1) throw new Error("too late; already scheduled");
    return n;
  }
  function an(e, t) {
    var n = Ht(e, t);
    if (n.state > Ps) throw new Error("too late; already running");
    return n;
  }
  function Ht(e, t) {
    var n = e.__transition;
    if (!n || !(n = n[t])) throw new Error("transition not found");
    return n;
  }
  function v2(e, t, n) {
    var r = e.__transition,
      i;
    (r[t] = n), (n.timer = x1(o, 0, n.time));
    function o(u) {
      (n.state = Dm),
        n.timer.restart(a, n.delay, n.time),
        n.delay <= u && a(u - n.delay);
    }
    function a(u) {
      var c, f, d, p;
      if (n.state !== Dm) return l();
      for (c in r)
        if (((p = r[c]), p.name === n.name)) {
          if (p.state === Ps) return Mm(a);
          p.state === Rm
            ? ((p.state = Ts),
              p.timer.stop(),
              p.on.call("interrupt", e, e.__data__, p.index, p.group),
              delete r[c])
            : +c < t &&
              ((p.state = Ts),
              p.timer.stop(),
              p.on.call("cancel", e, e.__data__, p.index, p.group),
              delete r[c]);
        }
      if (
        (Mm(function () {
          n.state === Ps &&
            ((n.state = Rm), n.timer.restart(s, n.delay, n.time), s(u));
        }),
        (n.state = yf),
        n.on.call("start", e, e.__data__, n.index, n.group),
        n.state === yf)
      ) {
        for (
          n.state = Ps, i = new Array((d = n.tween.length)), c = 0, f = -1;
          c < d;
          ++c
        )
          (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) &&
            (i[++f] = p);
        i.length = f + 1;
      }
    }
    function s(u) {
      for (
        var c =
            u < n.duration
              ? n.ease.call(null, u / n.duration)
              : (n.timer.restart(l), (n.state = gf), 1),
          f = -1,
          d = i.length;
        ++f < d;

      )
        i[f].call(e, c);
      n.state === gf &&
        (n.on.call("end", e, e.__data__, n.index, n.group), l());
    }
    function l() {
      (n.state = Ts), n.timer.stop(), delete r[t];
      for (var u in r) return;
      delete e.__transition;
    }
  }
  function Ms(e, t) {
    var n = e.__transition,
      r,
      i,
      o = !0,
      a;
    if (n) {
      t = t == null ? null : t + "";
      for (a in n) {
        if ((r = n[a]).name !== t) {
          o = !1;
          continue;
        }
        (i = r.state > yf && r.state < gf),
          (r.state = Ts),
          r.timer.stop(),
          r.on.call(
            i ? "interrupt" : "cancel",
            e,
            e.__data__,
            r.index,
            r.group
          ),
          delete n[a];
      }
      o && delete e.__transition;
    }
  }
  function y2(e) {
    return this.each(function () {
      Ms(this, e);
    });
  }
  function g2(e, t) {
    var n, r;
    return function () {
      var i = an(this, e),
        o = i.tween;
      if (o !== n) {
        r = n = o;
        for (var a = 0, s = r.length; a < s; ++a)
          if (r[a].name === t) {
            (r = r.slice()), r.splice(a, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function w2(e, t, n) {
    var r, i;
    if (typeof n != "function") throw new Error();
    return function () {
      var o = an(this, e),
        a = o.tween;
      if (a !== r) {
        i = (r = a).slice();
        for (var s = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
          if (i[l].name === t) {
            i[l] = s;
            break;
          }
        l === u && i.push(s);
      }
      o.tween = i;
    };
  }
  function x2(e, t) {
    var n = this._id;
    if (((e += ""), arguments.length < 2)) {
      for (var r = Ht(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
        if ((a = r[i]).name === e) return a.value;
      return null;
    }
    return this.each((t == null ? g2 : w2)(n, e, t));
  }
  function sp(e, t, n) {
    var r = e._id;
    return (
      e.each(function () {
        var i = an(this, r);
        (i.value || (i.value = {}))[t] = n.apply(this, arguments);
      }),
      function (i) {
        return Ht(i, r).value[t];
      }
    );
  }
  function S1(e, t) {
    var n;
    return (
      typeof t == "number"
        ? Dn
        : t instanceof ga
        ? Nm
        : (n = ga(t))
        ? ((t = n), Nm)
        : t2
    )(e, t);
  }
  function b2(e) {
    return function () {
      this.removeAttribute(e);
    };
  }
  function S2(e) {
    return function () {
      this.removeAttributeNS(e.space, e.local);
    };
  }
  function E2(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var a = this.getAttribute(e);
      return a === i ? null : a === r ? o : (o = t((r = a), n));
    };
  }
  function _2(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var a = this.getAttributeNS(e.space, e.local);
      return a === i ? null : a === r ? o : (o = t((r = a), n));
    };
  }
  function C2(e, t, n) {
    var r, i, o;
    return function () {
      var a,
        s = n(this),
        l;
      return s == null
        ? void this.removeAttribute(e)
        : ((a = this.getAttribute(e)),
          (l = s + ""),
          a === l
            ? null
            : a === r && l === i
            ? o
            : ((i = l), (o = t((r = a), s))));
    };
  }
  function k2(e, t, n) {
    var r, i, o;
    return function () {
      var a,
        s = n(this),
        l;
      return s == null
        ? void this.removeAttributeNS(e.space, e.local)
        : ((a = this.getAttributeNS(e.space, e.local)),
          (l = s + ""),
          a === l
            ? null
            : a === r && l === i
            ? o
            : ((i = l), (o = t((r = a), s))));
    };
  }
  function N2(e, t) {
    var n = Wl(e),
      r = n === "transform" ? o2 : S1;
    return this.attrTween(
      e,
      typeof t == "function"
        ? (n.local ? k2 : C2)(n, r, sp(this, "attr." + e, t))
        : t == null
        ? (n.local ? S2 : b2)(n)
        : (n.local ? _2 : E2)(n, r, t)
    );
  }
  function O2(e, t) {
    return function (n) {
      this.setAttribute(e, t.call(this, n));
    };
  }
  function P2(e, t) {
    return function (n) {
      this.setAttributeNS(e.space, e.local, t.call(this, n));
    };
  }
  function T2(e, t) {
    var n, r;
    function i() {
      var o = t.apply(this, arguments);
      return o !== r && (n = (r = o) && P2(e, o)), n;
    }
    return (i._value = t), i;
  }
  function M2(e, t) {
    var n, r;
    function i() {
      var o = t.apply(this, arguments);
      return o !== r && (n = (r = o) && O2(e, o)), n;
    }
    return (i._value = t), i;
  }
  function D2(e, t) {
    var n = "attr." + e;
    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
    if (t == null) return this.tween(n, null);
    if (typeof t != "function") throw new Error();
    var r = Wl(e);
    return this.tween(n, (r.local ? T2 : M2)(r, t));
  }
  function R2(e, t) {
    return function () {
      ap(this, e).delay = +t.apply(this, arguments);
    };
  }
  function j2(e, t) {
    return (
      (t = +t),
      function () {
        ap(this, e).delay = t;
      }
    );
  }
  function A2(e) {
    var t = this._id;
    return arguments.length
      ? this.each((typeof e == "function" ? R2 : j2)(t, e))
      : Ht(this.node(), t).delay;
  }
  function I2(e, t) {
    return function () {
      an(this, e).duration = +t.apply(this, arguments);
    };
  }
  function F2(e, t) {
    return (
      (t = +t),
      function () {
        an(this, e).duration = t;
      }
    );
  }
  function L2(e) {
    var t = this._id;
    return arguments.length
      ? this.each((typeof e == "function" ? I2 : F2)(t, e))
      : Ht(this.node(), t).duration;
  }
  function B2(e, t) {
    if (typeof t != "function") throw new Error();
    return function () {
      an(this, e).ease = t;
    };
  }
  function z2(e) {
    var t = this._id;
    return arguments.length ? this.each(B2(t, e)) : Ht(this.node(), t).ease;
  }
  function $2(e, t) {
    return function () {
      var n = t.apply(this, arguments);
      if (typeof n != "function") throw new Error();
      an(this, e).ease = n;
    };
  }
  function V2(e) {
    if (typeof e != "function") throw new Error();
    return this.each($2(this._id, e));
  }
  function H2(e) {
    typeof e != "function" && (e = e1(e));
    for (
      var t = this._groups, n = t.length, r = new Array(n), i = 0;
      i < n;
      ++i
    )
      for (var o = t[i], a = o.length, s = (r[i] = []), l, u = 0; u < a; ++u)
        (l = o[u]) && e.call(l, l.__data__, u, o) && s.push(l);
    return new bn(r, this._parents, this._name, this._id);
  }
  function U2(e) {
    if (e._id !== this._id) throw new Error();
    for (
      var t = this._groups,
        n = e._groups,
        r = t.length,
        i = n.length,
        o = Math.min(r, i),
        a = new Array(r),
        s = 0;
      s < o;
      ++s
    )
      for (
        var l = t[s],
          u = n[s],
          c = l.length,
          f = (a[s] = new Array(c)),
          d,
          p = 0;
        p < c;
        ++p
      )
        (d = l[p] || u[p]) && (f[p] = d);
    for (; s < r; ++s) a[s] = t[s];
    return new bn(a, this._parents, this._name, this._id);
  }
  function Q2(e) {
    return (e + "")
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
      });
  }
  function q2(e, t, n) {
    var r,
      i,
      o = Q2(t) ? ap : an;
    return function () {
      var a = o(this, e),
        s = a.on;
      s !== r && (i = (r = s).copy()).on(t, n), (a.on = i);
    };
  }
  function W2(e, t) {
    var n = this._id;
    return arguments.length < 2
      ? Ht(this.node(), n).on.on(e)
      : this.each(q2(n, e, t));
  }
  function Y2(e) {
    return function () {
      var t = this.parentNode;
      for (var n in this.__transition) if (+n !== e) return;
      t && t.removeChild(this);
    };
  }
  function G2() {
    return this.on("end.remove", Y2(this._id));
  }
  function X2(e) {
    var t = this._name,
      n = this._id;
    typeof e != "function" && (e = np(e));
    for (
      var r = this._groups, i = r.length, o = new Array(i), a = 0;
      a < i;
      ++a
    )
      for (
        var s = r[a], l = s.length, u = (o[a] = new Array(l)), c, f, d = 0;
        d < l;
        ++d
      )
        (c = s[d]) &&
          (f = e.call(c, c.__data__, d, s)) &&
          ("__data__" in c && (f.__data__ = c.__data__),
          (u[d] = f),
          Gl(u[d], t, n, d, u, Ht(c, n)));
    return new bn(o, this._parents, t, n);
  }
  function K2(e) {
    var t = this._name,
      n = this._id;
    typeof e != "function" && (e = J0(e));
    for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
      for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
        if ((c = l[f])) {
          for (
            var d = e.call(c, c.__data__, f, l),
              p,
              g = Ht(c, n),
              y = 0,
              b = d.length;
            y < b;
            ++y
          )
            (p = d[y]) && Gl(p, t, n, y, d, g);
          o.push(d), a.push(c);
        }
    return new bn(o, a, t, n);
  }
  var Z2 = Ra.prototype.constructor;
  function J2() {
    return new Z2(this._groups, this._parents);
  }
  function eN(e, t) {
    var n, r, i;
    return function () {
      var o = Vi(this, e),
        a = (this.style.removeProperty(e), Vi(this, e));
      return o === a
        ? null
        : o === n && a === r
        ? i
        : (i = t((n = o), (r = a)));
    };
  }
  function E1(e) {
    return function () {
      this.style.removeProperty(e);
    };
  }
  function tN(e, t, n) {
    var r,
      i = n + "",
      o;
    return function () {
      var a = Vi(this, e);
      return a === i ? null : a === r ? o : (o = t((r = a), n));
    };
  }
  function nN(e, t, n) {
    var r, i, o;
    return function () {
      var a = Vi(this, e),
        s = n(this),
        l = s + "";
      return (
        s == null && (l = s = (this.style.removeProperty(e), Vi(this, e))),
        a === l ? null : a === r && l === i ? o : ((i = l), (o = t((r = a), s)))
      );
    };
  }
  function rN(e, t) {
    var n,
      r,
      i,
      o = "style." + t,
      a = "end." + o,
      s;
    return function () {
      var l = an(this, e),
        u = l.on,
        c = l.value[o] == null ? s || (s = E1(t)) : void 0;
      (u !== n || i !== c) && (r = (n = u).copy()).on(a, (i = c)), (l.on = r);
    };
  }
  function iN(e, t, n) {
    var r = (e += "") == "transform" ? i2 : S1;
    return t == null
      ? this.styleTween(e, eN(e, r)).on("end.style." + e, E1(e))
      : typeof t == "function"
      ? this.styleTween(e, nN(e, r, sp(this, "style." + e, t))).each(
          rN(this._id, e)
        )
      : this.styleTween(e, tN(e, r, t), n).on("end.style." + e, null);
  }
  function oN(e, t, n) {
    return function (r) {
      this.style.setProperty(e, t.call(this, r), n);
    };
  }
  function aN(e, t, n) {
    var r, i;
    function o() {
      var a = t.apply(this, arguments);
      return a !== i && (r = (i = a) && oN(e, a, n)), r;
    }
    return (o._value = t), o;
  }
  function sN(e, t, n) {
    var r = "style." + (e += "");
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (t == null) return this.tween(r, null);
    if (typeof t != "function") throw new Error();
    return this.tween(r, aN(e, t, n ?? ""));
  }
  function lN(e) {
    return function () {
      this.textContent = e;
    };
  }
  function uN(e) {
    return function () {
      var t = e(this);
      this.textContent = t ?? "";
    };
  }
  function cN(e) {
    return this.tween(
      "text",
      typeof e == "function"
        ? uN(sp(this, "text", e))
        : lN(e == null ? "" : e + "")
    );
  }
  function fN(e) {
    return function (t) {
      this.textContent = e.call(this, t);
    };
  }
  function dN(e) {
    var t, n;
    function r() {
      var i = e.apply(this, arguments);
      return i !== n && (t = (n = i) && fN(i)), t;
    }
    return (r._value = e), r;
  }
  function pN(e) {
    var t = "text";
    if (arguments.length < 1) return (t = this.tween(t)) && t._value;
    if (e == null) return this.tween(t, null);
    if (typeof e != "function") throw new Error();
    return this.tween(t, dN(e));
  }
  function hN() {
    for (
      var e = this._name,
        t = this._id,
        n = _1(),
        r = this._groups,
        i = r.length,
        o = 0;
      o < i;
      ++o
    )
      for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
        if ((l = a[u])) {
          var c = Ht(l, t);
          Gl(l, e, n, u, a, {
            time: c.time + c.delay + c.duration,
            delay: 0,
            duration: c.duration,
            ease: c.ease,
          });
        }
    return new bn(r, this._parents, e, n);
  }
  function mN() {
    var e,
      t,
      n = this,
      r = n._id,
      i = n.size();
    return new Promise(function (o, a) {
      var s = { value: a },
        l = {
          value: function () {
            --i === 0 && o();
          },
        };
      n.each(function () {
        var u = an(this, r),
          c = u.on;
        c !== e &&
          ((t = (e = c).copy()),
          t._.cancel.push(s),
          t._.interrupt.push(s),
          t._.end.push(l)),
          (u.on = t);
      }),
        i === 0 && o();
    });
  }
  var vN = 0;
  function bn(e, t, n, r) {
    (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
  }
  function _1() {
    return ++vN;
  }
  var cn = Ra.prototype;
  bn.prototype = {
    constructor: bn,
    select: X2,
    selectAll: K2,
    selectChild: cn.selectChild,
    selectChildren: cn.selectChildren,
    filter: H2,
    merge: U2,
    selection: J2,
    transition: hN,
    call: cn.call,
    nodes: cn.nodes,
    node: cn.node,
    size: cn.size,
    empty: cn.empty,
    each: cn.each,
    on: W2,
    attr: N2,
    attrTween: D2,
    style: iN,
    styleTween: sN,
    text: cN,
    textTween: pN,
    remove: G2,
    tween: x2,
    delay: A2,
    duration: L2,
    ease: z2,
    easeVarying: V2,
    end: mN,
    [Symbol.iterator]: cn[Symbol.iterator],
  };
  function yN(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
  }
  var gN = { time: null, delay: 0, duration: 250, ease: yN };
  function wN(e, t) {
    for (var n; !(n = e.__transition) || !(n = n[t]); )
      if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
    return n;
  }
  function xN(e) {
    var t, n;
    e instanceof bn
      ? ((t = e._id), (e = e._name))
      : ((t = _1()), ((n = gN).time = op()), (e = e == null ? null : e + ""));
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
      for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
        (l = a[u]) && Gl(l, e, t, u, a, n || wN(l, t));
    return new bn(r, this._parents, e, t);
  }
  Ra.prototype.interrupt = y2;
  Ra.prototype.transition = xN;
  const ls = (e) => () => e;
  function bN(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
    Object.defineProperties(this, {
      type: { value: e, enumerable: !0, configurable: !0 },
      sourceEvent: { value: t, enumerable: !0, configurable: !0 },
      target: { value: n, enumerable: !0, configurable: !0 },
      transform: { value: r, enumerable: !0, configurable: !0 },
      _: { value: i },
    });
  }
  function mn(e, t, n) {
    (this.k = e), (this.x = t), (this.y = n);
  }
  mn.prototype = {
    constructor: mn,
    scale: function (e) {
      return e === 1 ? this : new mn(this.k * e, this.x, this.y);
    },
    translate: function (e, t) {
      return (e === 0) & (t === 0)
        ? this
        : new mn(this.k, this.x + this.k * e, this.y + this.k * t);
    },
    apply: function (e) {
      return [e[0] * this.k + this.x, e[1] * this.k + this.y];
    },
    applyX: function (e) {
      return e * this.k + this.x;
    },
    applyY: function (e) {
      return e * this.k + this.y;
    },
    invert: function (e) {
      return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
    },
    invertX: function (e) {
      return (e - this.x) / this.k;
    },
    invertY: function (e) {
      return (e - this.y) / this.k;
    },
    rescaleX: function (e) {
      return e
        .copy()
        .domain(e.range().map(this.invertX, this).map(e.invert, e));
    },
    rescaleY: function (e) {
      return e
        .copy()
        .domain(e.range().map(this.invertY, this).map(e.invert, e));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  var Zn = new mn(1, 0, 0);
  mn.prototype;
  function qu(e) {
    e.stopImmediatePropagation();
  }
  function xo(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function SN(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button;
  }
  function EN() {
    var e = this;
    return e instanceof SVGElement
      ? ((e = e.ownerSVGElement || e),
        e.hasAttribute("viewBox")
          ? ((e = e.viewBox.baseVal),
            [
              [e.x, e.y],
              [e.x + e.width, e.y + e.height],
            ])
          : [
              [0, 0],
              [e.width.baseVal.value, e.height.baseVal.value],
            ])
      : [
          [0, 0],
          [e.clientWidth, e.clientHeight],
        ];
  }
  function jm() {
    return this.__zoom || Zn;
  }
  function _N(e) {
    return (
      -e.deltaY *
      (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
      (e.ctrlKey ? 10 : 1)
    );
  }
  function CN() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function kN(e, t, n) {
    var r = e.invertX(t[0][0]) - n[0][0],
      i = e.invertX(t[1][0]) - n[1][0],
      o = e.invertY(t[0][1]) - n[0][1],
      a = e.invertY(t[1][1]) - n[1][1];
    return e.translate(
      i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
      a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
    );
  }
  function NN() {
    var e = SN,
      t = EN,
      n = kN,
      r = _N,
      i = CN,
      o = [0, 1 / 0],
      a = [
        [-1 / 0, -1 / 0],
        [1 / 0, 1 / 0],
      ],
      s = 250,
      l = u2,
      u = ql("start", "zoom", "end"),
      c,
      f,
      d,
      p = 500,
      g = 150,
      y = 0,
      b = 10;
    function m(k) {
      k.property("__zoom", jm)
        .on("wheel.zoom", N, { passive: !1 })
        .on("mousedown.zoom", M)
        .on("dblclick.zoom", P)
        .filter(i)
        .on("touchstart.zoom", L)
        .on("touchmove.zoom", B)
        .on("touchend.zoom touchcancel.zoom", D)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    (m.transform = function (k, j, R, T) {
      var O = k.selection ? k.selection() : k;
      O.property("__zoom", jm),
        k !== O
          ? E(k, j, R, T)
          : O.interrupt().each(function () {
              _(this, arguments)
                .event(T)
                .start()
                .zoom(
                  null,
                  typeof j == "function" ? j.apply(this, arguments) : j
                )
                .end();
            });
    }),
      (m.scaleBy = function (k, j, R, T) {
        m.scaleTo(
          k,
          function () {
            var O = this.__zoom.k,
              A = typeof j == "function" ? j.apply(this, arguments) : j;
            return O * A;
          },
          R,
          T
        );
      }),
      (m.scaleTo = function (k, j, R, T) {
        m.transform(
          k,
          function () {
            var O = t.apply(this, arguments),
              A = this.__zoom,
              I =
                R == null
                  ? x(O)
                  : typeof R == "function"
                  ? R.apply(this, arguments)
                  : R,
              V = A.invert(I),
              z = typeof j == "function" ? j.apply(this, arguments) : j;
            return n(v(h(A, z), I, V), O, a);
          },
          R,
          T
        );
      }),
      (m.translateBy = function (k, j, R, T) {
        m.transform(
          k,
          function () {
            return n(
              this.__zoom.translate(
                typeof j == "function" ? j.apply(this, arguments) : j,
                typeof R == "function" ? R.apply(this, arguments) : R
              ),
              t.apply(this, arguments),
              a
            );
          },
          null,
          T
        );
      }),
      (m.translateTo = function (k, j, R, T, O) {
        m.transform(
          k,
          function () {
            var A = t.apply(this, arguments),
              I = this.__zoom,
              V =
                T == null
                  ? x(A)
                  : typeof T == "function"
                  ? T.apply(this, arguments)
                  : T;
            return n(
              Zn.translate(V[0], V[1])
                .scale(I.k)
                .translate(
                  typeof j == "function" ? -j.apply(this, arguments) : -j,
                  typeof R == "function" ? -R.apply(this, arguments) : -R
                ),
              A,
              a
            );
          },
          T,
          O
        );
      });
    function h(k, j) {
      return (
        (j = Math.max(o[0], Math.min(o[1], j))),
        j === k.k ? k : new mn(j, k.x, k.y)
      );
    }
    function v(k, j, R) {
      var T = j[0] - R[0] * k.k,
        O = j[1] - R[1] * k.k;
      return T === k.x && O === k.y ? k : new mn(k.k, T, O);
    }
    function x(k) {
      return [(+k[0][0] + +k[1][0]) / 2, (+k[0][1] + +k[1][1]) / 2];
    }
    function E(k, j, R, T) {
      k.on("start.zoom", function () {
        _(this, arguments).event(T).start();
      })
        .on("interrupt.zoom end.zoom", function () {
          _(this, arguments).event(T).end();
        })
        .tween("zoom", function () {
          var O = this,
            A = arguments,
            I = _(O, A).event(T),
            V = t.apply(O, A),
            z = R == null ? x(V) : typeof R == "function" ? R.apply(O, A) : R,
            Y = Math.max(V[1][0] - V[0][0], V[1][1] - V[0][1]),
            U = O.__zoom,
            X = typeof j == "function" ? j.apply(O, A) : j,
            K = l(U.invert(z).concat(Y / U.k), X.invert(z).concat(Y / X.k));
          return function (J) {
            if (J === 1) J = X;
            else {
              var ne = K(J),
                he = Y / ne[2];
              J = new mn(he, z[0] - ne[0] * he, z[1] - ne[1] * he);
            }
            I.zoom(null, J);
          };
        });
    }
    function _(k, j, R) {
      return (!R && k.__zooming) || new C(k, j);
    }
    function C(k, j) {
      (this.that = k),
        (this.args = j),
        (this.active = 0),
        (this.sourceEvent = null),
        (this.extent = t.apply(k, j)),
        (this.taps = 0);
    }
    C.prototype = {
      event: function (k) {
        return k && (this.sourceEvent = k), this;
      },
      start: function () {
        return (
          ++this.active === 1 &&
            ((this.that.__zooming = this), this.emit("start")),
          this
        );
      },
      zoom: function (k, j) {
        return (
          this.mouse &&
            k !== "mouse" &&
            (this.mouse[1] = j.invert(this.mouse[0])),
          this.touch0 &&
            k !== "touch" &&
            (this.touch0[1] = j.invert(this.touch0[0])),
          this.touch1 &&
            k !== "touch" &&
            (this.touch1[1] = j.invert(this.touch1[0])),
          (this.that.__zoom = j),
          this.emit("zoom"),
          this
        );
      },
      end: function () {
        return (
          --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
          this
        );
      },
      emit: function (k) {
        var j = Ft(this.that).datum();
        u.call(
          k,
          this.that,
          new bN(k, {
            sourceEvent: this.sourceEvent,
            target: m,
            type: k,
            transform: this.that.__zoom,
            dispatch: u,
          }),
          j
        );
      },
    };
    function N(k, ...j) {
      if (!e.apply(this, arguments)) return;
      var R = _(this, j).event(k),
        T = this.__zoom,
        O = Math.max(
          o[0],
          Math.min(o[1], T.k * Math.pow(2, r.apply(this, arguments)))
        ),
        A = Kt(k);
      if (R.wheel)
        (R.mouse[0][0] !== A[0] || R.mouse[0][1] !== A[1]) &&
          (R.mouse[1] = T.invert((R.mouse[0] = A))),
          clearTimeout(R.wheel);
      else {
        if (T.k === O) return;
        (R.mouse = [A, T.invert(A)]), Ms(this), R.start();
      }
      xo(k),
        (R.wheel = setTimeout(I, g)),
        R.zoom("mouse", n(v(h(T, O), R.mouse[0], R.mouse[1]), R.extent, a));
      function I() {
        (R.wheel = null), R.end();
      }
    }
    function M(k, ...j) {
      if (d || !e.apply(this, arguments)) return;
      var R = k.currentTarget,
        T = _(this, j, !0).event(k),
        O = Ft(k.view).on("mousemove.zoom", z, !0).on("mouseup.zoom", Y, !0),
        A = Kt(k, R),
        I = k.clientX,
        V = k.clientY;
      c1(k.view),
        qu(k),
        (T.mouse = [A, this.__zoom.invert(A)]),
        Ms(this),
        T.start();
      function z(U) {
        if ((xo(U), !T.moved)) {
          var X = U.clientX - I,
            K = U.clientY - V;
          T.moved = X * X + K * K > y;
        }
        T.event(U).zoom(
          "mouse",
          n(v(T.that.__zoom, (T.mouse[0] = Kt(U, R)), T.mouse[1]), T.extent, a)
        );
      }
      function Y(U) {
        O.on("mousemove.zoom mouseup.zoom", null),
          f1(U.view, T.moved),
          xo(U),
          T.event(U).end();
      }
    }
    function P(k, ...j) {
      if (e.apply(this, arguments)) {
        var R = this.__zoom,
          T = Kt(k.changedTouches ? k.changedTouches[0] : k, this),
          O = R.invert(T),
          A = R.k * (k.shiftKey ? 0.5 : 2),
          I = n(v(h(R, A), T, O), t.apply(this, j), a);
        xo(k),
          s > 0
            ? Ft(this).transition().duration(s).call(E, I, T, k)
            : Ft(this).call(m.transform, I, T, k);
      }
    }
    function L(k, ...j) {
      if (e.apply(this, arguments)) {
        var R = k.touches,
          T = R.length,
          O = _(this, j, k.changedTouches.length === T).event(k),
          A,
          I,
          V,
          z;
        for (qu(k), I = 0; I < T; ++I)
          (V = R[I]),
            (z = Kt(V, this)),
            (z = [z, this.__zoom.invert(z), V.identifier]),
            O.touch0
              ? !O.touch1 &&
                O.touch0[2] !== z[2] &&
                ((O.touch1 = z), (O.taps = 0))
              : ((O.touch0 = z), (A = !0), (O.taps = 1 + !!c));
        c && (c = clearTimeout(c)),
          A &&
            (O.taps < 2 &&
              ((f = z[0]),
              (c = setTimeout(function () {
                c = null;
              }, p))),
            Ms(this),
            O.start());
      }
    }
    function B(k, ...j) {
      if (this.__zooming) {
        var R = _(this, j).event(k),
          T = k.changedTouches,
          O = T.length,
          A,
          I,
          V,
          z;
        for (xo(k), A = 0; A < O; ++A)
          (I = T[A]),
            (V = Kt(I, this)),
            R.touch0 && R.touch0[2] === I.identifier
              ? (R.touch0[0] = V)
              : R.touch1 && R.touch1[2] === I.identifier && (R.touch1[0] = V);
        if (((I = R.that.__zoom), R.touch1)) {
          var Y = R.touch0[0],
            U = R.touch0[1],
            X = R.touch1[0],
            K = R.touch1[1],
            J = (J = X[0] - Y[0]) * J + (J = X[1] - Y[1]) * J,
            ne = (ne = K[0] - U[0]) * ne + (ne = K[1] - U[1]) * ne;
          (I = h(I, Math.sqrt(J / ne))),
            (V = [(Y[0] + X[0]) / 2, (Y[1] + X[1]) / 2]),
            (z = [(U[0] + K[0]) / 2, (U[1] + K[1]) / 2]);
        } else if (R.touch0) (V = R.touch0[0]), (z = R.touch0[1]);
        else return;
        R.zoom("touch", n(v(I, V, z), R.extent, a));
      }
    }
    function D(k, ...j) {
      if (this.__zooming) {
        var R = _(this, j).event(k),
          T = k.changedTouches,
          O = T.length,
          A,
          I;
        for (
          qu(k),
            d && clearTimeout(d),
            d = setTimeout(function () {
              d = null;
            }, p),
            A = 0;
          A < O;
          ++A
        )
          (I = T[A]),
            R.touch0 && R.touch0[2] === I.identifier
              ? delete R.touch0
              : R.touch1 && R.touch1[2] === I.identifier && delete R.touch1;
        if (
          (R.touch1 && !R.touch0 && ((R.touch0 = R.touch1), delete R.touch1),
          R.touch0)
        )
          R.touch0[1] = this.__zoom.invert(R.touch0[0]);
        else if (
          (R.end(),
          R.taps === 2 &&
            ((I = Kt(I, this)), Math.hypot(f[0] - I[0], f[1] - I[1]) < b))
        ) {
          var V = Ft(this).on("dblclick.zoom");
          V && V.apply(this, arguments);
        }
      }
    }
    return (
      (m.wheelDelta = function (k) {
        return arguments.length
          ? ((r = typeof k == "function" ? k : ls(+k)), m)
          : r;
      }),
      (m.filter = function (k) {
        return arguments.length
          ? ((e = typeof k == "function" ? k : ls(!!k)), m)
          : e;
      }),
      (m.touchable = function (k) {
        return arguments.length
          ? ((i = typeof k == "function" ? k : ls(!!k)), m)
          : i;
      }),
      (m.extent = function (k) {
        return arguments.length
          ? ((t =
              typeof k == "function"
                ? k
                : ls([
                    [+k[0][0], +k[0][1]],
                    [+k[1][0], +k[1][1]],
                  ])),
            m)
          : t;
      }),
      (m.scaleExtent = function (k) {
        return arguments.length
          ? ((o[0] = +k[0]), (o[1] = +k[1]), m)
          : [o[0], o[1]];
      }),
      (m.translateExtent = function (k) {
        return arguments.length
          ? ((a[0][0] = +k[0][0]),
            (a[1][0] = +k[1][0]),
            (a[0][1] = +k[0][1]),
            (a[1][1] = +k[1][1]),
            m)
          : [
              [a[0][0], a[0][1]],
              [a[1][0], a[1][1]],
            ];
      }),
      (m.constrain = function (k) {
        return arguments.length ? ((n = k), m) : n;
      }),
      (m.duration = function (k) {
        return arguments.length ? ((s = +k), m) : s;
      }),
      (m.interpolate = function (k) {
        return arguments.length ? ((l = k), m) : l;
      }),
      (m.on = function () {
        var k = u.on.apply(u, arguments);
        return k === u ? m : k;
      }),
      (m.clickDistance = function (k) {
        return arguments.length ? ((y = (k = +k) * k), m) : Math.sqrt(y);
      }),
      (m.tapDistance = function (k) {
        return arguments.length ? ((b = +k), m) : b;
      }),
      m
    );
  }
  const Xl = S.createContext(null),
    ON = Xl.Provider,
    nr = {
      error001: () =>
        "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
      error002: () =>
        "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
      error003: (e) =>
        `Node type "${e}" not found. Using fallback type "default".`,
      error004: () =>
        "The React Flow parent container needs a width and a height to render the graph.",
      error005: () => "Only child nodes can use a parent extent.",
      error006: () => "Can't create edge. An edge needs a source and a target.",
      error007: (e) => `The old edge with id=${e} does not exist.`,
      error009: (e) => `Marker type "${e}" doesn't exist.`,
      error008: (e, t) =>
        `Couldn't create edge for ${e ? "target" : "source"} handle id: "${
          e ? t.targetHandle : t.sourceHandle
        }", edge id: ${t.id}.`,
      error010: () =>
        "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
      error011: (e) =>
        `Edge type "${e}" not found. Using fallback type "default".`,
    },
    C1 = nr.error001();
  function ce(e, t) {
    const n = S.useContext(Xl);
    if (n === null) throw new Error(C1);
    return G_(n, e, t);
  }
  const Be = () => {
      const e = S.useContext(Xl);
      if (e === null) throw new Error(C1);
      return S.useMemo(
        () => ({
          getState: e.getState,
          setState: e.setState,
          subscribe: e.subscribe,
          destroy: e.destroy,
        }),
        [e]
      );
    },
    PN = (e) => (e.userSelectionActive ? "none" : "all");
  function lp({ position: e, children: t, className: n, style: r, ...i }) {
    const o = ce(PN),
      a = `${e}`.split("-");
    return w.jsx("div", {
      className: Xe(["react-flow__panel", n, ...a]),
      style: { ...r, pointerEvents: o },
      ...i,
      children: t,
    });
  }
  function TN({ proOptions: e, position: t = "bottom-right" }) {
    return e != null && e.hideAttribution
      ? null
      : w.jsx(lp, {
          "position": t,
          "className": "react-flow__attribution",
          "data-message":
            "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
          "children": w.jsx("a", {
            "href": "https://reactflow.dev",
            "target": "_blank",
            "rel": "noopener noreferrer",
            "aria-label": "React Flow attribution",
            "children": "React Flow",
          }),
        });
  }
  const MN = ({
    x: e,
    y: t,
    label: n,
    labelStyle: r = {},
    labelShowBg: i = !0,
    labelBgStyle: o = {},
    labelBgPadding: a = [2, 4],
    labelBgBorderRadius: s = 2,
    children: l,
    className: u,
    ...c
  }) => {
    const f = S.useRef(null),
      [d, p] = S.useState({ x: 0, y: 0, width: 0, height: 0 }),
      g = Xe(["react-flow__edge-textwrapper", u]);
    return (
      S.useEffect(() => {
        if (f.current) {
          const y = f.current.getBBox();
          p({ x: y.x, y: y.y, width: y.width, height: y.height });
        }
      }, [n]),
      typeof n > "u" || !n
        ? null
        : w.jsxs("g", {
            transform: `translate(${e - d.width / 2} ${t - d.height / 2})`,
            className: g,
            visibility: d.width ? "visible" : "hidden",
            ...c,
            children: [
              i &&
                w.jsx("rect", {
                  width: d.width + 2 * a[0],
                  x: -a[0],
                  y: -a[1],
                  height: d.height + 2 * a[1],
                  className: "react-flow__edge-textbg",
                  style: o,
                  rx: s,
                  ry: s,
                }),
              w.jsx("text", {
                className: "react-flow__edge-text",
                y: d.height / 2,
                dy: "0.3em",
                ref: f,
                style: r,
                children: n,
              }),
              l,
            ],
          })
    );
  };
  var DN = S.memo(MN);
  const up = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
    Ui = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
    cp = (e = { x: 0, y: 0 }, t) => ({
      x: Ui(e.x, t[0][0], t[1][0]),
      y: Ui(e.y, t[0][1], t[1][1]),
    }),
    Am = (e, t, n) =>
      e < t
        ? Ui(Math.abs(e - t), 1, 50) / 50
        : e > n
        ? -Ui(Math.abs(e - n), 1, 50) / 50
        : 0,
    k1 = (e, t) => {
      const n = Am(e.x, 35, t.width - 35) * 20,
        r = Am(e.y, 35, t.height - 35) * 20;
      return [n, r];
    },
    N1 = (e) => {
      var t;
      return (
        ((t = e.getRootNode) == null ? void 0 : t.call(e)) ||
        (window == null ? void 0 : window.document)
      );
    },
    RN = (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      x2: Math.max(e.x2, t.x2),
      y2: Math.max(e.y2, t.y2),
    }),
    O1 = ({ x: e, y: t, width: n, height: r }) => ({
      x: e,
      y: t,
      x2: e + n,
      y2: t + r,
    }),
    jN = ({ x: e, y: t, x2: n, y2: r }) => ({
      x: e,
      y: t,
      width: n - e,
      height: r - t,
    }),
    Im = (e) => ({
      ...(e.positionAbsolute || { x: 0, y: 0 }),
      width: e.width || 0,
      height: e.height || 0,
    }),
    wf = (e, t) => {
      const n = Math.max(
          0,
          Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)
        ),
        r = Math.max(
          0,
          Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y)
        );
      return Math.ceil(n * r);
    },
    AN = (e) => _t(e.width) && _t(e.height) && _t(e.x) && _t(e.y),
    _t = (e) => !isNaN(e) && isFinite(e),
    Pe = Symbol.for("internals"),
    P1 = ["Enter", " ", "Escape"],
    IN = (e, t) => {},
    FN = (e) => "nativeEvent" in e;
  function xf(e) {
    var i, o;
    const t = FN(e) ? e.nativeEvent : e,
      n =
        ((o = (i = t.composedPath) == null ? void 0 : i.call(t)) == null
          ? void 0
          : o[0]) || e.target;
    return (
      ["INPUT", "SELECT", "TEXTAREA"].includes(
        n == null ? void 0 : n.nodeName
      ) ||
      (n == null ? void 0 : n.hasAttribute("contenteditable")) ||
      !!(n != null && n.closest(".nokey"))
    );
  }
  const T1 = (e) => "clientX" in e,
    Jn = (e, t) => {
      var o, a;
      const n = T1(e),
        r = n ? e.clientX : (o = e.touches) == null ? void 0 : o[0].clientX,
        i = n ? e.clientY : (a = e.touches) == null ? void 0 : a[0].clientY;
      return {
        x: r - ((t == null ? void 0 : t.left) ?? 0),
        y: i - ((t == null ? void 0 : t.top) ?? 0),
      };
    },
    oo = ({
      id: e,
      path: t,
      labelX: n,
      labelY: r,
      label: i,
      labelStyle: o,
      labelShowBg: a,
      labelBgStyle: s,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      markerEnd: f,
      markerStart: d,
      interactionWidth: p = 20,
    }) =>
      w.jsxs(w.Fragment, {
        children: [
          w.jsx("path", {
            id: e,
            style: c,
            d: t,
            fill: "none",
            className: "react-flow__edge-path",
            markerEnd: f,
            markerStart: d,
          }),
          p &&
            w.jsx("path", {
              d: t,
              fill: "none",
              strokeOpacity: 0,
              strokeWidth: p,
              className: "react-flow__edge-interaction",
            }),
          i && _t(n) && _t(r)
            ? w.jsx(DN, {
                x: n,
                y: r,
                label: i,
                labelStyle: o,
                labelShowBg: a,
                labelBgStyle: s,
                labelBgPadding: l,
                labelBgBorderRadius: u,
              })
            : null,
        ],
      });
  oo.displayName = "BaseEdge";
  function bo(e, t, n) {
    return n === void 0
      ? n
      : (r) => {
          const i = t().edges.find((o) => o.id === e);
          i && n(r, { ...i });
        };
  }
  function M1({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const i = Math.abs(n - e) / 2,
      o = n < e ? n + i : n - i,
      a = Math.abs(r - t) / 2,
      s = r < t ? r + a : r - a;
    return [o, s, i, a];
  }
  function D1({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r,
    sourceControlX: i,
    sourceControlY: o,
    targetControlX: a,
    targetControlY: s,
  }) {
    const l = e * 0.125 + i * 0.375 + a * 0.375 + n * 0.125,
      u = t * 0.125 + o * 0.375 + s * 0.375 + r * 0.125,
      c = Math.abs(l - e),
      f = Math.abs(u - t);
    return [l, u, c, f];
  }
  var Br;
  (function (e) {
    (e.Strict = "strict"), (e.Loose = "loose");
  })(Br || (Br = {}));
  var Oi;
  (function (e) {
    (e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal");
  })(Oi || (Oi = {}));
  var Qi;
  (function (e) {
    (e.Partial = "partial"), (e.Full = "full");
  })(Qi || (Qi = {}));
  var zn;
  (function (e) {
    (e.Bezier = "default"),
      (e.Straight = "straight"),
      (e.Step = "step"),
      (e.SmoothStep = "smoothstep"),
      (e.SimpleBezier = "simplebezier");
  })(zn || (zn = {}));
  var xa;
  (function (e) {
    (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
  })(xa || (xa = {}));
  var W;
  (function (e) {
    (e.Left = "left"),
      (e.Top = "top"),
      (e.Right = "right"),
      (e.Bottom = "bottom");
  })(W || (W = {}));
  function Fm({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
    return e === W.Left || e === W.Right
      ? [0.5 * (t + r), n]
      : [t, 0.5 * (n + i)];
  }
  function R1({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
  }) {
    const [a, s] = Fm({ pos: n, x1: e, y1: t, x2: r, y2: i }),
      [l, u] = Fm({ pos: o, x1: r, y1: i, x2: e, y2: t }),
      [c, f, d, p] = D1({
        sourceX: e,
        sourceY: t,
        targetX: r,
        targetY: i,
        sourceControlX: a,
        sourceControlY: s,
        targetControlX: l,
        targetControlY: u,
      });
    return [`M${e},${t} C${a},${s} ${l},${u} ${r},${i}`, c, f, d, p];
  }
  const fp = S.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      sourcePosition: i = W.Bottom,
      targetPosition: o = W.Top,
      label: a,
      labelStyle: s,
      labelShowBg: l,
      labelBgStyle: u,
      labelBgPadding: c,
      labelBgBorderRadius: f,
      style: d,
      markerEnd: p,
      markerStart: g,
      interactionWidth: y,
    }) => {
      const [b, m, h] = R1({
        sourceX: e,
        sourceY: t,
        sourcePosition: i,
        targetX: n,
        targetY: r,
        targetPosition: o,
      });
      return w.jsx(oo, {
        path: b,
        labelX: m,
        labelY: h,
        label: a,
        labelStyle: s,
        labelShowBg: l,
        labelBgStyle: u,
        labelBgPadding: c,
        labelBgBorderRadius: f,
        style: d,
        markerEnd: p,
        markerStart: g,
        interactionWidth: y,
      });
    }
  );
  fp.displayName = "SimpleBezierEdge";
  const Lm = {
      [W.Left]: { x: -1, y: 0 },
      [W.Right]: { x: 1, y: 0 },
      [W.Top]: { x: 0, y: -1 },
      [W.Bottom]: { x: 0, y: 1 },
    },
    LN = ({ source: e, sourcePosition: t = W.Bottom, target: n }) =>
      t === W.Left || t === W.Right
        ? e.x < n.x
          ? { x: 1, y: 0 }
          : { x: -1, y: 0 }
        : e.y < n.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
    Bm = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  function BN({
    source: e,
    sourcePosition: t = W.Bottom,
    target: n,
    targetPosition: r = W.Top,
    center: i,
    offset: o,
  }) {
    const a = Lm[t],
      s = Lm[r],
      l = { x: e.x + a.x * o, y: e.y + a.y * o },
      u = { x: n.x + s.x * o, y: n.y + s.y * o },
      c = LN({ source: l, sourcePosition: t, target: u }),
      f = c.x !== 0 ? "x" : "y",
      d = c[f];
    let p = [],
      g,
      y;
    const [b, m, h, v] = M1({
      sourceX: e.x,
      sourceY: e.y,
      targetX: n.x,
      targetY: n.y,
    });
    if (a[f] * s[f] === -1) {
      (g = i.x || b), (y = i.y || m);
      const E = [
          { x: g, y: l.y },
          { x: g, y: u.y },
        ],
        _ = [
          { x: l.x, y },
          { x: u.x, y },
        ];
      a[f] === d ? (p = f === "x" ? E : _) : (p = f === "x" ? _ : E);
    } else {
      const E = [{ x: l.x, y: u.y }],
        _ = [{ x: u.x, y: l.y }];
      if (
        (f === "x" ? (p = a.x === d ? _ : E) : (p = a.y === d ? E : _), t !== r)
      ) {
        const C = f === "x" ? "y" : "x",
          N = a[f] === s[C],
          M = l[C] > u[C],
          P = l[C] < u[C];
        ((a[f] === 1 && ((!N && M) || (N && P))) ||
          (a[f] !== 1 && ((!N && P) || (N && M)))) &&
          (p = f === "x" ? E : _);
      }
      (g = p[0].x), (y = p[0].y);
    }
    return [[e, l, ...p, u, n], g, y, h, v];
  }
  function zN(e, t, n, r) {
    const i = Math.min(Bm(e, t) / 2, Bm(t, n) / 2, r),
      { x: o, y: a } = t;
    if ((e.x === o && o === n.x) || (e.y === a && a === n.y))
      return `L${o} ${a}`;
    if (e.y === a) {
      const u = e.x < n.x ? -1 : 1,
        c = e.y < n.y ? 1 : -1;
      return `L ${o + i * u},${a}Q ${o},${a} ${o},${a + i * c}`;
    }
    const s = e.x < n.x ? 1 : -1,
      l = e.y < n.y ? -1 : 1;
    return `L ${o},${a + i * l}Q ${o},${a} ${o + i * s},${a}`;
  }
  function bf({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
    borderRadius: a = 5,
    centerX: s,
    centerY: l,
    offset: u = 20,
  }) {
    const [c, f, d, p, g] = BN({
      source: { x: e, y: t },
      sourcePosition: n,
      target: { x: r, y: i },
      targetPosition: o,
      center: { x: s, y: l },
      offset: u,
    });
    return [
      c.reduce((b, m, h) => {
        let v = "";
        return (
          h > 0 && h < c.length - 1
            ? (v = zN(c[h - 1], m, c[h + 1], a))
            : (v = `${h === 0 ? "M" : "L"}${m.x} ${m.y}`),
          (b += v),
          b
        );
      }, ""),
      f,
      d,
      p,
      g,
    ];
  }
  const Kl = S.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      label: i,
      labelStyle: o,
      labelShowBg: a,
      labelBgStyle: s,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      sourcePosition: f = W.Bottom,
      targetPosition: d = W.Top,
      markerEnd: p,
      markerStart: g,
      pathOptions: y,
      interactionWidth: b,
    }) => {
      const [m, h, v] = bf({
        sourceX: e,
        sourceY: t,
        sourcePosition: f,
        targetX: n,
        targetY: r,
        targetPosition: d,
        borderRadius: y == null ? void 0 : y.borderRadius,
        offset: y == null ? void 0 : y.offset,
      });
      return w.jsx(oo, {
        path: m,
        labelX: h,
        labelY: v,
        label: i,
        labelStyle: o,
        labelShowBg: a,
        labelBgStyle: s,
        labelBgPadding: l,
        labelBgBorderRadius: u,
        style: c,
        markerEnd: p,
        markerStart: g,
        interactionWidth: b,
      });
    }
  );
  Kl.displayName = "SmoothStepEdge";
  const dp = S.memo((e) => {
    var t;
    return w.jsx(Kl, {
      ...e,
      pathOptions: S.useMemo(() => {
        var n;
        return {
          borderRadius: 0,
          offset: (n = e.pathOptions) == null ? void 0 : n.offset,
        };
      }, [(t = e.pathOptions) == null ? void 0 : t.offset]),
    });
  });
  dp.displayName = "StepEdge";
  function $N({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
    const [i, o, a, s] = M1({ sourceX: e, sourceY: t, targetX: n, targetY: r });
    return [`M ${e},${t}L ${n},${r}`, i, o, a, s];
  }
  const pp = S.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      label: i,
      labelStyle: o,
      labelShowBg: a,
      labelBgStyle: s,
      labelBgPadding: l,
      labelBgBorderRadius: u,
      style: c,
      markerEnd: f,
      markerStart: d,
      interactionWidth: p,
    }) => {
      const [g, y, b] = $N({ sourceX: e, sourceY: t, targetX: n, targetY: r });
      return w.jsx(oo, {
        path: g,
        labelX: y,
        labelY: b,
        label: i,
        labelStyle: o,
        labelShowBg: a,
        labelBgStyle: s,
        labelBgPadding: l,
        labelBgBorderRadius: u,
        style: c,
        markerEnd: f,
        markerStart: d,
        interactionWidth: p,
      });
    }
  );
  pp.displayName = "StraightEdge";
  function us(e, t) {
    return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
  }
  function zm({ pos: e, x1: t, y1: n, x2: r, y2: i, c: o }) {
    switch (e) {
      case W.Left:
        return [t - us(t - r, o), n];
      case W.Right:
        return [t + us(r - t, o), n];
      case W.Top:
        return [t, n - us(n - i, o)];
      case W.Bottom:
        return [t, n + us(i - n, o)];
    }
  }
  function Zl({
    sourceX: e,
    sourceY: t,
    sourcePosition: n = W.Bottom,
    targetX: r,
    targetY: i,
    targetPosition: o = W.Top,
    curvature: a = 0.25,
  }) {
    const [s, l] = zm({ pos: n, x1: e, y1: t, x2: r, y2: i, c: a }),
      [u, c] = zm({ pos: o, x1: r, y1: i, x2: e, y2: t, c: a }),
      [f, d, p, g] = D1({
        sourceX: e,
        sourceY: t,
        targetX: r,
        targetY: i,
        sourceControlX: s,
        sourceControlY: l,
        targetControlX: u,
        targetControlY: c,
      });
    return [`M${e},${t} C${s},${l} ${u},${c} ${r},${i}`, f, d, p, g];
  }
  const gl = S.memo(
    ({
      sourceX: e,
      sourceY: t,
      targetX: n,
      targetY: r,
      sourcePosition: i = W.Bottom,
      targetPosition: o = W.Top,
      label: a,
      labelStyle: s,
      labelShowBg: l,
      labelBgStyle: u,
      labelBgPadding: c,
      labelBgBorderRadius: f,
      style: d,
      markerEnd: p,
      markerStart: g,
      pathOptions: y,
      interactionWidth: b,
    }) => {
      const [m, h, v] = Zl({
        sourceX: e,
        sourceY: t,
        sourcePosition: i,
        targetX: n,
        targetY: r,
        targetPosition: o,
        curvature: y == null ? void 0 : y.curvature,
      });
      return w.jsx(oo, {
        path: m,
        labelX: h,
        labelY: v,
        label: a,
        labelStyle: s,
        labelShowBg: l,
        labelBgStyle: u,
        labelBgPadding: c,
        labelBgBorderRadius: f,
        style: d,
        markerEnd: p,
        markerStart: g,
        interactionWidth: b,
      });
    }
  );
  gl.displayName = "BezierEdge";
  const hp = S.createContext(null),
    VN = hp.Provider;
  hp.Consumer;
  const HN = () => S.useContext(hp),
    UN = (e) => "id" in e && "source" in e && "target" in e,
    QN = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
      `reactflow__edge-${e}${t || ""}-${n}${r || ""}`,
    Sf = (e, t) =>
      typeof e > "u"
        ? ""
        : typeof e == "string"
        ? e
        : `${t ? `${t}__` : ""}${Object.keys(e)
            .sort()
            .map((r) => `${r}=${e[r]}`)
            .join("&")}`,
    qN = (e, t) =>
      t.some(
        (n) =>
          n.source === e.source &&
          n.target === e.target &&
          (n.sourceHandle === e.sourceHandle ||
            (!n.sourceHandle && !e.sourceHandle)) &&
          (n.targetHandle === e.targetHandle ||
            (!n.targetHandle && !e.targetHandle))
      ),
    j1 = (e, t) => {
      if (!e.source || !e.target) return t;
      let n;
      return (
        UN(e) ? (n = { ...e }) : (n = { ...e, id: QN(e) }),
        qN(n, t) ? t : t.concat(n)
      );
    },
    A1 = ({ x: e, y: t }, [n, r, i], o, [a, s]) => {
      const l = { x: (e - n) / i, y: (t - r) / i };
      return o ? { x: a * Math.round(l.x / a), y: s * Math.round(l.y / s) } : l;
    },
    WN = ({ x: e, y: t }, [n, r, i]) => ({ x: e * i + n, y: t * i + r }),
    Pi = (e, t = [0, 0]) => {
      if (!e) return { x: 0, y: 0, positionAbsolute: { x: 0, y: 0 } };
      const n = (e.width ?? 0) * t[0],
        r = (e.height ?? 0) * t[1],
        i = { x: e.position.x - n, y: e.position.y - r };
      return {
        ...i,
        positionAbsolute: e.positionAbsolute
          ? { x: e.positionAbsolute.x - n, y: e.positionAbsolute.y - r }
          : i,
      };
    },
    I1 = (e, t = [0, 0]) => {
      if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
      const n = e.reduce(
        (r, i) => {
          const { x: o, y: a } = Pi(i, t).positionAbsolute;
          return RN(
            r,
            O1({ x: o, y: a, width: i.width || 0, height: i.height || 0 })
          );
        },
        { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }
      );
      return jN(n);
    },
    F1 = (e, t, [n, r, i] = [0, 0, 1], o = !1, a = !1, s = [0, 0]) => {
      const l = {
          x: (t.x - n) / i,
          y: (t.y - r) / i,
          width: t.width / i,
          height: t.height / i,
        },
        u = [];
      return (
        e.forEach((c) => {
          const { width: f, height: d, selectable: p = !0, hidden: g = !1 } = c;
          if ((a && !p) || g) return !1;
          const { positionAbsolute: y } = Pi(c, s),
            b = { x: y.x, y: y.y, width: f || 0, height: d || 0 },
            m = wf(l, b),
            h = typeof f > "u" || typeof d > "u" || f === null || d === null,
            v = o && m > 0,
            x = (f || 0) * (d || 0);
          (h || v || m >= x || c.dragging) && u.push(c);
        }),
        u
      );
    },
    L1 = (e, t) => {
      const n = e.map((r) => r.id);
      return t.filter((r) => n.includes(r.source) || n.includes(r.target));
    },
    B1 = (e, t, n, r, i, o = 0.1) => {
      const a = t / (e.width * (1 + o)),
        s = n / (e.height * (1 + o)),
        l = Math.min(a, s),
        u = Ui(l, r, i),
        c = e.x + e.width / 2,
        f = e.y + e.height / 2,
        d = t / 2 - c * u,
        p = n / 2 - f * u;
      return [d, p, u];
    },
    wr = (e, t = 0) => e.transition().duration(t);
  function $m(e, t, n, r) {
    return (t[n] || []).reduce((i, o) => {
      var a, s;
      return (
        `${e.id}-${o.id}-${n}` !== r &&
          i.push({
            id: o.id || null,
            type: n,
            nodeId: e.id,
            x:
              (((a = e.positionAbsolute) == null ? void 0 : a.x) ?? 0) +
              o.x +
              o.width / 2,
            y:
              (((s = e.positionAbsolute) == null ? void 0 : s.y) ?? 0) +
              o.y +
              o.height / 2,
          }),
        i
      );
    }, []);
  }
  function YN(e, t, n) {
    let r = [],
      i = 1 / 0;
    return (
      n.forEach((o) => {
        const a = Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2));
        a <= t && (a < i ? (r = [o]) : a === i && r.push(o), (i = a));
      }),
      r.length
        ? r.length === 1
          ? r[0]
          : r.find((o) => o.type === "target") || r[0]
        : null
    );
  }
  const GN = {
    source: null,
    target: null,
    sourceHandle: null,
    targetHandle: null,
  };
  function z1(e, t, n, r, i, o, a, s) {
    const l = o === "target",
      u = s.querySelector(
        `.react-flow__handle[data-id="${t == null ? void 0 : t.nodeId}-${
          t == null ? void 0 : t.id
        }-${t == null ? void 0 : t.type}"]`
      ),
      { x: c, y: f } = Jn(e),
      d = s.elementFromPoint(c, f),
      p = d != null && d.classList.contains("react-flow__handle") ? d : u,
      g = { handleDomNode: p, isValid: !1, connection: GN, endHandle: null };
    if (p) {
      const y = $1(void 0, p),
        b = p.getAttribute("data-nodeid"),
        m = p.getAttribute("data-handleid"),
        h = p.classList.contains("connectable"),
        v = p.classList.contains("connectableend"),
        x = {
          source: l ? b : r,
          sourceHandle: l ? m : i,
          target: l ? r : b,
          targetHandle: l ? i : m,
        };
      (g.connection = x),
        h &&
          v &&
          (n === Br.Strict
            ? (l && y === "source") || (!l && y === "target")
            : b !== r || m !== i) &&
          ((g.endHandle = { nodeId: b, handleId: m, type: y }),
          (g.isValid = a(x)));
    }
    return g;
  }
  function XN({ nodes: e, nodeId: t, handleId: n, handleType: r }) {
    return e.reduce((i, o) => {
      if (o[Pe]) {
        const { handleBounds: a } = o[Pe];
        let s = [],
          l = [];
        a &&
          ((s = $m(o, a, "source", `${t}-${n}-${r}`)),
          (l = $m(o, a, "target", `${t}-${n}-${r}`))),
          i.push(...s, ...l);
      }
      return i;
    }, []);
  }
  function $1(e, t) {
    return (
      e ||
      (t != null && t.classList.contains("target")
        ? "target"
        : t != null && t.classList.contains("source")
        ? "source"
        : null)
    );
  }
  function Wu(e) {
    e == null ||
      e.classList.remove(
        "valid",
        "connecting",
        "react-flow__handle-valid",
        "react-flow__handle-connecting"
      );
  }
  function KN(e, t) {
    let n = null;
    return t ? (n = "valid") : e && !t && (n = "invalid"), n;
  }
  function V1({
    event: e,
    handleId: t,
    nodeId: n,
    onConnect: r,
    isTarget: i,
    getState: o,
    setState: a,
    isValidConnection: s,
    edgeUpdaterType: l,
    onEdgeUpdateEnd: u,
  }) {
    const c = N1(e.target),
      {
        connectionMode: f,
        domNode: d,
        autoPanOnConnect: p,
        connectionRadius: g,
        onConnectStart: y,
        panBy: b,
        getNodes: m,
        cancelConnection: h,
      } = o();
    let v = 0,
      x;
    const { x: E, y: _ } = Jn(e),
      C = c == null ? void 0 : c.elementFromPoint(E, _),
      N = $1(l, C),
      M = d == null ? void 0 : d.getBoundingClientRect();
    if (!M || !N) return;
    let P,
      L = Jn(e, M),
      B = !1,
      D = null,
      k = !1,
      j = null;
    const R = XN({ nodes: m(), nodeId: n, handleId: t, handleType: N }),
      T = () => {
        if (!p) return;
        const [I, V] = k1(L, M);
        b({ x: I, y: V }), (v = requestAnimationFrame(T));
      };
    a({
      connectionPosition: L,
      connectionStatus: null,
      connectionNodeId: n,
      connectionHandleId: t,
      connectionHandleType: N,
      connectionStartHandle: { nodeId: n, handleId: t, type: N },
      connectionEndHandle: null,
    }),
      y == null || y(e, { nodeId: n, handleId: t, handleType: N });
    function O(I) {
      const { transform: V } = o();
      (L = Jn(I, M)),
        (x = YN(A1(L, V, !1, [1, 1]), g, R)),
        B || (T(), (B = !0));
      const z = z1(I, x, f, n, t, i ? "target" : "source", s, c);
      if (
        ((j = z.handleDomNode),
        (D = z.connection),
        (k = z.isValid),
        a({
          connectionPosition: x && k ? WN({ x: x.x, y: x.y }, V) : L,
          connectionStatus: KN(!!x, k),
          connectionEndHandle: z.endHandle,
        }),
        !x && !k && !j)
      )
        return Wu(P);
      D.source !== D.target &&
        j &&
        (Wu(P),
        (P = j),
        j.classList.add("connecting", "react-flow__handle-connecting"),
        j.classList.toggle("valid", k),
        j.classList.toggle("react-flow__handle-valid", k));
    }
    function A(I) {
      var V, z;
      (x || j) && D && k && (r == null || r(D)),
        (z = (V = o()).onConnectEnd) == null || z.call(V, I),
        l && (u == null || u(I)),
        Wu(P),
        h(),
        cancelAnimationFrame(v),
        (B = !1),
        (k = !1),
        (D = null),
        (j = null),
        c.removeEventListener("mousemove", O),
        c.removeEventListener("mouseup", A),
        c.removeEventListener("touchmove", O),
        c.removeEventListener("touchend", A);
    }
    c.addEventListener("mousemove", O),
      c.addEventListener("mouseup", A),
      c.addEventListener("touchmove", O),
      c.addEventListener("touchend", A);
  }
  const Vm = () => !0,
    ZN = (e) => ({
      connectionStartHandle: e.connectionStartHandle,
      connectOnClick: e.connectOnClick,
      noPanClassName: e.noPanClassName,
    }),
    JN = (e, t, n) => (r) => {
      const {
        connectionStartHandle: i,
        connectionEndHandle: o,
        connectionClickStartHandle: a,
      } = r;
      return {
        connecting:
          ((i == null ? void 0 : i.nodeId) === e &&
            (i == null ? void 0 : i.handleId) === t &&
            (i == null ? void 0 : i.type) === n) ||
          ((o == null ? void 0 : o.nodeId) === e &&
            (o == null ? void 0 : o.handleId) === t &&
            (o == null ? void 0 : o.type) === n),
        clickConnecting:
          (a == null ? void 0 : a.nodeId) === e &&
          (a == null ? void 0 : a.handleId) === t &&
          (a == null ? void 0 : a.type) === n,
      };
    },
    H1 = S.forwardRef(
      (
        {
          type: e = "source",
          position: t = W.Top,
          isValidConnection: n,
          isConnectable: r = !0,
          isConnectableStart: i = !0,
          isConnectableEnd: o = !0,
          id: a,
          onConnect: s,
          children: l,
          className: u,
          onMouseDown: c,
          onTouchStart: f,
          ...d
        },
        p
      ) => {
        var M, P;
        const g = a || null,
          y = e === "target",
          b = Be(),
          m = HN(),
          { connectOnClick: h, noPanClassName: v } = ce(ZN, Qe),
          { connecting: x, clickConnecting: E } = ce(JN(m, g, e), Qe);
        m ||
          (P = (M = b.getState()).onError) == null ||
          P.call(M, "010", nr.error010());
        const _ = (L) => {
            const {
                defaultEdgeOptions: B,
                onConnect: D,
                hasDefaultEdges: k,
              } = b.getState(),
              j = { ...B, ...L };
            if (k) {
              const { edges: R, setEdges: T } = b.getState();
              T(j1(j, R));
            }
            D == null || D(j), s == null || s(j);
          },
          C = (L) => {
            if (!m) return;
            const B = T1(L);
            i &&
              ((B && L.button === 0) || !B) &&
              V1({
                event: L,
                handleId: g,
                nodeId: m,
                onConnect: _,
                isTarget: y,
                getState: b.getState,
                setState: b.setState,
                isValidConnection: n || b.getState().isValidConnection || Vm,
              }),
              B ? c == null || c(L) : f == null || f(L);
          },
          N = (L) => {
            const {
              onClickConnectStart: B,
              onClickConnectEnd: D,
              connectionClickStartHandle: k,
              connectionMode: j,
              isValidConnection: R,
            } = b.getState();
            if (!m || (!k && !i)) return;
            if (!k) {
              B == null || B(L, { nodeId: m, handleId: g, handleType: e }),
                b.setState({
                  connectionClickStartHandle: {
                    nodeId: m,
                    type: e,
                    handleId: g,
                  },
                });
              return;
            }
            const T = N1(L.target),
              O = n || R || Vm,
              { connection: A, isValid: I } = z1(
                L,
                { nodeId: m, id: g, type: e },
                j,
                k.nodeId,
                k.handleId || null,
                k.type,
                O,
                T
              );
            I && _(A),
              D == null || D(L),
              b.setState({ connectionClickStartHandle: null });
          };
        return w.jsx("div", {
          "data-handleid": g,
          "data-nodeid": m,
          "data-handlepos": t,
          "data-id": `${m}-${g}-${e}`,
          "className": Xe([
            "react-flow__handle",
            `react-flow__handle-${t}`,
            "nodrag",
            v,
            u,
            {
              source: !y,
              target: y,
              connectable: r,
              connectablestart: i,
              connectableend: o,
              connecting: E,
              connectionindicator: r && ((i && !x) || (o && x)),
            },
          ]),
          "onMouseDown": C,
          "onTouchStart": C,
          "onClick": h ? N : void 0,
          "ref": p,
          ...d,
          "children": l,
        });
      }
    );
  H1.displayName = "Handle";
  var qi = S.memo(H1);
  const U1 = ({
    data: e,
    isConnectable: t,
    targetPosition: n = W.Top,
    sourcePosition: r = W.Bottom,
  }) =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsx(qi, { type: "target", position: n, isConnectable: t }),
        e == null ? void 0 : e.label,
        w.jsx(qi, { type: "source", position: r, isConnectable: t }),
      ],
    });
  U1.displayName = "DefaultNode";
  var Ef = S.memo(U1);
  const Q1 = ({ data: e, isConnectable: t, sourcePosition: n = W.Bottom }) =>
    w.jsxs(w.Fragment, {
      children: [
        e == null ? void 0 : e.label,
        w.jsx(qi, { type: "source", position: n, isConnectable: t }),
      ],
    });
  Q1.displayName = "InputNode";
  var q1 = S.memo(Q1);
  const W1 = ({ data: e, isConnectable: t, targetPosition: n = W.Top }) =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsx(qi, { type: "target", position: n, isConnectable: t }),
        e == null ? void 0 : e.label,
      ],
    });
  W1.displayName = "OutputNode";
  var Y1 = S.memo(W1);
  const mp = () => null;
  mp.displayName = "GroupNode";
  const e4 = (e) => ({
      selectedNodes: e.getNodes().filter((t) => t.selected),
      selectedEdges: e.edges.filter((t) => t.selected),
    }),
    cs = (e) => e.id;
  function t4(e, t) {
    return (
      Qe(e.selectedNodes.map(cs), t.selectedNodes.map(cs)) &&
      Qe(e.selectedEdges.map(cs), t.selectedEdges.map(cs))
    );
  }
  const G1 = S.memo(({ onSelectionChange: e }) => {
    const t = Be(),
      { selectedNodes: n, selectedEdges: r } = ce(e4, t4);
    return (
      S.useEffect(() => {
        var o, a;
        const i = { nodes: n, edges: r };
        e == null || e(i),
          (a = (o = t.getState()).onSelectionChange) == null || a.call(o, i);
      }, [n, r, e]),
      null
    );
  });
  G1.displayName = "SelectionListener";
  const n4 = (e) => !!e.onSelectionChange;
  function r4({ onSelectionChange: e }) {
    const t = ce(n4);
    return e || t ? w.jsx(G1, { onSelectionChange: e }) : null;
  }
  const i4 = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
  });
  function Yr(e, t) {
    S.useEffect(() => {
      typeof e < "u" && t(e);
    }, [e]);
  }
  function Z(e, t, n) {
    S.useEffect(() => {
      typeof t < "u" && n({ [e]: t });
    }, [t]);
  }
  const o4 = ({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      onConnect: i,
      onConnectStart: o,
      onConnectEnd: a,
      onClickConnectStart: s,
      onClickConnectEnd: l,
      nodesDraggable: u,
      nodesConnectable: c,
      nodesFocusable: f,
      edgesFocusable: d,
      edgesUpdatable: p,
      elevateNodesOnSelect: g,
      minZoom: y,
      maxZoom: b,
      nodeExtent: m,
      onNodesChange: h,
      onEdgesChange: v,
      elementsSelectable: x,
      connectionMode: E,
      snapGrid: _,
      snapToGrid: C,
      translateExtent: N,
      connectOnClick: M,
      defaultEdgeOptions: P,
      fitView: L,
      fitViewOptions: B,
      onNodesDelete: D,
      onEdgesDelete: k,
      onNodeDrag: j,
      onNodeDragStart: R,
      onNodeDragStop: T,
      onSelectionDrag: O,
      onSelectionDragStart: A,
      onSelectionDragStop: I,
      noPanClassName: V,
      nodeOrigin: z,
      rfId: Y,
      autoPanOnConnect: U,
      autoPanOnNodeDrag: X,
      onError: K,
      connectionRadius: J,
      isValidConnection: ne,
    }) => {
      const {
          setNodes: he,
          setEdges: ye,
          setDefaultNodesAndEdges: ze,
          setMinZoom: lt,
          setMaxZoom: ut,
          setTranslateExtent: be,
          setNodeExtent: le,
          reset: je,
        } = ce(i4, Qe),
        G = Be();
      return (
        S.useEffect(() => {
          const Qt = r == null ? void 0 : r.map((sn) => ({ ...sn, ...P }));
          return (
            ze(n, Qt),
            () => {
              je();
            }
          );
        }, []),
        Z("defaultEdgeOptions", P, G.setState),
        Z("connectionMode", E, G.setState),
        Z("onConnect", i, G.setState),
        Z("onConnectStart", o, G.setState),
        Z("onConnectEnd", a, G.setState),
        Z("onClickConnectStart", s, G.setState),
        Z("onClickConnectEnd", l, G.setState),
        Z("nodesDraggable", u, G.setState),
        Z("nodesConnectable", c, G.setState),
        Z("nodesFocusable", f, G.setState),
        Z("edgesFocusable", d, G.setState),
        Z("edgesUpdatable", p, G.setState),
        Z("elementsSelectable", x, G.setState),
        Z("elevateNodesOnSelect", g, G.setState),
        Z("snapToGrid", C, G.setState),
        Z("snapGrid", _, G.setState),
        Z("onNodesChange", h, G.setState),
        Z("onEdgesChange", v, G.setState),
        Z("connectOnClick", M, G.setState),
        Z("fitViewOnInit", L, G.setState),
        Z("fitViewOnInitOptions", B, G.setState),
        Z("onNodesDelete", D, G.setState),
        Z("onEdgesDelete", k, G.setState),
        Z("onNodeDrag", j, G.setState),
        Z("onNodeDragStart", R, G.setState),
        Z("onNodeDragStop", T, G.setState),
        Z("onSelectionDrag", O, G.setState),
        Z("onSelectionDragStart", A, G.setState),
        Z("onSelectionDragStop", I, G.setState),
        Z("noPanClassName", V, G.setState),
        Z("nodeOrigin", z, G.setState),
        Z("rfId", Y, G.setState),
        Z("autoPanOnConnect", U, G.setState),
        Z("autoPanOnNodeDrag", X, G.setState),
        Z("onError", K, G.setState),
        Z("connectionRadius", J, G.setState),
        Z("isValidConnection", ne, G.setState),
        Yr(e, he),
        Yr(t, ye),
        Yr(y, lt),
        Yr(b, ut),
        Yr(N, be),
        Yr(m, le),
        null
      );
    },
    Hm = { display: "none" },
    a4 = {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: "hidden",
      clip: "rect(0px, 0px, 0px, 0px)",
      clipPath: "inset(100%)",
    },
    X1 = "react-flow__node-desc",
    K1 = "react-flow__edge-desc",
    s4 = "react-flow__aria-live",
    l4 = (e) => e.ariaLiveMessage;
  function u4({ rfId: e }) {
    const t = ce(l4);
    return w.jsx("div", {
      "id": `${s4}-${e}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      "style": a4,
      "children": t,
    });
  }
  function c4({ rfId: e, disableKeyboardA11y: t }) {
    return w.jsxs(w.Fragment, {
      children: [
        w.jsxs("div", {
          id: `${X1}-${e}`,
          style: Hm,
          children: [
            "Press enter or space to select a node.",
            !t && "You can then use the arrow keys to move the node around.",
            " Press delete to remove it and escape to cancel.",
            " ",
          ],
        }),
        w.jsx("div", {
          id: `${K1}-${e}`,
          style: Hm,
          children:
            "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
        }),
        !t && w.jsx(u4, { rfId: e }),
      ],
    });
  }
  const f4 = (e, t, n) => (n === W.Left ? e - t : n === W.Right ? e + t : e),
    d4 = (e, t, n) => (n === W.Top ? e - t : n === W.Bottom ? e + t : e),
    Um = "react-flow__edgeupdater",
    Qm = ({
      position: e,
      centerX: t,
      centerY: n,
      radius: r = 10,
      onMouseDown: i,
      onMouseEnter: o,
      onMouseOut: a,
      type: s,
    }) =>
      w.jsx("circle", {
        onMouseDown: i,
        onMouseEnter: o,
        onMouseOut: a,
        className: Xe([Um, `${Um}-${s}`]),
        cx: f4(t, r, e),
        cy: d4(n, r, e),
        r,
        stroke: "transparent",
        fill: "transparent",
      }),
    p4 = () => !0;
  var Gr = (e) => {
    const t = ({
      id: n,
      className: r,
      type: i,
      data: o,
      onClick: a,
      onEdgeDoubleClick: s,
      selected: l,
      animated: u,
      label: c,
      labelStyle: f,
      labelShowBg: d,
      labelBgStyle: p,
      labelBgPadding: g,
      labelBgBorderRadius: y,
      style: b,
      source: m,
      target: h,
      sourceX: v,
      sourceY: x,
      targetX: E,
      targetY: _,
      sourcePosition: C,
      targetPosition: N,
      elementsSelectable: M,
      hidden: P,
      sourceHandleId: L,
      targetHandleId: B,
      onContextMenu: D,
      onMouseEnter: k,
      onMouseMove: j,
      onMouseLeave: R,
      edgeUpdaterRadius: T,
      onEdgeUpdate: O,
      onEdgeUpdateStart: A,
      onEdgeUpdateEnd: I,
      markerEnd: V,
      markerStart: z,
      rfId: Y,
      ariaLabel: U,
      isFocusable: X,
      isUpdatable: K,
      pathOptions: J,
      interactionWidth: ne,
    }) => {
      const he = S.useRef(null),
        [ye, ze] = S.useState(!1),
        [lt, ut] = S.useState(!1),
        be = Be(),
        le = S.useMemo(() => `url(#${Sf(z, Y)})`, [z, Y]),
        je = S.useMemo(() => `url(#${Sf(V, Y)})`, [V, Y]);
      if (P) return null;
      const G = (Ke) => {
          const { edges: Mt, addSelectedEdges: dr } = be.getState();
          if ((M && (be.setState({ nodesSelectionActive: !1 }), dr([n])), a)) {
            const pr = Mt.find((hr) => hr.id === n);
            a(Ke, pr);
          }
        },
        Qt = bo(n, be.getState, s),
        sn = bo(n, be.getState, D),
        ct = bo(n, be.getState, k),
        qt = bo(n, be.getState, j),
        ln = bo(n, be.getState, R),
        Wt = (Ke, Mt) => {
          if (Ke.button !== 0) return;
          const { edges: dr, isValidConnection: pr } = be.getState(),
            hr = Mt ? h : m,
            za = (Mt ? B : L) || null,
            mr = Mt ? "target" : "source",
            fu = pr || p4,
            du = Mt,
            lo = dr.find((vr) => vr.id === n);
          ut(!0), A == null || A(Ke, lo, mr);
          const pu = (vr) => {
            ut(!1), I == null || I(vr, lo, mr);
          };
          V1({
            event: Ke,
            handleId: za,
            nodeId: hr,
            onConnect: (vr) => (O == null ? void 0 : O(lo, vr)),
            isTarget: du,
            getState: be.getState,
            setState: be.setState,
            isValidConnection: fu,
            edgeUpdaterType: mr,
            onEdgeUpdateEnd: pu,
          });
        },
        wt = (Ke) => Wt(Ke, !0),
        un = (Ke) => Wt(Ke, !1),
        Tt = () => ze(!0),
        Yt = () => ze(!1),
        kn = !M && !a,
        qr = (Ke) => {
          var Mt;
          if (P1.includes(Ke.key) && M) {
            const {
              unselectNodesAndEdges: dr,
              addSelectedEdges: pr,
              edges: hr,
            } = be.getState();
            Ke.key === "Escape"
              ? ((Mt = he.current) == null || Mt.blur(),
                dr({ edges: [hr.find((mr) => mr.id === n)] }))
              : pr([n]);
          }
        };
      return w.jsxs("g", {
        "className": Xe([
          "react-flow__edge",
          `react-flow__edge-${i}`,
          r,
          { selected: l, animated: u, inactive: kn, updating: ye },
        ]),
        "onClick": G,
        "onDoubleClick": Qt,
        "onContextMenu": sn,
        "onMouseEnter": ct,
        "onMouseMove": qt,
        "onMouseLeave": ln,
        "onKeyDown": X ? qr : void 0,
        "tabIndex": X ? 0 : void 0,
        "role": X ? "button" : void 0,
        "data-testid": `rf__edge-${n}`,
        "aria-label": U === null ? void 0 : U || `Edge from ${m} to ${h}`,
        "aria-describedby": X ? `${K1}-${Y}` : void 0,
        "ref": he,
        "children": [
          !lt &&
            w.jsx(e, {
              id: n,
              source: m,
              target: h,
              selected: l,
              animated: u,
              label: c,
              labelStyle: f,
              labelShowBg: d,
              labelBgStyle: p,
              labelBgPadding: g,
              labelBgBorderRadius: y,
              data: o,
              style: b,
              sourceX: v,
              sourceY: x,
              targetX: E,
              targetY: _,
              sourcePosition: C,
              targetPosition: N,
              sourceHandleId: L,
              targetHandleId: B,
              markerStart: le,
              markerEnd: je,
              pathOptions: J,
              interactionWidth: ne,
            }),
          K &&
            w.jsxs(w.Fragment, {
              children: [
                (K === "source" || K === !0) &&
                  w.jsx(Qm, {
                    position: C,
                    centerX: v,
                    centerY: x,
                    radius: T,
                    onMouseDown: wt,
                    onMouseEnter: Tt,
                    onMouseOut: Yt,
                    type: "source",
                  }),
                (K === "target" || K === !0) &&
                  w.jsx(Qm, {
                    position: N,
                    centerX: E,
                    centerY: _,
                    radius: T,
                    onMouseDown: un,
                    onMouseEnter: Tt,
                    onMouseOut: Yt,
                    type: "target",
                  }),
              ],
            }),
        ],
      });
    };
    return (t.displayName = "EdgeWrapper"), S.memo(t);
  };
  function h4(e) {
    const t = {
        default: Gr(e.default || gl),
        straight: Gr(e.bezier || pp),
        step: Gr(e.step || dp),
        smoothstep: Gr(e.step || Kl),
        simplebezier: Gr(e.simplebezier || fp),
      },
      n = {},
      r = Object.keys(e)
        .filter((i) => !["default", "bezier"].includes(i))
        .reduce((i, o) => ((i[o] = Gr(e[o] || gl)), i), n);
    return { ...t, ...r };
  }
  function qm(e, t, n = null) {
    const r = ((n == null ? void 0 : n.x) || 0) + t.x,
      i = ((n == null ? void 0 : n.y) || 0) + t.y,
      o = (n == null ? void 0 : n.width) || t.width,
      a = (n == null ? void 0 : n.height) || t.height;
    switch (e) {
      case W.Top:
        return { x: r + o / 2, y: i };
      case W.Right:
        return { x: r + o, y: i + a / 2 };
      case W.Bottom:
        return { x: r + o / 2, y: i + a };
      case W.Left:
        return { x: r, y: i + a / 2 };
    }
  }
  function Wm(e, t) {
    return e
      ? e.length === 1 || !t
        ? e[0]
        : (t && e.find((n) => n.id === t)) || null
      : null;
  }
  const m4 = (e, t, n, r, i, o) => {
    const a = qm(n, e, t),
      s = qm(o, r, i);
    return { sourceX: a.x, sourceY: a.y, targetX: s.x, targetY: s.y };
  };
  function v4({
    sourcePos: e,
    targetPos: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: i,
    targetHeight: o,
    width: a,
    height: s,
    transform: l,
  }) {
    const u = {
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      x2: Math.max(e.x + n, t.x + i),
      y2: Math.max(e.y + r, t.y + o),
    };
    u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
    const c = O1({
        x: (0 - l[0]) / l[2],
        y: (0 - l[1]) / l[2],
        width: a / l[2],
        height: s / l[2],
      }),
      f = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)),
      d = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
    return Math.ceil(f * d) > 0;
  }
  function Ym(e) {
    var r, i, o, a, s;
    const t =
        ((r = e == null ? void 0 : e[Pe]) == null ? void 0 : r.handleBounds) ||
        null,
      n =
        t &&
        (e == null ? void 0 : e.width) &&
        (e == null ? void 0 : e.height) &&
        typeof ((i = e == null ? void 0 : e.positionAbsolute) == null
          ? void 0
          : i.x) < "u" &&
        typeof ((o = e == null ? void 0 : e.positionAbsolute) == null
          ? void 0
          : o.y) < "u";
    return [
      {
        x:
          ((a = e == null ? void 0 : e.positionAbsolute) == null
            ? void 0
            : a.x) || 0,
        y:
          ((s = e == null ? void 0 : e.positionAbsolute) == null
            ? void 0
            : s.y) || 0,
        width: (e == null ? void 0 : e.width) || 0,
        height: (e == null ? void 0 : e.height) || 0,
      },
      t,
      !!n,
    ];
  }
  function Z1(e, t) {
    if (!e.parentNode) return !1;
    const n = t.get(e.parentNode);
    return n ? (n.selected ? !0 : Z1(n, t)) : !1;
  }
  function Gm(e, t, n) {
    let r = e;
    do {
      if (r != null && r.matches(t)) return !0;
      if (r === n.current) return !1;
      r = r.parentElement;
    } while (r);
    return !1;
  }
  function y4(e, t, n, r) {
    return Array.from(e.values())
      .filter(
        (i) =>
          (i.selected || i.id === r) &&
          (!i.parentNode || !Z1(i, e)) &&
          (i.draggable || (t && typeof i.draggable > "u"))
      )
      .map((i) => {
        var o, a;
        return {
          id: i.id,
          position: i.position || { x: 0, y: 0 },
          positionAbsolute: i.positionAbsolute || { x: 0, y: 0 },
          distance: {
            x: n.x - (((o = i.positionAbsolute) == null ? void 0 : o.x) ?? 0),
            y: n.y - (((a = i.positionAbsolute) == null ? void 0 : a.y) ?? 0),
          },
          delta: { x: 0, y: 0 },
          extent: i.extent,
          parentNode: i.parentNode,
          width: i.width,
          height: i.height,
        };
      });
  }
  function J1(e, t, n, r, i = [0, 0], o) {
    let a = e.extent || r;
    if (e.extent === "parent")
      if (e.parentNode && e.width && e.height) {
        const u = n.get(e.parentNode),
          { x: c, y: f } = Pi(u, i).positionAbsolute;
        a =
          u && _t(c) && _t(f) && _t(u.width) && _t(u.height)
            ? [
                [c + e.width * i[0], f + e.height * i[1]],
                [
                  c + u.width - e.width + e.width * i[0],
                  f + u.height - e.height + e.height * i[1],
                ],
              ]
            : a;
      } else o == null || o("005", nr.error005()), (a = r);
    else if (e.extent && e.parentNode) {
      const u = n.get(e.parentNode),
        { x: c, y: f } = Pi(u, i).positionAbsolute;
      a = [
        [e.extent[0][0] + c, e.extent[0][1] + f],
        [e.extent[1][0] + c, e.extent[1][1] + f],
      ];
    }
    let s = { x: 0, y: 0 };
    if (e.parentNode) {
      const u = n.get(e.parentNode);
      s = Pi(u, i).positionAbsolute;
    }
    const l = a ? cp(t, a) : t;
    return { position: { x: l.x - s.x, y: l.y - s.y }, positionAbsolute: l };
  }
  function Yu({ nodeId: e, dragItems: t, nodeInternals: n }) {
    const r = t.map((i) => ({
      ...n.get(i.id),
      position: i.position,
      positionAbsolute: i.positionAbsolute,
    }));
    return [e ? r.find((i) => i.id === e) : r[0], r];
  }
  const Xm = (e, t, n, r) => {
    const i = t.querySelectorAll(e);
    if (!i || !i.length) return null;
    const o = Array.from(i),
      a = t.getBoundingClientRect(),
      s = { x: a.width * r[0], y: a.height * r[1] };
    return o.map((l) => {
      const u = l.getBoundingClientRect();
      return {
        id: l.getAttribute("data-handleid"),
        position: l.getAttribute("data-handlepos"),
        x: (u.left - a.left - s.x) / n,
        y: (u.top - a.top - s.y) / n,
        ...up(l),
      };
    });
  };
  function So(e, t, n) {
    return n === void 0
      ? n
      : (r) => {
          const i = t().nodeInternals.get(e);
          n(r, { ...i });
        };
  }
  function _f({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
    const {
        addSelectedNodes: i,
        unselectNodesAndEdges: o,
        multiSelectionActive: a,
        nodeInternals: s,
      } = t.getState(),
      l = s.get(e);
    t.setState({ nodesSelectionActive: !1 }),
      l.selected
        ? (n || (l.selected && a)) &&
          (o({ nodes: [l] }),
          requestAnimationFrame(() => {
            var u;
            return (u = r == null ? void 0 : r.current) == null
              ? void 0
              : u.blur();
          }))
        : i([e]);
  }
  function g4() {
    const e = Be();
    return S.useCallback(({ sourceEvent: n }) => {
      const { transform: r, snapGrid: i, snapToGrid: o } = e.getState(),
        a = n.touches ? n.touches[0].clientX : n.clientX,
        s = n.touches ? n.touches[0].clientY : n.clientY,
        l = { x: (a - r[0]) / r[2], y: (s - r[1]) / r[2] };
      return {
        xSnapped: o ? i[0] * Math.round(l.x / i[0]) : l.x,
        ySnapped: o ? i[1] * Math.round(l.y / i[1]) : l.y,
        ...l,
      };
    }, []);
  }
  function Gu(e) {
    return (t, n, r) => (e == null ? void 0 : e(t, r));
  }
  function ew({
    nodeRef: e,
    disabled: t = !1,
    noDragClassName: n,
    handleSelector: r,
    nodeId: i,
    isSelectable: o,
    selectNodesOnDrag: a,
  }) {
    const s = Be(),
      [l, u] = S.useState(!1),
      c = S.useRef([]),
      f = S.useRef({ x: null, y: null }),
      d = S.useRef(0),
      p = S.useRef(null),
      g = S.useRef({ x: 0, y: 0 }),
      y = S.useRef(null),
      b = S.useRef(!1),
      m = g4();
    return (
      S.useEffect(() => {
        if (e != null && e.current) {
          const h = Ft(e.current),
            v = ({ x: E, y: _ }) => {
              const {
                nodeInternals: C,
                onNodeDrag: N,
                onSelectionDrag: M,
                updateNodePositions: P,
                nodeExtent: L,
                snapGrid: B,
                snapToGrid: D,
                nodeOrigin: k,
                onError: j,
              } = s.getState();
              f.current = { x: E, y: _ };
              let R = !1;
              if (
                ((c.current = c.current.map((O) => {
                  const A = { x: E - O.distance.x, y: _ - O.distance.y };
                  D &&
                    ((A.x = B[0] * Math.round(A.x / B[0])),
                    (A.y = B[1] * Math.round(A.y / B[1])));
                  const I = J1(O, A, C, L, k, j);
                  return (
                    (R =
                      R ||
                      O.position.x !== I.position.x ||
                      O.position.y !== I.position.y),
                    (O.position = I.position),
                    (O.positionAbsolute = I.positionAbsolute),
                    O
                  );
                })),
                !R)
              )
                return;
              P(c.current, !0, !0), u(!0);
              const T = i ? N : Gu(M);
              if (T && y.current) {
                const [O, A] = Yu({
                  nodeId: i,
                  dragItems: c.current,
                  nodeInternals: C,
                });
                T(y.current, O, A);
              }
            },
            x = () => {
              if (!p.current) return;
              const [E, _] = k1(g.current, p.current);
              if (E !== 0 || _ !== 0) {
                const { transform: C, panBy: N } = s.getState();
                (f.current.x = (f.current.x ?? 0) - E / C[2]),
                  (f.current.y = (f.current.y ?? 0) - _ / C[2]),
                  N({ x: E, y: _ }) && v(f.current);
              }
              d.current = requestAnimationFrame(x);
            };
          if (t) h.on(".drag", null);
          else {
            const E = Fk()
              .on("start", (_) => {
                var R;
                const {
                    nodeInternals: C,
                    multiSelectionActive: N,
                    domNode: M,
                    nodesDraggable: P,
                    unselectNodesAndEdges: L,
                    onNodeDragStart: B,
                    onSelectionDragStart: D,
                  } = s.getState(),
                  k = i ? B : Gu(D);
                !a &&
                  !N &&
                  i &&
                  (((R = C.get(i)) != null && R.selected) || L()),
                  i && o && a && _f({ id: i, store: s, nodeRef: e });
                const j = m(_);
                if (
                  ((f.current = j),
                  (c.current = y4(C, P, j, i)),
                  k && c.current)
                ) {
                  const [T, O] = Yu({
                    nodeId: i,
                    dragItems: c.current,
                    nodeInternals: C,
                  });
                  k(_.sourceEvent, T, O);
                }
                (p.current =
                  (M == null ? void 0 : M.getBoundingClientRect()) || null),
                  (g.current = Jn(_.sourceEvent, p.current));
              })
              .on("drag", (_) => {
                const C = m(_),
                  { autoPanOnNodeDrag: N } = s.getState();
                !b.current && N && ((b.current = !0), x()),
                  (f.current.x !== C.xSnapped || f.current.y !== C.ySnapped) &&
                    c.current &&
                    ((y.current = _.sourceEvent),
                    (g.current = Jn(_.sourceEvent, p.current)),
                    v(C));
              })
              .on("end", (_) => {
                if (
                  (u(!1),
                  (b.current = !1),
                  cancelAnimationFrame(d.current),
                  c.current)
                ) {
                  const {
                      updateNodePositions: C,
                      nodeInternals: N,
                      onNodeDragStop: M,
                      onSelectionDragStop: P,
                    } = s.getState(),
                    L = i ? M : Gu(P);
                  if ((C(c.current, !1, !1), L)) {
                    const [B, D] = Yu({
                      nodeId: i,
                      dragItems: c.current,
                      nodeInternals: N,
                    });
                    L(_.sourceEvent, B, D);
                  }
                }
              })
              .filter((_) => {
                const C = _.target;
                return (
                  !_.button && (!n || !Gm(C, `.${n}`, e)) && (!r || Gm(C, r, e))
                );
              });
            return (
              h.call(E),
              () => {
                h.on(".drag", null);
              }
            );
          }
        }
      }, [e, t, n, r, o, s, i, a, m]),
      l
    );
  }
  function tw() {
    const e = Be();
    return S.useCallback((n) => {
      const {
          nodeInternals: r,
          nodeExtent: i,
          updateNodePositions: o,
          getNodes: a,
          snapToGrid: s,
          snapGrid: l,
          onError: u,
          nodesDraggable: c,
        } = e.getState(),
        f = a().filter(
          (h) => h.selected && (h.draggable || (c && typeof h.draggable > "u"))
        ),
        d = s ? l[0] : 5,
        p = s ? l[1] : 5,
        g = n.isShiftPressed ? 4 : 1,
        y = n.x * d * g,
        b = n.y * p * g,
        m = f.map((h) => {
          if (h.positionAbsolute) {
            const v = {
              x: h.positionAbsolute.x + y,
              y: h.positionAbsolute.y + b,
            };
            s &&
              ((v.x = l[0] * Math.round(v.x / l[0])),
              (v.y = l[1] * Math.round(v.y / l[1])));
            const { positionAbsolute: x, position: E } = J1(
              h,
              v,
              r,
              i,
              void 0,
              u
            );
            (h.position = E), (h.positionAbsolute = x);
          }
          return h;
        });
      o(m, !0, !1);
    }, []);
  }
  const Ti = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  };
  var Eo = (e) => {
    const t = ({
      id: n,
      type: r,
      data: i,
      xPos: o,
      yPos: a,
      xPosOrigin: s,
      yPosOrigin: l,
      selected: u,
      onClick: c,
      onMouseEnter: f,
      onMouseMove: d,
      onMouseLeave: p,
      onContextMenu: g,
      onDoubleClick: y,
      style: b,
      className: m,
      isDraggable: h,
      isSelectable: v,
      isConnectable: x,
      isFocusable: E,
      selectNodesOnDrag: _,
      sourcePosition: C,
      targetPosition: N,
      hidden: M,
      resizeObserver: P,
      dragHandle: L,
      zIndex: B,
      isParent: D,
      noDragClassName: k,
      noPanClassName: j,
      initialized: R,
      disableKeyboardA11y: T,
      ariaLabel: O,
      rfId: A,
    }) => {
      const I = Be(),
        V = S.useRef(null),
        z = S.useRef(C),
        Y = S.useRef(N),
        U = S.useRef(r),
        X = v || h || c || f || d || p,
        K = tw(),
        J = So(n, I.getState, f),
        ne = So(n, I.getState, d),
        he = So(n, I.getState, p),
        ye = So(n, I.getState, g),
        ze = So(n, I.getState, y),
        lt = (le) => {
          if ((v && (!_ || !h) && _f({ id: n, store: I, nodeRef: V }), c)) {
            const je = I.getState().nodeInternals.get(n);
            c(le, { ...je });
          }
        },
        ut = (le) => {
          if (!xf(le))
            if (P1.includes(le.key) && v) {
              const je = le.key === "Escape";
              _f({ id: n, store: I, unselect: je, nodeRef: V });
            } else
              !T &&
                h &&
                u &&
                Object.prototype.hasOwnProperty.call(Ti, le.key) &&
                (I.setState({
                  ariaLiveMessage: `Moved selected node ${le.key
                    .replace("Arrow", "")
                    .toLowerCase()}. New position, x: ${~~o}, y: ${~~a}`,
                }),
                K({
                  x: Ti[le.key].x,
                  y: Ti[le.key].y,
                  isShiftPressed: le.shiftKey,
                }));
        };
      S.useEffect(() => {
        if (V.current && !M) {
          const le = V.current;
          return (
            P == null || P.observe(le),
            () => (P == null ? void 0 : P.unobserve(le))
          );
        }
      }, [M]),
        S.useEffect(() => {
          const le = U.current !== r,
            je = z.current !== C,
            G = Y.current !== N;
          V.current &&
            (le || je || G) &&
            (le && (U.current = r),
            je && (z.current = C),
            G && (Y.current = N),
            I.getState().updateNodeDimensions([
              { id: n, nodeElement: V.current, forceUpdate: !0 },
            ]));
        }, [n, r, C, N]);
      const be = ew({
        nodeRef: V,
        disabled: M || !h,
        noDragClassName: k,
        handleSelector: L,
        nodeId: n,
        isSelectable: v,
        selectNodesOnDrag: _,
      });
      return M
        ? null
        : w.jsx("div", {
            "className": Xe([
              "react-flow__node",
              `react-flow__node-${r}`,
              { [j]: h },
              m,
              { selected: u, selectable: v, parent: D, dragging: be },
            ]),
            "ref": V,
            "style": {
              zIndex: B,
              transform: `translate(${s}px,${l}px)`,
              pointerEvents: X ? "all" : "none",
              visibility: R ? "visible" : "hidden",
              ...b,
            },
            "data-id": n,
            "data-testid": `rf__node-${n}`,
            "onMouseEnter": J,
            "onMouseMove": ne,
            "onMouseLeave": he,
            "onContextMenu": ye,
            "onClick": lt,
            "onDoubleClick": ze,
            "onKeyDown": E ? ut : void 0,
            "tabIndex": E ? 0 : void 0,
            "role": E ? "button" : void 0,
            "aria-describedby": T ? void 0 : `${X1}-${A}`,
            "aria-label": O,
            "children": w.jsx(VN, {
              value: n,
              children: w.jsx(e, {
                id: n,
                data: i,
                type: r,
                xPos: o,
                yPos: a,
                selected: u,
                isConnectable: x,
                sourcePosition: C,
                targetPosition: N,
                dragging: be,
                dragHandle: L,
                zIndex: B,
              }),
            }),
          });
    };
    return (t.displayName = "NodeWrapper"), S.memo(t);
  };
  function w4(e) {
    const t = {
        input: Eo(e.input || q1),
        default: Eo(e.default || Ef),
        output: Eo(e.output || Y1),
        group: Eo(e.group || mp),
      },
      n = {},
      r = Object.keys(e)
        .filter((i) => !["input", "default", "output", "group"].includes(i))
        .reduce((i, o) => ((i[o] = Eo(e[o] || Ef)), i), n);
    return { ...t, ...r };
  }
  const x4 = ({ x: e, y: t, width: n, height: r, origin: i }) =>
      !n || !r
        ? { x: e, y: t }
        : i[0] < 0 || i[1] < 0 || i[0] > 1 || i[1] > 1
        ? { x: e, y: t }
        : { x: e - n * i[0], y: t - r * i[1] },
    b4 = typeof document < "u" ? document : null;
  var ba = (e = null, t = { target: b4 }) => {
    const [n, r] = S.useState(!1),
      i = S.useRef(!1),
      o = S.useRef(new Set([])),
      [a, s] = S.useMemo(() => {
        if (e !== null) {
          const u = (Array.isArray(e) ? e : [e])
              .filter((f) => typeof f == "string")
              .map((f) => f.split("+")),
            c = u.reduce((f, d) => f.concat(...d), []);
          return [u, c];
        }
        return [[], []];
      }, [e]);
    return (
      S.useEffect(() => {
        var l, u;
        if (e !== null) {
          const c = (p) => {
              if (
                ((i.current = p.ctrlKey || p.metaKey || p.shiftKey),
                !i.current && xf(p))
              )
                return !1;
              const g = Zm(p.code, s);
              o.current.add(p[g]),
                Km(a, o.current, !1) && (p.preventDefault(), r(!0));
            },
            f = (p) => {
              if (!i.current && xf(p)) return !1;
              const g = Zm(p.code, s);
              Km(a, o.current, !0)
                ? (r(!1), o.current.clear())
                : o.current.delete(p[g]),
                (i.current = !1);
            },
            d = () => {
              o.current.clear(), r(!1);
            };
          return (
            (l = t == null ? void 0 : t.target) == null ||
              l.addEventListener("keydown", c),
            (u = t == null ? void 0 : t.target) == null ||
              u.addEventListener("keyup", f),
            window.addEventListener("blur", d),
            () => {
              var p, g;
              (p = t == null ? void 0 : t.target) == null ||
                p.removeEventListener("keydown", c),
                (g = t == null ? void 0 : t.target) == null ||
                  g.removeEventListener("keyup", f),
                window.removeEventListener("blur", d);
            }
          );
        }
      }, [e, r]),
      n
    );
  };
  function Km(e, t, n) {
    return e
      .filter((r) => n || r.length === t.size)
      .some((r) => r.every((i) => t.has(i)));
  }
  function Zm(e, t) {
    return t.includes(e) ? "code" : "key";
  }
  function nw(e, t, n, r) {
    var a, s;
    if (!e.parentNode) return n;
    const i = t.get(e.parentNode),
      o = Pi(i, r);
    return nw(
      i,
      t,
      {
        x: (n.x ?? 0) + o.x,
        y: (n.y ?? 0) + o.y,
        z:
          (((a = i[Pe]) == null ? void 0 : a.z) ?? 0) > (n.z ?? 0)
            ? ((s = i[Pe]) == null ? void 0 : s.z) ?? 0
            : n.z ?? 0,
      },
      r
    );
  }
  function rw(e, t, n) {
    e.forEach((r) => {
      var i;
      if (r.parentNode && !e.has(r.parentNode))
        throw new Error(`Parent node ${r.parentNode} not found`);
      if (r.parentNode || (n != null && n[r.id])) {
        const {
          x: o,
          y: a,
          z: s,
        } = nw(
          r,
          e,
          { ...r.position, z: ((i = r[Pe]) == null ? void 0 : i.z) ?? 0 },
          t
        );
        (r.positionAbsolute = { x: o, y: a }),
          (r[Pe].z = s),
          n != null && n[r.id] && (r[Pe].isParent = !0);
      }
    });
  }
  function Xu(e, t, n, r) {
    const i = new Map(),
      o = {},
      a = r ? 1e3 : 0;
    return (
      e.forEach((s) => {
        var f;
        const l = (_t(s.zIndex) ? s.zIndex : 0) + (s.selected ? a : 0),
          u = t.get(s.id),
          c = {
            width: u == null ? void 0 : u.width,
            height: u == null ? void 0 : u.height,
            ...s,
            positionAbsolute: { x: s.position.x, y: s.position.y },
          };
        s.parentNode && ((c.parentNode = s.parentNode), (o[s.parentNode] = !0)),
          Object.defineProperty(c, Pe, {
            enumerable: !1,
            value: {
              handleBounds:
                (f = u == null ? void 0 : u[Pe]) == null
                  ? void 0
                  : f.handleBounds,
              z: l,
            },
          }),
          i.set(s.id, c);
      }),
      rw(i, n, o),
      i
    );
  }
  function iw(e, t = {}) {
    const {
        getNodes: n,
        width: r,
        height: i,
        minZoom: o,
        maxZoom: a,
        d3Zoom: s,
        d3Selection: l,
        fitViewOnInitDone: u,
        fitViewOnInit: c,
        nodeOrigin: f,
      } = e(),
      d = t.initial && !u && c;
    if (s && l && (d || !t.initial)) {
      const g = n().filter((b) => {
          var h;
          const m = t.includeHiddenNodes ? b.width && b.height : !b.hidden;
          return (h = t.nodes) != null && h.length
            ? m && t.nodes.some((v) => v.id === b.id)
            : m;
        }),
        y = g.every((b) => b.width && b.height);
      if (g.length > 0 && y) {
        const b = I1(g, f),
          [m, h, v] = B1(
            b,
            r,
            i,
            t.minZoom ?? o,
            t.maxZoom ?? a,
            t.padding ?? 0.1
          ),
          x = Zn.translate(m, h).scale(v);
        return (
          typeof t.duration == "number" && t.duration > 0
            ? s.transform(wr(l, t.duration), x)
            : s.transform(l, x),
          !0
        );
      }
    }
    return !1;
  }
  function S4(e, t) {
    return (
      e.forEach((n) => {
        const r = t.get(n.id);
        r && t.set(r.id, { ...r, [Pe]: r[Pe], selected: n.selected });
      }),
      new Map(t)
    );
  }
  function E4(e, t) {
    return t.map((n) => {
      const r = e.find((i) => i.id === n.id);
      return r && (n.selected = r.selected), n;
    });
  }
  function fs({ changedNodes: e, changedEdges: t, get: n, set: r }) {
    const {
      nodeInternals: i,
      edges: o,
      onNodesChange: a,
      onEdgesChange: s,
      hasDefaultNodes: l,
      hasDefaultEdges: u,
    } = n();
    e != null &&
      e.length &&
      (l && r({ nodeInternals: S4(e, i) }), a == null || a(e)),
      t != null && t.length && (u && r({ edges: E4(t, o) }), s == null || s(t));
  }
  const Xr = () => {},
    _4 = {
      zoomIn: Xr,
      zoomOut: Xr,
      zoomTo: Xr,
      getZoom: () => 1,
      setViewport: Xr,
      getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
      fitView: () => !1,
      setCenter: Xr,
      fitBounds: Xr,
      project: (e) => e,
      viewportInitialized: !1,
    },
    C4 = (e) => ({ d3Zoom: e.d3Zoom, d3Selection: e.d3Selection }),
    k4 = () => {
      const e = Be(),
        { d3Zoom: t, d3Selection: n } = ce(C4, Qe);
      return S.useMemo(
        () =>
          n && t
            ? {
                zoomIn: (i) =>
                  t.scaleBy(wr(n, i == null ? void 0 : i.duration), 1.2),
                zoomOut: (i) =>
                  t.scaleBy(wr(n, i == null ? void 0 : i.duration), 1 / 1.2),
                zoomTo: (i, o) =>
                  t.scaleTo(wr(n, o == null ? void 0 : o.duration), i),
                getZoom: () => e.getState().transform[2],
                setViewport: (i, o) => {
                  const [a, s, l] = e.getState().transform,
                    u = Zn.translate(i.x ?? a, i.y ?? s).scale(i.zoom ?? l);
                  t.transform(wr(n, o == null ? void 0 : o.duration), u);
                },
                getViewport: () => {
                  const [i, o, a] = e.getState().transform;
                  return { x: i, y: o, zoom: a };
                },
                fitView: (i) => iw(e.getState, i),
                setCenter: (i, o, a) => {
                  const { width: s, height: l, maxZoom: u } = e.getState(),
                    c = typeof (a == null ? void 0 : a.zoom) < "u" ? a.zoom : u,
                    f = s / 2 - i * c,
                    d = l / 2 - o * c,
                    p = Zn.translate(f, d).scale(c);
                  t.transform(wr(n, a == null ? void 0 : a.duration), p);
                },
                fitBounds: (i, o) => {
                  const {
                      width: a,
                      height: s,
                      minZoom: l,
                      maxZoom: u,
                    } = e.getState(),
                    [c, f, d] = B1(
                      i,
                      a,
                      s,
                      l,
                      u,
                      (o == null ? void 0 : o.padding) ?? 0.1
                    ),
                    p = Zn.translate(c, f).scale(d);
                  t.transform(wr(n, o == null ? void 0 : o.duration), p);
                },
                project: (i) => {
                  const {
                    transform: o,
                    snapToGrid: a,
                    snapGrid: s,
                  } = e.getState();
                  return A1(i, o, a, s);
                },
                viewportInitialized: !0,
              }
            : _4,
        [t, n]
      );
    };
  function Jl() {
    const e = k4(),
      t = Be(),
      n = S.useCallback(
        () =>
          t
            .getState()
            .getNodes()
            .map((y) => ({ ...y })),
        []
      ),
      r = S.useCallback((y) => t.getState().nodeInternals.get(y), []),
      i = S.useCallback(() => {
        const { edges: y = [] } = t.getState();
        return y.map((b) => ({ ...b }));
      }, []),
      o = S.useCallback((y) => {
        const { edges: b = [] } = t.getState();
        return b.find((m) => m.id === y);
      }, []),
      a = S.useCallback((y) => {
        const {
            getNodes: b,
            setNodes: m,
            hasDefaultNodes: h,
            onNodesChange: v,
          } = t.getState(),
          x = b(),
          E = typeof y == "function" ? y(x) : y;
        if (h) m(E);
        else if (v) {
          const _ =
            E.length === 0
              ? x.map((C) => ({ type: "remove", id: C.id }))
              : E.map((C) => ({ item: C, type: "reset" }));
          v(_);
        }
      }, []),
      s = S.useCallback((y) => {
        const {
            edges: b = [],
            setEdges: m,
            hasDefaultEdges: h,
            onEdgesChange: v,
          } = t.getState(),
          x = typeof y == "function" ? y(b) : y;
        if (h) m(x);
        else if (v) {
          const E =
            x.length === 0
              ? b.map((_) => ({ type: "remove", id: _.id }))
              : x.map((_) => ({ item: _, type: "reset" }));
          v(E);
        }
      }, []),
      l = S.useCallback((y) => {
        const b = Array.isArray(y) ? y : [y],
          {
            getNodes: m,
            setNodes: h,
            hasDefaultNodes: v,
            onNodesChange: x,
          } = t.getState();
        if (v) {
          const _ = [...m(), ...b];
          h(_);
        } else if (x) {
          const E = b.map((_) => ({ item: _, type: "add" }));
          x(E);
        }
      }, []),
      u = S.useCallback((y) => {
        const b = Array.isArray(y) ? y : [y],
          {
            edges: m = [],
            setEdges: h,
            hasDefaultEdges: v,
            onEdgesChange: x,
          } = t.getState();
        if (v) h([...m, ...b]);
        else if (x) {
          const E = b.map((_) => ({ item: _, type: "add" }));
          x(E);
        }
      }, []),
      c = S.useCallback(() => {
        const { getNodes: y, edges: b = [], transform: m } = t.getState(),
          [h, v, x] = m;
        return {
          nodes: y().map((E) => ({ ...E })),
          edges: b.map((E) => ({ ...E })),
          viewport: { x: h, y: v, zoom: x },
        };
      }, []),
      f = S.useCallback(({ nodes: y, edges: b }) => {
        const {
            nodeInternals: m,
            getNodes: h,
            edges: v,
            hasDefaultNodes: x,
            hasDefaultEdges: E,
            onNodesDelete: _,
            onEdgesDelete: C,
            onNodesChange: N,
            onEdgesChange: M,
          } = t.getState(),
          P = (y || []).map((j) => j.id),
          L = (b || []).map((j) => j.id),
          B = h().reduce((j, R) => {
            const T =
              !P.includes(R.id) &&
              R.parentNode &&
              j.find((A) => A.id === R.parentNode);
            return (
              (typeof R.deletable == "boolean" ? R.deletable : !0) &&
                (P.includes(R.id) || T) &&
                j.push(R),
              j
            );
          }, []),
          D = v.filter((j) =>
            typeof j.deletable == "boolean" ? j.deletable : !0
          ),
          k = D.filter((j) => L.includes(j.id));
        if (B || k) {
          const j = L1(B, D),
            R = [...k, ...j],
            T = R.reduce((O, A) => (O.includes(A.id) || O.push(A.id), O), []);
          if (
            ((E || x) &&
              (E && t.setState({ edges: v.filter((O) => !T.includes(O.id)) }),
              x &&
                (B.forEach((O) => {
                  m.delete(O.id);
                }),
                t.setState({ nodeInternals: new Map(m) }))),
            T.length > 0 &&
              (C == null || C(R),
              M && M(T.map((O) => ({ id: O, type: "remove" })))),
            B.length > 0 && (_ == null || _(B), N))
          ) {
            const O = B.map((A) => ({ id: A.id, type: "remove" }));
            N(O);
          }
        }
      }, []),
      d = S.useCallback((y) => {
        const b = AN(y),
          m = b ? null : t.getState().nodeInternals.get(y.id);
        return [b ? y : Im(m), m, b];
      }, []),
      p = S.useCallback((y, b = !0, m) => {
        const [h, v, x] = d(y);
        return h
          ? (m || t.getState().getNodes()).filter((E) => {
              if (!x && (E.id === v.id || !E.positionAbsolute)) return !1;
              const _ = Im(E),
                C = wf(_, h);
              return (b && C > 0) || C >= y.width * y.height;
            })
          : [];
      }, []),
      g = S.useCallback((y, b, m = !0) => {
        const [h] = d(y);
        if (!h) return !1;
        const v = wf(h, b);
        return (m && v > 0) || v >= y.width * y.height;
      }, []);
    return S.useMemo(
      () => ({
        ...e,
        getNodes: n,
        getNode: r,
        getEdges: i,
        getEdge: o,
        setNodes: a,
        setEdges: s,
        addNodes: l,
        addEdges: u,
        toObject: c,
        deleteElements: f,
        getIntersectingNodes: p,
        isNodeIntersecting: g,
      }),
      [e, n, r, i, o, a, s, l, u, c, f, p, g]
    );
  }
  var N4 = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => {
    const n = Be(),
      { deleteElements: r } = Jl(),
      i = ba(e),
      o = ba(t);
    S.useEffect(() => {
      if (i) {
        const { edges: a, getNodes: s } = n.getState(),
          l = s().filter((c) => c.selected),
          u = a.filter((c) => c.selected);
        r({ nodes: l, edges: u }), n.setState({ nodesSelectionActive: !1 });
      }
    }, [i]),
      S.useEffect(() => {
        n.setState({ multiSelectionActive: o });
      }, [o]);
  };
  function O4(e) {
    const t = Be();
    S.useEffect(() => {
      let n;
      const r = () => {
        var o, a;
        if (!e.current) return;
        const i = up(e.current);
        (i.height === 0 || i.width === 0) &&
          ((a = (o = t.getState()).onError) == null ||
            a.call(o, "004", nr.error004())),
          t.setState({ width: i.width || 500, height: i.height || 500 });
      };
      return (
        r(),
        window.addEventListener("resize", r),
        e.current &&
          ((n = new ResizeObserver(() => r())), n.observe(e.current)),
        () => {
          window.removeEventListener("resize", r),
            n && e.current && n.unobserve(e.current);
        }
      );
    }, []);
  }
  const vp = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },
    P4 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
    Ku = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
    Kr = (e, t) => e.target.closest(`.${t}`),
    Jm = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
    T4 = (e) => ({
      d3Zoom: e.d3Zoom,
      d3Selection: e.d3Selection,
      d3ZoomHandler: e.d3ZoomHandler,
      userSelectionActive: e.userSelectionActive,
    }),
    M4 = ({
      onMove: e,
      onMoveStart: t,
      onMoveEnd: n,
      onPaneContextMenu: r,
      zoomOnScroll: i = !0,
      zoomOnPinch: o = !0,
      panOnScroll: a = !1,
      panOnScrollSpeed: s = 0.5,
      panOnScrollMode: l = Oi.Free,
      zoomOnDoubleClick: u = !0,
      elementsSelectable: c,
      panOnDrag: f = !0,
      defaultViewport: d,
      translateExtent: p,
      minZoom: g,
      maxZoom: y,
      zoomActivationKeyCode: b,
      preventScrolling: m = !0,
      children: h,
      noWheelClassName: v,
      noPanClassName: x,
    }) => {
      const E = S.useRef(),
        _ = Be(),
        C = S.useRef(!1),
        N = S.useRef(!1),
        M = S.useRef(null),
        P = S.useRef({ x: 0, y: 0, zoom: 0 }),
        {
          d3Zoom: L,
          d3Selection: B,
          d3ZoomHandler: D,
          userSelectionActive: k,
        } = ce(T4, Qe),
        j = ba(b),
        R = S.useRef(0);
      return (
        O4(M),
        S.useEffect(() => {
          if (M.current) {
            const T = M.current.getBoundingClientRect(),
              O = NN().scaleExtent([g, y]).translateExtent(p),
              A = Ft(M.current).call(O),
              I = Zn.translate(d.x, d.y).scale(Ui(d.zoom, g, y)),
              V = [
                [0, 0],
                [T.width, T.height],
              ],
              z = O.constrain()(I, V, p);
            O.transform(A, z),
              _.setState({
                d3Zoom: O,
                d3Selection: A,
                d3ZoomHandler: A.on("wheel.zoom"),
                transform: [z.x, z.y, z.k],
                domNode: M.current.closest(".react-flow"),
              });
          }
        }, []),
        S.useEffect(() => {
          B &&
            L &&
            (a && !j && !k
              ? B.on(
                  "wheel.zoom",
                  (T) => {
                    if (Kr(T, v)) return !1;
                    T.preventDefault(), T.stopImmediatePropagation();
                    const O = B.property("__zoom").k || 1;
                    if (T.ctrlKey && o) {
                      const z = Kt(T),
                        Y =
                          -T.deltaY *
                          (T.deltaMode === 1 ? 0.05 : T.deltaMode ? 1 : 0.002) *
                          10,
                        U = O * Math.pow(2, Y);
                      L.scaleTo(B, U, z);
                      return;
                    }
                    const A = T.deltaMode === 1 ? 20 : 1,
                      I = l === Oi.Vertical ? 0 : T.deltaX * A,
                      V = l === Oi.Horizontal ? 0 : T.deltaY * A;
                    L.translateBy(B, -(I / O) * s, -(V / O) * s);
                  },
                  { passive: !1 }
                )
              : typeof D < "u" &&
                B.on(
                  "wheel.zoom",
                  function (T, O) {
                    if (!m || Kr(T, v)) return null;
                    T.preventDefault(), D.call(this, T, O);
                  },
                  { passive: !1 }
                ));
        }, [k, a, l, B, L, D, j, o, m, v]),
        S.useEffect(() => {
          L &&
            L.on("start", (T) => {
              var A;
              if (!T.sourceEvent) return null;
              R.current = T.sourceEvent.button;
              const { onViewportChangeStart: O } = _.getState();
              if (
                ((C.current = !0),
                ((A = T.sourceEvent) == null ? void 0 : A.type) ===
                  "mousedown" && _.setState({ paneDragging: !0 }),
                t || O)
              ) {
                const I = Ku(T.transform);
                (P.current = I),
                  O == null || O(I),
                  t == null || t(T.sourceEvent, I);
              }
            });
        }, [L, t]),
        S.useEffect(() => {
          L &&
            (k && !C.current
              ? L.on("zoom", null)
              : k ||
                L.on("zoom", (T) => {
                  const { onViewportChange: O } = _.getState();
                  if (
                    (_.setState({
                      transform: [T.transform.x, T.transform.y, T.transform.k],
                    }),
                    (N.current = !!(r && Jm(f, R.current ?? 0))),
                    e || O)
                  ) {
                    const A = Ku(T.transform);
                    O == null || O(A), e == null || e(T.sourceEvent, A);
                  }
                }));
        }, [k, L, e, f, r]),
        S.useEffect(() => {
          L &&
            L.on("end", (T) => {
              if (!T.sourceEvent) return null;
              const { onViewportChangeEnd: O } = _.getState();
              if (
                ((C.current = !1),
                _.setState({ paneDragging: !1 }),
                r && Jm(f, R.current ?? 0) && !N.current && r(T.sourceEvent),
                (N.current = !1),
                (n || O) && P4(P.current, T.transform))
              ) {
                const A = Ku(T.transform);
                (P.current = A),
                  clearTimeout(E.current),
                  (E.current = setTimeout(
                    () => {
                      O == null || O(A), n == null || n(T.sourceEvent, A);
                    },
                    a ? 150 : 0
                  ));
              }
            });
        }, [L, a, f, n, r]),
        S.useEffect(() => {
          L &&
            L.filter((T) => {
              const O = j || i,
                A = o && T.ctrlKey;
              if (
                T.button === 1 &&
                T.type === "mousedown" &&
                (Kr(T, "react-flow__node") || Kr(T, "react-flow__edge"))
              )
                return !0;
              if (
                (!f && !O && !a && !u && !o) ||
                k ||
                (!u && T.type === "dblclick") ||
                (Kr(T, v) && T.type === "wheel") ||
                (Kr(T, x) && T.type !== "wheel") ||
                (!o && T.ctrlKey && T.type === "wheel") ||
                (!O && !a && !A && T.type === "wheel") ||
                (!f && (T.type === "mousedown" || T.type === "touchstart")) ||
                (Array.isArray(f) &&
                  !f.includes(T.button) &&
                  (T.type === "mousedown" || T.type === "touchstart"))
              )
                return !1;
              const I =
                (Array.isArray(f) && f.includes(T.button)) ||
                !T.button ||
                T.button <= 1;
              return (!T.ctrlKey || T.type === "wheel") && I;
            });
        }, [k, L, i, o, a, u, f, c, j]),
        w.jsx("div", {
          className: "react-flow__renderer",
          ref: M,
          style: vp,
          children: h,
        })
      );
    },
    D4 = (e) => ({
      userSelectionActive: e.userSelectionActive,
      userSelectionRect: e.userSelectionRect,
    });
  function R4() {
    const { userSelectionActive: e, userSelectionRect: t } = ce(D4, Qe);
    return e && t
      ? w.jsx("div", {
          className: "react-flow__selection react-flow__container",
          style: {
            width: t.width,
            height: t.height,
            transform: `translate(${t.x}px, ${t.y}px)`,
          },
        })
      : null;
  }
  function ev(e, t) {
    const n = e.find((r) => r.id === t.parentNode);
    if (n) {
      const r = t.position.x + t.width - n.width,
        i = t.position.y + t.height - n.height;
      if (r > 0 || i > 0 || t.position.x < 0 || t.position.y < 0) {
        if (
          ((n.style = { ...n.style }),
          (n.style.width = n.style.width ?? n.width),
          (n.style.height = n.style.height ?? n.height),
          r > 0 && (n.style.width += r),
          i > 0 && (n.style.height += i),
          t.position.x < 0)
        ) {
          const o = Math.abs(t.position.x);
          (n.position.x = n.position.x - o),
            (n.style.width += o),
            (t.position.x = 0);
        }
        if (t.position.y < 0) {
          const o = Math.abs(t.position.y);
          (n.position.y = n.position.y - o),
            (n.style.height += o),
            (t.position.y = 0);
        }
        (n.width = n.style.width), (n.height = n.style.height);
      }
    }
  }
  function ow(e, t) {
    if (e.some((r) => r.type === "reset"))
      return e.filter((r) => r.type === "reset").map((r) => r.item);
    const n = e.filter((r) => r.type === "add").map((r) => r.item);
    return t.reduce((r, i) => {
      const o = e.filter((s) => s.id === i.id);
      if (o.length === 0) return r.push(i), r;
      const a = { ...i };
      for (const s of o)
        if (s)
          switch (s.type) {
            case "select": {
              a.selected = s.selected;
              break;
            }
            case "position": {
              typeof s.position < "u" && (a.position = s.position),
                typeof s.positionAbsolute < "u" &&
                  (a.positionAbsolute = s.positionAbsolute),
                typeof s.dragging < "u" && (a.dragging = s.dragging),
                a.expandParent && ev(r, a);
              break;
            }
            case "dimensions": {
              typeof s.dimensions < "u" &&
                ((a.width = s.dimensions.width),
                (a.height = s.dimensions.height)),
                typeof s.updateStyle < "u" &&
                  (a.style = { ...(a.style || {}), ...s.dimensions }),
                typeof s.resizing == "boolean" && (a.resizing = s.resizing),
                a.expandParent && ev(r, a);
              break;
            }
            case "remove":
              return r;
          }
      return r.push(a), r;
    }, n);
  }
  function aw(e, t) {
    return ow(e, t);
  }
  function j4(e, t) {
    return ow(e, t);
  }
  const Rn = (e, t) => ({ id: e, type: "select", selected: t });
  function vi(e, t) {
    return e.reduce((n, r) => {
      const i = t.includes(r.id);
      return (
        !r.selected && i
          ? ((r.selected = !0), n.push(Rn(r.id, !0)))
          : r.selected && !i && ((r.selected = !1), n.push(Rn(r.id, !1))),
        n
      );
    }, []);
  }
  const Zu = (e, t) => (n) => {
      n.target === t.current && (e == null || e(n));
    },
    A4 = (e) => ({
      userSelectionActive: e.userSelectionActive,
      elementsSelectable: e.elementsSelectable,
      dragging: e.paneDragging,
    }),
    sw = S.memo(
      ({
        isSelecting: e,
        selectionMode: t = Qi.Full,
        panOnDrag: n,
        onSelectionStart: r,
        onSelectionEnd: i,
        onPaneClick: o,
        onPaneContextMenu: a,
        onPaneScroll: s,
        onPaneMouseEnter: l,
        onPaneMouseMove: u,
        onPaneMouseLeave: c,
        children: f,
      }) => {
        const d = S.useRef(null),
          p = Be(),
          g = S.useRef(0),
          y = S.useRef(0),
          b = S.useRef(),
          {
            userSelectionActive: m,
            elementsSelectable: h,
            dragging: v,
          } = ce(A4, Qe),
          x = () => {
            p.setState({ userSelectionActive: !1, userSelectionRect: null }),
              (g.current = 0),
              (y.current = 0);
          },
          E = (D) => {
            o == null || o(D),
              p.getState().resetSelectedElements(),
              p.setState({ nodesSelectionActive: !1 });
          },
          _ = (D) => {
            if (Array.isArray(n) && n != null && n.includes(2)) {
              D.preventDefault();
              return;
            }
            a == null || a(D);
          },
          C = s ? (D) => s(D) : void 0,
          N = (D) => {
            const { resetSelectedElements: k, domNode: j } = p.getState();
            if (
              ((b.current = j == null ? void 0 : j.getBoundingClientRect()),
              !h ||
                !e ||
                D.button !== 0 ||
                D.target !== d.current ||
                !b.current)
            )
              return;
            const { x: R, y: T } = Jn(D, b.current);
            k(),
              p.setState({
                userSelectionRect: {
                  width: 0,
                  height: 0,
                  startX: R,
                  startY: T,
                  x: R,
                  y: T,
                },
              }),
              r == null || r(D);
          },
          M = (D) => {
            const {
              userSelectionRect: k,
              nodeInternals: j,
              edges: R,
              transform: T,
              onNodesChange: O,
              onEdgesChange: A,
              nodeOrigin: I,
              getNodes: V,
            } = p.getState();
            if (!e || !b.current || !k) return;
            p.setState({ userSelectionActive: !0, nodesSelectionActive: !1 });
            const z = Jn(D, b.current),
              Y = k.startX ?? 0,
              U = k.startY ?? 0,
              X = {
                ...k,
                x: z.x < Y ? z.x : Y,
                y: z.y < U ? z.y : U,
                width: Math.abs(z.x - Y),
                height: Math.abs(z.y - U),
              },
              K = V(),
              J = F1(j, X, T, t === Qi.Partial, !0, I),
              ne = L1(J, R).map((ye) => ye.id),
              he = J.map((ye) => ye.id);
            if (g.current !== he.length) {
              g.current = he.length;
              const ye = vi(K, he);
              ye.length && (O == null || O(ye));
            }
            if (y.current !== ne.length) {
              y.current = ne.length;
              const ye = vi(R, ne);
              ye.length && (A == null || A(ye));
            }
            p.setState({ userSelectionRect: X });
          },
          P = (D) => {
            if (D.button !== 0) return;
            const { userSelectionRect: k } = p.getState();
            !m && k && D.target === d.current && (E == null || E(D)),
              p.setState({ nodesSelectionActive: g.current > 0 }),
              x(),
              i == null || i(D);
          },
          L = (D) => {
            m &&
              (p.setState({ nodesSelectionActive: g.current > 0 }),
              i == null || i(D)),
              x();
          },
          B = h && (e || m);
        return w.jsxs("div", {
          className: Xe(["react-flow__pane", { dragging: v, selection: e }]),
          onClick: B ? void 0 : Zu(E, d),
          onContextMenu: Zu(_, d),
          onWheel: Zu(C, d),
          onMouseEnter: B ? void 0 : l,
          onMouseDown: B ? N : void 0,
          onMouseMove: B ? M : u,
          onMouseUp: B ? P : void 0,
          onMouseLeave: B ? L : c,
          ref: d,
          style: vp,
          children: [f, w.jsx(R4, {})],
        });
      }
    );
  sw.displayName = "Pane";
  const I4 = (e) => {
    const t = e.getNodes().filter((n) => n.selected);
    return {
      ...I1(t, e.nodeOrigin),
      transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
      userSelectionActive: e.userSelectionActive,
    };
  };
  function F4({
    onSelectionContextMenu: e,
    noPanClassName: t,
    disableKeyboardA11y: n,
  }) {
    const r = Be(),
      {
        width: i,
        height: o,
        x: a,
        y: s,
        transformString: l,
        userSelectionActive: u,
      } = ce(I4, Qe),
      c = tw(),
      f = S.useRef(null);
    if (
      (S.useEffect(() => {
        var g;
        n || (g = f.current) == null || g.focus({ preventScroll: !0 });
      }, [n]),
      ew({ nodeRef: f }),
      u || !i || !o)
    )
      return null;
    const d = e
        ? (g) => {
            const y = r
              .getState()
              .getNodes()
              .filter((b) => b.selected);
            e(g, y);
          }
        : void 0,
      p = (g) => {
        Object.prototype.hasOwnProperty.call(Ti, g.key) &&
          c({ x: Ti[g.key].x, y: Ti[g.key].y, isShiftPressed: g.shiftKey });
      };
    return w.jsx("div", {
      className: Xe(["react-flow__nodesselection", "react-flow__container", t]),
      style: { transform: l },
      children: w.jsx("div", {
        ref: f,
        className: "react-flow__nodesselection-rect",
        onContextMenu: d,
        tabIndex: n ? void 0 : -1,
        onKeyDown: n ? void 0 : p,
        style: { width: i, height: o, top: s, left: a },
      }),
    });
  }
  var L4 = S.memo(F4);
  const B4 = (e) => e.nodesSelectionActive,
    lw = ({
      children: e,
      onPaneClick: t,
      onPaneMouseEnter: n,
      onPaneMouseMove: r,
      onPaneMouseLeave: i,
      onPaneContextMenu: o,
      onPaneScroll: a,
      deleteKeyCode: s,
      onMove: l,
      onMoveStart: u,
      onMoveEnd: c,
      selectionKeyCode: f,
      selectionOnDrag: d,
      selectionMode: p,
      onSelectionStart: g,
      onSelectionEnd: y,
      multiSelectionKeyCode: b,
      panActivationKeyCode: m,
      zoomActivationKeyCode: h,
      elementsSelectable: v,
      zoomOnScroll: x,
      zoomOnPinch: E,
      panOnScroll: _,
      panOnScrollSpeed: C,
      panOnScrollMode: N,
      zoomOnDoubleClick: M,
      panOnDrag: P,
      defaultViewport: L,
      translateExtent: B,
      minZoom: D,
      maxZoom: k,
      preventScrolling: j,
      onSelectionContextMenu: R,
      noWheelClassName: T,
      noPanClassName: O,
      disableKeyboardA11y: A,
    }) => {
      const I = ce(B4),
        V = ba(f),
        Y = ba(m) || P,
        U = V || (d && Y !== !0);
      return (
        N4({ deleteKeyCode: s, multiSelectionKeyCode: b }),
        w.jsx(M4, {
          onMove: l,
          onMoveStart: u,
          onMoveEnd: c,
          onPaneContextMenu: o,
          elementsSelectable: v,
          zoomOnScroll: x,
          zoomOnPinch: E,
          panOnScroll: _,
          panOnScrollSpeed: C,
          panOnScrollMode: N,
          zoomOnDoubleClick: M,
          panOnDrag: !V && Y,
          defaultViewport: L,
          translateExtent: B,
          minZoom: D,
          maxZoom: k,
          zoomActivationKeyCode: h,
          preventScrolling: j,
          noWheelClassName: T,
          noPanClassName: O,
          children: w.jsxs(sw, {
            onSelectionStart: g,
            onSelectionEnd: y,
            onPaneClick: t,
            onPaneMouseEnter: n,
            onPaneMouseMove: r,
            onPaneMouseLeave: i,
            onPaneContextMenu: o,
            onPaneScroll: a,
            panOnDrag: Y,
            isSelecting: !!U,
            selectionMode: p,
            children: [
              e,
              I &&
                w.jsx(L4, {
                  onSelectionContextMenu: R,
                  noPanClassName: O,
                  disableKeyboardA11y: A,
                }),
            ],
          }),
        })
      );
    };
  lw.displayName = "FlowRenderer";
  var z4 = S.memo(lw);
  function $4(e) {
    return ce(
      S.useCallback(
        (n) =>
          e
            ? F1(
                n.nodeInternals,
                { x: 0, y: 0, width: n.width, height: n.height },
                n.transform,
                !0
              )
            : n.getNodes(),
        [e]
      )
    );
  }
  const V4 = (e) => ({
      nodesDraggable: e.nodesDraggable,
      nodesConnectable: e.nodesConnectable,
      nodesFocusable: e.nodesFocusable,
      elementsSelectable: e.elementsSelectable,
      updateNodeDimensions: e.updateNodeDimensions,
      onError: e.onError,
    }),
    uw = (e) => {
      const {
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: i,
          updateNodeDimensions: o,
          onError: a,
        } = ce(V4, Qe),
        s = $4(e.onlyRenderVisibleElements),
        l = S.useRef(),
        u = S.useMemo(() => {
          if (typeof ResizeObserver > "u") return null;
          const c = new ResizeObserver((f) => {
            const d = f.map((p) => ({
              id: p.target.getAttribute("data-id"),
              nodeElement: p.target,
              forceUpdate: !0,
            }));
            o(d);
          });
          return (l.current = c), c;
        }, []);
      return (
        S.useEffect(
          () => () => {
            var c;
            (c = l == null ? void 0 : l.current) == null || c.disconnect();
          },
          []
        ),
        w.jsx("div", {
          className: "react-flow__nodes",
          style: vp,
          children: s.map((c) => {
            var E, _;
            let f = c.type || "default";
            e.nodeTypes[f] ||
              (a == null || a("003", nr.error003(f)), (f = "default"));
            const d = e.nodeTypes[f] || e.nodeTypes.default,
              p = !!(c.draggable || (t && typeof c.draggable > "u")),
              g = !!(c.selectable || (i && typeof c.selectable > "u")),
              y = !!(c.connectable || (n && typeof c.connectable > "u")),
              b = !!(c.focusable || (r && typeof c.focusable > "u")),
              m = e.nodeExtent
                ? cp(c.positionAbsolute, e.nodeExtent)
                : c.positionAbsolute,
              h = (m == null ? void 0 : m.x) ?? 0,
              v = (m == null ? void 0 : m.y) ?? 0,
              x = x4({
                x: h,
                y: v,
                width: c.width ?? 0,
                height: c.height ?? 0,
                origin: e.nodeOrigin,
              });
            return w.jsx(
              d,
              {
                id: c.id,
                className: c.className,
                style: c.style,
                type: f,
                data: c.data,
                sourcePosition: c.sourcePosition || W.Bottom,
                targetPosition: c.targetPosition || W.Top,
                hidden: c.hidden,
                xPos: h,
                yPos: v,
                xPosOrigin: x.x,
                yPosOrigin: x.y,
                selectNodesOnDrag: e.selectNodesOnDrag,
                onClick: e.onNodeClick,
                onMouseEnter: e.onNodeMouseEnter,
                onMouseMove: e.onNodeMouseMove,
                onMouseLeave: e.onNodeMouseLeave,
                onContextMenu: e.onNodeContextMenu,
                onDoubleClick: e.onNodeDoubleClick,
                selected: !!c.selected,
                isDraggable: p,
                isSelectable: g,
                isConnectable: y,
                isFocusable: b,
                resizeObserver: u,
                dragHandle: c.dragHandle,
                zIndex: ((E = c[Pe]) == null ? void 0 : E.z) ?? 0,
                isParent: !!((_ = c[Pe]) != null && _.isParent),
                noDragClassName: e.noDragClassName,
                noPanClassName: e.noPanClassName,
                initialized: !!c.width && !!c.height,
                rfId: e.rfId,
                disableKeyboardA11y: e.disableKeyboardA11y,
                ariaLabel: c.ariaLabel,
              },
              c.id
            );
          }),
        })
      );
    };
  uw.displayName = "NodeRenderer";
  var H4 = S.memo(uw);
  const U4 = [{ level: 0, isMaxLevel: !0, edges: [] }];
  function Q4(e, t, n = !1) {
    let r = -1;
    const i = e.reduce((a, s) => {
        var c, f, d, p;
        const l = _t(s.zIndex);
        let u = l ? s.zIndex : 0;
        return (
          n &&
            (u = l
              ? s.zIndex
              : Math.max(
                  ((f = (c = t.get(s.source)) == null ? void 0 : c[Pe]) == null
                    ? void 0
                    : f.z) || 0,
                  ((p = (d = t.get(s.target)) == null ? void 0 : d[Pe]) == null
                    ? void 0
                    : p.z) || 0
                )),
          a[u] ? a[u].push(s) : (a[u] = [s]),
          (r = u > r ? u : r),
          a
        );
      }, {}),
      o = Object.entries(i).map(([a, s]) => {
        const l = +a;
        return { edges: s, level: l, isMaxLevel: l === r };
      });
    return o.length === 0 ? U4 : o;
  }
  function q4(e, t, n) {
    const r = ce(
      S.useCallback(
        (i) =>
          e
            ? i.edges.filter((o) => {
                const a = t.get(o.source),
                  s = t.get(o.target);
                return (
                  (a == null ? void 0 : a.width) &&
                  (a == null ? void 0 : a.height) &&
                  (s == null ? void 0 : s.width) &&
                  (s == null ? void 0 : s.height) &&
                  v4({
                    sourcePos: a.positionAbsolute || { x: 0, y: 0 },
                    targetPos: s.positionAbsolute || { x: 0, y: 0 },
                    sourceWidth: a.width,
                    sourceHeight: a.height,
                    targetWidth: s.width,
                    targetHeight: s.height,
                    width: i.width,
                    height: i.height,
                    transform: i.transform,
                  })
                );
              })
            : i.edges,
        [e, t]
      )
    );
    return Q4(r, t, n);
  }
  const W4 = ({ color: e = "none", strokeWidth: t = 1 }) =>
      w.jsx("polyline", {
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: t,
        fill: "none",
        points: "-5,-4 0,0 -5,4",
      }),
    Y4 = ({ color: e = "none", strokeWidth: t = 1 }) =>
      w.jsx("polyline", {
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: t,
        fill: e,
        points: "-5,-4 0,0 -5,4 -5,-4",
      }),
    tv = { [xa.Arrow]: W4, [xa.ArrowClosed]: Y4 };
  function G4(e) {
    const t = Be();
    return S.useMemo(() => {
      var i, o;
      return Object.prototype.hasOwnProperty.call(tv, e)
        ? tv[e]
        : ((o = (i = t.getState()).onError) == null ||
            o.call(i, "009", nr.error009(e)),
          null);
    }, [e]);
  }
  const X4 = ({
      id: e,
      type: t,
      color: n,
      width: r = 12.5,
      height: i = 12.5,
      markerUnits: o = "strokeWidth",
      strokeWidth: a,
      orient: s = "auto-start-reverse",
    }) => {
      const l = G4(t);
      return l
        ? w.jsx("marker", {
            className: "react-flow__arrowhead",
            id: e,
            markerWidth: `${r}`,
            markerHeight: `${i}`,
            viewBox: "-10 -10 20 20",
            markerUnits: o,
            orient: s,
            refX: "0",
            refY: "0",
            children: w.jsx(l, { color: n, strokeWidth: a }),
          })
        : null;
    },
    K4 =
      ({ defaultColor: e, rfId: t }) =>
      (n) => {
        const r = [];
        return n.edges
          .reduce(
            (i, o) => (
              [o.markerStart, o.markerEnd].forEach((a) => {
                if (a && typeof a == "object") {
                  const s = Sf(a, t);
                  r.includes(s) ||
                    (i.push({ id: s, color: a.color || e, ...a }), r.push(s));
                }
              }),
              i
            ),
            []
          )
          .sort((i, o) => i.id.localeCompare(o.id));
      },
    cw = ({ defaultColor: e, rfId: t }) => {
      const n = ce(
        S.useCallback(K4({ defaultColor: e, rfId: t }), [e, t]),
        (r, i) => !(r.length !== i.length || r.some((o, a) => o.id !== i[a].id))
      );
      return w.jsx("defs", {
        children: n.map((r) =>
          w.jsx(
            X4,
            {
              id: r.id,
              type: r.type,
              color: r.color,
              width: r.width,
              height: r.height,
              markerUnits: r.markerUnits,
              strokeWidth: r.strokeWidth,
              orient: r.orient,
            },
            r.id
          )
        ),
      });
    };
  cw.displayName = "MarkerDefinitions";
  var Z4 = S.memo(cw);
  const J4 = (e) => ({
      nodesConnectable: e.nodesConnectable,
      edgesFocusable: e.edgesFocusable,
      edgesUpdatable: e.edgesUpdatable,
      elementsSelectable: e.elementsSelectable,
      width: e.width,
      height: e.height,
      connectionMode: e.connectionMode,
      nodeInternals: e.nodeInternals,
      onError: e.onError,
    }),
    fw = ({
      defaultMarkerColor: e,
      onlyRenderVisibleElements: t,
      elevateEdgesOnSelect: n,
      rfId: r,
      edgeTypes: i,
      noPanClassName: o,
      onEdgeUpdate: a,
      onEdgeContextMenu: s,
      onEdgeMouseEnter: l,
      onEdgeMouseMove: u,
      onEdgeMouseLeave: c,
      onEdgeClick: f,
      edgeUpdaterRadius: d,
      onEdgeDoubleClick: p,
      onEdgeUpdateStart: g,
      onEdgeUpdateEnd: y,
      children: b,
    }) => {
      const {
          edgesFocusable: m,
          edgesUpdatable: h,
          elementsSelectable: v,
          width: x,
          height: E,
          connectionMode: _,
          nodeInternals: C,
          onError: N,
        } = ce(J4, Qe),
        M = q4(t, C, n);
      return x
        ? w.jsxs(w.Fragment, {
            children: [
              M.map(({ level: P, edges: L, isMaxLevel: B }) =>
                w.jsxs(
                  "svg",
                  {
                    style: { zIndex: P },
                    width: x,
                    height: E,
                    className: "react-flow__edges react-flow__container",
                    children: [
                      B && w.jsx(Z4, { defaultColor: e, rfId: r }),
                      w.jsx("g", {
                        children: L.map((D) => {
                          const [k, j, R] = Ym(C.get(D.source)),
                            [T, O, A] = Ym(C.get(D.target));
                          if (!R || !A) return null;
                          let I = D.type || "default";
                          i[I] ||
                            (N == null || N("011", nr.error011(I)),
                            (I = "default"));
                          const V = i[I] || i.default,
                            z =
                              _ === Br.Strict
                                ? O.target
                                : (O.target ?? []).concat(O.source ?? []),
                            Y = Wm(j.source, D.sourceHandle),
                            U = Wm(z, D.targetHandle),
                            X = (Y == null ? void 0 : Y.position) || W.Bottom,
                            K = (U == null ? void 0 : U.position) || W.Top,
                            J = !!(
                              D.focusable ||
                              (m && typeof D.focusable > "u")
                            ),
                            ne =
                              typeof a < "u" &&
                              (D.updatable || (h && typeof D.updatable > "u"));
                          if (!Y || !U)
                            return (
                              N == null || N("008", nr.error008(Y, D)), null
                            );
                          const {
                            sourceX: he,
                            sourceY: ye,
                            targetX: ze,
                            targetY: lt,
                          } = m4(k, Y, X, T, U, K);
                          return w.jsx(
                            V,
                            {
                              id: D.id,
                              className: Xe([D.className, o]),
                              type: I,
                              data: D.data,
                              selected: !!D.selected,
                              animated: !!D.animated,
                              hidden: !!D.hidden,
                              label: D.label,
                              labelStyle: D.labelStyle,
                              labelShowBg: D.labelShowBg,
                              labelBgStyle: D.labelBgStyle,
                              labelBgPadding: D.labelBgPadding,
                              labelBgBorderRadius: D.labelBgBorderRadius,
                              style: D.style,
                              source: D.source,
                              target: D.target,
                              sourceHandleId: D.sourceHandle,
                              targetHandleId: D.targetHandle,
                              markerEnd: D.markerEnd,
                              markerStart: D.markerStart,
                              sourceX: he,
                              sourceY: ye,
                              targetX: ze,
                              targetY: lt,
                              sourcePosition: X,
                              targetPosition: K,
                              elementsSelectable: v,
                              onEdgeUpdate: a,
                              onContextMenu: s,
                              onMouseEnter: l,
                              onMouseMove: u,
                              onMouseLeave: c,
                              onClick: f,
                              edgeUpdaterRadius: d,
                              onEdgeDoubleClick: p,
                              onEdgeUpdateStart: g,
                              onEdgeUpdateEnd: y,
                              rfId: r,
                              ariaLabel: D.ariaLabel,
                              isFocusable: J,
                              isUpdatable: ne,
                              pathOptions:
                                "pathOptions" in D ? D.pathOptions : void 0,
                              interactionWidth: D.interactionWidth,
                            },
                            D.id
                          );
                        }),
                      }),
                    ],
                  },
                  P
                )
              ),
              b,
            ],
          })
        : null;
    };
  fw.displayName = "EdgeRenderer";
  var eO = S.memo(fw);
  const tO = (e) =>
    `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
  function nO({ children: e }) {
    const t = ce(tO);
    return w.jsx("div", {
      className: "react-flow__viewport react-flow__container",
      style: { transform: t },
      children: e,
    });
  }
  function rO(e) {
    const t = Jl(),
      n = S.useRef(!1);
    S.useEffect(() => {
      !n.current &&
        t.viewportInitialized &&
        e &&
        (setTimeout(() => e(t), 1), (n.current = !0));
    }, [e, t.viewportInitialized]);
  }
  const iO = {
      [W.Left]: W.Right,
      [W.Right]: W.Left,
      [W.Top]: W.Bottom,
      [W.Bottom]: W.Top,
    },
    dw = ({
      nodeId: e,
      handleType: t,
      style: n,
      type: r = zn.Bezier,
      CustomComponent: i,
      connectionStatus: o,
    }) => {
      var _, C, N;
      const {
          fromNode: a,
          handleId: s,
          toX: l,
          toY: u,
          connectionMode: c,
        } = ce(
          S.useCallback(
            (M) => ({
              fromNode: M.nodeInternals.get(e),
              handleId: M.connectionHandleId,
              toX: (M.connectionPosition.x - M.transform[0]) / M.transform[2],
              toY: (M.connectionPosition.y - M.transform[1]) / M.transform[2],
              connectionMode: M.connectionMode,
            }),
            [e]
          ),
          Qe
        ),
        f = (_ = a == null ? void 0 : a[Pe]) == null ? void 0 : _.handleBounds;
      let d = f == null ? void 0 : f[t];
      if (
        (c === Br.Loose &&
          (d =
            d ||
            (f == null ? void 0 : f[t === "source" ? "target" : "source"])),
        !a || !d)
      )
        return null;
      const p = s ? d.find((M) => M.id === s) : d[0],
        g = p ? p.x + p.width / 2 : (a.width ?? 0) / 2,
        y = p ? p.y + p.height / 2 : a.height ?? 0,
        b = (((C = a.positionAbsolute) == null ? void 0 : C.x) ?? 0) + g,
        m = (((N = a.positionAbsolute) == null ? void 0 : N.y) ?? 0) + y,
        h = p == null ? void 0 : p.position,
        v = h ? iO[h] : null;
      if (!h || !v) return null;
      if (i)
        return w.jsx(i, {
          connectionLineType: r,
          connectionLineStyle: n,
          fromNode: a,
          fromHandle: p,
          fromX: b,
          fromY: m,
          toX: l,
          toY: u,
          fromPosition: h,
          toPosition: v,
          connectionStatus: o,
        });
      let x = "";
      const E = {
        sourceX: b,
        sourceY: m,
        sourcePosition: h,
        targetX: l,
        targetY: u,
        targetPosition: v,
      };
      return (
        r === zn.Bezier
          ? ([x] = Zl(E))
          : r === zn.Step
          ? ([x] = bf({ ...E, borderRadius: 0 }))
          : r === zn.SmoothStep
          ? ([x] = bf(E))
          : r === zn.SimpleBezier
          ? ([x] = R1(E))
          : (x = `M${b},${m} ${l},${u}`),
        w.jsx("path", {
          d: x,
          fill: "none",
          className: "react-flow__connection-path",
          style: n,
        })
      );
    };
  dw.displayName = "ConnectionLine";
  const oO = (e) => ({
    nodeId: e.connectionNodeId,
    handleType: e.connectionHandleType,
    nodesConnectable: e.nodesConnectable,
    connectionStatus: e.connectionStatus,
    width: e.width,
    height: e.height,
  });
  function aO({ containerStyle: e, style: t, type: n, component: r }) {
    const {
      nodeId: i,
      handleType: o,
      nodesConnectable: a,
      width: s,
      height: l,
      connectionStatus: u,
    } = ce(oO, Qe);
    return !(i && o && s && a)
      ? null
      : w.jsx("svg", {
          style: e,
          width: s,
          height: l,
          className:
            "react-flow__edges react-flow__connectionline react-flow__container",
          children: w.jsx("g", {
            className: Xe(["react-flow__connection", u]),
            children: w.jsx(dw, {
              nodeId: i,
              handleType: o,
              style: t,
              type: n,
              CustomComponent: r,
              connectionStatus: u,
            }),
          }),
        });
  }
  const pw = ({
    nodeTypes: e,
    edgeTypes: t,
    onMove: n,
    onMoveStart: r,
    onMoveEnd: i,
    onInit: o,
    onNodeClick: a,
    onEdgeClick: s,
    onNodeDoubleClick: l,
    onEdgeDoubleClick: u,
    onNodeMouseEnter: c,
    onNodeMouseMove: f,
    onNodeMouseLeave: d,
    onNodeContextMenu: p,
    onSelectionContextMenu: g,
    onSelectionStart: y,
    onSelectionEnd: b,
    connectionLineType: m,
    connectionLineStyle: h,
    connectionLineComponent: v,
    connectionLineContainerStyle: x,
    selectionKeyCode: E,
    selectionOnDrag: _,
    selectionMode: C,
    multiSelectionKeyCode: N,
    panActivationKeyCode: M,
    zoomActivationKeyCode: P,
    deleteKeyCode: L,
    onlyRenderVisibleElements: B,
    elementsSelectable: D,
    selectNodesOnDrag: k,
    defaultViewport: j,
    translateExtent: R,
    minZoom: T,
    maxZoom: O,
    preventScrolling: A,
    defaultMarkerColor: I,
    zoomOnScroll: V,
    zoomOnPinch: z,
    panOnScroll: Y,
    panOnScrollSpeed: U,
    panOnScrollMode: X,
    zoomOnDoubleClick: K,
    panOnDrag: J,
    onPaneClick: ne,
    onPaneMouseEnter: he,
    onPaneMouseMove: ye,
    onPaneMouseLeave: ze,
    onPaneScroll: lt,
    onPaneContextMenu: ut,
    onEdgeUpdate: be,
    onEdgeContextMenu: le,
    onEdgeMouseEnter: je,
    onEdgeMouseMove: G,
    onEdgeMouseLeave: Qt,
    edgeUpdaterRadius: sn,
    onEdgeUpdateStart: ct,
    onEdgeUpdateEnd: qt,
    noDragClassName: ln,
    noWheelClassName: Wt,
    noPanClassName: wt,
    elevateEdgesOnSelect: un,
    disableKeyboardA11y: Tt,
    nodeOrigin: Yt,
    nodeExtent: kn,
    rfId: qr,
  }) => (
    rO(o),
    w.jsx(z4, {
      onPaneClick: ne,
      onPaneMouseEnter: he,
      onPaneMouseMove: ye,
      onPaneMouseLeave: ze,
      onPaneContextMenu: ut,
      onPaneScroll: lt,
      deleteKeyCode: L,
      selectionKeyCode: E,
      selectionOnDrag: _,
      selectionMode: C,
      onSelectionStart: y,
      onSelectionEnd: b,
      multiSelectionKeyCode: N,
      panActivationKeyCode: M,
      zoomActivationKeyCode: P,
      elementsSelectable: D,
      onMove: n,
      onMoveStart: r,
      onMoveEnd: i,
      zoomOnScroll: V,
      zoomOnPinch: z,
      zoomOnDoubleClick: K,
      panOnScroll: Y,
      panOnScrollSpeed: U,
      panOnScrollMode: X,
      panOnDrag: J,
      defaultViewport: j,
      translateExtent: R,
      minZoom: T,
      maxZoom: O,
      onSelectionContextMenu: g,
      preventScrolling: A,
      noDragClassName: ln,
      noWheelClassName: Wt,
      noPanClassName: wt,
      disableKeyboardA11y: Tt,
      children: w.jsxs(nO, {
        children: [
          w.jsx(eO, {
            edgeTypes: t,
            onEdgeClick: s,
            onEdgeDoubleClick: u,
            onEdgeUpdate: be,
            onlyRenderVisibleElements: B,
            onEdgeContextMenu: le,
            onEdgeMouseEnter: je,
            onEdgeMouseMove: G,
            onEdgeMouseLeave: Qt,
            onEdgeUpdateStart: ct,
            onEdgeUpdateEnd: qt,
            edgeUpdaterRadius: sn,
            defaultMarkerColor: I,
            noPanClassName: wt,
            elevateEdgesOnSelect: !!un,
            disableKeyboardA11y: Tt,
            rfId: qr,
            children: w.jsx(aO, {
              style: h,
              type: m,
              component: v,
              containerStyle: x,
            }),
          }),
          w.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          w.jsx(H4, {
            nodeTypes: e,
            onNodeClick: a,
            onNodeDoubleClick: l,
            onNodeMouseEnter: c,
            onNodeMouseMove: f,
            onNodeMouseLeave: d,
            onNodeContextMenu: p,
            selectNodesOnDrag: k,
            onlyRenderVisibleElements: B,
            noPanClassName: wt,
            noDragClassName: ln,
            disableKeyboardA11y: Tt,
            nodeOrigin: Yt,
            nodeExtent: kn,
            rfId: qr,
          }),
        ],
      }),
    })
  );
  pw.displayName = "GraphView";
  var sO = S.memo(pw);
  const Cf = [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],
    On = {
      rfId: "1",
      width: 0,
      height: 0,
      transform: [0, 0, 1],
      nodeInternals: new Map(),
      edges: [],
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: !1,
      hasDefaultEdges: !1,
      d3Zoom: null,
      d3Selection: null,
      d3ZoomHandler: void 0,
      minZoom: 0.5,
      maxZoom: 2,
      translateExtent: Cf,
      nodeExtent: Cf,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionNodeId: null,
      connectionHandleId: null,
      connectionHandleType: "source",
      connectionPosition: { x: 0, y: 0 },
      connectionStatus: null,
      connectionMode: Br.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: [0, 0],
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesUpdatable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      fitViewOnInit: !1,
      fitViewOnInitDone: !1,
      fitViewOnInitOptions: void 0,
      multiSelectionActive: !1,
      connectionStartHandle: null,
      connectionEndHandle: null,
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      connectionRadius: 20,
      onError: IN,
      isValidConnection: void 0,
    },
    lO = () =>
      N_((e, t) => ({
        ...On,
        setNodes: (n) => {
          const {
            nodeInternals: r,
            nodeOrigin: i,
            elevateNodesOnSelect: o,
          } = t();
          e({ nodeInternals: Xu(n, r, i, o) });
        },
        getNodes: () => Array.from(t().nodeInternals.values()),
        setEdges: (n) => {
          const { defaultEdgeOptions: r = {} } = t();
          e({ edges: n.map((i) => ({ ...r, ...i })) });
        },
        setDefaultNodesAndEdges: (n, r) => {
          const i = typeof n < "u",
            o = typeof r < "u",
            a = i
              ? Xu(n, new Map(), t().nodeOrigin, t().elevateNodesOnSelect)
              : new Map();
          e({
            nodeInternals: a,
            edges: o ? r : [],
            hasDefaultNodes: i,
            hasDefaultEdges: o,
          });
        },
        updateNodeDimensions: (n) => {
          const {
              onNodesChange: r,
              nodeInternals: i,
              fitViewOnInit: o,
              fitViewOnInitDone: a,
              fitViewOnInitOptions: s,
              domNode: l,
              nodeOrigin: u,
            } = t(),
            c = l == null ? void 0 : l.querySelector(".react-flow__viewport");
          if (!c) return;
          const f = window.getComputedStyle(c),
            { m22: d } = new window.DOMMatrixReadOnly(f.transform),
            p = n.reduce((y, b) => {
              const m = i.get(b.id);
              if (m) {
                const h = up(b.nodeElement);
                !!(
                  h.width &&
                  h.height &&
                  (m.width !== h.width ||
                    m.height !== h.height ||
                    b.forceUpdate)
                ) &&
                  (i.set(m.id, {
                    ...m,
                    [Pe]: {
                      ...m[Pe],
                      handleBounds: {
                        source: Xm(".source", b.nodeElement, d, u),
                        target: Xm(".target", b.nodeElement, d, u),
                      },
                    },
                    ...h,
                  }),
                  y.push({ id: m.id, type: "dimensions", dimensions: h }));
              }
              return y;
            }, []);
          rw(i, u);
          const g = a || (o && !a && iw(t, { initial: !0, ...s }));
          e({ nodeInternals: new Map(i), fitViewOnInitDone: g }),
            (p == null ? void 0 : p.length) > 0 && (r == null || r(p));
        },
        updateNodePositions: (n, r = !0, i = !1) => {
          const { triggerNodeChanges: o } = t(),
            a = n.map((s) => {
              const l = { id: s.id, type: "position", dragging: i };
              return (
                r &&
                  ((l.positionAbsolute = s.positionAbsolute),
                  (l.position = s.position)),
                l
              );
            });
          o(a);
        },
        triggerNodeChanges: (n) => {
          const {
            onNodesChange: r,
            nodeInternals: i,
            hasDefaultNodes: o,
            nodeOrigin: a,
            getNodes: s,
            elevateNodesOnSelect: l,
          } = t();
          if (n != null && n.length) {
            if (o) {
              const u = aw(n, s()),
                c = Xu(u, i, a, l);
              e({ nodeInternals: c });
            }
            r == null || r(n);
          }
        },
        addSelectedNodes: (n) => {
          const { multiSelectionActive: r, edges: i, getNodes: o } = t();
          let a,
            s = null;
          r
            ? (a = n.map((l) => Rn(l, !0)))
            : ((a = vi(o(), n)), (s = vi(i, []))),
            fs({ changedNodes: a, changedEdges: s, get: t, set: e });
        },
        addSelectedEdges: (n) => {
          const { multiSelectionActive: r, edges: i, getNodes: o } = t();
          let a,
            s = null;
          r
            ? (a = n.map((l) => Rn(l, !0)))
            : ((a = vi(i, n)), (s = vi(o(), []))),
            fs({ changedNodes: s, changedEdges: a, get: t, set: e });
        },
        unselectNodesAndEdges: ({ nodes: n, edges: r } = {}) => {
          const { edges: i, getNodes: o } = t(),
            a = n || o(),
            s = r || i,
            l = a.map((c) => ((c.selected = !1), Rn(c.id, !1))),
            u = s.map((c) => Rn(c.id, !1));
          fs({ changedNodes: l, changedEdges: u, get: t, set: e });
        },
        setMinZoom: (n) => {
          const { d3Zoom: r, maxZoom: i } = t();
          r == null || r.scaleExtent([n, i]), e({ minZoom: n });
        },
        setMaxZoom: (n) => {
          const { d3Zoom: r, minZoom: i } = t();
          r == null || r.scaleExtent([i, n]), e({ maxZoom: n });
        },
        setTranslateExtent: (n) => {
          var r;
          (r = t().d3Zoom) == null || r.translateExtent(n),
            e({ translateExtent: n });
        },
        resetSelectedElements: () => {
          const { edges: n, getNodes: r } = t(),
            o = r()
              .filter((s) => s.selected)
              .map((s) => Rn(s.id, !1)),
            a = n.filter((s) => s.selected).map((s) => Rn(s.id, !1));
          fs({ changedNodes: o, changedEdges: a, get: t, set: e });
        },
        setNodeExtent: (n) => {
          const { nodeInternals: r } = t();
          r.forEach((i) => {
            i.positionAbsolute = cp(i.position, n);
          }),
            e({ nodeExtent: n, nodeInternals: new Map(r) });
        },
        panBy: (n) => {
          const {
            transform: r,
            width: i,
            height: o,
            d3Zoom: a,
            d3Selection: s,
            translateExtent: l,
          } = t();
          if (!a || !s || (!n.x && !n.y)) return !1;
          const u = Zn.translate(r[0] + n.x, r[1] + n.y).scale(r[2]),
            c = [
              [0, 0],
              [i, o],
            ],
            f = a == null ? void 0 : a.constrain()(u, c, l);
          return (
            a.transform(s, f), r[0] !== f.x || r[1] !== f.y || r[2] !== f.k
          );
        },
        cancelConnection: () =>
          e({
            connectionNodeId: On.connectionNodeId,
            connectionHandleId: On.connectionHandleId,
            connectionHandleType: On.connectionHandleType,
            connectionStatus: On.connectionStatus,
            connectionStartHandle: On.connectionStartHandle,
            connectionEndHandle: On.connectionEndHandle,
          }),
        reset: () => e({ ...On }),
      })),
    yp = ({ children: e }) => {
      const t = S.useRef(null);
      return (
        t.current || (t.current = lO()),
        w.jsx(ON, { value: t.current, children: e })
      );
    };
  yp.displayName = "ReactFlowProvider";
  const hw = ({ children: e }) =>
    S.useContext(Xl)
      ? w.jsx(w.Fragment, { children: e })
      : w.jsx(yp, { children: e });
  hw.displayName = "ReactFlowWrapper";
  function nv(e, t) {
    return S.useRef(null), S.useMemo(() => t(e), [e]);
  }
  const uO = { input: q1, default: Ef, output: Y1, group: mp },
    cO = {
      default: gl,
      straight: pp,
      step: dp,
      smoothstep: Kl,
      simplebezier: fp,
    },
    fO = [0, 0],
    dO = [15, 15],
    pO = { x: 0, y: 0, zoom: 1 },
    hO = {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative",
      zIndex: 0,
    },
    mw = S.forwardRef(
      (
        {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          className: i,
          nodeTypes: o = uO,
          edgeTypes: a = cO,
          onNodeClick: s,
          onEdgeClick: l,
          onInit: u,
          onMove: c,
          onMoveStart: f,
          onMoveEnd: d,
          onConnect: p,
          onConnectStart: g,
          onConnectEnd: y,
          onClickConnectStart: b,
          onClickConnectEnd: m,
          onNodeMouseEnter: h,
          onNodeMouseMove: v,
          onNodeMouseLeave: x,
          onNodeContextMenu: E,
          onNodeDoubleClick: _,
          onNodeDragStart: C,
          onNodeDrag: N,
          onNodeDragStop: M,
          onNodesDelete: P,
          onEdgesDelete: L,
          onSelectionChange: B,
          onSelectionDragStart: D,
          onSelectionDrag: k,
          onSelectionDragStop: j,
          onSelectionContextMenu: R,
          onSelectionStart: T,
          onSelectionEnd: O,
          connectionMode: A = Br.Strict,
          connectionLineType: I = zn.Bezier,
          connectionLineStyle: V,
          connectionLineComponent: z,
          connectionLineContainerStyle: Y,
          deleteKeyCode: U = "Backspace",
          selectionKeyCode: X = "Shift",
          selectionOnDrag: K = !1,
          selectionMode: J = Qi.Full,
          panActivationKeyCode: ne = "Space",
          multiSelectionKeyCode: he = "Meta",
          zoomActivationKeyCode: ye = "Meta",
          snapToGrid: ze = !1,
          snapGrid: lt = dO,
          onlyRenderVisibleElements: ut = !1,
          selectNodesOnDrag: be = !0,
          nodesDraggable: le,
          nodesConnectable: je,
          nodesFocusable: G,
          nodeOrigin: Qt = fO,
          edgesFocusable: sn,
          edgesUpdatable: ct,
          elementsSelectable: qt,
          defaultViewport: ln = pO,
          minZoom: Wt = 0.5,
          maxZoom: wt = 2,
          translateExtent: un = Cf,
          preventScrolling: Tt = !0,
          nodeExtent: Yt,
          defaultMarkerColor: kn = "#b1b1b7",
          zoomOnScroll: qr = !0,
          zoomOnPinch: Ke = !0,
          panOnScroll: Mt = !1,
          panOnScrollSpeed: dr = 0.5,
          panOnScrollMode: pr = Oi.Free,
          zoomOnDoubleClick: hr = !0,
          panOnDrag: za = !0,
          onPaneClick: mr,
          onPaneMouseEnter: fu,
          onPaneMouseMove: du,
          onPaneMouseLeave: lo,
          onPaneScroll: pu,
          onPaneContextMenu: Yp,
          children: vr,
          onEdgeUpdate: Ix,
          onEdgeContextMenu: Fx,
          onEdgeDoubleClick: Lx,
          onEdgeMouseEnter: Bx,
          onEdgeMouseMove: zx,
          onEdgeMouseLeave: $x,
          onEdgeUpdateStart: Vx,
          onEdgeUpdateEnd: Hx,
          edgeUpdaterRadius: Ux = 10,
          onNodesChange: Qx,
          onEdgesChange: qx,
          noDragClassName: Wx = "nodrag",
          noWheelClassName: Yx = "nowheel",
          noPanClassName: Gp = "nopan",
          fitView: Gx = !1,
          fitViewOptions: Xx,
          connectOnClick: Kx = !0,
          attributionPosition: Zx,
          proOptions: Jx,
          defaultEdgeOptions: eb,
          elevateNodesOnSelect: tb = !0,
          elevateEdgesOnSelect: nb = !1,
          disableKeyboardA11y: Xp = !1,
          autoPanOnConnect: rb = !0,
          autoPanOnNodeDrag: ib = !0,
          connectionRadius: ob = 20,
          isValidConnection: ab,
          onError: sb,
          style: lb,
          id: Kp,
          ...ub
        },
        cb
      ) => {
        const fb = nv(o, w4),
          db = nv(a, h4),
          hu = Kp || "1";
        return w.jsx("div", {
          ...ub,
          "style": { ...lb, ...hO },
          "ref": cb,
          "className": Xe(["react-flow", i]),
          "data-testid": "rf__wrapper",
          "id": Kp,
          "children": w.jsxs(hw, {
            children: [
              w.jsx(sO, {
                onInit: u,
                onMove: c,
                onMoveStart: f,
                onMoveEnd: d,
                onNodeClick: s,
                onEdgeClick: l,
                onNodeMouseEnter: h,
                onNodeMouseMove: v,
                onNodeMouseLeave: x,
                onNodeContextMenu: E,
                onNodeDoubleClick: _,
                nodeTypes: fb,
                edgeTypes: db,
                connectionLineType: I,
                connectionLineStyle: V,
                connectionLineComponent: z,
                connectionLineContainerStyle: Y,
                selectionKeyCode: X,
                selectionOnDrag: K,
                selectionMode: J,
                deleteKeyCode: U,
                multiSelectionKeyCode: he,
                panActivationKeyCode: ne,
                zoomActivationKeyCode: ye,
                onlyRenderVisibleElements: ut,
                selectNodesOnDrag: be,
                defaultViewport: ln,
                translateExtent: un,
                minZoom: Wt,
                maxZoom: wt,
                preventScrolling: Tt,
                zoomOnScroll: qr,
                zoomOnPinch: Ke,
                zoomOnDoubleClick: hr,
                panOnScroll: Mt,
                panOnScrollSpeed: dr,
                panOnScrollMode: pr,
                panOnDrag: za,
                onPaneClick: mr,
                onPaneMouseEnter: fu,
                onPaneMouseMove: du,
                onPaneMouseLeave: lo,
                onPaneScroll: pu,
                onPaneContextMenu: Yp,
                onSelectionContextMenu: R,
                onSelectionStart: T,
                onSelectionEnd: O,
                onEdgeUpdate: Ix,
                onEdgeContextMenu: Fx,
                onEdgeDoubleClick: Lx,
                onEdgeMouseEnter: Bx,
                onEdgeMouseMove: zx,
                onEdgeMouseLeave: $x,
                onEdgeUpdateStart: Vx,
                onEdgeUpdateEnd: Hx,
                edgeUpdaterRadius: Ux,
                defaultMarkerColor: kn,
                noDragClassName: Wx,
                noWheelClassName: Yx,
                noPanClassName: Gp,
                elevateEdgesOnSelect: nb,
                rfId: hu,
                disableKeyboardA11y: Xp,
                nodeOrigin: Qt,
                nodeExtent: Yt,
              }),
              w.jsx(o4, {
                nodes: e,
                edges: t,
                defaultNodes: n,
                defaultEdges: r,
                onConnect: p,
                onConnectStart: g,
                onConnectEnd: y,
                onClickConnectStart: b,
                onClickConnectEnd: m,
                nodesDraggable: le,
                nodesConnectable: je,
                nodesFocusable: G,
                edgesFocusable: sn,
                edgesUpdatable: ct,
                elementsSelectable: qt,
                elevateNodesOnSelect: tb,
                minZoom: Wt,
                maxZoom: wt,
                nodeExtent: Yt,
                onNodesChange: Qx,
                onEdgesChange: qx,
                snapToGrid: ze,
                snapGrid: lt,
                connectionMode: A,
                translateExtent: un,
                connectOnClick: Kx,
                defaultEdgeOptions: eb,
                fitView: Gx,
                fitViewOptions: Xx,
                onNodesDelete: P,
                onEdgesDelete: L,
                onNodeDragStart: C,
                onNodeDrag: N,
                onNodeDragStop: M,
                onSelectionDrag: k,
                onSelectionDragStart: D,
                onSelectionDragStop: j,
                noPanClassName: Gp,
                nodeOrigin: Qt,
                rfId: hu,
                autoPanOnConnect: rb,
                autoPanOnNodeDrag: ib,
                onError: sb,
                connectionRadius: ob,
                isValidConnection: ab,
              }),
              w.jsx(r4, { onSelectionChange: B }),
              vr,
              w.jsx(TN, { proOptions: Jx, position: Zx }),
              w.jsx(c4, { rfId: hu, disableKeyboardA11y: Xp }),
            ],
          }),
        });
      }
    );
  mw.displayName = "ReactFlow";
  function vw(e) {
    return (t) => {
      const [n, r] = S.useState(t),
        i = S.useCallback((o) => r((a) => e(o, a)), []);
      return [n, r, i];
    };
  }
  const mO = vw(aw),
    vO = vw(j4);
  function yO() {
    return w.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      children: w.jsx("path", {
        d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
      }),
    });
  }
  function gO() {
    return w.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5",
      children: w.jsx("path", { d: "M0 0h32v4.2H0z" }),
    });
  }
  function wO() {
    return w.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30",
      children: w.jsx("path", {
        d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
      }),
    });
  }
  function xO() {
    return w.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: w.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
      }),
    });
  }
  function bO() {
    return w.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: w.jsx("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
      }),
    });
  }
  const Ao = ({ children: e, className: t, ...n }) =>
    w.jsx("button", {
      type: "button",
      className: Xe(["react-flow__controls-button", t]),
      ...n,
      children: e,
    });
  Ao.displayName = "ControlButton";
  const SO = (e) => ({
      isInteractive:
        e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
      minZoomReached: e.transform[2] <= e.minZoom,
      maxZoomReached: e.transform[2] >= e.maxZoom,
    }),
    yw = ({
      style: e,
      showZoom: t = !0,
      showFitView: n = !0,
      showInteractive: r = !0,
      fitViewOptions: i,
      onZoomIn: o,
      onZoomOut: a,
      onFitView: s,
      onInteractiveChange: l,
      className: u,
      children: c,
      position: f = "bottom-left",
    }) => {
      const d = Be(),
        [p, g] = S.useState(!1),
        { isInteractive: y, minZoomReached: b, maxZoomReached: m } = ce(SO, Qe),
        { zoomIn: h, zoomOut: v, fitView: x } = Jl();
      if (
        (S.useEffect(() => {
          g(!0);
        }, []),
        !p)
      )
        return null;
      const E = () => {
          h(), o == null || o();
        },
        _ = () => {
          v(), a == null || a();
        },
        C = () => {
          x(i), s == null || s();
        },
        N = () => {
          d.setState({
            nodesDraggable: !y,
            nodesConnectable: !y,
            elementsSelectable: !y,
          }),
            l == null || l(!y);
        };
      return w.jsxs(lp, {
        "className": Xe(["react-flow__controls", u]),
        "position": f,
        "style": e,
        "data-testid": "rf__controls",
        "children": [
          t &&
            w.jsxs(w.Fragment, {
              children: [
                w.jsx(Ao, {
                  "onClick": E,
                  "className": "react-flow__controls-zoomin",
                  "title": "zoom in",
                  "aria-label": "zoom in",
                  "disabled": m,
                  "children": w.jsx(yO, {}),
                }),
                w.jsx(Ao, {
                  "onClick": _,
                  "className": "react-flow__controls-zoomout",
                  "title": "zoom out",
                  "aria-label": "zoom out",
                  "disabled": b,
                  "children": w.jsx(gO, {}),
                }),
              ],
            }),
          n &&
            w.jsx(Ao, {
              "className": "react-flow__controls-fitview",
              "onClick": C,
              "title": "fit view",
              "aria-label": "fit view",
              "children": w.jsx(wO, {}),
            }),
          r &&
            w.jsx(Ao, {
              "className": "react-flow__controls-interactive",
              "onClick": N,
              "title": "toggle interactivity",
              "aria-label": "toggle interactivity",
              "children": y ? w.jsx(bO, {}) : w.jsx(xO, {}),
            }),
          c,
        ],
      });
    };
  yw.displayName = "Controls";
  var EO = S.memo(yw),
    $t;
  (function (e) {
    (e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross");
  })($t || ($t = {}));
  function _O({ color: e, dimensions: t, lineWidth: n }) {
    return w.jsx("path", {
      stroke: e,
      strokeWidth: n,
      d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}`,
    });
  }
  function CO({ color: e, radius: t }) {
    return w.jsx("circle", { cx: t, cy: t, r: t, fill: e });
  }
  const kO = {
      [$t.Dots]: "#91919a",
      [$t.Lines]: "#eee",
      [$t.Cross]: "#e2e2e2",
    },
    NO = { [$t.Dots]: 1, [$t.Lines]: 1, [$t.Cross]: 6 },
    OO = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
  function gw({
    id: e,
    variant: t = $t.Dots,
    gap: n = 20,
    size: r,
    lineWidth: i = 1,
    offset: o = 2,
    color: a,
    style: s,
    className: l,
  }) {
    const u = S.useRef(null),
      { transform: c, patternId: f } = ce(OO, Qe),
      d = a || kO[t],
      p = r || NO[t],
      g = t === $t.Dots,
      y = t === $t.Cross,
      b = Array.isArray(n) ? n : [n, n],
      m = [b[0] * c[2] || 1, b[1] * c[2] || 1],
      h = p * c[2],
      v = y ? [h, h] : m,
      x = g ? [h / o, h / o] : [v[0] / o, v[1] / o];
    return w.jsxs("svg", {
      "className": Xe(["react-flow__background", l]),
      "style": {
        ...s,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
      "ref": u,
      "data-testid": "rf__background",
      "children": [
        w.jsx("pattern", {
          id: f + e,
          x: c[0] % m[0],
          y: c[1] % m[1],
          width: m[0],
          height: m[1],
          patternUnits: "userSpaceOnUse",
          patternTransform: `translate(-${x[0]},-${x[1]})`,
          children: g
            ? w.jsx(CO, { color: d, radius: h / o })
            : w.jsx(_O, { dimensions: v, color: d, lineWidth: i }),
        }),
        w.jsx("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: `url(#${f + e})`,
        }),
      ],
    });
  }
  gw.displayName = "Background";
  var PO = S.memo(gw),
    ww = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var r = [], i = 0; i < arguments.length; i++) {
          var o = arguments[i];
          if (o) {
            var a = typeof o;
            if (a === "string" || a === "number") r.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var s = n.apply(null, o);
                s && r.push(s);
              }
            } else if (a === "object") {
              if (
                o.toString !== Object.prototype.toString &&
                !o.toString.toString().includes("[native code]")
              ) {
                r.push(o.toString());
                continue;
              }
              for (var l in o) t.call(o, l) && o[l] && r.push(l);
            }
          }
        }
        return r.join(" ");
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(ww);
  var TO = ww.exports;
  const Aa = Na(TO);
  function MO(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function DO(e, t, n) {
    var r = S.useRef(e !== void 0),
      i = S.useState(t),
      o = i[0],
      a = i[1],
      s = e !== void 0,
      l = r.current;
    return (
      (r.current = s),
      !s && l && o !== t && a(t),
      [
        s ? e : o,
        S.useCallback(
          function (u) {
            for (
              var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1;
              d < c;
              d++
            )
              f[d - 1] = arguments[d];
            n && n.apply(void 0, [u].concat(f)), a(u);
          },
          [n]
        ),
      ]
    );
  }
  function kf(e, t) {
    return (
      (kf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, i) {
            return (r.__proto__ = i), r;
          }),
      kf(e, t)
    );
  }
  function RO(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      kf(e, t);
  }
  const jO = ["xxl", "xl", "lg", "md", "sm", "xs"],
    AO = "xs",
    xw = S.createContext({ prefixes: {}, breakpoints: jO, minBreakpoint: AO });
  function eu(e, t) {
    const { prefixes: n } = S.useContext(xw);
    return e || n[t] || t;
  }
  function IO() {
    const { dir: e } = S.useContext(xw);
    return e === "rtl";
  }
  function tu(e) {
    return (e && e.ownerDocument) || document;
  }
  function FO(e) {
    var t = tu(e);
    return (t && t.defaultView) || window;
  }
  function LO(e, t) {
    return FO(e).getComputedStyle(e, t);
  }
  var BO = /([A-Z])/g;
  function zO(e) {
    return e.replace(BO, "-$1").toLowerCase();
  }
  var $O = /^ms-/;
  function ds(e) {
    return zO(e).replace($O, "-ms-");
  }
  var VO =
    /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
  function HO(e) {
    return !!(e && VO.test(e));
  }
  function bw(e, t) {
    var n = "",
      r = "";
    if (typeof t == "string")
      return e.style.getPropertyValue(ds(t)) || LO(e).getPropertyValue(ds(t));
    Object.keys(t).forEach(function (i) {
      var o = t[i];
      !o && o !== 0
        ? e.style.removeProperty(ds(i))
        : HO(i)
        ? (r += i + "(" + o + ") ")
        : (n += ds(i) + ": " + o + ";");
    }),
      r && (n += "transform: " + r + ";"),
      (e.style.cssText += ";" + n);
  }
  const rv = { disabled: !1 },
    Sw = Je.createContext(null);
  var UO = function (t) {
      return t.scrollTop;
    },
    Io = "unmounted",
    xr = "exited",
    jn = "entering",
    br = "entered",
    Nf = "exiting",
    Cn = (function (e) {
      RO(t, e);
      function t(r, i) {
        var o;
        o = e.call(this, r, i) || this;
        var a = i,
          s = a && !a.isMounting ? r.enter : r.appear,
          l;
        return (
          (o.appearStatus = null),
          r.in
            ? s
              ? ((l = xr), (o.appearStatus = jn))
              : (l = br)
            : r.unmountOnExit || r.mountOnEnter
            ? (l = Io)
            : (l = xr),
          (o.state = { status: l }),
          (o.nextCallback = null),
          o
        );
      }
      t.getDerivedStateFromProps = function (i, o) {
        var a = i.in;
        return a && o.status === Io ? { status: xr } : null;
      };
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (i) {
          var o = null;
          if (i !== this.props) {
            var a = this.state.status;
            this.props.in
              ? a !== jn && a !== br && (o = jn)
              : (a === jn || a === br) && (o = Nf);
          }
          this.updateStatus(!1, o);
        }),
        (n.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
          var i = this.props.timeout,
            o,
            a,
            s;
          return (
            (o = a = s = i),
            i != null &&
              typeof i != "number" &&
              ((o = i.exit),
              (a = i.enter),
              (s = i.appear !== void 0 ? i.appear : a)),
            { exit: o, enter: a, appear: s }
          );
        }),
        (n.updateStatus = function (i, o) {
          if ((i === void 0 && (i = !1), o !== null))
            if ((this.cancelNextCallback(), o === jn)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var a = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : mi.findDOMNode(this);
                a && UO(a);
              }
              this.performEnter(i);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === xr &&
              this.setState({ status: Io });
        }),
        (n.performEnter = function (i) {
          var o = this,
            a = this.props.enter,
            s = this.context ? this.context.isMounting : i,
            l = this.props.nodeRef ? [s] : [mi.findDOMNode(this), s],
            u = l[0],
            c = l[1],
            f = this.getTimeouts(),
            d = s ? f.appear : f.enter;
          if ((!i && !a) || rv.disabled) {
            this.safeSetState({ status: br }, function () {
              o.props.onEntered(u);
            });
            return;
          }
          this.props.onEnter(u, c),
            this.safeSetState({ status: jn }, function () {
              o.props.onEntering(u, c),
                o.onTransitionEnd(d, function () {
                  o.safeSetState({ status: br }, function () {
                    o.props.onEntered(u, c);
                  });
                });
            });
        }),
        (n.performExit = function () {
          var i = this,
            o = this.props.exit,
            a = this.getTimeouts(),
            s = this.props.nodeRef ? void 0 : mi.findDOMNode(this);
          if (!o || rv.disabled) {
            this.safeSetState({ status: xr }, function () {
              i.props.onExited(s);
            });
            return;
          }
          this.props.onExit(s),
            this.safeSetState({ status: Nf }, function () {
              i.props.onExiting(s),
                i.onTransitionEnd(a.exit, function () {
                  i.safeSetState({ status: xr }, function () {
                    i.props.onExited(s);
                  });
                });
            });
        }),
        (n.cancelNextCallback = function () {
          this.nextCallback !== null &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (i, o) {
          (o = this.setNextCallback(o)), this.setState(i, o);
        }),
        (n.setNextCallback = function (i) {
          var o = this,
            a = !0;
          return (
            (this.nextCallback = function (s) {
              a && ((a = !1), (o.nextCallback = null), i(s));
            }),
            (this.nextCallback.cancel = function () {
              a = !1;
            }),
            this.nextCallback
          );
        }),
        (n.onTransitionEnd = function (i, o) {
          this.setNextCallback(o);
          var a = this.props.nodeRef
              ? this.props.nodeRef.current
              : mi.findDOMNode(this),
            s = i == null && !this.props.addEndListener;
          if (!a || s) {
            setTimeout(this.nextCallback, 0);
            return;
          }
          if (this.props.addEndListener) {
            var l = this.props.nodeRef
                ? [this.nextCallback]
                : [a, this.nextCallback],
              u = l[0],
              c = l[1];
            this.props.addEndListener(u, c);
          }
          i != null && setTimeout(this.nextCallback, i);
        }),
        (n.render = function () {
          var i = this.state.status;
          if (i === Io) return null;
          var o = this.props,
            a = o.children;
          o.in,
            o.mountOnEnter,
            o.unmountOnExit,
            o.appear,
            o.enter,
            o.exit,
            o.timeout,
            o.addEndListener,
            o.onEnter,
            o.onEntering,
            o.onEntered,
            o.onExit,
            o.onExiting,
            o.onExited,
            o.nodeRef;
          var s = MO(o, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
          return Je.createElement(
            Sw.Provider,
            { value: null },
            typeof a == "function"
              ? a(i, s)
              : Je.cloneElement(Je.Children.only(a), s)
          );
        }),
        t
      );
    })(Je.Component);
  Cn.contextType = Sw;
  Cn.propTypes = {};
  function Zr() {}
  Cn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Zr,
    onEntering: Zr,
    onEntered: Zr,
    onExit: Zr,
    onExiting: Zr,
    onExited: Zr,
  };
  Cn.UNMOUNTED = Io;
  Cn.EXITED = xr;
  Cn.ENTERING = jn;
  Cn.ENTERED = br;
  Cn.EXITING = Nf;
  const QO = Cn,
    gp = !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  var Of = !1,
    Pf = !1;
  try {
    var Ju = {
      get passive() {
        return (Of = !0);
      },
      get once() {
        return (Pf = Of = !0);
      },
    };
    gp &&
      (window.addEventListener("test", Ju, Ju),
      window.removeEventListener("test", Ju, !0));
  } catch {}
  function qO(e, t, n, r) {
    if (r && typeof r != "boolean" && !Pf) {
      var i = r.once,
        o = r.capture,
        a = n;
      !Pf &&
        i &&
        ((a =
          n.__once ||
          function s(l) {
            this.removeEventListener(t, s, o), n.call(this, l);
          }),
        (n.__once = a)),
        e.addEventListener(t, a, Of ? r : o);
    }
    e.addEventListener(t, n, r);
  }
  function WO(e, t, n, r) {
    var i = r && typeof r != "boolean" ? r.capture : r;
    e.removeEventListener(t, n, i),
      n.__once && e.removeEventListener(t, n.__once, i);
  }
  function kr(e, t, n, r) {
    return (
      qO(e, t, n, r),
      function () {
        WO(e, t, n, r);
      }
    );
  }
  function YO(e, t, n, r) {
    if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
      var i = document.createEvent("HTMLEvents");
      i.initEvent(t, n, r), e.dispatchEvent(i);
    }
  }
  function GO(e) {
    var t = bw(e, "transitionDuration") || "",
      n = t.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(t) * n;
  }
  function XO(e, t, n) {
    n === void 0 && (n = 5);
    var r = !1,
      i = setTimeout(function () {
        r || YO(e, "transitionend", !0);
      }, t + n),
      o = kr(
        e,
        "transitionend",
        function () {
          r = !0;
        },
        { once: !0 }
      );
    return function () {
      clearTimeout(i), o();
    };
  }
  function KO(e, t, n, r) {
    n == null && (n = GO(e) || 0);
    var i = XO(e, n, r),
      o = kr(e, "transitionend", t);
    return function () {
      i(), o();
    };
  }
  function iv(e, t) {
    const n = bw(e, t) || "",
      r = n.indexOf("ms") === -1 ? 1e3 : 1;
    return parseFloat(n) * r;
  }
  function ZO(e, t) {
    const n = iv(e, "transitionDuration"),
      r = iv(e, "transitionDelay"),
      i = KO(
        e,
        (o) => {
          o.target === e && (i(), t(o));
        },
        n + r
      );
  }
  function JO(e) {
    e.offsetHeight;
  }
  var ov = function (t) {
    return !t || typeof t == "function"
      ? t
      : function (n) {
          t.current = n;
        };
  };
  function eP(e, t) {
    var n = ov(e),
      r = ov(t);
    return function (i) {
      n && n(i), r && r(i);
    };
  }
  function ao(e, t) {
    return S.useMemo(
      function () {
        return eP(e, t);
      },
      [e, t]
    );
  }
  function wl(e) {
    return e && "setState" in e ? mi.findDOMNode(e) : e ?? null;
  }
  const tP = Je.forwardRef(
      (
        {
          onEnter: e,
          onEntering: t,
          onEntered: n,
          onExit: r,
          onExiting: i,
          onExited: o,
          addEndListener: a,
          children: s,
          childRef: l,
          ...u
        },
        c
      ) => {
        const f = S.useRef(null),
          d = ao(f, l),
          p = (_) => {
            d(wl(_));
          },
          g = (_) => (C) => {
            _ && f.current && _(f.current, C);
          },
          y = S.useCallback(g(e), [e]),
          b = S.useCallback(g(t), [t]),
          m = S.useCallback(g(n), [n]),
          h = S.useCallback(g(r), [r]),
          v = S.useCallback(g(i), [i]),
          x = S.useCallback(g(o), [o]),
          E = S.useCallback(g(a), [a]);
        return w.jsx(QO, {
          ref: c,
          ...u,
          onEnter: y,
          onEntered: m,
          onEntering: b,
          onExit: h,
          onExited: x,
          onExiting: v,
          addEndListener: E,
          nodeRef: f,
          children:
            typeof s == "function"
              ? (_, C) => s(_, { ...C, ref: p })
              : Je.cloneElement(s, { ref: p }),
        });
      }
    ),
    nP = tP;
  function rP(e) {
    var t = S.useRef(e);
    return (
      S.useEffect(
        function () {
          t.current = e;
        },
        [e]
      ),
      t
    );
  }
  function Wi(e) {
    var t = rP(e);
    return S.useCallback(
      function () {
        return t.current && t.current.apply(t, arguments);
      },
      [t]
    );
  }
  function av() {
    return S.useState(null);
  }
  function Ew() {
    var e = S.useRef(!0),
      t = S.useRef(function () {
        return e.current;
      });
    return (
      S.useEffect(function () {
        return (
          (e.current = !0),
          function () {
            e.current = !1;
          }
        );
      }, []),
      t.current
    );
  }
  var iP =
      typeof global < "u" &&
      global.navigator &&
      global.navigator.product === "ReactNative",
    oP = typeof document < "u";
  const Tf = oP || iP ? S.useLayoutEffect : S.useEffect,
    aP = ["as", "disabled"];
  function sP(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function lP(e) {
    return !e || e.trim() === "#";
  }
  function _w({
    tagName: e,
    disabled: t,
    href: n,
    target: r,
    rel: i,
    role: o,
    onClick: a,
    tabIndex: s = 0,
    type: l,
  }) {
    e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
    const u = { tagName: e };
    if (e === "button") return [{ type: l || "button", disabled: t }, u];
    const c = (d) => {
        if (((t || (e === "a" && lP(n))) && d.preventDefault(), t)) {
          d.stopPropagation();
          return;
        }
        a == null || a(d);
      },
      f = (d) => {
        d.key === " " && (d.preventDefault(), c(d));
      };
    return (
      e === "a" && (n || (n = "#"), t && (n = void 0)),
      [
        {
          "role": o ?? "button",
          "disabled": void 0,
          "tabIndex": t ? void 0 : s,
          "href": n,
          "target": e === "a" ? r : void 0,
          "aria-disabled": t || void 0,
          "rel": e === "a" ? i : void 0,
          "onClick": c,
          "onKeyDown": f,
        },
        u,
      ]
    );
  }
  const uP = S.forwardRef((e, t) => {
    let { as: n, disabled: r } = e,
      i = sP(e, aP);
    const [o, { tagName: a }] = _w(
      Object.assign({ tagName: n, disabled: r }, i)
    );
    return w.jsx(a, Object.assign({}, i, o, { ref: t }));
  });
  uP.displayName = "Button";
  const cP = { [jn]: "show", [br]: "show" },
    Cw = S.forwardRef(
      (
        {
          className: e,
          children: t,
          transitionClasses: n = {},
          onEnter: r,
          ...i
        },
        o
      ) => {
        const a = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            ...i,
          },
          s = S.useCallback(
            (l, u) => {
              JO(l), r == null || r(l, u);
            },
            [r]
          );
        return w.jsx(nP, {
          ref: o,
          addEndListener: ZO,
          ...a,
          onEnter: s,
          childRef: t.ref,
          children: (l, u) =>
            S.cloneElement(t, {
              ...u,
              className: Aa("fade", e, t.props.className, cP[l], n[l]),
            }),
        });
      }
    );
  Cw.displayName = "Fade";
  const sv = Cw;
  var fP = /-(.)/g;
  function dP(e) {
    return e.replace(fP, function (t, n) {
      return n.toUpperCase();
    });
  }
  const pP = (e) => e[0].toUpperCase() + dP(e).slice(1);
  function kw(
    e,
    { displayName: t = pP(e), Component: n, defaultProps: r } = {}
  ) {
    const i = S.forwardRef(
      ({ className: o, bsPrefix: a, as: s = n || "div", ...l }, u) => {
        const c = { ...r, ...l },
          f = eu(a, e);
        return w.jsx(s, { ref: u, className: Aa(o, f), ...c });
      }
    );
    return (i.displayName = t), i;
  }
  const Nw = S.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: i = !1,
        disabled: o = !1,
        className: a,
        ...s
      },
      l
    ) => {
      const u = eu(t, "btn"),
        [c, { tagName: f }] = _w({ tagName: e, disabled: o, ...s }),
        d = f;
      return w.jsx(d, {
        ...c,
        ...s,
        ref: l,
        disabled: o,
        className: Aa(
          a,
          u,
          i && "active",
          n && `${u}-${n}`,
          r && `${u}-${r}`,
          s.href && o && "disabled"
        ),
      });
    }
  );
  Nw.displayName = "Button";
  const ei = Nw;
  function hP(e) {
    var t = S.useRef(e);
    return (t.current = e), t;
  }
  function mP(e) {
    var t = hP(e);
    S.useEffect(function () {
      return function () {
        return t.current();
      };
    }, []);
  }
  var Mf = Math.pow(2, 31) - 1;
  function Ow(e, t, n) {
    var r = n - Date.now();
    e.current =
      r <= Mf
        ? setTimeout(t, r)
        : setTimeout(function () {
            return Ow(e, t, n);
          }, Mf);
  }
  function vP() {
    var e = Ew(),
      t = S.useRef();
    return (
      mP(function () {
        return clearTimeout(t.current);
      }),
      S.useMemo(function () {
        var n = function () {
          return clearTimeout(t.current);
        };
        function r(i, o) {
          o === void 0 && (o = 0),
            e() &&
              (n(),
              o <= Mf
                ? (t.current = setTimeout(i, o))
                : Ow(t, i, Date.now() + o));
        }
        return { set: r, clear: n };
      }, [])
    );
  }
  var lv = Object.prototype.hasOwnProperty;
  function uv(e, t, n) {
    for (n of e.keys()) if (qo(n, t)) return n;
  }
  function qo(e, t) {
    var n, r, i;
    if (e === t) return !0;
    if (e && t && (n = e.constructor) === t.constructor) {
      if (n === Date) return e.getTime() === t.getTime();
      if (n === RegExp) return e.toString() === t.toString();
      if (n === Array) {
        if ((r = e.length) === t.length) for (; r-- && qo(e[r], t[r]); );
        return r === -1;
      }
      if (n === Set) {
        if (e.size !== t.size) return !1;
        for (r of e)
          if (
            ((i = r),
            (i && typeof i == "object" && ((i = uv(t, i)), !i)) || !t.has(i))
          )
            return !1;
        return !0;
      }
      if (n === Map) {
        if (e.size !== t.size) return !1;
        for (r of e)
          if (
            ((i = r[0]),
            (i && typeof i == "object" && ((i = uv(t, i)), !i)) ||
              !qo(r[1], t.get(i)))
          )
            return !1;
        return !0;
      }
      if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
      else if (n === DataView) {
        if ((r = e.byteLength) === t.byteLength)
          for (; r-- && e.getInt8(r) === t.getInt8(r); );
        return r === -1;
      }
      if (ArrayBuffer.isView(e)) {
        if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
        return r === -1;
      }
      if (!n || typeof e == "object") {
        r = 0;
        for (n in e)
          if (
            (lv.call(e, n) && ++r && !lv.call(t, n)) ||
            !(n in t) ||
            !qo(e[n], t[n])
          )
            return !1;
        return Object.keys(t).length === r;
      }
    }
    return e !== e && t !== t;
  }
  function yP(e) {
    var t = Ew();
    return [
      e[0],
      S.useCallback(
        function (n) {
          if (t()) return e[1](n);
        },
        [t, e[1]]
      ),
    ];
  }
  var ot = "top",
    Ot = "bottom",
    Pt = "right",
    at = "left",
    wp = "auto",
    Ia = [ot, Ot, Pt, at],
    Yi = "start",
    Sa = "end",
    gP = "clippingParents",
    Pw = "viewport",
    _o = "popper",
    wP = "reference",
    cv = Ia.reduce(function (e, t) {
      return e.concat([t + "-" + Yi, t + "-" + Sa]);
    }, []),
    Tw = [].concat(Ia, [wp]).reduce(function (e, t) {
      return e.concat([t, t + "-" + Yi, t + "-" + Sa]);
    }, []),
    xP = "beforeRead",
    bP = "read",
    SP = "afterRead",
    EP = "beforeMain",
    _P = "main",
    CP = "afterMain",
    kP = "beforeWrite",
    NP = "write",
    OP = "afterWrite",
    PP = [xP, bP, SP, EP, _P, CP, kP, NP, OP];
  function nn(e) {
    return e.split("-")[0];
  }
  function vt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function zr(e) {
    var t = vt(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function rn(e) {
    var t = vt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function xp(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = vt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  var Tr = Math.max,
    xl = Math.min,
    Gi = Math.round;
  function Df() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Mw() {
    return !/^((?!chrome|android).)*safari/i.test(Df());
  }
  function Xi(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var r = e.getBoundingClientRect(),
      i = 1,
      o = 1;
    t &&
      rn(e) &&
      ((i = (e.offsetWidth > 0 && Gi(r.width) / e.offsetWidth) || 1),
      (o = (e.offsetHeight > 0 && Gi(r.height) / e.offsetHeight) || 1));
    var a = zr(e) ? vt(e) : window,
      s = a.visualViewport,
      l = !Mw() && n,
      u = (r.left + (l && s ? s.offsetLeft : 0)) / i,
      c = (r.top + (l && s ? s.offsetTop : 0)) / o,
      f = r.width / i,
      d = r.height / o;
    return {
      width: f,
      height: d,
      top: c,
      right: u + f,
      bottom: c + d,
      left: u,
      x: u,
      y: c,
    };
  }
  function bp(e) {
    var t = Xi(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function Dw(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && xp(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function rr(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Sn(e) {
    return vt(e).getComputedStyle(e);
  }
  function TP(e) {
    return ["table", "td", "th"].indexOf(rr(e)) >= 0;
  }
  function cr(e) {
    return ((zr(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function nu(e) {
    return rr(e) === "html"
      ? e
      : e.assignedSlot || e.parentNode || (xp(e) ? e.host : null) || cr(e);
  }
  function fv(e) {
    return !rn(e) || Sn(e).position === "fixed" ? null : e.offsetParent;
  }
  function MP(e) {
    var t = /firefox/i.test(Df()),
      n = /Trident/i.test(Df());
    if (n && rn(e)) {
      var r = Sn(e);
      if (r.position === "fixed") return null;
    }
    var i = nu(e);
    for (
      xp(i) && (i = i.host);
      rn(i) && ["html", "body"].indexOf(rr(i)) < 0;

    ) {
      var o = Sn(i);
      if (
        o.transform !== "none" ||
        o.perspective !== "none" ||
        o.contain === "paint" ||
        ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
        (t && o.willChange === "filter") ||
        (t && o.filter && o.filter !== "none")
      )
        return i;
      i = i.parentNode;
    }
    return null;
  }
  function Fa(e) {
    for (var t = vt(e), n = fv(e); n && TP(n) && Sn(n).position === "static"; )
      n = fv(n);
    return n &&
      (rr(n) === "html" || (rr(n) === "body" && Sn(n).position === "static"))
      ? t
      : n || MP(e) || t;
  }
  function Sp(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Wo(e, t, n) {
    return Tr(e, xl(t, n));
  }
  function DP(e, t, n) {
    var r = Wo(e, t, n);
    return r > n ? n : r;
  }
  function Rw() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function jw(e) {
    return Object.assign({}, Rw(), e);
  }
  function Aw(e, t) {
    return t.reduce(function (n, r) {
      return (n[r] = e), n;
    }, {});
  }
  var RP = function (t, n) {
    return (
      (t =
        typeof t == "function"
          ? t(Object.assign({}, n.rects, { placement: n.placement }))
          : t),
      jw(typeof t != "number" ? t : Aw(t, Ia))
    );
  };
  function jP(e) {
    var t,
      n = e.state,
      r = e.name,
      i = e.options,
      o = n.elements.arrow,
      a = n.modifiersData.popperOffsets,
      s = nn(n.placement),
      l = Sp(s),
      u = [at, Pt].indexOf(s) >= 0,
      c = u ? "height" : "width";
    if (!(!o || !a)) {
      var f = RP(i.padding, n),
        d = bp(o),
        p = l === "y" ? ot : at,
        g = l === "y" ? Ot : Pt,
        y =
          n.rects.reference[c] +
          n.rects.reference[l] -
          a[l] -
          n.rects.popper[c],
        b = a[l] - n.rects.reference[l],
        m = Fa(o),
        h = m ? (l === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
        v = y / 2 - b / 2,
        x = f[p],
        E = h - d[c] - f[g],
        _ = h / 2 - d[c] / 2 + v,
        C = Wo(x, _, E),
        N = l;
      n.modifiersData[r] = ((t = {}), (t[N] = C), (t.centerOffset = C - _), t);
    }
  }
  function AP(e) {
    var t = e.state,
      n = e.options,
      r = n.element,
      i = r === void 0 ? "[data-popper-arrow]" : r;
    i != null &&
      ((typeof i == "string" &&
        ((i = t.elements.popper.querySelector(i)), !i)) ||
        (Dw(t.elements.popper, i) && (t.elements.arrow = i)));
  }
  const IP = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: jP,
    effect: AP,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Ki(e) {
    return e.split("-")[1];
  }
  var FP = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function LP(e, t) {
    var n = e.x,
      r = e.y,
      i = t.devicePixelRatio || 1;
    return { x: Gi(n * i) / i || 0, y: Gi(r * i) / i || 0 };
  }
  function dv(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      i = e.placement,
      o = e.variation,
      a = e.offsets,
      s = e.position,
      l = e.gpuAcceleration,
      u = e.adaptive,
      c = e.roundOffsets,
      f = e.isFixed,
      d = a.x,
      p = d === void 0 ? 0 : d,
      g = a.y,
      y = g === void 0 ? 0 : g,
      b = typeof c == "function" ? c({ x: p, y }) : { x: p, y };
    (p = b.x), (y = b.y);
    var m = a.hasOwnProperty("x"),
      h = a.hasOwnProperty("y"),
      v = at,
      x = ot,
      E = window;
    if (u) {
      var _ = Fa(n),
        C = "clientHeight",
        N = "clientWidth";
      if (
        (_ === vt(n) &&
          ((_ = cr(n)),
          Sn(_).position !== "static" &&
            s === "absolute" &&
            ((C = "scrollHeight"), (N = "scrollWidth"))),
        (_ = _),
        i === ot || ((i === at || i === Pt) && o === Sa))
      ) {
        x = Ot;
        var M =
          f && _ === E && E.visualViewport ? E.visualViewport.height : _[C];
        (y -= M - r.height), (y *= l ? 1 : -1);
      }
      if (i === at || ((i === ot || i === Ot) && o === Sa)) {
        v = Pt;
        var P =
          f && _ === E && E.visualViewport ? E.visualViewport.width : _[N];
        (p -= P - r.width), (p *= l ? 1 : -1);
      }
    }
    var L = Object.assign({ position: s }, u && FP),
      B = c === !0 ? LP({ x: p, y }, vt(n)) : { x: p, y };
    if (((p = B.x), (y = B.y), l)) {
      var D;
      return Object.assign(
        {},
        L,
        ((D = {}),
        (D[x] = h ? "0" : ""),
        (D[v] = m ? "0" : ""),
        (D.transform =
          (E.devicePixelRatio || 1) <= 1
            ? "translate(" + p + "px, " + y + "px)"
            : "translate3d(" + p + "px, " + y + "px, 0)"),
        D)
      );
    }
    return Object.assign(
      {},
      L,
      ((t = {}),
      (t[x] = h ? y + "px" : ""),
      (t[v] = m ? p + "px" : ""),
      (t.transform = ""),
      t)
    );
  }
  function BP(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = r === void 0 ? !0 : r,
      o = n.adaptive,
      a = o === void 0 ? !0 : o,
      s = n.roundOffsets,
      l = s === void 0 ? !0 : s,
      u = {
        placement: nn(t.placement),
        variation: Ki(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: t.options.strategy === "fixed",
      };
    t.modifiersData.popperOffsets != null &&
      (t.styles.popper = Object.assign(
        {},
        t.styles.popper,
        dv(
          Object.assign({}, u, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: l,
          })
        )
      )),
      t.modifiersData.arrow != null &&
        (t.styles.arrow = Object.assign(
          {},
          t.styles.arrow,
          dv(
            Object.assign({}, u, {
              offsets: t.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l,
            })
          )
        )),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement,
      }));
  }
  const zP = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: BP,
    data: {},
  };
  var ps = { passive: !0 };
  function $P(e) {
    var t = e.state,
      n = e.instance,
      r = e.options,
      i = r.scroll,
      o = i === void 0 ? !0 : i,
      a = r.resize,
      s = a === void 0 ? !0 : a,
      l = vt(t.elements.popper),
      u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return (
      o &&
        u.forEach(function (c) {
          c.addEventListener("scroll", n.update, ps);
        }),
      s && l.addEventListener("resize", n.update, ps),
      function () {
        o &&
          u.forEach(function (c) {
            c.removeEventListener("scroll", n.update, ps);
          }),
          s && l.removeEventListener("resize", n.update, ps);
      }
    );
  }
  const VP = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: $P,
    data: {},
  };
  var HP = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Ds(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return HP[t];
    });
  }
  var UP = { start: "end", end: "start" };
  function pv(e) {
    return e.replace(/start|end/g, function (t) {
      return UP[t];
    });
  }
  function Ep(e) {
    var t = vt(e),
      n = t.pageXOffset,
      r = t.pageYOffset;
    return { scrollLeft: n, scrollTop: r };
  }
  function _p(e) {
    return Xi(cr(e)).left + Ep(e).scrollLeft;
  }
  function QP(e, t) {
    var n = vt(e),
      r = cr(e),
      i = n.visualViewport,
      o = r.clientWidth,
      a = r.clientHeight,
      s = 0,
      l = 0;
    if (i) {
      (o = i.width), (a = i.height);
      var u = Mw();
      (u || (!u && t === "fixed")) && ((s = i.offsetLeft), (l = i.offsetTop));
    }
    return { width: o, height: a, x: s + _p(e), y: l };
  }
  function qP(e) {
    var t,
      n = cr(e),
      r = Ep(e),
      i = (t = e.ownerDocument) == null ? void 0 : t.body,
      o = Tr(
        n.scrollWidth,
        n.clientWidth,
        i ? i.scrollWidth : 0,
        i ? i.clientWidth : 0
      ),
      a = Tr(
        n.scrollHeight,
        n.clientHeight,
        i ? i.scrollHeight : 0,
        i ? i.clientHeight : 0
      ),
      s = -r.scrollLeft + _p(e),
      l = -r.scrollTop;
    return (
      Sn(i || n).direction === "rtl" &&
        (s += Tr(n.clientWidth, i ? i.clientWidth : 0) - o),
      { width: o, height: a, x: s, y: l }
    );
  }
  function Cp(e) {
    var t = Sn(e),
      n = t.overflow,
      r = t.overflowX,
      i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + r);
  }
  function Iw(e) {
    return ["html", "body", "#document"].indexOf(rr(e)) >= 0
      ? e.ownerDocument.body
      : rn(e) && Cp(e)
      ? e
      : Iw(nu(e));
  }
  function Yo(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Iw(e),
      i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
      o = vt(r),
      a = i ? [o].concat(o.visualViewport || [], Cp(r) ? r : []) : r,
      s = t.concat(a);
    return i ? s : s.concat(Yo(nu(a)));
  }
  function Rf(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function WP(e, t) {
    var n = Xi(e, !1, t === "fixed");
    return (
      (n.top = n.top + e.clientTop),
      (n.left = n.left + e.clientLeft),
      (n.bottom = n.top + e.clientHeight),
      (n.right = n.left + e.clientWidth),
      (n.width = e.clientWidth),
      (n.height = e.clientHeight),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function hv(e, t, n) {
    return t === Pw ? Rf(QP(e, n)) : zr(t) ? WP(t, n) : Rf(qP(cr(e)));
  }
  function YP(e) {
    var t = Yo(nu(e)),
      n = ["absolute", "fixed"].indexOf(Sn(e).position) >= 0,
      r = n && rn(e) ? Fa(e) : e;
    return zr(r)
      ? t.filter(function (i) {
          return zr(i) && Dw(i, r) && rr(i) !== "body";
        })
      : [];
  }
  function GP(e, t, n, r) {
    var i = t === "clippingParents" ? YP(e) : [].concat(t),
      o = [].concat(i, [n]),
      a = o[0],
      s = o.reduce(function (l, u) {
        var c = hv(e, u, r);
        return (
          (l.top = Tr(c.top, l.top)),
          (l.right = xl(c.right, l.right)),
          (l.bottom = xl(c.bottom, l.bottom)),
          (l.left = Tr(c.left, l.left)),
          l
        );
      }, hv(e, a, r));
    return (
      (s.width = s.right - s.left),
      (s.height = s.bottom - s.top),
      (s.x = s.left),
      (s.y = s.top),
      s
    );
  }
  function Fw(e) {
    var t = e.reference,
      n = e.element,
      r = e.placement,
      i = r ? nn(r) : null,
      o = r ? Ki(r) : null,
      a = t.x + t.width / 2 - n.width / 2,
      s = t.y + t.height / 2 - n.height / 2,
      l;
    switch (i) {
      case ot:
        l = { x: a, y: t.y - n.height };
        break;
      case Ot:
        l = { x: a, y: t.y + t.height };
        break;
      case Pt:
        l = { x: t.x + t.width, y: s };
        break;
      case at:
        l = { x: t.x - n.width, y: s };
        break;
      default:
        l = { x: t.x, y: t.y };
    }
    var u = i ? Sp(i) : null;
    if (u != null) {
      var c = u === "y" ? "height" : "width";
      switch (o) {
        case Yi:
          l[u] = l[u] - (t[c] / 2 - n[c] / 2);
          break;
        case Sa:
          l[u] = l[u] + (t[c] / 2 - n[c] / 2);
          break;
      }
    }
    return l;
  }
  function Ea(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      i = r === void 0 ? e.placement : r,
      o = n.strategy,
      a = o === void 0 ? e.strategy : o,
      s = n.boundary,
      l = s === void 0 ? gP : s,
      u = n.rootBoundary,
      c = u === void 0 ? Pw : u,
      f = n.elementContext,
      d = f === void 0 ? _o : f,
      p = n.altBoundary,
      g = p === void 0 ? !1 : p,
      y = n.padding,
      b = y === void 0 ? 0 : y,
      m = jw(typeof b != "number" ? b : Aw(b, Ia)),
      h = d === _o ? wP : _o,
      v = e.rects.popper,
      x = e.elements[g ? h : d],
      E = GP(zr(x) ? x : x.contextElement || cr(e.elements.popper), l, c, a),
      _ = Xi(e.elements.reference),
      C = Fw({ reference: _, element: v, strategy: "absolute", placement: i }),
      N = Rf(Object.assign({}, v, C)),
      M = d === _o ? N : _,
      P = {
        top: E.top - M.top + m.top,
        bottom: M.bottom - E.bottom + m.bottom,
        left: E.left - M.left + m.left,
        right: M.right - E.right + m.right,
      },
      L = e.modifiersData.offset;
    if (d === _o && L) {
      var B = L[i];
      Object.keys(P).forEach(function (D) {
        var k = [Pt, Ot].indexOf(D) >= 0 ? 1 : -1,
          j = [ot, Ot].indexOf(D) >= 0 ? "y" : "x";
        P[D] += B[j] * k;
      });
    }
    return P;
  }
  function XP(e, t) {
    t === void 0 && (t = {});
    var n = t,
      r = n.placement,
      i = n.boundary,
      o = n.rootBoundary,
      a = n.padding,
      s = n.flipVariations,
      l = n.allowedAutoPlacements,
      u = l === void 0 ? Tw : l,
      c = Ki(r),
      f = c
        ? s
          ? cv
          : cv.filter(function (g) {
              return Ki(g) === c;
            })
        : Ia,
      d = f.filter(function (g) {
        return u.indexOf(g) >= 0;
      });
    d.length === 0 && (d = f);
    var p = d.reduce(function (g, y) {
      return (
        (g[y] = Ea(e, {
          placement: y,
          boundary: i,
          rootBoundary: o,
          padding: a,
        })[nn(y)]),
        g
      );
    }, {});
    return Object.keys(p).sort(function (g, y) {
      return p[g] - p[y];
    });
  }
  function KP(e) {
    if (nn(e) === wp) return [];
    var t = Ds(e);
    return [pv(e), t, pv(t)];
  }
  function ZP(e) {
    var t = e.state,
      n = e.options,
      r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (
        var i = n.mainAxis,
          o = i === void 0 ? !0 : i,
          a = n.altAxis,
          s = a === void 0 ? !0 : a,
          l = n.fallbackPlacements,
          u = n.padding,
          c = n.boundary,
          f = n.rootBoundary,
          d = n.altBoundary,
          p = n.flipVariations,
          g = p === void 0 ? !0 : p,
          y = n.allowedAutoPlacements,
          b = t.options.placement,
          m = nn(b),
          h = m === b,
          v = l || (h || !g ? [Ds(b)] : KP(b)),
          x = [b].concat(v).reduce(function (U, X) {
            return U.concat(
              nn(X) === wp
                ? XP(t, {
                    placement: X,
                    boundary: c,
                    rootBoundary: f,
                    padding: u,
                    flipVariations: g,
                    allowedAutoPlacements: y,
                  })
                : X
            );
          }, []),
          E = t.rects.reference,
          _ = t.rects.popper,
          C = new Map(),
          N = !0,
          M = x[0],
          P = 0;
        P < x.length;
        P++
      ) {
        var L = x[P],
          B = nn(L),
          D = Ki(L) === Yi,
          k = [ot, Ot].indexOf(B) >= 0,
          j = k ? "width" : "height",
          R = Ea(t, {
            placement: L,
            boundary: c,
            rootBoundary: f,
            altBoundary: d,
            padding: u,
          }),
          T = k ? (D ? Pt : at) : D ? Ot : ot;
        E[j] > _[j] && (T = Ds(T));
        var O = Ds(T),
          A = [];
        if (
          (o && A.push(R[B] <= 0),
          s && A.push(R[T] <= 0, R[O] <= 0),
          A.every(function (U) {
            return U;
          }))
        ) {
          (M = L), (N = !1);
          break;
        }
        C.set(L, A);
      }
      if (N)
        for (
          var I = g ? 3 : 1,
            V = function (X) {
              var K = x.find(function (J) {
                var ne = C.get(J);
                if (ne)
                  return ne.slice(0, X).every(function (he) {
                    return he;
                  });
              });
              if (K) return (M = K), "break";
            },
            z = I;
          z > 0;
          z--
        ) {
          var Y = V(z);
          if (Y === "break") break;
        }
      t.placement !== M &&
        ((t.modifiersData[r]._skip = !0), (t.placement = M), (t.reset = !0));
    }
  }
  const JP = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: ZP,
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function mv(e, t, n) {
    return (
      n === void 0 && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function vv(e) {
    return [ot, Pt, Ot, at].some(function (t) {
      return e[t] >= 0;
    });
  }
  function eT(e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      i = t.rects.popper,
      o = t.modifiersData.preventOverflow,
      a = Ea(t, { elementContext: "reference" }),
      s = Ea(t, { altBoundary: !0 }),
      l = mv(a, r),
      u = mv(s, i, o),
      c = vv(l),
      f = vv(u);
    (t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: c,
      hasPopperEscaped: f,
    }),
      (t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": f,
      }));
  }
  const tT = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: eT,
  };
  function nT(e, t, n) {
    var r = nn(e),
      i = [at, ot].indexOf(r) >= 0 ? -1 : 1,
      o =
        typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
      a = o[0],
      s = o[1];
    return (
      (a = a || 0),
      (s = (s || 0) * i),
      [at, Pt].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
    );
  }
  function rT(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.offset,
      o = i === void 0 ? [0, 0] : i,
      a = Tw.reduce(function (c, f) {
        return (c[f] = nT(f, t.rects, o)), c;
      }, {}),
      s = a[t.placement],
      l = s.x,
      u = s.y;
    t.modifiersData.popperOffsets != null &&
      ((t.modifiersData.popperOffsets.x += l),
      (t.modifiersData.popperOffsets.y += u)),
      (t.modifiersData[r] = a);
  }
  const iT = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: rT,
  };
  function oT(e) {
    var t = e.state,
      n = e.name;
    t.modifiersData[n] = Fw({
      reference: t.rects.reference,
      element: t.rects.popper,
      strategy: "absolute",
      placement: t.placement,
    });
  }
  const aT = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: oT,
    data: {},
  };
  function sT(e) {
    return e === "x" ? "y" : "x";
  }
  function lT(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      i = n.mainAxis,
      o = i === void 0 ? !0 : i,
      a = n.altAxis,
      s = a === void 0 ? !1 : a,
      l = n.boundary,
      u = n.rootBoundary,
      c = n.altBoundary,
      f = n.padding,
      d = n.tether,
      p = d === void 0 ? !0 : d,
      g = n.tetherOffset,
      y = g === void 0 ? 0 : g,
      b = Ea(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
      m = nn(t.placement),
      h = Ki(t.placement),
      v = !h,
      x = Sp(m),
      E = sT(x),
      _ = t.modifiersData.popperOffsets,
      C = t.rects.reference,
      N = t.rects.popper,
      M =
        typeof y == "function"
          ? y(Object.assign({}, t.rects, { placement: t.placement }))
          : y,
      P =
        typeof M == "number"
          ? { mainAxis: M, altAxis: M }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, M),
      L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      B = { x: 0, y: 0 };
    if (_) {
      if (o) {
        var D,
          k = x === "y" ? ot : at,
          j = x === "y" ? Ot : Pt,
          R = x === "y" ? "height" : "width",
          T = _[x],
          O = T + b[k],
          A = T - b[j],
          I = p ? -N[R] / 2 : 0,
          V = h === Yi ? C[R] : N[R],
          z = h === Yi ? -N[R] : -C[R],
          Y = t.elements.arrow,
          U = p && Y ? bp(Y) : { width: 0, height: 0 },
          X = t.modifiersData["arrow#persistent"]
            ? t.modifiersData["arrow#persistent"].padding
            : Rw(),
          K = X[k],
          J = X[j],
          ne = Wo(0, C[R], U[R]),
          he = v ? C[R] / 2 - I - ne - K - P.mainAxis : V - ne - K - P.mainAxis,
          ye = v
            ? -C[R] / 2 + I + ne + J + P.mainAxis
            : z + ne + J + P.mainAxis,
          ze = t.elements.arrow && Fa(t.elements.arrow),
          lt = ze ? (x === "y" ? ze.clientTop || 0 : ze.clientLeft || 0) : 0,
          ut = (D = L == null ? void 0 : L[x]) != null ? D : 0,
          be = T + he - ut - lt,
          le = T + ye - ut,
          je = Wo(p ? xl(O, be) : O, T, p ? Tr(A, le) : A);
        (_[x] = je), (B[x] = je - T);
      }
      if (s) {
        var G,
          Qt = x === "x" ? ot : at,
          sn = x === "x" ? Ot : Pt,
          ct = _[E],
          qt = E === "y" ? "height" : "width",
          ln = ct + b[Qt],
          Wt = ct - b[sn],
          wt = [ot, at].indexOf(m) !== -1,
          un = (G = L == null ? void 0 : L[E]) != null ? G : 0,
          Tt = wt ? ln : ct - C[qt] - N[qt] - un + P.altAxis,
          Yt = wt ? ct + C[qt] + N[qt] - un - P.altAxis : Wt,
          kn = p && wt ? DP(Tt, ct, Yt) : Wo(p ? Tt : ln, ct, p ? Yt : Wt);
        (_[E] = kn), (B[E] = kn - ct);
      }
      t.modifiersData[r] = B;
    }
  }
  const uT = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: lT,
    requiresIfExists: ["offset"],
  };
  function cT(e) {
    return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
  }
  function fT(e) {
    return e === vt(e) || !rn(e) ? Ep(e) : cT(e);
  }
  function dT(e) {
    var t = e.getBoundingClientRect(),
      n = Gi(t.width) / e.offsetWidth || 1,
      r = Gi(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function pT(e, t, n) {
    n === void 0 && (n = !1);
    var r = rn(t),
      i = rn(t) && dT(t),
      o = cr(t),
      a = Xi(e, i, n),
      s = { scrollLeft: 0, scrollTop: 0 },
      l = { x: 0, y: 0 };
    return (
      (r || (!r && !n)) &&
        ((rr(t) !== "body" || Cp(o)) && (s = fT(t)),
        rn(t)
          ? ((l = Xi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
          : o && (l.x = _p(o))),
      {
        x: a.left + s.scrollLeft - l.x,
        y: a.top + s.scrollTop - l.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function hT(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    e.forEach(function (o) {
      t.set(o.name, o);
    });
    function i(o) {
      n.add(o.name);
      var a = [].concat(o.requires || [], o.requiresIfExists || []);
      a.forEach(function (s) {
        if (!n.has(s)) {
          var l = t.get(s);
          l && i(l);
        }
      }),
        r.push(o);
    }
    return (
      e.forEach(function (o) {
        n.has(o.name) || i(o);
      }),
      r
    );
  }
  function mT(e) {
    var t = hT(e);
    return PP.reduce(function (n, r) {
      return n.concat(
        t.filter(function (i) {
          return i.phase === r;
        })
      );
    }, []);
  }
  function vT(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function yT(e) {
    var t = e.reduce(function (n, r) {
      var i = n[r.name];
      return (
        (n[r.name] = i
          ? Object.assign({}, i, r, {
              options: Object.assign({}, i.options, r.options),
              data: Object.assign({}, i.data, r.data),
            })
          : r),
        n
      );
    }, {});
    return Object.keys(t).map(function (n) {
      return t[n];
    });
  }
  var yv = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function gv() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function gT(e) {
    e === void 0 && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = n === void 0 ? [] : n,
      i = t.defaultOptions,
      o = i === void 0 ? yv : i;
    return function (s, l, u) {
      u === void 0 && (u = o);
      var c = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, yv, o),
          modifiersData: {},
          elements: { reference: s, popper: l },
          attributes: {},
          styles: {},
        },
        f = [],
        d = !1,
        p = {
          state: c,
          setOptions: function (m) {
            var h = typeof m == "function" ? m(c.options) : m;
            y(),
              (c.options = Object.assign({}, o, c.options, h)),
              (c.scrollParents = {
                reference: zr(s)
                  ? Yo(s)
                  : s.contextElement
                  ? Yo(s.contextElement)
                  : [],
                popper: Yo(l),
              });
            var v = mT(yT([].concat(r, c.options.modifiers)));
            return (
              (c.orderedModifiers = v.filter(function (x) {
                return x.enabled;
              })),
              g(),
              p.update()
            );
          },
          forceUpdate: function () {
            if (!d) {
              var m = c.elements,
                h = m.reference,
                v = m.popper;
              if (gv(h, v)) {
                (c.rects = {
                  reference: pT(h, Fa(v), c.options.strategy === "fixed"),
                  popper: bp(v),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function (P) {
                    return (c.modifiersData[P.name] = Object.assign(
                      {},
                      P.data
                    ));
                  });
                for (var x = 0; x < c.orderedModifiers.length; x++) {
                  if (c.reset === !0) {
                    (c.reset = !1), (x = -1);
                    continue;
                  }
                  var E = c.orderedModifiers[x],
                    _ = E.fn,
                    C = E.options,
                    N = C === void 0 ? {} : C,
                    M = E.name;
                  typeof _ == "function" &&
                    (c =
                      _({ state: c, options: N, name: M, instance: p }) || c);
                }
              }
            }
          },
          update: vT(function () {
            return new Promise(function (b) {
              p.forceUpdate(), b(c);
            });
          }),
          destroy: function () {
            y(), (d = !0);
          },
        };
      if (!gv(s, l)) return p;
      p.setOptions(u).then(function (b) {
        !d && u.onFirstUpdate && u.onFirstUpdate(b);
      });
      function g() {
        c.orderedModifiers.forEach(function (b) {
          var m = b.name,
            h = b.options,
            v = h === void 0 ? {} : h,
            x = b.effect;
          if (typeof x == "function") {
            var E = x({ state: c, name: m, instance: p, options: v }),
              _ = function () {};
            f.push(E || _);
          }
        });
      }
      function y() {
        f.forEach(function (b) {
          return b();
        }),
          (f = []);
      }
      return p;
    };
  }
  const wT = gT({ defaultModifiers: [tT, aT, zP, VP, iT, JP, uT, IP] }),
    xT = ["enabled", "placement", "strategy", "modifiers"];
  function bT(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      o;
    for (o = 0; o < r.length; o++)
      (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  const ST = {
      name: "applyStyles",
      enabled: !1,
      phase: "afterWrite",
      fn: () => {},
    },
    ET = {
      name: "ariaDescribedBy",
      enabled: !0,
      phase: "afterWrite",
      effect:
        ({ state: e }) =>
        () => {
          const { reference: t, popper: n } = e.elements;
          if ("removeAttribute" in t) {
            const r = (t.getAttribute("aria-describedby") || "")
              .split(",")
              .filter((i) => i.trim() !== n.id);
            r.length
              ? t.setAttribute("aria-describedby", r.join(","))
              : t.removeAttribute("aria-describedby");
          }
        },
      fn: ({ state: e }) => {
        var t;
        const { popper: n, reference: r } = e.elements,
          i = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
        if (n.id && i === "tooltip" && "setAttribute" in r) {
          const o = r.getAttribute("aria-describedby");
          if (o && o.split(",").indexOf(n.id) !== -1) return;
          r.setAttribute("aria-describedby", o ? `${o},${n.id}` : n.id);
        }
      },
    },
    _T = [];
  function CT(e, t, n = {}) {
    let {
        enabled: r = !0,
        placement: i = "bottom",
        strategy: o = "absolute",
        modifiers: a = _T,
      } = n,
      s = bT(n, xT);
    const l = S.useRef(a),
      u = S.useRef(),
      c = S.useCallback(() => {
        var b;
        (b = u.current) == null || b.update();
      }, []),
      f = S.useCallback(() => {
        var b;
        (b = u.current) == null || b.forceUpdate();
      }, []),
      [d, p] = yP(
        S.useState({
          placement: i,
          update: c,
          forceUpdate: f,
          attributes: {},
          styles: { popper: {}, arrow: {} },
        })
      ),
      g = S.useMemo(
        () => ({
          name: "updateStateModifier",
          enabled: !0,
          phase: "write",
          requires: ["computeStyles"],
          fn: ({ state: b }) => {
            const m = {},
              h = {};
            Object.keys(b.elements).forEach((v) => {
              (m[v] = b.styles[v]), (h[v] = b.attributes[v]);
            }),
              p({
                state: b,
                styles: m,
                attributes: h,
                update: c,
                forceUpdate: f,
                placement: b.placement,
              });
          },
        }),
        [c, f, p]
      ),
      y = S.useMemo(
        () => (qo(l.current, a) || (l.current = a), l.current),
        [a]
      );
    return (
      S.useEffect(() => {
        !u.current ||
          !r ||
          u.current.setOptions({
            placement: i,
            strategy: o,
            modifiers: [...y, g, ST],
          });
      }, [o, i, g, r, y]),
      S.useEffect(() => {
        if (!(!r || e == null || t == null))
          return (
            (u.current = wT(
              e,
              t,
              Object.assign({}, s, {
                placement: i,
                strategy: o,
                modifiers: [...y, ET, g],
              })
            )),
            () => {
              u.current != null &&
                (u.current.destroy(),
                (u.current = void 0),
                p((b) =>
                  Object.assign({}, b, {
                    attributes: {},
                    styles: { popper: {} },
                  })
                ));
            }
          );
      }, [r, e, t]),
      d
    );
  }
  function jf(e, t) {
    if (e.contains) return e.contains(t);
    if (e.compareDocumentPosition)
      return e === t || !!(e.compareDocumentPosition(t) & 16);
  }
  var kT = function () {},
    NT = kT;
  const OT = Na(NT),
    wv = () => {};
  function PT(e) {
    return e.button === 0;
  }
  function TT(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  const Rs = (e) => e && ("current" in e ? e.current : e),
    xv = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
  function MT(e, t = wv, { disabled: n, clickTrigger: r = "click" } = {}) {
    const i = S.useRef(!1),
      o = S.useRef(!1),
      a = S.useCallback(
        (u) => {
          const c = Rs(e);
          OT(
            !!c,
            "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
          ),
            (i.current =
              !c || TT(u) || !PT(u) || !!jf(c, u.target) || o.current),
            (o.current = !1);
        },
        [e]
      ),
      s = Wi((u) => {
        const c = Rs(e);
        c && jf(c, u.target) && (o.current = !0);
      }),
      l = Wi((u) => {
        i.current || t(u);
      });
    S.useEffect(() => {
      var u, c;
      if (n || e == null) return;
      const f = tu(Rs(e)),
        d = f.defaultView || window;
      let p =
          (u = d.event) != null ? u : (c = d.parent) == null ? void 0 : c.event,
        g = null;
      xv[r] && (g = kr(f, xv[r], s, !0));
      const y = kr(f, r, a, !0),
        b = kr(f, r, (h) => {
          if (h === p) {
            p = void 0;
            return;
          }
          l(h);
        });
      let m = [];
      return (
        "ontouchstart" in f.documentElement &&
          (m = [].slice
            .call(f.body.children)
            .map((h) => kr(h, "mousemove", wv))),
        () => {
          g == null || g(), y(), b(), m.forEach((h) => h());
        }
      );
    }, [e, n, r, a, s, l]);
  }
  function DT(e) {
    const t = {};
    return Array.isArray(e)
      ? (e == null ||
          e.forEach((n) => {
            t[n.name] = n;
          }),
        t)
      : e || t;
  }
  function RT(e = {}) {
    return Array.isArray(e)
      ? e
      : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
  }
  function jT({
    enabled: e,
    enableEvents: t,
    placement: n,
    flip: r,
    offset: i,
    fixed: o,
    containerPadding: a,
    arrowElement: s,
    popperConfig: l = {},
  }) {
    var u, c, f, d, p;
    const g = DT(l.modifiers);
    return Object.assign({}, l, {
      placement: n,
      enabled: e,
      strategy: o ? "fixed" : l.strategy,
      modifiers: RT(
        Object.assign({}, g, {
          eventListeners: {
            enabled: t,
            options: (u = g.eventListeners) == null ? void 0 : u.options,
          },
          preventOverflow: Object.assign({}, g.preventOverflow, {
            options: a
              ? Object.assign(
                  { padding: a },
                  (c = g.preventOverflow) == null ? void 0 : c.options
                )
              : (f = g.preventOverflow) == null
              ? void 0
              : f.options,
          }),
          offset: {
            options: Object.assign(
              { offset: i },
              (d = g.offset) == null ? void 0 : d.options
            ),
          },
          arrow: Object.assign({}, g.arrow, {
            enabled: !!s,
            options: Object.assign(
              {},
              (p = g.arrow) == null ? void 0 : p.options,
              { element: s }
            ),
          }),
          flip: Object.assign({ enabled: !!r }, g.flip),
        })
      ),
    });
  }
  const Lw = S.createContext(gp ? window : void 0);
  Lw.Provider;
  function AT() {
    return S.useContext(Lw);
  }
  const ec = (e, t) =>
    gp
      ? e == null
        ? (t || tu()).body
        : (typeof e == "function" && (e = e()),
          e && "current" in e && (e = e.current),
          e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
      : null;
  function bv(e, t) {
    const n = AT(),
      [r, i] = S.useState(() => ec(e, n == null ? void 0 : n.document));
    if (!r) {
      const o = ec(e);
      o && i(o);
    }
    return (
      S.useEffect(() => {
        t && r && t(r);
      }, [t, r]),
      S.useEffect(() => {
        const o = ec(e);
        o !== r && i(o);
      }, [e, r]),
      r
    );
  }
  function IT({
    children: e,
    in: t,
    onExited: n,
    mountOnEnter: r,
    unmountOnExit: i,
  }) {
    const o = S.useRef(null),
      a = S.useRef(t),
      s = Wi(n);
    S.useEffect(() => {
      t ? (a.current = !0) : s(o.current);
    }, [t, s]);
    const l = ao(o, e.ref),
      u = S.cloneElement(e, { ref: l });
    return t ? u : i || (!a.current && r) ? null : u;
  }
  function FT({ in: e, onTransition: t }) {
    const n = S.useRef(null),
      r = S.useRef(!0),
      i = Wi(t);
    return (
      Tf(() => {
        if (!n.current) return;
        let o = !1;
        return (
          i({
            in: e,
            element: n.current,
            initial: r.current,
            isStale: () => o,
          }),
          () => {
            o = !0;
          }
        );
      }, [e, i]),
      Tf(
        () => (
          (r.current = !1),
          () => {
            r.current = !0;
          }
        ),
        []
      ),
      n
    );
  }
  function LT({
    children: e,
    in: t,
    onExited: n,
    onEntered: r,
    transition: i,
  }) {
    const [o, a] = S.useState(!t);
    t && o && a(!1);
    const s = FT({
        in: !!t,
        onTransition: (u) => {
          const c = () => {
            u.isStale() ||
              (u.in
                ? r == null || r(u.element, u.initial)
                : (a(!0), n == null || n(u.element)));
          };
          Promise.resolve(i(u)).then(c, (f) => {
            throw (u.in || a(!0), f);
          });
        },
      }),
      l = ao(s, e.ref);
    return o && !t ? null : S.cloneElement(e, { ref: l });
  }
  function BT(e, t, n) {
    return e
      ? w.jsx(e, Object.assign({}, n))
      : t
      ? w.jsx(LT, Object.assign({}, n, { transition: t }))
      : w.jsx(IT, Object.assign({}, n));
  }
  function zT(e) {
    return e.code === "Escape" || e.keyCode === 27;
  }
  function $T(e, t) {
    return e.classList
      ? !!t && e.classList.contains(t)
      : (" " + (e.className.baseVal || e.className) + " ").indexOf(
          " " + t + " "
        ) !== -1;
  }
  const VT = () => {};
  function HT(e, t, { disabled: n, clickTrigger: r } = {}) {
    const i = t || VT;
    MT(e, i, { disabled: n, clickTrigger: r });
    const o = Wi((a) => {
      zT(a) && i(a);
    });
    S.useEffect(() => {
      if (n || e == null) return;
      const a = tu(Rs(e));
      let s = (a.defaultView || window).event;
      const l = kr(a, "keyup", (u) => {
        if (u === s) {
          s = void 0;
          return;
        }
        o(u);
      });
      return () => {
        l();
      };
    }, [e, n, o]);
  }
  const Bw = S.forwardRef((e, t) => {
    const {
        flip: n,
        offset: r,
        placement: i,
        containerPadding: o,
        popperConfig: a = {},
        transition: s,
        runTransition: l,
      } = e,
      [u, c] = av(),
      [f, d] = av(),
      p = ao(c, t),
      g = bv(e.container),
      y = bv(e.target),
      [b, m] = S.useState(!e.show),
      h = CT(
        y,
        u,
        jT({
          placement: i,
          enableEvents: !!e.show,
          containerPadding: o || 5,
          flip: n,
          offset: r,
          arrowElement: f,
          popperConfig: a,
        })
      );
    e.show && b && m(!1);
    const v = (...L) => {
        m(!0), e.onExited && e.onExited(...L);
      },
      x = e.show || !b;
    if (
      (HT(u, e.onHide, {
        disabled: !e.rootClose || e.rootCloseDisabled,
        clickTrigger: e.rootCloseEvent,
      }),
      !x)
    )
      return null;
    const {
      onExit: E,
      onExiting: _,
      onEnter: C,
      onEntering: N,
      onEntered: M,
    } = e;
    let P = e.children(
      Object.assign({}, h.attributes.popper, {
        style: h.styles.popper,
        ref: p,
      }),
      {
        popper: h,
        placement: i,
        show: !!e.show,
        arrowProps: Object.assign({}, h.attributes.arrow, {
          style: h.styles.arrow,
          ref: d,
        }),
      }
    );
    return (
      (P = BT(s, l, {
        in: !!e.show,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: P,
        onExit: E,
        onExiting: _,
        onExited: v,
        onEnter: C,
        onEntering: N,
        onEntered: M,
      })),
      g ? mi.createPortal(P, g) : null
    );
  });
  Bw.displayName = "Overlay";
  const UT = Bw,
    QT = kw("popover-header"),
    zw = kw("popover-body");
  function qT(e, t) {
    let n = e;
    return (
      e === "left"
        ? (n = t ? "end" : "start")
        : e === "right" && (n = t ? "start" : "end"),
      n
    );
  }
  function WT(e = "absolute") {
    return {
      position: e,
      top: "0",
      left: "0",
      opacity: "0",
      pointerEvents: "none",
    };
  }
  const YT = S.forwardRef(
      (
        {
          bsPrefix: e,
          placement: t = "right",
          className: n,
          style: r,
          children: i,
          body: o,
          arrowProps: a,
          hasDoneInitialMeasure: s,
          popper: l,
          show: u,
          ...c
        },
        f
      ) => {
        const d = eu(e, "popover"),
          p = IO(),
          [g] = (t == null ? void 0 : t.split("-")) || [],
          y = qT(g, p);
        let b = r;
        return (
          u && !s && (b = { ...r, ...WT(l == null ? void 0 : l.strategy) }),
          w.jsxs("div", {
            "ref": f,
            "role": "tooltip",
            "style": b,
            "x-placement": g,
            "className": Aa(n, d, g && `bs-popover-${y}`),
            ...c,
            "children": [
              w.jsx("div", { className: "popover-arrow", ...a }),
              o ? w.jsx(zw, { children: i }) : i,
            ],
          })
        );
      }
    ),
    js = Object.assign(YT, { Header: QT, Body: zw, POPPER_OFFSET: [0, 8] });
  function GT(e) {
    const t = S.useRef(null),
      n = eu(void 0, "popover"),
      r = S.useMemo(
        () => ({
          name: "offset",
          options: {
            offset: () =>
              t.current && $T(t.current, n)
                ? e || js.POPPER_OFFSET
                : e || [0, 0],
          },
        }),
        [e, n]
      );
    return [t, [r]];
  }
  function XT(e, t) {
    const { ref: n } = e,
      { ref: r } = t;
    (e.ref = n.__wrapped || (n.__wrapped = (i) => n(wl(i)))),
      (t.ref = r.__wrapped || (r.__wrapped = (i) => r(wl(i))));
  }
  const $w = S.forwardRef(
    (
      {
        children: e,
        transition: t = sv,
        popperConfig: n = {},
        rootClose: r = !1,
        placement: i = "top",
        show: o = !1,
        ...a
      },
      s
    ) => {
      const l = S.useRef({}),
        [u, c] = S.useState(null),
        [f, d] = GT(a.offset),
        p = ao(s, f),
        g = t === !0 ? sv : t || void 0,
        y = Wi((b) => {
          c(b), n == null || n.onFirstUpdate == null || n.onFirstUpdate(b);
        });
      return (
        Tf(() => {
          u && (l.current.scheduleUpdate == null || l.current.scheduleUpdate());
        }, [u]),
        S.useEffect(() => {
          o || c(null);
        }, [o]),
        w.jsx(UT, {
          ...a,
          ref: p,
          popperConfig: {
            ...n,
            modifiers: d.concat(n.modifiers || []),
            onFirstUpdate: y,
          },
          transition: g,
          rootClose: r,
          placement: i,
          show: o,
          children: (b, { arrowProps: m, popper: h, show: v }) => {
            var x, E;
            XT(b, m);
            const _ = h == null ? void 0 : h.placement,
              C = Object.assign(l.current, {
                state: h == null ? void 0 : h.state,
                scheduleUpdate: h == null ? void 0 : h.update,
                placement: _,
                outOfBoundaries:
                  (h == null ||
                  (x = h.state) == null ||
                  (E = x.modifiersData.hide) == null
                    ? void 0
                    : E.isReferenceHidden) || !1,
                strategy: n.strategy,
              }),
              N = !!u;
            return typeof e == "function"
              ? e({
                  ...b,
                  placement: _,
                  show: v,
                  ...(!t && v && { className: "show" }),
                  popper: C,
                  arrowProps: m,
                  hasDoneInitialMeasure: N,
                })
              : S.cloneElement(e, {
                  ...b,
                  placement: _,
                  arrowProps: m,
                  popper: C,
                  hasDoneInitialMeasure: N,
                  className: Aa(e.props.className, !t && v && "show"),
                  style: { ...e.props.style, ...b.style },
                });
          },
        })
      );
    }
  );
  $w.displayName = "Overlay";
  const KT = $w;
  function ZT(e) {
    return e && typeof e == "object" ? e : { show: e, hide: e };
  }
  function Sv(e, t, n) {
    const [r] = t,
      i = r.currentTarget,
      o = r.relatedTarget || r.nativeEvent[n];
    (!o || o !== i) && !jf(i, o) && e(...t);
  }
  function JT({
    trigger: e = ["hover", "focus"],
    overlay: t,
    children: n,
    popperConfig: r = {},
    show: i,
    defaultShow: o = !1,
    onToggle: a,
    delay: s,
    placement: l,
    flip: u = l && l.indexOf("auto") !== -1,
    ...c
  }) {
    const f = S.useRef(null),
      d = ao(f, n.ref),
      p = vP(),
      g = S.useRef(""),
      [y, b] = DO(i, o, a),
      m = ZT(s),
      {
        onFocus: h,
        onBlur: v,
        onClick: x,
      } = typeof n != "function" ? S.Children.only(n).props : {},
      E = (j) => {
        d(wl(j));
      },
      _ = S.useCallback(() => {
        if ((p.clear(), (g.current = "show"), !m.show)) {
          b(!0);
          return;
        }
        p.set(() => {
          g.current === "show" && b(!0);
        }, m.show);
      }, [m.show, b, p]),
      C = S.useCallback(() => {
        if ((p.clear(), (g.current = "hide"), !m.hide)) {
          b(!1);
          return;
        }
        p.set(() => {
          g.current === "hide" && b(!1);
        }, m.hide);
      }, [m.hide, b, p]),
      N = S.useCallback(
        (...j) => {
          _(), h == null || h(...j);
        },
        [_, h]
      ),
      M = S.useCallback(
        (...j) => {
          C(), v == null || v(...j);
        },
        [C, v]
      ),
      P = S.useCallback(
        (...j) => {
          b(!y), x == null || x(...j);
        },
        [x, b, y]
      ),
      L = S.useCallback(
        (...j) => {
          Sv(_, j, "fromElement");
        },
        [_]
      ),
      B = S.useCallback(
        (...j) => {
          Sv(C, j, "toElement");
        },
        [C]
      ),
      D = e == null ? [] : [].concat(e),
      k = { ref: E };
    return (
      D.indexOf("click") !== -1 && (k.onClick = P),
      D.indexOf("focus") !== -1 && ((k.onFocus = N), (k.onBlur = M)),
      D.indexOf("hover") !== -1 && ((k.onMouseOver = L), (k.onMouseOut = B)),
      w.jsxs(w.Fragment, {
        children: [
          typeof n == "function" ? n(k) : S.cloneElement(n, k),
          w.jsx(KT, {
            ...c,
            show: y,
            onHide: C,
            flip: u,
            placement: l,
            popperConfig: r,
            target: f.current,
            children: t,
          }),
        ],
      })
    );
  }
  const Vw = Je.createContext({ mode: "move" }),
    eM = (e) => e.connectionNodeId,
    tM = ({ data: e, isConnectable: t }) => {
      const [n, r] = S.useState(!1),
        o = !!ce(eM),
        { mode: a } = S.useContext(Vw);
      document.addEventListener("keydown", (c) => {
        (c.key.toLowerCase() === "escape" || c.code === "27") && l();
      });
      const s = () => {
          a !== "move" && r(!n);
        },
        l = () => {
          r(!1);
        },
        u = w.jsxs(js, {
          id: "course-popover",
          className: "custom-popover",
          children: [
            w.jsxs(js.Header, {
              className: "custom-popover-header",
              children: [
                w.jsx("div", {
                  className: "custom-popover-title",
                  children: e.label,
                }),
                w.jsx(ei, {
                  variant: "link",
                  className: "custom-popover-close",
                  onClick: l,
                  children: w.jsx("span", {
                    className: "custom-popover-close-icon",
                    children: "X",
                  }),
                }),
              ],
            }),
            w.jsx(js.Body, {
              className: "custom-popover-body",
              children: w.jsx("div", { children: e.desc }),
            }),
          ],
        });
      return w.jsxs(w.Fragment, {
        children: [
          !o &&
            w.jsx(qi, {
              type: "source",
              position: W.Right,
              className: "courseHandle",
              id: "a",
              onConnect: (c) => console.log("handle onConnect", c),
              isConnectable: t,
            }),
          w.jsx(qi, {
            type: "target",
            position: W.Left,
            className: "courseHandle",
            isConnectable: t,
            isConnectableStart: !1,
          }),
          w.jsx("div", {
            className: "node-wrapper",
            onClick: s,
            style: {
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              width: "140px",
            },
            children: w.jsx("div", {
              className: "node-label",
              style: { marginBottom: "4px" },
              children: e.label,
            }),
          }),
          w.jsx(JT, {
            trigger: "click",
            placement: "auto",
            show: n,
            onHide: l,
            overlay: u,
            children: w.jsx("div", {}),
          }),
        ],
      });
    };
  var Hw = { exports: {} };
  (function (e, t) {
    (function (n, r) {
      r();
    })(uo, function () {
      function n(u, c) {
        return (
          typeof c > "u"
            ? (c = { autoBom: !1 })
            : typeof c != "object" &&
              (console.warn(
                "Deprecated: Expected third argument to be a object"
              ),
              (c = { autoBom: !c })),
          c.autoBom &&
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            u.type
          )
            ? new Blob(["\uFEFF", u], { type: u.type })
            : u
        );
      }
      function r(u, c, f) {
        var d = new XMLHttpRequest();
        d.open("GET", u),
          (d.responseType = "blob"),
          (d.onload = function () {
            l(d.response, c, f);
          }),
          (d.onerror = function () {
            console.error("could not download file");
          }),
          d.send();
      }
      function i(u) {
        var c = new XMLHttpRequest();
        c.open("HEAD", u, !1);
        try {
          c.send();
        } catch {}
        return 200 <= c.status && 299 >= c.status;
      }
      function o(u) {
        try {
          u.dispatchEvent(new MouseEvent("click"));
        } catch {
          var c = document.createEvent("MouseEvents");
          c.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            0,
            0,
            0,
            80,
            20,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            u.dispatchEvent(c);
        }
      }
      var a =
          typeof window == "object" && window.window === window
            ? window
            : typeof self == "object" && self.self === self
            ? self
            : typeof uo == "object" && uo.global === uo
            ? uo
            : void 0,
        s =
          a.navigator &&
          /Macintosh/.test(navigator.userAgent) &&
          /AppleWebKit/.test(navigator.userAgent) &&
          !/Safari/.test(navigator.userAgent),
        l =
          a.saveAs ||
          (typeof window != "object" || window !== a
            ? function () {}
            : "download" in HTMLAnchorElement.prototype && !s
            ? function (u, c, f) {
                var d = a.URL || a.webkitURL,
                  p = document.createElement("a");
                (c = c || u.name || "download"),
                  (p.download = c),
                  (p.rel = "noopener"),
                  typeof u == "string"
                    ? ((p.href = u),
                      p.origin === location.origin
                        ? o(p)
                        : i(p.href)
                        ? r(u, c, f)
                        : o(p, (p.target = "_blank")))
                    : ((p.href = d.createObjectURL(u)),
                      setTimeout(function () {
                        d.revokeObjectURL(p.href);
                      }, 4e4),
                      setTimeout(function () {
                        o(p);
                      }, 0));
              }
            : "msSaveOrOpenBlob" in navigator
            ? function (u, c, f) {
                if (((c = c || u.name || "download"), typeof u != "string"))
                  navigator.msSaveOrOpenBlob(n(u, f), c);
                else if (i(u)) r(u, c, f);
                else {
                  var d = document.createElement("a");
                  (d.href = u),
                    (d.target = "_blank"),
                    setTimeout(function () {
                      o(d);
                    });
                }
              }
            : function (u, c, f, d) {
                if (
                  ((d = d || open("", "_blank")),
                  d &&
                    (d.document.title = d.document.body.innerText =
                      "downloading..."),
                  typeof u == "string")
                )
                  return r(u, c, f);
                var p = u.type === "application/octet-stream",
                  g = /constructor/i.test(a.HTMLElement) || a.safari,
                  y = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((y || (p && g) || s) && typeof FileReader < "u") {
                  var b = new FileReader();
                  (b.onloadend = function () {
                    var v = b.result;
                    (v = y
                      ? v
                      : v.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      d ? (d.location.href = v) : (location = v),
                      (d = null);
                  }),
                    b.readAsDataURL(u);
                } else {
                  var m = a.URL || a.webkitURL,
                    h = m.createObjectURL(u);
                  d ? (d.location = h) : (location.href = h),
                    (d = null),
                    setTimeout(function () {
                      m.revokeObjectURL(h);
                    }, 4e4);
                }
              });
      (a.saveAs = l.saveAs = l), (e.exports = l);
    });
  })(Hw);
  var nM = Hw.exports;
  const Ev = "example-flow",
    rM = ({ onAddNode: e, onChange: t, flowInstance: n }) => {
      const r = S.useRef(null),
        i = () => {
          r.current.click();
        },
        o = S.useCallback(
          (u) => {
            const c = async () => {
              const f = u.target.files[0];
              if (!f) {
                console.log("Error opening file: No file selected!");
                return;
              }
              const d = f.name.slice(f.name.lastIndexOf(".") + 1);
              if (d.toLowerCase() !== "json")
                return (
                  console.log(
                    `Invalid file type '${d}'! File extension must be '.json'.`
                  ),
                  c()
                );
              console.log("File opened!");
              const p = new FileReader();
              (p.onload = (g) => {
                console.log(`Reader load event: ${f.name}`);
                const y = g.target.result,
                  b = JSON.parse(y.toString());
                b
                  ? (console.log(b),
                    t(b),
                    console.log("Nodes loaded successfully"))
                  : console.log("Failed to load nodes");
              }),
                p.readAsText(f);
            };
            c().then();
          },
          [r]
        ),
        a = S.useCallback(() => {
          if (n) {
            const u = n.toObject();
            localStorage.setItem(Ev, JSON.stringify(u));
          }
        }, [n]),
        s = S.useCallback(() => {
          if (n) {
            const u = n.toObject(),
              c = new Blob([JSON.stringify(u)], { type: "application/json" });
            nM.saveAs(c, "my-flowchart.json");
          }
        }, [n]),
        l = S.useCallback(() => {
          (async () => {
            const c = JSON.parse(localStorage.getItem(Ev));
            c && t(c);
          })().then();
        }, []);
      return w.jsxs(lp, {
        id: "flowButtonPanel",
        position: "top-right",
        children: [
          w.jsx(ei, {
            variant: "secondary",
            onClick: e,
            children: "Add Course",
          }),
          w.jsx(ei, {
            variant: "secondary",
            onClick: a,
            children: "Save State",
          }),
          w.jsx(ei, { variant: "secondary", onClick: l, children: "Restore" }),
          w.jsxs(w.Fragment, {
            children: [
              w.jsx(ei, {
                variant: "secondary",
                onClick: i,
                children: "Import",
              }),
              w.jsx("input", {
                ref: r,
                type: "file",
                style: { display: "none" },
                onChange: o,
              }),
            ],
          }),
          w.jsx(ei, { variant: "secondary", onClick: s, children: "Export" }),
        ],
      });
    },
    bl = [
      {
        id: "1",
        data: {
          label: "101 - Computing Technology and You",
          units: "3",
          desc: "Introduction to the concepts, techniques, uses, applications, and terminology of computers, computing, programming, artificial intelligence, and networking. Emphasis is on the possibilities and limitations of computers and computing in a wide range of personal, commercial, and societal activities. Recommended for all students.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 100, y: 100 },
        type: "courseNode",
      },
      {
        id: "2",
        data: {
          label: "115 - Programming I",
          units: "4",
          desc: "This course gives an overview of computer organization; arithmetic and logical expressions, decision and iteration, simple I/O; subprograms; principles of good programming style, readability, documentation, structured programming concepts; top-down design and refinements; techniques of debugging and testing. Use of the above concepts will be implemented in a standard high-level programming language.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 260, y: 100 },
        type: "courseNode",
      },
      {
        id: "3",
        data: {
          label: "115W - Programming I Workshop",
          units: "1",
          desc: "A workshop designed to be taken with CS 115. Exploration of programming concepts through problem solving in a group setting.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 420, y: 100 },
        type: "courseNode",
      },
      {
        id: "4",
        data: {
          label: "210 - Introduction to Unix",
          units: "1",
          desc: "This course is an introduction to the use of Linux/Unix as a programming environment. Communicating with a Linux host, shells and shell commands, files and directories, Gnome desktop, jobs and processes, scripting, programming utilities (compiler, linker, debugger, make, hex dump, etc.).",
          labHours: "3",
          lecHours: "",
        },
        position: { x: 100, y: 200 },
        type: "courseNode",
      },
      {
        id: "5",
        data: {
          label: "215 - Programming II",
          units: "4",
          desc: "This course is the sequel to CS 115. Topics include: pointers and dynamic allocation of storage, linked lists, an introduction to the object oriented programming (OOP) paradigm, classes and objects, encapsulation, member variables and member functions, inheritance and polymorphism, scoping, templates, iterators, and error handling techniques.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 260, y: 200 },
        type: "courseNode",
      },
      {
        id: "6",
        data: {
          label: "242 - Discrete Structures for Computer Science",
          units: "4",
          desc: "This course covers fundamental mathematical concepts blended with their applications in Computer Science. Topics include: sets, functions and relations, Boolean algebra, normal forms., Karnaugh map and other minimization techniques, predicate logic, formal and informal proof techniques, relational algebra, basic counting techniques, recurrence relations, and an introduction to graph theory.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 420, y: 200 },
        type: "courseNode",
      },
      {
        id: "7",
        data: {
          label: "252 - Introduction to Computer Organization",
          units: "4",
          desc: "This course looks at the interface between computer hardware and software by introducing computer architecture and low-level programming. Topics to be covered include: data representations, digital logic, combinational and sequential circuits, computer system organization from the machine language point of view, and assembly language implementation of high-level constructs.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 580, y: 200 },
        type: "courseNode",
      },
      {
        id: "8",
        data: {
          label: "285 - Selected Topics in Computer Science",
          units: "1-4",
          desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 740, y: 200 },
        type: "courseNode",
      },
      {
        id: "9",
        data: {
          label: "315 - Data Structures",
          units: "4",
          desc: "This course introduces the concept of the organization of data into different structures to support the efficient implementation of computer algorithms. The emphasis of the course is on the internal representation of the elementary and intermediate data structures such as stacks, queues, binary trees, heaps and hash tables, their time and space requirements, and their applications. A second component of the course is the study of more advanced features of object-oriented programming.",
          labHours: "3",
          lecHours: "3",
        },
        position: { x: 100, y: 300 },
        type: "courseNode",
      },
      {
        id: "10",
        data: {
          label: "330 - Introduction to Game Programming",
          units: "3",
          desc: "This course is an introduction to the theory and practice of video game design and programming. Video games combine, in real-time, concepts in computer graphics, human-computer interaction, networking, artificial intelligence, computer aided instruction, computer architecture, and databases. This course introduces students to a variety of game engines and frameworks and explores artificially intelligent agents. Students will work as part of a team to create a complete description document for a computer game and implement a prototype of the game.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 260, y: 300 },
        type: "courseNode",
      },
      {
        id: "11",
        data: {
          label: "340 - Computer Security and Malware",
          units: "3",
          desc: "Current methods for increasing security, protecting privacy, and guaranteeing degrees of confidentiality of computer records; ensuring computer installation safety; protecting software products; preventing and dealing with crime; value systems, ethics, and human factors affecting use and misuse of computers. Discussion of recent technical, legal, and sociopolitical issues influencing computer security problems, with an emphasis on malware.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 420, y: 300 },
        type: "courseNode",
      },
      {
        id: "12",
        data: {
          label: "349 - Problem Solving in a Team Environment",
          units: "1",
          desc: "This course focuses on problem solving and program development in a team programming environment. Topics include: techniques for problem analysis and algorithm design, rapid implementation and pair programming methods, use of standard container classes and library functions. Different types of problems will be selected each semester. Students taking this course participate in regional and national programming competitions.",
          labHours: "2",
          lecHours: "",
        },
        position: { x: 580, y: 300 },
        type: "courseNode",
      },
      {
        id: "13",
        data: {
          label: "351 - Computer Architecture",
          units: "4",
          desc: "This course is the sequel to CS 252 and includes the following topics: instruction set design; stages of instruction execution: data, and control path design; pipelining; memory hierarchy; cache models and design issues; virtual memory and secondary storage; I/O interfacing. Advanced topics to include some of the following: multiprocessor systems, GPU, multicores and cluster computers.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 740, y: 300 },
        type: "courseNode",
      },
      {
        id: "14",
        data: {
          label: "355 - Database Management Systems Design",
          units: "4",
          desc: "This course focuses on the theoretical as well as the practical aspects of modern database systems. Topics include the study of the entity-relationship (E/R) model, relational algebra, data normalization, XML as a semi-structured data model, data integrity, and database administration. Current tools and technologies are used to create and manipulate sample databases.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 900, y: 300 },
        type: "courseNode",
      },
      {
        id: "15",
        data: {
          label: "360 - Object-Oriented Programming",
          units: "3",
          desc: "Principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and design patterns. Specific applications are developed in one or more object-oriented programming languages and will cover the use of application frameworks and graphical user interfaces based on object-oriented principles.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1060, y: 300 },
        type: "courseNode",
      },
      {
        id: "16",
        data: {
          label: "365 - Computer Networking and the Internet",
          units: "3",
          desc: "This course introduces the theory and practice of computer networking, with coverage of key theories in data communication and how these theories relate to current practices and will drive future practices. Network hardware implementations of local area networks, wide area networks, telephone networks, and wireless networks are investigated. Network software implementations of switches and routers, peer-to-peer networking, and hosted applications are investigated with exercises in writing and debugging network protocols in the laboratory.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1220, y: 300 },
        type: "courseNode",
      },
      {
        id: "17",
        data: {
          label: "370 - Software Design and Development",
          units: "4",
          desc: "Techniques of software design and development. Software lifecycle, requirements, formal specification, metrics, design, functional and structural testing, rapid prototyping, complexity, version control, and team management. Software metrics, tools for component-based software development. Team-based, agile, and scrum methodologies emphasized.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 1380, y: 300 },
        type: "courseNode",
      },
      {
        id: "18",
        data: {
          label: "375 - Computer Graphics",
          units: "3",
          desc: "An introduction to computer graphics. Survey of the fundamental algorithms and methodologies, including, but not limited to, polygon fill, line-drawing, antialiasing, geometric transformations, viewing and clipping, spline representation, occlusion and visible surface detection, illumination, texturing, color models, rendering, shaders, animation, and emerging techniques.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1540, y: 300 },
        type: "courseNode",
      },
      {
        id: "19",
        data: {
          label: "380 - ETS Major Field Test",
          units: "1",
          desc: "The focus of this course is preparation for the Major Field Test in Computer Science. Students will review material in the basic knowledge areas of computer science including: discrete structures, programming, algorithms and complexity, systems, software engineering, and information management. The course will culminate with students taking the Major Field Test in Computer Science administered through Educational Testing Services. This course is intended for students whom have completed the majority of required coursework in the CS major and are within one semester of graduation.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1700, y: 300 },
        type: "courseNode",
      },
      {
        id: "20",
        data: {
          label: "385 - Selected Topics in Computer Science",
          units: "1-4",
          desc: "This lower-division course may be repeated with different subject matter. Content will be indicated by the specific topic.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1860, y: 300 },
        type: "courseNode",
      },
      {
        id: "21",
        data: {
          label: "386 - Selected Topics in CS with Lab",
          units: "3",
          desc: "This course may be repeated with different subject matter for credit in the CS major.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 2020, y: 300 },
        type: "courseNode",
      },
      {
        id: "22",
        data: {
          label: "390 - Computer Science Colloquium",
          units: "1",
          desc: "Series of lectures on current developments in computer science.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2180, y: 300 },
        type: "courseNode",
      },
      {
        id: "23",
        data: {
          label: "391 - Computing Professions",
          units: "1",
          desc: "This course will introduce students to careers in the computing field, covering different career possibilities; the software engineering job search and interview process; graduate education in computing; and aspects of professionalism including communication and ethics. Students in this course will develop job application materials and practice technical and nontechnical job interviews.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2340, y: 300 },
        type: "courseNode",
      },
      {
        id: "24",
        data: {
          label: "415 - Algorithm Analysis",
          units: "4",
          desc: "This course provides a systematic approach to the design and analysis of algorithms with an emphasis on efficiency. Topics include algorithms for searching and sorting, hashing, exploring graphs, and integer and polynomial arithmetic. Foundations in recurrence relations, combinatorics, probability, and graph theory as used in algorithm analysis are covered. Standard design techniques such as divide-and-conquer, greedy method, dynamic programming, heuristics, and probabilistic algorithms along with NP-completeness and approximation algorithms are included.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 100, y: 400 },
        type: "courseNode",
      },
      {
        id: "25",
        data: {
          label: "425 - Parallel Computing",
          units: "3",
          desc: "Overview of parallel patterns, programming models, and hardware. Topics include parallel performance analysis; types of parallelism; parallel decomposition of tasks; shared vs. distributed memory; synchronization; hands-on experience with multiple parallel programming models; and architectural support for parallelism.",
          labHours: "",
          lecHours: "3",
        },
        position: { x: 260, y: 400 },
        type: "courseNode",
      },
      {
        id: "26",
        data: {
          label: "450 - Operating Systems",
          units: "4",
          desc: "This course covers the fundamental concepts of operating system design and implementation; the study of problems, goals, and methods of concurrent programming; and the fundamentals of systems programming. Topics include resource-management, process and thread scheduling algorithms, inter-process communication, I/O subsystems and device-drivers, memory management including virtual memory, segmentation, and page-replacement policies. These topics will be covered in theory and in practice through the study of the source-code of a working operating system.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 420, y: 400 },
        type: "courseNode",
      },
      {
        id: "27",
        data: {
          label: "452 - Compiler Design and Construction",
          units: "3",
          desc: "Application of language and automata theory to the design and construction of compilers. Lexical scanning, top-down and bottom-up parsing; semantic analysis, code generation; optimization. Design and construction of parts of a simple compiler using compiler generation tools.",
          labHours: "2",
          lecHours: "2",
        },
        position: { x: 580, y: 400 },
        type: "courseNode",
      },
      {
        id: "28",
        data: {
          label: "454 - Theory of Computation",
          units: "4",
          desc: "Abstract mathematical models of computing devices and language specification systems with focus on regular and context-free languages and their applications in parsing, pattern matching, counting etc. Turing machines and computability, time and space complexity of languages, unsolvable problems and intractable problems.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 740, y: 400 },
        type: "courseNode",
      },
      {
        id: "29",
        data: {
          label: "460 - Programming Languages",
          units: "4",
          desc: "This course provides a survey of the syntactic, semantic, and implementation features of functional, procedural, object-oriented, logic, and concurrent programming languages.",
          labHours: "",
          lecHours: "4",
        },
        position: { x: 900, y: 400 },
        type: "courseNode",
      },
      {
        id: "30",
        data: {
          label: "465 - Data Communications",
          units: "3",
          desc: "The ISO reference model, theoretical basis for data communications, data transmission theory and practice, telephone systems, protocols, networks, internetworks, with examples.",
          labHours: "3",
          lecHours: "2",
        },
        position: { x: 1060, y: 400 },
        type: "courseNode",
      },
      {
        id: "31",
        data: {
          label: "470 - Advanced Software Design Project",
          units: "3",
          desc: 'This course is a project-based course designed to provide a "real world, team oriented" capstone experience for Computer Science majors. Coursework will be organized around large programming projects. The content of the projects may vary depending on the interests of the instructor and may include industry, government, nonprofit organization, or other affiliations.',
          labHours: "",
          lecHours: "3",
        },
        position: { x: 1220, y: 400 },
        type: "courseNode",
      },
      {
        id: "32",
        data: {
          label: "479 - Computer Vision Fundamentals",
          units: "3",
          desc: "Algorithms for face detection and face recognition are now widely employed for surveillance, security and entertainment applications. This course will delve into the study and implementation of such algorithms for detecting generic objects (pedestrians, animals, buildings, traffic signs, etc.). It will involve learning about (i) image filtering operations such as smoothing, thresholding and edge detection, (ii) interest point detection and representation methods such as SIFT and HOG, and (iii) machine learning classification techniques such as SVM and convolutional neural networks.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1380, y: 400 },
        type: "courseNode",
      },
      {
        id: "33",
        data: {
          label: "480 - Artificial Intelligence",
          units: "3",
          desc: "This course is a survey of techniques that simulate human intelligence. Topics may include: pattern recognition, general problem solving, search algorithms such as iterative deepening and A* search, adversarial game-tree search, decision-making, neural networks, various machine learning algorithms and applications.",
          labHours: "",
          lecHours: "3",
        },
        position: { x: 1540, y: 400 },
        type: "courseNode",
      },
      {
        id: "34",
        data: {
          label: "495 - Special Studies",
          units: "1-4",
          desc: "This course is intended for students who are doing advanced work in an area of computer science (e.g., a senior project).",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1700, y: 400 },
        type: "courseNode",
      },
      {
        id: "35",
        data: {
          label: "496 - Senior Research Project",
          units: "3",
          desc: "Students, under the direction of one or more faculty members, undertake a substantial research project that is based on multiple upper-division CS courses. The result of the research is presented by the students in one of the Colloquium (CS 390) meetings.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 1860, y: 400 },
        type: "courseNode",
      },
      {
        id: "36",
        data: {
          label: "497 - Internship",
          units: "1-3",
          desc: "Student projects conceived and designed in conjunction with an off-campus organization or group. The internship is intended to provide on-the-job experience in an area of computer science in which the student has no prior on-the-job experience. Computer hardware or computer time Required for the internship, as well as regular supervision of the intern, must be provided by the off-campus organization.",
          labHours: "",
          lecHours: "",
        },
        position: { x: 2020, y: 400 },
        type: "courseNode",
      },
    ];
  function _v(e, t) {
    const { width: n, height: r, positionAbsolute: i } = e,
      o = t.positionAbsolute,
      a = n / 2,
      s = r / 2,
      l = i.x + a,
      u = i.y + s,
      c = o.x + a,
      f = o.y + s,
      d = (c - l) / (2 * a) - (f - u) / (2 * s),
      p = (c - l) / (2 * a) + (f - u) / (2 * s),
      g = 1 / (Math.abs(d) + Math.abs(p)),
      y = g * d,
      b = g * p,
      m = a * (y + b) + l,
      h = s * (-y + b) + u;
    return { x: m, y: h };
  }
  function Cv(e, t) {
    const n = { ...e.positionAbsolute, ...e },
      r = Math.round(n.x),
      i = Math.round(n.y),
      o = Math.round(t.x),
      a = Math.round(t.y);
    return o <= r + 1
      ? W.Left
      : o >= r + n.width - 1
      ? W.Right
      : a <= i + 1
      ? W.Top
      : a >= n.y + n.height - 1
      ? W.Bottom
      : W.Top;
  }
  function Uw(e, t) {
    const n = _v(e, t),
      r = _v(t, e),
      i = Cv(e, n),
      o = Cv(t, r);
    return { sx: n.x, sy: n.y, tx: r.x, ty: r.y, sourcePos: i, targetPos: o };
  }
  function iM({ id: e, source: t, target: n, markerEnd: r, style: i }) {
    const o = ce(S.useCallback((g) => g.nodeInternals.get(t), [t])),
      a = ce(S.useCallback((g) => g.nodeInternals.get(n), [n]));
    if (!o || !a) return null;
    const { sx: s, sy: l, tx: u, ty: c, sourcePos: f, targetPos: d } = Uw(o, a),
      [p] = Zl({
        sourceX: s,
        sourceY: l,
        sourcePosition: f,
        targetPosition: d,
        targetX: u,
        targetY: c,
      });
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(oo, { path: p, markerEnd: r, interactionWidth: 30 }),
        w.jsx("path", {
          id: e,
          className: "react-flow__edge-path",
          d: p,
          markerEnd: r,
          style: i,
        }),
      ],
    });
  }
  function oM({
    targetX: e,
    targetY: t,
    sourcePosition: n,
    targetPosition: r,
    sourceNode: i,
  }) {
    if (!i) return null;
    const o = {
        id: "connection-target",
        width: 1,
        height: 1,
        position: { x: e, y: t },
      },
      { sx: a, sy: s } = Uw(i, o),
      [l] = Zl({
        sourceX: a,
        sourceY: s,
        sourcePosition: n,
        targetPosition: r,
        targetX: e,
        targetY: t,
      });
    return w.jsxs("g", {
      children: [
        w.jsx("path", {
          fill: "none",
          stroke: "#222",
          strokeWidth: 1.5,
          className: "animated",
          d: l,
        }),
        w.jsx("circle", {
          cx: e,
          cy: t,
          fill: "#fff",
          r: 3,
          stroke: "#222",
          strokeWidth: 1.5,
        }),
      ],
    });
  }
  function aM({ setMode: e }) {
    return w.jsxs("div", {
      style: {
        position: "absolute",
        bottom: "130px",
        right: "20px",
        gap: "10px",
        zIndex: "1",
      },
      children: [
        w.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("move"),
          children: "👆",
        }),
        w.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("connect"),
          children: "🔗",
        }),
        w.jsx("button", {
          className: "btn btn-tool",
          onClick: () => e("describe"),
          children: "🔍",
        }),
      ],
    });
  }
  const sM = () => `randomnode_${+new Date()}`,
    lM = bl,
    uM = [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "floating",
        label: "this is an edge label",
      },
    ],
    cM = { courseNode: tM },
    fM = { floating: iM };
  console.log(bl);
  const dM = S.forwardRef((e, t) => {
      const [n, r, i] = mO(lM),
        [o, a, s] = vO(uM),
        [l, u] = S.useState(t),
        [c, f] = S.useState("move"),
        { setViewport: d } = Jl(),
        p = S.useCallback(
          (b) =>
            a((m) =>
              j1(
                { ...b, type: "floating", markerEnd: { type: xa.ArrowClosed } },
                m
              )
            ),
          [a]
        ),
        g = S.useCallback(() => {
          const b = {
            id: sM(),
            data: { label: "Added node" },
            position: {
              x: Math.random() * window.innerWidth - 100,
              y: Math.random() * window.innerHeight,
            },
          };
          r((m) => m.concat(b));
        }, [r]),
        y = (b) => {
          (async () => {
            if (b) {
              const { x: h = 0, y: v = 0, zoom: x = 1 } = b.viewport;
              r(b.nodes || []), a(b.edges || []), d({ x: h, y: v, zoom: x });
            }
          })().then();
        };
      return w.jsx("div", {
        id: "flowCanvas",
        className: "flow-canvas",
        style: {
          width: "100%",
          height: "100vh",
          backgroundColor: "whitesmoke",
        },
        ...e,
        children: w.jsxs(Vw.Provider, {
          value: { mode: c },
          children: [
            w.jsx(aM, { setMode: f }),
            w.jsxs(mw, {
              nodes: n,
              edges: o,
              onNodesChange: i,
              onEdgesChange: s,
              onConnect: p,
              onInit: u,
              nodeTypes: cM,
              edgeTypes: fM,
              connectionLineComponent: oM,
              nodesDraggable: c === "move",
              nodesConnectable: c === "connect",
              connectionRadius: 80,
              selectionMode: Qi.Partial,
              children: [
                w.jsx(rM, { onAddNode: g, onChange: y, flowInstance: l }),
                w.jsx(EO, {}),
                w.jsx(PO, { size: "1" }),
              ],
            }),
          ],
        }),
      });
    }),
    pM = () => w.jsx(yp, { children: w.jsx(dM, {}) }),
    Qw = S.forwardRef(
      ({ label: e, title: t, children: n, ...r }, i) => (
        S.useEffect(() => {
          const o = document.getElementById("banner"),
            a = document.getElementById("navButton");
          a && o && (a.style.height = o.clientHeight + "px");
        }, []),
        w.jsx("div", { ...r, children: n })
      )
    );
  class qw extends Je.Component {
    render() {
      const { children: t, ...n } = this.props;
      return w.jsx("div", {
        id: "sidebar",
        className: "sidebar sidebar-card",
        style: { backgroundColor: "whitesmoke" },
        ...n,
        children: t,
      });
    }
  }
  const Ww = S.forwardRef(
      ({ label: e, title: t, children: n, ...r }, i) => (
        S.useEffect(() => {}, []), w.jsx("div", { ...r, children: n })
      )
    ),
    hM = (e) => {
      const t = ["Computer Science", "Mathematics", "Psychology", "Business"],
        [n, r] = S.useState(""),
        [i, o] = S.useState(""),
        [a, s] = S.useState(t),
        [l, u] = S.useState([]),
        c = S.createRef(),
        f = "VisualDegree";
      S.useEffect(() => {
        s(["Computer Science", "Mathematics", "Psychology", "Business"]),
          m(),
          d(i);
      }, []),
        S.useEffect(() => {
          const M = () => {
            const P = document.getElementById("builderSidebar");
            P && P.style.display !== "none" ? v() : x();
          };
          return (
            window.addEventListener("resize", M),
            () => {
              window.addEventListener("resize", M);
            }
          );
        }, []);
      const d = S.useCallback(
          (M) => {
            u(M === "Computer Science" ? bl : []);
          },
          [bl]
        ),
        p = async (M) => {
          const P = M.target.value;
          r(P),
            o(P),
            (() => {
              const B = document.getElementById("builderBanner");
              B && (B.title = i);
            })(),
            await d(P),
            b();
        },
        g = () =>
          w.jsxs("div", {
            style: {
              display: "grid",
              paddingBottom: "10px",
              borderBottom: "ridge",
            },
            children: [
              w.jsx("label", {
                htmlFor: "degreeSelect",
                children: "Select Degree:",
              }),
              w.jsxs("select", {
                id: "degreeSelect",
                value: n,
                onChange: p,
                children: [
                  w.jsx("option", { value: "", children: "-- Select --" }),
                  a.map((M, P) =>
                    w.jsx("option", { value: M, children: M }, P)
                  ),
                ],
              }),
            ],
          }),
        y = () => w.jsx(w.Fragment, {}),
        b = () =>
          !l || l.length === 0
            ? w.jsx(w.Fragment, {})
            : w.jsxs("div", {
                id: "courseList",
                style: { paddingTop: "15px", position: "relative" },
                children: [
                  w.jsx("h4", {
                    style: { paddingLeft: "10px" },
                    children: "Courses",
                  }),
                  w.jsx("div", {
                    id: "courseListBox",
                    className:
                      "course-list-box scrollbar-thin scrollbar-track-lightgray scrollbar-thumb-hover-darkgray",
                    style: {
                      borderRadius: "1%",
                      marginLeft: "3%",
                      marginRight: "3%",
                      borderTop: "groove",
                      borderLeft: "groove",
                      borderBottom: "ridge",
                      borderRight: "none",
                      overflowY: "scroll",
                      maxHeight: "calc(80vh)",
                    },
                    children: l.map((M, P) =>
                      w.jsx(
                        "button",
                        {
                          style: {
                            width: "100%",
                            border: "none",
                            borderBottom: "ridge",
                          },
                          children: M.data.label.split("-")[0].trim(),
                        },
                        P
                      )
                    ),
                  }),
                ],
              }),
        m = () => {
          v();
        },
        h = () => {
          x();
        },
        v = () => {
          const M = document.getElementById("builderSidebar"),
            P = document.getElementById("builderView");
          P &&
            M &&
            ((async () => {
              (P.style.transition = "padding-left 0.7s ease-in-out"),
                setTimeout(() => {
                  P.style.paddingLeft = M.offsetWidth + "px";
                }, 0.1);
            })().then(),
            M && (M.style.display = "block"));
          const L = document.getElementById("sidebarNavButton");
          L && ((L.style.width = "100%"), (L.style.height = "auto"));
          const B = document.getElementById("bannerNavButton");
          B && (B.style.display = "none");
          const D = document.getElementById("bannerLabel");
          D && (D.hidden = 1);
          const k = document.getElementById("bannerDegreeName");
          k && ((k.style.marginTop = "3px"), (k.style.paddingLeft = "10px"));
        },
        x = () => {
          const M = document.getElementById("builderSidebar");
          M && (M.style.display = "none");
          const P = [];
          P.push(document.getElementById("builderView"));
          const L = document.getElementById("builderBanner");
          P.push(L);
          const B = document.getElementById("bannerNavButton");
          P.push(B),
            P.forEach((j) => {
              j && (j.style = "");
            });
          const D = document.getElementById("bannerLabel");
          D && (D.hidden = !1);
          const k = document.getElementById("bannerDegreeName");
          k && (k.style.paddingLeft = "0"),
            B &&
              L &&
              B.style.setProperty("height", L.clientHeight + "px", "important");
        },
        E = () =>
          w.jsx("button", {
            id: "sidebarNavButton",
            className: "sidebar-banner banner-button banner-sonoma",
            onClick: h,
            children: w.jsx("h5", { children: f }),
          }),
        _ = () =>
          w.jsxs(Qw, {
            id: "builderBanner",
            className: "banner banner-sonoma",
            children: [
              w.jsx("button", {
                id: "bannerNavButton",
                className: "banner-button banner-sonoma banner-xlarge",
                onClick: m,
                children: "☰",
              }),
              w.jsxs("div", {
                style: { alignItems: "center" },
                children: [
                  w.jsx("h5", {
                    id: "bannerLabel",
                    style: { paddingTop: "7px", marginBottom: 0 },
                    children: f,
                  }),
                  w.jsx("h3", {
                    id: "bannerDegreeName",
                    style: { marginTop: 0 },
                    children: i,
                  }),
                ],
              }),
            ],
          }),
        C = () =>
          w.jsx(Ww, {
            id: "builderNavbar",
            className: "navbar navbar-material",
            children: w.jsxs("div", {
              className: "container",
              style: { alignItems: "left" },
              children: [
                w.jsx("div", {
                  className: "navbarItem selected",
                  style: { marginTop: 0 },
                  children: w.jsx("span", { children: "Major" }),
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "GE",
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "Catalog",
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  style: { marginTop: 0 },
                  children: "My Semester",
                }),
              ],
            }),
          }),
        N = () =>
          w.jsxs(qw, {
            id: "builderSidebar",
            style: { display: "flex", flexDirection: "column" },
            ref: c,
            label: f,
            children: [
              E(),
              w.jsxs("div", {
                id: "sidebarContent",
                className: "scrollbar-hidden",
                style: { padding: 10, minHeight: "100%" },
                children: [g(), b()],
              }),
              y(),
            ],
          });
      return w.jsxs("div", {
        id: "builderOverlay",
        className: "builder-overlay",
        ...e,
        children: [_(), C(), N()],
      });
    };
  class mM extends Je.Component {
    constructor() {
      super(...arguments);
      mu(this, "overlayRef", S.createRef());
      mu(this, "flowCanvasRef", S.createRef());
    }
    componentDidMount() {
      W0("VisualDegree | DegreeBuilder");
    }
    render() {
      return w.jsxs("div", {
        id: "builderView",
        className: "builder-view",
        style: { backgroundColor: "whitesmoke" },
        children: [
          w.jsx(hM, {}),
          w.jsx("div", {
            id: "flowContainer",
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "whitesmoke",
            },
            children: w.jsx(pM, { forwardRef: this.flowCanvasRef }),
          }),
        ],
      });
    }
  }
  function fr() {
    return w.jsx("div", {
      className: "d-flex justify-content-center",
      children: w.jsx("div", {
        className: "spinner-border",
        role: "status",
        children: w.jsx("span", { className: "sr-only" }),
      }),
    });
  }
  function vM({ courseId: e, closeModal: t }) {
    const [n, r] = S.useState(!0),
      [i, o] = S.useState(null),
      [a, s] = S.useState(null);
    if (
      (S.useEffect(() => {
        (async () => {
          try {
            const h = await fetch(`/api/course/${e}`);
            if (!h.ok) throw new Error("Error fetching course");
            const v = await h.json();
            s(v), r(!1);
          } catch (h) {
            console.error("Error fetching course:", h), o(h), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return w.jsx(fr, {});
    if (i) return w.jsxs("p", { children: ["Error: ", i.message] });
    const {
      title: l,
      prefix: u,
      header: c,
      code: f,
      description: d,
      num_units: p,
      ge_category: g,
      prerequisites: y,
      url: b,
    } = a;
    return w.jsxs("div", {
      "className": "modal fade show",
      "id": "displayCourseModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayCourseModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        w.jsx("div", {
          className: "modal-dialog",
          children: w.jsxs("div", {
            className: "modal-content",
            children: [
              w.jsxs("div", {
                className: "modal-header",
                children: [
                  w.jsx("h5", {
                    className: "modal-title",
                    id: "displayCourseModal",
                    children: "Course Info",
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "modal-body",
                children: [
                  w.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Prefix: " }),
                      w.jsx("span", { children: u }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Code: " }),
                      w.jsx("span", { children: f }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Title: " }),
                      w.jsx("span", { children: l }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Header: " }),
                      w.jsx("span", { children: c }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Description: " }),
                      w.jsx("span", { children: d }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Number of Units: " }),
                      w.jsx("span", { children: p }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "GE Category: " }),
                      w.jsx("span", { children: g }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Prerequisites: " }),
                      w.jsx("span", { children: y }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "URL: " }),
                      w.jsx("span", { children: b }),
                    ],
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const Yw = ({ course: e, handleButtonClick: t }) => {
      const [n, r] = S.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return w.jsxs(w.Fragment, {
        children: [
          w.jsxs("tr", {
            children: [
              w.jsx("td", {}),
              w.jsx("td", { children: e.title }),
              w.jsx("td", { children: e.num_units }),
              w.jsx("td", { children: e.code }),
              w.jsx("td", { children: e.ge_category }),
              w.jsx("td", {
                children: w.jsx("div", {
                  children: w.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Course Info",
                  }),
                }),
              }),
            ],
          }),
          n && w.jsx(vM, { courseId: e.id, closeModal: o }),
        ],
      });
    },
    yM = (e) => {
      const [t, n] = S.useState(!0),
        [r, i] = S.useState(null),
        [o, a] = S.useState([]);
      return (
        S.useEffect(() => {
          fetch("/api/courses")
            .then((s) => {
              if (!s.ok) throw new Error("Error fetching courses");
              return s.json();
            })
            .then((s) => {
              a(s), n(!1);
            })
            .catch((s) => {
              console.error("Error fetching courses:", s), i(s), n(!1);
            });
        }, []),
        t
          ? w.jsx(fr, {})
          : r
          ? w.jsxs("p", { children: ["Error: ", r.message] })
          : w.jsx("div", {
              className: "table-container",
              children: w.jsxs("table", {
                className: "table table-hover mt-3",
                children: [
                  w.jsx("thead", {
                    children: w.jsxs("tr", {
                      children: [
                        w.jsx("th", {}),
                        w.jsx("th", { children: "Title" }),
                        w.jsx("th", { children: "Number of Units" }),
                        w.jsx("th", { children: "Code" }),
                        w.jsx("th", { children: "GE Category" }),
                      ],
                    }),
                  }),
                  w.jsx("tbody", {
                    children: o.map((s) => w.jsx(Yw, { course: s }, s.id)),
                  }),
                ],
              }),
            })
      );
    };
  function gM({ programId: e, closeModal: t }) {
    const [n, r] = S.useState(!0),
      [i, o] = S.useState(null),
      [a, s] = S.useState(null);
    if (
      (S.useEffect(() => {
        (async () => {
          try {
            const f = await fetch(`/api/program/${e}`);
            if (!f.ok) throw new Error("Error fetching program");
            const d = await f.json();
            s(d), r(!1);
          } catch (f) {
            console.error("Error fetching program:", f), o(f), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return w.jsx(fr, {});
    if (i) return w.jsxs("p", { children: ["Error: ", i.message] });
    const { name: l, url: u } = a;
    return w.jsxs("div", {
      "className": "modal fade show",
      "id": "displayProgramModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayProgramModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        w.jsx("div", {
          className: "modal-dialog",
          children: w.jsxs("div", {
            className: "modal-content",
            children: [
              w.jsxs("div", {
                className: "modal-header",
                children: [
                  w.jsx("h5", {
                    className: "modal-title",
                    id: "displayProgramModal",
                    children: "Program Info",
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "modal-body",
                children: [
                  w.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Name: " }),
                      w.jsx("span", { children: l }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "URL: " }),
                      w.jsx("span", { children: u }),
                    ],
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const wM = ({ program: e, handleButtonClick: t }) => {
      const [n, r] = S.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return w.jsxs(w.Fragment, {
        children: [
          w.jsxs("tr", {
            children: [
              w.jsx("td", { children: e.name }),
              w.jsx("td", {
                children: w.jsx("div", {
                  children: w.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Program Info",
                  }),
                }),
              }),
            ],
          }),
          n && w.jsx(gM, { programId: e.id, closeModal: o }),
        ],
      });
    },
    xM = (e) => {
      const [t, n] = S.useState(!0),
        [r, i] = S.useState(null),
        [o, a] = S.useState([]);
      return (
        S.useEffect(() => {
          fetch("/api/programs")
            .then((s) => {
              if (!s.ok) throw new Error("Error fetching programs");
              return s.json();
            })
            .then((s) => {
              a(s), n(!1);
            })
            .catch((s) => {
              console.error("Error fetching programs:", s), i(s), n(!1);
            });
        }, []),
        t
          ? w.jsx(fr, {})
          : r
          ? w.jsxs("p", { children: ["Error: ", r.message] })
          : w.jsx("div", {
              className: "table-container",
              children: w.jsxs("table", {
                className: "table table-hover mt-3",
                children: [
                  w.jsx("thead", {
                    children: w.jsx("tr", {
                      children: w.jsx("th", { children: " Name " }),
                    }),
                  }),
                  w.jsx("tbody", {
                    children: o.map((s) => w.jsx(wM, { program: s }, s.id)),
                  }),
                ],
              }),
            })
      );
    };
  function bM({ departmentId: e, closeModal: t }) {
    const [n, r] = S.useState(!0),
      [i, o] = S.useState(null),
      [a, s] = S.useState(null);
    if (
      (S.useEffect(() => {
        (async () => {
          try {
            const f = await fetch(`/api/department/${e}`);
            if (!f.ok) throw new Error("Error fetching department");
            const d = await f.json();
            s(d), r(!1);
          } catch (f) {
            console.error("Error fetching department:", f), o(f), r(!1);
          }
        })();
      }, [e]),
      n)
    )
      return w.jsx(fr, {});
    if (i) return w.jsxs("p", { children: ["Error: ", i.message] });
    const { name: l, url: u } = a;
    return w.jsxs("div", {
      "className": "modal fade show",
      "id": "displayDepartmentModal",
      "tabIndex": "-1",
      "aria-labelledby": "displayDepartmentModal",
      "aria-hidden": "true",
      "style": { display: "block" },
      "children": [
        w.jsx("div", {
          className: "modal-dialog",
          children: w.jsxs("div", {
            className: "modal-content",
            children: [
              w.jsxs("div", {
                className: "modal-header",
                children: [
                  w.jsx("h5", {
                    className: "modal-title",
                    id: "displayDepartmentModal",
                    children: "Department Info",
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "className": "btn-close",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                    "onClick": t,
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "modal-body",
                children: [
                  w.jsx("style", {
                    children: `
              .modal-body label {
                margin-right: 0.5rem;
              }
            `,
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "Name: " }),
                      w.jsx("span", { children: l }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "mb-3",
                    children: [
                      w.jsx("label", { children: "URL: " }),
                      w.jsx("span", { children: u }),
                    ],
                  }),
                  w.jsx("button", {
                    "type": "button",
                    "data-bs-dismiss": "modal",
                    "className": "btn btn-secondary",
                    "onClick": t,
                    "children": "Close",
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsx("div", { className: "modal-backdrop fade show", onClick: t }),
      ],
    });
  }
  const SM = ({ department: e, handleButtonClick: t }) => {
      const [n, r] = S.useState(!1),
        i = () => {
          r(!0);
        },
        o = () => {
          r(!1);
        };
      return w.jsxs(w.Fragment, {
        children: [
          w.jsxs("tr", {
            children: [
              w.jsx("td", { children: e.name }),
              w.jsx("td", {
                children: w.jsx("div", {
                  children: w.jsx("button", {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: i,
                    children: "Department Info",
                  }),
                }),
              }),
            ],
          }),
          n && w.jsx(bM, { departmentId: e.id, closeModal: o }),
        ],
      });
    },
    EM = (e) => {
      const [t, n] = S.useState(!0),
        [r, i] = S.useState(null),
        [o, a] = S.useState([]);
      return (
        S.useEffect(() => {
          fetch("/api/departments")
            .then((s) => {
              if (!s.ok) throw new Error("Error fetching departments");
              return s.json();
            })
            .then((s) => {
              a(s), n(!1);
            })
            .catch((s) => {
              console.error("Error fetching departments:", s), i(s), n(!1);
            });
        }, []),
        t
          ? w.jsx(fr, {})
          : r
          ? w.jsxs("p", { children: ["Error: ", r.message] })
          : w.jsx("div", {
              className: "table-container",
              children: w.jsxs("table", {
                className: "table table-hover mt-3",
                children: [
                  w.jsx("thead", {
                    children: w.jsx("tr", {
                      children: w.jsx("th", { children: " Name " }),
                    }),
                  }),
                  w.jsx("tbody", {
                    children: o.map((s) => w.jsx(SM, { department: s }, s.id)),
                  }),
                ],
              }),
            })
      );
    },
    _M = ({ departmentId: e }) => {
      const [t, n] = S.useState(!0),
        [r, i] = S.useState(null),
        [o, a] = S.useState([]);
      return (
        S.useEffect(() => {
          (async () => {
            try {
              const l = await fetch(`/api/courses/department/${e}`);
              if (!l.ok) throw new Error("Error fetching courses");
              const u = await l.json();
              a(u), n(!1);
            } catch (l) {
              console.error("Error fetching courses:", l), i(l), n(!1);
            }
          })();
        }, [e]),
        t
          ? w.jsx(fr, {})
          : r
          ? w.jsxs("p", { children: ["Error: ", r.message] })
          : w.jsx("div", {
              className: "table-container",
              children: w.jsxs("table", {
                className: "table table-hover mt-3",
                children: [
                  w.jsx("thead", {
                    children: w.jsxs("tr", {
                      children: [
                        w.jsx("th", {}),
                        w.jsx("th", { children: "Title" }),
                        w.jsx("th", { children: "Number of Units" }),
                        w.jsx("th", { children: "Code" }),
                        w.jsx("th", { children: "GE Category" }),
                      ],
                    }),
                  }),
                  w.jsx("tbody", {
                    children: o.map((s) => w.jsx(Yw, { course: s }, s.id)),
                  }),
                ],
              }),
            })
      );
    },
    CM = [
      { name: "Anthropology, Minor", id: "6479429608db5d81e7110198" },
      {
        name: "American Multicultural Studies, Minor",
        id: "6479429608db5d81e7110197",
      },
      { name: "Art, Minor", id: "6479429608db5d81e7110199" },
      {
        name: "Cultural Resources Management, M.A",
        id: "6479429608db5d81e7110198",
      },
      {
        name: "Ecology and Evolutionary Biology Concentration",
        id: "6479429608db5d81e711019a",
      },
      { name: "Biology, Minor", id: "6479429608db5d81e711019a" },
      { name: "Special Concentration", id: "6479429608db5d81e711019b" },
      {
        name: "Museum and Gallery Methods, Career Minor",
        id: "6479429608db5d81e7110199",
      },
      { name: "Accounting Concentration", id: "6479429608db5d81e711019b" },
      { name: "Biology, M.S", id: "6479429608db5d81e711019a" },
      {
        name: "American Multicultural Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e7110197",
      },
      {
        name: "Molecular Cell Biology Concentration",
        id: "6479429608db5d81e711019a",
      },
      { name: "Art History, Minor", id: "6479429608db5d81e7110199" },
      {
        name: "Art: Studio Concentration, Minor",
        id: "6479429608db5d81e7110199",
      },
      {
        name: "American Multicultural Studies, B.A",
        id: "6479429608db5d81e7110197",
      },
      { name: "Marine Biology Concentration", id: "6479429608db5d81e711019a" },
      { name: "Physiology Concentration", id: "6479429608db5d81e711019a" },
      { name: "Management Concentration", id: "6479429608db5d81e711019b" },
      {
        name: "Business Administration, Minor",
        id: "6479429608db5d81e711019b",
      },
      {
        name: "Financial Management Concentration",
        id: "6479429608db5d81e711019b",
      },
      {
        name: "Anthropology, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e7110198",
      },
      {
        name: "French Language Certificate for Wine Business",
        id: "6479429608db5d81e711019b",
      },
      {
        name: "Biology with a Concentration in Molecular Cell Biology, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      { name: "Finance Concentration", id: "6479429608db5d81e711019b" },
      {
        name: "Executive Master of Business Administration, MBA",
        id: "6479429608db5d81e711019b",
      },
      {
        name: "Biology, B.A., Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      {
        name: "Business Administration with a Concentration in Management, B.S",
        id: "6479429608db5d81e711019b",
      },
      { name: "Biology, B.A", id: "6479429608db5d81e711019a" },
      { name: "Anthropology, B.A", id: "6479429608db5d81e7110198" },
      {
        name: "Art: Studio Concentration, B.F.A",
        id: "6479429608db5d81e7110199",
      },
      {
        name: "Biology with a Concentration in Physiology, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      {
        name: "Biology with a Concentration in Zoology, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      {
        name: "Biology with a Concentration in Ecology and Evolutionary Biology, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      {
        name: "Biology, B.S., Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      {
        name: "Art History, B.A., Sample Four-Year Plan",
        id: "6479429608db5d81e7110199",
      },
      {
        name: "Biology with a Concentration in Marine Biology, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019a",
      },
      { name: "Zoology Concentration", id: "6479429608db5d81e711019a" },
      { name: "Chemistry, B.A", id: "6479429608db5d81e711019c" },
      {
        name: "Professional Sales Certificate",
        id: "6479429608db5d81e711019b",
      },
      { name: "Chemistry, B.S", id: "6479429608db5d81e711019c" },
      { name: "Marketing Concentration", id: "6479429608db5d81e711019b" },
      {
        name: "Wine Business Strategies Concentration",
        id: "6479429608db5d81e711019b",
      },
      { name: "Business Administration, B.S", id: "6479429608db5d81e711019b" },
      { name: "Biology, B.S", id: "6479429608db5d81e711019a" },
      { name: "Business Administration, MBA", id: "6479429608db5d81e711019b" },
      {
        name: "Business Administration, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019b",
      },
      { name: "Applied Arts, Minor", id: "6479429608db5d81e7110199" },
      { name: "Biochemistry, B.S", id: "6479429608db5d81e711019c" },
      { name: "Art History, B.A", id: "6479429608db5d81e7110199" },
      {
        name: "Art: Studio Concentration, B.A",
        id: "6479429608db5d81e7110199",
      },
      {
        name: "Chicano and Latino Studies, Minor",
        id: "6479429608db5d81e711019d",
      },
      { name: "Computer Science, Minor", id: "6479429608db5d81e711019f" },
      {
        name: "Chicano and Latino Studies, B.A",
        id: "6479429608db5d81e711019d",
      },
      {
        name: "Criminology and Criminal Justice Studies, Minor",
        id: "6479429608db5d81e71101a1",
      },
      { name: "Chemistry, Minor", id: "6479429608db5d81e711019c" },
      { name: "Economics, Minor", id: "6479429608db5d81e71101a2" },
      {
        name: "Early Childhood Special Education Added Authorization",
        id: "6479429608db5d81e71101a5",
      },
      {
        name: "Education Specialist Intern Program",
        id: "6479429608db5d81e71101a5",
      },
      {
        name: "Option I - Clinical Mental Health Counseling (MFT & LPCC), M.A",
        id: "6479429608db5d81e71101a0",
      },
      {
        name: "Education with an Emphasis in Reading and Language, M.A",
        id: "6479429608db5d81e71101a6",
      },
      {
        name: "Biochemistry, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019c",
      },
      {
        name: "Administrative Service Credentials",
        id: "6479429608db5d81e71101a5",
      },
      {
        name: "Option II - School Counseling/Pupil Personnel Services Credential, M.A",
        id: "6479429608db5d81e71101a0",
      },
      { name: "Educational Leadership, M.A", id: "6479429608db5d81e71101a5" },
      { name: "Economics, B.A", id: "6479429608db5d81e71101a2" },
      {
        name: "Bilingual Authorization (Spanish)",
        id: "6479429608db5d81e71101a6",
      },
      {
        name: "Chicano and Latino Studies, Teacher Preparation Track, Multiple Subjects Program, B.A., Sample Four-Year Program",
        id: "6479429608db5d81e711019d",
      },
      {
        name: "Chemistry, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e711019c",
      },
      { name: "Education, M.A", id: "6479429608db5d81e71101a3" },
      {
        name: "Criminology and Criminal Justice Studies, B.A",
        id: "6479429608db5d81e71101a1",
      },
      {
        name: "Chemistry, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e711019c",
      },
      {
        name: "Single Subject (Secondary Schools) Teaching Credential",
        id: "6479429608db5d81e71101a3",
      },
      {
        name: "Communication Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e711019e",
      },
      {
        name: "Early Childhood Studies Integrated Teacher Education Program-Special Education, B.A. Sample Two-Year Transfer Plan",
        id: "6479429608db5d81e71101a4",
      },
      { name: "Child Development Permit", id: "6479429608db5d81e71101a4" },
      { name: "Communication Studies, B.A", id: "6479429608db5d81e711019e" },
      { name: "Education, Minor", id: "6479429608db5d81e71101a4" },
      {
        name: "California Multiple Subject Teaching Credential",
        id: "6479429608db5d81e71101a6",
      },
      {
        name: "Education with a Concentration in Curriculum, Teaching, and Learning (CTL), M.A",
        id: "6479429608db5d81e71101a3",
      },
      {
        name: "Preliminary Education Specialist Credential in Mild/Moderate Support Needs (MMSN) or Extensive Support Needs (ESN)",
        id: "6479429608db5d81e71101a5",
      },
      {
        name: "Clear Education Specialist Credential",
        id: "6479429608db5d81e71101a5",
      },
      {
        name: "Early Childhood Studies Integrated Teacher Education Program, Special Education, B.A",
        id: "6479429608db5d81e71101a4",
      },
      {
        name: "Chicano and Latino Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e711019d",
      },
      {
        name: "Early Childhood Studies, Minor",
        id: "6479429608db5d81e71101a4",
      },
      {
        name: "Computer Science, B.S. Sample Four-Year Program",
        id: "6479429608db5d81e711019f",
      },
      {
        name: "Early Childhood Studies with a Concentration in Community, Health and Social Services for Children Sample Four-Year Plan",
        id: "6479429608db5d81e71101a4",
      },
      { name: "Electrical Engineering, Minor", id: "6479429608db5d81e71101a7" },
      {
        name: "Early Childhood Studies, Development Concentration, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a4",
      },
      {
        name: "Criminology and Criminal Justice Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a1",
      },
      {
        name: "Early Childhood Studies, Education Concentration, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a4",
      },
      {
        name: "Early Childhood Studies with a Concentration in Early Care and Education, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a4",
      },
      {
        name: "Economics, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a2",
      },
      { name: "Electrical Engineering, B.S", id: "6479429608db5d81e71101a7" },
      { name: "Early Childhood Studies, B.A", id: "6479429608db5d81e71101a4" },
      {
        name: "Electrical and Computer Engineering, M.S",
        id: "6479429608db5d81e71101a7",
      },
      { name: "Counseling, M.A", id: "6479429608db5d81e71101a0" },
      {
        name: "Early Childhood Education, M.A",
        id: "6479429608db5d81e71101a4",
      },
      { name: "Film Studies, Minor", id: "6479429608db5d81e711019e" },
      { name: "Computer Science, B.S", id: "6479429608db5d81e711019f" },
      {
        name: "Early Childhood Studies Integrated Teacher Education Program, Special Education, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a4",
      },
      { name: "English, M.A", id: "6479429608db5d81e71101a8" },
      {
        name: "Earth and Environmental Science, B.S. Sample Two-Year Plan",
        id: "6479429608db5d81e71101ab",
      },
      { name: "English, Minor", id: "6479429608db5d81e71101a8" },
      {
        name: "Interdisciplinary General Education Program Lower-Division",
        id: "6479429608db5d81e71101af",
      },
      { name: "Global Studies, Minor", id: "6479429608db5d81e71101ac" },
      { name: "English, B.A", id: "6479429608db5d81e71101a8" },
      {
        name: "Interdisciplinary Concentration",
        id: "6479429608db5d81e71101b2",
      },
      { name: "Global Studies, B.A", id: "6479429608db5d81e71101ac" },
      {
        name: "Geography and Environment, Minor",
        id: "6479429608db5d81e71101aa",
      },
      {
        name: "Interdisciplinary Studies, M.A./M.S",
        id: "6479429608db5d81e71101b0",
      },
      { name: "History, M.A", id: "6479429608db5d81e71101ad" },
      { name: "History, Minor", id: "6479429608db5d81e71101ad" },
      { name: "Film Studies, M.A", id: "6479429608db5d81e71101a9" },
      { name: "Integrative Studies, Minor", id: "6479429608db5d81e71101af" },
      { name: "Mathematics, B.A", id: "6479429608db5d81e71101b4" },
      { name: "Applied Statistics, B.A", id: "6479429608db5d81e71101b4" },
      {
        name: "Electrical Engineering, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a7",
      },
      { name: "History, B.A", id: "6479429608db5d81e71101ad" },
      { name: "Paleontology, Minor", id: "6479429608db5d81e71101ab" },
      { name: "Kinesiology, B.S", id: "6479429608db5d81e71101b2" },
      {
        name: "Geology, B.S. Sample Two-Year Plan",
        id: "6479429608db5d81e71101ab",
      },
      {
        name: "Lifetime Physical Activity Concentration",
        id: "6479429608db5d81e71101b2",
      },
      {
        name: "English with a Concentration in Literature, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a8",
      },
      {
        name: "Exercise Science Concentration",
        id: "6479429608db5d81e71101b2",
      },
      {
        name: "English with a Concentration in Creative Writing, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101a8",
      },
      { name: "Linguistics, Minor", id: "6479429608db5d81e71101b3" },
      {
        name: "Human Development, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ae",
      },
      {
        name: "Environmental Science, Geography and Management, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101aa",
      },
      {
        name: "Earth and Environmental Science, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ab",
      },
      {
        name: "Geology, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ab",
      },
      {
        name: "Global Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ac",
      },
      {
        name: "History, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ad",
      },
      {
        name: "Environmental Studies, Geography and Planning, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101aa",
      },
      { name: "Human Development, B.A", id: "6479429608db5d81e71101ae" },
      {
        name: "Area Studies Through Study Abroad",
        id: "6479429608db5d81e71101ac",
      },
      { name: "Development Concentration", id: "6479429608db5d81e71101ac" },
      { name: "Jewish Studies, Minor", id: "6479429608db5d81e71101b1" },
      {
        name: "Liberal Studies (Saturday Degree Completion), B.A",
        id: "6479429608db5d81e71101af",
      },
      {
        name: "Kinesiology, Exercise Science Concentration, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b2",
      },
      {
        name: "Kinesiology with a Concentration in Lifetime Physical Activity Sample Four-Year Plan",
        id: "6479429608db5d81e71101b2",
      },
      {
        name: "Mathematics with a Concentration in Pure Mathematics, B.A",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Kinesiology with a Interdisciplinary Concentration Sample Four-Year Plan",
        id: "6479429608db5d81e71101b2",
      },
      {
        name: "Special Major: German Cultural Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b0",
      },
      {
        name: "Human Development, B.A. Sample Two-Year Plan",
        id: "6479429608db5d81e71101ae",
      },
      {
        name: "Liberal Studies (Hutchins) B.A",
        id: "6479429608db5d81e71101af",
      },
      {
        name: "Environmental Studies, Geography, and Planning, B.A",
        id: "6479429608db5d81e71101aa",
      },
      { name: "Geology, B.S", id: "6479429608db5d81e71101ab" },
      {
        name: "Environmental Science, Geography, and Management, B.S",
        id: "6479429608db5d81e71101aa",
      },
      {
        name: "Bachelor of Arts in the Special Major: German Cultural Studies",
        id: "6479429608db5d81e71101b0",
      },
      {
        name: "Earth and Environmental Science, B.A",
        id: "6479429608db5d81e71101ab",
      },
      { name: "Applied Statistics, Minor", id: "6479429608db5d81e71101b4" },
      { name: "Math for Teachers, Minor", id: "6479429608db5d81e71101b4" },
      { name: "Statistics, Minor", id: "6479429608db5d81e71101b4" },
      { name: "Mathematics, Minor", id: "6479429608db5d81e71101b4" },
      { name: "Mathematics, B.S", id: "6479429608db5d81e71101b4" },
      {
        name: "Applied Mathematics Concentration",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Mathematics Secondary Teaching Concentration",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Bi-Disciplinary Mathematics, B.A. and Physics, B.A. Sample Two-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      { name: "Music, Minor", id: "6479429608db5d81e71101b6" },
      { name: "German, Minor", id: "6479429608db5d81e71101b5" },
      {
        name: "Music with a Concentration in Liberal Arts, B.A",
        id: "6479429608db5d81e71101b6",
      },
      { name: "Spanish, M.A", id: "6479429608db5d81e71101b5" },
      { name: "Spanish, Minor", id: "6479429608db5d81e71101b5" },
      {
        name: "Philosophy, Science, Technology, and Ethics Concentration, B.A",
        id: "6479429608db5d81e71101b9",
      },
      { name: "French, Minor", id: "6479429608db5d81e71101b5" },
      {
        name: "Philosophy, Pre-Law and Ethics Concentration, B.A",
        id: "6479429608db5d81e71101b9",
      },
      {
        name: "Philosophy, Social Justice Concentration, B.A",
        id: "6479429608db5d81e71101b9",
      },
      {
        name: "Bi-disciplinary Mathematics Concentration",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Native American Studies, Minor",
        id: "6479429608db5d81e71101b7",
      },
      {
        name: "Statistics, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      { name: "Philosophy, Minor", id: "6479429608db5d81e71101b9" },
      {
        name: "Mathematics with a Concentration in Applied Mathematics B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      { name: "Statistics, B.S", id: "6479429608db5d81e71101b4" },
      {
        name: "Spanish, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b5",
      },
      {
        name: "Applied Statistics, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Mathematics Secondary Teaching Concentration, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      { name: "Philosophy, B.A", id: "6479429608db5d81e71101b9" },
      { name: "Music, B.A", id: "6479429608db5d81e71101b6" },
      {
        name: "Philosophy, The Good Life Concentration, B.A",
        id: "6479429608db5d81e71101b9",
      },
      {
        name: "Traditional Post-Licensure Program, B.S",
        id: "6479429608db5d81e71101b8",
      },
      {
        name: "Mathematics with a Concentration in Pure Mathematics, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      {
        name: "Music, Jazz Studies Concentration, B.M",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Bi-Disciplinary Mathematics, B.A. and Physics, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b4",
      },
      { name: "Nursing, B.S", id: "6479429608db5d81e71101b8" },
      {
        name: "French, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b5",
      },
      { name: "French, B.A", id: "6479429608db5d81e71101b5" },
      {
        name: "Music, Liberal Arts Concentration, B.A., Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Performance Concentration, B.M",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Music Education Concentration, Instrumental Track, B.M. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Performance Concentration, B.M. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Music Education Concentration, Choral Track, B.M. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      { name: "Spanish, B.A", id: "6479429608db5d81e71101b5" },
      {
        name: "Music, Composition Concentration, B.M. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Jazz Studies Concentration, B.M. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b6",
      },
      { name: "Pre-Licensure B.S.N", id: "6479429608db5d81e71101b8" },
      { name: "Music, B.M", id: "6479429608db5d81e71101b6" },
      {
        name: "Nursing- Family Nurse Practitioner, M.S",
        id: "6479429608db5d81e71101b8",
      },
      {
        name: "Music, Composition Concentration, B.M",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Liberal Arts Concentration, B.A",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Music, Music Education Concentration, B.M",
        id: "6479429608db5d81e71101b6",
      },
      {
        name: "Physical Science with Concentration in Teaching, B.A",
        id: "6479429608db5d81e71101ba",
      },
      { name: "Physics, Minor", id: "6479429608db5d81e71101ba" },
      { name: "Astrophysics Concentration", id: "6479429608db5d81e71101ba" },
      { name: "Psychology, Minor", id: "6479429608db5d81e71101bc" },
      {
        name: "Physical Science with Concentration in Foundational Health, B.A",
        id: "6479429608db5d81e71101ba",
      },
      { name: "Astronomy, Minor", id: "6479429608db5d81e71101ba" },
      { name: "Physics, B.A", id: "6479429608db5d81e71101ba" },
      { name: "Sociology, Minor", id: "6479429608db5d81e71101be" },
      { name: "Political Science, Minor", id: "6479429608db5d81e71101bb" },
      {
        name: "Philosophy, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101b9",
      },
      { name: "Physics, B.S", id: "6479429608db5d81e71101ba" },
      { name: "Theatre Arts, Minor", id: "6479429608db5d81e71101bf" },
      {
        name: "Family Nurse Practitioner, Post-Master's Certificate",
        id: "6479429608db5d81e71101bd",
      },
      { name: "Physical Science, B.A", id: "6479429608db5d81e71101ba" },
      {
        name: "Psychology, Depth Psychology Emphasis, M.A",
        id: "6479429608db5d81e71101bc",
      },
      {
        name: "Physical Science (with no listed concentration), B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      {
        name: "Physical Science with Concentration in Foundational Health, B.A., Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      {
        name: "Sociology, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101be",
      },
      { name: "Queer Studies, Minor", id: "6479429608db5d81e71101c0" },
      {
        name: "Physical Science with Concentration in Teaching, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      {
        name: "Women's and Gender Studies, B.A",
        id: "6479429608db5d81e71101c0",
      },
      {
        name: "Master's in Public Administration, M.P.A",
        id: "6479429608db5d81e71101bb",
      },
      {
        name: "Political Science, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bb",
      },
      {
        name: "Psychology, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bc",
      },
      {
        name: "Physics, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      {
        name: "Theatre Arts with Concentration in Technical Theatre, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bf",
      },
      { name: "Organization Development, M.A", id: "6479429608db5d81e71101bd" },
      { name: "Dance, B.A", id: "6479429608db5d81e71101bf" },
      { name: "Sociology, B.A", id: "6479429608db5d81e71101be" },
      { name: "Cultural/Critical Pathway", id: "6479429608db5d81e71101c0" },
      {
        name: "Physics, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      {
        name: "Theatre Arts with Concentration in Acting, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bf",
      },
      {
        name: "Dance, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bf",
      },
      {
        name: "Women's and Gender Studies, Minor",
        id: "6479429608db5d81e71101c0",
      },
      {
        name: "Women's and Gender Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101c0",
      },
      {
        name: "Theatre Arts with Concentration in Technical Theatre, B.A",
        id: "6479429608db5d81e71101bf",
      },
      { name: "Psychology, B.A", id: "6479429608db5d81e71101bc" },
      { name: "Community/Clinical Pathway", id: "6479429608db5d81e71101c0" },
      {
        name: "Physics with a Concentration in Astrophysics, B.S. Sample Four-Year Plan",
        id: "6479429608db5d81e71101ba",
      },
      { name: "Political Science, B.A", id: "6479429608db5d81e71101bb" },
      {
        name: "Theatre Arts with Concentration in Acting, B.A",
        id: "6479429608db5d81e71101bf",
      },
      {
        name: "Theatre Arts with Concentration in Theatre Studies, B.A. Sample Four-Year Plan",
        id: "6479429608db5d81e71101bf",
      },
      {
        name: "Theatre Arts with Concentration in Theatre Studies, B.A",
        id: "6479429608db5d81e71101bf",
      },
    ],
    kM = () => {
      const [e, t] = S.useState(""),
        [n, r] = S.useState(!1),
        [i, o] = S.useState(!1),
        [a, s] = S.useState(!1),
        [l, u] = S.useState(!1),
        [c, f] = S.useState(""),
        [d, p] = S.useState([]),
        [g, y] = S.useState(!0),
        [b, m] = S.useState(null);
      S.useEffect(
        () => (
          h(),
          v(),
          window.addEventListener("resize", v),
          () => {
            window.removeEventListener("resize", v);
          }
        ),
        []
      );
      const h = () => {
          try {
            setTimeout(() => {
              p(CM), y(!1);
            }, 1e3);
          } catch (D) {
            m(D), y(!1);
          }
        },
        v = () => {
          x();
        },
        x = () => {
          const D = document.getElementById("builderSidebar"),
            k = document.getElementById("builderView");
          if (D && k)
            if (D.style.display !== "none") {
              const j = D.offsetWidth;
              k.style.paddingLeft = `${j}px`;
            } else k.style.paddingLeft = "0";
        },
        E = () => {
          r(!0), o(!1), s(!1), u(!1);
        },
        _ = () => {
          o(!0), r(!1), s(!1), u(!1), t("");
        },
        C = () => {
          s(!0), r(!1), o(!1), u(!1), t("");
        },
        N = (D, k) => {
          f(D), u(!0), s(!1), r(!1), o(!1), t(k);
        },
        M = () =>
          w.jsxs(Qw, {
            id: "builderBanner",
            className: "banner banner-sonoma",
            children: [
              w.jsx("h5", { children: "Dashboard" }),
              w.jsx("button", {
                id: "bannerNavButton",
                className: "banner-button banner-sonoma banner-xlarge",
                onClick: v,
                children: "☰",
              }),
              w.jsx("div", {
                style: { alignItems: "center" },
                children: w.jsxs("div", {
                  style: { display: "flex", alignItems: "center" },
                  children: [
                    w.jsx("h5", {
                      id: "bannerLabel",
                      style: {
                        paddingTop: "7px",
                        marginBottom: 0,
                        marginRight: "10px",
                      },
                      children: l,
                    }),
                    w.jsx("h3", {
                      id: "bannerDegreeName",
                      style: { marginTop: 0 },
                      children: e,
                    }),
                  ],
                }),
              }),
            ],
          }),
        P = () =>
          w.jsx(Ww, {
            id: "builderNavbar",
            className: "navbar navbar-material",
            children: w.jsxs("div", {
              className: "container",
              style: { alignItems: "left" },
              children: [
                w.jsx("div", {
                  className: "navbarItem",
                  children: w.jsx("span", {
                    className: "navbarLink",
                    onClick: _,
                    children: "Programs",
                  }),
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  children: w.jsx("span", {
                    className: "navbarLink",
                    onClick: C,
                    children: "Departments",
                  }),
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  children: w.jsx("span", {
                    className: "navbarLink",
                    onClick: E,
                    children: "Courses",
                  }),
                }),
                w.jsx("div", {
                  className: "navbarItem",
                  children: "My Schedules",
                }),
              ],
            }),
          }),
        L = (D) => {
          const k = D.target.value,
            j = D.target.options[D.target.selectedIndex].text;
          N(k, j);
        };
      S.useEffect(() => {
        c && N(c, e);
      }, [c]);
      const B = () =>
        w.jsxs("div", {
          style: {
            display: "grid",
            paddingBottom: "10px",
            borderBottom: "ridge",
          },
          children: [
            w.jsx("label", {
              htmlFor: "degreeSelect",
              children: "Select Program:",
            }),
            w.jsxs("select", {
              id: "degreeSelect",
              value: c,
              onChange: L,
              children: [
                w.jsx("option", { value: "", children: "-- Select --" }),
                d.map((D) =>
                  w.jsx("option", { value: D.id, children: D.name }, D.id)
                ),
              ],
            }),
          ],
        });
      return g
        ? w.jsx(fr, {})
        : b
        ? w.jsxs("p", { children: ["Error: ", b.message] })
        : w.jsxs("div", {
            id: "builderOverlay",
            className: "builder-overlay",
            children: [
              w.jsx(qw, { id: "builderSidebar", children: B() }),
              M(),
              P(),
              n && w.jsx(yM, {}),
              i && w.jsx(xM, {}),
              a && w.jsx(EM, {}),
              l && w.jsx(_M, { departmentId: c }, c),
            ],
          });
    },
    NM = () => (
      S.useEffect(() => {
        W0("VisualDegree | Db_Access");
      }, []),
      w.jsx("div", {
        id: "builderView",
        className: "builder-view",
        style: { backgroundColor: "whitesmoke" },
        children: w.jsx(kM, {}),
      })
    );
  var Af = function (e, t) {
    return (
      (Af =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      Af(e, t)
    );
  };
  function Ut(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    Af(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
  }
  var F = function () {
    return (
      (F =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      F.apply(this, arguments)
    );
  };
  function Zi(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  }
  function An(e, t, n, r) {
    function i(o) {
      return o instanceof n
        ? o
        : new n(function (a) {
            a(o);
          });
    }
    return new (n || (n = Promise))(function (o, a) {
      function s(c) {
        try {
          u(r.next(c));
        } catch (f) {
          a(f);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (f) {
          a(f);
        }
      }
      function u(c) {
        c.done ? o(c.value) : i(c.value).then(s, l);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function In(e, t) {
    var n = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      r,
      i,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (c) {
        return l([u, c]);
      };
    }
    function l(u) {
      if (r) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (n = 0)), n; )
        try {
          if (
            ((r = 1),
            i &&
              (o =
                u[0] & 2
                  ? i.return
                  : u[0]
                  ? i.throw || ((o = i.return) && o.call(i), 0)
                  : i.next) &&
              !(o = o.call(i, u[1])).done)
          )
            return o;
          switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return n.label++, { value: u[1], done: !1 };
            case 5:
              n.label++, (i = u[1]), (u = [0]);
              continue;
            case 7:
              (u = n.ops.pop()), n.trys.pop();
              continue;
            default:
              if (
                ((o = n.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < o[1]) {
                (n.label = o[1]), (o = u);
                break;
              }
              if (o && n.label < o[2]) {
                (n.label = o[2]), n.ops.push(u);
                break;
              }
              o[2] && n.ops.pop(), n.trys.pop();
              continue;
          }
          u = t.call(e, n);
        } catch (c) {
          (u = [6, c]), (i = 0);
        } finally {
          r = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  }
  function Mr(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)
        (o || !(r in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var tc = "Invariant Violation",
    kv = Object.setPrototypeOf,
    OM =
      kv === void 0
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : kv,
    ie = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = tc);
        var r =
          e.call(
            this,
            typeof n == "number"
              ? tc +
                  ": " +
                  n +
                  " (see https://github.com/apollographql/invariant-packages)"
              : n
          ) || this;
        return (r.framesToPop = 1), (r.name = tc), OM(r, t.prototype), r;
      }
      return t;
    })(Error);
  function H(e, t) {
    if (!e) throw new ie(t);
  }
  var Gw = ["debug", "log", "warn", "error", "silent"],
    PM = Gw.indexOf("log");
  function hs(e) {
    return function () {
      if (Gw.indexOf(e) >= PM) {
        var t = console[e] || console.log;
        return t.apply(console, arguments);
      }
    };
  }
  (function (e) {
    (e.debug = hs("debug")),
      (e.log = hs("log")),
      (e.warn = hs("warn")),
      (e.error = hs("error"));
  })(H || (H = {}));
  function St(e) {
    try {
      return e();
    } catch {}
  }
  const Nv =
    St(function () {
      return globalThis;
    }) ||
    St(function () {
      return window;
    }) ||
    St(function () {
      return self;
    }) ||
    St(function () {
      return global;
    }) ||
    St(function () {
      return St.constructor("return this")();
    });
  var Ov = "__",
    Pv = [Ov, Ov].join("DEV");
  function TM() {
    try {
      return !!__DEV__;
    } catch {
      return (
        Object.defineProperty(Nv, Pv, {
          value:
            St(function () {
              return "production";
            }) !== "production",
          enumerable: !1,
          configurable: !0,
          writable: !0,
        }),
        Nv[Pv]
      );
    }
  }
  const nc = TM();
  function Fn(e) {
    try {
      return e();
    } catch {}
  }
  var If =
      Fn(function () {
        return globalThis;
      }) ||
      Fn(function () {
        return window;
      }) ||
      Fn(function () {
        return self;
      }) ||
      Fn(function () {
        return global;
      }) ||
      Fn(function () {
        return Fn.constructor("return this")();
      }),
    Ff = !1;
  function MM() {
    If &&
      !Fn(function () {
        return "production";
      }) &&
      !Fn(function () {
        return process;
      }) &&
      (Object.defineProperty(If, "process", {
        value: { env: { NODE_ENV: "production" } },
        configurable: !0,
        enumerable: !1,
        writable: !0,
      }),
      (Ff = !0));
  }
  MM();
  function Tv() {
    Ff && (delete If.process, (Ff = !1));
  }
  function As(e, t) {
    if (!!!e) throw new Error(t);
  }
  const Xw = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet",
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet",
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      FieldDefinition: [
        "description",
        "name",
        "arguments",
        "type",
        "directives",
      ],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives",
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields",
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: [
        "description",
        "name",
        "directives",
        "fields",
      ],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"],
    },
    DM = new Set(Object.keys(Xw));
  function Mv(e) {
    const t = e == null ? void 0 : e.kind;
    return typeof t == "string" && DM.has(t);
  }
  var Dv;
  (function (e) {
    (e.QUERY = "query"),
      (e.MUTATION = "mutation"),
      (e.SUBSCRIPTION = "subscription");
  })(Dv || (Dv = {}));
  var De;
  (function (e) {
    (e.NAME = "Name"),
      (e.DOCUMENT = "Document"),
      (e.OPERATION_DEFINITION = "OperationDefinition"),
      (e.VARIABLE_DEFINITION = "VariableDefinition"),
      (e.SELECTION_SET = "SelectionSet"),
      (e.FIELD = "Field"),
      (e.ARGUMENT = "Argument"),
      (e.FRAGMENT_SPREAD = "FragmentSpread"),
      (e.INLINE_FRAGMENT = "InlineFragment"),
      (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
      (e.VARIABLE = "Variable"),
      (e.INT = "IntValue"),
      (e.FLOAT = "FloatValue"),
      (e.STRING = "StringValue"),
      (e.BOOLEAN = "BooleanValue"),
      (e.NULL = "NullValue"),
      (e.ENUM = "EnumValue"),
      (e.LIST = "ListValue"),
      (e.OBJECT = "ObjectValue"),
      (e.OBJECT_FIELD = "ObjectField"),
      (e.DIRECTIVE = "Directive"),
      (e.NAMED_TYPE = "NamedType"),
      (e.LIST_TYPE = "ListType"),
      (e.NON_NULL_TYPE = "NonNullType"),
      (e.SCHEMA_DEFINITION = "SchemaDefinition"),
      (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
      (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
      (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
      (e.FIELD_DEFINITION = "FieldDefinition"),
      (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
      (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
      (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
      (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
      (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
      (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
      (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
      (e.SCHEMA_EXTENSION = "SchemaExtension"),
      (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
      (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
      (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
      (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
      (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
      (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
  })(De || (De = {}));
  function Rv(e) {
    return e === 9 || e === 32;
  }
  function RM(e, t) {
    const n = e.replace(/"""/g, '\\"""'),
      r = n.split(/\r\n|[\n\r]/g),
      i = r.length === 1,
      o =
        r.length > 1 &&
        r.slice(1).every((p) => p.length === 0 || Rv(p.charCodeAt(0))),
      a = n.endsWith('\\"""'),
      s = e.endsWith('"') && !a,
      l = e.endsWith("\\"),
      u = s || l,
      c = !(t != null && t.minimize) && (!i || e.length > 70 || u || o || a);
    let f = "";
    const d = i && Rv(e.charCodeAt(0));
    return (
      ((c && !d) || o) &&
        (f += `
`),
      (f += n),
      (c || u) &&
        (f += `
`),
      '"""' + f + '"""'
    );
  }
  const jM = 10,
    Kw = 2;
  function Zw(e) {
    return ru(e, []);
  }
  function ru(e, t) {
    switch (typeof e) {
      case "string":
        return JSON.stringify(e);
      case "function":
        return e.name ? `[function ${e.name}]` : "[function]";
      case "object":
        return AM(e, t);
      default:
        return String(e);
    }
  }
  function AM(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    const n = [...t, e];
    if (IM(e)) {
      const r = e.toJSON();
      if (r !== e) return typeof r == "string" ? r : ru(r, n);
    } else if (Array.isArray(e)) return LM(e, n);
    return FM(e, n);
  }
  function IM(e) {
    return typeof e.toJSON == "function";
  }
  function FM(e, t) {
    const n = Object.entries(e);
    return n.length === 0
      ? "{}"
      : t.length > Kw
      ? "[" + BM(e) + "]"
      : "{ " + n.map(([i, o]) => i + ": " + ru(o, t)).join(", ") + " }";
  }
  function LM(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > Kw) return "[Array]";
    const n = Math.min(jM, e.length),
      r = e.length - n,
      i = [];
    for (let o = 0; o < n; ++o) i.push(ru(e[o], t));
    return (
      r === 1
        ? i.push("... 1 more item")
        : r > 1 && i.push(`... ${r} more items`),
      "[" + i.join(", ") + "]"
    );
  }
  function BM(e) {
    const t = Object.prototype.toString
      .call(e)
      .replace(/^\[object /, "")
      .replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
      const n = e.constructor.name;
      if (typeof n == "string" && n !== "") return n;
    }
    return t;
  }
  class zM {
    constructor(t, n = "GraphQL request", r = { line: 1, column: 1 }) {
      typeof t == "string" ||
        As(!1, `Body must be a string. Received: ${Zw(t)}.`),
        (this.body = t),
        (this.name = n),
        (this.locationOffset = r),
        this.locationOffset.line > 0 ||
          As(!1, "line in locationOffset is 1-indexed and must be positive."),
        this.locationOffset.column > 0 ||
          As(!1, "column in locationOffset is 1-indexed and must be positive.");
    }
    get [Symbol.toStringTag]() {
      return "Source";
    }
  }
  function $M(e) {
    return `"${e.replace(VM, HM)}"`;
  }
  const VM = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
  function HM(e) {
    return UM[e.charCodeAt(0)];
  }
  const UM = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F",
    ],
    kp = Object.freeze({});
  function En(e, t, n = Xw) {
    const r = new Map();
    for (const m of Object.values(De)) r.set(m, QM(t, m));
    let i,
      o = Array.isArray(e),
      a = [e],
      s = -1,
      l = [],
      u = e,
      c,
      f;
    const d = [],
      p = [];
    do {
      s++;
      const m = s === a.length,
        h = m && l.length !== 0;
      if (m) {
        if (
          ((c = p.length === 0 ? void 0 : d[d.length - 1]),
          (u = f),
          (f = p.pop()),
          h)
        )
          if (o) {
            u = u.slice();
            let x = 0;
            for (const [E, _] of l) {
              const C = E - x;
              _ === null ? (u.splice(C, 1), x++) : (u[C] = _);
            }
          } else {
            u = Object.defineProperties(
              {},
              Object.getOwnPropertyDescriptors(u)
            );
            for (const [x, E] of l) u[x] = E;
          }
        (s = i.index),
          (a = i.keys),
          (l = i.edits),
          (o = i.inArray),
          (i = i.prev);
      } else if (f) {
        if (((c = o ? s : a[s]), (u = f[c]), u == null)) continue;
        d.push(c);
      }
      let v;
      if (!Array.isArray(u)) {
        var g, y;
        Mv(u) || As(!1, `Invalid AST Node: ${Zw(u)}.`);
        const x = m
          ? (g = r.get(u.kind)) === null || g === void 0
            ? void 0
            : g.leave
          : (y = r.get(u.kind)) === null || y === void 0
          ? void 0
          : y.enter;
        if (((v = x == null ? void 0 : x.call(t, u, c, f, d, p)), v === kp))
          break;
        if (v === !1) {
          if (!m) {
            d.pop();
            continue;
          }
        } else if (v !== void 0 && (l.push([c, v]), !m))
          if (Mv(v)) u = v;
          else {
            d.pop();
            continue;
          }
      }
      if ((v === void 0 && h && l.push([c, u]), m)) d.pop();
      else {
        var b;
        (i = { inArray: o, index: s, keys: a, edits: l, prev: i }),
          (o = Array.isArray(u)),
          (a = o ? u : (b = n[u.kind]) !== null && b !== void 0 ? b : []),
          (s = -1),
          (l = []),
          f && p.push(f),
          (f = u);
      }
    } while (i !== void 0);
    return l.length !== 0 ? l[l.length - 1][1] : e;
  }
  function QM(e, t) {
    const n = e[t];
    return typeof n == "object"
      ? n
      : typeof n == "function"
      ? { enter: n, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
  }
  function qM(e) {
    return En(e, YM);
  }
  const WM = 80,
    YM = {
      Name: { leave: (e) => e.value },
      Variable: { leave: (e) => "$" + e.name },
      Document: {
        leave: (e) =>
          q(
            e.definitions,
            `

`
          ),
      },
      OperationDefinition: {
        leave(e) {
          const t = ee("(", q(e.variableDefinitions, ", "), ")"),
            n = q([e.operation, q([e.name, t]), q(e.directives, " ")], " ");
          return (n === "query" ? "" : n + " ") + e.selectionSet;
        },
      },
      VariableDefinition: {
        leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
          e + ": " + t + ee(" = ", n) + ee(" ", q(r, " ")),
      },
      SelectionSet: { leave: ({ selections: e }) => Rt(e) },
      Field: {
        leave({
          alias: e,
          name: t,
          arguments: n,
          directives: r,
          selectionSet: i,
        }) {
          const o = ee("", e, ": ") + t;
          let a = o + ee("(", q(n, ", "), ")");
          return (
            a.length > WM &&
              (a =
                o +
                ee(
                  `(
`,
                  Is(
                    q(
                      n,
                      `
`
                    )
                  ),
                  `
)`
                )),
            q([a, q(r, " "), i], " ")
          );
        },
      },
      Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
      FragmentSpread: {
        leave: ({ name: e, directives: t }) => "..." + e + ee(" ", q(t, " ")),
      },
      InlineFragment: {
        leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
          q(["...", ee("on ", e), q(t, " "), n], " "),
      },
      FragmentDefinition: {
        leave: ({
          name: e,
          typeCondition: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        }) =>
          `fragment ${e}${ee("(", q(n, ", "), ")")} on ${t} ${ee(
            "",
            q(r, " "),
            " "
          )}` + i,
      },
      IntValue: { leave: ({ value: e }) => e },
      FloatValue: { leave: ({ value: e }) => e },
      StringValue: { leave: ({ value: e, block: t }) => (t ? RM(e) : $M(e)) },
      BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
      NullValue: { leave: () => "null" },
      EnumValue: { leave: ({ value: e }) => e },
      ListValue: { leave: ({ values: e }) => "[" + q(e, ", ") + "]" },
      ObjectValue: { leave: ({ fields: e }) => "{" + q(e, ", ") + "}" },
      ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
      Directive: {
        leave: ({ name: e, arguments: t }) =>
          "@" + e + ee("(", q(t, ", "), ")"),
      },
      NamedType: { leave: ({ name: e }) => e },
      ListType: { leave: ({ type: e }) => "[" + e + "]" },
      NonNullType: { leave: ({ type: e }) => e + "!" },
      SchemaDefinition: {
        leave: ({ description: e, directives: t, operationTypes: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["schema", q(t, " "), Rt(n)], " "),
      },
      OperationTypeDefinition: {
        leave: ({ operation: e, type: t }) => e + ": " + t,
      },
      ScalarTypeDefinition: {
        leave: ({ description: e, name: t, directives: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["scalar", t, q(n, " ")], " "),
      },
      ObjectTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: n,
          directives: r,
          fields: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          q(["type", t, ee("implements ", q(n, " & ")), q(r, " "), Rt(i)], " "),
      },
      FieldDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: n,
          type: r,
          directives: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          t +
          (jv(n)
            ? ee(
                `(
`,
                Is(
                  q(
                    n,
                    `
`
                  )
                ),
                `
)`
              )
            : ee("(", q(n, ", "), ")")) +
          ": " +
          r +
          ee(" ", q(i, " ")),
      },
      InputValueDefinition: {
        leave: ({
          description: e,
          name: t,
          type: n,
          defaultValue: r,
          directives: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) + q([t + ": " + n, ee("= ", r), q(i, " ")], " "),
      },
      InterfaceTypeDefinition: {
        leave: ({
          description: e,
          name: t,
          interfaces: n,
          directives: r,
          fields: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          q(
            ["interface", t, ee("implements ", q(n, " & ")), q(r, " "), Rt(i)],
            " "
          ),
      },
      UnionTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, types: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["union", t, q(n, " "), ee("= ", q(r, " | "))], " "),
      },
      EnumTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, values: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["enum", t, q(n, " "), Rt(r)], " "),
      },
      EnumValueDefinition: {
        leave: ({ description: e, name: t, directives: n }) =>
          ee(
            "",
            e,
            `
`
          ) + q([t, q(n, " ")], " "),
      },
      InputObjectTypeDefinition: {
        leave: ({ description: e, name: t, directives: n, fields: r }) =>
          ee(
            "",
            e,
            `
`
          ) + q(["input", t, q(n, " "), Rt(r)], " "),
      },
      DirectiveDefinition: {
        leave: ({
          description: e,
          name: t,
          arguments: n,
          repeatable: r,
          locations: i,
        }) =>
          ee(
            "",
            e,
            `
`
          ) +
          "directive @" +
          t +
          (jv(n)
            ? ee(
                `(
`,
                Is(
                  q(
                    n,
                    `
`
                  )
                ),
                `
)`
              )
            : ee("(", q(n, ", "), ")")) +
          (r ? " repeatable" : "") +
          " on " +
          q(i, " | "),
      },
      SchemaExtension: {
        leave: ({ directives: e, operationTypes: t }) =>
          q(["extend schema", q(e, " "), Rt(t)], " "),
      },
      ScalarTypeExtension: {
        leave: ({ name: e, directives: t }) =>
          q(["extend scalar", e, q(t, " ")], " "),
      },
      ObjectTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
          q(
            [
              "extend type",
              e,
              ee("implements ", q(t, " & ")),
              q(n, " "),
              Rt(r),
            ],
            " "
          ),
      },
      InterfaceTypeExtension: {
        leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
          q(
            [
              "extend interface",
              e,
              ee("implements ", q(t, " & ")),
              q(n, " "),
              Rt(r),
            ],
            " "
          ),
      },
      UnionTypeExtension: {
        leave: ({ name: e, directives: t, types: n }) =>
          q(["extend union", e, q(t, " "), ee("= ", q(n, " | "))], " "),
      },
      EnumTypeExtension: {
        leave: ({ name: e, directives: t, values: n }) =>
          q(["extend enum", e, q(t, " "), Rt(n)], " "),
      },
      InputObjectTypeExtension: {
        leave: ({ name: e, directives: t, fields: n }) =>
          q(["extend input", e, q(t, " "), Rt(n)], " "),
      },
    };
  function q(e, t = "") {
    var n;
    return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null &&
      n !== void 0
      ? n
      : "";
  }
  function Rt(e) {
    return ee(
      `{
`,
      Is(
        q(
          e,
          `
`
        )
      ),
      `
}`
    );
  }
  function ee(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : "";
  }
  function Is(e) {
    return ee(
      "  ",
      e.replace(
        /\n/g,
        `
  `
      )
    );
  }
  function jv(e) {
    var t;
    return (t =
      e == null
        ? void 0
        : e.some((n) =>
            n.includes(`
`)
          )) !== null && t !== void 0
      ? t
      : !1;
  }
  function Av(e) {
    return (
      e.kind === De.FIELD ||
      e.kind === De.FRAGMENT_SPREAD ||
      e.kind === De.INLINE_FRAGMENT
    );
  }
  function GM() {
    return Tv();
  }
  function XM() {
    __DEV__ ? H(typeof nc == "boolean", nc) : H(typeof nc == "boolean", 39);
  }
  GM();
  XM();
  function iu(e, t) {
    var n = e.directives;
    return !n || !n.length
      ? !0
      : JM(n).every(function (r) {
          var i = r.directive,
            o = r.ifArgument,
            a = !1;
          return (
            o.value.kind === "Variable"
              ? ((a = t && t[o.value.name.value]),
                __DEV__
                  ? H(
                      a !== void 0,
                      "Invalid variable referenced in @".concat(
                        i.name.value,
                        " directive."
                      )
                    )
                  : H(a !== void 0, 40))
              : (a = o.value.value),
            i.name.value === "skip" ? !a : a
          );
        });
  }
  function Np(e, t, n) {
    var r = new Set(e),
      i = r.size;
    return (
      En(t, {
        Directive: function (o) {
          if (r.delete(o.name.value) && (!n || !r.size)) return kp;
        },
      }),
      n ? !r.size : r.size < i
    );
  }
  function KM(e) {
    return e && Np(["client", "export"], e, !0);
  }
  function ZM(e) {
    var t = e.name.value;
    return t === "skip" || t === "include";
  }
  function JM(e) {
    var t = [];
    return (
      e &&
        e.length &&
        e.forEach(function (n) {
          if (ZM(n)) {
            var r = n.arguments,
              i = n.name.value;
            __DEV__
              ? H(
                  r && r.length === 1,
                  "Incorrect number of arguments for the @".concat(
                    i,
                    " directive."
                  )
                )
              : H(r && r.length === 1, 41);
            var o = r[0];
            __DEV__
              ? H(
                  o.name && o.name.value === "if",
                  "Invalid argument for the @".concat(i, " directive.")
                )
              : H(o.name && o.name.value === "if", 42);
            var a = o.value;
            __DEV__
              ? H(
                  a && (a.kind === "Variable" || a.kind === "BooleanValue"),
                  "Argument for the @".concat(
                    i,
                    " directive must be a variable or a boolean value."
                  )
                )
              : H(
                  a && (a.kind === "Variable" || a.kind === "BooleanValue"),
                  43
                ),
              t.push({ directive: n, ifArgument: o });
          }
        }),
      t
    );
  }
  function eD(e, t) {
    var n = t,
      r = [];
    e.definitions.forEach(function (o) {
      if (o.kind === "OperationDefinition")
        throw __DEV__
          ? new ie(
              "Found a "
                .concat(o.operation, " operation")
                .concat(
                  o.name ? " named '".concat(o.name.value, "'") : "",
                  ". "
                ) +
                "No operations are allowed when using a fragment as a query. Only fragments are allowed."
            )
          : new ie(44);
      o.kind === "FragmentDefinition" && r.push(o);
    }),
      typeof n > "u" &&
        (__DEV__
          ? H(
              r.length === 1,
              "Found ".concat(
                r.length,
                " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."
              )
            )
          : H(r.length === 1, 45),
        (n = r[0].name.value));
    var i = F(F({}, e), {
      definitions: Mr(
        [
          {
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: n } },
              ],
            },
          },
        ],
        e.definitions,
        !0
      ),
    });
    return i;
  }
  function Op(e) {
    e === void 0 && (e = []);
    var t = {};
    return (
      e.forEach(function (n) {
        t[n.name.value] = n;
      }),
      t
    );
  }
  function Pp(e, t) {
    switch (e.kind) {
      case "InlineFragment":
        return e;
      case "FragmentSpread": {
        var n = e.name.value;
        if (typeof t == "function") return t(n);
        var r = t && t[n];
        return (
          __DEV__ ? H(r, "No fragment named ".concat(n)) : H(r, 46), r || null
        );
      }
      default:
        return null;
    }
  }
  function ve(e) {
    return e !== null && typeof e == "object";
  }
  function Mi(e) {
    return { __ref: String(e) };
  }
  function oe(e) {
    return !!(e && typeof e == "object" && typeof e.__ref == "string");
  }
  function tD(e) {
    return ve(e) && e.kind === "Document" && Array.isArray(e.definitions);
  }
  function nD(e) {
    return e.kind === "StringValue";
  }
  function rD(e) {
    return e.kind === "BooleanValue";
  }
  function iD(e) {
    return e.kind === "IntValue";
  }
  function oD(e) {
    return e.kind === "FloatValue";
  }
  function aD(e) {
    return e.kind === "Variable";
  }
  function sD(e) {
    return e.kind === "ObjectValue";
  }
  function lD(e) {
    return e.kind === "ListValue";
  }
  function uD(e) {
    return e.kind === "EnumValue";
  }
  function cD(e) {
    return e.kind === "NullValue";
  }
  function Ji(e, t, n, r) {
    if (iD(n) || oD(n)) e[t.value] = Number(n.value);
    else if (rD(n) || nD(n)) e[t.value] = n.value;
    else if (sD(n)) {
      var i = {};
      n.fields.map(function (a) {
        return Ji(i, a.name, a.value, r);
      }),
        (e[t.value] = i);
    } else if (aD(n)) {
      var o = (r || {})[n.name.value];
      e[t.value] = o;
    } else if (lD(n))
      e[t.value] = n.values.map(function (a) {
        var s = {};
        return Ji(s, t, a, r), s[t.value];
      });
    else if (uD(n)) e[t.value] = n.value;
    else if (cD(n)) e[t.value] = null;
    else
      throw __DEV__
        ? new ie(
            'The inline argument "'
              .concat(t.value, '" of kind "')
              .concat(n.kind, '"') +
              "is not supported. Use variables instead of inline arguments to overcome this limitation."
          )
        : new ie(55);
  }
  function fD(e, t) {
    var n = null;
    e.directives &&
      ((n = {}),
      e.directives.forEach(function (i) {
        (n[i.name.value] = {}),
          i.arguments &&
            i.arguments.forEach(function (o) {
              var a = o.name,
                s = o.value;
              return Ji(n[i.name.value], a, s, t);
            });
      }));
    var r = null;
    return (
      e.arguments &&
        e.arguments.length &&
        ((r = {}),
        e.arguments.forEach(function (i) {
          var o = i.name,
            a = i.value;
          return Ji(r, o, a, t);
        })),
      Tp(e.name.value, r, n)
    );
  }
  var dD = ["connection", "include", "skip", "client", "rest", "export"],
    Tp = Object.assign(
      function (e, t, n) {
        if (t && n && n.connection && n.connection.key)
          if (n.connection.filter && n.connection.filter.length > 0) {
            var r = n.connection.filter ? n.connection.filter : [];
            r.sort();
            var i = {};
            return (
              r.forEach(function (s) {
                i[s] = t[s];
              }),
              "".concat(n.connection.key, "(").concat(Co(i), ")")
            );
          } else return n.connection.key;
        var o = e;
        if (t) {
          var a = Co(t);
          o += "(".concat(a, ")");
        }
        return (
          n &&
            Object.keys(n).forEach(function (s) {
              dD.indexOf(s) === -1 &&
                (n[s] && Object.keys(n[s]).length
                  ? (o += "@".concat(s, "(").concat(Co(n[s]), ")"))
                  : (o += "@".concat(s)));
            }),
          o
        );
      },
      {
        setStringify: function (e) {
          var t = Co;
          return (Co = e), t;
        },
      }
    ),
    Co = function (t) {
      return JSON.stringify(t, pD);
    };
  function pD(e, t) {
    return (
      ve(t) &&
        !Array.isArray(t) &&
        (t = Object.keys(t)
          .sort()
          .reduce(function (n, r) {
            return (n[r] = t[r]), n;
          }, {})),
      t
    );
  }
  function ou(e, t) {
    if (e.arguments && e.arguments.length) {
      var n = {};
      return (
        e.arguments.forEach(function (r) {
          var i = r.name,
            o = r.value;
          return Ji(n, i, o, t);
        }),
        n
      );
    }
    return null;
  }
  function $r(e) {
    return e.alias ? e.alias.value : e.name.value;
  }
  function Lf(e, t, n) {
    for (var r, i = 0, o = t.selections; i < o.length; i++) {
      var a = o[i];
      if (Vr(a)) {
        if (a.name.value === "__typename") return e[$r(a)];
      } else r ? r.push(a) : (r = [a]);
    }
    if (typeof e.__typename == "string") return e.__typename;
    if (r)
      for (var s = 0, l = r; s < l.length; s++) {
        var a = l[s],
          u = Lf(e, Pp(a, n).selectionSet, n);
        if (typeof u == "string") return u;
      }
  }
  function Vr(e) {
    return e.kind === "Field";
  }
  function hD(e) {
    return e.kind === "InlineFragment";
  }
  function au(e) {
    __DEV__
      ? H(
          e && e.kind === "Document",
          'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
        )
      : H(e && e.kind === "Document", 47);
    var t = e.definitions
      .filter(function (n) {
        return n.kind !== "FragmentDefinition";
      })
      .map(function (n) {
        if (n.kind !== "OperationDefinition")
          throw __DEV__
            ? new ie(
                'Schema type definitions not allowed in queries. Found: "'.concat(
                  n.kind,
                  '"'
                )
              )
            : new ie(48);
        return n;
      });
    return (
      __DEV__
        ? H(
            t.length <= 1,
            "Ambiguous GraphQL document: contains ".concat(
              t.length,
              " operations"
            )
          )
        : H(t.length <= 1, 49),
      e
    );
  }
  function La(e) {
    return (
      au(e),
      e.definitions.filter(function (t) {
        return t.kind === "OperationDefinition";
      })[0]
    );
  }
  function Bf(e) {
    return (
      e.definitions
        .filter(function (t) {
          return t.kind === "OperationDefinition" && !!t.name;
        })
        .map(function (t) {
          return t.name.value;
        })[0] || null
    );
  }
  function Mp(e) {
    return e.definitions.filter(function (t) {
      return t.kind === "FragmentDefinition";
    });
  }
  function Jw(e) {
    var t = La(e);
    return (
      __DEV__
        ? H(t && t.operation === "query", "Must contain a query definition.")
        : H(t && t.operation === "query", 50),
      t
    );
  }
  function mD(e) {
    __DEV__
      ? H(
          e.kind === "Document",
          'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
        )
      : H(e.kind === "Document", 51),
      __DEV__
        ? H(
            e.definitions.length <= 1,
            "Fragment must have exactly one definition."
          )
        : H(e.definitions.length <= 1, 52);
    var t = e.definitions[0];
    return (
      __DEV__
        ? H(t.kind === "FragmentDefinition", "Must be a fragment definition.")
        : H(t.kind === "FragmentDefinition", 53),
      t
    );
  }
  function su(e) {
    au(e);
    for (var t, n = 0, r = e.definitions; n < r.length; n++) {
      var i = r[n];
      if (i.kind === "OperationDefinition") {
        var o = i.operation;
        if (o === "query" || o === "mutation" || o === "subscription") return i;
      }
      i.kind === "FragmentDefinition" && !t && (t = i);
    }
    if (t) return t;
    throw __DEV__
      ? new ie(
          "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
        )
      : new ie(54);
  }
  function Dp(e) {
    var t = Object.create(null),
      n = e && e.variableDefinitions;
    return (
      n &&
        n.length &&
        n.forEach(function (r) {
          r.defaultValue && Ji(t, r.variable.name, r.defaultValue);
        }),
      t
    );
  }
  var Ee = Array.isArray;
  function on(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var Iv = { kind: De.FIELD, name: { kind: De.NAME, value: "__typename" } };
  function ex(e, t) {
    return (
      !e ||
      e.selectionSet.selections.every(function (n) {
        return n.kind === De.FRAGMENT_SPREAD && ex(t[n.name.value], t);
      })
    );
  }
  function vD(e) {
    return ex(La(e) || mD(e), Op(Mp(e))) ? null : e;
  }
  function yD(e) {
    var t = new Set(),
      n = [];
    return (
      e.forEach(function (r) {
        r.name ? t.add(r.name) : r.test && n.push(r.test);
      }),
      function (r) {
        return (
          t.has(r.name.value) ||
          n.some(function (i) {
            return i(r);
          })
        );
      }
    );
  }
  function Fv(e) {
    var t = new Map();
    return function (r) {
      r === void 0 && (r = e);
      var i = t.get(r);
      return (
        i ||
          t.set(r, (i = { variables: new Set(), fragmentSpreads: new Set() })),
        i
      );
    };
  }
  function tx(e, t) {
    for (
      var n = Fv(""),
        r = Fv(""),
        i = function (h) {
          for (var v = 0, x = void 0; v < h.length && (x = h[v]); ++v)
            if (!Ee(x)) {
              if (x.kind === De.OPERATION_DEFINITION)
                return n(x.name && x.name.value);
              if (x.kind === De.FRAGMENT_DEFINITION) return r(x.name.value);
            }
          return (
            __DEV__ && H.error("Could not find operation or fragment"), null
          );
        },
        o = 0,
        a = t.definitions.length - 1;
      a >= 0;
      --a
    )
      t.definitions[a].kind === De.OPERATION_DEFINITION && ++o;
    var s = yD(e),
      l = e.some(function (h) {
        return h.remove;
      }),
      u = function (h) {
        return l && h && h.some(s);
      },
      c = new Map(),
      f = !1,
      d = {
        enter: function (h) {
          if (u(h.directives)) return (f = !0), null;
        },
      },
      p = En(t, {
        Field: d,
        InlineFragment: d,
        VariableDefinition: {
          enter: function () {
            return !1;
          },
        },
        Variable: {
          enter: function (h, v, x, E, _) {
            var C = i(_);
            C && C.variables.add(h.name.value);
          },
        },
        FragmentSpread: {
          enter: function (h, v, x, E, _) {
            if (u(h.directives)) return (f = !0), null;
            var C = i(_);
            C && C.fragmentSpreads.add(h.name.value);
          },
        },
        FragmentDefinition: {
          enter: function (h, v, x, E) {
            c.set(JSON.stringify(E), h);
          },
          leave: function (h, v, x, E) {
            var _ = c.get(JSON.stringify(E));
            if (h === _) return h;
            if (
              o > 0 &&
              h.selectionSet.selections.every(function (C) {
                return C.kind === De.FIELD && C.name.value === "__typename";
              })
            )
              return (r(h.name.value).removed = !0), (f = !0), null;
          },
        },
        Directive: {
          leave: function (h) {
            if (s(h)) return (f = !0), null;
          },
        },
      });
    if (!f) return t;
    var g = function (h) {
        return (
          h.transitiveVars ||
            ((h.transitiveVars = new Set(h.variables)),
            h.removed ||
              h.fragmentSpreads.forEach(function (v) {
                g(r(v)).transitiveVars.forEach(function (x) {
                  h.transitiveVars.add(x);
                });
              })),
          h
        );
      },
      y = new Set();
    p.definitions.forEach(function (h) {
      h.kind === De.OPERATION_DEFINITION
        ? g(n(h.name && h.name.value)).fragmentSpreads.forEach(function (v) {
            y.add(v);
          })
        : h.kind === De.FRAGMENT_DEFINITION &&
          o === 0 &&
          !r(h.name.value).removed &&
          y.add(h.name.value);
    }),
      y.forEach(function (h) {
        g(r(h)).fragmentSpreads.forEach(function (v) {
          y.add(v);
        });
      });
    var b = function (h) {
        return !!(!y.has(h) || r(h).removed);
      },
      m = {
        enter: function (h) {
          if (b(h.name.value)) return null;
        },
      };
    return vD(
      En(p, {
        FragmentSpread: m,
        FragmentDefinition: m,
        OperationDefinition: {
          leave: function (h) {
            if (h.variableDefinitions) {
              var v = g(n(h.name && h.name.value)).transitiveVars;
              if (v.size < h.variableDefinitions.length)
                return F(F({}, h), {
                  variableDefinitions: h.variableDefinitions.filter(function (
                    x
                  ) {
                    return v.has(x.variable.name.value);
                  }),
                });
            }
          },
        },
      })
    );
  }
  var Rp = Object.assign(
      function (e) {
        return En(e, {
          SelectionSet: {
            enter: function (t, n, r) {
              if (!(r && r.kind === De.OPERATION_DEFINITION)) {
                var i = t.selections;
                if (i) {
                  var o = i.some(function (s) {
                    return (
                      Vr(s) &&
                      (s.name.value === "__typename" ||
                        s.name.value.lastIndexOf("__", 0) === 0)
                    );
                  });
                  if (!o) {
                    var a = r;
                    if (
                      !(
                        Vr(a) &&
                        a.directives &&
                        a.directives.some(function (s) {
                          return s.name.value === "export";
                        })
                      )
                    )
                      return F(F({}, t), {
                        selections: Mr(Mr([], i, !0), [Iv], !1),
                      });
                  }
                }
              }
            },
          },
        });
      },
      {
        added: function (e) {
          return e === Iv;
        },
      }
    ),
    gD = {
      test: function (e) {
        var t = e.name.value === "connection";
        return (
          t &&
            (!e.arguments ||
              !e.arguments.some(function (n) {
                return n.name.value === "key";
              })) &&
            __DEV__ &&
            H.warn(
              "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
            ),
          t
        );
      },
    };
  function wD(e) {
    return tx([gD], au(e));
  }
  function xD(e) {
    var t = su(e),
      n = t.operation;
    if (n === "query") return e;
    var r = En(e, {
      OperationDefinition: {
        enter: function (i) {
          return F(F({}, i), { operation: "query" });
        },
      },
    });
    return r;
  }
  function bD(e) {
    au(e);
    var t = tx(
      [
        {
          test: function (n) {
            return n.name.value === "client";
          },
          remove: !0,
        },
      ],
      e
    );
    return t;
  }
  var SD = Object.prototype.hasOwnProperty;
  function Lv() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return jp(e);
  }
  function jp(e) {
    var t = e[0] || {},
      n = e.length;
    if (n > 1) for (var r = new ir(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
    return t;
  }
  var ED = function (e, t, n) {
      return this.merge(e[n], t[n]);
    },
    ir = (function () {
      function e(t) {
        t === void 0 && (t = ED),
          (this.reconciler = t),
          (this.isObject = ve),
          (this.pastCopies = new Set());
      }
      return (
        (e.prototype.merge = function (t, n) {
          for (var r = this, i = [], o = 2; o < arguments.length; o++)
            i[o - 2] = arguments[o];
          return ve(n) && ve(t)
            ? (Object.keys(n).forEach(function (a) {
                if (SD.call(t, a)) {
                  var s = t[a];
                  if (n[a] !== s) {
                    var l = r.reconciler.apply(r, Mr([t, n, a], i, !1));
                    l !== s && ((t = r.shallowCopyForMerge(t)), (t[a] = l));
                  }
                } else (t = r.shallowCopyForMerge(t)), (t[a] = n[a]);
              }),
              t)
            : n;
        }),
        (e.prototype.shallowCopyForMerge = function (t) {
          return (
            ve(t) &&
              (this.pastCopies.has(t) ||
                (Array.isArray(t)
                  ? (t = t.slice(0))
                  : (t = F({ __proto__: Object.getPrototypeOf(t) }, t)),
                this.pastCopies.add(t))),
            t
          );
        }),
        e
      );
    })();
  function _D(e, t) {
    var n = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = CD(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function CD(e, t) {
    if (e) {
      if (typeof e == "string") return Bv(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
      )
        return Array.from(e);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Bv(e, t);
    }
  }
  function Bv(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function zv(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Ap(e, t, n) {
    return (
      t && zv(e.prototype, t),
      n && zv(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  var Ip = function () {
      return typeof Symbol == "function";
    },
    Fp = function (e) {
      return Ip() && !!Symbol[e];
    },
    Lp = function (e) {
      return Fp(e) ? Symbol[e] : "@@" + e;
    };
  Ip() && !Fp("observable") && (Symbol.observable = Symbol("observable"));
  var kD = Lp("iterator"),
    zf = Lp("observable"),
    nx = Lp("species");
  function Sl(e, t) {
    var n = e[t];
    if (n != null) {
      if (typeof n != "function") throw new TypeError(n + " is not a function");
      return n;
    }
  }
  function ko(e) {
    var t = e.constructor;
    return (
      t !== void 0 && ((t = t[nx]), t === null && (t = void 0)),
      t !== void 0 ? t : de
    );
  }
  function ND(e) {
    return e instanceof de;
  }
  function eo(e) {
    eo.log
      ? eo.log(e)
      : setTimeout(function () {
          throw e;
        });
  }
  function Fs(e) {
    Promise.resolve().then(function () {
      try {
        e();
      } catch (t) {
        eo(t);
      }
    });
  }
  function rx(e) {
    var t = e._cleanup;
    if (t !== void 0 && ((e._cleanup = void 0), !!t))
      try {
        if (typeof t == "function") t();
        else {
          var n = Sl(t, "unsubscribe");
          n && n.call(t);
        }
      } catch (r) {
        eo(r);
      }
  }
  function $f(e) {
    (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
  }
  function OD(e) {
    var t = e._queue;
    if (t) {
      (e._queue = void 0), (e._state = "ready");
      for (
        var n = 0;
        n < t.length && (ix(e, t[n].type, t[n].value), e._state !== "closed");
        ++n
      );
    }
  }
  function ix(e, t, n) {
    e._state = "running";
    var r = e._observer;
    try {
      var i = Sl(r, t);
      switch (t) {
        case "next":
          i && i.call(r, n);
          break;
        case "error":
          if (($f(e), i)) i.call(r, n);
          else throw n;
          break;
        case "complete":
          $f(e), i && i.call(r);
          break;
      }
    } catch (o) {
      eo(o);
    }
    e._state === "closed"
      ? rx(e)
      : e._state === "running" && (e._state = "ready");
  }
  function rc(e, t, n) {
    if (e._state !== "closed") {
      if (e._state === "buffering") {
        e._queue.push({ type: t, value: n });
        return;
      }
      if (e._state !== "ready") {
        (e._state = "buffering"),
          (e._queue = [{ type: t, value: n }]),
          Fs(function () {
            return OD(e);
          });
        return;
      }
      ix(e, t, n);
    }
  }
  var PD = (function () {
      function e(n, r) {
        (this._cleanup = void 0),
          (this._observer = n),
          (this._queue = void 0),
          (this._state = "initializing");
        var i = new TD(this);
        try {
          this._cleanup = r.call(void 0, i);
        } catch (o) {
          i.error(o);
        }
        this._state === "initializing" && (this._state = "ready");
      }
      var t = e.prototype;
      return (
        (t.unsubscribe = function () {
          this._state !== "closed" && ($f(this), rx(this));
        }),
        Ap(e, [
          {
            key: "closed",
            get: function () {
              return this._state === "closed";
            },
          },
        ]),
        e
      );
    })(),
    TD = (function () {
      function e(n) {
        this._subscription = n;
      }
      var t = e.prototype;
      return (
        (t.next = function (r) {
          rc(this._subscription, "next", r);
        }),
        (t.error = function (r) {
          rc(this._subscription, "error", r);
        }),
        (t.complete = function () {
          rc(this._subscription, "complete");
        }),
        Ap(e, [
          {
            key: "closed",
            get: function () {
              return this._subscription._state === "closed";
            },
          },
        ]),
        e
      );
    })(),
    de = (function () {
      function e(n) {
        if (!(this instanceof e))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof n != "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = n;
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (r) {
          return (
            (typeof r != "object" || r === null) &&
              (r = { next: r, error: arguments[1], complete: arguments[2] }),
            new PD(r, this._subscriber)
          );
        }),
        (t.forEach = function (r) {
          var i = this;
          return new Promise(function (o, a) {
            if (typeof r != "function") {
              a(new TypeError(r + " is not a function"));
              return;
            }
            function s() {
              l.unsubscribe(), o();
            }
            var l = i.subscribe({
              next: function (u) {
                try {
                  r(u, s);
                } catch (c) {
                  a(c), l.unsubscribe();
                }
              },
              error: a,
              complete: o,
            });
          });
        }),
        (t.map = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = ko(this);
          return new o(function (a) {
            return i.subscribe({
              next: function (s) {
                try {
                  s = r(s);
                } catch (l) {
                  return a.error(l);
                }
                a.next(s);
              },
              error: function (s) {
                a.error(s);
              },
              complete: function () {
                a.complete();
              },
            });
          });
        }),
        (t.filter = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = ko(this);
          return new o(function (a) {
            return i.subscribe({
              next: function (s) {
                try {
                  if (!r(s)) return;
                } catch (l) {
                  return a.error(l);
                }
                a.next(s);
              },
              error: function (s) {
                a.error(s);
              },
              complete: function () {
                a.complete();
              },
            });
          });
        }),
        (t.reduce = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = ko(this),
            a = arguments.length > 1,
            s = !1,
            l = arguments[1],
            u = l;
          return new o(function (c) {
            return i.subscribe({
              next: function (f) {
                var d = !s;
                if (((s = !0), !d || a))
                  try {
                    u = r(u, f);
                  } catch (p) {
                    return c.error(p);
                  }
                else u = f;
              },
              error: function (f) {
                c.error(f);
              },
              complete: function () {
                if (!s && !a)
                  return c.error(
                    new TypeError("Cannot reduce an empty sequence")
                  );
                c.next(u), c.complete();
              },
            });
          });
        }),
        (t.concat = function () {
          for (
            var r = this, i = arguments.length, o = new Array(i), a = 0;
            a < i;
            a++
          )
            o[a] = arguments[a];
          var s = ko(this);
          return new s(function (l) {
            var u,
              c = 0;
            function f(d) {
              u = d.subscribe({
                next: function (p) {
                  l.next(p);
                },
                error: function (p) {
                  l.error(p);
                },
                complete: function () {
                  c === o.length
                    ? ((u = void 0), l.complete())
                    : f(s.from(o[c++]));
                },
              });
            }
            return (
              f(r),
              function () {
                u && (u.unsubscribe(), (u = void 0));
              }
            );
          });
        }),
        (t.flatMap = function (r) {
          var i = this;
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          var o = ko(this);
          return new o(function (a) {
            var s = [],
              l = i.subscribe({
                next: function (c) {
                  if (r)
                    try {
                      c = r(c);
                    } catch (d) {
                      return a.error(d);
                    }
                  var f = o.from(c).subscribe({
                    next: function (d) {
                      a.next(d);
                    },
                    error: function (d) {
                      a.error(d);
                    },
                    complete: function () {
                      var d = s.indexOf(f);
                      d >= 0 && s.splice(d, 1), u();
                    },
                  });
                  s.push(f);
                },
                error: function (c) {
                  a.error(c);
                },
                complete: function () {
                  u();
                },
              });
            function u() {
              l.closed && s.length === 0 && a.complete();
            }
            return function () {
              s.forEach(function (c) {
                return c.unsubscribe();
              }),
                l.unsubscribe();
            };
          });
        }),
        (t[zf] = function () {
          return this;
        }),
        (e.from = function (r) {
          var i = typeof this == "function" ? this : e;
          if (r == null) throw new TypeError(r + " is not an object");
          var o = Sl(r, zf);
          if (o) {
            var a = o.call(r);
            if (Object(a) !== a) throw new TypeError(a + " is not an object");
            return ND(a) && a.constructor === i
              ? a
              : new i(function (s) {
                  return a.subscribe(s);
                });
          }
          if (Fp("iterator") && ((o = Sl(r, kD)), o))
            return new i(function (s) {
              Fs(function () {
                if (!s.closed) {
                  for (var l = _D(o.call(r)), u; !(u = l()).done; ) {
                    var c = u.value;
                    if ((s.next(c), s.closed)) return;
                  }
                  s.complete();
                }
              });
            });
          if (Array.isArray(r))
            return new i(function (s) {
              Fs(function () {
                if (!s.closed) {
                  for (var l = 0; l < r.length; ++l)
                    if ((s.next(r[l]), s.closed)) return;
                  s.complete();
                }
              });
            });
          throw new TypeError(r + " is not observable");
        }),
        (e.of = function () {
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          var a = typeof this == "function" ? this : e;
          return new a(function (s) {
            Fs(function () {
              if (!s.closed) {
                for (var l = 0; l < i.length; ++l)
                  if ((s.next(i[l]), s.closed)) return;
                s.complete();
              }
            });
          });
        }),
        Ap(e, null, [
          {
            key: nx,
            get: function () {
              return this;
            },
          },
        ]),
        e
      );
    })();
  Ip() &&
    Object.defineProperty(de, Symbol("extensions"), {
      value: { symbol: zf, hostReportError: eo },
      configurable: !0,
    });
  function MD(e) {
    var t,
      n = e.Symbol;
    if (typeof n == "function")
      if (n.observable) t = n.observable;
      else {
        typeof n.for == "function"
          ? (t = n.for("https://github.com/benlesh/symbol-observable"))
          : (t = n("https://github.com/benlesh/symbol-observable"));
        try {
          n.observable = t;
        } catch {}
      }
    else t = "@@observable";
    return t;
  }
  var ti;
  typeof self < "u"
    ? (ti = self)
    : typeof window < "u"
    ? (ti = window)
    : typeof global < "u"
    ? (ti = global)
    : typeof od < "u"
    ? (ti = od)
    : (ti = Function("return this")());
  MD(ti);
  var $v = de.prototype,
    Vv = "@@observable";
  $v[Vv] ||
    ($v[Vv] = function () {
      return this;
    });
  var DD = Object.prototype.toString;
  function ox(e) {
    return Vf(e);
  }
  function Vf(e, t) {
    switch (DD.call(e)) {
      case "[object Array]": {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var n = e.slice(0);
        return (
          t.set(e, n),
          n.forEach(function (i, o) {
            n[o] = Vf(i, t);
          }),
          n
        );
      }
      case "[object Object]": {
        if (((t = t || new Map()), t.has(e))) return t.get(e);
        var r = Object.create(Object.getPrototypeOf(e));
        return (
          t.set(e, r),
          Object.keys(e).forEach(function (i) {
            r[i] = Vf(e[i], t);
          }),
          r
        );
      }
      default:
        return e;
    }
  }
  function RD(e) {
    var t = new Set([e]);
    return (
      t.forEach(function (n) {
        ve(n) &&
          jD(n) === n &&
          Object.getOwnPropertyNames(n).forEach(function (r) {
            ve(n[r]) && t.add(n[r]);
          });
      }),
      e
    );
  }
  function jD(e) {
    if (__DEV__ && !Object.isFrozen(e))
      try {
        Object.freeze(e);
      } catch (t) {
        if (t instanceof TypeError) return null;
        throw t;
      }
    return e;
  }
  function Hf(e) {
    return __DEV__ && RD(e), e;
  }
  function Go(e, t, n) {
    var r = [];
    e.forEach(function (i) {
      return i[t] && r.push(i);
    }),
      r.forEach(function (i) {
        return i[t](n);
      });
  }
  function ic(e, t, n) {
    return new de(function (r) {
      var i = r.next,
        o = r.error,
        a = r.complete,
        s = 0,
        l = !1,
        u = {
          then: function (p) {
            return new Promise(function (g) {
              return g(p());
            });
          },
        };
      function c(p, g) {
        return p
          ? function (y) {
              ++s;
              var b = function () {
                return p(y);
              };
              u = u
                .then(b, b)
                .then(
                  function (m) {
                    --s, i && i.call(r, m), l && f.complete();
                  },
                  function (m) {
                    throw (--s, m);
                  }
                )
                .catch(function (m) {
                  o && o.call(r, m);
                });
            }
          : function (y) {
              return g && g.call(r, y);
            };
      }
      var f = {
          next: c(t, i),
          error: c(n, o),
          complete: function () {
            (l = !0), s || (a && a.call(r));
          },
        },
        d = e.subscribe(f);
      return function () {
        return d.unsubscribe();
      };
    });
  }
  var Qr =
      typeof WeakMap == "function" &&
      St(function () {
        return navigator.product;
      }) !== "ReactNative",
    AD = typeof WeakSet == "function",
    Bp = typeof Symbol == "function" && typeof Symbol.for == "function",
    lu = Bp && Symbol.asyncIterator;
  St(function () {
    return window.document.createElement;
  });
  St(function () {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  });
  function ax(e) {
    function t(n) {
      Object.defineProperty(e, n, { value: de });
    }
    return Bp && Symbol.species && t(Symbol.species), t("@@species"), e;
  }
  function Hv(e) {
    return e && typeof e.then == "function";
  }
  var ni = (function (e) {
    Ut(t, e);
    function t(n) {
      var r =
        e.call(this, function (i) {
          return (
            r.addObserver(i),
            function () {
              return r.removeObserver(i);
            }
          );
        }) || this;
      return (
        (r.observers = new Set()),
        (r.promise = new Promise(function (i, o) {
          (r.resolve = i), (r.reject = o);
        })),
        (r.handlers = {
          next: function (i) {
            r.sub !== null &&
              ((r.latest = ["next", i]),
              r.notify("next", i),
              Go(r.observers, "next", i));
          },
          error: function (i) {
            var o = r.sub;
            o !== null &&
              (o &&
                setTimeout(function () {
                  return o.unsubscribe();
                }),
              (r.sub = null),
              (r.latest = ["error", i]),
              r.reject(i),
              r.notify("error", i),
              Go(r.observers, "error", i));
          },
          complete: function () {
            var i = r,
              o = i.sub,
              a = i.sources,
              s = a === void 0 ? [] : a;
            if (o !== null) {
              var l = s.shift();
              l
                ? Hv(l)
                  ? l.then(function (u) {
                      return (r.sub = u.subscribe(r.handlers));
                    })
                  : (r.sub = l.subscribe(r.handlers))
                : (o &&
                    setTimeout(function () {
                      return o.unsubscribe();
                    }),
                  (r.sub = null),
                  r.latest && r.latest[0] === "next"
                    ? r.resolve(r.latest[1])
                    : r.resolve(),
                  r.notify("complete"),
                  Go(r.observers, "complete"));
            }
          },
        }),
        (r.nextResultListeners = new Set()),
        (r.cancel = function (i) {
          r.reject(i), (r.sources = []), r.handlers.complete();
        }),
        r.promise.catch(function (i) {}),
        typeof n == "function" && (n = [new de(n)]),
        Hv(n)
          ? n.then(function (i) {
              return r.start(i);
            }, r.handlers.error)
          : r.start(n),
        r
      );
    }
    return (
      (t.prototype.start = function (n) {
        this.sub === void 0 &&
          ((this.sources = Array.from(n)), this.handlers.complete());
      }),
      (t.prototype.deliverLastMessage = function (n) {
        if (this.latest) {
          var r = this.latest[0],
            i = n[r];
          i && i.call(n, this.latest[1]),
            this.sub === null && r === "next" && n.complete && n.complete();
        }
      }),
      (t.prototype.addObserver = function (n) {
        this.observers.has(n) ||
          (this.deliverLastMessage(n), this.observers.add(n));
      }),
      (t.prototype.removeObserver = function (n) {
        this.observers.delete(n) &&
          this.observers.size < 1 &&
          this.handlers.complete();
      }),
      (t.prototype.notify = function (n, r) {
        var i = this.nextResultListeners;
        i.size &&
          ((this.nextResultListeners = new Set()),
          i.forEach(function (o) {
            return o(n, r);
          }));
      }),
      (t.prototype.beforeNext = function (n) {
        var r = !1;
        this.nextResultListeners.add(function (i, o) {
          r || ((r = !0), n(i, o));
        });
      }),
      t
    );
  })(de);
  ax(ni);
  function Di(e) {
    return "incremental" in e;
  }
  function ID(e) {
    return "hasNext" in e && "data" in e;
  }
  function FD(e) {
    return Di(e) || ID(e);
  }
  function LD(e) {
    return ve(e) && "payload" in e;
  }
  function sx(e, t) {
    var n = e,
      r = new ir();
    return (
      Di(t) &&
        on(t.incremental) &&
        t.incremental.forEach(function (i) {
          for (var o = i.data, a = i.path, s = a.length - 1; s >= 0; --s) {
            var l = a[s],
              u = !isNaN(+l),
              c = u ? [] : {};
            (c[l] = o), (o = c);
          }
          n = r.merge(n, o);
        }),
      n
    );
  }
  function Ls(e) {
    var t = Uf(e);
    return on(t);
  }
  function Uf(e) {
    var t = on(e.errors) ? e.errors.slice(0) : [];
    return (
      Di(e) &&
        on(e.incremental) &&
        e.incremental.forEach(function (n) {
          n.errors && t.push.apply(t, n.errors);
        }),
      t
    );
  }
  function uu() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Object.create(null);
    return (
      e.forEach(function (r) {
        r &&
          Object.keys(r).forEach(function (i) {
            var o = r[i];
            o !== void 0 && (n[i] = o);
          });
      }),
      n
    );
  }
  var Uv = new Map();
  function Qf(e) {
    var t = Uv.get(e) || 1;
    return (
      Uv.set(e, t + 1),
      ""
        .concat(e, ":")
        .concat(t, ":")
        .concat(Math.random().toString(36).slice(2))
    );
  }
  function BD(e) {
    var t = Qf("stringifyForDisplay");
    return JSON.stringify(e, function (n, r) {
      return r === void 0 ? t : r;
    })
      .split(JSON.stringify(t))
      .join("<undefined>");
  }
  function oc(e, t) {
    return uu(
      e,
      t,
      t.variables && { variables: F(F({}, e && e.variables), t.variables) }
    );
  }
  function Qv(e) {
    return new de(function (t) {
      t.error(e);
    });
  }
  var qf = function (e, t, n) {
    var r = new Error(n);
    throw (
      ((r.name = "ServerError"),
      (r.response = e),
      (r.statusCode = e.status),
      (r.result = t),
      r)
    );
  };
  function zD(e) {
    for (
      var t = ["query", "operationName", "variables", "extensions", "context"],
        n = 0,
        r = Object.keys(e);
      n < r.length;
      n++
    ) {
      var i = r[n];
      if (t.indexOf(i) < 0)
        throw __DEV__ ? new ie("illegal argument: ".concat(i)) : new ie(27);
    }
    return e;
  }
  function $D(e, t) {
    var n = F({}, e),
      r = function (o) {
        typeof o == "function" ? (n = F(F({}, n), o(n))) : (n = F(F({}, n), o));
      },
      i = function () {
        return F({}, n);
      };
    return (
      Object.defineProperty(t, "setContext", { enumerable: !1, value: r }),
      Object.defineProperty(t, "getContext", { enumerable: !1, value: i }),
      t
    );
  }
  function VD(e) {
    var t = {
      variables: e.variables || {},
      extensions: e.extensions || {},
      operationName: e.operationName,
      query: e.query,
    };
    return (
      t.operationName ||
        (t.operationName =
          typeof t.query != "string" ? Bf(t.query) || void 0 : ""),
      t
    );
  }
  function qv(e, t) {
    return t ? t(e) : de.of();
  }
  function No(e) {
    return typeof e == "function" ? new Ba(e) : e;
  }
  function ms(e) {
    return e.request.length <= 1;
  }
  var HD = (function (e) {
      Ut(t, e);
      function t(n, r) {
        var i = e.call(this, n) || this;
        return (i.link = r), i;
      }
      return t;
    })(Error),
    Ba = (function () {
      function e(t) {
        t && (this.request = t);
      }
      return (
        (e.empty = function () {
          return new e(function () {
            return de.of();
          });
        }),
        (e.from = function (t) {
          return t.length === 0
            ? e.empty()
            : t.map(No).reduce(function (n, r) {
                return n.concat(r);
              });
        }),
        (e.split = function (t, n, r) {
          var i = No(n),
            o = No(r || new e(qv));
          return ms(i) && ms(o)
            ? new e(function (a) {
                return t(a) ? i.request(a) || de.of() : o.request(a) || de.of();
              })
            : new e(function (a, s) {
                return t(a)
                  ? i.request(a, s) || de.of()
                  : o.request(a, s) || de.of();
              });
        }),
        (e.execute = function (t, n) {
          return t.request($D(n.context, VD(zD(n)))) || de.of();
        }),
        (e.concat = function (t, n) {
          var r = No(t);
          if (ms(r))
            return (
              __DEV__ &&
                H.warn(
                  new HD(
                    "You are calling concat on a terminating link, which will have no effect",
                    r
                  )
                ),
              r
            );
          var i = No(n);
          return ms(i)
            ? new e(function (o) {
                return (
                  r.request(o, function (a) {
                    return i.request(a) || de.of();
                  }) || de.of()
                );
              })
            : new e(function (o, a) {
                return (
                  r.request(o, function (s) {
                    return i.request(s, a) || de.of();
                  }) || de.of()
                );
              });
        }),
        (e.prototype.split = function (t, n, r) {
          return this.concat(e.split(t, n, r || new e(qv)));
        }),
        (e.prototype.concat = function (t) {
          return e.concat(this, t);
        }),
        (e.prototype.request = function (t, n) {
          throw __DEV__ ? new ie("request is not implemented") : new ie(22);
        }),
        (e.prototype.onError = function (t, n) {
          if (n && n.error) return n.error(t), !1;
          throw t;
        }),
        (e.prototype.setOnError = function (t) {
          return (this.onError = t), this;
        }),
        e
      );
    })(),
    Wf = Ba.execute,
    UD = "3.7.15";
  function QD(e) {
    return !!e.body;
  }
  function qD(e) {
    return !!e.getReader;
  }
  function WD(e) {
    return !!(lu && e[Symbol.asyncIterator]);
  }
  function YD(e) {
    return !!e.stream;
  }
  function GD(e) {
    return !!e.arrayBuffer;
  }
  function XD(e) {
    return !!e.pipe;
  }
  function KD(e) {
    var t,
      n = e[Symbol.asyncIterator]();
    return (
      (t = {
        next: function () {
          return n.next();
        },
      }),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t
    );
  }
  function ZD(e) {
    var t = null,
      n = null,
      r = !1,
      i = [],
      o = [];
    function a(f) {
      if (!n) {
        if (o.length) {
          var d = o.shift();
          if (Array.isArray(d) && d[0]) return d[0]({ value: f, done: !1 });
        }
        i.push(f);
      }
    }
    function s(f) {
      n = f;
      var d = o.slice();
      d.forEach(function (p) {
        p[1](f);
      }),
        !t || t();
    }
    function l() {
      r = !0;
      var f = o.slice();
      f.forEach(function (d) {
        d[0]({ value: void 0, done: !0 });
      }),
        !t || t();
    }
    (t = function () {
      (t = null),
        e.removeListener("data", a),
        e.removeListener("error", s),
        e.removeListener("end", l),
        e.removeListener("finish", l),
        e.removeListener("close", l);
    }),
      e.on("data", a),
      e.on("error", s),
      e.on("end", l),
      e.on("finish", l),
      e.on("close", l);
    function u() {
      return new Promise(function (f, d) {
        if (n) return d(n);
        if (i.length) return f({ value: i.shift(), done: !1 });
        if (r) return f({ value: void 0, done: !0 });
        o.push([f, d]);
      });
    }
    var c = {
      next: function () {
        return u();
      },
    };
    return (
      lu &&
        (c[Symbol.asyncIterator] = function () {
          return this;
        }),
      c
    );
  }
  function JD(e) {
    var t = !1,
      n = {
        next: function () {
          return t
            ? Promise.resolve({ value: void 0, done: !0 })
            : ((t = !0),
              new Promise(function (r, i) {
                e.then(function (o) {
                  r({ value: o, done: !1 });
                }).catch(i);
              }));
        },
      };
    return (
      lu &&
        (n[Symbol.asyncIterator] = function () {
          return this;
        }),
      n
    );
  }
  function Wv(e) {
    var t = {
      next: function () {
        return e.read();
      },
    };
    return (
      lu &&
        (t[Symbol.asyncIterator] = function () {
          return this;
        }),
      t
    );
  }
  function e8(e) {
    var t = e;
    if ((QD(e) && (t = e.body), WD(t))) return KD(t);
    if (qD(t)) return Wv(t.getReader());
    if (YD(t)) return Wv(t.stream().getReader());
    if (GD(t)) return JD(t.arrayBuffer());
    if (XD(t)) return ZD(t);
    throw new Error(
      "Unknown body type for responseIterator. Please pass a streamable response."
    );
  }
  var zp = Symbol();
  function t8(e) {
    return e.extensions ? Array.isArray(e.extensions[zp]) : !1;
  }
  function n8(e) {
    return e.hasOwnProperty("graphQLErrors");
  }
  var r8 = function (e) {
      var t = Mr(
        Mr(Mr([], e.graphQLErrors, !0), e.clientErrors, !0),
        e.protocolErrors,
        !0
      );
      return (
        e.networkError && t.push(e.networkError),
        t.map(function (n) {
          return (ve(n) && n.message) || "Error message not found.";
        }).join(`
`)
      );
    },
    Jr = (function (e) {
      Ut(t, e);
      function t(n) {
        var r = n.graphQLErrors,
          i = n.protocolErrors,
          o = n.clientErrors,
          a = n.networkError,
          s = n.errorMessage,
          l = n.extraInfo,
          u = e.call(this, s) || this;
        return (
          (u.name = "ApolloError"),
          (u.graphQLErrors = r || []),
          (u.protocolErrors = i || []),
          (u.clientErrors = o || []),
          (u.networkError = a || null),
          (u.message = s || r8(u)),
          (u.extraInfo = l),
          (u.__proto__ = t.prototype),
          u
        );
      }
      return t;
    })(Error),
    Yv = Object.prototype.hasOwnProperty;
  function i8(e, t) {
    var n, r, i, o, a;
    return An(this, void 0, void 0, function () {
      var s, l, u, c, f, d, p, g, y, b, m, h, v, x, E, _, C, N, M, P, L, B, D;
      return In(this, function (k) {
        switch (k.label) {
          case 0:
            if (TextDecoder === void 0)
              throw new Error(
                "TextDecoder must be defined in the environment: please import a polyfill."
              );
            (s = new TextDecoder("utf-8")),
              (l =
                (n = e.headers) === null || n === void 0
                  ? void 0
                  : n.get("content-type")),
              (u = "boundary="),
              (c =
                l != null && l.includes(u)
                  ? l == null
                    ? void 0
                    : l
                        .substring(
                          (l == null ? void 0 : l.indexOf(u)) + u.length
                        )
                        .replace(/['"]/g, "")
                        .replace(/\;(.*)/gm, "")
                        .trim()
                  : "-"),
              (f = `\r
--`.concat(c)),
              (d = ""),
              (p = e8(e)),
              (g = !0),
              (k.label = 1);
          case 1:
            return g ? [4, p.next()] : [3, 3];
          case 2:
            for (
              y = k.sent(),
                b = y.value,
                m = y.done,
                h = typeof b == "string" ? b : s.decode(b),
                v = d.length - f.length + 1,
                g = !m,
                d += h,
                x = d.indexOf(f, v);
              x > -1;

            ) {
              if (
                ((E = void 0),
                (B = [d.slice(0, x), d.slice(x + f.length)]),
                (E = B[0]),
                (d = B[1]),
                (_ = E.indexOf(`\r
\r
`)),
                (C = o8(E.slice(0, _))),
                (N = C["content-type"]),
                N && N.toLowerCase().indexOf("application/json") === -1)
              )
                throw new Error(
                  "Unsupported patch content type: application/json is required."
                );
              if (((M = E.slice(_)), M))
                try {
                  (P = lx(e, M)),
                    Object.keys(P).length > 1 ||
                    "data" in P ||
                    "incremental" in P ||
                    "errors" in P ||
                    "payload" in P
                      ? LD(P)
                        ? ((L = {}),
                          "payload" in P && (L = F({}, P.payload)),
                          "errors" in P &&
                            (L = F(F({}, L), {
                              extensions: F(
                                F({}, "extensions" in L ? L.extensions : null),
                                ((D = {}), (D[zp] = P.errors), D)
                              ),
                            })),
                          (r = t.next) === null || r === void 0 || r.call(t, L))
                        : (i = t.next) === null || i === void 0 || i.call(t, P)
                      : Object.keys(P).length === 1 &&
                        "hasNext" in P &&
                        !P.hasNext &&
                        ((o = t.complete) === null ||
                          o === void 0 ||
                          o.call(t));
                } catch (j) {
                  $p(j, t);
                }
              x = d.indexOf(f);
            }
            return [3, 1];
          case 3:
            return (a = t.complete) === null || a === void 0 || a.call(t), [2];
        }
      });
    });
  }
  function o8(e) {
    var t = {};
    return (
      e
        .split(
          `
`
        )
        .forEach(function (n) {
          var r = n.indexOf(":");
          if (r > -1) {
            var i = n.slice(0, r).trim().toLowerCase(),
              o = n.slice(r + 1).trim();
            t[i] = o;
          }
        }),
      t
    );
  }
  function lx(e, t) {
    if (e.status >= 300) {
      var n = function () {
        try {
          return JSON.parse(t);
        } catch {
          return t;
        }
      };
      qf(
        e,
        n(),
        "Response not successful: Received status code ".concat(e.status)
      );
    }
    try {
      return JSON.parse(t);
    } catch (i) {
      var r = i;
      throw (
        ((r.name = "ServerParseError"),
        (r.response = e),
        (r.statusCode = e.status),
        (r.bodyText = t),
        r)
      );
    }
  }
  function $p(e, t) {
    var n, r;
    e.name !== "AbortError" &&
      (e.result &&
        e.result.errors &&
        e.result.data &&
        ((n = t.next) === null || n === void 0 || n.call(t, e.result)),
      (r = t.error) === null || r === void 0 || r.call(t, e));
  }
  function a8(e, t, n) {
    s8(t)(e)
      .then(function (r) {
        var i, o;
        (i = n.next) === null || i === void 0 || i.call(n, r),
          (o = n.complete) === null || o === void 0 || o.call(n);
      })
      .catch(function (r) {
        return $p(r, n);
      });
  }
  function s8(e) {
    return function (t) {
      return t
        .text()
        .then(function (n) {
          return lx(t, n);
        })
        .then(function (n) {
          return (
            t.status >= 300 &&
              qf(
                t,
                n,
                "Response not successful: Received status code ".concat(
                  t.status
                )
              ),
            !Array.isArray(n) &&
              !Yv.call(n, "data") &&
              !Yv.call(n, "errors") &&
              qf(
                t,
                n,
                "Server response was missing for query '".concat(
                  Array.isArray(e)
                    ? e.map(function (r) {
                        return r.operationName;
                      })
                    : e.operationName,
                  "'."
                )
              ),
            n
          );
        });
    };
  }
  var Yf = function (e, t) {
      var n;
      try {
        n = JSON.stringify(e);
      } catch (i) {
        var r = __DEV__
          ? new ie(
              "Network request failed. "
                .concat(t, " is not serializable: ")
                .concat(i.message)
            )
          : new ie(24);
        throw ((r.parseError = i), r);
      }
      return n;
    },
    l8 = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
    u8 = { "accept": "*/*", "content-type": "application/json" },
    c8 = { method: "POST" },
    f8 = { http: l8, headers: u8, options: c8 },
    d8 = function (e, t) {
      return t(e);
    };
  function p8(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = {},
      o = {};
    n.forEach(function (f) {
      (i = F(F(F({}, i), f.options), {
        headers: F(F({}, i.headers), f.headers),
      })),
        f.credentials && (i.credentials = f.credentials),
        (o = F(F({}, o), f.http));
    }),
      i.headers && (i.headers = h8(i.headers, o.preserveHeaderCase));
    var a = e.operationName,
      s = e.extensions,
      l = e.variables,
      u = e.query,
      c = { operationName: a, variables: l };
    return (
      o.includeExtensions && (c.extensions = s),
      o.includeQuery && (c.query = t(u, qM)),
      { options: i, body: c }
    );
  }
  function h8(e, t) {
    if (!t) {
      var n = Object.create(null);
      return (
        Object.keys(Object(e)).forEach(function (o) {
          n[o.toLowerCase()] = e[o];
        }),
        n
      );
    }
    var r = Object.create(null);
    Object.keys(Object(e)).forEach(function (o) {
      r[o.toLowerCase()] = { originalName: o, value: e[o] };
    });
    var i = Object.create(null);
    return (
      Object.keys(r).forEach(function (o) {
        i[r[o].originalName] = r[o].value;
      }),
      i
    );
  }
  var m8 = function (e) {
      if (!e && typeof fetch > "u")
        throw __DEV__
          ? new ie(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `)
          : new ie(23);
    },
    v8 = function () {
      if (typeof AbortController > "u") return { controller: !1, signal: !1 };
      var e = new AbortController(),
        t = e.signal;
      return { controller: e, signal: t };
    },
    y8 = function (e, t) {
      var n = e.getContext(),
        r = n.uri;
      return r || (typeof t == "function" ? t(e) : t || "/graphql");
    };
  function g8(e, t) {
    var n = [],
      r = function (f, d) {
        n.push("".concat(f, "=").concat(encodeURIComponent(d)));
      };
    if (
      ("query" in t && r("query", t.query),
      t.operationName && r("operationName", t.operationName),
      t.variables)
    ) {
      var i = void 0;
      try {
        i = Yf(t.variables, "Variables map");
      } catch (f) {
        return { parseError: f };
      }
      r("variables", i);
    }
    if (t.extensions) {
      var o = void 0;
      try {
        o = Yf(t.extensions, "Extensions map");
      } catch (f) {
        return { parseError: f };
      }
      r("extensions", o);
    }
    var a = "",
      s = e,
      l = e.indexOf("#");
    l !== -1 && ((a = e.substr(l)), (s = e.substr(0, l)));
    var u = s.indexOf("?") === -1 ? "?" : "&",
      c = s + u + n.join("&") + a;
    return { newURI: c };
  }
  var Gv = St(function () {
      return fetch;
    }),
    w8 = function (e) {
      e === void 0 && (e = {});
      var t = e.uri,
        n = t === void 0 ? "/graphql" : t,
        r = e.fetch,
        i = e.print,
        o = i === void 0 ? d8 : i,
        a = e.includeExtensions,
        s = e.preserveHeaderCase,
        l = e.useGETForQueries,
        u = e.includeUnusedVariables,
        c = u === void 0 ? !1 : u,
        f = Zi(e, [
          "uri",
          "fetch",
          "print",
          "includeExtensions",
          "preserveHeaderCase",
          "useGETForQueries",
          "includeUnusedVariables",
        ]);
      __DEV__ && m8(r || Gv);
      var d = {
        http: { includeExtensions: a, preserveHeaderCase: s },
        options: f.fetchOptions,
        credentials: f.credentials,
        headers: f.headers,
      };
      return new Ba(function (p) {
        var g = y8(p, n),
          y = p.getContext(),
          b = {};
        if (y.clientAwareness) {
          var m = y.clientAwareness,
            h = m.name,
            v = m.version;
          h && (b["apollographql-client-name"] = h),
            v && (b["apollographql-client-version"] = v);
        }
        var x = F(F({}, b), y.headers),
          E = {
            http: y.http,
            options: y.fetchOptions,
            credentials: y.credentials,
            headers: x,
          },
          _ = p8(p, o, f8, d, E),
          C = _.options,
          N = _.body;
        if (N.variables && !c) {
          var M = new Set(Object.keys(N.variables));
          En(p.query, {
            Variable: function (z, Y, U) {
              U && U.kind !== "VariableDefinition" && M.delete(z.name.value);
            },
          }),
            M.size &&
              ((N.variables = F({}, N.variables)),
              M.forEach(function (z) {
                delete N.variables[z];
              }));
        }
        var P;
        if (!C.signal) {
          var L = v8(),
            B = L.controller,
            D = L.signal;
          (P = B), P && (C.signal = D);
        }
        var k = function (z) {
            return (
              z.kind === "OperationDefinition" && z.operation === "mutation"
            );
          },
          j = function (z) {
            return (
              z.kind === "OperationDefinition" && z.operation === "subscription"
            );
          },
          R = j(su(p.query)),
          T = Np(["defer"], p.query);
        if ((l && !p.query.definitions.some(k) && (C.method = "GET"), T || R)) {
          C.headers = C.headers || {};
          var O = "multipart/mixed;";
          R &&
            T &&
            __DEV__ &&
            H.warn("Multipart-subscriptions do not support @defer"),
            R
              ? (O += "boundary=graphql;subscriptionSpec=1.0,application/json")
              : T && (O += "deferSpec=20220824,application/json"),
            (C.headers.accept = O);
        }
        if (C.method === "GET") {
          var A = g8(g, N),
            I = A.newURI,
            V = A.parseError;
          if (V) return Qv(V);
          g = I;
        } else
          try {
            C.body = Yf(N, "Payload");
          } catch (z) {
            return Qv(z);
          }
        return new de(function (z) {
          var Y =
            r ||
            St(function () {
              return fetch;
            }) ||
            Gv;
          return (
            Y(g, C)
              .then(function (U) {
                var X;
                p.setContext({ response: U });
                var K =
                  (X = U.headers) === null || X === void 0
                    ? void 0
                    : X.get("content-type");
                return K !== null && /^multipart\/mixed/i.test(K)
                  ? i8(U, z)
                  : a8(U, p, z);
              })
              .catch(function (U) {
                return $p(U, z);
              }),
            function () {
              P && P.abort();
            }
          );
        });
      });
    },
    x8 = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = {});
        var r = e.call(this, w8(n).request) || this;
        return (r.options = n), r;
      }
      return t;
    })(Ba);
  const { toString: Xv, hasOwnProperty: b8 } = Object.prototype,
    Kv = Function.prototype.toString,
    Gf = new Map();
  function Ne(e, t) {
    try {
      return Xf(e, t);
    } finally {
      Gf.clear();
    }
  }
  function Xf(e, t) {
    if (e === t) return !0;
    const n = Xv.call(e),
      r = Xv.call(t);
    if (n !== r) return !1;
    switch (n) {
      case "[object Array]":
        if (e.length !== t.length) return !1;
      case "[object Object]": {
        if (Jv(e, t)) return !0;
        const i = Zv(e),
          o = Zv(t),
          a = i.length;
        if (a !== o.length) return !1;
        for (let s = 0; s < a; ++s) if (!b8.call(t, i[s])) return !1;
        for (let s = 0; s < a; ++s) {
          const l = i[s];
          if (!Xf(e[l], t[l])) return !1;
        }
        return !0;
      }
      case "[object Error]":
        return e.name === t.name && e.message === t.message;
      case "[object Number]":
        if (e !== e) return t !== t;
      case "[object Boolean]":
      case "[object Date]":
        return +e == +t;
      case "[object RegExp]":
      case "[object String]":
        return e == `${t}`;
      case "[object Map]":
      case "[object Set]": {
        if (e.size !== t.size) return !1;
        if (Jv(e, t)) return !0;
        const i = e.entries(),
          o = n === "[object Map]";
        for (;;) {
          const a = i.next();
          if (a.done) break;
          const [s, l] = a.value;
          if (!t.has(s) || (o && !Xf(l, t.get(s)))) return !1;
        }
        return !0;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        (e = new Uint8Array(e)), (t = new Uint8Array(t));
      case "[object DataView]": {
        let i = e.byteLength;
        if (i === t.byteLength) for (; i-- && e[i] === t[i]; );
        return i === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        const i = Kv.call(e);
        return i !== Kv.call(t) ? !1 : !_8(i, E8);
      }
    }
    return !1;
  }
  function Zv(e) {
    return Object.keys(e).filter(S8, e);
  }
  function S8(e) {
    return this[e] !== void 0;
  }
  const E8 = "{ [native code] }";
  function _8(e, t) {
    const n = e.length - t.length;
    return n >= 0 && e.indexOf(t, n) === n;
  }
  function Jv(e, t) {
    let n = Gf.get(e);
    if (n) {
      if (n.has(t)) return !0;
    } else Gf.set(e, (n = new Set()));
    return n.add(t), !1;
  }
  var C8 = function () {
      return Object.create(null);
    },
    ux = Array.prototype,
    k8 = ux.forEach,
    N8 = ux.slice,
    O8 = (function () {
      function e(t, n) {
        t === void 0 && (t = !0),
          n === void 0 && (n = C8),
          (this.weakness = t),
          (this.makeData = n);
      }
      return (
        (e.prototype.lookup = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return this.lookupArray(t);
        }),
        (e.prototype.lookupArray = function (t) {
          var n = this;
          return (
            k8.call(t, function (r) {
              return (n = n.getChildTrie(r));
            }),
            n.data || (n.data = this.makeData(N8.call(t)))
          );
        }),
        (e.prototype.getChildTrie = function (t) {
          var n =
              this.weakness && P8(t)
                ? this.weak || (this.weak = new WeakMap())
                : this.strong || (this.strong = new Map()),
            r = n.get(t);
          return r || n.set(t, (r = new e(this.weakness, this.makeData))), r;
        }),
        e
      );
    })();
  function P8(e) {
    switch (typeof e) {
      case "object":
        if (e === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  let Ae = null;
  const ey = {};
  let T8 = 1;
  const M8 = () =>
    class {
      constructor() {
        this.id = [
          "slot",
          T8++,
          Date.now(),
          Math.random().toString(36).slice(2),
        ].join(":");
      }
      hasValue() {
        for (let t = Ae; t; t = t.parent)
          if (this.id in t.slots) {
            const n = t.slots[this.id];
            if (n === ey) break;
            return t !== Ae && (Ae.slots[this.id] = n), !0;
          }
        return Ae && (Ae.slots[this.id] = ey), !1;
      }
      getValue() {
        if (this.hasValue()) return Ae.slots[this.id];
      }
      withValue(t, n, r, i) {
        const o = { __proto__: null, [this.id]: t },
          a = Ae;
        Ae = { parent: a, slots: o };
        try {
          return n.apply(i, r);
        } finally {
          Ae = a;
        }
      }
      static bind(t) {
        const n = Ae;
        return function () {
          const r = Ae;
          try {
            return (Ae = n), t.apply(this, arguments);
          } finally {
            Ae = r;
          }
        };
      }
      static noContext(t, n, r) {
        if (Ae) {
          const i = Ae;
          try {
            return (Ae = null), t.apply(r, n);
          } finally {
            Ae = i;
          }
        } else return t.apply(r, n);
      }
    };
  function ty(e) {
    try {
      return e();
    } catch {}
  }
  const ac = "@wry/context:Slot",
    D8 = ty(() => globalThis) || ty(() => global) || Object.create(null),
    ny = D8,
    cx =
      ny[ac] ||
      Array[ac] ||
      (function (e) {
        try {
          Object.defineProperty(ny, ac, {
            value: e,
            enumerable: !1,
            writable: !1,
            configurable: !0,
          });
        } finally {
          return e;
        }
      })(M8());
  function R8() {}
  var j8 = (function () {
      function e(t, n) {
        t === void 0 && (t = 1 / 0),
          n === void 0 && (n = R8),
          (this.max = t),
          (this.dispose = n),
          (this.map = new Map()),
          (this.newest = null),
          (this.oldest = null);
      }
      return (
        (e.prototype.has = function (t) {
          return this.map.has(t);
        }),
        (e.prototype.get = function (t) {
          var n = this.getNode(t);
          return n && n.value;
        }),
        (e.prototype.getNode = function (t) {
          var n = this.map.get(t);
          if (n && n !== this.newest) {
            var r = n.older,
              i = n.newer;
            i && (i.older = r),
              r && (r.newer = i),
              (n.older = this.newest),
              (n.older.newer = n),
              (n.newer = null),
              (this.newest = n),
              n === this.oldest && (this.oldest = i);
          }
          return n;
        }),
        (e.prototype.set = function (t, n) {
          var r = this.getNode(t);
          return r
            ? (r.value = n)
            : ((r = { key: t, value: n, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = r),
              (this.newest = r),
              (this.oldest = this.oldest || r),
              this.map.set(t, r),
              r.value);
        }),
        (e.prototype.clean = function () {
          for (; this.oldest && this.map.size > this.max; )
            this.delete(this.oldest.key);
        }),
        (e.prototype.delete = function (t) {
          var n = this.map.get(t);
          return n
            ? (n === this.newest && (this.newest = n.older),
              n === this.oldest && (this.oldest = n.newer),
              n.newer && (n.newer.older = n.older),
              n.older && (n.older.newer = n.newer),
              this.map.delete(t),
              this.dispose(n.value, t),
              !0)
            : !1;
        }),
        e
      );
    })(),
    cu = new cx(),
    sc,
    A8 = Object.prototype.hasOwnProperty,
    Vp =
      ((sc = Array.from),
      sc === void 0
        ? function (e) {
            var t = [];
            return (
              e.forEach(function (n) {
                return t.push(n);
              }),
              t
            );
          }
        : sc);
  function El(e) {
    var t = e.unsubscribe;
    typeof t == "function" && ((e.unsubscribe = void 0), t());
  }
  var _a = [],
    I8 = 100;
  function to(e, t) {
    if (!e) throw new Error(t || "assertion failure");
  }
  function F8(e, t) {
    var n = e.length;
    return n > 0 && n === t.length && e[n - 1] === t[n - 1];
  }
  function fx(e) {
    switch (e.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return e[0];
      case 2:
        throw e[1];
    }
  }
  function L8(e) {
    return e.slice(0);
  }
  var B8 = (function () {
    function e(t) {
      (this.fn = t),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++e.count;
    }
    return (
      (e.prototype.peek = function () {
        if (this.value.length === 1 && !or(this))
          return ry(this), this.value[0];
      }),
      (e.prototype.recompute = function (t) {
        return (
          to(!this.recomputing, "already recomputing"),
          ry(this),
          or(this) ? z8(this, t) : fx(this.value)
        );
      }),
      (e.prototype.setDirty = function () {
        this.dirty ||
          ((this.dirty = !0), (this.value.length = 0), dx(this), El(this));
      }),
      (e.prototype.dispose = function () {
        var t = this;
        this.setDirty(),
          yx(this),
          Hp(this, function (n, r) {
            n.setDirty(), gx(n, t);
          });
      }),
      (e.prototype.forget = function () {
        this.dispose();
      }),
      (e.prototype.dependOn = function (t) {
        t.add(this),
          this.deps || (this.deps = _a.pop() || new Set()),
          this.deps.add(t);
      }),
      (e.prototype.forgetDeps = function () {
        var t = this;
        this.deps &&
          (Vp(this.deps).forEach(function (n) {
            return n.delete(t);
          }),
          this.deps.clear(),
          _a.push(this.deps),
          (this.deps = null));
      }),
      (e.count = 0),
      e
    );
  })();
  function ry(e) {
    var t = cu.getValue();
    if (t)
      return (
        e.parents.add(t),
        t.childValues.has(e) || t.childValues.set(e, []),
        or(e) ? hx(t, e) : mx(t, e),
        t
      );
  }
  function z8(e, t) {
    return yx(e), cu.withValue(e, $8, [e, t]), H8(e, t) && V8(e), fx(e.value);
  }
  function $8(e, t) {
    (e.recomputing = !0), (e.value.length = 0);
    try {
      e.value[0] = e.fn.apply(null, t);
    } catch (n) {
      e.value[1] = n;
    }
    e.recomputing = !1;
  }
  function or(e) {
    return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
  }
  function V8(e) {
    (e.dirty = !1), !or(e) && px(e);
  }
  function dx(e) {
    Hp(e, hx);
  }
  function px(e) {
    Hp(e, mx);
  }
  function Hp(e, t) {
    var n = e.parents.size;
    if (n) for (var r = Vp(e.parents), i = 0; i < n; ++i) t(r[i], e);
  }
  function hx(e, t) {
    to(e.childValues.has(t)), to(or(t));
    var n = !or(e);
    if (!e.dirtyChildren) e.dirtyChildren = _a.pop() || new Set();
    else if (e.dirtyChildren.has(t)) return;
    e.dirtyChildren.add(t), n && dx(e);
  }
  function mx(e, t) {
    to(e.childValues.has(t)), to(!or(t));
    var n = e.childValues.get(t);
    n.length === 0
      ? e.childValues.set(t, L8(t.value))
      : F8(n, t.value) || e.setDirty(),
      vx(e, t),
      !or(e) && px(e);
  }
  function vx(e, t) {
    var n = e.dirtyChildren;
    n &&
      (n.delete(t),
      n.size === 0 && (_a.length < I8 && _a.push(n), (e.dirtyChildren = null)));
  }
  function yx(e) {
    e.childValues.size > 0 &&
      e.childValues.forEach(function (t, n) {
        gx(e, n);
      }),
      e.forgetDeps(),
      to(e.dirtyChildren === null);
  }
  function gx(e, t) {
    t.parents.delete(e), e.childValues.delete(t), vx(e, t);
  }
  function H8(e, t) {
    if (typeof e.subscribe == "function")
      try {
        El(e), (e.unsubscribe = e.subscribe.apply(null, t));
      } catch {
        return e.setDirty(), !1;
      }
    return !0;
  }
  var U8 = { setDirty: !0, dispose: !0, forget: !0 };
  function wx(e) {
    var t = new Map(),
      n = e && e.subscribe;
    function r(i) {
      var o = cu.getValue();
      if (o) {
        var a = t.get(i);
        a || t.set(i, (a = new Set())),
          o.dependOn(a),
          typeof n == "function" && (El(a), (a.unsubscribe = n(i)));
      }
    }
    return (
      (r.dirty = function (o, a) {
        var s = t.get(o);
        if (s) {
          var l = a && A8.call(U8, a) ? a : "setDirty";
          Vp(s).forEach(function (u) {
            return u[l]();
          }),
            t.delete(o),
            El(s);
        }
      }),
      r
    );
  }
  function xx() {
    var e = new O8(typeof WeakMap == "function");
    return function () {
      return e.lookupArray(arguments);
    };
  }
  xx();
  var lc = new Set();
  function _l(e, t) {
    t === void 0 && (t = Object.create(null));
    var n = new j8(t.max || Math.pow(2, 16), function (u) {
        return u.dispose();
      }),
      r = t.keyArgs,
      i = t.makeCacheKey || xx(),
      o = function () {
        var u = i.apply(null, r ? r.apply(null, arguments) : arguments);
        if (u === void 0) return e.apply(null, arguments);
        var c = n.get(u);
        c ||
          (n.set(u, (c = new B8(e))),
          (c.subscribe = t.subscribe),
          (c.forget = function () {
            return n.delete(u);
          }));
        var f = c.recompute(Array.prototype.slice.call(arguments));
        return (
          n.set(u, c),
          lc.add(n),
          cu.hasValue() ||
            (lc.forEach(function (d) {
              return d.clean();
            }),
            lc.clear()),
          f
        );
      };
    Object.defineProperty(o, "size", {
      get: function () {
        return n.map.size;
      },
      configurable: !1,
      enumerable: !1,
    });
    function a(u) {
      var c = n.get(u);
      c && c.setDirty();
    }
    (o.dirtyKey = a),
      (o.dirty = function () {
        a(i.apply(null, arguments));
      });
    function s(u) {
      var c = n.get(u);
      if (c) return c.peek();
    }
    (o.peekKey = s),
      (o.peek = function () {
        return s(i.apply(null, arguments));
      });
    function l(u) {
      return n.delete(u);
    }
    return (
      (o.forgetKey = l),
      (o.forget = function () {
        return l(i.apply(null, arguments));
      }),
      (o.makeCacheKey = i),
      (o.getKey = r
        ? function () {
            return i.apply(null, r.apply(null, arguments));
          }
        : i),
      Object.freeze(o)
    );
  }
  var Q8 = (function () {
      function e() {
        this.getFragmentDoc = _l(eD);
      }
      return (
        (e.prototype.batch = function (t) {
          var n = this,
            r =
              typeof t.optimistic == "string"
                ? t.optimistic
                : t.optimistic === !1
                ? null
                : void 0,
            i;
          return (
            this.performTransaction(function () {
              return (i = t.update(n));
            }, r),
            i
          );
        }),
        (e.prototype.recordOptimisticTransaction = function (t, n) {
          this.performTransaction(t, n);
        }),
        (e.prototype.transformDocument = function (t) {
          return t;
        }),
        (e.prototype.transformForLink = function (t) {
          return t;
        }),
        (e.prototype.identify = function (t) {}),
        (e.prototype.gc = function () {
          return [];
        }),
        (e.prototype.modify = function (t) {
          return !1;
        }),
        (e.prototype.readQuery = function (t, n) {
          return (
            n === void 0 && (n = !!t.optimistic),
            this.read(
              F(F({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: n })
            )
          );
        }),
        (e.prototype.readFragment = function (t, n) {
          return (
            n === void 0 && (n = !!t.optimistic),
            this.read(
              F(F({}, t), {
                query: this.getFragmentDoc(t.fragment, t.fragmentName),
                rootId: t.id,
                optimistic: n,
              })
            )
          );
        }),
        (e.prototype.writeQuery = function (t) {
          var n = t.id,
            r = t.data,
            i = Zi(t, ["id", "data"]);
          return this.write(
            Object.assign(i, { dataId: n || "ROOT_QUERY", result: r })
          );
        }),
        (e.prototype.writeFragment = function (t) {
          var n = t.id,
            r = t.data,
            i = t.fragment,
            o = t.fragmentName,
            a = Zi(t, ["id", "data", "fragment", "fragmentName"]);
          return this.write(
            Object.assign(a, {
              query: this.getFragmentDoc(i, o),
              dataId: n,
              result: r,
            })
          );
        }),
        (e.prototype.updateQuery = function (t, n) {
          return this.batch({
            update: function (r) {
              var i = r.readQuery(t),
                o = n(i);
              return o == null
                ? i
                : (r.writeQuery(F(F({}, t), { data: o })), o);
            },
          });
        }),
        (e.prototype.updateFragment = function (t, n) {
          return this.batch({
            update: function (r) {
              var i = r.readFragment(t),
                o = n(i);
              return o == null
                ? i
                : (r.writeFragment(F(F({}, t), { data: o })), o);
            },
          });
        }),
        e
      );
    })(),
    bx = (function (e) {
      Ut(t, e);
      function t(n, r, i, o) {
        var a,
          s = e.call(this, n) || this;
        if (
          ((s.message = n),
          (s.path = r),
          (s.query = i),
          (s.variables = o),
          Array.isArray(s.path))
        ) {
          s.missing = s.message;
          for (var l = s.path.length - 1; l >= 0; --l)
            s.missing = ((a = {}), (a[s.path[l]] = s.missing), a);
        } else s.missing = s.path;
        return (s.__proto__ = t.prototype), s;
      }
      return t;
    })(Error);
  const q8 = () => Object.create(null),
    { forEach: W8, slice: Y8 } = Array.prototype,
    { hasOwnProperty: G8 } = Object.prototype;
  class so {
    constructor(t = !0, n = q8) {
      (this.weakness = t), (this.makeData = n);
    }
    lookup(...t) {
      return this.lookupArray(t);
    }
    lookupArray(t) {
      let n = this;
      return (
        W8.call(t, (r) => (n = n.getChildTrie(r))),
        G8.call(n, "data") ? n.data : (n.data = this.makeData(Y8.call(t)))
      );
    }
    peek(...t) {
      return this.peekArray(t);
    }
    peekArray(t) {
      let n = this;
      for (let r = 0, i = t.length; n && r < i; ++r) {
        const o = this.weakness && iy(t[r]) ? n.weak : n.strong;
        n = o && o.get(t[r]);
      }
      return n && n.data;
    }
    getChildTrie(t) {
      const n =
        this.weakness && iy(t)
          ? this.weak || (this.weak = new WeakMap())
          : this.strong || (this.strong = new Map());
      let r = n.get(t);
      return r || n.set(t, (r = new so(this.weakness, this.makeData))), r;
    }
  }
  function iy(e) {
    switch (typeof e) {
      case "object":
        if (e === null) break;
      case "function":
        return !0;
    }
    return !1;
  }
  var Te = Object.prototype.hasOwnProperty;
  function Oo(e) {
    return e == null;
  }
  function Sx(e, t) {
    var n = e.__typename,
      r = e.id,
      i = e._id;
    if (
      typeof n == "string" &&
      (t && (t.keyObject = Oo(r) ? (Oo(i) ? void 0 : { _id: i }) : { id: r }),
      Oo(r) && !Oo(i) && (r = i),
      !Oo(r))
    )
      return ""
        .concat(n, ":")
        .concat(
          typeof r == "number" || typeof r == "string" ? r : JSON.stringify(r)
        );
  }
  var Ex = {
    dataIdFromObject: Sx,
    addTypename: !0,
    resultCaching: !0,
    canonizeResults: !1,
  };
  function X8(e) {
    return uu(Ex, e);
  }
  function _x(e) {
    var t = e.canonizeResults;
    return t === void 0 ? Ex.canonizeResults : t;
  }
  function K8(e, t) {
    return oe(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
  }
  var Cx = /^[_a-z][_0-9a-z]*/i;
  function ar(e) {
    var t = e.match(Cx);
    return t ? t[0] : e;
  }
  function Kf(e, t, n) {
    return ve(t)
      ? Ee(t)
        ? t.every(function (r) {
            return Kf(e, r, n);
          })
        : e.selections.every(function (r) {
            if (Vr(r) && iu(r, n)) {
              var i = $r(r);
              return (
                Te.call(t, i) &&
                (!r.selectionSet || Kf(r.selectionSet, t[i], n))
              );
            }
            return !0;
          })
      : !1;
  }
  function yi(e) {
    return ve(e) && !oe(e) && !Ee(e);
  }
  function Z8() {
    return new ir();
  }
  function kx(e, t) {
    var n = Op(Mp(e));
    return {
      fragmentMap: n,
      lookupFragment: function (r) {
        var i = n[r];
        return !i && t && (i = t.lookup(r)), i || null;
      },
    };
  }
  var Bs = Object.create(null),
    uc = function () {
      return Bs;
    },
    oy = Object.create(null),
    Ca = (function () {
      function e(t, n) {
        var r = this;
        (this.policies = t),
          (this.group = n),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (i, o) {
            return Hf(oe(i) ? r.get(i.__ref, o) : i && i[o]);
          }),
          (this.canRead = function (i) {
            return oe(i) ? r.has(i.__ref) : typeof i == "object";
          }),
          (this.toReference = function (i, o) {
            if (typeof i == "string") return Mi(i);
            if (oe(i)) return i;
            var a = r.policies.identify(i)[0];
            if (a) {
              var s = Mi(a);
              return o && r.merge(a, i), s;
            }
          });
      }
      return (
        (e.prototype.toObject = function () {
          return F({}, this.data);
        }),
        (e.prototype.has = function (t) {
          return this.lookup(t, !0) !== void 0;
        }),
        (e.prototype.get = function (t, n) {
          if ((this.group.depend(t, n), Te.call(this.data, t))) {
            var r = this.data[t];
            if (r && Te.call(r, n)) return r[n];
          }
          if (n === "__typename" && Te.call(this.policies.rootTypenamesById, t))
            return this.policies.rootTypenamesById[t];
          if (this instanceof Pn) return this.parent.get(t, n);
        }),
        (e.prototype.lookup = function (t, n) {
          if ((n && this.group.depend(t, "__exists"), Te.call(this.data, t)))
            return this.data[t];
          if (this instanceof Pn) return this.parent.lookup(t, n);
          if (this.policies.rootTypenamesById[t]) return Object.create(null);
        }),
        (e.prototype.merge = function (t, n) {
          var r = this,
            i;
          oe(t) && (t = t.__ref), oe(n) && (n = n.__ref);
          var o = typeof t == "string" ? this.lookup((i = t)) : t,
            a = typeof n == "string" ? this.lookup((i = n)) : n;
          if (a) {
            __DEV__
              ? H(typeof i == "string", "store.merge expects a string ID")
              : H(typeof i == "string", 1);
            var s = new ir(eR).merge(o, a);
            if (
              ((this.data[i] = s),
              s !== o && (delete this.refs[i], this.group.caching))
            ) {
              var l = Object.create(null);
              o || (l.__exists = 1),
                Object.keys(a).forEach(function (u) {
                  if (!o || o[u] !== s[u]) {
                    l[u] = 1;
                    var c = ar(u);
                    c !== u &&
                      !r.policies.hasKeyArgs(s.__typename, c) &&
                      (l[c] = 1),
                      s[u] === void 0 && !(r instanceof Pn) && delete s[u];
                  }
                }),
                l.__typename &&
                  !(o && o.__typename) &&
                  this.policies.rootTypenamesById[i] === s.__typename &&
                  delete l.__typename,
                Object.keys(l).forEach(function (u) {
                  return r.group.dirty(i, u);
                });
            }
          }
        }),
        (e.prototype.modify = function (t, n) {
          var r = this,
            i = this.lookup(t);
          if (i) {
            var o = Object.create(null),
              a = !1,
              s = !0,
              l = {
                DELETE: Bs,
                INVALIDATE: oy,
                isReference: oe,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (u, c) {
                  return r.policies.readField(
                    typeof u == "string"
                      ? { fieldName: u, from: c || Mi(t) }
                      : u,
                    { store: r }
                  );
                },
              };
            if (
              (Object.keys(i).forEach(function (u) {
                var c = ar(u),
                  f = i[u];
                if (f !== void 0) {
                  var d = typeof n == "function" ? n : n[u] || n[c];
                  if (d) {
                    var p =
                      d === uc
                        ? Bs
                        : d(
                            Hf(f),
                            F(F({}, l), {
                              fieldName: c,
                              storeFieldName: u,
                              storage: r.getStorage(t, u),
                            })
                          );
                    p === oy
                      ? r.group.dirty(t, u)
                      : (p === Bs && (p = void 0),
                        p !== f && ((o[u] = p), (a = !0), (f = p)));
                  }
                  f !== void 0 && (s = !1);
                }
              }),
              a)
            )
              return (
                this.merge(t, o),
                s &&
                  (this instanceof Pn
                    ? (this.data[t] = void 0)
                    : delete this.data[t],
                  this.group.dirty(t, "__exists")),
                !0
              );
          }
          return !1;
        }),
        (e.prototype.delete = function (t, n, r) {
          var i,
            o = this.lookup(t);
          if (o) {
            var a = this.getFieldValue(o, "__typename"),
              s =
                n && r
                  ? this.policies.getStoreFieldName({
                      typename: a,
                      fieldName: n,
                      args: r,
                    })
                  : n;
            return this.modify(t, s ? ((i = {}), (i[s] = uc), i) : uc);
          }
          return !1;
        }),
        (e.prototype.evict = function (t, n) {
          var r = !1;
          return (
            t.id &&
              (Te.call(this.data, t.id) &&
                (r = this.delete(t.id, t.fieldName, t.args)),
              this instanceof Pn &&
                this !== n &&
                (r = this.parent.evict(t, n) || r),
              (t.fieldName || r) &&
                this.group.dirty(t.id, t.fieldName || "__exists")),
            r
          );
        }),
        (e.prototype.clear = function () {
          this.replace(null);
        }),
        (e.prototype.extract = function () {
          var t = this,
            n = this.toObject(),
            r = [];
          return (
            this.getRootIdSet().forEach(function (i) {
              Te.call(t.policies.rootTypenamesById, i) || r.push(i);
            }),
            r.length && (n.__META = { extraRootIds: r.sort() }),
            n
          );
        }),
        (e.prototype.replace = function (t) {
          var n = this;
          if (
            (Object.keys(this.data).forEach(function (o) {
              (t && Te.call(t, o)) || n.delete(o);
            }),
            t)
          ) {
            var r = t.__META,
              i = Zi(t, ["__META"]);
            Object.keys(i).forEach(function (o) {
              n.merge(o, i[o]);
            }),
              r && r.extraRootIds.forEach(this.retain, this);
          }
        }),
        (e.prototype.retain = function (t) {
          return (this.rootIds[t] = (this.rootIds[t] || 0) + 1);
        }),
        (e.prototype.release = function (t) {
          if (this.rootIds[t] > 0) {
            var n = --this.rootIds[t];
            return n || delete this.rootIds[t], n;
          }
          return 0;
        }),
        (e.prototype.getRootIdSet = function (t) {
          return (
            t === void 0 && (t = new Set()),
            Object.keys(this.rootIds).forEach(t.add, t),
            this instanceof Pn
              ? this.parent.getRootIdSet(t)
              : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t),
            t
          );
        }),
        (e.prototype.gc = function () {
          var t = this,
            n = this.getRootIdSet(),
            r = this.toObject();
          n.forEach(function (a) {
            Te.call(r, a) &&
              (Object.keys(t.findChildRefIds(a)).forEach(n.add, n),
              delete r[a]);
          });
          var i = Object.keys(r);
          if (i.length) {
            for (var o = this; o instanceof Pn; ) o = o.parent;
            i.forEach(function (a) {
              return o.delete(a);
            });
          }
          return i;
        }),
        (e.prototype.findChildRefIds = function (t) {
          if (!Te.call(this.refs, t)) {
            var n = (this.refs[t] = Object.create(null)),
              r = this.data[t];
            if (!r) return n;
            var i = new Set([r]);
            i.forEach(function (o) {
              oe(o) && (n[o.__ref] = !0),
                ve(o) &&
                  Object.keys(o).forEach(function (a) {
                    var s = o[a];
                    ve(s) && i.add(s);
                  });
            });
          }
          return this.refs[t];
        }),
        (e.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        }),
        e
      );
    })(),
    Nx = (function () {
      function e(t, n) {
        n === void 0 && (n = null),
          (this.caching = t),
          (this.parent = n),
          (this.d = null),
          this.resetCaching();
      }
      return (
        (e.prototype.resetCaching = function () {
          (this.d = this.caching ? wx() : null), (this.keyMaker = new so(Qr));
        }),
        (e.prototype.depend = function (t, n) {
          if (this.d) {
            this.d(cc(t, n));
            var r = ar(n);
            r !== n && this.d(cc(t, r)),
              this.parent && this.parent.depend(t, n);
          }
        }),
        (e.prototype.dirty = function (t, n) {
          this.d &&
            this.d.dirty(cc(t, n), n === "__exists" ? "forget" : "setDirty");
        }),
        e
      );
    })();
  function cc(e, t) {
    return t + "#" + e;
  }
  function ay(e, t) {
    Xo(e) && e.group.depend(t, "__exists");
  }
  (function (e) {
    var t = (function (n) {
      Ut(r, n);
      function r(i) {
        var o = i.policies,
          a = i.resultCaching,
          s = a === void 0 ? !0 : a,
          l = i.seed,
          u = n.call(this, o, new Nx(s)) || this;
        return (
          (u.stump = new J8(u)),
          (u.storageTrie = new so(Qr)),
          l && u.replace(l),
          u
        );
      }
      return (
        (r.prototype.addLayer = function (i, o) {
          return this.stump.addLayer(i, o);
        }),
        (r.prototype.removeLayer = function () {
          return this;
        }),
        (r.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments);
        }),
        r
      );
    })(e);
    e.Root = t;
  })(Ca || (Ca = {}));
  var Pn = (function (e) {
      Ut(t, e);
      function t(n, r, i, o) {
        var a = e.call(this, r.policies, o) || this;
        return (
          (a.id = n), (a.parent = r), (a.replay = i), (a.group = o), i(a), a
        );
      }
      return (
        (t.prototype.addLayer = function (n, r) {
          return new t(n, this, r, this.group);
        }),
        (t.prototype.removeLayer = function (n) {
          var r = this,
            i = this.parent.removeLayer(n);
          return n === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (o) {
                  var a = r.data[o],
                    s = i.lookup(o);
                  s
                    ? a
                      ? a !== s &&
                        Object.keys(a).forEach(function (l) {
                          Ne(a[l], s[l]) || r.group.dirty(o, l);
                        })
                      : (r.group.dirty(o, "__exists"),
                        Object.keys(s).forEach(function (l) {
                          r.group.dirty(o, l);
                        }))
                    : r.delete(o);
                }),
              i)
            : i === this.parent
            ? this
            : i.addLayer(this.id, this.replay);
        }),
        (t.prototype.toObject = function () {
          return F(F({}, this.parent.toObject()), this.data);
        }),
        (t.prototype.findChildRefIds = function (n) {
          var r = this.parent.findChildRefIds(n);
          return Te.call(this.data, n)
            ? F(F({}, r), e.prototype.findChildRefIds.call(this, n))
            : r;
        }),
        (t.prototype.getStorage = function () {
          for (var n = this.parent; n.parent; ) n = n.parent;
          return n.getStorage.apply(n, arguments);
        }),
        t
      );
    })(Ca),
    J8 = (function (e) {
      Ut(t, e);
      function t(n) {
        return (
          e.call(
            this,
            "EntityStore.Stump",
            n,
            function () {},
            new Nx(n.group.caching, n.group)
          ) || this
        );
      }
      return (
        (t.prototype.removeLayer = function () {
          return this;
        }),
        (t.prototype.merge = function () {
          return this.parent.merge.apply(this.parent, arguments);
        }),
        t
      );
    })(Pn);
  function eR(e, t, n) {
    var r = e[n],
      i = t[n];
    return Ne(r, i) ? r : i;
  }
  function Xo(e) {
    return !!(e instanceof Ca && e.group.caching);
  }
  function tR(e) {
    return ve(e)
      ? Ee(e)
        ? e.slice(0)
        : F({ __proto__: Object.getPrototypeOf(e) }, e)
      : e;
  }
  var Zf = (function () {
      function e() {
        (this.known = new (AD ? WeakSet : Set)()),
          (this.pool = new so(Qr)),
          (this.passes = new WeakMap()),
          (this.keysByJSON = new Map()),
          (this.empty = this.admit({}));
      }
      return (
        (e.prototype.isKnown = function (t) {
          return ve(t) && this.known.has(t);
        }),
        (e.prototype.pass = function (t) {
          if (ve(t)) {
            var n = tR(t);
            return this.passes.set(n, t), n;
          }
          return t;
        }),
        (e.prototype.admit = function (t) {
          var n = this;
          if (ve(t)) {
            var r = this.passes.get(t);
            if (r) return r;
            var i = Object.getPrototypeOf(t);
            switch (i) {
              case Array.prototype: {
                if (this.known.has(t)) return t;
                var o = t.map(this.admit, this),
                  a = this.pool.lookupArray(o);
                return (
                  a.array ||
                    (this.known.add((a.array = o)),
                    __DEV__ && Object.freeze(o)),
                  a.array
                );
              }
              case null:
              case Object.prototype: {
                if (this.known.has(t)) return t;
                var s = Object.getPrototypeOf(t),
                  l = [s],
                  u = this.sortedKeys(t);
                l.push(u.json);
                var c = l.length;
                u.sorted.forEach(function (p) {
                  l.push(n.admit(t[p]));
                });
                var a = this.pool.lookupArray(l);
                if (!a.object) {
                  var f = (a.object = Object.create(s));
                  this.known.add(f),
                    u.sorted.forEach(function (p, g) {
                      f[p] = l[c + g];
                    }),
                    __DEV__ && Object.freeze(f);
                }
                return a.object;
              }
            }
          }
          return t;
        }),
        (e.prototype.sortedKeys = function (t) {
          var n = Object.keys(t),
            r = this.pool.lookupArray(n);
          if (!r.keys) {
            n.sort();
            var i = JSON.stringify(n);
            (r.keys = this.keysByJSON.get(i)) ||
              this.keysByJSON.set(i, (r.keys = { sorted: n, json: i }));
          }
          return r.keys;
        }),
        e
      );
    })(),
    Dr = Object.assign(
      function (e) {
        if (ve(e)) {
          Jf === void 0 && sy();
          var t = Jf.admit(e),
            n = ed.get(t);
          return n === void 0 && ed.set(t, (n = JSON.stringify(t))), n;
        }
        return JSON.stringify(e);
      },
      { reset: sy }
    ),
    Jf,
    ed;
  function sy() {
    (Jf = new Zf()), (ed = new (Qr ? WeakMap : Map)());
  }
  function ly(e) {
    return [
      e.selectionSet,
      e.objectOrReference,
      e.context,
      e.context.canonizeResults,
    ];
  }
  var nR = (function () {
    function e(t) {
      var n = this;
      (this.knownResults = new (Qr ? WeakMap : Map)()),
        (this.config = uu(t, {
          addTypename: t.addTypename !== !1,
          canonizeResults: _x(t),
        })),
        (this.canon = t.canon || new Zf()),
        (this.executeSelectionSet = _l(
          function (r) {
            var i,
              o = r.context.canonizeResults,
              a = ly(r);
            a[3] = !o;
            var s = (i = n.executeSelectionSet).peek.apply(i, a);
            return s
              ? o
                ? F(F({}, s), { result: n.canon.admit(s.result) })
                : s
              : (ay(r.context.store, r.enclosingRef.__ref),
                n.execSelectionSetImpl(r));
          },
          {
            max: this.config.resultCacheMaxSize,
            keyArgs: ly,
            makeCacheKey: function (r, i, o, a) {
              if (Xo(o.store))
                return o.store.makeCacheKey(
                  r,
                  oe(i) ? i.__ref : i,
                  o.varString,
                  a
                );
            },
          }
        )),
        (this.executeSubSelectedArray = _l(
          function (r) {
            return (
              ay(r.context.store, r.enclosingRef.__ref),
              n.execSubSelectedArrayImpl(r)
            );
          },
          {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (r) {
              var i = r.field,
                o = r.array,
                a = r.context;
              if (Xo(a.store)) return a.store.makeCacheKey(i, o, a.varString);
            },
          }
        ));
    }
    return (
      (e.prototype.resetCanon = function () {
        this.canon = new Zf();
      }),
      (e.prototype.diffQueryAgainstStore = function (t) {
        var n = t.store,
          r = t.query,
          i = t.rootId,
          o = i === void 0 ? "ROOT_QUERY" : i,
          a = t.variables,
          s = t.returnPartialData,
          l = s === void 0 ? !0 : s,
          u = t.canonizeResults,
          c = u === void 0 ? this.config.canonizeResults : u,
          f = this.config.cache.policies;
        a = F(F({}, Dp(Jw(r))), a);
        var d = Mi(o),
          p = this.executeSelectionSet({
            selectionSet: su(r).selectionSet,
            objectOrReference: d,
            enclosingRef: d,
            context: F(
              {
                store: n,
                query: r,
                policies: f,
                variables: a,
                varString: Dr(a),
                canonizeResults: c,
              },
              kx(r, this.config.fragments)
            ),
          }),
          g;
        if (p.missing && ((g = [new bx(rR(p.missing), p.missing, r, a)]), !l))
          throw g[0];
        return { result: p.result, complete: !g, missing: g };
      }),
      (e.prototype.isFresh = function (t, n, r, i) {
        if (Xo(i.store) && this.knownResults.get(t) === r) {
          var o = this.executeSelectionSet.peek(r, n, i, this.canon.isKnown(t));
          if (o && t === o.result) return !0;
        }
        return !1;
      }),
      (e.prototype.execSelectionSetImpl = function (t) {
        var n = this,
          r = t.selectionSet,
          i = t.objectOrReference,
          o = t.enclosingRef,
          a = t.context;
        if (
          oe(i) &&
          !a.policies.rootTypenamesById[i.__ref] &&
          !a.store.has(i.__ref)
        )
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(
              i.__ref,
              " object"
            ),
          };
        var s = a.variables,
          l = a.policies,
          u = a.store,
          c = u.getFieldValue(i, "__typename"),
          f = [],
          d,
          p = new ir();
        this.config.addTypename &&
          typeof c == "string" &&
          !l.rootIdsByTypename[c] &&
          f.push({ __typename: c });
        function g(v, x) {
          var E;
          return (
            v.missing && (d = p.merge(d, ((E = {}), (E[x] = v.missing), E))),
            v.result
          );
        }
        var y = new Set(r.selections);
        y.forEach(function (v) {
          var x, E;
          if (iu(v, s))
            if (Vr(v)) {
              var _ = l.readField(
                  {
                    fieldName: v.name.value,
                    field: v,
                    variables: a.variables,
                    from: i,
                  },
                  a
                ),
                C = $r(v);
              _ === void 0
                ? Rp.added(v) ||
                  (d = p.merge(
                    d,
                    ((x = {}),
                    (x[C] = "Can't find field '"
                      .concat(v.name.value, "' on ")
                      .concat(
                        oe(i)
                          ? i.__ref + " object"
                          : "object " + JSON.stringify(i, null, 2)
                      )),
                    x)
                  ))
                : Ee(_)
                ? (_ = g(
                    n.executeSubSelectedArray({
                      field: v,
                      array: _,
                      enclosingRef: o,
                      context: a,
                    }),
                    C
                  ))
                : v.selectionSet
                ? _ != null &&
                  (_ = g(
                    n.executeSelectionSet({
                      selectionSet: v.selectionSet,
                      objectOrReference: _,
                      enclosingRef: oe(_) ? _ : o,
                      context: a,
                    }),
                    C
                  ))
                : a.canonizeResults && (_ = n.canon.pass(_)),
                _ !== void 0 && f.push(((E = {}), (E[C] = _), E));
            } else {
              var N = Pp(v, a.lookupFragment);
              if (!N && v.kind === De.FRAGMENT_SPREAD)
                throw __DEV__
                  ? new ie("No fragment named ".concat(v.name.value))
                  : new ie(5);
              N &&
                l.fragmentMatches(N, c) &&
                N.selectionSet.selections.forEach(y.add, y);
            }
        });
        var b = jp(f),
          m = { result: b, missing: d },
          h = a.canonizeResults ? this.canon.admit(m) : Hf(m);
        return h.result && this.knownResults.set(h.result, r), h;
      }),
      (e.prototype.execSubSelectedArrayImpl = function (t) {
        var n = this,
          r = t.field,
          i = t.array,
          o = t.enclosingRef,
          a = t.context,
          s,
          l = new ir();
        function u(c, f) {
          var d;
          return (
            c.missing && (s = l.merge(s, ((d = {}), (d[f] = c.missing), d))),
            c.result
          );
        }
        return (
          r.selectionSet && (i = i.filter(a.store.canRead)),
          (i = i.map(function (c, f) {
            return c === null
              ? null
              : Ee(c)
              ? u(
                  n.executeSubSelectedArray({
                    field: r,
                    array: c,
                    enclosingRef: o,
                    context: a,
                  }),
                  f
                )
              : r.selectionSet
              ? u(
                  n.executeSelectionSet({
                    selectionSet: r.selectionSet,
                    objectOrReference: c,
                    enclosingRef: oe(c) ? c : o,
                    context: a,
                  }),
                  f
                )
              : (__DEV__ && iR(a.store, r, c), c);
          })),
          { result: a.canonizeResults ? this.canon.admit(i) : i, missing: s }
        );
      }),
      e
    );
  })();
  function rR(e) {
    try {
      JSON.stringify(e, function (t, n) {
        if (typeof n == "string") throw n;
        return n;
      });
    } catch (t) {
      return t;
    }
  }
  function iR(e, t, n) {
    if (!t.selectionSet) {
      var r = new Set([n]);
      r.forEach(function (i) {
        ve(i) &&
          (__DEV__
            ? H(
                !oe(i),
                "Missing selection set for object of type "
                  .concat(K8(e, i), " returned for query field ")
                  .concat(t.name.value)
              )
            : H(!oe(i), 6),
          Object.values(i).forEach(r.add, r));
      });
    }
  }
  var Up = new cx(),
    uy = new WeakMap();
  function Ko(e) {
    var t = uy.get(e);
    return t || uy.set(e, (t = { vars: new Set(), dep: wx() })), t;
  }
  function cy(e) {
    Ko(e).vars.forEach(function (t) {
      return t.forgetCache(e);
    });
  }
  function oR(e) {
    Ko(e).vars.forEach(function (t) {
      return t.attachCache(e);
    });
  }
  function aR(e) {
    var t = new Set(),
      n = new Set(),
      r = function (o) {
        if (arguments.length > 0) {
          if (e !== o) {
            (e = o),
              t.forEach(function (l) {
                Ko(l).dep.dirty(r), sR(l);
              });
            var a = Array.from(n);
            n.clear(),
              a.forEach(function (l) {
                return l(e);
              });
          }
        } else {
          var s = Up.getValue();
          s && (i(s), Ko(s).dep(r));
        }
        return e;
      };
    r.onNextChange = function (o) {
      return (
        n.add(o),
        function () {
          n.delete(o);
        }
      );
    };
    var i = (r.attachCache = function (o) {
      return t.add(o), Ko(o).vars.add(r), r;
    });
    return (
      (r.forgetCache = function (o) {
        return t.delete(o);
      }),
      r
    );
  }
  function sR(e) {
    e.broadcastWatches && e.broadcastWatches();
  }
  var fy = Object.create(null);
  function Qp(e) {
    var t = JSON.stringify(e);
    return fy[t] || (fy[t] = Object.create(null));
  }
  function dy(e) {
    var t = Qp(e);
    return (
      t.keyFieldsFn ||
      (t.keyFieldsFn = function (n, r) {
        var i = function (a, s) {
            return r.readField(s, a);
          },
          o = (r.keyObject = qp(e, function (a) {
            var s = Ri(r.storeObject, a, i);
            return (
              s === void 0 &&
                n !== r.storeObject &&
                Te.call(n, a[0]) &&
                (s = Ri(n, a, Px)),
              __DEV__
                ? H(
                    s !== void 0,
                    "Missing field '"
                      .concat(a.join("."), "' while extracting keyFields from ")
                      .concat(JSON.stringify(n))
                  )
                : H(s !== void 0, 2),
              s
            );
          }));
        return "".concat(r.typename, ":").concat(JSON.stringify(o));
      })
    );
  }
  function py(e) {
    var t = Qp(e);
    return (
      t.keyArgsFn ||
      (t.keyArgsFn = function (n, r) {
        var i = r.field,
          o = r.variables,
          a = r.fieldName,
          s = qp(e, function (u) {
            var c = u[0],
              f = c.charAt(0);
            if (f === "@") {
              if (i && on(i.directives)) {
                var d = c.slice(1),
                  p = i.directives.find(function (m) {
                    return m.name.value === d;
                  }),
                  g = p && ou(p, o);
                return g && Ri(g, u.slice(1));
              }
              return;
            }
            if (f === "$") {
              var y = c.slice(1);
              if (o && Te.call(o, y)) {
                var b = u.slice(0);
                return (b[0] = y), Ri(o, b);
              }
              return;
            }
            if (n) return Ri(n, u);
          }),
          l = JSON.stringify(s);
        return (n || l !== "{}") && (a += ":" + l), a;
      })
    );
  }
  function qp(e, t) {
    var n = new ir();
    return Ox(e).reduce(function (r, i) {
      var o,
        a = t(i);
      if (a !== void 0) {
        for (var s = i.length - 1; s >= 0; --s)
          a = ((o = {}), (o[i[s]] = a), o);
        r = n.merge(r, a);
      }
      return r;
    }, Object.create(null));
  }
  function Ox(e) {
    var t = Qp(e);
    if (!t.paths) {
      var n = (t.paths = []),
        r = [];
      e.forEach(function (i, o) {
        Ee(i)
          ? (Ox(i).forEach(function (a) {
              return n.push(r.concat(a));
            }),
            (r.length = 0))
          : (r.push(i), Ee(e[o + 1]) || (n.push(r.slice(0)), (r.length = 0)));
      });
    }
    return t.paths;
  }
  function Px(e, t) {
    return e[t];
  }
  function Ri(e, t, n) {
    return (
      (n = n || Px),
      Tx(
        t.reduce(function r(i, o) {
          return Ee(i)
            ? i.map(function (a) {
                return r(a, o);
              })
            : i && n(i, o);
        }, e)
      )
    );
  }
  function Tx(e) {
    return ve(e)
      ? Ee(e)
        ? e.map(Tx)
        : qp(Object.keys(e).sort(), function (t) {
            return Ri(e, t);
          })
      : e;
  }
  Tp.setStringify(Dr);
  function td(e) {
    return e.args !== void 0
      ? e.args
      : e.field
      ? ou(e.field, e.variables)
      : null;
  }
  var lR = function () {},
    hy = function (e, t) {
      return t.fieldName;
    },
    my = function (e, t, n) {
      var r = n.mergeObjects;
      return r(e, t);
    },
    vy = function (e, t) {
      return t;
    },
    uR = (function () {
      function e(t) {
        (this.config = t),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = F({ dataIdFromObject: Sx }, t)),
          (this.cache = this.config.cache),
          this.setRootTypename("Query"),
          this.setRootTypename("Mutation"),
          this.setRootTypename("Subscription"),
          t.possibleTypes && this.addPossibleTypes(t.possibleTypes),
          t.typePolicies && this.addTypePolicies(t.typePolicies);
      }
      return (
        (e.prototype.identify = function (t, n) {
          var r,
            i = this,
            o =
              (n &&
                (n.typename ||
                  ((r = n.storeObject) === null || r === void 0
                    ? void 0
                    : r.__typename))) ||
              t.__typename;
          if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
          for (
            var a = (n && n.storeObject) || t,
              s = F(F({}, n), {
                typename: o,
                storeObject: a,
                readField:
                  (n && n.readField) ||
                  function () {
                    var d = Wp(arguments, a);
                    return i.readField(d, {
                      store: i.cache.data,
                      variables: d.variables,
                    });
                  },
              }),
              l,
              u = o && this.getTypePolicy(o),
              c = (u && u.keyFn) || this.config.dataIdFromObject;
            c;

          ) {
            var f = c(F(F({}, t), a), s);
            if (Ee(f)) c = dy(f);
            else {
              l = f;
              break;
            }
          }
          return (
            (l = l ? String(l) : void 0), s.keyObject ? [l, s.keyObject] : [l]
          );
        }),
        (e.prototype.addTypePolicies = function (t) {
          var n = this;
          Object.keys(t).forEach(function (r) {
            var i = t[r],
              o = i.queryType,
              a = i.mutationType,
              s = i.subscriptionType,
              l = Zi(i, ["queryType", "mutationType", "subscriptionType"]);
            o && n.setRootTypename("Query", r),
              a && n.setRootTypename("Mutation", r),
              s && n.setRootTypename("Subscription", r),
              Te.call(n.toBeAdded, r)
                ? n.toBeAdded[r].push(l)
                : (n.toBeAdded[r] = [l]);
          });
        }),
        (e.prototype.updateTypePolicy = function (t, n) {
          var r = this,
            i = this.getTypePolicy(t),
            o = n.keyFields,
            a = n.fields;
          function s(l, u) {
            l.merge =
              typeof u == "function"
                ? u
                : u === !0
                ? my
                : u === !1
                ? vy
                : l.merge;
          }
          s(i, n.merge),
            (i.keyFn =
              o === !1
                ? lR
                : Ee(o)
                ? dy(o)
                : typeof o == "function"
                ? o
                : i.keyFn),
            a &&
              Object.keys(a).forEach(function (l) {
                var u = r.getFieldPolicy(t, l, !0),
                  c = a[l];
                if (typeof c == "function") u.read = c;
                else {
                  var f = c.keyArgs,
                    d = c.read,
                    p = c.merge;
                  (u.keyFn =
                    f === !1
                      ? hy
                      : Ee(f)
                      ? py(f)
                      : typeof f == "function"
                      ? f
                      : u.keyFn),
                    typeof d == "function" && (u.read = d),
                    s(u, p);
                }
                u.read && u.merge && (u.keyFn = u.keyFn || hy);
              });
        }),
        (e.prototype.setRootTypename = function (t, n) {
          n === void 0 && (n = t);
          var r = "ROOT_" + t.toUpperCase(),
            i = this.rootTypenamesById[r];
          n !== i &&
            (__DEV__
              ? H(
                  !i || i === t,
                  "Cannot change root ".concat(t, " __typename more than once")
                )
              : H(!i || i === t, 3),
            i && delete this.rootIdsByTypename[i],
            (this.rootIdsByTypename[n] = r),
            (this.rootTypenamesById[r] = n));
        }),
        (e.prototype.addPossibleTypes = function (t) {
          var n = this;
          (this.usingPossibleTypes = !0),
            Object.keys(t).forEach(function (r) {
              n.getSupertypeSet(r, !0),
                t[r].forEach(function (i) {
                  n.getSupertypeSet(i, !0).add(r);
                  var o = i.match(Cx);
                  (!o || o[0] !== i) && n.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }),
        (e.prototype.getTypePolicy = function (t) {
          var n = this;
          if (!Te.call(this.typePolicies, t)) {
            var r = (this.typePolicies[t] = Object.create(null));
            r.fields = Object.create(null);
            var i = this.supertypeMap.get(t);
            i &&
              i.size &&
              i.forEach(function (a) {
                var s = n.getTypePolicy(a),
                  l = s.fields,
                  u = Zi(s, ["fields"]);
                Object.assign(r, u), Object.assign(r.fields, l);
              });
          }
          var o = this.toBeAdded[t];
          return (
            o &&
              o.length &&
              o.splice(0).forEach(function (a) {
                n.updateTypePolicy(t, a);
              }),
            this.typePolicies[t]
          );
        }),
        (e.prototype.getFieldPolicy = function (t, n, r) {
          if (t) {
            var i = this.getTypePolicy(t).fields;
            return i[n] || (r && (i[n] = Object.create(null)));
          }
        }),
        (e.prototype.getSupertypeSet = function (t, n) {
          var r = this.supertypeMap.get(t);
          return !r && n && this.supertypeMap.set(t, (r = new Set())), r;
        }),
        (e.prototype.fragmentMatches = function (t, n, r, i) {
          var o = this;
          if (!t.typeCondition) return !0;
          if (!n) return !1;
          var a = t.typeCondition.name.value;
          if (n === a) return !0;
          if (this.usingPossibleTypes && this.supertypeMap.has(a))
            for (
              var s = this.getSupertypeSet(n, !0),
                l = [s],
                u = function (g) {
                  var y = o.getSupertypeSet(g, !1);
                  y && y.size && l.indexOf(y) < 0 && l.push(y);
                },
                c = !!(r && this.fuzzySubtypes.size),
                f = !1,
                d = 0;
              d < l.length;
              ++d
            ) {
              var p = l[d];
              if (p.has(a))
                return (
                  s.has(a) ||
                    (f &&
                      __DEV__ &&
                      H.warn(
                        "Inferring subtype "
                          .concat(n, " of supertype ")
                          .concat(a)
                      ),
                    s.add(a)),
                  !0
                );
              p.forEach(u),
                c &&
                  d === l.length - 1 &&
                  Kf(t.selectionSet, r, i) &&
                  ((c = !1),
                  (f = !0),
                  this.fuzzySubtypes.forEach(function (g, y) {
                    var b = n.match(g);
                    b && b[0] === n && u(y);
                  }));
            }
          return !1;
        }),
        (e.prototype.hasKeyArgs = function (t, n) {
          var r = this.getFieldPolicy(t, n, !1);
          return !!(r && r.keyFn);
        }),
        (e.prototype.getStoreFieldName = function (t) {
          var n = t.typename,
            r = t.fieldName,
            i = this.getFieldPolicy(n, r, !1),
            o,
            a = i && i.keyFn;
          if (a && n)
            for (
              var s = {
                  typename: n,
                  fieldName: r,
                  field: t.field || null,
                  variables: t.variables,
                },
                l = td(t);
              a;

            ) {
              var u = a(l, s);
              if (Ee(u)) a = py(u);
              else {
                o = u || r;
                break;
              }
            }
          return (
            o === void 0 &&
              (o = t.field ? fD(t.field, t.variables) : Tp(r, td(t))),
            o === !1 ? r : r === ar(o) ? o : r + ":" + o
          );
        }),
        (e.prototype.readField = function (t, n) {
          var r = t.from;
          if (r) {
            var i = t.field || t.fieldName;
            if (i) {
              if (t.typename === void 0) {
                var o = n.store.getFieldValue(r, "__typename");
                o && (t.typename = o);
              }
              var a = this.getStoreFieldName(t),
                s = ar(a),
                l = n.store.getFieldValue(r, a),
                u = this.getFieldPolicy(t.typename, s, !1),
                c = u && u.read;
              if (c) {
                var f = yy(
                  this,
                  r,
                  t,
                  n,
                  n.store.getStorage(oe(r) ? r.__ref : r, a)
                );
                return Up.withValue(this.cache, c, [l, f]);
              }
              return l;
            }
          }
        }),
        (e.prototype.getReadFunction = function (t, n) {
          var r = this.getFieldPolicy(t, n, !1);
          return r && r.read;
        }),
        (e.prototype.getMergeFunction = function (t, n, r) {
          var i = this.getFieldPolicy(t, n, !1),
            o = i && i.merge;
          return (
            !o && r && ((i = this.getTypePolicy(r)), (o = i && i.merge)), o
          );
        }),
        (e.prototype.runMergeFunction = function (t, n, r, i, o) {
          var a = r.field,
            s = r.typename,
            l = r.merge;
          return l === my
            ? Mx(i.store)(t, n)
            : l === vy
            ? n
            : (i.overwrite && (t = void 0),
              l(
                t,
                n,
                yy(
                  this,
                  void 0,
                  {
                    typename: s,
                    fieldName: a.name.value,
                    field: a,
                    variables: i.variables,
                  },
                  i,
                  o || Object.create(null)
                )
              ));
        }),
        e
      );
    })();
  function yy(e, t, n, r, i) {
    var o = e.getStoreFieldName(n),
      a = ar(o),
      s = n.variables || r.variables,
      l = r.store,
      u = l.toReference,
      c = l.canRead;
    return {
      args: td(n),
      field: n.field || null,
      fieldName: a,
      storeFieldName: o,
      variables: s,
      isReference: oe,
      toReference: u,
      storage: i,
      cache: e.cache,
      canRead: c,
      readField: function () {
        return e.readField(Wp(arguments, t, s), r);
      },
      mergeObjects: Mx(r.store),
    };
  }
  function Wp(e, t, n) {
    var r = e[0],
      i = e[1],
      o = e.length,
      a;
    return (
      typeof r == "string"
        ? (a = { fieldName: r, from: o > 1 ? i : t })
        : ((a = F({}, r)), Te.call(a, "from") || (a.from = t)),
      __DEV__ &&
        a.from === void 0 &&
        __DEV__ &&
        H.warn(
          "Undefined 'from' passed to readField with arguments ".concat(
            BD(Array.from(e))
          )
        ),
      a.variables === void 0 && (a.variables = n),
      a
    );
  }
  function Mx(e) {
    return function (n, r) {
      if (Ee(n) || Ee(r))
        throw __DEV__ ? new ie("Cannot automatically merge arrays") : new ie(4);
      if (ve(n) && ve(r)) {
        var i = e.getFieldValue(n, "__typename"),
          o = e.getFieldValue(r, "__typename"),
          a = i && o && i !== o;
        if (a) return r;
        if (oe(n) && yi(r)) return e.merge(n.__ref, r), n;
        if (yi(n) && oe(r)) return e.merge(n, r.__ref), r;
        if (yi(n) && yi(r)) return F(F({}, n), r);
      }
      return r;
    };
  }
  function fc(e, t, n) {
    var r = "".concat(t).concat(n),
      i = e.flavors.get(r);
    return (
      i ||
        e.flavors.set(
          r,
          (i =
            e.clientOnly === t && e.deferred === n
              ? e
              : F(F({}, e), { clientOnly: t, deferred: n }))
        ),
      i
    );
  }
  var cR = (function () {
      function e(t, n, r) {
        (this.cache = t), (this.reader = n), (this.fragments = r);
      }
      return (
        (e.prototype.writeToStore = function (t, n) {
          var r = this,
            i = n.query,
            o = n.result,
            a = n.dataId,
            s = n.variables,
            l = n.overwrite,
            u = La(i),
            c = Z8();
          s = F(F({}, Dp(u)), s);
          var f = F(
              F(
                {
                  store: t,
                  written: Object.create(null),
                  merge: function (p, g) {
                    return c.merge(p, g);
                  },
                  variables: s,
                  varString: Dr(s),
                },
                kx(i, this.fragments)
              ),
              {
                overwrite: !!l,
                incomingById: new Map(),
                clientOnly: !1,
                deferred: !1,
                flavors: new Map(),
              }
            ),
            d = this.processSelectionSet({
              result: o || Object.create(null),
              dataId: a,
              selectionSet: u.selectionSet,
              mergeTree: { map: new Map() },
              context: f,
            });
          if (!oe(d))
            throw __DEV__
              ? new ie("Could not identify object ".concat(JSON.stringify(o)))
              : new ie(7);
          return (
            f.incomingById.forEach(function (p, g) {
              var y = p.storeObject,
                b = p.mergeTree,
                m = p.fieldNodeSet,
                h = Mi(g);
              if (b && b.map.size) {
                var v = r.applyMerges(b, h, y, f);
                if (oe(v)) return;
                y = v;
              }
              if (__DEV__ && !f.overwrite) {
                var x = Object.create(null);
                m.forEach(function (C) {
                  C.selectionSet && (x[C.name.value] = !0);
                });
                var E = function (C) {
                    return x[ar(C)] === !0;
                  },
                  _ = function (C) {
                    var N = b && b.map.get(C);
                    return !!(N && N.info && N.info.merge);
                  };
                Object.keys(y).forEach(function (C) {
                  E(C) && !_(C) && fR(h, y, C, f.store);
                });
              }
              t.merge(g, y);
            }),
            t.retain(d.__ref),
            d
          );
        }),
        (e.prototype.processSelectionSet = function (t) {
          var n = this,
            r = t.dataId,
            i = t.result,
            o = t.selectionSet,
            a = t.context,
            s = t.mergeTree,
            l = this.cache.policies,
            u = Object.create(null),
            c =
              (r && l.rootTypenamesById[r]) ||
              Lf(i, o, a.fragmentMap) ||
              (r && a.store.get(r, "__typename"));
          typeof c == "string" && (u.__typename = c);
          var f = function () {
              var v = Wp(arguments, u, a.variables);
              if (oe(v.from)) {
                var x = a.incomingById.get(v.from.__ref);
                if (x) {
                  var E = l.readField(F(F({}, v), { from: x.storeObject }), a);
                  if (E !== void 0) return E;
                }
              }
              return l.readField(v, a);
            },
            d = new Set();
          this.flattenFields(o, i, a, c).forEach(function (v, x) {
            var E,
              _ = $r(x),
              C = i[_];
            if ((d.add(x), C !== void 0)) {
              var N = l.getStoreFieldName({
                  typename: c,
                  fieldName: x.name.value,
                  field: x,
                  variables: v.variables,
                }),
                M = gy(s, N),
                P = n.processFieldValue(
                  C,
                  x,
                  x.selectionSet ? fc(v, !1, !1) : v,
                  M
                ),
                L = void 0;
              x.selectionSet && (oe(P) || yi(P)) && (L = f("__typename", P));
              var B = l.getMergeFunction(c, x.name.value, L);
              B ? (M.info = { field: x, typename: c, merge: B }) : wy(s, N),
                (u = v.merge(u, ((E = {}), (E[N] = P), E)));
            } else __DEV__ && !v.clientOnly && !v.deferred && !Rp.added(x) && !l.getReadFunction(c, x.name.value) && __DEV__ && H.error("Missing field '".concat($r(x), "' while writing result ").concat(JSON.stringify(i, null, 2)).substring(0, 1e3));
          });
          try {
            var p = l.identify(i, {
                typename: c,
                selectionSet: o,
                fragmentMap: a.fragmentMap,
                storeObject: u,
                readField: f,
              }),
              g = p[0],
              y = p[1];
            (r = r || g), y && (u = a.merge(u, y));
          } catch (v) {
            if (!r) throw v;
          }
          if (typeof r == "string") {
            var b = Mi(r),
              m = a.written[r] || (a.written[r] = []);
            if (
              m.indexOf(o) >= 0 ||
              (m.push(o), this.reader && this.reader.isFresh(i, b, o, a))
            )
              return b;
            var h = a.incomingById.get(r);
            return (
              h
                ? ((h.storeObject = a.merge(h.storeObject, u)),
                  (h.mergeTree = nd(h.mergeTree, s)),
                  d.forEach(function (v) {
                    return h.fieldNodeSet.add(v);
                  }))
                : a.incomingById.set(r, {
                    storeObject: u,
                    mergeTree: Cl(s) ? void 0 : s,
                    fieldNodeSet: d,
                  }),
              b
            );
          }
          return u;
        }),
        (e.prototype.processFieldValue = function (t, n, r, i) {
          var o = this;
          return !n.selectionSet || t === null
            ? __DEV__
              ? ox(t)
              : t
            : Ee(t)
            ? t.map(function (a, s) {
                var l = o.processFieldValue(a, n, r, gy(i, s));
                return wy(i, s), l;
              })
            : this.processSelectionSet({
                result: t,
                selectionSet: n.selectionSet,
                context: r,
                mergeTree: i,
              });
        }),
        (e.prototype.flattenFields = function (t, n, r, i) {
          i === void 0 && (i = Lf(n, t, r.fragmentMap));
          var o = new Map(),
            a = this.cache.policies,
            s = new so(!1);
          return (
            (function l(u, c) {
              var f = s.lookup(u, c.clientOnly, c.deferred);
              f.visited ||
                ((f.visited = !0),
                u.selections.forEach(function (d) {
                  if (iu(d, r.variables)) {
                    var p = c.clientOnly,
                      g = c.deferred;
                    if (
                      (!(p && g) &&
                        on(d.directives) &&
                        d.directives.forEach(function (m) {
                          var h = m.name.value;
                          if ((h === "client" && (p = !0), h === "defer")) {
                            var v = ou(m, r.variables);
                            (!v || v.if !== !1) && (g = !0);
                          }
                        }),
                      Vr(d))
                    ) {
                      var y = o.get(d);
                      y && ((p = p && y.clientOnly), (g = g && y.deferred)),
                        o.set(d, fc(r, p, g));
                    } else {
                      var b = Pp(d, r.lookupFragment);
                      if (!b && d.kind === De.FRAGMENT_SPREAD)
                        throw __DEV__
                          ? new ie("No fragment named ".concat(d.name.value))
                          : new ie(8);
                      b &&
                        a.fragmentMatches(b, i, n, r.variables) &&
                        l(b.selectionSet, fc(r, p, g));
                    }
                  }
                }));
            })(t, r),
            o
          );
        }),
        (e.prototype.applyMerges = function (t, n, r, i, o) {
          var a,
            s = this;
          if (t.map.size && !oe(r)) {
            var l = !Ee(r) && (oe(n) || yi(n)) ? n : void 0,
              u = r;
            l && !o && (o = [oe(l) ? l.__ref : l]);
            var c,
              f = function (d, p) {
                return Ee(d)
                  ? typeof p == "number"
                    ? d[p]
                    : void 0
                  : i.store.getFieldValue(d, String(p));
              };
            t.map.forEach(function (d, p) {
              var g = f(l, p),
                y = f(u, p);
              if (y !== void 0) {
                o && o.push(p);
                var b = s.applyMerges(d, g, y, i, o);
                b !== y && ((c = c || new Map()), c.set(p, b)),
                  o && H(o.pop() === p);
              }
            }),
              c &&
                ((r = Ee(u) ? u.slice(0) : F({}, u)),
                c.forEach(function (d, p) {
                  r[p] = d;
                }));
          }
          return t.info
            ? this.cache.policies.runMergeFunction(
                n,
                r,
                t.info,
                i,
                o && (a = i.store).getStorage.apply(a, o)
              )
            : r;
        }),
        e
      );
    })(),
    Dx = [];
  function gy(e, t) {
    var n = e.map;
    return n.has(t) || n.set(t, Dx.pop() || { map: new Map() }), n.get(t);
  }
  function nd(e, t) {
    if (e === t || !t || Cl(t)) return e;
    if (!e || Cl(e)) return t;
    var n = e.info && t.info ? F(F({}, e.info), t.info) : e.info || t.info,
      r = e.map.size && t.map.size,
      i = r ? new Map() : e.map.size ? e.map : t.map,
      o = { info: n, map: i };
    if (r) {
      var a = new Set(t.map.keys());
      e.map.forEach(function (s, l) {
        o.map.set(l, nd(s, t.map.get(l))), a.delete(l);
      }),
        a.forEach(function (s) {
          o.map.set(s, nd(t.map.get(s), e.map.get(s)));
        });
    }
    return o;
  }
  function Cl(e) {
    return !e || !(e.info || e.map.size);
  }
  function wy(e, t) {
    var n = e.map,
      r = n.get(t);
    r && Cl(r) && (Dx.push(r), n.delete(t));
  }
  var xy = new Set();
  function fR(e, t, n, r) {
    var i = function (f) {
        var d = r.getFieldValue(f, n);
        return typeof d == "object" && d;
      },
      o = i(e);
    if (o) {
      var a = i(t);
      if (
        a &&
        !oe(o) &&
        !Ne(o, a) &&
        !Object.keys(o).every(function (f) {
          return r.getFieldValue(a, f) !== void 0;
        })
      ) {
        var s =
            r.getFieldValue(e, "__typename") ||
            r.getFieldValue(t, "__typename"),
          l = ar(n),
          u = "".concat(s, ".").concat(l);
        if (!xy.has(u)) {
          xy.add(u);
          var c = [];
          !Ee(o) &&
            !Ee(a) &&
            [o, a].forEach(function (f) {
              var d = r.getFieldValue(f, "__typename");
              typeof d == "string" && !c.includes(d) && c.push(d);
            }),
            __DEV__ &&
              H.warn(
                "Cache data may be lost when replacing the "
                  .concat(l, " field of a ")
                  .concat(
                    s,
                    ` object.

To address this problem (which is not a bug in Apollo Client), `
                  )
                  .concat(
                    c.length
                      ? "either ensure all objects of type " +
                          c.join(" and ") +
                          " have an ID or a custom merge function, or "
                      : "",
                    "define a custom merge function for the "
                  )
                  .concat(
                    u,
                    ` field, so InMemoryCache can safely merge these objects:

  existing: `
                  )
                  .concat(
                    JSON.stringify(o).slice(0, 1e3),
                    `
  incoming: `
                  )
                  .concat(
                    JSON.stringify(a).slice(0, 1e3),
                    `

For more information about these options, please refer to the documentation:

  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers
  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects
`
                  )
              );
        }
      }
    }
  }
  var dR = (function (e) {
      Ut(t, e);
      function t(n) {
        n === void 0 && (n = {});
        var r = e.call(this) || this;
        return (
          (r.watches = new Set()),
          (r.typenameDocumentCache = new Map()),
          (r.makeVar = aR),
          (r.txCount = 0),
          (r.config = X8(n)),
          (r.addTypename = !!r.config.addTypename),
          (r.policies = new uR({
            cache: r,
            dataIdFromObject: r.config.dataIdFromObject,
            possibleTypes: r.config.possibleTypes,
            typePolicies: r.config.typePolicies,
          })),
          r.init(),
          r
        );
      }
      return (
        (t.prototype.init = function () {
          var n = (this.data = new Ca.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
          }));
          (this.optimisticData = n.stump), this.resetResultCache();
        }),
        (t.prototype.resetResultCache = function (n) {
          var r = this,
            i = this.storeReader,
            o = this.config.fragments;
          (this.storeWriter = new cR(
            this,
            (this.storeReader = new nR({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: _x(this.config),
              canon: n ? void 0 : i && i.canon,
              fragments: o,
            })),
            o
          )),
            (this.maybeBroadcastWatch = _l(
              function (a, s) {
                return r.broadcastWatch(a, s);
              },
              {
                max: this.config.resultCacheMaxSize,
                makeCacheKey: function (a) {
                  var s = a.optimistic ? r.optimisticData : r.data;
                  if (Xo(s)) {
                    var l = a.optimistic,
                      u = a.id,
                      c = a.variables;
                    return s.makeCacheKey(
                      a.query,
                      a.callback,
                      Dr({ optimistic: l, id: u, variables: c })
                    );
                  }
                },
              }
            )),
            new Set([this.data.group, this.optimisticData.group]).forEach(
              function (a) {
                return a.resetCaching();
              }
            );
        }),
        (t.prototype.restore = function (n) {
          return this.init(), n && this.data.replace(n), this;
        }),
        (t.prototype.extract = function (n) {
          return (
            n === void 0 && (n = !1),
            (n ? this.optimisticData : this.data).extract()
          );
        }),
        (t.prototype.read = function (n) {
          var r = n.returnPartialData,
            i = r === void 0 ? !1 : r;
          try {
            return (
              this.storeReader.diffQueryAgainstStore(
                F(F({}, n), {
                  store: n.optimistic ? this.optimisticData : this.data,
                  config: this.config,
                  returnPartialData: i,
                })
              ).result || null
            );
          } catch (o) {
            if (o instanceof bx) return null;
            throw o;
          }
        }),
        (t.prototype.write = function (n) {
          try {
            return ++this.txCount, this.storeWriter.writeToStore(this.data, n);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.modify = function (n) {
          if (Te.call(n, "id") && !n.id) return !1;
          var r = n.optimistic ? this.optimisticData : this.data;
          try {
            return ++this.txCount, r.modify(n.id || "ROOT_QUERY", n.fields);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.diff = function (n) {
          return this.storeReader.diffQueryAgainstStore(
            F(F({}, n), {
              store: n.optimistic ? this.optimisticData : this.data,
              rootId: n.id || "ROOT_QUERY",
              config: this.config,
            })
          );
        }),
        (t.prototype.watch = function (n) {
          var r = this;
          return (
            this.watches.size || oR(this),
            this.watches.add(n),
            n.immediate && this.maybeBroadcastWatch(n),
            function () {
              r.watches.delete(n) && !r.watches.size && cy(r),
                r.maybeBroadcastWatch.forget(n);
            }
          );
        }),
        (t.prototype.gc = function (n) {
          Dr.reset();
          var r = this.optimisticData.gc();
          return (
            n &&
              !this.txCount &&
              (n.resetResultCache
                ? this.resetResultCache(n.resetResultIdentities)
                : n.resetResultIdentities && this.storeReader.resetCanon()),
            r
          );
        }),
        (t.prototype.retain = function (n, r) {
          return (r ? this.optimisticData : this.data).retain(n);
        }),
        (t.prototype.release = function (n, r) {
          return (r ? this.optimisticData : this.data).release(n);
        }),
        (t.prototype.identify = function (n) {
          if (oe(n)) return n.__ref;
          try {
            return this.policies.identify(n)[0];
          } catch (r) {
            __DEV__ && H.warn(r);
          }
        }),
        (t.prototype.evict = function (n) {
          if (!n.id) {
            if (Te.call(n, "id")) return !1;
            n = F(F({}, n), { id: "ROOT_QUERY" });
          }
          try {
            return ++this.txCount, this.optimisticData.evict(n, this.data);
          } finally {
            !--this.txCount && n.broadcast !== !1 && this.broadcastWatches();
          }
        }),
        (t.prototype.reset = function (n) {
          var r = this;
          return (
            this.init(),
            Dr.reset(),
            n && n.discardWatches
              ? (this.watches.forEach(function (i) {
                  return r.maybeBroadcastWatch.forget(i);
                }),
                this.watches.clear(),
                cy(this))
              : this.broadcastWatches(),
            Promise.resolve()
          );
        }),
        (t.prototype.removeOptimistic = function (n) {
          var r = this.optimisticData.removeLayer(n);
          r !== this.optimisticData &&
            ((this.optimisticData = r), this.broadcastWatches());
        }),
        (t.prototype.batch = function (n) {
          var r = this,
            i = n.update,
            o = n.optimistic,
            a = o === void 0 ? !0 : o,
            s = n.removeOptimistic,
            l = n.onWatchUpdated,
            u,
            c = function (d) {
              var p = r,
                g = p.data,
                y = p.optimisticData;
              ++r.txCount, d && (r.data = r.optimisticData = d);
              try {
                return (u = i(r));
              } finally {
                --r.txCount, (r.data = g), (r.optimisticData = y);
              }
            },
            f = new Set();
          return (
            l &&
              !this.txCount &&
              this.broadcastWatches(
                F(F({}, n), {
                  onWatchUpdated: function (d) {
                    return f.add(d), !1;
                  },
                })
              ),
            typeof a == "string"
              ? (this.optimisticData = this.optimisticData.addLayer(a, c))
              : a === !1
              ? c(this.data)
              : c(),
            typeof s == "string" &&
              (this.optimisticData = this.optimisticData.removeLayer(s)),
            l && f.size
              ? (this.broadcastWatches(
                  F(F({}, n), {
                    onWatchUpdated: function (d, p) {
                      var g = l.call(this, d, p);
                      return g !== !1 && f.delete(d), g;
                    },
                  })
                ),
                f.size &&
                  f.forEach(function (d) {
                    return r.maybeBroadcastWatch.dirty(d);
                  }))
              : this.broadcastWatches(n),
            u
          );
        }),
        (t.prototype.performTransaction = function (n, r) {
          return this.batch({ update: n, optimistic: r || r !== null });
        }),
        (t.prototype.transformDocument = function (n) {
          if (this.addTypename) {
            var r = this.typenameDocumentCache.get(n);
            return (
              r ||
                ((r = Rp(n)),
                this.typenameDocumentCache.set(n, r),
                this.typenameDocumentCache.set(r, r)),
              r
            );
          }
          return n;
        }),
        (t.prototype.transformForLink = function (n) {
          var r = this.config.fragments;
          return r ? r.transform(n) : n;
        }),
        (t.prototype.broadcastWatches = function (n) {
          var r = this;
          this.txCount ||
            this.watches.forEach(function (i) {
              return r.maybeBroadcastWatch(i, n);
            });
        }),
        (t.prototype.broadcastWatch = function (n, r) {
          var i = n.lastDiff,
            o = this.diff(n);
          (r &&
            (n.optimistic &&
              typeof r.optimistic == "string" &&
              (o.fromOptimisticTransaction = !0),
            r.onWatchUpdated && r.onWatchUpdated.call(this, n, o, i) === !1)) ||
            ((!i || !Ne(i.result, o.result)) &&
              n.callback((n.lastDiff = o), i));
        }),
        t
      );
    })(Q8),
    se;
  (function (e) {
    (e[(e.loading = 1)] = "loading"),
      (e[(e.setVariables = 2)] = "setVariables"),
      (e[(e.fetchMore = 3)] = "fetchMore"),
      (e[(e.refetch = 4)] = "refetch"),
      (e[(e.poll = 6)] = "poll"),
      (e[(e.ready = 7)] = "ready"),
      (e[(e.error = 8)] = "error");
  })(se || (se = {}));
  function ka(e) {
    return e ? e < 7 : !1;
  }
  var pR = Object.assign,
    hR = Object.hasOwnProperty,
    rd = (function (e) {
      Ut(t, e);
      function t(n) {
        var r = n.queryManager,
          i = n.queryInfo,
          o = n.options,
          a =
            e.call(this, function (b) {
              try {
                var m = b._subscription._observer;
                m && !m.error && (m.error = mR);
              } catch {}
              var h = !a.observers.size;
              a.observers.add(b);
              var v = a.last;
              return (
                v && v.error
                  ? b.error && b.error(v.error)
                  : v && v.result && b.next && b.next(v.result),
                h && a.reobserve().catch(function () {}),
                function () {
                  a.observers.delete(b) &&
                    !a.observers.size &&
                    a.tearDownQuery();
                }
              );
            }) || this;
        (a.observers = new Set()),
          (a.subscriptions = new Set()),
          (a.queryInfo = i),
          (a.queryManager = r),
          (a.isTornDown = !1);
        var s = r.defaultOptions.watchQuery,
          l = s === void 0 ? {} : s,
          u = l.fetchPolicy,
          c = u === void 0 ? "cache-first" : u,
          f = o.fetchPolicy,
          d = f === void 0 ? c : f,
          p = o.initialFetchPolicy,
          g = p === void 0 ? (d === "standby" ? c : d) : p;
        (a.options = F(F({}, o), { initialFetchPolicy: g, fetchPolicy: d })),
          (a.queryId = i.queryId || r.generateQueryId());
        var y = La(a.query);
        return (a.queryName = y && y.name && y.name.value), a;
      }
      return (
        Object.defineProperty(t.prototype, "query", {
          get: function () {
            return this.queryManager.transform(this.options.query).document;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "variables", {
          get: function () {
            return this.options.variables;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.result = function () {
          var n = this;
          return new Promise(function (r, i) {
            var o = {
                next: function (s) {
                  r(s),
                    n.observers.delete(o),
                    n.observers.size || n.queryManager.removeQuery(n.queryId),
                    setTimeout(function () {
                      a.unsubscribe();
                    }, 0);
                },
                error: i,
              },
              a = n.subscribe(o);
          });
        }),
        (t.prototype.getCurrentResult = function (n) {
          n === void 0 && (n = !0);
          var r = this.getLastResult(!0),
            i =
              this.queryInfo.networkStatus ||
              (r && r.networkStatus) ||
              se.ready,
            o = F(F({}, r), { loading: ka(i), networkStatus: i }),
            a = this.options.fetchPolicy,
            s = a === void 0 ? "cache-first" : a;
          if (
            !(
              s === "network-only" ||
              s === "no-cache" ||
              s === "standby" ||
              this.queryManager.transform(this.options.query).hasForcedResolvers
            )
          ) {
            var l = this.queryInfo.getDiff();
            (l.complete || this.options.returnPartialData) &&
              (o.data = l.result),
              Ne(o.data, {}) && (o.data = void 0),
              l.complete
                ? (delete o.partial,
                  l.complete &&
                    o.networkStatus === se.loading &&
                    (s === "cache-first" || s === "cache-only") &&
                    ((o.networkStatus = se.ready), (o.loading = !1)))
                : (o.partial = !0),
              __DEV__ &&
                !l.complete &&
                !this.options.partialRefetch &&
                !o.loading &&
                !o.data &&
                !o.error &&
                jx(l.missing);
          }
          return n && this.updateLastResult(o), o;
        }),
        (t.prototype.isDifferentFromLastResult = function (n, r) {
          return (
            !this.last ||
            !Ne(this.last.result, n) ||
            (r && !Ne(this.last.variables, r))
          );
        }),
        (t.prototype.getLast = function (n, r) {
          var i = this.last;
          if (i && i[n] && (!r || Ne(i.variables, this.variables))) return i[n];
        }),
        (t.prototype.getLastResult = function (n) {
          return this.getLast("result", n);
        }),
        (t.prototype.getLastError = function (n) {
          return this.getLast("error", n);
        }),
        (t.prototype.resetLastResults = function () {
          delete this.last, (this.isTornDown = !1);
        }),
        (t.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        }),
        (t.prototype.refetch = function (n) {
          var r,
            i = { pollInterval: 0 },
            o = this.options.fetchPolicy;
          if (
            (o === "cache-and-network"
              ? (i.fetchPolicy = o)
              : o === "no-cache"
              ? (i.fetchPolicy = "no-cache")
              : (i.fetchPolicy = "network-only"),
            __DEV__ && n && hR.call(n, "variables"))
          ) {
            var a = Jw(this.query),
              s = a.variableDefinitions;
            (!s ||
              !s.some(function (l) {
                return l.variable.name.value === "variables";
              })) &&
              __DEV__ &&
              H.warn(
                "Called refetch("
                  .concat(JSON.stringify(n), ") for query ")
                  .concat(
                    ((r = a.name) === null || r === void 0
                      ? void 0
                      : r.value) || JSON.stringify(a),
                    `, which does not declare a $variables variable.
Did you mean to call refetch(variables) instead of refetch({ variables })?`
                  )
              );
          }
          return (
            n &&
              !Ne(this.options.variables, n) &&
              (i.variables = this.options.variables =
                F(F({}, this.options.variables), n)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(i, se.refetch)
          );
        }),
        (t.prototype.fetchMore = function (n) {
          var r = this,
            i = F(
              F(
                {},
                n.query
                  ? n
                  : F(F(F(F({}, this.options), { query: this.query }), n), {
                      variables: F(F({}, this.options.variables), n.variables),
                    })
              ),
              { fetchPolicy: "no-cache" }
            ),
            o = this.queryManager.generateQueryId(),
            a = this.queryInfo,
            s = a.networkStatus;
          (a.networkStatus = se.fetchMore),
            i.notifyOnNetworkStatusChange && this.observe();
          var l = new Set();
          return this.queryManager
            .fetchQuery(o, i, se.fetchMore)
            .then(function (u) {
              return (
                r.queryManager.removeQuery(o),
                a.networkStatus === se.fetchMore && (a.networkStatus = s),
                r.queryManager.cache.batch({
                  update: function (c) {
                    var f = n.updateQuery;
                    f
                      ? c.updateQuery(
                          {
                            query: r.query,
                            variables: r.variables,
                            returnPartialData: !0,
                            optimistic: !1,
                          },
                          function (d) {
                            return f(d, {
                              fetchMoreResult: u.data,
                              variables: i.variables,
                            });
                          }
                        )
                      : c.writeQuery({
                          query: i.query,
                          variables: i.variables,
                          data: u.data,
                        });
                  },
                  onWatchUpdated: function (c) {
                    l.add(c.query);
                  },
                }),
                u
              );
            })
            .finally(function () {
              l.has(r.query) || Rx(r);
            });
        }),
        (t.prototype.subscribeToMore = function (n) {
          var r = this,
            i = this.queryManager
              .startGraphQLSubscription({
                query: n.document,
                variables: n.variables,
                context: n.context,
              })
              .subscribe({
                next: function (o) {
                  var a = n.updateQuery;
                  a &&
                    r.updateQuery(function (s, l) {
                      var u = l.variables;
                      return a(s, { subscriptionData: o, variables: u });
                    });
                },
                error: function (o) {
                  if (n.onError) {
                    n.onError(o);
                    return;
                  }
                  __DEV__ && H.error("Unhandled GraphQL subscription error", o);
                },
              });
          return (
            this.subscriptions.add(i),
            function () {
              r.subscriptions.delete(i) && i.unsubscribe();
            }
          );
        }),
        (t.prototype.setOptions = function (n) {
          return this.reobserve(n);
        }),
        (t.prototype.setVariables = function (n) {
          return Ne(this.variables, n)
            ? this.observers.size
              ? this.result()
              : Promise.resolve()
            : ((this.options.variables = n),
              this.observers.size
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: n,
                    },
                    se.setVariables
                  )
                : Promise.resolve());
        }),
        (t.prototype.updateQuery = function (n) {
          var r = this.queryManager,
            i = r.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }).result,
            o = n(i, { variables: this.variables });
          o &&
            (r.cache.writeQuery({
              query: this.options.query,
              data: o,
              variables: this.variables,
            }),
            r.broadcastQueries());
        }),
        (t.prototype.startPolling = function (n) {
          (this.options.pollInterval = n), this.updatePolling();
        }),
        (t.prototype.stopPolling = function () {
          (this.options.pollInterval = 0), this.updatePolling();
        }),
        (t.prototype.applyNextFetchPolicy = function (n, r) {
          if (r.nextFetchPolicy) {
            var i = r.fetchPolicy,
              o = i === void 0 ? "cache-first" : i,
              a = r.initialFetchPolicy,
              s = a === void 0 ? o : a;
            o === "standby" ||
              (typeof r.nextFetchPolicy == "function"
                ? (r.fetchPolicy = r.nextFetchPolicy(o, {
                    reason: n,
                    options: r,
                    observable: this,
                    initialFetchPolicy: s,
                  }))
                : n === "variables-changed"
                ? (r.fetchPolicy = s)
                : (r.fetchPolicy = r.nextFetchPolicy));
          }
          return r.fetchPolicy;
        }),
        (t.prototype.fetch = function (n, r) {
          return (
            this.queryManager.setObservableQuery(this),
            this.queryManager.fetchConcastWithInfo(this.queryId, n, r)
          );
        }),
        (t.prototype.updatePolling = function () {
          var n = this;
          if (!this.queryManager.ssrMode) {
            var r = this,
              i = r.pollingInfo,
              o = r.options.pollInterval;
            if (!o) {
              i && (clearTimeout(i.timeout), delete this.pollingInfo);
              return;
            }
            if (!(i && i.interval === o)) {
              __DEV__
                ? H(
                    o,
                    "Attempted to start a polling query without a polling interval."
                  )
                : H(o, 13);
              var a = i || (this.pollingInfo = {});
              a.interval = o;
              var s = function () {
                  n.pollingInfo &&
                    (ka(n.queryInfo.networkStatus)
                      ? l()
                      : n
                          .reobserve(
                            {
                              fetchPolicy:
                                n.options.initialFetchPolicy === "no-cache"
                                  ? "no-cache"
                                  : "network-only",
                            },
                            se.poll
                          )
                          .then(l, l));
                },
                l = function () {
                  var u = n.pollingInfo;
                  u &&
                    (clearTimeout(u.timeout),
                    (u.timeout = setTimeout(s, u.interval)));
                };
              l();
            }
          }
        }),
        (t.prototype.updateLastResult = function (n, r) {
          return (
            r === void 0 && (r = this.variables),
            (this.last = F(F({}, this.last), {
              result: this.queryManager.assumeImmutableResults ? n : ox(n),
              variables: r,
            })),
            on(n.errors) || delete this.last.error,
            this.last
          );
        }),
        (t.prototype.reobserveAsConcast = function (n, r) {
          var i = this;
          this.isTornDown = !1;
          var o = r === se.refetch || r === se.fetchMore || r === se.poll,
            a = this.options.variables,
            s = this.options.fetchPolicy,
            l = uu(this.options, n || {}),
            u = o ? l : pR(this.options, l);
          o ||
            (this.updatePolling(),
            n &&
              n.variables &&
              !Ne(n.variables, a) &&
              u.fetchPolicy !== "standby" &&
              u.fetchPolicy === s &&
              (this.applyNextFetchPolicy("variables-changed", u),
              r === void 0 && (r = se.setVariables)));
          var c = u.variables && F({}, u.variables),
            f = this.fetch(u, r),
            d = f.concast,
            p = f.fromLink,
            g = {
              next: function (y) {
                i.reportResult(y, c);
              },
              error: function (y) {
                i.reportError(y, c);
              },
            };
          return (
            !o &&
              p &&
              (this.concast &&
                this.observer &&
                this.concast.removeObserver(this.observer),
              (this.concast = d),
              (this.observer = g)),
            d.addObserver(g),
            d
          );
        }),
        (t.prototype.reobserve = function (n, r) {
          return this.reobserveAsConcast(n, r).promise;
        }),
        (t.prototype.observe = function () {
          this.reportResult(this.getCurrentResult(!1), this.variables);
        }),
        (t.prototype.reportResult = function (n, r) {
          var i = this.getLastError();
          (i || this.isDifferentFromLastResult(n, r)) &&
            ((i || !n.partial || this.options.returnPartialData) &&
              this.updateLastResult(n, r),
            Go(this.observers, "next", n));
        }),
        (t.prototype.reportError = function (n, r) {
          var i = F(F({}, this.getLastResult()), {
            error: n,
            errors: n.graphQLErrors,
            networkStatus: se.error,
            loading: !1,
          });
          this.updateLastResult(i, r),
            Go(this.observers, "error", (this.last.error = n));
        }),
        (t.prototype.hasObservers = function () {
          return this.observers.size > 0;
        }),
        (t.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer),
              delete this.concast,
              delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (n) {
              return n.unsubscribe();
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0));
        }),
        t
      );
    })(de);
  ax(rd);
  function Rx(e) {
    var t = e.options,
      n = t.fetchPolicy,
      r = t.nextFetchPolicy;
    return n === "cache-and-network" || n === "network-only"
      ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function () {
            return (
              (this.nextFetchPolicy = r),
              typeof r == "function" ? r.apply(this, arguments) : n
            );
          },
        })
      : e.reobserve();
  }
  function mR(e) {
    __DEV__ && H.error("Unhandled error", e.message, e.stack);
  }
  function jx(e) {
    __DEV__ &&
      e &&
      __DEV__ &&
      H.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
  }
  var Ax = (function () {
      function e(t) {
        var n = t.cache,
          r = t.client,
          i = t.resolvers,
          o = t.fragmentMatcher;
        (this.selectionsToResolveCache = new WeakMap()),
          (this.cache = n),
          r && (this.client = r),
          i && this.addResolvers(i),
          o && this.setFragmentMatcher(o);
      }
      return (
        (e.prototype.addResolvers = function (t) {
          var n = this;
          (this.resolvers = this.resolvers || {}),
            Array.isArray(t)
              ? t.forEach(function (r) {
                  n.resolvers = Lv(n.resolvers, r);
                })
              : (this.resolvers = Lv(this.resolvers, t));
        }),
        (e.prototype.setResolvers = function (t) {
          (this.resolvers = {}), this.addResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.resolvers || {};
        }),
        (e.prototype.runResolvers = function (t) {
          var n = t.document,
            r = t.remoteResult,
            i = t.context,
            o = t.variables,
            a = t.onlyRunForcedResolvers,
            s = a === void 0 ? !1 : a;
          return An(this, void 0, void 0, function () {
            return In(this, function (l) {
              return n
                ? [
                    2,
                    this.resolveDocument(
                      n,
                      r.data,
                      i,
                      o,
                      this.fragmentMatcher,
                      s
                    ).then(function (u) {
                      return F(F({}, r), { data: u.result });
                    }),
                  ]
                : [2, r];
            });
          });
        }),
        (e.prototype.setFragmentMatcher = function (t) {
          this.fragmentMatcher = t;
        }),
        (e.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher;
        }),
        (e.prototype.clientQuery = function (t) {
          return Np(["client"], t) && this.resolvers ? t : null;
        }),
        (e.prototype.serverQuery = function (t) {
          return bD(t);
        }),
        (e.prototype.prepareContext = function (t) {
          var n = this.cache;
          return F(F({}, t), {
            cache: n,
            getCacheKey: function (r) {
              return n.identify(r);
            },
          });
        }),
        (e.prototype.addExportedVariables = function (t, n, r) {
          return (
            n === void 0 && (n = {}),
            r === void 0 && (r = {}),
            An(this, void 0, void 0, function () {
              return In(this, function (i) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        this.buildRootValueFromCache(t, n) || {},
                        this.prepareContext(r),
                        n
                      ).then(function (o) {
                        return F(F({}, n), o.exportedVariables);
                      }),
                    ]
                  : [2, F({}, n)];
              });
            })
          );
        }),
        (e.prototype.shouldForceResolvers = function (t) {
          var n = !1;
          return (
            En(t, {
              Directive: {
                enter: function (r) {
                  if (
                    r.name.value === "client" &&
                    r.arguments &&
                    ((n = r.arguments.some(function (i) {
                      return (
                        i.name.value === "always" &&
                        i.value.kind === "BooleanValue" &&
                        i.value.value === !0
                      );
                    })),
                    n)
                  )
                    return kp;
                },
              },
            }),
            n
          );
        }),
        (e.prototype.buildRootValueFromCache = function (t, n) {
          return this.cache.diff({
            query: xD(t),
            variables: n,
            returnPartialData: !0,
            optimistic: !1,
          }).result;
        }),
        (e.prototype.resolveDocument = function (t, n, r, i, o, a) {
          return (
            r === void 0 && (r = {}),
            i === void 0 && (i = {}),
            o === void 0 &&
              (o = function () {
                return !0;
              }),
            a === void 0 && (a = !1),
            An(this, void 0, void 0, function () {
              var s, l, u, c, f, d, p, g, y, b, m;
              return In(this, function (h) {
                return (
                  (s = su(t)),
                  (l = Mp(t)),
                  (u = Op(l)),
                  (c = this.collectSelectionsToResolve(s, u)),
                  (f = s.operation),
                  (d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query"),
                  (p = this),
                  (g = p.cache),
                  (y = p.client),
                  (b = {
                    fragmentMap: u,
                    context: F(F({}, r), { cache: g, client: y }),
                    variables: i,
                    fragmentMatcher: o,
                    defaultOperationType: d,
                    exportedVariables: {},
                    selectionsToResolve: c,
                    onlyRunForcedResolvers: a,
                  }),
                  (m = !1),
                  [
                    2,
                    this.resolveSelectionSet(s.selectionSet, m, n, b).then(
                      function (v) {
                        return {
                          result: v,
                          exportedVariables: b.exportedVariables,
                        };
                      }
                    ),
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.resolveSelectionSet = function (t, n, r, i) {
          return An(this, void 0, void 0, function () {
            var o,
              a,
              s,
              l,
              u,
              c = this;
            return In(this, function (f) {
              return (
                (o = i.fragmentMap),
                (a = i.context),
                (s = i.variables),
                (l = [r]),
                (u = function (d) {
                  return An(c, void 0, void 0, function () {
                    var p, g;
                    return In(this, function (y) {
                      return !n && !i.selectionsToResolve.has(d)
                        ? [2]
                        : iu(d, s)
                        ? Vr(d)
                          ? [
                              2,
                              this.resolveField(d, n, r, i).then(function (b) {
                                var m;
                                typeof b < "u" &&
                                  l.push(((m = {}), (m[$r(d)] = b), m));
                              }),
                            ]
                          : (hD(d)
                              ? (p = d)
                              : ((p = o[d.name.value]),
                                __DEV__
                                  ? H(
                                      p,
                                      "No fragment named ".concat(d.name.value)
                                    )
                                  : H(p, 11)),
                            p &&
                            p.typeCondition &&
                            ((g = p.typeCondition.name.value),
                            i.fragmentMatcher(r, g, a))
                              ? [
                                  2,
                                  this.resolveSelectionSet(
                                    p.selectionSet,
                                    n,
                                    r,
                                    i
                                  ).then(function (b) {
                                    l.push(b);
                                  }),
                                ]
                              : [2])
                        : [2];
                    });
                  });
                }),
                [
                  2,
                  Promise.all(t.selections.map(u)).then(function () {
                    return jp(l);
                  }),
                ]
              );
            });
          });
        }),
        (e.prototype.resolveField = function (t, n, r, i) {
          return An(this, void 0, void 0, function () {
            var o,
              a,
              s,
              l,
              u,
              c,
              f,
              d,
              p,
              g = this;
            return In(this, function (y) {
              return r
                ? ((o = i.variables),
                  (a = t.name.value),
                  (s = $r(t)),
                  (l = a !== s),
                  (u = r[s] || r[a]),
                  (c = Promise.resolve(u)),
                  (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) &&
                    ((f = r.__typename || i.defaultOperationType),
                    (d = this.resolvers && this.resolvers[f]),
                    d &&
                      ((p = d[l ? a : s]),
                      p &&
                        (c = Promise.resolve(
                          Up.withValue(this.cache, p, [
                            r,
                            ou(t, o),
                            i.context,
                            { field: t, fragmentMap: i.fragmentMap },
                          ])
                        )))),
                  [
                    2,
                    c.then(function (b) {
                      var m, h;
                      if (
                        (b === void 0 && (b = u),
                        t.directives &&
                          t.directives.forEach(function (x) {
                            x.name.value === "export" &&
                              x.arguments &&
                              x.arguments.forEach(function (E) {
                                E.name.value === "as" &&
                                  E.value.kind === "StringValue" &&
                                  (i.exportedVariables[E.value.value] = b);
                              });
                          }),
                        !t.selectionSet || b == null)
                      )
                        return b;
                      var v =
                        (h =
                          (m = t.directives) === null || m === void 0
                            ? void 0
                            : m.some(function (x) {
                                return x.name.value === "client";
                              })) !== null && h !== void 0
                          ? h
                          : !1;
                      if (Array.isArray(b))
                        return g.resolveSubSelectedArray(t, n || v, b, i);
                      if (t.selectionSet)
                        return g.resolveSelectionSet(
                          t.selectionSet,
                          n || v,
                          b,
                          i
                        );
                    }),
                  ])
                : [2, null];
            });
          });
        }),
        (e.prototype.resolveSubSelectedArray = function (t, n, r, i) {
          var o = this;
          return Promise.all(
            r.map(function (a) {
              if (a === null) return null;
              if (Array.isArray(a))
                return o.resolveSubSelectedArray(t, n, a, i);
              if (t.selectionSet)
                return o.resolveSelectionSet(t.selectionSet, n, a, i);
            })
          );
        }),
        (e.prototype.collectSelectionsToResolve = function (t, n) {
          var r = function (a) {
              return !Array.isArray(a);
            },
            i = this.selectionsToResolveCache;
          function o(a) {
            if (!i.has(a)) {
              var s = new Set();
              i.set(a, s),
                En(a, {
                  Directive: function (l, u, c, f, d) {
                    l.name.value === "client" &&
                      d.forEach(function (p) {
                        r(p) && Av(p) && s.add(p);
                      });
                  },
                  FragmentSpread: function (l, u, c, f, d) {
                    var p = n[l.name.value];
                    __DEV__
                      ? H(p, "No fragment named ".concat(l.name.value))
                      : H(p, 12);
                    var g = o(p);
                    g.size > 0 &&
                      (d.forEach(function (y) {
                        r(y) && Av(y) && s.add(y);
                      }),
                      s.add(l),
                      g.forEach(function (y) {
                        s.add(y);
                      }));
                  },
                });
            }
            return i.get(a);
          }
          return o(t);
        }),
        e
      );
    })(),
    gi = new (Qr ? WeakMap : Map)();
  function dc(e, t) {
    var n = e[t];
    typeof n == "function" &&
      (e[t] = function () {
        return gi.set(e, (gi.get(e) + 1) % 1e15), n.apply(this, arguments);
      });
  }
  function by(e) {
    e.notifyTimeout &&
      (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
  }
  var pc = (function () {
    function e(t, n) {
      n === void 0 && (n = t.generateQueryId()),
        (this.queryId = n),
        (this.listeners = new Set()),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.subscriptions = new Set()),
        (this.stopped = !1),
        (this.dirty = !1),
        (this.observableQuery = null);
      var r = (this.cache = t.cache);
      gi.has(r) ||
        (gi.set(r, 0), dc(r, "evict"), dc(r, "modify"), dc(r, "reset"));
    }
    return (
      (e.prototype.init = function (t) {
        var n = t.networkStatus || se.loading;
        return (
          this.variables &&
            this.networkStatus !== se.loading &&
            !Ne(this.variables, t.variables) &&
            (n = se.setVariables),
          Ne(t.variables, this.variables) || (this.lastDiff = void 0),
          Object.assign(this, {
            document: t.document,
            variables: t.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: n,
          }),
          t.observableQuery && this.setObservableQuery(t.observableQuery),
          t.lastRequestId && (this.lastRequestId = t.lastRequestId),
          this
        );
      }),
      (e.prototype.reset = function () {
        by(this), (this.dirty = !1);
      }),
      (e.prototype.getDiff = function (t) {
        t === void 0 && (t = this.variables);
        var n = this.getDiffOptions(t);
        if (this.lastDiff && Ne(n, this.lastDiff.options))
          return this.lastDiff.diff;
        this.updateWatch((this.variables = t));
        var r = this.observableQuery;
        if (r && r.options.fetchPolicy === "no-cache") return { complete: !1 };
        var i = this.cache.diff(n);
        return this.updateLastDiff(i, n), i;
      }),
      (e.prototype.updateLastDiff = function (t, n) {
        this.lastDiff = t
          ? { diff: t, options: n || this.getDiffOptions() }
          : void 0;
      }),
      (e.prototype.getDiffOptions = function (t) {
        var n;
        return (
          t === void 0 && (t = this.variables),
          {
            query: this.document,
            variables: t,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults:
              (n = this.observableQuery) === null || n === void 0
                ? void 0
                : n.options.canonizeResults,
          }
        );
      }),
      (e.prototype.setDiff = function (t) {
        var n = this,
          r = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(t),
          !this.dirty &&
            !Ne(r && r.result, t && t.result) &&
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return n.notify();
              }, 0)));
      }),
      (e.prototype.setObservableQuery = function (t) {
        var n = this;
        t !== this.observableQuery &&
          (this.oqListener && this.listeners.delete(this.oqListener),
          (this.observableQuery = t),
          t
            ? ((t.queryInfo = this),
              this.listeners.add(
                (this.oqListener = function () {
                  var r = n.getDiff();
                  r.fromOptimisticTransaction ? t.observe() : Rx(t);
                })
              ))
            : delete this.oqListener);
      }),
      (e.prototype.notify = function () {
        var t = this;
        by(this),
          this.shouldNotify() &&
            this.listeners.forEach(function (n) {
              return n(t);
            }),
          (this.dirty = !1);
      }),
      (e.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) return !1;
        if (ka(this.networkStatus) && this.observableQuery) {
          var t = this.observableQuery.options.fetchPolicy;
          if (t !== "cache-only" && t !== "cache-and-network") return !1;
        }
        return !0;
      }),
      (e.prototype.stop = function () {
        if (!this.stopped) {
          (this.stopped = !0),
            this.reset(),
            this.cancel(),
            (this.cancel = e.prototype.cancel),
            this.subscriptions.forEach(function (n) {
              return n.unsubscribe();
            });
          var t = this.observableQuery;
          t && t.stopPolling();
        }
      }),
      (e.prototype.cancel = function () {}),
      (e.prototype.updateWatch = function (t) {
        var n = this;
        t === void 0 && (t = this.variables);
        var r = this.observableQuery;
        if (!(r && r.options.fetchPolicy === "no-cache")) {
          var i = F(F({}, this.getDiffOptions(t)), {
            watcher: this,
            callback: function (o) {
              return n.setDiff(o);
            },
          });
          (!this.lastWatch || !Ne(i, this.lastWatch)) &&
            (this.cancel(),
            (this.cancel = this.cache.watch((this.lastWatch = i))));
        }
      }),
      (e.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
      }),
      (e.prototype.shouldWrite = function (t, n) {
        var r = this.lastWrite;
        return !(
          r &&
          r.dmCount === gi.get(this.cache) &&
          Ne(n, r.variables) &&
          Ne(t.data, r.result.data)
        );
      }),
      (e.prototype.markResult = function (t, n, r, i) {
        var o = this,
          a = new ir(),
          s = on(t.errors) ? t.errors.slice(0) : [];
        if ((this.reset(), "incremental" in t && on(t.incremental))) {
          var l = sx(this.getDiff().result, t);
          t.data = l;
        } else if ("hasNext" in t && t.hasNext) {
          var u = this.getDiff();
          t.data = a.merge(u.result, t.data);
        }
        (this.graphQLErrors = s),
          r.fetchPolicy === "no-cache"
            ? this.updateLastDiff(
                { result: t.data, complete: !0 },
                this.getDiffOptions(r.variables)
              )
            : i !== 0 &&
              (id(t, r.errorPolicy)
                ? this.cache.performTransaction(function (c) {
                    if (o.shouldWrite(t, r.variables))
                      c.writeQuery({
                        query: n,
                        data: t.data,
                        variables: r.variables,
                        overwrite: i === 1,
                      }),
                        (o.lastWrite = {
                          result: t,
                          variables: r.variables,
                          dmCount: gi.get(o.cache),
                        });
                    else if (o.lastDiff && o.lastDiff.diff.complete) {
                      t.data = o.lastDiff.diff.result;
                      return;
                    }
                    var f = o.getDiffOptions(r.variables),
                      d = c.diff(f);
                    o.stopped || o.updateWatch(r.variables),
                      o.updateLastDiff(d, f),
                      d.complete && (t.data = d.result);
                  })
                : (this.lastWrite = void 0));
      }),
      (e.prototype.markReady = function () {
        return (this.networkError = null), (this.networkStatus = se.ready);
      }),
      (e.prototype.markError = function (t) {
        return (
          (this.networkStatus = se.error),
          (this.lastWrite = void 0),
          this.reset(),
          t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors),
          t.networkError && (this.networkError = t.networkError),
          t
        );
      }),
      e
    );
  })();
  function id(e, t) {
    t === void 0 && (t = "none");
    var n = t === "ignore" || t === "all",
      r = !Ls(e);
    return !r && n && e.data && (r = !0), r;
  }
  var vR = Object.prototype.hasOwnProperty,
    yR = (function () {
      function e(t) {
        var n = t.cache,
          r = t.link,
          i = t.defaultOptions,
          o = t.queryDeduplication,
          a = o === void 0 ? !1 : o,
          s = t.onBroadcast,
          l = t.ssrMode,
          u = l === void 0 ? !1 : l,
          c = t.clientAwareness,
          f = c === void 0 ? {} : c,
          d = t.localState,
          p = t.assumeImmutableResults;
        (this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new (Qr ? WeakMap : Map)()),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new Map()),
          (this.cache = n),
          (this.link = r),
          (this.defaultOptions = i || Object.create(null)),
          (this.queryDeduplication = a),
          (this.clientAwareness = f),
          (this.localState = d || new Ax({ cache: n })),
          (this.ssrMode = u),
          (this.assumeImmutableResults = !!p),
          (this.onBroadcast = s) && (this.mutationStore = Object.create(null));
      }
      return (
        (e.prototype.stop = function () {
          var t = this;
          this.queries.forEach(function (n, r) {
            t.stopQueryNoBroadcast(r);
          }),
            this.cancelPendingFetches(
              __DEV__
                ? new ie("QueryManager stopped while query was in flight")
                : new ie(14)
            );
        }),
        (e.prototype.cancelPendingFetches = function (t) {
          this.fetchCancelFns.forEach(function (n) {
            return n(t);
          }),
            this.fetchCancelFns.clear();
        }),
        (e.prototype.mutate = function (t) {
          var n,
            r,
            i = t.mutation,
            o = t.variables,
            a = t.optimisticResponse,
            s = t.updateQueries,
            l = t.refetchQueries,
            u = l === void 0 ? [] : l,
            c = t.awaitRefetchQueries,
            f = c === void 0 ? !1 : c,
            d = t.update,
            p = t.onQueryUpdated,
            g = t.fetchPolicy,
            y =
              g === void 0
                ? ((n = this.defaultOptions.mutate) === null || n === void 0
                    ? void 0
                    : n.fetchPolicy) || "network-only"
                : g,
            b = t.errorPolicy,
            m =
              b === void 0
                ? ((r = this.defaultOptions.mutate) === null || r === void 0
                    ? void 0
                    : r.errorPolicy) || "none"
                : b,
            h = t.keepRootFields,
            v = t.context;
          return An(this, void 0, void 0, function () {
            var x, E, _, C, N, M;
            return In(this, function (P) {
              switch (P.label) {
                case 0:
                  return (
                    __DEV__
                      ? H(
                          i,
                          "mutation option is required. You must specify your GraphQL document in the mutation option."
                        )
                      : H(i, 15),
                    __DEV__
                      ? H(
                          y === "network-only" || y === "no-cache",
                          "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                        )
                      : H(y === "network-only" || y === "no-cache", 16),
                    (x = this.generateMutationId()),
                    (E = this.transform(i)),
                    (_ = E.document),
                    (C = E.hasClientExports),
                    (i = this.cache.transformForLink(_)),
                    (o = this.getVariables(i, o)),
                    C
                      ? [4, this.localState.addExportedVariables(i, o, v)]
                      : [3, 2]
                  );
                case 1:
                  (o = P.sent()), (P.label = 2);
                case 2:
                  return (
                    (N =
                      this.mutationStore &&
                      (this.mutationStore[x] = {
                        mutation: i,
                        variables: o,
                        loading: !0,
                        error: null,
                      })),
                    a &&
                      this.markMutationOptimistic(a, {
                        mutationId: x,
                        document: i,
                        variables: o,
                        fetchPolicy: y,
                        errorPolicy: m,
                        context: v,
                        updateQueries: s,
                        update: d,
                        keepRootFields: h,
                      }),
                    this.broadcastQueries(),
                    (M = this),
                    [
                      2,
                      new Promise(function (L, B) {
                        return ic(
                          M.getObservableFromLink(
                            i,
                            F(F({}, v), { optimisticResponse: a }),
                            o,
                            !1
                          ),
                          function (D) {
                            if (Ls(D) && m === "none")
                              throw new Jr({ graphQLErrors: Uf(D) });
                            N && ((N.loading = !1), (N.error = null));
                            var k = F({}, D);
                            return (
                              typeof u == "function" && (u = u(k)),
                              m === "ignore" && Ls(k) && delete k.errors,
                              M.markMutationResult({
                                mutationId: x,
                                result: k,
                                document: i,
                                variables: o,
                                fetchPolicy: y,
                                errorPolicy: m,
                                context: v,
                                update: d,
                                updateQueries: s,
                                awaitRefetchQueries: f,
                                refetchQueries: u,
                                removeOptimistic: a ? x : void 0,
                                onQueryUpdated: p,
                                keepRootFields: h,
                              })
                            );
                          }
                        ).subscribe({
                          next: function (D) {
                            M.broadcastQueries(),
                              (!("hasNext" in D) || D.hasNext === !1) && L(D);
                          },
                          error: function (D) {
                            N && ((N.loading = !1), (N.error = D)),
                              a && M.cache.removeOptimistic(x),
                              M.broadcastQueries(),
                              B(
                                D instanceof Jr
                                  ? D
                                  : new Jr({ networkError: D })
                              );
                          },
                        });
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.markMutationResult = function (t, n) {
          var r = this;
          n === void 0 && (n = this.cache);
          var i = t.result,
            o = [],
            a = t.fetchPolicy === "no-cache";
          if (!a && id(i, t.errorPolicy)) {
            if (
              (Di(i) ||
                o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: t.document,
                  variables: t.variables,
                }),
              Di(i) && on(i.incremental))
            ) {
              var s = n.diff({
                  id: "ROOT_MUTATION",
                  query: this.transform(t.document).asQuery,
                  variables: t.variables,
                  optimistic: !1,
                  returnPartialData: !0,
                }),
                l = void 0;
              s.result && (l = sx(s.result, i)),
                typeof l < "u" &&
                  ((i.data = l),
                  o.push({
                    result: l,
                    dataId: "ROOT_MUTATION",
                    query: t.document,
                    variables: t.variables,
                  }));
            }
            var u = t.updateQueries;
            u &&
              this.queries.forEach(function (f, d) {
                var p = f.observableQuery,
                  g = p && p.queryName;
                if (!(!g || !vR.call(u, g))) {
                  var y = u[g],
                    b = r.queries.get(d),
                    m = b.document,
                    h = b.variables,
                    v = n.diff({
                      query: m,
                      variables: h,
                      returnPartialData: !0,
                      optimistic: !1,
                    }),
                    x = v.result,
                    E = v.complete;
                  if (E && x) {
                    var _ = y(x, {
                      mutationResult: i,
                      queryName: (m && Bf(m)) || void 0,
                      queryVariables: h,
                    });
                    _ &&
                      o.push({
                        result: _,
                        dataId: "ROOT_QUERY",
                        query: m,
                        variables: h,
                      });
                  }
                }
              });
          }
          if (
            o.length > 0 ||
            t.refetchQueries ||
            t.update ||
            t.onQueryUpdated ||
            t.removeOptimistic
          ) {
            var c = [];
            if (
              (this.refetchQueries({
                updateCache: function (f) {
                  a ||
                    o.forEach(function (y) {
                      return f.write(y);
                    });
                  var d = t.update,
                    p = !FD(i) || (Di(i) && !i.hasNext);
                  if (d) {
                    if (!a) {
                      var g = f.diff({
                        id: "ROOT_MUTATION",
                        query: r.transform(t.document).asQuery,
                        variables: t.variables,
                        optimistic: !1,
                        returnPartialData: !0,
                      });
                      g.complete &&
                        ((i = F(F({}, i), { data: g.result })),
                        "incremental" in i && delete i.incremental,
                        "hasNext" in i && delete i.hasNext);
                    }
                    p &&
                      d(f, i, { context: t.context, variables: t.variables });
                  }
                  !a &&
                    !t.keepRootFields &&
                    p &&
                    f.modify({
                      id: "ROOT_MUTATION",
                      fields: function (y, b) {
                        var m = b.fieldName,
                          h = b.DELETE;
                        return m === "__typename" ? y : h;
                      },
                    });
                },
                include: t.refetchQueries,
                optimistic: !1,
                removeOptimistic: t.removeOptimistic,
                onQueryUpdated: t.onQueryUpdated || null,
              }).forEach(function (f) {
                return c.push(f);
              }),
              t.awaitRefetchQueries || t.onQueryUpdated)
            )
              return Promise.all(c).then(function () {
                return i;
              });
          }
          return Promise.resolve(i);
        }),
        (e.prototype.markMutationOptimistic = function (t, n) {
          var r = this,
            i = typeof t == "function" ? t(n.variables) : t;
          return this.cache.recordOptimisticTransaction(function (o) {
            try {
              r.markMutationResult(F(F({}, n), { result: { data: i } }), o);
            } catch (a) {
              __DEV__ && H.error(a);
            }
          }, n.mutationId);
        }),
        (e.prototype.fetchQuery = function (t, n, r) {
          return this.fetchQueryObservable(t, n, r).promise;
        }),
        (e.prototype.getQueryStore = function () {
          var t = Object.create(null);
          return (
            this.queries.forEach(function (n, r) {
              t[r] = {
                variables: n.variables,
                networkStatus: n.networkStatus,
                networkError: n.networkError,
                graphQLErrors: n.graphQLErrors,
              };
            }),
            t
          );
        }),
        (e.prototype.resetErrors = function (t) {
          var n = this.queries.get(t);
          n && ((n.networkError = void 0), (n.graphQLErrors = []));
        }),
        (e.prototype.transform = function (t) {
          var n = this.transformCache;
          if (!n.has(t)) {
            var r = this.cache.transformDocument(t),
              i = wD(r),
              o = this.localState.clientQuery(r),
              a = i && this.localState.serverQuery(i),
              s = {
                document: r,
                hasClientExports: KM(r),
                hasForcedResolvers: this.localState.shouldForceResolvers(r),
                clientQuery: o,
                serverQuery: a,
                defaultVars: Dp(La(r)),
                asQuery: F(F({}, r), {
                  definitions: r.definitions.map(function (u) {
                    return u.kind === "OperationDefinition" &&
                      u.operation !== "query"
                      ? F(F({}, u), { operation: "query" })
                      : u;
                  }),
                }),
              },
              l = function (u) {
                u && !n.has(u) && n.set(u, s);
              };
            l(t), l(r), l(o), l(a);
          }
          return n.get(t);
        }),
        (e.prototype.getVariables = function (t, n) {
          return F(F({}, this.transform(t).defaultVars), n);
        }),
        (e.prototype.watchQuery = function (t) {
          (t = F(F({}, t), {
            variables: this.getVariables(t.query, t.variables),
          })),
            typeof t.notifyOnNetworkStatusChange > "u" &&
              (t.notifyOnNetworkStatusChange = !1);
          var n = new pc(this),
            r = new rd({ queryManager: this, queryInfo: n, options: t });
          return (
            this.queries.set(r.queryId, n),
            n.init({
              document: r.query,
              observableQuery: r,
              variables: r.variables,
            }),
            r
          );
        }),
        (e.prototype.query = function (t, n) {
          var r = this;
          return (
            n === void 0 && (n = this.generateQueryId()),
            __DEV__
              ? H(
                  t.query,
                  "query option is required. You must specify your GraphQL document in the query option."
                )
              : H(t.query, 17),
            __DEV__
              ? H(
                  t.query.kind === "Document",
                  'You must wrap the query string in a "gql" tag.'
                )
              : H(t.query.kind === "Document", 18),
            __DEV__
              ? H(
                  !t.returnPartialData,
                  "returnPartialData option only supported on watchQuery."
                )
              : H(!t.returnPartialData, 19),
            __DEV__
              ? H(
                  !t.pollInterval,
                  "pollInterval option only supported on watchQuery."
                )
              : H(!t.pollInterval, 20),
            this.fetchQuery(n, t).finally(function () {
              return r.stopQuery(n);
            })
          );
        }),
        (e.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        }),
        (e.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        }),
        (e.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        }),
        (e.prototype.stopQueryInStore = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryInStoreNoBroadcast = function (t) {
          var n = this.queries.get(t);
          n && n.stop();
        }),
        (e.prototype.clearStore = function (t) {
          return (
            t === void 0 && (t = { discardWatches: !0 }),
            this.cancelPendingFetches(
              __DEV__
                ? new ie(
                    "Store reset while query was in flight (not completed in link chain)"
                  )
                : new ie(21)
            ),
            this.queries.forEach(function (n) {
              n.observableQuery ? (n.networkStatus = se.loading) : n.stop();
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(t)
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          var n = this;
          t === void 0 && (t = "active");
          var r = new Map(),
            i = new Map(),
            o = new Set();
          return (
            Array.isArray(t) &&
              t.forEach(function (a) {
                typeof a == "string"
                  ? i.set(a, !1)
                  : tD(a)
                  ? i.set(n.transform(a).document, !1)
                  : ve(a) && a.query && o.add(a);
              }),
            this.queries.forEach(function (a, s) {
              var l = a.observableQuery,
                u = a.document;
              if (l) {
                if (t === "all") {
                  r.set(s, l);
                  return;
                }
                var c = l.queryName,
                  f = l.options.fetchPolicy;
                if (f === "standby" || (t === "active" && !l.hasObservers()))
                  return;
                (t === "active" || (c && i.has(c)) || (u && i.has(u))) &&
                  (r.set(s, l), c && i.set(c, !0), u && i.set(u, !0));
              }
            }),
            o.size &&
              o.forEach(function (a) {
                var s = Qf("legacyOneTimeQuery"),
                  l = n
                    .getQuery(s)
                    .init({ document: a.query, variables: a.variables }),
                  u = new rd({
                    queryManager: n,
                    queryInfo: l,
                    options: F(F({}, a), { fetchPolicy: "network-only" }),
                  });
                H(u.queryId === s), l.setObservableQuery(u), r.set(s, u);
              }),
            __DEV__ &&
              i.size &&
              i.forEach(function (a, s) {
                a ||
                  (__DEV__ &&
                    H.warn(
                      "Unknown query "
                        .concat(typeof s == "string" ? "named " : "")
                        .concat(
                          JSON.stringify(s, null, 2),
                          " requested in refetchQueries options.include array"
                        )
                    ));
              }),
            r
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          var n = this;
          t === void 0 && (t = !1);
          var r = [];
          return (
            this.getObservableQueries(t ? "all" : "active").forEach(function (
              i,
              o
            ) {
              var a = i.options.fetchPolicy;
              i.resetLastResults(),
                (t || (a !== "standby" && a !== "cache-only")) &&
                  r.push(i.refetch()),
                n.getQuery(o).setDiff(null);
            }),
            this.broadcastQueries(),
            Promise.all(r)
          );
        }),
        (e.prototype.setObservableQuery = function (t) {
          this.getQuery(t.queryId).setObservableQuery(t);
        }),
        (e.prototype.startGraphQLSubscription = function (t) {
          var n = this,
            r = t.query,
            i = t.fetchPolicy,
            o = t.errorPolicy,
            a = t.variables,
            s = t.context,
            l = s === void 0 ? {} : s;
          (r = this.transform(r).document), (a = this.getVariables(r, a));
          var u = function (f) {
            return n.getObservableFromLink(r, l, f).map(function (d) {
              i !== "no-cache" &&
                (id(d, o) &&
                  n.cache.write({
                    query: r,
                    result: d.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: f,
                  }),
                n.broadcastQueries());
              var p = Ls(d),
                g = t8(d);
              if (p || g) {
                var y = {};
                throw (
                  (p && (y.graphQLErrors = d.errors),
                  g && (y.protocolErrors = d.extensions[zp]),
                  new Jr(y))
                );
              }
              return d;
            });
          };
          if (this.transform(r).hasClientExports) {
            var c = this.localState.addExportedVariables(r, a, l).then(u);
            return new de(function (f) {
              var d = null;
              return (
                c.then(function (p) {
                  return (d = p.subscribe(f));
                }, f.error),
                function () {
                  return d && d.unsubscribe();
                }
              );
            });
          }
          return u(a);
        }),
        (e.prototype.stopQuery = function (t) {
          this.stopQueryNoBroadcast(t), this.broadcastQueries();
        }),
        (e.prototype.stopQueryNoBroadcast = function (t) {
          this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
        }),
        (e.prototype.removeQuery = function (t) {
          this.fetchCancelFns.delete(t),
            this.queries.has(t) &&
              (this.getQuery(t).stop(), this.queries.delete(t));
        }),
        (e.prototype.broadcastQueries = function () {
          this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (t) {
              return t.notify();
            });
        }),
        (e.prototype.getLocalState = function () {
          return this.localState;
        }),
        (e.prototype.getObservableFromLink = function (t, n, r, i) {
          var o = this,
            a;
          i === void 0 &&
            (i =
              (a = n == null ? void 0 : n.queryDeduplication) !== null &&
              a !== void 0
                ? a
                : this.queryDeduplication);
          var s,
            l = this.transform(t).serverQuery;
          if (l) {
            var u = this,
              c = u.inFlightLinkObservables,
              f = u.link,
              d = {
                query: l,
                variables: r,
                operationName: Bf(l) || void 0,
                context: this.prepareContext(F(F({}, n), { forceFetch: !i })),
              };
            if (((n = d.context), i)) {
              var p = c.get(l) || new Map();
              c.set(l, p);
              var g = Dr(r);
              if (((s = p.get(g)), !s)) {
                var y = new ni([Wf(f, d)]);
                p.set(g, (s = y)),
                  y.beforeNext(function () {
                    p.delete(g) && p.size < 1 && c.delete(l);
                  });
              }
            } else s = new ni([Wf(f, d)]);
          } else
            (s = new ni([de.of({ data: {} })])), (n = this.prepareContext(n));
          var b = this.transform(t).clientQuery;
          return (
            b &&
              (s = ic(s, function (m) {
                return o.localState.runResolvers({
                  document: b,
                  remoteResult: m,
                  context: n,
                  variables: r,
                });
              })),
            s
          );
        }),
        (e.prototype.getResultsFromLink = function (t, n, r) {
          var i = (t.lastRequestId = this.generateRequestId()),
            o = this.cache.transformForLink(
              this.transform(t.document).document
            );
          return ic(
            this.getObservableFromLink(o, r.context, r.variables),
            function (a) {
              var s = Uf(a),
                l = s.length > 0;
              if (i >= t.lastRequestId) {
                if (l && r.errorPolicy === "none")
                  throw t.markError(new Jr({ graphQLErrors: s }));
                t.markResult(a, o, r, n), t.markReady();
              }
              var u = { data: a.data, loading: !1, networkStatus: se.ready };
              return (
                l &&
                  r.errorPolicy !== "ignore" &&
                  ((u.errors = s), (u.networkStatus = se.error)),
                u
              );
            },
            function (a) {
              var s = n8(a) ? a : new Jr({ networkError: a });
              throw (i >= t.lastRequestId && t.markError(s), s);
            }
          );
        }),
        (e.prototype.fetchQueryObservable = function (t, n, r) {
          return this.fetchConcastWithInfo(t, n, r).concast;
        }),
        (e.prototype.fetchConcastWithInfo = function (t, n, r) {
          var i = this;
          r === void 0 && (r = se.loading);
          var o = this.transform(n.query).document,
            a = this.getVariables(o, n.variables),
            s = this.getQuery(t),
            l = this.defaultOptions.watchQuery,
            u = n.fetchPolicy,
            c = u === void 0 ? (l && l.fetchPolicy) || "cache-first" : u,
            f = n.errorPolicy,
            d = f === void 0 ? (l && l.errorPolicy) || "none" : f,
            p = n.returnPartialData,
            g = p === void 0 ? !1 : p,
            y = n.notifyOnNetworkStatusChange,
            b = y === void 0 ? !1 : y,
            m = n.context,
            h = m === void 0 ? {} : m,
            v = Object.assign({}, n, {
              query: o,
              variables: a,
              fetchPolicy: c,
              errorPolicy: d,
              returnPartialData: g,
              notifyOnNetworkStatusChange: b,
              context: h,
            }),
            x = function (M) {
              v.variables = M;
              var P = i.fetchQueryByPolicy(s, v, r);
              return (
                v.fetchPolicy !== "standby" &&
                  P.sources.length > 0 &&
                  s.observableQuery &&
                  s.observableQuery.applyNextFetchPolicy("after-fetch", n),
                P
              );
            },
            E = function () {
              return i.fetchCancelFns.delete(t);
            };
          this.fetchCancelFns.set(t, function (M) {
            E(),
              setTimeout(function () {
                return _.cancel(M);
              });
          });
          var _, C;
          if (this.transform(v.query).hasClientExports)
            (_ = new ni(
              this.localState
                .addExportedVariables(v.query, v.variables, v.context)
                .then(x)
                .then(function (M) {
                  return M.sources;
                })
            )),
              (C = !0);
          else {
            var N = x(v.variables);
            (C = N.fromLink), (_ = new ni(N.sources));
          }
          return _.promise.then(E, E), { concast: _, fromLink: C };
        }),
        (e.prototype.refetchQueries = function (t) {
          var n = this,
            r = t.updateCache,
            i = t.include,
            o = t.optimistic,
            a = o === void 0 ? !1 : o,
            s = t.removeOptimistic,
            l = s === void 0 ? (a ? Qf("refetchQueries") : void 0) : s,
            u = t.onQueryUpdated,
            c = new Map();
          i &&
            this.getObservableQueries(i).forEach(function (d, p) {
              c.set(p, { oq: d, lastDiff: n.getQuery(p).getDiff() });
            });
          var f = new Map();
          return (
            r &&
              this.cache.batch({
                update: r,
                optimistic: (a && l) || !1,
                removeOptimistic: l,
                onWatchUpdated: function (d, p, g) {
                  var y = d.watcher instanceof pc && d.watcher.observableQuery;
                  if (y) {
                    if (u) {
                      c.delete(y.queryId);
                      var b = u(y, p, g);
                      return (
                        b === !0 && (b = y.refetch()),
                        b !== !1 && f.set(y, b),
                        b
                      );
                    }
                    u !== null &&
                      c.set(y.queryId, { oq: y, lastDiff: g, diff: p });
                  }
                },
              }),
            c.size &&
              c.forEach(function (d, p) {
                var g = d.oq,
                  y = d.lastDiff,
                  b = d.diff,
                  m;
                if (u) {
                  if (!b) {
                    var h = g.queryInfo;
                    h.reset(), (b = h.getDiff());
                  }
                  m = u(g, b, y);
                }
                (!u || m === !0) && (m = g.refetch()),
                  m !== !1 && f.set(g, m),
                  p.indexOf("legacyOneTimeQuery") >= 0 &&
                    n.stopQueryNoBroadcast(p);
              }),
            l && this.cache.removeOptimistic(l),
            f
          );
        }),
        (e.prototype.fetchQueryByPolicy = function (t, n, r) {
          var i = this,
            o = n.query,
            a = n.variables,
            s = n.fetchPolicy,
            l = n.refetchWritePolicy,
            u = n.errorPolicy,
            c = n.returnPartialData,
            f = n.context,
            d = n.notifyOnNetworkStatusChange,
            p = t.networkStatus;
          t.init({
            document: this.transform(o).document,
            variables: a,
            networkStatus: r,
          });
          var g = function () {
              return t.getDiff(a);
            },
            y = function (x, E) {
              E === void 0 && (E = t.networkStatus || se.loading);
              var _ = x.result;
              __DEV__ && !c && !Ne(_, {}) && jx(x.missing);
              var C = function (N) {
                return de.of(
                  F(
                    { data: N, loading: ka(E), networkStatus: E },
                    x.complete ? null : { partial: !0 }
                  )
                );
              };
              return _ && i.transform(o).hasForcedResolvers
                ? i.localState
                    .runResolvers({
                      document: o,
                      remoteResult: { data: _ },
                      context: f,
                      variables: a,
                      onlyRunForcedResolvers: !0,
                    })
                    .then(function (N) {
                      return C(N.data || void 0);
                    })
                : u === "none" && E === se.refetch && Array.isArray(x.missing)
                ? C(void 0)
                : C(_);
            },
            b =
              s === "no-cache" ? 0 : r === se.refetch && l !== "merge" ? 1 : 2,
            m = function () {
              return i.getResultsFromLink(t, b, {
                variables: a,
                context: f,
                fetchPolicy: s,
                errorPolicy: u,
              });
            },
            h = d && typeof p == "number" && p !== r && ka(r);
          switch (s) {
            default:
            case "cache-first": {
              var v = g();
              return v.complete
                ? { fromLink: !1, sources: [y(v, t.markReady())] }
                : c || h
                ? { fromLink: !0, sources: [y(v), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-and-network": {
              var v = g();
              return v.complete || c || h
                ? { fromLink: !0, sources: [y(v), m()] }
                : { fromLink: !0, sources: [m()] };
            }
            case "cache-only":
              return { fromLink: !1, sources: [y(g(), t.markReady())] };
            case "network-only":
              return h
                ? { fromLink: !0, sources: [y(g()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "no-cache":
              return h
                ? { fromLink: !0, sources: [y(t.getDiff()), m()] }
                : { fromLink: !0, sources: [m()] };
            case "standby":
              return { fromLink: !1, sources: [] };
          }
        }),
        (e.prototype.getQuery = function (t) {
          return (
            t && !this.queries.has(t) && this.queries.set(t, new pc(this, t)),
            this.queries.get(t)
          );
        }),
        (e.prototype.prepareContext = function (t) {
          t === void 0 && (t = {});
          var n = this.localState.prepareContext(t);
          return F(F({}, n), { clientAwareness: this.clientAwareness });
        }),
        e
      );
    })(),
    Sy = !1,
    gR = (function () {
      function e(t) {
        var n = this;
        (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
        var r = t.uri,
          i = t.credentials,
          o = t.headers,
          a = t.cache,
          s = t.ssrMode,
          l = s === void 0 ? !1 : s,
          u = t.ssrForceFetchDelay,
          c = u === void 0 ? 0 : u,
          f = t.connectToDevTools,
          d =
            f === void 0
              ? typeof window == "object" &&
                !window.__APOLLO_CLIENT__ &&
                __DEV__
              : f,
          p = t.queryDeduplication,
          g = p === void 0 ? !0 : p,
          y = t.defaultOptions,
          b = t.assumeImmutableResults,
          m = b === void 0 ? !1 : b,
          h = t.resolvers,
          v = t.typeDefs,
          x = t.fragmentMatcher,
          E = t.name,
          _ = t.version,
          C = t.link;
        if (
          (C ||
            (C = r
              ? new x8({ uri: r, credentials: i, headers: o })
              : Ba.empty()),
          !a)
        )
          throw __DEV__
            ? new ie(`To initialize Apollo Client, you must specify a 'cache' property in the options object. 
For more information, please visit: https://go.apollo.dev/c/docs`)
            : new ie(9);
        if (
          ((this.link = C),
          (this.cache = a),
          (this.disableNetworkFetches = l || c > 0),
          (this.queryDeduplication = g),
          (this.defaultOptions = y || Object.create(null)),
          (this.typeDefs = v),
          c &&
            setTimeout(function () {
              return (n.disableNetworkFetches = !1);
            }, c),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries =
            this.reFetchObservableQueries.bind(this)),
          d && typeof window == "object" && (window.__APOLLO_CLIENT__ = this),
          !Sy &&
            d &&
            __DEV__ &&
            ((Sy = !0),
            typeof window < "u" &&
              window.document &&
              window.top === window.self &&
              !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
        ) {
          var N = window.navigator,
            M = N && N.userAgent,
            P = void 0;
          typeof M == "string" &&
            (M.indexOf("Chrome/") > -1
              ? (P =
                  "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
              : M.indexOf("Firefox/") > -1 &&
                (P =
                  "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
            P &&
              __DEV__ &&
              H.log(
                "Download the Apollo DevTools for a better development experience: " +
                  P
              );
        }
        (this.version = UD),
          (this.localState = new Ax({
            cache: a,
            client: this,
            resolvers: h,
            fragmentMatcher: x,
          })),
          (this.queryManager = new yR({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: g,
            ssrMode: l,
            clientAwareness: { name: E, version: _ },
            localState: this.localState,
            assumeImmutableResults: m,
            onBroadcast: d
              ? function () {
                  n.devToolsHookCb &&
                    n.devToolsHookCb({
                      action: {},
                      state: {
                        queries: n.queryManager.getQueryStore(),
                        mutations: n.queryManager.mutationStore || {},
                      },
                      dataWithOptimisticResults: n.cache.extract(!0),
                    });
                }
              : void 0,
          }));
      }
      return (
        (e.prototype.stop = function () {
          this.queryManager.stop();
        }),
        (e.prototype.watchQuery = function (t) {
          return (
            this.defaultOptions.watchQuery &&
              (t = oc(this.defaultOptions.watchQuery, t)),
            this.disableNetworkFetches &&
              (t.fetchPolicy === "network-only" ||
                t.fetchPolicy === "cache-and-network") &&
              (t = F(F({}, t), { fetchPolicy: "cache-first" })),
            this.queryManager.watchQuery(t)
          );
        }),
        (e.prototype.query = function (t) {
          return (
            this.defaultOptions.query && (t = oc(this.defaultOptions.query, t)),
            __DEV__
              ? H(
                  t.fetchPolicy !== "cache-and-network",
                  "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
                )
              : H(t.fetchPolicy !== "cache-and-network", 10),
            this.disableNetworkFetches &&
              t.fetchPolicy === "network-only" &&
              (t = F(F({}, t), { fetchPolicy: "cache-first" })),
            this.queryManager.query(t)
          );
        }),
        (e.prototype.mutate = function (t) {
          return (
            this.defaultOptions.mutate &&
              (t = oc(this.defaultOptions.mutate, t)),
            this.queryManager.mutate(t)
          );
        }),
        (e.prototype.subscribe = function (t) {
          return this.queryManager.startGraphQLSubscription(t);
        }),
        (e.prototype.readQuery = function (t, n) {
          return n === void 0 && (n = !1), this.cache.readQuery(t, n);
        }),
        (e.prototype.readFragment = function (t, n) {
          return n === void 0 && (n = !1), this.cache.readFragment(t, n);
        }),
        (e.prototype.writeQuery = function (t) {
          var n = this.cache.writeQuery(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (e.prototype.writeFragment = function (t) {
          var n = this.cache.writeFragment(t);
          return t.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }),
        (e.prototype.__actionHookForDevTools = function (t) {
          this.devToolsHookCb = t;
        }),
        (e.prototype.__requestRaw = function (t) {
          return Wf(this.link, t);
        }),
        (e.prototype.resetStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !1 });
            })
            .then(function () {
              return Promise.all(
                t.resetStoreCallbacks.map(function (n) {
                  return n();
                })
              );
            })
            .then(function () {
              return t.reFetchObservableQueries();
            });
        }),
        (e.prototype.clearStore = function () {
          var t = this;
          return Promise.resolve()
            .then(function () {
              return t.queryManager.clearStore({ discardWatches: !0 });
            })
            .then(function () {
              return Promise.all(
                t.clearStoreCallbacks.map(function (n) {
                  return n();
                })
              );
            });
        }),
        (e.prototype.onResetStore = function (t) {
          var n = this;
          return (
            this.resetStoreCallbacks.push(t),
            function () {
              n.resetStoreCallbacks = n.resetStoreCallbacks.filter(function (
                r
              ) {
                return r !== t;
              });
            }
          );
        }),
        (e.prototype.onClearStore = function (t) {
          var n = this;
          return (
            this.clearStoreCallbacks.push(t),
            function () {
              n.clearStoreCallbacks = n.clearStoreCallbacks.filter(function (
                r
              ) {
                return r !== t;
              });
            }
          );
        }),
        (e.prototype.reFetchObservableQueries = function (t) {
          return this.queryManager.reFetchObservableQueries(t);
        }),
        (e.prototype.refetchQueries = function (t) {
          var n = this.queryManager.refetchQueries(t),
            r = [],
            i = [];
          n.forEach(function (a, s) {
            r.push(s), i.push(a);
          });
          var o = Promise.all(i);
          return (
            (o.queries = r),
            (o.results = i),
            o.catch(function (a) {
              __DEV__ &&
                H.debug(
                  "In client.refetchQueries, Promise.all promise rejected with error ".concat(
                    a
                  )
                );
            }),
            o
          );
        }),
        (e.prototype.getObservableQueries = function (t) {
          return (
            t === void 0 && (t = "active"),
            this.queryManager.getObservableQueries(t)
          );
        }),
        (e.prototype.extract = function (t) {
          return this.cache.extract(t);
        }),
        (e.prototype.restore = function (t) {
          return this.cache.restore(t);
        }),
        (e.prototype.addResolvers = function (t) {
          this.localState.addResolvers(t);
        }),
        (e.prototype.setResolvers = function (t) {
          this.localState.setResolvers(t);
        }),
        (e.prototype.getResolvers = function () {
          return this.localState.getResolvers();
        }),
        (e.prototype.setLocalStateFragmentMatcher = function (t) {
          this.localState.setFragmentMatcher(t);
        }),
        (e.prototype.setLink = function (t) {
          this.link = this.queryManager.link = t;
        }),
        e
      );
    })(),
    Ey = Bp ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
  function wR() {
    var e = S.createContext[Ey];
    return (
      e ||
        (Object.defineProperty(S.createContext, Ey, {
          value: (e = S.createContext({})),
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        (e.displayName = "ApolloContext")),
      e
    );
  }
  var xR = function (e) {
    var t = e.client,
      n = e.children,
      r = wR();
    return S.createElement(r.Consumer, null, function (i) {
      return (
        i === void 0 && (i = {}),
        t && i.client !== t && (i = Object.assign({}, i, { client: t })),
        __DEV__
          ? H(
              i.client,
              'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'
            )
          : H(i.client, 29),
        S.createElement(r.Provider, { value: i }, n)
      );
    });
  };
  const bR = new dR({
      typePolicies: {
        Query: {
          fields: {
            user: {
              merge(e, t) {
                return t;
              },
            },
            course: {
              merge(e, t) {
                return t;
              },
            },
            department: {
              merge(e, t) {
                return t;
              },
            },
            program: {
              merge(e, t) {
                return t;
              },
            },
            programType: {
              merge(e, t) {
                return t;
              },
            },
            schedule: {
              merge(e, t) {
                return t;
              },
            },
          },
        },
      },
    }),
    SR = new gR({ uri: "http://localhost:8000/graphql", cache: bR });
  function ER() {
    const e = Je.useRef(),
      t = Je.useRef();
    return w.jsx(xR, {
      client: SR,
      children: w.jsx(k_, {
        children: w.jsx("div", {
          id: "appWindow",
          className: "app-window",
          children: w.jsxs(__, {
            children: [
              w.jsx(uf, {
                path: "/app",
                element: w.jsx(mM, { forwardRef: e }),
              }),
              w.jsx(uf, {
                path: "/api",
                element: w.jsx(NM, { forwardRef: t }),
              }),
            ],
          }),
        }),
      }),
    });
  }
  const _y = document.getElementById("root");
  _y
    ? B0(_y).render(w.jsx(Je.StrictMode, { children: w.jsx(ER, {}) }))
    : console.log("domNode is null");
});
export default _R();
