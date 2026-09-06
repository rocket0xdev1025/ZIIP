(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1227],
  {
    669: (e, t, n) => {
      let r = n(46342).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          n = r(e),
          o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          i = [n - 7];
        for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
        return i.push(6), i.reverse();
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            o = r.length;
          for (let e = 0; e < o; e++)
            for (let t = 0; t < o; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== o - 1) &&
                (e !== o - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        });
    },
    983: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => b });
      var o = n(95089);
      let i = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => i(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => i(t)(e),
            };
          }
        },
        a = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof o || null === o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            i = {
              setState: r,
              getState: o,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, o, i));
          return i;
        },
        s = (e) => (e ? a(e) : a);
      var c = n(63036),
        l = n(15549);
      class u {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new l(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function d(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function p(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function h(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function f(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              o = [],
              i = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (o.length) {
                  let e = h(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), i.splice(e)),
                    (i[i.length] = a);
                  let n = h(o, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, p(i, n)) : `[ref=${p(i, n)}]`;
                } else (o[0] = s), (i[0] = a);
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let w = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var m = n(43159);
      let g = 256;
      var y = n(46465);
      function b(e) {
        let t,
          n,
          a,
          {
            multiInjectedProviderDiscovery: l = !0,
            storage: p = (function (e) {
              let {
                deserialize: t = d,
                key: n = "wagmi",
                serialize: r = f,
                storage: o = w,
              } = e;
              function i(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...o,
                key: n,
                async getItem(e, r) {
                  let a = o.getItem(`${n}.${e}`),
                    s = await i(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await i(o.removeItem(a))
                    : await i(o.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await i(o.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : w;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: h = !0,
            ssr: b = !1,
            ...A
          } = e,
          v =
            "undefined" != typeof window && l
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          C = s(() => A.chains),
          x = s(() => {
            let e = [],
              t = new Set();
            for (let n of A.connectors ?? []) {
              let r = k(n);
              if ((e.push(r), !b && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!b && v)
              for (let n of v.getProviders())
                t.has(n.info.rdns) || e.push(k(E(n)));
            return e;
          });
        function k(e) {
          let t = new u(
              (function (e = 11) {
                if (!r || g + e > 512) {
                  (r = ""), (g = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(g, g++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: C.getState(),
                storage: p,
                transports: A.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", T), n.setup?.(), n;
        }
        function E(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, c.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let B = new Map();
        function I() {
          return {
            chainId: C.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let S = "0.0.0-canary-";
        t = y.r.startsWith(S)
          ? Number.parseInt(y.r.replace(S, ""))
          : Number.parseInt(y.r.split(".")[0] ?? "0");
        let M = s(
          ((a = p
            ? ((n = {
                migrate(e, n) {
                  if (n === t) return e;
                  let r = I(),
                    o = P(e, r.chainId);
                  return { ...r, chainId: o };
                },
                name: "store",
                partialize: (e) => ({
                  connections: {
                    __type: "Map",
                    value: Array.from(e.connections.entries()).map(([e, t]) => {
                      let { id: n, name: r, type: o, uid: i } = t.connector;
                      return [
                        e,
                        {
                          ...t,
                          connector: { id: n, name: r, type: o, uid: i },
                        },
                      ];
                    }),
                  },
                  chainId: e.chainId,
                  current: e.current,
                }),
                merge(e, t) {
                  "object" == typeof e && e && "status" in e && delete e.status;
                  let n = P(e, t.chainId);
                  return { ...t, ...e, chainId: n };
                },
                skipHydration: b,
                storage: p,
                version: t,
              }),
              (e, t, r) => {
                let o,
                  a = {
                    storage: (function (e, t) {
                      let n;
                      try {
                        n = e();
                      } catch (e) {
                        return;
                      }
                      return {
                        getItem: (e) => {
                          var t;
                          let r = (e) =>
                              null === e ? null : JSON.parse(e, void 0),
                            o = null != (t = n.getItem(e)) ? t : null;
                          return o instanceof Promise ? o.then(r) : r(o);
                        },
                        setItem: (e, t) =>
                          n.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: (e) => n.removeItem(e),
                      };
                    })(() => localStorage),
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => ({ ...t, ...e }),
                    ...n,
                  },
                  s = !1,
                  c = new Set(),
                  l = new Set(),
                  u = a.storage;
                if (!u)
                  return I(
                    (...t) => {
                      console.warn(
                        `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                      ),
                        e(...t);
                    },
                    t,
                    r
                  );
                let d = () => {
                    let e = a.partialize({ ...t() });
                    return u.setItem(a.name, { state: e, version: a.version });
                  },
                  p = r.setState;
                r.setState = (e, t) => {
                  p(e, t), d();
                };
                let h = I(
                  (...t) => {
                    e(...t), d();
                  },
                  t,
                  r
                );
                r.getInitialState = () => h;
                let f = () => {
                  var n, r;
                  if (!u) return;
                  (s = !1),
                    c.forEach((e) => {
                      var n;
                      return e(null != (n = t()) ? n : h);
                    });
                  let p =
                    (null == (r = a.onRehydrateStorage)
                      ? void 0
                      : r.call(a, null != (n = t()) ? n : h)) || void 0;
                  return i(u.getItem.bind(u))(a.name)
                    .then((e) => {
                      if (e)
                        if (
                          "number" != typeof e.version ||
                          e.version === a.version
                        )
                          return [!1, e.state];
                        else {
                          if (a.migrate)
                            return [!0, a.migrate(e.state, e.version)];
                          console.error(
                            "State loaded from storage couldn't be migrated since no migrate function was provided"
                          );
                        }
                      return [!1, void 0];
                    })
                    .then((n) => {
                      var r;
                      let [i, s] = n;
                      if (
                        (e((o = a.merge(s, null != (r = t()) ? r : h)), !0), i)
                      )
                        return d();
                    })
                    .then(() => {
                      null == p || p(o, void 0),
                        (o = t()),
                        (s = !0),
                        l.forEach((e) => e(o));
                    })
                    .catch((e) => {
                      null == p || p(void 0, e);
                    });
                };
                return (
                  (r.persist = {
                    setOptions: (e) => {
                      (a = { ...a, ...e }), e.storage && (u = e.storage);
                    },
                    clearStorage: () => {
                      null == u || u.removeItem(a.name);
                    },
                    getOptions: () => a,
                    rehydrate: () => f(),
                    hasHydrated: () => s,
                    onHydrate: (e) => (
                      c.add(e),
                      () => {
                        c.delete(e);
                      }
                    ),
                    onFinishHydration: (e) => (
                      l.add(e),
                      () => {
                        l.delete(e);
                      }
                    ),
                  }),
                  a.skipHydration || f(),
                  o || h
                );
              })
            : I),
          (e, t, n) => {
            let r = n.subscribe;
            return (
              (n.subscribe = (e, t, o) => {
                let i = e;
                if (t) {
                  let r = (null == o ? void 0 : o.equalityFn) || Object.is,
                    a = e(n.getState());
                  (i = (n) => {
                    let o = e(n);
                    if (!r(a, o)) {
                      let e = a;
                      t((a = o), e);
                    }
                  }),
                    (null == o ? void 0 : o.fireImmediately) && t(a, a);
                }
                return r(i);
              }),
              a(e, t, n)
            );
          })
        );
        function P(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            C.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function N(e) {
          M.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function T(e) {
          "connecting" !== M.getState().status &&
            "reconnecting" !== M.getState().status &&
            M.setState((t) => {
              let n = x.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", N),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", N),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", Q),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function Q(e) {
          M.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", N),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", Q),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", T);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let r = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          M.setState(I()),
          h &&
            M.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (C.getState().some((t) => t.id === e))
                  return M.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          v?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of x.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let o of e) {
              if (n.has(o.info.rdns)) continue;
              let e = k(E(o));
              t.has(e.id) || r.push(e);
            }
            (!p || M.persist.hasHydrated()) &&
              x.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return C.getState();
            },
            get connectors() {
              return x.getState();
            },
            storage: p,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? M.getState().chainId,
                r = C.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new m.nk();
              {
                let e = B.get(M.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new m.nk();
              }
              {
                let e = B.get(n);
                if (e) return e;
              }
              if (A.client) t = A.client({ chain: r });
              else {
                let e = r.id,
                  n = C.getState().map((e) => e.id),
                  i = {};
                for (let [t, r] of Object.entries(A))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) i[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        i[t] = r;
                      }
                    else i[t] = r;
                t = (0, o.U)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => A.transports[e]({ ...t, connectors: x }),
                });
              }
              return B.set(n, t), t;
            },
            get state() {
              return M.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(M.getState()) : e;
              let n = I();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                M.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              M.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: v,
              store: M,
              ssr: !!b,
              syncConnectedChain: h,
              transports: A.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(C.getState()) : e;
                  if (0 !== t.length) return C.setState(t, !0);
                },
                subscribe: (e) => C.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: E,
                setup: k,
                setState: (e) =>
                  x.setState("function" == typeof e ? e(x.getState()) : e, !0),
                subscribe: (e) => x.subscribe(e),
              },
              events: { change: N, connect: T, disconnect: Q },
            },
          }
        );
      }
    },
    1595: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => l });
      var r = n(41718),
        o = n(21681),
        i = n(47575),
        a = n(75575),
        s = n(99941),
        c = n(86475);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: s, ...c } = { ...a, name: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          f = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: f });
      }
    },
    2535: (e, t, n) => {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, { U: () => r });
    },
    2821: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = function () {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      };
    },
    3602: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => l });
      var r = n(3629),
        o = n(21681),
        i = n(47575),
        a = n(75575),
        s = n(99941),
        c = n(86475);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: l, query: u = {} } = n,
          d = (0, c.U)(n),
          p = (0, s.i)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: i, ...a } = t[1];
                if (!n) throw Error("address is required");
                let { chainId: s, ...c } = { ...a, address: n },
                  l = e.getClient({ chainId: s });
                return (0, o.T)(l, r.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : p }),
          f = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...h, enabled: f });
      }
    },
    3629: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => u });
      var r = n(4486),
        o = n(71552),
        i = n(34561),
        a = n(92987),
        s = n(38647),
        c = n(72757),
        l = n(25157);
      async function u(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: u,
          gatewayUrls: d,
          strict: p,
          universalResolverAddress: h,
        }
      ) {
        let f = h;
        if (!f) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          f = (0, o.M)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let w = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let o = {
              address: f,
              abi: r.oX,
              functionName: "reverse",
              args: [(0, i.nj)((0, s.F)(w))],
              blockNumber: n,
              blockTag: u,
            },
            a = (0, c.T)(e, l.J, "readContract"),
            [p, h] = d ? await a({ ...o, args: [...o.args, d] }) : await a(o);
          if (t.toLowerCase() !== h.toLowerCase()) return null;
          return p;
        } catch (e) {
          if (p) throw e;
          if ((0, a.J)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    4697: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => o });
      var r = n(60587);
      function o(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.q)(t) ? t : null;
      }
    },
    9729: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => c });
      var r = n(2535),
        o = n(43159),
        i = n(77608),
        a = n(73168),
        s = n(34561);
      function c(e = {}) {
        var t, l;
        let u, d, p, h, f, w, m, g, y;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              type: c.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, i.b)(e));
                  p ||
                    ((p = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", p)),
                    h ||
                      ((h = this.onChainChanged.bind(this)),
                      t.on("chainChanged", h)),
                    f ||
                      ((f = this.onDisconnect.bind(this)),
                      t.on("disconnect", f));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: n, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                p && (e.removeListener("accountsChanged", p), (p = void 0)),
                  h && (e.removeListener("chainChanged", h), (h = void 0)),
                  f && (e.removeListener("disconnect", f), (f = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
                  u = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(1029),
                      n.e(2183),
                      n.e(9466),
                    ]).then(n.t.bind(n, 2183, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let r = u.walletExtension?.getChainId(),
                    o =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    i = t.chainId || o?.id,
                    a = t.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  d = u.makeWeb3Provider(a, i);
                }
                return d;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                p && (n.removeListener("accountsChanged", p), (p = void 0)),
                  h && (n.removeListener("chainChanged", h), (h = void 0)),
                  f && (n.removeListener("disconnect", f), (f = void 0));
              },
            })))
          : ((l = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, i.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", m)),
                    g ||
                      ((g = this.onChainChanged.bind(this)),
                      n.on("chainChanged", g)),
                    y ||
                      ((y = this.onDisconnect.bind(this)),
                      n.on("disconnect", y));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return { accounts: r, chainId: o };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  g && (e.removeListener("chainChanged", g), (g = void 0)),
                  y && (e.removeListener("disconnect", y), (y = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!w) {
                  let t =
                      "string" == typeof l.preference
                        ? { options: l.preference }
                        : {
                            ...l.preference,
                            options: l.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await Promise.all([
                      n.e(1029),
                      n.e(8951),
                    ]).then(n.bind(n, 18951));
                  w = r({
                    ...l,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  g && (n.removeListener("chainChanged", g), (g = void 0)),
                  y && (n.removeListener("disconnect", y), (y = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    10429: (e, t) => {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        });
    },
    14358: (e, t, n) => {
      "use strict";
      n.d(t, { Zh: () => g });
      var r = n(41706),
        o = n(40290),
        i = n(34561),
        a = n(80329),
        s = n(97525),
        c = n(76115),
        l = n(59350),
        u = n(13933);
      class d extends u.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, l.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class p extends u.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class h extends u.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var f = n(24784),
        w = n(16871),
        m = n(1588);
      function g(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          l = {
            EIP712Domain: (function ({ domain: e }) {
              return [
                "string" == typeof e?.name && { name: "name", type: "string" },
                e?.version && { name: "version", type: "string" },
                ("number" == typeof e?.chainId ||
                  "bigint" == typeof e?.chainId) && {
                  name: "chainId",
                  type: "uint256",
                },
                e?.verifyingContract && {
                  name: "verifyingContract",
                  type: "address",
                },
                e?.salt && { name: "salt", type: "bytes32" },
              ].filter(Boolean);
            })({ domain: t }),
            ...e.types,
          },
          {
            domain: u,
            message: g,
            primaryType: b,
            types: A,
          } = { domain: t, message: n, primaryType: r, types: l },
          v = (e, t) => {
            for (let n of e) {
              let { name: e, type: r } = n,
                o = t[e],
                a = r.match(m.Ge);
              if (a && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, n] = a;
                (0, i.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(n) / 8,
                });
              }
              if ("address" === r && "string" == typeof o && !(0, f.P)(o))
                throw new c.M({ address: o });
              let l = r.match(m.BD);
              if (l) {
                let [e, t] = l;
                if (t && (0, w.E)(o) !== Number.parseInt(t))
                  throw new s.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, w.E)(o),
                  });
              }
              let u = A[r];
              u &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new h({ type: e });
                })(r),
                v(u, o));
            }
          };
        if (A.EIP712Domain && u) {
          if ("object" != typeof u) throw new d({ domain: u });
          v(A.EIP712Domain, u);
        }
        if ("EIP712Domain" !== b)
          if (A[b]) v(A[b], g);
          else throw new p({ primaryType: b, types: A });
        let C = ["0x1901"];
        return (
          t &&
            C.push(
              (function ({ domain: e, types: t }) {
                return y({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: l })
            ),
          "EIP712Domain" !== r &&
            C.push(y({ data: n, primaryType: r, types: l })),
          (0, a.S)((0, o.xW)(C))
        );
      }
      function y({ data: e, primaryType: t, types: n }) {
        let o = (function e({ data: t, primaryType: n, types: o }) {
          let s = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, i.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let o = t.match(/^\w*/u),
                          i = o?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let o of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${o}(${t[o]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(n);
              })({ primaryType: n, types: o }),
            ];
          for (let l of o[n]) {
            let [n, u] = (function t({ types: n, name: o, type: s, value: c }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: s, types: n })),
                ];
              if ("bytes" === s) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === s)
                return [{ type: "bytes32" }, (0, a.S)((0, i.nj)(c))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf("[")),
                  i = c.map((r) => t({ name: o, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, r.h)(
                      i.map(([e]) => e),
                      i.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: o, name: l.name, type: l.type, value: t[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.h)(s, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.S)(o);
      }
    },
    14432: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => H });
      var r,
        o,
        i = n(71450),
        a = n(12115),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        d = new WeakMap();
      function p(e) {
        return e;
      }
      var h = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = p),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    (n = []), o.forEach(e), (t = n);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (o.options = (0, i.__assign)({ async: !0, ssr: !1 }, e)), o;
        })(),
        f = function () {},
        w = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            s,
            c = a.useRef(null),
            p = a.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f,
            }),
            w = p[0],
            m = p[1],
            g = e.forwardProps,
            y = e.children,
            b = e.className,
            A = e.removeScrollBar,
            v = e.enabled,
            C = e.shards,
            x = e.sideCar,
            k = e.noIsolation,
            E = e.inert,
            B = e.allowPinchZoom,
            I = e.as,
            S = e.gapMode,
            M = (0, i.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            P =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (s = o.facade),
              u(
                function () {
                  var e = d.get(s);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = s.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, o);
                      });
                  }
                  d.set(s, n);
                },
                [n]
              ),
              s),
            N = (0, i.__assign)((0, i.__assign)({}, M), w);
          return a.createElement(
            a.Fragment,
            null,
            v &&
              a.createElement(x, {
                sideCar: h,
                removeScrollBar: A,
                shards: C,
                noIsolation: k,
                inert: E,
                setCallbacks: m,
                allowPinchZoom: !!B,
                lockRef: c,
                gapMode: S,
              }),
            g
              ? a.cloneElement(
                  a.Children.only(y),
                  (0, i.__assign)((0, i.__assign)({}, N), { ref: P })
                )
              : a.createElement(
                  void 0 === I ? "div" : I,
                  (0, i.__assign)({}, N, { className: b, ref: P }),
                  y
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: c, zeroRight: s });
      var m = function (e) {
        var t = e.sideCar,
          n = (0, i.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, i.__assign)({}, n));
      };
      m.isSideCarExport = !0;
      var g = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        y = function () {
          var e = g();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        b = function () {
          var e = y();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        A = { left: 0, top: 0, right: 0, gap: 0 },
        v = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        C = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [v(n), v(r), v(o)];
        },
        x = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return A;
          var t = C(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        k = b(),
        E = "data-scroll-locked",
        B = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(E, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(E, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        I = function () {
          var e = parseInt(document.body.getAttribute(E) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        S = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(E, (I() + 1).toString()),
              function () {
                var e = I() - 1;
                e <= 0
                  ? document.body.removeAttribute(E)
                  : document.body.setAttribute(E, e.toString());
              }
            );
          }, []);
        },
        M = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          S();
          var i = a.useMemo(
            function () {
              return x(o);
            },
            [o]
          );
          return a.createElement(k, {
            styles: B(i, !t, o, n ? "" : "!important"),
          });
        },
        P = !1;
      if ("undefined" != typeof window)
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function () {
              return (P = !0), !0;
            },
          });
          window.addEventListener("test", N, N),
            window.removeEventListener("test", N, N);
        } catch (e) {
          P = !1;
        }
      var T = !!P && { passive: !1 },
        Q = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        O = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              D(e, r))
            ) {
              var o = R(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        D = function (e, t) {
          return "v" === e ? Q(t, "overflowY") : Q(t, "overflowX");
        },
        R = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        F = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            d = s > 0,
            p = 0,
            h = 0;
          do {
            var f = R(e, c),
              w = f[0],
              m = f[1] - f[2] - a * w;
            (w || m) && D(e, c) && ((p += m), (h += w)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(p)) || (!o && s > p))
              ? (u = !0)
              : !d && ((o && 1 > Math.abs(h)) || (!o && -s > h)) && (u = !0),
            u
          );
        },
        W = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        q = function (e) {
          return [e.deltaX, e.deltaY];
        },
        L = function (e) {
          return e && "current" in e ? e.current : e;
        },
        U = 0,
        j = [];
      let J =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(U++)[0],
            s = a.useState(b)[0],
            c = a.useRef(e);
          a.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, i.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(L),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !c.current.allowPinchZoom;
              var o,
                i = W(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                l = "deltaY" in e ? e.deltaY : a[1] - i[1],
                u = e.target,
                d = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === u.type) return !1;
              var p = O(d, u);
              if (!p) return !0;
              if (
                (p ? (o = d) : ((o = "v" === d ? "h" : "v"), (p = O(d, u))), !p)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var h = r.current || o;
              return F(h, t, e, "h" === h ? s : l, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (j.length && j[j.length - 1] === s) {
                var n = "deltaY" in e ? q(e) : W(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(L)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            p = a.useCallback(function (e) {
              (n.current = W(e)), (r.current = void 0);
            }, []),
            h = a.useCallback(function (t) {
              d(t.type, q(t), t.target, l(t, e.lockRef.current));
            }, []),
            f = a.useCallback(function (t) {
              d(t.type, W(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              j.push(s),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: f,
              }),
              document.addEventListener("wheel", u, T),
              document.addEventListener("touchmove", u, T),
              document.addEventListener("touchstart", p, T),
              function () {
                (j = j.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, T),
                  document.removeEventListener("touchmove", u, T),
                  document.removeEventListener("touchstart", p, T);
              }
            );
          }, []);
          var w = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            w ? a.createElement(M, { gapMode: e.gapMode }) : null
          );
        }),
        h.useMedium(r),
        m);
      var K = a.forwardRef(function (e, t) {
        return a.createElement(
          w,
          (0, i.__assign)({}, e, { ref: t, sideCar: J })
        );
      });
      K.classNames = w.classNames;
      let H = K;
    },
    15514: function (e, t, n) {
      var r;
      !(function (o, i) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          l = "string",
          u = "major",
          d = "model",
          p = "name",
          h = "type",
          f = "vendor",
          w = "version",
          m = "architecture",
          g = "console",
          y = "mobile",
          b = "tablet",
          A = "smarttv",
          v = "wearable",
          C = "embedded",
          x = "Amazon",
          k = "Apple",
          E = "ASUS",
          B = "BlackBerry",
          I = "Browser",
          S = "Chrome",
          M = "Firefox",
          P = "Google",
          N = "Honor",
          T = "Huawei",
          Q = "Microsoft",
          O = "Motorola",
          D = "Nvidia",
          R = "OnePlus",
          F = "Opera",
          W = "OPPO",
          q = "Samsung",
          L = "Sharp",
          U = "Sony",
          j = "Xiaomi",
          J = "Zebra",
          K = "Facebook",
          H = "Chromium OS",
          z = "Mac OS",
          G = " Browser",
          V = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 == 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          Y = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          Z = function (e, t) {
            return typeof e === l && -1 !== X(t).indexOf(X(e));
          },
          X = function (e) {
            return e.toLowerCase();
          },
          _ = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          $ = function (e, t) {
            for (var n, r, o, s, l, u, d = 0; d < t.length && !l; ) {
              var p = t[d],
                h = t[d + 1];
              for (n = r = 0; n < p.length && !l && p[n]; )
                if ((l = p[n++].exec(e)))
                  for (o = 0; o < h.length; o++)
                    (u = l[++r]),
                      typeof (s = h[o]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : i)
                        : (this[s] = u || i);
              d += 2;
            }
          },
          ee = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (Z(t[n][r], e)) return "?" === n ? i : n;
              } else if (Z(t[n], e)) return "?" === n ? i : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          et = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          en = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [p, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [p, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [p, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [p, F + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [p, F + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [p, F]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [p, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [p, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [p, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [p, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [p, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [p, "UC" + I]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [w, [p, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [p, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [p, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [p, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [p, "Smart Lenovo " + I]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1 Secure " + I], w],
              [/\bfocus\/([\w\.]+)/i],
              [w, [p, M + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [p, F + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [p, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [p, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [p, F + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [p, "MIUI" + G]],
              [/fxios\/([\w\.-]+)/i],
              [w, [p, M]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [p, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[p, /(.+)/, "$1Browser"], w],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[p, /(.+)/, "$1" + G], w],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [p, q + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [p, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[p, "Sogou Mobile"], w],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [p, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [p],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [w, p],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[p, K], w],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [p, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [p, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [p, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [p, S + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[p, S + " WebView"], w],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [p, "Android " + I]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [p, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [p, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, p],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                p,
                [
                  w,
                  ee,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [p, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[p, "Netscape"], w],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [p, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [p, M + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
              ],
              [p, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [p, [w, /master.|lts./, ""]],
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [[m, "arm"]],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [[m, /ower/, "", X]],
              [/ sun4\w[;\)]/i],
              [[m, "sparc"]],
              [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              ],
              [[m, X]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [f, q], [h, b]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [f, q], [h, y]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [f, k], [h, y]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [f, k], [h, b]],
              [/(macintosh);/i],
              [d, [f, k]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [f, L], [h, y]],
              [
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
              ],
              [d, [f, N], [h, b]],
              [/honor([-\w ]+)[;\)]/i],
              [d, [f, N], [h, y]],
              [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
              ],
              [d, [f, T], [h, b]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [f, T], [h, y]],
              [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [f, j],
                [h, b],
              ],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
              ],
              [
                [d, /_/g, " "],
                [f, j],
                [h, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [f, W], [h, y]],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [f, ee, { OnePlus: ["304", "403", "203"], "*": W }], [h, b]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [f, "Vivo"], [h, y]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [f, "Realme"], [h, y]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [f, O], [h, y]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [f, O], [h, b]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [f, "LG"], [h, b]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [f, "LG"], [h, y]],
              [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
              ],
              [d, [f, "Lenovo"], [h, b]],
              [/(nokia) (t[12][01])/i],
              [f, d, [h, b]],
              [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i,
              ],
              [
                [d, /_/g, " "],
                [h, y],
                [f, "Nokia"],
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [f, P], [h, b]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [f, P], [h, y]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [f, U], [h, y]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [f, U],
                [h, b],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [f, R], [h, y]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [f, x], [h, b]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [f, x],
                [h, y],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, f, [h, b]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [f, B], [h, y]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [f, E], [h, b]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [f, E], [h, y]],
              [/(nexus 9)/i],
              [d, [f, "HTC"], [h, b]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [f, [d, /_/g, " "], [h, y]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [f, "TCL"], [h, b]],
              [/(itel) ((\w+))/i],
              [
                [f, X],
                d,
                [h, ee, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [f, "Acer"], [h, b]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [f, "Meizu"], [h, y]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [f, "Ulefone"], [h, y]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [f, "Energizer"], [h, y]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [f, "Cat"], [h, y]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [f, "Smartfren"], [h, y]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [f, "Nothing"], [h, y]],
              [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
              ],
              [d, [f, "Archos"], [h, b]],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [f, "Archos"], [h, y]],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [f, d, [h, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [f, d, [h, y]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [f, d, [h, b]],
              [/(surface duo)/i],
              [d, [f, Q], [h, b]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [f, "Fairphone"], [h, y]],
              [/(u304aa)/i],
              [d, [f, "AT&T"], [h, y]],
              [/\bsie-(\w*)/i],
              [d, [f, "Siemens"], [h, y]],
              [/\b(rct\w+) b/i],
              [d, [f, "RCA"], [h, b]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [f, "Dell"], [h, b]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [f, "Verizon"], [h, b]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [f, "Barnes & Noble"], [h, b]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [f, "NuVision"], [h, b]],
              [/\b(k88) b/i],
              [d, [f, "ZTE"], [h, b]],
              [/\b(nx\d{3}j) b/i],
              [d, [f, "ZTE"], [h, y]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [f, "Swiss"], [h, y]],
              [/\b(zur\d{3}) b/i],
              [d, [f, "Swiss"], [h, b]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [f, "Zeki"], [h, b]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[f, "Dragon Touch"], d, [h, b]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [f, "Insignia"], [h, b]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [f, "NextBook"], [h, b]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[f, "Voice"], d, [h, y]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[f, "LvTel"], d, [h, y]],
              [/\b(ph-1) /i],
              [d, [f, "Essential"], [h, y]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [f, "Envizen"], [h, b]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [f, "MachSpeed"], [h, b]],
              [/\btu_(1491) b/i],
              [d, [f, "Rotor"], [h, b]],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [f, D], [h, b]],
              [/(sprint) (\w+)/i],
              [f, d, [h, y]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [f, Q],
                [h, y],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [f, J], [h, b]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [f, J], [h, y]],
              [/smart-tv.+(samsung)/i],
              [f, [h, A]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [f, q],
                [h, A],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, "LG"],
                [h, A],
              ],
              [/(apple) ?tv/i],
              [f, [d, k + " TV"], [h, A]],
              [/crkey/i],
              [
                [d, S + "cast"],
                [f, P],
                [h, A],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [f, x], [h, A]],
              [/(shield \w+ tv)/i],
              [d, [f, D], [h, A]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [f, L], [h, A]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [f, U], [h, A]],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [f, j], [h, A]],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, d, [h, A]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [f, _],
                [d, _],
                [h, A],
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [h, A]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, A]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, d, [h, g]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [f, D], [h, g]],
              [/(playstation \w+)/i],
              [d, [f, U], [h, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [f, Q], [h, g]],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [f, q], [h, v]],
              [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
              ],
              [f, d, [h, v]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [f, W], [h, v]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [f, k], [h, v]],
              [/(opwwe\d{3})/i],
              [d, [f, R], [h, v]],
              [/(moto 360)/i],
              [d, [f, O], [h, v]],
              [/(smartwatch 3)/i],
              [d, [f, U], [h, v]],
              [/(g watch r)/i],
              [d, [f, "LG"], [h, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [f, J], [h, v]],
              [/droid.+; (glass) \d/i],
              [d, [f, P], [h, v]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [f, d, [h, v]],
              [/; (quest( \d| pro)?)/i],
              [d, [f, K], [h, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [h, C]],
              [/(aeobc)\b/i],
              [d, [f, x], [h, C]],
              [/(homepod).+mac os/i],
              [d, [f, k], [h, C]],
              [/windows iot/i],
              [[h, C]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [h, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [h, b]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, b]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[h, y]],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [f, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [p, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [p, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [p, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [p, w],
              [/ladybird\//i],
              [[p, "LibWeb"]],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, p],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [p, w],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [p, [w, ee, et]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [w, ee, et],
                [p, "Windows"],
              ],
              [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [w, /_/g, "."],
                [p, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [p, z],
                [w, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, p],
              [/(ubuntu) ([\w\.]+) like android/i],
              [[p, /(.+)/, "$1 Touch"], w],
              [
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
              ],
              [p, w],
              [/\(bb(10);/i],
              [w, [p, B]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [w, [p, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [w, [p, M + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [p, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [p, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [p, S + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[p, H], w],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [p, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [[p, "Solaris"], w],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [p, w],
            ],
          },
          er = function (e, t) {
            if ((typeof e === c && ((t = e), (e = i)), !(this instanceof er)))
              return new er(e, t).getResult();
            var n = typeof o !== s && o.navigator ? o.navigator : i,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              g = n && n.userAgentData ? n.userAgentData : i,
              A = t ? V(en, t) : en,
              v = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[p] = i),
                  (t[w] = i),
                  $.call(t, r, A.browser),
                  (t[u] =
                    typeof (e = t[w]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : i),
                  v &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[p] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = i), $.call(e, r, A.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[f] = i),
                  (e[d] = i),
                  (e[h] = i),
                  $.call(e, r, A.device),
                  v && !e[h] && g && g.mobile && (e[h] = y),
                  v &&
                    "Macintosh" == e[d] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[h] = b)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[p] = i), (e[w] = i), $.call(e, r, A.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[p] = i),
                  (e[w] = i),
                  $.call(e, r, A.os),
                  v &&
                    !e[p] &&
                    g &&
                    g.platform &&
                    "Unknown" != g.platform &&
                    (e[p] = g.platform
                      .replace(/chrome os/i, H)
                      .replace(/macos/i, z)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === l && e.length > 500 ? _(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (er.VERSION = "1.0.41"),
          (er.BROWSER = Y([p, w, u])),
          (er.CPU = Y([m])),
          (er.DEVICE = Y([d, f, h, g, y, A, b, v, C])),
          (er.ENGINE = er.OS = Y([p, w])),
          typeof t !== s
            ? (e.exports && (t = e.exports = er), (t.UAParser = er))
            : n.amdO
            ? i ===
                (r = function () {
                  return er;
                }.call(t, n, t, e)) || (e.exports = r)
            : typeof o !== s && (o.UAParser = er);
        var eo = typeof o !== s && (o.jQuery || o.Zepto);
        if (eo && !eo.ua) {
          var ei = new er();
          (eo.ua = ei.getResult()),
            (eo.ua.get = function () {
              return ei.getUA();
            }),
            (eo.ua.set = function (e) {
              ei.setUA(e);
              var t = ei.getResult();
              for (var n in t) eo.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    15549: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new o(r, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, o, i, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, o), !0;
              case 5:
                return u.fn.call(u.context, t, r, o, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, o, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var p,
              h = u.length;
            for (l = 0; l < h; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
              ) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, o);
                  break;
                default:
                  if (!c)
                    for (p = 1, c = Array(d - 1); p < d; p++)
                      c[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== t ||
              (o && !s.once) ||
              (r && s.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (o && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    19542: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            r = 0,
            o = 0,
            i = 0,
            a = null,
            s = null;
          for (let c = 0; c < t; c++) {
            (o = i = 0), (a = s = null);
            for (let l = 0; l < t; l++) {
              let t = e.get(c, l);
              t === a
                ? o++
                : (o >= 5 && (r += n.N1 + (o - 5)), (a = t), (o = 1)),
                (t = e.get(l, c)) === s
                  ? i++
                  : (i >= 5 && (r += n.N1 + (i - 5)), (s = t), (i = 1));
            }
            o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let o = 0; o < t - 1; o++) {
              let t =
                e.get(n, o) +
                e.get(n, o + 1) +
                e.get(n + 1, o) +
                e.get(n + 1, o + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            o = 0,
            i = 0;
          for (let n = 0; n < t; n++) {
            o = i = 0;
            for (let a = 0; a < t; a++)
              (o = ((o << 1) & 2047) | e.get(n, a)),
                a >= 10 && (1488 === o || 93 === o) && r++,
                (i = ((i << 1) & 2047) | e.get(a, n)),
                a >= 10 && (1488 === i || 93 === i) && r++;
          }
          return r * n.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            r = e.data.length;
          for (let n = 0; n < r; n++) t += e.data[n];
          return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * n.N4;
        }),
        (t.applyMask = function (e, n) {
          let r = n.size;
          for (let o = 0; o < r; o++)
            for (let i = 0; i < r; i++)
              n.isReserved(i, o) ||
                n.xor(
                  i,
                  o,
                  (function (e, n, r) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, i, o)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            o = 0,
            i = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), t.applyMask(a, e);
            let r =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), r < i && ((i = r), (o = a));
          }
          return o;
        });
    },
    19762: (e, t, n) => {
      "use strict";
      let r, o, i, a, s, c, l, u, d, p, h, f, w, m, g;
      n.d(t, { S: () => z });
      let y = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function b(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              o = 1,
              i = [0, 1];
            for (let e = 1; e < r; e++) i.push((o += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              l = 0;
            function u() {
              return (
                0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
              );
            }
            let d = 0x80000000 - 1,
              p = 0;
            for (let e = 0; e < 31; e++) p = (p << 1) | u();
            let h = [],
              f = 0,
              w = 0x80000000;
            for (;;) {
              let e = Math.floor(((p - f + 1) * o - 1) / w),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < i[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              h.push(t);
              let a = f + Math.floor((w * i[t]) / o),
                s = f + Math.floor((w * i[t + 1]) / o) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (p = ((p << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (p = (0x40000000 & p) | ((p << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (f = a), (w = 1 + s - a);
            }
            let m = r - 4;
            return h.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let o = 0, i = 0, a = 0, s = 0; o < n; o++)
                (s = (s << 6) | t[e.charCodeAt(o)]),
                  (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function A(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            o = e();
          if (!o) break;
          t += r;
          for (let e = 0; e < o; e++) n.push(t + e);
          t += o + 1;
        }
        return n;
      }
      function v(e) {
        return x(() => {
          let t = A(e);
          if (t.length) return t;
        });
      }
      function C(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                o = x(t);
              return k(o.length, 1 + e, t).flatMap((e, t) => {
                let [i, ...a] = e;
                return Array(o[t])
                  .fill()
                  .map((e, t) => {
                    let o = t * r;
                    return [i + t * n, a.map((e) => e + o)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let o = e() - 1;
          if (o < 0) break;
          t.push(
            ((n = o), k(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function x(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function k(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let o = 0; o < t; o++)
          (function (e, t) {
            let n = Array(e);
            for (let o = 0, i = 0; o < e; o++) {
              var r;
              n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function E(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function B(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function I(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
        return r;
      }
      let S = 55204;
      function M(e) {
        return (e >> 24) & 255;
      }
      function P(e) {
        return 0xffffff & e;
      }
      function N(e) {
        return e >= 44032 && e < S;
      }
      function T(e) {
        r ||
          (function () {
            let e = b(
              "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"
            );
            for (let [t, n] of ((r = new Map(
              v(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (o = new Set(A(e))),
            (i = new Map()),
            (a = new Map()),
            C(e))) {
              if (!o.has(t) && 2 == n.length) {
                let [e, r] = n,
                  o = a.get(e);
                o || ((o = new Map()), a.set(e, o)), o.set(r, t);
              }
              i.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (N(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                o = e % 28;
              c(4352 + t), c(4449 + n), o > 0 && c(4519 + o);
            } else {
              let e = i.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = M(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = M(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let o = n - 1;
            for (;;) {
              let n = t[o + 1];
              if (((t[o + 1] = t[o]), (t[o] = n), !o || (e = M(t[--o])) <= r))
                break;
            }
            e = M(t[n]);
          }
        }
        return t;
      }
      function Q(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            o = 0;
          for (let i of e) {
            let e = M(i),
              s = P(i);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (o > 0 && o >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (o = e);
            else {
              let i = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (N(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              i >= 0
                ? (r = i)
                : 0 == o && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (o = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(T(e));
      }
      let O = (e) => Array.from(e);
      function D(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class R extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function F() {
        let e, t;
        if (s) return;
        let n = b(
            "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"
          ),
          r = () => A(n),
          o = () => new Set(r()),
          i = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(C(n))),
          (c = o()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (d = o()),
          o();
        let a = v(n),
          y = n(),
          k = () => {
            let e = new Set();
            return r().forEach((t) => i(e, a[t])), i(e, r()), e;
          };
        (p = x((e) => {
          let t = x(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= y;
            (t[0] -= 32), (t = B(t)), r && (t = `Restricted[${t}]`);
            let o = k();
            return { N: t, P: o, Q: k(), M: !n(), R: r };
          }
        })),
          (h = o()),
          (f = new Map());
        let E = r()
          .concat(O(h))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (E.forEach((e, t) => {
          let r = n(),
            o = (E[t] = r ? E[t - r] : { V: [], M: new Map() });
          o.V.push(e), h.has(e) || f.set(e, o);
        }),
        new Set(f.values()))) {
          let n = [];
          for (let t of e) {
            let e = p.filter((e) => D(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              i(r.G, e);
          }
          let r = n.flatMap((e) => O(e.G));
          for (let { G: e, V: o } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of o) t.set(e, n);
          }
        }
        w = new Set();
        let S = new Set(),
          M = (e) => (w.has(e) ? S.add(e) : w.add(e));
        for (let e of p) {
          for (let t of e.P) M(t);
          for (let t of e.Q) M(t);
        }
        for (let e of w) f.has(e) || S.has(e) || f.set(e, 1);
        for (let r of (i(w, T(w).map(P)),
        (m = ((e = []),
        (t = A(n)),
        (function t({ S: n, B: r }, o, i) {
          if (!(4 & n) || i !== o[o.length - 1])
            for (let a of (2 & n && (i = o[o.length - 1]),
            1 & n && e.push(o),
            r))
              for (let e of a.Q) t(a, [...o, e], i);
        })(
          (function e(r) {
            return {
              S: n(),
              B: x(() => {
                let r = A(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => R.from(e))
          .sort(I)),
        (g = new Map()),
        m)) {
          let e = [g];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function W(e) {
        return (U(e) ? "" : `${q(L([e]))} `) + E(e);
      }
      function q(e) {
        return `"${e}"\u200E`;
      }
      function L(e, t = 1 / 0, n = E) {
        var r;
        let o = [];
        (r = e[0]),
          F(),
          l.has(r) && o.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let i = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let r = e[t];
          U(r) && (o.push(B(e.slice(i, t))), o.push(n(r)), (i = t + 1));
        }
        return o.push(B(e.slice(i, a))), o.join("");
      }
      function U(e) {
        return F(), d.has(e);
      }
      function j(e) {
        return Error(`disallowed character: ${W(e)}`);
      }
      function J(e, t) {
        let n = W(t),
          r = p.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function K(e) {
        return Error(`illegal placement: ${e}`);
      }
      function H(e) {
        return e.filter((e) => 65039 != e);
      }
      function z(e) {
        var t = (function (e, t, n) {
          if (!e) return [];
          F();
          let r = 0;
          return e.split(".").map((e) => {
            let o = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              i = { input: o, offset: r };
            r += o.length + 1;
            try {
              let e,
                r = (i.tokens = (function (e, t, n) {
                  let r = [],
                    o = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let i = (function (e, t) {
                      let n,
                        r = g,
                        o = e.length;
                      for (; o && (r = r.get(e[--o])); ) {
                        let { V: t } = r;
                        t && ((n = t), (e.length = o));
                      }
                      return n;
                    })(e);
                    if (i) o.length && (r.push(t(o)), (o = [])), r.push(n(i));
                    else {
                      let t = e.pop();
                      if (w.has(t)) o.push(t);
                      else {
                        let e = s.get(t);
                        if (e) o.push(...e);
                        else if (!c.has(t)) throw j(t);
                      }
                    }
                  }
                  return o.length && r.push(t(o)), r;
                })(o, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (i.output = r.flat());
              for (let e = d.lastIndexOf(95); e > 0; )
                if (95 !== d[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(i.emoji = a > 1 || r[0].is_emoji) &&
                d.every((e) => e < 128)
              ) {
                if (d.length >= 4 && 45 == d[2] && 45 == d[3])
                  throw Error(`invalid label extension: "${B(d.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(d[0])) throw K("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw K(
                        `emoji + combining mark: "${B(r[e - 1])} + ${L([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = y.get(t);
                    if (n) throw K(`leading ${n}`);
                    let r = e.length,
                      o = -1;
                    for (let i = 1; i < r; i++) {
                      t = e[i];
                      let r = y.get(t);
                      if (r) {
                        if (o == i) throw K(`${n} + ${r}`);
                        (o = i + 1), (n = r);
                      }
                    }
                    if (o == r) throw K(`trailing ${n}`);
                  })(d);
                  let n = O(new Set(t)),
                    [o] = (function (e) {
                      let t = p;
                      for (let n of e) {
                        let e = t.filter((e) => D(e, n));
                        if (!e.length)
                          if (p.some((e) => D(e, n))) throw J(t[0], n);
                          else throw j(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!D(e, n)) throw J(e, n);
                    if (e.M) {
                      let e = T(t).map(P);
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let o; r < n && u.has((o = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == o)
                                throw Error(
                                  `duplicate non-spacing marks: ${W(o)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${q(
                                L(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(o, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = f.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : O(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => D(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(o, n),
                    (e = o.N);
                } else e = "Emoji";
              }
              i.type = e;
            } catch (e) {
              i.error = e;
            }
            return i;
          });
        })(e, Q, H);
        return t
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${q(L(e, 63))}: ${r}`
              );
            }
            return B(r);
          })
          .join(".");
      }
    },
    20795: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, { U: () => a });
      var i = (e) => e,
        a = function () {
          return (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = Object.assign({}, ...t.map((e) => e.styles)),
              a = Object.keys(r),
              s = a.filter((e) => "mappings" in r[e]);
            return Object.assign(
              (e) => {
                var t = [],
                  n = {},
                  a = o({}, e),
                  c = !1;
                for (var l of s) {
                  var u = e[l];
                  if (null != u)
                    for (var d of ((c = !0), r[l].mappings))
                      (n[d] = u), null == a[d] && delete a[d];
                }
                var p = c ? o(o({}, n), a) : e;
                for (var h in p)
                  if (
                    (function () {
                      var e = p[h],
                        n = r[h];
                      try {
                        if (n.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          t.push(n.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (null != i) {
                              var a = n.responsiveArray[o];
                              t.push(n.values[i].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && t.push(n.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return i(t.join(" "));
              },
              { properties: new Set(a) }
            );
          })(...arguments);
        };
    },
    23308: (e, t, n) => {
      let r = n(52686);
      function o(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function i(e, t, n) {
        let r = e + t;
        return void 0 !== n && (r += " " + n), r;
      }
      t.render = function (e, t, n) {
        let a = r.getOptions(t),
          s = e.modules.size,
          c = e.modules.data,
          l = s + 2 * a.margin,
          u = a.color.light.a
            ? "<path " +
              o(a.color.light, "fill") +
              ' d="M0 0h' +
              l +
              "v" +
              l +
              'H0z"/>'
            : "",
          d =
            "<path " +
            o(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                o = 0,
                a = !1,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let l = Math.floor(c % t),
                  u = Math.floor(c / t);
                l || a || (a = !0),
                  e[c]
                    ? (s++,
                      (c > 0 && l > 0 && e[c - 1]) ||
                        ((r += a ? i("M", l + n, 0.5 + u + n) : i("m", o, 0)),
                        (o = 0),
                        (a = !1)),
                      (l + 1 < t && e[c + 1]) || ((r += i("h", s)), (s = 0)))
                    : o++;
              }
              return r;
            })(c, s, a.margin) +
            '"/>',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + l + " ") +
            l +
            '" shape-rendering="crispEdges">' +
            u +
            d +
            "</svg>\n";
        return "function" == typeof n && n(null, p), p;
      };
    },
    24967: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "l":
              case "low":
                return t.L;
              case "m":
              case "medium":
                return t.M;
              case "q":
              case "quartile":
                return t.Q;
              case "h":
              case "high":
                return t.H;
              default:
                throw Error("Unknown EC Level: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    25157: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(32733),
        o = n(30931),
        i = n(93527),
        a = n(72757),
        s = n(39012);
      async function c(e, t) {
        let { abi: n, address: c, args: l, functionName: u, ...d } = t,
          p = (0, o.p)({ abi: n, args: l, functionName: u });
        try {
          let { data: t } = await (0, a.T)(
            e,
            s.T,
            "call"
          )({ ...d, data: p, to: c });
          return (0, r.e)({
            abi: n,
            args: l,
            functionName: u,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, i.j)(e, {
            abi: n,
            address: c,
            args: l,
            docsPath: "/docs/contract/readContract",
            functionName: u,
          });
        }
      }
    },
    27321: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => h });
      var r = n(4486),
        o = n(32733),
        i = n(30931),
        a = n(71552),
        s = n(34561),
        c = n(92987),
        l = n(71971),
        u = n(38647),
        d = n(72757),
        p = n(25157);
      async function h(
        e,
        {
          blockNumber: t,
          blockTag: n,
          name: h,
          key: f,
          gatewayUrls: w,
          strict: m,
          universalResolverAddress: g,
        }
      ) {
        let y = g;
        if (!y) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          y = (0, a.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = {
              address: y,
              abi: r.Ag,
              functionName: "resolve",
              args: [
                (0, s.nj)((0, u.F)(h)),
                (0, i.p)({
                  abi: r.SJ,
                  functionName: "text",
                  args: [(0, l.k)(h), f],
                }),
              ],
              blockNumber: t,
              blockTag: n,
            },
            c = (0, d.T)(e, p.J, "readContract"),
            m = w ? await c({ ...a, args: [...a.args, w] }) : await c(a);
          if ("0x" === m[0]) return null;
          let g = (0, o.e)({ abi: r.SJ, functionName: "text", data: m[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (m) throw e;
          if ((0, c.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    29762: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    31461: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => h });
      var r = n(34049),
        o = n(80043),
        i = n(74268),
        a = n(38445),
        s = class extends a.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let i = t.queryKey,
              a = t.queryHash ?? (0, r.F$)(i, t),
              s = this.get(a);
            return (
              s ||
                ((s = new o.X({
                  client: e,
                  queryKey: i,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(i),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, r.MK)(e, t))
              : t;
          }
          notify(e) {
            i.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            i.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        c = n(38559),
        l = class extends a.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#n = new Map()),
              (this.#r = 0);
          }
          #t;
          #n;
          #r;
          build(e, t, n) {
            let r = new c.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#r,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(r), r;
          }
          add(e) {
            this.#t.add(e);
            let t = u(e);
            if ("string" == typeof t) {
              let n = this.#n.get(t);
              n ? n.push(e) : this.#n.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = u(e);
              if ("string" == typeof t) {
                let n = this.#n.get(t);
                if (n)
                  if (n.length > 1) {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  } else n[0] === e && this.#n.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = u(e);
            if ("string" != typeof t) return !0;
            {
              let n = this.#n.get(t),
                r = n?.find((e) => "pending" === e.state.status);
              return !r || r === e;
            }
          }
          runNext(e) {
            let t = u(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let n = this.#n.get(t)?.find((t) => t !== e && t.state.isPaused);
              return n?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            i.jG.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#n.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, r.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, r.nJ)(e, t));
          }
          notify(e) {
            i.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return i.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(r.lQ)))
            );
          }
        };
      function u(e) {
        return e.options.scope?.id;
      }
      var d = n(56195),
        p = n(63122),
        h = class {
          #o;
          #i;
          #a;
          #s;
          #c;
          #l;
          #u;
          #d;
          constructor(e = {}) {
            (this.#o = e.queryCache || new s()),
              (this.#i = e.mutationCache || new l()),
              (this.#a = e.defaultOptions || {}),
              (this.#s = new Map()),
              (this.#c = new Map()),
              (this.#l = 0);
          }
          mount() {
            this.#l++,
              1 === this.#l &&
                ((this.#u = d.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#o.onFocus());
                })),
                (this.#d = p.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#o.onOnline());
                })));
          }
          unmount() {
            this.#l--,
              0 === this.#l &&
                (this.#u?.(),
                (this.#u = void 0),
                this.#d?.(),
                (this.#d = void 0));
          }
          isFetching(e) {
            return this.#o.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#i.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#o.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              n = this.#o.build(this, t),
              o = n.state.data;
            return void 0 === o
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  n.isStaleByTime((0, r.d2)(t.staleTime, n)) &&
                  this.prefetchQuery(t),
                Promise.resolve(o));
          }
          getQueriesData(e) {
            return this.#o
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, n) {
            let o = this.defaultQueryOptions({ queryKey: e }),
              i = this.#o.get(o.queryHash),
              a = i?.state.data,
              s = (0, r.Zw)(t, a);
            if (void 0 !== s)
              return this.#o.build(this, o).setData(s, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return i.jG.batch(() =>
              this.#o
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#o.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#o;
            i.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let n = this.#o;
            return i.jG.batch(
              () => (
                n.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let n = { revert: !0, ...t };
            return Promise.all(
              i.jG.batch(() => this.#o.findAll(e).map((e) => e.cancel(n)))
            )
              .then(r.lQ)
              .catch(r.lQ);
          }
          invalidateQueries(e, t = {}) {
            return i.jG.batch(() =>
              (this.#o.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              i.jG.batch(() =>
                this.#o
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, n);
                    return (
                      n.throwOnError || (t = t.catch(r.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(r.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let n = this.#o.build(this, t);
            return n.isStaleByTime((0, r.d2)(t.staleTime, n))
              ? n.fetch(t)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(r.lQ).catch(r.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e._type = "infinite"), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(r.lQ).catch(r.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e._type = "infinite"), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return p.t.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#o;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(e) {
            this.#a = e;
          }
          setQueryDefaults(e, t) {
            this.#s.set((0, r.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#s.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, r.Cp)(e, t.queryKey) && Object.assign(n, t.defaultOptions);
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            this.#c.set((0, r.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#c.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, r.Cp)(e, t.mutationKey) &&
                  Object.assign(n, t.defaultOptions);
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#a.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, r.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === r.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#a.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#o.clear(), this.#i.clear();
          }
        };
    },
    31937: (e, t, n) => {
      let r = n(89158),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function i(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (i.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * o.indexOf(this.data[t]);
            (n += o.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6);
        }),
        (e.exports = i);
    },
    32108: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var r = n(76115),
        o = n(24784);
      function i(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, o.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    33869: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(2535),
        o = n(93420),
        i = n(43159),
        a = n(77608),
        s = n(73168),
        c = n(34561);
      function l(e) {
        let t,
          u,
          d,
          p,
          h,
          f,
          w,
          m,
          g = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (h || ((h = this.onConnect.bind(this)), e.on("connect", h)),
              w ||
                ((w = this.onSessionDelete.bind(this)),
                e.on("session_delete", w)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new o.N();
              f || ((f = this.onDisplayUri), n.on("display_uri", f));
              let i = e;
              if (!i) {
                let e = (await r.storage?.getItem("state")) ?? {};
                i = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!i) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((n.session && s && (await n.disconnect()), !n.session || s)) {
                let e = r.chains.filter((e) => e.id !== i).map((e) => e.id);
                await n.connect({
                  optionalChains: [i, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, a.b)(e)),
                l = await this.getChainId();
              return (
                f && (n.removeListener("display_uri", f), (f = void 0)),
                h && (n.removeListener("connect", h), (h = void 0)),
                d ||
                  ((d = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", d)),
                p ||
                  ((p = this.onChainChanged.bind(this)),
                  n.on("chainChanged", p)),
                m ||
                  ((m = this.onDisconnect.bind(this)), n.on("disconnect", m)),
                w ||
                  ((w = this.onSessionDelete.bind(this)),
                  n.on("session_delete", w)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new s.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              p && (e?.removeListener("chainChanged", p), (p = void 0)),
                m && (e?.removeListener("disconnect", m), (m = void 0)),
                h || ((h = this.onConnect.bind(this)), e?.on("connect", h)),
                d && (e?.removeListener("accountsChanged", d), (d = void 0)),
                w && (e?.removeListener("session_delete", w), (w = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: o } = {}) {
            async function i() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: o } = await Promise.all([
                n.e(5223),
                n.e(1029),
                n.e(6106),
                n.e(1968),
              ]).then(n.bind(n, 83346));
              return await o.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        n = t.rpcUrls.default.http[0];
                      if (!e.transports) return [n];
                      let r = e.transports?.[t.id]?.({ chain: t });
                      return (r?.value?.transports || [r]).map(
                        ({ value: e }) => e?.url || n
                      );
                    })({ chain: e, transports: r.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (u || (u = i()),
                (t = await u),
                t?.events.setMaxListeners(1 / 0)),
              o && (await this.switchChain?.({ chainId: o })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new o.N();
            let a = r.chains.find((e) => e.id === t);
            if (!a) throw new s.ch(new i.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: o }) => {
                    o === t && (r.emitter.off("change", n), e());
                  };
                  r.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), a;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new s.vx(r);
              try {
                let r, o;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (o = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let i = {
                  blockExplorerUrls: r,
                  chainId: (0, c.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: o,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [i],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), a;
              } catch (e) {
                throw new s.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            d && (t.removeListener("accountsChanged", d), (d = void 0)),
              p && (t.removeListener("chainChanged", p), (p = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              w && (t.removeListener("session_delete", w), (w = void 0)),
              h || ((h = this.onConnect.bind(this)), t.on("connect", h));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!g) return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      l.type = "walletConnect";
    },
    35425: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++)
            this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    35630: (e, t, n) => {
      let r = n(46342).getSymbolSize;
      t.getPositions = function (e) {
        let t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    35891: (e, t, n) => {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function o(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o = {};
            for (var i in t) {
              var a = t[i],
                s = [...r, i];
              "string" == typeof a || "number" == typeof a || null == a
                ? (o[i] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (o[i] = e(a, n, s));
            }
            return o;
          })(t, (t, o) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, o)
                )
              ] = String(t));
          });
        else
          for (var o in e) {
            var i = e[o];
            null != i && (n[r(o)] = i);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, { D: () => o });
    },
    38647: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => s });
      var r = n(55563),
        o = n(34561),
        i = n(80329),
        a = n(4697);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.Af)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          var l;
          let t = (0, r.Af)(c[e]);
          t.byteLength > 255 &&
            (t = (0, r.Af)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, i.S)((0, r.Af)(e)) : (0, o.My)(t);
              })(c[e])),
              `[${l.slice(2)}]`)
            )),
            (n[s] = t.length),
            n.set(t, s + 1),
            (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
    41718: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => k });
      var r = n(25157),
        o = n(13933);
      class i extends o.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class a extends o.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends o.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class c extends o.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let l =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        u =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        p = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function f(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function w({ uri: e, gatewayUrls: t }) {
        let n = d.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = f(t?.ipfs, "https://ipfs.io"),
          o = f(t?.arweave, "https://arweave.net"),
          i = e.match(l),
          {
            protocol: a,
            subpath: c,
            target: h,
            subtarget: w = "",
          } = i?.groups || {},
          m = "ipns:/" === a || "ipns/" === c,
          g = "ipfs:/" === a || "ipfs/" === c || u.test(e);
        if (e.startsWith("http") && !m && !g) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((m || g) && h)
          return {
            uri: `${r}/${m ? "ipns" : "ipfs"}/${h}${w}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && h)
          return { uri: `${o}/${h}${w || ""}`, isOnChain: !1, isEncoded: !1 };
        let y = e.replace(p, "");
        if (
          (y.startsWith("<svg") && (y = `data:image/svg+xml;base64,${btoa(y)}`),
          y.startsWith("data:") || y.startsWith("{"))
        )
          return { uri: y, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: e });
      }
      function m(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new i({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function g({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await y({ gatewayUrls: e, uri: m(n) });
        } catch {
          throw new s({ uri: t });
        }
      }
      async function y({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = w({ uri: t, gatewayUrls: e });
        if (r || (await h(n))) return n;
        throw new s({ uri: t });
      }
      async function b(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function A(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? v(e, { gatewayUrls: t, record: n })
          : y({ uri: n, gatewayUrls: t });
      }
      async function v(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, o] = t.split("/"),
              [i, s] = n.split(":"),
              [c, l] = r.split(":");
            if (!i || "eip155" !== i.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!l) throw new a({ reason: "Contract address not found" });
            if (!o) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s),
              namespace: c.toLowerCase(),
              contractAddress: l,
              tokenID: o,
            };
          })(n),
          {
            uri: o,
            isOnChain: i,
            isEncoded: s,
          } = w({ uri: await b(e, { nft: r }), gatewayUrls: t });
        if (
          i &&
          (o.includes("data:application/json;base64,") || o.startsWith("{"))
        )
          return y({
            uri: m(
              JSON.parse(
                s ? atob(o.replace("data:application/json;base64,", "")) : o
              )
            ),
            gatewayUrls: t,
          });
        let c = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          g({ gatewayUrls: t, uri: o.replace(/(?:0x)?{id}/, c) })
        );
      }
      var C = n(72757),
        x = n(27321);
      async function k(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: o,
          gatewayUrls: i,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, C.T)(
          e,
          x.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: o,
          universalResolverAddress: s,
          gatewayUrls: i,
          strict: a,
        });
        if (!c) return null;
        try {
          return await A(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    41953: (e, t, n) => {
      let r = n(46342),
        o = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          i = n << 10;
        for (; r.getBCHDigit(i) - o >= 0; ) i ^= 1335 << (r.getBCHDigit(i) - o);
        return ((n << 10) | i) ^ 21522;
      };
    },
    42351: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => v });
      var r = n(11914),
        o = n(42438),
        i = n(30598),
        a = n(90707),
        s = n(21681),
        c = n(62023);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(c.pj[e]);
      }
      var u = n(35326),
        d = n(61812);
      async function p(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: o, ...i } = t,
          a = e.getClient({ chainId: r });
        return (0, s.T)(
          a,
          d.C,
          "multicall"
        )({ allowFailure: n, contracts: o, ...i });
      }
      var h = n(25157);
      async function f(e, t) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: o, ...i } = t,
          a = t.contracts;
        try {
          let t = {};
          for (let [n, r] of a.entries()) {
            let o = r.chainId ?? e.state.chainId;
            t[o] || (t[o] = []), t[o]?.push({ contract: r, index: n });
          }
          let s = (
              await Promise.all(
                Object.entries(t).map(([t, a]) =>
                  p(e, {
                    ...i,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: o,
                    chainId: Number.parseInt(t),
                    contracts: a.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return s.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (i) {
          if (i instanceof u.bG) throw i;
          let t = () =>
            a.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  o = e.getClient({ chainId: n });
                return (0, s.T)(o, h.J, "readContract")(r);
              })(e, { ...t, blockNumber: r, blockTag: o })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function w(e, t) {
        let {
          address: n,
          blockNumber: c,
          blockTag: u,
          chainId: d,
          token: p,
          unit: h = "ether",
        } = t;
        if (p)
          try {
            return await m(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: p,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await m(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: p,
                }),
                i = (0, r.IQ)((0, o.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: i };
            }
            throw t;
          }
        let f = e.getClient({ chainId: d }),
          w = (0, s.T)(f, a.r, "getBalance"),
          g = await w(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: u }
          ),
          y = e.chains.find((e) => e.id === d) ?? f.chain;
        return {
          decimals: y.nativeCurrency.decimals,
          formatted: (0, i.J)(g, l(h)),
          symbol: y.nativeCurrency.symbol,
          value: g,
        };
      }
      async function m(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: o,
            tokenAddress: a,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: o }],
              },
            ],
            address: a,
          },
          [u, d, p] = await f(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          h = (0, i.J)(u ?? "0", l(s ?? d));
        return { decimals: d, formatted: h, symbol: p, value: u };
      }
      var g = n(47575),
        y = n(75575),
        b = n(99941),
        A = n(86475);
      function v() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: o = {} } = n,
          i = (0, A.U)(n),
          a = (0, b.i)({ config: i }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...o } = t[1];
                if (!n) throw Error("address is required");
                return (await w(e, { ...o, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, g.xO)(e)];
              })(t),
            };
          })(i, { ...n, chainId: null != (e = n.chainId) ? e : a }),
          c = !!(r && (null == (t = o.enabled) || t));
        return (0, y.IT)({ ...o, ...s, enabled: c });
      }
    },
    44006: (e, t, n) => {
      let r = n(89158);
      function o(e) {
        (this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (o.getBitsLength = function (e) {
        return 8 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = o);
    },
    44191: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    }\n  },\n\n  "zilpay": {\n    "qr_code": {\n      "step1": {\n        "title": "Open the ZilPay app",\n        "description": "Add ZilPay to your home screen for faster access to your wallet."\n      },\n      "step2": {\n        "title": "Create or Import a Wallet",\n        "description": "Create a new wallet or import an existing one."\n      },\n      "step3": {\n        "title": "Tap the scan button",\n        "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n      }\n    }\n  }\n}\n';
    },
    46342: (e, t) => {
      let n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        });
    },
    50915: (e, t, n) => {
      let r = n(10429);
      (t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let o = 0; o < e.length; o++)
          for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
            let o = 0;
            for (; o < n.length && 0 === n[o]; ) o++;
            n = n.slice(o);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let o = 0; o < e; o++)
            n = t.mul(n, new Uint8Array([1, r.exp(o)]));
          return n;
        });
    },
    52686: (e, t) => {
      function n(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          o = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: t,
          color: {
            dark: n(e.color.dark || "#000000ff"),
            light: n(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          let r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          let o = n.modules.size,
            i = n.modules.data,
            a = t.getScale(o, r),
            s = Math.floor((o + 2 * r.margin) * a),
            c = r.margin * a,
            l = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let u = (t * s + n) * 4,
                d = r.color.light;
              t >= c &&
                n >= c &&
                t < s - c &&
                n < s - c &&
                (d =
                  l[
                    +!!i[Math.floor((t - c) / a) * o + Math.floor((n - c) / a)]
                  ]),
                (e[u++] = d.r),
                (e[u++] = d.g),
                (e[u++] = d.b),
                (e[u] = d.a);
            }
        });
    },
    52769: (e, t, n) => {
      let r = n(91791),
        o = n(93711),
        i = n(85289),
        a = n(23308);
      function s(e, t, n, i, a) {
        let s = [].slice.call(arguments, 1),
          c = s.length,
          l = "function" == typeof s[c - 1];
        if (!l && !r()) throw Error("Callback required as last argument");
        if (l) {
          if (c < 2) throw Error("Too few arguments provided");
          2 === c
            ? ((a = n), (n = t), (t = i = void 0))
            : 3 === c &&
              (t.getContext && void 0 === a
                ? ((a = i), (i = void 0))
                : ((a = i), (i = n), (n = t), (t = void 0)));
        } else {
          if (c < 1) throw Error("Too few arguments provided");
          return (
            1 === c
              ? ((n = t), (t = i = void 0))
              : 2 !== c || t.getContext || ((i = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                let a = o.create(n, i);
                r(e(a, t, i));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let r = o.create(n, i);
          a(null, e(r, t, i));
        } catch (e) {
          a(e);
        }
      }
      (t.create = o.create),
        (t.toCanvas = s.bind(null, i.render)),
        (t.toDataURL = s.bind(null, i.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    53896: (e, t) => {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        o =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(o, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let i = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return i.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    54415: (e, t, n) => {
      let r = n(89158);
      function o(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (o.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t, n;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (n = parseInt(this.data.substr(t, 3), 10)), e.put(n, 10);
          let r = this.data.length - t;
          r > 0 &&
            ((n = parseInt(this.data.substr(t), 10)), e.put(n, 3 * r + 1));
        }),
        (e.exports = o);
    },
    54634: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => t4 });
      var r = n(4486),
        o = n(32733),
        i = n(30931),
        a = n(71552),
        s = n(42438),
        c = n(34561),
        l = n(92987),
        u = n(71971),
        d = n(38647),
        p = n(72757),
        h = n(25157);
      async function f(
        e,
        {
          blockNumber: t,
          blockTag: n,
          coinType: f,
          name: w,
          gatewayUrls: m,
          strict: g,
          universalResolverAddress: y,
        }
      ) {
        let b = y;
        if (!b) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          b = (0, a.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = (0, i.p)({
              abi: r.Rm,
              functionName: "addr",
              ...(null != f
                ? { args: [(0, u.k)(w), BigInt(f)] }
                : { args: [(0, u.k)(w)] }),
            }),
            l = {
              address: b,
              abi: r.Ag,
              functionName: "resolve",
              args: [(0, c.nj)((0, d.F)(w)), a],
              blockNumber: t,
              blockTag: n,
            },
            g = (0, p.T)(e, h.J, "readContract"),
            y = m ? await g({ ...l, args: [...l.args, m] }) : await g(l);
          if ("0x" === y[0]) return null;
          let A = (0, o.e)({
            abi: r.Rm,
            args: null != f ? [(0, u.k)(w), BigInt(f)] : void 0,
            functionName: "addr",
            data: y[0],
          });
          if ("0x" === A || "0x00" === (0, s.B)(A)) return null;
          return A;
        } catch (e) {
          if (g) throw e;
          if ((0, l.J)(e, "resolve")) return null;
          throw e;
        }
      }
      var w = n(41718),
        m = n(3629);
      async function g(
        e,
        { blockNumber: t, blockTag: n, name: r, universalResolverAddress: o }
      ) {
        let i = o;
        if (!i) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          i = (0, a.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [s] = await (0, p.T)(
          e,
          h.J,
          "readContract"
        )({
          address: i,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.nj)((0, d.F)(r))],
          blockNumber: t,
          blockTag: n,
        });
        return s;
      }
      var y = n(27321),
        b = n(39012),
        A = n(97152),
        v = n(96565),
        C = n(44332),
        x = n(74750),
        k = n(5691);
      async function E(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: o = "latest",
            blobs: i,
            data: a,
            gas: s,
            gasPrice: l,
            maxFeePerBlobGas: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: p,
            to: h,
            value: f,
            ...w
          } = t,
          m = n ? (0, A.J)(n) : void 0;
        try {
          (0, k.c)(t);
          let n = r ? (0, c.cK)(r) : void 0,
            g = e.chain?.formatters?.transactionRequest?.format,
            y = (g || x.Bv)({
              ...(0, C.o)(w, { format: g }),
              from: m?.address,
              blobs: i,
              data: a,
              gas: s,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: p,
              to: h,
              value: f,
            }),
            b = await e.request({
              method: "eth_createAccessList",
              params: [y, n || o],
            });
          return { accessList: b.accessList, gasUsed: BigInt(b.gasUsed) };
        } catch (n) {
          throw (0, v.d)(n, { ...t, account: m, chain: e.chain });
        }
      }
      function B(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: o, transport: i }) => {
                "success" === o && t === e && (n[r] = i.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function I(e) {
        let t = B(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var S = n(97525),
        M = n(13933);
      class P extends M.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var N = n(55563),
        T = n(80329),
        Q = n(33704),
        O = n(41706),
        D = n(23222),
        R = n(1347);
      let F = "/docs/contract/encodeEventTopics";
      function W(e) {
        let { abi: t, eventName: n, args: r } = e,
          o = t[0];
        if (n) {
          let e = (0, R.iY)({ abi: t, name: n });
          if (!e) throw new S.M_(n, { docsPath: F });
          o = e;
        }
        if ("event" !== o.type) throw new S.M_(void 0, { docsPath: F });
        let i = (0, D.B)(o),
          a = (0, Q.h)(i),
          s = [];
        if (r && "inputs" in o) {
          let e = o.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, o) => q({ param: e, value: t[n][o] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? q({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [a, ...s];
      }
      function q({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, T.S)((0, N.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new P(e.type);
        return (0, O.h)([e], [t]);
      }
      async function L(e, t) {
        let {
            address: n,
            abi: r,
            args: o,
            eventName: i,
            fromBlock: a,
            strict: s,
            toBlock: l,
          } = t,
          u = B(e, { method: "eth_newFilter" }),
          d = i ? W({ abi: r, args: o, eventName: i }) : void 0,
          p = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof a ? (0, c.cK)(a) : a,
                toBlock: "bigint" == typeof l ? (0, c.cK)(l) : l,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: o,
          eventName: i,
          id: p,
          request: u(p),
          strict: !!s,
          type: "event",
        };
      }
      async function U(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: o,
          fromBlock: i,
          strict: a,
          toBlock: s,
        } = {}
      ) {
        let l = o ?? (r ? [r] : void 0),
          u = B(e, { method: "eth_newFilter" }),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) => W({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let p = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, c.cK)(i) : i,
              toBlock: "bigint" == typeof s ? (0, c.cK)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: i,
          id: p,
          request: u(p),
          strict: !!a,
          toBlock: s,
          type: "event",
        };
      }
      async function j(e) {
        let t = B(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var J = n(93527),
        K = n(34897);
      async function H(e, t) {
        let {
            abi: n,
            address: r,
            args: o,
            functionName: a,
            dataSuffix: s,
            ...c
          } = t,
          l = (0, i.p)({ abi: n, args: o, functionName: a });
        try {
          return await (0, p.T)(
            e,
            K.Q,
            "estimateGas"
          )({ data: `${l}${s ? s.replace("0x", "") : ""}`, to: r, ...c });
        } catch (t) {
          let e = c.account ? (0, A.J)(c.account) : void 0;
          throw (0, J.j)(t, {
            abi: n,
            address: r,
            args: o,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      var z = n(98292),
        G = n(5935),
        V = n(90707);
      async function Y(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var Z = n(60186),
        X = n(70054),
        _ = n(11914);
      async function $(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let o,
          i = void 0 !== n ? (0, c.cK)(n) : void 0;
        return (
          (o = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [i || r],
                },
                { dedupe: !!i }
              )),
          (0, _.ME)(o)
        );
      }
      var ee = n(35471);
      async function et(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0,
          i = await e.request(
            { method: "eth_getCode", params: [t, o || r] },
            { dedupe: !!o }
          );
        if ("0x" !== i) return i;
      }
      var en = n(32108),
        er = n(16871),
        eo = n(27747),
        ei = n(80897);
      let ea = "/docs/contract/decodeEventLog";
      function es(e) {
        let { abi: t, data: n, strict: r, topics: o } = e,
          i = r ?? !0,
          [a, ...s] = o;
        if (!a) throw new S._z({ docsPath: ea });
        let c =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && a === (0, Q.h)((0, D.B)(e)));
        if (!(c && "name" in c) || "event" !== c.type)
          throw new S.kE(a, { docsPath: ea });
        let { name: l, inputs: u } = c,
          d = u?.some((e) => !("name" in e && e.name)),
          p = d ? [] : {},
          h = u.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < h.length; e++) {
          let t = h[e],
            n = s[e];
          if (!n) throw new S.l3({ abiItem: c, param: t });
          p[d ? e : t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, ei.n)([e], t) || [])[0];
          })({ param: t, value: n });
        }
        let f = u.filter((e) => !("indexed" in e && e.indexed));
        if (f.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, ei.n)(f, n);
              if (e)
                if (d) p = [...p, ...e];
                else for (let t = 0; t < f.length; t++) p[f[t].name] = e[t];
            } catch (e) {
              if (i) {
                if (e instanceof S.Iy || e instanceof eo.SK)
                  throw new S.fo({
                    abiItem: c,
                    data: n,
                    params: f,
                    size: (0, er.E)(n),
                  });
                throw e;
              }
            }
          else if (i)
            throw new S.fo({ abiItem: c, data: "0x", params: f, size: 0 });
        }
        return { eventName: l, args: Object.values(p).length > 0 ? p : void 0 };
      }
      function ec(e) {
        let { abi: t, args: n, logs: r, strict: o = !0 } = e,
          i = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return r
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, Q.h)(t)
              );
              if (!r) return null;
              let a = es({ ...e, abi: [r], strict: o });
              if (
                (i && !i.includes(a.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function o(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, en.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, T.S)((0, N.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null == e) return !0;
                        let i = n[r];
                        return (
                          !!i &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(i, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null == r) return !0;
                          let i = n.find((t) => t.name === e);
                          return (
                            !!i &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              o(i, n, t[e])
                            )
                          );
                        });
                })({ args: a.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...a, ...e };
            } catch (r) {
              let t, n;
              if (r instanceof S.kE) return null;
              if (r instanceof S.fo || r instanceof S.l3) {
                if (o) return null;
                (t = r.abiItem.name),
                  (n = r.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      var el = n(52623);
      async function eu(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: o,
          event: i,
          events: a,
          args: s,
          strict: l,
        } = {}
      ) {
        let u = a ?? (i ? [i] : void 0),
          d = [];
        u &&
          ((d = [
            u.flatMap((e) =>
              W({ abi: [e], eventName: e.name, args: a ? void 0 : s })
            ),
          ]),
          i && (d = d[0]));
        let p = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: d, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: d,
                    fromBlock: "bigint" == typeof r ? (0, c.cK)(r) : r,
                    toBlock: "bigint" == typeof o ? (0, c.cK)(o) : o,
                  },
                ],
              })
        ).map((e) => (0, el.e)(e));
        return u ? ec({ abi: u, args: s, logs: p, strict: l ?? !1 }) : p;
      }
      async function ed(e, t) {
        let {
            abi: n,
            address: r,
            args: o,
            blockHash: i,
            eventName: a,
            fromBlock: s,
            toBlock: c,
            strict: l,
          } = t,
          u = a ? (0, R.iY)({ abi: n, name: a }) : void 0,
          d = u ? void 0 : n.filter((e) => "event" === e.type);
        return (0, p.T)(
          e,
          eu,
          "getLogs"
        )({
          address: r,
          args: o,
          blockHash: i,
          event: u,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: l,
        });
      }
      class ep extends M.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function eh(e, t) {
        let { address: n, factory: r, factoryData: o } = t;
        try {
          let [t, i, a, s, c, l, u] = await (0, p.T)(
            e,
            h.J,
            "readContract"
          )({
            abi: ef,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: o,
          });
          return {
            domain: {
              name: i,
              version: a,
              chainId: Number(s),
              verifyingContract: c,
              salt: l,
            },
            extensions: u,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new ep({ address: n });
          throw e;
        }
      }
      let ef = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function ew(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: o,
        }
      ) {
        var i;
        let a = n ? (0, c.cK)(n) : void 0;
        return {
          baseFeePerGas: (i = await e.request(
            { method: "eth_feeHistory", params: [(0, c.cK)(t), a || r, o] },
            { dedupe: !!a }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function em(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let o = r.map((e) => (0, el.e)(e));
        return "abi" in t && t.abi ? ec({ abi: t.abi, logs: o, strict: n }) : o;
      }
      async function eg(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, el.e)(e));
        return t.abi ? ec({ abi: t.abi, logs: r, strict: n }) : r;
      }
      var ey = n(32395);
      async function eb(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: o }
      ) {
        let i = void 0 !== n ? (0, c.cK)(n) : void 0;
        var a = await e.request({
          method: "eth_getProof",
          params: [t, o, i || (r ?? "latest")],
        });
        return {
          ...a,
          balance: a.balance ? BigInt(a.balance) : void 0,
          nonce: a.nonce ? (0, _.ME)(a.nonce) : void 0,
          storageProof: a.storageProof
            ? a.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function eA(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: o }
      ) {
        let i = void 0 !== n ? (0, c.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, o, i || r],
        });
      }
      var ev = n(83759);
      async function eC(e, { hash: t, transactionReceipt: n }) {
        let [r, o] = await Promise.all([
            (0, p.T)(e, X.G, "getBlockNumber")({}),
            t ? (0, p.T)(e, ev.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          i = n?.blockNumber || o?.blockNumber;
        return i ? r - i + 1n : 0n;
      }
      var ex = n(6434),
        ek = n(56996),
        eE = n(61812);
      class eB extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof eB) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            r = (t.cause instanceof eB && t.cause.docsPath) || t.docsPath,
            o = `https://oxlib.sh${r ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || r
                ? ["", n ? `Details: ${n}` : void 0, r ? `See: ${o}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
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
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = o),
            (this.docsPath = r),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      function eI(e, t) {
        if (eq(e) > t) throw new eJ({ givenSize: eq(e), maxSize: t });
      }
      function eS(e, t = {}) {
        let { dir: n, size: r = 32 } = t;
        if (0 === r) return e;
        let o = e.replace("0x", "");
        if (o.length > 2 * r)
          throw new eH({
            size: Math.ceil(o.length / 2),
            targetSize: r,
            type: "Hex",
          });
        return `0x${o["right" === n ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
      let eM = new TextEncoder(),
        eP = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function eN(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function eT(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size ? (eI(n, t.size), eR(n, t.size)) : n;
      }
      function eQ(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += eP[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (eI(r, t.size), eF(r, t.size)) : r;
      }
      function eO(e, t = {}) {
        let n,
          { signed: r, size: o } = t,
          i = BigInt(e);
        o
          ? (n = r
              ? (1n << (8n * BigInt(o) - 1n)) - 1n
              : 2n ** (8n * BigInt(o)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let a = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && i > n) || i < a) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new eL({
            max: n ? `${n}${t}` : void 0,
            min: `${a}${t}`,
            signed: r,
            size: o,
            value: `${e}${t}`,
          });
        }
        let s = (r && i < 0 ? (1n << BigInt(8 * o)) + BigInt(i) : i).toString(
            16
          ),
          c = `0x${s}`;
        return o ? eR(c, o) : c;
      }
      function eD(e, t = {}) {
        return eQ(eM.encode(e), t);
      }
      function eR(e, t) {
        return eS(e, { dir: "left", size: t });
      }
      function eF(e, t) {
        return eS(e, { dir: "right", size: t });
      }
      function eW(e, t, n, r = {}) {
        let { strict: o } = r;
        if ("number" == typeof t && t > 0 && t > eq(e) - 1)
          throw new eK({ offset: t, position: "start", size: eq(e) });
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return (
          o &&
            (function (e, t, n) {
              if (
                "number" == typeof t &&
                "number" == typeof n &&
                eq(e) !== n - t
              )
                throw new eK({ offset: n, position: "end", size: eq(e) });
            })(i, t, n),
          i
        );
      }
      function eq(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      class eL extends eB {
        constructor({ max: e, min: t, signed: n, size: r, value: o }) {
          super(
            `Number \`${o}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class eU extends eB {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e
                ? JSON.stringify(
                    e,
                    (e, t) =>
                      "bigint" == typeof t ? t.toString() + "#__bigint" : t,
                    void 0
                  )
                : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class ej extends eB {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      class eJ extends eB {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class eK extends eB {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class eH extends eB {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      function ez(e) {
        return {
          address: e.address,
          amount: eO(e.amount),
          index: eO(e.index),
          validatorIndex: eO(e.validatorIndex),
        };
      }
      var eG = n(35326),
        eV = n(88737),
        eY = n(61829),
        eZ = n(61936),
        eX = n(4274);
      async function e_(e, t) {
        let {
          blockNumber: n,
          blockTag: r = "latest",
          blocks: a,
          returnFullTransactions: s,
          traceTransfers: l,
          validation: u,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            var d;
            let n = e.blockOverrides
                ? ((d = e.blockOverrides),
                  {
                    ...("bigint" == typeof d.baseFeePerGas && {
                      baseFeePerGas: eO(d.baseFeePerGas),
                    }),
                    ...("bigint" == typeof d.blobBaseFee && {
                      blobBaseFee: eO(d.blobBaseFee),
                    }),
                    ...("string" == typeof d.feeRecipient && {
                      feeRecipient: d.feeRecipient,
                    }),
                    ...("bigint" == typeof d.gasLimit && {
                      gasLimit: eO(d.gasLimit),
                    }),
                    ...("bigint" == typeof d.number && {
                      number: eO(d.number),
                    }),
                    ...("bigint" == typeof d.prevRandao && {
                      prevRandao: eO(d.prevRandao),
                    }),
                    ...("bigint" == typeof d.time && { time: eO(d.time) }),
                    ...(d.withdrawals && {
                      withdrawals: d.withdrawals.map(ez),
                    }),
                  })
                : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, A.J)(e.account) : void 0,
                  n = {
                    ...e,
                    data: e.abi ? (0, i.p)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, k.c)(n), (0, x.Bv)(n);
              }),
              o = e.stateOverrides ? (0, eX.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: o });
          }
          let p = n ? (0, c.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: l,
                  validation: u,
                },
                p || r,
              ],
            })
          ).map((e, t) => ({
            ...(0, eZ.$)(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: i, functionName: s, to: c } = a[t].calls[n],
                l = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                d = e.logs?.map((e) => (0, el.e)(e)),
                p = "0x1" === e.status ? "success" : "failure",
                h =
                  r && "success" === p
                    ? (0, o.e)({ abi: r, data: l, functionName: s })
                    : null,
                f = (() => {
                  let t;
                  if (
                    "success" !== p &&
                    (e.error?.data === "0x"
                      ? (t = new S.O())
                      : e.error && (t = new eG.$S(e.error)),
                    t)
                  )
                    return (0, J.j)(t, {
                      abi: r ?? [],
                      address: c,
                      args: i,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: l,
                gasUsed: u,
                logs: d,
                status: p,
                ...("success" === p ? { result: h } : { error: f }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eY.l)(t, {});
          if (e instanceof eV.RM) throw t;
          throw e;
        }
      }
      var e$ = n(253),
        e0 = n(53098),
        e1 = n(26722),
        e2 = n(32255),
        e3 = n(93036),
        e5 = n(76235);
      let e6 = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function e4(e) {
        return e >= e6.zero && e <= e6.nine
          ? e - e6.zero
          : e >= e6.A && e <= e6.F
          ? e - (e6.A - 10)
          : e >= e6.a && e <= e6.f
          ? e - (e6.a - 10)
          : void 0;
      }
      let e8 = new TextEncoder();
      class e9 extends eB {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      class e7 extends eB {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function te(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          o = (0, e5.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? (function (e, t = {}) {
                  let { size: n } = t,
                    r = e;
                  n && (eI(e, n), (r = eF(e, n)));
                  let o = r.slice(2);
                  o.length % 2 && (o = `0${o}`);
                  let i = o.length / 2,
                    a = new Uint8Array(i);
                  for (let e = 0, t = 0; e < i; e++) {
                    let n = e4(o.charCodeAt(t++)),
                      r = e4(o.charCodeAt(t++));
                    if (void 0 === n || void 0 === r)
                      throw new eB(
                        `Invalid byte sequence ("${o[t - 2]}${
                          o[t - 1]
                        }" in "${o}").`
                      );
                    a[e] = 16 * n + r;
                  }
                  return a;
                })(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? o : eQ(o);
      }
      class tt extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let tn = { checksum: new tt(8192) }.checksum,
        tr = /^0x[a-fA-F0-9]{40}$/;
      function to(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!tr.test(e)) throw new ta({ address: e, cause: new ts() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (tn.has(e)) return tn.get(e);
              to(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                n = te(
                  (function (e, t = {}) {
                    let { size: n } = t,
                      r = e8.encode(e);
                    if ("number" == typeof n) {
                      var o;
                      if (r.length > n)
                        throw new e9({ givenSize: r.length, maxSize: n });
                      return (
                        (o = r),
                        (function (e, t = {}) {
                          let { dir: n, size: r = 32 } = t;
                          if (0 === r) return e;
                          if (e.length > r)
                            throw new e7({
                              size: e.length,
                              targetSize: r,
                              type: "Bytes",
                            });
                          let o = new Uint8Array(r);
                          for (let t = 0; t < r; t++) {
                            let i = "right" === n;
                            o[i ? t : r - t - 1] = e[i ? t : e.length - t - 1];
                          }
                          return o;
                        })(o, { dir: "right", size: n })
                      );
                    }
                    return r;
                  })(t),
                  { as: "Bytes" }
                ),
                r = t.split("");
              for (let e = 0; e < 40; e += 2)
                n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                  (15 & n[e >> 1]) >= 8 &&
                    r[e + 1] &&
                    (r[e + 1] = r[e + 1].toUpperCase());
              let o = `0x${r.join("")}`;
              return tn.set(e, o), o;
            })(e) !== e
          )
            throw new ta({ address: e, cause: new tc() });
        }
      }
      function ti(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return to(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class ta extends eB {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class ts extends eB {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class tc extends eB {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function tl(e) {
        let t = !0,
          n = "",
          r = 0,
          o = "",
          i = !1;
        for (let a = 0; a < e.length; a++) {
          let s = e[a];
          if (
            (["(", ")", ","].includes(s) && (t = !0),
            "(" === s && r++,
            ")" === s && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === s && ["event", "function", "error", ""].includes(o))
                o = "";
              else if (((o += s), ")" === s)) {
                i = !0;
                break;
              }
              continue;
            }
            if (" " === s) {
              "," !== e[a - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (o += s), (n += s);
          }
        }
        if (!i) throw new eB("Unable to normalize signature.");
        return o;
      }
      function tu(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, e2.uT)(e);
                  else {
                    let n = (0, e1.e)(e),
                      r = e.length;
                    for (let o = 0; o < r; o++) {
                      let r = e[o];
                      if (!(0, e0.WL)(r)) {
                        t = (0, e2.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new e$.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: tp(r) } : {}) };
      }
      function td(e) {
        return eW(tp(e), 0, 4);
      }
      function tp(e) {
        return "string" != typeof e && "hash" in e && e.hash
          ? e.hash
          : te(eD(tl("string" == typeof e ? e : e3.B(e))));
      }
      class th extends eB {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${tl(e3.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${tl(e3.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class tf extends eB {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      n(71128);
      let tw = /^(.*)\[([0-9]*)\]$/,
        tm = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        tg =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function ty(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: o } = e[n];
          r ? (t += 32) : (t += eq(o));
        }
        let n = [],
          r = [],
          o = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: a, encoded: s } = e[i];
          a
            ? (n.push(eO(t + o, { size: 32 })), r.push(s), (o += eq(s)))
            : n.push(s);
        }
        return eN(...n, ...r);
      }
      function tb(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new tx({ expectedLength: e.length, givenLength: t.length });
        let o = ty(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let o = 0; o < t.length; o++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let o = (function (e) {
                    let t = e.match(/^(.*)\[(\d+)?\]$/);
                    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
                  })(n.type);
                  if (o) {
                    let [i, a] = o;
                    return (function (t, n) {
                      let { checksumAddress: r, length: o, parameter: i } = n,
                        a = null === o;
                      if (!Array.isArray(t)) throw new tk(t);
                      if (!a && t.length !== o)
                        throw new tv({
                          expectedLength: o,
                          givenLength: t.length,
                          type: `${i.type}[${o}]`,
                        });
                      let s = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let o = e({
                          checksumAddress: r,
                          parameter: i,
                          value: t[n],
                        });
                        o.dynamic && (s = !0), c.push(o);
                      }
                      if (a || s) {
                        let e = ty(c);
                        if (a) {
                          let t = eO(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? eN(t, e) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: eN(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: i,
                      parameter: { ...n, type: a },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: o } = n,
                        i = !1,
                        a = [];
                      for (let n = 0; n < o.components.length; n++) {
                        let s = o.components[n],
                          c = Array.isArray(t) ? n : s.name,
                          l = e({
                            checksumAddress: r,
                            parameter: s,
                            value: t[c],
                          });
                        a.push(l), l.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i
                          ? ty(a)
                          : eN(...a.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var i = r,
                      a = { checksum: t };
                    let { checksum: e = !1 } = a;
                    return (
                      to(i, { strict: e }),
                      { dynamic: !1, encoded: eR(i.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var s = r;
                    if ("boolean" != typeof s)
                      throw new eB(
                        `Invalid boolean value: "${s}" (type: ${typeof s}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: eR(eT(s)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = tg.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          o = t ? -r - 1n : 0n;
                        if (e > r || e < o)
                          throw new eL({
                            max: r.toString(),
                            min: o.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: eO(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = eq(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = eF(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: eN(eR(eO(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new tC({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return { dynamic: !1, encoded: eF(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = eD(c),
                      t = Math.ceil(eq(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(eF(eW(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: eN(eF(eO(eq(e), { size: 32 })), ...n),
                    };
                  }
                  throw new tE(n.type);
                })({ checksumAddress: e, parameter: t[o], value: n[o] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === o.length ? "0x" : o;
      }
      function tA(e, t) {
        if (e.length !== t.length)
          throw new tx({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let o = e[r],
            i = t[r];
          n.push(tA.encode(o, i));
        }
        return eN(...n);
      }
      (tA || (tA = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return to(n), eR(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return eD(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return eR(eT(n), r ? 32 : 1);
        let o = t.match(tg);
        if (o) {
          let [e, t, i = "256"] = o,
            a = Number.parseInt(i) / 8;
          return eO(n, { size: r ? 32 : a, signed: "int" === t });
        }
        let i = t.match(tm);
        if (i) {
          let [e, t] = i;
          if (Number.parseInt(t) !== (n.length - 2) / 2)
            throw new tC({ expectedSize: Number.parseInt(t), value: n });
          return eF(n, 32 * !!r);
        }
        let a = t.match(tw);
        if (a && Array.isArray(n)) {
          let [t, r] = a,
            o = [];
          for (let t = 0; t < n.length; t++) o.push(e(r, n[t], !0));
          return 0 === o.length ? "0x" : eN(...o);
        }
        throw new tE(t);
      };
      class tv extends eB {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class tC extends eB {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${eq(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class tx extends eB {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class tk extends eB {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class tE extends eB {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function tB(e, t = {}) {
        return tu(e, t);
      }
      let tI = "0x0000000000000000000000000000000000000000";
      var tS = n(54560);
      async function tM(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: o,
            stateOverrides: a,
            traceAssetChanges: s,
            traceTransfers: c,
            validation: l,
          } = t,
          u = t.account ? (0, A.J)(t.account) : void 0;
        if (s && !u)
          throw new M.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = u
            ? (function (e, t) {
                let { bytecode: n, args: r } = t;
                return eN(
                  n,
                  e.inputs?.length && r?.length ? tb(e.inputs, r) : "0x"
                );
              })(tu("constructor(bytes, bytes)"), {
                bytecode: tS.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (e, ...t) {
                    let { overloads: n } = e,
                      r = n
                        ? (function (e, t, n) {
                            let r = (function (e, t, n) {
                              let r,
                                { args: o = [], prepare: i = !0 } = n ?? {},
                                a = (function (e, t = {}) {
                                  let { strict: n = !1 } = t;
                                  try {
                                    return (
                                      !(function (e, t = {}) {
                                        let { strict: n = !1 } = t;
                                        if (!e || "string" != typeof e)
                                          throw new eU(e);
                                        if (
                                          (n && !/^0x[0-9a-fA-F]*$/.test(e)) ||
                                          !e.startsWith("0x")
                                        )
                                          throw new ej(e);
                                      })(e, { strict: n }),
                                      !0
                                    );
                                  } catch {
                                    return !1;
                                  }
                                })(t, { strict: !1 }),
                                s = e.filter((e) =>
                                  a
                                    ? "function" === e.type ||
                                      "error" === e.type
                                      ? td(e) === eW(t, 0, 4)
                                      : "event" === e.type && tp(e) === t
                                    : "name" in e && e.name === t
                                );
                              if (0 === s.length) throw new tf({ name: t });
                              if (1 === s.length)
                                return {
                                  ...s[0],
                                  ...(i ? { hash: tp(s[0]) } : {}),
                                };
                              for (let e of s) {
                                if ("inputs" in e) {
                                  if (!o || 0 === o.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return {
                                        ...e,
                                        ...(i ? { hash: tp(e) } : {}),
                                      };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === o.length &&
                                    o.every((t, n) => {
                                      let r = "inputs" in e && e.inputs[n];
                                      return (
                                        !!r &&
                                        (function e(t, n) {
                                          let r = typeof t,
                                            o = n.type;
                                          switch (o) {
                                            case "address":
                                              return ti(t, { strict: !1 });
                                            case "bool":
                                              return "boolean" === r;
                                            case "function":
                                            case "string":
                                              return "string" === r;
                                            default:
                                              if (
                                                "tuple" === o &&
                                                "components" in n
                                              )
                                                return Object.values(
                                                  n.components
                                                ).every((n, r) =>
                                                  e(Object.values(t)[r], n)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  "number" === r ||
                                                  "bigint" === r
                                                );
                                              if (
                                                /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  "string" === r ||
                                                  t instanceof Uint8Array
                                                );
                                              if (
                                                /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(
                                                  o
                                                )
                                              )
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...n,
                                                      type: o.replace(
                                                        /(\[[0-9]{0,}\])$/,
                                                        ""
                                                      ),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, r)
                                      );
                                    })
                                  ) {
                                    if (r && "inputs" in r && r.inputs) {
                                      let t = (function e(t, n, r) {
                                        for (let o in t) {
                                          let i = t[o],
                                            a = n[o];
                                          if (
                                            "tuple" === i.type &&
                                            "tuple" === a.type &&
                                            "components" in i &&
                                            "components" in a
                                          )
                                            return e(
                                              i.components,
                                              a.components,
                                              r[o]
                                            );
                                          let s = [i.type, a.type];
                                          if (
                                            (s.includes("address") &&
                                              s.includes("bytes20")) ||
                                            (((s.includes("address") &&
                                              s.includes("string")) ||
                                              (s.includes("address") &&
                                                s.includes("bytes"))) &&
                                              ti(r[o], { strict: !1 }))
                                          )
                                            return s;
                                        }
                                      })(e.inputs, r.inputs, o);
                                      if (t)
                                        throw new th(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: r, type: t[1] }
                                        );
                                    }
                                    r = e;
                                  }
                                }
                              }
                              let c = (() => {
                                if (r) return r;
                                let [e, ...t] = s;
                                return { ...e, overloads: t };
                              })();
                              if (!c) throw new tf({ name: t });
                              return { ...c, ...(i ? { hash: tp(c) } : {}) };
                            })(e, t, n);
                            if ("function" !== r.type)
                              throw new tf({ name: t, type: "function" });
                            return r;
                          })([e, ...n], e.name, { args: t[0] })
                        : e,
                      o = td(r),
                      i = t.length > 0 ? tb(r.inputs, t[0]) : void 0;
                    return i ? eN(o, i) : o;
                  })(tB("function getBalance(address)"), [u.address]),
                ],
              })
            : void 0,
          p = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await E(e, {
                    account: u.address,
                    ...t,
                    data: t.abi ? (0, i.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          h = a?.map((e) =>
            e.address === u?.address ? { ...e, nonce: 0 } : e
          ),
          f = await e_(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: d }], stateOverrides: a },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          tB("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tI,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tI, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...o, {}].map((e, t) => ({
                  ...e,
                  from: u?.address,
                  nonce: t,
                })),
                stateOverrides: h,
              },
              ...(s
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: p.map((e, t) => ({
                        abi: [
                          tB("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tI,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tI, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [tB("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: tI,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tI, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [
                          tB("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: tI,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tI, nonce: 0 }],
                    },
                    {
                      calls: p.map((e, t) => ({
                        to: e,
                        abi: [tB("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: tI,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tI, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: c,
            validation: l,
          }),
          w = s ? f[2] : f[0],
          [m, g, , y, b, v, C, x] = s ? f : [],
          { calls: k, ...B } = w,
          I = k.slice(0, -1) ?? [],
          S = [...(m?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, _.uU)(e.data) : null
          ),
          P = [...(y?.calls ?? []), ...(b?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, _.uU)(e.data) : null
          ),
          N = (v?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          Q = (C?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          O = [];
        for (let [e, t] of P.entries()) {
          let n = S[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = N[e - 1],
            o = T[e - 1],
            i = Q[e - 1],
            a =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: p[e - 1],
                    decimals: i || r ? Number(r ?? 1) : void 0,
                    symbol: o ?? void 0,
                  };
          O.some((e) => e.token.address === a.address) ||
            O.push({ token: a, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: O, block: B, results: I };
      }
      async function tP(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            dataSuffix: s,
            functionName: c,
            ...l
          } = t,
          u = l.account ? (0, A.J)(l.account) : e.account,
          d = (0, i.p)({ abi: n, args: a, functionName: c });
        try {
          let { data: i } = await (0, p.T)(
              e,
              b.T,
              "call"
            )({
              batch: !1,
              data: `${d}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...l,
              account: u,
            }),
            h = (0, o.e)({ abi: n, args: a, functionName: c, data: i || "0x" }),
            f = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: h,
            request: {
              abi: f,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: c,
              ...l,
              account: u,
            },
          };
        } catch (e) {
          throw (0, J.j)(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: c,
            sender: u?.address,
          });
        }
      }
      async function tN(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      var tT = n(82323),
        tQ = n(6867),
        tO = n(77608),
        tD = n(60587);
      let tR =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var tF = n(44352),
        tW = n(88423),
        tq = n(40290),
        tL = n(20837);
      async function tU(e, t) {
        let {
            address: n,
            factory: o,
            factoryData: a,
            hash: s,
            signature: l,
            universalSignatureVerifierAddress: u = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...d
          } = t,
          h = (0, tD.q)(l)
            ? l
            : "object" == typeof l && "r" in l && "s" in l
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: o }) {
                let i = (() => {
                    if (0 === o || 1 === o) return o;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return +(r % 2n === 0n);
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  a = `0x${new tL.secp256k1.Signature(
                    (0, _.uU)(e),
                    (0, _.uU)(t)
                  ).toCompactHex()}${0 === i ? "1b" : "1c"}`;
                return "hex" === n ? a : (0, N.aT)(a);
              })(l)
            : (0, c.My)(l),
          f = await (async () => {
            if ((!o && !a) || (0, tF.iN)(h, -32) === tR) return h;
            let {
                address: e,
                data: t,
                signature: n,
                to: r = "hex",
              } = { address: o, data: a, signature: h },
              i = (0, tq.aP)([
                (0, O.h)(
                  [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                  [e, t, n]
                ),
                tR,
              ]);
            return "hex" === r ? i : (0, N.aT)(i);
          })();
        try {
          let t = u
              ? {
                  to: u,
                  data: (0, i.p)({
                    abi: r._,
                    functionName: "isValidSig",
                    args: [n, s, f],
                  }),
                  ...d,
                }
              : {
                  data: (0, tQ.m)({
                    abi: r._,
                    args: [n, s, f],
                    bytecode: tS.nP,
                  }),
                  ...d,
                },
            { data: o } = await (0, p.T)(e, b.T, "call")(t);
          return (0, _.Nx)(o ?? "0x0");
        } catch (e) {
          try {
            if (
              (0, en.h)(
                (0, tO.b)(n),
                await (0, tW.x)({ hash: s, signature: l })
              )
            )
              return !0;
          } catch {}
          if (e instanceof eG.zX) return !1;
          throw e;
        }
      }
      async function tj(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: o,
          signature: i,
          ...a
        }
      ) {
        return tU(e, {
          address: t,
          factory: r,
          factoryData: o,
          hash: (0, tT.A)(n),
          signature: i,
          ...a,
        });
      }
      var tJ = n(14358);
      async function tK(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: o,
          signature: i,
          message: a,
          primaryType: s,
          types: c,
          domain: l,
          ...u
        } = t;
        return tU(e, {
          address: n,
          factory: r,
          factoryData: o,
          hash: (0, tJ.Zh)({ message: a, primaryType: s, types: c, domain: l }),
          signature: i,
          ...u,
        });
      }
      var tH = n(52497),
        tz = n(5766),
        tG = n(87639),
        tV = n(94788),
        tY = n(59350),
        tZ = n(73168);
      let tX =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        t_ =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      async function t$(e, t) {
        let {
            address: n,
            domain: r,
            message: o,
            nonce: i,
            scheme: a,
            signature: s,
            time: c = new Date(),
            ...l
          } = t,
          u = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(tX)?.groups ?? {},
              {
                chainId: o,
                expirationTime: i,
                issuedAt: a,
                notBefore: s,
                requestId: c,
                ...l
              } = e.match(t_)?.groups ?? {},
              u = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(o ? { chainId: Number(o) } : {}),
              ...(i ? { expirationTime: new Date(i) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(u ? { resources: u } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(o);
        if (
          !u.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: o,
              scheme: i,
              time: a = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (o && r.nonce !== o) ||
              (i && r.scheme !== i) ||
              (r.expirationTime && a >= r.expirationTime) ||
              (r.notBefore && a < r.notBefore)
            )
              return !1;
            try {
              if (!r.address || (t && !(0, en.h)(r.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: u,
            nonce: i,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, tT.A)(o);
        return tU(e, { address: u.address, hash: d, signature: s, ...l });
      }
      var t0 = n(21920),
        t1 = n(72707);
      function t2(e) {
        return {
          call: (t) => (0, b.T)(e, t),
          createAccessList: (t) => E(e, t),
          createBlockFilter: () => I(e),
          createContractEventFilter: (t) => L(e, t),
          createEventFilter: (t) => U(e, t),
          createPendingTransactionFilter: () => j(e),
          estimateContractGas: (t) => H(e, t),
          estimateGas: (t) => (0, K.Q)(e, t),
          getBalance: (t) => (0, V.r)(e, t),
          getBlobBaseFee: () => Y(e),
          getBlock: (t) => (0, Z.g)(e, t),
          getBlockNumber: (t) => (0, X.G)(e, t),
          getBlockTransactionCount: (t) => $(e, t),
          getBytecode: (t) => et(e, t),
          getChainId: () => (0, ee.T)(e),
          getCode: (t) => et(e, t),
          getContractEvents: (t) => ed(e, t),
          getEip712Domain: (t) => eh(e, t),
          getEnsAddress: (t) => f(e, t),
          getEnsAvatar: (t) => (0, w.i)(e, t),
          getEnsName: (t) => (0, m.s)(e, t),
          getEnsResolver: (t) => g(e, t),
          getEnsText: (t) => (0, y.m)(e, t),
          getFeeHistory: (t) => ew(e, t),
          estimateFeesPerGas: (t) => (0, z._)(e, t),
          getFilterChanges: (t) => em(e, t),
          getFilterLogs: (t) => eg(e, t),
          getGasPrice: () => (0, ey.L)(e),
          getLogs: (t) => eu(e, t),
          getProof: (t) => eb(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, G.b)(e, t),
          getStorageAt: (t) => eA(e, t),
          getTransaction: (t) => (0, ev.x)(e, t),
          getTransactionConfirmations: (t) => eC(e, t),
          getTransactionCount: (t) => (0, ex.y)(e, t),
          getTransactionReceipt: (t) => (0, ek.h)(e, t),
          multicall: (t) => (0, eE.C)(e, t),
          prepareTransactionRequest: (t) => (0, t0.ft)(e, t),
          readContract: (t) => (0, h.J)(e, t),
          sendRawTransaction: (t) => (0, t1.L)(e, t),
          simulate: (t) => e_(e, t),
          simulateBlocks: (t) => e_(e, t),
          simulateCalls: (t) => tM(e, t),
          simulateContract: (t) => tP(e, t),
          verifyMessage: (t) => tj(e, t),
          verifySiweMessage: (t) => t$(e, t),
          verifyTypedData: (t) => tK(e, t),
          uninstallFilter: (t) => tN(e, t),
          waitForTransactionReceipt: (t) => (0, tH.n)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: o,
                onError: i,
                includeTransactions: a,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let l,
                u,
                d,
                h,
                f =
                  void 0 !== s
                    ? s
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                w = a ?? !1;
              return f
                ? (() => {
                    let a = (0, tY.A)(["watchBlocks", e.uid, t, n, r, w, c]);
                    return (0, tG.lB)(a, { onBlock: o, onError: i }, (o) =>
                      (0, tV.w)(
                        async () => {
                          try {
                            let r = await (0, p.T)(
                              e,
                              Z.g,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: w });
                            if (r.number && l?.number) {
                              if (r.number === l.number) return;
                              if (r.number - l.number > 1 && n)
                                for (
                                  let t = l?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await (0, p.T)(
                                    e,
                                    Z.g,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: w });
                                  o.onBlock(n, l), (l = n);
                                }
                            }
                            (!l?.number ||
                              ("pending" === t && !r?.number) ||
                              (r.number && r.number > l.number)) &&
                              (o.onBlock(r, l), (l = r));
                          } catch (e) {
                            o.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                    );
                  })()
                : ((u = !0),
                  (d = !0),
                  (h = () => (u = !1)),
                  (async () => {
                    try {
                      r &&
                        (0, p.T)(
                          e,
                          Z.g,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: w }).then((e) => {
                          u && d && (o(e, void 0), (d = !1));
                        });
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!u) return;
                            let n = await (0, p.T)(
                              e,
                              Z.g,
                              "getBlock"
                            )({
                              blockNumber: t.blockNumber,
                              includeTransactions: w,
                            }).catch(() => {});
                            u && (o(n, l), (d = !1), (l = n));
                          },
                          onError(e) {
                            i?.(e);
                          },
                        });
                      (h = a), u || h();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchBlockNumber: (t) => (0, tz.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: o,
                batch: i = !0,
                eventName: a,
                fromBlock: s,
                onError: c,
                onLogs: l,
                poll: u,
                pollingInterval: d = e.pollingInterval,
                strict: h,
              } = t;
              return (
                void 0 !== u
                  ? u
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    let t = h ?? !1,
                      u = (0, tY.A)([
                        "watchContractEvent",
                        r,
                        o,
                        i,
                        e.uid,
                        a,
                        d,
                        t,
                        s,
                      ]);
                    return (0, tG.lB)(u, { onLogs: l, onError: c }, (c) => {
                      let l, u;
                      void 0 !== s && (l = s - 1n);
                      let h = !1,
                        f = (0, tV.w)(
                          async () => {
                            if (!h) {
                              try {
                                u = await (0, p.T)(
                                  e,
                                  L,
                                  "createContractEventFilter"
                                )({
                                  abi: n,
                                  address: r,
                                  args: o,
                                  eventName: a,
                                  strict: t,
                                  fromBlock: s,
                                });
                              } catch {}
                              h = !0;
                              return;
                            }
                            try {
                              let s;
                              if (u)
                                s = await (0, p.T)(
                                  e,
                                  em,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let i = await (0, p.T)(
                                  e,
                                  X.G,
                                  "getBlockNumber"
                                )({});
                                (s =
                                  l && l < i
                                    ? await (0, p.T)(
                                        e,
                                        ed,
                                        "getContractEvents"
                                      )({
                                        abi: n,
                                        address: r,
                                        args: o,
                                        eventName: a,
                                        fromBlock: l + 1n,
                                        toBlock: i,
                                        strict: t,
                                      })
                                    : []),
                                  (l = i);
                              }
                              if (0 === s.length) return;
                              if (i) c.onLogs(s);
                              else for (let e of s) c.onLogs([e]);
                            } catch (e) {
                              u && e instanceof tZ.Di && (h = !1),
                                c.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: d }
                        );
                      return async () => {
                        u &&
                          (await (0, p.T)(
                            e,
                            tN,
                            "uninstallFilter"
                          )({ filter: u })),
                          f();
                      };
                    });
                  })()
                : (() => {
                    let t = (0, tY.A)([
                        "watchContractEvent",
                        r,
                        o,
                        i,
                        e.uid,
                        a,
                        d,
                        h ?? !1,
                      ]),
                      s = !0,
                      u = () => (s = !1);
                    return (0, tG.lB)(
                      t,
                      { onLogs: l, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let i = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = a ? W({ abi: n, eventName: a, args: o }) : [],
                              { unsubscribe: l } = await i.subscribe({
                                params: ["logs", { address: r, topics: c }],
                                onData(e) {
                                  if (!s) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: o } = es({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: h,
                                      }),
                                      i = (0, el.e)(r, {
                                        args: o,
                                        eventName: e,
                                      });
                                    t.onLogs([i]);
                                  } catch (i) {
                                    let e, n;
                                    if (
                                      i instanceof S.fo ||
                                      i instanceof S.l3
                                    ) {
                                      if (h) return;
                                      (e = i.abiItem.name),
                                        (n = i.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let o = (0, el.e)(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([o]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (u = l), s || u();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => u()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: o,
                events: i,
                fromBlock: a,
                onError: s,
                onLogs: c,
                poll: l,
                pollingInterval: u = e.pollingInterval,
                strict: d,
              }
            ) {
              let h,
                f,
                w =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                m = d ?? !1;
              return w
                ? (() => {
                    let l = (0, tY.A)(["watchEvent", t, n, r, e.uid, o, u, a]);
                    return (0, tG.lB)(l, { onLogs: c, onError: s }, (s) => {
                      let c, l;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        h = (0, tV.w)(
                          async () => {
                            if (!d) {
                              try {
                                l = await (0, p.T)(
                                  e,
                                  U,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: o,
                                  events: i,
                                  strict: m,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (l)
                                a = await (0, p.T)(
                                  e,
                                  em,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let r = await (0, p.T)(
                                  e,
                                  X.G,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== r
                                    ? await (0, p.T)(
                                        e,
                                        eu,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: o,
                                        events: i,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === a.length) return;
                              if (r) s.onLogs(a);
                              else for (let e of a) s.onLogs([e]);
                            } catch (e) {
                              l && e instanceof tZ.Di && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        l &&
                          (await (0, p.T)(
                            e,
                            tN,
                            "uninstallFilter"
                          )({ filter: l })),
                          h();
                      };
                    });
                  })()
                : ((h = !0),
                  (f = () => (h = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = i ?? (o ? [o] : void 0),
                        l = [];
                      a &&
                        ((l = [
                          a.flatMap((e) =>
                            W({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        o && (l = l[0]));
                      let { unsubscribe: u } = await r.subscribe({
                        params: ["logs", { address: t, topics: l }],
                        onData(e) {
                          if (!h) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = es({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: m,
                              }),
                              r = (0, el.e)(t, { args: n, eventName: e });
                            c([r]);
                          } catch (o) {
                            let e, n;
                            if (o instanceof S.fo || o instanceof S.l3) {
                              if (d) return;
                              (e = o.abiItem.name),
                                (n = o.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = (0, el.e)(t, {
                              args: n ? [] : {},
                              eventName: e,
                            });
                            c([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (f = u), h || f();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: o,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let a, s;
              return (void 0 !== o ? o : "webSocket" !== e.transport.type)
                ? (() => {
                    let o = (0, tY.A)([
                      "watchPendingTransactions",
                      e.uid,
                      t,
                      i,
                    ]);
                    return (0, tG.lB)(
                      o,
                      { onTransactions: r, onError: n },
                      (n) => {
                        let r,
                          o = (0, tV.w)(
                            async () => {
                              try {
                                if (!r)
                                  try {
                                    r = await (0, p.T)(
                                      e,
                                      j,
                                      "createPendingTransactionFilter"
                                    )({});
                                    return;
                                  } catch (e) {
                                    throw (o(), e);
                                  }
                                let i = await (0, p.T)(
                                  e,
                                  em,
                                  "getFilterChanges"
                                )({ filter: r });
                                if (0 === i.length) return;
                                if (t) n.onTransactions(i);
                                else for (let e of i) n.onTransactions([e]);
                              } catch (e) {
                                n.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: i }
                          );
                        return async () => {
                          r &&
                            (await (0, p.T)(
                              e,
                              tN,
                              "uninstallFilter"
                            )({ filter: r })),
                            o();
                        };
                      }
                    );
                  })()
                : ((a = !0),
                  (s = () => (a = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!a) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), a || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
      function t3(e, t = {}) {
        let n = (function (e, t = {}) {
          let n;
          try {
            n = e.getClient(t);
          } catch {}
          return n;
        })(e, t);
        return n?.extend(t2);
      }
      var t5 = n(8828),
        t6 = n(86475);
      function t4() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, t6.U)(e);
        return (0, t5.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => t3(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => t3(t, e),
          () => t3(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    56674: (e, t, n) => {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((o, i) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : i(t);
                }, n)),
                o(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && i(t), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    61812: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => h });
      var r = n(4486),
        o = n(97525),
        i = n(13933),
        a = n(35326),
        s = n(32733),
        c = n(30931),
        l = n(71552),
        u = n(93527),
        d = n(72757),
        p = n(25157);
      async function h(e, t) {
        let {
            allowFailure: n = !0,
            batchSize: h,
            blockNumber: f,
            blockTag: w,
            multicallAddress: m,
            stateOverride: g,
          } = t,
          y = t.contracts,
          b =
            h ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          A = m;
        if (!A) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          A = (0, l.M)({
            blockNumber: f,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let v = [[]],
          C = 0,
          x = 0;
        for (let e = 0; e < y.length; e++) {
          let { abi: t, address: r, args: o, functionName: i } = y[e];
          try {
            let e = (0, c.p)({ abi: t, args: o, functionName: i });
            (x += (e.length - 2) / 2),
              b > 0 &&
                x > b &&
                v[C].length > 0 &&
                (C++, (x = (e.length - 2) / 2), (v[C] = [])),
              (v[C] = [...v[C], { allowFailure: !0, callData: e, target: r }]);
          } catch (a) {
            let e = (0, u.j)(a, {
              abi: t,
              address: r,
              args: o,
              docsPath: "/docs/contract/multicall",
              functionName: i,
            });
            if (!n) throw e;
            v[C] = [...v[C], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let k = await Promise.allSettled(
            v.map((t) =>
              (0, d.T)(
                e,
                p.J,
                "readContract"
              )({
                abi: r.v2,
                address: A,
                args: [t],
                blockNumber: f,
                blockTag: w,
                functionName: "aggregate3",
                stateOverride: g,
              })
            )
          ),
          E = [];
        for (let e = 0; e < k.length; e++) {
          let t = k[e];
          if ("rejected" === t.status) {
            if (!n) throw t.reason;
            for (let n = 0; n < v[e].length; n++)
              E.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: i, success: c } = r[t],
              { callData: l } = v[e][t],
              { abi: d, address: p, functionName: h, args: f } = y[E.length];
            try {
              if ("0x" === l) throw new o.O();
              if (!c) throw new a.$S({ data: i });
              let e = (0, s.e)({ abi: d, args: f, data: i, functionName: h });
              E.push(n ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, u.j)(t, {
                abi: d,
                address: p,
                args: f,
                docsPath: "/docs/contract/multicall",
                functionName: h,
              });
              if (!n) throw e;
              E.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (E.length !== y.length) throw new i.C("multicall results mismatch");
        return E;
      }
    },
    61841: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var r = n(61405),
        o = n(12115),
        i = n(86475);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, i.U)(e);
        (0, o.useEffect)(
          () =>
            (0, r.F)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: o,
                      chain: i,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    62546: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, n, r) {
        let o = e * this.size + t;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    63036: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => d });
      var r = n(77608),
        o = n(73168),
        i = n(56674),
        a = n(37407),
        s = n(34561),
        c = n(43159),
        l = n(93420),
        u = n(2535);
      function d(e = {}) {
        let t,
          n,
          f,
          w,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: g } = e;
        function y() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(p[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return y().icon;
          },
          get id() {
            return y().id;
          },
          get name() {
            return y().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (f || ((f = this.onConnect.bind(this)), n.on("connect", f)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: i, isReconnecting: a } = {}) {
            let s = await this.getProvider();
            if (!s) throw new l.N();
            let c = [];
            if (a) c = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await s.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (c = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (c = await this.getAccounts());
              } catch (e) {
                if (e.code === o.vx.code) throw new o.vx(e);
                if (e.code === o.qZ.code) throw e;
              }
            try {
              c?.length ||
                a ||
                (c = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                f && (s.removeListener("connect", f), (f = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  s.on("chainChanged", n)),
                w ||
                  ((w = this.onDisconnect.bind(this)), s.on("disconnect", w));
              let l = await this.getChainId();
              if (i && l !== i) {
                let e = await this.switchChain({ chainId: i }).catch((e) => {
                  if (e.code === o.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                m && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (e.code === o.vx.code) throw new o.vx(e);
              if (e.code === o.qZ.code) throw new o.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              w && (t.removeListener("disconnect", w), (w = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
            try {
              await (0, i.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = y();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? h(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== g && !1 !== g) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof g ? g : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.N();
            let r = u.chains.find((e) => e.id === t);
            if (!r) throw new o.ch(new c.nk());
            let i = new Promise((e) => {
              let n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (u.emitter.off("change", n), e());
              };
              u.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  i,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...d } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(d).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let p = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [p],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new o.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      i,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new o.vx(e);
                }
              if (a.code === o.vx.code) throw new o.vx(a);
              throw new o.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let r = await this.getAccounts();
            if (0 === r.length) return;
            let o = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: o });
            let i = await this.getProvider();
            i &&
              (f && (i.removeListener("connect", f), (f = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), i.on("chainChanged", n)),
              w || ((w = this.onDisconnect.bind(this)), i.on("disconnect", w)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                w && (t.removeListener("disconnect", w), (w = void 0)),
                f || ((f = this.onConnect.bind(this)), t.on("connect", f))));
          },
        }));
      }
      d.type = "injected";
      let p = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : h(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            h(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : h(e, "isPhantom"),
        },
      };
      function h(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
    },
    64935: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(80549),
        o = n(43159);
      async function i(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new o.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...o } = t,
            i = await n.connect(o),
            a = i.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: a,
                chainId: i.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: a, chainId: i.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = n(12115),
        s = n(86475),
        c = n(86161);
      let l = [];
      function u(e) {
        let t = e.connectors;
        return (0, c.b)(l, t) ? l : ((l = t), t);
      }
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, s.U)(e),
          o = { mutationFn: (e) => i(n, e), mutationKey: ["connect"] },
          { mutate: c, mutateAsync: l, ...d } = (0, r.n)({ ...t, ...o });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d.reset]
          ),
          {
            ...d,
            connect: c,
            connectAsync: l,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, s.U)(e);
              return (0, a.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => u(t),
                () => u(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    68068: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => l });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        o = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        i = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        c = s.blue,
        l = function () {
          let {
            accentColor: e = c.accentColor,
            accentColorForeground: t = c.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...((e) => {
              let {
                borderRadius: t = "large",
                fontStack: n = "rounded",
                overlayBlur: r = "none",
              } = e;
              return {
                blurs: { modalOverlay: a[r].modalOverlay },
                fonts: { body: o[n] },
                radii: {
                  actionButton: i[t].actionButton,
                  connectButton: i[t].connectButton,
                  menuButton: i[t].connectButton,
                  modal: i[t].modal,
                  modalMobile: i[t].modalMobile,
                },
              };
            })(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      l.accentColors = s;
    },
    69435: (e, t, n) => {
      let r = n(46342),
        o = n(81010),
        i = n(24967),
        a = n(89158),
        s = n(29762),
        c = r.getBCHDigit(7973);
      function l(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === n && (n = a.BYTE);
          let i =
            (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t)) * 8;
          if (n === a.MIXED) return i;
          let c = i - l(n, e);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((c / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((c / 11) * 2);
            case a.KANJI:
              return Math.floor(c / 13);
            case a.BYTE:
            default:
              return Math.floor(c / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r,
            o = i.from(n, i.M);
          if (Array.isArray(e)) {
            if (e.length > 1) {
              for (let n = 1; n <= 40; n++)
                if (
                  (function (e, t) {
                    let n = 0;
                    return (
                      e.forEach(function (e) {
                        let r = l(e.mode, t);
                        n += r + e.getBitsLength();
                      }),
                      n
                    );
                  })(e, n) <= t.getCapacity(n, o, a.MIXED)
                )
                  return n;
              return;
            }
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let o = 1; o <= 40; o++)
              if (n <= t.getCapacity(o, r, e)) return o;
          })(r.mode, r.getLength(), o);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; r.getBCHDigit(t) - c >= 0; )
            t ^= 7973 << (r.getBCHDigit(t) - c);
          return (e << 12) | t;
        });
    },
    70371: (e, t, n) => {
      let r = n(89158),
        o = n(54415),
        i = n(31937),
        a = n(44006),
        s = n(73987),
        c = n(53896),
        l = n(46342),
        u = n(88072);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function p(e, t, n) {
        let r,
          o = [];
        for (; null !== (r = e.exec(n)); )
          o.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return o;
      }
      function h(e) {
        let t,
          n,
          o = p(c.NUMERIC, r.NUMERIC, e),
          i = p(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          l.isKanjiModeEnabled()
            ? ((t = p(c.BYTE, r.BYTE, e)), (n = p(c.KANJI, r.KANJI, e)))
            : ((t = p(c.BYTE_KANJI, r.BYTE, e)), (n = [])),
          o
            .concat(i, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function f(e, t) {
        switch (t) {
          case r.NUMERIC:
            return o.getBitsLength(e);
          case r.ALPHANUMERIC:
            return i.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function w(e, t) {
        let n,
          c = r.getBestModeForData(e);
        if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(c)
          );
        switch ((n === r.KANJI && !l.isKanjiModeEnabled() && (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(e);
          case r.ALPHANUMERIC:
            return new i(e);
          case r.KANJI:
            return new s(e);
          case r.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(w(t, null))
              : t.data && e.push(w(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let o = (function (e, t) {
              let n = {},
                o = { start: {} },
                i = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  c = [];
                for (let e = 0; e < s.length; e++) {
                  let l = s[e],
                    u = "" + a + e;
                  c.push(u), (n[u] = { node: l, lastCount: 0 }), (o[u] = {});
                  for (let e = 0; e < i.length; e++) {
                    let a = i[e];
                    n[a] && n[a].node.mode === l.mode
                      ? ((o[a][u] =
                          f(n[a].lastCount + l.length, l.mode) -
                          f(n[a].lastCount, l.mode)),
                        (n[a].lastCount += l.length))
                      : (n[a] && (n[a].lastCount = l.length),
                        (o[a][u] =
                          f(l.length, l.mode) +
                          4 +
                          r.getCharCountIndicator(l.mode, t)));
                  }
                }
                i = c;
              }
              for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
              return { map: o, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let o = e[n];
                  switch (o.mode) {
                    case r.NUMERIC:
                      t.push([
                        o,
                        {
                          data: o.data,
                          mode: r.ALPHANUMERIC,
                          length: o.length,
                        },
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: d(o.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: o.data, mode: r.BYTE, length: d(o.data) },
                      ]);
                  }
                }
                return t;
              })(h(e, l.isKanjiModeEnabled())),
              n
            ),
            i = u.find_path(o.map, "start", "end"),
            a = [];
          for (let e = 1; e < i.length - 1; e++) a.push(o.table[i[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                n && n.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(h(e, l.isKanjiModeEnabled()));
        });
    },
    71971: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var r = n(40290),
        o = n(55563),
        i = n(34561),
        a = n(80329),
        s = n(4697);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, i.My)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let i = (0, s.q)(n[e]),
            c = i ? (0, o.ZJ)(i) : (0, a.S)((0, o.Af)(n[e]), "bytes");
          t = (0, a.S)((0, r.xW)([t, c]), "bytes");
        }
        return (0, i.My)(t);
      }
    },
    73987: (e, t, n) => {
      let r = n(89158),
        o = n(46342);
      function i(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (i.getBitsLength = function (e) {
        return 13 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = o.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13);
          }
        }),
        (e.exports = i);
    },
    80766: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i, f: () => o });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = o(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var o = Array.isArray(e) ? n(e) : e,
              i = {};
            for (var a in o) null != o[a] && (i[a] = r(o[a], a));
            return i;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    81010: (e, t, n) => {
      let r = n(24967),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return o[(e - 1) * 4 + 0];
          case r.M:
            return o[(e - 1) * 4 + 1];
          case r.Q:
            return o[(e - 1) * 4 + 2];
          case r.H:
            return o[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return i[(e - 1) * 4 + 0];
            case r.M:
              return i[(e - 1) * 4 + 1];
            case r.Q:
              return i[(e - 1) * 4 + 2];
            case r.H:
              return i[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    82050: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => d });
      var r = n(4058),
        o = n(13933);
      class i extends o.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = n(67550),
        s = n(56674),
        c = n(59350);
      let l = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = n(53473);
      function d(e, t = {}) {
        let {
          batch: n,
          fetchOptions: o,
          key: p = "http",
          methods: h,
          name: f = "HTTP JSON-RPC",
          onFetchRequest: w,
          onFetchResponse: m,
          retryDelay: g,
        } = t;
        return ({ chain: d, retryCount: y, timeout: b }) => {
          let { batchSize: A = 1e3, wait: v = 0 } =
              "object" == typeof n ? n : {},
            C = t.retryCount ?? y,
            x = b ?? t.timeout ?? 1e4,
            k = e || d?.rpcUrls.default.http[0];
          if (!k) throw new i();
          let E = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: o,
                    onRequest: i = t.onRequest,
                    onResponse: a = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = n,
                  d = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: p, method: h, signal: f } = d;
                try {
                  let t,
                    n = await (0, s.w)(
                      async ({ signal: t }) => {
                        let n = {
                            ...d,
                            body: Array.isArray(o)
                              ? (0, c.A)(
                                  o.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? l.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: o.id ?? l.take(),
                                  ...o,
                                }),
                            headers: {
                              "Content-Type": "application/json",
                              ...p,
                            },
                            method: h || "POST",
                            signal: f || (u > 0 ? t : null),
                          },
                          r = new Request(e, n),
                          a = (await i?.(r, n)) ?? { ...n, url: e };
                        return await fetch(a.url ?? e, a);
                      },
                      {
                        errorInstance: new r.MU({ body: o, url: e }),
                        timeout: u,
                        signal: !0,
                      }
                    );
                  if (
                    (a && (await a(n)),
                    n.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    t = await n.json();
                  else {
                    t = await n.text();
                    try {
                      t = JSON.parse(t || "{}");
                    } catch (e) {
                      if (n.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!n.ok)
                    throw new r.Ci({
                      body: o,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: o, cause: t, url: e });
                }
              },
            };
          })(k, { fetchOptions: o, onRequest: w, onResponse: m, timeout: x });
          return (0, u.o)(
            {
              key: p,
              methods: h,
              name: f,
              async request({ method: e, params: t }) {
                let o = { method: e, params: t },
                  { schedule: i } = (0, a.u)({
                    id: k,
                    wait: v,
                    shouldSplitBatch: (e) => e.length > A,
                    fn: (e) => E.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (n ? i(e) : [await E.request({ body: e })]),
                  [{ error: c, result: l }] = await s(o);
                if (c) throw new r.J8({ body: o, error: c, url: k });
                return l;
              },
              retryCount: C,
              retryDelay: g,
              timeout: x,
              type: "http",
            },
            { fetchOptions: o, url: k }
          );
        };
      }
    },
    82323: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = n(80329),
        o = n(40290),
        i = n(16871),
        a = n(34561);
      function s(e, t) {
        return (0, r.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              n = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, i.E)(t)}`);
            return (0, o.xW)([n, t]);
          })(e),
          t
        );
      }
    },
    84045: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => u });
      var r = n(80549);
      async function o(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            o = t.get(r);
          n = o?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var i = n(86475),
        a = n(86161);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.b)(s, t)
          ? s
          : ((s = t), t);
      }
      var l = n(12115);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, i.U)(e),
          s = { mutationFn: (e) => o(n, e), mutationKey: ["disconnect"] },
          { mutate: u, mutateAsync: d, ...p } = (0, r.n)({ ...t, ...s });
        return {
          ...p,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, i.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.b });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: d,
        };
      }
    },
    85289: (e, t, n) => {
      let r = n(52686);
      (t.render = function (e, t, n) {
        var o;
        let i = n,
          a = t;
        void 0 !== i || (t && t.getContext) || ((i = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (i = r.getOptions(i));
        let s = r.getImageWidth(e.modules.size, i),
          c = a.getContext("2d"),
          l = c.createImageData(s, s);
        return (
          r.qrToImageData(l.data, e, i),
          (o = a),
          c.clearRect(0, 0, o.width, o.height),
          o.style || (o.style = {}),
          (o.height = s),
          (o.width = s),
          (o.style.height = s + "px"),
          (o.style.width = s + "px"),
          c.putImageData(l, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let o = r;
          void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
            o || (o = {});
          let i = t.render(e, n, o),
            a = o.type || "image/png",
            s = o.rendererOpts || {};
          return i.toDataURL(a, s.quality);
        });
    },
    85737: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(2535),
        o = n(93420),
        i = n(77608),
        a = n(56674);
      function s(e = {}) {
        let t,
          c,
          { shimDisconnect: l = !1 } = e;
        return (0, r.U)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            let t = await this.getAccounts(),
              n = await this.getChainId();
            return (
              c || ((c = this.onDisconnect.bind(this)), e.on("disconnect", c)),
              l && (await r.storage?.removeItem("safe.disconnected")),
              { accounts: t, chainId: n }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return (await e.request({ method: "eth_accounts" })).map(i.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(7607),
                    n.e(1762),
                  ]).then(n.bind(n, 21762)),
                  o = new r(e),
                  i = await (0, a.w)(() => o.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!i) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([n.e(7607), n.e(6544)]).then(
                    n.t.bind(n, 26544, 19)
                  );
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(i, o);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (l && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    88072: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var o,
            i,
            a,
            s,
            c,
            l,
            u,
            d = {},
            p = {};
          p[n] = 0;
          var h = t.PriorityQueue.make();
          for (h.push(n, 0); !h.empty(); )
            for (a in ((i = (o = h.pop()).value),
            (s = o.cost),
            (c = e[i] || {})))
              c.hasOwnProperty(a) &&
                ((l = s + c[a]),
                (u = p[a]),
                (void 0 === p[a] || u > l) &&
                  ((p[a] = l), h.push(a, l), (d[a] = i)));
          if (void 0 !== r && void 0 === p[r])
            throw Error("Could not find a path from " + n + " to " + r + ".");
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
          return n.reverse(), n;
        },
        find_path: function (e, n, r) {
          var o = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(o, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              o = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (o[n] = r[n]);
            return (o.queue = []), (o.sorter = e.sorter || r.default_sorter), o;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    89158: (e, t, n) => {
      let r = n(29762),
        o = n(53896);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return o.testNumeric(e)
            ? t.NUMERIC
            : o.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : o.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw Error("Unknown mode: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    89474: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => p });
      var r = n(80549),
        o = n(97152),
        i = n(64664),
        a = n(34561);
      async function s(e, { account: t = e.account, message: n }) {
        if (!t) throw new i.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, o.J)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, a.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, a.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [s, r.address] },
          { retryCount: 0 }
        );
      }
      var c = n(21681),
        l = n(29899);
      async function u(e, t) {
        let n,
          { account: r, connector: o, ...i } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, l.r)(e, { account: r, connector: o })),
          (0, c.T)(n, s, "signMessage")({ ...i, ...(r ? { account: r } : {}) })
        );
      }
      var d = n(86475);
      function p() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, d.U)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["signMessage"] }),
          { mutate: i, mutateAsync: a, ...s } = (0, r.n)({ ...n, ...o });
        return { ...s, signMessage: i, signMessageAsync: a };
      }
    },
    91791: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    92987: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => a });
      var r = n(44964),
        o = n(13933),
        i = n(35326);
      function a(e, t) {
        if (!(e instanceof o.C)) return !1;
        let n = e.walk((e) => e instanceof i.M);
        return (
          n instanceof i.M &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === r.fD[50]))
        );
      }
    },
    93195: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => p });
      var r = n(80549),
        o = n(43159),
        i = n(93420);
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new i.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let s = e.chains.find((e) => e.id === r);
        if (!s) throw new o.nk();
        return e.setState((e) => ({ ...e, chainId: r })), s;
      }
      var s = n(86161);
      let c = [];
      function l(e) {
        let t = e.chains;
        return (0, s.b)(c, t) ? c : ((c = t), t);
      }
      var u = n(12115),
        d = n(86475);
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.U)(e),
          o = { mutationFn: (e) => a(n, e), mutationKey: ["switchChain"] },
          { mutate: i, mutateAsync: s, ...c } = (0, r.n)({ ...t, ...o });
        return {
          ...c,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.U)(e);
            return (0, u.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => l(t),
              () => l(t)
            );
          })({ config: n }),
          switchChain: i,
          switchChainAsync: s,
        };
      }
    },
    93393: () => {},
    93420: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => o, V: () => i });
      var r = n(28698);
      class o extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class i extends r.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    93527: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => c });
      var r = n(97525),
        o = n(13933),
        i = n(35326),
        a = n(4058),
        s = n(73168);
      function c(
        e,
        { abi: t, address: n, args: c, docsPath: l, functionName: u, sender: d }
      ) {
        let p =
            e instanceof i.$S
              ? e
              : e instanceof o.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: h, data: f, details: w, message: m, shortMessage: g } = p,
          y =
            e instanceof r.O
              ? new i.rR({ functionName: u })
              : [3, s.bq.code].includes(h) && (f || w || m || g)
              ? new i.M({
                  abi: t,
                  data: "object" == typeof f ? f.data : f,
                  functionName: u,
                  message: p instanceof a.J8 ? w : g ?? m,
                })
              : e;
        return new i.bG(y, {
          abi: t,
          args: c,
          contractAddress: n,
          docsPath: l,
          functionName: u,
          sender: d,
        });
      }
    },
    93711: (e, t, n) => {
      let r = n(46342),
        o = n(24967),
        i = n(35425),
        a = n(62546),
        s = n(669),
        c = n(35630),
        l = n(19542),
        u = n(81010),
        d = n(95230),
        p = n(69435),
        h = n(41953),
        f = n(89158),
        w = n(70371);
      function m(e, t, n) {
        let r,
          o,
          i = e.size,
          a = h.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (o = ((a >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, o, !0)
              : r < 8
              ? e.set(r + 1, 8, o, !0)
              : e.set(i - 15 + r, 8, o, !0),
            r < 8
              ? e.set(8, i - r - 1, o, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, o, !0)
              : e.set(8, 15 - r - 1, o, !0);
        e.set(i - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, h;
        if (void 0 === e || "" === e) throw Error("No input text");
        let g = o.M;
        return (
          void 0 !== t &&
            ((g = o.from(t.errorCorrectionLevel, o.M)),
            (n = p.from(t.version)),
            (h = l.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, o) {
            let h;
            if (Array.isArray(e)) h = w.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = w.rawSplit(e);
                r = p.getBestVersionForData(t, n);
              }
              h = w.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let g = p.getBestVersionForData(h, n);
            if (!g)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < g)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    g +
                    ".\n"
                );
            } else t = g;
            let y = (function (e, t, n) {
                let o = new i();
                n.forEach(function (t) {
                  o.put(t.mode.bit, 4),
                    o.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
                    t.write(o);
                });
                let a =
                  (r.getSymbolTotalCodewords(e) -
                    u.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  o.getLengthInBits() + 4 <= a && o.put(0, 4);
                  o.getLengthInBits() % 8 != 0;

                )
                  o.putBit(0);
                let s = (a - o.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) o.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let o,
                    i,
                    a = r.getSymbolTotalCodewords(t),
                    s = a - u.getTotalCodewordsCount(t, n),
                    c = u.getBlocksCount(t, n),
                    l = a % c,
                    p = c - l,
                    h = Math.floor(a / c),
                    f = Math.floor(s / c),
                    w = f + 1,
                    m = h - f,
                    g = new d(m),
                    y = 0,
                    b = Array(c),
                    A = Array(c),
                    v = 0,
                    C = new Uint8Array(e.buffer);
                  for (let e = 0; e < c; e++) {
                    let t = e < p ? f : w;
                    (b[e] = C.slice(y, y + t)),
                      (A[e] = g.encode(b[e])),
                      (y += t),
                      (v = Math.max(v, t));
                  }
                  let x = new Uint8Array(a),
                    k = 0;
                  for (o = 0; o < v; o++)
                    for (i = 0; i < c; i++)
                      o < b[i].length && (x[k++] = b[i][o]);
                  for (o = 0; o < m; o++)
                    for (i = 0; i < c; i++) x[k++] = A[i][o];
                  return x;
                })(o, e, t);
              })(t, n, h),
              b = new a(r.getSymbolSize(t));
            !(function (e, t) {
              let n = e.size,
                r = c.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                let o = r[t][0],
                  i = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(o + t <= -1) && !(n <= o + t))
                    for (let r = -1; r <= 7; r++)
                      i + r <= -1 ||
                        n <= i + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(o + t, i + r, !0, !0)
                          : e.set(o + t, i + r, !1, !0));
              }
            })(b, t);
            let A = b.size;
            for (let e = 8; e < A - 8; e++) {
              let t = e % 2 == 0;
              b.set(e, 6, t, !0), b.set(6, e, t, !0);
            }
            return (
              !(function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    o = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t ||
                      2 === t ||
                      -2 === n ||
                      2 === n ||
                      (0 === t && 0 === n)
                        ? e.set(r + t, o + n, !0, !0)
                        : e.set(r + t, o + n, !1, !0);
                }
              })(b, t),
              m(b, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n,
                    r,
                    o,
                    i = e.size,
                    a = p.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (n = Math.floor(t / 3)),
                      (r = (t % 3) + i - 8 - 3),
                      (o = ((a >> t) & 1) == 1),
                      e.set(n, r, o, !0),
                      e.set(r, n, o, !0);
                })(b, t),
              !(function (e, t) {
                let n = e.size,
                  r = -1,
                  o = n - 1,
                  i = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(o, s - n)) {
                        let r = !1;
                        a < t.length && (r = ((t[a] >>> i) & 1) == 1),
                          e.set(o, s - n, r),
                          -1 == --i && (a++, (i = 7));
                      }
                    if ((o += r) < 0 || n <= o) {
                      (o -= r), (r = -r);
                      break;
                    }
                  }
              })(b, y),
              isNaN(o) && (o = l.getBestMask(b, m.bind(null, b, n))),
              l.applyMask(o, b),
              m(b, n, o),
              {
                modules: b,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: o,
                segments: h,
              }
            );
          })(e, n, g, h)
        );
      };
    },
    94154: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      };
    },
    95230: (e, t, n) => {
      let r = n(50915);
      function o(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (o.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (o.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            o = this.degree - n.length;
          if (o > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(n, o), e;
          }
          return n;
        }),
        (e.exports = o);
    },
  },
]);
