(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8563],
  {
    71862: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 77087));
    },
    77087: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => Q });
      var s = t(95155),
        n = t(12115),
        i = t(20063),
        l = t(3063),
        r = t(80549),
        c = t(97152),
        o = t(64664),
        d = t(13933),
        m = t(77457),
        h = t(29454),
        u = t(88737),
        p = t(50879),
        b = t(61829),
        x = t(44332),
        g = t(74750),
        q = t(72757),
        j = t(20390),
        y = t(5691),
        f = t(35471),
        w = t(21920),
        N = t(72707);
      let v = new j.A(128);
      async function k(e, a) {
        let {
          account: t = e.account,
          chain: s = e.chain,
          accessList: n,
          authorizationList: i,
          blobs: l,
          data: r,
          gas: j,
          gasPrice: k,
          maxFeePerBlobGas: C,
          maxFeePerGas: S,
          maxPriorityFeePerGas: T,
          nonce: _,
          value: F,
          ...E
        } = a;
        if (void 0 === t)
          throw new o.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let B = t ? (0, c.J)(t) : null;
        try {
          (0, y.c)(a);
          let t = await (async () =>
            a.to
              ? a.to
              : i && i.length > 0
              ? await (0, m.g)({ authorization: i[0] }).catch(() => {
                  throw new d.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (B?.type === "json-rpc" || null === B) {
            let a;
            null !== s &&
              ((a = await (0, q.T)(e, f.T, "getChainId")({})),
              (function ({ chain: e, currentChainId: a }) {
                if (!e) throw new h.jF();
                if (a !== e.id) throw new h.EH({ chain: e, currentChainId: a });
              })({ currentChainId: a, chain: s }));
            let c = e.chain?.formatters?.transactionRequest?.format,
              o = (c || g.Bv)({
                ...(0, x.o)(E, { format: c }),
                accessList: n,
                authorizationList: i,
                blobs: l,
                chainId: a,
                data: r,
                from: B?.address,
                gas: j,
                gasPrice: k,
                maxFeePerBlobGas: C,
                maxFeePerGas: S,
                maxPriorityFeePerGas: T,
                nonce: _,
                to: t,
                value: F,
              }),
              d = v.get(e.uid);
            try {
              return await e.request(
                {
                  method: d ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [o],
                },
                { retryCount: 0 }
              );
            } catch (a) {
              if (!1 === d) throw a;
              if (
                "InvalidInputRpcError" === a.name ||
                "InvalidParamsRpcError" === a.name ||
                "MethodNotFoundRpcError" === a.name ||
                "MethodNotSupportedRpcError" === a.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [o] },
                    { retryCount: 0 }
                  )
                  .then((a) => (v.set(e.uid, !0), a))
                  .catch((t) => {
                    if (
                      "MethodNotFoundRpcError" === t.name ||
                      "MethodNotSupportedRpcError" === t.name
                    )
                      throw (v.set(e.uid, !1), a);
                    throw t;
                  });
              throw a;
            }
          }
          if (B?.type === "local") {
            let a = await (0, q.T)(
                e,
                w.ft,
                "prepareTransactionRequest"
              )({
                account: B,
                accessList: n,
                authorizationList: i,
                blobs: l,
                chain: s,
                data: r,
                gas: j,
                gasPrice: k,
                maxFeePerBlobGas: C,
                maxFeePerGas: S,
                maxPriorityFeePerGas: T,
                nonce: _,
                nonceManager: B.nonceManager,
                parameters: [...w.MM, "sidecars"],
                value: F,
                ...E,
                to: t,
              }),
              c = s?.serializers?.transaction,
              o = await B.signTransaction(a, { serializer: c });
            return await (0, q.T)(
              e,
              N.L,
              "sendRawTransaction"
            )({ serializedTransaction: o });
          }
          if (B?.type === "smart")
            throw new o.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new o.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: B?.type,
          });
        } catch (e) {
          if (e instanceof o.Z) throw e;
          throw (function (e, { docsPath: a, ...t }) {
            let s = (() => {
              let a = (0, b.l)(e, t);
              return a instanceof u.RM ? e : a;
            })();
            return new p.$s(s, { docsPath: a, ...t });
          })(e, { ...a, account: B, chain: a.chain || void 0 });
        }
      }
      var C = t(21681),
        S = t(29899);
      async function T(e, a) {
        let t,
          { account: s, chainId: n, connector: i, ...l } = a;
        t =
          "object" == typeof s && s?.type === "local"
            ? e.getClient({ chainId: n })
            : await (0, S.r)(e, {
                account: s ?? void 0,
                chainId: n,
                connector: i,
              });
        let r = (0, C.T)(t, k, "sendTransaction");
        return await r({
          ...l,
          ...(s ? { account: s } : {}),
          chain: n ? { id: n } : null,
          gas: l.gas ?? void 0,
        });
      }
      var _ = t(86475);
      function F() {
        var e;
        let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = a,
          s =
            ((e = (0, _.U)(a)),
            { mutationFn: (a) => T(e, a), mutationKey: ["sendTransaction"] }),
          { mutate: n, mutateAsync: i, ...l } = (0, r.n)({ ...t, ...s });
        return { ...l, sendTransaction: n, sendTransactionAsync: i };
      }
      var E = t(11914),
        B = t(52497),
        I = t(83759),
        R = t(39012);
      async function A(e, a) {
        let { chainId: t, timeout: s = 0, ...n } = a,
          i = e.getClient({ chainId: t }),
          l = (0, C.T)(i, B.n, "waitForTransactionReceipt"),
          r = await l({ ...n, timeout: s });
        if ("reverted" === r.status) {
          let e = (0, C.T)(i, I.x, "getTransaction"),
            a = await e({ hash: r.transactionHash }),
            t = (0, C.T)(i, R.T, "call"),
            s = await t({
              ...a,
              data: a.input,
              gasPrice: "eip1559" !== a.type ? a.gasPrice : void 0,
              maxFeePerGas: "eip1559" === a.type ? a.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === a.type ? a.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            s?.data ? (0, E.IQ)(`0x${s.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...r, chainId: i.chain.id };
      }
      var P = t(47575),
        W = t(75575),
        D = t(99941),
        M = t(28245),
        O = t(62023);
      class H extends d.C {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      function L(e, a = "wei") {
        return (function (e, a) {
          if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new H({ value: e });
          let [t, s = "0"] = e.split("."),
            n = t.startsWith("-");
          if ((n && (t = t.slice(1)), (s = s.replace(/(0+)$/, "")), 0 === a))
            1 === Math.round(Number(`.${s}`)) && (t = `${BigInt(t) + 1n}`),
              (s = "");
          else if (s.length > a) {
            let [e, n, i] = [s.slice(0, a - 1), s.slice(a - 1, a), s.slice(a)],
              l = Math.round(Number(`${n}.${i}`));
            (s =
              l > 9
                ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
                : `${e}${l}`).length > a &&
              ((s = s.slice(1)), (t = `${BigInt(t) + 1n}`)),
              (s = s.slice(0, a));
          } else s = s.padEnd(a, "0");
          return BigInt(`${n ? "-" : ""}${t}${s}`);
        })(e, O.eL[a]);
      }
      let z = [
        {
          symbol: "CASHCAT",
          name: "Cash Cat",
          address: "0x020bfC650A365f8BB26819deAAbF3E21291018b4",
          image:
            "https://cdn.dexscreener.com/cms/images/L-6TS9f0VF6FMpFp?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "JUGGERNAUT",
          name: "The Juggernaut",
          address: "0xD7321801CAae694090694Ff55A9323139F043B88",
          image:
            "https://cdn.dexscreener.com/cms/images/usHPD9u49cr88jb0?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "CashDog",
          name: "CashDog",
          address: "0x16d6425E0a975A2536C78D982F9f6dD65544Bd19",
          image:
            "https://cdn.dexscreener.com/cms/images/3Sx7xUyXqJQlc95J?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "VLAD",
          name: "The Robinhood",
          address: "0xfDBb27E971E72E38C41b1C772FB409C94dd92789",
          image:
            "https://cdn.dexscreener.com/cms/images/8Dn-wifQ7w-oZi21?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "STONKS",
          name: "Robinhood Meme",
          address: "0x1ED6808f46a7D136B8Eec104cc67bD3Ce6D4354e",
          image:
            "https://cdn.dexscreener.com/cms/images/xb5fJm0FHYQY0K7g?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "ARROW",
          name: "Arrow",
          address: "0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03",
          image:
            "https://cdn.dexscreener.com/cms/images/qVNDzbSwL8Gxq58J?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "HOODRAT",
          name: "Hoodrat",
          address: "0x8e62F281f282686fCa6dCB39288069a93fC23F1c",
          image:
            "https://cdn.dexscreener.com/cms/images/DhzR371m7aajusNq?width=800&height=800&quality=95&format=auto",
        },
        {
          symbol: "WALLET",
          name: "Robinhood Wallet",
          address: "0x0339f5459FC690aC85F1782e15782A151b4A9E1b",
          image:
            "https://cdn.dexscreener.com/cms/images/I2L-IaR50qberU4d?width=800&height=800&quality=95&format=auto",
        },
      ];
      var $ = t(36868),
        U = t(29438),
        G = t(17268),
        J = t(85047);
      let Z = (e) => parseFloat((0, M.c)(BigInt(e || "0"))).toFixed(4),
        K = (e) =>
          "https://ui-avatars.com/api/?name=".concat(e, "&background=random");
      function Q() {
        return (0, s.jsx)(n.Suspense, {
          fallback: (0, s.jsx)("main", {
            className: "q-wrap q-center",
            children: (0, s.jsx)("div", { className: "q-spinner" }),
          }),
          children: (0, s.jsx)(Y, {}),
        });
      }
      function Y() {
        let e = (0, i.useSearchParams)(),
          a = (0, i.useRouter)(),
          { address: t, isConnected: n } = (0, l.F)(),
          r = "create" === e.get("tab") ? "create" : "trade",
          c = (e) => a.replace("/app?tab=".concat(e), { scroll: !1 }),
          o = async (e) => {
            if (!n) return void alert("Connect a wallet first");
            try {
              let a = await (0, $.G5)({
                name: e.name,
                tokens: e.tokens.map((e) => ({
                  symbol: e.symbol,
                  name: e.name,
                  mint: e.mint,
                  image: "",
                  weight: e.weight,
                })),
                creator: t,
              });
              window.location.href = "/basket/".concat(a);
            } catch (e) {
              alert(e.message);
            }
          };
        return (0, s.jsxs)("main", {
          className: "q-wrap",
          children: [
            (0, s.jsx)("section", {
              className: "q-hero",
              children: (0, s.jsxs)("div", {
                className: "q-hero__row",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className: "q-kicker",
                        children: "Markets",
                      }),
                      (0, s.jsxs)("h1", {
                        className: "q-title",
                        children: [
                          (0, s.jsx)("b", { children: "Trade" }),
                          " the basket,",
                          (0, s.jsx)("br", {}),
                          "not the coin",
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "q-lede",
                        children:
                          "Bundle assets into one on-chain basket. Buy it, or take it long or short with up to 5x leverage.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "q-tabs",
                    role: "tablist",
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": "trade" === r,
                        className: "q-tab".concat(
                          "trade" === r ? " is-active" : ""
                        ),
                        onClick: () => c("trade"),
                        children: "Trade perps",
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": "create" === r,
                        className: "q-tab".concat(
                          "create" === r ? " is-active" : ""
                        ),
                        onClick: () => c("create"),
                        children: "Create a basket",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n && t && (0, s.jsx)(V, { walletAddress: t }),
            (0, s.jsxs)("div", {
              className: "q-section",
              children: [
                "trade" === r && (0, s.jsx)(X, { walletAddress: t }),
                "create" === r &&
                  (0, s.jsxs)("div", {
                    className: "q-grid q-grid--main",
                    children: [
                      (0, s.jsxs)("section", {
                        className: "q-panel",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "q-h2",
                            children: "Build a custom basket",
                          }),
                          (0, s.jsx)("p", {
                            className: "q-box__sub",
                            children:
                              "Pick 3 to 5 assets from any chain and set their weights.",
                          }),
                          (0, s.jsx)("div", {
                            style: { marginTop: 20 },
                            children: (0, s.jsx)(ee, {
                              walletAddress: t,
                              connected: n,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("aside", {
                        className: "q-panel",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "q-h3",
                            children: "Ready made",
                          }),
                          (0, s.jsx)("p", {
                            className: "q-box__sub",
                            children: "One click to deploy.",
                          }),
                          (0, s.jsx)("div", {
                            className: "q-stack",
                            style: { marginTop: 14 },
                            children: J.zZ
                              .slice(0, 6)
                              .map((e) =>
                                (0, s.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    className: "q-box q-box--click",
                                    onClick: () => o(e),
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className: "q-row q-row--between",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: "q-box__title",
                                            children: e.name,
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "q-chip",
                                            children: "Create",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className: "q-chips",
                                        style: { marginTop: 8 },
                                        children: e.tokens.map((e) =>
                                          (0, s.jsxs)(
                                            "span",
                                            {
                                              className: "q-small",
                                              children: [
                                                e.symbol,
                                                " ",
                                                e.weight,
                                                "%",
                                              ],
                                            },
                                            e.mint
                                          )
                                        ),
                                      }),
                                    ],
                                  },
                                  e.name
                                )
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        let { walletAddress: a } = e,
          { sendTransactionAsync: t } = F(),
          [i, l] = (0, n.useState)("0"),
          [r, c] = (0, n.useState)(""),
          [o, d] = (0, n.useState)(""),
          [m, h] = (0, n.useState)(""),
          [u, p] = (0, n.useState)(!1),
          [b, x] = (0, n.useState)(!1),
          [g, q] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          fetch("/api/futures/treasury")
            .then((e) => e.json())
            .then((e) => c(e.address || ""))
            .catch(() => {});
        }, []);
        let j = (0, n.useCallback)(async () => {
          if (!a) return;
          let e = await fetch("/api/futures/balance?userWallet=".concat(a));
          l((await e.json()).balance || "0");
        }, [a]);
        (0, n.useEffect)(() => {
          j();
        }, [j]);
        let y = async () => {
            if (a && o && r) {
              p(!0);
              try {
                let e = await t({ to: r, value: L(o) });
                await new Promise((e) => setTimeout(e, 4e3));
                let s = L(o).toString(),
                  n = await fetch("/api/futures/deposit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userWallet: a,
                      txHash: e,
                      amount: s,
                    }),
                  }),
                  i = await n.json();
                i.success
                  ? (l(i.balance), d(""))
                  : alert(i.error || "Deposit verification failed");
              } catch (a) {
                var e;
                (null == (e = a.message) ? void 0 : e.includes("rejected")) ||
                  alert(a.message);
              } finally {
                p(!1);
              }
            }
          },
          f = async () => {
            if (a && m) {
              x(!0);
              try {
                let e = L(m).toString(),
                  t = await fetch("/api/futures/withdraw", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userWallet: a, amount: e }),
                  }),
                  s = await t.json();
                s.success
                  ? (l(s.balance), h(""))
                  : alert(s.error || "Withdraw failed");
              } catch (e) {
                alert(e.message);
              } finally {
                x(!1);
              }
            }
          };
        return (0, s.jsxs)("section", {
          className: "q-panel",
          style: { padding: "16px 20px" },
          children: [
            (0, s.jsxs)("div", {
              className: "q-row q-row--between q-row--wrap",
              children: [
                (0, s.jsxs)("div", {
                  className: "q-stat",
                  children: [
                    (0, s.jsxs)("span", {
                      className: "q-stat__num",
                      style: { fontSize: 26 },
                      children: [
                        Z(i),
                        " ",
                        (0, s.jsx)("span", {
                          className: "q-muted",
                          children: "ETH",
                        }),
                      ],
                    }),
                    (0, s.jsx)("span", {
                      className: "q-stat__label",
                      children: "Your balance",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "q-row",
                  children: [
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "q-btn q-btn--ink q-btn--sm",
                      onClick: () => q(!g),
                      children: g ? "Close" : "Deposit or withdraw",
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "q-iconbtn",
                      onClick: j,
                      "aria-label": "Refresh balance",
                      children: (0, s.jsx)(G.fN, {}),
                    }),
                  ],
                }),
              ],
            }),
            g &&
              (0, s.jsxs)("div", {
                className: "q-grid q-grid--2",
                style: {
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: "1px solid var(--line)",
                },
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("label", {
                        className: "q-label",
                        children: "Deposit ETH",
                      }),
                      (0, s.jsxs)("div", {
                        className: "q-row",
                        children: [
                          (0, s.jsx)("input", {
                            className: "q-input",
                            type: "number",
                            step: "0.001",
                            min: "0",
                            placeholder: "0.00",
                            value: o,
                            onChange: (e) => d(e.target.value),
                            disabled: u,
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className: "q-btn q-btn--ink",
                            onClick: y,
                            disabled: u || !o,
                            children: u ? "..." : "Deposit",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("label", {
                        className: "q-label",
                        children: "Withdraw ETH",
                      }),
                      (0, s.jsxs)("div", {
                        className: "q-row",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "q-inputwrap",
                            children: [
                              (0, s.jsx)("input", {
                                className: "q-input",
                                type: "number",
                                step: "0.001",
                                min: "0",
                                placeholder: "0.00",
                                value: m,
                                onChange: (e) => h(e.target.value),
                                disabled: b,
                              }),
                              (0, s.jsx)("button", {
                                type: "button",
                                className: "q-inputwrap__max",
                                onClick: () => h(Z(i)),
                                children: "MAX",
                              }),
                            ],
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className: "q-btn q-btn--ink",
                            onClick: f,
                            disabled: b || !m,
                            children: b ? "..." : "Withdraw",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function X(e) {
        let { walletAddress: a } = e,
          { sendTransaction: t, data: i } = F(),
          { isSuccess: l } = (function () {
            var e, a;
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { hash: s, query: n = {} } = t,
              i = (0, _.U)(t),
              l = (0, D.i)({ config: i }),
              r = (function (e, a = {}) {
                return {
                  async queryFn({ queryKey: t }) {
                    let { hash: s, ...n } = t[1];
                    if (!s) throw Error("hash is required");
                    return A(e, { ...n, onReplaced: a.onReplaced, hash: s });
                  },
                  queryKey: (function (e = {}) {
                    let { onReplaced: a, ...t } = e;
                    return ["waitForTransactionReceipt", (0, P.xO)(t)];
                  })(a),
                };
              })(i, { ...t, chainId: null != (e = t.chainId) ? e : l }),
              c = !!(s && (null == (a = n.enabled) || a));
            return (0, W.IT)({ ...n, ...r, enabled: c });
          })({ hash: i }),
          [r, c] = (0, n.useState)(null),
          [o, d] = (0, n.useState)([]),
          [m, h] = (0, n.useState)(null),
          [u, p] = (0, n.useState)("0"),
          [b, x] = (0, n.useState)(""),
          [g, q] = (0, n.useState)({ open: [], closed: [] }),
          [j, y] = (0, n.useState)("long"),
          [f, w] = (0, n.useState)(2),
          [N, v] = (0, n.useState)(""),
          [k, C] = (0, n.useState)(""),
          [S, T] = (0, n.useState)(""),
          [E, B] = (0, n.useState)(!1),
          [I, R] = (0, n.useState)(!1),
          [M, O] = (0, n.useState)(null),
          [H, z] = (0, n.useState)(!1),
          [G, K] = (0, n.useState)(null),
          [Q, Y] = (0, n.useState)(!1),
          V = r ? [r] : [];
        (0, n.useEffect)(() => {
          fetch("/api/futures/treasury")
            .then((e) => e.json())
            .then((e) => x(e.address || ""))
            .catch(() => {});
        }, []);
        let X = (0, n.useCallback)(async () => {
          if (!a) return;
          let e = await fetch("/api/futures/balance?userWallet=".concat(a));
          p((await e.json()).balance || "0");
        }, [a]);
        (0, n.useEffect)(() => {
          X();
        }, [X]);
        let ee = (0, n.useCallback)(async () => {
          if (!a) return;
          let e = await fetch("/api/futures/positions?userWallet=".concat(a)),
            t = await e.json();
          q({ open: t.open || [], closed: t.closed || [] });
        }, [a]);
        (0, n.useEffect)(() => {
          ee();
        }, [ee]),
          (0, n.useEffect)(() => {
            if (!r) return;
            let e = !1;
            async function a() {
              try {
                let t = await fetch(
                    "/api/tokens?mints=".concat(
                      r.tokens.map((e) => e.mint).join(",")
                    )
                  ),
                  s = await t.json();
                if (e) return;
                let n = {};
                if (s.pairs)
                  for (let e of s.pairs) {
                    var a;
                    let t = null == (a = e.baseToken) ? void 0 : a.address;
                    t && !n[t] && (n[t] = parseFloat(e.priceUsd) || 0);
                  }
                let i = 0;
                for (let e of r.tokens)
                  i += (n[e.mint] || 0) * (e.weight / 100);
                h(i);
              } catch (e) {}
            }
            a();
            let t = setInterval(a, 1e4);
            return () => {
              (e = !0), clearInterval(t);
            };
          }, [r]),
          (0, n.useEffect)(() => {
            l &&
              i &&
              G &&
              (async () => {
                try {
                  let e = await fetch("/api/futures/deposit", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        userWallet: a,
                        txHash: i,
                        amount: G,
                      }),
                    }),
                    t = await e.json();
                  t.success
                    ? (p(t.balance), C(""))
                    : alert(t.error || "Deposit failed");
                } catch (e) {
                  alert(e.message);
                } finally {
                  B(!1), K(null);
                }
              })();
          }, [l, i, G, a]);
        let en = async () => {
            if (a && S) {
              z(!0);
              try {
                let e = await fetch("/api/futures/withdraw", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userWallet: a,
                      amount: L(S).toString(),
                    }),
                  }),
                  t = await e.json();
                t.success
                  ? (p(t.balance), T(""))
                  : alert(t.error || "Withdraw failed");
              } catch (e) {
                alert(e.message);
              } finally {
                z(!1);
              }
            }
          },
          ei = async () => {
            if (a && r && N) {
              R(!0);
              try {
                let e = await fetch("/api/futures/open", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userWallet: a,
                      nestId: r.id,
                      side: j,
                      leverage: f,
                      collateralWei: L(N).toString(),
                    }),
                  }),
                  t = await e.json();
                t.success
                  ? (p(t.balance), v(""), ee())
                  : alert(t.error || "Failed to open position");
              } catch (e) {
                alert(e.message);
              } finally {
                R(!1);
              }
            }
          },
          el = async (e) => {
            O(e);
            try {
              let t = await fetch("/api/futures/close", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userWallet: a, positionId: e }),
                }),
                s = await t.json();
              s.success
                ? (p(s.balance), ee())
                : alert(s.error || "Failed to close position");
            } catch (e) {
              alert(e.message);
            } finally {
              O(null);
            }
          },
          er = async (e) => {
            if (!a) return void alert("Connect a wallet first");
            Y(!0);
            try {
              let t = await (0, $.G5)({
                name: e.name,
                tokens: e.tokens.map((e) => ({
                  symbol: e.symbol,
                  name: e.name,
                  mint: e.mint,
                  image: "",
                  weight: e.weight,
                })),
                creator: a,
              });
              c({ id: t, name: e.name, tokens: e.tokens }), h(null);
            } catch (e) {
              alert(e.message || "Failed to select basket");
            } finally {
              Y(!1);
            }
          },
          ec = parseFloat(N) || 0,
          eo = m
            ? "long" === j
              ? m * (1 - 0.9 / f)
              : m * (1 + 0.9 / f)
            : null;
        return r
          ? (0, s.jsxs)("div", {
              className: "q-grid q-grid--main",
              children: [
                (0, s.jsxs)("div", {
                  className: "q-stack",
                  children: [
                    (0, s.jsxs)("section", {
                      className: "q-panel",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "q-row q-row--between",
                          children: [
                            (0, s.jsx)("h2", {
                              className: "q-h2",
                              children: r.name,
                            }),
                            (0, s.jsxs)("div", {
                              className: "q-row",
                              children: [
                                null !== m &&
                                  (0, s.jsx)("span", {
                                    className: "q-chip",
                                    children: (0, J.Ss)(m),
                                  }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  className: "q-btn q-btn--ghost q-btn--sm",
                                  onClick: () => {
                                    c(null), d([]), h(null);
                                  },
                                  children: "Change basket",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "q-chips",
                          style: { marginTop: 12 },
                          children: r.tokens.map((e) =>
                            (0, s.jsxs)(
                              "span",
                              {
                                className: "q-chip",
                                children: [
                                  e.symbol,
                                  " ",
                                  (0, s.jsxs)("span", {
                                    style: { opacity: 0.6 },
                                    children: [e.weight, "%"],
                                  }),
                                ],
                              },
                              e.mint
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("section", {
                      className: "q-panel",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "q-h3",
                          style: { marginBottom: 14 },
                          children: "Open a position",
                        }),
                        (0, s.jsxs)("div", {
                          className: "q-grid q-grid--2",
                          children: [
                            (0, s.jsx)("button", {
                              type: "button",
                              className: "q-btn q-btn--block ".concat(
                                "long" === j ? "q-btn--good" : "q-btn--soft"
                              ),
                              onClick: () => y("long"),
                              children: "Long",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              className: "q-btn q-btn--block ".concat(
                                "short" === j ? "q-btn--bad" : "q-btn--soft"
                              ),
                              onClick: () => y("short"),
                              children: "Short",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { marginTop: 16 },
                          children: [
                            (0, s.jsxs)("label", {
                              className: "q-label",
                              htmlFor: "lev",
                              children: ["Leverage ", f, "x"],
                            }),
                            (0, s.jsx)("input", {
                              id: "lev",
                              className: "q-range",
                              type: "range",
                              min: "1",
                              max: "5",
                              value: f,
                              onChange: (e) => w(parseInt(e.target.value)),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { marginTop: 16 },
                          children: [
                            (0, s.jsx)("label", {
                              className: "q-label",
                              htmlFor: "col",
                              children: "Collateral (ETH)",
                            }),
                            (0, s.jsx)("input", {
                              id: "col",
                              className: "q-input",
                              type: "number",
                              step: "0.001",
                              min: "0.001",
                              placeholder: "0.001",
                              value: N,
                              onChange: (e) => v(e.target.value),
                            }),
                            (0, s.jsxs)("p", {
                              className: "q-small",
                              style: { marginTop: 6 },
                              children: [
                                "Min 0.001. Available ",
                                Z(u),
                                " ETH.",
                              ],
                            }),
                          ],
                        }),
                        ec > 0 &&
                          m &&
                          eo &&
                          (0, s.jsxs)("div", {
                            className: "q-box q-kv",
                            style: { marginTop: 16 },
                            children: [
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("span", { children: "Size" }),
                                  (0, s.jsxs)("span", {
                                    children: [(ec * f).toFixed(4), " ETH"],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("span", { children: "Entry" }),
                                  (0, s.jsx)("span", {
                                    children: (0, J.Ss)(m),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("span", {
                                    children: "Liquidation",
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "q-bad",
                                    children: (0, J.Ss)(eo),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: "q-btn q-btn--block ".concat(
                            "long" === j ? "q-btn--good" : "q-btn--bad"
                          ),
                          style: { marginTop: 16, padding: 14 },
                          onClick: ei,
                          disabled: I || ec < 0.001,
                          children: I
                            ? "Opening..."
                            : "Open ".concat(j, " ").concat(f, "x"),
                        }),
                      ],
                    }),
                    g.open.length > 0 &&
                      (0, s.jsxs)("section", {
                        className: "q-panel",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "q-h3",
                            style: { marginBottom: 12 },
                            children: "Open positions",
                          }),
                          (0, s.jsx)("div", {
                            className: "q-stack",
                            children: g.open.map((e) =>
                              (0, s.jsx)(
                                es,
                                {
                                  pos: e,
                                  nests: V,
                                  onClose: () => el(e.id),
                                  closing: M === e.id,
                                },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                    g.closed.length > 0 &&
                      (0, s.jsxs)("section", {
                        className: "q-panel",
                        children: [
                          (0, s.jsx)("h2", {
                            className: "q-h3",
                            style: { marginBottom: 12 },
                            children: "History",
                          }),
                          (0, s.jsx)("div", {
                            className: "q-stack",
                            children: g.closed.map((e) =>
                              (0, s.jsx)(et, { pos: e, nests: V }, e.id)
                            ),
                          }),
                        ],
                      }),
                    (0, s.jsxs)("section", {
                      className: "q-panel",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "q-h3",
                          style: { marginBottom: 12 },
                          children: "Charts",
                        }),
                        (0, s.jsx)("div", {
                          className: "q-stack",
                          children: r.tokens.map((e) => {
                            let a =
                              e.mint && !e.mint.startsWith("0x")
                                ? "sol"
                                : "robinhood";
                            return (0, s.jsxs)(
                              "div",
                              {
                                className: "q-chart",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "q-chart__head",
                                    children: [
                                      (0, s.jsx)("span", {
                                        children: e.symbol,
                                      }),
                                      (0, s.jsx)("a", {
                                        href: "https://gmgn.ai/"
                                          .concat(a, "/token/")
                                          .concat(e.mint),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "GMGN",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("iframe", {
                                    src: "https://www.gmgn.cc/kline/"
                                      .concat(a, "/")
                                      .concat(e.mint),
                                    height: "200",
                                    loading: "lazy",
                                    allow: "clipboard-write",
                                    title: "".concat(e.symbol, " chart"),
                                  }),
                                ],
                              },
                              e.mint
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("aside", {
                  className: "q-stack",
                  style: { position: "sticky", top: 84 },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "q-panel",
                      children: [
                        (0, s.jsxs)("span", {
                          className: "q-stat__num",
                          style: { fontSize: 28 },
                          children: [
                            Z(u),
                            " ",
                            (0, s.jsx)("span", {
                              className: "q-muted",
                              children: "ETH",
                            }),
                          ],
                        }),
                        (0, s.jsx)("span", {
                          className: "q-stat__label",
                          children: "Futures balance",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "q-panel",
                      children: [
                        (0, s.jsx)("label", {
                          className: "q-label",
                          htmlFor: "dep",
                          children: "Deposit",
                        }),
                        (0, s.jsx)("input", {
                          id: "dep",
                          className: "q-input",
                          type: "number",
                          step: "0.001",
                          min: "0",
                          placeholder: "ETH",
                          value: k,
                          onChange: (e) => C(e.target.value),
                        }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: "q-btn q-btn--ink q-btn--block",
                          style: { marginTop: 10 },
                          onClick: () => {
                            if (a && k && b) {
                              B(!0);
                              try {
                                K(L(k).toString()), t({ to: b, value: L(k) });
                              } catch (e) {
                                alert(e.message), B(!1), K(null);
                              }
                            }
                          },
                          disabled: E || !k,
                          children: E ? "Confirming..." : "Deposit",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "q-panel",
                      children: [
                        (0, s.jsx)("label", {
                          className: "q-label",
                          htmlFor: "wd",
                          children: "Withdraw",
                        }),
                        (0, s.jsxs)("div", {
                          className: "q-inputwrap",
                          children: [
                            (0, s.jsx)("input", {
                              id: "wd",
                              className: "q-input",
                              type: "number",
                              step: "0.001",
                              min: "0",
                              placeholder: "ETH",
                              value: S,
                              onChange: (e) => T(e.target.value),
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              className: "q-inputwrap__max",
                              onClick: () => T(Z(u)),
                              children: "MAX",
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: "q-btn q-btn--ghost q-btn--block",
                          style: { marginTop: 10 },
                          onClick: en,
                          disabled: H || !S,
                          children: H ? "Withdrawing..." : "Withdraw",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, s.jsxs)("div", {
              className: "q-stack",
              children: [
                (0, s.jsxs)("section", {
                  className: "q-panel",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "q-section__head",
                      children: [
                        (0, s.jsx)("h2", {
                          className: "q-h2",
                          children: "Pre-built baskets",
                        }),
                        (0, s.jsx)("span", {
                          className: "q-muted",
                          children: "Pick one to start trading perps.",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "q-grid q-grid--3",
                      children: J.zZ.map((e) =>
                        (0, s.jsxs)(
                          "button",
                          {
                            type: "button",
                            className: "q-box q-box--click",
                            onClick: () => er(e),
                            disabled: Q,
                            children: [
                              (0, s.jsx)("h3", {
                                className: "q-box__title",
                                children: e.name,
                              }),
                              (0, s.jsxs)("div", {
                                className: "q-row",
                                style: {
                                  marginTop: 12,
                                  alignItems: "flex-start",
                                },
                                children: [
                                  (0, s.jsx)(U.A, {
                                    tokens: e.tokens,
                                    size: 80,
                                    legend: !1,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "q-chips",
                                    children: e.tokens.map((e) =>
                                      (0, s.jsxs)(
                                        "span",
                                        {
                                          className: "q-chip",
                                          children: [
                                            e.symbol,
                                            " ",
                                            (0, s.jsxs)("span", {
                                              style: { opacity: 0.6 },
                                              children: [e.weight, "%"],
                                            }),
                                          ],
                                        },
                                        e.mint
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.name
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("section", {
                  className: "q-panel",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "q-h2",
                      children: "Build your own",
                    }),
                    (0, s.jsx)("div", {
                      style: { marginTop: 16 },
                      children: (0, s.jsx)(ea, {
                        walletAddress: a,
                        onNestReady: (e) => {
                          c(e), h(null);
                        },
                        futuresTokens: o,
                        setFuturesTokens: d,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function ee(e) {
        let { walletAddress: a, connected: t } = e,
          [i, l] = (0, n.useState)(""),
          [r, c] = (0, n.useState)([]),
          [o, d] = (0, n.useState)(""),
          [m, h] = (0, n.useState)(!1),
          [u, p] = (0, n.useState)(""),
          [b, x] = (0, n.useState)(!1),
          g = r.reduce((e, a) => e + a.weight, 0),
          q = async () => {
            let e = o.trim();
            if (e) {
              if (r.find((a) => a.mint.toLowerCase() === e.toLowerCase()))
                return void p("Already added");
              if (r.length >= 5) return void p("Max 5 tokens");
              h(!0), p("");
              try {
                let a = await fetch("/api/token-info?address=".concat(e)),
                  t = await a.json();
                if (!a.ok || !t.valid)
                  return void p(t.error || "Invalid contract address");
                c([
                  ...r,
                  {
                    mint: e,
                    symbol: t.symbol,
                    name: t.name,
                    image: t.image || "",
                    weight: 0,
                  },
                ]),
                  d("");
              } catch (e) {
                p("Failed to validate address");
              } finally {
                h(!1);
              }
            }
          },
          j = async () => {
            if (!t) return void p("Connect a wallet first");
            if (!i.trim() || r.length < 3 || 100 !== g)
              return void p(
                "You need a name, at least 3 tokens, and weights that add up to 100%"
              );
            x(!0), p("");
            try {
              let e = await (0, $.G5)({
                name: i.trim(),
                tokens: r.map((e) => ({
                  symbol: e.symbol,
                  name: e.name,
                  mint: e.mint,
                  image: e.image,
                  weight: e.weight,
                })),
                creator: a,
              });
              window.location.href = "/basket/".concat(e);
            } catch (e) {
              p(e.message), x(!1);
            }
          };
        return (0, s.jsxs)("div", {
          className: "q-stack",
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("label", {
                  className: "q-label",
                  htmlFor: "bname",
                  children: "Basket name",
                }),
                (0, s.jsx)("input", {
                  id: "bname",
                  className: "q-input",
                  type: "text",
                  value: i,
                  onChange: (e) => l(e.target.value),
                  placeholder: "e.g. Degen Dog Pack",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "q-row q-row--between",
                  style: { marginBottom: 8 },
                  children: [
                    (0, s.jsxs)("span", {
                      className: "q-label",
                      style: { marginBottom: 0 },
                      children: ["Tokens (", r.length, "/5)"],
                    }),
                    (0, s.jsxs)("div", {
                      className: "q-row",
                      children: [
                        r.length > 0 &&
                          (0, s.jsx)("button", {
                            type: "button",
                            className: "q-chip q-chip--click",
                            onClick: () => {
                              let e = Math.floor(100 / r.length);
                              c((a) =>
                                a.map((a, t) => ({
                                  ...a,
                                  weight:
                                    0 === t ? 100 - e * (r.length - 1) : e,
                                }))
                              );
                            },
                            children: "Split equally",
                          }),
                        (0, s.jsxs)("span", {
                          className: "q-chip ".concat(
                            100 === g ? "q-chip--good" : "q-chip--warn"
                          ),
                          children: [g, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "q-stack",
                  children: [
                    r.map((e) => {
                      var a;
                      return (0, s.jsxs)(
                        "div",
                        {
                          className: "q-token",
                          children: [
                            e.image
                              ? (0, s.jsx)("img", {
                                  className: "q-token__img",
                                  src: e.image,
                                  alt: "",
                                  onError: (a) => {
                                    a.target.src = K(e.symbol);
                                  },
                                })
                              : (0, s.jsx)("span", {
                                  className: "q-token__fallback",
                                  children:
                                    null == (a = e.symbol)
                                      ? void 0
                                      : a.charAt(0),
                                }),
                            (0, s.jsxs)("div", {
                              className: "q-token__body",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "q-token__sym",
                                  children: e.symbol,
                                }),
                                (0, s.jsx)("span", {
                                  className: "q-token__name",
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, s.jsx)("input", {
                              className: "q-input q-input--sm q-input--num",
                              type: "number",
                              min: "1",
                              max: "100",
                              value: e.weight || "",
                              onChange: (a) => {
                                let t, s;
                                return (
                                  (t = e.mint),
                                  (s = a.target.value),
                                  c((e) =>
                                    e.map((e) =>
                                      e.mint === t
                                        ? {
                                            ...e,
                                            weight: Math.max(
                                              0,
                                              Math.min(100, parseInt(s) || 0)
                                            ),
                                          }
                                        : e
                                    )
                                  )
                                );
                              },
                              "aria-label": "".concat(e.symbol, " weight"),
                            }),
                            (0, s.jsx)("span", {
                              className: "q-small",
                              children: "%",
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              className: "q-x",
                              onClick: () => {
                                let a;
                                return (
                                  (a = e.mint), c(r.filter((e) => e.mint !== a))
                                );
                              },
                              "aria-label": "Remove ".concat(e.symbol),
                              children: (0, s.jsx)(G.US, {}),
                            }),
                          ],
                        },
                        e.mint
                      );
                    }),
                    r.length < 5 &&
                      (0, s.jsxs)("div", {
                        className: "q-row",
                        children: [
                          (0, s.jsx)("input", {
                            className: "q-input q-mono",
                            type: "text",
                            value: o,
                            onChange: (e) => d(e.target.value),
                            onKeyDown: (e) => {
                              "Enter" === e.key && q();
                            },
                            placeholder: "Paste a token address from any chain",
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className: "q-btn q-btn--ink",
                            onClick: q,
                            disabled: m || !o.trim(),
                            children: m
                              ? "..."
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)(G.c1, {
                                      style: { width: 14, height: 14 },
                                    }),
                                    " Add",
                                  ],
                                }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className: "q-small",
                  style: { marginTop: 8 },
                  children:
                    "Ethereum, Solana, BNB, Base and Robinhood Chain addresses all work.",
                }),
              ],
            }),
            u &&
              (0, s.jsx)("div", {
                className: "q-note q-note--bad",
                children: u,
              }),
            (0, s.jsx)("button", {
              type: "button",
              className: "q-btn q-btn--ink q-btn--block",
              style: { padding: 14 },
              onClick: j,
              disabled: b || r.length < 3 || 100 !== g,
              children: b ? "Creating..." : "Create basket",
            }),
          ],
        });
      }
      function ea(e) {
        let {
            walletAddress: a,
            onNestReady: t,
            futuresTokens: i,
            setFuturesTokens: l,
          } = e,
          [r, c] = (0, n.useState)(""),
          [o, d] = (0, n.useState)(!1),
          [m, h] = (0, n.useState)(""),
          [u, p] = (0, n.useState)(!1),
          [b, x] = (0, n.useState)(""),
          g = (
            m
              ? (function (e) {
                  let a = e.toLowerCase();
                  return z.filter(
                    (e) =>
                      e.symbol.toLowerCase().includes(a) ||
                      e.name.toLowerCase().includes(a) ||
                      e.address.toLowerCase().includes(a)
                  );
                })(m)
              : z
          ).filter((e) => !i.find((a) => a.mint === e.address)),
          q = i.reduce((e, a) => e + (a.weight || 0), 0),
          j = async () => {
            if (!a) return void x("Connect a wallet first");
            if (!r.trim()) return void x("Name your basket");
            if (i.length < 3) return void x("Pick at least 3 coins");
            if (100 !== q)
              return void x(
                "Weights must add up to 100% (currently ".concat(q, "%)")
              );
            p(!0), x("");
            try {
              let e = await (0, $.G5)({
                name: r.trim(),
                tokens: i.map((e) => ({
                  symbol: e.symbol,
                  name: e.name,
                  mint: e.mint,
                  image: e.image,
                  weight: e.weight,
                })),
                creator: a,
              });
              t({ id: e, name: r.trim(), tokens: i });
            } catch (e) {
              x(e.message);
            } finally {
              p(!1);
            }
          };
        return (0, s.jsxs)("div", {
          className: "q-stack",
          children: [
            (0, s.jsx)("p", {
              className: "q-muted",
              children:
                "Pick 3 to 5 Robinhood Chain assets and set their weights.",
            }),
            (0, s.jsx)("input", {
              className: "q-input",
              type: "text",
              value: r,
              onChange: (e) => c(e.target.value),
              placeholder: "Basket name, e.g. Dog Season",
              "aria-label": "Basket name",
            }),
            i.map((e) =>
              (0, s.jsxs)(
                "div",
                {
                  className: "q-token",
                  children: [
                    (0, s.jsx)("img", {
                      className: "q-token__img",
                      src: e.image,
                      alt: "",
                      onError: (a) => {
                        a.target.src = K(e.symbol);
                      },
                    }),
                    (0, s.jsxs)("div", {
                      className: "q-token__body",
                      children: [
                        (0, s.jsx)("span", {
                          className: "q-token__sym",
                          children: e.symbol,
                        }),
                        (0, s.jsx)("span", {
                          className: "q-token__name",
                          children: e.name,
                        }),
                      ],
                    }),
                    (0, s.jsx)("input", {
                      className: "q-input q-input--sm q-input--num",
                      type: "number",
                      min: "1",
                      max: "100",
                      value: e.weight || "",
                      onChange: (a) => {
                        let t, s;
                        return (
                          (t = e.mint),
                          (s = a.target.value),
                          l((e) =>
                            e.map((e) =>
                              e.mint === t
                                ? {
                                    ...e,
                                    weight: Math.max(
                                      0,
                                      Math.min(100, parseInt(s) || 0)
                                    ),
                                  }
                                : e
                            )
                          )
                        );
                      },
                      "aria-label": "".concat(e.symbol, " weight"),
                    }),
                    (0, s.jsx)("span", { className: "q-small", children: "%" }),
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "q-x",
                      onClick: () => {
                        let a;
                        return (a = e.mint), l(i.filter((e) => e.mint !== a));
                      },
                      "aria-label": "Remove ".concat(e.symbol),
                      children: (0, s.jsx)(G.US, {}),
                    }),
                  ],
                },
                e.mint
              )
            ),
            i.length < 5 &&
              (o
                ? (0, s.jsxs)("div", {
                    className: "q-picker",
                    children: [
                      (0, s.jsx)("input", {
                        className: "q-picker__search",
                        type: "text",
                        value: m,
                        onChange: (e) => h(e.target.value),
                        placeholder: "Search assets",
                        autoFocus: !0,
                      }),
                      (0, s.jsx)("div", {
                        className: "q-picker__list",
                        children: g.map((e) =>
                          (0, s.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: "q-picker__item",
                              onClick: () => {
                                !(i.length >= 5) &&
                                  (l([
                                    ...i,
                                    {
                                      mint: e.address,
                                      symbol: e.symbol,
                                      name: e.name,
                                      image: e.image,
                                      weight: 0,
                                    },
                                  ]),
                                  d(!1),
                                  h(""));
                              },
                              children: [
                                (0, s.jsx)("img", {
                                  className: "q-token__img",
                                  style: { width: 24, height: 24 },
                                  src: e.image,
                                  alt: "",
                                  onError: (a) => {
                                    a.target.src = K(e.symbol);
                                  },
                                }),
                                (0, s.jsx)("span", {
                                  style: { fontWeight: 600 },
                                  children: e.symbol,
                                }),
                                (0, s.jsx)("span", {
                                  className: "q-small",
                                  children: e.name,
                                }),
                              ],
                            },
                            e.address
                          )
                        ),
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        className: "q-picker__foot",
                        onClick: () => {
                          d(!1), h("");
                        },
                        children: "Close",
                      }),
                    ],
                  })
                : (0, s.jsxs)("button", {
                    type: "button",
                    className: "q-dashed",
                    onClick: () => d(!0),
                    children: [
                      "+ Add asset (",
                      i.length < 3
                        ? "need ".concat(3 - i.length, " more")
                        : "optional",
                      ")",
                    ],
                  })),
            i.length > 0 &&
              (0, s.jsxs)("div", {
                className: "q-row",
                children: [
                  (0, s.jsxs)("span", {
                    className: "q-chip ".concat(
                      100 === q ? "q-chip--good" : "q-chip--warn"
                    ),
                    children: [q, "%", 100 !== q && " of 100%"],
                  }),
                  (0, s.jsx)("button", {
                    type: "button",
                    className: "q-chip q-chip--click",
                    onClick: () => {
                      let e = i.length,
                        a = Math.floor(100 / e);
                      l((t) =>
                        t.map((t, s) => ({
                          ...t,
                          weight: 0 === s ? 100 - a * (e - 1) : a,
                        }))
                      );
                    },
                    children: "Split equally",
                  }),
                ],
              }),
            b &&
              (0, s.jsx)("div", {
                className: "q-note q-note--bad",
                children: b,
              }),
            (0, s.jsx)("button", {
              type: "button",
              className: "q-btn q-btn--ink q-btn--block",
              style: { padding: 14 },
              onClick: j,
              disabled: u || i.length < 3 || 100 !== q || !r.trim(),
              children: u ? "Creating..." : "Create futures basket",
            }),
          ],
        });
      }
      function et(e) {
        let { pos: a, nests: t } = e,
          [i, l] = (0, n.useState)(null),
          r = t.find((e) => e.id === a.nest_id);
        (0, n.useEffect)(() => {
          if (r) return void l(r.name);
          fetch("/api/basket/info?id=".concat(a.nest_id))
            .then((e) => e.json())
            .then((e) => {
              e.name && l(e.name);
            })
            .catch(() => {});
        }, [a.nest_id]);
        let c = BigInt(a.pnl_wei || a.pnl_lamports || "0"),
          o = parseFloat((0, M.c)(c));
        return (0, s.jsxs)("div", {
          className: "q-box q-row q-row--between",
          style: { fontSize: 13 },
          children: [
            (0, s.jsxs)("span", {
              className: "long" === a.side ? "q-good" : "q-bad",
              style: { fontWeight: 600 },
              children: [a.side.toUpperCase(), " ", a.leverage, "x"],
            }),
            (0, s.jsx)("span", {
              className: "q-muted",
              children: i || (null == r ? void 0 : r.name) || "...",
            }),
            (0, s.jsxs)("span", {
              className: c >= 0n ? "q-good" : "q-bad",
              children: [c >= 0n ? "+" : "", o.toFixed(4), " ETH"],
            }),
          ],
        });
      }
      function es(e) {
        let { pos: a, nests: t, onClose: i, closing: l } = e,
          [r, c] = (0, n.useState)(null),
          [o, d] = (0, n.useState)(null),
          m = t.find((e) => e.id === a.nest_id),
          h = m || o,
          u = parseFloat(a.entry_price),
          p = Number(a.size_wei || a.size_lamports || "0");
        (0, n.useEffect)(() => {
          m ||
            o ||
            fetch("/api/basket/info?id=".concat(a.nest_id))
              .then((e) => e.json())
              .then((e) => {
                e.id && d(e);
              })
              .catch(() => {});
        }, [a.nest_id]),
          (0, n.useEffect)(() => {
            if (!(null == h ? void 0 : h.tokens) || 0 === h.tokens.length)
              return;
            let e = !1;
            async function a() {
              try {
                let t = await fetch(
                    "/api/tokens?mints=".concat(
                      h.tokens.map((e) => e.mint).join(",")
                    )
                  ),
                  s = await t.json();
                if (e) return;
                let n = {};
                if (s.pairs)
                  for (let e of s.pairs) {
                    var a;
                    let t = null == (a = e.baseToken) ? void 0 : a.address;
                    t && !n[t] && (n[t] = parseFloat(e.priceUsd) || 0);
                  }
                let i = 0;
                for (let e of h.tokens)
                  i += (n[e.mint] || 0) * (e.weight / 100);
                i > 0 && c(i);
              } catch (e) {}
            }
            a();
            let t = setInterval(a, 1e4);
            return () => {
              (e = !0), clearInterval(t);
            };
          }, [h]);
        let b = null,
          x = null;
        return (
          r &&
            u > 0 &&
            (x =
              ((b = "long" === a.side ? (p * (r - u)) / u : (p * (u - r)) / u) /
                Number(a.collateral_wei || a.collateral_lamports || "1")) *
              100),
          (0, s.jsxs)("div", {
            className: "q-box",
            children: [
              (0, s.jsxs)("div", {
                className: "q-row q-row--between",
                style: { marginBottom: 10 },
                children: [
                  (0, s.jsxs)("div", {
                    className: "q-row",
                    children: [
                      (0, s.jsxs)("span", {
                        className: "q-chip ".concat(
                          "long" === a.side ? "q-chip--good" : "q-chip--bad"
                        ),
                        children: [a.side.toUpperCase(), " ", a.leverage, "x"],
                      }),
                      (0, s.jsx)("span", {
                        style: { fontWeight: 600, fontSize: 14 },
                        children: (null == h ? void 0 : h.name) || "...",
                      }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    type: "button",
                    className: "q-btn q-btn--ghost q-btn--sm",
                    onClick: i,
                    disabled: l,
                    children: l ? "..." : "Close",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "q-grid q-grid--4",
                style: { fontSize: 13 },
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "q-small",
                        children: "Collateral",
                      }),
                      (0, s.jsxs)("div", {
                        style: { fontWeight: 600 },
                        children: [
                          parseFloat(
                            (0, M.c)(
                              BigInt(
                                a.collateral_wei || a.collateral_lamports || "0"
                              )
                            )
                          ).toFixed(4),
                          " ETH",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "q-small",
                        children: "Entry",
                      }),
                      (0, s.jsx)("div", {
                        style: { fontWeight: 600 },
                        children: (0, J.Ss)(u),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "q-small",
                        children: "Liquidation",
                      }),
                      (0, s.jsx)("div", {
                        className: "q-bad",
                        style: { fontWeight: 600 },
                        children: (0, J.Ss)(parseFloat(a.liquidation_price)),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: "q-small",
                        children: "PnL",
                      }),
                      null !== b && null !== x
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsxs)("div", {
                                className: b >= 0 ? "q-good" : "q-bad",
                                style: { fontWeight: 600 },
                                children: [
                                  b >= 0 ? "+" : "",
                                  ((e) => {
                                    let a = parseFloat(
                                      (0, M.c)(BigInt(Math.round(e)))
                                    );
                                    return 1e-4 > Math.abs(a)
                                      ? a.toFixed(8)
                                      : 0.01 > Math.abs(a)
                                      ? a.toFixed(6)
                                      : a.toFixed(4);
                                  })(b),
                                  " ETH",
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "q-small ".concat(
                                  x >= 0 ? "q-good" : "q-bad"
                                ),
                                children: [
                                  x >= 0 ? "+" : "",
                                  x.toFixed(2),
                                  "%",
                                ],
                              }),
                            ],
                          })
                        : (0, s.jsx)("div", {
                            className: "q-small",
                            children: "...",
                          }),
                    ],
                  }),
                ],
              }),
              r &&
                (0, s.jsxs)("p", {
                  className: "q-small",
                  style: { marginTop: 8 },
                  children: ["Current ", (0, J.Ss)(r)],
                }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    e.O(0, [5730, 2619, 1029, 9579, 6650, 5828, 1188, 8441, 1255, 7358], () =>
      e((e.s = 71862))
    ),
      (_N_E = e.O());
  },
]);
