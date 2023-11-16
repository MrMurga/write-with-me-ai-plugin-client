import * as Dt from "react";
import ee, { useState as Or, createContext as Ng, useContext as wv, useMemo as fL, useRef as No, useEffect as ci, useLayoutEffect as dL, useCallback as Po, useId as BR, forwardRef as Tr, cloneElement as pL, Children as vL, createElement as hO } from "react";
function mL(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Gb = { exports: {} }, mv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yO;
function hL() {
  if (yO)
    return mv;
  yO = 1;
  var i = ee, l = Symbol.for("react.element"), u = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, _ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(O, x, R) {
    var $, D = {}, A = null, z = null;
    R !== void 0 && (A = "" + R), x.key !== void 0 && (A = "" + x.key), x.ref !== void 0 && (z = x.ref);
    for ($ in x)
      d.call(x, $) && !E.hasOwnProperty($) && (D[$] = x[$]);
    if (O && O.defaultProps)
      for ($ in x = O.defaultProps, x)
        D[$] === void 0 && (D[$] = x[$]);
    return { $$typeof: l, type: O, key: A, ref: z, props: D, _owner: _.current };
  }
  return mv.Fragment = u, mv.jsx = y, mv.jsxs = y, mv;
}
var hv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gO;
function yL() {
  return gO || (gO = 1, process.env.NODE_ENV !== "production" && function() {
    var i = ee, l = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), O = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), G = Symbol.iterator, I = "@@iterator";
    function K(P) {
      if (P === null || typeof P != "object")
        return null;
      var ie = G && P[G] || P[I];
      return typeof ie == "function" ? ie : null;
    }
    var de = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function pe(P) {
      {
        for (var ie = arguments.length, ge = new Array(ie > 1 ? ie - 1 : 0), Ve = 1; Ve < ie; Ve++)
          ge[Ve - 1] = arguments[Ve];
        ne("error", P, ge);
      }
    }
    function ne(P, ie, ge) {
      {
        var Ve = de.ReactDebugCurrentFrame, st = Ve.getStackAddendum();
        st !== "" && (ie += "%s", ge = ge.concat([st]));
        var Ot = ge.map(function(ft) {
          return String(ft);
        });
        Ot.unshift("Warning: " + ie), Function.prototype.apply.call(console[P], console, Ot);
      }
    }
    var te = !1, W = !1, Ae = !1, _e = !1, dt = !1, ht;
    ht = Symbol.for("react.module.reference");
    function it(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === d || P === E || dt || P === _ || P === R || P === $ || _e || P === z || te || W || Ae || typeof P == "object" && P !== null && (P.$$typeof === A || P.$$typeof === D || P.$$typeof === y || P.$$typeof === O || P.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === ht || P.getModuleId !== void 0));
    }
    function ct(P, ie, ge) {
      var Ve = P.displayName;
      if (Ve)
        return Ve;
      var st = ie.displayName || ie.name || "";
      return st !== "" ? ge + "(" + st + ")" : ge;
    }
    function Vt(P) {
      return P.displayName || "Context";
    }
    function ze(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case d:
          return "Fragment";
        case u:
          return "Portal";
        case E:
          return "Profiler";
        case _:
          return "StrictMode";
        case R:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case O:
            var ie = P;
            return Vt(ie) + ".Consumer";
          case y:
            var ge = P;
            return Vt(ge._context) + ".Provider";
          case x:
            return ct(P, P.render, "ForwardRef");
          case D:
            var Ve = P.displayName || null;
            return Ve !== null ? Ve : ze(P.type) || "Memo";
          case A: {
            var st = P, Ot = st._payload, ft = st._init;
            try {
              return ze(ft(Ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, Ct = 0, pt, Bt, fe, $e, H, oe, we;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Le() {
      {
        if (Ct === 0) {
          pt = console.log, Bt = console.info, fe = console.warn, $e = console.error, H = console.group, oe = console.groupCollapsed, we = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        Ct++;
      }
    }
    function nt() {
      {
        if (Ct--, Ct === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, P, {
              value: pt
            }),
            info: Ke({}, P, {
              value: Bt
            }),
            warn: Ke({}, P, {
              value: fe
            }),
            error: Ke({}, P, {
              value: $e
            }),
            group: Ke({}, P, {
              value: H
            }),
            groupCollapsed: Ke({}, P, {
              value: oe
            }),
            groupEnd: Ke({}, P, {
              value: we
            })
          });
        }
        Ct < 0 && pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = de.ReactCurrentDispatcher, Qe;
    function Ge(P, ie, ge) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (st) {
            var Ve = st.stack.trim().match(/\n( *(at )?)/);
            Qe = Ve && Ve[1] || "";
          }
        return `
` + Qe + P;
      }
    }
    var et = !1, rt;
    {
      var Nt = typeof WeakMap == "function" ? WeakMap : Map;
      rt = new Nt();
    }
    function ve(P, ie) {
      if (!P || et)
        return "";
      {
        var ge = rt.get(P);
        if (ge !== void 0)
          return ge;
      }
      var Ve;
      et = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ot;
      Ot = ke.current, ke.current = null, Le();
      try {
        if (ie) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (Rt) {
              Ve = Rt;
            }
            Reflect.construct(P, [], ft);
          } else {
            try {
              ft.call();
            } catch (Rt) {
              Ve = Rt;
            }
            P.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            Ve = Rt;
          }
          P();
        }
      } catch (Rt) {
        if (Rt && Ve && typeof Rt.stack == "string") {
          for (var Ye = Rt.stack.split(`
`), zn = Ve.stack.split(`
`), an = Ye.length - 1, on = zn.length - 1; an >= 1 && on >= 0 && Ye[an] !== zn[on]; )
            on--;
          for (; an >= 1 && on >= 0; an--, on--)
            if (Ye[an] !== zn[on]) {
              if (an !== 1 || on !== 1)
                do
                  if (an--, on--, on < 0 || Ye[an] !== zn[on]) {
                    var vr = `
` + Ye[an].replace(" at new ", " at ");
                    return P.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", P.displayName)), typeof P == "function" && rt.set(P, vr), vr;
                  }
                while (an >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        et = !1, ke.current = Ot, nt(), Error.prepareStackTrace = st;
      }
      var Wi = P ? P.displayName || P.name : "", Ws = Wi ? Ge(Wi) : "";
      return typeof P == "function" && rt.set(P, Ws), Ws;
    }
    function Lt(P, ie, ge) {
      return ve(P, !1);
    }
    function yn(P) {
      var ie = P.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function En(P, ie, ge) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return ve(P, yn(P));
      if (typeof P == "string")
        return Ge(P);
      switch (P) {
        case R:
          return Ge("Suspense");
        case $:
          return Ge("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case x:
            return Lt(P.render);
          case D:
            return En(P.type, ie, ge);
          case A: {
            var Ve = P, st = Ve._payload, Ot = Ve._init;
            try {
              return En(Ot(st), ie, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var ar = Object.prototype.hasOwnProperty, ir = {}, oa = de.ReactDebugCurrentFrame;
    function Pa(P) {
      if (P) {
        var ie = P._owner, ge = En(P.type, P._source, ie ? ie.type : null);
        oa.setExtraStackFrame(ge);
      } else
        oa.setExtraStackFrame(null);
    }
    function fi(P, ie, ge, Ve, st) {
      {
        var Ot = Function.call.bind(ar);
        for (var ft in P)
          if (Ot(P, ft)) {
            var Ye = void 0;
            try {
              if (typeof P[ft] != "function") {
                var zn = Error((Ve || "React class") + ": " + ge + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              Ye = P[ft](ie, ft, Ve, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              Ye = an;
            }
            Ye && !(Ye instanceof Error) && (Pa(st), pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", ge, ft, typeof Ye), Pa(null)), Ye instanceof Error && !(Ye.message in ir) && (ir[Ye.message] = !0, Pa(st), pe("Failed %s type: %s", ge, Ye.message), Pa(null));
          }
      }
    }
    var Qa = Array.isArray;
    function Da(P) {
      return Qa(P);
    }
    function Ir(P) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, ge = ie && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return ge;
      }
    }
    function Ga(P) {
      try {
        return Vr(P), !1;
      } catch {
        return !0;
      }
    }
    function Vr(P) {
      return "" + P;
    }
    function Na(P) {
      if (Ga(P))
        return pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ir(P)), Vr(P);
    }
    var wn = de.ReactCurrentOwner, Br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vi, $a, ye;
    ye = {};
    function Fe(P) {
      if (ar.call(P, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function vt(P) {
      if (ar.call(P, "key")) {
        var ie = Object.getOwnPropertyDescriptor(P, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function At(P, ie) {
      if (typeof P.ref == "string" && wn.current && ie && wn.current.stateNode !== ie) {
        var ge = ze(wn.current.type);
        ye[ge] || (pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ze(wn.current.type), P.ref), ye[ge] = !0);
      }
    }
    function sn(P, ie) {
      {
        var ge = function() {
          Vi || (Vi = !0, pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ge.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function An(P, ie) {
      {
        var ge = function() {
          $a || ($a = !0, pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        ge.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var gn = function(P, ie, ge, Ve, st, Ot, ft) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: P,
        key: ie,
        ref: ge,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: Ot
      };
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function Rr(P, ie, ge, Ve, st) {
      {
        var Ot, ft = {}, Ye = null, zn = null;
        ge !== void 0 && (Na(ge), Ye = "" + ge), vt(ie) && (Na(ie.key), Ye = "" + ie.key), Fe(ie) && (zn = ie.ref, At(ie, st));
        for (Ot in ie)
          ar.call(ie, Ot) && !Br.hasOwnProperty(Ot) && (ft[Ot] = ie[Ot]);
        if (P && P.defaultProps) {
          var an = P.defaultProps;
          for (Ot in an)
            ft[Ot] === void 0 && (ft[Ot] = an[Ot]);
        }
        if (Ye || zn) {
          var on = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          Ye && sn(ft, on), zn && An(ft, on);
        }
        return gn(P, Ye, zn, st, Ve, wn.current, ft);
      }
    }
    var Kt = de.ReactCurrentOwner, Yr = de.ReactDebugCurrentFrame;
    function Yt(P) {
      if (P) {
        var ie = P._owner, ge = En(P.type, P._source, ie ? ie.type : null);
        Yr.setExtraStackFrame(ge);
      } else
        Yr.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function xl(P) {
      return typeof P == "object" && P !== null && P.$$typeof === l;
    }
    function ko() {
      {
        if (Kt.current) {
          var P = ze(Kt.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function Pl(P) {
      {
        if (P !== void 0) {
          var ie = P.fileName.replace(/^.*[\\\/]/, ""), ge = P.lineNumber;
          return `

Check your code at ` + ie + ":" + ge + ".";
        }
        return "";
      }
    }
    var $u = {};
    function Ys(P) {
      {
        var ie = ko();
        if (!ie) {
          var ge = typeof P == "string" ? P : P.displayName || P.name;
          ge && (ie = `

Check the top-level render call using <` + ge + ">.");
        }
        return ie;
      }
    }
    function Mo(P, ie) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var ge = Ys(ie);
        if ($u[ge])
          return;
        $u[ge] = !0;
        var Ve = "";
        P && P._owner && P._owner !== Kt.current && (Ve = " It was passed a child from " + ze(P._owner.type) + "."), Yt(P), pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Ve), Yt(null);
      }
    }
    function Dl(P, ie) {
      {
        if (typeof P != "object")
          return;
        if (Da(P))
          for (var ge = 0; ge < P.length; ge++) {
            var Ve = P[ge];
            xl(Ve) && Mo(Ve, ie);
          }
        else if (xl(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var st = K(P);
          if (typeof st == "function" && st !== P.entries)
            for (var Ot = st.call(P), ft; !(ft = Ot.next()).done; )
              xl(ft.value) && Mo(ft.value, ie);
        }
      }
    }
    function Lo(P) {
      {
        var ie = P.type;
        if (ie == null || typeof ie == "string")
          return;
        var ge;
        if (typeof ie == "function")
          ge = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === D))
          ge = ie.propTypes;
        else
          return;
        if (ge) {
          var Ve = ze(ie);
          fi(ge, P.props, "prop", Ve, P);
        } else if (ie.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var st = ze(ie);
          pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nl(P) {
      {
        for (var ie = Object.keys(P.props), ge = 0; ge < ie.length; ge++) {
          var Ve = ie[ge];
          if (Ve !== "children" && Ve !== "key") {
            Yt(P), pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), Yt(null);
            break;
          }
        }
        P.ref !== null && (Yt(P), pe("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    function qa(P, ie, ge, Ve, st, Ot) {
      {
        var ft = it(P);
        if (!ft) {
          var Ye = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = Pl(st);
          zn ? Ye += zn : Ye += ko();
          var an;
          P === null ? an = "null" : Da(P) ? an = "array" : P !== void 0 && P.$$typeof === l ? (an = "<" + (ze(P.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : an = typeof P, pe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, Ye);
        }
        var on = Rr(P, ie, ge, st, Ot);
        if (on == null)
          return on;
        if (ft) {
          var vr = ie.children;
          if (vr !== void 0)
            if (Ve)
              if (Da(vr)) {
                for (var Wi = 0; Wi < vr.length; Wi++)
                  Dl(vr[Wi], P);
                Object.freeze && Object.freeze(vr);
              } else
                pe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dl(vr, P);
        }
        return P === d ? Nl(on) : Lo(on), on;
      }
    }
    function Bi(P, ie, ge) {
      return qa(P, ie, ge, !0);
    }
    function Wr(P, ie, ge) {
      return qa(P, ie, ge, !1);
    }
    var ka = Wr, Yi = Bi;
    hv.Fragment = d, hv.jsx = ka, hv.jsxs = Yi;
  }()), hv;
}
process.env.NODE_ENV === "production" ? Gb.exports = hL() : Gb.exports = yL();
var wt = Gb.exports;
const gL = "_mainContainer_17qic_2", SL = "_input_17qic_9", _L = "_requestStatusStyle_17qic_16", bL = "_accordionLabel_17qic_20", EL = "_closeButton_17qic_24", Ff = {
  mainContainer: gL,
  input: SL,
  requestStatusStyle: _L,
  accordionLabel: bL,
  closeButton: EL
};
var xo = function() {
  return xo = Object.assign || function(l) {
    for (var u, d = 1, _ = arguments.length; d < _; d++) {
      u = arguments[d];
      for (var E in u)
        Object.prototype.hasOwnProperty.call(u, E) && (l[E] = u[E]);
    }
    return l;
  }, xo.apply(this, arguments);
};
function YR(i, l) {
  var u = {};
  for (var d in i)
    Object.prototype.hasOwnProperty.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var _ = 0, d = Object.getOwnPropertySymbols(i); _ < d.length; _++)
      l.indexOf(d[_]) < 0 && Object.prototype.propertyIsEnumerable.call(i, d[_]) && (u[d[_]] = i[d[_]]);
  return u;
}
function wL(i, l, u) {
  if (u || arguments.length === 2)
    for (var d = 0, _ = l.length, E; d < _; d++)
      (E || !(d in l)) && (E || (E = Array.prototype.slice.call(l, 0, d)), E[d] = l[d]);
  return i.concat(E || Array.prototype.slice.call(l));
}
var Ay = "right-scroll-bar-position", zy = "width-before-scroll-bar", CL = "with-scroll-bars-hidden", OL = "--removed-body-scroll-bar-size";
function TL(i, l) {
  return typeof i == "function" ? i(l) : i && (i.current = l), i;
}
function RL(i, l) {
  var u = Or(function() {
    return {
      // value
      value: i,
      // last callback
      callback: l,
      // "memoized" public interface
      facade: {
        get current() {
          return u.value;
        },
        set current(d) {
          var _ = u.value;
          _ !== d && (u.value = d, u.callback(d, _));
        }
      }
    };
  })[0];
  return u.callback = l, u.facade;
}
function xL(i, l) {
  return RL(l || null, function(u) {
    return i.forEach(function(d) {
      return TL(d, u);
    });
  });
}
function PL(i) {
  return i;
}
function DL(i, l) {
  l === void 0 && (l = PL);
  var u = [], d = !1, _ = {
    read: function() {
      if (d)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return u.length ? u[u.length - 1] : i;
    },
    useMedium: function(E) {
      var y = l(E, d);
      return u.push(y), function() {
        u = u.filter(function(O) {
          return O !== y;
        });
      };
    },
    assignSyncMedium: function(E) {
      for (d = !0; u.length; ) {
        var y = u;
        u = [], y.forEach(E);
      }
      u = {
        push: function(O) {
          return E(O);
        },
        filter: function() {
          return u;
        }
      };
    },
    assignMedium: function(E) {
      d = !0;
      var y = [];
      if (u.length) {
        var O = u;
        u = [], O.forEach(E), y = u;
      }
      var x = function() {
        var $ = y;
        y = [], $.forEach(E);
      }, R = function() {
        return Promise.resolve().then(x);
      };
      R(), u = {
        push: function($) {
          y.push($), R();
        },
        filter: function($) {
          return y = y.filter($), u;
        }
      };
    }
  };
  return _;
}
function NL(i) {
  i === void 0 && (i = {});
  var l = DL(null);
  return l.options = xo({ async: !0, ssr: !1 }, i), l;
}
var WR = function(i) {
  var l = i.sideCar, u = YR(i, ["sideCar"]);
  if (!l)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var d = l.read();
  if (!d)
    throw new Error("Sidecar medium not found");
  return Dt.createElement(d, xo({}, u));
};
WR.isSideCarExport = !0;
function $L(i, l) {
  return i.useMedium(l), WR;
}
var QR = NL(), _b = function() {
}, $g = Dt.forwardRef(function(i, l) {
  var u = Dt.useRef(null), d = Dt.useState({
    onScrollCapture: _b,
    onWheelCapture: _b,
    onTouchMoveCapture: _b
  }), _ = d[0], E = d[1], y = i.forwardProps, O = i.children, x = i.className, R = i.removeScrollBar, $ = i.enabled, D = i.shards, A = i.sideCar, z = i.noIsolation, G = i.inert, I = i.allowPinchZoom, K = i.as, de = K === void 0 ? "div" : K, pe = i.gapMode, ne = YR(i, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), te = A, W = xL([u, l]), Ae = xo(xo({}, ne), _);
  return Dt.createElement(
    Dt.Fragment,
    null,
    $ && Dt.createElement(te, { sideCar: QR, removeScrollBar: R, shards: D, noIsolation: z, inert: G, setCallbacks: E, allowPinchZoom: !!I, lockRef: u, gapMode: pe }),
    y ? Dt.cloneElement(Dt.Children.only(O), xo(xo({}, Ae), { ref: W })) : Dt.createElement(de, xo({}, Ae, { className: x, ref: W }), O)
  );
});
$g.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
$g.classNames = {
  fullWidth: zy,
  zeroRight: Ay
};
var SO, kL = function() {
  if (SO)
    return SO;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ML() {
  if (!document)
    return null;
  var i = document.createElement("style");
  i.type = "text/css";
  var l = kL();
  return l && i.setAttribute("nonce", l), i;
}
function LL(i, l) {
  i.styleSheet ? i.styleSheet.cssText = l : i.appendChild(document.createTextNode(l));
}
function AL(i) {
  var l = document.head || document.getElementsByTagName("head")[0];
  l.appendChild(i);
}
var zL = function() {
  var i = 0, l = null;
  return {
    add: function(u) {
      i == 0 && (l = ML()) && (LL(l, u), AL(l)), i++;
    },
    remove: function() {
      i--, !i && l && (l.parentNode && l.parentNode.removeChild(l), l = null);
    }
  };
}, jL = function() {
  var i = zL();
  return function(l, u) {
    Dt.useEffect(function() {
      return i.add(l), function() {
        i.remove();
      };
    }, [l && u]);
  };
}, GR = function() {
  var i = jL(), l = function(u) {
    var d = u.styles, _ = u.dynamic;
    return i(d, _), null;
  };
  return l;
}, UL = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bb = function(i) {
  return parseInt(i || "", 10) || 0;
}, FL = function(i) {
  var l = window.getComputedStyle(document.body), u = l[i === "padding" ? "paddingLeft" : "marginLeft"], d = l[i === "padding" ? "paddingTop" : "marginTop"], _ = l[i === "padding" ? "paddingRight" : "marginRight"];
  return [bb(u), bb(d), bb(_)];
}, HL = function(i) {
  if (i === void 0 && (i = "margin"), typeof window > "u")
    return UL;
  var l = FL(i), u = document.documentElement.clientWidth, d = window.innerWidth;
  return {
    left: l[0],
    top: l[1],
    right: l[2],
    gap: Math.max(0, d - u + l[2] - l[0])
  };
}, IL = GR(), VL = function(i, l, u, d) {
  var _ = i.left, E = i.top, y = i.right, O = i.gap;
  return u === void 0 && (u = "margin"), `
  .`.concat(CL, ` {
   overflow: hidden `).concat(d, `;
   padding-right: `).concat(O, "px ").concat(d, `;
  }
  body {
    overflow: hidden `).concat(d, `;
    overscroll-behavior: contain;
    `).concat([
    l && "position: relative ".concat(d, ";"),
    u === "margin" && `
    padding-left: `.concat(_, `px;
    padding-top: `).concat(E, `px;
    padding-right: `).concat(y, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(O, "px ").concat(d, `;
    `),
    u === "padding" && "padding-right: ".concat(O, "px ").concat(d, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ay, ` {
    right: `).concat(O, "px ").concat(d, `;
  }
  
  .`).concat(zy, ` {
    margin-right: `).concat(O, "px ").concat(d, `;
  }
  
  .`).concat(Ay, " .").concat(Ay, ` {
    right: 0 `).concat(d, `;
  }
  
  .`).concat(zy, " .").concat(zy, ` {
    margin-right: 0 `).concat(d, `;
  }
  
  body {
    `).concat(OL, ": ").concat(O, `px;
  }
`);
}, BL = function(i) {
  var l = i.noRelative, u = i.noImportant, d = i.gapMode, _ = d === void 0 ? "margin" : d, E = Dt.useMemo(function() {
    return HL(_);
  }, [_]);
  return Dt.createElement(IL, { styles: VL(E, !l, _, u ? "" : "!important") });
}, qb = !1;
if (typeof window < "u")
  try {
    var Ty = Object.defineProperty({}, "passive", {
      get: function() {
        return qb = !0, !0;
      }
    });
    window.addEventListener("test", Ty, Ty), window.removeEventListener("test", Ty, Ty);
  } catch {
    qb = !1;
  }
var Hf = qb ? { passive: !1 } : !1, YL = function(i) {
  return i.tagName === "TEXTAREA";
}, qR = function(i, l) {
  var u = window.getComputedStyle(i);
  return (
    // not-not-scrollable
    u[l] !== "hidden" && // contains scroll inside self
    !(u.overflowY === u.overflowX && !YL(i) && u[l] === "visible")
  );
}, WL = function(i) {
  return qR(i, "overflowY");
}, QL = function(i) {
  return qR(i, "overflowX");
}, _O = function(i, l) {
  var u = l.ownerDocument, d = l;
  do {
    typeof ShadowRoot < "u" && d instanceof ShadowRoot && (d = d.host);
    var _ = XR(i, d);
    if (_) {
      var E = KR(i, d), y = E[1], O = E[2];
      if (y > O)
        return !0;
    }
    d = d.parentNode;
  } while (d && d !== u.body);
  return !1;
}, GL = function(i) {
  var l = i.scrollTop, u = i.scrollHeight, d = i.clientHeight;
  return [
    l,
    u,
    d
  ];
}, qL = function(i) {
  var l = i.scrollLeft, u = i.scrollWidth, d = i.clientWidth;
  return [
    l,
    u,
    d
  ];
}, XR = function(i, l) {
  return i === "v" ? WL(l) : QL(l);
}, KR = function(i, l) {
  return i === "v" ? GL(l) : qL(l);
}, XL = function(i, l) {
  return i === "h" && l === "rtl" ? -1 : 1;
}, KL = function(i, l, u, d, _) {
  var E = XL(i, window.getComputedStyle(l).direction), y = E * d, O = u.target, x = l.contains(O), R = !1, $ = y > 0, D = 0, A = 0;
  do {
    var z = KR(i, O), G = z[0], I = z[1], K = z[2], de = I - K - E * G;
    (G || de) && XR(i, O) && (D += de, A += G), O instanceof ShadowRoot ? O = O.host : O = O.parentNode;
  } while (
    // portaled content
    !x && O !== document.body || // self content
    x && (l.contains(O) || l === O)
  );
  return ($ && (_ && Math.abs(D) < 1 || !_ && y > D) || !$ && (_ && Math.abs(A) < 1 || !_ && -y > A)) && (R = !0), R;
}, Ry = function(i) {
  return "changedTouches" in i ? [i.changedTouches[0].clientX, i.changedTouches[0].clientY] : [0, 0];
}, bO = function(i) {
  return [i.deltaX, i.deltaY];
}, EO = function(i) {
  return i && "current" in i ? i.current : i;
}, ZL = function(i, l) {
  return i[0] === l[0] && i[1] === l[1];
}, JL = function(i) {
  return `
  .block-interactivity-`.concat(i, ` {pointer-events: none;}
  .allow-interactivity-`).concat(i, ` {pointer-events: all;}
`);
}, eA = 0, If = [];
function tA(i) {
  var l = Dt.useRef([]), u = Dt.useRef([0, 0]), d = Dt.useRef(), _ = Dt.useState(eA++)[0], E = Dt.useState(GR)[0], y = Dt.useRef(i);
  Dt.useEffect(function() {
    y.current = i;
  }, [i]), Dt.useEffect(function() {
    if (i.inert) {
      document.body.classList.add("block-interactivity-".concat(_));
      var I = wL([i.lockRef.current], (i.shards || []).map(EO), !0).filter(Boolean);
      return I.forEach(function(K) {
        return K.classList.add("allow-interactivity-".concat(_));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(_)), I.forEach(function(K) {
          return K.classList.remove("allow-interactivity-".concat(_));
        });
      };
    }
  }, [i.inert, i.lockRef.current, i.shards]);
  var O = Dt.useCallback(function(I, K) {
    if ("touches" in I && I.touches.length === 2)
      return !y.current.allowPinchZoom;
    var de = Ry(I), pe = u.current, ne = "deltaX" in I ? I.deltaX : pe[0] - de[0], te = "deltaY" in I ? I.deltaY : pe[1] - de[1], W, Ae = I.target, _e = Math.abs(ne) > Math.abs(te) ? "h" : "v";
    if ("touches" in I && _e === "h" && Ae.type === "range")
      return !1;
    var dt = _O(_e, Ae);
    if (!dt)
      return !0;
    if (dt ? W = _e : (W = _e === "v" ? "h" : "v", dt = _O(_e, Ae)), !dt)
      return !1;
    if (!d.current && "changedTouches" in I && (ne || te) && (d.current = W), !W)
      return !0;
    var ht = d.current || W;
    return KL(ht, K, I, ht === "h" ? ne : te, !0);
  }, []), x = Dt.useCallback(function(I) {
    var K = I;
    if (!(!If.length || If[If.length - 1] !== E)) {
      var de = "deltaY" in K ? bO(K) : Ry(K), pe = l.current.filter(function(W) {
        return W.name === K.type && (W.target === K.target || K.target === W.shadowParent) && ZL(W.delta, de);
      })[0];
      if (pe && pe.should) {
        K.cancelable && K.preventDefault();
        return;
      }
      if (!pe) {
        var ne = (y.current.shards || []).map(EO).filter(Boolean).filter(function(W) {
          return W.contains(K.target);
        }), te = ne.length > 0 ? O(K, ne[0]) : !y.current.noIsolation;
        te && K.cancelable && K.preventDefault();
      }
    }
  }, []), R = Dt.useCallback(function(I, K, de, pe) {
    var ne = { name: I, delta: K, target: de, should: pe, shadowParent: nA(de) };
    l.current.push(ne), setTimeout(function() {
      l.current = l.current.filter(function(te) {
        return te !== ne;
      });
    }, 1);
  }, []), $ = Dt.useCallback(function(I) {
    u.current = Ry(I), d.current = void 0;
  }, []), D = Dt.useCallback(function(I) {
    R(I.type, bO(I), I.target, O(I, i.lockRef.current));
  }, []), A = Dt.useCallback(function(I) {
    R(I.type, Ry(I), I.target, O(I, i.lockRef.current));
  }, []);
  Dt.useEffect(function() {
    return If.push(E), i.setCallbacks({
      onScrollCapture: D,
      onWheelCapture: D,
      onTouchMoveCapture: A
    }), document.addEventListener("wheel", x, Hf), document.addEventListener("touchmove", x, Hf), document.addEventListener("touchstart", $, Hf), function() {
      If = If.filter(function(I) {
        return I !== E;
      }), document.removeEventListener("wheel", x, Hf), document.removeEventListener("touchmove", x, Hf), document.removeEventListener("touchstart", $, Hf);
    };
  }, []);
  var z = i.removeScrollBar, G = i.inert;
  return Dt.createElement(
    Dt.Fragment,
    null,
    G ? Dt.createElement(E, { styles: JL(_) }) : null,
    z ? Dt.createElement(BL, { gapMode: i.gapMode }) : null
  );
}
function nA(i) {
  for (var l = null; i !== null; )
    i instanceof ShadowRoot && (l = i.host, i = i.host), i = i.parentNode;
  return l;
}
const rA = $L(QR, tA);
var ZR = Dt.forwardRef(function(i, l) {
  return Dt.createElement($g, xo({}, i, { ref: l, sideCar: rA }));
});
ZR.classNames = $g.classNames;
const aA = ZR;
function Do(i) {
  return Object.keys(i);
}
var iA = Object.defineProperty, wO = Object.getOwnPropertySymbols, oA = Object.prototype.hasOwnProperty, lA = Object.prototype.propertyIsEnumerable, CO = (i, l, u) => l in i ? iA(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, uA = (i, l) => {
  for (var u in l || (l = {}))
    oA.call(l, u) && CO(i, u, l[u]);
  if (wO)
    for (var u of wO(l))
      lA.call(l, u) && CO(i, u, l[u]);
  return i;
};
function Eb(i) {
  return i && typeof i == "object" && !Array.isArray(i);
}
function oE(i, l) {
  const u = uA({}, i), d = l;
  return Eb(i) && Eb(l) && Object.keys(l).forEach((_) => {
    Eb(d[_]) && _ in i ? u[_] = oE(u[_], d[_]) : u[_] = d[_];
  }), u;
}
function sA(i) {
  return i.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
}
function cA(i) {
  var l;
  return typeof i != "string" || !i.includes("var(--mantine-scale)") ? i : (l = i.match(/^calc\((.*?)\)$/)) == null ? void 0 : l[1].split("*")[0].trim();
}
function fA(i) {
  const l = cA(i);
  return typeof l == "number" ? l : typeof l == "string" ? l.includes("calc") || l.includes("var") ? l : l.includes("px") ? Number(l.replace("px", "")) : l.includes("rem") ? Number(l.replace("rem", "")) * 16 : l.includes("em") ? Number(l.replace("em", "")) * 16 : Number(l) : NaN;
}
function wb(i) {
  return `calc(${i} * var(--mantine-scale))`;
}
function JR(i, { shouldScale: l = !1 } = {}) {
  return (u) => {
    if (u === 0 || u === "0")
      return "0";
    if (typeof u == "number") {
      const d = `${u / 16}${i}`;
      return l ? wb(d) : d;
    }
    if (typeof u == "string") {
      if (u.includes("calc(") || u.includes("var("))
        return u;
      if (u.includes(i))
        return l ? wb(u) : u;
      const d = u.replace("px", "");
      if (!Number.isNaN(Number(d))) {
        const _ = `${Number(d) / 16}${i}`;
        return l ? wb(_) : _;
      }
    }
    return u;
  };
}
const ue = JR("rem", { shouldScale: !0 }), OO = JR("em");
function lE(i) {
  return Object.keys(i).reduce((l, u) => (i[u] !== void 0 && (l[u] = i[u]), l), {});
}
function ex(i) {
  return typeof i == "number" ? !0 : typeof i == "string" ? i.startsWith("calc(") || i.startsWith("var(") ? !0 : /[0-9]/.test(i.trim().replace("-", "")[0]) : !1;
}
function dA(i) {
  return Array.isArray(i) || i === null ? !1 : typeof i == "object" ? i.type !== ee.Fragment : !1;
}
function Cv(i) {
  const l = Ng(null);
  return [({ children: _, value: E }) => /* @__PURE__ */ ee.createElement(l.Provider, { value: E }, _), () => {
    const _ = wv(l);
    if (_ === null)
      throw new Error(i);
    return _;
  }];
}
function jy(i, l) {
  return (u) => {
    if (typeof u != "string" || u.trim().length === 0)
      throw new Error(l);
    return `${i}-${u}`;
  };
}
function Xb(i, l) {
  let u = i;
  for (; (u = u.parentElement) && !u.matches(l); )
    ;
  return u;
}
function pA(i, l, u) {
  for (let d = i - 1; d >= 0; d -= 1)
    if (!l[d].disabled)
      return d;
  if (u) {
    for (let d = l.length - 1; d > -1; d -= 1)
      if (!l[d].disabled)
        return d;
  }
  return i;
}
function vA(i, l, u) {
  for (let d = i + 1; d < l.length; d += 1)
    if (!l[d].disabled)
      return d;
  if (u) {
    for (let d = 0; d < l.length; d += 1)
      if (!l[d].disabled)
        return d;
  }
  return i;
}
function mA(i, l, u) {
  return Xb(i, u) === Xb(l, u);
}
function tx({
  parentSelector: i,
  siblingSelector: l,
  onKeyDown: u,
  loop: d = !0,
  activateOnFocus: _ = !1,
  dir: E = "rtl",
  orientation: y
}) {
  return (O) => {
    var x;
    u == null || u(O);
    const R = Array.from(
      ((x = Xb(O.currentTarget, i)) == null ? void 0 : x.querySelectorAll(
        l
      )) || []
    ).filter((I) => mA(O.currentTarget, I, i)), $ = R.findIndex((I) => O.currentTarget === I), D = vA($, R, d), A = pA($, R, d), z = E === "rtl" ? A : D, G = E === "rtl" ? D : A;
    switch (O.key) {
      case "ArrowRight": {
        y === "horizontal" && (O.stopPropagation(), O.preventDefault(), R[z].focus(), _ && R[z].click());
        break;
      }
      case "ArrowLeft": {
        y === "horizontal" && (O.stopPropagation(), O.preventDefault(), R[G].focus(), _ && R[G].click());
        break;
      }
      case "ArrowUp": {
        y === "vertical" && (O.stopPropagation(), O.preventDefault(), R[A].focus(), _ && R[A].click());
        break;
      }
      case "ArrowDown": {
        y === "vertical" && (O.stopPropagation(), O.preventDefault(), R[D].focus(), _ && R[D].click());
        break;
      }
      case "Home": {
        O.stopPropagation(), O.preventDefault(), !R[0].disabled && R[0].focus();
        break;
      }
      case "End": {
        O.stopPropagation(), O.preventDefault();
        const I = R.length - 1;
        !R[I].disabled && R[I].focus();
        break;
      }
    }
  };
}
const hA = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function kg(i) {
  return hA[i];
}
function Ii(i, l = "size", u = !0) {
  if (i !== void 0)
    return ex(i) ? u ? ue(i) : i : `var(--${l}-${i})`;
}
function uE(i) {
  return Ii(i, "mantine-spacing");
}
function Bs(i) {
  return i === void 0 ? "var(--mantine-radius-default)" : Ii(i, "mantine-radius");
}
function Kb(i) {
  return Ii(i, "mantine-font-size");
}
function yA(i) {
  return Ii(i, "mantine-line-height", !1);
}
function nx(i) {
  if (i)
    return Ii(i, "mantine-shadow");
}
function rx(i) {
  var l, u, d = "";
  if (typeof i == "string" || typeof i == "number")
    d += i;
  else if (typeof i == "object")
    if (Array.isArray(i))
      for (l = 0; l < i.length; l++)
        i[l] && (u = rx(i[l])) && (d && (d += " "), d += u);
    else
      for (l in i)
        i[l] && (d && (d += " "), d += l);
  return d;
}
function Ya() {
  for (var i, l, u = 0, d = ""; u < arguments.length; )
    (i = arguments[u++]) && (l = rx(i)) && (d && (d += " "), d += l);
  return d;
}
const gA = {};
function SA(i) {
  const l = {};
  return i.forEach((u) => {
    Object.entries(u).forEach(([d, _]) => {
      l[d] ? l[d] = Ya(l[d], _) : l[d] = _;
    });
  }), l;
}
function sE({ theme: i, classNames: l, props: u, stylesCtx: d }) {
  const E = (Array.isArray(l) ? l : [l]).map(
    (y) => typeof y == "function" ? y(i, u, d) : y || gA
  );
  return SA(E);
}
var _A = Object.defineProperty, TO = Object.getOwnPropertySymbols, bA = Object.prototype.hasOwnProperty, EA = Object.prototype.propertyIsEnumerable, RO = (i, l, u) => l in i ? _A(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, xy = (i, l) => {
  for (var u in l || (l = {}))
    bA.call(l, u) && RO(i, u, l[u]);
  if (TO)
    for (var u of TO(l))
      EA.call(l, u) && RO(i, u, l[u]);
  return i;
};
function Zb({ theme: i, styles: l, props: u, stylesCtx: d }) {
  return (Array.isArray(l) ? l : [l]).reduce((E, y) => typeof y == "function" ? xy(xy({}, E), y(i, u, d)) : xy(xy({}, E), y), {});
}
const wA = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};
function Jb(i, l) {
  return typeof i.primaryShade == "number" ? i.primaryShade : l === "dark" ? i.primaryShade.dark : i.primaryShade.light;
}
function cE({
  color: i,
  theme: l,
  colorScheme: u
}) {
  if (typeof i != "string")
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof i}`);
  if (i === "white" || i === "black")
    return {
      color: i,
      value: i === "white" ? l.white : l.black,
      shade: void 0,
      isThemeColor: !1,
      variable: `--mantine-color-${i}`
    };
  const [d, _] = i.split("."), E = _ ? Number(_) : void 0, y = d in l.colors;
  return y ? {
    color: d,
    value: E !== void 0 ? l.colors[d][E] : l.colors[d][Jb(l, u || "light")],
    shade: E,
    isThemeColor: y,
    variable: _ ? `--mantine-color-${d}-${E}` : `--mantine-color-${d}-filled`
  } : {
    color: i,
    value: i,
    isThemeColor: y,
    shade: E,
    variable: void 0
  };
}
function Vs(i, l) {
  const u = cE({ color: i || l.primaryColor, theme: l });
  return u.variable ? `var(${u.variable})` : i;
}
function eE(i, l) {
  const u = {
    from: (i == null ? void 0 : i.from) || l.defaultGradient.from,
    to: (i == null ? void 0 : i.to) || l.defaultGradient.to,
    deg: (i == null ? void 0 : i.deg) || l.defaultGradient.deg || 0
  }, d = Vs(u.from, l), _ = Vs(u.to, l);
  return `linear-gradient(${u.deg}deg, ${d} 0%, ${_} 100%)`;
}
function CA(i) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(i);
}
function OA(i) {
  let l = i.replace("#", "");
  if (l.length === 3) {
    const y = l.split("");
    l = [
      y[0],
      y[0],
      y[1],
      y[1],
      y[2],
      y[2]
    ].join("");
  }
  const u = parseInt(l, 16), d = u >> 16 & 255, _ = u >> 8 & 255, E = u & 255;
  return {
    r: d,
    g: _,
    b: E,
    a: 1
  };
}
function TA(i) {
  const [l, u, d, _] = i.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: l, g: u, b: d, a: _ || 1 };
}
function RA(i) {
  const l = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, u = i.match(l);
  if (!u)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const d = parseInt(u[1], 10), _ = parseInt(u[2], 10) / 100, E = parseInt(u[3], 10) / 100, y = u[5] ? parseFloat(u[5]) : void 0, O = (1 - Math.abs(2 * E - 1)) * _, x = d / 60, R = O * (1 - Math.abs(x % 2 - 1)), $ = E - O / 2;
  let D, A, z;
  return x >= 0 && x < 1 ? (D = O, A = R, z = 0) : x >= 1 && x < 2 ? (D = R, A = O, z = 0) : x >= 2 && x < 3 ? (D = 0, A = O, z = R) : x >= 3 && x < 4 ? (D = 0, A = R, z = O) : x >= 4 && x < 5 ? (D = R, A = 0, z = O) : (D = O, A = 0, z = R), {
    r: Math.round((D + $) * 255),
    g: Math.round((A + $) * 255),
    b: Math.round((z + $) * 255),
    a: y || 1
  };
}
function ax(i) {
  return CA(i) ? OA(i) : i.startsWith("rgb") ? TA(i) : i.startsWith("hsl") ? RA(i) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Py(i, l) {
  if (i.startsWith("var("))
    return i;
  const { r: u, g: d, b: _, a: E } = ax(i), y = 1 - l, O = (x) => Math.round(x * y);
  return `rgba(${O(u)}, ${O(d)}, ${O(_)}, ${E})`;
}
function ia(i, l) {
  if (typeof i != "string" || l > 1 || l < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: u, g: d, b: _ } = ax(i);
  return `rgba(${u}, ${d}, ${_}, ${l})`;
}
const xA = ({
  color: i,
  theme: l,
  variant: u,
  gradient: d
}) => {
  const _ = cE({ color: i, theme: l });
  if (u === "filled")
    return _.isThemeColor ? _.shade === void 0 ? {
      background: `var(--mantine-color-${i}-filled)`,
      hover: `var(--mantine-color-${i}-filled-hover)`,
      color: "var(--mantine-color-white)",
      border: `${ue(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${_.color}-${_.shade})`,
      hover: `var(--mantine-color-${_.color}-${_.shade === 9 ? 8 : _.shade + 1})`,
      color: "var(--mantine-color-white)",
      border: `${ue(1)} solid transparent`
    } : {
      background: i,
      hover: Py(i, 0.1),
      color: "var(--mantine-color-white)",
      border: `${ue(1)} solid transparent`
    };
  if (u === "light") {
    if (_.isThemeColor) {
      if (_.shade === void 0)
        return {
          background: `var(--mantine-color-${i}-light)`,
          hover: `var(--mantine-color-${i}-light-hover)`,
          color: `var(--mantine-color-${i}-light-color)`,
          border: `${ue(1)} solid transparent`
        };
      const E = l.colors[_.color][_.shade];
      return {
        background: ia(E, 0.1),
        hover: ia(E, 0.12),
        color: `var(--mantine-color-${_.color}-${Math.min(_.shade, 6)})`,
        border: `${ue(1)} solid transparent`
      };
    }
    return {
      background: ia(i, 0.1),
      hover: ia(i, 0.12),
      color: i,
      border: `${ue(1)} solid transparent`
    };
  }
  if (u === "outline")
    return _.isThemeColor ? _.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${i}-outline-hover)`,
      color: `var(--mantine-color-${i}-outline)`,
      border: `${ue(1)} solid var(--mantine-color-${i}-outline)`
    } : {
      background: "transparent",
      hover: ia(l.colors[_.color][_.shade], 0.05),
      color: `var(--mantine-color-${_.color}-${_.shade})`,
      border: `${ue(1)} solid var(--mantine-color-${_.color}-${_.shade})`
    } : {
      background: "transparent",
      hover: ia(i, 0.05),
      color: i,
      border: `${ue(1)} solid ${i}`
    };
  if (u === "subtle") {
    if (_.isThemeColor) {
      if (_.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${i}-light-hover)`,
          color: `var(--mantine-color-${i}-light-color)`,
          border: `${ue(1)} solid transparent`
        };
      const E = l.colors[_.color][_.shade];
      return {
        background: "transparent",
        hover: ia(E, 0.12),
        color: `var(--mantine-color-${_.color}-${Math.min(_.shade, 6)})`,
        border: `${ue(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: ia(i, 0.12),
      color: i,
      border: `${ue(1)} solid transparent`
    };
  }
  return u === "transparent" ? _.isThemeColor ? _.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i}-light-color)`,
    border: `${ue(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${_.color}-${Math.min(_.shade, 6)})`,
    border: `${ue(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: i,
    border: `${ue(1)} solid transparent`
  } : u === "white" ? _.isThemeColor ? _.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Py(l.white, 0.01),
    color: `var(--mantine-color-${i}-filled)`,
    border: `${ue(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Py(l.white, 0.01),
    color: `var(--mantine-color-${_.color}-${_.shade})`,
    border: `${ue(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Py(l.white, 0.01),
    color: i,
    border: `${ue(1)} solid transparent`
  } : u === "gradient" ? {
    background: eE(d, l),
    hover: eE(d, l),
    color: "var(--mantine-color-white)",
    border: "none"
  } : u === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${ue(1)} solid var(--mantine-color-default-border)`
  } : {};
}, xO = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", fE = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: wA,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: xA,
  fontFamily: xO,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: xO,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: ue(34), lineHeight: "1.3" },
      h2: { fontSize: ue(26), lineHeight: "1.35" },
      h3: { fontSize: ue(22), lineHeight: "1.4" },
      h4: { fontSize: ue(18), lineHeight: "1.45" },
      h5: { fontSize: ue(16), lineHeight: "1.5" },
      h6: { fontSize: ue(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: ue(12),
    sm: ue(14),
    md: ue(16),
    lg: ue(18),
    xl: ue(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: ue(2),
    sm: ue(4),
    md: ue(8),
    lg: ue(16),
    xl: ue(32)
  },
  spacing: {
    xs: ue(10),
    sm: ue(12),
    md: ue(16),
    lg: ue(20),
    xl: ue(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${ue(1)} ${ue(3)} rgba(0, 0, 0, 0.05), 0 ${ue(1)} ${ue(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${ue(1)} ${ue(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ue(10)} ${ue(
      15
    )} ${ue(-5)}, rgba(0, 0, 0, 0.04) 0 ${ue(7)} ${ue(7)} ${ue(-5)}`,
    md: `0 ${ue(1)} ${ue(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ue(20)} ${ue(
      25
    )} ${ue(-5)}, rgba(0, 0, 0, 0.04) 0 ${ue(10)} ${ue(10)} ${ue(-5)}`,
    lg: `0 ${ue(1)} ${ue(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ue(28)} ${ue(
      23
    )} ${ue(-7)}, rgba(0, 0, 0, 0.04) 0 ${ue(12)} ${ue(12)} ${ue(-7)}`,
    xl: `0 ${ue(1)} ${ue(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ue(36)} ${ue(
      28
    )} ${ue(-7)}, rgba(0, 0, 0, 0.04) 0 ${ue(17)} ${ue(17)} ${ue(-7)}`
  },
  other: {},
  components: {}
}, PA = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", PO = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Cb(i) {
  return i < 0 || i > 9 ? !1 : parseInt(i.toString(), 10) === i;
}
function DO(i) {
  if (!(i.primaryColor in i.colors))
    throw new Error(PA);
  if (typeof i.primaryShade == "object" && (!Cb(i.primaryShade.dark) || !Cb(i.primaryShade.light)))
    throw new Error(PO);
  if (typeof i.primaryShade == "number" && !Cb(i.primaryShade))
    throw new Error(PO);
}
function DA(i, l) {
  var u;
  if (!l)
    return DO(i), i;
  const d = oE(i, l);
  return l.fontFamily && !((u = l.headings) != null && u.fontFamily) && (d.headings.fontFamily = l.fontFamily), DO(d), d;
}
const dE = Ng(null), NA = () => wv(dE) || fE;
function Nu() {
  const i = wv(dE);
  if (!i)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return i;
}
function ix({
  theme: i,
  children: l,
  inherit: u = !0
}) {
  const d = NA(), _ = fL(
    () => DA(u ? d : fE, i),
    [i, d, u]
  );
  return /* @__PURE__ */ ee.createElement(dE.Provider, { value: _ }, l);
}
ix.displayName = "@mantine/core/MantineThemeProvider";
const $A = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function kA({ theme: i, options: l, unstyled: u }) {
  return Ya(
    (l == null ? void 0 : l.focusable) && !u && (i.focusClassName || $A[i.focusRing]),
    (l == null ? void 0 : l.active) && !u && i.activeClassName
  );
}
function MA({
  themeName: i,
  classNamesPrefix: l,
  selector: u
}) {
  return i.map((d) => `${l}-${d}-${u}`);
}
function LA({
  themeName: i,
  theme: l,
  selector: u,
  props: d,
  stylesCtx: _
}) {
  return i.map(
    (E) => {
      var y, O;
      return (O = sE({
        theme: l,
        classNames: (y = l.components[E]) == null ? void 0 : y.classNames,
        props: d,
        stylesCtx: _
      })) == null ? void 0 : O[u];
    }
  );
}
function AA({
  options: i,
  classes: l,
  selector: u,
  unstyled: d
}) {
  return i != null && i.variant && !d ? l[`${u}--${i.variant}`] : void 0;
}
function zA({ rootSelector: i, selector: l, className: u }) {
  return i === l ? u : void 0;
}
function jA({ selector: i, classes: l, unstyled: u }) {
  return u ? void 0 : l[i];
}
function UA({
  selector: i,
  stylesCtx: l,
  theme: u,
  classNames: d,
  props: _
}) {
  return sE({ theme: u, classNames: d, props: _, stylesCtx: l })[i];
}
function FA({
  selector: i,
  stylesCtx: l,
  options: u,
  props: d,
  theme: _
}) {
  return sE({
    theme: _,
    classNames: u == null ? void 0 : u.classNames,
    props: (u == null ? void 0 : u.props) || d,
    stylesCtx: l
  })[i];
}
function HA({
  theme: i,
  options: l,
  themeName: u,
  selector: d,
  classNamesPrefix: _,
  classNames: E,
  classes: y,
  unstyled: O,
  className: x,
  rootSelector: R,
  props: $,
  stylesCtx: D
}) {
  return Ya(
    kA({ theme: i, options: l, unstyled: O }),
    LA({ theme: i, themeName: u, selector: d, props: $, stylesCtx: D }),
    AA({ options: l, classes: y, selector: d, unstyled: O }),
    UA({ selector: d, stylesCtx: D, theme: i, classNames: E, props: $ }),
    FA({ selector: d, stylesCtx: D, options: l, props: $, theme: i }),
    zA({ rootSelector: R, selector: d, className: x }),
    jA({ selector: d, classes: y, unstyled: O }),
    MA({ themeName: u, classNamesPrefix: _, selector: d }),
    l == null ? void 0 : l.className
  );
}
var IA = Object.defineProperty, NO = Object.getOwnPropertySymbols, VA = Object.prototype.hasOwnProperty, BA = Object.prototype.propertyIsEnumerable, $O = (i, l, u) => l in i ? IA(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, kO = (i, l) => {
  for (var u in l || (l = {}))
    VA.call(l, u) && $O(i, u, l[u]);
  if (NO)
    for (var u of NO(l))
      BA.call(l, u) && $O(i, u, l[u]);
  return i;
};
function YA({
  theme: i,
  themeName: l,
  props: u,
  stylesCtx: d,
  selector: _
}) {
  return l.map(
    (E) => {
      var y;
      return Zb({
        theme: i,
        styles: (y = i.components[E]) == null ? void 0 : y.styles,
        props: u,
        stylesCtx: d
      })[_];
    }
  ).reduce((E, y) => kO(kO({}, E), y), {});
}
var WA = Object.defineProperty, MO = Object.getOwnPropertySymbols, QA = Object.prototype.hasOwnProperty, GA = Object.prototype.propertyIsEnumerable, LO = (i, l, u) => l in i ? WA(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, AO = (i, l) => {
  for (var u in l || (l = {}))
    QA.call(l, u) && LO(i, u, l[u]);
  if (MO)
    for (var u of MO(l))
      GA.call(l, u) && LO(i, u, l[u]);
  return i;
};
function tE({ style: i, theme: l }) {
  return Array.isArray(i) ? [...i].reduce(
    (u, d) => AO(AO({}, u), tE({ style: d, theme: l })),
    {}
  ) : typeof i == "function" ? i(l) : i ?? {};
}
var qA = Object.defineProperty, zO = Object.getOwnPropertySymbols, XA = Object.prototype.hasOwnProperty, KA = Object.prototype.propertyIsEnumerable, jO = (i, l, u) => l in i ? qA(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, UO = (i, l) => {
  for (var u in l || (l = {}))
    XA.call(l, u) && jO(i, u, l[u]);
  if (zO)
    for (var u of zO(l))
      KA.call(l, u) && jO(i, u, l[u]);
  return i;
};
function ZA(i) {
  return i.reduce((l, u) => (u && Object.keys(u).forEach((d) => {
    l[d] = UO(UO({}, l[d]), lE(u[d]));
  }), l), {});
}
function JA({
  vars: i,
  varsResolver: l,
  theme: u,
  props: d,
  stylesCtx: _,
  selector: E,
  themeName: y
}) {
  var O;
  return (O = ZA([
    l == null ? void 0 : l(u, d, _),
    ...y.map((x) => {
      var R, $, D;
      return (D = ($ = (R = u.components) == null ? void 0 : R[x]) == null ? void 0 : $.vars) == null ? void 0 : D.call($, u, d, _);
    }),
    i == null ? void 0 : i(u, d, _)
  ])) == null ? void 0 : O[E];
}
var ez = Object.defineProperty, FO = Object.getOwnPropertySymbols, tz = Object.prototype.hasOwnProperty, nz = Object.prototype.propertyIsEnumerable, HO = (i, l, u) => l in i ? ez(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Vf = (i, l) => {
  for (var u in l || (l = {}))
    tz.call(l, u) && HO(i, u, l[u]);
  if (FO)
    for (var u of FO(l))
      nz.call(l, u) && HO(i, u, l[u]);
  return i;
};
function rz({
  theme: i,
  themeName: l,
  selector: u,
  options: d,
  props: _,
  stylesCtx: E,
  rootSelector: y,
  styles: O,
  style: x,
  vars: R,
  varsResolver: $
}) {
  return Vf(Vf(Vf(Vf(Vf(Vf({}, YA({ theme: i, themeName: l, props: _, stylesCtx: E, selector: u })), Zb({ theme: i, styles: O, props: _, stylesCtx: E })[u]), Zb({ theme: i, styles: d == null ? void 0 : d.styles, props: (d == null ? void 0 : d.props) || _, stylesCtx: E })[u]), JA({ theme: i, props: _, stylesCtx: E, vars: R, varsResolver: $, selector: u, themeName: l })), y === u ? tE({ style: x, theme: i }) : null), tE({ style: d == null ? void 0 : d.style, theme: i }));
}
const ox = Ng(null);
function pE() {
  const i = wv(ox);
  if (!i)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return i;
}
function az() {
  return pE().cssVariablesResolver;
}
function iz() {
  return pE().classNamesPrefix;
}
function vE() {
  return pE().getStyleNonce;
}
function Wa({
  name: i,
  classes: l,
  props: u,
  stylesCtx: d,
  className: _,
  style: E,
  rootSelector: y = "root",
  unstyled: O,
  classNames: x,
  styles: R,
  vars: $,
  varsResolver: D
}) {
  const A = Nu(), z = iz(), G = (Array.isArray(i) ? i : [i]).filter((I) => I);
  return (I, K) => ({
    className: HA({
      theme: A,
      options: K,
      themeName: G,
      selector: I,
      classNamesPrefix: z,
      classNames: x,
      classes: l,
      unstyled: O,
      className: _,
      rootSelector: y,
      props: u,
      stylesCtx: d
    }),
    style: rz({
      theme: A,
      themeName: G,
      selector: I,
      options: K,
      props: u,
      stylesCtx: d,
      rootSelector: y,
      styles: R,
      style: E,
      vars: $,
      varsResolver: D
    })
  });
}
function oz() {
  const i = console.error;
  console.error = (...l) => {
    l.length > 1 && typeof l[0] == "string" && l[0].toLowerCase().includes("extra attributes from the server") && typeof l[1] == "string" && l[1].toLowerCase().includes("data-mantine-color-scheme") || i(...l);
  };
}
function IO(i) {
  return i === "auto" || i === "dark" || i === "light";
}
function lz({
  key: i = "mantine-color-scheme-value"
} = {}) {
  let l;
  return {
    get: (u) => {
      if (typeof window > "u")
        return u;
      try {
        const d = window.localStorage.getItem(i);
        return IO(d) ? d : u;
      } catch {
        return u;
      }
    },
    set: (u) => {
      try {
        window.localStorage.setItem(i, u);
      } catch (d) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          d
        );
      }
    },
    subscribe: (u) => {
      l = (d) => {
        d.storageArea === window.localStorage && d.key === i && IO(d.newValue) && u(d.newValue);
      }, window.addEventListener("storage", l);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", l);
    },
    clear: () => {
      window.localStorage.removeItem(i);
    }
  };
}
function uz(i, l) {
  try {
    return i.addEventListener("change", l), () => i.removeEventListener("change", l);
  } catch {
    return i.addListener(l), () => i.removeListener(l);
  }
}
function sz(i, l) {
  return typeof l == "boolean" ? l : typeof window < "u" && "matchMedia" in window ? window.matchMedia(i).matches : !1;
}
function cz(i, l, { getInitialValueInEffect: u } = {
  getInitialValueInEffect: !0
}) {
  const [d, _] = Or(
    u ? l : sz(i, l)
  ), E = No();
  return ci(() => {
    if ("matchMedia" in window)
      return E.current = window.matchMedia(i), _(E.current.matches), uz(E.current, (y) => _(y.matches));
  }, [i]), d;
}
const Mg = typeof document < "u" ? dL : ci;
function mE(i, l) {
  const u = No(!1);
  ci(
    () => () => {
      u.current = !1;
    },
    []
  ), ci(() => {
    if (u.current)
      return i();
    u.current = !0;
  }, l);
}
function fz({ opened: i, shouldReturnFocus: l = !0 }) {
  const u = No(), d = () => {
    var _;
    u.current && "focus" in u.current && typeof u.current.focus == "function" && ((_ = u.current) == null || _.focus({ preventScroll: !0 }));
  };
  return mE(() => {
    let _ = -1;
    const E = (y) => {
      y.key === "Tab" && window.clearTimeout(_);
    };
    return document.addEventListener("keydown", E), i ? u.current = document.activeElement : l && (_ = window.setTimeout(d, 10)), () => {
      window.clearTimeout(_), document.removeEventListener("keydown", E);
    };
  }, [i, l]), d;
}
const dz = /input|select|textarea|button|object/, lx = "a, input, select, textarea, button, object, [tabindex]";
function pz(i) {
  return process.env.NODE_ENV === "test" ? !1 : i.style.display === "none";
}
function vz(i) {
  if (i.getAttribute("aria-hidden") || i.getAttribute("hidden") || i.getAttribute("type") === "hidden")
    return !1;
  let u = i;
  for (; u && !(u === document.body || u.nodeType === 11); ) {
    if (pz(u))
      return !1;
    u = u.parentNode;
  }
  return !0;
}
function ux(i) {
  let l = i.getAttribute("tabindex");
  return l === null && (l = void 0), parseInt(l, 10);
}
function nE(i) {
  const l = i.nodeName.toLowerCase(), u = !Number.isNaN(ux(i));
  return /* @ts-ignore */ (dz.test(l) && !i.disabled || i instanceof HTMLAnchorElement && i.href || u) && vz(i);
}
function sx(i) {
  const l = ux(i);
  return (Number.isNaN(l) || l >= 0) && nE(i);
}
function mz(i) {
  return Array.from(i.querySelectorAll(lx)).filter(sx);
}
function hz(i, l) {
  const u = mz(i);
  if (!u.length) {
    l.preventDefault();
    return;
  }
  const d = u[l.shiftKey ? 0 : u.length - 1], _ = i.getRootNode();
  let E = d === _.activeElement || i === _.activeElement;
  const y = _.activeElement;
  if (y.tagName === "INPUT" && y.getAttribute("type") === "radio" && (E = u.filter(
    ($) => $.getAttribute("type") === "radio" && $.getAttribute("name") === y.getAttribute("name")
  ).includes(d)), !E)
    return;
  l.preventDefault();
  const x = u[l.shiftKey ? u.length - 1 : 0];
  x && x.focus();
}
function cx() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function yz(i, l = "body > :not(script)") {
  const u = cx(), d = Array.from(
    document.querySelectorAll(l)
  ).map((_) => {
    var E;
    if ((E = _ == null ? void 0 : _.shadowRoot) != null && E.contains(i) || _.contains(i))
      return;
    const y = _.getAttribute("aria-hidden"), O = _.getAttribute("data-hidden"), x = _.getAttribute("data-focus-id");
    return _.setAttribute("data-focus-id", u), y === null || y === "false" ? _.setAttribute("aria-hidden", "true") : !O && !x && _.setAttribute("data-hidden", y), {
      node: _,
      ariaHidden: O || null
    };
  });
  return () => {
    d.forEach((_) => {
      !_ || u !== _.node.getAttribute("data-focus-id") || (_.ariaHidden === null ? _.node.removeAttribute("aria-hidden") : _.node.setAttribute("aria-hidden", _.ariaHidden), _.node.removeAttribute("data-focus-id"), _.node.removeAttribute("data-hidden"));
    });
  };
}
function gz(i = !0) {
  const l = No(), u = No(null), d = (E) => {
    let y = E.querySelector("[data-autofocus]");
    if (!y) {
      const O = Array.from(E.querySelectorAll(lx));
      y = O.find(sx) || O.find(nE) || null, !y && nE(E) && (y = E);
    }
    y ? y.focus({ preventScroll: !0 }) : process.env.NODE_ENV === "development" && console.warn(
      "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
      E
    );
  }, _ = Po(
    (E) => {
      if (i) {
        if (E === null) {
          u.current && (u.current(), u.current = null);
          return;
        }
        u.current = yz(E), l.current !== E && (E ? (setTimeout(() => {
          E.getRootNode() ? d(E) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", E);
        }), l.current = E) : l.current = null);
      }
    },
    [i]
  );
  return ci(() => {
    if (!i)
      return;
    l.current && setTimeout(() => d(l.current));
    const E = (y) => {
      y.key === "Tab" && l.current && hz(l.current, y);
    };
    return document.addEventListener("keydown", E), () => {
      document.removeEventListener("keydown", E), u.current && u.current();
    };
  }, [i]), _;
}
const Sz = ee["useId".toString()] || (() => {
});
function _z() {
  const i = Sz();
  return i ? `mantine-${i.replace(/:/g, "")}` : "";
}
function hE(i) {
  const l = _z(), [u, d] = Or(l);
  return Mg(() => {
    d(cx());
  }, []), typeof i == "string" ? i : typeof window > "u" ? l : u;
}
function bz(i, l, u) {
  ci(() => (window.addEventListener(i, l, u), () => window.removeEventListener(i, l, u)), [i, l]);
}
function fx(i, l) {
  typeof i == "function" ? i(l) : typeof i == "object" && i !== null && "current" in i && (i.current = l);
}
function dx(...i) {
  return (l) => {
    i.forEach((u) => fx(u, l));
  };
}
function Ez(...i) {
  return Po(dx(...i), i);
}
function px({
  value: i,
  defaultValue: l,
  finalValue: u,
  onChange: d = () => {
  }
}) {
  const [_, E] = Or(
    l !== void 0 ? l : u
  ), y = (O) => {
    E(O), d == null || d(O);
  };
  return i !== void 0 ? [i, d, !0] : [_, y, !1];
}
function yE(i, l) {
  return cz("(prefers-reduced-motion: reduce)", i, l);
}
function wz(i = !1, l) {
  const { onOpen: u, onClose: d } = l || {}, [_, E] = Or(i), y = Po(() => {
    E((R) => R || (u == null || u(), !0));
  }, [u]), O = Po(() => {
    E((R) => R && (d == null || d(), !1));
  }, [d]), x = Po(() => {
    _ ? O() : y();
  }, [O, y, _]);
  return [_, { open: y, close: O, toggle: x }];
}
function yv(i, l) {
  var u;
  const d = i !== "auto" ? i : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (u = l()) == null || u.setAttribute("data-mantine-color-scheme", d);
}
function Cz({
  manager: i,
  defaultColorScheme: l,
  getRootElement: u,
  forceColorScheme: d
}) {
  const _ = No(), [E, y] = Or(() => i.get(l)), O = d || E, x = Po(
    ($) => {
      d || (yv($, u), y($), i.set($));
    },
    [i.set, O, d]
  ), R = Po(() => {
    y(l), yv(l, u), i.clear();
  }, [i.clear, l]);
  return ci(() => (i.subscribe(x), i.unsubscribe), [i.subscribe, i.unsubscribe]), Mg(() => {
    yv(i.get(l), u);
  }, []), ci(() => {
    var $;
    if (d)
      return yv(d, u), () => {
      };
    _.current = window.matchMedia("(prefers-color-scheme: dark)");
    const D = (A) => {
      E === "auto" && yv(A.matches ? "dark" : "light", u);
    };
    return ($ = _.current) == null || $.addEventListener("change", D), () => {
      var A;
      return (A = _.current) == null ? void 0 : A.removeEventListener("change", D);
    };
  }, [E, d]), { colorScheme: O, setColorScheme: x, clearColorScheme: R };
}
function Oz({
  respectReducedMotion: i,
  getRootElement: l
}) {
  Mg(() => {
    var u;
    i && ((u = l()) == null || u.setAttribute("data-respect-reduced-motion", "true"));
  }, [i]);
}
function Ob(i) {
  return Object.entries(i).map(([l, u]) => `${l}: ${u};`).join("");
}
function Tb(i, l) {
  return (Array.isArray(i) ? i : [i]).reduce((d, _) => `${_}{${d}}`, l);
}
function Tz(i, l) {
  const u = Ob(i.variables), d = u ? Tb(l, u) : "", _ = Ob(i.dark), E = _ ? Tb(`${l}[data-mantine-color-scheme="dark"]`, _) : "", y = Ob(i.light), O = y ? Tb(`${l}[data-mantine-color-scheme="light"]`, y) : "";
  return `${d}${E}${O}`;
}
function Bf(i, l, u) {
  Do(l).forEach(
    (d) => Object.assign(i, { [`--mantine-${u}-${d}`]: l[d] })
  );
}
const vx = (i) => {
  const l = Jb(i, "dark"), u = Jb(i, "light"), d = i.defaultRadius in i.radius ? i.radius[i.defaultRadius] : ue(i.defaultRadius), _ = {
    variables: {
      "--mantine-scale": i.scale.toString(),
      "--mantine-cursor-type": i.cursorType,
      "--mantine-webkit-font-smoothing": i.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": i.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": i.white,
      "--mantine-color-black": i.black,
      "--mantine-line-height": i.lineHeights.md,
      "--mantine-font-family": i.fontFamily,
      "--mantine-font-family-monospace": i.fontFamilyMonospace,
      "--mantine-font-family-headings": i.headings.fontFamily,
      "--mantine-heading-font-weight": i.headings.fontWeight,
      "--mantine-radius-default": d,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${i.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${i.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${i.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${i.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${i.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": i.black,
      "--mantine-color-body": i.white,
      "--mantine-color-error": i.colors.red[6],
      "--mantine-color-placeholder": i.colors.gray[5],
      "--mantine-color-anchor": i.colors[i.primaryColor][u],
      "--mantine-color-default": i.white,
      "--mantine-color-default-hover": i.colors.gray[0],
      "--mantine-color-default-color": i.black,
      "--mantine-color-default-border": i.colors.gray[4]
    },
    dark: {
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": i.colors.dark[7],
      "--mantine-color-error": i.colors.red[9],
      "--mantine-color-placeholder": i.colors.dark[3],
      "--mantine-color-anchor": i.colors[i.primaryColor][4],
      "--mantine-color-default": i.colors.dark[6],
      "--mantine-color-default-hover": i.colors.dark[5],
      "--mantine-color-default-color": i.white,
      "--mantine-color-default-border": i.colors.dark[4]
    }
  };
  Bf(_.variables, i.breakpoints, "breakpoint"), Bf(_.variables, i.spacing, "spacing"), Bf(_.variables, i.fontSizes, "font-size"), Bf(_.variables, i.lineHeights, "line-height"), Bf(_.variables, i.shadows, "shadow"), Bf(_.variables, i.radius, "radius"), Do(i.colors).forEach((y) => {
    i.colors[y].forEach((R, $) => {
      _.variables[`--mantine-color-${y}-${$}`] = R;
    });
    const O = u === 9 ? i.colors[y][8] : i.colors[y][u + 1], x = l === 9 ? i.colors[y][8] : i.colors[y][l + 1];
    _.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", _.light[`--mantine-color-${y}-filled`] = i.colors[y][u], _.light[`--mantine-color-${y}-filled-hover`] = O, _.light[`--mantine-color-${y}-light`] = ia(
      i.colors[y][u],
      0.1
    ), _.light[`--mantine-color-${y}-light-hover`] = ia(
      i.colors[y][u],
      0.12
    ), _.light[`--mantine-color-${y}-light-color`] = i.colors[y][u], _.light[`--mantine-color-${y}-outline`] = i.colors[y][u], _.light[`--mantine-color-${y}-outline-hover`] = ia(
      i.colors[y][u],
      0.05
    ), _.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", _.dark[`--mantine-color-${y}-filled`] = i.colors[y][l], _.dark[`--mantine-color-${y}-filled-hover`] = x, _.dark[`--mantine-color-${y}-light`] = ia(
      i.colors[y][Math.max(0, l - 2)],
      0.15
    ), _.dark[`--mantine-color-${y}-light-hover`] = ia(
      i.colors[y][Math.max(0, l - 2)],
      0.2
    ), _.dark[`--mantine-color-${y}-light-color`] = i.colors[y][Math.max(l - 5, 0)], _.dark[`--mantine-color-${y}-outline`] = i.colors[y][Math.max(l - 4, 0)], _.dark[`--mantine-color-${y}-outline-hover`] = ia(
      i.colors[y][Math.max(l - 4, 0)],
      0.05
    );
  });
  const E = i.headings.sizes;
  return Do(E).forEach((y) => {
    _.variables[`--mantine-${y}-font-size`] = E[y].fontSize, _.variables[`--mantine-${y}-line-height`] = E[y].lineHeight, _.variables[`--mantine-${y}-font-weight`] = E[y].fontWeight || i.headings.fontWeight;
  }), _;
};
function Rz({ theme: i, generator: l }) {
  const u = vx(i), d = l == null ? void 0 : l(i);
  return d ? oE(u, d) : u;
}
const Rb = vx(fE);
function xz(i) {
  const l = {
    variables: {},
    light: {},
    dark: {}
  };
  return Do(i.variables).forEach((u) => {
    Rb.variables[u] !== i.variables[u] && (l.variables[u] = i.variables[u]);
  }), Do(i.light).forEach((u) => {
    Rb.light[u] !== i.light[u] && (l.light[u] = i.light[u]);
  }), Do(i.dark).forEach((u) => {
    Rb.dark[u] !== i.dark[u] && (l.dark[u] = i.dark[u]);
  }), l;
}
function Pz(i) {
  return `
  ${i}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${i}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function mx({ cssVariablesSelector: i }) {
  const l = Nu(), u = vE(), d = az(), _ = Rz({ theme: l, generator: d }), E = i === ":root", y = E ? xz(_) : _, O = Tz(y, i);
  return O ? /* @__PURE__ */ ee.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: u == null ? void 0 : u(),
      dangerouslySetInnerHTML: {
        __html: `${O}${E ? "" : Pz(i)}`
      }
    }
  ) : null;
}
mx.displayName = "@mantine/CssVariables";
function Dz() {
  const i = Nu(), l = vE(), u = Do(i.breakpoints).reduce((d, _) => {
    const E = fA(i.breakpoints[_]);
    return `${d}@media (max-width: ${OO(
      E - 0.1
    )}) {.mantine-visible-from-${_} {display: none !important;}}@media (min-width: ${OO(
      E
    )}) {.mantine-hidden-from-${_} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ ee.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: l == null ? void 0 : l(),
      dangerouslySetInnerHTML: { __html: u }
    }
  );
}
oz();
function hx({
  theme: i,
  children: l,
  getStyleNonce: u,
  withCssVariables: d = !0,
  cssVariablesSelector: _ = ":root",
  classNamesPrefix: E = "mantine",
  colorSchemeManager: y = lz(),
  defaultColorScheme: O = "light",
  getRootElement: x = () => document.documentElement,
  cssVariablesResolver: R,
  forceColorScheme: $
}) {
  const { colorScheme: D, setColorScheme: A, clearColorScheme: z } = Cz({
    defaultColorScheme: O,
    forceColorScheme: $,
    manager: y,
    getRootElement: x
  });
  return Oz({
    respectReducedMotion: (i == null ? void 0 : i.respectReducedMotion) || !1,
    getRootElement: x
  }), /* @__PURE__ */ ee.createElement(
    ox.Provider,
    {
      value: {
        colorSchemeManager: y,
        colorScheme: D,
        setColorScheme: A,
        clearColorScheme: z,
        getRootElement: x,
        classNamesPrefix: E,
        getStyleNonce: u,
        cssVariablesResolver: R,
        cssVariablesSelector: _
      }
    },
    /* @__PURE__ */ ee.createElement(ix, { theme: i }, d && /* @__PURE__ */ ee.createElement(mx, { cssVariablesSelector: _ }), /* @__PURE__ */ ee.createElement(Dz, null), l)
  );
}
hx.displayName = "@mantine/core/MantineProvider";
var Nz = Object.defineProperty, VO = Object.getOwnPropertySymbols, $z = Object.prototype.hasOwnProperty, kz = Object.prototype.propertyIsEnumerable, BO = (i, l, u) => l in i ? Nz(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, xb = (i, l) => {
  for (var u in l || (l = {}))
    $z.call(l, u) && BO(i, u, l[u]);
  if (VO)
    for (var u of VO(l))
      kz.call(l, u) && BO(i, u, l[u]);
  return i;
};
function Xt(i, l, u) {
  var d;
  const _ = Nu(), E = (d = _.components[i]) == null ? void 0 : d.defaultProps, y = typeof E == "function" ? E(_) : E;
  return xb(xb(xb({}, l), y), lE(u));
}
function YO(i) {
  return Do(i).reduce(
    (l, u) => i[u] !== void 0 ? `${l}${sA(u)}:${i[u]};` : l,
    ""
  ).trim();
}
function Mz({ selector: i, styles: l, media: u }) {
  const d = l ? YO(l) : "", _ = Array.isArray(u) ? u.map((E) => `@media${E.query}{${i}{${YO(E.styles)}}}`) : [];
  return `${d ? `${i}{${d}}` : ""}${_.join("")}`.trim();
}
function Lz({ selector: i, styles: l, media: u }) {
  const d = vE();
  return /* @__PURE__ */ ee.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: d == null ? void 0 : d(),
      dangerouslySetInnerHTML: { __html: Mz({ selector: i, styles: l, media: u }) }
    }
  );
}
function Az() {
  return `__m__-${BR().replace(/:/g, "")}`;
}
var zz = Object.defineProperty, WO = Object.getOwnPropertySymbols, jz = Object.prototype.hasOwnProperty, Uz = Object.prototype.propertyIsEnumerable, QO = (i, l, u) => l in i ? zz(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, GO = (i, l) => {
  for (var u in l || (l = {}))
    jz.call(l, u) && QO(i, u, l[u]);
  if (WO)
    for (var u of WO(l))
      Uz.call(l, u) && QO(i, u, l[u]);
  return i;
};
function yx(i, l) {
  return Array.isArray(i) ? [...i].reduce(
    (u, d) => GO(GO({}, u), yx(d, l)),
    {}
  ) : typeof i == "function" ? i(l) : i ?? {};
}
var Fz = Object.defineProperty, qO = Object.getOwnPropertySymbols, Hz = Object.prototype.hasOwnProperty, Iz = Object.prototype.propertyIsEnumerable, XO = (i, l, u) => l in i ? Fz(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Ev = (i, l) => {
  for (var u in l || (l = {}))
    Hz.call(l, u) && XO(i, u, l[u]);
  if (qO)
    for (var u of qO(l))
      Iz.call(l, u) && XO(i, u, l[u]);
  return i;
};
function rE(i, l) {
  return Array.isArray(i) ? [...i].reduce(
    (u, d) => Ev(Ev({}, u), rE(d, l)),
    {}
  ) : typeof i == "function" ? i(l) : i ?? {};
}
function Vz({
  theme: i,
  style: l,
  vars: u,
  styleProps: d
}) {
  const _ = rE(l, i), E = rE(u, i);
  return Ev(Ev(Ev({}, _), E), d);
}
var Bz = Object.defineProperty, KO = Object.getOwnPropertySymbols, Yz = Object.prototype.hasOwnProperty, Wz = Object.prototype.propertyIsEnumerable, ZO = (i, l, u) => l in i ? Bz(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, JO = (i, l) => {
  for (var u in l || (l = {}))
    Yz.call(l, u) && ZO(i, u, l[u]);
  if (KO)
    for (var u of KO(l))
      Wz.call(l, u) && ZO(i, u, l[u]);
  return i;
};
function gx(i) {
  return i.startsWith("data-") ? i : `data-${i}`;
}
function Qz(i) {
  return Object.keys(i).reduce((l, u) => {
    const d = i[u];
    return d === void 0 || d === "" || d === !1 || d === null || (l[gx(u)] = i[u]), l;
  }, {});
}
function Sx(i) {
  return i ? typeof i == "string" ? { [gx(i)]: !0 } : Array.isArray(i) ? [...i].reduce(
    (l, u) => JO(JO({}, l), Sx(u)),
    {}
  ) : Qz(i) : null;
}
var eT = Object.getOwnPropertySymbols, Gz = Object.prototype.hasOwnProperty, qz = Object.prototype.propertyIsEnumerable, Xz = (i, l) => {
  var u = {};
  for (var d in i)
    Gz.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && eT)
    for (var d of eT(i))
      l.indexOf(d) < 0 && qz.call(i, d) && (u[d] = i[d]);
  return u;
};
function Kz(i) {
  const l = i, {
    m: u,
    mx: d,
    my: _,
    mt: E,
    mb: y,
    ml: O,
    mr: x,
    p: R,
    px: $,
    py: D,
    pt: A,
    pb: z,
    pl: G,
    pr: I,
    bg: K,
    c: de,
    opacity: pe,
    ff: ne,
    fz: te,
    fw: W,
    lts: Ae,
    ta: _e,
    lh: dt,
    fs: ht,
    tt: it,
    td: ct,
    w: Vt,
    miw: ze,
    maw: Ke,
    h: Ct,
    mih: pt,
    mah: Bt,
    bgsz: fe,
    bgp: $e,
    bgr: H,
    bga: oe,
    pos: we,
    top: je,
    left: Le,
    bottom: nt,
    right: ke,
    inset: Qe,
    display: Ge,
    hiddenFrom: et,
    visibleFrom: rt
  } = l, Nt = Xz(l, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display",
    "hiddenFrom",
    "visibleFrom"
  ]);
  return { styleProps: lE({
    m: u,
    mx: d,
    my: _,
    mt: E,
    mb: y,
    ml: O,
    mr: x,
    p: R,
    px: $,
    py: D,
    pt: A,
    pb: z,
    pl: G,
    pr: I,
    bg: K,
    c: de,
    opacity: pe,
    ff: ne,
    fz: te,
    fw: W,
    lts: Ae,
    ta: _e,
    lh: dt,
    fs: ht,
    tt: it,
    td: ct,
    w: Vt,
    miw: ze,
    maw: Ke,
    h: Ct,
    mih: pt,
    mah: Bt,
    bgsz: fe,
    bgp: $e,
    bgr: H,
    bga: oe,
    pos: we,
    top: je,
    left: Le,
    bottom: nt,
    right: ke,
    inset: Qe,
    display: Ge,
    hiddenFrom: et,
    visibleFrom: rt
  }), rest: Nt };
}
function Zz(i, l) {
  const u = cE({ color: i, theme: l });
  return u.color === "dimmed" ? "var(--mantine-color-dimmed)" : u.color === "bright" ? "var(--mantine-color-bright)" : u.variable ? `var(${u.variable})` : u.color;
}
function Jz(i, l) {
  return typeof i == "string" && i in l.fontSizes ? `var(--mantine-font-size-${i})` : typeof i == "number" || typeof i == "string" ? ue(i) : i;
}
function ej(i, l) {
  if (typeof i == "number")
    return ue(i);
  if (typeof i == "string") {
    const u = i.replace("-", "");
    if (!(u in l.spacing))
      return ue(i);
    const d = `--mantine-spacing-${u}`;
    return i.startsWith("-") ? `calc(var(${d}) * -1)` : `var(${d})`;
  }
  return i;
}
function tj(i) {
  return i;
}
function nj(i) {
  return typeof i == "number" ? ue(i) : i;
}
function rj(i, l) {
  return typeof i == "string" && i in l.fontSizes ? `var(--mantine-line-height-${i})` : i;
}
const Pb = {
  color: Zz,
  fontSize: Jz,
  spacing: ej,
  identity: tj,
  size: nj,
  lineHeight: rj
};
var aj = Object.defineProperty, ij = Object.defineProperties, oj = Object.getOwnPropertyDescriptors, Uy = Object.getOwnPropertySymbols, _x = Object.prototype.hasOwnProperty, bx = Object.prototype.propertyIsEnumerable, tT = (i, l, u) => l in i ? aj(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, lj = (i, l) => {
  for (var u in l || (l = {}))
    _x.call(l, u) && tT(i, u, l[u]);
  if (Uy)
    for (var u of Uy(l))
      bx.call(l, u) && tT(i, u, l[u]);
  return i;
}, uj = (i, l) => ij(i, oj(l)), sj = (i, l) => {
  var u = {};
  for (var d in i)
    _x.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Uy)
    for (var d of Uy(i))
      l.indexOf(d) < 0 && bx.call(i, d) && (u[d] = i[d]);
  return u;
};
function nT(i) {
  return i.replace("(min-width: ", "").replace("em)", "");
}
function cj(i) {
  var l = i, {
    media: u
  } = l, d = sj(l, [
    "media"
  ]);
  const E = Object.keys(u).sort((y, O) => Number(nT(y)) - Number(nT(O))).map((y) => ({ query: y, styles: u[y] }));
  return uj(lj({}, d), { media: E });
}
var fj = Object.defineProperty, dj = Object.defineProperties, pj = Object.getOwnPropertyDescriptors, rT = Object.getOwnPropertySymbols, vj = Object.prototype.hasOwnProperty, mj = Object.prototype.propertyIsEnumerable, aT = (i, l, u) => l in i ? fj(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, hj = (i, l) => {
  for (var u in l || (l = {}))
    vj.call(l, u) && aT(i, u, l[u]);
  if (rT)
    for (var u of rT(l))
      mj.call(l, u) && aT(i, u, l[u]);
  return i;
}, yj = (i, l) => dj(i, pj(l));
function gj(i) {
  if (typeof i != "object" || i === null)
    return !1;
  const l = Object.keys(i);
  return !(l.length === 1 && l[0] === "base");
}
function Sj(i) {
  return typeof i == "object" && i !== null ? "base" in i ? i.base : void 0 : i;
}
function _j(i) {
  return typeof i == "object" && i !== null ? Do(i).filter((l) => l !== "base") : [];
}
function bj(i, l) {
  return typeof i == "object" && i !== null && l in i ? i[l] : i;
}
function Ej({
  styleProps: i,
  data: l,
  theme: u
}) {
  return cj(
    Do(i).reduce(
      (d, _) => {
        if (_ === "hiddenFrom" || _ === "visibleFrom")
          return d;
        const E = l[_], y = Array.isArray(E.property) ? E.property : [E.property], O = Sj(i[_]);
        if (!gj(i[_]))
          return y.forEach((R) => {
            d.inlineStyles[R] = Pb[E.type](O, u);
          }), d;
        d.hasResponsiveStyles = !0;
        const x = _j(i[_]);
        return y.forEach((R) => {
          O && (d.styles[R] = Pb[E.type](O, u)), x.forEach(($) => {
            const D = `(min-width: ${u.breakpoints[$]})`;
            d.media[D] = yj(hj({}, d.media[D]), {
              [R]: Pb[E.type](
                bj(i[_], $),
                u
              )
            });
          });
        }), d;
      },
      {
        hasResponsiveStyles: !1,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}
const wj = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};
var Cj = Object.defineProperty, Fy = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, wx = Object.prototype.propertyIsEnumerable, iT = (i, l, u) => l in i ? Cj(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Db = (i, l) => {
  for (var u in l || (l = {}))
    Ex.call(l, u) && iT(i, u, l[u]);
  if (Fy)
    for (var u of Fy(l))
      wx.call(l, u) && iT(i, u, l[u]);
  return i;
}, Oj = (i, l) => {
  var u = {};
  for (var d in i)
    Ex.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Fy)
    for (var d of Fy(i))
      l.indexOf(d) < 0 && wx.call(i, d) && (u[d] = i[d]);
  return u;
};
const Cx = Tr(
  (i, l) => {
    var u = i, {
      component: d,
      style: _,
      __vars: E,
      className: y,
      variant: O,
      mod: x,
      size: R,
      hiddenFrom: $,
      visibleFrom: D,
      renderRoot: A
    } = u, z = Oj(u, [
      "component",
      "style",
      "__vars",
      "className",
      "variant",
      "mod",
      "size",
      "hiddenFrom",
      "visibleFrom",
      "renderRoot"
    ]);
    const G = Nu(), I = d || "div", { styleProps: K, rest: de } = Kz(z), pe = Az(), ne = Ej({
      styleProps: K,
      theme: G,
      data: wj
    }), te = Db(Db({
      ref: l,
      style: Vz({
        theme: G,
        style: _,
        vars: E,
        styleProps: ne.inlineStyles
      }),
      className: Ya(y, {
        [pe]: ne.hasResponsiveStyles,
        [`mantine-hidden-from-${$}`]: $,
        [`mantine-visible-from-${D}`]: D
      }),
      "data-variant": O,
      "data-size": ex(R) ? void 0 : R || void 0
    }, Sx(x)), de);
    return /* @__PURE__ */ ee.createElement(ee.Fragment, null, ne.hasResponsiveStyles && /* @__PURE__ */ ee.createElement(
      Lz,
      {
        selector: `.${pe}`,
        styles: ne.styles,
        media: ne.media
      }
    ), typeof A == "function" ? A(te) : /* @__PURE__ */ ee.createElement(I, Db({}, te)));
  }
);
Cx.displayName = "@mantine/core/Box";
const qt = Cx;
function Ox(i) {
  return i;
}
function rr(i) {
  const l = Tr(i);
  return l.extend = Ox, l;
}
function Xf(i) {
  const l = Tr(i);
  return l.extend = Ox, l;
}
const Tj = Ng({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Rj() {
  return wv(Tj);
}
var aE = { exports: {} }, Ra = {}, Dy = { exports: {} }, Nb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function xj() {
  return oT || (oT = 1, function(i) {
    function l(fe, $e) {
      var H = fe.length;
      fe.push($e);
      e:
        for (; 0 < H; ) {
          var oe = H - 1 >>> 1, we = fe[oe];
          if (0 < _(we, $e))
            fe[oe] = $e, fe[H] = we, H = oe;
          else
            break e;
        }
    }
    function u(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function d(fe) {
      if (fe.length === 0)
        return null;
      var $e = fe[0], H = fe.pop();
      if (H !== $e) {
        fe[0] = H;
        e:
          for (var oe = 0, we = fe.length, je = we >>> 1; oe < je; ) {
            var Le = 2 * (oe + 1) - 1, nt = fe[Le], ke = Le + 1, Qe = fe[ke];
            if (0 > _(nt, H))
              ke < we && 0 > _(Qe, nt) ? (fe[oe] = Qe, fe[ke] = H, oe = ke) : (fe[oe] = nt, fe[Le] = H, oe = Le);
            else if (ke < we && 0 > _(Qe, H))
              fe[oe] = Qe, fe[ke] = H, oe = ke;
            else
              break e;
          }
      }
      return $e;
    }
    function _(fe, $e) {
      var H = fe.sortIndex - $e.sortIndex;
      return H !== 0 ? H : fe.id - $e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      i.unstable_now = function() {
        return E.now();
      };
    } else {
      var y = Date, O = y.now();
      i.unstable_now = function() {
        return y.now() - O;
      };
    }
    var x = [], R = [], $ = 1, D = null, A = 3, z = !1, G = !1, I = !1, K = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ne(fe) {
      for (var $e = u(R); $e !== null; ) {
        if ($e.callback === null)
          d(R);
        else if ($e.startTime <= fe)
          d(R), $e.sortIndex = $e.expirationTime, l(x, $e);
        else
          break;
        $e = u(R);
      }
    }
    function te(fe) {
      if (I = !1, ne(fe), !G)
        if (u(x) !== null)
          G = !0, pt(W);
        else {
          var $e = u(R);
          $e !== null && Bt(te, $e.startTime - fe);
        }
    }
    function W(fe, $e) {
      G = !1, I && (I = !1, de(dt), dt = -1), z = !0;
      var H = A;
      try {
        for (ne($e), D = u(x); D !== null && (!(D.expirationTime > $e) || fe && !ct()); ) {
          var oe = D.callback;
          if (typeof oe == "function") {
            D.callback = null, A = D.priorityLevel;
            var we = oe(D.expirationTime <= $e);
            $e = i.unstable_now(), typeof we == "function" ? D.callback = we : D === u(x) && d(x), ne($e);
          } else
            d(x);
          D = u(x);
        }
        if (D !== null)
          var je = !0;
        else {
          var Le = u(R);
          Le !== null && Bt(te, Le.startTime - $e), je = !1;
        }
        return je;
      } finally {
        D = null, A = H, z = !1;
      }
    }
    var Ae = !1, _e = null, dt = -1, ht = 5, it = -1;
    function ct() {
      return !(i.unstable_now() - it < ht);
    }
    function Vt() {
      if (_e !== null) {
        var fe = i.unstable_now();
        it = fe;
        var $e = !0;
        try {
          $e = _e(!0, fe);
        } finally {
          $e ? ze() : (Ae = !1, _e = null);
        }
      } else
        Ae = !1;
    }
    var ze;
    if (typeof pe == "function")
      ze = function() {
        pe(Vt);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), Ct = Ke.port2;
      Ke.port1.onmessage = Vt, ze = function() {
        Ct.postMessage(null);
      };
    } else
      ze = function() {
        K(Vt, 0);
      };
    function pt(fe) {
      _e = fe, Ae || (Ae = !0, ze());
    }
    function Bt(fe, $e) {
      dt = K(function() {
        fe(i.unstable_now());
      }, $e);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, i.unstable_continueExecution = function() {
      G || z || (G = !0, pt(W));
    }, i.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ht = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(x);
    }, i.unstable_next = function(fe) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var $e = 3;
          break;
        default:
          $e = A;
      }
      var H = A;
      A = $e;
      try {
        return fe();
      } finally {
        A = H;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(fe, $e) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var H = A;
      A = fe;
      try {
        return $e();
      } finally {
        A = H;
      }
    }, i.unstable_scheduleCallback = function(fe, $e, H) {
      var oe = i.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? oe + H : oe) : H = oe, fe) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = H + we, fe = { id: $++, callback: $e, priorityLevel: fe, startTime: H, expirationTime: we, sortIndex: -1 }, H > oe ? (fe.sortIndex = H, l(R, fe), u(x) === null && fe === u(R) && (I ? (de(dt), dt = -1) : I = !0, Bt(te, H - oe))) : (fe.sortIndex = we, l(x, fe), G || z || (G = !0, pt(W))), fe;
    }, i.unstable_shouldYield = ct, i.unstable_wrapCallback = function(fe) {
      var $e = A;
      return function() {
        var H = A;
        A = $e;
        try {
          return fe.apply(this, arguments);
        } finally {
          A = H;
        }
      };
    };
  }(Nb)), Nb;
}
var $b = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function Pj() {
  return lT || (lT = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, u = !1, d = 5;
      function _(ye, Fe) {
        var vt = ye.length;
        ye.push(Fe), O(ye, Fe, vt);
      }
      function E(ye) {
        return ye.length === 0 ? null : ye[0];
      }
      function y(ye) {
        if (ye.length === 0)
          return null;
        var Fe = ye[0], vt = ye.pop();
        return vt !== Fe && (ye[0] = vt, x(ye, vt, 0)), Fe;
      }
      function O(ye, Fe, vt) {
        for (var At = vt; At > 0; ) {
          var sn = At - 1 >>> 1, An = ye[sn];
          if (R(An, Fe) > 0)
            ye[sn] = Fe, ye[At] = An, At = sn;
          else
            return;
        }
      }
      function x(ye, Fe, vt) {
        for (var At = vt, sn = ye.length, An = sn >>> 1; At < An; ) {
          var gn = (At + 1) * 2 - 1, Rr = ye[gn], Kt = gn + 1, Yr = ye[Kt];
          if (R(Rr, Fe) < 0)
            Kt < sn && R(Yr, Rr) < 0 ? (ye[At] = Yr, ye[Kt] = Fe, At = Kt) : (ye[At] = Rr, ye[gn] = Fe, At = gn);
          else if (Kt < sn && R(Yr, Fe) < 0)
            ye[At] = Yr, ye[Kt] = Fe, At = Kt;
          else
            return;
        }
      }
      function R(ye, Fe) {
        var vt = ye.sortIndex - Fe.sortIndex;
        return vt !== 0 ? vt : ye.id - Fe.id;
      }
      var $ = 1, D = 2, A = 3, z = 4, G = 5;
      function I(ye, Fe) {
      }
      var K = typeof performance == "object" && typeof performance.now == "function";
      if (K) {
        var de = performance;
        i.unstable_now = function() {
          return de.now();
        };
      } else {
        var pe = Date, ne = pe.now();
        i.unstable_now = function() {
          return pe.now() - ne;
        };
      }
      var te = 1073741823, W = -1, Ae = 250, _e = 5e3, dt = 1e4, ht = te, it = [], ct = [], Vt = 1, ze = null, Ke = A, Ct = !1, pt = !1, Bt = !1, fe = typeof setTimeout == "function" ? setTimeout : null, $e = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function oe(ye) {
        for (var Fe = E(ct); Fe !== null; ) {
          if (Fe.callback === null)
            y(ct);
          else if (Fe.startTime <= ye)
            y(ct), Fe.sortIndex = Fe.expirationTime, _(it, Fe);
          else
            return;
          Fe = E(ct);
        }
      }
      function we(ye) {
        if (Bt = !1, oe(ye), !pt)
          if (E(it) !== null)
            pt = !0, Na(je);
          else {
            var Fe = E(ct);
            Fe !== null && wn(we, Fe.startTime - ye);
          }
      }
      function je(ye, Fe) {
        pt = !1, Bt && (Bt = !1, Br()), Ct = !0;
        var vt = Ke;
        try {
          var At;
          if (!u)
            return Le(ye, Fe);
        } finally {
          ze = null, Ke = vt, Ct = !1;
        }
      }
      function Le(ye, Fe) {
        var vt = Fe;
        for (oe(vt), ze = E(it); ze !== null && !l && !(ze.expirationTime > vt && (!ye || Pa())); ) {
          var At = ze.callback;
          if (typeof At == "function") {
            ze.callback = null, Ke = ze.priorityLevel;
            var sn = ze.expirationTime <= vt, An = At(sn);
            vt = i.unstable_now(), typeof An == "function" ? ze.callback = An : ze === E(it) && y(it), oe(vt);
          } else
            y(it);
          ze = E(it);
        }
        if (ze !== null)
          return !0;
        var gn = E(ct);
        return gn !== null && wn(we, gn.startTime - vt), !1;
      }
      function nt(ye, Fe) {
        switch (ye) {
          case $:
          case D:
          case A:
          case z:
          case G:
            break;
          default:
            ye = A;
        }
        var vt = Ke;
        Ke = ye;
        try {
          return Fe();
        } finally {
          Ke = vt;
        }
      }
      function ke(ye) {
        var Fe;
        switch (Ke) {
          case $:
          case D:
          case A:
            Fe = A;
            break;
          default:
            Fe = Ke;
            break;
        }
        var vt = Ke;
        Ke = Fe;
        try {
          return ye();
        } finally {
          Ke = vt;
        }
      }
      function Qe(ye) {
        var Fe = Ke;
        return function() {
          var vt = Ke;
          Ke = Fe;
          try {
            return ye.apply(this, arguments);
          } finally {
            Ke = vt;
          }
        };
      }
      function Ge(ye, Fe, vt) {
        var At = i.unstable_now(), sn;
        if (typeof vt == "object" && vt !== null) {
          var An = vt.delay;
          typeof An == "number" && An > 0 ? sn = At + An : sn = At;
        } else
          sn = At;
        var gn;
        switch (ye) {
          case $:
            gn = W;
            break;
          case D:
            gn = Ae;
            break;
          case G:
            gn = ht;
            break;
          case z:
            gn = dt;
            break;
          case A:
          default:
            gn = _e;
            break;
        }
        var Rr = sn + gn, Kt = {
          id: Vt++,
          callback: Fe,
          priorityLevel: ye,
          startTime: sn,
          expirationTime: Rr,
          sortIndex: -1
        };
        return sn > At ? (Kt.sortIndex = sn, _(ct, Kt), E(it) === null && Kt === E(ct) && (Bt ? Br() : Bt = !0, wn(we, sn - At))) : (Kt.sortIndex = Rr, _(it, Kt), !pt && !Ct && (pt = !0, Na(je))), Kt;
      }
      function et() {
      }
      function rt() {
        !pt && !Ct && (pt = !0, Na(je));
      }
      function Nt() {
        return E(it);
      }
      function ve(ye) {
        ye.callback = null;
      }
      function Lt() {
        return Ke;
      }
      var yn = !1, En = null, ar = -1, ir = d, oa = -1;
      function Pa() {
        var ye = i.unstable_now() - oa;
        return !(ye < ir);
      }
      function fi() {
      }
      function Qa(ye) {
        if (ye < 0 || ye > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ye > 0 ? ir = Math.floor(1e3 / ye) : ir = d;
      }
      var Da = function() {
        if (En !== null) {
          var ye = i.unstable_now();
          oa = ye;
          var Fe = !0, vt = !0;
          try {
            vt = En(Fe, ye);
          } finally {
            vt ? Ir() : (yn = !1, En = null);
          }
        } else
          yn = !1;
      }, Ir;
      if (typeof H == "function")
        Ir = function() {
          H(Da);
        };
      else if (typeof MessageChannel < "u") {
        var Ga = new MessageChannel(), Vr = Ga.port2;
        Ga.port1.onmessage = Da, Ir = function() {
          Vr.postMessage(null);
        };
      } else
        Ir = function() {
          fe(Da, 0);
        };
      function Na(ye) {
        En = ye, yn || (yn = !0, Ir());
      }
      function wn(ye, Fe) {
        ar = fe(function() {
          ye(i.unstable_now());
        }, Fe);
      }
      function Br() {
        $e(ar), ar = -1;
      }
      var Vi = fi, $a = null;
      i.unstable_IdlePriority = G, i.unstable_ImmediatePriority = $, i.unstable_LowPriority = z, i.unstable_NormalPriority = A, i.unstable_Profiling = $a, i.unstable_UserBlockingPriority = D, i.unstable_cancelCallback = ve, i.unstable_continueExecution = rt, i.unstable_forceFrameRate = Qa, i.unstable_getCurrentPriorityLevel = Lt, i.unstable_getFirstCallbackNode = Nt, i.unstable_next = ke, i.unstable_pauseExecution = et, i.unstable_requestPaint = Vi, i.unstable_runWithPriority = nt, i.unstable_scheduleCallback = Ge, i.unstable_shouldYield = Pa, i.unstable_wrapCallback = Qe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }($b)), $b;
}
var uT;
function Tx() {
  return uT || (uT = 1, process.env.NODE_ENV === "production" ? Dy.exports = xj() : Dy.exports = Pj()), Dy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sT;
function Dj() {
  if (sT)
    return Ra;
  sT = 1;
  var i = ee, l = Tx();
  function u(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++)
      r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), _ = {};
  function E(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (_[n] = r, n = 0; n < r.length; n++)
      d.add(r[n]);
  }
  var O = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, D = {};
  function A(n) {
    return x.call(D, n) ? !0 : x.call($, n) ? !1 : R.test(n) ? D[n] = !0 : ($[n] = !0, !1);
  }
  function z(n, r, s, f) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function G(n, r, s, f) {
    if (r === null || typeof r > "u" || z(n, r, s, f))
      return !0;
    if (f)
      return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function I(n, r, s, f, v, h, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = v, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = b;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    K[n] = new I(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    K[r] = new I(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    K[n] = new I(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    K[n] = new I(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    K[n] = new I(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    K[n] = new I(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    K[n] = new I(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    K[n] = new I(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    K[n] = new I(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var de = /[\-:]([a-z])/g;
  function pe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      de,
      pe
    );
    K[r] = new I(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(de, pe);
    K[r] = new I(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(de, pe);
    K[r] = new I(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    K[n] = new I(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    K[n] = new I(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ne(n, r, s, f) {
    var v = K.hasOwnProperty(r) ? K[r] : null;
    (v !== null ? v.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, s, v, f) && (s = null), f || v === null ? A(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : v.mustUseProperty ? n[v.propertyName] = s === null ? v.type === 3 ? !1 : "" : s : (r = v.attributeName, f = v.attributeNamespace, s === null ? n.removeAttribute(r) : (v = v.type, s = v === 3 || v === 4 && s === !0 ? "" : "" + s, f ? n.setAttributeNS(f, r, s) : n.setAttribute(r, s))));
  }
  var te = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), it = Symbol.for("react.provider"), ct = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), Bt = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function $e(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var H = Object.assign, oe;
  function we(n) {
    if (oe === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        oe = r && r[1] || "";
      }
    return `
` + oe + n;
  }
  var je = !1;
  function Le(n, r) {
    if (!n || je)
      return "";
    je = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Q) {
            var f = Q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Q) {
            f = Q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Q) {
          f = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && f && typeof Q.stack == "string") {
        for (var v = Q.stack.split(`
`), h = f.stack.split(`
`), b = v.length - 1, T = h.length - 1; 1 <= b && 0 <= T && v[b] !== h[T]; )
          T--;
        for (; 1 <= b && 0 <= T; b--, T--)
          if (v[b] !== h[T]) {
            if (b !== 1 || T !== 1)
              do
                if (b--, T--, 0 > T || v[b] !== h[T]) {
                  var N = `
` + v[b].replace(" at new ", " at ");
                  return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
                }
              while (1 <= b && 0 <= T);
            break;
          }
      }
    } finally {
      je = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function nt(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Le(n.type, !1), n;
      case 11:
        return n = Le(n.type.render, !1), n;
      case 1:
        return n = Le(n.type, !0), n;
      default:
        return "";
    }
  }
  function ke(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case _e:
        return "Fragment";
      case Ae:
        return "Portal";
      case ht:
        return "Profiler";
      case dt:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ct:
          return (n.displayName || "Context") + ".Consumer";
        case it:
          return (n._context.displayName || "Context") + ".Provider";
        case Vt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ct:
          return r = n.displayName || null, r !== null ? r : ke(n.type) || "Memo";
        case pt:
          r = n._payload, n = n._init;
          try {
            return ke(n(r));
          } catch {
          }
      }
    return null;
  }
  function Qe(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ke(r);
      case 8:
        return r === dt ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ge(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function rt(n) {
    var r = et(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var v = s.get, h = s.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(b) {
        f = "" + b, h.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(b) {
        f = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nt(n) {
    n._valueTracker || (n._valueTracker = rt(n));
  }
  function ve(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var s = r.getValue(), f = "";
    return n && (f = et(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== s ? (r.setValue(n), !0) : !1;
  }
  function Lt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function yn(n, r) {
    var s = r.checked;
    return H({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function En(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    s = Ge(r.value != null ? r.value : s), n._wrapperState = { initialChecked: f, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function ar(n, r) {
    r = r.checked, r != null && ne(n, "checked", r, !1);
  }
  function ir(n, r) {
    ar(n, r);
    var s = Ge(r.value), f = r.type;
    if (s != null)
      f === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Pa(n, r.type, s) : r.hasOwnProperty("defaultValue") && Pa(n, r.type, Ge(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function oa(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function Pa(n, r, s) {
    (r !== "number" || Lt(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var fi = Array.isArray;
  function Qa(n, r, s, f) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < s.length; v++)
        r["$" + s[v]] = !0;
      for (s = 0; s < n.length; s++)
        v = r.hasOwnProperty("$" + n[s].value), n[s].selected !== v && (n[s].selected = v), v && f && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + Ge(s), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === s) {
          n[v].selected = !0, f && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Da(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(u(91));
    return H({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ir(n, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null)
          throw Error(u(92));
        if (fi(s)) {
          if (1 < s.length)
            throw Error(u(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    n._wrapperState = { initialValue: Ge(s) };
  }
  function Ga(n, r) {
    var s = Ge(r.value), f = Ge(r.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), r.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), f != null && (n.defaultValue = "" + f);
  }
  function Vr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Na(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Na(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Br, Vi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, f, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, f, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Br = Br || document.createElement("div"), Br.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Br.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function $a(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ye = {
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
    strokeWidth: !0
  }, Fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ye).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ye[r] = ye[n];
    });
  });
  function vt(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || ye.hasOwnProperty(n) && ye[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var s in r)
      if (r.hasOwnProperty(s)) {
        var f = s.indexOf("--") === 0, v = vt(s, r[s], f);
        s === "float" && (s = "cssFloat"), f ? n.setProperty(s, v) : n[s] = v;
      }
  }
  var sn = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function An(n, r) {
    if (r) {
      if (sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(u(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(u(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(u(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(u(62));
    }
  }
  function gn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Rr = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yr = null, Yt = null, Zt = null;
  function xl(n) {
    if (n = es(n)) {
      if (typeof Yr != "function")
        throw Error(u(280));
      var r = n.stateNode;
      r && (r = He(r), Yr(n.stateNode, n.type, r));
    }
  }
  function ko(n) {
    Yt ? Zt ? Zt.push(n) : Zt = [n] : Yt = n;
  }
  function Pl() {
    if (Yt) {
      var n = Yt, r = Zt;
      if (Zt = Yt = null, xl(n), r)
        for (n = 0; n < r.length; n++)
          xl(r[n]);
    }
  }
  function $u(n, r) {
    return n(r);
  }
  function Ys() {
  }
  var Mo = !1;
  function Dl(n, r, s) {
    if (Mo)
      return n(r, s);
    Mo = !0;
    try {
      return $u(n, r, s);
    } finally {
      Mo = !1, (Yt !== null || Zt !== null) && (Ys(), Pl());
    }
  }
  function Lo(n, r) {
    var s = n.stateNode;
    if (s === null)
      return null;
    var f = He(s);
    if (f === null)
      return null;
    s = f[r];
    e:
      switch (r) {
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
          (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (s && typeof s != "function")
      throw Error(u(231, r, typeof s));
    return s;
  }
  var Nl = !1;
  if (O)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", { get: function() {
        Nl = !0;
      } }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      Nl = !1;
    }
  function Bi(n, r, s, f, v, h, b, T, N) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, Q);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var Wr = !1, ka = null, Yi = !1, P = null, ie = { onError: function(n) {
    Wr = !0, ka = n;
  } };
  function ge(n, r, s, f, v, h, b, T, N) {
    Wr = !1, ka = null, Bi.apply(ie, arguments);
  }
  function Ve(n, r, s, f, v, h, b, T, N) {
    if (ge.apply(this, arguments), Wr) {
      if (Wr) {
        var Q = ka;
        Wr = !1, ka = null;
      } else
        throw Error(u(198));
      Yi || (Yi = !0, P = Q);
    }
  }
  function st(n) {
    var r = n, s = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (s = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function Ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ft(n) {
    if (st(n) !== n)
      throw Error(u(188));
  }
  function Ye(n) {
    var r = n.alternate;
    if (!r) {
      if (r = st(n), r === null)
        throw Error(u(188));
      return r !== n ? null : n;
    }
    for (var s = n, f = r; ; ) {
      var v = s.return;
      if (v === null)
        break;
      var h = v.alternate;
      if (h === null) {
        if (f = v.return, f !== null) {
          s = f;
          continue;
        }
        break;
      }
      if (v.child === h.child) {
        for (h = v.child; h; ) {
          if (h === s)
            return ft(v), n;
          if (h === f)
            return ft(v), r;
          h = h.sibling;
        }
        throw Error(u(188));
      }
      if (s.return !== f.return)
        s = v, f = h;
      else {
        for (var b = !1, T = v.child; T; ) {
          if (T === s) {
            b = !0, s = v, f = h;
            break;
          }
          if (T === f) {
            b = !0, f = v, s = h;
            break;
          }
          T = T.sibling;
        }
        if (!b) {
          for (T = h.child; T; ) {
            if (T === s) {
              b = !0, s = h, f = v;
              break;
            }
            if (T === f) {
              b = !0, f = h, s = v;
              break;
            }
            T = T.sibling;
          }
          if (!b)
            throw Error(u(189));
        }
      }
      if (s.alternate !== f)
        throw Error(u(190));
    }
    if (s.tag !== 3)
      throw Error(u(188));
    return s.stateNode.current === s ? n : r;
  }
  function zn(n) {
    return n = Ye(n), n !== null ? an(n) : null;
  }
  function an(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = an(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var on = l.unstable_scheduleCallback, vr = l.unstable_cancelCallback, Wi = l.unstable_shouldYield, Ws = l.unstable_requestPaint, Rt = l.unstable_now, Vg = l.unstable_getCurrentPriorityLevel, di = l.unstable_ImmediatePriority, yt = l.unstable_UserBlockingPriority, Qi = l.unstable_NormalPriority, Rv = l.unstable_LowPriority, Jf = l.unstable_IdlePriority, ku = null, Ma = null;
  function xv(n) {
    if (Ma && typeof Ma.onCommitFiberRoot == "function")
      try {
        Ma.onCommitFiberRoot(ku, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var la = Math.clz32 ? Math.clz32 : Bg, Pv = Math.log, Dv = Math.LN2;
  function Bg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Pv(n) / Dv | 0) | 0;
  }
  var Qs = 64, $l = 4194304;
  function Ao(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function La(n, r) {
    var s = n.pendingLanes;
    if (s === 0)
      return 0;
    var f = 0, v = n.suspendedLanes, h = n.pingedLanes, b = s & 268435455;
    if (b !== 0) {
      var T = b & ~v;
      T !== 0 ? f = Ao(T) : (h &= b, h !== 0 && (f = Ao(h)));
    } else
      b = s & ~v, b !== 0 ? f = Ao(b) : h !== 0 && (f = Ao(h));
    if (f === 0)
      return 0;
    if (r !== 0 && r !== f && !(r & v) && (v = f & -f, h = r & -r, v >= h || v === 16 && (h & 4194240) !== 0))
      return r;
    if (f & 4 && (f |= s & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= f; 0 < r; )
        s = 31 - la(r), v = 1 << s, f |= n[s], r &= ~v;
    return f;
  }
  function ed(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Gs(n, r) {
    for (var s = n.suspendedLanes, f = n.pingedLanes, v = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var b = 31 - la(h), T = 1 << b, N = v[b];
      N === -1 ? (!(T & s) || T & f) && (v[b] = ed(T, r)) : N <= r && (n.expiredLanes |= T), h &= ~T;
    }
  }
  function td(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qs() {
    var n = Qs;
    return Qs <<= 1, !(Qs & 4194240) && (Qs = 64), n;
  }
  function nd(n) {
    for (var r = [], s = 0; 31 > s; s++)
      r.push(n);
    return r;
  }
  function zo(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - la(r), n[r] = s;
  }
  function Yg(n, r) {
    var s = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var v = 31 - la(s), h = 1 << v;
      r[v] = 0, f[v] = -1, n[v] = -1, s &= ~h;
    }
  }
  function Mu(n, r) {
    var s = n.entangledLanes |= r;
    for (n = n.entanglements; s; ) {
      var f = 31 - la(s), v = 1 << f;
      v & r | n[f] & r && (n[f] |= r), s &= ~v;
    }
  }
  var zt = 0;
  function rd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Nv, Xs, Wt, $v, ad, ot = !1, Lu = [], Cn = null, ua = null, sa = null, Au = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map(), jt = [], Wg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Au.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pn.delete(r.pointerId);
    }
  }
  function or(n, r, s, f, v, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: s, eventSystemFlags: f, nativeEvent: h, targetContainers: [v] }, r !== null && (r = es(r), r !== null && Xs(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, v !== null && r.indexOf(v) === -1 && r.push(v), n);
  }
  function Gi(n, r, s, f, v) {
    switch (r) {
      case "focusin":
        return Cn = or(Cn, n, r, s, f, v), !0;
      case "dragenter":
        return ua = or(ua, n, r, s, f, v), !0;
      case "mouseover":
        return sa = or(sa, n, r, s, f, v), !0;
      case "pointerover":
        var h = v.pointerId;
        return Au.set(h, or(Au.get(h) || null, n, r, s, f, v)), !0;
      case "gotpointercapture":
        return h = v.pointerId, Pn.set(h, or(Pn.get(h) || null, n, r, s, f, v)), !0;
    }
    return !1;
  }
  function kv(n) {
    var r = fa(n.target);
    if (r !== null) {
      var s = st(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Ot(s), r !== null) {
            n.blockedOn = r, ad(n.priority, function() {
              Wt(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function kl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = Js(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var f = new s.constructor(s.type, s);
        Rr = f, s.target.dispatchEvent(f), Rr = null;
      } else
        return r = es(s), r !== null && Xs(r), n.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function id(n, r, s) {
    kl(n) && s.delete(r);
  }
  function Mv() {
    ot = !1, Cn !== null && kl(Cn) && (Cn = null), ua !== null && kl(ua) && (ua = null), sa !== null && kl(sa) && (sa = null), Au.forEach(id), Pn.forEach(id);
  }
  function zu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ot || (ot = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Mv)));
  }
  function ju(n) {
    function r(v) {
      return zu(v, n);
    }
    if (0 < Lu.length) {
      zu(Lu[0], n);
      for (var s = 1; s < Lu.length; s++) {
        var f = Lu[s];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Cn !== null && zu(Cn, n), ua !== null && zu(ua, n), sa !== null && zu(sa, n), Au.forEach(r), Pn.forEach(r), s = 0; s < jt.length; s++)
      f = jt[s], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < jt.length && (s = jt[0], s.blockedOn === null); )
      kv(s), s.blockedOn === null && jt.shift();
  }
  var Ml = te.ReactCurrentBatchConfig, jo = !0;
  function Lv(n, r, s, f) {
    var v = zt, h = Ml.transition;
    Ml.transition = null;
    try {
      zt = 1, Zs(n, r, s, f);
    } finally {
      zt = v, Ml.transition = h;
    }
  }
  function Ks(n, r, s, f) {
    var v = zt, h = Ml.transition;
    Ml.transition = null;
    try {
      zt = 4, Zs(n, r, s, f);
    } finally {
      zt = v, Ml.transition = h;
    }
  }
  function Zs(n, r, s, f) {
    if (jo) {
      var v = Js(n, r, s, f);
      if (v === null)
        fc(n, r, f, Uu, s), Aa(n, f);
      else if (Gi(v, n, r, s, f))
        f.stopPropagation();
      else if (Aa(n, f), r & 4 && -1 < Wg.indexOf(n)) {
        for (; v !== null; ) {
          var h = es(v);
          if (h !== null && Nv(h), h = Js(n, r, s, f), h === null && fc(n, r, f, Uu, s), h === v)
            break;
          v = h;
        }
        v !== null && f.stopPropagation();
      } else
        fc(n, r, f, null, s);
    }
  }
  var Uu = null;
  function Js(n, r, s, f) {
    if (Uu = null, n = Kt(f), n = fa(n), n !== null)
      if (r = st(n), r === null)
        n = null;
      else if (s = r.tag, s === 13) {
        if (n = Ot(r), n !== null)
          return n;
        n = null;
      } else if (s === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Uu = n, null;
  }
  function od(n) {
    switch (n) {
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
        switch (Vg()) {
          case di:
            return 1;
          case yt:
            return 4;
          case Qi:
          case Rv:
            return 16;
          case Jf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, Fu = null, Hu = null;
  function ld() {
    if (Hu)
      return Hu;
    var n, r = Fu, s = r.length, f, v = "value" in pi ? pi.value : pi.textContent, h = v.length;
    for (n = 0; n < s && r[n] === v[n]; n++)
      ;
    var b = s - n;
    for (f = 1; f <= b && r[s - f] === v[h - f]; f++)
      ;
    return Hu = v.slice(n, 1 < f ? 1 - f : void 0);
  }
  function Ll(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Iu() {
    return !0;
  }
  function Av() {
    return !1;
  }
  function Qr(n) {
    function r(s, f, v, h, b) {
      this._reactName = s, this._targetInst = v, this.type = f, this.nativeEvent = h, this.target = b, this.currentTarget = null;
      for (var T in n)
        n.hasOwnProperty(T) && (s = n[T], this[T] = s ? s(h) : h[T]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Iu : Av, this.isPropagationStopped = Av, this;
    }
    return H(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Iu);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Iu);
    }, persist: function() {
    }, isPersistent: Iu }), r;
  }
  var qi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ec = Qr(qi), Al = H({}, qi, { view: 0, detail: 0 }), zv = Qr(Al), tc, ud, Vu, jn = H({}, Al, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Vu && (Vu && n.type === "mousemove" ? (tc = n.screenX - Vu.screenX, ud = n.screenY - Vu.screenY) : ud = tc = 0, Vu = n), tc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : ud;
  } }), nc = Qr(jn), jv = H({}, jn, { dataTransfer: 0 }), Uv = Qr(jv), Qg = H({}, Al, { relatedTarget: 0 }), Xi = Qr(Qg), sd = H({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fv = Qr(sd), Gg = H({}, qi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), qg = Qr(Gg), Xg = H({}, qi, { data: 0 }), cd = Qr(Xg), fd = {
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
    MozPrintableKey: "Unidentified"
  }, Hv = {
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
    224: "Meta"
  }, Iv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Iv[n]) ? !!r[n] : !1;
  }
  function dd() {
    return Vv;
  }
  var vi = H({}, Al, { key: function(n) {
    if (n.key) {
      var r = fd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Ll(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Hv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dd, charCode: function(n) {
    return n.type === "keypress" ? Ll(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ll(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Kg = Qr(vi), pd = H({}, jn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rc = Qr(pd), vd = H({}, Al, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dd }), Zg = Qr(vd), ac = H({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bv = Qr(ac), xr = H({}, jn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mi = Qr(xr), On = [9, 13, 27, 32], za = O && "CompositionEvent" in window, Uo = null;
  O && "documentMode" in document && (Uo = document.documentMode);
  var ic = O && "TextEvent" in window && !Uo, Yv = O && (!za || Uo && 8 < Uo && 11 >= Uo), zl = String.fromCharCode(32), Wv = !1;
  function Qv(n, r) {
    switch (n) {
      case "keyup":
        return On.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var jl = !1;
  function Jg(n, r) {
    switch (n) {
      case "compositionend":
        return oc(r);
      case "keypress":
        return r.which !== 32 ? null : (Wv = !0, zl);
      case "textInput":
        return n = r.data, n === zl && Wv ? null : n;
      default:
        return null;
    }
  }
  function e0(n, r) {
    if (jl)
      return n === "compositionend" || !za && Qv(n, r) ? (n = ld(), Hu = Fu = pi = null, jl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Yv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gv[n.type] : r === "textarea";
  }
  function Xv(n, r, s, f) {
    ko(f), r = Ku(r, "onChange"), 0 < r.length && (s = new ec("onChange", "change", null, s, f), n.push({ event: s, listeners: r }));
  }
  var Bu = null, Ul = null;
  function Fl(n) {
    cc(n, 0);
  }
  function Hl(n) {
    var r = Vl(n);
    if (ve(r))
      return n;
  }
  function Kv(n, r) {
    if (n === "change")
      return r;
  }
  var md = !1;
  if (O) {
    var hd;
    if (O) {
      var yd = "oninput" in document;
      if (!yd) {
        var Zv = document.createElement("div");
        Zv.setAttribute("oninput", "return;"), yd = typeof Zv.oninput == "function";
      }
      hd = yd;
    } else
      hd = !1;
    md = hd && (!document.documentMode || 9 < document.documentMode);
  }
  function Jv() {
    Bu && (Bu.detachEvent("onpropertychange", em), Ul = Bu = null);
  }
  function em(n) {
    if (n.propertyName === "value" && Hl(Ul)) {
      var r = [];
      Xv(r, Ul, n, Kt(n)), Dl(Fl, r);
    }
  }
  function t0(n, r, s) {
    n === "focusin" ? (Jv(), Bu = r, Ul = s, Bu.attachEvent("onpropertychange", em)) : n === "focusout" && Jv();
  }
  function n0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Hl(Ul);
  }
  function r0(n, r) {
    if (n === "click")
      return Hl(r);
  }
  function tm(n, r) {
    if (n === "input" || n === "change")
      return Hl(r);
  }
  function a0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ca = typeof Object.is == "function" ? Object.is : a0;
  function Yu(n, r) {
    if (ca(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var s = Object.keys(n), f = Object.keys(r);
    if (s.length !== f.length)
      return !1;
    for (f = 0; f < s.length; f++) {
      var v = s[f];
      if (!x.call(r, v) || !ca(n[v], r[v]))
        return !1;
    }
    return !0;
  }
  function nm(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function rm(n, r) {
    var s = nm(n);
    n = 0;
    for (var f; s; ) {
      if (s.nodeType === 3) {
        if (f = n + s.textContent.length, n <= r && f >= r)
          return { node: s, offset: r - n };
        n = f;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = nm(s);
    }
  }
  function am(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? am(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function lc() {
    for (var n = window, r = Lt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s)
        n = r.contentWindow;
      else
        break;
      r = Lt(n.document);
    }
    return r;
  }
  function hi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uc(n) {
    var r = lc(), s = n.focusedElem, f = n.selectionRange;
    if (r !== s && s && s.ownerDocument && am(s.ownerDocument.documentElement, s)) {
      if (f !== null && hi(s)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in s)
          s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = s.textContent.length, h = Math.min(f.start, v);
          f = f.end === void 0 ? h : Math.min(f.end, v), !n.extend && h > f && (v = f, f = h, h = v), v = rm(s, h);
          var b = rm(
            s,
            f
          );
          v && b && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== b.node || n.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(v.node, v.offset), n.removeAllRanges(), h > f ? (n.addRange(r), n.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++)
        n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var im = O && "documentMode" in document && 11 >= document.documentMode, ja = null, gd = null, Wu = null, Sd = !1;
  function om(n, r, s) {
    var f = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Sd || ja == null || ja !== Lt(f) || (f = ja, "selectionStart" in f && hi(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), Wu && Yu(Wu, f) || (Wu = f, f = Ku(gd, "onSelect"), 0 < f.length && (r = new ec("onSelect", "select", null, r, s), n.push({ event: r, listeners: f }), r.target = ja)));
  }
  function sc(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var Fo = { animationend: sc("Animation", "AnimationEnd"), animationiteration: sc("Animation", "AnimationIteration"), animationstart: sc("Animation", "AnimationStart"), transitionend: sc("Transition", "TransitionEnd") }, _d = {}, bd = {};
  O && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete Fo.animationend.animation, delete Fo.animationiteration.animation, delete Fo.animationstart.animation), "TransitionEvent" in window || delete Fo.transitionend.transition);
  function Un(n) {
    if (_d[n])
      return _d[n];
    if (!Fo[n])
      return n;
    var r = Fo[n], s;
    for (s in r)
      if (r.hasOwnProperty(s) && s in bd)
        return _d[n] = r[s];
    return n;
  }
  var Ed = Un("animationend"), lm = Un("animationiteration"), um = Un("animationstart"), sm = Un("transitionend"), cm = /* @__PURE__ */ new Map(), fm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    cm.set(n, r), E(r, [n]);
  }
  for (var Qu = 0; Qu < fm.length; Qu++) {
    var Ho = fm[Qu], i0 = Ho.toLowerCase(), Gu = Ho[0].toUpperCase() + Ho.slice(1);
    yi(i0, "on" + Gu);
  }
  yi(Ed, "onAnimationEnd"), yi(lm, "onAnimationIteration"), yi(um, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(sm, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), o0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qu));
  function dm(n, r, s) {
    var f = n.type || "unknown-event";
    n.currentTarget = s, Ve(f, r, void 0, n), n.currentTarget = null;
  }
  function cc(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var f = n[s], v = f.event;
      f = f.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var b = f.length - 1; 0 <= b; b--) {
            var T = f[b], N = T.instance, Q = T.currentTarget;
            if (T = T.listener, N !== h && v.isPropagationStopped())
              break e;
            dm(v, T, Q), h = N;
          }
        else
          for (b = 0; b < f.length; b++) {
            if (T = f[b], N = T.instance, Q = T.currentTarget, T = T.listener, N !== h && v.isPropagationStopped())
              break e;
            dm(v, T, Q), h = N;
          }
      }
    }
    if (Yi)
      throw n = P, Yi = !1, P = null, n;
  }
  function Qt(n, r) {
    var s = r[Pd];
    s === void 0 && (s = r[Pd] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    s.has(f) || (pm(r, n, 2, !1), s.add(f));
  }
  function Ki(n, r, s) {
    var f = 0;
    r && (f |= 4), pm(s, n, f, r);
  }
  var gi = "_reactListening" + Math.random().toString(36).slice(2);
  function Il(n) {
    if (!n[gi]) {
      n[gi] = !0, d.forEach(function(s) {
        s !== "selectionchange" && (o0.has(s) || Ki(s, !1, n), Ki(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gi] || (r[gi] = !0, Ki("selectionchange", !1, r));
    }
  }
  function pm(n, r, s, f) {
    switch (od(r)) {
      case 1:
        var v = Lv;
        break;
      case 4:
        v = Ks;
        break;
      default:
        v = Zs;
    }
    s = v.bind(null, r, s, n), v = void 0, !Nl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (v = !0), f ? v !== void 0 ? n.addEventListener(r, s, { capture: !0, passive: v }) : n.addEventListener(r, s, !0) : v !== void 0 ? n.addEventListener(r, s, { passive: v }) : n.addEventListener(r, s, !1);
  }
  function fc(n, r, s, f, v) {
    var h = f;
    if (!(r & 1) && !(r & 2) && f !== null)
      e:
        for (; ; ) {
          if (f === null)
            return;
          var b = f.tag;
          if (b === 3 || b === 4) {
            var T = f.stateNode.containerInfo;
            if (T === v || T.nodeType === 8 && T.parentNode === v)
              break;
            if (b === 4)
              for (b = f.return; b !== null; ) {
                var N = b.tag;
                if ((N === 3 || N === 4) && (N = b.stateNode.containerInfo, N === v || N.nodeType === 8 && N.parentNode === v))
                  return;
                b = b.return;
              }
            for (; T !== null; ) {
              if (b = fa(T), b === null)
                return;
              if (N = b.tag, N === 5 || N === 6) {
                f = h = b;
                continue e;
              }
              T = T.parentNode;
            }
          }
          f = f.return;
        }
    Dl(function() {
      var Q = h, ae = Kt(s), le = [];
      e: {
        var re = cm.get(n);
        if (re !== void 0) {
          var be = ec, Re = n;
          switch (n) {
            case "keypress":
              if (Ll(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              be = Kg;
              break;
            case "focusin":
              Re = "focus", be = Xi;
              break;
            case "focusout":
              Re = "blur", be = Xi;
              break;
            case "beforeblur":
            case "afterblur":
              be = Xi;
              break;
            case "click":
              if (s.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              be = nc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              be = Uv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              be = Zg;
              break;
            case Ed:
            case lm:
            case um:
              be = Fv;
              break;
            case sm:
              be = Bv;
              break;
            case "scroll":
              be = zv;
              break;
            case "wheel":
              be = mi;
              break;
            case "copy":
            case "cut":
            case "paste":
              be = qg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              be = rc;
          }
          var De = (r & 4) !== 0, _n = !De && n === "scroll", j = De ? re !== null ? re + "Capture" : null : re;
          De = [];
          for (var M = Q, V; M !== null; ) {
            V = M;
            var ce = V.stateNode;
            if (V.tag === 5 && ce !== null && (V = ce, j !== null && (ce = Lo(M, j), ce != null && De.push(Xu(M, ce, V)))), _n)
              break;
            M = M.return;
          }
          0 < De.length && (re = new be(re, Re, null, s, ae), le.push({ event: re, listeners: De }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", be = n === "mouseout" || n === "pointerout", re && s !== Rr && (Re = s.relatedTarget || s.fromElement) && (fa(Re) || Re[Si]))
            break e;
          if ((be || re) && (re = ae.window === ae ? ae : (re = ae.ownerDocument) ? re.defaultView || re.parentWindow : window, be ? (Re = s.relatedTarget || s.toElement, be = Q, Re = Re ? fa(Re) : null, Re !== null && (_n = st(Re), Re !== _n || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (be = null, Re = Q), be !== Re)) {
            if (De = nc, ce = "onMouseLeave", j = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (De = rc, ce = "onPointerLeave", j = "onPointerEnter", M = "pointer"), _n = be == null ? re : Vl(be), V = Re == null ? re : Vl(Re), re = new De(ce, M + "leave", be, s, ae), re.target = _n, re.relatedTarget = V, ce = null, fa(ae) === Q && (De = new De(j, M + "enter", Re, s, ae), De.target = V, De.relatedTarget = _n, ce = De), _n = ce, be && Re)
              t: {
                for (De = be, j = Re, M = 0, V = De; V; V = Io(V))
                  M++;
                for (V = 0, ce = j; ce; ce = Io(ce))
                  V++;
                for (; 0 < M - V; )
                  De = Io(De), M--;
                for (; 0 < V - M; )
                  j = Io(j), V--;
                for (; M--; ) {
                  if (De === j || j !== null && De === j.alternate)
                    break t;
                  De = Io(De), j = Io(j);
                }
                De = null;
              }
            else
              De = null;
            be !== null && wd(le, re, be, De, !1), Re !== null && _n !== null && wd(le, _n, Re, De, !0);
          }
        }
        e: {
          if (re = Q ? Vl(Q) : window, be = re.nodeName && re.nodeName.toLowerCase(), be === "select" || be === "input" && re.type === "file")
            var Ne = Kv;
          else if (qv(re))
            if (md)
              Ne = tm;
            else {
              Ne = n0;
              var xe = t0;
            }
          else
            (be = re.nodeName) && be.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Ne = r0);
          if (Ne && (Ne = Ne(n, Q))) {
            Xv(le, Ne, s, ae);
            break e;
          }
          xe && xe(n, re, Q), n === "focusout" && (xe = re._wrapperState) && xe.controlled && re.type === "number" && Pa(re, "number", re.value);
        }
        switch (xe = Q ? Vl(Q) : window, n) {
          case "focusin":
            (qv(xe) || xe.contentEditable === "true") && (ja = xe, gd = Q, Wu = null);
            break;
          case "focusout":
            Wu = gd = ja = null;
            break;
          case "mousedown":
            Sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sd = !1, om(le, s, ae);
            break;
          case "selectionchange":
            if (im)
              break;
          case "keydown":
          case "keyup":
            om(le, s, ae);
        }
        var Ue;
        if (za)
          e: {
            switch (n) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          jl ? Qv(n, s) && (Je = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Yv && s.locale !== "ko" && (jl || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && jl && (Ue = ld()) : (pi = ae, Fu = "value" in pi ? pi.value : pi.textContent, jl = !0)), xe = Ku(Q, Je), 0 < xe.length && (Je = new cd(Je, n, null, s, ae), le.push({ event: Je, listeners: xe }), Ue ? Je.data = Ue : (Ue = oc(s), Ue !== null && (Je.data = Ue)))), (Ue = ic ? Jg(n, s) : e0(n, s)) && (Q = Ku(Q, "onBeforeInput"), 0 < Q.length && (ae = new cd("onBeforeInput", "beforeinput", null, s, ae), le.push({ event: ae, listeners: Q }), ae.data = Ue));
      }
      cc(le, r);
    });
  }
  function Xu(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Ku(n, r) {
    for (var s = r + "Capture", f = []; n !== null; ) {
      var v = n, h = v.stateNode;
      v.tag === 5 && h !== null && (v = h, h = Lo(n, s), h != null && f.unshift(Xu(n, h, v)), h = Lo(n, r), h != null && f.push(Xu(n, h, v))), n = n.return;
    }
    return f;
  }
  function Io(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wd(n, r, s, f, v) {
    for (var h = r._reactName, b = []; s !== null && s !== f; ) {
      var T = s, N = T.alternate, Q = T.stateNode;
      if (N !== null && N === f)
        break;
      T.tag === 5 && Q !== null && (T = Q, v ? (N = Lo(s, h), N != null && b.unshift(Xu(s, N, T))) : v || (N = Lo(s, h), N != null && b.push(Xu(s, N, T)))), s = s.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var Cd = /\r\n?/g, l0 = /\u0000|\uFFFD/g;
  function Od(n) {
    return (typeof n == "string" ? n : "" + n).replace(Cd, `
`).replace(l0, "");
  }
  function dc(n, r, s) {
    if (r = Od(r), Od(n) !== r && s)
      throw Error(u(425));
  }
  function pc() {
  }
  var Td = null, Vo = null;
  function Zu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Bo = typeof setTimeout == "function" ? setTimeout : void 0, vm = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, xd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(n) {
    return Rd.resolve(null).then(n).catch(u0);
  } : Bo;
  function u0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Zi(n, r) {
    var s = r, f = 0;
    do {
      var v = s.nextSibling;
      if (n.removeChild(s), v && v.nodeType === 8)
        if (s = v.data, s === "/$") {
          if (f === 0) {
            n.removeChild(v), ju(r);
            return;
          }
          f--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || f++;
      s = v;
    } while (s);
    ju(r);
  }
  function Ua(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ju(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ji = Math.random().toString(36).slice(2), Xa = "__reactFiber$" + Ji, Yo = "__reactProps$" + Ji, Si = "__reactContainer$" + Ji, Pd = "__reactEvents$" + Ji, s0 = "__reactListeners$" + Ji, Dd = "__reactHandles$" + Ji;
  function fa(n) {
    var r = n[Xa];
    if (r)
      return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[Si] || s[Xa]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null)
          for (n = Ju(n); n !== null; ) {
            if (s = n[Xa])
              return s;
            n = Ju(n);
          }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function es(n) {
    return n = n[Xa] || n[Si], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Vl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(u(33));
  }
  function He(n) {
    return n[Yo] || null;
  }
  var eo = [], Jt = -1;
  function lt(n) {
    return { current: n };
  }
  function $t(n) {
    0 > Jt || (n.current = eo[Jt], eo[Jt] = null, Jt--);
  }
  function kt(n, r) {
    Jt++, eo[Jt] = n.current, n.current = r;
  }
  var Ka = {}, Ze = lt(Ka), vn = lt(!1), Pr = Ka;
  function da(n, r) {
    var s = n.type.contextTypes;
    if (!s)
      return Ka;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r)
      return f.__reactInternalMemoizedMaskedChildContext;
    var v = {}, h;
    for (h in s)
      v[h] = r[h];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function ln(n) {
    return n = n.childContextTypes, n != null;
  }
  function pa() {
    $t(vn), $t(Ze);
  }
  function to(n, r, s) {
    if (Ze.current !== Ka)
      throw Error(u(168));
    kt(Ze, r), kt(vn, s);
  }
  function ts(n, r, s) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function")
      return s;
    f = f.getChildContext();
    for (var v in f)
      if (!(v in r))
        throw Error(u(108, Qe(n) || "Unknown", v));
    return H({}, s, f);
  }
  function vc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ka, Pr = Ze.current, kt(Ze, n), kt(vn, vn.current), !0;
  }
  function mm(n, r, s) {
    var f = n.stateNode;
    if (!f)
      throw Error(u(169));
    s ? (n = ts(n, r, Pr), f.__reactInternalMemoizedMergedChildContext = n, $t(vn), $t(Ze), kt(Ze, n)) : $t(vn), kt(vn, s);
  }
  var Gr = null, Fn = !1, ns = !1;
  function Nd(n) {
    Gr === null ? Gr = [n] : Gr.push(n);
  }
  function $d(n) {
    Fn = !0, Nd(n);
  }
  function Dr() {
    if (!ns && Gr !== null) {
      ns = !0;
      var n = 0, r = zt;
      try {
        var s = Gr;
        for (zt = 1; n < s.length; n++) {
          var f = s[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Gr = null, Fn = !1;
      } catch (v) {
        throw Gr !== null && (Gr = Gr.slice(n + 1)), on(di, Dr), v;
      } finally {
        zt = r, ns = !1;
      }
    }
    return null;
  }
  var no = [], Nr = 0, Wo = null, Bl = 0, $r = [], lr = 0, va = null, Wn = 1, _i = "";
  function qr(n, r) {
    no[Nr++] = Bl, no[Nr++] = Wo, Wo = n, Bl = r;
  }
  function kd(n, r, s) {
    $r[lr++] = Wn, $r[lr++] = _i, $r[lr++] = va, va = n;
    var f = Wn;
    n = _i;
    var v = 32 - la(f) - 1;
    f &= ~(1 << v), s += 1;
    var h = 32 - la(r) + v;
    if (30 < h) {
      var b = v - v % 5;
      h = (f & (1 << b) - 1).toString(32), f >>= b, v -= b, Wn = 1 << 32 - la(r) + v | s << v | f, _i = h + n;
    } else
      Wn = 1 << h | s << v | f, _i = n;
  }
  function mc(n) {
    n.return !== null && (qr(n, 1), kd(n, 1, 0));
  }
  function Md(n) {
    for (; n === Wo; )
      Wo = no[--Nr], no[Nr] = null, Bl = no[--Nr], no[Nr] = null;
    for (; n === va; )
      va = $r[--lr], $r[lr] = null, _i = $r[--lr], $r[lr] = null, Wn = $r[--lr], $r[lr] = null;
  }
  var Xr = null, kr = null, en = !1, ma = null;
  function Ld(n, r) {
    var s = ba(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function hm(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, kr = Ua(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = va !== null ? { id: Wn, overflow: _i } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = ba(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, Xr = n, kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yc(n) {
    if (en) {
      var r = kr;
      if (r) {
        var s = r;
        if (!hm(n, r)) {
          if (hc(n))
            throw Error(u(418));
          r = Ua(s.nextSibling);
          var f = Xr;
          r && hm(n, r) ? Ld(f, s) : (n.flags = n.flags & -4097 | 2, en = !1, Xr = n);
        }
      } else {
        if (hc(n))
          throw Error(u(418));
        n.flags = n.flags & -4097 | 2, en = !1, Xr = n;
      }
    }
  }
  function ym(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Xr = n;
  }
  function gc(n) {
    if (n !== Xr)
      return !1;
    if (!en)
      return ym(n), en = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zu(n.type, n.memoizedProps)), r && (r = kr)) {
      if (hc(n))
        throw gm(), Error(u(418));
      for (; r; )
        Ld(n, r), r = Ua(r.nextSibling);
    }
    if (ym(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(u(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                kr = Ua(n.nextSibling);
                break e;
              }
              r--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        kr = null;
      }
    } else
      kr = Xr ? Ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function gm() {
    for (var n = kr; n; )
      n = Ua(n.nextSibling);
  }
  function cn() {
    kr = Xr = null, en = !1;
  }
  function Ad(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  var Sc = te.ReactCurrentBatchConfig;
  function Kr(n, r) {
    if (n && n.defaultProps) {
      r = H({}, r), n = n.defaultProps;
      for (var s in n)
        r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  var Za = lt(null), _c = null, ro = null, zd = null;
  function jd() {
    zd = ro = _c = null;
  }
  function ao(n) {
    var r = Za.current;
    $t(Za), n._currentValue = r;
  }
  function Hn(n, r, s) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === s)
        break;
      n = n.return;
    }
  }
  function me(n, r) {
    _c = n, zd = ro = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tn = !0), n.firstContext = null);
  }
  function Sn(n) {
    var r = n._currentValue;
    if (zd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ro === null) {
        if (_c === null)
          throw Error(u(308));
        ro = n, _c.dependencies = { lanes: 0, firstContext: n };
      } else
        ro = ro.next = n;
    return r;
  }
  var Qn = null;
  function Ud(n) {
    Qn === null ? Qn = [n] : Qn.push(n);
  }
  function Sm(n, r, s, f) {
    var v = r.interleaved;
    return v === null ? (s.next = s, Ud(r)) : (s.next = v.next, v.next = s), r.interleaved = s, bi(n, f);
  }
  function bi(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; )
      n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var io = !1;
  function Fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Dn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ei(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function oo(n, r, s) {
    var f = n.updateQueue;
    if (f === null)
      return null;
    if (f = f.shared, gt & 2) {
      var v = f.pending;
      return v === null ? r.next = r : (r.next = v.next, v.next = r), f.pending = r, bi(n, s);
    }
    return v = f.interleaved, v === null ? (r.next = r, Ud(f)) : (r.next = v.next, v.next = r), f.interleaved = r, bi(n, s);
  }
  function bc(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Mu(n, s);
    }
  }
  function Hd(n, r) {
    var s = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, s === f)) {
      var v = null, h = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var b = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          h === null ? v = h = b : h = h.next = b, s = s.next;
        } while (s !== null);
        h === null ? v = h = r : h = h.next = r;
      } else
        v = h = r;
      s = { baseState: f.baseState, firstBaseUpdate: v, lastBaseUpdate: h, shared: f.shared, effects: f.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function lo(n, r, s, f) {
    var v = n.updateQueue;
    io = !1;
    var h = v.firstBaseUpdate, b = v.lastBaseUpdate, T = v.shared.pending;
    if (T !== null) {
      v.shared.pending = null;
      var N = T, Q = N.next;
      N.next = null, b === null ? h = Q : b.next = Q, b = N;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, T = ae.lastBaseUpdate, T !== b && (T === null ? ae.firstBaseUpdate = Q : T.next = Q, ae.lastBaseUpdate = N));
    }
    if (h !== null) {
      var le = v.baseState;
      b = 0, ae = Q = N = null, T = h;
      do {
        var re = T.lane, be = T.eventTime;
        if ((f & re) === re) {
          ae !== null && (ae = ae.next = {
            eventTime: be,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Re = n, De = T;
            switch (re = r, be = s, De.tag) {
              case 1:
                if (Re = De.payload, typeof Re == "function") {
                  le = Re.call(be, le, re);
                  break e;
                }
                le = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = De.payload, re = typeof Re == "function" ? Re.call(be, le, re) : Re, re == null)
                  break e;
                le = H({}, le, re);
                break e;
              case 2:
                io = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, re = v.effects, re === null ? v.effects = [T] : re.push(T));
        } else
          be = { eventTime: be, lane: re, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, ae === null ? (Q = ae = be, N = le) : ae = ae.next = be, b |= re;
        if (T = T.next, T === null) {
          if (T = v.shared.pending, T === null)
            break;
          re = T, T = re.next, re.next = null, v.lastBaseUpdate = re, v.shared.pending = null;
        }
      } while (1);
      if (ae === null && (N = le), v.baseState = N, v.firstBaseUpdate = Q, v.lastBaseUpdate = ae, r = v.shared.interleaved, r !== null) {
        v = r;
        do
          b |= v.lane, v = v.next;
        while (v !== r);
      } else
        h === null && (v.shared.lanes = 0);
      Ti |= b, n.lanes = b, n.memoizedState = le;
    }
  }
  function Qo(n, r, s) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var f = n[r], v = f.callback;
        if (v !== null) {
          if (f.callback = null, f = s, typeof v != "function")
            throw Error(u(191, v));
          v.call(f);
        }
      }
  }
  var _m = new i.Component().refs;
  function Id(n, r, s, f) {
    r = n.memoizedState, s = s(f, r), s = s == null ? r : H({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var Ec = { isMounted: function(n) {
    return (n = n._reactInternals) ? st(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var f = fr(), v = Rn(n), h = Ei(f, v);
    h.payload = r, s != null && (h.callback = s), r = oo(n, h, v), r !== null && (dr(r, n, v, f), bc(r, n, v));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var f = fr(), v = Rn(n), h = Ei(f, v);
    h.tag = 1, h.payload = r, s != null && (h.callback = s), r = oo(n, h, v), r !== null && (dr(r, n, v, f), bc(r, n, v));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = fr(), f = Rn(n), v = Ei(s, f);
    v.tag = 2, r != null && (v.callback = r), r = oo(n, v, f), r !== null && (dr(r, n, f, s), bc(r, n, f));
  } };
  function bm(n, r, s, f, v, h, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, h, b) : r.prototype && r.prototype.isPureReactComponent ? !Yu(s, f) || !Yu(v, h) : !0;
  }
  function Em(n, r, s) {
    var f = !1, v = Ka, h = r.contextType;
    return typeof h == "object" && h !== null ? h = Sn(h) : (v = ln(r) ? Pr : Ze.current, f = r.contextTypes, h = (f = f != null) ? da(n, v) : Ka), r = new r(s, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ec, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function wm(n, r, s, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, f), r.state !== n && Ec.enqueueReplaceState(r, r.state, null);
  }
  function wc(n, r, s, f) {
    var v = n.stateNode;
    v.props = s, v.state = n.memoizedState, v.refs = _m, Fd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? v.context = Sn(h) : (h = ln(r) ? Pr : Ze.current, v.context = da(n, h)), v.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (Id(n, r, h, s), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && Ec.enqueueReplaceState(v, v.state, null), lo(n, s, v, f), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yl(n, r, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(u(309));
          var f = s.stateNode;
        }
        if (!f)
          throw Error(u(147, n));
        var v = f, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(b) {
          var T = v.refs;
          T === _m && (T = v.refs = {}), b === null ? delete T[h] : T[h] = b;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string")
        throw Error(u(284));
      if (!s._owner)
        throw Error(u(290, n));
    }
    return n;
  }
  function Cc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(u(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Cm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Om(n) {
    function r(j, M) {
      if (n) {
        var V = j.deletions;
        V === null ? (j.deletions = [M], j.flags |= 16) : V.push(M);
      }
    }
    function s(j, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(j, M), M = M.sibling;
      return null;
    }
    function f(j, M) {
      for (j = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? j.set(M.key, M) : j.set(M.index, M), M = M.sibling;
      return j;
    }
    function v(j, M) {
      return j = ho(j, M), j.index = 0, j.sibling = null, j;
    }
    function h(j, M, V) {
      return j.index = V, n ? (V = j.alternate, V !== null ? (V = V.index, V < M ? (j.flags |= 2, M) : V) : (j.flags |= 2, M)) : (j.flags |= 1048576, M);
    }
    function b(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function T(j, M, V, ce) {
      return M === null || M.tag !== 6 ? (M = bs(V, j.mode, ce), M.return = j, M) : (M = v(M, V), M.return = j, M);
    }
    function N(j, M, V, ce) {
      var Ne = V.type;
      return Ne === _e ? ae(j, M, V.props.children, ce, V.key) : M !== null && (M.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === pt && Cm(Ne) === M.type) ? (ce = v(M, V.props), ce.ref = Yl(j, M, V), ce.return = j, ce) : (ce = nf(V.type, V.key, V.props, null, j.mode, ce), ce.ref = Yl(j, M, V), ce.return = j, ce);
    }
    function Q(j, M, V, ce) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== V.containerInfo || M.stateNode.implementation !== V.implementation ? (M = dl(V, j.mode, ce), M.return = j, M) : (M = v(M, V.children || []), M.return = j, M);
    }
    function ae(j, M, V, ce, Ne) {
      return M === null || M.tag !== 7 ? (M = fl(V, j.mode, ce, Ne), M.return = j, M) : (M = v(M, V), M.return = j, M);
    }
    function le(j, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = bs("" + M, j.mode, V), M.return = j, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case W:
            return V = nf(M.type, M.key, M.props, null, j.mode, V), V.ref = Yl(j, null, M), V.return = j, V;
          case Ae:
            return M = dl(M, j.mode, V), M.return = j, M;
          case pt:
            var ce = M._init;
            return le(j, ce(M._payload), V);
        }
        if (fi(M) || $e(M))
          return M = fl(M, j.mode, V, null), M.return = j, M;
        Cc(j, M);
      }
      return null;
    }
    function re(j, M, V, ce) {
      var Ne = M !== null ? M.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return Ne !== null ? null : T(j, M, "" + V, ce);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case W:
            return V.key === Ne ? N(j, M, V, ce) : null;
          case Ae:
            return V.key === Ne ? Q(j, M, V, ce) : null;
          case pt:
            return Ne = V._init, re(
              j,
              M,
              Ne(V._payload),
              ce
            );
        }
        if (fi(V) || $e(V))
          return Ne !== null ? null : ae(j, M, V, ce, null);
        Cc(j, V);
      }
      return null;
    }
    function be(j, M, V, ce, Ne) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number")
        return j = j.get(V) || null, T(M, j, "" + ce, Ne);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case W:
            return j = j.get(ce.key === null ? V : ce.key) || null, N(M, j, ce, Ne);
          case Ae:
            return j = j.get(ce.key === null ? V : ce.key) || null, Q(M, j, ce, Ne);
          case pt:
            var xe = ce._init;
            return be(j, M, V, xe(ce._payload), Ne);
        }
        if (fi(ce) || $e(ce))
          return j = j.get(V) || null, ae(M, j, ce, Ne, null);
        Cc(M, ce);
      }
      return null;
    }
    function Re(j, M, V, ce) {
      for (var Ne = null, xe = null, Ue = M, Je = M = 0, Bn = null; Ue !== null && Je < V.length; Je++) {
        Ue.index > Je ? (Bn = Ue, Ue = null) : Bn = Ue.sibling;
        var Tt = re(j, Ue, V[Je], ce);
        if (Tt === null) {
          Ue === null && (Ue = Bn);
          break;
        }
        n && Ue && Tt.alternate === null && r(j, Ue), M = h(Tt, M, Je), xe === null ? Ne = Tt : xe.sibling = Tt, xe = Tt, Ue = Bn;
      }
      if (Je === V.length)
        return s(j, Ue), en && qr(j, Je), Ne;
      if (Ue === null) {
        for (; Je < V.length; Je++)
          Ue = le(j, V[Je], ce), Ue !== null && (M = h(Ue, M, Je), xe === null ? Ne = Ue : xe.sibling = Ue, xe = Ue);
        return en && qr(j, Je), Ne;
      }
      for (Ue = f(j, Ue); Je < V.length; Je++)
        Bn = be(Ue, j, Je, V[Je], ce), Bn !== null && (n && Bn.alternate !== null && Ue.delete(Bn.key === null ? Je : Bn.key), M = h(Bn, M, Je), xe === null ? Ne = Bn : xe.sibling = Bn, xe = Bn);
      return n && Ue.forEach(function(yo) {
        return r(j, yo);
      }), en && qr(j, Je), Ne;
    }
    function De(j, M, V, ce) {
      var Ne = $e(V);
      if (typeof Ne != "function")
        throw Error(u(150));
      if (V = Ne.call(V), V == null)
        throw Error(u(151));
      for (var xe = Ne = null, Ue = M, Je = M = 0, Bn = null, Tt = V.next(); Ue !== null && !Tt.done; Je++, Tt = V.next()) {
        Ue.index > Je ? (Bn = Ue, Ue = null) : Bn = Ue.sibling;
        var yo = re(j, Ue, Tt.value, ce);
        if (yo === null) {
          Ue === null && (Ue = Bn);
          break;
        }
        n && Ue && yo.alternate === null && r(j, Ue), M = h(yo, M, Je), xe === null ? Ne = yo : xe.sibling = yo, xe = yo, Ue = Bn;
      }
      if (Tt.done)
        return s(
          j,
          Ue
        ), en && qr(j, Je), Ne;
      if (Ue === null) {
        for (; !Tt.done; Je++, Tt = V.next())
          Tt = le(j, Tt.value, ce), Tt !== null && (M = h(Tt, M, Je), xe === null ? Ne = Tt : xe.sibling = Tt, xe = Tt);
        return en && qr(j, Je), Ne;
      }
      for (Ue = f(j, Ue); !Tt.done; Je++, Tt = V.next())
        Tt = be(Ue, j, Je, Tt.value, ce), Tt !== null && (n && Tt.alternate !== null && Ue.delete(Tt.key === null ? Je : Tt.key), M = h(Tt, M, Je), xe === null ? Ne = Tt : xe.sibling = Tt, xe = Tt);
      return n && Ue.forEach(function(P0) {
        return r(j, P0);
      }), en && qr(j, Je), Ne;
    }
    function _n(j, M, V, ce) {
      if (typeof V == "object" && V !== null && V.type === _e && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case W:
            e: {
              for (var Ne = V.key, xe = M; xe !== null; ) {
                if (xe.key === Ne) {
                  if (Ne = V.type, Ne === _e) {
                    if (xe.tag === 7) {
                      s(j, xe.sibling), M = v(xe, V.props.children), M.return = j, j = M;
                      break e;
                    }
                  } else if (xe.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === pt && Cm(Ne) === xe.type) {
                    s(j, xe.sibling), M = v(xe, V.props), M.ref = Yl(j, xe, V), M.return = j, j = M;
                    break e;
                  }
                  s(j, xe);
                  break;
                } else
                  r(j, xe);
                xe = xe.sibling;
              }
              V.type === _e ? (M = fl(V.props.children, j.mode, ce, V.key), M.return = j, j = M) : (ce = nf(V.type, V.key, V.props, null, j.mode, ce), ce.ref = Yl(j, M, V), ce.return = j, j = ce);
            }
            return b(j);
          case Ae:
            e: {
              for (xe = V.key; M !== null; ) {
                if (M.key === xe)
                  if (M.tag === 4 && M.stateNode.containerInfo === V.containerInfo && M.stateNode.implementation === V.implementation) {
                    s(j, M.sibling), M = v(M, V.children || []), M.return = j, j = M;
                    break e;
                  } else {
                    s(j, M);
                    break;
                  }
                else
                  r(j, M);
                M = M.sibling;
              }
              M = dl(V, j.mode, ce), M.return = j, j = M;
            }
            return b(j);
          case pt:
            return xe = V._init, _n(j, M, xe(V._payload), ce);
        }
        if (fi(V))
          return Re(j, M, V, ce);
        if ($e(V))
          return De(j, M, V, ce);
        Cc(j, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, M !== null && M.tag === 6 ? (s(j, M.sibling), M = v(M, V), M.return = j, j = M) : (s(j, M), M = bs(V, j.mode, ce), M.return = j, j = M), b(j)) : s(j, M);
    }
    return _n;
  }
  var Wl = Om(!0), Tm = Om(!1), rs = {}, Fa = lt(rs), as = lt(rs), Ql = lt(rs);
  function Go(n) {
    if (n === rs)
      throw Error(u(174));
    return n;
  }
  function Vd(n, r) {
    switch (kt(Ql, r), kt(as, n), kt(Fa, rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : wn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wn(r, n);
    }
    $t(Fa), kt(Fa, r);
  }
  function uo() {
    $t(Fa), $t(as), $t(Ql);
  }
  function Be(n) {
    Go(Ql.current);
    var r = Go(Fa.current), s = wn(r, n.type);
    r !== s && (kt(as, n), kt(Fa, s));
  }
  function mt(n) {
    as.current === n && ($t(Fa), $t(as));
  }
  var We = lt(0);
  function fn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ha = [];
  function Oc() {
    for (var n = 0; n < ha.length; n++)
      ha[n]._workInProgressVersionPrimary = null;
    ha.length = 0;
  }
  var Tc = te.ReactCurrentDispatcher, Bd = te.ReactCurrentBatchConfig, qo = 0, tn = null, Z = null, _t = null, qe = !1, Ja = !1, Zr = 0, Xo = 0;
  function nn() {
    throw Error(u(321));
  }
  function Ko(n, r) {
    if (r === null)
      return !1;
    for (var s = 0; s < r.length && s < n.length; s++)
      if (!ca(n[s], r[s]))
        return !1;
    return !0;
  }
  function so(n, r, s, f, v, h) {
    if (qo = h, tn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? f0 : d0, n = s(f, v), Ja) {
      h = 0;
      do {
        if (Ja = !1, Zr = 0, 25 <= h)
          throw Error(u(301));
        h += 1, _t = Z = null, r.updateQueue = null, Tc.current = Wd, n = s(f, v);
      } while (Ja);
    }
    if (Tc.current = Ic, r = Z !== null && Z.next !== null, qo = 0, _t = Z = tn = null, qe = !1, r)
      throw Error(u(300));
    return n;
  }
  function Zo() {
    var n = Zr !== 0;
    return Zr = 0, n;
  }
  function ya() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _t === null ? tn.memoizedState = _t = n : _t = _t.next = n, _t;
  }
  function Mr() {
    if (Z === null) {
      var n = tn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Z.next;
    var r = _t === null ? tn.memoizedState : _t.next;
    if (r !== null)
      _t = r, Z = n;
    else {
      if (n === null)
        throw Error(u(310));
      Z = n, n = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, _t === null ? tn.memoizedState = _t = n : _t = _t.next = n;
    }
    return _t;
  }
  function Jo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function is(n) {
    var r = Mr(), s = r.queue;
    if (s === null)
      throw Error(u(311));
    s.lastRenderedReducer = n;
    var f = Z, v = f.baseQueue, h = s.pending;
    if (h !== null) {
      if (v !== null) {
        var b = v.next;
        v.next = h.next, h.next = b;
      }
      f.baseQueue = v = h, s.pending = null;
    }
    if (v !== null) {
      h = v.next, f = f.baseState;
      var T = b = null, N = null, Q = h;
      do {
        var ae = Q.lane;
        if ((qo & ae) === ae)
          N !== null && (N = N.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), f = Q.hasEagerState ? Q.eagerState : n(f, Q.action);
        else {
          var le = {
            lane: ae,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          N === null ? (T = N = le, b = f) : N = N.next = le, tn.lanes |= ae, Ti |= ae;
        }
        Q = Q.next;
      } while (Q !== null && Q !== h);
      N === null ? b = f : N.next = T, ca(f, r.memoizedState) || (Tn = !0), r.memoizedState = f, r.baseState = b, r.baseQueue = N, s.lastRenderedState = f;
    }
    if (n = s.interleaved, n !== null) {
      v = n;
      do
        h = v.lane, tn.lanes |= h, Ti |= h, v = v.next;
      while (v !== n);
    } else
      v === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function os(n) {
    var r = Mr(), s = r.queue;
    if (s === null)
      throw Error(u(311));
    s.lastRenderedReducer = n;
    var f = s.dispatch, v = s.pending, h = r.memoizedState;
    if (v !== null) {
      s.pending = null;
      var b = v = v.next;
      do
        h = n(h, b.action), b = b.next;
      while (b !== v);
      ca(h, r.memoizedState) || (Tn = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), s.lastRenderedState = h;
    }
    return [h, f];
  }
  function Rc() {
  }
  function xc(n, r) {
    var s = tn, f = Mr(), v = r(), h = !ca(f.memoizedState, v);
    if (h && (f.memoizedState = v, Tn = !0), f = f.queue, ls(Nc.bind(null, s, f, n), [n]), f.getSnapshot !== r || h || _t !== null && _t.memoizedState.tag & 1) {
      if (s.flags |= 2048, el(9, Dc.bind(null, s, f, v, r), void 0, null), dn === null)
        throw Error(u(349));
      qo & 30 || Pc(s, r, v);
    }
    return v;
  }
  function Pc(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tn.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
  }
  function Dc(n, r, s, f) {
    r.value = s, r.getSnapshot = f, $c(r) && kc(n);
  }
  function Nc(n, r, s) {
    return s(function() {
      $c(r) && kc(n);
    });
  }
  function $c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !ca(n, s);
    } catch {
      return !0;
    }
  }
  function kc(n) {
    var r = bi(n, 1);
    r !== null && dr(r, n, 1, -1);
  }
  function Mc(n) {
    var r = ya();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hc.bind(null, tn, n), [r.memoizedState, n];
  }
  function el(n, r, s, f) {
    return n = { tag: n, create: r, destroy: s, deps: f, next: null }, r = tn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tn.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (f = s.next, s.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function Lc() {
    return Mr().memoizedState;
  }
  function tl(n, r, s, f) {
    var v = ya();
    tn.flags |= n, v.memoizedState = el(1 | r, s, void 0, f === void 0 ? null : f);
  }
  function wi(n, r, s, f) {
    var v = Mr();
    f = f === void 0 ? null : f;
    var h = void 0;
    if (Z !== null) {
      var b = Z.memoizedState;
      if (h = b.destroy, f !== null && Ko(f, b.deps)) {
        v.memoizedState = el(r, s, h, f);
        return;
      }
    }
    tn.flags |= n, v.memoizedState = el(1 | r, s, h, f);
  }
  function Ac(n, r) {
    return tl(8390656, 8, n, r);
  }
  function ls(n, r) {
    return wi(2048, 8, n, r);
  }
  function zc(n, r) {
    return wi(4, 2, n, r);
  }
  function jc(n, r) {
    return wi(4, 4, n, r);
  }
  function Yd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Gl(n, r, s) {
    return s = s != null ? s.concat([n]) : null, wi(4, 4, Yd.bind(null, r, n), s);
  }
  function Uc() {
  }
  function ql(n, r) {
    var s = Mr();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && Ko(r, f[1]) ? f[0] : (s.memoizedState = [n, r], n);
  }
  function co(n, r) {
    var s = Mr();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && Ko(r, f[1]) ? f[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function Lr(n, r, s) {
    return qo & 21 ? (ca(s, r) || (s = qs(), tn.lanes |= s, Ti |= s, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tn = !0), n.memoizedState = s);
  }
  function c0(n, r) {
    var s = zt;
    zt = s !== 0 && 4 > s ? s : 4, n(!0);
    var f = Bd.transition;
    Bd.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = s, Bd.transition = f;
    }
  }
  function Gt() {
    return Mr().memoizedState;
  }
  function Fc(n, r, s) {
    var f = Rn(n);
    if (s = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }, Xl(n))
      us(r, s);
    else if (s = Sm(n, r, s, f), s !== null) {
      var v = fr();
      dr(s, n, f, v), Rm(s, r, f);
    }
  }
  function Hc(n, r, s) {
    var f = Rn(n), v = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Xl(n))
      us(r, v);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null))
        try {
          var b = r.lastRenderedState, T = h(b, s);
          if (v.hasEagerState = !0, v.eagerState = T, ca(T, b)) {
            var N = r.interleaved;
            N === null ? (v.next = v, Ud(r)) : (v.next = N.next, N.next = v), r.interleaved = v;
            return;
          }
        } catch {
        } finally {
        }
      s = Sm(n, r, v, f), s !== null && (v = fr(), dr(s, n, f, v), Rm(s, r, f));
    }
  }
  function Xl(n) {
    var r = n.alternate;
    return n === tn || r !== null && r === tn;
  }
  function us(n, r) {
    Ja = qe = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function Rm(n, r, s) {
    if (s & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Mu(n, s);
    }
  }
  var Ic = { readContext: Sn, useCallback: nn, useContext: nn, useEffect: nn, useImperativeHandle: nn, useInsertionEffect: nn, useLayoutEffect: nn, useMemo: nn, useReducer: nn, useRef: nn, useState: nn, useDebugValue: nn, useDeferredValue: nn, useTransition: nn, useMutableSource: nn, useSyncExternalStore: nn, useId: nn, unstable_isNewReconciler: !1 }, f0 = { readContext: Sn, useCallback: function(n, r) {
    return ya().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Sn, useEffect: Ac, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, tl(
      4194308,
      4,
      Yd.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return tl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return tl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = ya();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var f = ya();
    return r = s !== void 0 ? s(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Fc.bind(null, tn, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = ya();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Mc, useDebugValue: Uc, useDeferredValue: function(n) {
    return ya().memoizedState = n;
  }, useTransition: function() {
    var n = Mc(!1), r = n[0];
    return n = c0.bind(null, n[1]), ya().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var f = tn, v = ya();
    if (en) {
      if (s === void 0)
        throw Error(u(407));
      s = s();
    } else {
      if (s = r(), dn === null)
        throw Error(u(349));
      qo & 30 || Pc(f, r, s);
    }
    v.memoizedState = s;
    var h = { value: s, getSnapshot: r };
    return v.queue = h, Ac(Nc.bind(
      null,
      f,
      h,
      n
    ), [n]), f.flags |= 2048, el(9, Dc.bind(null, f, h, s, r), void 0, null), s;
  }, useId: function() {
    var n = ya(), r = dn.identifierPrefix;
    if (en) {
      var s = _i, f = Wn;
      s = (f & ~(1 << 32 - la(f) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = Zr++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else
      s = Xo++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, d0 = {
    readContext: Sn,
    useCallback: ql,
    useContext: Sn,
    useEffect: ls,
    useImperativeHandle: Gl,
    useInsertionEffect: zc,
    useLayoutEffect: jc,
    useMemo: co,
    useReducer: is,
    useRef: Lc,
    useState: function() {
      return is(Jo);
    },
    useDebugValue: Uc,
    useDeferredValue: function(n) {
      var r = Mr();
      return Lr(r, Z.memoizedState, n);
    },
    useTransition: function() {
      var n = is(Jo)[0], r = Mr().memoizedState;
      return [n, r];
    },
    useMutableSource: Rc,
    useSyncExternalStore: xc,
    useId: Gt,
    unstable_isNewReconciler: !1
  }, Wd = { readContext: Sn, useCallback: ql, useContext: Sn, useEffect: ls, useImperativeHandle: Gl, useInsertionEffect: zc, useLayoutEffect: jc, useMemo: co, useReducer: os, useRef: Lc, useState: function() {
    return os(Jo);
  }, useDebugValue: Uc, useDeferredValue: function(n) {
    var r = Mr();
    return Z === null ? r.memoizedState = n : Lr(r, Z.memoizedState, n);
  }, useTransition: function() {
    var n = os(Jo)[0], r = Mr().memoizedState;
    return [n, r];
  }, useMutableSource: Rc, useSyncExternalStore: xc, useId: Gt, unstable_isNewReconciler: !1 };
  function Kl(n, r) {
    try {
      var s = "", f = r;
      do
        s += nt(f), f = f.return;
      while (f);
      var v = s;
    } catch (h) {
      v = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: v, digest: null };
  }
  function ss(n, r, s) {
    return { value: n, source: null, stack: s ?? null, digest: r ?? null };
  }
  function Vc(n, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var p0 = typeof WeakMap == "function" ? WeakMap : Map;
  function xm(n, r, s) {
    s = Ei(-1, s), s.tag = 3, s.payload = { element: null };
    var f = r.value;
    return s.callback = function() {
      Xc || (Xc = !0, ol = f), Vc(n, r);
    }, s;
  }
  function cs(n, r, s) {
    s = Ei(-1, s), s.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var v = r.value;
      s.payload = function() {
        return f(v);
      }, s.callback = function() {
        Vc(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function() {
      Vc(n, r), typeof f != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([this]) : ni.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), s;
  }
  function Pm(n, r, s) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new p0();
      var v = /* @__PURE__ */ new Set();
      f.set(r, v);
    } else
      v = f.get(r), v === void 0 && (v = /* @__PURE__ */ new Set(), f.set(r, v));
    v.has(s) || (v.add(s), n = _0.bind(null, n, r, s), r.then(n, n));
  }
  function Qd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Gd(n, r, s, f, v) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = v, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Ei(-1, 1), r.tag = 2, oo(s, r, 1))), s.lanes |= 1), n);
  }
  var v0 = te.ReactCurrentOwner, Tn = !1;
  function Nn(n, r, s, f) {
    r.child = n === null ? Tm(r, null, s, f) : Wl(r, n.child, s, f);
  }
  function fo(n, r, s, f, v) {
    s = s.render;
    var h = r.ref;
    return me(r, v), f = so(n, r, s, f, h, v), s = Zo(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Gn(n, r, v)) : (en && s && mc(r), r.flags |= 1, Nn(n, r, f, v), r.child);
  }
  function Bc(n, r, s, f, v) {
    if (n === null) {
      var h = s.type;
      return typeof h == "function" && !pp(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = h, Ar(n, r, h, f, v)) : (n = nf(s.type, null, f, r, r.mode, v), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & v)) {
      var b = h.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Yu, s(b, f) && n.ref === r.ref)
        return Gn(n, r, v);
    }
    return r.flags |= 1, n = ho(h, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ar(n, r, s, f, v) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Yu(h, f) && n.ref === r.ref)
        if (Tn = !1, r.pendingProps = f = h, (n.lanes & v) !== 0)
          n.flags & 131072 && (Tn = !0);
        else
          return r.lanes = n.lanes, Gn(n, r, v);
    }
    return Zl(n, r, s, f, v);
  }
  function nl(n, r, s) {
    var f = r.pendingProps, v = f.children, h = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, kt(au, Jr), Jr |= s;
      else {
        if (!(s & 1073741824))
          return n = h !== null ? h.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, kt(au, Jr), Jr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = h !== null ? h.baseLanes : s, kt(au, Jr), Jr |= f;
      }
    else
      h !== null ? (f = h.baseLanes | s, r.memoizedState = null) : f = s, kt(au, Jr), Jr |= f;
    return Nn(n, r, v, s), r.child;
  }
  function ut(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Zl(n, r, s, f, v) {
    var h = ln(s) ? Pr : Ze.current;
    return h = da(r, h), me(r, v), s = so(n, r, s, f, h, v), f = Zo(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~v, Gn(n, r, v)) : (en && f && mc(r), r.flags |= 1, Nn(n, r, s, v), r.child);
  }
  function qd(n, r, s, f, v) {
    if (ln(s)) {
      var h = !0;
      vc(r);
    } else
      h = !1;
    if (me(r, v), r.stateNode === null)
      ur(n, r), Em(r, s, f), wc(r, s, f, v), f = !0;
    else if (n === null) {
      var b = r.stateNode, T = r.memoizedProps;
      b.props = T;
      var N = b.context, Q = s.contextType;
      typeof Q == "object" && Q !== null ? Q = Sn(Q) : (Q = ln(s) ? Pr : Ze.current, Q = da(r, Q));
      var ae = s.getDerivedStateFromProps, le = typeof ae == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      le || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== f || N !== Q) && wm(r, b, f, Q), io = !1;
      var re = r.memoizedState;
      b.state = re, lo(r, f, b, v), N = r.memoizedState, T !== f || re !== N || vn.current || io ? (typeof ae == "function" && (Id(r, s, ae, f), N = r.memoizedState), (T = io || bm(r, s, T, f, re, N, Q)) ? (le || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = N), b.props = f, b.state = N, b.context = Q, f = T) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      b = r.stateNode, Dn(n, r), T = r.memoizedProps, Q = r.type === r.elementType ? T : Kr(r.type, T), b.props = Q, le = r.pendingProps, re = b.context, N = s.contextType, typeof N == "object" && N !== null ? N = Sn(N) : (N = ln(s) ? Pr : Ze.current, N = da(r, N));
      var be = s.getDerivedStateFromProps;
      (ae = typeof be == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (T !== le || re !== N) && wm(r, b, f, N), io = !1, re = r.memoizedState, b.state = re, lo(r, f, b, v);
      var Re = r.memoizedState;
      T !== le || re !== Re || vn.current || io ? (typeof be == "function" && (Id(r, s, be, f), Re = r.memoizedState), (Q = io || bm(r, s, Q, f, re, Re, N) || !1) ? (ae || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(f, Re, N), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(f, Re, N)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Re), b.props = f, b.state = Re, b.context = N, f = Q) : (typeof b.componentDidUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return Dm(n, r, s, f, h, v);
  }
  function Dm(n, r, s, f, v, h) {
    ut(n, r);
    var b = (r.flags & 128) !== 0;
    if (!f && !b)
      return v && mm(r, s, !1), Gn(n, r, h);
    f = r.stateNode, v0.current = r;
    var T = b && typeof s.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && b ? (r.child = Wl(r, n.child, null, h), r.child = Wl(r, null, T, h)) : Nn(n, r, T, h), r.memoizedState = f.state, v && mm(r, s, !0), r.child;
  }
  function Nm(n) {
    var r = n.stateNode;
    r.pendingContext ? to(n, r.pendingContext, r.pendingContext !== r.context) : r.context && to(n, r.context, !1), Vd(n, r.containerInfo);
  }
  function Yc(n, r, s, f, v) {
    return cn(), Ad(v), r.flags |= 256, Nn(n, r, s, f), r.child;
  }
  var rl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Kd(n, r, s) {
    var f = r.pendingProps, v = We.current, h = !1, b = (r.flags & 128) !== 0, T;
    if ((T = b) || (T = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), T ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), kt(We, v & 1), n === null)
      return yc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (b = f.children, n = f.fallback, h ? (f = r.mode, h = r.child, b = { mode: "hidden", children: b }, !(f & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = b) : h = _s(b, f, 0, null), n = fl(n, f, s, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Xd(s), r.memoizedState = rl, n) : Zd(r, b));
    if (v = n.memoizedState, v !== null && (T = v.dehydrated, T !== null))
      return m0(n, r, b, f, T, v, s);
    if (h) {
      h = f.fallback, b = r.mode, v = n.child, T = v.sibling;
      var N = { mode: "hidden", children: f.children };
      return !(b & 1) && r.child !== v ? (f = r.child, f.childLanes = 0, f.pendingProps = N, r.deletions = null) : (f = ho(v, N), f.subtreeFlags = v.subtreeFlags & 14680064), T !== null ? h = ho(T, h) : (h = fl(h, b, s, null), h.flags |= 2), h.return = r, f.return = r, f.sibling = h, r.child = f, f = h, h = r.child, b = n.child.memoizedState, b = b === null ? Xd(s) : { baseLanes: b.baseLanes | s, cachePool: null, transitions: b.transitions }, h.memoizedState = b, h.childLanes = n.childLanes & ~s, r.memoizedState = rl, f;
    }
    return h = n.child, n = h.sibling, f = ho(h, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = s), f.return = r, f.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Zd(n, r) {
    return r = _s({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jl(n, r, s, f) {
    return f !== null && Ad(f), Wl(r, n.child, null, s), n = Zd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function m0(n, r, s, f, v, h, b) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, f = ss(Error(u(422))), Jl(n, r, b, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = f.fallback, v = r.mode, f = _s({ mode: "visible", children: f.children }, v, 0, null), h = fl(h, v, b, null), h.flags |= 2, f.return = r, h.return = r, f.sibling = h, r.child = f, r.mode & 1 && Wl(r, n.child, null, b), r.child.memoizedState = Xd(b), r.memoizedState = rl, h);
    if (!(r.mode & 1))
      return Jl(n, r, b, null);
    if (v.data === "$!") {
      if (f = v.nextSibling && v.nextSibling.dataset, f)
        var T = f.dgst;
      return f = T, h = Error(u(419)), f = ss(h, f, void 0), Jl(n, r, b, f);
    }
    if (T = (b & n.childLanes) !== 0, Tn || T) {
      if (f = dn, f !== null) {
        switch (b & -b) {
          case 4:
            v = 2;
            break;
          case 16:
            v = 8;
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
            v = 32;
            break;
          case 536870912:
            v = 268435456;
            break;
          default:
            v = 0;
        }
        v = v & (f.suspendedLanes | b) ? 0 : v, v !== 0 && v !== h.retryLane && (h.retryLane = v, bi(n, v), dr(f, n, v, -1));
      }
      return cp(), f = ss(Error(u(421))), Jl(n, r, b, f);
    }
    return v.data === "$?" ? (r.flags |= 128, r.child = n.child, r = b0.bind(null, n), v._reactRetry = r, null) : (n = h.treeContext, kr = Ua(v.nextSibling), Xr = r, en = !0, ma = null, n !== null && ($r[lr++] = Wn, $r[lr++] = _i, $r[lr++] = va, Wn = n.id, _i = n.overflow, va = r), r = Zd(r, f.children), r.flags |= 4096, r);
  }
  function Jd(n, r, s) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), Hn(n.return, r, s);
  }
  function Wc(n, r, s, f, v) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: s, tailMode: v } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = f, h.tail = s, h.tailMode = v);
  }
  function ep(n, r, s) {
    var f = r.pendingProps, v = f.revealOrder, h = f.tail;
    if (Nn(n, r, f.children, s), f = We.current, f & 2)
      f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jd(n, s, r);
            else if (n.tag === 19)
              Jd(n, s, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      f &= 1;
    }
    if (kt(We, f), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (s = r.child, v = null; s !== null; )
            n = s.alternate, n !== null && fn(n) === null && (v = s), s = s.sibling;
          s = v, s === null ? (v = r.child, r.child = null) : (v = s.sibling, s.sibling = null), Wc(r, !1, v, s, h);
          break;
        case "backwards":
          for (s = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && fn(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = s, s = v, v = n;
          }
          Wc(r, !0, s, null, h);
          break;
        case "together":
          Wc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ur(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Gn(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), Ti |= r.lanes, !(s & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(u(153));
    if (r.child !== null) {
      for (n = r.child, s = ho(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; )
        n = n.sibling, s = s.sibling = ho(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function Ci(n, r, s) {
    switch (r.tag) {
      case 3:
        Nm(r), cn();
        break;
      case 5:
        Be(r);
        break;
      case 1:
        ln(r.type) && vc(r);
        break;
      case 4:
        Vd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, v = r.memoizedProps.value;
        kt(Za, f._currentValue), f._currentValue = v;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (kt(We, We.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Kd(n, r, s) : (kt(We, We.current & 1), n = Gn(n, r, s), n !== null ? n.sibling : null);
        kt(We, We.current & 1);
        break;
      case 19:
        if (f = (s & r.childLanes) !== 0, n.flags & 128) {
          if (f)
            return ep(n, r, s);
          r.flags |= 128;
        }
        if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), kt(We, We.current), f)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, nl(n, r, s);
    }
    return Gn(n, r, s);
  }
  var fs, al, ga, $n;
  fs = function(n, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, al = function() {
  }, ga = function(n, r, s, f) {
    var v = n.memoizedProps;
    if (v !== f) {
      n = r.stateNode, Go(Fa.current);
      var h = null;
      switch (s) {
        case "input":
          v = yn(n, v), f = yn(n, f), h = [];
          break;
        case "select":
          v = H({}, v, { value: void 0 }), f = H({}, f, { value: void 0 }), h = [];
          break;
        case "textarea":
          v = Da(n, v), f = Da(n, f), h = [];
          break;
        default:
          typeof v.onClick != "function" && typeof f.onClick == "function" && (n.onclick = pc);
      }
      An(s, f);
      var b;
      s = null;
      for (Q in v)
        if (!f.hasOwnProperty(Q) && v.hasOwnProperty(Q) && v[Q] != null)
          if (Q === "style") {
            var T = v[Q];
            for (b in T)
              T.hasOwnProperty(b) && (s || (s = {}), s[b] = "");
          } else
            Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (_.hasOwnProperty(Q) ? h || (h = []) : (h = h || []).push(Q, null));
      for (Q in f) {
        var N = f[Q];
        if (T = v != null ? v[Q] : void 0, f.hasOwnProperty(Q) && N !== T && (N != null || T != null))
          if (Q === "style")
            if (T) {
              for (b in T)
                !T.hasOwnProperty(b) || N && N.hasOwnProperty(b) || (s || (s = {}), s[b] = "");
              for (b in N)
                N.hasOwnProperty(b) && T[b] !== N[b] && (s || (s = {}), s[b] = N[b]);
            } else
              s || (h || (h = []), h.push(
                Q,
                s
              )), s = N;
          else
            Q === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, T = T ? T.__html : void 0, N != null && T !== N && (h = h || []).push(Q, N)) : Q === "children" ? typeof N != "string" && typeof N != "number" || (h = h || []).push(Q, "" + N) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (_.hasOwnProperty(Q) ? (N != null && Q === "onScroll" && Qt("scroll", n), h || T === N || (h = [])) : (h = h || []).push(Q, N));
      }
      s && (h = h || []).push("style", s);
      var Q = h;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, $n = function(n, r, s, f) {
    s !== f && (r.flags |= 4);
  };
  function ds(n, r) {
    if (!en)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), r = r.sibling;
          s === null ? n.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = n.tail;
          for (var f = null; s !== null; )
            s.alternate !== null && (f = s), s = s.sibling;
          f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
      }
  }
  function sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, f = 0;
    if (r)
      for (var v = n.child; v !== null; )
        s |= v.lanes | v.childLanes, f |= v.subtreeFlags & 14680064, f |= v.flags & 14680064, v.return = n, v = v.sibling;
    else
      for (v = n.child; v !== null; )
        s |= v.lanes | v.childLanes, f |= v.subtreeFlags, f |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= f, n.childLanes = s, r;
  }
  function h0(n, r, s) {
    var f = r.pendingProps;
    switch (Md(r), r.tag) {
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
        return sr(r), null;
      case 1:
        return ln(r.type) && pa(), sr(r), null;
      case 3:
        return f = r.stateNode, uo(), $t(vn), $t(Ze), Oc(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (gc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ma !== null && (Ss(ma), ma = null))), al(n, r), sr(r), null;
      case 5:
        mt(r);
        var v = Go(Ql.current);
        if (s = r.type, n !== null && r.stateNode != null)
          ga(n, r, s, f, v), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null)
              throw Error(u(166));
            return sr(r), null;
          }
          if (n = Go(Fa.current), gc(r)) {
            f = r.stateNode, s = r.type;
            var h = r.memoizedProps;
            switch (f[Xa] = r, f[Yo] = h, n = (r.mode & 1) !== 0, s) {
              case "dialog":
                Qt("cancel", f), Qt("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Qt("load", f);
                break;
              case "video":
              case "audio":
                for (v = 0; v < qu.length; v++)
                  Qt(qu[v], f);
                break;
              case "source":
                Qt("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Qt(
                  "error",
                  f
                ), Qt("load", f);
                break;
              case "details":
                Qt("toggle", f);
                break;
              case "input":
                En(f, h), Qt("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!h.multiple }, Qt("invalid", f);
                break;
              case "textarea":
                Ir(f, h), Qt("invalid", f);
            }
            An(s, h), v = null;
            for (var b in h)
              if (h.hasOwnProperty(b)) {
                var T = h[b];
                b === "children" ? typeof T == "string" ? f.textContent !== T && (h.suppressHydrationWarning !== !0 && dc(f.textContent, T, n), v = ["children", T]) : typeof T == "number" && f.textContent !== "" + T && (h.suppressHydrationWarning !== !0 && dc(
                  f.textContent,
                  T,
                  n
                ), v = ["children", "" + T]) : _.hasOwnProperty(b) && T != null && b === "onScroll" && Qt("scroll", f);
              }
            switch (s) {
              case "input":
                Nt(f), oa(f, h, !0);
                break;
              case "textarea":
                Nt(f), Vr(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (f.onclick = pc);
            }
            f = v, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            b = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Na(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = b.createElement(s, { is: f.is }) : (n = b.createElement(s), s === "select" && (b = n, f.multiple ? b.multiple = !0 : f.size && (b.size = f.size))) : n = b.createElementNS(n, s), n[Xa] = r, n[Yo] = f, fs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (b = gn(s, f), s) {
                case "dialog":
                  Qt("cancel", n), Qt("close", n), v = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Qt("load", n), v = f;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < qu.length; v++)
                    Qt(qu[v], n);
                  v = f;
                  break;
                case "source":
                  Qt("error", n), v = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Qt(
                    "error",
                    n
                  ), Qt("load", n), v = f;
                  break;
                case "details":
                  Qt("toggle", n), v = f;
                  break;
                case "input":
                  En(n, f), v = yn(n, f), Qt("invalid", n);
                  break;
                case "option":
                  v = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, v = H({}, f, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  Ir(n, f), v = Da(n, f), Qt("invalid", n);
                  break;
                default:
                  v = f;
              }
              An(s, v), T = v;
              for (h in T)
                if (T.hasOwnProperty(h)) {
                  var N = T[h];
                  h === "style" ? At(n, N) : h === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && Vi(n, N)) : h === "children" ? typeof N == "string" ? (s !== "textarea" || N !== "") && $a(n, N) : typeof N == "number" && $a(n, "" + N) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (_.hasOwnProperty(h) ? N != null && h === "onScroll" && Qt("scroll", n) : N != null && ne(n, h, N, b));
                }
              switch (s) {
                case "input":
                  Nt(n), oa(n, f, !1);
                  break;
                case "textarea":
                  Nt(n), Vr(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + Ge(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, h = f.value, h != null ? Qa(n, !!f.multiple, h, !1) : f.defaultValue != null && Qa(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = pc);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          $n(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null)
            throw Error(u(166));
          if (s = Go(Ql.current), Go(Fa.current), gc(r)) {
            if (f = r.stateNode, s = r.memoizedProps, f[Xa] = r, (h = f.nodeValue !== s) && (n = Xr, n !== null))
              switch (n.tag) {
                case 3:
                  dc(f.nodeValue, s, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && dc(f.nodeValue, s, (n.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            f = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(f), f[Xa] = r, r.stateNode = f;
        }
        return sr(r), null;
      case 13:
        if ($t(We), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (en && kr !== null && r.mode & 1 && !(r.flags & 128))
            gm(), cn(), r.flags |= 98560, h = !1;
          else if (h = gc(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!h)
                throw Error(u(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(u(317));
              h[Xa] = r;
            } else
              cn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            sr(r), h = !1;
          } else
            ma !== null && (Ss(ma), ma = null), h = !0;
          if (!h)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? Mn === 0 && (Mn = 3) : cp())), r.updateQueue !== null && (r.flags |= 4), sr(r), null);
      case 4:
        return uo(), al(n, r), n === null && Il(r.stateNode.containerInfo), sr(r), null;
      case 10:
        return ao(r.type._context), sr(r), null;
      case 17:
        return ln(r.type) && pa(), sr(r), null;
      case 19:
        if ($t(We), h = r.memoizedState, h === null)
          return sr(r), null;
        if (f = (r.flags & 128) !== 0, b = h.rendering, b === null)
          if (f)
            ds(h, !1);
          else {
            if (Mn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (b = fn(n), b !== null) {
                  for (r.flags |= 128, ds(h, !1), f = b.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = s, s = r.child; s !== null; )
                    h = s, n = f, h.flags &= 14680066, b = h.alternate, b === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = b.childLanes, h.lanes = b.lanes, h.child = b.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = b.memoizedProps, h.memoizedState = b.memoizedState, h.updateQueue = b.updateQueue, h.type = b.type, n = b.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
                  return kt(We, We.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            h.tail !== null && Rt() > ou && (r.flags |= 128, f = !0, ds(h, !1), r.lanes = 4194304);
          }
        else {
          if (!f)
            if (n = fn(b), n !== null) {
              if (r.flags |= 128, f = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), ds(h, !0), h.tail === null && h.tailMode === "hidden" && !b.alternate && !en)
                return sr(r), null;
            } else
              2 * Rt() - h.renderingStartTime > ou && s !== 1073741824 && (r.flags |= 128, f = !0, ds(h, !1), r.lanes = 4194304);
          h.isBackwards ? (b.sibling = r.child, r.child = b) : (s = h.last, s !== null ? s.sibling = b : r.child = b, h.last = b);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Rt(), r.sibling = null, s = We.current, kt(We, f ? s & 1 | 2 : s & 1), r) : (sr(r), null);
      case 22:
      case 23:
        return sp(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? Jr & 1073741824 && (sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, r.tag));
  }
  function tp(n, r) {
    switch (Md(r), r.tag) {
      case 1:
        return ln(r.type) && pa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return uo(), $t(vn), $t(Ze), Oc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return mt(r), null;
      case 13:
        if ($t(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(u(340));
          cn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return $t(We), null;
      case 4:
        return uo(), null;
      case 10:
        return ao(r.type._context), null;
      case 22:
      case 23:
        return sp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ps = !1, kn = !1, $m = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function eu(n, r) {
    var s = n.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          hn(n, r, f);
        }
      else
        s.current = null;
  }
  function vs(n, r, s) {
    try {
      s();
    } catch (f) {
      hn(n, r, f);
    }
  }
  var km = !1;
  function Mm(n, r) {
    if (Td = jo, n = lc(), hi(n)) {
      if ("selectionStart" in n)
        var s = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          s = (s = n.ownerDocument) && s.defaultView || window;
          var f = s.getSelection && s.getSelection();
          if (f && f.rangeCount !== 0) {
            s = f.anchorNode;
            var v = f.anchorOffset, h = f.focusNode;
            f = f.focusOffset;
            try {
              s.nodeType, h.nodeType;
            } catch {
              s = null;
              break e;
            }
            var b = 0, T = -1, N = -1, Q = 0, ae = 0, le = n, re = null;
            t:
              for (; ; ) {
                for (var be; le !== s || v !== 0 && le.nodeType !== 3 || (T = b + v), le !== h || f !== 0 && le.nodeType !== 3 || (N = b + f), le.nodeType === 3 && (b += le.nodeValue.length), (be = le.firstChild) !== null; )
                  re = le, le = be;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (re === s && ++Q === v && (T = b), re === h && ++ae === f && (N = b), (be = le.nextSibling) !== null)
                    break;
                  le = re, re = le.parentNode;
                }
                le = be;
              }
            s = T === -1 || N === -1 ? null : { start: T, end: N };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (Vo = { focusedElem: n, selectionRange: s }, jo = !1, Te = r; Te !== null; )
      if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Te = n;
      else
        for (; Te !== null; ) {
          r = Te;
          try {
            var Re = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Re !== null) {
                    var De = Re.memoizedProps, _n = Re.memoizedState, j = r.stateNode, M = j.getSnapshotBeforeUpdate(r.elementType === r.type ? De : Kr(r.type, De), _n);
                    j.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var V = r.stateNode.containerInfo;
                  V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (ce) {
            hn(r, r.return, ce);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return Re = km, km = !1, Re;
  }
  function ms(n, r, s) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var v = f = f.next;
      do {
        if ((v.tag & n) === n) {
          var h = v.destroy;
          v.destroy = void 0, h !== void 0 && vs(r, s, h);
        }
        v = v.next;
      } while (v !== f);
    }
  }
  function hs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & n) === n) {
          var f = s.create;
          s.destroy = f();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function np(n) {
    var r = n.ref;
    if (r !== null) {
      var s = n.stateNode;
      switch (n.tag) {
        case 5:
          n = s;
          break;
        default:
          n = s;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Xa], delete r[Yo], delete r[Pd], delete r[s0], delete r[Dd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Lm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Lm(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function tu(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = pc));
    else if (f !== 4 && (n = n.child, n !== null))
      for (tu(n, r, s), n = n.sibling; n !== null; )
        tu(n, r, s), n = n.sibling;
  }
  function ei(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6)
      n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null))
      for (ei(n, r, s), n = n.sibling; n !== null; )
        ei(n, r, s), n = n.sibling;
  }
  var un = null, In = !1;
  function Sa(n, r, s) {
    for (s = s.child; s !== null; )
      nu(n, r, s), s = s.sibling;
  }
  function nu(n, r, s) {
    if (Ma && typeof Ma.onCommitFiberUnmount == "function")
      try {
        Ma.onCommitFiberUnmount(ku, s);
      } catch {
      }
    switch (s.tag) {
      case 5:
        kn || eu(s, r);
      case 6:
        var f = un, v = In;
        un = null, Sa(n, r, s), un = f, In = v, un !== null && (In ? (n = un, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : un.removeChild(s.stateNode));
        break;
      case 18:
        un !== null && (In ? (n = un, s = s.stateNode, n.nodeType === 8 ? Zi(n.parentNode, s) : n.nodeType === 1 && Zi(n, s), ju(n)) : Zi(un, s.stateNode));
        break;
      case 4:
        f = un, v = In, un = s.stateNode.containerInfo, In = !0, Sa(n, r, s), un = f, In = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kn && (f = s.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          v = f = f.next;
          do {
            var h = v, b = h.destroy;
            h = h.tag, b !== void 0 && (h & 2 || h & 4) && vs(s, r, b), v = v.next;
          } while (v !== f);
        }
        Sa(n, r, s);
        break;
      case 1:
        if (!kn && (eu(s, r), f = s.stateNode, typeof f.componentWillUnmount == "function"))
          try {
            f.props = s.memoizedProps, f.state = s.memoizedState, f.componentWillUnmount();
          } catch (T) {
            hn(s, r, T);
          }
        Sa(n, r, s);
        break;
      case 21:
        Sa(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (kn = (f = kn) || s.memoizedState !== null, Sa(n, r, s), kn = f) : Sa(n, r, s);
        break;
      default:
        Sa(n, r, s);
    }
  }
  function Oi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new $m()), r.forEach(function(f) {
        var v = E0.bind(null, n, f);
        s.has(f) || (s.add(f), f.then(v, v));
      });
    }
  }
  function Ha(n, r) {
    var s = r.deletions;
    if (s !== null)
      for (var f = 0; f < s.length; f++) {
        var v = s[f];
        try {
          var h = n, b = r, T = b;
          e:
            for (; T !== null; ) {
              switch (T.tag) {
                case 5:
                  un = T.stateNode, In = !1;
                  break e;
                case 3:
                  un = T.stateNode.containerInfo, In = !0;
                  break e;
                case 4:
                  un = T.stateNode.containerInfo, In = !0;
                  break e;
              }
              T = T.return;
            }
          if (un === null)
            throw Error(u(160));
          nu(h, b, v), un = null, In = !1;
          var N = v.alternate;
          N !== null && (N.return = null), v.return = null;
        } catch (Q) {
          hn(v, r, Q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Am(r, n), r = r.sibling;
  }
  function Am(n, r) {
    var s = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ha(r, n), ti(n), f & 4) {
          try {
            ms(3, n, n.return), hs(3, n);
          } catch (De) {
            hn(n, n.return, De);
          }
          try {
            ms(5, n, n.return);
          } catch (De) {
            hn(n, n.return, De);
          }
        }
        break;
      case 1:
        Ha(r, n), ti(n), f & 512 && s !== null && eu(s, s.return);
        break;
      case 5:
        if (Ha(r, n), ti(n), f & 512 && s !== null && eu(s, s.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            $a(v, "");
          } catch (De) {
            hn(n, n.return, De);
          }
        }
        if (f & 4 && (v = n.stateNode, v != null)) {
          var h = n.memoizedProps, b = s !== null ? s.memoizedProps : h, T = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null)
            try {
              T === "input" && h.type === "radio" && h.name != null && ar(v, h), gn(T, b);
              var Q = gn(T, h);
              for (b = 0; b < N.length; b += 2) {
                var ae = N[b], le = N[b + 1];
                ae === "style" ? At(v, le) : ae === "dangerouslySetInnerHTML" ? Vi(v, le) : ae === "children" ? $a(v, le) : ne(v, ae, le, Q);
              }
              switch (T) {
                case "input":
                  ir(v, h);
                  break;
                case "textarea":
                  Ga(v, h);
                  break;
                case "select":
                  var re = v._wrapperState.wasMultiple;
                  v._wrapperState.wasMultiple = !!h.multiple;
                  var be = h.value;
                  be != null ? Qa(v, !!h.multiple, be, !1) : re !== !!h.multiple && (h.defaultValue != null ? Qa(
                    v,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Qa(v, !!h.multiple, h.multiple ? [] : "", !1));
              }
              v[Yo] = h;
            } catch (De) {
              hn(n, n.return, De);
            }
        }
        break;
      case 6:
        if (Ha(r, n), ti(n), f & 4) {
          if (n.stateNode === null)
            throw Error(u(162));
          v = n.stateNode, h = n.memoizedProps;
          try {
            v.nodeValue = h;
          } catch (De) {
            hn(n, n.return, De);
          }
        }
        break;
      case 3:
        if (Ha(r, n), ti(n), f & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            ju(r.containerInfo);
          } catch (De) {
            hn(n, n.return, De);
          }
        break;
      case 4:
        Ha(r, n), ti(n);
        break;
      case 13:
        Ha(r, n), ti(n), v = n.child, v.flags & 8192 && (h = v.memoizedState !== null, v.stateNode.isHidden = h, !h || v.alternate !== null && v.alternate.memoizedState !== null || (op = Rt())), f & 4 && Oi(n);
        break;
      case 22:
        if (ae = s !== null && s.memoizedState !== null, n.mode & 1 ? (kn = (Q = kn) || ae, Ha(r, n), kn = Q) : Ha(r, n), ti(n), f & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ae && n.mode & 1)
            for (Te = n, ae = n.child; ae !== null; ) {
              for (le = Te = ae; Te !== null; ) {
                switch (re = Te, be = re.child, re.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ms(4, re, re.return);
                    break;
                  case 1:
                    eu(re, re.return);
                    var Re = re.stateNode;
                    if (typeof Re.componentWillUnmount == "function") {
                      f = re, s = re.return;
                      try {
                        r = f, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                      } catch (De) {
                        hn(f, s, De);
                      }
                    }
                    break;
                  case 5:
                    eu(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      ap(le);
                      continue;
                    }
                }
                be !== null ? (be.return = re, Te = be) : ap(le);
              }
              ae = ae.sibling;
            }
          e:
            for (ae = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ae === null) {
                  ae = le;
                  try {
                    v = le.stateNode, Q ? (h = v.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (T = le.stateNode, N = le.memoizedProps.style, b = N != null && N.hasOwnProperty("display") ? N.display : null, T.style.display = vt("display", b));
                  } catch (De) {
                    hn(n, n.return, De);
                  }
                }
              } else if (le.tag === 6) {
                if (ae === null)
                  try {
                    le.stateNode.nodeValue = Q ? "" : le.memoizedProps;
                  } catch (De) {
                    hn(n, n.return, De);
                  }
              } else if ((le.tag !== 22 && le.tag !== 23 || le.memoizedState === null || le === n) && le.child !== null) {
                le.child.return = le, le = le.child;
                continue;
              }
              if (le === n)
                break e;
              for (; le.sibling === null; ) {
                if (le.return === null || le.return === n)
                  break e;
                ae === le && (ae = null), le = le.return;
              }
              ae === le && (ae = null), le.sibling.return = le.return, le = le.sibling;
            }
        }
        break;
      case 19:
        Ha(r, n), ti(n), f & 4 && Oi(n);
        break;
      case 21:
        break;
      default:
        Ha(
          r,
          n
        ), ti(n);
    }
  }
  function ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (Lm(s)) {
              var f = s;
              break e;
            }
            s = s.return;
          }
          throw Error(u(160));
        }
        switch (f.tag) {
          case 5:
            var v = f.stateNode;
            f.flags & 32 && ($a(v, ""), f.flags &= -33);
            var h = Qc(n);
            ei(n, h, v);
            break;
          case 3:
          case 4:
            var b = f.stateNode.containerInfo, T = Qc(n);
            tu(n, T, b);
            break;
          default:
            throw Error(u(161));
        }
      } catch (N) {
        hn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function zm(n, r, s) {
    Te = n, ru(n);
  }
  function ru(n, r, s) {
    for (var f = (n.mode & 1) !== 0; Te !== null; ) {
      var v = Te, h = v.child;
      if (v.tag === 22 && f) {
        var b = v.memoizedState !== null || ps;
        if (!b) {
          var T = v.alternate, N = T !== null && T.memoizedState !== null || kn;
          T = ps;
          var Q = kn;
          if (ps = b, (kn = N) && !Q)
            for (Te = v; Te !== null; )
              b = Te, N = b.child, b.tag === 22 && b.memoizedState !== null ? Um(v) : N !== null ? (N.return = b, Te = N) : Um(v);
          for (; h !== null; )
            Te = h, ru(h), h = h.sibling;
          Te = v, ps = T, kn = Q;
        }
        jm(n);
      } else
        v.subtreeFlags & 8772 && h !== null ? (h.return = v, Te = h) : jm(n);
    }
  }
  function jm(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var s = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                kn || hs(5, r);
                break;
              case 1:
                var f = r.stateNode;
                if (r.flags & 4 && !kn)
                  if (s === null)
                    f.componentDidMount();
                  else {
                    var v = r.elementType === r.type ? s.memoizedProps : Kr(r.type, s.memoizedProps);
                    f.componentDidUpdate(v, s.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = r.updateQueue;
                h !== null && Qo(r, h, f);
                break;
              case 3:
                var b = r.updateQueue;
                if (b !== null) {
                  if (s = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        s = r.child.stateNode;
                        break;
                      case 1:
                        s = r.child.stateNode;
                    }
                  Qo(r, b, s);
                }
                break;
              case 5:
                var T = r.stateNode;
                if (s === null && r.flags & 4) {
                  s = T;
                  var N = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && s.focus();
                      break;
                    case "img":
                      N.src && (s.src = N.src);
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
                if (r.memoizedState === null) {
                  var Q = r.alternate;
                  if (Q !== null) {
                    var ae = Q.memoizedState;
                    if (ae !== null) {
                      var le = ae.dehydrated;
                      le !== null && ju(le);
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
                throw Error(u(163));
            }
          kn || r.flags & 512 && np(r);
        } catch (re) {
          hn(r, r.return, re);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, Te = s;
        break;
      }
      Te = r.return;
    }
  }
  function ap(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, Te = s;
        break;
      }
      Te = r.return;
    }
  }
  function Um(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              hs(4, r);
            } catch (N) {
              hn(r, s, N);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var v = r.return;
              try {
                f.componentDidMount();
              } catch (N) {
                hn(r, v, N);
              }
            }
            var h = r.return;
            try {
              np(r);
            } catch (N) {
              hn(r, h, N);
            }
            break;
          case 5:
            var b = r.return;
            try {
              np(r);
            } catch (N) {
              hn(r, b, N);
            }
        }
      } catch (N) {
        hn(r, r.return, N);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Te = T;
        break;
      }
      Te = r.return;
    }
  }
  var Gc = Math.ceil, ys = te.ReactCurrentDispatcher, ip = te.ReactCurrentOwner, cr = te.ReactCurrentBatchConfig, gt = 0, dn = null, mn = null, Vn = 0, Jr = 0, au = lt(0), Mn = 0, gs = null, Ti = 0, qc = 0, iu = 0, il = null, mr = null, op = 0, ou = 1 / 0, Ri = null, Xc = !1, ol = null, ni = null, po = !1, vo = null, Kc = 0, lu = 0, Zc = null, ll = -1, ul = 0;
  function fr() {
    return gt & 6 ? Rt() : ll !== -1 ? ll : ll = Rt();
  }
  function Rn(n) {
    return n.mode & 1 ? gt & 2 && Vn !== 0 ? Vn & -Vn : Sc.transition !== null ? (ul === 0 && (ul = qs()), ul) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : od(n.type)), n) : 1;
  }
  function dr(n, r, s, f) {
    if (50 < lu)
      throw lu = 0, Zc = null, Error(u(185));
    zo(n, s, f), (!(gt & 2) || n !== dn) && (n === dn && (!(gt & 2) && (qc |= s), Mn === 4 && _a(n, Vn)), pr(n, f), s === 1 && gt === 0 && !(r.mode & 1) && (ou = Rt() + 500, Fn && Dr()));
  }
  function pr(n, r) {
    var s = n.callbackNode;
    Gs(n, r);
    var f = La(n, n === dn ? Vn : 0);
    if (f === 0)
      s !== null && vr(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (s != null && vr(s), r === 1)
        n.tag === 0 ? $d(Fm.bind(null, n)) : Nd(Fm.bind(null, n)), xd(function() {
          !(gt & 6) && Dr();
        }), s = null;
      else {
        switch (rd(f)) {
          case 1:
            s = di;
            break;
          case 4:
            s = yt;
            break;
          case 16:
            s = Qi;
            break;
          case 536870912:
            s = Jf;
            break;
          default:
            s = Qi;
        }
        s = dp(s, uu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function uu(n, r) {
    if (ll = -1, ul = 0, gt & 6)
      throw Error(u(327));
    var s = n.callbackNode;
    if (cu() && n.callbackNode !== s)
      return null;
    var f = La(n, n === dn ? Vn : 0);
    if (f === 0)
      return null;
    if (f & 30 || f & n.expiredLanes || r)
      r = ef(n, f);
    else {
      r = f;
      var v = gt;
      gt |= 2;
      var h = Jc();
      (dn !== n || Vn !== r) && (Ri = null, ou = Rt() + 500, sl(n, r));
      do
        try {
          g0();
          break;
        } catch (T) {
          Hm(n, T);
        }
      while (1);
      jd(), ys.current = h, gt = v, mn !== null ? r = 0 : (dn = null, Vn = 0, r = Mn);
    }
    if (r !== 0) {
      if (r === 2 && (v = td(n), v !== 0 && (f = v, r = lp(n, v))), r === 1)
        throw s = gs, sl(n, 0), _a(n, f), pr(n, Rt()), s;
      if (r === 6)
        _a(n, f);
      else {
        if (v = n.current.alternate, !(f & 30) && !up(v) && (r = ef(n, f), r === 2 && (h = td(n), h !== 0 && (f = h, r = lp(n, h))), r === 1))
          throw s = gs, sl(n, 0), _a(n, f), pr(n, Rt()), s;
        switch (n.finishedWork = v, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            cl(n, mr, Ri);
            break;
          case 3:
            if (_a(n, f), (f & 130023424) === f && (r = op + 500 - Rt(), 10 < r)) {
              if (La(n, 0) !== 0)
                break;
              if (v = n.suspendedLanes, (v & f) !== f) {
                fr(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Bo(cl.bind(null, n, mr, Ri), r);
              break;
            }
            cl(n, mr, Ri);
            break;
          case 4:
            if (_a(n, f), (f & 4194240) === f)
              break;
            for (r = n.eventTimes, v = -1; 0 < f; ) {
              var b = 31 - la(f);
              h = 1 << b, b = r[b], b > v && (v = b), f &= ~h;
            }
            if (f = v, f = Rt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Gc(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = Bo(cl.bind(null, n, mr, Ri), f);
              break;
            }
            cl(n, mr, Ri);
            break;
          case 5:
            cl(n, mr, Ri);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return pr(n, Rt()), n.callbackNode === s ? uu.bind(null, n) : null;
  }
  function lp(n, r) {
    var s = il;
    return n.current.memoizedState.isDehydrated && (sl(n, r).flags |= 256), n = ef(n, r), n !== 2 && (r = mr, mr = s, r !== null && Ss(r)), n;
  }
  function Ss(n) {
    mr === null ? mr = n : mr.push.apply(mr, n);
  }
  function up(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var f = 0; f < s.length; f++) {
            var v = s[f], h = v.getSnapshot;
            v = v.value;
            try {
              if (!ca(h(), v))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null)
        s.return = r, r = s;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function _a(n, r) {
    for (r &= ~iu, r &= ~qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - la(r), f = 1 << s;
      n[s] = -1, r &= ~f;
    }
  }
  function Fm(n) {
    if (gt & 6)
      throw Error(u(327));
    cu();
    var r = La(n, 0);
    if (!(r & 1))
      return pr(n, Rt()), null;
    var s = ef(n, r);
    if (n.tag !== 0 && s === 2) {
      var f = td(n);
      f !== 0 && (r = f, s = lp(n, f));
    }
    if (s === 1)
      throw s = gs, sl(n, 0), _a(n, r), pr(n, Rt()), s;
    if (s === 6)
      throw Error(u(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, cl(n, mr, Ri), pr(n, Rt()), null;
  }
  function su(n, r) {
    var s = gt;
    gt |= 1;
    try {
      return n(r);
    } finally {
      gt = s, gt === 0 && (ou = Rt() + 500, Fn && Dr());
    }
  }
  function mo(n) {
    vo !== null && vo.tag === 0 && !(gt & 6) && cu();
    var r = gt;
    gt |= 1;
    var s = cr.transition, f = zt;
    try {
      if (cr.transition = null, zt = 1, n)
        return n();
    } finally {
      zt = f, cr.transition = s, gt = r, !(gt & 6) && Dr();
    }
  }
  function sp() {
    Jr = au.current, $t(au);
  }
  function sl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, vm(s)), mn !== null)
      for (s = mn.return; s !== null; ) {
        var f = s;
        switch (Md(f), f.tag) {
          case 1:
            f = f.type.childContextTypes, f != null && pa();
            break;
          case 3:
            uo(), $t(vn), $t(Ze), Oc();
            break;
          case 5:
            mt(f);
            break;
          case 4:
            uo();
            break;
          case 13:
            $t(We);
            break;
          case 19:
            $t(We);
            break;
          case 10:
            ao(f.type._context);
            break;
          case 22:
          case 23:
            sp();
        }
        s = s.return;
      }
    if (dn = n, mn = n = ho(n.current, null), Vn = Jr = r, Mn = 0, gs = null, iu = qc = Ti = 0, mr = il = null, Qn !== null) {
      for (r = 0; r < Qn.length; r++)
        if (s = Qn[r], f = s.interleaved, f !== null) {
          s.interleaved = null;
          var v = f.next, h = s.pending;
          if (h !== null) {
            var b = h.next;
            h.next = v, f.next = b;
          }
          s.pending = f;
        }
      Qn = null;
    }
    return n;
  }
  function Hm(n, r) {
    do {
      var s = mn;
      try {
        if (jd(), Tc.current = Ic, qe) {
          for (var f = tn.memoizedState; f !== null; ) {
            var v = f.queue;
            v !== null && (v.pending = null), f = f.next;
          }
          qe = !1;
        }
        if (qo = 0, _t = Z = tn = null, Ja = !1, Zr = 0, ip.current = null, s === null || s.return === null) {
          Mn = 1, gs = r, mn = null;
          break;
        }
        e: {
          var h = n, b = s.return, T = s, N = r;
          if (r = Vn, T.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var Q = N, ae = T, le = ae.tag;
            if (!(ae.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var re = ae.alternate;
              re ? (ae.updateQueue = re.updateQueue, ae.memoizedState = re.memoizedState, ae.lanes = re.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var be = Qd(b);
            if (be !== null) {
              be.flags &= -257, Gd(be, b, T, h, r), be.mode & 1 && Pm(h, Q, r), r = be, N = Q;
              var Re = r.updateQueue;
              if (Re === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(N), r.updateQueue = De;
              } else
                Re.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                Pm(h, Q, r), cp();
                break e;
              }
              N = Error(u(426));
            }
          } else if (en && T.mode & 1) {
            var _n = Qd(b);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), Gd(_n, b, T, h, r), Ad(Kl(N, T));
              break e;
            }
          }
          h = N = Kl(N, T), Mn !== 4 && (Mn = 2), il === null ? il = [h] : il.push(h), h = b;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var j = xm(h, N, r);
                Hd(h, j);
                break e;
              case 1:
                T = N;
                var M = h.type, V = h.stateNode;
                if (!(h.flags & 128) && (typeof M.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (ni === null || !ni.has(V)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var ce = cs(h, T, r);
                  Hd(h, ce);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        fp(s);
      } catch (Ne) {
        r = Ne, mn === s && s !== null && (mn = s = s.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jc() {
    var n = ys.current;
    return ys.current = Ic, n === null ? Ic : n;
  }
  function cp() {
    (Mn === 0 || Mn === 3 || Mn === 2) && (Mn = 4), dn === null || !(Ti & 268435455) && !(qc & 268435455) || _a(dn, Vn);
  }
  function ef(n, r) {
    var s = gt;
    gt |= 2;
    var f = Jc();
    (dn !== n || Vn !== r) && (Ri = null, sl(n, r));
    do
      try {
        y0();
        break;
      } catch (v) {
        Hm(n, v);
      }
    while (1);
    if (jd(), gt = s, ys.current = f, mn !== null)
      throw Error(u(261));
    return dn = null, Vn = 0, Mn;
  }
  function y0() {
    for (; mn !== null; )
      Im(mn);
  }
  function g0() {
    for (; mn !== null && !Wi(); )
      Im(mn);
  }
  function Im(n) {
    var r = Bm(n.alternate, n, Jr);
    n.memoizedProps = n.pendingProps, r === null ? fp(n) : mn = r, ip.current = null;
  }
  function fp(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (s = tp(s, r), s !== null) {
          s.flags &= 32767, mn = s;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Mn = 6, mn = null;
          return;
        }
      } else if (s = h0(s, r, Jr), s !== null) {
        mn = s;
        return;
      }
      if (r = r.sibling, r !== null) {
        mn = r;
        return;
      }
      mn = r = n;
    } while (r !== null);
    Mn === 0 && (Mn = 5);
  }
  function cl(n, r, s) {
    var f = zt, v = cr.transition;
    try {
      cr.transition = null, zt = 1, S0(n, r, s, f);
    } finally {
      cr.transition = v, zt = f;
    }
    return null;
  }
  function S0(n, r, s, f) {
    do
      cu();
    while (vo !== null);
    if (gt & 6)
      throw Error(u(327));
    s = n.finishedWork;
    var v = n.finishedLanes;
    if (s === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current)
      throw Error(u(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = s.lanes | s.childLanes;
    if (Yg(n, h), n === dn && (mn = dn = null, Vn = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || po || (po = !0, dp(Qi, function() {
      return cu(), null;
    })), h = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || h) {
      h = cr.transition, cr.transition = null;
      var b = zt;
      zt = 1;
      var T = gt;
      gt |= 4, ip.current = null, Mm(n, s), Am(s, n), uc(Vo), jo = !!Td, Vo = Td = null, n.current = s, zm(s), Ws(), gt = T, zt = b, cr.transition = h;
    } else
      n.current = s;
    if (po && (po = !1, vo = n, Kc = v), h = n.pendingLanes, h === 0 && (ni = null), xv(s.stateNode), pr(n, Rt()), r !== null)
      for (f = n.onRecoverableError, s = 0; s < r.length; s++)
        v = r[s], f(v.value, { componentStack: v.stack, digest: v.digest });
    if (Xc)
      throw Xc = !1, n = ol, ol = null, n;
    return Kc & 1 && n.tag !== 0 && cu(), h = n.pendingLanes, h & 1 ? n === Zc ? lu++ : (lu = 0, Zc = n) : lu = 0, Dr(), null;
  }
  function cu() {
    if (vo !== null) {
      var n = rd(Kc), r = cr.transition, s = zt;
      try {
        if (cr.transition = null, zt = 16 > n ? 16 : n, vo === null)
          var f = !1;
        else {
          if (n = vo, vo = null, Kc = 0, gt & 6)
            throw Error(u(331));
          var v = gt;
          for (gt |= 4, Te = n.current; Te !== null; ) {
            var h = Te, b = h.child;
            if (Te.flags & 16) {
              var T = h.deletions;
              if (T !== null) {
                for (var N = 0; N < T.length; N++) {
                  var Q = T[N];
                  for (Te = Q; Te !== null; ) {
                    var ae = Te;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(8, ae, h);
                    }
                    var le = ae.child;
                    if (le !== null)
                      le.return = ae, Te = le;
                    else
                      for (; Te !== null; ) {
                        ae = Te;
                        var re = ae.sibling, be = ae.return;
                        if (rp(ae), ae === Q) {
                          Te = null;
                          break;
                        }
                        if (re !== null) {
                          re.return = be, Te = re;
                          break;
                        }
                        Te = be;
                      }
                  }
                }
                var Re = h.alternate;
                if (Re !== null) {
                  var De = Re.child;
                  if (De !== null) {
                    Re.child = null;
                    do {
                      var _n = De.sibling;
                      De.sibling = null, De = _n;
                    } while (De !== null);
                  }
                }
                Te = h;
              }
            }
            if (h.subtreeFlags & 2064 && b !== null)
              b.return = h, Te = b;
            else
              e:
                for (; Te !== null; ) {
                  if (h = Te, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(9, h, h.return);
                    }
                  var j = h.sibling;
                  if (j !== null) {
                    j.return = h.return, Te = j;
                    break e;
                  }
                  Te = h.return;
                }
          }
          var M = n.current;
          for (Te = M; Te !== null; ) {
            b = Te;
            var V = b.child;
            if (b.subtreeFlags & 2064 && V !== null)
              V.return = b, Te = V;
            else
              e:
                for (b = M; Te !== null; ) {
                  if (T = Te, T.flags & 2048)
                    try {
                      switch (T.tag) {
                        case 0:
                        case 11:
                        case 15:
                          hs(9, T);
                      }
                    } catch (Ne) {
                      hn(T, T.return, Ne);
                    }
                  if (T === b) {
                    Te = null;
                    break e;
                  }
                  var ce = T.sibling;
                  if (ce !== null) {
                    ce.return = T.return, Te = ce;
                    break e;
                  }
                  Te = T.return;
                }
          }
          if (gt = v, Dr(), Ma && typeof Ma.onPostCommitFiberRoot == "function")
            try {
              Ma.onPostCommitFiberRoot(ku, n);
            } catch {
            }
          f = !0;
        }
        return f;
      } finally {
        zt = s, cr.transition = r;
      }
    }
    return !1;
  }
  function Vm(n, r, s) {
    r = Kl(s, r), r = xm(n, r, 1), n = oo(n, r, 1), r = fr(), n !== null && (zo(n, 1, r), pr(n, r));
  }
  function hn(n, r, s) {
    if (n.tag === 3)
      Vm(n, n, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Vm(r, n, s);
          break;
        } else if (r.tag === 1) {
          var f = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (ni === null || !ni.has(f))) {
            n = Kl(s, n), n = cs(r, n, 1), r = oo(r, n, 1), n = fr(), r !== null && (zo(r, 1, n), pr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function _0(n, r, s) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = fr(), n.pingedLanes |= n.suspendedLanes & s, dn === n && (Vn & s) === s && (Mn === 4 || Mn === 3 && (Vn & 130023424) === Vn && 500 > Rt() - op ? sl(n, 0) : iu |= s), pr(n, r);
  }
  function tf(n, r) {
    r === 0 && (n.mode & 1 ? (r = $l, $l <<= 1, !($l & 130023424) && ($l = 4194304)) : r = 1);
    var s = fr();
    n = bi(n, r), n !== null && (zo(n, r, s), pr(n, s));
  }
  function b0(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), tf(n, s);
  }
  function E0(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, v = n.memoizedState;
        v !== null && (s = v.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    f !== null && f.delete(r), tf(n, s);
  }
  var Bm;
  Bm = function(n, r, s) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || vn.current)
        Tn = !0;
      else {
        if (!(n.lanes & s) && !(r.flags & 128))
          return Tn = !1, Ci(n, r, s);
        Tn = !!(n.flags & 131072);
      }
    else
      Tn = !1, en && r.flags & 1048576 && kd(r, Bl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        ur(n, r), n = r.pendingProps;
        var v = da(r, Ze.current);
        me(r, s), v = so(null, r, f, n, v, s);
        var h = Zo();
        return r.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ln(f) ? (h = !0, vc(r)) : h = !1, r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Fd(r), v.updater = Ec, r.stateNode = v, v._reactInternals = r, wc(r, f, n, s), r = Dm(null, r, f, !0, h, s)) : (r.tag = 0, en && h && mc(r), Nn(null, r, v, s), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (ur(n, r), n = r.pendingProps, v = f._init, f = v(f._payload), r.type = f, v = r.tag = C0(f), n = Kr(f, n), v) {
            case 0:
              r = Zl(null, r, f, n, s);
              break e;
            case 1:
              r = qd(null, r, f, n, s);
              break e;
            case 11:
              r = fo(null, r, f, n, s);
              break e;
            case 14:
              r = Bc(null, r, f, Kr(f.type, n), s);
              break e;
          }
          throw Error(u(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : Kr(f, v), Zl(n, r, f, v, s);
      case 1:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : Kr(f, v), qd(n, r, f, v, s);
      case 3:
        e: {
          if (Nm(r), n === null)
            throw Error(u(387));
          f = r.pendingProps, h = r.memoizedState, v = h.element, Dn(n, r), lo(r, f, null, s);
          var b = r.memoizedState;
          if (f = b.element, h.isDehydrated)
            if (h = { element: f, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
              v = Kl(Error(u(423)), r), r = Yc(n, r, f, s, v);
              break e;
            } else if (f !== v) {
              v = Kl(Error(u(424)), r), r = Yc(n, r, f, s, v);
              break e;
            } else
              for (kr = Ua(r.stateNode.containerInfo.firstChild), Xr = r, en = !0, ma = null, s = Tm(r, null, f, s), r.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (cn(), f === v) {
              r = Gn(n, r, s);
              break e;
            }
            Nn(n, r, f, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Be(r), n === null && yc(r), f = r.type, v = r.pendingProps, h = n !== null ? n.memoizedProps : null, b = v.children, Zu(f, v) ? b = null : h !== null && Zu(f, h) && (r.flags |= 32), ut(n, r), Nn(n, r, b, s), r.child;
      case 6:
        return n === null && yc(r), null;
      case 13:
        return Kd(n, r, s);
      case 4:
        return Vd(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = Wl(r, null, f, s) : Nn(n, r, f, s), r.child;
      case 11:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : Kr(f, v), fo(n, r, f, v, s);
      case 7:
        return Nn(n, r, r.pendingProps, s), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (f = r.type._context, v = r.pendingProps, h = r.memoizedProps, b = v.value, kt(Za, f._currentValue), f._currentValue = b, h !== null)
            if (ca(h.value, b)) {
              if (h.children === v.children && !vn.current) {
                r = Gn(n, r, s);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var T = h.dependencies;
                if (T !== null) {
                  b = h.child;
                  for (var N = T.firstContext; N !== null; ) {
                    if (N.context === f) {
                      if (h.tag === 1) {
                        N = Ei(-1, s & -s), N.tag = 2;
                        var Q = h.updateQueue;
                        if (Q !== null) {
                          Q = Q.shared;
                          var ae = Q.pending;
                          ae === null ? N.next = N : (N.next = ae.next, ae.next = N), Q.pending = N;
                        }
                      }
                      h.lanes |= s, N = h.alternate, N !== null && (N.lanes |= s), Hn(
                        h.return,
                        s,
                        r
                      ), T.lanes |= s;
                      break;
                    }
                    N = N.next;
                  }
                } else if (h.tag === 10)
                  b = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (b = h.return, b === null)
                    throw Error(u(341));
                  b.lanes |= s, T = b.alternate, T !== null && (T.lanes |= s), Hn(b, s, r), b = h.sibling;
                } else
                  b = h.child;
                if (b !== null)
                  b.return = h;
                else
                  for (b = h; b !== null; ) {
                    if (b === r) {
                      b = null;
                      break;
                    }
                    if (h = b.sibling, h !== null) {
                      h.return = b.return, b = h;
                      break;
                    }
                    b = b.return;
                  }
                h = b;
              }
          Nn(n, r, v.children, s), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, f = r.pendingProps.children, me(r, s), v = Sn(v), f = f(v), r.flags |= 1, Nn(n, r, f, s), r.child;
      case 14:
        return f = r.type, v = Kr(f, r.pendingProps), v = Kr(f.type, v), Bc(n, r, f, v, s);
      case 15:
        return Ar(n, r, r.type, r.pendingProps, s);
      case 17:
        return f = r.type, v = r.pendingProps, v = r.elementType === f ? v : Kr(f, v), ur(n, r), r.tag = 1, ln(f) ? (n = !0, vc(r)) : n = !1, me(r, s), Em(r, f, v), wc(r, f, v, s), Dm(null, r, f, !0, n, s);
      case 19:
        return ep(n, r, s);
      case 22:
        return nl(n, r, s);
    }
    throw Error(u(156, r.tag));
  };
  function dp(n, r) {
    return on(n, r);
  }
  function w0(n, r, s, f) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ba(n, r, s, f) {
    return new w0(n, r, s, f);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function C0(n) {
    if (typeof n == "function")
      return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Vt)
        return 11;
      if (n === Ct)
        return 14;
    }
    return 2;
  }
  function ho(n, r) {
    var s = n.alternate;
    return s === null ? (s = ba(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function nf(n, r, s, f, v, h) {
    var b = 2;
    if (f = n, typeof n == "function")
      pp(n) && (b = 1);
    else if (typeof n == "string")
      b = 5;
    else
      e:
        switch (n) {
          case _e:
            return fl(s.children, v, h, r);
          case dt:
            b = 8, v |= 8;
            break;
          case ht:
            return n = ba(12, s, r, v | 2), n.elementType = ht, n.lanes = h, n;
          case ze:
            return n = ba(13, s, r, v), n.elementType = ze, n.lanes = h, n;
          case Ke:
            return n = ba(19, s, r, v), n.elementType = Ke, n.lanes = h, n;
          case Bt:
            return _s(s, v, h, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case it:
                  b = 10;
                  break e;
                case ct:
                  b = 9;
                  break e;
                case Vt:
                  b = 11;
                  break e;
                case Ct:
                  b = 14;
                  break e;
                case pt:
                  b = 16, f = null;
                  break e;
              }
            throw Error(u(130, n == null ? n : typeof n, ""));
        }
    return r = ba(b, s, r, v), r.elementType = n, r.type = f, r.lanes = h, r;
  }
  function fl(n, r, s, f) {
    return n = ba(7, n, f, r), n.lanes = s, n;
  }
  function _s(n, r, s, f) {
    return n = ba(22, n, f, r), n.elementType = Bt, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function bs(n, r, s) {
    return n = ba(6, n, null, r), n.lanes = s, n;
  }
  function dl(n, r, s) {
    return r = ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function O0(n, r, s, f, v) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nd(0), this.expirationTimes = nd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nd(0), this.identifierPrefix = f, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function rf(n, r, s, f, v, h, b, T, N) {
    return n = new O0(n, r, s, T, N), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = ba(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: f, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fd(h), n;
  }
  function Ym(n, r, s) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ae, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: s };
  }
  function vp(n) {
    if (!n)
      return Ka;
    n = n._reactInternals;
    e: {
      if (st(n) !== n || n.tag !== 1)
        throw Error(u(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (ln(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(u(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ln(s))
        return ts(n, s, r);
    }
    return r;
  }
  function Wm(n, r, s, f, v, h, b, T, N) {
    return n = rf(s, f, !0, n, v, h, b, T, N), n.context = vp(null), s = n.current, f = fr(), v = Rn(s), h = Ei(f, v), h.callback = r ?? null, oo(s, h, v), n.current.lanes = v, zo(n, v, f), pr(n, f), n;
  }
  function Es(n, r, s, f) {
    var v = r.current, h = fr(), b = Rn(v);
    return s = vp(s), r.context === null ? r.context = s : r.pendingContext = s, r = Ei(h, b), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = oo(v, r, b), n !== null && (dr(n, v, b, h), bc(n, v, b)), b;
  }
  function af(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function mp(n, r) {
    Qm(n, r), (n = n.alternate) && Qm(n, r);
  }
  function Gm() {
    return null;
  }
  var hp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  xi.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(u(409));
    Es(n, r, null, null);
  }, xi.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      mo(function() {
        Es(null, n, null, null);
      }), r[Si] = null;
    }
  };
  function xi(n) {
    this._internalRoot = n;
  }
  xi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $v();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < jt.length && r !== 0 && r < jt[s].priority; s++)
        ;
      jt.splice(s, 0, n), s === 0 && kv(n);
    }
  };
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function lf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function qm() {
  }
  function T0(n, r, s, f, v) {
    if (v) {
      if (typeof f == "function") {
        var h = f;
        f = function() {
          var Q = af(b);
          h.call(Q);
        };
      }
      var b = Wm(r, f, n, 0, null, !1, !1, "", qm);
      return n._reactRootContainer = b, n[Si] = b.current, Il(n.nodeType === 8 ? n.parentNode : n), mo(), b;
    }
    for (; v = n.lastChild; )
      n.removeChild(v);
    if (typeof f == "function") {
      var T = f;
      f = function() {
        var Q = af(N);
        T.call(Q);
      };
    }
    var N = rf(n, 0, !1, null, null, !1, !1, "", qm);
    return n._reactRootContainer = N, n[Si] = N.current, Il(n.nodeType === 8 ? n.parentNode : n), mo(function() {
      Es(r, N, s, f);
    }), N;
  }
  function uf(n, r, s, f, v) {
    var h = s._reactRootContainer;
    if (h) {
      var b = h;
      if (typeof v == "function") {
        var T = v;
        v = function() {
          var N = af(b);
          T.call(N);
        };
      }
      Es(r, b, n, v);
    } else
      b = T0(s, r, n, v, f);
    return af(b);
  }
  Nv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = Ao(r.pendingLanes);
          s !== 0 && (Mu(r, s | 1), pr(r, Rt()), !(gt & 6) && (ou = Rt() + 500, Dr()));
        }
        break;
      case 13:
        mo(function() {
          var f = bi(n, 1);
          if (f !== null) {
            var v = fr();
            dr(f, n, 1, v);
          }
        }), mp(n, 1);
    }
  }, Xs = function(n) {
    if (n.tag === 13) {
      var r = bi(n, 134217728);
      if (r !== null) {
        var s = fr();
        dr(r, n, 134217728, s);
      }
      mp(n, 134217728);
    }
  }, Wt = function(n) {
    if (n.tag === 13) {
      var r = Rn(n), s = bi(n, r);
      if (s !== null) {
        var f = fr();
        dr(s, n, r, f);
      }
      mp(n, r);
    }
  }, $v = function() {
    return zt;
  }, ad = function(n, r) {
    var s = zt;
    try {
      return zt = n, r();
    } finally {
      zt = s;
    }
  }, Yr = function(n, r, s) {
    switch (r) {
      case "input":
        if (ir(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var f = s[r];
            if (f !== n && f.form === n.form) {
              var v = He(f);
              if (!v)
                throw Error(u(90));
              ve(f), ir(f, v);
            }
          }
        }
        break;
      case "textarea":
        Ga(n, s);
        break;
      case "select":
        r = s.value, r != null && Qa(n, !!s.multiple, r, !1);
    }
  }, $u = su, Ys = mo;
  var R0 = { usingClientEntryPoint: !1, Events: [es, Vl, He, ko, Pl, su] }, fu = { findFiberByHostInstance: fa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, x0 = { bundleType: fu.bundleType, version: fu.version, rendererPackageName: fu.rendererPackageName, rendererConfig: fu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: te.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = zn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: fu.findFiberByHostInstance || Gm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sf.isDisabled && sf.supportsFiber)
      try {
        ku = sf.inject(x0), Ma = sf;
      } catch {
      }
  }
  return Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0, Ra.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r))
      throw Error(u(200));
    return Ym(n, r, null, s);
  }, Ra.createRoot = function(n, r) {
    if (!yp(n))
      throw Error(u(299));
    var s = !1, f = "", v = hp;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), r = rf(n, 1, !1, null, null, s, !1, f, v), n[Si] = r.current, Il(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Ra.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(u(188)) : (n = Object.keys(n).join(","), Error(u(268, n)));
    return n = zn(r), n = n === null ? null : n.stateNode, n;
  }, Ra.flushSync = function(n) {
    return mo(n);
  }, Ra.hydrate = function(n, r, s) {
    if (!lf(r))
      throw Error(u(200));
    return uf(null, n, r, !0, s);
  }, Ra.hydrateRoot = function(n, r, s) {
    if (!yp(n))
      throw Error(u(405));
    var f = s != null && s.hydratedSources || null, v = !1, h = "", b = hp;
    if (s != null && (s.unstable_strictMode === !0 && (v = !0), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onRecoverableError !== void 0 && (b = s.onRecoverableError)), r = Wm(r, null, n, 1, s ?? null, v, !1, h, b), n[Si] = r.current, Il(n), f)
      for (n = 0; n < f.length; n++)
        s = f[n], v = s._getVersion, v = v(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, v] : r.mutableSourceEagerHydrationData.push(
          s,
          v
        );
    return new xi(r);
  }, Ra.render = function(n, r, s) {
    if (!lf(r))
      throw Error(u(200));
    return uf(null, n, r, !1, s);
  }, Ra.unmountComponentAtNode = function(n) {
    if (!lf(n))
      throw Error(u(40));
    return n._reactRootContainer ? (mo(function() {
      uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Si] = null;
      });
    }), !0) : !1;
  }, Ra.unstable_batchedUpdates = su, Ra.unstable_renderSubtreeIntoContainer = function(n, r, s, f) {
    if (!lf(s))
      throw Error(u(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(u(38));
    return uf(n, r, s, !1, f);
  }, Ra.version = "18.2.0-next-9e3b772b8-20220608", Ra;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function Nj() {
  return cT || (cT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = ee, l = Tx(), u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = !1;
    function _(e) {
      d = e;
    }
    function E(e) {
      if (!d) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        O("warn", e, a);
      }
    }
    function y(e) {
      if (!d) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        O("error", e, a);
      }
    }
    function O(e, t, a) {
      {
        var o = u.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", a = a.concat([c]));
        var p = a.map(function(m) {
          return String(m);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var x = 0, R = 1, $ = 2, D = 3, A = 4, z = 5, G = 6, I = 7, K = 8, de = 9, pe = 10, ne = 11, te = 12, W = 13, Ae = 14, _e = 15, dt = 16, ht = 17, it = 18, ct = 19, Vt = 21, ze = 22, Ke = 23, Ct = 24, pt = 25, Bt = !0, fe = !1, $e = !1, H = !1, oe = !1, we = !0, je = !1, Le = !1, nt = !0, ke = !0, Qe = !0, Ge = /* @__PURE__ */ new Set(), et = {}, rt = {};
    function Nt(e, t) {
      ve(e, t), ve(e + "Capture", t);
    }
    function ve(e, t) {
      et[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), et[e] = t;
      {
        var a = e.toLowerCase();
        rt[a] = e, e === "onDoubleClick" && (rt.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        Ge.add(t[o]);
    }
    var Lt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yn = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ar(e) {
      try {
        return ir(e), !1;
      } catch {
        return !0;
      }
    }
    function ir(e) {
      return "" + e;
    }
    function oa(e, t) {
      if (ar(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), ir(e);
    }
    function Pa(e) {
      if (ar(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), ir(e);
    }
    function fi(e, t) {
      if (ar(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), ir(e);
    }
    function Qa(e, t) {
      if (ar(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), ir(e);
    }
    function Da(e) {
      if (ar(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), ir(e);
    }
    function Ir(e) {
      if (ar(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), ir(e);
    }
    var Ga = 0, Vr = 1, Na = 2, wn = 3, Br = 4, Vi = 5, $a = 6, ye = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Fe = ye + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", vt = new RegExp("^[" + ye + "][" + Fe + "]*$"), At = {}, sn = {};
    function An(e) {
      return yn.call(sn, e) ? !0 : yn.call(At, e) ? !1 : vt.test(e) ? (sn[e] = !0, !0) : (At[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function gn(e, t, a) {
      return t !== null ? t.type === Ga : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, o) {
      if (a !== null && a.type === Ga)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var c = e.toLowerCase().slice(0, 5);
          return c !== "data-" && c !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, o) {
      if (t === null || typeof t > "u" || Rr(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case wn:
            return !t;
          case Br:
            return t === !1;
          case Vi:
            return isNaN(t);
          case $a:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Yr(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function Yt(e, t, a, o, c, p, m) {
      this.acceptsBooleans = t === Na || t === wn || t === Br, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = m;
    }
    var Zt = {}, xl = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    xl.forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Zt[t] = new Yt(
        t,
        Vr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Na,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Na,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        wn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        wn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        $a,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Vi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ko = /[\-\:]([a-z])/g, Pl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, Pl);
      Zt[t] = new Yt(
        t,
        Vr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, Pl);
      Zt[t] = new Yt(
        t,
        Vr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ko, Pl);
      Zt[t] = new Yt(
        t,
        Vr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Vr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var $u = "xlinkHref";
    Zt[$u] = new Yt(
      "xlinkHref",
      Vr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new Yt(
        e,
        Vr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ys = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Mo = !1;
    function Dl(e) {
      !Mo && Ys.test(e) && (Mo = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Lo(e, t, a, o) {
      if (o.mustUseProperty) {
        var c = o.propertyName;
        return e[c];
      } else {
        oa(a, t), o.sanitizeURL && Dl("" + a);
        var p = o.attributeName, m = null;
        if (o.type === Br) {
          if (e.hasAttribute(p)) {
            var g = e.getAttribute(p);
            return g === "" ? !0 : Kt(t, a, o, !1) ? g : g === "" + a ? a : g;
          }
        } else if (e.hasAttribute(p)) {
          if (Kt(t, a, o, !1))
            return e.getAttribute(p);
          if (o.type === wn)
            return a;
          m = e.getAttribute(p);
        }
        return Kt(t, a, o, !1) ? m === null ? a : m : m === "" + a ? a : m;
      }
    }
    function Nl(e, t, a, o) {
      {
        if (!An(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var c = e.getAttribute(t);
        return oa(a, t), c === "" + a ? a : c;
      }
    }
    function qa(e, t, a, o) {
      var c = Yr(t);
      if (!gn(t, c, o)) {
        if (Kt(t, a, c, o) && (a = null), o || c === null) {
          if (An(t)) {
            var p = t;
            a === null ? e.removeAttribute(p) : (oa(a, t), e.setAttribute(p, "" + a));
          }
          return;
        }
        var m = c.mustUseProperty;
        if (m) {
          var g = c.propertyName;
          if (a === null) {
            var S = c.type;
            e[g] = S === wn ? !1 : "";
          } else
            e[g] = a;
          return;
        }
        var w = c.attributeName, C = c.attributeNamespace;
        if (a === null)
          e.removeAttribute(w);
        else {
          var L = c.type, k;
          L === wn || L === Br && a === !0 ? k = "" : (oa(a, w), k = "" + a, c.sanitizeURL && Dl(k.toString())), C ? e.setAttributeNS(C, w, k) : e.setAttribute(w, k);
        }
      }
    }
    var Bi = Symbol.for("react.element"), Wr = Symbol.for("react.portal"), ka = Symbol.for("react.fragment"), Yi = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), zn = Symbol.for("react.scope"), an = Symbol.for("react.debug_trace_mode"), on = Symbol.for("react.offscreen"), vr = Symbol.for("react.legacy_hidden"), Wi = Symbol.for("react.cache"), Ws = Symbol.for("react.tracing_marker"), Rt = Symbol.iterator, Vg = "@@iterator";
    function di(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Rt && e[Rt] || e[Vg];
      return typeof t == "function" ? t : null;
    }
    var yt = Object.assign, Qi = 0, Rv, Jf, ku, Ma, xv, la, Pv;
    function Dv() {
    }
    Dv.__reactDisabledLog = !0;
    function Bg() {
      {
        if (Qi === 0) {
          Rv = console.log, Jf = console.info, ku = console.warn, Ma = console.error, xv = console.group, la = console.groupCollapsed, Pv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Dv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Qi++;
      }
    }
    function Qs() {
      {
        if (Qi--, Qi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: yt({}, e, {
              value: Rv
            }),
            info: yt({}, e, {
              value: Jf
            }),
            warn: yt({}, e, {
              value: ku
            }),
            error: yt({}, e, {
              value: Ma
            }),
            group: yt({}, e, {
              value: xv
            }),
            groupCollapsed: yt({}, e, {
              value: la
            }),
            groupEnd: yt({}, e, {
              value: Pv
            })
          });
        }
        Qi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $l = u.ReactCurrentDispatcher, Ao;
    function La(e, t, a) {
      {
        if (Ao === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            Ao = o && o[1] || "";
          }
        return `
` + Ao + e;
      }
    }
    var ed = !1, Gs;
    {
      var td = typeof WeakMap == "function" ? WeakMap : Map;
      Gs = new td();
    }
    function qs(e, t) {
      if (!e || ed)
        return "";
      {
        var a = Gs.get(e);
        if (a !== void 0)
          return a;
      }
      var o;
      ed = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = $l.current, $l.current = null, Bg();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (Y) {
              o = Y;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (Y) {
              o = Y;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            o = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && o && typeof Y.stack == "string") {
          for (var g = Y.stack.split(`
`), S = o.stack.split(`
`), w = g.length - 1, C = S.length - 1; w >= 1 && C >= 0 && g[w] !== S[C]; )
            C--;
          for (; w >= 1 && C >= 0; w--, C--)
            if (g[w] !== S[C]) {
              if (w !== 1 || C !== 1)
                do
                  if (w--, C--, C < 0 || g[w] !== S[C]) {
                    var L = `
` + g[w].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && Gs.set(e, L), L;
                  }
                while (w >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ed = !1, $l.current = p, Qs(), Error.prepareStackTrace = c;
      }
      var k = e ? e.displayName || e.name : "", B = k ? La(k) : "";
      return typeof e == "function" && Gs.set(e, B), B;
    }
    function nd(e, t, a) {
      return qs(e, !0);
    }
    function zo(e, t, a) {
      return qs(e, !1);
    }
    function Yg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Mu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return qs(e, Yg(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case st:
          return La("Suspense");
        case Ot:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ve:
            return zo(e.render);
          case ft:
            return Mu(e.type, t, a);
          case Ye: {
            var o = e, c = o._payload, p = o._init;
            try {
              return Mu(p(c), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function zt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case z:
          return La(e.type);
        case dt:
          return La("Lazy");
        case W:
          return La("Suspense");
        case ct:
          return La("SuspenseList");
        case x:
        case $:
        case _e:
          return zo(e.type);
        case ne:
          return zo(e.type.render);
        case R:
          return nd(e.type);
        default:
          return "";
      }
    }
    function rd(e) {
      try {
        var t = "", a = e;
        do
          t += zt(a), a = a.return;
        while (a);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function Nv(e, t, a) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? a + "(" + c + ")" : a;
    }
    function Xs(e) {
      return e.displayName || "Context";
    }
    function Wt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ka:
          return "Fragment";
        case Wr:
          return "Portal";
        case P:
          return "Profiler";
        case Yi:
          return "StrictMode";
        case st:
          return "Suspense";
        case Ot:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ge:
            var t = e;
            return Xs(t) + ".Consumer";
          case ie:
            var a = e;
            return Xs(a._context) + ".Provider";
          case Ve:
            return Nv(e, e.render, "ForwardRef");
          case ft:
            var o = e.displayName || null;
            return o !== null ? o : Wt(e.type) || "Memo";
          case Ye: {
            var c = e, p = c._payload, m = c._init;
            try {
              return Wt(m(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function $v(e, t, a) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
    }
    function ad(e) {
      return e.displayName || "Context";
    }
    function ot(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ct:
          return "Cache";
        case de:
          var o = a;
          return ad(o) + ".Consumer";
        case pe:
          var c = a;
          return ad(c._context) + ".Provider";
        case it:
          return "DehydratedFragment";
        case ne:
          return $v(a, a.render, "ForwardRef");
        case I:
          return "Fragment";
        case z:
          return a;
        case A:
          return "Portal";
        case D:
          return "Root";
        case G:
          return "Text";
        case dt:
          return Wt(a);
        case K:
          return a === Yi ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case te:
          return "Profiler";
        case Vt:
          return "Scope";
        case W:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case pt:
          return "TracingMarker";
        case R:
        case x:
        case ht:
        case $:
        case Ae:
        case _e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Lu = u.ReactDebugCurrentFrame, Cn = null, ua = !1;
    function sa() {
      {
        if (Cn === null)
          return null;
        var e = Cn._debugOwner;
        if (e !== null && typeof e < "u")
          return ot(e);
      }
      return null;
    }
    function Au() {
      return Cn === null ? "" : rd(Cn);
    }
    function Pn() {
      Lu.getCurrentStack = null, Cn = null, ua = !1;
    }
    function jt(e) {
      Lu.getCurrentStack = e === null ? null : Au, Cn = e, ua = !1;
    }
    function Wg() {
      return Cn;
    }
    function Aa(e) {
      ua = e;
    }
    function or(e) {
      return "" + e;
    }
    function Gi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ir(e), e;
        default:
          return "";
      }
    }
    var kv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function kl(e, t) {
      kv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function id(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Mv(e) {
      return e._valueTracker;
    }
    function zu(e) {
      e._valueTracker = null;
    }
    function ju(e) {
      var t = "";
      return e && (id(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ml(e) {
      var t = id(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ir(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var c = a.get, p = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return c.call(this);
          },
          set: function(g) {
            Ir(g), o = "" + g, p.call(this, g);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var m = {
          getValue: function() {
            return o;
          },
          setValue: function(g) {
            Ir(g), o = "" + g;
          },
          stopTracking: function() {
            zu(e), delete e[t];
          }
        };
        return m;
      }
    }
    function jo(e) {
      Mv(e) || (e._valueTracker = Ml(e));
    }
    function Lv(e) {
      if (!e)
        return !1;
      var t = Mv(e);
      if (!t)
        return !0;
      var a = t.getValue(), o = ju(e);
      return o !== a ? (t.setValue(o), !0) : !1;
    }
    function Ks(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Zs = !1, Uu = !1, Js = !1, od = !1;
    function pi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Fu(e, t) {
      var a = e, o = t.checked, c = yt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o ?? a._wrapperState.initialChecked
      });
      return c;
    }
    function Hu(e, t) {
      kl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Uu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sa() || "A component", t.type), Uu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Zs && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sa() || "A component", t.type), Zs = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Gi(t.value != null ? t.value : o),
        controlled: pi(t)
      };
    }
    function ld(e, t) {
      var a = e, o = t.checked;
      o != null && qa(a, "checked", o, !1);
    }
    function Ll(e, t) {
      var a = e;
      {
        var o = pi(t);
        !a._wrapperState.controlled && o && !od && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), od = !0), a._wrapperState.controlled && !o && !Js && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Js = !0);
      }
      ld(e, t);
      var c = Gi(t.value), p = t.type;
      if (c != null)
        p === "number" ? (c === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != c) && (a.value = or(c)) : a.value !== or(c) && (a.value = or(c));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qi(a, t.type, c) : t.hasOwnProperty("defaultValue") && qi(a, t.type, Gi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Iu(e, t, a) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var c = t.type, p = c === "submit" || c === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var m = or(o._wrapperState.initialValue);
        a || m !== o.value && (o.value = m), o.defaultValue = m;
      }
      var g = o.name;
      g !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, g !== "" && (o.name = g);
    }
    function Av(e, t) {
      var a = e;
      Ll(a, t), Qr(a, t);
    }
    function Qr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        oa(a, "name");
        for (var c = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < c.length; p++) {
          var m = c[p];
          if (!(m === e || m.form !== e.form)) {
            var g = dh(m);
            if (!g)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Lv(m), Ll(m, g);
          }
        }
      }
    }
    function qi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ks(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var ec = !1, Al = !1, zv = !1;
    function tc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Al || (Al = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (zv || (zv = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ec && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ec = !0);
    }
    function ud(e, t) {
      t.value != null && e.setAttribute("value", or(Gi(t.value)));
    }
    var Vu = Array.isArray;
    function jn(e) {
      return Vu(e);
    }
    var nc;
    nc = !1;
    function jv() {
      var e = sa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Uv = ["value", "defaultValue"];
    function Qg(e) {
      {
        kl("select", e);
        for (var t = 0; t < Uv.length; t++) {
          var a = Uv[t];
          if (e[a] != null) {
            var o = jn(e[a]);
            e.multiple && !o ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, jv()) : !e.multiple && o && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, jv());
          }
        }
      }
    }
    function Xi(e, t, a, o) {
      var c = e.options;
      if (t) {
        for (var p = a, m = {}, g = 0; g < p.length; g++)
          m["$" + p[g]] = !0;
        for (var S = 0; S < c.length; S++) {
          var w = m.hasOwnProperty("$" + c[S].value);
          c[S].selected !== w && (c[S].selected = w), w && o && (c[S].defaultSelected = !0);
        }
      } else {
        for (var C = or(Gi(a)), L = null, k = 0; k < c.length; k++) {
          if (c[k].value === C) {
            c[k].selected = !0, o && (c[k].defaultSelected = !0);
            return;
          }
          L === null && !c[k].disabled && (L = c[k]);
        }
        L !== null && (L.selected = !0);
      }
    }
    function sd(e, t) {
      return yt({}, t, {
        value: void 0
      });
    }
    function Fv(e, t) {
      var a = e;
      Qg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !nc && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), nc = !0);
    }
    function Gg(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? Xi(a, !!t.multiple, o, !1) : t.defaultValue != null && Xi(a, !!t.multiple, t.defaultValue, !0);
    }
    function qg(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var c = t.value;
      c != null ? Xi(a, !!t.multiple, c, !1) : o !== !!t.multiple && (t.defaultValue != null ? Xi(a, !!t.multiple, t.defaultValue, !0) : Xi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xg(e, t) {
      var a = e, o = t.value;
      o != null && Xi(a, !!t.multiple, o, !1);
    }
    var cd = !1;
    function fd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = yt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return o;
    }
    function Hv(e, t) {
      var a = e;
      kl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", sa() || "A component"), cd = !0);
      var o = t.value;
      if (o == null) {
        var c = t.children, p = t.defaultValue;
        if (c != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (jn(c)) {
              if (c.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              c = c[0];
            }
            p = c;
          }
        }
        p == null && (p = ""), o = p;
      }
      a._wrapperState = {
        initialValue: Gi(o)
      };
    }
    function Iv(e, t) {
      var a = e, o = Gi(t.value), c = Gi(t.defaultValue);
      if (o != null) {
        var p = or(o);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      c != null && (a.defaultValue = or(c));
    }
    function Vv(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function dd(e, t) {
      Iv(e, t);
    }
    var vi = "http://www.w3.org/1999/xhtml", Kg = "http://www.w3.org/1998/Math/MathML", pd = "http://www.w3.org/2000/svg";
    function rc(e) {
      switch (e) {
        case "svg":
          return pd;
        case "math":
          return Kg;
        default:
          return vi;
      }
    }
    function vd(e, t) {
      return e == null || e === vi ? rc(t) : e === pd && t === "foreignObject" ? vi : e;
    }
    var Zg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, o, c) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, c);
        });
      } : e;
    }, ac, Bv = Zg(function(e, t) {
      if (e.namespaceURI === pd && !("innerHTML" in e)) {
        ac = ac || document.createElement("div"), ac.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ac.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), xr = 1, mi = 3, On = 8, za = 9, Uo = 11, ic = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === mi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Yv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, zl = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Wv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Qv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(zl).forEach(function(e) {
      Qv.forEach(function(t) {
        zl[Wv(t, e)] = zl[e];
      });
    });
    function oc(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(zl.hasOwnProperty(e) && zl[e]) ? t + "px" : (Qa(t, e), ("" + t).trim());
    }
    var jl = /([A-Z])/g, Jg = /^ms-/;
    function e0(e) {
      return e.replace(jl, "-$1").toLowerCase().replace(Jg, "-ms-");
    }
    var Gv = function() {
    };
    {
      var qv = /^(?:webkit|moz|o)[A-Z]/, Xv = /^-ms-/, Bu = /-(.)/g, Ul = /;\s*$/, Fl = {}, Hl = {}, Kv = !1, md = !1, hd = function(e) {
        return e.replace(Bu, function(t, a) {
          return a.toUpperCase();
        });
      }, yd = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          hd(e.replace(Xv, "ms-"))
        ));
      }, Zv = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jv = function(e, t) {
        Hl.hasOwnProperty(t) && Hl[t] || (Hl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Ul, "")));
      }, em = function(e, t) {
        Kv || (Kv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, t0 = function(e, t) {
        md || (md = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gv = function(e, t) {
        e.indexOf("-") > -1 ? yd(e) : qv.test(e) ? Zv(e) : Ul.test(t) && Jv(e, t), typeof t == "number" && (isNaN(t) ? em(e, t) : isFinite(t) || t0(e, t));
      };
    }
    var n0 = Gv;
    function r0(e) {
      {
        var t = "", a = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var c = e[o];
            if (c != null) {
              var p = o.indexOf("--") === 0;
              t += a + (p ? o : e0(o)) + ":", t += oc(o, c, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function tm(e, t) {
      var a = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var c = o.indexOf("--") === 0;
          c || n0(o, t[o]);
          var p = oc(o, t[o], c);
          o === "float" && (o = "cssFloat"), c ? a.setProperty(o, p) : a[o] = p;
        }
    }
    function a0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ca(e) {
      var t = {};
      for (var a in e)
        for (var o = Yv[a] || [a], c = 0; c < o.length; c++)
          t[o[c]] = a;
      return t;
    }
    function Yu(e, t) {
      {
        if (!t)
          return;
        var a = ca(e), o = ca(t), c = {};
        for (var p in a) {
          var m = a[p], g = o[p];
          if (g && m !== g) {
            var S = m + "," + g;
            if (c[S])
              continue;
            c[S] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", a0(e[m]) ? "Removing" : "Updating", m, g);
          }
        }
      }
    }
    var nm = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, rm = yt({
      menuitem: !0
    }, nm), am = "__html";
    function lc(e, t) {
      if (t) {
        if (rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(am in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function hi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var uc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, im = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ja = {}, gd = new RegExp("^(aria)-[" + Fe + "]*$"), Wu = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
    function Sd(e, t) {
      {
        if (yn.call(ja, t) && ja[t])
          return !0;
        if (Wu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = im.hasOwnProperty(a) ? a : null;
          if (o == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ja[t] = !0, !0;
          if (t !== o)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), ja[t] = !0, !0;
        }
        if (gd.test(t)) {
          var c = t.toLowerCase(), p = im.hasOwnProperty(c) ? c : null;
          if (p == null)
            return ja[t] = !0, !1;
          if (t !== p)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), ja[t] = !0, !0;
        }
      }
      return !0;
    }
    function om(e, t) {
      {
        var a = [];
        for (var o in t) {
          var c = Sd(e, o);
          c || a.push(o);
        }
        var p = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function sc(e, t) {
      hi(e, t) || om(e, t);
    }
    var Fo = !1;
    function _d(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Fo && (Fo = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var bd = function() {
    };
    {
      var Un = {}, Ed = /^on./, lm = /^on[^A-Z]/, um = new RegExp("^(aria)-[" + Fe + "]*$"), sm = new RegExp("^(aria)[A-Z][" + Fe + "]*$");
      bd = function(e, t, a, o) {
        if (yn.call(Un, t) && Un[t])
          return !0;
        var c = t.toLowerCase();
        if (c === "onfocusin" || c === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Un[t] = !0, !0;
        if (o != null) {
          var p = o.registrationNameDependencies, m = o.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var g = m.hasOwnProperty(c) ? m[c] : null;
          if (g != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, g), Un[t] = !0, !0;
          if (Ed.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Un[t] = !0, !0;
        } else if (Ed.test(t))
          return lm.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Un[t] = !0, !0;
        if (um.test(t) || sm.test(t))
          return !0;
        if (c === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Un[t] = !0, !0;
        if (c === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Un[t] = !0, !0;
        if (c === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Un[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Un[t] = !0, !0;
        var S = Yr(t), w = S !== null && S.type === Ga;
        if (uc.hasOwnProperty(c)) {
          var C = uc[c];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), Un[t] = !0, !0;
        } else if (!w && t !== c)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, c), Un[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, S, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Un[t] = !0, !0) : w ? !0 : Rr(t, a, S, !1) ? (Un[t] = !0, !1) : ((a === "false" || a === "true") && S !== null && S.type === wn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Un[t] = !0), !0);
      };
    }
    var cm = function(e, t, a) {
      {
        var o = [];
        for (var c in t) {
          var p = bd(e, c, t[c], a);
          p || o.push(c);
        }
        var m = o.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        o.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : o.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function fm(e, t, a) {
      hi(e, t) || cm(e, t, a);
    }
    var yi = 1, Qu = 2, Ho = 4, i0 = yi | Qu | Ho, Gu = null;
    function qu(e) {
      Gu !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Gu = e;
    }
    function o0() {
      Gu === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Gu = null;
    }
    function dm(e) {
      return e === Gu;
    }
    function cc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === mi ? t.parentNode : t;
    }
    var Qt = null, Ki = null, gi = null;
    function Il(e) {
      var t = vu(e);
      if (t) {
        if (typeof Qt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = dh(a);
          Qt(t.stateNode, t.type, o);
        }
      }
    }
    function pm(e) {
      Qt = e;
    }
    function fc(e) {
      Ki ? gi ? gi.push(e) : gi = [e] : Ki = e;
    }
    function Xu() {
      return Ki !== null || gi !== null;
    }
    function Ku() {
      if (Ki) {
        var e = Ki, t = gi;
        if (Ki = null, gi = null, Il(e), t)
          for (var a = 0; a < t.length; a++)
            Il(t[a]);
      }
    }
    var Io = function(e, t) {
      return e(t);
    }, wd = function() {
    }, Cd = !1;
    function l0() {
      var e = Xu();
      e && (wd(), Ku());
    }
    function Od(e, t, a) {
      if (Cd)
        return e(t, a);
      Cd = !0;
      try {
        return Io(e, t, a);
      } finally {
        Cd = !1, l0();
      }
    }
    function dc(e, t, a) {
      Io = e, wd = a;
    }
    function pc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Td(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && pc(t));
        default:
          return !1;
      }
    }
    function Vo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = dh(a);
      if (o === null)
        return null;
      var c = o[t];
      if (Td(t, e.type, o))
        return null;
      if (c && typeof c != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof c + "` type.");
      return c;
    }
    var Zu = !1;
    if (Lt)
      try {
        var Bo = {};
        Object.defineProperty(Bo, "passive", {
          get: function() {
            Zu = !0;
          }
        }), window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
      } catch {
        Zu = !1;
      }
    function vm(e, t, a, o, c, p, m, g, S) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, w);
      } catch (C) {
        this.onError(C);
      }
    }
    var Rd = vm;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var xd = document.createElement("react");
      Rd = function(t, a, o, c, p, m, g, S, w) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), L = !1, k = !0, B = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          xd.removeEventListener(X, Ie, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = B);
        }
        var Ce = Array.prototype.slice.call(arguments, 3);
        function Ie() {
          L = !0, q(), a.apply(o, Ce), k = !1;
        }
        var Me, Et = !1, St = !1;
        function U(F) {
          if (Me = F.error, Et = !0, Me === null && F.colno === 0 && F.lineno === 0 && (St = !0), F.defaultPrevented && Me != null && typeof Me == "object")
            try {
              Me._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), xd.addEventListener(X, Ie, !1), C.initEvent(X, !1, !1), xd.dispatchEvent(C), Y && Object.defineProperty(window, "event", Y), L && k && (Et ? St && (Me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Me)), window.removeEventListener("error", U), !L)
          return q(), vm.apply(this, arguments);
      };
    }
    var u0 = Rd, Zi = !1, Ua = null, Ju = !1, Ji = null, Xa = {
      onError: function(e) {
        Zi = !0, Ua = e;
      }
    };
    function Yo(e, t, a, o, c, p, m, g, S) {
      Zi = !1, Ua = null, u0.apply(Xa, arguments);
    }
    function Si(e, t, a, o, c, p, m, g, S) {
      if (Yo.apply(this, arguments), Zi) {
        var w = Dd();
        Ju || (Ju = !0, Ji = w);
      }
    }
    function Pd() {
      if (Ju) {
        var e = Ji;
        throw Ju = !1, Ji = null, e;
      }
    }
    function s0() {
      return Zi;
    }
    function Dd() {
      if (Zi) {
        var e = Ua;
        return Zi = !1, Ua = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fa(e) {
      return e._reactInternals;
    }
    function es(e) {
      return e._reactInternals !== void 0;
    }
    function Vl(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), eo = (
      /*                */
      1
    ), Jt = (
      /*                    */
      2
    ), lt = (
      /*                       */
      4
    ), $t = (
      /*                */
      16
    ), kt = (
      /*                 */
      32
    ), Ka = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), vn = (
      /*            */
      256
    ), Pr = (
      /*                          */
      512
    ), da = (
      /*                     */
      1024
    ), ln = (
      /*                      */
      2048
    ), pa = (
      /*                    */
      4096
    ), to = (
      /*                   */
      8192
    ), ts = (
      /*             */
      16384
    ), vc = ln | lt | Ka | Pr | da | ts, mm = (
      /*               */
      32767
    ), Gr = (
      /*                   */
      32768
    ), Fn = (
      /*                */
      65536
    ), ns = (
      /* */
      131072
    ), Nd = (
      /*                       */
      1048576
    ), $d = (
      /*                    */
      2097152
    ), Dr = (
      /*                 */
      4194304
    ), no = (
      /*                */
      8388608
    ), Nr = (
      /*               */
      16777216
    ), Wo = (
      /*              */
      33554432
    ), Bl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      lt | da | 0
    ), $r = Jt | lt | $t | kt | Pr | pa | to, lr = lt | Ka | Pr | to, va = ln | $t, Wn = Dr | no | $d, _i = u.ReactCurrentOwner;
    function qr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (Jt | pa)) !== He && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === D ? a : null;
    }
    function kd(e) {
      if (e.tag === W) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function mc(e) {
      return e.tag === D ? e.stateNode.containerInfo : null;
    }
    function Md(e) {
      return qr(e) === e;
    }
    function Xr(e) {
      {
        var t = _i.current;
        if (t !== null && t.tag === R) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ot(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var c = fa(e);
      return c ? qr(c) === c : !1;
    }
    function kr(e) {
      if (qr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function en(e) {
      var t = e.alternate;
      if (!t) {
        var a = qr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var o = e, c = t; ; ) {
        var p = o.return;
        if (p === null)
          break;
        var m = p.alternate;
        if (m === null) {
          var g = p.return;
          if (g !== null) {
            o = c = g;
            continue;
          }
          break;
        }
        if (p.child === m.child) {
          for (var S = p.child; S; ) {
            if (S === o)
              return kr(p), e;
            if (S === c)
              return kr(p), t;
            S = S.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== c.return)
          o = p, c = m;
        else {
          for (var w = !1, C = p.child; C; ) {
            if (C === o) {
              w = !0, o = p, c = m;
              break;
            }
            if (C === c) {
              w = !0, c = p, o = m;
              break;
            }
            C = C.sibling;
          }
          if (!w) {
            for (C = m.child; C; ) {
              if (C === o) {
                w = !0, o = m, c = p;
                break;
              }
              if (C === c) {
                w = !0, c = m, o = p;
                break;
              }
              C = C.sibling;
            }
            if (!w)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== c)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== D)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function ma(e) {
      var t = en(e);
      return t !== null ? Ld(t) : null;
    }
    function Ld(e) {
      if (e.tag === z || e.tag === G)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ld(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hm(e) {
      var t = en(e);
      return t !== null ? hc(t) : null;
    }
    function hc(e) {
      if (e.tag === z || e.tag === G)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = hc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var yc = l.unstable_scheduleCallback, ym = l.unstable_cancelCallback, gc = l.unstable_shouldYield, gm = l.unstable_requestPaint, cn = l.unstable_now, Ad = l.unstable_getCurrentPriorityLevel, Sc = l.unstable_ImmediatePriority, Kr = l.unstable_UserBlockingPriority, Za = l.unstable_NormalPriority, _c = l.unstable_LowPriority, ro = l.unstable_IdlePriority, zd = l.unstable_yieldValue, jd = l.unstable_setDisableYieldValue, ao = null, Hn = null, me = null, Sn = !1, Qn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ud(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = yt({}, e, {
          getLaneLabelMap: oo,
          injectProfilingHooks: Ei
        })), ao = t.inject(e), Hn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sm(e, t) {
      if (Hn && typeof Hn.onScheduleFiberRoot == "function")
        try {
          Hn.onScheduleFiberRoot(ao, e, t);
        } catch (a) {
          Sn || (Sn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function bi(e, t) {
      if (Hn && typeof Hn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ze) === Ze;
          if (ke) {
            var o;
            switch (t) {
              case ur:
                o = Sc;
                break;
              case Gn:
                o = Kr;
                break;
              case Ci:
                o = Za;
                break;
              case fs:
                o = ro;
                break;
              default:
                o = Za;
                break;
            }
            Hn.onCommitFiberRoot(ao, e, o, a);
          }
        } catch (c) {
          Sn || (Sn = !0, y("React instrumentation encountered an error: %s", c));
        }
    }
    function io(e) {
      if (Hn && typeof Hn.onPostCommitFiberRoot == "function")
        try {
          Hn.onPostCommitFiberRoot(ao, e);
        } catch (t) {
          Sn || (Sn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Fd(e) {
      if (Hn && typeof Hn.onCommitFiberUnmount == "function")
        try {
          Hn.onCommitFiberUnmount(ao, e);
        } catch (t) {
          Sn || (Sn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Dn(e) {
      if (typeof zd == "function" && (jd(e), _(e)), Hn && typeof Hn.setStrictMode == "function")
        try {
          Hn.setStrictMode(ao, e);
        } catch (t) {
          Sn || (Sn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Ei(e) {
      me = e;
    }
    function oo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < tn; a++) {
          var o = c0(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function bc(e) {
      me !== null && typeof me.markCommitStarted == "function" && me.markCommitStarted(e);
    }
    function Hd() {
      me !== null && typeof me.markCommitStopped == "function" && me.markCommitStopped();
    }
    function lo(e) {
      me !== null && typeof me.markComponentRenderStarted == "function" && me.markComponentRenderStarted(e);
    }
    function Qo() {
      me !== null && typeof me.markComponentRenderStopped == "function" && me.markComponentRenderStopped();
    }
    function _m(e) {
      me !== null && typeof me.markComponentPassiveEffectMountStarted == "function" && me.markComponentPassiveEffectMountStarted(e);
    }
    function Id() {
      me !== null && typeof me.markComponentPassiveEffectMountStopped == "function" && me.markComponentPassiveEffectMountStopped();
    }
    function Ec(e) {
      me !== null && typeof me.markComponentPassiveEffectUnmountStarted == "function" && me.markComponentPassiveEffectUnmountStarted(e);
    }
    function bm() {
      me !== null && typeof me.markComponentPassiveEffectUnmountStopped == "function" && me.markComponentPassiveEffectUnmountStopped();
    }
    function Em(e) {
      me !== null && typeof me.markComponentLayoutEffectMountStarted == "function" && me.markComponentLayoutEffectMountStarted(e);
    }
    function wm() {
      me !== null && typeof me.markComponentLayoutEffectMountStopped == "function" && me.markComponentLayoutEffectMountStopped();
    }
    function wc(e) {
      me !== null && typeof me.markComponentLayoutEffectUnmountStarted == "function" && me.markComponentLayoutEffectUnmountStarted(e);
    }
    function Yl() {
      me !== null && typeof me.markComponentLayoutEffectUnmountStopped == "function" && me.markComponentLayoutEffectUnmountStopped();
    }
    function Cc(e, t, a) {
      me !== null && typeof me.markComponentErrored == "function" && me.markComponentErrored(e, t, a);
    }
    function Cm(e, t, a) {
      me !== null && typeof me.markComponentSuspended == "function" && me.markComponentSuspended(e, t, a);
    }
    function Om(e) {
      me !== null && typeof me.markLayoutEffectsStarted == "function" && me.markLayoutEffectsStarted(e);
    }
    function Wl() {
      me !== null && typeof me.markLayoutEffectsStopped == "function" && me.markLayoutEffectsStopped();
    }
    function Tm(e) {
      me !== null && typeof me.markPassiveEffectsStarted == "function" && me.markPassiveEffectsStarted(e);
    }
    function rs() {
      me !== null && typeof me.markPassiveEffectsStopped == "function" && me.markPassiveEffectsStopped();
    }
    function Fa(e) {
      me !== null && typeof me.markRenderStarted == "function" && me.markRenderStarted(e);
    }
    function as() {
      me !== null && typeof me.markRenderYielded == "function" && me.markRenderYielded();
    }
    function Ql() {
      me !== null && typeof me.markRenderStopped == "function" && me.markRenderStopped();
    }
    function Go(e) {
      me !== null && typeof me.markRenderScheduled == "function" && me.markRenderScheduled(e);
    }
    function Vd(e, t) {
      me !== null && typeof me.markForceUpdateScheduled == "function" && me.markForceUpdateScheduled(e, t);
    }
    function uo(e, t) {
      me !== null && typeof me.markStateUpdateScheduled == "function" && me.markStateUpdateScheduled(e, t);
    }
    var Be = (
      /*                         */
      0
    ), mt = (
      /*                 */
      1
    ), We = (
      /*                    */
      2
    ), fn = (
      /*               */
      8
    ), ha = (
      /*              */
      16
    ), Oc = Math.clz32 ? Math.clz32 : qo, Tc = Math.log, Bd = Math.LN2;
    function qo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Tc(t) / Bd | 0) | 0;
    }
    var tn = 31, Z = (
      /*                        */
      0
    ), _t = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), Ja = (
      /*    */
      2
    ), Zr = (
      /*             */
      4
    ), Xo = (
      /*            */
      8
    ), nn = (
      /*                     */
      16
    ), Ko = (
      /*                */
      32
    ), so = (
      /*                       */
      4194240
    ), Zo = (
      /*                        */
      64
    ), ya = (
      /*                        */
      128
    ), Mr = (
      /*                        */
      256
    ), Jo = (
      /*                        */
      512
    ), is = (
      /*                        */
      1024
    ), os = (
      /*                        */
      2048
    ), Rc = (
      /*                        */
      4096
    ), xc = (
      /*                        */
      8192
    ), Pc = (
      /*                        */
      16384
    ), Dc = (
      /*                       */
      32768
    ), Nc = (
      /*                       */
      65536
    ), $c = (
      /*                       */
      131072
    ), kc = (
      /*                       */
      262144
    ), Mc = (
      /*                       */
      524288
    ), el = (
      /*                       */
      1048576
    ), Lc = (
      /*                       */
      2097152
    ), tl = (
      /*                            */
      130023424
    ), wi = (
      /*                             */
      4194304
    ), Ac = (
      /*                             */
      8388608
    ), ls = (
      /*                             */
      16777216
    ), zc = (
      /*                             */
      33554432
    ), jc = (
      /*                             */
      67108864
    ), Yd = wi, Gl = (
      /*          */
      134217728
    ), Uc = (
      /*                          */
      268435455
    ), ql = (
      /*               */
      268435456
    ), co = (
      /*                        */
      536870912
    ), Lr = (
      /*                   */
      1073741824
    );
    function c0(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & Ja)
          return "InputContinuousHydration";
        if (e & Zr)
          return "InputContinuous";
        if (e & Xo)
          return "DefaultHydration";
        if (e & nn)
          return "Default";
        if (e & Ko)
          return "TransitionHydration";
        if (e & so)
          return "Transition";
        if (e & tl)
          return "Retry";
        if (e & Gl)
          return "SelectiveHydration";
        if (e & ql)
          return "IdleHydration";
        if (e & co)
          return "Idle";
        if (e & Lr)
          return "Offscreen";
      }
    }
    var Gt = -1, Fc = Zo, Hc = wi;
    function Xl(e) {
      switch (Tn(e)) {
        case qe:
          return qe;
        case Ja:
          return Ja;
        case Zr:
          return Zr;
        case Xo:
          return Xo;
        case nn:
          return nn;
        case Ko:
          return Ko;
        case Zo:
        case ya:
        case Mr:
        case Jo:
        case is:
        case os:
        case Rc:
        case xc:
        case Pc:
        case Dc:
        case Nc:
        case $c:
        case kc:
        case Mc:
        case el:
        case Lc:
          return e & so;
        case wi:
        case Ac:
        case ls:
        case zc:
        case jc:
          return e & tl;
        case Gl:
          return Gl;
        case ql:
          return ql;
        case co:
          return co;
        case Lr:
          return Lr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function us(e, t) {
      var a = e.pendingLanes;
      if (a === Z)
        return Z;
      var o = Z, c = e.suspendedLanes, p = e.pingedLanes, m = a & Uc;
      if (m !== Z) {
        var g = m & ~c;
        if (g !== Z)
          o = Xl(g);
        else {
          var S = m & p;
          S !== Z && (o = Xl(S));
        }
      } else {
        var w = a & ~c;
        w !== Z ? o = Xl(w) : p !== Z && (o = Xl(p));
      }
      if (o === Z)
        return Z;
      if (t !== Z && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & c) === Z) {
        var C = Tn(o), L = Tn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= L || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === nn && (L & so) !== Z
        )
          return t;
      }
      (o & Zr) !== Z && (o |= a & nn);
      var k = e.entangledLanes;
      if (k !== Z)
        for (var B = e.entanglements, Y = o & k; Y > 0; ) {
          var q = fo(Y), Ce = 1 << q;
          o |= B[q], Y &= ~Ce;
        }
      return o;
    }
    function Rm(e, t) {
      for (var a = e.eventTimes, o = Gt; t > 0; ) {
        var c = fo(t), p = 1 << c, m = a[c];
        m > o && (o = m), t &= ~p;
      }
      return o;
    }
    function Ic(e, t) {
      switch (e) {
        case qe:
        case Ja:
        case Zr:
          return t + 250;
        case Xo:
        case nn:
        case Ko:
        case Zo:
        case ya:
        case Mr:
        case Jo:
        case is:
        case os:
        case Rc:
        case xc:
        case Pc:
        case Dc:
        case Nc:
        case $c:
        case kc:
        case Mc:
        case el:
        case Lc:
          return t + 5e3;
        case wi:
        case Ac:
        case ls:
        case zc:
        case jc:
          return Gt;
        case Gl:
        case ql:
        case co:
        case Lr:
          return Gt;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Gt;
      }
    }
    function f0(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, c = e.pingedLanes, p = e.expirationTimes, m = a; m > 0; ) {
        var g = fo(m), S = 1 << g, w = p[g];
        w === Gt ? ((S & o) === Z || (S & c) !== Z) && (p[g] = Ic(S, t)) : w <= t && (e.expiredLanes |= S), m &= ~S;
      }
    }
    function d0(e) {
      return Xl(e.pendingLanes);
    }
    function Wd(e) {
      var t = e.pendingLanes & ~Lr;
      return t !== Z ? t : t & Lr ? Lr : Z;
    }
    function Kl(e) {
      return (e & qe) !== Z;
    }
    function ss(e) {
      return (e & Uc) !== Z;
    }
    function Vc(e) {
      return (e & tl) === e;
    }
    function p0(e) {
      var t = qe | Zr | nn;
      return (e & t) === Z;
    }
    function xm(e) {
      return (e & so) === e;
    }
    function cs(e, t) {
      var a = Ja | Zr | Xo | nn;
      return (t & a) !== Z;
    }
    function Pm(e, t) {
      return (t & e.expiredLanes) !== Z;
    }
    function Qd(e) {
      return (e & so) !== Z;
    }
    function Gd() {
      var e = Fc;
      return Fc <<= 1, (Fc & so) === Z && (Fc = Zo), e;
    }
    function v0() {
      var e = Hc;
      return Hc <<= 1, (Hc & tl) === Z && (Hc = wi), e;
    }
    function Tn(e) {
      return e & -e;
    }
    function Nn(e) {
      return Tn(e);
    }
    function fo(e) {
      return 31 - Oc(e);
    }
    function Bc(e) {
      return fo(e);
    }
    function Ar(e, t) {
      return (e & t) !== Z;
    }
    function nl(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function Zl(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function Dm(e) {
      return e;
    }
    function Nm(e, t) {
      return e !== _t && e < t ? e : t;
    }
    function Yc(e) {
      for (var t = [], a = 0; a < tn; a++)
        t.push(e);
      return t;
    }
    function rl(e, t, a) {
      e.pendingLanes |= t, t !== co && (e.suspendedLanes = Z, e.pingedLanes = Z);
      var o = e.eventTimes, c = Bc(t);
      o[c] = a;
    }
    function Xd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var c = fo(o), p = 1 << c;
        a[c] = Gt, o &= ~p;
      }
    }
    function Kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Z, e.pingedLanes = Z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, c = e.eventTimes, p = e.expirationTimes, m = a; m > 0; ) {
        var g = fo(m), S = 1 << g;
        o[g] = Z, c[g] = Gt, p[g] = Gt, m &= ~S;
      }
    }
    function Jl(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, c = a; c; ) {
        var p = fo(c), m = 1 << p;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[p] & t && (o[p] |= t), c &= ~m;
      }
    }
    function m0(e, t) {
      var a = Tn(t), o;
      switch (a) {
        case Zr:
          o = Ja;
          break;
        case nn:
          o = Xo;
          break;
        case Zo:
        case ya:
        case Mr:
        case Jo:
        case is:
        case os:
        case Rc:
        case xc:
        case Pc:
        case Dc:
        case Nc:
        case $c:
        case kc:
        case Mc:
        case el:
        case Lc:
        case wi:
        case Ac:
        case ls:
        case zc:
        case jc:
          o = Ko;
          break;
        case co:
          o = ql;
          break;
        default:
          o = _t;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== _t ? _t : o;
    }
    function Jd(e, t, a) {
      if (Qn)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var c = Bc(a), p = 1 << c, m = o[c];
          m.add(t), a &= ~p;
        }
    }
    function Wc(e, t) {
      if (Qn)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var c = Bc(t), p = 1 << c, m = a[c];
          m.size > 0 && (m.forEach(function(g) {
            var S = g.alternate;
            (S === null || !o.has(S)) && o.add(g);
          }), m.clear()), t &= ~p;
        }
    }
    function ep(e, t) {
      return null;
    }
    var ur = qe, Gn = Zr, Ci = nn, fs = co, al = _t;
    function ga() {
      return al;
    }
    function $n(e) {
      al = e;
    }
    function ds(e, t) {
      var a = al;
      try {
        return al = e, t();
      } finally {
        al = a;
      }
    }
    function sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function h0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function tp(e, t) {
      return e !== 0 && e < t;
    }
    function ps(e) {
      var t = Tn(e);
      return tp(ur, t) ? tp(Gn, t) ? ss(t) ? Ci : fs : Gn : ur;
    }
    function kn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var $m;
    function Te(e) {
      $m = e;
    }
    function eu(e) {
      $m(e);
    }
    var vs;
    function km(e) {
      vs = e;
    }
    var Mm;
    function ms(e) {
      Mm = e;
    }
    var hs;
    function np(e) {
      hs = e;
    }
    var rp;
    function Lm(e) {
      rp = e;
    }
    var Qc = !1, tu = [], ei = null, un = null, In = null, Sa = /* @__PURE__ */ new Map(), nu = /* @__PURE__ */ new Map(), Oi = [], Ha = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Am(e) {
      return Ha.indexOf(e) > -1;
    }
    function ti(e, t, a, o, c) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: c,
        targetContainers: [o]
      };
    }
    function zm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ei = null;
          break;
        case "dragenter":
        case "dragleave":
          un = null;
          break;
        case "mouseover":
        case "mouseout":
          In = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Sa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          nu.delete(o);
          break;
        }
      }
    }
    function ru(e, t, a, o, c, p) {
      if (e === null || e.nativeEvent !== p) {
        var m = ti(t, a, o, c, p);
        if (t !== null) {
          var g = vu(t);
          g !== null && vs(g);
        }
        return m;
      }
      e.eventSystemFlags |= o;
      var S = e.targetContainers;
      return c !== null && S.indexOf(c) === -1 && S.push(c), e;
    }
    function jm(e, t, a, o, c) {
      switch (t) {
        case "focusin": {
          var p = c;
          return ei = ru(ei, e, t, a, o, p), !0;
        }
        case "dragenter": {
          var m = c;
          return un = ru(un, e, t, a, o, m), !0;
        }
        case "mouseover": {
          var g = c;
          return In = ru(In, e, t, a, o, g), !0;
        }
        case "pointerover": {
          var S = c, w = S.pointerId;
          return Sa.set(w, ru(Sa.get(w) || null, e, t, a, o, S)), !0;
        }
        case "gotpointercapture": {
          var C = c, L = C.pointerId;
          return nu.set(L, ru(nu.get(L) || null, e, t, a, o, C)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = Os(e.target);
      if (t !== null) {
        var a = qr(t);
        if (a !== null) {
          var o = a.tag;
          if (o === W) {
            var c = kd(a);
            if (c !== null) {
              e.blockedOn = c, rp(e.priority, function() {
                Mm(a);
              });
              return;
            }
          } else if (o === D) {
            var p = a.stateNode;
            if (kn(p)) {
              e.blockedOn = mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Um(e) {
      for (var t = hs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < Oi.length && tp(t, Oi[o].priority); o++)
        ;
      Oi.splice(o, 0, a), o === 0 && ap(a);
    }
    function Gc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = il(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var c = e.nativeEvent, p = new c.constructor(c.type, c);
          qu(p), c.target.dispatchEvent(p), o0();
        } else {
          var m = vu(o);
          return m !== null && vs(m), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ys(e, t, a) {
      Gc(e) && a.delete(t);
    }
    function ip() {
      Qc = !1, ei !== null && Gc(ei) && (ei = null), un !== null && Gc(un) && (un = null), In !== null && Gc(In) && (In = null), Sa.forEach(ys), nu.forEach(ys);
    }
    function cr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qc || (Qc = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, ip)));
    }
    function gt(e) {
      if (tu.length > 0) {
        cr(tu[0], e);
        for (var t = 1; t < tu.length; t++) {
          var a = tu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ei !== null && cr(ei, e), un !== null && cr(un, e), In !== null && cr(In, e);
      var o = function(g) {
        return cr(g, e);
      };
      Sa.forEach(o), nu.forEach(o);
      for (var c = 0; c < Oi.length; c++) {
        var p = Oi[c];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; Oi.length > 0; ) {
        var m = Oi[0];
        if (m.blockedOn !== null)
          break;
        ap(m), m.blockedOn === null && Oi.shift();
      }
    }
    var dn = u.ReactCurrentBatchConfig, mn = !0;
    function Vn(e) {
      mn = !!e;
    }
    function Jr() {
      return mn;
    }
    function au(e, t, a) {
      var o = mr(t), c;
      switch (o) {
        case ur:
          c = Mn;
          break;
        case Gn:
          c = gs;
          break;
        case Ci:
        default:
          c = Ti;
          break;
      }
      return c.bind(null, t, a, e);
    }
    function Mn(e, t, a, o) {
      var c = ga(), p = dn.transition;
      dn.transition = null;
      try {
        $n(ur), Ti(e, t, a, o);
      } finally {
        $n(c), dn.transition = p;
      }
    }
    function gs(e, t, a, o) {
      var c = ga(), p = dn.transition;
      dn.transition = null;
      try {
        $n(Gn), Ti(e, t, a, o);
      } finally {
        $n(c), dn.transition = p;
      }
    }
    function Ti(e, t, a, o) {
      mn && qc(e, t, a, o);
    }
    function qc(e, t, a, o) {
      var c = il(e, t, a, o);
      if (c === null) {
        A0(e, t, o, iu, a), zm(e, o);
        return;
      }
      if (jm(c, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (zm(e, o), t & Ho && Am(e)) {
        for (; c !== null; ) {
          var p = vu(c);
          p !== null && eu(p);
          var m = il(e, t, a, o);
          if (m === null && A0(e, t, o, iu, a), m === c)
            break;
          c = m;
        }
        c !== null && o.stopPropagation();
        return;
      }
      A0(e, t, o, null, a);
    }
    var iu = null;
    function il(e, t, a, o) {
      iu = null;
      var c = cc(o), p = Os(c);
      if (p !== null) {
        var m = qr(p);
        if (m === null)
          p = null;
        else {
          var g = m.tag;
          if (g === W) {
            var S = kd(m);
            if (S !== null)
              return S;
            p = null;
          } else if (g === D) {
            var w = m.stateNode;
            if (kn(w))
              return mc(m);
            p = null;
          } else
            m !== p && (p = null);
        }
      }
      return iu = p, null;
    }
    function mr(e) {
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
          return ur;
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
          return Gn;
        case "message": {
          var t = Ad();
          switch (t) {
            case Sc:
              return ur;
            case Kr:
              return Gn;
            case Za:
            case _c:
              return Ci;
            case ro:
              return fs;
            default:
              return Ci;
          }
        }
        default:
          return Ci;
      }
    }
    function op(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ou(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ri(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function Xc(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var ol = null, ni = null, po = null;
    function vo(e) {
      return ol = e, ni = Zc(), !0;
    }
    function Kc() {
      ol = null, ni = null, po = null;
    }
    function lu() {
      if (po)
        return po;
      var e, t = ni, a = t.length, o, c = Zc(), p = c.length;
      for (e = 0; e < a && t[e] === c[e]; e++)
        ;
      var m = a - e;
      for (o = 1; o <= m && t[a - o] === c[p - o]; o++)
        ;
      var g = o > 1 ? 1 - o : void 0;
      return po = c.slice(e, g), po;
    }
    function Zc() {
      return "value" in ol ? ol.value : ol.textContent;
    }
    function ll(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ul() {
      return !0;
    }
    function fr() {
      return !1;
    }
    function Rn(e) {
      function t(a, o, c, p, m) {
        this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = p, this.target = m, this.currentTarget = null;
        for (var g in e)
          if (e.hasOwnProperty(g)) {
            var S = e[g];
            S ? this[g] = S(p) : this[g] = p[g];
          }
        var w = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return w ? this.isDefaultPrevented = ul : this.isDefaultPrevented = fr, this.isPropagationStopped = fr, this;
      }
      return yt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ul);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ul);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ul
      }), t;
    }
    var dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, pr = Rn(dr), uu = yt({}, dr, {
      view: 0,
      detail: 0
    }), lp = Rn(uu), Ss, up, _a;
    function Fm(e) {
      e !== _a && (_a && e.type === "mousemove" ? (Ss = e.screenX - _a.screenX, up = e.screenY - _a.screenY) : (Ss = 0, up = 0), _a = e);
    }
    var su = yt({}, uu, {
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
      getModifierState: tf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Fm(e), Ss);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : up;
      }
    }), mo = Rn(su), sp = yt({}, su, {
      dataTransfer: 0
    }), sl = Rn(sp), Hm = yt({}, uu, {
      relatedTarget: 0
    }), Jc = Rn(Hm), cp = yt({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ef = Rn(cp), y0 = yt({}, dr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), g0 = Rn(y0), Im = yt({}, dr, {
      data: 0
    }), fp = Rn(Im), cl = fp, S0 = {
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
      MozPrintableKey: "Unidentified"
    }, cu = {
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
      224: "Meta"
    };
    function Vm(e) {
      if (e.key) {
        var t = S0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ll(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? cu[e.keyCode] || "Unidentified" : "";
    }
    var hn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = hn[e];
      return o ? !!a[o] : !1;
    }
    function tf(e) {
      return _0;
    }
    var b0 = yt({}, uu, {
      key: Vm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ll(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), E0 = Rn(b0), Bm = yt({}, su, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), dp = Rn(Bm), w0 = yt({}, uu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tf
    }), ba = Rn(w0), pp = yt({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), C0 = Rn(pp), ho = yt({}, su, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), nf = Rn(ho), fl = [9, 13, 27, 32], _s = 229, bs = Lt && "CompositionEvent" in window, dl = null;
    Lt && "documentMode" in document && (dl = document.documentMode);
    var O0 = Lt && "TextEvent" in window && !dl, rf = Lt && (!bs || dl && dl > 8 && dl <= 11), Ym = 32, vp = String.fromCharCode(Ym);
    function Wm() {
      Nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Nt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Nt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Nt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Es = !1;
    function af(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Qm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function mp(e, t) {
      return e === "keydown" && t.keyCode === _s;
    }
    function Gm(e, t) {
      switch (e) {
        case "keyup":
          return fl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== _s;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function of(e) {
      return e.locale === "ko";
    }
    var xi = !1;
    function yp(e, t, a, o, c) {
      var p, m;
      if (bs ? p = Qm(t) : xi ? Gm(t, o) && (p = "onCompositionEnd") : mp(t, o) && (p = "onCompositionStart"), !p)
        return null;
      rf && !of(o) && (!xi && p === "onCompositionStart" ? xi = vo(c) : p === "onCompositionEnd" && xi && (m = lu()));
      var g = Jm(a, p);
      if (g.length > 0) {
        var S = new fp(p, t, null, o, c);
        if (e.push({
          event: S,
          listeners: g
        }), m)
          S.data = m;
        else {
          var w = hp(o);
          w !== null && (S.data = w);
        }
      }
    }
    function lf(e, t) {
      switch (e) {
        case "compositionend":
          return hp(t);
        case "keypress":
          var a = t.which;
          return a !== Ym ? null : (Es = !0, vp);
        case "textInput":
          var o = t.data;
          return o === vp && Es ? null : o;
        default:
          return null;
      }
    }
    function qm(e, t) {
      if (xi) {
        if (e === "compositionend" || !bs && Gm(e, t)) {
          var a = lu();
          return Kc(), xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!af(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rf && !of(t) ? null : t.data;
        default:
          return null;
      }
    }
    function T0(e, t, a, o, c) {
      var p;
      if (O0 ? p = lf(t, o) : p = qm(t, o), !p)
        return null;
      var m = Jm(a, "onBeforeInput");
      if (m.length > 0) {
        var g = new cl("onBeforeInput", "beforeinput", null, o, c);
        e.push({
          event: g,
          listeners: m
        }), g.data = p;
      }
    }
    function uf(e, t, a, o, c, p, m) {
      yp(e, t, a, o, c), T0(e, t, a, o, c);
    }
    var R0 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function fu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!R0[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function x0(e) {
      if (!Lt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function sf() {
      Nt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, o) {
      fc(o);
      var c = Jm(t, "onChange");
      if (c.length > 0) {
        var p = new pr("onChange", "change", null, a, o);
        e.push({
          event: p,
          listeners: c
        });
      }
    }
    var r = null, s = null;
    function f(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function v(e) {
      var t = [];
      n(t, s, e, cc(e)), Od(h, t);
    }
    function h(e) {
      GE(e, 0);
    }
    function b(e) {
      var t = mf(e);
      if (Lv(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    Lt && (N = x0("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      r = e, s = t, r.attachEvent("onpropertychange", le);
    }
    function ae() {
      r && (r.detachEvent("onpropertychange", le), r = null, s = null);
    }
    function le(e) {
      e.propertyName === "value" && b(s) && v(e);
    }
    function re(e, t, a) {
      e === "focusin" ? (ae(), Q(t, a)) : e === "focusout" && ae();
    }
    function be(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return b(s);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return b(t);
    }
    function _n(e, t) {
      if (e === "input" || e === "change")
        return b(t);
    }
    function j(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qi(e, "number", e.value);
    }
    function M(e, t, a, o, c, p, m) {
      var g = a ? mf(a) : window, S, w;
      if (f(g) ? S = T : fu(g) ? N ? S = _n : (S = be, w = re) : Re(g) && (S = De), S) {
        var C = S(t, a);
        if (C) {
          n(e, C, o, c);
          return;
        }
      }
      w && w(t, g, a), t === "focusout" && j(g);
    }
    function V() {
      ve("onMouseEnter", ["mouseout", "mouseover"]), ve("onMouseLeave", ["mouseout", "mouseover"]), ve("onPointerEnter", ["pointerout", "pointerover"]), ve("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ce(e, t, a, o, c, p, m) {
      var g = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout";
      if (g && !dm(o)) {
        var w = o.relatedTarget || o.fromElement;
        if (w && (Os(w) || Np(w)))
          return;
      }
      if (!(!S && !g)) {
        var C;
        if (c.window === c)
          C = c;
        else {
          var L = c.ownerDocument;
          L ? C = L.defaultView || L.parentWindow : C = window;
        }
        var k, B;
        if (S) {
          var Y = o.relatedTarget || o.toElement;
          if (k = a, B = Y ? Os(Y) : null, B !== null) {
            var q = qr(B);
            (B !== q || B.tag !== z && B.tag !== G) && (B = null);
          }
        } else
          k = null, B = a;
        if (k !== B) {
          var Ce = mo, Ie = "onMouseLeave", Me = "onMouseEnter", Et = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ce = dp, Ie = "onPointerLeave", Me = "onPointerEnter", Et = "pointer");
          var St = k == null ? C : mf(k), U = B == null ? C : mf(B), X = new Ce(Ie, Et + "leave", k, o, c);
          X.target = St, X.relatedTarget = U;
          var F = null, se = Os(c);
          if (se === a) {
            var Oe = new Ce(Me, Et + "enter", B, o, c);
            Oe.target = U, Oe.relatedTarget = St, F = Oe;
          }
          BD(e, X, F, k, B);
        }
      }
    }
    function Ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : Ne;
    function Ue(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), o = Object.keys(t);
      if (a.length !== o.length)
        return !1;
      for (var c = 0; c < a.length; c++) {
        var p = a[c];
        if (!yn.call(t, p) || !xe(e[p], t[p]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Bn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Tt(e, t) {
      for (var a = Je(e), o = 0, c = 0; a; ) {
        if (a.nodeType === mi) {
          if (c = o + a.textContent.length, o <= t && c >= t)
            return {
              node: a,
              offset: t - o
            };
          o = c;
        }
        a = Je(Bn(a));
      }
    }
    function yo(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, o = a.getSelection && a.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var c = o.anchorNode, p = o.anchorOffset, m = o.focusNode, g = o.focusOffset;
      try {
        c.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return P0(e, c, p, m, g);
    }
    function P0(e, t, a, o, c) {
      var p = 0, m = -1, g = -1, S = 0, w = 0, C = e, L = null;
      e:
        for (; ; ) {
          for (var k = null; C === t && (a === 0 || C.nodeType === mi) && (m = p + a), C === o && (c === 0 || C.nodeType === mi) && (g = p + c), C.nodeType === mi && (p += C.nodeValue.length), (k = C.firstChild) !== null; )
            L = C, C = k;
          for (; ; ) {
            if (C === e)
              break e;
            if (L === t && ++S === a && (m = p), L === o && ++w === c && (g = p), (k = C.nextSibling) !== null)
              break;
            C = L, L = C.parentNode;
          }
          C = k;
        }
      return m === -1 || g === -1 ? null : {
        start: m,
        end: g
      };
    }
    function OD(e, t) {
      var a = e.ownerDocument || document, o = a && a.defaultView || window;
      if (o.getSelection) {
        var c = o.getSelection(), p = e.textContent.length, m = Math.min(t.start, p), g = t.end === void 0 ? m : Math.min(t.end, p);
        if (!c.extend && m > g) {
          var S = g;
          g = m, m = S;
        }
        var w = Tt(e, m), C = Tt(e, g);
        if (w && C) {
          if (c.rangeCount === 1 && c.anchorNode === w.node && c.anchorOffset === w.offset && c.focusNode === C.node && c.focusOffset === C.offset)
            return;
          var L = a.createRange();
          L.setStart(w.node, w.offset), c.removeAllRanges(), m > g ? (c.addRange(L), c.extend(C.node, C.offset)) : (L.setEnd(C.node, C.offset), c.addRange(L));
        }
      }
    }
    function AE(e) {
      return e && e.nodeType === mi;
    }
    function zE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : AE(e) ? !1 : AE(t) ? zE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function TD(e) {
      return e && e.ownerDocument && zE(e.ownerDocument.documentElement, e);
    }
    function RD(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function jE() {
      for (var e = window, t = Ks(); t instanceof e.HTMLIFrameElement; ) {
        if (RD(t))
          e = t.contentWindow;
        else
          return t;
        t = Ks(e.document);
      }
      return t;
    }
    function D0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function xD() {
      var e = jE();
      return {
        focusedElem: e,
        selectionRange: D0(e) ? DD(e) : null
      };
    }
    function PD(e) {
      var t = jE(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && TD(a)) {
        o !== null && D0(a) && ND(a, o);
        for (var c = [], p = a; p = p.parentNode; )
          p.nodeType === xr && c.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var m = 0; m < c.length; m++) {
          var g = c[m];
          g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
        }
      }
    }
    function DD(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yo(e), t || {
        start: 0,
        end: 0
      };
    }
    function ND(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : OD(e, t);
    }
    var $D = Lt && "documentMode" in document && document.documentMode <= 11;
    function kD() {
      Nt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var cf = null, N0 = null, gp = null, $0 = !1;
    function MD(e) {
      if ("selectionStart" in e && D0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function LD(e) {
      return e.window === e ? e.document : e.nodeType === za ? e : e.ownerDocument;
    }
    function UE(e, t, a) {
      var o = LD(a);
      if (!($0 || cf == null || cf !== Ks(o))) {
        var c = MD(cf);
        if (!gp || !Ue(gp, c)) {
          gp = c;
          var p = Jm(N0, "onSelect");
          if (p.length > 0) {
            var m = new pr("onSelect", "select", null, t, a);
            e.push({
              event: m,
              listeners: p
            }), m.target = cf;
          }
        }
      }
    }
    function AD(e, t, a, o, c, p, m) {
      var g = a ? mf(a) : window;
      switch (t) {
        case "focusin":
          (fu(g) || g.contentEditable === "true") && (cf = g, N0 = a, gp = null);
          break;
        case "focusout":
          cf = null, N0 = null, gp = null;
          break;
        case "mousedown":
          $0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $0 = !1, UE(e, o, c);
          break;
        case "selectionchange":
          if ($D)
            break;
        case "keydown":
        case "keyup":
          UE(e, o, c);
      }
    }
    function Xm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ff = {
      animationend: Xm("Animation", "AnimationEnd"),
      animationiteration: Xm("Animation", "AnimationIteration"),
      animationstart: Xm("Animation", "AnimationStart"),
      transitionend: Xm("Transition", "TransitionEnd")
    }, k0 = {}, FE = {};
    Lt && (FE = document.createElement("div").style, "AnimationEvent" in window || (delete ff.animationend.animation, delete ff.animationiteration.animation, delete ff.animationstart.animation), "TransitionEvent" in window || delete ff.transitionend.transition);
    function Km(e) {
      if (k0[e])
        return k0[e];
      if (!ff[e])
        return e;
      var t = ff[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in FE)
          return k0[e] = t[a];
      return e;
    }
    var HE = Km("animationend"), IE = Km("animationiteration"), VE = Km("animationstart"), BE = Km("transitionend"), YE = /* @__PURE__ */ new Map(), WE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function du(e, t) {
      YE.set(e, t), Nt(t, [e]);
    }
    function zD() {
      for (var e = 0; e < WE.length; e++) {
        var t = WE[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        du(a, "on" + o);
      }
      du(HE, "onAnimationEnd"), du(IE, "onAnimationIteration"), du(VE, "onAnimationStart"), du("dblclick", "onDoubleClick"), du("focusin", "onFocus"), du("focusout", "onBlur"), du(BE, "onTransitionEnd");
    }
    function jD(e, t, a, o, c, p, m) {
      var g = YE.get(t);
      if (g !== void 0) {
        var S = pr, w = t;
        switch (t) {
          case "keypress":
            if (ll(o) === 0)
              return;
          case "keydown":
          case "keyup":
            S = E0;
            break;
          case "focusin":
            w = "focus", S = Jc;
            break;
          case "focusout":
            w = "blur", S = Jc;
            break;
          case "beforeblur":
          case "afterblur":
            S = Jc;
            break;
          case "click":
            if (o.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = sl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = ba;
            break;
          case HE:
          case IE:
          case VE:
            S = ef;
            break;
          case BE:
            S = C0;
            break;
          case "scroll":
            S = lp;
            break;
          case "wheel":
            S = nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = g0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = dp;
            break;
        }
        var C = (p & Ho) !== 0;
        {
          var L = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = ID(a, g, o.type, C, L);
          if (k.length > 0) {
            var B = new S(g, w, null, o, c);
            e.push({
              event: B,
              listeners: k
            });
          }
        }
      }
    }
    zD(), V(), sf(), kD(), Wm();
    function UD(e, t, a, o, c, p, m) {
      jD(e, t, a, o, c, p);
      var g = (p & i0) === 0;
      g && (ce(e, t, a, o, c), M(e, t, a, o, c), AD(e, t, a, o, c), uf(e, t, a, o, c));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], M0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
    function QE(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, Si(o, t, void 0, e), e.currentTarget = null;
    }
    function FD(e, t, a) {
      var o;
      if (a)
        for (var c = t.length - 1; c >= 0; c--) {
          var p = t[c], m = p.instance, g = p.currentTarget, S = p.listener;
          if (m !== o && e.isPropagationStopped())
            return;
          QE(e, S, g), o = m;
        }
      else
        for (var w = 0; w < t.length; w++) {
          var C = t[w], L = C.instance, k = C.currentTarget, B = C.listener;
          if (L !== o && e.isPropagationStopped())
            return;
          QE(e, B, k), o = L;
        }
    }
    function GE(e, t) {
      for (var a = (t & Ho) !== 0, o = 0; o < e.length; o++) {
        var c = e[o], p = c.event, m = c.listeners;
        FD(p, m, a);
      }
      Pd();
    }
    function HD(e, t, a, o, c) {
      var p = cc(a), m = [];
      UD(m, e, o, a, p, t), GE(m, t);
    }
    function pn(e, t) {
      M0.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = y$(t), c = YD(e, a);
      o.has(c) || (qE(t, e, Qu, a), o.add(c));
    }
    function L0(e, t, a) {
      M0.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= Ho), qE(a, e, o, t);
    }
    var Zm = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Zm]) {
        e[Zm] = !0, Ge.forEach(function(a) {
          a !== "selectionchange" && (M0.has(a) || L0(a, !1, e), L0(a, !0, e));
        });
        var t = e.nodeType === za ? e : e.ownerDocument;
        t !== null && (t[Zm] || (t[Zm] = !0, L0("selectionchange", !1, t)));
      }
    }
    function qE(e, t, a, o, c) {
      var p = au(e, t, a), m = void 0;
      Zu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, o ? m !== void 0 ? Ri(e, t, p, m) : ou(e, t, p) : m !== void 0 ? Xc(e, t, p, m) : op(e, t, p);
    }
    function XE(e, t) {
      return e === t || e.nodeType === On && e.parentNode === t;
    }
    function A0(e, t, a, o, c) {
      var p = o;
      if (!(t & yi) && !(t & Qu)) {
        var m = c;
        if (o !== null) {
          var g = o;
          e:
            for (; ; ) {
              if (g === null)
                return;
              var S = g.tag;
              if (S === D || S === A) {
                var w = g.stateNode.containerInfo;
                if (XE(w, m))
                  break;
                if (S === A)
                  for (var C = g.return; C !== null; ) {
                    var L = C.tag;
                    if (L === D || L === A) {
                      var k = C.stateNode.containerInfo;
                      if (XE(k, m))
                        return;
                    }
                    C = C.return;
                  }
                for (; w !== null; ) {
                  var B = Os(w);
                  if (B === null)
                    return;
                  var Y = B.tag;
                  if (Y === z || Y === G) {
                    g = p = B;
                    continue e;
                  }
                  w = w.parentNode;
                }
              }
              g = g.return;
            }
        }
      }
      Od(function() {
        return HD(e, t, a, p);
      });
    }
    function bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ID(e, t, a, o, c, p) {
      for (var m = t !== null ? t + "Capture" : null, g = o ? m : t, S = [], w = e, C = null; w !== null; ) {
        var L = w, k = L.stateNode, B = L.tag;
        if (B === z && k !== null && (C = k, g !== null)) {
          var Y = Vo(w, g);
          Y != null && S.push(bp(w, Y, C));
        }
        if (c)
          break;
        w = w.return;
      }
      return S;
    }
    function Jm(e, t) {
      for (var a = t + "Capture", o = [], c = e; c !== null; ) {
        var p = c, m = p.stateNode, g = p.tag;
        if (g === z && m !== null) {
          var S = m, w = Vo(c, a);
          w != null && o.unshift(bp(c, w, S));
          var C = Vo(c, t);
          C != null && o.push(bp(c, C, S));
        }
        c = c.return;
      }
      return o;
    }
    function df(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== z);
      return e || null;
    }
    function VD(e, t) {
      for (var a = e, o = t, c = 0, p = a; p; p = df(p))
        c++;
      for (var m = 0, g = o; g; g = df(g))
        m++;
      for (; c - m > 0; )
        a = df(a), c--;
      for (; m - c > 0; )
        o = df(o), m--;
      for (var S = c; S--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = df(a), o = df(o);
      }
      return null;
    }
    function KE(e, t, a, o, c) {
      for (var p = t._reactName, m = [], g = a; g !== null && g !== o; ) {
        var S = g, w = S.alternate, C = S.stateNode, L = S.tag;
        if (w !== null && w === o)
          break;
        if (L === z && C !== null) {
          var k = C;
          if (c) {
            var B = Vo(g, p);
            B != null && m.unshift(bp(g, B, k));
          } else if (!c) {
            var Y = Vo(g, p);
            Y != null && m.push(bp(g, Y, k));
          }
        }
        g = g.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function BD(e, t, a, o, c) {
      var p = o && c ? VD(o, c) : null;
      o !== null && KE(e, t, o, p, !1), c !== null && a !== null && KE(e, a, c, p, !0);
    }
    function YD(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ea = !1, Ep = "dangerouslySetInnerHTML", eh = "suppressContentEditableWarning", pu = "suppressHydrationWarning", ZE = "autoFocus", ws = "children", Cs = "style", th = "__html", z0, nh, wp, JE, rh, e1, t1;
    z0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, nh = function(e, t) {
      sc(e, t), _d(e, t), fm(e, t, {
        registrationNameDependencies: et,
        possibleRegistrationNames: rt
      });
    }, e1 = Lt && !document.documentMode, wp = function(e, t, a) {
      if (!Ea) {
        var o = ah(a), c = ah(t);
        c !== o && (Ea = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(c), JSON.stringify(o)));
      }
    }, JE = function(e) {
      if (!Ea) {
        Ea = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, rh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, t1 = function(e, t) {
      var a = e.namespaceURI === vi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var WD = /\r\n?/g, QD = /\u0000|\uFFFD/g;
    function ah(e) {
      Da(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(WD, `
`).replace(QD, "");
    }
    function ih(e, t, a, o) {
      var c = ah(t), p = ah(e);
      if (p !== c && (o && (Ea || (Ea = !0, y('Text content did not match. Server: "%s" Client: "%s"', p, c))), a && Bt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function n1(e) {
      return e.nodeType === za ? e : e.ownerDocument;
    }
    function GD() {
    }
    function oh(e) {
      e.onclick = GD;
    }
    function qD(e, t, a, o, c) {
      for (var p in o)
        if (o.hasOwnProperty(p)) {
          var m = o[p];
          if (p === Cs)
            m && Object.freeze(m), tm(t, m);
          else if (p === Ep) {
            var g = m ? m[th] : void 0;
            g != null && Bv(t, g);
          } else if (p === ws)
            if (typeof m == "string") {
              var S = e !== "textarea" || m !== "";
              S && ic(t, m);
            } else
              typeof m == "number" && ic(t, "" + m);
          else
            p === eh || p === pu || p === ZE || (et.hasOwnProperty(p) ? m != null && (typeof m != "function" && rh(p, m), p === "onScroll" && pn("scroll", t)) : m != null && qa(t, p, m, c));
        }
    }
    function XD(e, t, a, o) {
      for (var c = 0; c < t.length; c += 2) {
        var p = t[c], m = t[c + 1];
        p === Cs ? tm(e, m) : p === Ep ? Bv(e, m) : p === ws ? ic(e, m) : qa(e, p, m, o);
      }
    }
    function KD(e, t, a, o) {
      var c, p = n1(a), m, g = o;
      if (g === vi && (g = rc(e)), g === vi) {
        if (c = hi(e, t), !c && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var S = p.createElement("div");
          S.innerHTML = "<script><\/script>";
          var w = S.firstChild;
          m = S.removeChild(w);
        } else if (typeof t.is == "string")
          m = p.createElement(e, {
            is: t.is
          });
        else if (m = p.createElement(e), e === "select") {
          var C = m;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        m = p.createElementNS(g, e);
      return g === vi && !c && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !yn.call(z0, e) && (z0[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function ZD(e, t) {
      return n1(t).createTextNode(e);
    }
    function JD(e, t, a, o) {
      var c = hi(t, a);
      nh(t, a);
      var p;
      switch (t) {
        case "dialog":
          pn("cancel", e), pn("close", e), p = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          pn("load", e), p = a;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Sp.length; m++)
            pn(Sp[m], e);
          p = a;
          break;
        case "source":
          pn("error", e), p = a;
          break;
        case "img":
        case "image":
        case "link":
          pn("error", e), pn("load", e), p = a;
          break;
        case "details":
          pn("toggle", e), p = a;
          break;
        case "input":
          Hu(e, a), p = Fu(e, a), pn("invalid", e);
          break;
        case "option":
          tc(e, a), p = a;
          break;
        case "select":
          Fv(e, a), p = sd(e, a), pn("invalid", e);
          break;
        case "textarea":
          Hv(e, a), p = fd(e, a), pn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (lc(t, p), qD(t, e, o, p, c), t) {
        case "input":
          jo(e), Iu(e, a, !1);
          break;
        case "textarea":
          jo(e), Vv(e);
          break;
        case "option":
          ud(e, a);
          break;
        case "select":
          Gg(e, a);
          break;
        default:
          typeof p.onClick == "function" && oh(e);
          break;
      }
    }
    function eN(e, t, a, o, c) {
      nh(t, o);
      var p = null, m, g;
      switch (t) {
        case "input":
          m = Fu(e, a), g = Fu(e, o), p = [];
          break;
        case "select":
          m = sd(e, a), g = sd(e, o), p = [];
          break;
        case "textarea":
          m = fd(e, a), g = fd(e, o), p = [];
          break;
        default:
          m = a, g = o, typeof m.onClick != "function" && typeof g.onClick == "function" && oh(e);
          break;
      }
      lc(t, g);
      var S, w, C = null;
      for (S in m)
        if (!(g.hasOwnProperty(S) || !m.hasOwnProperty(S) || m[S] == null))
          if (S === Cs) {
            var L = m[S];
            for (w in L)
              L.hasOwnProperty(w) && (C || (C = {}), C[w] = "");
          } else
            S === Ep || S === ws || S === eh || S === pu || S === ZE || (et.hasOwnProperty(S) ? p || (p = []) : (p = p || []).push(S, null));
      for (S in g) {
        var k = g[S], B = m != null ? m[S] : void 0;
        if (!(!g.hasOwnProperty(S) || k === B || k == null && B == null))
          if (S === Cs)
            if (k && Object.freeze(k), B) {
              for (w in B)
                B.hasOwnProperty(w) && (!k || !k.hasOwnProperty(w)) && (C || (C = {}), C[w] = "");
              for (w in k)
                k.hasOwnProperty(w) && B[w] !== k[w] && (C || (C = {}), C[w] = k[w]);
            } else
              C || (p || (p = []), p.push(S, C)), C = k;
          else if (S === Ep) {
            var Y = k ? k[th] : void 0, q = B ? B[th] : void 0;
            Y != null && q !== Y && (p = p || []).push(S, Y);
          } else
            S === ws ? (typeof k == "string" || typeof k == "number") && (p = p || []).push(S, "" + k) : S === eh || S === pu || (et.hasOwnProperty(S) ? (k != null && (typeof k != "function" && rh(S, k), S === "onScroll" && pn("scroll", e)), !p && B !== k && (p = [])) : (p = p || []).push(S, k));
      }
      return C && (Yu(C, g[Cs]), (p = p || []).push(Cs, C)), p;
    }
    function tN(e, t, a, o, c) {
      a === "input" && c.type === "radio" && c.name != null && ld(e, c);
      var p = hi(a, o), m = hi(a, c);
      switch (XD(e, t, p, m), a) {
        case "input":
          Ll(e, c);
          break;
        case "textarea":
          Iv(e, c);
          break;
        case "select":
          qg(e, c);
          break;
      }
    }
    function nN(e) {
      {
        var t = e.toLowerCase();
        return uc.hasOwnProperty(t) && uc[t] || null;
      }
    }
    function rN(e, t, a, o, c, p, m) {
      var g, S;
      switch (g = hi(t, a), nh(t, a), t) {
        case "dialog":
          pn("cancel", e), pn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          pn("load", e);
          break;
        case "video":
        case "audio":
          for (var w = 0; w < Sp.length; w++)
            pn(Sp[w], e);
          break;
        case "source":
          pn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          pn("error", e), pn("load", e);
          break;
        case "details":
          pn("toggle", e);
          break;
        case "input":
          Hu(e, a), pn("invalid", e);
          break;
        case "option":
          tc(e, a);
          break;
        case "select":
          Fv(e, a), pn("invalid", e);
          break;
        case "textarea":
          Hv(e, a), pn("invalid", e);
          break;
      }
      lc(t, a);
      {
        S = /* @__PURE__ */ new Set();
        for (var C = e.attributes, L = 0; L < C.length; L++) {
          var k = C[L].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              S.add(C[L].name);
          }
        }
      }
      var B = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var q = a[Y];
          if (Y === ws)
            typeof q == "string" ? e.textContent !== q && (a[pu] !== !0 && ih(e.textContent, q, p, m), B = [ws, q]) : typeof q == "number" && e.textContent !== "" + q && (a[pu] !== !0 && ih(e.textContent, q, p, m), B = [ws, "" + q]);
          else if (et.hasOwnProperty(Y))
            q != null && (typeof q != "function" && rh(Y, q), Y === "onScroll" && pn("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof g == "boolean") {
            var Ce = void 0, Ie = g && je ? null : Yr(Y);
            if (a[pu] !== !0) {
              if (!(Y === eh || Y === pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === Ep) {
                  var Me = e.innerHTML, Et = q ? q[th] : void 0;
                  if (Et != null) {
                    var St = t1(e, Et);
                    St !== Me && wp(Y, Me, St);
                  }
                } else if (Y === Cs) {
                  if (S.delete(Y), e1) {
                    var U = r0(q);
                    Ce = e.getAttribute("style"), U !== Ce && wp(Y, Ce, U);
                  }
                } else if (g && !je)
                  S.delete(Y.toLowerCase()), Ce = Nl(e, Y, q), q !== Ce && wp(Y, Ce, q);
                else if (!gn(Y, Ie, g) && !Kt(Y, q, Ie, g)) {
                  var X = !1;
                  if (Ie !== null)
                    S.delete(Ie.attributeName), Ce = Lo(e, Y, q, Ie);
                  else {
                    var F = o;
                    if (F === vi && (F = rc(t)), F === vi)
                      S.delete(Y.toLowerCase());
                    else {
                      var se = nN(Y);
                      se !== null && se !== Y && (X = !0, S.delete(se)), S.delete(Y);
                    }
                    Ce = Nl(e, Y, q);
                  }
                  var Oe = je;
                  !Oe && q !== Ce && !X && wp(Y, Ce, q);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      S.size > 0 && a[pu] !== !0 && JE(S), t) {
        case "input":
          jo(e), Iu(e, a, !0);
          break;
        case "textarea":
          jo(e), Vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && oh(e);
          break;
      }
      return B;
    }
    function aN(e, t, a) {
      var o = e.nodeValue !== t;
      return o;
    }
    function j0(e, t) {
      {
        if (Ea)
          return;
        Ea = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function U0(e, t) {
      {
        if (Ea)
          return;
        Ea = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function F0(e, t, a) {
      {
        if (Ea)
          return;
        Ea = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function H0(e, t) {
      {
        if (t === "" || Ea)
          return;
        Ea = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function iN(e, t, a) {
      switch (t) {
        case "input":
          Av(e, a);
          return;
        case "textarea":
          dd(e, a);
          return;
        case "select":
          Xg(e, a);
          return;
      }
    }
    var Cp = function() {
    }, Op = function() {
    };
    {
      var oN = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], r1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], lN = r1.concat(["button"]), uN = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], a1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Op = function(e, t) {
        var a = yt({}, e || a1), o = {
          tag: t
        };
        return r1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), lN.indexOf(t) !== -1 && (a.pTagInButtonScope = null), oN.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var sN = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return uN.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, cN = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, i1 = {};
      Cp = function(e, t, a) {
        a = a || a1;
        var o = a.current, c = o && o.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = sN(e, c) ? null : o, m = p ? null : cN(e, a), g = p || m;
        if (g) {
          var S = g.tag, w = !!p + "|" + e + "|" + S;
          if (!i1[w]) {
            i1[w] = !0;
            var C = e, L = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", L = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", p) {
              var k = "";
              S === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, S, L, k);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, S);
          }
        }
      };
    }
    var lh = "suppressHydrationWarning", uh = "$", sh = "/$", Tp = "$?", Rp = "$!", fN = "style", I0 = null, V0 = null;
    function dN(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case za:
        case Uo: {
          t = o === za ? "#document" : "#fragment";
          var c = e.documentElement;
          a = c ? c.namespaceURI : vd(null, "");
          break;
        }
        default: {
          var p = o === On ? e.parentNode : e, m = p.namespaceURI || null;
          t = p.tagName, a = vd(m, t);
          break;
        }
      }
      {
        var g = t.toLowerCase(), S = Op(null, g);
        return {
          namespace: a,
          ancestorInfo: S
        };
      }
    }
    function pN(e, t, a) {
      {
        var o = e, c = vd(o.namespace, t), p = Op(o.ancestorInfo, t);
        return {
          namespace: c,
          ancestorInfo: p
        };
      }
    }
    function X6(e) {
      return e;
    }
    function vN(e) {
      I0 = Jr(), V0 = xD();
      var t = null;
      return Vn(!1), t;
    }
    function mN(e) {
      PD(V0), Vn(I0), I0 = null, V0 = null;
    }
    function hN(e, t, a, o, c) {
      var p;
      {
        var m = o;
        if (Cp(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var g = "" + t.children, S = Op(m.ancestorInfo, e);
          Cp(null, g, S);
        }
        p = m.namespace;
      }
      var w = KD(e, t, a, p);
      return Dp(c, w), K0(w, t), w;
    }
    function yN(e, t) {
      e.appendChild(t);
    }
    function gN(e, t, a, o, c) {
      switch (JD(e, t, a, o), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function SN(e, t, a, o, c, p) {
      {
        var m = p;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var g = "" + o.children, S = Op(m.ancestorInfo, t);
          Cp(null, g, S);
        }
      }
      return eN(e, t, a, o);
    }
    function B0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _N(e, t, a, o) {
      {
        var c = a;
        Cp(null, e, c.ancestorInfo);
      }
      var p = ZD(e, t);
      return Dp(o, p), p;
    }
    function bN() {
      var e = window.event;
      return e === void 0 ? Ci : mr(e.type);
    }
    var Y0 = typeof setTimeout == "function" ? setTimeout : void 0, EN = typeof clearTimeout == "function" ? clearTimeout : void 0, W0 = -1, o1 = typeof Promise == "function" ? Promise : void 0, wN = typeof queueMicrotask == "function" ? queueMicrotask : typeof o1 < "u" ? function(e) {
      return o1.resolve(null).then(e).catch(CN);
    } : Y0;
    function CN(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ON(e, t, a, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function TN(e, t, a, o, c, p) {
      tN(e, t, a, o, c), K0(e, c);
    }
    function l1(e) {
      ic(e, "");
    }
    function RN(e, t, a) {
      e.nodeValue = a;
    }
    function xN(e, t) {
      e.appendChild(t);
    }
    function PN(e, t) {
      var a;
      e.nodeType === On ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && oh(a);
    }
    function DN(e, t, a) {
      e.insertBefore(t, a);
    }
    function NN(e, t, a) {
      e.nodeType === On ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $N(e, t) {
      e.removeChild(t);
    }
    function kN(e, t) {
      e.nodeType === On ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Q0(e, t) {
      var a = t, o = 0;
      do {
        var c = a.nextSibling;
        if (e.removeChild(a), c && c.nodeType === On) {
          var p = c.data;
          if (p === sh)
            if (o === 0) {
              e.removeChild(c), gt(t);
              return;
            } else
              o--;
          else
            (p === uh || p === Tp || p === Rp) && o++;
        }
        a = c;
      } while (a);
      gt(t);
    }
    function MN(e, t) {
      e.nodeType === On ? Q0(e.parentNode, t) : e.nodeType === xr && Q0(e, t), gt(e);
    }
    function LN(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function AN(e) {
      e.nodeValue = "";
    }
    function zN(e, t) {
      e = e;
      var a = t[fN], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = oc("display", o);
    }
    function jN(e, t) {
      e.nodeValue = t;
    }
    function UN(e) {
      e.nodeType === xr ? e.textContent = "" : e.nodeType === za && e.documentElement && e.removeChild(e.documentElement);
    }
    function FN(e, t, a) {
      return e.nodeType !== xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function HN(e, t) {
      return t === "" || e.nodeType !== mi ? null : e;
    }
    function IN(e) {
      return e.nodeType !== On ? null : e;
    }
    function u1(e) {
      return e.data === Tp;
    }
    function G0(e) {
      return e.data === Rp;
    }
    function VN(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, c;
      return t && (a = t.dgst, o = t.msg, c = t.stck), {
        message: o,
        digest: a,
        stack: c
      };
    }
    function BN(e, t) {
      e._reactRetry = t;
    }
    function ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === xr || t === mi)
          break;
        if (t === On) {
          var a = e.data;
          if (a === uh || a === Rp || a === Tp)
            break;
          if (a === sh)
            return null;
        }
      }
      return e;
    }
    function xp(e) {
      return ch(e.nextSibling);
    }
    function YN(e) {
      return ch(e.firstChild);
    }
    function WN(e) {
      return ch(e.firstChild);
    }
    function QN(e) {
      return ch(e.nextSibling);
    }
    function GN(e, t, a, o, c, p, m) {
      Dp(p, e), K0(e, a);
      var g;
      {
        var S = c;
        g = S.namespace;
      }
      var w = (p.mode & mt) !== Be;
      return rN(e, t, a, g, o, w, m);
    }
    function qN(e, t, a, o) {
      return Dp(a, e), a.mode & mt, aN(e, t);
    }
    function XN(e, t) {
      Dp(t, e);
    }
    function KN(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === On) {
          var o = t.data;
          if (o === sh) {
            if (a === 0)
              return xp(t);
            a--;
          } else
            (o === uh || o === Rp || o === Tp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function s1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === On) {
          var o = t.data;
          if (o === uh || o === Rp || o === Tp) {
            if (a === 0)
              return t;
            a--;
          } else
            o === sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ZN(e) {
      gt(e);
    }
    function JN(e) {
      gt(e);
    }
    function e$(e) {
      return e !== "head" && e !== "body";
    }
    function t$(e, t, a, o) {
      var c = !0;
      ih(t.nodeValue, a, o, c);
    }
    function n$(e, t, a, o, c, p) {
      if (t[lh] !== !0) {
        var m = !0;
        ih(o.nodeValue, c, p, m);
      }
    }
    function r$(e, t) {
      t.nodeType === xr ? j0(e, t) : t.nodeType === On || U0(e, t);
    }
    function a$(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === xr ? j0(a, t) : t.nodeType === On || U0(a, t));
      }
    }
    function i$(e, t, a, o, c) {
      (c || t[lh] !== !0) && (o.nodeType === xr ? j0(a, o) : o.nodeType === On || U0(a, o));
    }
    function o$(e, t, a) {
      F0(e, t);
    }
    function l$(e, t) {
      H0(e, t);
    }
    function u$(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && F0(o, t);
      }
    }
    function s$(e, t) {
      {
        var a = e.parentNode;
        a !== null && H0(a, t);
      }
    }
    function c$(e, t, a, o, c, p) {
      (p || t[lh] !== !0) && F0(a, o);
    }
    function f$(e, t, a, o, c) {
      (c || t[lh] !== !0) && H0(a, o);
    }
    function d$(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function p$(e) {
      _p(e);
    }
    var pf = Math.random().toString(36).slice(2), vf = "__reactFiber$" + pf, q0 = "__reactProps$" + pf, Pp = "__reactContainer$" + pf, X0 = "__reactEvents$" + pf, v$ = "__reactListeners$" + pf, m$ = "__reactHandles$" + pf;
    function h$(e) {
      delete e[vf], delete e[q0], delete e[X0], delete e[v$], delete e[m$];
    }
    function Dp(e, t) {
      t[vf] = e;
    }
    function fh(e, t) {
      t[Pp] = e;
    }
    function c1(e) {
      e[Pp] = null;
    }
    function Np(e) {
      return !!e[Pp];
    }
    function Os(e) {
      var t = e[vf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Pp] || a[vf], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var c = s1(e); c !== null; ) {
              var p = c[vf];
              if (p)
                return p;
              c = s1(c);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function vu(e) {
      var t = e[vf] || e[Pp];
      return t && (t.tag === z || t.tag === G || t.tag === W || t.tag === D) ? t : null;
    }
    function mf(e) {
      if (e.tag === z || e.tag === G)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function dh(e) {
      return e[q0] || null;
    }
    function K0(e, t) {
      e[q0] = t;
    }
    function y$(e) {
      var t = e[X0];
      return t === void 0 && (t = e[X0] = /* @__PURE__ */ new Set()), t;
    }
    var f1 = {}, d1 = u.ReactDebugCurrentFrame;
    function ph(e) {
      if (e) {
        var t = e._owner, a = Mu(e.type, e._source, t ? t.type : null);
        d1.setExtraStackFrame(a);
      } else
        d1.setExtraStackFrame(null);
    }
    function Pi(e, t, a, o, c) {
      {
        var p = Function.call.bind(yn);
        for (var m in e)
          if (p(e, m)) {
            var g = void 0;
            try {
              if (typeof e[m] != "function") {
                var S = Error((o || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              g = e[m](t, m, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              g = w;
            }
            g && !(g instanceof Error) && (ph(c), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, m, typeof g), ph(null)), g instanceof Error && !(g.message in f1) && (f1[g.message] = !0, ph(c), y("Failed %s type: %s", a, g.message), ph(null));
          }
      }
    }
    var Z0 = [], vh;
    vh = [];
    var pl = -1;
    function mu(e) {
      return {
        current: e
      };
    }
    function zr(e, t) {
      if (pl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== vh[pl] && y("Unexpected Fiber popped."), e.current = Z0[pl], Z0[pl] = null, vh[pl] = null, pl--;
    }
    function jr(e, t, a) {
      pl++, Z0[pl] = e.current, vh[pl] = a, e.current = t;
    }
    var J0;
    J0 = {};
    var Ia = {};
    Object.freeze(Ia);
    var vl = mu(Ia), go = mu(!1), eS = Ia;
    function hf(e, t, a) {
      return a && So(t) ? eS : vl.current;
    }
    function p1(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function yf(e, t) {
      {
        var a = e.type, o = a.contextTypes;
        if (!o)
          return Ia;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === t)
          return c.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var m in o)
          p[m] = t[m];
        {
          var g = ot(e) || "Unknown";
          Pi(o, p, "context", g);
        }
        return c && p1(e, t, p), p;
      }
    }
    function mh() {
      return go.current;
    }
    function So(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function hh(e) {
      zr(go, e), zr(vl, e);
    }
    function tS(e) {
      zr(go, e), zr(vl, e);
    }
    function v1(e, t, a) {
      {
        if (vl.current !== Ia)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        jr(vl, t, e), jr(go, a, e);
      }
    }
    function m1(e, t, a) {
      {
        var o = e.stateNode, c = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var p = ot(e) || "Unknown";
            J0[p] || (J0[p] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var m = o.getChildContext();
        for (var g in m)
          if (!(g in c))
            throw new Error((ot(e) || "Unknown") + '.getChildContext(): key "' + g + '" is not defined in childContextTypes.');
        {
          var S = ot(e) || "Unknown";
          Pi(c, m, "child context", S);
        }
        return yt({}, a, m);
      }
    }
    function yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ia;
        return eS = vl.current, jr(vl, a, e), jr(go, go.current, e), !0;
      }
    }
    function h1(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var c = m1(e, t, eS);
          o.__reactInternalMemoizedMergedChildContext = c, zr(go, e), zr(vl, e), jr(vl, c, e), jr(go, a, e);
        } else
          zr(go, e), jr(go, a, e);
      }
    }
    function g$(e) {
      {
        if (!Md(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case D:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (So(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var hu = 0, gh = 1, ml = null, nS = !1, rS = !1;
    function y1(e) {
      ml === null ? ml = [e] : ml.push(e);
    }
    function S$(e) {
      nS = !0, y1(e);
    }
    function g1() {
      nS && yu();
    }
    function yu() {
      if (!rS && ml !== null) {
        rS = !0;
        var e = 0, t = ga();
        try {
          var a = !0, o = ml;
          for ($n(ur); e < o.length; e++) {
            var c = o[e];
            do
              c = c(a);
            while (c !== null);
          }
          ml = null, nS = !1;
        } catch (p) {
          throw ml !== null && (ml = ml.slice(e + 1)), yc(Sc, yu), p;
        } finally {
          $n(t), rS = !1;
        }
      }
      return null;
    }
    var gf = [], Sf = 0, Sh = null, _h = 0, ri = [], ai = 0, Ts = null, hl = 1, yl = "";
    function _$(e) {
      return xs(), (e.flags & Nd) !== He;
    }
    function b$(e) {
      return xs(), _h;
    }
    function E$() {
      var e = yl, t = hl, a = t & ~w$(t);
      return a.toString(32) + e;
    }
    function Rs(e, t) {
      xs(), gf[Sf++] = _h, gf[Sf++] = Sh, Sh = e, _h = t;
    }
    function S1(e, t, a) {
      xs(), ri[ai++] = hl, ri[ai++] = yl, ri[ai++] = Ts, Ts = e;
      var o = hl, c = yl, p = bh(o) - 1, m = o & ~(1 << p), g = a + 1, S = bh(t) + p;
      if (S > 30) {
        var w = p - p % 5, C = (1 << w) - 1, L = (m & C).toString(32), k = m >> w, B = p - w, Y = bh(t) + B, q = g << B, Ce = q | k, Ie = L + c;
        hl = 1 << Y | Ce, yl = Ie;
      } else {
        var Me = g << p, Et = Me | m, St = c;
        hl = 1 << S | Et, yl = St;
      }
    }
    function aS(e) {
      xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        Rs(e, a), S1(e, a, o);
      }
    }
    function bh(e) {
      return 32 - Oc(e);
    }
    function w$(e) {
      return 1 << bh(e) - 1;
    }
    function iS(e) {
      for (; e === Sh; )
        Sh = gf[--Sf], gf[Sf] = null, _h = gf[--Sf], gf[Sf] = null;
      for (; e === Ts; )
        Ts = ri[--ai], ri[ai] = null, yl = ri[--ai], ri[ai] = null, hl = ri[--ai], ri[ai] = null;
    }
    function C$() {
      return xs(), Ts !== null ? {
        id: hl,
        overflow: yl
      } : null;
    }
    function O$(e, t) {
      xs(), ri[ai++] = hl, ri[ai++] = yl, ri[ai++] = Ts, hl = t.id, yl = t.overflow, Ts = e;
    }
    function xs() {
      yr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var hr = null, ii = null, Di = !1, Ps = !1, gu = null;
    function T$() {
      Di && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function _1() {
      Ps = !0;
    }
    function R$() {
      return Ps;
    }
    function x$(e) {
      var t = e.stateNode.containerInfo;
      return ii = WN(t), hr = e, Di = !0, gu = null, Ps = !1, !0;
    }
    function P$(e, t, a) {
      return ii = QN(t), hr = e, Di = !0, gu = null, Ps = !1, a !== null && O$(e, a), !0;
    }
    function b1(e, t) {
      switch (e.tag) {
        case D: {
          r$(e.stateNode.containerInfo, t);
          break;
        }
        case z: {
          var a = (e.mode & mt) !== Be;
          i$(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case W: {
          var o = e.memoizedState;
          o.dehydrated !== null && a$(o.dehydrated, t);
          break;
        }
      }
    }
    function E1(e, t) {
      b1(e, t);
      var a = $2();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= $t) : o.push(a);
    }
    function oS(e, t) {
      {
        if (Ps)
          return;
        switch (e.tag) {
          case D: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case z:
                var o = t.type;
                t.pendingProps, o$(a, o);
                break;
              case G:
                var c = t.pendingProps;
                l$(a, c);
                break;
            }
            break;
          }
          case z: {
            var p = e.type, m = e.memoizedProps, g = e.stateNode;
            switch (t.tag) {
              case z: {
                var S = t.type, w = t.pendingProps, C = (e.mode & mt) !== Be;
                c$(
                  p,
                  m,
                  g,
                  S,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case G: {
                var L = t.pendingProps, k = (e.mode & mt) !== Be;
                f$(
                  p,
                  m,
                  g,
                  L,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case W: {
            var B = e.memoizedState, Y = B.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case z:
                  var q = t.type;
                  t.pendingProps, u$(Y, q);
                  break;
                case G:
                  var Ce = t.pendingProps;
                  s$(Y, Ce);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function w1(e, t) {
      t.flags = t.flags & ~pa | Jt, oS(e, t);
    }
    function C1(e, t) {
      switch (e.tag) {
        case z: {
          var a = e.type;
          e.pendingProps;
          var o = FN(t, a);
          return o !== null ? (e.stateNode = o, hr = e, ii = YN(o), !0) : !1;
        }
        case G: {
          var c = e.pendingProps, p = HN(t, c);
          return p !== null ? (e.stateNode = p, hr = e, ii = null, !0) : !1;
        }
        case W: {
          var m = IN(t);
          if (m !== null) {
            var g = {
              dehydrated: m,
              treeContext: C$(),
              retryLane: Lr
            };
            e.memoizedState = g;
            var S = k2(m);
            return S.return = e, e.child = S, hr = e, ii = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function lS(e) {
      return (e.mode & mt) !== Be && (e.flags & Ze) === He;
    }
    function uS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function sS(e) {
      if (Di) {
        var t = ii;
        if (!t) {
          lS(e) && (oS(hr, e), uS()), w1(hr, e), Di = !1, hr = e;
          return;
        }
        var a = t;
        if (!C1(e, t)) {
          lS(e) && (oS(hr, e), uS()), t = xp(a);
          var o = hr;
          if (!t || !C1(e, t)) {
            w1(hr, e), Di = !1, hr = e;
            return;
          }
          E1(o, a);
        }
      }
    }
    function D$(e, t, a) {
      var o = e.stateNode, c = !Ps, p = GN(o, e.type, e.memoizedProps, t, a, e, c);
      return e.updateQueue = p, p !== null;
    }
    function N$(e) {
      var t = e.stateNode, a = e.memoizedProps, o = qN(t, a, e);
      if (o) {
        var c = hr;
        if (c !== null)
          switch (c.tag) {
            case D: {
              var p = c.stateNode.containerInfo, m = (c.mode & mt) !== Be;
              t$(
                p,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case z: {
              var g = c.type, S = c.memoizedProps, w = c.stateNode, C = (c.mode & mt) !== Be;
              n$(
                g,
                S,
                w,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return o;
    }
    function $$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      XN(a, e);
    }
    function k$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return KN(a);
    }
    function O1(e) {
      for (var t = e.return; t !== null && t.tag !== z && t.tag !== D && t.tag !== W; )
        t = t.return;
      hr = t;
    }
    function Eh(e) {
      if (e !== hr)
        return !1;
      if (!Di)
        return O1(e), Di = !0, !1;
      if (e.tag !== D && (e.tag !== z || e$(e.type) && !B0(e.type, e.memoizedProps))) {
        var t = ii;
        if (t)
          if (lS(e))
            T1(e), uS();
          else
            for (; t; )
              E1(e, t), t = xp(t);
      }
      return O1(e), e.tag === W ? ii = k$(e) : ii = hr ? xp(e.stateNode) : null, !0;
    }
    function M$() {
      return Di && ii !== null;
    }
    function T1(e) {
      for (var t = ii; t; )
        b1(e, t), t = xp(t);
    }
    function _f() {
      hr = null, ii = null, Di = !1, Ps = !1;
    }
    function R1() {
      gu !== null && (bC(gu), gu = null);
    }
    function yr() {
      return Di;
    }
    function cS(e) {
      gu === null ? gu = [e] : gu.push(e);
    }
    var L$ = u.ReactCurrentBatchConfig, A$ = null;
    function z$() {
      return L$.transition;
    }
    var Ni = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var j$ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & fn && (t = a), a = a.return;
        return t;
      }, Ds = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, $p = [], kp = [], Mp = [], Lp = [], Ap = [], zp = [], Ns = /* @__PURE__ */ new Set();
      Ni.recordUnsafeLifecycleWarnings = function(e, t) {
        Ns.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & fn && typeof t.UNSAFE_componentWillMount == "function" && kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Mp.push(e), e.mode & fn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & fn && typeof t.UNSAFE_componentWillUpdate == "function" && zp.push(e));
      }, Ni.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(k) {
          e.add(ot(k) || "Component"), Ns.add(k.type);
        }), $p = []);
        var t = /* @__PURE__ */ new Set();
        kp.length > 0 && (kp.forEach(function(k) {
          t.add(ot(k) || "Component"), Ns.add(k.type);
        }), kp = []);
        var a = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(k) {
          a.add(ot(k) || "Component"), Ns.add(k.type);
        }), Mp = []);
        var o = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(k) {
          o.add(ot(k) || "Component"), Ns.add(k.type);
        }), Lp = []);
        var c = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(k) {
          c.add(ot(k) || "Component"), Ns.add(k.type);
        }), Ap = []);
        var p = /* @__PURE__ */ new Set();
        if (zp.length > 0 && (zp.forEach(function(k) {
          p.add(ot(k) || "Component"), Ns.add(k.type);
        }), zp = []), t.size > 0) {
          var m = Ds(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (o.size > 0) {
          var g = Ds(o);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, g);
        }
        if (p.size > 0) {
          var S = Ds(p);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, S);
        }
        if (e.size > 0) {
          var w = Ds(e);
          E(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (a.size > 0) {
          var C = Ds(a);
          E(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (c.size > 0) {
          var L = Ds(c);
          E(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
      };
      var wh = /* @__PURE__ */ new Map(), x1 = /* @__PURE__ */ new Set();
      Ni.recordLegacyContextWarning = function(e, t) {
        var a = j$(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!x1.has(e.type)) {
          var o = wh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], wh.set(a, o)), o.push(e));
        }
      }, Ni.flushLegacyContextWarning = function() {
        wh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              o.add(ot(p) || "Component"), x1.add(p.type);
            });
            var c = Ds(o);
            try {
              jt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              Pn();
            }
          }
        });
      }, Ni.discardPendingWarnings = function() {
        $p = [], kp = [], Mp = [], Lp = [], Ap = [], zp = [], wh = /* @__PURE__ */ new Map();
      };
    }
    function $i(e, t) {
      if (e && e.defaultProps) {
        var a = yt({}, t), o = e.defaultProps;
        for (var c in o)
          a[c] === void 0 && (a[c] = o[c]);
        return a;
      }
      return t;
    }
    var fS = mu(null), dS;
    dS = {};
    var Ch = null, bf = null, pS = null, Oh = !1;
    function Th() {
      Ch = null, bf = null, pS = null, Oh = !1;
    }
    function P1() {
      Oh = !0;
    }
    function D1() {
      Oh = !1;
    }
    function N1(e, t, a) {
      jr(fS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== dS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = dS;
    }
    function vS(e, t) {
      var a = fS.current;
      zr(fS, t), e._currentValue = a;
    }
    function mS(e, t, a) {
      for (var o = e; o !== null; ) {
        var c = o.alternate;
        if (nl(o.childLanes, t) ? c !== null && !nl(c.childLanes, t) && (c.childLanes = ut(c.childLanes, t)) : (o.childLanes = ut(o.childLanes, t), c !== null && (c.childLanes = ut(c.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function U$(e, t, a) {
      F$(e, t, a);
    }
    function F$(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var c = void 0, p = o.dependencies;
        if (p !== null) {
          c = o.child;
          for (var m = p.firstContext; m !== null; ) {
            if (m.context === t) {
              if (o.tag === R) {
                var g = Nn(a), S = gl(Gt, g);
                S.tag = xh;
                var w = o.updateQueue;
                if (w !== null) {
                  var C = w.shared, L = C.pending;
                  L === null ? S.next = S : (S.next = L.next, L.next = S), C.pending = S;
                }
              }
              o.lanes = ut(o.lanes, a);
              var k = o.alternate;
              k !== null && (k.lanes = ut(k.lanes, a)), mS(o.return, a, e), p.lanes = ut(p.lanes, a);
              break;
            }
            m = m.next;
          }
        } else if (o.tag === pe)
          c = o.type === e.type ? null : o.child;
        else if (o.tag === it) {
          var B = o.return;
          if (B === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          B.lanes = ut(B.lanes, a);
          var Y = B.alternate;
          Y !== null && (Y.lanes = ut(Y.lanes, a)), mS(B, a, e), c = o.sibling;
        } else
          c = o.child;
        if (c !== null)
          c.return = o;
        else
          for (c = o; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            var q = c.sibling;
            if (q !== null) {
              q.return = c.return, c = q;
              break;
            }
            c = c.return;
          }
        o = c;
      }
    }
    function Ef(e, t) {
      Ch = e, bf = null, pS = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (Ar(a.lanes, t) && Kp(), a.firstContext = null);
      }
    }
    function Yn(e) {
      Oh && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (pS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (bf === null) {
          if (Ch === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bf = a, Ch.dependencies = {
            lanes: Z,
            firstContext: a
          };
        } else
          bf = bf.next = a;
      }
      return t;
    }
    var $s = null;
    function hS(e) {
      $s === null ? $s = [e] : $s.push(e);
    }
    function H$() {
      if ($s !== null) {
        for (var e = 0; e < $s.length; e++) {
          var t = $s[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var o = a.next, c = t.pending;
            if (c !== null) {
              var p = c.next;
              c.next = o, a.next = p;
            }
            t.pending = a;
          }
        }
        $s = null;
      }
    }
    function $1(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, hS(t)) : (a.next = c.next, c.next = a), t.interleaved = a, Rh(e, o);
    }
    function I$(e, t, a, o) {
      var c = t.interleaved;
      c === null ? (a.next = a, hS(t)) : (a.next = c.next, c.next = a), t.interleaved = a;
    }
    function V$(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, hS(t)) : (a.next = c.next, c.next = a), t.interleaved = a, Rh(e, o);
    }
    function wa(e, t) {
      return Rh(e, t);
    }
    var B$ = Rh;
    function Rh(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Jt | pa)) !== He && kC(e);
      for (var o = e, c = e.return; c !== null; )
        c.childLanes = ut(c.childLanes, t), a = c.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (c.flags & (Jt | pa)) !== He && kC(e), o = c, c = c.return;
      if (o.tag === D) {
        var p = o.stateNode;
        return p;
      } else
        return null;
    }
    var k1 = 0, M1 = 1, xh = 2, yS = 3, Ph = !1, gS, Dh;
    gS = !1, Dh = null;
    function SS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function L1(e, t) {
      var a = t.updateQueue, o = e.updateQueue;
      if (a === o) {
        var c = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = c;
      }
    }
    function gl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: k1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Su(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var c = o.shared;
      if (Dh === c && !gS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), gS = !0), BM()) {
        var p = c.pending;
        return p === null ? t.next = t : (t.next = p.next, p.next = t), c.pending = t, B$(e, a);
      } else
        return V$(e, c, t, a);
    }
    function Nh(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var c = o.shared;
        if (Qd(a)) {
          var p = c.lanes;
          p = qd(p, e.pendingLanes);
          var m = ut(p, a);
          c.lanes = m, Jl(e, m);
        }
      }
    }
    function _S(e, t) {
      var a = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var c = o.updateQueue;
        if (a === c) {
          var p = null, m = null, g = a.firstBaseUpdate;
          if (g !== null) {
            var S = g;
            do {
              var w = {
                eventTime: S.eventTime,
                lane: S.lane,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null
              };
              m === null ? p = m = w : (m.next = w, m = w), S = S.next;
            } while (S !== null);
            m === null ? p = m = t : (m.next = t, m = t);
          } else
            p = m = t;
          a = {
            baseState: c.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: m,
            shared: c.shared,
            effects: c.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function Y$(e, t, a, o, c, p) {
      switch (a.tag) {
        case M1: {
          var m = a.payload;
          if (typeof m == "function") {
            P1();
            var g = m.call(p, o, c);
            {
              if (e.mode & fn) {
                Dn(!0);
                try {
                  m.call(p, o, c);
                } finally {
                  Dn(!1);
                }
              }
              D1();
            }
            return g;
          }
          return m;
        }
        case yS:
          e.flags = e.flags & ~Fn | Ze;
        case k1: {
          var S = a.payload, w;
          if (typeof S == "function") {
            P1(), w = S.call(p, o, c);
            {
              if (e.mode & fn) {
                Dn(!0);
                try {
                  S.call(p, o, c);
                } finally {
                  Dn(!1);
                }
              }
              D1();
            }
          } else
            w = S;
          return w == null ? o : yt({}, o, w);
        }
        case xh:
          return Ph = !0, o;
      }
      return o;
    }
    function $h(e, t, a, o) {
      var c = e.updateQueue;
      Ph = !1, Dh = c.shared;
      var p = c.firstBaseUpdate, m = c.lastBaseUpdate, g = c.shared.pending;
      if (g !== null) {
        c.shared.pending = null;
        var S = g, w = S.next;
        S.next = null, m === null ? p = w : m.next = w, m = S;
        var C = e.alternate;
        if (C !== null) {
          var L = C.updateQueue, k = L.lastBaseUpdate;
          k !== m && (k === null ? L.firstBaseUpdate = w : k.next = w, L.lastBaseUpdate = S);
        }
      }
      if (p !== null) {
        var B = c.baseState, Y = Z, q = null, Ce = null, Ie = null, Me = p;
        do {
          var Et = Me.lane, St = Me.eventTime;
          if (nl(o, Et)) {
            if (Ie !== null) {
              var X = {
                eventTime: St,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                tag: Me.tag,
                payload: Me.payload,
                callback: Me.callback,
                next: null
              };
              Ie = Ie.next = X;
            }
            B = Y$(e, c, Me, B, t, a);
            var F = Me.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Me.lane !== _t) {
              e.flags |= Ka;
              var se = c.effects;
              se === null ? c.effects = [Me] : se.push(Me);
            }
          } else {
            var U = {
              eventTime: St,
              lane: Et,
              tag: Me.tag,
              payload: Me.payload,
              callback: Me.callback,
              next: null
            };
            Ie === null ? (Ce = Ie = U, q = B) : Ie = Ie.next = U, Y = ut(Y, Et);
          }
          if (Me = Me.next, Me === null) {
            if (g = c.shared.pending, g === null)
              break;
            var Oe = g, Se = Oe.next;
            Oe.next = null, Me = Se, c.lastBaseUpdate = Oe, c.shared.pending = null;
          }
        } while (!0);
        Ie === null && (q = B), c.baseState = q, c.firstBaseUpdate = Ce, c.lastBaseUpdate = Ie;
        var Xe = c.shared.interleaved;
        if (Xe !== null) {
          var at = Xe;
          do
            Y = ut(Y, at.lane), at = at.next;
          while (at !== Xe);
        } else
          p === null && (c.shared.lanes = Z);
        sv(Y), e.lanes = Y, e.memoizedState = B;
      }
      Dh = null;
    }
    function W$(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function A1() {
      Ph = !1;
    }
    function kh() {
      return Ph;
    }
    function z1(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var c = 0; c < o.length; c++) {
          var p = o[c], m = p.callback;
          m !== null && (p.callback = null, W$(m, a));
        }
    }
    var bS = {}, j1 = new i.Component().refs, ES, wS, CS, OS, TS, U1, Mh, RS, xS, PS;
    {
      ES = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), RS = /* @__PURE__ */ new Set(), TS = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set();
      var F1 = /* @__PURE__ */ new Set();
      Mh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          F1.has(a) || (F1.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, U1 = function(e, t) {
        if (t === void 0) {
          var a = Wt(e) || "Component";
          TS.has(a) || (TS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(bS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(bS);
    }
    function DS(e, t, a, o) {
      var c = e.memoizedState, p = a(o, c);
      {
        if (e.mode & fn) {
          Dn(!0);
          try {
            p = a(o, c);
          } finally {
            Dn(!1);
          }
        }
        U1(t, p);
      }
      var m = p == null ? c : yt({}, c, p);
      if (e.memoizedState = m, e.lanes === Z) {
        var g = e.updateQueue;
        g.baseState = m;
      }
    }
    var NS = {
      isMounted: Xr,
      enqueueSetState: function(e, t, a) {
        var o = fa(e), c = na(), p = Ru(o), m = gl(c, p);
        m.payload = t, a != null && (Mh(a, "setState"), m.callback = a);
        var g = Su(o, m, p);
        g !== null && (nr(g, o, p, c), Nh(g, o, p)), uo(o, p);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = fa(e), c = na(), p = Ru(o), m = gl(c, p);
        m.tag = M1, m.payload = t, a != null && (Mh(a, "replaceState"), m.callback = a);
        var g = Su(o, m, p);
        g !== null && (nr(g, o, p, c), Nh(g, o, p)), uo(o, p);
      },
      enqueueForceUpdate: function(e, t) {
        var a = fa(e), o = na(), c = Ru(a), p = gl(o, c);
        p.tag = xh, t != null && (Mh(t, "forceUpdate"), p.callback = t);
        var m = Su(a, p, c);
        m !== null && (nr(m, a, c, o), Nh(m, a, c)), Vd(a, c);
      }
    };
    function H1(e, t, a, o, c, p, m) {
      var g = e.stateNode;
      if (typeof g.shouldComponentUpdate == "function") {
        var S = g.shouldComponentUpdate(o, p, m);
        {
          if (e.mode & fn) {
            Dn(!0);
            try {
              S = g.shouldComponentUpdate(o, p, m);
            } finally {
              Dn(!1);
            }
          }
          S === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Wt(t) || "Component");
        }
        return S;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ue(a, o) || !Ue(c, p) : !0;
    }
    function Q$(e, t, a) {
      var o = e.stateNode;
      {
        var c = Wt(t) || "Component", p = o.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), o.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), o.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), o.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), t.contextType && t.contextTypes && !xS.has(t) && (xS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof o.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Wt(t) || "A pure component"), typeof o.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof o.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof o.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof o.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var m = o.props !== a;
        o.props !== void 0 && m && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), o.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !CS.has(t) && (CS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Wt(t))), typeof o.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof o.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var g = o.state;
        g && (typeof g != "object" || jn(g)) && y("%s.state: must be set to an object or null", c), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function I1(e, t) {
      t.updater = NS, e.stateNode = t, Vl(t, e), t._reactInternalInstance = bS;
    }
    function V1(e, t, a) {
      var o = !1, c = Ia, p = Ia, m = t.contextType;
      if ("contextType" in t) {
        var g = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === ge && m._context === void 0
        );
        if (!g && !PS.has(t)) {
          PS.add(t);
          var S = "";
          m === void 0 ? S = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? S = " However, it is set to a " + typeof m + "." : m.$$typeof === ie ? S = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? S = " Did you accidentally pass the Context.Consumer instead?" : S = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Wt(t) || "Component", S);
        }
      }
      if (typeof m == "object" && m !== null)
        p = Yn(m);
      else {
        c = hf(e, t, !0);
        var w = t.contextTypes;
        o = w != null, p = o ? yf(e, c) : Ia;
      }
      var C = new t(a, p);
      if (e.mode & fn) {
        Dn(!0);
        try {
          C = new t(a, p);
        } finally {
          Dn(!1);
        }
      }
      var L = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      I1(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && L === null) {
          var k = Wt(t) || "Component";
          wS.has(k) || (wS.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, C.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var B = null, Y = null, q = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? B = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (B = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), B !== null || Y !== null || q !== null) {
            var Ce = Wt(t) || "Component", Ie = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            OS.has(Ce) || (OS.add(Ce), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, Ie, B !== null ? `
  ` + B : "", Y !== null ? `
  ` + Y : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return o && p1(e, c, p), C;
    }
    function G$(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ot(e) || "Component"), NS.enqueueReplaceState(t, t.state, null));
    }
    function B1(e, t, a, o) {
      var c = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== c) {
        {
          var p = ot(e) || "Component";
          ES.has(p) || (ES.add(p), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        NS.enqueueReplaceState(t, t.state, null);
      }
    }
    function $S(e, t, a, o) {
      Q$(e, t, a);
      var c = e.stateNode;
      c.props = a, c.state = e.memoizedState, c.refs = j1, SS(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        c.context = Yn(p);
      else {
        var m = hf(e, t, !0);
        c.context = yf(e, m);
      }
      {
        if (c.state === a) {
          var g = Wt(t) || "Component";
          RS.has(g) || (RS.add(g), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", g));
        }
        e.mode & fn && Ni.recordLegacyContextWarning(e, c), Ni.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var S = t.getDerivedStateFromProps;
      if (typeof S == "function" && (DS(e, t, S, a), c.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (G$(e, c), $h(e, a, c, o), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var w = lt;
        w |= Dr, (e.mode & ha) !== Be && (w |= Nr), e.flags |= w;
      }
    }
    function q$(e, t, a, o) {
      var c = e.stateNode, p = e.memoizedProps;
      c.props = p;
      var m = c.context, g = t.contextType, S = Ia;
      if (typeof g == "object" && g !== null)
        S = Yn(g);
      else {
        var w = hf(e, t, !0);
        S = yf(e, w);
      }
      var C = t.getDerivedStateFromProps, L = typeof C == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !L && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== a || m !== S) && B1(e, c, a, S), A1();
      var k = e.memoizedState, B = c.state = k;
      if ($h(e, a, c, o), B = e.memoizedState, p === a && k === B && !mh() && !kh()) {
        if (typeof c.componentDidMount == "function") {
          var Y = lt;
          Y |= Dr, (e.mode & ha) !== Be && (Y |= Nr), e.flags |= Y;
        }
        return !1;
      }
      typeof C == "function" && (DS(e, t, C, a), B = e.memoizedState);
      var q = kh() || H1(e, t, p, a, k, B, S);
      if (q) {
        if (!L && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Ce = lt;
          Ce |= Dr, (e.mode & ha) !== Be && (Ce |= Nr), e.flags |= Ce;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var Ie = lt;
          Ie |= Dr, (e.mode & ha) !== Be && (Ie |= Nr), e.flags |= Ie;
        }
        e.memoizedProps = a, e.memoizedState = B;
      }
      return c.props = a, c.state = B, c.context = S, q;
    }
    function X$(e, t, a, o, c) {
      var p = t.stateNode;
      L1(e, t);
      var m = t.memoizedProps, g = t.type === t.elementType ? m : $i(t.type, m);
      p.props = g;
      var S = t.pendingProps, w = p.context, C = a.contextType, L = Ia;
      if (typeof C == "object" && C !== null)
        L = Yn(C);
      else {
        var k = hf(t, a, !0);
        L = yf(t, k);
      }
      var B = a.getDerivedStateFromProps, Y = typeof B == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !Y && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (m !== S || w !== L) && B1(t, p, o, L), A1();
      var q = t.memoizedState, Ce = p.state = q;
      if ($h(t, o, p, c), Ce = t.memoizedState, m === S && q === Ce && !mh() && !kh() && !$e)
        return typeof p.componentDidUpdate == "function" && (m !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= lt), typeof p.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= da), !1;
      typeof B == "function" && (DS(t, a, B, o), Ce = t.memoizedState);
      var Ie = kh() || H1(t, a, g, o, q, Ce, L) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      $e;
      return Ie ? (!Y && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(o, Ce, L), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(o, Ce, L)), typeof p.componentDidUpdate == "function" && (t.flags |= lt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= da)) : (typeof p.componentDidUpdate == "function" && (m !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= lt), typeof p.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= da), t.memoizedProps = o, t.memoizedState = Ce), p.props = o, p.state = Ce, p.context = L, Ie;
    }
    var kS, MS, LS, AS, zS, Y1 = function(e, t) {
    };
    kS = !1, MS = !1, LS = {}, AS = {}, zS = {}, Y1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ot(t) || "Component";
        AS[a] || (AS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function jp(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & fn || Le) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var c = ot(e) || "Component";
          LS[c] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o), LS[c] = !0);
        }
        if (a._owner) {
          var p = a._owner, m;
          if (p) {
            var g = p;
            if (g.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = g.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var S = m;
          fi(o, "ref");
          var w = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var C = function(L) {
            var k = S.refs;
            k === j1 && (k = S.refs = {}), L === null ? delete k[w] : k[w] = L;
          };
          return C._stringRef = w, C;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function Lh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = ot(e) || "Component";
        if (zS[t])
          return;
        zS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function W1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Q1(e) {
      function t(U, X) {
        if (e) {
          var F = U.deletions;
          F === null ? (U.deletions = [X], U.flags |= $t) : F.push(X);
        }
      }
      function a(U, X) {
        if (!e)
          return null;
        for (var F = X; F !== null; )
          t(U, F), F = F.sibling;
        return null;
      }
      function o(U, X) {
        for (var F = /* @__PURE__ */ new Map(), se = X; se !== null; )
          se.key !== null ? F.set(se.key, se) : F.set(se.index, se), se = se.sibling;
        return F;
      }
      function c(U, X) {
        var F = Fs(U, X);
        return F.index = 0, F.sibling = null, F;
      }
      function p(U, X, F) {
        if (U.index = F, !e)
          return U.flags |= Nd, X;
        var se = U.alternate;
        if (se !== null) {
          var Oe = se.index;
          return Oe < X ? (U.flags |= Jt, X) : Oe;
        } else
          return U.flags |= Jt, X;
      }
      function m(U) {
        return e && U.alternate === null && (U.flags |= Jt), U;
      }
      function g(U, X, F, se) {
        if (X === null || X.tag !== G) {
          var Oe = cb(F, U.mode, se);
          return Oe.return = U, Oe;
        } else {
          var Se = c(X, F);
          return Se.return = U, Se;
        }
      }
      function S(U, X, F, se) {
        var Oe = F.type;
        if (Oe === ka)
          return C(U, X, F.props.children, se, F.key);
        if (X !== null && (X.elementType === Oe || // Keep this check inline so it only runs on the false path:
        zC(X, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === Ye && W1(Oe) === X.type)) {
          var Se = c(X, F.props);
          return Se.ref = jp(U, X, F), Se.return = U, Se._debugSource = F._source, Se._debugOwner = F._owner, Se;
        }
        var Xe = sb(F, U.mode, se);
        return Xe.ref = jp(U, X, F), Xe.return = U, Xe;
      }
      function w(U, X, F, se) {
        if (X === null || X.tag !== A || X.stateNode.containerInfo !== F.containerInfo || X.stateNode.implementation !== F.implementation) {
          var Oe = fb(F, U.mode, se);
          return Oe.return = U, Oe;
        } else {
          var Se = c(X, F.children || []);
          return Se.return = U, Se;
        }
      }
      function C(U, X, F, se, Oe) {
        if (X === null || X.tag !== I) {
          var Se = Pu(F, U.mode, se, Oe);
          return Se.return = U, Se;
        } else {
          var Xe = c(X, F);
          return Xe.return = U, Xe;
        }
      }
      function L(U, X, F) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var se = cb("" + X, U.mode, F);
          return se.return = U, se;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Bi: {
              var Oe = sb(X, U.mode, F);
              return Oe.ref = jp(U, null, X), Oe.return = U, Oe;
            }
            case Wr: {
              var Se = fb(X, U.mode, F);
              return Se.return = U, Se;
            }
            case Ye: {
              var Xe = X._payload, at = X._init;
              return L(U, at(Xe), F);
            }
          }
          if (jn(X) || di(X)) {
            var Ft = Pu(X, U.mode, F, null);
            return Ft.return = U, Ft;
          }
          Lh(U, X);
        }
        return typeof X == "function" && Ah(U), null;
      }
      function k(U, X, F, se) {
        var Oe = X !== null ? X.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return Oe !== null ? null : g(U, X, "" + F, se);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Bi:
              return F.key === Oe ? S(U, X, F, se) : null;
            case Wr:
              return F.key === Oe ? w(U, X, F, se) : null;
            case Ye: {
              var Se = F._payload, Xe = F._init;
              return k(U, X, Xe(Se), se);
            }
          }
          if (jn(F) || di(F))
            return Oe !== null ? null : C(U, X, F, se, null);
          Lh(U, F);
        }
        return typeof F == "function" && Ah(U), null;
      }
      function B(U, X, F, se, Oe) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Se = U.get(F) || null;
          return g(X, Se, "" + se, Oe);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case Bi: {
              var Xe = U.get(se.key === null ? F : se.key) || null;
              return S(X, Xe, se, Oe);
            }
            case Wr: {
              var at = U.get(se.key === null ? F : se.key) || null;
              return w(X, at, se, Oe);
            }
            case Ye:
              var Ft = se._payload, xt = se._init;
              return B(U, X, F, xt(Ft), Oe);
          }
          if (jn(se) || di(se)) {
            var Ln = U.get(F) || null;
            return C(X, Ln, se, Oe, null);
          }
          Lh(X, se);
        }
        return typeof se == "function" && Ah(X), null;
      }
      function Y(U, X, F) {
        {
          if (typeof U != "object" || U === null)
            return X;
          switch (U.$$typeof) {
            case Bi:
            case Wr:
              Y1(U, F);
              var se = U.key;
              if (typeof se != "string")
                break;
              if (X === null) {
                X = /* @__PURE__ */ new Set(), X.add(se);
                break;
              }
              if (!X.has(se)) {
                X.add(se);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case Ye:
              var Oe = U._payload, Se = U._init;
              Y(Se(Oe), X, F);
              break;
          }
        }
        return X;
      }
      function q(U, X, F, se) {
        for (var Oe = null, Se = 0; Se < F.length; Se++) {
          var Xe = F[Se];
          Oe = Y(Xe, Oe, U);
        }
        for (var at = null, Ft = null, xt = X, Ln = 0, Pt = 0, xn = null; xt !== null && Pt < F.length; Pt++) {
          xt.index > Pt ? (xn = xt, xt = null) : xn = xt.sibling;
          var Fr = k(U, xt, F[Pt], se);
          if (Fr === null) {
            xt === null && (xt = xn);
            break;
          }
          e && xt && Fr.alternate === null && t(U, xt), Ln = p(Fr, Ln, Pt), Ft === null ? at = Fr : Ft.sibling = Fr, Ft = Fr, xt = xn;
        }
        if (Pt === F.length) {
          if (a(U, xt), yr()) {
            var Cr = Pt;
            Rs(U, Cr);
          }
          return at;
        }
        if (xt === null) {
          for (; Pt < F.length; Pt++) {
            var Ba = L(U, F[Pt], se);
            Ba !== null && (Ln = p(Ba, Ln, Pt), Ft === null ? at = Ba : Ft.sibling = Ba, Ft = Ba);
          }
          if (yr()) {
            var ra = Pt;
            Rs(U, ra);
          }
          return at;
        }
        for (var aa = o(U, xt); Pt < F.length; Pt++) {
          var Hr = B(aa, U, Pt, F[Pt], se);
          Hr !== null && (e && Hr.alternate !== null && aa.delete(Hr.key === null ? Pt : Hr.key), Ln = p(Hr, Ln, Pt), Ft === null ? at = Hr : Ft.sibling = Hr, Ft = Hr);
        }
        if (e && aa.forEach(function(Uf) {
          return t(U, Uf);
        }), yr()) {
          var Cl = Pt;
          Rs(U, Cl);
        }
        return at;
      }
      function Ce(U, X, F, se) {
        var Oe = di(F);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (MS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), MS = !0), F.entries === Oe && (kS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), kS = !0);
          var Se = Oe.call(F);
          if (Se)
            for (var Xe = null, at = Se.next(); !at.done; at = Se.next()) {
              var Ft = at.value;
              Xe = Y(Ft, Xe, U);
            }
        }
        var xt = Oe.call(F);
        if (xt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Ln = null, Pt = null, xn = X, Fr = 0, Cr = 0, Ba = null, ra = xt.next(); xn !== null && !ra.done; Cr++, ra = xt.next()) {
          xn.index > Cr ? (Ba = xn, xn = null) : Ba = xn.sibling;
          var aa = k(U, xn, ra.value, se);
          if (aa === null) {
            xn === null && (xn = Ba);
            break;
          }
          e && xn && aa.alternate === null && t(U, xn), Fr = p(aa, Fr, Cr), Pt === null ? Ln = aa : Pt.sibling = aa, Pt = aa, xn = Ba;
        }
        if (ra.done) {
          if (a(U, xn), yr()) {
            var Hr = Cr;
            Rs(U, Hr);
          }
          return Ln;
        }
        if (xn === null) {
          for (; !ra.done; Cr++, ra = xt.next()) {
            var Cl = L(U, ra.value, se);
            Cl !== null && (Fr = p(Cl, Fr, Cr), Pt === null ? Ln = Cl : Pt.sibling = Cl, Pt = Cl);
          }
          if (yr()) {
            var Uf = Cr;
            Rs(U, Uf);
          }
          return Ln;
        }
        for (var vv = o(U, xn); !ra.done; Cr++, ra = xt.next()) {
          var Ro = B(vv, U, Cr, ra.value, se);
          Ro !== null && (e && Ro.alternate !== null && vv.delete(Ro.key === null ? Cr : Ro.key), Fr = p(Ro, Fr, Cr), Pt === null ? Ln = Ro : Pt.sibling = Ro, Pt = Ro);
        }
        if (e && vv.forEach(function(cL) {
          return t(U, cL);
        }), yr()) {
          var sL = Cr;
          Rs(U, sL);
        }
        return Ln;
      }
      function Ie(U, X, F, se) {
        if (X !== null && X.tag === G) {
          a(U, X.sibling);
          var Oe = c(X, F);
          return Oe.return = U, Oe;
        }
        a(U, X);
        var Se = cb(F, U.mode, se);
        return Se.return = U, Se;
      }
      function Me(U, X, F, se) {
        for (var Oe = F.key, Se = X; Se !== null; ) {
          if (Se.key === Oe) {
            var Xe = F.type;
            if (Xe === ka) {
              if (Se.tag === I) {
                a(U, Se.sibling);
                var at = c(Se, F.props.children);
                return at.return = U, at._debugSource = F._source, at._debugOwner = F._owner, at;
              }
            } else if (Se.elementType === Xe || // Keep this check inline so it only runs on the false path:
            zC(Se, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === Ye && W1(Xe) === Se.type) {
              a(U, Se.sibling);
              var Ft = c(Se, F.props);
              return Ft.ref = jp(U, Se, F), Ft.return = U, Ft._debugSource = F._source, Ft._debugOwner = F._owner, Ft;
            }
            a(U, Se);
            break;
          } else
            t(U, Se);
          Se = Se.sibling;
        }
        if (F.type === ka) {
          var xt = Pu(F.props.children, U.mode, se, F.key);
          return xt.return = U, xt;
        } else {
          var Ln = sb(F, U.mode, se);
          return Ln.ref = jp(U, X, F), Ln.return = U, Ln;
        }
      }
      function Et(U, X, F, se) {
        for (var Oe = F.key, Se = X; Se !== null; ) {
          if (Se.key === Oe)
            if (Se.tag === A && Se.stateNode.containerInfo === F.containerInfo && Se.stateNode.implementation === F.implementation) {
              a(U, Se.sibling);
              var Xe = c(Se, F.children || []);
              return Xe.return = U, Xe;
            } else {
              a(U, Se);
              break;
            }
          else
            t(U, Se);
          Se = Se.sibling;
        }
        var at = fb(F, U.mode, se);
        return at.return = U, at;
      }
      function St(U, X, F, se) {
        var Oe = typeof F == "object" && F !== null && F.type === ka && F.key === null;
        if (Oe && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Bi:
              return m(Me(U, X, F, se));
            case Wr:
              return m(Et(U, X, F, se));
            case Ye:
              var Se = F._payload, Xe = F._init;
              return St(U, X, Xe(Se), se);
          }
          if (jn(F))
            return q(U, X, F, se);
          if (di(F))
            return Ce(U, X, F, se);
          Lh(U, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? m(Ie(U, X, "" + F, se)) : (typeof F == "function" && Ah(U), a(U, X));
      }
      return St;
    }
    var wf = Q1(!0), G1 = Q1(!1);
    function K$(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = Fs(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = Fs(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function Z$(e, t) {
      for (var a = e.child; a !== null; )
        R2(a, t), a = a.sibling;
    }
    var Up = {}, _u = mu(Up), Fp = mu(Up), zh = mu(Up);
    function jh(e) {
      if (e === Up)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function q1() {
      var e = jh(zh.current);
      return e;
    }
    function jS(e, t) {
      jr(zh, t, e), jr(Fp, e, e), jr(_u, Up, e);
      var a = dN(t);
      zr(_u, e), jr(_u, a, e);
    }
    function Cf(e) {
      zr(_u, e), zr(Fp, e), zr(zh, e);
    }
    function US() {
      var e = jh(_u.current);
      return e;
    }
    function X1(e) {
      jh(zh.current);
      var t = jh(_u.current), a = pN(t, e.type);
      t !== a && (jr(Fp, e, e), jr(_u, a, e));
    }
    function FS(e) {
      Fp.current === e && (zr(_u, e), zr(Fp, e));
    }
    var J$ = 0, K1 = 1, Z1 = 1, Hp = 2, ki = mu(J$);
    function HS(e, t) {
      return (e & t) !== 0;
    }
    function Of(e) {
      return e & K1;
    }
    function IS(e, t) {
      return e & K1 | t;
    }
    function ek(e, t) {
      return e | t;
    }
    function bu(e, t) {
      jr(ki, t, e);
    }
    function Tf(e) {
      zr(ki, e);
    }
    function tk(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Uh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || u1(o) || G0(o))
              return t;
          }
        } else if (t.tag === ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var c = (t.flags & Ze) !== He;
          if (c)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ca = (
      /*   */
      0
    ), qn = (
      /* */
      1
    ), _o = (
      /*  */
      2
    ), Xn = (
      /*    */
      4
    ), gr = (
      /*   */
      8
    ), VS = [];
    function BS() {
      for (var e = 0; e < VS.length; e++) {
        var t = VS[e];
        t._workInProgressVersionPrimary = null;
      }
      VS.length = 0;
    }
    function nk(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var Ee = u.ReactCurrentDispatcher, Ip = u.ReactCurrentBatchConfig, YS, Rf;
    YS = /* @__PURE__ */ new Set();
    var ks = Z, Ut = null, Kn = null, Zn = null, Fh = !1, Vp = !1, Bp = 0, rk = 0, ak = 25, J = null, oi = null, Eu = -1, WS = !1;
    function Mt() {
      {
        var e = J;
        oi === null ? oi = [e] : oi.push(e);
      }
    }
    function he() {
      {
        var e = J;
        oi !== null && (Eu++, oi[Eu] !== e && ik(e));
      }
    }
    function xf(e) {
      e != null && !jn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function ik(e) {
      {
        var t = ot(Ut);
        if (!YS.has(t) && (YS.add(t), oi !== null)) {
          for (var a = "", o = 30, c = 0; c <= Eu; c++) {
            for (var p = oi[c], m = c === Eu ? e : p, g = c + 1 + ". " + p; g.length < o; )
              g += " ";
            g += m + `
`, a += g;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ur() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function QS(e, t) {
      if (WS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, o, c, p) {
      ks = p, Ut = t, oi = e !== null ? e._debugHookTypes : null, Eu = -1, WS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Z, e !== null && e.memoizedState !== null ? Ee.current = _w : oi !== null ? Ee.current = Sw : Ee.current = gw;
      var m = a(o, c);
      if (Vp) {
        var g = 0;
        do {
          if (Vp = !1, Bp = 0, g >= ak)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          g += 1, WS = !1, Kn = null, Zn = null, t.updateQueue = null, Eu = -1, Ee.current = bw, m = a(o, c);
        } while (Vp);
      }
      Ee.current = Jh, t._debugHookTypes = oi;
      var S = Kn !== null && Kn.next !== null;
      if (ks = Z, Ut = null, Kn = null, Zn = null, J = null, oi = null, Eu = -1, e !== null && (e.flags & Wn) !== (t.flags & Wn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & mt) !== Be && y("Internal React error: Expected static flag was missing. Please notify the React team."), Fh = !1, S)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function Df() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function J1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ha) !== Be ? t.flags &= ~(Wo | Nr | ln | lt) : t.flags &= ~(ln | lt), e.lanes = Zl(e.lanes, a);
    }
    function ew() {
      if (Ee.current = Jh, Fh) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Fh = !1;
      }
      ks = Z, Ut = null, Kn = null, Zn = null, oi = null, Eu = -1, J = null, pw = !1, Vp = !1, Bp = 0;
    }
    function bo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Zn === null ? Ut.memoizedState = Zn = e : Zn = Zn.next = e, Zn;
    }
    function li() {
      var e;
      if (Kn === null) {
        var t = Ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Kn.next;
      var a;
      if (Zn === null ? a = Ut.memoizedState : a = Zn.next, a !== null)
        Zn = a, a = Zn.next, Kn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Kn = e;
        var o = {
          memoizedState: Kn.memoizedState,
          baseState: Kn.baseState,
          baseQueue: Kn.baseQueue,
          queue: Kn.queue,
          next: null
        };
        Zn === null ? Ut.memoizedState = Zn = o : Zn = Zn.next = o;
      }
      return Zn;
    }
    function tw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function GS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function qS(e, t, a) {
      var o = bo(), c;
      a !== void 0 ? c = a(t) : c = t, o.memoizedState = o.baseState = c;
      var p = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      };
      o.queue = p;
      var m = p.dispatch = sk.bind(null, Ut, p);
      return [o.memoizedState, m];
    }
    function XS(e, t, a) {
      var o = li(), c = o.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var p = Kn, m = p.baseQueue, g = c.pending;
      if (g !== null) {
        if (m !== null) {
          var S = m.next, w = g.next;
          m.next = w, g.next = S;
        }
        p.baseQueue !== m && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = m = g, c.pending = null;
      }
      if (m !== null) {
        var C = m.next, L = p.baseState, k = null, B = null, Y = null, q = C;
        do {
          var Ce = q.lane;
          if (nl(ks, Ce)) {
            if (Y !== null) {
              var Me = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: _t,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null
              };
              Y = Y.next = Me;
            }
            if (q.hasEagerState)
              L = q.eagerState;
            else {
              var Et = q.action;
              L = e(L, Et);
            }
          } else {
            var Ie = {
              lane: Ce,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            Y === null ? (B = Y = Ie, k = L) : Y = Y.next = Ie, Ut.lanes = ut(Ut.lanes, Ce), sv(Ce);
          }
          q = q.next;
        } while (q !== null && q !== C);
        Y === null ? k = L : Y.next = B, xe(L, o.memoizedState) || Kp(), o.memoizedState = L, o.baseState = k, o.baseQueue = Y, c.lastRenderedState = L;
      }
      var St = c.interleaved;
      if (St !== null) {
        var U = St;
        do {
          var X = U.lane;
          Ut.lanes = ut(Ut.lanes, X), sv(X), U = U.next;
        } while (U !== St);
      } else
        m === null && (c.lanes = Z);
      var F = c.dispatch;
      return [o.memoizedState, F];
    }
    function KS(e, t, a) {
      var o = li(), c = o.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var p = c.dispatch, m = c.pending, g = o.memoizedState;
      if (m !== null) {
        c.pending = null;
        var S = m.next, w = S;
        do {
          var C = w.action;
          g = e(g, C), w = w.next;
        } while (w !== S);
        xe(g, o.memoizedState) || Kp(), o.memoizedState = g, o.baseQueue === null && (o.baseState = g), c.lastRenderedState = g;
      }
      return [g, p];
    }
    function K6(e, t, a) {
    }
    function Z6(e, t, a) {
    }
    function ZS(e, t, a) {
      var o = Ut, c = bo(), p, m = yr();
      if (m) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        p = a(), Rf || p !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      } else {
        if (p = t(), !Rf) {
          var g = t();
          xe(p, g) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
        }
        var S = yy();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(S, ks) || nw(o, t, p);
      }
      c.memoizedState = p;
      var w = {
        value: p,
        getSnapshot: t
      };
      return c.queue = w, Yh(aw.bind(null, o, w, e), [e]), o.flags |= ln, Yp(qn | gr, rw.bind(null, o, w, p, t), void 0, null), p;
    }
    function Hh(e, t, a) {
      var o = Ut, c = li(), p = t();
      if (!Rf) {
        var m = t();
        xe(p, m) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      }
      var g = c.memoizedState, S = !xe(g, p);
      S && (c.memoizedState = p, Kp());
      var w = c.queue;
      if (Qp(aw.bind(null, o, w, e), [e]), w.getSnapshot !== t || S || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & qn) {
        o.flags |= ln, Yp(qn | gr, rw.bind(null, o, w, p, t), void 0, null);
        var C = yy();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(C, ks) || nw(o, t, p);
      }
      return p;
    }
    function nw(e, t, a) {
      e.flags |= ts;
      var o = {
        getSnapshot: t,
        value: a
      }, c = Ut.updateQueue;
      if (c === null)
        c = tw(), Ut.updateQueue = c, c.stores = [o];
      else {
        var p = c.stores;
        p === null ? c.stores = [o] : p.push(o);
      }
    }
    function rw(e, t, a, o) {
      t.value = a, t.getSnapshot = o, iw(t) && ow(e);
    }
    function aw(e, t, a) {
      var o = function() {
        iw(t) && ow(e);
      };
      return a(o);
    }
    function iw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !xe(a, o);
      } catch {
        return !0;
      }
    }
    function ow(e) {
      var t = wa(e, qe);
      t !== null && nr(t, e, qe, Gt);
    }
    function Ih(e) {
      var t = bo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Z,
        dispatch: null,
        lastRenderedReducer: GS,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = ck.bind(null, Ut, a);
      return [t.memoizedState, o];
    }
    function JS(e) {
      return XS(GS);
    }
    function e_(e) {
      return KS(GS);
    }
    function Yp(e, t, a, o) {
      var c = {
        tag: e,
        create: t,
        destroy: a,
        deps: o,
        // Circular
        next: null
      }, p = Ut.updateQueue;
      if (p === null)
        p = tw(), Ut.updateQueue = p, p.lastEffect = c.next = c;
      else {
        var m = p.lastEffect;
        if (m === null)
          p.lastEffect = c.next = c;
        else {
          var g = m.next;
          m.next = c, c.next = g, p.lastEffect = c;
        }
      }
      return c;
    }
    function t_(e) {
      var t = bo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Vh(e) {
      var t = li();
      return t.memoizedState;
    }
    function Wp(e, t, a, o) {
      var c = bo(), p = o === void 0 ? null : o;
      Ut.flags |= e, c.memoizedState = Yp(qn | t, a, void 0, p);
    }
    function Bh(e, t, a, o) {
      var c = li(), p = o === void 0 ? null : o, m = void 0;
      if (Kn !== null) {
        var g = Kn.memoizedState;
        if (m = g.destroy, p !== null) {
          var S = g.deps;
          if (QS(p, S)) {
            c.memoizedState = Yp(t, a, m, p);
            return;
          }
        }
      }
      Ut.flags |= e, c.memoizedState = Yp(qn | t, a, m, p);
    }
    function Yh(e, t) {
      return (Ut.mode & ha) !== Be ? Wp(Wo | ln | no, gr, e, t) : Wp(ln | no, gr, e, t);
    }
    function Qp(e, t) {
      return Bh(ln, gr, e, t);
    }
    function n_(e, t) {
      return Wp(lt, _o, e, t);
    }
    function Wh(e, t) {
      return Bh(lt, _o, e, t);
    }
    function r_(e, t) {
      var a = lt;
      return a |= Dr, (Ut.mode & ha) !== Be && (a |= Nr), Wp(a, Xn, e, t);
    }
    function Qh(e, t) {
      return Bh(lt, Xn, e, t);
    }
    function lw(e, t) {
      if (typeof t == "function") {
        var a = t, o = e();
        return a(o), function() {
          a(null);
        };
      } else if (t != null) {
        var c = t;
        c.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var p = e();
        return c.current = p, function() {
          c.current = null;
        };
      }
    }
    function a_(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, c = lt;
      return c |= Dr, (Ut.mode & ha) !== Be && (c |= Nr), Wp(c, Xn, lw.bind(null, t, e), o);
    }
    function Gh(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Bh(lt, Xn, lw.bind(null, t, e), o);
    }
    function ok(e, t) {
    }
    var qh = ok;
    function i_(e, t) {
      var a = bo(), o = t === void 0 ? null : t;
      return a.memoizedState = [e, o], e;
    }
    function Xh(e, t) {
      var a = li(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var p = c[1];
        if (QS(o, p))
          return c[0];
      }
      return a.memoizedState = [e, o], e;
    }
    function o_(e, t) {
      var a = bo(), o = t === void 0 ? null : t, c = e();
      return a.memoizedState = [c, o], c;
    }
    function Kh(e, t) {
      var a = li(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var p = c[1];
        if (QS(o, p))
          return c[0];
      }
      var m = e();
      return a.memoizedState = [m, o], m;
    }
    function l_(e) {
      var t = bo();
      return t.memoizedState = e, e;
    }
    function uw(e) {
      var t = li(), a = Kn, o = a.memoizedState;
      return cw(t, o, e);
    }
    function sw(e) {
      var t = li();
      if (Kn === null)
        return t.memoizedState = e, e;
      var a = Kn.memoizedState;
      return cw(t, a, e);
    }
    function cw(e, t, a) {
      var o = !p0(ks);
      if (o) {
        if (!xe(a, t)) {
          var c = Gd();
          Ut.lanes = ut(Ut.lanes, c), sv(c), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Kp()), e.memoizedState = a, a;
    }
    function lk(e, t, a) {
      var o = ga();
      $n(sr(o, Gn)), e(!0);
      var c = Ip.transition;
      Ip.transition = {};
      var p = Ip.transition;
      Ip.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(o), Ip.transition = c, c === null && p._updatedFibers) {
          var m = p._updatedFibers.size;
          m > 10 && E("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
        }
      }
    }
    function u_() {
      var e = Ih(!1), t = e[0], a = e[1], o = lk.bind(null, a), c = bo();
      return c.memoizedState = o, [t, o];
    }
    function fw() {
      var e = JS(), t = e[0], a = li(), o = a.memoizedState;
      return [t, o];
    }
    function dw() {
      var e = e_(), t = e[0], a = li(), o = a.memoizedState;
      return [t, o];
    }
    var pw = !1;
    function uk() {
      return pw;
    }
    function s_() {
      var e = bo(), t = yy(), a = t.identifierPrefix, o;
      if (yr()) {
        var c = E$();
        o = ":" + a + "R" + c;
        var p = Bp++;
        p > 0 && (o += "H" + p.toString(32)), o += ":";
      } else {
        var m = rk++;
        o = ":" + a + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function Zh() {
      var e = li(), t = e.memoizedState;
      return t;
    }
    function sk(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ru(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vw(e))
        mw(t, c);
      else {
        var p = $1(e, t, c, o);
        if (p !== null) {
          var m = na();
          nr(p, e, o, m), hw(p, t, o);
        }
      }
      yw(e, o);
    }
    function ck(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ru(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (vw(e))
        mw(t, c);
      else {
        var p = e.alternate;
        if (e.lanes === Z && (p === null || p.lanes === Z)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var g;
            g = Ee.current, Ee.current = Mi;
            try {
              var S = t.lastRenderedState, w = m(S, a);
              if (c.hasEagerState = !0, c.eagerState = w, xe(w, S)) {
                I$(e, t, c, o);
                return;
              }
            } catch {
            } finally {
              Ee.current = g;
            }
          }
        }
        var C = $1(e, t, c, o);
        if (C !== null) {
          var L = na();
          nr(C, e, o, L), hw(C, t, o);
        }
      }
      yw(e, o);
    }
    function vw(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function mw(e, t) {
      Vp = Fh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function hw(e, t, a) {
      if (Qd(a)) {
        var o = t.lanes;
        o = qd(o, e.pendingLanes);
        var c = ut(o, a);
        t.lanes = c, Jl(e, c);
      }
    }
    function yw(e, t, a) {
      uo(e, t);
    }
    var Jh = {
      readContext: Yn,
      useCallback: Ur,
      useContext: Ur,
      useEffect: Ur,
      useImperativeHandle: Ur,
      useInsertionEffect: Ur,
      useLayoutEffect: Ur,
      useMemo: Ur,
      useReducer: Ur,
      useRef: Ur,
      useState: Ur,
      useDebugValue: Ur,
      useDeferredValue: Ur,
      useTransition: Ur,
      useMutableSource: Ur,
      useSyncExternalStore: Ur,
      useId: Ur,
      unstable_isNewReconciler: fe
    }, gw = null, Sw = null, _w = null, bw = null, Eo = null, Mi = null, ey = null;
    {
      var c_ = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      gw = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Mt(), xf(t), i_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Mt(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Mt(), xf(t), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Mt(), xf(a), a_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Mt(), xf(t), n_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Mt(), xf(t), r_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Mt(), xf(t);
          var a = Ee.current;
          Ee.current = Eo;
          try {
            return o_(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Mt();
          var o = Ee.current;
          Ee.current = Eo;
          try {
            return qS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", Mt(), t_(e);
        },
        useState: function(e) {
          J = "useState", Mt();
          var t = Ee.current;
          Ee.current = Eo;
          try {
            return Ih(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Mt(), l_(e);
        },
        useTransition: function() {
          return J = "useTransition", Mt(), u_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Mt(), ZS(e, t, a);
        },
        useId: function() {
          return J = "useId", Mt(), s_();
        },
        unstable_isNewReconciler: fe
      }, Sw = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", he(), i_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", he(), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", he(), a_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", he(), n_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", he(), r_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", he();
          var a = Ee.current;
          Ee.current = Eo;
          try {
            return o_(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", he();
          var o = Ee.current;
          Ee.current = Eo;
          try {
            return qS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", he(), t_(e);
        },
        useState: function(e) {
          J = "useState", he();
          var t = Ee.current;
          Ee.current = Eo;
          try {
            return Ih(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", he(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", he(), l_(e);
        },
        useTransition: function() {
          return J = "useTransition", he(), u_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", he(), ZS(e, t, a);
        },
        useId: function() {
          return J = "useId", he(), s_();
        },
        unstable_isNewReconciler: fe
      }, _w = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", he(), Xh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", he(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", he(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", he(), Wh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", he(), Qh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", he();
          var a = Ee.current;
          Ee.current = Mi;
          try {
            return Kh(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", he();
          var o = Ee.current;
          Ee.current = Mi;
          try {
            return XS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", he(), Vh();
        },
        useState: function(e) {
          J = "useState", he();
          var t = Ee.current;
          Ee.current = Mi;
          try {
            return JS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", he(), qh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", he(), uw(e);
        },
        useTransition: function() {
          return J = "useTransition", he(), fw();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", he(), Hh(e, t);
        },
        useId: function() {
          return J = "useId", he(), Zh();
        },
        unstable_isNewReconciler: fe
      }, bw = {
        readContext: function(e) {
          return Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", he(), Xh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", he(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", he(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", he(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", he(), Wh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", he(), Qh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", he();
          var a = Ee.current;
          Ee.current = ey;
          try {
            return Kh(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", he();
          var o = Ee.current;
          Ee.current = ey;
          try {
            return KS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", he(), Vh();
        },
        useState: function(e) {
          J = "useState", he();
          var t = Ee.current;
          Ee.current = ey;
          try {
            return e_(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", he(), qh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", he(), sw(e);
        },
        useTransition: function() {
          return J = "useTransition", he(), dw();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", he(), Hh(e, t);
        },
        useId: function() {
          return J = "useId", he(), Zh();
        },
        unstable_isNewReconciler: fe
      }, Eo = {
        readContext: function(e) {
          return c_(), Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", tt(), Mt(), i_(e, t);
        },
        useContext: function(e) {
          return J = "useContext", tt(), Mt(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", tt(), Mt(), Yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", tt(), Mt(), a_(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", tt(), Mt(), n_(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", tt(), Mt(), r_(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", tt(), Mt();
          var a = Ee.current;
          Ee.current = Eo;
          try {
            return o_(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", tt(), Mt();
          var o = Ee.current;
          Ee.current = Eo;
          try {
            return qS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", tt(), Mt(), t_(e);
        },
        useState: function(e) {
          J = "useState", tt(), Mt();
          var t = Ee.current;
          Ee.current = Eo;
          try {
            return Ih(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", tt(), Mt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", tt(), Mt(), l_(e);
        },
        useTransition: function() {
          return J = "useTransition", tt(), Mt(), u_();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", tt(), Mt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", tt(), Mt(), ZS(e, t, a);
        },
        useId: function() {
          return J = "useId", tt(), Mt(), s_();
        },
        unstable_isNewReconciler: fe
      }, Mi = {
        readContext: function(e) {
          return c_(), Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", tt(), he(), Xh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", tt(), he(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", tt(), he(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", tt(), he(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", tt(), he(), Wh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", tt(), he(), Qh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", tt(), he();
          var a = Ee.current;
          Ee.current = Mi;
          try {
            return Kh(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", tt(), he();
          var o = Ee.current;
          Ee.current = Mi;
          try {
            return XS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", tt(), he(), Vh();
        },
        useState: function(e) {
          J = "useState", tt(), he();
          var t = Ee.current;
          Ee.current = Mi;
          try {
            return JS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", tt(), he(), qh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", tt(), he(), uw(e);
        },
        useTransition: function() {
          return J = "useTransition", tt(), he(), fw();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", tt(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", tt(), he(), Hh(e, t);
        },
        useId: function() {
          return J = "useId", tt(), he(), Zh();
        },
        unstable_isNewReconciler: fe
      }, ey = {
        readContext: function(e) {
          return c_(), Yn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", tt(), he(), Xh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", tt(), he(), Yn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", tt(), he(), Qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", tt(), he(), Gh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", tt(), he(), Wh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", tt(), he(), Qh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", tt(), he();
          var a = Ee.current;
          Ee.current = Mi;
          try {
            return Kh(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", tt(), he();
          var o = Ee.current;
          Ee.current = Mi;
          try {
            return KS(e, t, a);
          } finally {
            Ee.current = o;
          }
        },
        useRef: function(e) {
          return J = "useRef", tt(), he(), Vh();
        },
        useState: function(e) {
          J = "useState", tt(), he();
          var t = Ee.current;
          Ee.current = Mi;
          try {
            return e_(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", tt(), he(), qh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", tt(), he(), sw(e);
        },
        useTransition: function() {
          return J = "useTransition", tt(), he(), dw();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", tt(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", tt(), he(), Hh(e, t);
        },
        useId: function() {
          return J = "useId", tt(), he(), Zh();
        },
        unstable_isNewReconciler: fe
      };
    }
    var wu = l.unstable_now, Ew = 0, ty = -1, Gp = -1, ny = -1, f_ = !1, ry = !1;
    function ww() {
      return f_;
    }
    function fk() {
      ry = !0;
    }
    function dk() {
      f_ = !1, ry = !1;
    }
    function pk() {
      f_ = ry, ry = !1;
    }
    function Cw() {
      return Ew;
    }
    function Ow() {
      Ew = wu();
    }
    function d_(e) {
      Gp = wu(), e.actualStartTime < 0 && (e.actualStartTime = wu());
    }
    function Tw(e) {
      Gp = -1;
    }
    function ay(e, t) {
      if (Gp >= 0) {
        var a = wu() - Gp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Gp = -1;
      }
    }
    function wo(e) {
      if (ty >= 0) {
        var t = wu() - ty;
        ty = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case te:
              var c = a.stateNode;
              c.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function p_(e) {
      if (ny >= 0) {
        var t = wu() - ny;
        ny = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case D:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case te:
              var c = a.stateNode;
              c !== null && (c.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Co() {
      ty = wu();
    }
    function v_() {
      ny = wu();
    }
    function m_(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ms(e, t) {
      return {
        value: e,
        source: t,
        stack: rd(t),
        digest: null
      };
    }
    function h_(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function vk(e, t) {
      return !0;
    }
    function y_(e, t) {
      try {
        var a = vk(e, t);
        if (a === !1)
          return;
        var o = t.value, c = t.source, p = t.stack, m = p !== null ? p : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(o);
        }
        var g = c ? ot(c) : null, S = g ? "The above error occurred in the <" + g + "> component:" : "The above error occurred in one of your React components:", w;
        if (e.tag === D)
          w = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = ot(e) || "Anonymous";
          w = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var L = S + `
` + m + `

` + ("" + w);
        console.error(L);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var mk = typeof WeakMap == "function" ? WeakMap : Map;
    function Rw(e, t, a) {
      var o = gl(Gt, a);
      o.tag = yS, o.payload = {
        element: null
      };
      var c = t.value;
      return o.callback = function() {
        l2(c), y_(e, t);
      }, o;
    }
    function g_(e, t, a) {
      var o = gl(Gt, a);
      o.tag = yS;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var p = t.value;
        o.payload = function() {
          return c(p);
        }, o.callback = function() {
          jC(e), y_(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
        jC(e), y_(e, t), typeof c != "function" && i2(this);
        var S = t.value, w = t.stack;
        this.componentDidCatch(S, {
          componentStack: w !== null ? w : ""
        }), typeof c != "function" && (Ar(e.lanes, qe) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ot(e) || "Unknown"));
      }), o;
    }
    function xw(e, t, a) {
      var o = e.pingCache, c;
      if (o === null ? (o = e.pingCache = new mk(), c = /* @__PURE__ */ new Set(), o.set(t, c)) : (c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c))), !c.has(a)) {
        c.add(a);
        var p = u2.bind(null, e, t, a);
        Qn && cv(e, a), t.then(p, p);
      }
    }
    function hk(e, t, a, o) {
      var c = e.updateQueue;
      if (c === null) {
        var p = /* @__PURE__ */ new Set();
        p.add(a), e.updateQueue = p;
      } else
        c.add(a);
    }
    function yk(e, t) {
      var a = e.tag;
      if ((e.mode & mt) === Be && (a === x || a === ne || a === _e)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Pw(e) {
      var t = e;
      do {
        if (t.tag === W && tk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Dw(e, t, a, o, c) {
      if ((e.mode & mt) === Be) {
        if (e === t)
          e.flags |= Fn;
        else {
          if (e.flags |= Ze, a.flags |= ns, a.flags &= ~(vc | Gr), a.tag === R) {
            var p = a.alternate;
            if (p === null)
              a.tag = ht;
            else {
              var m = gl(Gt, qe);
              m.tag = xh, Su(a, m, qe);
            }
          }
          a.lanes = ut(a.lanes, qe);
        }
        return e;
      }
      return e.flags |= Fn, e.lanes = c, e;
    }
    function gk(e, t, a, o, c) {
      if (a.flags |= Gr, Qn && cv(e, c), o !== null && typeof o == "object" && typeof o.then == "function") {
        var p = o;
        yk(a), yr() && a.mode & mt && _1();
        var m = Pw(t);
        if (m !== null) {
          m.flags &= ~vn, Dw(m, t, a, e, c), m.mode & mt && xw(e, p, c), hk(m, e, p);
          return;
        } else {
          if (!Kl(c)) {
            xw(e, p, c), K_();
            return;
          }
          var g = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = g;
        }
      } else if (yr() && a.mode & mt) {
        _1();
        var S = Pw(t);
        if (S !== null) {
          (S.flags & Fn) === He && (S.flags |= vn), Dw(S, t, a, e, c), cS(Ms(o, a));
          return;
        }
      }
      o = Ms(o, a), KM(o);
      var w = t;
      do {
        switch (w.tag) {
          case D: {
            var C = o;
            w.flags |= Fn;
            var L = Nn(c);
            w.lanes = ut(w.lanes, L);
            var k = Rw(w, C, L);
            _S(w, k);
            return;
          }
          case R:
            var B = o, Y = w.type, q = w.stateNode;
            if ((w.flags & Ze) === He && (typeof Y.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !PC(q))) {
              w.flags |= Fn;
              var Ce = Nn(c);
              w.lanes = ut(w.lanes, Ce);
              var Ie = g_(w, B, Ce);
              _S(w, Ie);
              return;
            }
            break;
        }
        w = w.return;
      } while (w !== null);
    }
    function Sk() {
      return null;
    }
    var qp = u.ReactCurrentOwner, Li = !1, S_, Xp, __, b_, E_, Ls, w_, iy;
    S_ = {}, Xp = {}, __ = {}, b_ = {}, E_ = {}, Ls = !1, w_ = {}, iy = {};
    function ea(e, t, a, o) {
      e === null ? t.child = G1(t, null, a, o) : t.child = wf(t, e.child, a, o);
    }
    function _k(e, t, a, o) {
      t.child = wf(t, e.child, null, o), t.child = wf(t, null, a, o);
    }
    function Nw(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Pi(
          p,
          o,
          // Resolved props
          "prop",
          Wt(a)
        );
      }
      var m = a.render, g = t.ref, S, w;
      Ef(t, c), lo(t);
      {
        if (qp.current = t, Aa(!0), S = Pf(e, t, m, o, g, c), w = Df(), t.mode & fn) {
          Dn(!0);
          try {
            S = Pf(e, t, m, o, g, c), w = Df();
          } finally {
            Dn(!1);
          }
        }
        Aa(!1);
      }
      return Qo(), e !== null && !Li ? (J1(e, t, c), Sl(e, t, c)) : (yr() && w && aS(t), t.flags |= eo, ea(e, t, S, c), t.child);
    }
    function $w(e, t, a, o, c) {
      if (e === null) {
        var p = a.type;
        if (O2(p) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var m = p;
          return m = jf(p), t.tag = _e, t.type = m, T_(t, p), kw(e, t, m, o, c);
        }
        {
          var g = p.propTypes;
          g && Pi(
            g,
            o,
            // Resolved props
            "prop",
            Wt(p)
          );
        }
        var S = ub(a.type, null, o, t, t.mode, c);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var w = a.type, C = w.propTypes;
        C && Pi(
          C,
          o,
          // Resolved props
          "prop",
          Wt(w)
        );
      }
      var L = e.child, k = $_(e, c);
      if (!k) {
        var B = L.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : Ue, Y(B, o) && e.ref === t.ref)
          return Sl(e, t, c);
      }
      t.flags |= eo;
      var q = Fs(L, o);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function kw(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var p = t.elementType;
        if (p.$$typeof === Ye) {
          var m = p, g = m._payload, S = m._init;
          try {
            p = S(g);
          } catch {
            p = null;
          }
          var w = p && p.propTypes;
          w && Pi(
            w,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Wt(p)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Ue(C, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Li = !1, t.pendingProps = o = C, $_(e, c))
            (e.flags & ns) !== He && (Li = !0);
          else
            return t.lanes = e.lanes, Sl(e, t, c);
      }
      return C_(e, t, a, o, c);
    }
    function Mw(e, t, a) {
      var o = t.pendingProps, c = o.children, p = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || H)
        if ((t.mode & mt) === Be) {
          var m = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, gy(t, a);
        } else if (Ar(a, Lr)) {
          var L = {
            baseLanes: Z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = L;
          var k = p !== null ? p.baseLanes : a;
          gy(t, k);
        } else {
          var g = null, S;
          if (p !== null) {
            var w = p.baseLanes;
            S = ut(w, a);
          } else
            S = a;
          t.lanes = t.childLanes = Lr;
          var C = {
            baseLanes: S,
            cachePool: g,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, gy(t, S), null;
        }
      else {
        var B;
        p !== null ? (B = ut(p.baseLanes, a), t.memoizedState = null) : B = a, gy(t, B);
      }
      return ea(e, t, c, a), t.child;
    }
    function bk(e, t, a) {
      var o = t.pendingProps;
      return ea(e, t, o, a), t.child;
    }
    function Ek(e, t, a) {
      var o = t.pendingProps.children;
      return ea(e, t, o, a), t.child;
    }
    function wk(e, t, a) {
      {
        t.flags |= lt;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var c = t.pendingProps, p = c.children;
      return ea(e, t, p, a), t.child;
    }
    function Lw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Pr, t.flags |= $d);
    }
    function C_(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Pi(
          p,
          o,
          // Resolved props
          "prop",
          Wt(a)
        );
      }
      var m;
      {
        var g = hf(t, a, !0);
        m = yf(t, g);
      }
      var S, w;
      Ef(t, c), lo(t);
      {
        if (qp.current = t, Aa(!0), S = Pf(e, t, a, o, m, c), w = Df(), t.mode & fn) {
          Dn(!0);
          try {
            S = Pf(e, t, a, o, m, c), w = Df();
          } finally {
            Dn(!1);
          }
        }
        Aa(!1);
      }
      return Qo(), e !== null && !Li ? (J1(e, t, c), Sl(e, t, c)) : (yr() && w && aS(t), t.flags |= eo, ea(e, t, S, c), t.child);
    }
    function Aw(e, t, a, o, c) {
      {
        switch (F2(t)) {
          case !1: {
            var p = t.stateNode, m = t.type, g = new m(t.memoizedProps, p.context), S = g.state;
            p.updater.enqueueSetState(p, S, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= Fn;
            var w = new Error("Simulated error coming from DevTools"), C = Nn(c);
            t.lanes = ut(t.lanes, C);
            var L = g_(t, Ms(w, t), C);
            _S(t, L);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && Pi(
            k,
            o,
            // Resolved props
            "prop",
            Wt(a)
          );
        }
      }
      var B;
      So(a) ? (B = !0, yh(t)) : B = !1, Ef(t, c);
      var Y = t.stateNode, q;
      Y === null ? (ly(e, t), V1(t, a, o), $S(t, a, o, c), q = !0) : e === null ? q = q$(t, a, o, c) : q = X$(e, t, a, o, c);
      var Ce = O_(e, t, a, q, B, c);
      {
        var Ie = t.stateNode;
        q && Ie.props !== o && (Ls || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ot(t) || "a component"), Ls = !0);
      }
      return Ce;
    }
    function O_(e, t, a, o, c, p) {
      Lw(e, t);
      var m = (t.flags & Ze) !== He;
      if (!o && !m)
        return c && h1(t, a, !1), Sl(e, t, p);
      var g = t.stateNode;
      qp.current = t;
      var S;
      if (m && typeof a.getDerivedStateFromError != "function")
        S = null, Tw();
      else {
        lo(t);
        {
          if (Aa(!0), S = g.render(), t.mode & fn) {
            Dn(!0);
            try {
              g.render();
            } finally {
              Dn(!1);
            }
          }
          Aa(!1);
        }
        Qo();
      }
      return t.flags |= eo, e !== null && m ? _k(e, t, S, p) : ea(e, t, S, p), t.memoizedState = g.state, c && h1(t, a, !0), t.child;
    }
    function zw(e) {
      var t = e.stateNode;
      t.pendingContext ? v1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && v1(e, t.context, !1), jS(e, t.containerInfo);
    }
    function Ck(e, t, a) {
      if (zw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, c = t.memoizedState, p = c.element;
      L1(e, t), $h(t, o, null, a);
      var m = t.memoizedState;
      t.stateNode;
      var g = m.element;
      if (c.isDehydrated) {
        var S = {
          element: g,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, w = t.updateQueue;
        if (w.baseState = S, t.memoizedState = S, t.flags & vn) {
          var C = Ms(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return jw(e, t, g, a, C);
        } else if (g !== p) {
          var L = Ms(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return jw(e, t, g, a, L);
        } else {
          x$(t);
          var k = G1(t, null, g, a);
          t.child = k;
          for (var B = k; B; )
            B.flags = B.flags & ~Jt | pa, B = B.sibling;
        }
      } else {
        if (_f(), g === p)
          return Sl(e, t, a);
        ea(e, t, g, a);
      }
      return t.child;
    }
    function jw(e, t, a, o, c) {
      return _f(), cS(c), t.flags |= vn, ea(e, t, a, o), t.child;
    }
    function Ok(e, t, a) {
      X1(t), e === null && sS(t);
      var o = t.type, c = t.pendingProps, p = e !== null ? e.memoizedProps : null, m = c.children, g = B0(o, c);
      return g ? m = null : p !== null && B0(o, p) && (t.flags |= kt), Lw(e, t), ea(e, t, m, a), t.child;
    }
    function Tk(e, t) {
      return e === null && sS(t), null;
    }
    function Rk(e, t, a, o) {
      ly(e, t);
      var c = t.pendingProps, p = a, m = p._payload, g = p._init, S = g(m);
      t.type = S;
      var w = t.tag = T2(S), C = $i(S, c), L;
      switch (w) {
        case x:
          return T_(t, S), t.type = S = jf(S), L = C_(null, t, S, C, o), L;
        case R:
          return t.type = S = nb(S), L = Aw(null, t, S, C, o), L;
        case ne:
          return t.type = S = rb(S), L = Nw(null, t, S, C, o), L;
        case Ae: {
          if (t.type !== t.elementType) {
            var k = S.propTypes;
            k && Pi(
              k,
              C,
              // Resolved for outer only
              "prop",
              Wt(S)
            );
          }
          return L = $w(
            null,
            t,
            S,
            $i(S.type, C),
            // The inner type can have defaults too
            o
          ), L;
        }
      }
      var B = "";
      throw S !== null && typeof S == "object" && S.$$typeof === Ye && (B = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + S + ". " + ("Lazy element type must resolve to a class or function." + B));
    }
    function xk(e, t, a, o, c) {
      ly(e, t), t.tag = R;
      var p;
      return So(a) ? (p = !0, yh(t)) : p = !1, Ef(t, c), V1(t, a, o), $S(t, a, o, c), O_(null, t, a, !0, p, c);
    }
    function Pk(e, t, a, o) {
      ly(e, t);
      var c = t.pendingProps, p;
      {
        var m = hf(t, a, !1);
        p = yf(t, m);
      }
      Ef(t, o);
      var g, S;
      lo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Wt(a) || "Unknown";
          S_[w] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), S_[w] = !0);
        }
        t.mode & fn && Ni.recordLegacyContextWarning(t, null), Aa(!0), qp.current = t, g = Pf(null, t, a, c, p, o), S = Df(), Aa(!1);
      }
      if (Qo(), t.flags |= eo, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
        var C = Wt(a) || "Unknown";
        Xp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), Xp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0
      ) {
        {
          var L = Wt(a) || "Unknown";
          Xp[L] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Xp[L] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return So(a) ? (k = !0, yh(t)) : k = !1, t.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, SS(t), I1(t, g), $S(t, a, c, o), O_(null, t, a, !0, k, o);
      } else {
        if (t.tag = x, t.mode & fn) {
          Dn(!0);
          try {
            g = Pf(null, t, a, c, p, o), S = Df();
          } finally {
            Dn(!1);
          }
        }
        return yr() && S && aS(t), ea(null, t, g, o), T_(t, a), t.child;
      }
    }
    function T_(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = sa();
          o && (a += `

Check the render method of \`` + o + "`.");
          var c = o || "", p = e._debugSource;
          p && (c = p.fileName + ":" + p.lineNumber), E_[c] || (E_[c] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = Wt(t) || "Unknown";
          b_[m] || (y("%s: Function components do not support getDerivedStateFromProps.", m), b_[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Wt(t) || "Unknown";
          __[g] || (y("%s: Function components do not support contextType.", g), __[g] = !0);
        }
      }
    }
    var R_ = {
      dehydrated: null,
      treeContext: null,
      retryLane: _t
    };
    function x_(e) {
      return {
        baseLanes: e,
        cachePool: Sk(),
        transitions: null
      };
    }
    function Dk(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Nk(e, t, a, o) {
      if (t !== null) {
        var c = t.memoizedState;
        if (c === null)
          return !1;
      }
      return HS(e, Hp);
    }
    function $k(e, t) {
      return Zl(e.childLanes, t);
    }
    function Uw(e, t, a) {
      var o = t.pendingProps;
      H2(t) && (t.flags |= Ze);
      var c = ki.current, p = !1, m = (t.flags & Ze) !== He;
      if (m || Nk(c, e) ? (p = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (c = ek(c, Z1)), c = Of(c), bu(t, c), e === null) {
        sS(t);
        var g = t.memoizedState;
        if (g !== null) {
          var S = g.dehydrated;
          if (S !== null)
            return zk(t, S);
        }
        var w = o.children, C = o.fallback;
        if (p) {
          var L = kk(t, w, C, a), k = t.child;
          return k.memoizedState = x_(a), t.memoizedState = R_, L;
        } else
          return P_(t, w);
      } else {
        var B = e.memoizedState;
        if (B !== null) {
          var Y = B.dehydrated;
          if (Y !== null)
            return jk(e, t, m, o, Y, B, a);
        }
        if (p) {
          var q = o.fallback, Ce = o.children, Ie = Lk(e, t, Ce, q, a), Me = t.child, Et = e.child.memoizedState;
          return Me.memoizedState = Et === null ? x_(a) : Dk(Et, a), Me.childLanes = $k(e, a), t.memoizedState = R_, Ie;
        } else {
          var St = o.children, U = Mk(e, t, St, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function P_(e, t, a) {
      var o = e.mode, c = {
        mode: "visible",
        children: t
      }, p = D_(c, o);
      return p.return = e, e.child = p, p;
    }
    function kk(e, t, a, o) {
      var c = e.mode, p = e.child, m = {
        mode: "hidden",
        children: t
      }, g, S;
      return (c & mt) === Be && p !== null ? (g = p, g.childLanes = Z, g.pendingProps = m, e.mode & We && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = 0, g.treeBaseDuration = 0), S = Pu(a, c, o, null)) : (g = D_(m, c), S = Pu(a, c, o, null)), g.return = e, S.return = e, g.sibling = S, e.child = g, S;
    }
    function D_(e, t, a) {
      return FC(e, t, Z, null);
    }
    function Fw(e, t) {
      return Fs(e, t);
    }
    function Mk(e, t, a, o) {
      var c = e.child, p = c.sibling, m = Fw(c, {
        mode: "visible",
        children: a
      });
      if ((t.mode & mt) === Be && (m.lanes = o), m.return = t, m.sibling = null, p !== null) {
        var g = t.deletions;
        g === null ? (t.deletions = [p], t.flags |= $t) : g.push(p);
      }
      return t.child = m, m;
    }
    function Lk(e, t, a, o, c) {
      var p = t.mode, m = e.child, g = m.sibling, S = {
        mode: "hidden",
        children: a
      }, w;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & mt) === Be && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var C = t.child;
        w = C, w.childLanes = Z, w.pendingProps = S, t.mode & We && (w.actualDuration = 0, w.actualStartTime = -1, w.selfBaseDuration = m.selfBaseDuration, w.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        w = Fw(m, S), w.subtreeFlags = m.subtreeFlags & Wn;
      var L;
      return g !== null ? L = Fs(g, o) : (L = Pu(o, p, c, null), L.flags |= Jt), L.return = t, w.return = t, w.sibling = L, t.child = w, L;
    }
    function oy(e, t, a, o) {
      o !== null && cS(o), wf(t, e.child, null, a);
      var c = t.pendingProps, p = c.children, m = P_(t, p);
      return m.flags |= Jt, t.memoizedState = null, m;
    }
    function Ak(e, t, a, o, c) {
      var p = t.mode, m = {
        mode: "visible",
        children: a
      }, g = D_(m, p), S = Pu(o, p, c, null);
      return S.flags |= Jt, g.return = t, S.return = t, g.sibling = S, t.child = g, (t.mode & mt) !== Be && wf(t, e.child, null, c), S;
    }
    function zk(e, t, a) {
      return (e.mode & mt) === Be ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : G0(t) ? e.lanes = Xo : e.lanes = Lr, null;
    }
    function jk(e, t, a, o, c, p, m) {
      if (a)
        if (t.flags & vn) {
          t.flags &= ~vn;
          var U = h_(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return oy(e, t, m, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var X = o.children, F = o.fallback, se = Ak(e, t, X, F, m), Oe = t.child;
          return Oe.memoizedState = x_(m), t.memoizedState = R_, se;
        }
      else {
        if (T$(), (t.mode & mt) === Be)
          return oy(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (G0(c)) {
          var g, S, w;
          {
            var C = VN(c);
            g = C.digest, S = C.message, w = C.stack;
          }
          var L;
          S ? L = new Error(S) : L = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = h_(L, g, w);
          return oy(e, t, m, k);
        }
        var B = Ar(m, e.childLanes);
        if (Li || B) {
          var Y = yy();
          if (Y !== null) {
            var q = m0(Y, m);
            if (q !== _t && q !== p.retryLane) {
              p.retryLane = q;
              var Ce = Gt;
              wa(e, q), nr(Y, e, q, Ce);
            }
          }
          K_();
          var Ie = h_(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return oy(e, t, m, Ie);
        } else if (u1(c)) {
          t.flags |= Ze, t.child = e.child;
          var Me = s2.bind(null, e);
          return BN(c, Me), null;
        } else {
          P$(t, c, p.treeContext);
          var Et = o.children, St = P_(t, Et);
          return St.flags |= pa, St;
        }
      }
    }
    function Hw(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = ut(o.lanes, t)), mS(e.return, t, a);
    }
    function Uk(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === W) {
          var c = o.memoizedState;
          c !== null && Hw(o, a, e);
        } else if (o.tag === ct)
          Hw(o, a, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function Fk(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Uh(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Hk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !w_[e])
        if (w_[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Ik(e, t) {
      e !== void 0 && !iy[e] && (e !== "collapsed" && e !== "hidden" ? (iy[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (iy[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Iw(e, t) {
      {
        var a = jn(e), o = !a && typeof di(e) == "function";
        if (a || o) {
          var c = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, t, c), !1;
        }
      }
      return !0;
    }
    function Vk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (jn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Iw(e[a], a))
              return;
        } else {
          var o = di(e);
          if (typeof o == "function") {
            var c = o.call(e);
            if (c)
              for (var p = c.next(), m = 0; !p.done; p = c.next()) {
                if (!Iw(p.value, m))
                  return;
                m++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function N_(e, t, a, o, c) {
      var p = e.memoizedState;
      p === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: a,
        tailMode: c
      } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = a, p.tailMode = c);
    }
    function Vw(e, t, a) {
      var o = t.pendingProps, c = o.revealOrder, p = o.tail, m = o.children;
      Hk(c), Ik(p, c), Vk(m, c), ea(e, t, m, a);
      var g = ki.current, S = HS(g, Hp);
      if (S)
        g = IS(g, Hp), t.flags |= Ze;
      else {
        var w = e !== null && (e.flags & Ze) !== He;
        w && Uk(t, t.child, a), g = Of(g);
      }
      if (bu(t, g), (t.mode & mt) === Be)
        t.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var C = Fk(t.child), L;
            C === null ? (L = t.child, t.child = null) : (L = C.sibling, C.sibling = null), N_(
              t,
              !1,
              // isBackwards
              L,
              C,
              p
            );
            break;
          }
          case "backwards": {
            var k = null, B = t.child;
            for (t.child = null; B !== null; ) {
              var Y = B.alternate;
              if (Y !== null && Uh(Y) === null) {
                t.child = B;
                break;
              }
              var q = B.sibling;
              B.sibling = k, k = B, B = q;
            }
            N_(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              p
            );
            break;
          }
          case "together": {
            N_(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Bk(e, t, a) {
      jS(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = wf(t, null, o, a) : ea(e, t, o, a), t.child;
    }
    var Bw = !1;
    function Yk(e, t, a) {
      var o = t.type, c = o._context, p = t.pendingProps, m = t.memoizedProps, g = p.value;
      {
        "value" in p || Bw || (Bw = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var S = t.type.propTypes;
        S && Pi(S, p, "prop", "Context.Provider");
      }
      if (N1(t, c, g), m !== null) {
        var w = m.value;
        if (xe(w, g)) {
          if (m.children === p.children && !mh())
            return Sl(e, t, a);
        } else
          U$(t, c, a);
      }
      var C = p.children;
      return ea(e, t, C, a), t.child;
    }
    var Yw = !1;
    function Wk(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (Yw || (Yw = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var c = t.pendingProps, p = c.children;
      typeof p != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ef(t, a);
      var m = Yn(o);
      lo(t);
      var g;
      return qp.current = t, Aa(!0), g = p(m), Aa(!1), Qo(), t.flags |= eo, ea(e, t, g, a), t.child;
    }
    function Kp() {
      Li = !0;
    }
    function ly(e, t) {
      (t.mode & mt) === Be && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Jt);
    }
    function Sl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Tw(), sv(t.lanes), Ar(a, t.childLanes) ? (K$(e, t), t.child) : null;
    }
    function Qk(e, t, a) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === o.child)
          o.child = a;
        else {
          var c = o.child;
          if (c === null)
            throw new Error("Expected parent to have a child.");
          for (; c.sibling !== t; )
            if (c = c.sibling, c === null)
              throw new Error("Expected to find the previous sibling.");
          c.sibling = a;
        }
        var p = o.deletions;
        return p === null ? (o.deletions = [e], o.flags |= $t) : p.push(e), a.flags |= Jt, a;
      }
    }
    function $_(e, t) {
      var a = e.lanes;
      return !!Ar(a, t);
    }
    function Gk(e, t, a) {
      switch (t.tag) {
        case D:
          zw(t), t.stateNode, _f();
          break;
        case z:
          X1(t);
          break;
        case R: {
          var o = t.type;
          So(o) && yh(t);
          break;
        }
        case A:
          jS(t, t.stateNode.containerInfo);
          break;
        case pe: {
          var c = t.memoizedProps.value, p = t.type._context;
          N1(t, p, c);
          break;
        }
        case te:
          {
            var m = Ar(a, t.childLanes);
            m && (t.flags |= lt);
            {
              var g = t.stateNode;
              g.effectDuration = 0, g.passiveEffectDuration = 0;
            }
          }
          break;
        case W: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return bu(t, Of(ki.current)), t.flags |= Ze, null;
            var w = t.child, C = w.childLanes;
            if (Ar(a, C))
              return Uw(e, t, a);
            bu(t, Of(ki.current));
            var L = Sl(e, t, a);
            return L !== null ? L.sibling : null;
          } else
            bu(t, Of(ki.current));
          break;
        }
        case ct: {
          var k = (e.flags & Ze) !== He, B = Ar(a, t.childLanes);
          if (k) {
            if (B)
              return Vw(e, t, a);
            t.flags |= Ze;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), bu(t, ki.current), B)
            break;
          return null;
        }
        case ze:
        case Ke:
          return t.lanes = Z, Mw(e, t, a);
      }
      return Sl(e, t, a);
    }
    function Ww(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Qk(e, t, ub(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, c = t.pendingProps;
        if (o !== c || mh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Li = !0;
        else {
          var p = $_(e, a);
          if (!p && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === He)
            return Li = !1, Gk(e, t, a);
          (e.flags & ns) !== He ? Li = !0 : Li = !1;
        }
      } else if (Li = !1, yr() && _$(t)) {
        var m = t.index, g = b$();
        S1(t, g, m);
      }
      switch (t.lanes = Z, t.tag) {
        case $:
          return Pk(e, t, t.type, a);
        case dt: {
          var S = t.elementType;
          return Rk(e, t, S, a);
        }
        case x: {
          var w = t.type, C = t.pendingProps, L = t.elementType === w ? C : $i(w, C);
          return C_(e, t, w, L, a);
        }
        case R: {
          var k = t.type, B = t.pendingProps, Y = t.elementType === k ? B : $i(k, B);
          return Aw(e, t, k, Y, a);
        }
        case D:
          return Ck(e, t, a);
        case z:
          return Ok(e, t, a);
        case G:
          return Tk(e, t);
        case W:
          return Uw(e, t, a);
        case A:
          return Bk(e, t, a);
        case ne: {
          var q = t.type, Ce = t.pendingProps, Ie = t.elementType === q ? Ce : $i(q, Ce);
          return Nw(e, t, q, Ie, a);
        }
        case I:
          return bk(e, t, a);
        case K:
          return Ek(e, t, a);
        case te:
          return wk(e, t, a);
        case pe:
          return Yk(e, t, a);
        case de:
          return Wk(e, t, a);
        case Ae: {
          var Me = t.type, Et = t.pendingProps, St = $i(Me, Et);
          if (t.type !== t.elementType) {
            var U = Me.propTypes;
            U && Pi(
              U,
              St,
              // Resolved for outer only
              "prop",
              Wt(Me)
            );
          }
          return St = $i(Me.type, St), $w(e, t, Me, St, a);
        }
        case _e:
          return kw(e, t, t.type, t.pendingProps, a);
        case ht: {
          var X = t.type, F = t.pendingProps, se = t.elementType === X ? F : $i(X, F);
          return xk(e, t, X, se, a);
        }
        case ct:
          return Vw(e, t, a);
        case Vt:
          break;
        case ze:
          return Mw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nf(e) {
      e.flags |= lt;
    }
    function Qw(e) {
      e.flags |= Pr, e.flags |= $d;
    }
    var Gw, k_, qw, Xw;
    Gw = function(e, t, a, o) {
      for (var c = t.child; c !== null; ) {
        if (c.tag === z || c.tag === G)
          yN(e, c.stateNode);
        else if (c.tag !== A) {
          if (c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
        }
        if (c === t)
          return;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    }, k_ = function(e, t) {
    }, qw = function(e, t, a, o, c) {
      var p = e.memoizedProps;
      if (p !== o) {
        var m = t.stateNode, g = US(), S = SN(m, a, p, o, c, g);
        t.updateQueue = S, S && Nf(t);
      }
    }, Xw = function(e, t, a, o) {
      a !== o && Nf(t);
    };
    function Zp(e, t) {
      if (!yr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, o = null; a !== null; )
              a.alternate !== null && (o = a), a = a.sibling;
            o === null ? e.tail = null : o.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = e.tail, p = null; c !== null; )
              c.alternate !== null && (p = c), c = c.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function Sr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Z, o = He;
      if (t) {
        if ((e.mode & We) !== Be) {
          for (var S = e.selfBaseDuration, w = e.child; w !== null; )
            a = ut(a, ut(w.lanes, w.childLanes)), o |= w.subtreeFlags & Wn, o |= w.flags & Wn, S += w.treeBaseDuration, w = w.sibling;
          e.treeBaseDuration = S;
        } else
          for (var C = e.child; C !== null; )
            a = ut(a, ut(C.lanes, C.childLanes)), o |= C.subtreeFlags & Wn, o |= C.flags & Wn, C.return = e, C = C.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & We) !== Be) {
          for (var c = e.actualDuration, p = e.selfBaseDuration, m = e.child; m !== null; )
            a = ut(a, ut(m.lanes, m.childLanes)), o |= m.subtreeFlags, o |= m.flags, c += m.actualDuration, p += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = c, e.treeBaseDuration = p;
        } else
          for (var g = e.child; g !== null; )
            a = ut(a, ut(g.lanes, g.childLanes)), o |= g.subtreeFlags, o |= g.flags, g.return = e, g = g.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = a, t;
    }
    function qk(e, t, a) {
      if (M$() && (t.mode & mt) !== Be && (t.flags & Ze) === He)
        return T1(t), _f(), t.flags |= vn | Gr | Fn, !1;
      var o = Eh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($$(t), Sr(t), (t.mode & We) !== Be) {
            var c = a !== null;
            if (c) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & Ze) === He && (t.memoizedState = null), t.flags |= lt, Sr(t), (t.mode & We) !== Be) {
            var m = a !== null;
            if (m) {
              var g = t.child;
              g !== null && (t.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return R1(), !0;
    }
    function Kw(e, t, a) {
      var o = t.pendingProps;
      switch (iS(t), t.tag) {
        case $:
        case dt:
        case _e:
        case x:
        case ne:
        case I:
        case K:
        case te:
        case de:
        case Ae:
          return Sr(t), null;
        case R: {
          var c = t.type;
          return So(c) && hh(t), Sr(t), null;
        }
        case D: {
          var p = t.stateNode;
          if (Cf(t), tS(t), BS(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var m = Eh(t);
            if (m)
              Nf(t);
            else if (e !== null) {
              var g = e.memoizedState;
              // Check if this is a client root
              (!g.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & vn) !== He) && (t.flags |= da, R1());
            }
          }
          return k_(e, t), Sr(t), null;
        }
        case z: {
          FS(t);
          var S = q1(), w = t.type;
          if (e !== null && t.stateNode != null)
            qw(e, t, w, o, S), e.ref !== t.ref && Qw(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Sr(t), null;
            }
            var C = US(), L = Eh(t);
            if (L)
              D$(t, S, C) && Nf(t);
            else {
              var k = hN(w, o, S, C, t);
              Gw(k, t, !1, !1), t.stateNode = k, gN(k, w, o, S) && Nf(t);
            }
            t.ref !== null && Qw(t);
          }
          return Sr(t), null;
        }
        case G: {
          var B = o;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            Xw(e, t, Y, B);
          } else {
            if (typeof B != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = q1(), Ce = US(), Ie = Eh(t);
            Ie ? N$(t) && Nf(t) : t.stateNode = _N(B, q, Ce, t);
          }
          return Sr(t), null;
        }
        case W: {
          Tf(t);
          var Me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Et = qk(e, t, Me);
            if (!Et)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Ze) !== He)
            return t.lanes = a, (t.mode & We) !== Be && m_(t), t;
          var St = Me !== null, U = e !== null && e.memoizedState !== null;
          if (St !== U && St) {
            var X = t.child;
            if (X.flags |= to, (t.mode & mt) !== Be) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !oe);
              F || HS(ki.current, Z1) ? XM() : K_();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= lt), Sr(t), (t.mode & We) !== Be && St) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case A:
          return Cf(t), k_(e, t), e === null && p$(t.stateNode.containerInfo), Sr(t), null;
        case pe:
          var Se = t.type._context;
          return vS(Se, t), Sr(t), null;
        case ht: {
          var Xe = t.type;
          return So(Xe) && hh(t), Sr(t), null;
        }
        case ct: {
          Tf(t);
          var at = t.memoizedState;
          if (at === null)
            return Sr(t), null;
          var Ft = (t.flags & Ze) !== He, xt = at.rendering;
          if (xt === null)
            if (Ft)
              Zp(at, !1);
            else {
              var Ln = ZM() && (e === null || (e.flags & Ze) === He);
              if (!Ln)
                for (var Pt = t.child; Pt !== null; ) {
                  var xn = Uh(Pt);
                  if (xn !== null) {
                    Ft = !0, t.flags |= Ze, Zp(at, !1);
                    var Fr = xn.updateQueue;
                    return Fr !== null && (t.updateQueue = Fr, t.flags |= lt), t.subtreeFlags = He, Z$(t, a), bu(t, IS(ki.current, Hp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              at.tail !== null && cn() > gC() && (t.flags |= Ze, Ft = !0, Zp(at, !1), t.lanes = Yd);
            }
          else {
            if (!Ft) {
              var Cr = Uh(xt);
              if (Cr !== null) {
                t.flags |= Ze, Ft = !0;
                var Ba = Cr.updateQueue;
                if (Ba !== null && (t.updateQueue = Ba, t.flags |= lt), Zp(at, !0), at.tail === null && at.tailMode === "hidden" && !xt.alternate && !yr())
                  return Sr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                cn() * 2 - at.renderingStartTime > gC() && a !== Lr && (t.flags |= Ze, Ft = !0, Zp(at, !1), t.lanes = Yd);
            }
            if (at.isBackwards)
              xt.sibling = t.child, t.child = xt;
            else {
              var ra = at.last;
              ra !== null ? ra.sibling = xt : t.child = xt, at.last = xt;
            }
          }
          if (at.tail !== null) {
            var aa = at.tail;
            at.rendering = aa, at.tail = aa.sibling, at.renderingStartTime = cn(), aa.sibling = null;
            var Hr = ki.current;
            return Ft ? Hr = IS(Hr, Hp) : Hr = Of(Hr), bu(t, Hr), aa;
          }
          return Sr(t), null;
        }
        case Vt:
          break;
        case ze:
        case Ke: {
          X_(t);
          var Cl = t.memoizedState, Uf = Cl !== null;
          if (e !== null) {
            var vv = e.memoizedState, Ro = vv !== null;
            Ro !== Uf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !H && (t.flags |= to);
          }
          return !Uf || (t.mode & mt) === Be ? Sr(t) : Ar(To, Lr) && (Sr(t), t.subtreeFlags & (Jt | lt) && (t.flags |= to)), null;
        }
        case Ct:
          return null;
        case pt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xk(e, t, a) {
      switch (iS(t), t.tag) {
        case R: {
          var o = t.type;
          So(o) && hh(t);
          var c = t.flags;
          return c & Fn ? (t.flags = c & ~Fn | Ze, (t.mode & We) !== Be && m_(t), t) : null;
        }
        case D: {
          t.stateNode, Cf(t), tS(t), BS();
          var p = t.flags;
          return (p & Fn) !== He && (p & Ze) === He ? (t.flags = p & ~Fn | Ze, t) : null;
        }
        case z:
          return FS(t), null;
        case W: {
          Tf(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var g = t.flags;
          return g & Fn ? (t.flags = g & ~Fn | Ze, (t.mode & We) !== Be && m_(t), t) : null;
        }
        case ct:
          return Tf(t), null;
        case A:
          return Cf(t), null;
        case pe:
          var S = t.type._context;
          return vS(S, t), null;
        case ze:
        case Ke:
          return X_(t), null;
        case Ct:
          return null;
        default:
          return null;
      }
    }
    function Zw(e, t, a) {
      switch (iS(t), t.tag) {
        case R: {
          var o = t.type.childContextTypes;
          o != null && hh(t);
          break;
        }
        case D: {
          t.stateNode, Cf(t), tS(t), BS();
          break;
        }
        case z: {
          FS(t);
          break;
        }
        case A:
          Cf(t);
          break;
        case W:
          Tf(t);
          break;
        case ct:
          Tf(t);
          break;
        case pe:
          var c = t.type._context;
          vS(c, t);
          break;
        case ze:
        case Ke:
          X_(t);
          break;
      }
    }
    var Jw = null;
    Jw = /* @__PURE__ */ new Set();
    var uy = !1, _r = !1, Kk = typeof WeakSet == "function" ? WeakSet : Set, Pe = null, $f = null, kf = null;
    function Zk(e) {
      Yo(null, function() {
        throw e;
      }), Dd();
    }
    var Jk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & We)
        try {
          Co(), t.componentWillUnmount();
        } finally {
          wo(e);
        }
      else
        t.componentWillUnmount();
    };
    function eC(e, t) {
      try {
        Cu(Xn, e);
      } catch (a) {
        rn(e, t, a);
      }
    }
    function M_(e, t, a) {
      try {
        Jk(e, a);
      } catch (o) {
        rn(e, t, o);
      }
    }
    function eM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        rn(e, t, o);
      }
    }
    function tC(e, t) {
      try {
        rC(e);
      } catch (a) {
        rn(e, t, a);
      }
    }
    function Mf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (ke && Qe && e.mode & We)
              try {
                Co(), o = a(null);
              } finally {
                wo(e);
              }
            else
              o = a(null);
          } catch (c) {
            rn(e, t, c);
          }
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          a.current = null;
    }
    function sy(e, t, a) {
      try {
        a();
      } catch (o) {
        rn(e, t, o);
      }
    }
    var nC = !1;
    function tM(e, t) {
      vN(e.containerInfo), Pe = t, nM();
      var a = nC;
      return nC = !1, a;
    }
    function nM() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        (e.subtreeFlags & Bl) !== He && t !== null ? (t.return = e, Pe = t) : rM();
      }
    }
    function rM() {
      for (; Pe !== null; ) {
        var e = Pe;
        jt(e);
        try {
          aM(e);
        } catch (a) {
          rn(e, e.return, a);
        }
        Pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function aM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & da) !== He) {
        switch (jt(e), e.tag) {
          case x:
          case ne:
          case _e:
            break;
          case R: {
            if (t !== null) {
              var o = t.memoizedProps, c = t.memoizedState, p = e.stateNode;
              e.type === e.elementType && !Ls && (p.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(e) || "instance"), p.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(e) || "instance"));
              var m = p.getSnapshotBeforeUpdate(e.elementType === e.type ? o : $i(e.type, o), c);
              {
                var g = Jw;
                m === void 0 && !g.has(e.type) && (g.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ot(e)));
              }
              p.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case D: {
            {
              var S = e.stateNode;
              UN(S.containerInfo);
            }
            break;
          }
          case z:
          case G:
          case A:
          case ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Pn();
      }
    }
    function Ai(e, t, a) {
      var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var p = c.next, m = p;
        do {
          if ((m.tag & e) === e) {
            var g = m.destroy;
            m.destroy = void 0, g !== void 0 && ((e & gr) !== Ca ? Ec(t) : (e & Xn) !== Ca && wc(t), (e & _o) !== Ca && fv(!0), sy(t, a, g), (e & _o) !== Ca && fv(!1), (e & gr) !== Ca ? bm() : (e & Xn) !== Ca && Yl());
          }
          m = m.next;
        } while (m !== p);
      }
    }
    function Cu(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next, p = c;
        do {
          if ((p.tag & e) === e) {
            (e & gr) !== Ca ? _m(t) : (e & Xn) !== Ca && Em(t);
            var m = p.create;
            (e & _o) !== Ca && fv(!0), p.destroy = m(), (e & _o) !== Ca && fv(!1), (e & gr) !== Ca ? Id() : (e & Xn) !== Ca && wm();
            {
              var g = p.destroy;
              if (g !== void 0 && typeof g != "function") {
                var S = void 0;
                (p.tag & Xn) !== He ? S = "useLayoutEffect" : (p.tag & _o) !== He ? S = "useInsertionEffect" : S = "useEffect";
                var w = void 0;
                g === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof g.then == "function" ? w = `

It looks like you wrote ` + S + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + S + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + g, y("%s must not return anything besides a function, which is used for clean-up.%s", S, w);
              }
            }
          }
          p = p.next;
        } while (p !== c);
      }
    }
    function iM(e, t) {
      if ((t.flags & lt) !== He)
        switch (t.tag) {
          case te: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, c = o.id, p = o.onPostCommit, m = Cw(), g = t.alternate === null ? "mount" : "update";
            ww() && (g = "nested-update"), typeof p == "function" && p(c, g, a, m);
            var S = t.return;
            e:
              for (; S !== null; ) {
                switch (S.tag) {
                  case D:
                    var w = S.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                  case te:
                    var C = S.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                }
                S = S.return;
              }
            break;
          }
        }
    }
    function oM(e, t, a, o) {
      if ((a.flags & lr) !== He)
        switch (a.tag) {
          case x:
          case ne:
          case _e: {
            if (!_r)
              if (a.mode & We)
                try {
                  Co(), Cu(Xn | qn, a);
                } finally {
                  wo(a);
                }
              else
                Cu(Xn | qn, a);
            break;
          }
          case R: {
            var c = a.stateNode;
            if (a.flags & lt && !_r)
              if (t === null)
                if (a.type === a.elementType && !Ls && (c.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), c.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & We)
                  try {
                    Co(), c.componentDidMount();
                  } finally {
                    wo(a);
                  }
                else
                  c.componentDidMount();
              else {
                var p = a.elementType === a.type ? t.memoizedProps : $i(a.type, t.memoizedProps), m = t.memoizedState;
                if (a.type === a.elementType && !Ls && (c.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), c.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & We)
                  try {
                    Co(), c.componentDidUpdate(p, m, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    wo(a);
                  }
                else
                  c.componentDidUpdate(p, m, c.__reactInternalSnapshotBeforeUpdate);
              }
            var g = a.updateQueue;
            g !== null && (a.type === a.elementType && !Ls && (c.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), c.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), z1(a, g, c));
            break;
          }
          case D: {
            var S = a.updateQueue;
            if (S !== null) {
              var w = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case z:
                    w = a.child.stateNode;
                    break;
                  case R:
                    w = a.child.stateNode;
                    break;
                }
              z1(a, S, w);
            }
            break;
          }
          case z: {
            var C = a.stateNode;
            if (t === null && a.flags & lt) {
              var L = a.type, k = a.memoizedProps;
              ON(C, L, k);
            }
            break;
          }
          case G:
            break;
          case A:
            break;
          case te: {
            {
              var B = a.memoizedProps, Y = B.onCommit, q = B.onRender, Ce = a.stateNode.effectDuration, Ie = Cw(), Me = t === null ? "mount" : "update";
              ww() && (Me = "nested-update"), typeof q == "function" && q(a.memoizedProps.id, Me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ie);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Me, Ce, Ie), r2(a);
                var Et = a.return;
                e:
                  for (; Et !== null; ) {
                    switch (Et.tag) {
                      case D:
                        var St = Et.stateNode;
                        St.effectDuration += Ce;
                        break e;
                      case te:
                        var U = Et.stateNode;
                        U.effectDuration += Ce;
                        break e;
                    }
                    Et = Et.return;
                  }
              }
            }
            break;
          }
          case W: {
            vM(e, a);
            break;
          }
          case ct:
          case ht:
          case Vt:
          case ze:
          case Ke:
          case pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      _r || a.flags & Pr && rC(a);
    }
    function lM(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          if (e.mode & We)
            try {
              Co(), eC(e, e.return);
            } finally {
              wo(e);
            }
          else
            eC(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && eM(e, e.return, t), tC(e, e.return);
          break;
        }
        case z: {
          tC(e, e.return);
          break;
        }
      }
    }
    function uM(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === z) {
          if (a === null) {
            a = o;
            try {
              var c = o.stateNode;
              t ? LN(c) : zN(o.stateNode, o.memoizedProps);
            } catch (m) {
              rn(e, e.return, m);
            }
          }
        } else if (o.tag === G) {
          if (a === null)
            try {
              var p = o.stateNode;
              t ? AN(p) : jN(p, o.memoizedProps);
            } catch (m) {
              rn(e, e.return, m);
            }
        } else if (!((o.tag === ze || o.tag === Ke) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          a === o && (a = null), o = o.return;
        }
        a === o && (a = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function rC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, o;
        switch (e.tag) {
          case z:
            o = a;
            break;
          default:
            o = a;
        }
        if (typeof t == "function") {
          var c;
          if (e.mode & We)
            try {
              Co(), c = t(o);
            } finally {
              wo(e);
            }
          else
            c = t(o);
          typeof c == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ot(e)), t.current = o;
      }
    }
    function sM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function aC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, aC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === z) {
          var a = e.stateNode;
          a !== null && h$(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function cM(e) {
      for (var t = e.return; t !== null; ) {
        if (iC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function iC(e) {
      return e.tag === z || e.tag === D || e.tag === A;
    }
    function oC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || iC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== z && t.tag !== G && t.tag !== it; ) {
            if (t.flags & Jt || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Jt))
            return t.stateNode;
        }
    }
    function fM(e) {
      var t = cM(e);
      switch (t.tag) {
        case z: {
          var a = t.stateNode;
          t.flags & kt && (l1(a), t.flags &= ~kt);
          var o = oC(e);
          A_(e, o, a);
          break;
        }
        case D:
        case A: {
          var c = t.stateNode.containerInfo, p = oC(e);
          L_(e, p, c);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function L_(e, t, a) {
      var o = e.tag, c = o === z || o === G;
      if (c) {
        var p = e.stateNode;
        t ? NN(a, p, t) : PN(a, p);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          L_(m, t, a);
          for (var g = m.sibling; g !== null; )
            L_(g, t, a), g = g.sibling;
        }
      }
    }
    function A_(e, t, a) {
      var o = e.tag, c = o === z || o === G;
      if (c) {
        var p = e.stateNode;
        t ? DN(a, p, t) : xN(a, p);
      } else if (o !== A) {
        var m = e.child;
        if (m !== null) {
          A_(m, t, a);
          for (var g = m.sibling; g !== null; )
            A_(g, t, a), g = g.sibling;
        }
      }
    }
    var br = null, zi = !1;
    function dM(e, t, a) {
      {
        var o = t;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case z: {
                br = o.stateNode, zi = !1;
                break e;
              }
              case D: {
                br = o.stateNode.containerInfo, zi = !0;
                break e;
              }
              case A: {
                br = o.stateNode.containerInfo, zi = !0;
                break e;
              }
            }
            o = o.return;
          }
        if (br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        lC(e, t, a), br = null, zi = !1;
      }
      sM(a);
    }
    function Ou(e, t, a) {
      for (var o = a.child; o !== null; )
        lC(e, t, o), o = o.sibling;
    }
    function lC(e, t, a) {
      switch (Fd(a), a.tag) {
        case z:
          _r || Mf(a, t);
        case G: {
          {
            var o = br, c = zi;
            br = null, Ou(e, t, a), br = o, zi = c, br !== null && (zi ? kN(br, a.stateNode) : $N(br, a.stateNode));
          }
          return;
        }
        case it: {
          br !== null && (zi ? MN(br, a.stateNode) : Q0(br, a.stateNode));
          return;
        }
        case A: {
          {
            var p = br, m = zi;
            br = a.stateNode.containerInfo, zi = !0, Ou(e, t, a), br = p, zi = m;
          }
          return;
        }
        case x:
        case ne:
        case Ae:
        case _e: {
          if (!_r) {
            var g = a.updateQueue;
            if (g !== null) {
              var S = g.lastEffect;
              if (S !== null) {
                var w = S.next, C = w;
                do {
                  var L = C, k = L.destroy, B = L.tag;
                  k !== void 0 && ((B & _o) !== Ca ? sy(a, t, k) : (B & Xn) !== Ca && (wc(a), a.mode & We ? (Co(), sy(a, t, k), wo(a)) : sy(a, t, k), Yl())), C = C.next;
                } while (C !== w);
              }
            }
          }
          Ou(e, t, a);
          return;
        }
        case R: {
          if (!_r) {
            Mf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && M_(a, t, Y);
          }
          Ou(e, t, a);
          return;
        }
        case Vt: {
          Ou(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & mt
          ) {
            var q = _r;
            _r = q || a.memoizedState !== null, Ou(e, t, a), _r = q;
          } else
            Ou(e, t, a);
          break;
        }
        default: {
          Ou(e, t, a);
          return;
        }
      }
    }
    function pM(e) {
      e.memoizedState;
    }
    function vM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var c = o.memoizedState;
          if (c !== null) {
            var p = c.dehydrated;
            p !== null && JN(p);
          }
        }
      }
    }
    function uC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Kk()), t.forEach(function(o) {
          var c = c2.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), Qn)
              if ($f !== null && kf !== null)
                cv(kf, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(c, c);
          }
        });
      }
    }
    function mM(e, t, a) {
      $f = a, kf = e, jt(t), sC(t, e), jt(t), $f = null, kf = null;
    }
    function ji(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var c = 0; c < o.length; c++) {
          var p = o[c];
          try {
            dM(e, t, p);
          } catch (S) {
            rn(p, t, S);
          }
        }
      var m = Wg();
      if (t.subtreeFlags & $r)
        for (var g = t.child; g !== null; )
          jt(g), sC(g, e), g = g.sibling;
      jt(m);
    }
    function sC(e, t, a) {
      var o = e.alternate, c = e.flags;
      switch (e.tag) {
        case x:
        case ne:
        case Ae:
        case _e: {
          if (ji(t, e), Oo(e), c & lt) {
            try {
              Ai(_o | qn, e, e.return), Cu(_o | qn, e);
            } catch (Xe) {
              rn(e, e.return, Xe);
            }
            if (e.mode & We) {
              try {
                Co(), Ai(Xn | qn, e, e.return);
              } catch (Xe) {
                rn(e, e.return, Xe);
              }
              wo(e);
            } else
              try {
                Ai(Xn | qn, e, e.return);
              } catch (Xe) {
                rn(e, e.return, Xe);
              }
          }
          return;
        }
        case R: {
          ji(t, e), Oo(e), c & Pr && o !== null && Mf(o, o.return);
          return;
        }
        case z: {
          ji(t, e), Oo(e), c & Pr && o !== null && Mf(o, o.return);
          {
            if (e.flags & kt) {
              var p = e.stateNode;
              try {
                l1(p);
              } catch (Xe) {
                rn(e, e.return, Xe);
              }
            }
            if (c & lt) {
              var m = e.stateNode;
              if (m != null) {
                var g = e.memoizedProps, S = o !== null ? o.memoizedProps : g, w = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    TN(m, C, w, S, g, e);
                  } catch (Xe) {
                    rn(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case G: {
          if (ji(t, e), Oo(e), c & lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var L = e.stateNode, k = e.memoizedProps, B = o !== null ? o.memoizedProps : k;
            try {
              RN(L, B, k);
            } catch (Xe) {
              rn(e, e.return, Xe);
            }
          }
          return;
        }
        case D: {
          if (ji(t, e), Oo(e), c & lt && o !== null) {
            var Y = o.memoizedState;
            if (Y.isDehydrated)
              try {
                ZN(t.containerInfo);
              } catch (Xe) {
                rn(e, e.return, Xe);
              }
          }
          return;
        }
        case A: {
          ji(t, e), Oo(e);
          return;
        }
        case W: {
          ji(t, e), Oo(e);
          var q = e.child;
          if (q.flags & to) {
            var Ce = q.stateNode, Ie = q.memoizedState, Me = Ie !== null;
            if (Ce.isHidden = Me, Me) {
              var Et = q.alternate !== null && q.alternate.memoizedState !== null;
              Et || qM();
            }
          }
          if (c & lt) {
            try {
              pM(e);
            } catch (Xe) {
              rn(e, e.return, Xe);
            }
            uC(e);
          }
          return;
        }
        case ze: {
          var St = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & mt
          ) {
            var U = _r;
            _r = U || St, ji(t, e), _r = U;
          } else
            ji(t, e);
          if (Oo(e), c & to) {
            var X = e.stateNode, F = e.memoizedState, se = F !== null, Oe = e;
            if (X.isHidden = se, se && !St && (Oe.mode & mt) !== Be) {
              Pe = Oe;
              for (var Se = Oe.child; Se !== null; )
                Pe = Se, yM(Se), Se = Se.sibling;
            }
            uM(Oe, se);
          }
          return;
        }
        case ct: {
          ji(t, e), Oo(e), c & lt && uC(e);
          return;
        }
        case Vt:
          return;
        default: {
          ji(t, e), Oo(e);
          return;
        }
      }
    }
    function Oo(e) {
      var t = e.flags;
      if (t & Jt) {
        try {
          fM(e);
        } catch (a) {
          rn(e, e.return, a);
        }
        e.flags &= ~Jt;
      }
      t & pa && (e.flags &= ~pa);
    }
    function hM(e, t, a) {
      $f = a, kf = t, Pe = e, cC(e, t, a), $f = null, kf = null;
    }
    function cC(e, t, a) {
      for (var o = (e.mode & mt) !== Be; Pe !== null; ) {
        var c = Pe, p = c.child;
        if (c.tag === ze && o) {
          var m = c.memoizedState !== null, g = m || uy;
          if (g) {
            z_(e, t, a);
            continue;
          } else {
            var S = c.alternate, w = S !== null && S.memoizedState !== null, C = w || _r, L = uy, k = _r;
            uy = g, _r = C, _r && !k && (Pe = c, gM(c));
            for (var B = p; B !== null; )
              Pe = B, cC(
                B,
                // New root; bubble back up to here and stop.
                t,
                a
              ), B = B.sibling;
            Pe = c, uy = L, _r = k, z_(e, t, a);
            continue;
          }
        }
        (c.subtreeFlags & lr) !== He && p !== null ? (p.return = c, Pe = p) : z_(e, t, a);
      }
    }
    function z_(e, t, a) {
      for (; Pe !== null; ) {
        var o = Pe;
        if ((o.flags & lr) !== He) {
          var c = o.alternate;
          jt(o);
          try {
            oM(t, c, o, a);
          } catch (m) {
            rn(o, o.return, m);
          }
          Pn();
        }
        if (o === e) {
          Pe = null;
          return;
        }
        var p = o.sibling;
        if (p !== null) {
          p.return = o.return, Pe = p;
          return;
        }
        Pe = o.return;
      }
    }
    function yM(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        switch (t.tag) {
          case x:
          case ne:
          case Ae:
          case _e: {
            if (t.mode & We)
              try {
                Co(), Ai(Xn, t, t.return);
              } finally {
                wo(t);
              }
            else
              Ai(Xn, t, t.return);
            break;
          }
          case R: {
            Mf(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && M_(t, t.return, o);
            break;
          }
          case z: {
            Mf(t, t.return);
            break;
          }
          case ze: {
            var c = t.memoizedState !== null;
            if (c) {
              fC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Pe = a) : fC(e);
      }
    }
    function fC(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        if (t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function gM(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        if (t.tag === ze) {
          var o = t.memoizedState !== null;
          if (o) {
            dC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Pe = a) : dC(e);
      }
    }
    function dC(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        jt(t);
        try {
          lM(t);
        } catch (o) {
          rn(t, t.return, o);
        }
        if (Pn(), t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function SM(e, t, a, o) {
      Pe = t, _M(t, e, a, o);
    }
    function _M(e, t, a, o) {
      for (; Pe !== null; ) {
        var c = Pe, p = c.child;
        (c.subtreeFlags & va) !== He && p !== null ? (p.return = c, Pe = p) : bM(e, t, a, o);
      }
    }
    function bM(e, t, a, o) {
      for (; Pe !== null; ) {
        var c = Pe;
        if ((c.flags & ln) !== He) {
          jt(c);
          try {
            EM(t, c, a, o);
          } catch (m) {
            rn(c, c.return, m);
          }
          Pn();
        }
        if (c === e) {
          Pe = null;
          return;
        }
        var p = c.sibling;
        if (p !== null) {
          p.return = c.return, Pe = p;
          return;
        }
        Pe = c.return;
      }
    }
    function EM(e, t, a, o) {
      switch (t.tag) {
        case x:
        case ne:
        case _e: {
          if (t.mode & We) {
            v_();
            try {
              Cu(gr | qn, t);
            } finally {
              p_(t);
            }
          } else
            Cu(gr | qn, t);
          break;
        }
      }
    }
    function wM(e) {
      Pe = e, CM();
    }
    function CM() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        if ((Pe.flags & $t) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var c = a[o];
              Pe = c, RM(c, e);
            }
            {
              var p = e.alternate;
              if (p !== null) {
                var m = p.child;
                if (m !== null) {
                  p.child = null;
                  do {
                    var g = m.sibling;
                    m.sibling = null, m = g;
                  } while (m !== null);
                }
              }
            }
            Pe = e;
          }
        }
        (e.subtreeFlags & va) !== He && t !== null ? (t.return = e, Pe = t) : OM();
      }
    }
    function OM() {
      for (; Pe !== null; ) {
        var e = Pe;
        (e.flags & ln) !== He && (jt(e), TM(e), Pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function TM(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          e.mode & We ? (v_(), Ai(gr | qn, e, e.return), p_(e)) : Ai(gr | qn, e, e.return);
          break;
        }
      }
    }
    function RM(e, t) {
      for (; Pe !== null; ) {
        var a = Pe;
        jt(a), PM(a, t), Pn();
        var o = a.child;
        o !== null ? (o.return = a, Pe = o) : xM(e);
      }
    }
    function xM(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.sibling, o = t.return;
        if (aC(t), t === e) {
          Pe = null;
          return;
        }
        if (a !== null) {
          a.return = o, Pe = a;
          return;
        }
        Pe = o;
      }
    }
    function PM(e, t) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          e.mode & We ? (v_(), Ai(gr, e, t), p_(e)) : Ai(gr, e, t);
          break;
        }
      }
    }
    function DM(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          try {
            Cu(Xn | qn, e);
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
      }
    }
    function NM(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          try {
            Cu(gr | qn, e);
          } catch (t) {
            rn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $M(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e: {
          try {
            Ai(Xn | qn, e, e.return);
          } catch (a) {
            rn(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && M_(e, e.return, t);
          break;
        }
      }
    }
    function kM(e) {
      switch (e.tag) {
        case x:
        case ne:
        case _e:
          try {
            Ai(gr | qn, e, e.return);
          } catch (t) {
            rn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jp = Symbol.for;
      Jp("selector.component"), Jp("selector.has_pseudo_class"), Jp("selector.role"), Jp("selector.test_id"), Jp("selector.text");
    }
    var MM = [];
    function LM() {
      MM.forEach(function(e) {
        return e();
      });
    }
    var AM = u.ReactCurrentActQueue;
    function zM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function pC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && AM.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var jM = Math.ceil, j_ = u.ReactCurrentDispatcher, U_ = u.ReactCurrentOwner, Er = u.ReactCurrentBatchConfig, Ui = u.ReactCurrentActQueue, Jn = (
      /*             */
      0
    ), vC = (
      /*               */
      1
    ), wr = (
      /*                */
      2
    ), ui = (
      /*                */
      4
    ), _l = 0, ev = 1, As = 2, cy = 3, tv = 4, mC = 5, F_ = 6, bt = Jn, ta = null, bn = null, er = Z, To = Z, H_ = mu(Z), tr = _l, nv = null, fy = Z, rv = Z, dy = Z, av = null, Oa = null, I_ = 0, hC = 500, yC = 1 / 0, UM = 500, bl = null;
    function iv() {
      yC = cn() + UM;
    }
    function gC() {
      return yC;
    }
    var py = !1, V_ = null, Lf = null, zs = !1, Tu = null, ov = Z, B_ = [], Y_ = null, FM = 50, lv = 0, W_ = null, Q_ = !1, vy = !1, HM = 50, Af = 0, my = null, uv = Gt, hy = Z, SC = !1;
    function yy() {
      return ta;
    }
    function na() {
      return (bt & (wr | ui)) !== Jn ? cn() : (uv !== Gt || (uv = cn()), uv);
    }
    function Ru(e) {
      var t = e.mode;
      if ((t & mt) === Be)
        return qe;
      if ((bt & wr) !== Jn && er !== Z)
        return Nn(er);
      var a = z$() !== A$;
      if (a) {
        if (Er.transition !== null) {
          var o = Er.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return hy === _t && (hy = Gd()), hy;
      }
      var c = ga();
      if (c !== _t)
        return c;
      var p = bN();
      return p;
    }
    function IM(e) {
      var t = e.mode;
      return (t & mt) === Be ? qe : v0();
    }
    function nr(e, t, a, o) {
      d2(), SC && y("useInsertionEffect must not schedule updates."), Q_ && (vy = !0), rl(e, a, o), (bt & wr) !== Z && e === ta ? m2(t) : (Qn && Jd(e, t, a), h2(t), e === ta && ((bt & wr) === Jn && (rv = ut(rv, a)), tr === tv && xu(e, er)), Ta(e, o), a === qe && bt === Jn && (t.mode & mt) === Be && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ui.isBatchingLegacy && (iv(), g1()));
    }
    function VM(e, t, a) {
      var o = e.current;
      o.lanes = t, rl(e, t, a), Ta(e, a);
    }
    function BM(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & wr) !== Jn
      );
    }
    function Ta(e, t) {
      var a = e.callbackNode;
      f0(e, t);
      var o = us(e, e === ta ? er : Z);
      if (o === Z) {
        a !== null && LC(a), e.callbackNode = null, e.callbackPriority = _t;
        return;
      }
      var c = Tn(o), p = e.callbackPriority;
      if (p === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ui.current !== null && a !== eb)) {
        a == null && p !== qe && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && LC(a);
      var m;
      if (c === qe)
        e.tag === hu ? (Ui.isBatchingLegacy !== null && (Ui.didScheduleLegacyUpdate = !0), S$(EC.bind(null, e))) : y1(EC.bind(null, e)), Ui.current !== null ? Ui.current.push(yu) : wN(function() {
          (bt & (wr | ui)) === Jn && yu();
        }), m = null;
      else {
        var g;
        switch (ps(o)) {
          case ur:
            g = Sc;
            break;
          case Gn:
            g = Kr;
            break;
          case Ci:
            g = Za;
            break;
          case fs:
            g = ro;
            break;
          default:
            g = Za;
            break;
        }
        m = tb(g, _C.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = m;
    }
    function _C(e, t) {
      if (dk(), uv = Gt, hy = Z, (bt & (wr | ui)) !== Jn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = wl();
      if (o && e.callbackNode !== a)
        return null;
      var c = us(e, e === ta ? er : Z);
      if (c === Z)
        return null;
      var p = !cs(e, c) && !Pm(e, c) && !t, m = p ? e2(e, c) : Sy(e, c);
      if (m !== _l) {
        if (m === As) {
          var g = Wd(e);
          g !== Z && (c = g, m = G_(e, g));
        }
        if (m === ev) {
          var S = nv;
          throw js(e, Z), xu(e, c), Ta(e, cn()), S;
        }
        if (m === F_)
          xu(e, c);
        else {
          var w = !cs(e, c), C = e.current.alternate;
          if (w && !WM(C)) {
            if (m = Sy(e, c), m === As) {
              var L = Wd(e);
              L !== Z && (c = L, m = G_(e, L));
            }
            if (m === ev) {
              var k = nv;
              throw js(e, Z), xu(e, c), Ta(e, cn()), k;
            }
          }
          e.finishedWork = C, e.finishedLanes = c, YM(e, m, c);
        }
      }
      return Ta(e, cn()), e.callbackNode === a ? _C.bind(null, e) : null;
    }
    function G_(e, t) {
      var a = av;
      if (kn(e)) {
        var o = js(e, t);
        o.flags |= vn, d$(e.containerInfo);
      }
      var c = Sy(e, t);
      if (c !== As) {
        var p = Oa;
        Oa = a, p !== null && bC(p);
      }
      return c;
    }
    function bC(e) {
      Oa === null ? Oa = e : Oa.push.apply(Oa, e);
    }
    function YM(e, t, a) {
      switch (t) {
        case _l:
        case ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case As: {
          Us(e, Oa, bl);
          break;
        }
        case cy: {
          if (xu(e, a), Vc(a) && // do not delay if we're inside an act() scope
          !AC()) {
            var o = I_ + hC - cn();
            if (o > 10) {
              var c = us(e, Z);
              if (c !== Z)
                break;
              var p = e.suspendedLanes;
              if (!nl(p, a)) {
                na(), Kd(e, p);
                break;
              }
              e.timeoutHandle = Y0(Us.bind(null, e, Oa, bl), o);
              break;
            }
          }
          Us(e, Oa, bl);
          break;
        }
        case tv: {
          if (xu(e, a), xm(a))
            break;
          if (!AC()) {
            var m = Rm(e, a), g = m, S = cn() - g, w = f2(S) - S;
            if (w > 10) {
              e.timeoutHandle = Y0(Us.bind(null, e, Oa, bl), w);
              break;
            }
          }
          Us(e, Oa, bl);
          break;
        }
        case mC: {
          Us(e, Oa, bl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function WM(e) {
      for (var t = e; ; ) {
        if (t.flags & ts) {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.stores;
            if (o !== null)
              for (var c = 0; c < o.length; c++) {
                var p = o[c], m = p.getSnapshot, g = p.value;
                try {
                  if (!xe(m(), g))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var S = t.child;
        if (t.subtreeFlags & ts && S !== null) {
          S.return = t, t = S;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function xu(e, t) {
      t = Zl(t, dy), t = Zl(t, rv), Xd(e, t);
    }
    function EC(e) {
      if (pk(), (bt & (wr | ui)) !== Jn)
        throw new Error("Should not already be working.");
      wl();
      var t = us(e, Z);
      if (!Ar(t, qe))
        return Ta(e, cn()), null;
      var a = Sy(e, t);
      if (e.tag !== hu && a === As) {
        var o = Wd(e);
        o !== Z && (t = o, a = G_(e, o));
      }
      if (a === ev) {
        var c = nv;
        throw js(e, Z), xu(e, t), Ta(e, cn()), c;
      }
      if (a === F_)
        throw new Error("Root did not complete. This is a bug in React.");
      var p = e.current.alternate;
      return e.finishedWork = p, e.finishedLanes = t, Us(e, Oa, bl), Ta(e, cn()), null;
    }
    function QM(e, t) {
      t !== Z && (Jl(e, ut(t, qe)), Ta(e, cn()), (bt & (wr | ui)) === Jn && (iv(), yu()));
    }
    function q_(e, t) {
      var a = bt;
      bt |= vC;
      try {
        return e(t);
      } finally {
        bt = a, bt === Jn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ui.isBatchingLegacy && (iv(), g1());
      }
    }
    function GM(e, t, a, o, c) {
      var p = ga(), m = Er.transition;
      try {
        return Er.transition = null, $n(ur), e(t, a, o, c);
      } finally {
        $n(p), Er.transition = m, bt === Jn && iv();
      }
    }
    function El(e) {
      Tu !== null && Tu.tag === hu && (bt & (wr | ui)) === Jn && wl();
      var t = bt;
      bt |= vC;
      var a = Er.transition, o = ga();
      try {
        return Er.transition = null, $n(ur), e ? e() : void 0;
      } finally {
        $n(o), Er.transition = a, bt = t, (bt & (wr | ui)) === Jn && yu();
      }
    }
    function wC() {
      return (bt & (wr | ui)) !== Jn;
    }
    function gy(e, t) {
      jr(H_, To, e), To = ut(To, t);
    }
    function X_(e) {
      To = H_.current, zr(H_, e);
    }
    function js(e, t) {
      e.finishedWork = null, e.finishedLanes = Z;
      var a = e.timeoutHandle;
      if (a !== W0 && (e.timeoutHandle = W0, EN(a)), bn !== null)
        for (var o = bn.return; o !== null; ) {
          var c = o.alternate;
          Zw(c, o), o = o.return;
        }
      ta = e;
      var p = Fs(e.current, null);
      return bn = p, er = To = t, tr = _l, nv = null, fy = Z, rv = Z, dy = Z, av = null, Oa = null, H$(), Ni.discardPendingWarnings(), p;
    }
    function CC(e, t) {
      do {
        var a = bn;
        try {
          if (Th(), ew(), Pn(), U_.current = null, a === null || a.return === null) {
            tr = ev, nv = t, bn = null;
            return;
          }
          if (ke && a.mode & We && ay(a, !0), nt)
            if (Qo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              Cm(a, o, er);
            } else
              Cc(a, t, er);
          gk(e, a.return, a, t, er), xC(a);
        } catch (c) {
          t = c, bn === a && a !== null ? (a = a.return, bn = a) : a = bn;
          continue;
        }
        return;
      } while (!0);
    }
    function OC() {
      var e = j_.current;
      return j_.current = Jh, e === null ? Jh : e;
    }
    function TC(e) {
      j_.current = e;
    }
    function qM() {
      I_ = cn();
    }
    function sv(e) {
      fy = ut(e, fy);
    }
    function XM() {
      tr === _l && (tr = cy);
    }
    function K_() {
      (tr === _l || tr === cy || tr === As) && (tr = tv), ta !== null && (ss(fy) || ss(rv)) && xu(ta, er);
    }
    function KM(e) {
      tr !== tv && (tr = As), av === null ? av = [e] : av.push(e);
    }
    function ZM() {
      return tr === _l;
    }
    function Sy(e, t) {
      var a = bt;
      bt |= wr;
      var o = OC();
      if (ta !== e || er !== t) {
        if (Qn) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (cv(e, er), c.clear()), Wc(e, t);
        }
        bl = ep(), js(e, t);
      }
      Fa(t);
      do
        try {
          JM();
          break;
        } catch (p) {
          CC(e, p);
        }
      while (!0);
      if (Th(), bt = a, TC(o), bn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ql(), ta = null, er = Z, tr;
    }
    function JM() {
      for (; bn !== null; )
        RC(bn);
    }
    function e2(e, t) {
      var a = bt;
      bt |= wr;
      var o = OC();
      if (ta !== e || er !== t) {
        if (Qn) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (cv(e, er), c.clear()), Wc(e, t);
        }
        bl = ep(), iv(), js(e, t);
      }
      Fa(t);
      do
        try {
          t2();
          break;
        } catch (p) {
          CC(e, p);
        }
      while (!0);
      return Th(), TC(o), bt = a, bn !== null ? (as(), _l) : (Ql(), ta = null, er = Z, tr);
    }
    function t2() {
      for (; bn !== null && !gc(); )
        RC(bn);
    }
    function RC(e) {
      var t = e.alternate;
      jt(e);
      var a;
      (e.mode & We) !== Be ? (d_(e), a = Z_(t, e, To), ay(e, !0)) : a = Z_(t, e, To), Pn(), e.memoizedProps = e.pendingProps, a === null ? xC(e) : bn = a, U_.current = null;
    }
    function xC(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & Gr) === He) {
          jt(t);
          var c = void 0;
          if ((t.mode & We) === Be ? c = Kw(a, t, To) : (d_(t), c = Kw(a, t, To), ay(t, !1)), Pn(), c !== null) {
            bn = c;
            return;
          }
        } else {
          var p = Xk(a, t);
          if (p !== null) {
            p.flags &= mm, bn = p;
            return;
          }
          if ((t.mode & We) !== Be) {
            ay(t, !1);
            for (var m = t.actualDuration, g = t.child; g !== null; )
              m += g.actualDuration, g = g.sibling;
            t.actualDuration = m;
          }
          if (o !== null)
            o.flags |= Gr, o.subtreeFlags = He, o.deletions = null;
          else {
            tr = F_, bn = null;
            return;
          }
        }
        var S = t.sibling;
        if (S !== null) {
          bn = S;
          return;
        }
        t = o, bn = t;
      } while (t !== null);
      tr === _l && (tr = mC);
    }
    function Us(e, t, a) {
      var o = ga(), c = Er.transition;
      try {
        Er.transition = null, $n(ur), n2(e, t, a, o);
      } finally {
        Er.transition = c, $n(o);
      }
      return null;
    }
    function n2(e, t, a, o) {
      do
        wl();
      while (Tu !== null);
      if (p2(), (bt & (wr | ui)) !== Jn)
        throw new Error("Should not already be working.");
      var c = e.finishedWork, p = e.finishedLanes;
      if (bc(p), c === null)
        return Hd(), null;
      if (p === Z && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Z, c === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = _t;
      var m = ut(c.lanes, c.childLanes);
      Zd(e, m), e === ta && (ta = null, bn = null, er = Z), ((c.subtreeFlags & va) !== He || (c.flags & va) !== He) && (zs || (zs = !0, Y_ = a, tb(Za, function() {
        return wl(), null;
      })));
      var g = (c.subtreeFlags & (Bl | $r | lr | va)) !== He, S = (c.flags & (Bl | $r | lr | va)) !== He;
      if (g || S) {
        var w = Er.transition;
        Er.transition = null;
        var C = ga();
        $n(ur);
        var L = bt;
        bt |= ui, U_.current = null, tM(e, c), Ow(), mM(e, c, p), mN(e.containerInfo), e.current = c, Om(p), hM(c, e, p), Wl(), gm(), bt = L, $n(C), Er.transition = w;
      } else
        e.current = c, Ow();
      var k = zs;
      if (zs ? (zs = !1, Tu = e, ov = p) : (Af = 0, my = null), m = e.pendingLanes, m === Z && (Lf = null), k || $C(e.current, !1), bi(c.stateNode, o), Qn && e.memoizedUpdaters.clear(), LM(), Ta(e, cn()), t !== null)
        for (var B = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var q = t[Y], Ce = q.stack, Ie = q.digest;
          B(q.value, {
            componentStack: Ce,
            digest: Ie
          });
        }
      if (py) {
        py = !1;
        var Me = V_;
        throw V_ = null, Me;
      }
      return Ar(ov, qe) && e.tag !== hu && wl(), m = e.pendingLanes, Ar(m, qe) ? (fk(), e === W_ ? lv++ : (lv = 0, W_ = e)) : lv = 0, yu(), Hd(), null;
    }
    function wl() {
      if (Tu !== null) {
        var e = ps(ov), t = h0(Ci, e), a = Er.transition, o = ga();
        try {
          return Er.transition = null, $n(t), a2();
        } finally {
          $n(o), Er.transition = a;
        }
      }
      return !1;
    }
    function r2(e) {
      B_.push(e), zs || (zs = !0, tb(Za, function() {
        return wl(), null;
      }));
    }
    function a2() {
      if (Tu === null)
        return !1;
      var e = Y_;
      Y_ = null;
      var t = Tu, a = ov;
      if (Tu = null, ov = Z, (bt & (wr | ui)) !== Jn)
        throw new Error("Cannot flush passive effects while already rendering.");
      Q_ = !0, vy = !1, Tm(a);
      var o = bt;
      bt |= ui, wM(t.current), SM(t, t.current, a, e);
      {
        var c = B_;
        B_ = [];
        for (var p = 0; p < c.length; p++) {
          var m = c[p];
          iM(t, m);
        }
      }
      rs(), $C(t.current, !0), bt = o, yu(), vy ? t === my ? Af++ : (Af = 0, my = t) : Af = 0, Q_ = !1, vy = !1, io(t);
      {
        var g = t.current.stateNode;
        g.effectDuration = 0, g.passiveEffectDuration = 0;
      }
      return !0;
    }
    function PC(e) {
      return Lf !== null && Lf.has(e);
    }
    function i2(e) {
      Lf === null ? Lf = /* @__PURE__ */ new Set([e]) : Lf.add(e);
    }
    function o2(e) {
      py || (py = !0, V_ = e);
    }
    var l2 = o2;
    function DC(e, t, a) {
      var o = Ms(a, t), c = Rw(e, o, qe), p = Su(e, c, qe), m = na();
      p !== null && (rl(p, qe, m), Ta(p, m));
    }
    function rn(e, t, a) {
      if (Zk(a), fv(!1), e.tag === D) {
        DC(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === D) {
          DC(o, e, a);
          return;
        } else if (o.tag === R) {
          var c = o.type, p = o.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && !PC(p)) {
            var m = Ms(a, e), g = g_(o, m, qe), S = Su(o, g, qe), w = na();
            S !== null && (rl(S, qe, w), Ta(S, w));
            return;
          }
        }
        o = o.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function u2(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var c = na();
      Kd(e, a), y2(e), ta === e && nl(er, a) && (tr === tv || tr === cy && Vc(er) && cn() - I_ < hC ? js(e, Z) : dy = ut(dy, a)), Ta(e, c);
    }
    function NC(e, t) {
      t === _t && (t = IM(e));
      var a = na(), o = wa(e, t);
      o !== null && (rl(o, t, a), Ta(o, a));
    }
    function s2(e) {
      var t = e.memoizedState, a = _t;
      t !== null && (a = t.retryLane), NC(e, a);
    }
    function c2(e, t) {
      var a = _t, o;
      switch (e.tag) {
        case W:
          o = e.stateNode;
          var c = e.memoizedState;
          c !== null && (a = c.retryLane);
          break;
        case ct:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), NC(e, a);
    }
    function f2(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : jM(e / 1960) * 1960;
    }
    function d2() {
      if (lv > FM)
        throw lv = 0, W_ = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Af > HM && (Af = 0, my = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function p2() {
      Ni.flushLegacyContextWarning(), Ni.flushPendingUnsafeLifecycleWarnings();
    }
    function $C(e, t) {
      jt(e), _y(e, Nr, $M), t && _y(e, Wo, kM), _y(e, Nr, DM), t && _y(e, Wo, NM), Pn();
    }
    function _y(e, t, a) {
      for (var o = e, c = null; o !== null; ) {
        var p = o.subtreeFlags & t;
        o !== c && o.child !== null && p !== He ? o = o.child : ((o.flags & t) !== He && a(o), o.sibling !== null ? o = o.sibling : o = c = o.return);
      }
    }
    var by = null;
    function kC(e) {
      {
        if ((bt & wr) !== Jn || !(e.mode & mt))
          return;
        var t = e.tag;
        if (t !== $ && t !== D && t !== R && t !== x && t !== ne && t !== Ae && t !== _e)
          return;
        var a = ot(e) || "ReactComponent";
        if (by !== null) {
          if (by.has(a))
            return;
          by.add(a);
        } else
          by = /* @__PURE__ */ new Set([a]);
        var o = Cn;
        try {
          jt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? jt(e) : Pn();
        }
      }
    }
    var Z_;
    {
      var v2 = null;
      Z_ = function(e, t, a) {
        var o = HC(v2, t);
        try {
          return Ww(e, t, a);
        } catch (p) {
          if (R$() || p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (Th(), ew(), Zw(e, t), HC(t, o), t.mode & We && d_(t), Yo(null, Ww, null, e, t, a), s0()) {
            var c = Dd();
            typeof c == "object" && c !== null && c._suppressLogging && typeof p == "object" && p !== null && !p._suppressLogging && (p._suppressLogging = !0);
          }
          throw p;
        }
      };
    }
    var MC = !1, J_;
    J_ = /* @__PURE__ */ new Set();
    function m2(e) {
      if (ua && !uk())
        switch (e.tag) {
          case x:
          case ne:
          case _e: {
            var t = bn && ot(bn) || "Unknown", a = t;
            if (!J_.has(a)) {
              J_.add(a);
              var o = ot(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case R: {
            MC || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), MC = !0);
            break;
          }
        }
    }
    function cv(e, t) {
      if (Qn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          Jd(e, o, t);
        });
      }
    }
    var eb = {};
    function tb(e, t) {
      {
        var a = Ui.current;
        return a !== null ? (a.push(t), eb) : yc(e, t);
      }
    }
    function LC(e) {
      if (e !== eb)
        return ym(e);
    }
    function AC() {
      return Ui.current !== null;
    }
    function h2(e) {
      {
        if (e.mode & mt) {
          if (!pC())
            return;
        } else if (!zM() || bt !== Jn || e.tag !== x && e.tag !== ne && e.tag !== _e)
          return;
        if (Ui.current === null) {
          var t = Cn;
          try {
            jt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ot(e));
          } finally {
            t ? jt(e) : Pn();
          }
        }
      }
    }
    function y2(e) {
      e.tag !== hu && pC() && Ui.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fv(e) {
      SC = e;
    }
    var si = null, zf = null, g2 = function(e) {
      si = e;
    };
    function jf(e) {
      {
        if (si === null)
          return e;
        var t = si(e);
        return t === void 0 ? e : t.current;
      }
    }
    function nb(e) {
      return jf(e);
    }
    function rb(e) {
      {
        if (si === null)
          return e;
        var t = si(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = jf(e.render);
            if (e.render !== a) {
              var o = {
                $$typeof: Ve,
                render: a
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function zC(e, t) {
      {
        if (si === null)
          return !1;
        var a = e.elementType, o = t.type, c = !1, p = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof o == "function" && (c = !0);
            break;
          }
          case x: {
            (typeof o == "function" || p === Ye) && (c = !0);
            break;
          }
          case ne: {
            (p === Ve || p === Ye) && (c = !0);
            break;
          }
          case Ae:
          case _e: {
            (p === ft || p === Ye) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var m = si(a);
          if (m !== void 0 && m === si(o))
            return !0;
        }
        return !1;
      }
    }
    function jC(e) {
      {
        if (si === null || typeof WeakSet != "function")
          return;
        zf === null && (zf = /* @__PURE__ */ new WeakSet()), zf.add(e);
      }
    }
    var S2 = function(e, t) {
      {
        if (si === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        wl(), El(function() {
          ab(e.current, o, a);
        });
      }
    }, _2 = function(e, t) {
      {
        if (e.context !== Ia)
          return;
        wl(), El(function() {
          dv(t, e, null, null);
        });
      }
    };
    function ab(e, t, a) {
      {
        var o = e.alternate, c = e.child, p = e.sibling, m = e.tag, g = e.type, S = null;
        switch (m) {
          case x:
          case _e:
          case R:
            S = g;
            break;
          case ne:
            S = g.render;
            break;
        }
        if (si === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, C = !1;
        if (S !== null) {
          var L = si(S);
          L !== void 0 && (a.has(L) ? C = !0 : t.has(L) && (m === R ? C = !0 : w = !0));
        }
        if (zf !== null && (zf.has(e) || o !== null && zf.has(o)) && (C = !0), C && (e._debugNeedsRemount = !0), C || w) {
          var k = wa(e, qe);
          k !== null && nr(k, e, qe, Gt);
        }
        c !== null && !C && ab(c, t, a), p !== null && ab(p, t, a);
      }
    }
    var b2 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), o = new Set(t.map(function(c) {
          return c.current;
        }));
        return ib(e.current, o, a), a;
      }
    };
    function ib(e, t, a) {
      {
        var o = e.child, c = e.sibling, p = e.tag, m = e.type, g = null;
        switch (p) {
          case x:
          case _e:
          case R:
            g = m;
            break;
          case ne:
            g = m.render;
            break;
        }
        var S = !1;
        g !== null && t.has(g) && (S = !0), S ? E2(e, a) : o !== null && ib(o, t, a), c !== null && ib(c, t, a);
      }
    }
    function E2(e, t) {
      {
        var a = w2(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case z:
              t.add(o.stateNode);
              return;
            case A:
              t.add(o.stateNode.containerInfo);
              return;
            case D:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function w2(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === z)
          o = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return o;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return o;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ob;
    {
      ob = !1;
      try {
        var UC = Object.preventExtensions({});
      } catch {
        ob = !0;
      }
    }
    function C2(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = Z, this.childLanes = Z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ob && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Va = function(e, t, a, o) {
      return new C2(e, t, a, o);
    };
    function lb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function O2(e) {
      return typeof e == "function" && !lb(e) && e.defaultProps === void 0;
    }
    function T2(e) {
      if (typeof e == "function")
        return lb(e) ? R : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ve)
          return ne;
        if (t === ft)
          return Ae;
      }
      return $;
    }
    function Fs(e, t) {
      var a = e.alternate;
      a === null ? (a = Va(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Wn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case $:
        case x:
        case _e:
          a.type = jf(e.type);
          break;
        case R:
          a.type = nb(e.type);
          break;
        case ne:
          a.type = rb(e.type);
          break;
      }
      return a;
    }
    function R2(e, t) {
      e.flags &= Wn | Jt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Z, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var o = a.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function x2(e, t, a) {
      var o;
      return e === gh ? (o = mt, t === !0 && (o |= fn, o |= ha)) : o = Be, Qn && (o |= We), Va(D, null, null, o);
    }
    function ub(e, t, a, o, c, p) {
      var m = $, g = e;
      if (typeof e == "function")
        lb(e) ? (m = R, g = nb(g)) : g = jf(g);
      else if (typeof e == "string")
        m = z;
      else
        e:
          switch (e) {
            case ka:
              return Pu(a.children, c, p, t);
            case Yi:
              m = K, c |= fn, (c & mt) !== Be && (c |= ha);
              break;
            case P:
              return P2(a, c, p, t);
            case st:
              return D2(a, c, p, t);
            case Ot:
              return N2(a, c, p, t);
            case on:
              return FC(a, c, p, t);
            case vr:
            case zn:
            case Wi:
            case Ws:
            case an:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    m = pe;
                    break e;
                  case ge:
                    m = de;
                    break e;
                  case Ve:
                    m = ne, g = rb(g);
                    break e;
                  case ft:
                    m = Ae;
                    break e;
                  case Ye:
                    m = dt, g = null;
                    break e;
                }
              var S = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var w = o ? ot(o) : null;
                w && (S += `

Check the render method of \`` + w + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + S));
            }
          }
      var C = Va(m, a, t, c);
      return C.elementType = e, C.type = g, C.lanes = p, C._debugOwner = o, C;
    }
    function sb(e, t, a) {
      var o = null;
      o = e._owner;
      var c = e.type, p = e.key, m = e.props, g = ub(c, p, m, o, t, a);
      return g._debugSource = e._source, g._debugOwner = e._owner, g;
    }
    function Pu(e, t, a, o) {
      var c = Va(I, e, o, t);
      return c.lanes = a, c;
    }
    function P2(e, t, a, o) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = Va(te, e, o, t | We);
      return c.elementType = P, c.lanes = a, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function D2(e, t, a, o) {
      var c = Va(W, e, o, t);
      return c.elementType = st, c.lanes = a, c;
    }
    function N2(e, t, a, o) {
      var c = Va(ct, e, o, t);
      return c.elementType = Ot, c.lanes = a, c;
    }
    function FC(e, t, a, o) {
      var c = Va(ze, e, o, t);
      c.elementType = on, c.lanes = a;
      var p = {
        isHidden: !1
      };
      return c.stateNode = p, c;
    }
    function cb(e, t, a) {
      var o = Va(G, e, null, t);
      return o.lanes = a, o;
    }
    function $2() {
      var e = Va(z, null, null, Be);
      return e.elementType = "DELETED", e;
    }
    function k2(e) {
      var t = Va(it, null, null, Be);
      return t.stateNode = e, t;
    }
    function fb(e, t, a) {
      var o = e.children !== null ? e.children : [], c = Va(A, o, e.key, t);
      return c.lanes = a, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function HC(e, t) {
      return e === null && (e = Va($, null, null, Be)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function M2(e, t, a, o, c) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = W0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = _t, this.eventTimes = Yc(Z), this.expirationTimes = Yc(Gt), this.pendingLanes = Z, this.suspendedLanes = Z, this.pingedLanes = Z, this.expiredLanes = Z, this.mutableReadLanes = Z, this.finishedLanes = Z, this.entangledLanes = Z, this.entanglements = Yc(Z), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var p = this.pendingUpdatersLaneMap = [], m = 0; m < tn; m++)
          p.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case gh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function IC(e, t, a, o, c, p, m, g, S, w) {
      var C = new M2(e, t, a, g, S), L = x2(t, p);
      C.current = L, L.stateNode = C;
      {
        var k = {
          element: o,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        L.memoizedState = k;
      }
      return SS(L), C;
    }
    var db = "18.2.0";
    function L2(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Pa(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Wr,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var pb, vb;
    pb = !1, vb = {};
    function VC(e) {
      if (!e)
        return Ia;
      var t = fa(e), a = g$(t);
      if (t.tag === R) {
        var o = t.type;
        if (So(o))
          return m1(t, o, a);
      }
      return a;
    }
    function A2(e, t) {
      {
        var a = fa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var c = ma(a);
        if (c === null)
          return null;
        if (c.mode & fn) {
          var p = ot(a) || "Component";
          if (!vb[p]) {
            vb[p] = !0;
            var m = Cn;
            try {
              jt(c), a.mode & fn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, p);
            } finally {
              m ? jt(m) : Pn();
            }
          }
        }
        return c.stateNode;
      }
    }
    function BC(e, t, a, o, c, p, m, g) {
      var S = !1, w = null;
      return IC(e, t, S, w, a, o, c, p, m);
    }
    function YC(e, t, a, o, c, p, m, g, S, w) {
      var C = !0, L = IC(a, o, C, e, c, p, m, g, S);
      L.context = VC(null);
      var k = L.current, B = na(), Y = Ru(k), q = gl(B, Y);
      return q.callback = t ?? null, Su(k, q, Y), VM(L, Y, B), L;
    }
    function dv(e, t, a, o) {
      Sm(t, e);
      var c = t.current, p = na(), m = Ru(c);
      Go(m);
      var g = VC(a);
      t.context === null ? t.context = g : t.pendingContext = g, ua && Cn !== null && !pb && (pb = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ot(Cn) || "Unknown"));
      var S = gl(p, m);
      S.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), S.callback = o);
      var w = Su(c, S, m);
      return w !== null && (nr(w, c, m, p), Nh(w, c, m)), m;
    }
    function Ey(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function z2(e) {
      switch (e.tag) {
        case D: {
          var t = e.stateNode;
          if (kn(t)) {
            var a = d0(t);
            QM(t, a);
          }
          break;
        }
        case W: {
          El(function() {
            var c = wa(e, qe);
            if (c !== null) {
              var p = na();
              nr(c, e, qe, p);
            }
          });
          var o = qe;
          mb(e, o);
          break;
        }
      }
    }
    function WC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nm(a.retryLane, t));
    }
    function mb(e, t) {
      WC(e, t);
      var a = e.alternate;
      a && WC(a, t);
    }
    function j2(e) {
      if (e.tag === W) {
        var t = Gl, a = wa(e, t);
        if (a !== null) {
          var o = na();
          nr(a, e, t, o);
        }
        mb(e, t);
      }
    }
    function U2(e) {
      if (e.tag === W) {
        var t = Ru(e), a = wa(e, t);
        if (a !== null) {
          var o = na();
          nr(a, e, t, o);
        }
        mb(e, t);
      }
    }
    function QC(e) {
      var t = hm(e);
      return t === null ? null : t.stateNode;
    }
    var GC = function(e) {
      return null;
    };
    function F2(e) {
      return GC(e);
    }
    var qC = function(e) {
      return !1;
    };
    function H2(e) {
      return qC(e);
    }
    var XC = null, KC = null, ZC = null, JC = null, eO = null, tO = null, nO = null, rO = null, aO = null;
    {
      var iO = function(e, t, a) {
        var o = t[a], c = jn(e) ? e.slice() : yt({}, e);
        return a + 1 === t.length ? (jn(c) ? c.splice(o, 1) : delete c[o], c) : (c[o] = iO(e[o], t, a + 1), c);
      }, oO = function(e, t) {
        return iO(e, t, 0);
      }, lO = function(e, t, a, o) {
        var c = t[o], p = jn(e) ? e.slice() : yt({}, e);
        if (o + 1 === t.length) {
          var m = a[o];
          p[m] = p[c], jn(p) ? p.splice(c, 1) : delete p[c];
        } else
          p[c] = lO(
            // $FlowFixMe number or string is fine here
            e[c],
            t,
            a,
            o + 1
          );
        return p;
      }, uO = function(e, t, a) {
        if (t.length !== a.length) {
          E("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < a.length - 1; o++)
            if (t[o] !== a[o]) {
              E("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return lO(e, t, a, 0);
      }, sO = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var c = t[a], p = jn(e) ? e.slice() : yt({}, e);
        return p[c] = sO(e[c], t, a + 1, o), p;
      }, cO = function(e, t, a) {
        return sO(e, t, 0, a);
      }, hb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      XC = function(e, t, a, o) {
        var c = hb(e, t);
        if (c !== null) {
          var p = cO(c.memoizedState, a, o);
          c.memoizedState = p, c.baseState = p, e.memoizedProps = yt({}, e.memoizedProps);
          var m = wa(e, qe);
          m !== null && nr(m, e, qe, Gt);
        }
      }, KC = function(e, t, a) {
        var o = hb(e, t);
        if (o !== null) {
          var c = oO(o.memoizedState, a);
          o.memoizedState = c, o.baseState = c, e.memoizedProps = yt({}, e.memoizedProps);
          var p = wa(e, qe);
          p !== null && nr(p, e, qe, Gt);
        }
      }, ZC = function(e, t, a, o) {
        var c = hb(e, t);
        if (c !== null) {
          var p = uO(c.memoizedState, a, o);
          c.memoizedState = p, c.baseState = p, e.memoizedProps = yt({}, e.memoizedProps);
          var m = wa(e, qe);
          m !== null && nr(m, e, qe, Gt);
        }
      }, JC = function(e, t, a) {
        e.pendingProps = cO(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = wa(e, qe);
        o !== null && nr(o, e, qe, Gt);
      }, eO = function(e, t) {
        e.pendingProps = oO(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = wa(e, qe);
        a !== null && nr(a, e, qe, Gt);
      }, tO = function(e, t, a) {
        e.pendingProps = uO(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = wa(e, qe);
        o !== null && nr(o, e, qe, Gt);
      }, nO = function(e) {
        var t = wa(e, qe);
        t !== null && nr(t, e, qe, Gt);
      }, rO = function(e) {
        GC = e;
      }, aO = function(e) {
        qC = e;
      };
    }
    function I2(e) {
      var t = ma(e);
      return t === null ? null : t.stateNode;
    }
    function V2(e) {
      return null;
    }
    function B2() {
      return Cn;
    }
    function Y2(e) {
      var t = e.findFiberByHostInstance, a = u.ReactCurrentDispatcher;
      return Ud({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: XC,
        overrideHookStateDeletePath: KC,
        overrideHookStateRenamePath: ZC,
        overrideProps: JC,
        overridePropsDeletePath: eO,
        overridePropsRenamePath: tO,
        setErrorHandler: rO,
        setSuspenseHandler: aO,
        scheduleUpdate: nO,
        currentDispatcherRef: a,
        findHostInstanceByFiber: I2,
        findFiberByHostInstance: t || V2,
        // React Refresh
        findHostInstancesForRefresh: b2,
        scheduleRefresh: S2,
        scheduleRoot: _2,
        setRefreshHandler: g2,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: B2,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: db
      });
    }
    var fO = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function yb(e) {
      this._internalRoot = e;
    }
    wy.prototype.render = yb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Cy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== On) {
          var o = QC(t.current);
          o && o.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dv(e, t, null, null);
    }, wy.prototype.unmount = yb.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wC() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), El(function() {
          dv(null, e, null, null);
        }), c1(t);
      }
    };
    function W2(e, t) {
      if (!Cy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      dO(e);
      var a = !1, o = !1, c = "", p = fO;
      t != null && (t.hydrate ? E("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Bi && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = BC(e, gh, null, a, o, c, p);
      fh(m.current, e);
      var g = e.nodeType === On ? e.parentNode : e;
      return _p(g), new yb(m);
    }
    function wy(e) {
      this._internalRoot = e;
    }
    function Q2(e) {
      e && Um(e);
    }
    wy.prototype.unstable_scheduleHydration = Q2;
    function G2(e, t, a) {
      if (!Cy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      dO(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a ?? null, c = a != null && a.hydratedSources || null, p = !1, m = !1, g = "", S = fO;
      a != null && (a.unstable_strictMode === !0 && (p = !0), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (S = a.onRecoverableError));
      var w = YC(t, null, e, gh, o, p, m, g, S);
      if (fh(w.current, e), _p(e), c)
        for (var C = 0; C < c.length; C++) {
          var L = c[C];
          nk(w, L);
        }
      return new wy(w);
    }
    function Cy(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === za || e.nodeType === Uo || !we));
    }
    function pv(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === za || e.nodeType === Uo || e.nodeType === On && e.nodeValue === " react-mount-point-unstable "));
    }
    function dO(e) {
      e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Np(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var q2 = u.ReactCurrentOwner, pO;
    pO = function(e) {
      if (e._reactRootContainer && e.nodeType !== On) {
        var t = QC(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = gb(e), c = !!(o && vu(o));
      c && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function gb(e) {
      return e ? e.nodeType === za ? e.documentElement : e.firstChild : null;
    }
    function vO() {
    }
    function X2(e, t, a, o, c) {
      if (c) {
        if (typeof o == "function") {
          var p = o;
          o = function() {
            var k = Ey(m);
            p.call(k);
          };
        }
        var m = YC(
          t,
          o,
          e,
          hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          vO
        );
        e._reactRootContainer = m, fh(m.current, e);
        var g = e.nodeType === On ? e.parentNode : e;
        return _p(g), El(), m;
      } else {
        for (var S; S = e.lastChild; )
          e.removeChild(S);
        if (typeof o == "function") {
          var w = o;
          o = function() {
            var k = Ey(C);
            w.call(k);
          };
        }
        var C = BC(
          e,
          hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          vO
        );
        e._reactRootContainer = C, fh(C.current, e);
        var L = e.nodeType === On ? e.parentNode : e;
        return _p(L), El(function() {
          dv(t, C, a, o);
        }), C;
      }
    }
    function K2(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Oy(e, t, a, o, c) {
      pO(a), K2(c === void 0 ? null : c, "render");
      var p = a._reactRootContainer, m;
      if (!p)
        m = X2(a, t, e, c, o);
      else {
        if (m = p, typeof c == "function") {
          var g = c;
          c = function() {
            var S = Ey(m);
            g.call(S);
          };
        }
        dv(t, m, e, c);
      }
      return Ey(m);
    }
    function Z2(e) {
      {
        var t = q2.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Wt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === xr ? e : A2(e, "findDOMNode");
    }
    function J2(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Np(t) && t._reactRootContainer === void 0;
        o && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Oy(null, e, t, !0, a);
    }
    function eL(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Np(t) && t._reactRootContainer === void 0;
        o && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Oy(null, e, t, !1, a);
    }
    function tL(e, t, a, o) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !pv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !es(e))
        throw new Error("parentComponent must be a valid React Component");
      return Oy(e, t, a, !1, o);
    }
    function nL(e) {
      if (!pv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Np(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = gb(e), o = a && !vu(a);
          o && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return El(function() {
          Oy(null, null, e, !1, function() {
            e._reactRootContainer = null, c1(e);
          });
        }), !0;
      } else {
        {
          var c = gb(e), p = !!(c && vu(c)), m = e.nodeType === xr && pv(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Te(z2), km(j2), ms(U2), np(ga), Lm(ds), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), pm(iN), dc(q_, GM, El);
    function rL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Cy(t))
        throw new Error("Target container is not a DOM element.");
      return L2(e, t, null, a);
    }
    function aL(e, t, a, o) {
      return tL(e, t, a, o);
    }
    var Sb = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [vu, mf, dh, fc, Ku, q_]
    };
    function iL(e, t) {
      return Sb.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), W2(e, t);
    }
    function oL(e, t, a) {
      return Sb.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), G2(e, t, a);
    }
    function lL(e) {
      return wC() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), El(e);
    }
    var uL = Y2({
      findFiberByHostInstance: Os,
      bundleType: 1,
      version: db,
      rendererPackageName: "react-dom"
    });
    if (!uL && Lt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mO = window.location.protocol;
      /^(https?|file):$/.test(mO) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mO === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sb, xa.createPortal = rL, xa.createRoot = iL, xa.findDOMNode = Z2, xa.flushSync = lL, xa.hydrate = J2, xa.hydrateRoot = oL, xa.render = eL, xa.unmountComponentAtNode = nL, xa.unstable_batchedUpdates = q_, xa.unstable_renderSubtreeIntoContainer = aL, xa.version = db, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function Rx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rx);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (Rx(), aE.exports = Dj()) : aE.exports = Nj();
var xx = aE.exports, $j = Object.defineProperty, kj = Object.defineProperties, Mj = Object.getOwnPropertyDescriptors, Hy = Object.getOwnPropertySymbols, Px = Object.prototype.hasOwnProperty, Dx = Object.prototype.propertyIsEnumerable, fT = (i, l, u) => l in i ? $j(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Hs = (i, l) => {
  for (var u in l || (l = {}))
    Px.call(l, u) && fT(i, u, l[u]);
  if (Hy)
    for (var u of Hy(l))
      Dx.call(l, u) && fT(i, u, l[u]);
  return i;
}, kb = (i, l) => kj(i, Mj(l)), Lj = (i, l) => {
  var u = {};
  for (var d in i)
    Px.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Hy)
    for (var d of Hy(i))
      l.indexOf(d) < 0 && Dx.call(i, d) && (u[d] = i[d]);
  return u;
};
function Aj(i) {
  if (!i || typeof i == "string")
    return 0;
  const l = i / 36;
  return Math.round((4 + 15 * l ** 0.25 + l / 5) * 10);
}
function Mb(i) {
  return i != null && i.current ? i.current.scrollHeight : "auto";
}
const gv = typeof window < "u" && window.requestAnimationFrame;
function zj({
  transitionDuration: i,
  transitionTimingFunction: l = "ease",
  onTransitionEnd: u = () => {
  },
  opened: d
}) {
  const _ = No(null), E = 0, y = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [O, x] = Or(d ? {} : y), R = (G) => {
    xx.flushSync(() => x(G));
  }, $ = (G) => {
    R((I) => Hs(Hs({}, I), G));
  };
  function D(G) {
    return {
      transition: `height ${i || Aj(G)}ms ${l}`
    };
  }
  mE(() => {
    typeof gv == "function" && gv(d ? () => {
      $({ willChange: "height", display: "block", overflow: "hidden" }), gv(() => {
        const G = Mb(_);
        $(kb(Hs({}, D(G)), { height: G }));
      });
    } : () => {
      const G = Mb(_);
      $(kb(Hs({}, D(G)), { willChange: "height", height: G })), gv(() => $({ height: E, overflow: "hidden" }));
    });
  }, [d]);
  const A = (G) => {
    if (!(G.target !== _.current || G.propertyName !== "height"))
      if (d) {
        const I = Mb(_);
        I === O.height ? R({}) : $({ height: I }), u();
      } else
        O.height === E && (R(y), u());
  };
  function z(G = {}) {
    var I = G, { style: K = {}, refKey: de = "ref" } = I, pe = Lj(I, ["style", "refKey"]);
    const ne = pe[de];
    return kb(Hs({
      "aria-hidden": !d
    }, pe), {
      [de]: dx(_, ne),
      onTransitionEnd: A,
      style: Hs(Hs({ boxSizing: "border-box" }, K), O)
    });
  }
  return z;
}
var jj = Object.defineProperty, Iy = Object.getOwnPropertySymbols, Nx = Object.prototype.hasOwnProperty, $x = Object.prototype.propertyIsEnumerable, dT = (i, l, u) => l in i ? jj(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Lb = (i, l) => {
  for (var u in l || (l = {}))
    Nx.call(l, u) && dT(i, u, l[u]);
  if (Iy)
    for (var u of Iy(l))
      $x.call(l, u) && dT(i, u, l[u]);
  return i;
}, Uj = (i, l) => {
  var u = {};
  for (var d in i)
    Nx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Iy)
    for (var d of Iy(i))
      l.indexOf(d) < 0 && $x.call(i, d) && (u[d] = i[d]);
  return u;
};
const Fj = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, kx = Tr((i, l) => {
  const u = Xt("Collapse", Fj, i), {
    children: d,
    in: _,
    transitionDuration: E,
    transitionTimingFunction: y,
    style: O,
    onTransitionEnd: x,
    animateOpacity: R
  } = u, $ = Uj(u, [
    "children",
    "in",
    "transitionDuration",
    "transitionTimingFunction",
    "style",
    "onTransitionEnd",
    "animateOpacity"
  ]), D = Nu(), A = yE(), G = (D.respectReducedMotion ? A : !1) ? 0 : E, I = zj({
    opened: _,
    transitionDuration: G,
    transitionTimingFunction: y,
    onTransitionEnd: x
  });
  return G === 0 ? _ ? /* @__PURE__ */ ee.createElement(qt, Lb({}, $), d) : null : /* @__PURE__ */ ee.createElement(qt, Lb({}, I(Lb({ style: yx(O, D), ref: l }, $))), /* @__PURE__ */ ee.createElement(
    "div",
    {
      style: {
        opacity: _ || !R ? 1 : 0,
        transition: R ? `opacity ${G}ms ${y}` : "none"
      }
    },
    d
  ));
});
kx.displayName = "@mantine/core/Collapse";
var Hj = { root: "m-87cf2631" };
const Mx = Hj;
var Ij = Object.defineProperty, Vj = Object.defineProperties, Bj = Object.getOwnPropertyDescriptors, Vy = Object.getOwnPropertySymbols, Lx = Object.prototype.hasOwnProperty, Ax = Object.prototype.propertyIsEnumerable, pT = (i, l, u) => l in i ? Ij(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, vT = (i, l) => {
  for (var u in l || (l = {}))
    Lx.call(l, u) && pT(i, u, l[u]);
  if (Vy)
    for (var u of Vy(l))
      Ax.call(l, u) && pT(i, u, l[u]);
  return i;
}, Yj = (i, l) => Vj(i, Bj(l)), Wj = (i, l) => {
  var u = {};
  for (var d in i)
    Lx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Vy)
    for (var d of Vy(i))
      l.indexOf(d) < 0 && Ax.call(i, d) && (u[d] = i[d]);
  return u;
};
const Qj = {
  __staticSelector: "UnstyledButton"
}, Kf = Xf(
  (i, l) => {
    const u = Xt("UnstyledButton", Qj, i), d = u, {
      className: _,
      component: E = "button",
      __staticSelector: y,
      unstyled: O,
      classNames: x,
      styles: R,
      style: $
    } = d, D = Wj(d, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]), A = Wa({
      name: y,
      props: u,
      classes: Mx,
      className: _,
      style: $,
      classNames: x,
      styles: R,
      unstyled: O
    });
    return /* @__PURE__ */ ee.createElement(
      qt,
      vT(Yj(vT({}, A("root", { focusable: !0 })), {
        component: E,
        ref: l,
        type: E === "button" ? "button" : void 0
      }), D)
    );
  }
);
Kf.classes = Mx;
Kf.displayName = "@mantine/core/UnstyledButton";
var Gj = { root: "m-1b7284a3" };
const zx = Gj;
var qj = Object.defineProperty, Xj = Object.defineProperties, Kj = Object.getOwnPropertyDescriptors, By = Object.getOwnPropertySymbols, jx = Object.prototype.hasOwnProperty, Ux = Object.prototype.propertyIsEnumerable, mT = (i, l, u) => l in i ? qj(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, hT = (i, l) => {
  for (var u in l || (l = {}))
    jx.call(l, u) && mT(i, u, l[u]);
  if (By)
    for (var u of By(l))
      Ux.call(l, u) && mT(i, u, l[u]);
  return i;
}, Zj = (i, l) => Xj(i, Kj(l)), Jj = (i, l) => {
  var u = {};
  for (var d in i)
    jx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && By)
    for (var d of By(i))
      l.indexOf(d) < 0 && Ux.call(i, d) && (u[d] = i[d]);
  return u;
};
const e3 = {}, t3 = (i, { radius: l, shadow: u }) => ({
  root: {
    "--paper-radius": l === void 0 ? void 0 : Bs(l),
    "--paper-shadow": nx(u)
  }
}), gE = Xf((i, l) => {
  const u = Xt("Paper", e3, i), d = u, {
    classNames: _,
    className: E,
    style: y,
    styles: O,
    unstyled: x,
    withBorder: R,
    vars: $,
    radius: D,
    shadow: A,
    variant: z
  } = d, G = Jj(d, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "withBorder",
    "vars",
    "radius",
    "shadow",
    "variant"
  ]), I = Wa({
    name: "Paper",
    props: u,
    classes: zx,
    className: E,
    style: y,
    classNames: _,
    styles: O,
    unstyled: x,
    vars: $,
    varsResolver: t3
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    hT(Zj(hT({
      ref: l,
      mod: { "data-with-border": R }
    }, I("root")), {
      variant: z
    }), G)
  );
});
gE.classes = zx;
gE.displayName = "@mantine/core/Paper";
var yT = Object.getOwnPropertySymbols, n3 = Object.prototype.hasOwnProperty, r3 = Object.prototype.propertyIsEnumerable, a3 = (i, l) => {
  var u = {};
  for (var d in i)
    n3.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && yT)
    for (var d of yT(i))
      l.indexOf(d) < 0 && r3.call(i, d) && (u[d] = i[d]);
  return u;
};
function i3(i) {
  const l = document.createElement("div");
  return l.setAttribute("data-portal", "true"), typeof i.className == "string" && l.classList.add(...i.className.split(" ")), typeof i.style == "object" && Object.assign(l.style, i.style), typeof i.id == "string" && l.setAttribute("id", i.id), l;
}
const o3 = {}, Fx = Tr((i, l) => {
  const u = Xt("Portal", o3, i), { children: d, target: _ } = u, E = a3(u, ["children", "target"]), [y, O] = Or(!1), x = No(null);
  return Mg(() => (O(!0), x.current = _ ? typeof _ == "string" ? document.querySelector(_) : _ : i3(E), fx(l, x.current), !_ && x.current && document.body.appendChild(x.current), () => {
    !_ && x.current && document.body.removeChild(x.current);
  }), [_]), !y || !x.current ? null : xx.createPortal(/* @__PURE__ */ ee.createElement(ee.Fragment, null, d), x.current);
});
Fx.displayName = "@mantine/core/Portal";
var l3 = Object.defineProperty, Yy = Object.getOwnPropertySymbols, Hx = Object.prototype.hasOwnProperty, Ix = Object.prototype.propertyIsEnumerable, gT = (i, l, u) => l in i ? l3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, u3 = (i, l) => {
  for (var u in l || (l = {}))
    Hx.call(l, u) && gT(i, u, l[u]);
  if (Yy)
    for (var u of Yy(l))
      Ix.call(l, u) && gT(i, u, l[u]);
  return i;
}, s3 = (i, l) => {
  var u = {};
  for (var d in i)
    Hx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Yy)
    for (var d of Yy(i))
      l.indexOf(d) < 0 && Ix.call(i, d) && (u[d] = i[d]);
  return u;
};
function Vx(i) {
  var l = i, { withinPortal: u = !0, children: d } = l, _ = s3(l, ["withinPortal", "children"]);
  return u ? /* @__PURE__ */ ee.createElement(Fx, u3({}, _), d) : /* @__PURE__ */ ee.createElement(ee.Fragment, null, d);
}
Vx.displayName = "@mantine/core/OptionalPortal";
var c3 = Object.defineProperty, f3 = Object.defineProperties, d3 = Object.getOwnPropertyDescriptors, ST = Object.getOwnPropertySymbols, p3 = Object.prototype.hasOwnProperty, v3 = Object.prototype.propertyIsEnumerable, _T = (i, l, u) => l in i ? c3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Sv = (i, l) => {
  for (var u in l || (l = {}))
    p3.call(l, u) && _T(i, u, l[u]);
  if (ST)
    for (var u of ST(l))
      v3.call(l, u) && _T(i, u, l[u]);
  return i;
}, _v = (i, l) => f3(i, d3(l));
const bv = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${ue(10)})` },
  transitionProperty: "transform, opacity"
}, Ny = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(-${ue(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${ue(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${ue(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${ue(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: _v(Sv({}, bv), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": _v(Sv({}, bv), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": _v(Sv({}, bv), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": _v(Sv({}, bv), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": _v(Sv({}, bv), {
    common: { transformOrigin: "top right" }
  })
};
var m3 = Object.defineProperty, bT = Object.getOwnPropertySymbols, h3 = Object.prototype.hasOwnProperty, y3 = Object.prototype.propertyIsEnumerable, ET = (i, l, u) => l in i ? m3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Yf = (i, l) => {
  for (var u in l || (l = {}))
    h3.call(l, u) && ET(i, u, l[u]);
  if (bT)
    for (var u of bT(l))
      y3.call(l, u) && ET(i, u, l[u]);
  return i;
};
const wT = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function g3({
  transition: i,
  state: l,
  duration: u,
  timingFunction: d
}) {
  const _ = {
    transitionDuration: `${u}ms`,
    transitionTimingFunction: d
  };
  return typeof i == "string" ? i in Ny ? Yf(Yf(Yf({
    transitionProperty: Ny[i].transitionProperty
  }, _), Ny[i].common), Ny[i][wT[l]]) : {} : Yf(Yf(Yf({
    transitionProperty: i.transitionProperty
  }, _), i.common), i[wT[l]]);
}
function S3({
  duration: i,
  exitDuration: l,
  timingFunction: u,
  mounted: d,
  onEnter: _,
  onExit: E,
  onEntered: y,
  onExited: O
}) {
  const x = Nu(), R = yE(), $ = x.respectReducedMotion ? R : !1, [D, A] = Or($ ? 0 : i), [z, G] = Or(d ? "entered" : "exited"), I = No(-1), K = (de) => {
    const pe = de ? _ : E, ne = de ? y : O;
    G(de ? "pre-entering" : "pre-exiting"), window.clearTimeout(I.current);
    const te = $ ? 0 : de ? i : l;
    if (A(te), te === 0)
      typeof pe == "function" && pe(), typeof ne == "function" && ne(), G(de ? "entered" : "exited");
    else {
      const W = window.setTimeout(() => {
        typeof pe == "function" && pe(), G(de ? "entering" : "exiting");
      }, 10);
      I.current = window.setTimeout(() => {
        window.clearTimeout(W), typeof ne == "function" && ne(), G(de ? "entered" : "exited");
      }, te);
    }
  };
  return mE(() => {
    K(d);
  }, [d]), ci(() => () => window.clearTimeout(I.current), []), {
    transitionDuration: D,
    transitionStatus: z,
    transitionTimingFunction: u || "ease"
  };
}
function SE({
  keepMounted: i,
  transition: l = "fade",
  duration: u = 250,
  exitDuration: d = u,
  mounted: _,
  children: E,
  timingFunction: y = "ease",
  onExit: O,
  onEntered: x,
  onEnter: R,
  onExited: $
}) {
  const { transitionDuration: D, transitionStatus: A, transitionTimingFunction: z } = S3({
    mounted: _,
    exitDuration: d,
    duration: u,
    timingFunction: y,
    onExit: O,
    onEntered: x,
    onEnter: R,
    onExited: $
  });
  return D === 0 ? _ ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, E({})) : i ? E({ display: "none" }) : null : A === "exited" ? i ? E({ display: "none" }) : null : /* @__PURE__ */ ee.createElement(ee.Fragment, null, E(
    g3({
      transition: l,
      duration: D,
      state: A,
      timingFunction: z
    })
  ));
}
SE.displayName = "@mantine/core/Transition";
function Bx({
  children: i,
  active: l = !0,
  refProp: u = "ref"
}) {
  const d = gz(l), _ = Ez(d, i == null ? void 0 : i.ref);
  return dA(i) ? pL(i, { [u]: _ }) : i;
}
Bx.displayName = "@mantine/core/FocusTrap";
var _3 = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const Fi = _3;
var b3 = Object.defineProperty, E3 = Object.defineProperties, w3 = Object.getOwnPropertyDescriptors, Wy = Object.getOwnPropertySymbols, Yx = Object.prototype.hasOwnProperty, Wx = Object.prototype.propertyIsEnumerable, CT = (i, l, u) => l in i ? b3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, C3 = (i, l) => {
  for (var u in l || (l = {}))
    Yx.call(l, u) && CT(i, u, l[u]);
  if (Wy)
    for (var u of Wy(l))
      Wx.call(l, u) && CT(i, u, l[u]);
  return i;
}, O3 = (i, l) => E3(i, w3(l)), T3 = (i, l) => {
  var u = {};
  for (var d in i)
    Yx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Wy)
    for (var d of Wy(i))
      l.indexOf(d) < 0 && Wx.call(i, d) && (u[d] = i[d]);
  return u;
};
const R3 = Tr((i, l) => {
  var u = i, { className: d } = u, _ = T3(u, ["className"]);
  return /* @__PURE__ */ ee.createElement(qt, O3(C3({ component: "span", className: Ya(Fi.barsLoader, d) }, _), { ref: l }), /* @__PURE__ */ ee.createElement("span", { className: Fi.bar }), /* @__PURE__ */ ee.createElement("span", { className: Fi.bar }), /* @__PURE__ */ ee.createElement("span", { className: Fi.bar }));
});
var x3 = Object.defineProperty, P3 = Object.defineProperties, D3 = Object.getOwnPropertyDescriptors, Qy = Object.getOwnPropertySymbols, Qx = Object.prototype.hasOwnProperty, Gx = Object.prototype.propertyIsEnumerable, OT = (i, l, u) => l in i ? x3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, N3 = (i, l) => {
  for (var u in l || (l = {}))
    Qx.call(l, u) && OT(i, u, l[u]);
  if (Qy)
    for (var u of Qy(l))
      Gx.call(l, u) && OT(i, u, l[u]);
  return i;
}, $3 = (i, l) => P3(i, D3(l)), k3 = (i, l) => {
  var u = {};
  for (var d in i)
    Qx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Qy)
    for (var d of Qy(i))
      l.indexOf(d) < 0 && Gx.call(i, d) && (u[d] = i[d]);
  return u;
};
const M3 = Tr((i, l) => {
  var u = i, { className: d } = u, _ = k3(u, ["className"]);
  return /* @__PURE__ */ ee.createElement(qt, $3(N3({ component: "span", className: Ya(Fi.ovalLoader, d) }, _), { ref: l }));
});
var L3 = Object.defineProperty, A3 = Object.defineProperties, z3 = Object.getOwnPropertyDescriptors, Gy = Object.getOwnPropertySymbols, qx = Object.prototype.hasOwnProperty, Xx = Object.prototype.propertyIsEnumerable, TT = (i, l, u) => l in i ? L3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, j3 = (i, l) => {
  for (var u in l || (l = {}))
    qx.call(l, u) && TT(i, u, l[u]);
  if (Gy)
    for (var u of Gy(l))
      Xx.call(l, u) && TT(i, u, l[u]);
  return i;
}, U3 = (i, l) => A3(i, z3(l)), F3 = (i, l) => {
  var u = {};
  for (var d in i)
    qx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Gy)
    for (var d of Gy(i))
      l.indexOf(d) < 0 && Xx.call(i, d) && (u[d] = i[d]);
  return u;
};
const H3 = Tr((i, l) => {
  var u = i, { className: d } = u, _ = F3(u, ["className"]);
  return /* @__PURE__ */ ee.createElement(qt, U3(j3({ component: "span", className: Ya(Fi.dotsLoader, d) }, _), { ref: l }), /* @__PURE__ */ ee.createElement("span", { className: Fi.dot }), /* @__PURE__ */ ee.createElement("span", { className: Fi.dot }), /* @__PURE__ */ ee.createElement("span", { className: Fi.dot }));
});
var I3 = Object.defineProperty, V3 = Object.defineProperties, B3 = Object.getOwnPropertyDescriptors, qy = Object.getOwnPropertySymbols, Kx = Object.prototype.hasOwnProperty, Zx = Object.prototype.propertyIsEnumerable, RT = (i, l, u) => l in i ? I3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, xT = (i, l) => {
  for (var u in l || (l = {}))
    Kx.call(l, u) && RT(i, u, l[u]);
  if (qy)
    for (var u of qy(l))
      Zx.call(l, u) && RT(i, u, l[u]);
  return i;
}, Y3 = (i, l) => V3(i, B3(l)), W3 = (i, l) => {
  var u = {};
  for (var d in i)
    Kx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && qy)
    for (var d of qy(i))
      l.indexOf(d) < 0 && Zx.call(i, d) && (u[d] = i[d]);
  return u;
};
const Q3 = {
  bars: R3,
  oval: M3,
  dots: H3
}, G3 = {
  loaders: Q3,
  type: "oval"
}, q3 = (i, { size: l, color: u }) => ({
  root: {
    "--loader-size": Ii(l, "loader-size"),
    "--loader-color": u ? Vs(u, i) : void 0
  }
}), _E = rr((i, l) => {
  const u = Xt("Loader", G3, i), d = u, {
    size: _,
    color: E,
    type: y,
    vars: O,
    className: x,
    style: R,
    classNames: $,
    styles: D,
    unstyled: A,
    loaders: z,
    variant: G
  } = d, I = W3(d, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]), K = Wa({
    name: "Loader",
    props: u,
    classes: Fi,
    className: x,
    style: R,
    classNames: $,
    styles: D,
    unstyled: A,
    vars: O,
    varsResolver: q3
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    xT(Y3(xT({}, K("root")), {
      ref: l,
      component: z[y],
      variant: G,
      size: _
    }), I)
  );
});
_E.classes = Fi;
_E.displayName = "@mantine/core/Loader";
var X3 = Object.defineProperty, K3 = Object.defineProperties, Z3 = Object.getOwnPropertyDescriptors, Xy = Object.getOwnPropertySymbols, Jx = Object.prototype.hasOwnProperty, eP = Object.prototype.propertyIsEnumerable, PT = (i, l, u) => l in i ? X3(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, DT = (i, l) => {
  for (var u in l || (l = {}))
    Jx.call(l, u) && PT(i, u, l[u]);
  if (Xy)
    for (var u of Xy(l))
      eP.call(l, u) && PT(i, u, l[u]);
  return i;
}, J3 = (i, l) => K3(i, Z3(l)), eU = (i, l) => {
  var u = {};
  for (var d in i)
    Jx.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Xy)
    for (var d of Xy(i))
      l.indexOf(d) < 0 && eP.call(i, d) && (u[d] = i[d]);
  return u;
};
const tP = Tr(
  (i, l) => {
    var u = i, { size: d = "var(--cb-icon-size, 70%)", style: _ } = u, E = eU(u, ["size", "style"]);
    return /* @__PURE__ */ ee.createElement(
      "svg",
      DT({
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: J3(DT({}, _), { width: d, height: d }),
        ref: l
      }, E),
      /* @__PURE__ */ ee.createElement(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    );
  }
);
tP.displayName = "@mantine/core/CloseIcon";
var tU = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const nP = tU;
var nU = Object.defineProperty, rU = Object.defineProperties, aU = Object.getOwnPropertyDescriptors, Ky = Object.getOwnPropertySymbols, rP = Object.prototype.hasOwnProperty, aP = Object.prototype.propertyIsEnumerable, NT = (i, l, u) => l in i ? nU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, $T = (i, l) => {
  for (var u in l || (l = {}))
    rP.call(l, u) && NT(i, u, l[u]);
  if (Ky)
    for (var u of Ky(l))
      aP.call(l, u) && NT(i, u, l[u]);
  return i;
}, iU = (i, l) => rU(i, aU(l)), oU = (i, l) => {
  var u = {};
  for (var d in i)
    rP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Ky)
    for (var d of Ky(i))
      l.indexOf(d) < 0 && aP.call(i, d) && (u[d] = i[d]);
  return u;
};
const lU = {
  variant: "subtle"
}, uU = (i, { size: l, radius: u, iconSize: d }) => ({
  root: {
    "--cb-size": Ii(l, "cb-size"),
    "--cb-radius": u === void 0 ? void 0 : Bs(u),
    "--cb-icon-size": ue(d)
  }
}), bE = Xf((i, l) => {
  const u = Xt("CloseButton", lU, i), d = u, {
    iconSize: _,
    children: E,
    vars: y,
    radius: O,
    className: x,
    classNames: R,
    style: $,
    styles: D,
    unstyled: A,
    "data-disabled": z,
    disabled: G,
    variant: I
  } = d, K = oU(d, [
    "iconSize",
    "children",
    "vars",
    "radius",
    "className",
    "classNames",
    "style",
    "styles",
    "unstyled",
    "data-disabled",
    "disabled",
    "variant"
  ]), de = Wa({
    name: "CloseButton",
    props: u,
    className: x,
    style: $,
    classes: nP,
    classNames: R,
    styles: D,
    unstyled: A,
    vars: y,
    varsResolver: uU
  });
  return /* @__PURE__ */ ee.createElement(
    Kf,
    $T(iU($T({
      ref: l
    }, K), {
      unstyled: A,
      variant: I,
      disabled: G,
      mod: { disabled: G || z }
    }), de("root", { variant: I, active: !0 })),
    /* @__PURE__ */ ee.createElement(tP, null),
    E
  );
});
bE.classes = nP;
bE.displayName = "@mantine/core/CloseButton";
function sU(i) {
  return vL.toArray(i).filter(Boolean);
}
var cU = { root: "m-4081bf90" };
const iP = cU;
var fU = Object.defineProperty, dU = Object.defineProperties, pU = Object.getOwnPropertyDescriptors, Zy = Object.getOwnPropertySymbols, oP = Object.prototype.hasOwnProperty, lP = Object.prototype.propertyIsEnumerable, kT = (i, l, u) => l in i ? fU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, MT = (i, l) => {
  for (var u in l || (l = {}))
    oP.call(l, u) && kT(i, u, l[u]);
  if (Zy)
    for (var u of Zy(l))
      lP.call(l, u) && kT(i, u, l[u]);
  return i;
}, vU = (i, l) => dU(i, pU(l)), mU = (i, l) => {
  var u = {};
  for (var d in i)
    oP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Zy)
    for (var d of Zy(i))
      l.indexOf(d) < 0 && lP.call(i, d) && (u[d] = i[d]);
  return u;
};
const hU = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, yU = (i, { grow: l, preventGrowOverflow: u, gap: d, align: _, justify: E, wrap: y }, { childWidth: O }) => ({
  root: {
    "--group-child-width": l && u ? O : void 0,
    "--group-gap": uE(d),
    "--group-align": _,
    "--group-justify": E,
    "--group-wrap": y
  }
}), EE = rr((i, l) => {
  const u = Xt("Group", hU, i), d = u, {
    classNames: _,
    className: E,
    style: y,
    styles: O,
    unstyled: x,
    children: R,
    gap: $,
    align: D,
    justify: A,
    wrap: z,
    grow: G,
    preventGrowOverflow: I,
    vars: K,
    variant: de,
    __size: pe
  } = d, ne = mU(d, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]), te = sU(R), W = te.length, Ae = uE($ ?? "md"), dt = { childWidth: `calc(${100 / W}% - (${Ae} - ${Ae} / ${W}))` }, ht = Wa({
    name: "Group",
    props: u,
    stylesCtx: dt,
    className: E,
    style: y,
    classes: iP,
    classNames: _,
    styles: O,
    unstyled: x,
    vars: K,
    varsResolver: yU
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    MT(vU(MT({}, ht("root")), {
      ref: l,
      variant: de,
      mod: { grow: G },
      size: pe
    }), ne),
    te
  );
});
EE.classes = iP;
EE.displayName = "@mantine/core/Group";
var gU = { root: "m-9814e45f" };
const uP = gU;
var SU = Object.defineProperty, _U = Object.defineProperties, bU = Object.getOwnPropertyDescriptors, Jy = Object.getOwnPropertySymbols, sP = Object.prototype.hasOwnProperty, cP = Object.prototype.propertyIsEnumerable, LT = (i, l, u) => l in i ? SU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, AT = (i, l) => {
  for (var u in l || (l = {}))
    sP.call(l, u) && LT(i, u, l[u]);
  if (Jy)
    for (var u of Jy(l))
      cP.call(l, u) && LT(i, u, l[u]);
  return i;
}, EU = (i, l) => _U(i, bU(l)), wU = (i, l) => {
  var u = {};
  for (var d in i)
    sP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Jy)
    for (var d of Jy(i))
      l.indexOf(d) < 0 && cP.call(i, d) && (u[d] = i[d]);
  return u;
};
const CU = {
  zIndex: kg("modal")
}, OU = (i, { gradient: l, color: u, backgroundOpacity: d, blur: _, radius: E, zIndex: y }) => ({
  root: {
    "--overlay-bg": l || (u !== void 0 || d !== void 0) && ia(u || "#000", d ?? 0.6) || void 0,
    "--overlay-filter": _ ? `blur(${ue(_)})` : void 0,
    "--overlay-radius": E === void 0 ? void 0 : Bs(E),
    "--overlay-z-index": y == null ? void 0 : y.toString()
  }
}), wE = Xf((i, l) => {
  const u = Xt("Overlay", CU, i), d = u, {
    classNames: _,
    className: E,
    style: y,
    styles: O,
    unstyled: x,
    vars: R,
    fixed: $,
    center: D,
    children: A,
    radius: z,
    zIndex: G,
    gradient: I,
    blur: K,
    color: de,
    backgroundOpacity: pe
  } = d, ne = wU(d, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "fixed",
    "center",
    "children",
    "radius",
    "zIndex",
    "gradient",
    "blur",
    "color",
    "backgroundOpacity"
  ]), te = Wa({
    name: "Overlay",
    props: u,
    classes: uP,
    className: E,
    style: y,
    classNames: _,
    styles: O,
    unstyled: x,
    vars: R,
    varsResolver: OU
  });
  return /* @__PURE__ */ ee.createElement(qt, AT(EU(AT({ ref: l }, te("root")), { mod: { center: D, fixed: $ } }), ne), A);
});
wE.classes = uP;
wE.displayName = "@mantine/core/Overlay";
const [TU, Tl] = Cv(
  "ModalBase component was not found in tree"
);
function RU({ opened: i, transitionDuration: l }) {
  const [u, d] = Or(i), _ = No(), y = yE() ? 0 : l;
  return ci(() => (i ? (d(!0), window.clearTimeout(_.current)) : y === 0 ? d(!1) : _.current = window.setTimeout(() => d(!1), y), () => window.clearTimeout(_.current)), [i, y]), u;
}
function xU({
  id: i,
  transitionProps: l,
  opened: u,
  trapFocus: d,
  closeOnEscape: _,
  onClose: E,
  returnFocus: y
}) {
  const O = hE(i), [x, R] = Or(!1), [$, D] = Or(!1), A = typeof (l == null ? void 0 : l.duration) == "number" ? l == null ? void 0 : l.duration : 200, z = RU({ opened: u, transitionDuration: A });
  return bz("keydown", (G) => {
    !d && G.key === "Escape" && _ && E();
  }), fz({ opened: u, shouldReturnFocus: d && y }), {
    _id: O,
    titleMounted: x,
    bodyMounted: $,
    shouldLockScroll: z,
    setTitleMounted: R,
    setBodyMounted: D
  };
}
var PU = Object.defineProperty, DU = Object.defineProperties, NU = Object.getOwnPropertyDescriptors, eg = Object.getOwnPropertySymbols, fP = Object.prototype.hasOwnProperty, dP = Object.prototype.propertyIsEnumerable, zT = (i, l, u) => l in i ? PU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, $y = (i, l) => {
  for (var u in l || (l = {}))
    fP.call(l, u) && zT(i, u, l[u]);
  if (eg)
    for (var u of eg(l))
      dP.call(l, u) && zT(i, u, l[u]);
  return i;
}, ky = (i, l) => DU(i, NU(l)), $U = (i, l) => {
  var u = {};
  for (var d in i)
    fP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && eg)
    for (var d of eg(i))
      l.indexOf(d) < 0 && dP.call(i, d) && (u[d] = i[d]);
  return u;
};
const kU = Tr(
  (i, l) => {
    var u = i, {
      keepMounted: d,
      opened: _,
      onClose: E,
      id: y,
      transitionProps: O,
      trapFocus: x,
      closeOnEscape: R,
      returnFocus: $,
      closeOnClickOutside: D,
      withinPortal: A,
      portalProps: z,
      lockScroll: G,
      children: I,
      zIndex: K,
      shadow: de,
      padding: pe,
      __vars: ne,
      unstyled: te
    } = u, W = $U(u, [
      "keepMounted",
      "opened",
      "onClose",
      "id",
      "transitionProps",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "closeOnClickOutside",
      "withinPortal",
      "portalProps",
      "lockScroll",
      "children",
      "zIndex",
      "shadow",
      "padding",
      "__vars",
      "unstyled"
    ]);
    const { _id: Ae, titleMounted: _e, bodyMounted: dt, shouldLockScroll: ht, setTitleMounted: it, setBodyMounted: ct } = xU({ id: y, transitionProps: O, opened: _, trapFocus: x, closeOnEscape: R, onClose: E, returnFocus: $ });
    return /* @__PURE__ */ ee.createElement(Vx, ky($y({}, z), { withinPortal: A }), /* @__PURE__ */ ee.createElement(
      TU,
      {
        value: {
          opened: _,
          onClose: E,
          closeOnClickOutside: D,
          transitionProps: ky($y({}, O), { keepMounted: d }),
          getTitleId: () => `${Ae}-title`,
          getBodyId: () => `${Ae}-body`,
          titleMounted: _e,
          bodyMounted: dt,
          setTitleMounted: it,
          setBodyMounted: ct,
          trapFocus: x,
          closeOnEscape: R,
          zIndex: K,
          unstyled: te
        }
      },
      /* @__PURE__ */ ee.createElement(aA, { enabled: ht && G }, /* @__PURE__ */ ee.createElement(
        qt,
        ky($y({
          ref: l
        }, W), {
          __vars: ky($y({}, ne), {
            "--mb-z-index": (K || kg("modal")).toString(),
            "--mb-shadow": nx(de),
            "--mb-padding": uE(pe)
          })
        }),
        I
      ))
    ));
  }
);
function MU() {
  const i = Tl();
  return ci(() => (i.setBodyMounted(!0), () => i.setBodyMounted(!1)), []), i.getBodyId();
}
var LU = { title: "m-615af6c9", header: "m-b5489c3c", inner: "m-60c222c7", content: "m-fd1ab0aa", close: "m-606cb269", body: "m-5df29311" };
const Gf = LU;
var AU = Object.defineProperty, zU = Object.defineProperties, jU = Object.getOwnPropertyDescriptors, tg = Object.getOwnPropertySymbols, pP = Object.prototype.hasOwnProperty, vP = Object.prototype.propertyIsEnumerable, jT = (i, l, u) => l in i ? AU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, UU = (i, l) => {
  for (var u in l || (l = {}))
    pP.call(l, u) && jT(i, u, l[u]);
  if (tg)
    for (var u of tg(l))
      vP.call(l, u) && jT(i, u, l[u]);
  return i;
}, FU = (i, l) => zU(i, jU(l)), HU = (i, l) => {
  var u = {};
  for (var d in i)
    pP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && tg)
    for (var d of tg(i))
      l.indexOf(d) < 0 && vP.call(i, d) && (u[d] = i[d]);
  return u;
};
const mP = Tr(
  (i, l) => {
    var u = i, { className: d } = u, _ = HU(u, ["className"]);
    const E = MU(), y = Tl();
    return /* @__PURE__ */ ee.createElement(
      qt,
      FU(UU({
        ref: l
      }, _), {
        id: E,
        className: Ya({ [Gf.body]: !y.unstyled }, d)
      })
    );
  }
);
mP.displayName = "@mantine/core/ModalBaseBody";
var IU = Object.defineProperty, VU = Object.defineProperties, BU = Object.getOwnPropertyDescriptors, ng = Object.getOwnPropertySymbols, hP = Object.prototype.hasOwnProperty, yP = Object.prototype.propertyIsEnumerable, UT = (i, l, u) => l in i ? IU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, YU = (i, l) => {
  for (var u in l || (l = {}))
    hP.call(l, u) && UT(i, u, l[u]);
  if (ng)
    for (var u of ng(l))
      yP.call(l, u) && UT(i, u, l[u]);
  return i;
}, WU = (i, l) => VU(i, BU(l)), QU = (i, l) => {
  var u = {};
  for (var d in i)
    hP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && ng)
    for (var d of ng(i))
      l.indexOf(d) < 0 && yP.call(i, d) && (u[d] = i[d]);
  return u;
};
const gP = Tr(
  (i, l) => {
    var u = i, { className: d, onClick: _ } = u, E = QU(u, ["className", "onClick"]);
    const y = Tl();
    return /* @__PURE__ */ ee.createElement(
      bE,
      WU(YU({
        ref: l
      }, E), {
        onClick: (O) => {
          y.onClose(), _ == null || _(O);
        },
        className: Ya({ [Gf.close]: !y.unstyled }, d),
        unstyled: y.unstyled
      })
    );
  }
);
gP.displayName = "@mantine/core/ModalBaseCloseButton";
var GU = Object.defineProperty, qU = Object.defineProperties, XU = Object.getOwnPropertyDescriptors, rg = Object.getOwnPropertySymbols, SP = Object.prototype.hasOwnProperty, _P = Object.prototype.propertyIsEnumerable, FT = (i, l, u) => l in i ? GU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, My = (i, l) => {
  for (var u in l || (l = {}))
    SP.call(l, u) && FT(i, u, l[u]);
  if (rg)
    for (var u of rg(l))
      _P.call(l, u) && FT(i, u, l[u]);
  return i;
}, HT = (i, l) => qU(i, XU(l)), KU = (i, l) => {
  var u = {};
  for (var d in i)
    SP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && rg)
    for (var d of rg(i))
      l.indexOf(d) < 0 && _P.call(i, d) && (u[d] = i[d]);
  return u;
};
const ZU = Tr(
  (i, l) => {
    var u = i, { transitionProps: d, className: _, innerProps: E, onKeyDown: y, style: O } = u, x = KU(u, ["transitionProps", "className", "innerProps", "onKeyDown", "style"]);
    const R = Tl(), $ = (D) => {
      var A;
      ((A = D.target) == null ? void 0 : A.getAttribute("data-mantine-stop-propagation")) !== "true" && D.key === "Escape" && R.closeOnEscape && R.onClose(), y == null || y(D);
    };
    return /* @__PURE__ */ ee.createElement(
      SE,
      My(My({
        mounted: R.opened,
        transition: "pop"
      }, R.transitionProps), d),
      (D) => /* @__PURE__ */ ee.createElement(
        "div",
        HT(My({}, E), {
          className: Ya({ [Gf.inner]: !R.unstyled }, E.className)
        }),
        /* @__PURE__ */ ee.createElement(Bx, { active: R.opened && R.trapFocus }, /* @__PURE__ */ ee.createElement(
          gE,
          HT(My({}, x), {
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": !0,
            "aria-describedby": R.bodyMounted ? R.getBodyId() : void 0,
            "aria-labelledby": R.titleMounted ? R.getTitleId() : void 0,
            onKeyDown: $,
            ref: l,
            style: [O, D],
            className: Ya({ [Gf.content]: !R.unstyled }, _),
            unstyled: R.unstyled
          }),
          x.children
        ))
      )
    );
  }
);
var JU = Object.defineProperty, ag = Object.getOwnPropertySymbols, bP = Object.prototype.hasOwnProperty, EP = Object.prototype.propertyIsEnumerable, IT = (i, l, u) => l in i ? JU(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, e4 = (i, l) => {
  for (var u in l || (l = {}))
    bP.call(l, u) && IT(i, u, l[u]);
  if (ag)
    for (var u of ag(l))
      EP.call(l, u) && IT(i, u, l[u]);
  return i;
}, t4 = (i, l) => {
  var u = {};
  for (var d in i)
    bP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && ag)
    for (var d of ag(i))
      l.indexOf(d) < 0 && EP.call(i, d) && (u[d] = i[d]);
  return u;
};
const wP = Tr(
  (i, l) => {
    var u = i, { className: d } = u, _ = t4(u, ["className"]);
    const E = Tl();
    return /* @__PURE__ */ ee.createElement(qt, e4({ ref: l, className: Ya({ [Gf.header]: !E.unstyled }, d) }, _));
  }
);
wP.displayName = "@mantine/core/ModalBaseHeader";
var n4 = Object.defineProperty, VT = Object.getOwnPropertySymbols, r4 = Object.prototype.hasOwnProperty, a4 = Object.prototype.propertyIsEnumerable, BT = (i, l, u) => l in i ? n4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Ab = (i, l) => {
  for (var u in l || (l = {}))
    r4.call(l, u) && BT(i, u, l[u]);
  if (VT)
    for (var u of VT(l))
      a4.call(l, u) && BT(i, u, l[u]);
  return i;
};
const i4 = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function o4(i) {
  const l = Tl();
  return Ab(Ab(Ab({}, i4), l.transitionProps), i);
}
var l4 = Object.defineProperty, u4 = Object.defineProperties, s4 = Object.getOwnPropertyDescriptors, ig = Object.getOwnPropertySymbols, CP = Object.prototype.hasOwnProperty, OP = Object.prototype.propertyIsEnumerable, YT = (i, l, u) => l in i ? l4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, WT = (i, l) => {
  for (var u in l || (l = {}))
    CP.call(l, u) && YT(i, u, l[u]);
  if (ig)
    for (var u of ig(l))
      OP.call(l, u) && YT(i, u, l[u]);
  return i;
}, c4 = (i, l) => u4(i, s4(l)), f4 = (i, l) => {
  var u = {};
  for (var d in i)
    CP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && ig)
    for (var d of ig(i))
      l.indexOf(d) < 0 && OP.call(i, d) && (u[d] = i[d]);
  return u;
};
const TP = Tr(
  (i, l) => {
    var u = i, { onClick: d, transitionProps: _, style: E } = u, y = f4(u, ["onClick", "transitionProps", "style"]);
    const O = Tl(), x = o4(_);
    return /* @__PURE__ */ ee.createElement(SE, c4(WT({ mounted: O.opened }, x), { transition: "fade" }), (R) => /* @__PURE__ */ ee.createElement(
      wE,
      WT({
        ref: l,
        fixed: !0,
        style: [E, R],
        zIndex: O.zIndex,
        unstyled: O.unstyled,
        onClick: ($) => {
          d == null || d($), O.closeOnClickOutside && O.onClose();
        }
      }, y)
    ));
  }
);
TP.displayName = "@mantine/core/ModalBaseOverlay";
function d4() {
  const i = Tl();
  return ci(() => (i.setTitleMounted(!0), () => i.setTitleMounted(!1)), []), i.getTitleId();
}
var p4 = Object.defineProperty, v4 = Object.defineProperties, m4 = Object.getOwnPropertyDescriptors, og = Object.getOwnPropertySymbols, RP = Object.prototype.hasOwnProperty, xP = Object.prototype.propertyIsEnumerable, QT = (i, l, u) => l in i ? p4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, h4 = (i, l) => {
  for (var u in l || (l = {}))
    RP.call(l, u) && QT(i, u, l[u]);
  if (og)
    for (var u of og(l))
      xP.call(l, u) && QT(i, u, l[u]);
  return i;
}, y4 = (i, l) => v4(i, m4(l)), g4 = (i, l) => {
  var u = {};
  for (var d in i)
    RP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && og)
    for (var d of og(i))
      l.indexOf(d) < 0 && xP.call(i, d) && (u[d] = i[d]);
  return u;
};
const PP = Tr(
  (i, l) => {
    var u = i, { className: d } = u, _ = g4(u, ["className"]);
    const E = d4(), y = Tl();
    return /* @__PURE__ */ ee.createElement(
      qt,
      y4(h4({
        component: "h2",
        ref: l,
        className: Ya({ [Gf.title]: !y.unstyled }, d)
      }, _), {
        id: E
      })
    );
  }
);
PP.displayName = "@mantine/core/ModalBaseTitle";
function S4({ children: i }) {
  return /* @__PURE__ */ ee.createElement(ee.Fragment, null, i);
}
var _4 = Object.defineProperty, b4 = Object.defineProperties, E4 = Object.getOwnPropertyDescriptors, lg = Object.getOwnPropertySymbols, DP = Object.prototype.hasOwnProperty, NP = Object.prototype.propertyIsEnumerable, GT = (i, l, u) => l in i ? _4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, qT = (i, l) => {
  for (var u in l || (l = {}))
    DP.call(l, u) && GT(i, u, l[u]);
  if (lg)
    for (var u of lg(l))
      NP.call(l, u) && GT(i, u, l[u]);
  return i;
}, w4 = (i, l) => b4(i, E4(l)), C4 = (i, l) => {
  var u = {};
  for (var d in i)
    DP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && lg)
    for (var d of lg(i))
      l.indexOf(d) < 0 && NP.call(i, d) && (u[d] = i[d]);
  return u;
};
function CE(i) {
  var l = i, { style: u, size: d = 16 } = l, _ = C4(l, ["style", "size"]);
  return /* @__PURE__ */ ee.createElement(
    "svg",
    qT({
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: w4(qT({}, u), { width: ue(d), height: ue(d), display: "block" })
    }, _),
    /* @__PURE__ */ ee.createElement(
      "path",
      {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    )
  );
}
CE.displayName = "@mantine/core/AccordionChevron";
const [O4, OE] = Cv(
  "Accordion component was not found in the tree"
), [T4, $P] = Cv("Accordion.Item component was not found in the tree");
var R4 = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const Ov = R4;
var x4 = Object.defineProperty, ug = Object.getOwnPropertySymbols, kP = Object.prototype.hasOwnProperty, MP = Object.prototype.propertyIsEnumerable, XT = (i, l, u) => l in i ? x4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, KT = (i, l) => {
  for (var u in l || (l = {}))
    kP.call(l, u) && XT(i, u, l[u]);
  if (ug)
    for (var u of ug(l))
      MP.call(l, u) && XT(i, u, l[u]);
  return i;
}, P4 = (i, l) => {
  var u = {};
  for (var d in i)
    kP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && ug)
    for (var d of ug(i))
      l.indexOf(d) < 0 && MP.call(i, d) && (u[d] = i[d]);
  return u;
};
const D4 = {}, TE = rr((i, l) => {
  const u = Xt(
    "AccordionItem",
    D4,
    i
  ), { classNames: d, className: _, style: E, styles: y, vars: O, value: x } = u, R = P4(u, ["classNames", "className", "style", "styles", "vars", "value"]), $ = OE();
  return /* @__PURE__ */ ee.createElement(T4, { value: { value: x } }, /* @__PURE__ */ ee.createElement(
    qt,
    KT(KT({
      ref: l,
      mod: { active: $.isItemActive(x) }
    }, $.getStyles("item", { className: _, classNames: d, styles: y, style: E, variant: $.variant })), R)
  ));
});
TE.displayName = "@mantine/core/AccordionItem";
TE.classes = Ov;
var N4 = Object.defineProperty, $4 = Object.defineProperties, k4 = Object.getOwnPropertyDescriptors, sg = Object.getOwnPropertySymbols, LP = Object.prototype.hasOwnProperty, AP = Object.prototype.propertyIsEnumerable, ZT = (i, l, u) => l in i ? N4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, zb = (i, l) => {
  for (var u in l || (l = {}))
    LP.call(l, u) && ZT(i, u, l[u]);
  if (sg)
    for (var u of sg(l))
      AP.call(l, u) && ZT(i, u, l[u]);
  return i;
}, M4 = (i, l) => $4(i, k4(l)), L4 = (i, l) => {
  var u = {};
  for (var d in i)
    LP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && sg)
    for (var d of sg(i))
      l.indexOf(d) < 0 && AP.call(i, d) && (u[d] = i[d]);
  return u;
};
const A4 = {}, RE = rr((i, l) => {
  var u;
  const d = Xt(
    "AccordionPanel",
    A4,
    i
  ), { classNames: _, className: E, style: y, styles: O, vars: x, children: R } = d, $ = L4(d, ["classNames", "className", "style", "styles", "vars", "children"]), { value: D } = $P(), A = OE();
  return /* @__PURE__ */ ee.createElement(
    kx,
    M4(zb(zb({
      ref: l
    }, A.getStyles("panel", { className: E, classNames: _, style: y, styles: O })), $), {
      in: A.isItemActive(D),
      transitionDuration: (u = A.transitionDuration) != null ? u : 200,
      role: "region",
      id: A.getRegionId(D),
      "aria-labelledby": A.getControlId(D)
    }),
    /* @__PURE__ */ ee.createElement("div", zb({}, A.getStyles("content", { classNames: _, styles: O })), R)
  );
});
RE.displayName = "@mantine/core/AccordionPanel";
RE.classes = Ov;
var z4 = Object.defineProperty, j4 = Object.defineProperties, U4 = Object.getOwnPropertyDescriptors, cg = Object.getOwnPropertySymbols, zP = Object.prototype.hasOwnProperty, jP = Object.prototype.propertyIsEnumerable, JT = (i, l, u) => l in i ? z4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Wf = (i, l) => {
  for (var u in l || (l = {}))
    zP.call(l, u) && JT(i, u, l[u]);
  if (cg)
    for (var u of cg(l))
      jP.call(l, u) && JT(i, u, l[u]);
  return i;
}, F4 = (i, l) => j4(i, U4(l)), H4 = (i, l) => {
  var u = {};
  for (var d in i)
    zP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && cg)
    for (var d of cg(i))
      l.indexOf(d) < 0 && jP.call(i, d) && (u[d] = i[d]);
  return u;
};
const I4 = {}, xE = rr((i, l) => {
  const u = Xt("AccordionControl", I4, i), {
    classNames: d,
    className: _,
    style: E,
    styles: y,
    vars: O,
    chevron: x,
    icon: R,
    onClick: $,
    onKeyDown: D,
    children: A,
    disabled: z
  } = u, G = H4(u, [
    "classNames",
    "className",
    "style",
    "styles",
    "vars",
    "chevron",
    "icon",
    "onClick",
    "onKeyDown",
    "children",
    "disabled"
  ]), { value: I } = $P(), K = OE(), de = K.isItemActive(I), pe = typeof K.order == "number", ne = `h${K.order}`, te = /* @__PURE__ */ ee.createElement(
    Kf,
    F4(Wf(Wf({}, G), K.getStyles("control", { className: _, classNames: d, style: E, styles: y, variant: K.variant })), {
      unstyled: K.unstyled,
      mod: [
        "accordion-control",
        { active: de, "chevron-position": K.chevronPosition, disabled: z }
      ],
      ref: l,
      onClick: (W) => {
        $ == null || $(W), K.onChange(I);
      },
      type: "button",
      disabled: z,
      "aria-expanded": de,
      "aria-controls": K.getRegionId(I),
      id: K.getControlId(I),
      onKeyDown: tx({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: K.loop,
        orientation: "vertical",
        onKeyDown: D
      })
    }),
    /* @__PURE__ */ ee.createElement(
      qt,
      Wf({
        component: "span",
        mod: { rotate: !K.disableChevronRotation && de, position: K.chevronPosition }
      }, K.getStyles("chevron", { classNames: d, styles: y })),
      x || K.chevron
    ),
    /* @__PURE__ */ ee.createElement("span", Wf({}, K.getStyles("label", { classNames: d, styles: y })), A),
    R && /* @__PURE__ */ ee.createElement(
      qt,
      Wf({
        component: "span",
        mod: { "chevron-position": K.chevronPosition }
      }, K.getStyles("icon", { classNames: d, styles: y })),
      R
    )
  );
  return pe ? /* @__PURE__ */ ee.createElement(ne, Wf({}, K.getStyles("itemTitle", { classNames: d, styles: y })), te) : te;
});
xE.displayName = "@mantine/core/AccordionControl";
xE.classes = Ov;
var V4 = Object.defineProperty, B4 = Object.defineProperties, Y4 = Object.getOwnPropertyDescriptors, fg = Object.getOwnPropertySymbols, UP = Object.prototype.hasOwnProperty, FP = Object.prototype.propertyIsEnumerable, eR = (i, l, u) => l in i ? V4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, tR = (i, l) => {
  for (var u in l || (l = {}))
    UP.call(l, u) && eR(i, u, l[u]);
  if (fg)
    for (var u of fg(l))
      FP.call(l, u) && eR(i, u, l[u]);
  return i;
}, nR = (i, l) => B4(i, Y4(l)), W4 = (i, l) => {
  var u = {};
  for (var d in i)
    UP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && fg)
    for (var d of fg(i))
      l.indexOf(d) < 0 && FP.call(i, d) && (u[d] = i[d]);
  return u;
};
const Q4 = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ ee.createElement(CE, null)
}, G4 = (i, { transitionDuration: l, chevronSize: u, radius: d }) => ({
  root: {
    "--accordion-transition-duration": l === void 0 ? void 0 : `${l}ms`,
    "--accordion-chevron-size": u === void 0 ? void 0 : ue(u),
    "--accordion-radius": d === void 0 ? void 0 : Bs(d)
  }
});
function Hi(i) {
  const l = Xt("Accordion", Q4, i), u = l, {
    classNames: d,
    className: _,
    style: E,
    styles: y,
    unstyled: O,
    vars: x,
    children: R,
    multiple: $,
    value: D,
    defaultValue: A,
    onChange: z,
    id: G,
    loop: I,
    transitionDuration: K,
    disableChevronRotation: de,
    chevronPosition: pe,
    chevronSize: ne,
    order: te,
    chevron: W,
    variant: Ae,
    radius: _e
  } = u, dt = W4(u, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "children",
    "multiple",
    "value",
    "defaultValue",
    "onChange",
    "id",
    "loop",
    "transitionDuration",
    "disableChevronRotation",
    "chevronPosition",
    "chevronSize",
    "order",
    "chevron",
    "variant",
    "radius"
  ]), ht = hE(G), [it, ct] = px({
    value: D,
    defaultValue: A,
    finalValue: $ ? [] : null,
    onChange: z
  }), Vt = (Ct) => Array.isArray(it) ? it.includes(Ct) : Ct === it, ze = (Ct) => {
    const pt = Array.isArray(it) ? it.includes(Ct) ? it.filter((Bt) => Bt !== Ct) : [...it, Ct] : Ct === it ? null : Ct;
    ct(pt);
  }, Ke = Wa({
    name: "Accordion",
    classes: Ov,
    props: l,
    className: _,
    style: E,
    classNames: d,
    styles: y,
    unstyled: O,
    vars: x,
    varsResolver: G4
  });
  return /* @__PURE__ */ ee.createElement(
    O4,
    {
      value: {
        isItemActive: Vt,
        onChange: ze,
        getControlId: jy(
          `${ht}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: jy(
          `${ht}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: K,
        disableChevronRotation: de,
        chevronPosition: pe,
        order: te,
        chevron: W,
        loop: I,
        getStyles: Ke,
        variant: Ae,
        unstyled: O
      }
    },
    /* @__PURE__ */ ee.createElement(qt, nR(tR(nR(tR({}, Ke("root")), { id: ht }), dt), { variant: Ae, "data-accordion": !0 }), R)
  );
}
const q4 = (i) => i;
Hi.extend = q4;
Hi.classes = Ov;
Hi.displayName = "@mantine/core/Accordion";
Hi.Item = TE;
Hi.Panel = RE;
Hi.Control = xE;
Hi.Chevron = CE;
var X4 = { root: "m-b6d8b162" };
const HP = X4;
var K4 = Object.defineProperty, Z4 = Object.defineProperties, J4 = Object.getOwnPropertyDescriptors, dg = Object.getOwnPropertySymbols, IP = Object.prototype.hasOwnProperty, VP = Object.prototype.propertyIsEnumerable, rR = (i, l, u) => l in i ? K4(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, aR = (i, l) => {
  for (var u in l || (l = {}))
    IP.call(l, u) && rR(i, u, l[u]);
  if (dg)
    for (var u of dg(l))
      VP.call(l, u) && rR(i, u, l[u]);
  return i;
}, eF = (i, l) => Z4(i, J4(l)), tF = (i, l) => {
  var u = {};
  for (var d in i)
    IP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && dg)
    for (var d of dg(i))
      l.indexOf(d) < 0 && VP.call(i, d) && (u[d] = i[d]);
  return u;
};
function nF(i) {
  if (i === "start")
    return "start";
  if (i === "end" || i)
    return "end";
}
const rF = {
  inherit: !1
}, aF = (i, { variant: l, lineClamp: u, gradient: d, size: _, color: E }) => ({
  root: {
    "--text-fz": Kb(_),
    "--text-lh": yA(_),
    "--text-gradient": l === "gradient" ? eE(d, i) : void 0,
    "--text-line-clamp": typeof u == "number" ? u.toString() : void 0,
    "--text-color": E ? Vs(E, i) : void 0
  }
}), pg = Xf((i, l) => {
  const u = Xt("Text", rF, i), d = u, {
    lineClamp: _,
    truncate: E,
    inline: y,
    inherit: O,
    gradient: x,
    span: R,
    __staticSelector: $,
    vars: D,
    className: A,
    style: z,
    classNames: G,
    styles: I,
    unstyled: K,
    variant: de,
    mod: pe,
    size: ne
  } = d, te = tF(d, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]), W = Wa({
    name: ["Text", $],
    props: u,
    classes: HP,
    className: A,
    style: z,
    classNames: G,
    styles: I,
    unstyled: K,
    vars: D,
    varsResolver: aF
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    aR(eF(aR({}, W("root", { focusable: !0 })), {
      ref: l,
      component: R ? "span" : "p",
      variant: de,
      mod: [
        {
          "data-truncate": nF(E),
          "data-line-clamp": typeof _ == "number",
          "data-inline": y,
          "data-inherit": O
        },
        pe
      ],
      size: ne
    }), te)
  );
});
pg.classes = HP;
pg.displayName = "@mantine/core/Text";
var iF = { root: "m-77c9d27d", inner: "m-80f1301b", label: "m-811560b9", section: "m-a74036a", loader: "m-a25b86ee", group: "m-80d6d844" };
const Lg = iF;
var oF = Object.defineProperty, lF = Object.defineProperties, uF = Object.getOwnPropertyDescriptors, vg = Object.getOwnPropertySymbols, BP = Object.prototype.hasOwnProperty, YP = Object.prototype.propertyIsEnumerable, iR = (i, l, u) => l in i ? oF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, oR = (i, l) => {
  for (var u in l || (l = {}))
    BP.call(l, u) && iR(i, u, l[u]);
  if (vg)
    for (var u of vg(l))
      YP.call(l, u) && iR(i, u, l[u]);
  return i;
}, sF = (i, l) => lF(i, uF(l)), cF = (i, l) => {
  var u = {};
  for (var d in i)
    BP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && vg)
    for (var d of vg(i))
      l.indexOf(d) < 0 && YP.call(i, d) && (u[d] = i[d]);
  return u;
};
const lR = {
  orientation: "horizontal"
}, fF = (i, { borderWidth: l }) => ({
  group: { "--button-border-width": ue(l) }
}), PE = rr((i, l) => {
  const u = Xt("ButtonGroup", lR, i), d = Xt("ButtonGroup", lR, i), {
    className: _,
    style: E,
    classNames: y,
    styles: O,
    unstyled: x,
    orientation: R,
    vars: $,
    borderWidth: D,
    variant: A
  } = d, z = cF(d, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]), G = Wa({
    name: "ButtonGroup",
    props: u,
    classes: Lg,
    className: _,
    style: E,
    classNames: y,
    styles: O,
    unstyled: x,
    vars: $,
    varsResolver: fF,
    rootSelector: "group"
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    oR(sF(oR({}, G("group")), {
      ref: l,
      variant: A,
      mod: { "data-orientation": R },
      role: "group"
    }), z)
  );
});
PE.classes = Lg;
PE.displayName = "@mantine/core/ButtonGroup";
var dF = Object.defineProperty, pF = Object.defineProperties, vF = Object.getOwnPropertyDescriptors, mg = Object.getOwnPropertySymbols, WP = Object.prototype.hasOwnProperty, QP = Object.prototype.propertyIsEnumerable, uR = (i, l, u) => l in i ? dF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Du = (i, l) => {
  for (var u in l || (l = {}))
    WP.call(l, u) && uR(i, u, l[u]);
  if (mg)
    for (var u of mg(l))
      QP.call(l, u) && uR(i, u, l[u]);
  return i;
}, jb = (i, l) => pF(i, vF(l)), mF = (i, l) => {
  var u = {};
  for (var d in i)
    WP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && mg)
    for (var d of mg(i))
      l.indexOf(d) < 0 && QP.call(i, d) && (u[d] = i[d]);
  return u;
};
const hF = {}, yF = (i, { radius: l, color: u, gradient: d, variant: _, size: E, justify: y }) => {
  const O = i.variantColorResolver({
    color: u || i.primaryColor,
    theme: i,
    gradient: d,
    variant: _ || "filled"
  });
  return {
    root: {
      "--button-justify": y,
      "--button-height": Ii(E, "button-height"),
      "--button-padding-x": Ii(E, "button-padding-x"),
      "--button-fz": E != null && E.includes("compact") ? Kb(E.replace("compact-", "")) : Kb(E),
      "--button-radius": l === void 0 ? void 0 : Bs(l),
      "--button-bg": u || _ ? O.background : void 0,
      "--button-hover": u || _ ? O.hover : void 0,
      "--button-color": u || _ ? O.color : void 0,
      "--button-bd": u || _ ? O.border : void 0
    }
  };
}, qf = Xf((i, l) => {
  const u = Xt("Button", hF, i), d = u, {
    style: _,
    vars: E,
    className: y,
    color: O,
    disabled: x,
    children: R,
    leftSection: $,
    rightSection: D,
    fullWidth: A,
    variant: z,
    radius: G,
    loading: I,
    loaderProps: K,
    gradient: de,
    classNames: pe,
    styles: ne,
    unstyled: te,
    "data-disabled": W
  } = d, Ae = mF(d, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]), _e = Wa({
    name: "Button",
    props: u,
    classes: Lg,
    className: y,
    style: _,
    classNames: pe,
    styles: ne,
    unstyled: te,
    vars: E,
    varsResolver: yF
  }), dt = !!$, ht = !!D;
  return /* @__PURE__ */ ee.createElement(
    Kf,
    Du(jb(Du({
      ref: l
    }, _e("root", { active: !x && !I && !W })), {
      unstyled: te,
      variant: z,
      disabled: x || I,
      mod: {
        disabled: x || W,
        loading: I,
        block: A,
        "with-left-section": dt,
        "with-right-section": ht
      }
    }), Ae),
    /* @__PURE__ */ ee.createElement("span", Du({}, _e("inner")), $ && /* @__PURE__ */ ee.createElement(qt, jb(Du({ component: "span" }, _e("section")), { mod: { position: "left" } }), $), I && /* @__PURE__ */ ee.createElement(qt, Du({ component: "span" }, _e("loader")), /* @__PURE__ */ ee.createElement(
      _E,
      Du({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, K)
    )), /* @__PURE__ */ ee.createElement(qt, Du({ component: "span", mod: { loading: I } }, _e("label")), R), D && /* @__PURE__ */ ee.createElement(qt, jb(Du({ component: "span" }, _e("section")), { mod: { position: "right" } }), D))
  );
});
qf.classes = Lg;
qf.displayName = "@mantine/core/Button";
qf.Group = PE;
var gF = { root: "m-3eebeb36", label: "m-9e365f20" };
const GP = gF;
var SF = Object.defineProperty, _F = Object.defineProperties, bF = Object.getOwnPropertyDescriptors, hg = Object.getOwnPropertySymbols, qP = Object.prototype.hasOwnProperty, XP = Object.prototype.propertyIsEnumerable, sR = (i, l, u) => l in i ? SF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Ub = (i, l) => {
  for (var u in l || (l = {}))
    qP.call(l, u) && sR(i, u, l[u]);
  if (hg)
    for (var u of hg(l))
      XP.call(l, u) && sR(i, u, l[u]);
  return i;
}, EF = (i, l) => _F(i, bF(l)), wF = (i, l) => {
  var u = {};
  for (var d in i)
    qP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && hg)
    for (var d of hg(i))
      l.indexOf(d) < 0 && XP.call(i, d) && (u[d] = i[d]);
  return u;
};
const CF = {
  orientation: "horizontal"
}, OF = (i, { color: l, variant: u, size: d }) => ({
  root: {
    "--divider-color": l ? Vs(l, i) : void 0,
    "--divider-border-style": u,
    "--divider-size": Ii(d, "divider-size")
  }
}), yg = rr((i, l) => {
  const u = Xt("Divider", CF, i), d = u, {
    classNames: _,
    className: E,
    style: y,
    styles: O,
    unstyled: x,
    vars: R,
    color: $,
    orientation: D,
    label: A,
    labelPosition: z
  } = d, G = wF(d, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "color",
    "orientation",
    "label",
    "labelPosition"
  ]), I = Wa({
    name: "Divider",
    classes: GP,
    props: u,
    className: E,
    style: y,
    classNames: _,
    styles: O,
    unstyled: x,
    vars: R,
    varsResolver: OF
  });
  return /* @__PURE__ */ ee.createElement(
    qt,
    EF(Ub(Ub({
      ref: l,
      mod: { orientation: D, "with-label": !!A }
    }, I("root")), G), {
      role: "separator"
    }),
    A && /* @__PURE__ */ ee.createElement(qt, Ub({ component: "span", mod: { position: z } }, I("label")), A)
  );
});
yg.classes = GP;
yg.displayName = "@mantine/core/Divider";
const [TF, Zf] = Cv(
  "Modal component was not found in tree"
);
var RF = { root: "m-9df02822", content: "m-54c44539", inner: "m-1f958f16", header: "m-d0e2b9cd" };
const Rl = RF;
var xF = Object.defineProperty, PF = Object.defineProperties, DF = Object.getOwnPropertyDescriptors, gg = Object.getOwnPropertySymbols, KP = Object.prototype.hasOwnProperty, ZP = Object.prototype.propertyIsEnumerable, cR = (i, l, u) => l in i ? xF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, fR = (i, l) => {
  for (var u in l || (l = {}))
    KP.call(l, u) && cR(i, u, l[u]);
  if (gg)
    for (var u of gg(l))
      ZP.call(l, u) && cR(i, u, l[u]);
  return i;
}, NF = (i, l) => PF(i, DF(l)), $F = (i, l) => {
  var u = {};
  for (var d in i)
    KP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && gg)
    for (var d of gg(i))
      l.indexOf(d) < 0 && ZP.call(i, d) && (u[d] = i[d]);
  return u;
};
const kF = {
  __staticSelector: "Modal",
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: kg("modal"),
  transitionProps: { duration: 200, transition: "pop" }
}, MF = (i, { radius: l, size: u, yOffset: d, xOffset: _ }) => ({
  root: {
    "--modal-radius": l === void 0 ? void 0 : Bs(l),
    "--modal-size": Ii(u, "modal-size"),
    "--modal-y-offset": ue(d),
    "--modal-x-offset": ue(_)
  }
}), Ag = rr((i, l) => {
  const u = Xt("ModalRoot", kF, i), d = u, {
    classNames: _,
    className: E,
    style: y,
    styles: O,
    unstyled: x,
    vars: R,
    yOffset: $,
    scrollAreaComponent: D,
    radius: A,
    fullScreen: z,
    centered: G,
    xOffset: I,
    __staticSelector: K
  } = d, de = $F(d, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "yOffset",
    "scrollAreaComponent",
    "radius",
    "fullScreen",
    "centered",
    "xOffset",
    "__staticSelector"
  ]), pe = Wa({
    name: K,
    classes: Rl,
    props: u,
    className: E,
    style: y,
    classNames: _,
    styles: O,
    unstyled: x,
    vars: R,
    varsResolver: MF
  });
  return /* @__PURE__ */ ee.createElement(TF, { value: { yOffset: $, scrollAreaComponent: D, getStyles: pe } }, /* @__PURE__ */ ee.createElement(
    kU,
    fR(NF(fR({
      ref: l
    }, pe("root")), {
      "data-full-screen": z || void 0,
      "data-centered": G || void 0,
      unstyled: x
    }), de)
  ));
});
Ag.classes = Rl;
Ag.displayName = "@mantine/core/ModalRoot";
var LF = Object.defineProperty, Sg = Object.getOwnPropertySymbols, JP = Object.prototype.hasOwnProperty, eD = Object.prototype.propertyIsEnumerable, dR = (i, l, u) => l in i ? LF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, pR = (i, l) => {
  for (var u in l || (l = {}))
    JP.call(l, u) && dR(i, u, l[u]);
  if (Sg)
    for (var u of Sg(l))
      eD.call(l, u) && dR(i, u, l[u]);
  return i;
}, AF = (i, l) => {
  var u = {};
  for (var d in i)
    JP.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Sg)
    for (var d of Sg(i))
      l.indexOf(d) < 0 && eD.call(i, d) && (u[d] = i[d]);
  return u;
};
const zF = {}, zg = rr((i, l) => {
  const d = Xt("ModalBody", zF, i), { classNames: _, className: E, style: y, styles: O, vars: x } = d, R = AF(d, ["classNames", "className", "style", "styles", "vars"]), $ = Zf();
  return /* @__PURE__ */ ee.createElement(
    mP,
    pR(pR({
      ref: l
    }, $.getStyles("body", { classNames: _, style: y, styles: O, className: E })), R)
  );
});
zg.classes = Rl;
zg.displayName = "@mantine/core/ModalBody";
var jF = Object.defineProperty, _g = Object.getOwnPropertySymbols, tD = Object.prototype.hasOwnProperty, nD = Object.prototype.propertyIsEnumerable, vR = (i, l, u) => l in i ? jF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, mR = (i, l) => {
  for (var u in l || (l = {}))
    tD.call(l, u) && vR(i, u, l[u]);
  if (_g)
    for (var u of _g(l))
      nD.call(l, u) && vR(i, u, l[u]);
  return i;
}, UF = (i, l) => {
  var u = {};
  for (var d in i)
    tD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && _g)
    for (var d of _g(i))
      l.indexOf(d) < 0 && nD.call(i, d) && (u[d] = i[d]);
  return u;
};
const FF = {}, jg = rr((i, l) => {
  const d = Xt("ModalCloseButton", FF, i), { classNames: _, className: E, style: y, styles: O, vars: x } = d, R = UF(d, ["classNames", "className", "style", "styles", "vars"]), $ = Zf();
  return /* @__PURE__ */ ee.createElement(
    gP,
    mR(mR({
      ref: l
    }, $.getStyles("close", { classNames: _, style: y, styles: O, className: E })), R)
  );
});
jg.classes = Rl;
jg.displayName = "@mantine/core/ModalCloseButton";
var HF = Object.defineProperty, bg = Object.getOwnPropertySymbols, rD = Object.prototype.hasOwnProperty, aD = Object.prototype.propertyIsEnumerable, hR = (i, l, u) => l in i ? HF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, yR = (i, l) => {
  for (var u in l || (l = {}))
    rD.call(l, u) && hR(i, u, l[u]);
  if (bg)
    for (var u of bg(l))
      aD.call(l, u) && hR(i, u, l[u]);
  return i;
}, IF = (i, l) => {
  var u = {};
  for (var d in i)
    rD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && bg)
    for (var d of bg(i))
      l.indexOf(d) < 0 && aD.call(i, d) && (u[d] = i[d]);
  return u;
};
const VF = {}, Ug = rr((i, l) => {
  const d = Xt("ModalOverlay", VF, i), { classNames: _, className: E, style: y, styles: O, vars: x } = d, R = IF(d, ["classNames", "className", "style", "styles", "vars"]), $ = Zf();
  return /* @__PURE__ */ ee.createElement(
    TP,
    yR(yR({
      ref: l
    }, $.getStyles("overlay", { classNames: _, style: y, styles: O, className: E })), R)
  );
});
Ug.classes = Rl;
Ug.displayName = "@mantine/core/ModalOverlay";
var BF = Object.defineProperty, YF = Object.defineProperties, WF = Object.getOwnPropertyDescriptors, Eg = Object.getOwnPropertySymbols, iD = Object.prototype.hasOwnProperty, oD = Object.prototype.propertyIsEnumerable, gR = (i, l, u) => l in i ? BF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, SR = (i, l) => {
  for (var u in l || (l = {}))
    iD.call(l, u) && gR(i, u, l[u]);
  if (Eg)
    for (var u of Eg(l))
      oD.call(l, u) && gR(i, u, l[u]);
  return i;
}, QF = (i, l) => YF(i, WF(l)), GF = (i, l) => {
  var u = {};
  for (var d in i)
    iD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Eg)
    for (var d of Eg(i))
      l.indexOf(d) < 0 && oD.call(i, d) && (u[d] = i[d]);
  return u;
};
const qF = {}, Fg = rr((i, l) => {
  const d = Xt("ModalContent", qF, i), { classNames: _, className: E, style: y, styles: O, vars: x, children: R } = d, $ = GF(d, ["classNames", "className", "style", "styles", "vars", "children"]), D = Zf(), A = D.scrollAreaComponent || S4;
  return /* @__PURE__ */ ee.createElement(
    ZU,
    SR(QF(SR({}, D.getStyles("content", { className: E, style: y, styles: O, classNames: _ })), {
      innerProps: D.getStyles("inner", { className: E, style: y, styles: O, classNames: _ }),
      ref: l
    }), $),
    /* @__PURE__ */ ee.createElement(A, { style: { maxHeight: `calc(100vh - (${ue(D.yOffset)} * 2))` } }, R)
  );
});
Fg.classes = Rl;
Fg.displayName = "@mantine/core/ModalContent";
var XF = Object.defineProperty, wg = Object.getOwnPropertySymbols, lD = Object.prototype.hasOwnProperty, uD = Object.prototype.propertyIsEnumerable, _R = (i, l, u) => l in i ? XF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, bR = (i, l) => {
  for (var u in l || (l = {}))
    lD.call(l, u) && _R(i, u, l[u]);
  if (wg)
    for (var u of wg(l))
      uD.call(l, u) && _R(i, u, l[u]);
  return i;
}, KF = (i, l) => {
  var u = {};
  for (var d in i)
    lD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && wg)
    for (var d of wg(i))
      l.indexOf(d) < 0 && uD.call(i, d) && (u[d] = i[d]);
  return u;
};
const ZF = {}, Hg = rr((i, l) => {
  const d = Xt("ModalTitle", ZF, i), { classNames: _, className: E, style: y, styles: O, vars: x } = d, R = KF(d, ["classNames", "className", "style", "styles", "vars"]), $ = Zf();
  return /* @__PURE__ */ ee.createElement(
    PP,
    bR(bR({
      ref: l
    }, $.getStyles("title", { classNames: _, style: y, styles: O, className: E })), R)
  );
});
Hg.classes = Rl;
Hg.displayName = "@mantine/core/ModalTitle";
var JF = Object.defineProperty, Cg = Object.getOwnPropertySymbols, sD = Object.prototype.hasOwnProperty, cD = Object.prototype.propertyIsEnumerable, ER = (i, l, u) => l in i ? JF(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, wR = (i, l) => {
  for (var u in l || (l = {}))
    sD.call(l, u) && ER(i, u, l[u]);
  if (Cg)
    for (var u of Cg(l))
      cD.call(l, u) && ER(i, u, l[u]);
  return i;
}, e6 = (i, l) => {
  var u = {};
  for (var d in i)
    sD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Cg)
    for (var d of Cg(i))
      l.indexOf(d) < 0 && cD.call(i, d) && (u[d] = i[d]);
  return u;
};
const t6 = {}, Ig = rr((i, l) => {
  const d = Xt("ModalHeader", t6, i), { classNames: _, className: E, style: y, styles: O, vars: x } = d, R = e6(d, ["classNames", "className", "style", "styles", "vars"]), $ = Zf();
  return /* @__PURE__ */ ee.createElement(
    wP,
    wR(wR({
      ref: l
    }, $.getStyles("header", { classNames: _, style: y, styles: O, className: E })), R)
  );
});
Ig.classes = Rl;
Ig.displayName = "@mantine/core/ModalHeader";
var n6 = Object.defineProperty, Og = Object.getOwnPropertySymbols, fD = Object.prototype.hasOwnProperty, dD = Object.prototype.propertyIsEnumerable, CR = (i, l, u) => l in i ? n6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Fb = (i, l) => {
  for (var u in l || (l = {}))
    fD.call(l, u) && CR(i, u, l[u]);
  if (Og)
    for (var u of Og(l))
      dD.call(l, u) && CR(i, u, l[u]);
  return i;
}, r6 = (i, l) => {
  var u = {};
  for (var d in i)
    fD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Og)
    for (var d of Og(i))
      l.indexOf(d) < 0 && dD.call(i, d) && (u[d] = i[d]);
  return u;
};
const a6 = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: kg("modal"),
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: !0,
  withCloseButton: !0
}, $o = rr((i, l) => {
  const u = Xt("Modal", a6, i), {
    title: d,
    withOverlay: _,
    overlayProps: E,
    withCloseButton: y,
    closeButtonProps: O,
    children: x,
    radius: R
  } = u, $ = r6(u, [
    "title",
    "withOverlay",
    "overlayProps",
    "withCloseButton",
    "closeButtonProps",
    "children",
    "radius"
  ]), D = !!d || y;
  return /* @__PURE__ */ ee.createElement(Ag, Fb({ ref: l, radius: R }, $), _ && /* @__PURE__ */ ee.createElement(Ug, Fb({}, E)), /* @__PURE__ */ ee.createElement(Fg, { radius: R }, D && /* @__PURE__ */ ee.createElement(Ig, null, d && /* @__PURE__ */ ee.createElement(Hg, null, d), y && /* @__PURE__ */ ee.createElement(jg, Fb({}, O))), /* @__PURE__ */ ee.createElement(zg, null, x)));
});
$o.classes = Rl;
$o.displayName = "@mantine/core/Modal";
$o.Root = Ag;
$o.Overlay = Ug;
$o.Content = Fg;
$o.Body = zg;
$o.Header = Ig;
$o.Title = Hg;
$o.CloseButton = jg;
const [i6, DE] = Cv(
  "Tabs component was not found in the tree"
);
var o6 = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const Tv = o6;
var l6 = Object.defineProperty, u6 = Object.defineProperties, s6 = Object.getOwnPropertyDescriptors, Tg = Object.getOwnPropertySymbols, pD = Object.prototype.hasOwnProperty, vD = Object.prototype.propertyIsEnumerable, OR = (i, l, u) => l in i ? l6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, TR = (i, l) => {
  for (var u in l || (l = {}))
    pD.call(l, u) && OR(i, u, l[u]);
  if (Tg)
    for (var u of Tg(l))
      vD.call(l, u) && OR(i, u, l[u]);
  return i;
}, c6 = (i, l) => u6(i, s6(l)), f6 = (i, l) => {
  var u = {};
  for (var d in i)
    pD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Tg)
    for (var d of Tg(i))
      l.indexOf(d) < 0 && vD.call(i, d) && (u[d] = i[d]);
  return u;
};
const d6 = {}, NE = rr((i, l) => {
  const u = Xt("TabsList", d6, i), d = u, { children: _, className: E, grow: y, justify: O, classNames: x, styles: R, style: $ } = d, D = f6(d, ["children", "className", "grow", "justify", "classNames", "styles", "style"]), A = DE();
  return /* @__PURE__ */ ee.createElement(
    qt,
    c6(TR(TR({}, D), A.getStyles("list", {
      className: E,
      style: $,
      classNames: x,
      styles: R,
      props: u,
      variant: A.variant
    })), {
      ref: l,
      role: "tablist",
      variant: A.variant,
      mod: {
        grow: y,
        orientation: A.orientation,
        placement: A.orientation === "vertical" && A.placement,
        inverted: A.inverted
      },
      "aria-orientation": A.orientation,
      __vars: { "--tabs-justify": O }
    }),
    _
  );
});
NE.classes = Tv;
NE.displayName = "@mantine/core/TabsList";
var p6 = Object.defineProperty, v6 = Object.defineProperties, m6 = Object.getOwnPropertyDescriptors, Rg = Object.getOwnPropertySymbols, mD = Object.prototype.hasOwnProperty, hD = Object.prototype.propertyIsEnumerable, RR = (i, l, u) => l in i ? p6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, xR = (i, l) => {
  for (var u in l || (l = {}))
    mD.call(l, u) && RR(i, u, l[u]);
  if (Rg)
    for (var u of Rg(l))
      hD.call(l, u) && RR(i, u, l[u]);
  return i;
}, h6 = (i, l) => v6(i, m6(l)), y6 = (i, l) => {
  var u = {};
  for (var d in i)
    mD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Rg)
    for (var d of Rg(i))
      l.indexOf(d) < 0 && hD.call(i, d) && (u[d] = i[d]);
  return u;
};
const g6 = {}, $E = rr((i, l) => {
  const u = Xt("TabsPanel", g6, i), d = u, { children: _, className: E, value: y, classNames: O, styles: x, style: R } = d, $ = y6(d, ["children", "className", "value", "classNames", "styles", "style"]), D = DE(), A = D.value === y, z = D.keepMounted || A ? _ : null;
  return /* @__PURE__ */ ee.createElement(
    qt,
    h6(xR(xR({}, $), D.getStyles("panel", {
      className: E,
      classNames: O,
      styles: x,
      style: [R, A ? void 0 : { display: "none" }],
      props: u
    })), {
      ref: l,
      mod: { orientation: D.orientation },
      role: "tabpanel",
      id: D.getPanelId(y),
      "aria-labelledby": D.getTabId(y)
    }),
    z
  );
});
$E.classes = Tv;
$E.displayName = "@mantine/core/TabsPanel";
var S6 = Object.defineProperty, _6 = Object.defineProperties, b6 = Object.getOwnPropertyDescriptors, xg = Object.getOwnPropertySymbols, yD = Object.prototype.hasOwnProperty, gD = Object.prototype.propertyIsEnumerable, PR = (i, l, u) => l in i ? S6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Qf = (i, l) => {
  for (var u in l || (l = {}))
    yD.call(l, u) && PR(i, u, l[u]);
  if (xg)
    for (var u of xg(l))
      gD.call(l, u) && PR(i, u, l[u]);
  return i;
}, Hb = (i, l) => _6(i, b6(l)), E6 = (i, l) => {
  var u = {};
  for (var d in i)
    yD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && xg)
    for (var d of xg(i))
      l.indexOf(d) < 0 && gD.call(i, d) && (u[d] = i[d]);
  return u;
};
const w6 = {}, kE = rr((i, l) => {
  const u = Xt("TabsTab", w6, i), d = u, {
    className: _,
    children: E,
    rightSection: y,
    leftSection: O,
    value: x,
    onClick: R,
    onKeyDown: $,
    disabled: D,
    color: A,
    style: z,
    classNames: G,
    styles: I,
    vars: K
  } = d, de = E6(d, [
    "className",
    "children",
    "rightSection",
    "leftSection",
    "value",
    "onClick",
    "onKeyDown",
    "disabled",
    "color",
    "style",
    "classNames",
    "styles",
    "vars"
  ]), pe = Nu(), { dir: ne } = Rj(), te = DE(), W = x === te.value, Ae = (dt) => {
    te.onChange(te.allowTabDeactivation && x === te.value ? null : x), R == null || R(dt);
  }, _e = { classNames: G, styles: I, props: u };
  return /* @__PURE__ */ ee.createElement(
    Kf,
    Hb(Qf(Qf({}, de), te.getStyles("tab", Qf({ className: _, style: z, variant: te.variant }, _e))), {
      disabled: D,
      unstyled: te.unstyled,
      variant: te.variant,
      mod: {
        active: W,
        disabled: D,
        orientation: te.orientation,
        inverted: te.inverted,
        placement: te.orientation === "vertical" && te.placement
      },
      ref: l,
      role: "tab",
      id: te.getTabId(x),
      "aria-selected": W,
      tabIndex: W || te.value === null ? 0 : -1,
      "aria-controls": te.getPanelId(x),
      onClick: Ae,
      __vars: { "--tabs-color": A ? Vs(A, pe) : void 0 },
      onKeyDown: tx({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: te.activateTabWithKeyboard,
        loop: te.loop,
        orientation: te.orientation || "horizontal",
        dir: ne,
        onKeyDown: $
      })
    }),
    O && /* @__PURE__ */ ee.createElement("span", Hb(Qf({}, te.getStyles("tabSection", _e)), { "data-position": "left" }), O),
    E && /* @__PURE__ */ ee.createElement("span", Qf({}, te.getStyles("tabLabel", _e)), E),
    y && /* @__PURE__ */ ee.createElement("span", Hb(Qf({}, te.getStyles("tabSection", _e)), { "data-position": "right" }), y)
  );
});
kE.classes = Tv;
kE.displayName = "@mantine/core/TabsTab";
var C6 = Object.defineProperty, Pg = Object.getOwnPropertySymbols, SD = Object.prototype.hasOwnProperty, _D = Object.prototype.propertyIsEnumerable, DR = (i, l, u) => l in i ? C6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, NR = (i, l) => {
  for (var u in l || (l = {}))
    SD.call(l, u) && DR(i, u, l[u]);
  if (Pg)
    for (var u of Pg(l))
      _D.call(l, u) && DR(i, u, l[u]);
  return i;
}, O6 = (i, l) => {
  var u = {};
  for (var d in i)
    SD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Pg)
    for (var d of Pg(i))
      l.indexOf(d) < 0 && _D.call(i, d) && (u[d] = i[d]);
  return u;
};
const $R = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", T6 = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, R6 = (i, { radius: l, color: u }) => ({
  root: {
    "--tabs-radius": Bs(l),
    "--tabs-color": Vs(u, i)
  }
}), Ol = rr((i, l) => {
  const u = Xt("Tabs", T6, i), d = u, {
    defaultValue: _,
    value: E,
    onChange: y,
    orientation: O,
    children: x,
    loop: R,
    id: $,
    activateTabWithKeyboard: D,
    allowTabDeactivation: A,
    variant: z,
    color: G,
    radius: I,
    inverted: K,
    placement: de,
    keepMounted: pe,
    classNames: ne,
    styles: te,
    unstyled: W,
    className: Ae,
    style: _e,
    vars: dt
  } = d, ht = O6(d, [
    "defaultValue",
    "value",
    "onChange",
    "orientation",
    "children",
    "loop",
    "id",
    "activateTabWithKeyboard",
    "allowTabDeactivation",
    "variant",
    "color",
    "radius",
    "inverted",
    "placement",
    "keepMounted",
    "classNames",
    "styles",
    "unstyled",
    "className",
    "style",
    "vars"
  ]), it = hE($), [ct, Vt] = px({
    value: E,
    defaultValue: _,
    finalValue: null,
    onChange: y
  }), ze = Wa({
    name: "Tabs",
    props: u,
    classes: Tv,
    className: Ae,
    style: _e,
    classNames: ne,
    styles: te,
    unstyled: W,
    vars: dt,
    varsResolver: R6
  });
  return /* @__PURE__ */ ee.createElement(
    i6,
    {
      value: {
        placement: de,
        value: ct,
        orientation: O,
        id: it,
        loop: R,
        activateTabWithKeyboard: D,
        getTabId: jy(`${it}-tab`, $R),
        getPanelId: jy(`${it}-panel`, $R),
        onChange: Vt,
        allowTabDeactivation: A,
        variant: z,
        color: G,
        radius: I,
        inverted: K,
        keepMounted: pe,
        unstyled: W,
        getStyles: ze
      }
    },
    /* @__PURE__ */ ee.createElement(
      qt,
      NR(NR({
        ref: l,
        id: it,
        variant: z,
        mod: {
          orientation: O,
          inverted: O === "horizontal" && K,
          placement: O === "vertical" && de
        }
      }, ze("root")), ht),
      x
    )
  );
});
Ol.classes = Tv;
Ol.displayName = "@mantine/core/Tabs";
Ol.Tab = kE;
Ol.Panel = $E;
Ol.List = NE;
var iE = { exports: {} }, Ly = { exports: {} }, Ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kR;
function x6() {
  if (kR)
    return Ht;
  kR = 1;
  var i = typeof Symbol == "function" && Symbol.for, l = i ? Symbol.for("react.element") : 60103, u = i ? Symbol.for("react.portal") : 60106, d = i ? Symbol.for("react.fragment") : 60107, _ = i ? Symbol.for("react.strict_mode") : 60108, E = i ? Symbol.for("react.profiler") : 60114, y = i ? Symbol.for("react.provider") : 60109, O = i ? Symbol.for("react.context") : 60110, x = i ? Symbol.for("react.async_mode") : 60111, R = i ? Symbol.for("react.concurrent_mode") : 60111, $ = i ? Symbol.for("react.forward_ref") : 60112, D = i ? Symbol.for("react.suspense") : 60113, A = i ? Symbol.for("react.suspense_list") : 60120, z = i ? Symbol.for("react.memo") : 60115, G = i ? Symbol.for("react.lazy") : 60116, I = i ? Symbol.for("react.block") : 60121, K = i ? Symbol.for("react.fundamental") : 60117, de = i ? Symbol.for("react.responder") : 60118, pe = i ? Symbol.for("react.scope") : 60119;
  function ne(W) {
    if (typeof W == "object" && W !== null) {
      var Ae = W.$$typeof;
      switch (Ae) {
        case l:
          switch (W = W.type, W) {
            case x:
            case R:
            case d:
            case E:
            case _:
            case D:
              return W;
            default:
              switch (W = W && W.$$typeof, W) {
                case O:
                case $:
                case G:
                case z:
                case y:
                  return W;
                default:
                  return Ae;
              }
          }
        case u:
          return Ae;
      }
    }
  }
  function te(W) {
    return ne(W) === R;
  }
  return Ht.AsyncMode = x, Ht.ConcurrentMode = R, Ht.ContextConsumer = O, Ht.ContextProvider = y, Ht.Element = l, Ht.ForwardRef = $, Ht.Fragment = d, Ht.Lazy = G, Ht.Memo = z, Ht.Portal = u, Ht.Profiler = E, Ht.StrictMode = _, Ht.Suspense = D, Ht.isAsyncMode = function(W) {
    return te(W) || ne(W) === x;
  }, Ht.isConcurrentMode = te, Ht.isContextConsumer = function(W) {
    return ne(W) === O;
  }, Ht.isContextProvider = function(W) {
    return ne(W) === y;
  }, Ht.isElement = function(W) {
    return typeof W == "object" && W !== null && W.$$typeof === l;
  }, Ht.isForwardRef = function(W) {
    return ne(W) === $;
  }, Ht.isFragment = function(W) {
    return ne(W) === d;
  }, Ht.isLazy = function(W) {
    return ne(W) === G;
  }, Ht.isMemo = function(W) {
    return ne(W) === z;
  }, Ht.isPortal = function(W) {
    return ne(W) === u;
  }, Ht.isProfiler = function(W) {
    return ne(W) === E;
  }, Ht.isStrictMode = function(W) {
    return ne(W) === _;
  }, Ht.isSuspense = function(W) {
    return ne(W) === D;
  }, Ht.isValidElementType = function(W) {
    return typeof W == "string" || typeof W == "function" || W === d || W === R || W === E || W === _ || W === D || W === A || typeof W == "object" && W !== null && (W.$$typeof === G || W.$$typeof === z || W.$$typeof === y || W.$$typeof === O || W.$$typeof === $ || W.$$typeof === K || W.$$typeof === de || W.$$typeof === pe || W.$$typeof === I);
  }, Ht.typeOf = ne, Ht;
}
var It = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MR;
function P6() {
  return MR || (MR = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, l = i ? Symbol.for("react.element") : 60103, u = i ? Symbol.for("react.portal") : 60106, d = i ? Symbol.for("react.fragment") : 60107, _ = i ? Symbol.for("react.strict_mode") : 60108, E = i ? Symbol.for("react.profiler") : 60114, y = i ? Symbol.for("react.provider") : 60109, O = i ? Symbol.for("react.context") : 60110, x = i ? Symbol.for("react.async_mode") : 60111, R = i ? Symbol.for("react.concurrent_mode") : 60111, $ = i ? Symbol.for("react.forward_ref") : 60112, D = i ? Symbol.for("react.suspense") : 60113, A = i ? Symbol.for("react.suspense_list") : 60120, z = i ? Symbol.for("react.memo") : 60115, G = i ? Symbol.for("react.lazy") : 60116, I = i ? Symbol.for("react.block") : 60121, K = i ? Symbol.for("react.fundamental") : 60117, de = i ? Symbol.for("react.responder") : 60118, pe = i ? Symbol.for("react.scope") : 60119;
    function ne(ve) {
      return typeof ve == "string" || typeof ve == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ve === d || ve === R || ve === E || ve === _ || ve === D || ve === A || typeof ve == "object" && ve !== null && (ve.$$typeof === G || ve.$$typeof === z || ve.$$typeof === y || ve.$$typeof === O || ve.$$typeof === $ || ve.$$typeof === K || ve.$$typeof === de || ve.$$typeof === pe || ve.$$typeof === I);
    }
    function te(ve) {
      if (typeof ve == "object" && ve !== null) {
        var Lt = ve.$$typeof;
        switch (Lt) {
          case l:
            var yn = ve.type;
            switch (yn) {
              case x:
              case R:
              case d:
              case E:
              case _:
              case D:
                return yn;
              default:
                var En = yn && yn.$$typeof;
                switch (En) {
                  case O:
                  case $:
                  case G:
                  case z:
                  case y:
                    return En;
                  default:
                    return Lt;
                }
            }
          case u:
            return Lt;
        }
      }
    }
    var W = x, Ae = R, _e = O, dt = y, ht = l, it = $, ct = d, Vt = G, ze = z, Ke = u, Ct = E, pt = _, Bt = D, fe = !1;
    function $e(ve) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(ve) || te(ve) === x;
    }
    function H(ve) {
      return te(ve) === R;
    }
    function oe(ve) {
      return te(ve) === O;
    }
    function we(ve) {
      return te(ve) === y;
    }
    function je(ve) {
      return typeof ve == "object" && ve !== null && ve.$$typeof === l;
    }
    function Le(ve) {
      return te(ve) === $;
    }
    function nt(ve) {
      return te(ve) === d;
    }
    function ke(ve) {
      return te(ve) === G;
    }
    function Qe(ve) {
      return te(ve) === z;
    }
    function Ge(ve) {
      return te(ve) === u;
    }
    function et(ve) {
      return te(ve) === E;
    }
    function rt(ve) {
      return te(ve) === _;
    }
    function Nt(ve) {
      return te(ve) === D;
    }
    It.AsyncMode = W, It.ConcurrentMode = Ae, It.ContextConsumer = _e, It.ContextProvider = dt, It.Element = ht, It.ForwardRef = it, It.Fragment = ct, It.Lazy = Vt, It.Memo = ze, It.Portal = Ke, It.Profiler = Ct, It.StrictMode = pt, It.Suspense = Bt, It.isAsyncMode = $e, It.isConcurrentMode = H, It.isContextConsumer = oe, It.isContextProvider = we, It.isElement = je, It.isForwardRef = Le, It.isFragment = nt, It.isLazy = ke, It.isMemo = Qe, It.isPortal = Ge, It.isProfiler = et, It.isStrictMode = rt, It.isSuspense = Nt, It.isValidElementType = ne, It.typeOf = te;
  }()), It;
}
var LR;
function bD() {
  return LR || (LR = 1, process.env.NODE_ENV === "production" ? Ly.exports = x6() : Ly.exports = P6()), Ly.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ib, AR;
function D6() {
  if (AR)
    return Ib;
  AR = 1;
  var i = Object.getOwnPropertySymbols, l = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
  function d(E) {
    if (E == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(E);
  }
  function _() {
    try {
      if (!Object.assign)
        return !1;
      var E = new String("abc");
      if (E[5] = "de", Object.getOwnPropertyNames(E)[0] === "5")
        return !1;
      for (var y = {}, O = 0; O < 10; O++)
        y["_" + String.fromCharCode(O)] = O;
      var x = Object.getOwnPropertyNames(y).map(function($) {
        return y[$];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function($) {
        R[$] = $;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ib = _() ? Object.assign : function(E, y) {
    for (var O, x = d(E), R, $ = 1; $ < arguments.length; $++) {
      O = Object(arguments[$]);
      for (var D in O)
        l.call(O, D) && (x[D] = O[D]);
      if (i) {
        R = i(O);
        for (var A = 0; A < R.length; A++)
          u.call(O, R[A]) && (x[R[A]] = O[R[A]]);
      }
    }
    return x;
  }, Ib;
}
var Vb, zR;
function ME() {
  if (zR)
    return Vb;
  zR = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vb = i, Vb;
}
var Bb, jR;
function ED() {
  return jR || (jR = 1, Bb = Function.call.bind(Object.prototype.hasOwnProperty)), Bb;
}
var Yb, UR;
function N6() {
  if (UR)
    return Yb;
  UR = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var l = ME(), u = {}, d = ED();
    i = function(E) {
      var y = "Warning: " + E;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function _(E, y, O, x, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var $ in E)
        if (d(E, $)) {
          var D;
          try {
            if (typeof E[$] != "function") {
              var A = Error(
                (x || "React class") + ": " + O + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            D = E[$](y, $, x, O, null, l);
          } catch (G) {
            D = G;
          }
          if (D && !(D instanceof Error) && i(
            (x || "React class") + ": type specification of " + O + " `" + $ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof D + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), D instanceof Error && !(D.message in u)) {
            u[D.message] = !0;
            var z = R ? R() : "";
            i(
              "Failed " + O + " type: " + D.message + (z ?? "")
            );
          }
        }
    }
  }
  return _.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (u = {});
  }, Yb = _, Yb;
}
var Wb, FR;
function $6() {
  if (FR)
    return Wb;
  FR = 1;
  var i = bD(), l = D6(), u = ME(), d = ED(), _ = N6(), E = function() {
  };
  process.env.NODE_ENV !== "production" && (E = function(O) {
    var x = "Warning: " + O;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return Wb = function(O, x) {
    var R = typeof Symbol == "function" && Symbol.iterator, $ = "@@iterator";
    function D(H) {
      var oe = H && (R && H[R] || H[$]);
      if (typeof oe == "function")
        return oe;
    }
    var A = "<<anonymous>>", z = {
      array: de("array"),
      bigint: de("bigint"),
      bool: de("boolean"),
      func: de("function"),
      number: de("number"),
      object: de("object"),
      string: de("string"),
      symbol: de("symbol"),
      any: pe(),
      arrayOf: ne,
      element: te(),
      elementType: W(),
      instanceOf: Ae,
      node: it(),
      objectOf: dt,
      oneOf: _e,
      oneOfType: ht,
      shape: Vt,
      exact: ze
    };
    function G(H, oe) {
      return H === oe ? H !== 0 || 1 / H === 1 / oe : H !== H && oe !== oe;
    }
    function I(H, oe) {
      this.message = H, this.data = oe && typeof oe == "object" ? oe : {}, this.stack = "";
    }
    I.prototype = Error.prototype;
    function K(H) {
      if (process.env.NODE_ENV !== "production")
        var oe = {}, we = 0;
      function je(nt, ke, Qe, Ge, et, rt, Nt) {
        if (Ge = Ge || A, rt = rt || Qe, Nt !== u) {
          if (x) {
            var ve = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ve.name = "Invariant Violation", ve;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Lt = Ge + ":" + Qe;
            !oe[Lt] && // Avoid spamming the console because they are often not actionable except for lib authors
            we < 3 && (E(
              "You are manually calling a React.PropTypes validation function for the `" + rt + "` prop on `" + Ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), oe[Lt] = !0, we++);
          }
        }
        return ke[Qe] == null ? nt ? ke[Qe] === null ? new I("The " + et + " `" + rt + "` is marked as required " + ("in `" + Ge + "`, but its value is `null`.")) : new I("The " + et + " `" + rt + "` is marked as required in " + ("`" + Ge + "`, but its value is `undefined`.")) : null : H(ke, Qe, Ge, et, rt);
      }
      var Le = je.bind(null, !1);
      return Le.isRequired = je.bind(null, !0), Le;
    }
    function de(H) {
      function oe(we, je, Le, nt, ke, Qe) {
        var Ge = we[je], et = pt(Ge);
        if (et !== H) {
          var rt = Bt(Ge);
          return new I(
            "Invalid " + nt + " `" + ke + "` of type " + ("`" + rt + "` supplied to `" + Le + "`, expected ") + ("`" + H + "`."),
            { expectedType: H }
          );
        }
        return null;
      }
      return K(oe);
    }
    function pe() {
      return K(y);
    }
    function ne(H) {
      function oe(we, je, Le, nt, ke) {
        if (typeof H != "function")
          return new I("Property `" + ke + "` of component `" + Le + "` has invalid PropType notation inside arrayOf.");
        var Qe = we[je];
        if (!Array.isArray(Qe)) {
          var Ge = pt(Qe);
          return new I("Invalid " + nt + " `" + ke + "` of type " + ("`" + Ge + "` supplied to `" + Le + "`, expected an array."));
        }
        for (var et = 0; et < Qe.length; et++) {
          var rt = H(Qe, et, Le, nt, ke + "[" + et + "]", u);
          if (rt instanceof Error)
            return rt;
        }
        return null;
      }
      return K(oe);
    }
    function te() {
      function H(oe, we, je, Le, nt) {
        var ke = oe[we];
        if (!O(ke)) {
          var Qe = pt(ke);
          return new I("Invalid " + Le + " `" + nt + "` of type " + ("`" + Qe + "` supplied to `" + je + "`, expected a single ReactElement."));
        }
        return null;
      }
      return K(H);
    }
    function W() {
      function H(oe, we, je, Le, nt) {
        var ke = oe[we];
        if (!i.isValidElementType(ke)) {
          var Qe = pt(ke);
          return new I("Invalid " + Le + " `" + nt + "` of type " + ("`" + Qe + "` supplied to `" + je + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return K(H);
    }
    function Ae(H) {
      function oe(we, je, Le, nt, ke) {
        if (!(we[je] instanceof H)) {
          var Qe = H.name || A, Ge = $e(we[je]);
          return new I("Invalid " + nt + " `" + ke + "` of type " + ("`" + Ge + "` supplied to `" + Le + "`, expected ") + ("instance of `" + Qe + "`."));
        }
        return null;
      }
      return K(oe);
    }
    function _e(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? E(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : E("Invalid argument supplied to oneOf, expected an array.")), y;
      function oe(we, je, Le, nt, ke) {
        for (var Qe = we[je], Ge = 0; Ge < H.length; Ge++)
          if (G(Qe, H[Ge]))
            return null;
        var et = JSON.stringify(H, function(Nt, ve) {
          var Lt = Bt(ve);
          return Lt === "symbol" ? String(ve) : ve;
        });
        return new I("Invalid " + nt + " `" + ke + "` of value `" + String(Qe) + "` " + ("supplied to `" + Le + "`, expected one of " + et + "."));
      }
      return K(oe);
    }
    function dt(H) {
      function oe(we, je, Le, nt, ke) {
        if (typeof H != "function")
          return new I("Property `" + ke + "` of component `" + Le + "` has invalid PropType notation inside objectOf.");
        var Qe = we[je], Ge = pt(Qe);
        if (Ge !== "object")
          return new I("Invalid " + nt + " `" + ke + "` of type " + ("`" + Ge + "` supplied to `" + Le + "`, expected an object."));
        for (var et in Qe)
          if (d(Qe, et)) {
            var rt = H(Qe, et, Le, nt, ke + "." + et, u);
            if (rt instanceof Error)
              return rt;
          }
        return null;
      }
      return K(oe);
    }
    function ht(H) {
      if (!Array.isArray(H))
        return process.env.NODE_ENV !== "production" && E("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var oe = 0; oe < H.length; oe++) {
        var we = H[oe];
        if (typeof we != "function")
          return E(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(we) + " at index " + oe + "."
          ), y;
      }
      function je(Le, nt, ke, Qe, Ge) {
        for (var et = [], rt = 0; rt < H.length; rt++) {
          var Nt = H[rt], ve = Nt(Le, nt, ke, Qe, Ge, u);
          if (ve == null)
            return null;
          ve.data && d(ve.data, "expectedType") && et.push(ve.data.expectedType);
        }
        var Lt = et.length > 0 ? ", expected one of type [" + et.join(", ") + "]" : "";
        return new I("Invalid " + Qe + " `" + Ge + "` supplied to " + ("`" + ke + "`" + Lt + "."));
      }
      return K(je);
    }
    function it() {
      function H(oe, we, je, Le, nt) {
        return Ke(oe[we]) ? null : new I("Invalid " + Le + " `" + nt + "` supplied to " + ("`" + je + "`, expected a ReactNode."));
      }
      return K(H);
    }
    function ct(H, oe, we, je, Le) {
      return new I(
        (H || "React class") + ": " + oe + " type `" + we + "." + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Le + "`."
      );
    }
    function Vt(H) {
      function oe(we, je, Le, nt, ke) {
        var Qe = we[je], Ge = pt(Qe);
        if (Ge !== "object")
          return new I("Invalid " + nt + " `" + ke + "` of type `" + Ge + "` " + ("supplied to `" + Le + "`, expected `object`."));
        for (var et in H) {
          var rt = H[et];
          if (typeof rt != "function")
            return ct(Le, nt, ke, et, Bt(rt));
          var Nt = rt(Qe, et, Le, nt, ke + "." + et, u);
          if (Nt)
            return Nt;
        }
        return null;
      }
      return K(oe);
    }
    function ze(H) {
      function oe(we, je, Le, nt, ke) {
        var Qe = we[je], Ge = pt(Qe);
        if (Ge !== "object")
          return new I("Invalid " + nt + " `" + ke + "` of type `" + Ge + "` " + ("supplied to `" + Le + "`, expected `object`."));
        var et = l({}, we[je], H);
        for (var rt in et) {
          var Nt = H[rt];
          if (d(H, rt) && typeof Nt != "function")
            return ct(Le, nt, ke, rt, Bt(Nt));
          if (!Nt)
            return new I(
              "Invalid " + nt + " `" + ke + "` key `" + rt + "` supplied to `" + Le + "`.\nBad object: " + JSON.stringify(we[je], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(H), null, "  ")
            );
          var ve = Nt(Qe, rt, Le, nt, ke + "." + rt, u);
          if (ve)
            return ve;
        }
        return null;
      }
      return K(oe);
    }
    function Ke(H) {
      switch (typeof H) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !H;
        case "object":
          if (Array.isArray(H))
            return H.every(Ke);
          if (H === null || O(H))
            return !0;
          var oe = D(H);
          if (oe) {
            var we = oe.call(H), je;
            if (oe !== H.entries) {
              for (; !(je = we.next()).done; )
                if (!Ke(je.value))
                  return !1;
            } else
              for (; !(je = we.next()).done; ) {
                var Le = je.value;
                if (Le && !Ke(Le[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ct(H, oe) {
      return H === "symbol" ? !0 : oe ? oe["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && oe instanceof Symbol : !1;
    }
    function pt(H) {
      var oe = typeof H;
      return Array.isArray(H) ? "array" : H instanceof RegExp ? "object" : Ct(oe, H) ? "symbol" : oe;
    }
    function Bt(H) {
      if (typeof H > "u" || H === null)
        return "" + H;
      var oe = pt(H);
      if (oe === "object") {
        if (H instanceof Date)
          return "date";
        if (H instanceof RegExp)
          return "regexp";
      }
      return oe;
    }
    function fe(H) {
      var oe = Bt(H);
      switch (oe) {
        case "array":
        case "object":
          return "an " + oe;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + oe;
        default:
          return oe;
      }
    }
    function $e(H) {
      return !H.constructor || !H.constructor.name ? A : H.constructor.name;
    }
    return z.checkPropTypes = _, z.resetWarningCache = _.resetWarningCache, z.PropTypes = z, z;
  }, Wb;
}
var Qb, HR;
function k6() {
  if (HR)
    return Qb;
  HR = 1;
  var i = ME();
  function l() {
  }
  function u() {
  }
  return u.resetWarningCache = l, Qb = function() {
    function d(y, O, x, R, $, D) {
      if (D !== i) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    d.isRequired = d;
    function _() {
      return d;
    }
    var E = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: _,
      element: d,
      elementType: d,
      instanceOf: _,
      node: d,
      objectOf: _,
      oneOf: _,
      oneOfType: _,
      shape: _,
      exact: _,
      checkPropTypes: u,
      resetWarningCache: l
    };
    return E.PropTypes = E, E;
  }, Qb;
}
if (process.env.NODE_ENV !== "production") {
  var M6 = bD(), L6 = !0;
  iE.exports = $6()(M6.isElement, L6);
} else
  iE.exports = k6()();
var A6 = iE.exports;
const Is = /* @__PURE__ */ mL(A6);
var z6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, j6 = Object.defineProperty, U6 = Object.defineProperties, F6 = Object.getOwnPropertyDescriptors, Dg = Object.getOwnPropertySymbols, wD = Object.prototype.hasOwnProperty, CD = Object.prototype.propertyIsEnumerable, IR = (i, l, u) => l in i ? j6(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, VR = (i, l) => {
  for (var u in l || (l = {}))
    wD.call(l, u) && IR(i, u, l[u]);
  if (Dg)
    for (var u of Dg(l))
      CD.call(l, u) && IR(i, u, l[u]);
  return i;
}, H6 = (i, l) => U6(i, F6(l)), I6 = (i, l) => {
  var u = {};
  for (var d in i)
    wD.call(i, d) && l.indexOf(d) < 0 && (u[d] = i[d]);
  if (i != null && Dg)
    for (var d of Dg(i))
      l.indexOf(d) < 0 && CD.call(i, d) && (u[d] = i[d]);
  return u;
}, LE = (i, l, u) => {
  const d = Tr(
    (_, E) => {
      var y = _, { color: O = "currentColor", size: x = 24, stroke: R = 2, children: $ } = y, D = I6(y, ["color", "size", "stroke", "children"]);
      return hO(
        "svg",
        VR(H6(VR({
          ref: E
        }, z6), {
          width: x,
          height: x,
          stroke: O,
          strokeWidth: R,
          className: `tabler-icon tabler-icon-${i}`
        }), D),
        [...u.map(([A, z]) => hO(A, z)), ...$ || []]
      );
    }
  );
  return d.propTypes = {
    color: Is.string,
    size: Is.oneOfType([Is.string, Is.number]),
    stroke: Is.oneOfType([Is.string, Is.number])
  }, d.displayName = `${l}`, d;
}, V6 = LE("message-circle", "IconMessageCircle", [
  [
    "path",
    {
      d: "M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1",
      key: "svg-0"
    }
  ]
]), B6 = LE("pencil-heart", "IconPencilHeart", [
  [
    "path",
    {
      d: "M17 11l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }],
  [
    "path",
    {
      d: "M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z",
      key: "svg-2"
    }
  ]
]), Y6 = LE("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
function W6({ inputValue: i, response: l }, u, d, _) {
  const E = Po(u, []), y = Po(d, []), O = Po(_, []), [x, R] = Or(1), [$, D] = Or({
    index: 1,
    statuses: ["Try again", "Ready", "Making a request to our servers"]
  }), [A, z] = Or(l), G = async (ne) => {
    if ($.index > 1 || ne.key !== "Enter")
      return;
    const te = ne.target.value.trim();
    if (te.length == 0) {
      D({ ...$, index: 0 });
      return;
    }
    D({ ...$, index: 2 }), await E(te).then((W) => {
      z(W), D({ ...$, index: 1 });
    }).catch((W) => {
      console.log("Request ended in error " + W), D({ ...$, index: 0 });
    }).finally(() => {
      console.log("Finished processing");
    });
  }, I = `status-${$.index}`, K = Q6(A, 0, y), de = x ? "Write With Me AI - Close" : "Write With Me AI - Open", pe = BR();
  return /* @__PURE__ */ wt.jsx(wt.Fragment, { children: /* @__PURE__ */ wt.jsxs("div", { className: Ff.mainContainer, children: [
    /* @__PURE__ */ wt.jsx(Y6, { className: Ff.closeButton, onClick: () => {
      O();
    } }),
    /* @__PURE__ */ wt.jsx(Hi, { onChange: R, defaultValue: "1", children: /* @__PURE__ */ wt.jsxs(Hi.Item, { value: "1", children: [
      /* @__PURE__ */ wt.jsx(Hi.Control, { className: Ff.accordionLabel, children: /* @__PURE__ */ wt.jsxs(EE, { wrap: "nowrap", children: [
        /* @__PURE__ */ wt.jsx(B6, {}),
        /* @__PURE__ */ wt.jsxs("div", { children: [
          /* @__PURE__ */ wt.jsx(pg, { children: de }),
          /* @__PURE__ */ wt.jsx(pg, { size: "sm", c: "dimmed", fw: 400, children: "This component will not be visible to readers. You can leave it here for future reference, or remove it." })
        ] })
      ] }) }),
      /* @__PURE__ */ wt.jsxs(Hi.Panel, { children: [
        /* @__PURE__ */ wt.jsxs("div", { className: Ff.inputForm, children: [
          /* @__PURE__ */ wt.jsx("div", { children: "What would you like to generate?" }),
          /* @__PURE__ */ wt.jsx(
            "input",
            {
              id: pe,
              className: Ff.input,
              defaultValue: i,
              onKeyDown: G,
              placeholder: "i.e. Create a 100-word draft about unicorns"
            }
          ),
          " ",
          /* @__PURE__ */ wt.jsx(qf, { variant: "default", onClick: () => {
            z([]), E(null);
          }, children: "Clear" }),
          " Press enter to generate.",
          /* @__PURE__ */ wt.jsx("br", {}),
          /* @__PURE__ */ wt.jsx("br", {}),
          /* @__PURE__ */ wt.jsxs("div", { className: `${Ff.requestStatusStyle} ${I}`, children: [
            "Status: ",
            $.statuses[$.index]
          ] })
        ] }),
        K
      ] })
    ] }) })
  ] }) });
}
function Q6(i, l, u) {
  const [d, _] = Or(l), E = { width: ue(12), height: ue(12) }, [y, { open: O, close: x }] = wz(!1), R = i.map((z, G) => /* @__PURE__ */ wt.jsxs(Ol.Tab, { value: "v" + G, leftSection: /* @__PURE__ */ wt.jsx(V6, { style: E }), children: [
    "Variant ",
    G + 1
  ] }, G)), $ = (z, G) => z.length <= G ? z : z.slice(0, G) + "... ", D = i.map((z, G) => /* @__PURE__ */ wt.jsx(Ol.Panel, { value: "v" + G, children: $(z, 200) }, G)), A = i.length > 0 ? /* @__PURE__ */ wt.jsxs(wt.Fragment, { children: [
    /* @__PURE__ */ wt.jsx(qf, { onClick: O, children: "View Full Response" }),
    "  ",
    /* @__PURE__ */ wt.jsx(qf, { variant: "default", onClick: () => {
      u(i[d]);
    }, children: "Inject Response" })
  ] }) : null;
  return /* @__PURE__ */ wt.jsx("div", { children: /* @__PURE__ */ wt.jsxs(Ol, { value: "v" + d, onChange: (z) => {
    _(z.substring(1));
  }, children: [
    /* @__PURE__ */ wt.jsx(Ol.List, { children: R }),
    D,
    /* @__PURE__ */ wt.jsx("br", {}),
    /* @__PURE__ */ wt.jsx("br", {}),
    /* @__PURE__ */ wt.jsx(yg, { my: "sm", variant: "dashed" }),
    A,
    /* @__PURE__ */ wt.jsxs($o, { size: "calc(100vw - 3rem)", opened: y, onClose: x, title: "Full Response", centered: !0, children: [
      /* @__PURE__ */ wt.jsx(yg, { my: "sm", variant: "dashed" }),
      /* @__PURE__ */ wt.jsx("div", { dangerouslySetInnerHTML: { __html: i[d] } })
    ] })
  ] }) });
}
const G6 = {
  /** Put your mantine theme override here */
}, q6 = `
AI, or Artificial Intelligence, is a technology that is rapidly changing the way businesses operate. With the help of AI, businesses can automate repetitive tasks, improve customer service, and make better decisions. WordPress is one of the most popular content management systems (CMS) used by businesses and individuals to create websites and blogs. In this article, we will discuss some of the ways in which AI can be used with WordPress to improve business operations.<br /><br />Chatbots: Chatbots are automated software programs that can interact with users through text-based conversations. They can be used to provide customer support, handle sales inquiries, and perform other tasks. Chatbots can be integrated with WordPress using plugins like Botpress or WP Chatbot. These plugins allow you to create chatbots that can interact with website visitors and provide them with information or assistance.<br /><br />Content Personalization: AI can be used to personalize the content displayed on a website. This can be done by analyzing the user's behavior and preferences and displaying content that is relevant to them. WordPress plugins like WP Personalized Content and AI Content Personalization can be used to personalize content based on user behavior and preferences.<br /><br />Image and Video Optimization: AI can be used to optimize images and videos on a website. This can be done by automatically compressing images and videos, removing unnecessary metadata, and optimizing file sizes. WordPress plugins like WP Smush Pro and WP Retina 2x can be used to optimize images and videos on a website.<br /><br />SEO: AI can be used to improve SEO on a website. This can be done by analyzing the website's content and structure, identifying keywords and phrases, and optimizing the website for search engines. WordPress plugins like Yoast SEO and All in One SEO Pack can be used to optimize a website for search engines.<br /><br />Social Media Integration: AI can be used to automate social media interactions. This can be done by scheduling social media posts, monitoring social media mentions, and responding to comments and messages. WordPress plugins like Social Warfare and Social Media Auto Poster can be used to automate social media interactions.<br /><br />Lead Generation: AI can be used to generate leads for businesses. This can be done by analyzing website traffic, identifying potential customers, and providing them with relevant information. WordPress plugins like LeadPages and WPForms can be used to generate leads for businesses.<br /><br />Customer Segmentation: AI can be used to segment customers into different groups based on their behavior, preferences, and demographics. This can be done by analyzing website traffic, customer data, and social media interactions. WordPress plugins like WP Customer Segmentation and WP User Segmentation can be used to segment customers into different groups.<br /><br />Content Marketing: AI can be used to create content for marketing campaigns. This can be done by analyzing customer data, competitor analysis, and industry trends. WordPress plugins like AI Content Marketing and WP Content AI can be used to create content for marketing campaigns.<br /><br />Email Marketing: AI can be used to automate email marketing campaigns. This can be done by analyzing customer data, email open rates, and click-through rates. WordPress plugins like WP Mail Sender and WP Mail AI can be used to automate email marketing campaigns.<br /><br />Customer Support: AI can be used to improve customer support. This can be done by analyzing customer feedback, support tickets, and social media interactions. WordPress plugins like WP Support Plus and WP Support Bot can be used to improve customer support.<br /><br />In conclusion, AI can be a powerful tool for businesses that use WordPress. By integrating AI with WordPress, businesses can automate repetitive tasks, improve customer service, and make better decisions. By using AI with WordPress, businesses can improve their operations, increase their efficiency, and gain a competitive advantage in their industry.<br /><br />
`;
function e5(i, l, u, d) {
  const _ = { ...d };
  _.inputValue = _.inputValue ?? "", _.response = _.response ?? [q6];
  const E = W6(
    _,
    i,
    l,
    u
  );
  return /* @__PURE__ */ wt.jsx(hx, { theme: G6, children: E });
}
export {
  W6 as Block,
  e5 as Container,
  Q6 as Responses,
  Ff as Styles
};
