"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9579],
  {
    3063: (e, t, r) => {
      r.d(t, { F: () => l });
      var n = r(61405),
        o = r(96748),
        i = r(86475),
        c = r(86161),
        a = r(12115),
        s = r(8828);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : c.b,
            o = (0, a.useRef)([]),
            i = (0, s.useSyncExternalStoreWithSelector)(
              e,
              t,
              r,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && o.current.length) {
                  for (let r of o.current) if (!n(e[r], t[r])) return !1;
                  return !0;
                }
                return n(e, t);
              }
            );
          return (0, a.useMemo)(() => {
            if (u(i)) {
              let e = { ...i },
                t = {};
              for (let [r, n] of Object.entries(e))
                t = {
                  ...t,
                  [r]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (o.current.includes(r) || o.current.push(r), n),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return i;
          }, [i]);
        })(
          (e) => (0, n.F)(t, { onChange: e }),
          () => (0, o.s)(t)
        );
      }
    },
    8828: (e, t, r) => {
      e.exports = r(83654);
    },
    14806: (e, t, r) => {
      e.exports = r(30125);
    },
    20063: (e, t, r) => {
      var n = r(47260);
      r.o(n, "useParams") &&
        r.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    28698: (e, t, r) => {
      r.d(t, { C: () => a });
      var n,
        o,
        i = r(46465),
        c = function (e, t, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
        };
      class a extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return `@wagmi/core@${i.r}`;
        }
        constructor(e, t = {}) {
          super(),
            n.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let r =
              t.cause instanceof a
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o = (t.cause instanceof a && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: ${this.docsBaseUrl}${o}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return c(this, n, "m", o).call(this, this, e);
        }
      }
      (n = new WeakSet()),
        (o = function e(t, r) {
          return r?.(t)
            ? t
            : t.cause
            ? c(this, n, "m", e).call(this, t.cause, r)
            : t;
        });
    },
    30125: (e, t, r) => {
      var n = r(12115),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = n.useState,
        c = n.useEffect,
        a = n.useLayoutEffect,
        s = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = i({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                l = n[1];
              return (
                a(
                  function () {
                    (o.value = r), (o.getSnapshot = t), u(o) && l({ inst: o });
                  },
                  [e, r, t]
                ),
                c(
                  function () {
                    return (
                      u(o) && l({ inst: o }),
                      e(function () {
                        u(o) && l({ inst: o });
                      })
                    );
                  },
                  [e]
                ),
                s(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    46465: (e, t, r) => {
      r.d(t, { r: () => n });
      let n = "2.16.4";
    },
    61405: (e, t, r) => {
      r.d(t, { F: () => i });
      var n = r(86161),
        o = r(96748);
      function i(e, t) {
        let { onChange: r } = t;
        return e.subscribe(() => (0, o.s)(e), r, {
          equalityFn(e, t) {
            let { connector: r, ...o } = e,
              { connector: i, ...c } = t;
            return (0, n.b)(o, c) && r?.id === i?.id && r?.uid === i?.uid;
          },
        });
      }
    },
    65465: (e, t, r) => {
      r.d(t, { R: () => a, x: () => s });
      var n = r(12115);
      let o = !1;
      async function i(e, t = {}) {
        let r;
        if (o) return [];
        (o = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let n = [];
        if (t.connectors?.length)
          for (let r of t.connectors) {
            let t;
            (t = "function" == typeof r ? e._internal.connectors.setup(r) : r),
              n.push(t);
          }
        else n.push(...e.connectors);
        try {
          r = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let c = {};
        for (let [, t] of e.state.connections) c[t.connector.id] = 1;
        r && (c[r] = 0);
        let a =
            Object.keys(c).length > 0
              ? [...n].sort((e, t) => (c[e.id] ?? 10) - (c[t.id] ?? 10))
              : n,
          s = !1,
          u = [],
          l = [];
        for (let t of a) {
          let r = await t.getProvider().catch(() => void 0);
          if (!r || l.some((e) => e === r) || !(await t.isAuthorized()))
            continue;
          let n = await t.connect({ isReconnecting: !0 }).catch(() => null);
          n &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let r = new Map(s ? e.connections : new Map()).set(t.uid, {
                accounts: n.accounts,
                chainId: n.chainId,
                connector: t,
              });
              return { ...e, current: s ? e.current : t.uid, connections: r };
            }),
            u.push({ accounts: n.accounts, chainId: n.chainId, connector: t }),
            l.push(r),
            (s = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (s
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (o = !1),
          u
        );
      }
      function c(e) {
        let {
            children: t,
            config: r,
            initialState: o,
            reconnectOnMount: c = !0,
          } = e,
          { onMount: a } = (function (e, t) {
            let { initialState: r, reconnectOnMount: n } = t;
            return (
              r &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...r,
                  chainId: e.chains.some((e) => e.id === r.chainId)
                    ? r.chainId
                    : e.chains[0].id,
                  connections: n ? r.connections : new Map(),
                  status: n ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let r = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              r.add(t);
                        let n = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (r.has(t.info.rdns)) continue;
                          let o =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            i = e._internal.connectors.setup(o);
                          n.push(i);
                        }
                        return [...t, ...n];
                      })),
                    n
                      ? i(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(r, { initialState: o, reconnectOnMount: c });
        r._internal.ssr || a();
        let s = (0, n.useRef)(!0);
        return (
          (0, n.useEffect)(() => {
            if (s.current && r._internal.ssr)
              return (
                a(),
                () => {
                  s.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let a = (0, n.createContext)(void 0);
      function s(e) {
        let { children: t, config: r } = e;
        return (0, n.createElement)(
          c,
          e,
          (0, n.createElement)(a.Provider, { value: r }, t)
        );
      }
    },
    71450: (e, t, r) => {
      r.r(t),
        r.d(t, {
          __addDisposableResource: () => M,
          __assign: () => i,
          __asyncDelegator: () => S,
          __asyncGenerator: () => P,
          __asyncValues: () => E,
          __await: () => j,
          __awaiter: () => h,
          __classPrivateFieldGet: () => k,
          __classPrivateFieldIn: () => D,
          __classPrivateFieldSet: () => A,
          __createBinding: () => v,
          __decorate: () => a,
          __disposeResources: () => $,
          __esDecorate: () => u,
          __exportStar: () => b,
          __extends: () => o,
          __generator: () => y,
          __importDefault: () => T,
          __importStar: () => R,
          __makeTemplateObject: () => x,
          __metadata: () => p,
          __param: () => s,
          __propKey: () => f,
          __read: () => m,
          __rest: () => c,
          __rewriteRelativeImportExtension: () => W,
          __runInitializers: () => l,
          __setFunctionName: () => d,
          __spread: () => w,
          __spreadArray: () => O,
          __spreadArrays: () => _,
          __values: () => g,
          default: () => V,
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function c(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      function a(e, t, r, n) {
        var o,
          i = arguments.length,
          c =
            i < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          c = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (c = (i < 3 ? o(c) : i > 3 ? o(t, r, c) : o(t, r)) || c);
        return i > 3 && c && Object.defineProperty(t, r, c), c;
      }
      function s(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t, r, n, o, i) {
        function c(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var a,
            s = n.kind,
            u = "getter" === s ? "get" : "setter" === s ? "set" : "value",
            l = !t && e ? (n.static ? e : e.prototype) : null,
            f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
            d = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var h = {};
          for (var y in n) h[y] = "access" === y ? {} : n[y];
          for (var y in n.access) h.access[y] = n.access[y];
          h.addInitializer = function (e) {
            if (d)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(c(e || null));
          };
          var v = (0, r[p])(
            "accessor" === s ? { get: f.get, set: f.set } : f[u],
            h
          );
          if ("accessor" === s) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v)
              throw TypeError("Object expected");
            (a = c(v.get)) && (f.get = a),
              (a = c(v.set)) && (f.set = a),
              (a = c(v.init)) && o.unshift(a);
          } else (a = c(v)) && ("field" === s ? o.unshift(a) : (f[u] = a));
        }
        l && Object.defineProperty(l, n.name, f), (d = !0);
      }
      function l(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++)
          r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0;
      }
      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function d(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function c(e) {
            try {
              s(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(c, a);
          }
          s((n = n.apply(e, t || [])).next());
        });
      }
      function y(e, t) {
        var r,
          n,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          c = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (c.next = a(0)),
          (c.throw = a(1)),
          (c.return = a(2)),
          "function" == typeof Symbol &&
            (c[Symbol.iterator] = function () {
              return this;
            }),
          c
        );
        function a(a) {
          return function (s) {
            var u = [a, s];
            if (r) throw TypeError("Generator is already executing.");
            for (; c && ((c = 0), u[0] && (i = 0)), i; )
              try {
                if (
                  ((r = 1),
                  n &&
                    (o =
                      2 & u[0]
                        ? n.return
                        : u[0]
                        ? n.throw || ((o = n.return) && o.call(n), 0)
                        : n.next) &&
                    !(o = o.call(n, u[1])).done)
                )
                  return o;
                switch (((n = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return i.label++, { value: u[1], done: !1 };
                  case 5:
                    i.label++, (n = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                      (6 === u[0] || 2 === u[0])
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      i.label = u[1];
                      break;
                    }
                    if (6 === u[0] && i.label < o[1]) {
                      (i.label = o[1]), (o = u);
                      break;
                    }
                    if (o && i.label < o[2]) {
                      (i.label = o[2]), i.ops.push(u);
                      break;
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                u = t.call(e, i);
              } catch (e) {
                (u = [6, e]), (n = 0);
              } finally {
                r = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          };
        }
      }
      var v = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(t, r);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, o);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function b(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            v(t, e, r);
      }
      function g(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function m(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          c = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
            c.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return c;
      }
      function w() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(m(arguments[t]));
        return e;
      }
      function _() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), o = 0, t = 0; t < r; t++)
          for (var i = arguments[t], c = 0, a = i.length; c < a; c++, o++)
            n[o] = i[c];
        return n;
      }
      function O(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, o = 0, i = t.length; o < i; o++)
            (!n && o in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function j(e) {
        return this instanceof j ? ((this.v = e), this) : new j(e);
      }
      function P(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          o = r.apply(e, t || []),
          i = [];
        return (
          (n = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          c("next"),
          c("throw"),
          c("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, u);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function c(e, t) {
          o[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                i.push([e, t, r, n]) > 1 || a(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function a(e, t) {
          try {
            var r;
            (r = o[e](t)).value instanceof j
              ? Promise.resolve(r.value.v).then(s, u)
              : l(i[0][2], r);
          } catch (e) {
            l(i[0][3], e);
          }
        }
        function s(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function S(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, o) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: j(e[n](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = g(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, o) {
                var i, c, a;
                (i = n),
                  (c = o),
                  (a = (t = e[r](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    i({ value: e, done: a });
                  }, c);
              });
            };
        }
      }
      function x(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var I = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        C = function (e) {
          return (C =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
              return t;
            })(e);
        };
      function R(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = C(e), n = 0; n < r.length; n++)
            "default" !== r[n] && v(t, e, r[n]);
        return I(t, e), t;
      }
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function k(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function A(e, t, r, n, o) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? o.call(e, r) : o ? (o.value = r) : t.set(e, r), r;
      }
      function D(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function M(e, t, r) {
        if (null != t) {
          var n, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (o = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          o &&
            (n = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var F =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function $(e) {
        function t(t) {
          (e.error = e.hasError
            ? new F(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          n = 0;
        return (function o() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === n)
                return (n = 0), e.stack.push(r), Promise.resolve().then(o);
              if (r.dispose) {
                var i = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else n |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === n)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function W(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, r, n, o, i) {
                return r
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !n || (o && i)
                  ? n + o + "." + i.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let V = {
        __extends: o,
        __assign: i,
        __rest: c,
        __decorate: a,
        __param: s,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: h,
        __generator: y,
        __createBinding: v,
        __exportStar: b,
        __values: g,
        __read: m,
        __spread: w,
        __spreadArrays: _,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: P,
        __asyncDelegator: S,
        __asyncValues: E,
        __makeTemplateObject: x,
        __importStar: R,
        __importDefault: T,
        __classPrivateFieldGet: k,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: D,
        __addDisposableResource: M,
        __disposeResources: $,
        __rewriteRelativeImportExtension: W,
      };
    },
    83654: (e, t, r) => {
      var n = r(12115),
        o = r(14806),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        c = o.useSyncExternalStore,
        a = n.useRef,
        s = n.useEffect,
        u = n.useMemo,
        l = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
        var f = a(null);
        if (null === f.current) {
          var d = { hasValue: !1, value: null };
          f.current = d;
        } else d = f.current;
        var p = c(
          e,
          (f = u(
            function () {
              function e(e) {
                if (!s) {
                  if (
                    ((s = !0), (c = e), (e = n(e)), void 0 !== o && d.hasValue)
                  ) {
                    var t = d.value;
                    if (o(t, e)) return (a = t);
                  }
                  return (a = e);
                }
                if (((t = a), i(c, e))) return t;
                var r = n(e);
                return void 0 !== o && o(t, r)
                  ? ((c = e), t)
                  : ((c = e), (a = r));
              }
              var c,
                a,
                s = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, r, n, o]
          ))[0],
          f[1]
        );
        return (
          s(
            function () {
              (d.hasValue = !0), (d.value = p);
            },
            [p]
          ),
          l(p),
          p
        );
      };
    },
    86161: (e, t, r) => {
      r.d(t, {
        b: () =>
          function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              let n, o;
              if (t.constructor !== r.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(r)) {
                if ((n = t.length) !== r.length) return !1;
                for (o = n; 0 != o--; ) if (!e(t[o], r[o])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === r.toString();
              let i = Object.keys(t);
              if ((n = i.length) !== Object.keys(r).length) return !1;
              for (o = n; 0 != o--; )
                if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
              for (o = n; 0 != o--; ) {
                let n = i[o];
                if (n && !e(t[n], r[n])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          },
      });
    },
    86475: (e, t, r) => {
      r.d(t, { U: () => s });
      var n = r(12115),
        o = r(65465),
        i = r(28698);
      class c extends i.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return "wagmi@2.14.11";
        }
      }
      class a extends c {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = null != (e = t.config) ? e : (0, n.useContext)(o.R);
        if (!r) throw new a();
        return r;
      }
    },
    96748: (e, t, r) => {
      r.d(t, { s: () => n });
      function n(e) {
        let t = e.state.current,
          r = e.state.connections.get(t),
          n = r?.accounts,
          o = n?.[0],
          i = e.chains.find((e) => e.id === r?.chainId),
          c = e.state.status;
        switch (c) {
          case "connected":
            return {
              address: o,
              addresses: n,
              chain: i,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: c,
            };
          case "reconnecting":
            return {
              address: o,
              addresses: n,
              chain: i,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !!o,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: c,
            };
          case "connecting":
            return {
              address: o,
              addresses: n,
              chain: i,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: c,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: c,
            };
        }
      }
    },
  },
]);
