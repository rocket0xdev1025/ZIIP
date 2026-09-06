"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5828],
  {
    253: (e, t, r) => {
      r.d(t, { UG: () => a, xo: () => s, zz: () => i });
      var n = r(11134);
      class s extends n.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class i extends n.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class a extends n.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    890: (e, t, r) => {
      r.d(t, {
        Vw: () => h,
        Fc: () => u,
        Id: () => d,
        O8: () => a,
        qv: () => c,
        po: () => p,
        Ow: () => o,
        ZJ: () => l,
        DH: () => i,
        ld: () => f,
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var s = r(76590);
      function i(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function a(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function o(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function u(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function l(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, s.DO)(e),
          e
        );
      }
      function d(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          (0, s.DO)(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, n), (n += s.length);
        }
        return r;
      }
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function f(e) {
        let t = (t) => e().update(l(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function p(e = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(e));
        if (n && "function" == typeof n.randomBytes) return n.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    1347: (e, t, r) => {
      r.d(t, { iY: () => c });
      var n = r(97525),
        s = r(60587),
        i = r(24784),
        a = r(33704),
        o = r(88878);
      function c(e) {
        let t,
          { abi: r, args: c = [], name: u } = e,
          l = (0, s.q)(u, { strict: !1 }),
          d = r.filter((e) =>
            l
              ? "function" === e.type
                ? (0, o.V)(e) === u
                : "event" === e.type && (0, a.h)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, r) => {
                  let n = "inputs" in e && e.inputs[r];
                  return (
                    !!n &&
                    (function e(t, r) {
                      let n = typeof t,
                        s = r.type;
                      switch (s) {
                        case "address":
                          return (0, i.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === s && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              e(Object.values(t)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              s
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(s))
                            return "string" === n || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(s))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...r,
                                  type: s.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, n)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let r = (function e(t, r, n) {
                    for (let s in t) {
                      let a = t[s],
                        o = r[s];
                      if (
                        "tuple" === a.type &&
                        "tuple" === o.type &&
                        "components" in a &&
                        "components" in o
                      )
                        return e(a.components, o.components, n[s]);
                      let c = [a.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, i.P)(n[s], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (r)
                    throw new n.nM(
                      { abiItem: e, type: r[0] },
                      { abiItem: t, type: r[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    1588: (e, t, r) => {
      r.d(t, { BD: () => n, Ge: () => s });
      let n = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        s =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    2685: (e, t, r) => {
      r.d(t, {
        NO: () => a,
        Pj: () => o,
        dV: () => s,
        nx: () => c,
        zd: () => i,
      });
      var n = r(11134);
      n.C, n.C;
      class s extends n.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class i extends n.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class a extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class o extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class c extends n.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    4058: (e, t, r) => {
      r.d(t, { Ci: () => a, J8: () => o, MU: () => c });
      var n = r(59350),
        s = r(13933),
        i = r(24250);
      class a extends s.C {
        constructor({
          body: e,
          cause: t,
          details: r,
          headers: s,
          status: a,
          url: o,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: r,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, i.I)(o)}`,
              e && `Request body: ${(0, n.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = s),
            (this.status = a),
            (this.url = o);
        }
      }
      s.C;
      class o extends s.C {
        constructor({ body: e, error: t, url: r }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, i.I)(r)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      s.C;
      class c extends s.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, i.I)(t)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    4274: (e, t, r) => {
      r.d(t, { yH: () => u });
      var n = r(76115),
        s = r(66969),
        i = r(35674),
        a = r(24784),
        o = r(34561);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: r }) => {
            if (66 !== t.length)
              throw new s.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new s.NV({ size: r.length, targetSize: 66, type: "hex" });
            return (e[t] = r), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: r, ...s } of e) {
          if (!(0, a.P)(r, { strict: !1 })) throw new n.M({ address: r });
          if (t[r]) throw new i.Hi({ address: r });
          t[r] = (function (e) {
            let { balance: t, nonce: r, state: n, stateDiff: s, code: a } = e,
              u = {};
            if (
              (void 0 !== a && (u.code = a),
              void 0 !== t && (u.balance = (0, o.cK)(t)),
              void 0 !== r && (u.nonce = (0, o.cK)(r)),
              void 0 !== n && (u.state = c(n)),
              void 0 !== s)
            ) {
              if (u.state) throw new i.ft();
              u.stateDiff = c(s);
            }
            return u;
          })(s);
        }
        return t;
      }
    },
    4486: (e, t, r) => {
      r.d(t, {
        Ag: () => i,
        Rm: () => c,
        SJ: () => o,
        _: () => u,
        oX: () => a,
        v2: () => n,
      });
      let n = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        s = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        i = [
          ...s,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        a = [
          ...s,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        o = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        c = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ];
    },
    5691: (e, t, r) => {
      r.d(t, { c: () => u });
      var n = r(97152);
      let s = 2n ** 256n - 1n;
      var i = r(76115),
        a = r(88737),
        o = r(50879),
        c = r(24784);
      function u(e) {
        let {
            account: t,
            gasPrice: r,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          h = t ? (0, n.J)(t) : void 0;
        if (h && !(0, c.P)(h.address)) throw new i.M({ address: h.address });
        if (d && !(0, c.P)(d)) throw new i.M({ address: d });
        if (void 0 !== r && (void 0 !== u || void 0 !== l)) throw new o.n3();
        if (u && u > s) throw new a.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new a.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    5766: (e, t, r) => {
      r.d(t, { q: () => u });
      var n = r(11914),
        s = r(72757),
        i = r(87639),
        a = r(94788),
        o = r(59350),
        c = r(70054);
      function u(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: r = !1,
          onBlockNumber: u,
          onError: l,
          poll: d,
          pollingInterval: h = e.pollingInterval,
        }
      ) {
        let f;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? (() => {
              let n = (0, o.A)(["watchBlockNumber", e.uid, t, r, h]);
              return (0, i.lB)(n, { onBlockNumber: u, onError: l }, (n) =>
                (0, a.w)(
                  async () => {
                    try {
                      let t = await (0, s.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (f) {
                        if (t === f) return;
                        if (t - f > 1 && r)
                          for (let e = f + 1n; e < t; e++)
                            n.onBlockNumber(e, f), (f = e);
                      }
                      (!f || t > f) && (n.onBlockNumber(t, f), (f = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: h }
                )
              );
            })()
          : (() => {
              let s = (0, o.A)(["watchBlockNumber", e.uid, t, r]);
              return (0, i.lB)(s, { onBlockNumber: u, onError: l }, (t) => {
                let r = !0,
                  s = () => (r = !1);
                return (
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
                        { unsubscribe: a } = await i.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!r) return;
                            let s = (0, n.uU)(e.result?.number);
                            t.onBlockNumber(s, f), (f = s);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (s = a), r || s();
                    } catch (e) {
                      l?.(e);
                    }
                  })(),
                  () => s()
                );
              });
            })();
      }
    },
    5935: (e, t, r) => {
      r.d(t, { N: () => u, b: () => c });
      var n = r(32915),
        s = r(11914),
        i = r(72757),
        a = r(60186),
        o = r(32395);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: r, chain: c = e.chain, request: u } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = r || (await (0, i.T)(e, a.g, "getBlock")({})),
              s = await t({ block: n, client: e, request: u });
            if (null === s) throw Error();
            return s;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, s.uU)(n);
        } catch {
          let [t, s] = await Promise.all([
            r ? Promise.resolve(r) : (0, i.T)(e, a.g, "getBlock")({}),
            (0, i.T)(e, o.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.pw();
          let c = s - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    6434: (e, t, r) => {
      r.d(t, { y: () => i });
      var n = r(11914),
        s = r(34561);
      async function i(
        e,
        { address: t, blockTag: r = "latest", blockNumber: i }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, i ? (0, s.cK)(i) : r],
          },
          { dedupe: !!i }
        );
        return (0, n.ME)(a);
      }
    },
    6867: (e, t, r) => {
      r.d(t, { m: () => o });
      var n = r(97525),
        s = r(40290),
        i = r(41706);
      let a = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: r, bytecode: o } = e;
        if (!r || 0 === r.length) return o;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new n.YW({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new n.YF({ docsPath: a });
        let u = (0, i.h)(c.inputs, r);
        return (0, s.aP)([o, u]);
      }
    },
    11134: (e, t, r) => {
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof n
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            s = (t.cause instanceof n && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: https://abitype.dev${s}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              "Version: abitype@1.0.8",
            ].join("\n")
          ),
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
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = s),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    11914: (e, t, r) => {
      r.d(t, {
        IQ: () => d,
        ME: () => l,
        Nx: () => u,
        Sl: () => o,
        uU: () => c,
      });
      var n = r(35276),
        s = r(16871),
        i = r(42438),
        a = r(55563);
      function o(e, { size: t }) {
        if ((0, s.E)(e) > t)
          throw new n.u({ givenSize: (0, s.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: r } = t;
        t.size && o(e, { size: t.size });
        let n = BigInt(e);
        if (!r) return n;
        let s = (e.length - 2) / 2;
        return n <= (1n << (8n * BigInt(s) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        let r = e;
        if (
          (t.size && (o(r, { size: t.size }), (r = (0, i.B)(r))),
          "0x00" === (0, i.B)(r))
        )
          return !1;
        if ("0x01" === (0, i.B)(r)) return !0;
        throw new n.H2(r);
      }
      function l(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let r = (0, a.aT)(e);
        return (
          t.size &&
            (o(r, { size: t.size }), (r = (0, i.B)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    13933: (e, t, r) => {
      r.d(t, { C: () => i });
      let n = "2.23.2",
        s = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${n}`,
        };
      class i extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof i
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof i && t.cause.docsPath) || t.docsPath,
            o = s.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(o ? [`Docs: ${o}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(s.version ? [`Version: ${s.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
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
            Object.defineProperty(this, "version", {
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
            (this.details = r),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = n);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    15885: (e, t, r) => {
      r.d(t, { b4: () => s, uP: () => i });
      var n = r(11914);
      let s = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function i(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, n.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, n.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              contractAddress: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
    },
    16871: (e, t, r) => {
      r.d(t, { E: () => s });
      var n = r(60587);
      function s(e) {
        return (0, n.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    17788: (e, t, r) => {
      r.d(t, { H: () => s });
      var n = r(34049),
        s = (() => {
          let e = () => n.S$;
          return {
            isServer: () => e(),
            setIsServer(t) {
              e = t;
            },
          };
        })();
    },
    20390: (e, t, r) => {
      r.d(t, { A: () => n });
      class n extends Map {
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
    },
    21374: (e, t, r) => {
      r.d(t, { sc: () => l });
      var n = r(76590),
        s = r(890);
      class i extends s.Vw {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, s.O8)(this.buffer));
        }
        update(e) {
          (0, n.CC)(this);
          let { view: t, buffer: r, blockLen: i } = this,
            a = (e = (0, s.ZJ)(e)).length;
          for (let n = 0; n < a; ) {
            let o = Math.min(i - this.pos, a - n);
            if (o === i) {
              let t = (0, s.O8)(e);
              for (; i <= a - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.CC)(this), (0, n.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: a } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > i - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < i; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let s = BigInt(32),
              i = BigInt(0xffffffff),
              a = Number((r >> s) & i),
              o = Number(r & i),
              c = 4 * !!n,
              u = 4 * !n;
            e.setUint32(t + c, a, n), e.setUint32(t + u, o, n);
          })(r, i - 8, BigInt(8 * this.length), a),
            this.process(r, 0);
          let c = (0, s.O8)(e),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = u / 4,
            d = this.get();
          if (l > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) c.setUint32(4 * e, d[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: s,
            destroyed: i,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = s),
            (e.destroyed = i),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let a = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        o = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class u extends i {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: s, F: i, G: a, H: o } = this;
          return [e, t, r, n, s, i, a, o];
        }
        set(e, t, r, n, s, i, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | s),
            (this.F = 0 | i),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              r = c[e - 2],
              n = (0, s.Ow)(t, 7) ^ (0, s.Ow)(t, 18) ^ (t >>> 3),
              i = (0, s.Ow)(r, 17) ^ (0, s.Ow)(r, 19) ^ (r >>> 10);
            c[e] = (i + c[e - 7] + n + c[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: o, E: u, F: l, G: d, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var f, p, b, y;
            let t =
                (h +
                  ((0, s.Ow)(u, 6) ^ (0, s.Ow)(u, 11) ^ (0, s.Ow)(u, 25)) +
                  (((f = u) & l) ^ (~f & d)) +
                  a[e] +
                  c[e]) |
                0,
              m =
                (((0, s.Ow)(r, 2) ^ (0, s.Ow)(r, 13) ^ (0, s.Ow)(r, 22)) +
                  (((p = r) & (b = n)) ^ (p & (y = i)) ^ (b & y))) |
                0;
            (h = d),
              (d = l),
              (l = u),
              (u = (o + t) | 0),
              (o = i),
              (i = n),
              (n = r),
              (r = (t + m) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (o = (o + this.D) | 0),
            (u = (u + this.E) | 0),
            (l = (l + this.F) | 0),
            (d = (d + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(r, n, i, o, u, l, d, h);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let l = (0, s.ld)(() => new u());
    },
    21681: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let s = e[r];
        return "function" == typeof s ? s : (r) => t(e, r);
      }
    },
    21920: (e, t, r) => {
      r.d(t, { MM: () => $, ft: () => O });
      var n = r(97152),
        s = r(98292),
        i = r(34897),
        a = r(60186),
        o = r(6434),
        c = r(32915),
        u = r(55563),
        l = r(34561);
      function d(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          s = [];
        for (let e of n) s.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === r ? s : s.map((e) => (0, l.My)(e));
      }
      function h(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          s =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, u.aT)(e))
              : e.commitments,
          i = [];
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            a = s[e];
          i.push(Uint8Array.from(t.computeBlobKzgProof(r, a)));
        }
        return "bytes" === r ? i : i.map((e) => (0, l.My)(e));
      }
      var f = r(21374),
        p = r(60587),
        b = r(13933);
      class y extends b.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class m extends b.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      b.C, b.C;
      var g = r(82427),
        v = r(16871),
        w = r(72757),
        x = r(5691),
        P = r(50879),
        C = r(35471);
      let $ = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        I = new Map();
      async function O(e, t) {
        let r,
          b,
          {
            account: O = e.account,
            blobs: E,
            chain: M,
            gas: R,
            kzg: T,
            nonce: A,
            nonceManager: B,
            parameters: F = $,
            type: S,
          } = t,
          j = O ? (0, n.J)(O) : O,
          k = { ...t, ...(j ? { from: j?.address } : {}) };
        async function U() {
          return (
            r ||
            (r = await (0, w.T)(e, a.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function z() {
          return (
            b ||
            (M
              ? M.id
              : void 0 !== t.chainId
              ? t.chainId
              : (b = await (0, w.T)(e, C.T, "getChainId")({})))
          );
        }
        if (
          (F.includes("blobVersionedHashes") || F.includes("sidecars")) &&
          E &&
          T
        ) {
          let e = d({ blobs: E, kzg: T });
          if (
            (F.includes("blobVersionedHashes") &&
              (k.blobVersionedHashes = (function (e) {
                let { commitments: t, version: r } = e,
                  n = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  s = [];
                for (let e of t)
                  s.push(
                    (function (e) {
                      let { commitment: t, version: r = 1 } = e,
                        n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        s = (function (e, t) {
                          let r = (0, f.sc)(
                            (0, p.q)(e, { strict: !1 }) ? (0, u.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? r : (0, l.nj)(r);
                        })(t, "bytes");
                      return s.set([r], 0), "bytes" === n ? s : (0, l.My)(s);
                    })({ commitment: e, to: n, version: r })
                  );
                return s;
              })({ commitments: e, to: "hex" })),
            F.includes("sidecars"))
          ) {
            let t = h({ blobs: E, commitments: e, kzg: T });
            k.sidecars = (function (e) {
              let { data: t, kzg: r, to: n } = e,
                s =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      r =
                        "string" == typeof e.data ? (0, u.aT)(e.data) : e.data,
                      n = (0, v.E)(r);
                    if (!n) throw new m();
                    if (n > 761855) throw new y({ maxSize: 761855, size: n });
                    let s = [],
                      i = !0,
                      a = 0;
                    for (; i; ) {
                      let e = (0, g.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let n = r.slice(a, a + 31);
                        if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                          e.pushByte(128), (i = !1);
                          break;
                        }
                        t++, (a += 31);
                      }
                      s.push(e);
                    }
                    return "bytes" === t
                      ? s.map((e) => e.bytes)
                      : s.map((e) => (0, l.My)(e.bytes));
                  })({ data: t, to: n }),
                i = e.commitments ?? d({ blobs: s, kzg: r, to: n }),
                a = e.proofs ?? h({ blobs: s, commitments: i, kzg: r, to: n }),
                o = [];
              for (let e = 0; e < s.length; e++)
                o.push({ blob: s[e], commitment: i[e], proof: a[e] });
              return o;
            })({ blobs: E, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (F.includes("chainId") && (k.chainId = await z()),
          (F.includes("fees") || F.includes("type")) && void 0 === S)
        )
          try {
            k.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new P.Vg({ transaction: e });
            })(k);
          } catch {
            let t = I.get(e.uid);
            if (void 0 === t) {
              let r = await U();
              (t = "bigint" == typeof r?.baseFeePerGas), I.set(e.uid, t);
            }
            k.type = t ? "eip1559" : "legacy";
          }
        if (F.includes("fees"))
          if ("legacy" !== k.type && "eip2930" !== k.type) {
            if (
              void 0 === k.maxFeePerGas ||
              void 0 === k.maxPriorityFeePerGas
            ) {
              let r = await U(),
                { maxFeePerGas: n, maxPriorityFeePerGas: i } = await (0, s.O)(
                  e,
                  { block: r, chain: M, request: k }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < i
              )
                throw new c.RR({ maxPriorityFeePerGas: i });
              (k.maxPriorityFeePerGas = i), (k.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            if (void 0 === t.gasPrice) {
              let t = await U(),
                { gasPrice: r } = await (0, s.O)(e, {
                  block: t,
                  chain: M,
                  request: k,
                  type: "legacy",
                });
              k.gasPrice = r;
            }
          }
        if (
          (F.includes("gas") &&
            void 0 === R &&
            (k.gas = await (0, w.T)(
              e,
              i.Q,
              "estimateGas"
            )({
              ...k,
              account: j ? { address: j.address, type: "json-rpc" } : j,
            })),
          F.includes("nonce") && void 0 === A && j)
        )
          if (B) {
            let t = await z();
            k.nonce = await B.consume({
              address: j.address,
              chainId: t,
              client: e,
            });
          } else
            k.nonce = await (0, w.T)(
              e,
              o.y,
              "getTransactionCount"
            )({ address: j.address, blockTag: "pending" });
        return (0, x.c)(k), delete k.parameters, k;
      }
    },
    22454: (e, t, r) => {
      r.d(t, { I: () => x });
      var n = r(56195),
        s = r(17788),
        i = r(74268),
        a = r(80043),
        o = r(38445),
        c = r(83515),
        u = r(34049),
        l = r(37126),
        d = class extends o.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#t = null),
              (this.#r = (0, c.T)()),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #n = void 0;
          #s = void 0;
          #i = void 0;
          #a;
          #o;
          #r;
          #t;
          #c;
          #u;
          #l;
          #d;
          #h;
          #f;
          #p = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#n.addObserver(this),
              h(this.#n, this.options) ? this.#b() : this.updateResult(),
              this.#y());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return f(this.#n, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return f(this.#n, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#m(),
              this.#g(),
              this.#n.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              r = this.#n;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, u.nU)(this.options.enabled, this.#n))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#v(),
              this.#n.setOptions(this.options),
              t._defaulted &&
                !(0, u.f8)(this.options, t) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#n,
                    observer: this,
                  });
            let n = this.hasListeners();
            n && p(this.#n, r, this.options, t) && this.#b(),
              this.updateResult(),
              n &&
                (this.#n !== r ||
                  (0, u.nU)(this.options.enabled, this.#n) !==
                    (0, u.nU)(t.enabled, this.#n) ||
                  (0, u.d2)(this.options.staleTime, this.#n) !==
                    (0, u.d2)(t.staleTime, this.#n)) &&
                this.#w();
            let s = this.#x();
            n &&
              (this.#n !== r ||
                (0, u.nU)(this.options.enabled, this.#n) !==
                  (0, u.nU)(t.enabled, this.#n) ||
                s !== this.#f) &&
              this.#P(s);
          }
          getOptimisticResult(e) {
            var t, r;
            let n = this.#e.getQueryCache().build(this.#e, e),
              s = this.createResult(n, e);
            return (
              (t = this),
              (r = s),
              (0, u.f8)(t.getCurrentResult(), r) ||
                ((this.#i = s),
                (this.#o = this.options),
                (this.#a = this.#n.state)),
              s
            );
          }
          getCurrentResult() {
            return this.#i;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, r) => (
                this.trackProp(r),
                t?.(r),
                "promise" === r &&
                  (this.trackProp("data"),
                  this.options.experimental_prefetchInRender ||
                    "pending" !== this.#r.status ||
                    this.#r.reject(
                      Error(
                        "experimental_prefetchInRender feature flag is not enabled"
                      )
                    )),
                Reflect.get(e, r)
              ),
            });
          }
          trackProp(e) {
            this.#p.add(e);
          }
          getCurrentQuery() {
            return this.#n;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              r = this.#e.getQueryCache().build(this.#e, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#b({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#i)
            );
          }
          #b(e) {
            this.#v();
            let t = this.#n.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(u.lQ)), t;
          }
          #w() {
            this.#m();
            let e = (0, u.d2)(this.options.staleTime, this.#n);
            if (s.H.isServer() || this.#i.isStale || !(0, u.gn)(e)) return;
            let t = (0, u.j3)(this.#i.dataUpdatedAt, e);
            this.#d = l.zs.setTimeout(() => {
              this.#i.isStale || this.updateResult();
            }, t + 1);
          }
          #x() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#n)
                : this.options.refetchInterval) ?? !1
            );
          }
          #P(e) {
            this.#g(),
              (this.#f = e),
              !s.H.isServer() &&
                !1 !== (0, u.nU)(this.options.enabled, this.#n) &&
                (0, u.gn)(this.#f) &&
                0 !== this.#f &&
                (this.#h = l.zs.setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.m.isFocused()) &&
                    this.#b();
                }, this.#f));
          }
          #y() {
            this.#w(), this.#P(this.#x());
          }
          #m() {
            void 0 !== this.#d &&
              (l.zs.clearTimeout(this.#d), (this.#d = void 0));
          }
          #g() {
            void 0 !== this.#h &&
              (l.zs.clearInterval(this.#h), (this.#h = void 0));
          }
          createResult(e, t) {
            let r,
              n = this.#n,
              s = this.options,
              i = this.#i,
              o = this.#a,
              l = this.#o,
              d = e !== n ? e.state : this.#s,
              { state: f } = e,
              y = { ...f },
              m = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                i = !r && h(e, t),
                o = r && p(e, n, t, s);
              (i || o) && (y = { ...y, ...(0, a.k)(f.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: v, status: w } = y;
            r = y.data;
            let x = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let e;
              i?.isPlaceholderData && t.placeholderData === l?.placeholderData
                ? ((e = i.data), (x = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#l?.state.data, this.#l)
                      : t.placeholderData),
                void 0 !== e &&
                  ((w = "success"), (r = (0, u.pl)(i?.data, e, t)), (m = !0));
            }
            if (t.select && void 0 !== r && !x)
              if (i && r === o?.data && t.select === this.#c) r = this.#u;
              else
                try {
                  (this.#c = t.select),
                    (r = t.select(r)),
                    (r = (0, u.pl)(i?.data, r, t)),
                    (this.#u = r),
                    (this.#t = null);
                } catch (e) {
                  this.#t = e;
                }
            this.#t &&
              ((g = this.#t), (r = this.#u), (v = Date.now()), (w = "error"));
            let P = "fetching" === y.fetchStatus,
              C = "pending" === w,
              $ = "error" === w,
              I = C && P,
              O = void 0 !== r,
              E = {
                status: w,
                fetchStatus: y.fetchStatus,
                isPending: C,
                isSuccess: "success" === w,
                isError: $,
                isInitialLoading: I,
                isLoading: I,
                data: r,
                dataUpdatedAt: y.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: e.isFetched(),
                isFetchedAfterMount:
                  y.dataUpdateCount > d.dataUpdateCount ||
                  y.errorUpdateCount > d.errorUpdateCount,
                isFetching: P,
                isRefetching: P && !C,
                isLoadingError: $ && !O,
                isPaused: "paused" === y.fetchStatus,
                isPlaceholderData: m,
                isRefetchError: $ && O,
                isStale: b(e, t),
                refetch: this.refetch,
                promise: this.#r,
                isEnabled: !1 !== (0, u.nU)(t.enabled, e),
              };
            if (this.options.experimental_prefetchInRender) {
              let t = void 0 !== E.data,
                r = "error" === E.status && !t,
                s = (e) => {
                  r ? e.reject(E.error) : t && e.resolve(E.data);
                },
                i = () => {
                  s((this.#r = E.promise = (0, c.T)()));
                },
                a = this.#r;
              switch (a.status) {
                case "pending":
                  e.queryHash === n.queryHash && s(a);
                  break;
                case "fulfilled":
                  (r || E.data !== a.value) && i();
                  break;
                case "rejected":
                  (r && E.error === a.reason) || i();
              }
            }
            return E;
          }
          updateResult() {
            let e = this.#i,
              t = this.createResult(this.#n, this.options);
            if (
              ((this.#a = this.#n.state),
              (this.#o = this.options),
              void 0 !== this.#a.data && (this.#l = this.#n),
              (0, u.f8)(t, e))
            )
              return;
            this.#i = t;
            let r = () => {
              if (!e) return !0;
              let { notifyOnChangeProps: t } = this.options,
                r = "function" == typeof t ? t() : t;
              if ("all" === r || (!r && !this.#p.size)) return !0;
              let n = new Set(r ?? this.#p);
              return (
                this.options.throwOnError && n.add("error"),
                Object.keys(this.#i).some(
                  (t) => this.#i[t] !== e[t] && n.has(t)
                )
              );
            };
            this.#C({ listeners: r() });
          }
          #v() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#n) return;
            let t = this.#n;
            (this.#n = e),
              (this.#s = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#y();
          }
          #C(e) {
            i.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#i);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#n, type: "observerResultsUpdated" });
            });
          }
        };
      function h(e, t) {
        return (
          (!1 !== (0, u.nU)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status ||
              !1 !== (0, u.nU)(t.retryOnMount, e))) ||
          (void 0 !== e.state.data && f(e, t, t.refetchOnMount))
        );
      }
      function f(e, t, r) {
        if (
          !1 !== (0, u.nU)(t.enabled, e) &&
          "static" !== (0, u.d2)(t.staleTime, e)
        ) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && b(e, t));
        }
        return !1;
      }
      function p(e, t, r, n) {
        return (
          (e !== t || !1 === (0, u.nU)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          b(e, r)
        );
      }
      function b(e, t) {
        return (
          !1 !== (0, u.nU)(t.enabled, e) &&
          e.isStaleByTime((0, u.d2)(t.staleTime, e))
        );
      }
      var y = r(12115),
        m = r(99776);
      r(95155);
      var g = y.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        v = y.createContext(!1);
      v.Provider;
      var w = (e, t, r) =>
        t.fetchOptimistic(e).catch(() => {
          r.clearReset();
        });
      function x(e, t) {
        return (function (e, t, r) {
          var n, a, o, c;
          let l = y.useContext(v),
            d = y.useContext(g),
            h = (0, m.jE)(r),
            f = h.defaultQueryOptions(e);
          null == (a = h.getDefaultOptions().queries) ||
            null == (n = a._experimental_beforeQuery) ||
            n.call(a, f);
          let p = h.getQueryCache().get(f.queryHash),
            b = !1 !== e.subscribed;
          if (
            ((f._optimisticResults = l
              ? "isRestoring"
              : b
              ? "optimistic"
              : void 0),
            f.suspense)
          ) {
            let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
              t = f.staleTime;
            (f.staleTime =
              "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
              "number" == typeof f.gcTime &&
                (f.gcTime = Math.max(f.gcTime, 1e3));
          }
          let x =
            (null == p ? void 0 : p.state.error) &&
            "function" == typeof f.throwOnError
              ? (0, u.GU)(f.throwOnError, [p.state.error, p])
              : f.throwOnError;
          (f.suspense || f.experimental_prefetchInRender || x) &&
            !d.isReset() &&
            (f.retryOnMount = !1),
            y.useEffect(() => {
              d.clearReset();
            }, [d]);
          let P = !h.getQueryCache().get(f.queryHash),
            [C] = y.useState(() => new t(h, f)),
            $ = C.getOptimisticResult(f),
            I = !l && b;
          if (
            (y.useSyncExternalStore(
              y.useCallback(
                (e) => {
                  let t = I ? C.subscribe(i.jG.batchCalls(e)) : u.lQ;
                  return C.updateResult(), t;
                },
                [C, I]
              ),
              () => C.getCurrentResult(),
              () => C.getCurrentResult()
            ),
            y.useEffect(() => {
              C.setOptions(f);
            }, [f, C]),
            f?.suspense && $.isPending)
          )
            throw w(f, C, d);
          if (
            ((e) => {
              let {
                result: t,
                errorResetBoundary: r,
                throwOnError: n,
                query: s,
                suspense: i,
              } = e;
              return (
                t.isError &&
                !r.isReset() &&
                !t.isFetching &&
                s &&
                ((i && void 0 === t.data) || (0, u.GU)(n, [t.error, s]))
              );
            })({
              result: $,
              errorResetBoundary: d,
              throwOnError: f.throwOnError,
              query: p,
              suspense: f.suspense,
            })
          )
            throw $.error;
          if (
            (null == (c = h.getDefaultOptions().queries) ||
              null == (o = c._experimental_afterQuery) ||
              o.call(c, f, $),
            f.experimental_prefetchInRender &&
              !s.H.isServer() &&
              $.isLoading &&
              $.isFetching &&
              !l)
          ) {
            let e = P ? w(f, C, d) : null == p ? void 0 : p.promise;
            null == e ||
              e.catch(u.lQ).finally(() => {
                C.updateResult();
              });
          }
          return f.notifyOnChangeProps ? $ : C.trackResult($);
        })(e, d, t);
      }
    },
    23222: (e, t, r) => {
      r.d(t, { A: () => i, B: () => s });
      var n = r(97525);
      function s(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new n.d_(e.type);
        return `${e.name}(${i(e.inputs, { includeName: t })})`;
      }
      function i(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${i(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    24250: (e, t, r) => {
      r.d(t, { I: () => s, R: () => n });
      let n = (e) => e,
        s = (e) => e;
    },
    24784: (e, t, r) => {
      r.d(t, { P: () => o });
      var n = r(20390),
        s = r(77608);
      let i = /^0x[a-fA-F0-9]{40}$/,
        a = new n.A(8192);
      function o(e, t) {
        let { strict: r = !0 } = t ?? {},
          n = `${e}.${r}`;
        if (a.has(n)) return a.get(n);
        let o =
          !!i.test(e) && (e.toLowerCase() === e || !r || (0, s.o)(e) === e);
        return a.set(n, o), o;
      }
    },
    26722: (e, t, r) => {
      r.d(t, { e: () => d });
      var n = r(93398),
        s = r(253),
        i = r(2685),
        a = r(46206),
        o = r(11134);
      class c extends o.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var u = r(53098),
        l = r(32255);
      function d(e) {
        let t = {},
          r = e.length;
        for (let n = 0; n < r; n++) {
          let r = e[n];
          if (!(0, u.WL)(r)) continue;
          let s = (0, u.FO)(r);
          if (!s) throw new a.s7({ signature: r, type: "struct" });
          let i = s.properties.split(";"),
            o = [],
            c = i.length;
          for (let e = 0; e < c; e++) {
            let t = i[e].trim();
            if (!t) continue;
            let r = (0, l.Pj)(t, { type: "struct" });
            o.push(r);
          }
          if (!o.length) throw new a.X9({ signature: r });
          t[s.name] = o;
        }
        let o = {},
          d = Object.entries(t),
          f = d.length;
        for (let e = 0; e < f; e++) {
          let [r, a] = d[e];
          o[r] = (function e(t, r, a = new Set()) {
            let o = [],
              u = t.length;
            for (let d = 0; d < u; d++) {
              let u = t[d];
              if (n.wj.test(u.type)) o.push(u);
              else {
                let t = (0, n.Yv)(h, u.type);
                if (!t?.type) throw new i.nx({ abiParameter: u });
                let { array: d, type: f } = t;
                if (f in r) {
                  if (a.has(f)) throw new c({ type: f });
                  o.push({
                    ...u,
                    type: `tuple${d ?? ""}`,
                    components: e(r[f] ?? [], r, new Set([...a, f])),
                  });
                } else if ((0, l._o)(f)) o.push(u);
                else throw new s.zz({ type: f });
              }
            }
            return o;
          })(a, t);
        }
        return o;
      }
      let h = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    27747: (e, t, r) => {
      r.d(t, { B4: () => s, SK: () => i, hX: () => a });
      var n = r(13933);
      class s extends n.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class i extends n.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends n.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    28245: (e, t, r) => {
      r.d(t, { c: () => i });
      var n = r(62023),
        s = r(30598);
      function i(e, t = "wei") {
        return (0, s.J)(e, n.eL[t]);
      }
    },
    29454: (e, t, r) => {
      r.d(t, { EH: () => i, YE: () => o, jF: () => a, rj: () => s });
      var n = r(13933);
      class s extends n.C {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && r.blockCreated && r.blockCreated > e
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class i extends n.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class a extends n.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class o extends n.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      n.C;
    },
    29899: (e, t, r) => {
      r.d(t, { r: () => c });
      var n = r(95089),
        s = r(53473),
        i = r(97152),
        a = r(77608),
        o = r(43159);
      async function c(e, t = {}) {
        let r;
        if (t.connector) {
          let { connector: n } = t;
          if (
            "reconnecting" === e.state.status &&
            !n.getAccounts &&
            !n.getChainId
          )
            throw new o.HF({ connector: n });
          let [s, i] = await Promise.all([n.getAccounts(), n.getChainId()]);
          r = { accounts: s, chainId: i, connector: n };
        } else r = e.state.connections.get(e.state.current);
        if (!r) throw new o.gC();
        let u = t.chainId ?? r.chainId,
          l = await r.connector.getChainId();
        if (l !== r.chainId)
          throw new o.xU({ connectionChainId: r.chainId, connectorChainId: l });
        let d = r.connector;
        if (d.getClient) return d.getClient({ chainId: u });
        let h = (0, i.J)(t.account ?? r.accounts[0]);
        if (
          ((h.address = (0, a.b)(h.address)),
          t.account &&
            !r.accounts.some(
              (e) => e.toLowerCase() === h.address.toLowerCase()
            ))
        )
          throw new o.aj({ address: h.address, connector: d });
        let f = e.chains.find((e) => e.id === u),
          p = await r.connector.getProvider({ chainId: u });
        return (0, n.U)({
          account: h,
          chain: f,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: r = "custom",
                methods: n,
                name: i = "Custom Provider",
                retryDelay: a,
              } = t;
              return ({ retryCount: o }) =>
                (0, s.o)({
                  key: r,
                  methods: n,
                  name: i,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? o,
                  retryDelay: a,
                  type: "custom",
                });
            })(p)({ ...e, retryCount: 0 }),
        });
      }
    },
    30598: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith("-");
        n && (r = r.slice(1));
        let [s, i] = [
          (r = r.padStart(t, "0")).slice(0, r.length - t),
          r.slice(r.length - t),
        ];
        return (
          (i = i.replace(/(0+)$/, "")),
          `${n ? "-" : ""}${s || "0"}${i ? `.${i}` : ""}`
        );
      }
    },
    30931: (e, t, r) => {
      r.d(t, { p: () => l });
      var n = r(40290),
        s = r(41706),
        i = r(97525),
        a = r(88878),
        o = r(23222),
        c = r(1347);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: r, functionName: l } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: r, functionName: n } = e,
              s = t[0];
            if (n) {
              let e = (0, c.iY)({ abi: t, args: r, name: n });
              if (!e) throw new i.Iz(n, { docsPath: u });
              s = e;
            }
            if ("function" !== s.type) throw new i.Iz(void 0, { docsPath: u });
            return { abi: [s], functionName: (0, a.V)((0, o.B)(s)) };
          })(),
          d = r[0],
          h = "inputs" in d && d.inputs ? (0, s.h)(d.inputs, t ?? []) : void 0;
        return (0, n.aP)([l, h ?? "0x"]);
      }
    },
    32255: (e, t, r) => {
      r.d(t, { _o: () => m, Pj: () => b, uT: () => d });
      var n = r(93398),
        s = r(253),
        i = r(2685),
        a = r(46206),
        o = r(11134);
      class c extends o.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let u = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var l = r(53098);
      function d(e, t = {}) {
        if ((0, l.Ji)(e))
          return (function (e, t = {}) {
            let r = (0, l.ej)(e);
            if (!r) throw new a.s7({ signature: e, type: "function" });
            let n = y(r.parameters),
              s = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              s.push(
                b(n[e], { modifiers: l.v7, structs: t, type: "function" })
              );
            let o = [];
            if (r.returns) {
              let e = y(r.returns),
                n = e.length;
              for (let r = 0; r < n; r++)
                o.push(
                  b(e[r], { modifiers: l.v7, structs: t, type: "function" })
                );
            }
            return {
              name: r.name,
              type: "function",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: s,
              outputs: o,
            };
          })(e, t);
        if ((0, l.Rv)(e))
          return (function (e, t = {}) {
            let r = (0, l.iB)(e);
            if (!r) throw new a.s7({ signature: e, type: "event" });
            let n = y(r.parameters),
              s = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              s.push(b(n[e], { modifiers: l.fC, structs: t, type: "event" }));
            return { name: r.name, type: "event", inputs: s };
          })(e, t);
        if ((0, l.pc)(e))
          return (function (e, t = {}) {
            let r = (0, l.kz)(e);
            if (!r) throw new a.s7({ signature: e, type: "error" });
            let n = y(r.parameters),
              s = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              s.push(b(n[e], { structs: t, type: "error" }));
            return { name: r.name, type: "error", inputs: s };
          })(e, t);
        if ((0, l.l9)(e))
          return (function (e, t = {}) {
            let r = (0, l.Yo)(e);
            if (!r) throw new a.s7({ signature: e, type: "constructor" });
            let n = y(r.parameters),
              s = [],
              i = n.length;
            for (let e = 0; e < i; e++)
              s.push(b(n[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: s,
            };
          })(e, t);
        if ((0, l.v8)(e)) {
          var r = e;
          let t = (0, l.If)(r);
          if (!t) throw new a.s7({ signature: r, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, l.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new a.x8({ signature: e });
      }
      let h =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        f =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function b(e, t) {
        var r, a;
        let o,
          c = (function (e, t, r) {
            let n = "";
            if (r)
              for (let e of Object.entries(r)) {
                if (!e) continue;
                let t = "";
                for (let r of e[1])
                  t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
                n += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${n}` : e;
          })(e, t?.type, t?.structs);
        if (u.has(c)) return u.get(c);
        let d = n.wj.test(e),
          v = (0, n.Yv)(d ? f : h, e);
        if (!v) throw new i.dV({ param: e });
        if (
          v.name &&
          ("address" === (r = v.name) ||
            "bool" === r ||
            "function" === r ||
            "string" === r ||
            "tuple" === r ||
            n.BD.test(r) ||
            n.Ge.test(r) ||
            g.test(r))
        )
          throw new i.zd({ param: e, name: v.name });
        let w = v.name ? { name: v.name } : {},
          x = "indexed" === v.modifier ? { indexed: !0 } : {},
          P = t?.structs ?? {},
          C = {};
        if (d) {
          o = "tuple";
          let e = y(v.type),
            t = [],
            r = e.length;
          for (let n = 0; n < r; n++) t.push(b(e[n], { structs: P }));
          C = { components: t };
        } else if (v.type in P) (o = "tuple"), (C = { components: P[v.type] });
        else if (p.test(v.type)) o = `${v.type}256`;
        else if (((o = v.type), t?.type !== "struct" && !m(o)))
          throw new s.UG({ type: o });
        if (v.modifier) {
          if (!t?.modifiers?.has?.(v.modifier))
            throw new i.NO({ param: e, type: t?.type, modifier: v.modifier });
          if (
            l.v7.has(v.modifier) &&
            ((a = o),
            !v.array && "bytes" !== a && "string" !== a && "tuple" !== a)
          )
            throw new i.Pj({ param: e, type: t?.type, modifier: v.modifier });
        }
        let $ = { type: `${o}${v.array ?? ""}`, ...w, ...x, ...C };
        return u.set(c, $), $;
      }
      function y(e, t = [], r = "", n = 0) {
        let s = e.trim().length;
        for (let i = 0; i < s; i++) {
          let s = e[i],
            a = e.slice(i + 1);
          switch (s) {
            case ",":
              return 0 === n ? y(a, [...t, r.trim()]) : y(a, t, `${r}${s}`, n);
            case "(":
              return y(a, t, `${r}${s}`, n + 1);
            case ")":
              return y(a, t, `${r}${s}`, n - 1);
            default:
              return y(a, t, `${r}${s}`, n);
          }
        }
        if ("" === r) return t;
        if (0 !== n) throw new c({ current: r, depth: n });
        return t.push(r.trim()), t;
      }
      function m(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          n.BD.test(e) ||
          n.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    32395: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    32733: (e, t, r) => {
      r.d(t, { e: () => o });
      var n = r(97525),
        s = r(80897),
        i = r(1347);
      let a = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: r, functionName: o, data: c } = e,
          u = t[0];
        if (o) {
          let e = (0, i.iY)({ abi: t, args: r, name: o });
          if (!e) throw new n.Iz(o, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new n.Iz(void 0, { docsPath: a });
        if (!u.outputs) throw new n.MR(u.name, { docsPath: a });
        let l = (0, s.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    32915: (e, t, r) => {
      r.d(t, { RR: () => o, pw: () => a, sM: () => i });
      var n = r(42503),
        s = r(13933);
      class i extends s.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends s.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class o extends s.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    33704: (e, t, r) => {
      r.d(t, { h: () => n });
      let n = r(72997).k;
    },
    34049: (e, t, r) => {
      r.d(t, {
        Cp: () => b,
        EN: () => p,
        F$: () => f,
        GU: () => E,
        MK: () => d,
        S$: () => s,
        ZM: () => O,
        ZZ: () => $,
        Zw: () => a,
        d2: () => u,
        f8: () => m,
        gn: () => o,
        hT: () => I,
        j3: () => c,
        lQ: () => i,
        nJ: () => h,
        nU: () => l,
        ox: () => M,
        pl: () => P,
        y9: () => C,
        yy: () => x,
      });
      var n = r(37126),
        s = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function a(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function o(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function c(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: s,
          predicate: i,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (n) {
            if (t.queryHash !== f(a, t.options)) return !1;
          } else if (!b(t.queryKey, a)) return !1;
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof o || t.isStale() === o) &&
          (!s || s === t.state.fetchStatus) &&
          (!i || !!i(t))
        );
      }
      function h(e, t) {
        let { exact: r, status: n, predicate: s, mutationKey: i } = e;
        if (i) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (p(t.options.mutationKey) !== p(i)) return !1;
          } else if (!b(t.options.mutationKey, i)) return !1;
        }
        return (!n || t.state.status === n) && (!s || !!s(t));
      }
      function f(e, t) {
        return (t?.queryKeyHashFn || p)(e);
      }
      function p(e) {
        return JSON.stringify(e, (e, t) =>
          v(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function b(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((r) => b(e[r], t[r])))
        );
      }
      var y = Object.prototype.hasOwnProperty;
      function m(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function g(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function v(e) {
        if (!w(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!w(r) &&
          !!r.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function w(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function x(e) {
        return new Promise((t) => {
          n.zs.setTimeout(t, e);
        });
      }
      function P(e, t, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? (function e(t, r, n = 0) {
              if (t === r) return t;
              if (n > 500) return r;
              let s = g(t) && g(r);
              if (!s && !(v(t) && v(r))) return r;
              let i = (s ? t : Object.keys(t)).length,
                a = s ? r : Object.keys(r),
                o = a.length,
                c = s ? Array(o) : {},
                u = 0;
              for (let l = 0; l < o; l++) {
                let o = s ? l : a[l],
                  d = t[o],
                  h = r[o];
                if (d === h) {
                  (c[o] = d), (s ? l < i : y.call(t, o)) && u++;
                  continue;
                }
                if (
                  null === d ||
                  null === h ||
                  "object" != typeof d ||
                  "object" != typeof h
                ) {
                  c[o] = h;
                  continue;
                }
                let f = e(d, h, n + 1);
                (c[o] = f), f === d && u++;
              }
              return i === o && u === i ? t : c;
            })(e, t)
          : t;
      }
      function C(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function $(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var I = Symbol();
      function O(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== I
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function E(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function M(e, t, r) {
        let n,
          s = !1;
        return (
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (
              (n ??= t()),
              s ||
                ((s = !0),
                n.aborted ? r() : n.addEventListener("abort", r, { once: !0 })),
              n
            ),
          }),
          e
        );
      }
    },
    34561: (e, t, r) => {
      r.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => h,
        nj: () => o,
      });
      var n = r(35276),
        s = r(72427),
        i = r(11914);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function o(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? h(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, i.Sl)(r, { size: t.size }), (0, s.eV)(r, { size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += a[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size
          ? ((0, i.Sl)(n, { size: t.size }),
            (0, s.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let r,
          { signed: i, size: a } = t,
          o = BigInt(e);
        a
          ? (r = i
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof r && i ? -r - 1n : 0;
        if ((r && o > r) || o < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new n.Ty({
            max: r ? `${r}${t}` : void 0,
            min: `${c}${t}`,
            signed: i,
            size: a,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(i && o < 0
          ? (1n << BigInt(8 * a)) + BigInt(o)
          : o
        ).toString(16)}`;
        return a ? (0, s.eV)(u, { size: a }) : u;
      }
      let d = new TextEncoder();
      function h(e, t = {}) {
        return u(d.encode(e), t);
      }
    },
    34897: (e, t, r) => {
      r.d(t, { Q: () => v });
      var n = r(97152),
        s = r(13933),
        i = r(77457),
        a = r(34561),
        o = r(28245),
        c = r(42503),
        u = r(50879);
      class l extends s.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: n,
            data: s,
            gas: i,
            gasPrice: a,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, u.aO)({
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, o.c)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: s,
                gas: i,
                gasPrice: void 0 !== a && `${(0, c.Q)(a)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, c.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var d = r(88737),
        h = r(61829),
        f = r(44332),
        p = r(74750),
        b = r(4274),
        y = r(5691),
        m = r(21920),
        g = r(90707);
      async function v(e, t) {
        let { account: r = e.account } = t,
          o = r ? (0, n.J)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              blockNumber: d,
              blockTag: h,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: P,
              maxFeePerGas: C,
              maxPriorityFeePerGas: $,
              nonce: I,
              value: O,
              stateOverride: E,
              ...M
            } = await (0, m.ft)(e, {
              ...t,
              parameters:
                o?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            R = (d ? (0, a.cK)(d) : void 0) || h,
            T = (0, b.yH)(E),
            A = await (async () =>
              M.to
                ? M.to
                : n && n.length > 0
                ? await (0, i.g)({ authorization: n[0] }).catch(() => {
                    throw new s.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, y.c)(t);
          let B = e.chain?.formatters?.transactionRequest?.format,
            F = (B || p.Bv)({
              ...(0, f.o)(M, { format: B }),
              from: o?.address,
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: P,
              maxFeePerGas: C,
              maxPriorityFeePerGas: $,
              nonce: I,
              to: A,
              value: O,
            });
          function c(t) {
            let { block: r, request: n, rpcStateOverride: s } = t;
            return e.request({
              method: "eth_estimateGas",
              params: s ? [n, r ?? "latest", s] : r ? [n, r] : [n],
            });
          }
          let S = BigInt(
            await c({ block: R, request: F, rpcStateOverride: T })
          );
          if (n) {
            let t = await (0, g.r)(e, { address: F.from }),
              r = await Promise.all(
                n.map(async (e) => {
                  let { contractAddress: r } = e,
                    n = await c({
                      block: R,
                      request: {
                        authorizationList: void 0,
                        data: v,
                        from: o?.address,
                        to: r,
                        value: (0, a.cK)(t),
                      },
                      rpcStateOverride: T,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            S += r.reduce((e, t) => e + t, 0n);
          }
          return S;
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            return new l(
              (() => {
                let t = (0, h.l)(e, r);
                return t instanceof d.RM ? e : t;
              })(),
              { docsPath: t, ...r }
            );
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    35276: (e, t, r) => {
      r.d(t, { H2: () => a, Ty: () => s, u: () => o, xO: () => i });
      var n = r(13933);
      class s extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class i extends n.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends n.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      n.C;
      class o extends n.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    35326: (e, t, r) => {
      r.d(t, {
        zX: () => m,
        bG: () => g,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => P,
      });
      var n = r(97152),
        s = r(44964),
        i = r(41343),
        a = r(23222),
        o = r(59350);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: r = !0,
        includeName: n = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${r ? e.name : ""}(${e.inputs
            .map(
              (e, r) =>
                `${n && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[r] ? (0, o.A)(t[r]) : t[r]
                }`
            )
            .join(", ")})`;
      }
      var u = r(1347),
        l = r(28245),
        d = r(42503),
        h = r(97525),
        f = r(13933),
        p = r(35674),
        b = r(50879),
        y = r(24250);
      class m extends f.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: s,
            data: i,
            gas: a,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: y,
            stateOverride: m,
          }
        ) {
          let g = t ? (0, n.J)(t) : void 0,
            v = (0, b.aO)({
              from: g?.address,
              to: f,
              value:
                void 0 !== y &&
                `${(0, l.c)(y)} ${s?.nativeCurrency?.symbol || "ETH"}`,
              data: i,
              gas: a,
              gasPrice: void 0 !== o && `${(0, d.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: h,
            });
          m &&
            (v += `
${(0, p.uj)(m)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends f.C {
        constructor(
          e,
          {
            abi: t,
            args: r,
            contractAddress: n,
            docsPath: s,
            functionName: i,
            sender: o,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: r, name: i }),
            d = l
              ? c({
                  abiItem: l,
                  args: r,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = l ? (0, a.B)(l, { includeName: !0 }) : void 0,
            f = (0, b.aO)({
              address: n && (0, y.R)(n),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(i?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${i}".`,
            {
              cause: e,
              docsPath: s,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
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
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = r),
            (this.cause = e),
            (this.contractAddress = n),
            (this.functionName = i),
            (this.sender = o);
        }
      }
      class v extends f.C {
        constructor({ abi: e, data: t, functionName: r, message: n }) {
          let o, u, l, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: r,
                errorName: n,
                args: o,
              } = (f = (0, i.W)({ abi: e, data: t }));
              if ("Error" === n) l = o[0];
              else if ("Panic" === n) {
                let [e] = o;
                l = s.fD[e];
              } else {
                let e = r ? (0, a.B)(r, { includeName: !0 }) : void 0,
                  t =
                    r && o
                      ? c({
                          abiItem: r,
                          args: o,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(n?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              o = e;
            }
          else n && (l = n);
          o instanceof h.Wq &&
            ((d = o.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${r}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${r}" reverted.`,
              {
                cause: o,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.raw = t),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends f.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends f.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class P extends f.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35471: (e, t, r) => {
      r.d(t, { T: () => s });
      var n = r(11914);
      async function s(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ME)(t);
      }
    },
    35674: (e, t, r) => {
      r.d(t, { Hi: () => s, ft: () => i, uj: () => o });
      var n = r(13933);
      class s extends n.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class i extends n.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...r }) => {
            let n = `${e}    ${t}:
`;
            return (
              r.nonce &&
                (n += `      nonce: ${r.nonce}
`),
              r.balance &&
                (n += `      balance: ${r.balance}
`),
              r.code &&
                (n += `      code: ${r.code}
`),
              r.state && ((n += "      state:\n"), (n += a(r.state))),
              r.stateDiff &&
                ((n += "      stateDiff:\n"), (n += a(r.stateDiff))),
              n
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    37126: (e, t, r) => {
      r.d(t, { Zq: () => i, zs: () => s });
      var n = {
          setTimeout: (e, t) => setTimeout(e, t),
          clearTimeout: (e) => clearTimeout(e),
          setInterval: (e, t) => setInterval(e, t),
          clearInterval: (e) => clearInterval(e),
        },
        s = new (class {
          #$ = n;
          #I = !1;
          setTimeoutProvider(e) {
            this.#$ = e;
          }
          setTimeout(e, t) {
            return this.#$.setTimeout(e, t);
          }
          clearTimeout(e) {
            this.#$.clearTimeout(e);
          }
          setInterval(e, t) {
            return this.#$.setInterval(e, t);
          }
          clearInterval(e) {
            this.#$.clearInterval(e);
          }
        })();
      function i(e) {
        setTimeout(e, 0);
      }
    },
    37407: (e, t, r) => {
      r.d(t, { b: () => s });
      var n = r(78140);
      function s(
        e,
        { delay: t = 100, retryCount: r = 2, shouldRetry: i = () => !0 } = {}
      ) {
        return new Promise((s, a) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let r = "function" == typeof t ? t({ count: c, error: e }) : t;
              r && (await (0, n.u)(r)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              s(t);
            } catch (e) {
              if (c < r && (await i({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          o();
        });
      }
    },
    38445: (e, t, r) => {
      r.d(t, { Q: () => n });
      var n = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    38559: (e, t, r) => {
      r.d(t, { $: () => o, s: () => a });
      var n = r(74268),
        s = r(69781),
        i = r(93049),
        a = class extends s.k {
          #e;
          #O;
          #E;
          #M;
          constructor(e) {
            super(),
              (this.#e = e.client),
              (this.mutationId = e.mutationId),
              (this.#E = e.mutationCache),
              (this.#O = []),
              (this.state = e.state || o()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#O.includes(e) ||
              (this.#O.push(e),
              this.clearGcTimeout(),
              this.#E.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#O = this.#O.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#E.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#O.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#E.remove(this));
          }
          continue() {
            return this.#M?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
                this.#R({ type: "continue" });
              },
              r = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#M = (0, i.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e, r)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#R({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#R({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#E.canRun(this),
            });
            let n = "pending" === this.state.status,
              s = !this.#M.canStart();
            try {
              if (n) t();
              else {
                this.#R({ type: "pending", variables: e, isPaused: s }),
                  this.#E.config.onMutate &&
                    (await this.#E.config.onMutate(e, this, r));
                let t = await this.options.onMutate?.(e, r);
                t !== this.state.context &&
                  this.#R({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: s,
                  });
              }
              let i = await this.#M.start();
              return (
                await this.#E.config.onSuccess?.(
                  i,
                  e,
                  this.state.context,
                  this,
                  r
                ),
                await this.options.onSuccess?.(i, e, this.state.context, r),
                await this.#E.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r
                ),
                await this.options.onSettled?.(
                  i,
                  null,
                  e,
                  this.state.context,
                  r
                ),
                this.#R({ type: "success", data: i }),
                i
              );
            } catch (t) {
              try {
                await this.#E.config.onError?.(
                  t,
                  e,
                  this.state.context,
                  this,
                  r
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onError?.(t, e, this.state.context, r);
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.#E.config.onSettled?.(
                  void 0,
                  t,
                  this.state.variables,
                  this.state.context,
                  this,
                  r
                );
              } catch (e) {
                Promise.reject(e);
              }
              try {
                await this.options.onSettled?.(
                  void 0,
                  t,
                  e,
                  this.state.context,
                  r
                );
              } catch (e) {
                Promise.reject(e);
              }
              throw (this.#R({ type: "error", error: t }), t);
            } finally {
              this.#E.runNext(this);
            }
          }
          #R(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              n.jG.batch(() => {
                this.#O.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#E.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    39012: (e, t, r) => {
      r.d(t, { T: () => $ });
      var n = r(53098),
        s = r(26722),
        i = r(32255);
      function a(e) {
        let t = (0, s.e)(e),
          r = [],
          a = e.length;
        for (let s = 0; s < a; s++) {
          let a = e[s];
          (0, n.WL)(a) || r.push((0, i.uT)(a, t));
        }
        return r;
      }
      var o = r(97152),
        c = r(4486),
        u = r(54560),
        l = r(13933),
        d = r(29454),
        h = r(35326),
        f = r(32733),
        p = r(6867),
        b = r(30931),
        y = r(71552),
        m = r(34561),
        g = r(96565),
        v = r(44332),
        w = r(74750),
        x = r(67550),
        P = r(4274),
        C = r(5691);
      async function $(e, t) {
        let {
            account: n = e.account,
            batch: s = !!e.batch?.multicall,
            blockNumber: i,
            blockTag: c = "latest",
            accessList: f,
            blobs: b,
            code: y,
            data: x,
            factory: $,
            factoryData: O,
            gas: E,
            gasPrice: M,
            maxFeePerBlobGas: R,
            maxFeePerGas: T,
            maxPriorityFeePerGas: A,
            nonce: B,
            to: F,
            value: S,
            stateOverride: j,
            ...k
          } = t,
          U = n ? (0, o.J)(n) : void 0;
        if (y && ($ || O))
          throw new l.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (y && F)
          throw new l.C("Cannot provide both `code` & `to` as parameters.");
        let z = y && x,
          G = $ && O && F && x,
          N = z || G,
          L = z
            ? (function (e) {
                let { code: t, data: r } = e;
                return (0, p.m)({
                  abi: a(["constructor(bytes, bytes)"]),
                  bytecode: u.LX,
                  args: [t, r],
                });
              })({ code: y, data: x })
            : G
            ? (function (e) {
                let { data: t, factory: r, factoryData: n, to: s } = e;
                return (0, p.m)({
                  abi: a(["constructor(address, bytes, address, bytes)"]),
                  bytecode: u.WN,
                  args: [s, t, r, n],
                });
              })({ data: x, factory: $, factoryData: O, to: F })
            : x;
        try {
          (0, C.c)(t);
          let r = (i ? (0, m.cK)(i) : void 0) || c,
            n = (0, P.yH)(j),
            a = e.chain?.formatters?.transactionRequest?.format,
            o = (a || w.Bv)({
              ...(0, v.o)(k, { format: a }),
              from: U?.address,
              accessList: f,
              blobs: b,
              data: L,
              gas: E,
              gasPrice: M,
              maxFeePerBlobGas: R,
              maxFeePerGas: T,
              maxPriorityFeePerGas: A,
              nonce: B,
              to: N ? void 0 : F,
              value: S,
            });
          if (
            s &&
            (function ({ request: e }) {
              let { data: t, to: r, ...n } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!r &&
                !(Object.values(n).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: o }) &&
            !n
          )
            try {
              return await I(e, { ...o, blockNumber: i, blockTag: c });
            } catch (e) {
              if (!(e instanceof d.YE) && !(e instanceof d.rj)) throw e;
            }
          let u = await e.request({
            method: "eth_call",
            params: n ? [o, r, n] : [o, r],
          });
          if ("0x" === u) return { data: void 0 };
          return { data: u };
        } catch (a) {
          let n = (function (e) {
              if (!(e instanceof l.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(a),
            { offchainLookup: s, offchainLookupSignature: i } = await r
              .e(6514)
              .then(r.bind(r, 16514));
          if (!1 !== e.ccipRead && n?.slice(0, 10) === i && F)
            return { data: await s(e, { data: n, to: F }) };
          if (N && n?.slice(0, 10) === "0x101bb98d")
            throw new h.Po({ factory: $ });
          throw (0, g.d)(a, { ...t, account: U, chain: e.chain });
        }
      }
      async function I(e, t) {
        let { batchSize: r = 1024, wait: n = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: s,
            blockTag: i = "latest",
            data: a,
            multicallAddress: o,
            to: u,
          } = t,
          l = o;
        if (!l) {
          if (!e.chain) throw new d.YE();
          l = (0, y.M)({
            blockNumber: s,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let p = (s ? (0, m.cK)(s) : void 0) || i,
          { schedule: g } = (0, x.u)({
            id: `${e.uid}.${p}`,
            wait: n,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
            fn: async (t) => {
              let r = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                n = (0, b.p)({
                  abi: c.v2,
                  args: [r],
                  functionName: "aggregate3",
                }),
                s = await e.request({
                  method: "eth_call",
                  params: [{ data: n, to: l }, p],
                });
              return (0, f.e)({
                abi: c.v2,
                args: [r],
                functionName: "aggregate3",
                data: s || "0x",
              });
            },
          }),
          [{ returnData: v, success: w }] = await g({ data: a, to: u });
        if (!w) throw new h.$S({ data: v });
        return "0x" === v ? { data: void 0 } : { data: v };
      }
    },
    40290: (e, t, r) => {
      function n(e) {
        return "string" == typeof e[0]
          ? s(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function s(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      r.d(t, { aP: () => s, xW: () => n });
    },
    41343: (e, t, r) => {
      r.d(t, { W: () => u });
      var n = r(44964),
        s = r(97525),
        i = r(44352),
        a = r(88878),
        o = r(80897),
        c = r(23222);
      function u(e) {
        let { abi: t, data: r } = e,
          u = (0, i.di)(r, 0, 4);
        if ("0x" === u) throw new s.O();
        let l = [...(t || []), n.Mc, n.J9].find(
          (e) => "error" === e.type && u === (0, a.V)((0, c.B)(e))
        );
        if (!l)
          throw new s.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, o.n)(l.inputs, (0, i.di)(r, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    41706: (e, t, r) => {
      r.d(t, { h: () => p, k: () => y });
      var n = r(97525),
        s = r(76115),
        i = r(13933),
        a = r(35276),
        o = r(24784),
        c = r(40290),
        u = r(72427),
        l = r(16871),
        d = r(44352),
        h = r(34561),
        f = r(1588);
      function p(e, t) {
        if (e.length !== t.length)
          throw new n.YE({ expectedLength: e.length, givenLength: t.length });
        let r = b(
          (function ({ params: e, values: t }) {
            let r = [];
            for (let p = 0; p < e.length; p++)
              r.push(
                (function e({ param: t, value: r }) {
                  let p = y(t.type);
                  if (p) {
                    let [s, i] = p;
                    return (function (t, { length: r, param: s }) {
                      let i = null === r;
                      if (!Array.isArray(t)) throw new n.dm(t);
                      if (!i && t.length !== r)
                        throw new n.Nc({
                          expectedLength: r,
                          givenLength: t.length,
                          type: `${s.type}[${r}]`,
                        });
                      let a = !1,
                        o = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({ param: s, value: t[r] });
                        n.dynamic && (a = !0), o.push(n);
                      }
                      if (i || a) {
                        let e = b(o);
                        if (i) {
                          let t = (0, h.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(r, { length: s, param: { ...t, type: i } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: r }) {
                      let n = !1,
                        s = [];
                      for (let i = 0; i < r.components.length; i++) {
                        let a = r.components[i],
                          o = Array.isArray(t) ? i : a.name,
                          c = e({ param: a, value: t[o] });
                        s.push(c), c.dynamic && (n = !0);
                      }
                      return {
                        dynamic: n,
                        encoded: n
                          ? b(s)
                          : (0, c.xW)(s.map(({ encoded: e }) => e)),
                      };
                    })(r, { param: t });
                  if ("address" === t.type) {
                    var m = r;
                    if (!(0, o.P)(m)) throw new s.M({ address: m });
                    return { dynamic: !1, encoded: (0, u.db)(m.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = r;
                    if ("boolean" != typeof g)
                      throw new i.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, u.db)((0, h.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , n = "256"] = f.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: r = 256 }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          s = t ? -n - 1n : 0n;
                        if (e > n || e < s)
                          throw new a.Ty({
                            max: n.toString(),
                            min: s.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, h.cK)(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(n) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, r] = t.type.split("bytes"),
                        s = (0, l.E)(e);
                      if (!r) {
                        let t = e;
                        return (
                          s % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, h.cK)(s, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (s !== Number.parseInt(r))
                        throw new n.gH({
                          expectedSize: Number.parseInt(r),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(r, { param: t });
                  if ("string" === t.type) {
                    var v = r;
                    let e = (0, h.i3)(v),
                      t = Math.ceil((0, l.E)(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(
                        (0, u.db)((0, d.di)(e, 32 * r, (r + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, u.db)((0, h.cK)((0, l.E)(e), { size: 32 })),
                        ...n,
                      ]),
                    };
                  }
                  throw new n.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return r;
          })({ params: e, values: t })
        );
        return 0 === r.length ? "0x" : r;
      }
      function b(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: s } = e[r];
          n ? (t += 32) : (t += (0, l.E)(s));
        }
        let r = [],
          n = [],
          s = 0;
        for (let i = 0; i < e.length; i++) {
          let { dynamic: a, encoded: o } = e[i];
          a
            ? (r.push((0, h.cK)(t + s, { size: 32 })),
              n.push(o),
              (s += (0, l.E)(o)))
            : r.push(o);
        }
        return (0, c.xW)([...r, ...n]);
      }
      function y(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    42438: (e, t, r) => {
      r.d(t, { B: () => n });
      function n(e, { dir: t = "left" } = {}) {
        let r = "string" == typeof e ? e.replace("0x", "") : e,
          s = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === t ? e : r.length - e - 1].toString()) s++;
          else break;
        return ((r = "left" === t ? r.slice(s) : r.slice(0, r.length - s)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = `${r}0`),
            `0x${r.length % 2 == 1 ? `0${r}` : r}`)
          : r;
      }
    },
    42503: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(62023),
        s = r(30598);
      function i(e, t = "wei") {
        return (0, s.J)(e, n.sz[t]);
      }
    },
    43159: (e, t, r) => {
      r.d(t, {
        HF: () => u,
        aj: () => o,
        gC: () => a,
        nM: () => i,
        nk: () => s,
        xU: () => c,
      });
      var n = r(28698);
      class s extends n.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class i extends n.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends n.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      n.C;
      class o extends n.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends n.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class u extends n.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    44332: (e, t, r) => {
      r.d(t, { o: () => n });
      function n(e, { format: t }) {
        if (!t) return {};
        let r = {};
        return (
          !(function t(n) {
            for (let s of Object.keys(n))
              s in e && (r[s] = e[s]),
                n[s] &&
                  "object" == typeof n[s] &&
                  !Array.isArray(n[s]) &&
                  t(n[s]);
          })(t(e || {})),
          r
        );
      }
    },
    44352: (e, t, r) => {
      r.d(t, { A1: () => u, di: () => a, iN: () => l });
      var n = r(66969),
        s = r(60587),
        i = r(16871);
      function a(e, t, r, { strict: n } = {}) {
        return (0, s.q)(e, { strict: !1 })
          ? l(e, t, r, { strict: n })
          : u(e, t, r, { strict: n });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, i.E)(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: (0, i.E)(e) });
      }
      function c(e, t, r) {
        if (
          "number" == typeof t &&
          "number" == typeof r &&
          (0, i.E)(e) !== r - t
        )
          throw new n.ii({ offset: r, position: "end", size: (0, i.E)(e) });
      }
      function u(e, t, r, { strict: n } = {}) {
        o(e, t);
        let s = e.slice(t, r);
        return n && c(s, t, r), s;
      }
      function l(e, t, r, { strict: n } = {}) {
        o(e, t);
        let s = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && c(s, t, r), s;
      }
    },
    44964: (e, t, r) => {
      r.d(t, { J9: () => i, Mc: () => s, fD: () => n });
      let n = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        s = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        i = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    46206: (e, t, r) => {
      r.d(t, { X9: () => a, s7: () => s, x8: () => i });
      var n = r(11134);
      class s extends n.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class i extends n.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class a extends n.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    47575: (e, t, r) => {
      function n(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!s(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!s(r) && !!r.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        let {
          _defaulted: t,
          behavior: r,
          gcTime: n,
          initialData: s,
          initialDataUpdatedAt: i,
          maxPages: a,
          meta: o,
          networkMode: c,
          queryFn: u,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: h,
          retry: f,
          retryDelay: p,
          structuralSharing: b,
          getPreviousPageParam: y,
          getNextPageParam: m,
          initialPageParam: g,
          _optimisticResults: v,
          enabled: w,
          notifyOnChangeProps: x,
          placeholderData: P,
          refetchInterval: C,
          refetchIntervalInBackground: $,
          refetchOnMount: I,
          refetchOnReconnect: O,
          refetchOnWindowFocus: E,
          retryOnMount: M,
          select: R,
          staleTime: T,
          suspense: A,
          throwOnError: B,
          config: F,
          connector: S,
          query: j,
          ...k
        } = e;
        return k;
      }
      r.d(t, { Zi: () => n, xO: () => i });
    },
    50879: (e, t, r) => {
      r.d(t, {
        $s: () => u,
        Kc: () => d,
        Kz: () => l,
        Vg: () => c,
        WA: () => h,
        aO: () => a,
        n3: () => o,
      });
      var n = r(28245),
        s = r(42503),
        i = r(13933);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
      }
      class o extends i.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      i.C;
      class c extends i.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      i.C, i.C, i.C;
      class u extends i.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: i,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: i && `${i?.name} (id: ${i?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, n.c)(p)} ${i?.nativeCurrency?.symbol || "ETH"}`,
                data: o,
                gas: c,
                gasPrice: void 0 !== u && `${(0, s.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, s.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, s.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class l extends i.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: r,
          hash: n,
          index: s,
        }) {
          let i = "Transaction";
          r &&
            void 0 !== s &&
            (i = `Transaction at block time "${r}" at index "${s}"`),
            e &&
              void 0 !== s &&
              (i = `Transaction at block hash "${e}" at index "${s}"`),
            t &&
              void 0 !== s &&
              (i = `Transaction at block number "${t}" at index "${s}"`),
            n && (i = `Transaction with hash "${n}"`),
            super(`${i} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends i.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class h extends i.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    52497: (e, t, r) => {
      r.d(t, { n: () => p });
      var n = r(86186),
        s = r(50879),
        i = r(72757),
        a = r(87639),
        o = r(98722),
        c = r(37407),
        u = r(59350),
        l = r(60186),
        d = r(83759),
        h = r(56996),
        f = r(5766);
      async function p(
        e,
        {
          confirmations: t = 1,
          hash: r,
          onReplaced: p,
          pollingInterval: b = e.pollingInterval,
          retryCount: y = 6,
          retryDelay: m = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g = 18e4,
        }
      ) {
        let v,
          w,
          x,
          P = (0, u.A)(["waitForTransactionReceipt", e.uid, r]),
          C = !1,
          { promise: $, resolve: I, reject: O } = (0, o.Y)(),
          E = g ? setTimeout(() => O(new s.WA({ hash: r })), g) : void 0,
          M = (0, a.lB)(P, { onReplaced: p, resolve: I, reject: O }, (a) => {
            let o = (0, i.T)(
              e,
              f.q,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: b,
              async onBlockNumber(u) {
                let f = (e) => {
                    clearTimeout(E), o(), e(), M();
                  },
                  p = u;
                if (!C)
                  try {
                    if (x) {
                      if (
                        t > 1 &&
                        (!x.blockNumber || p - x.blockNumber + 1n < t)
                      )
                        return;
                      f(() => a.resolve(x));
                      return;
                    }
                    if (
                      (v ||
                        ((C = !0),
                        await (0, c.b)(
                          async () => {
                            (v = await (0, i.T)(
                              e,
                              d.x,
                              "getTransaction"
                            )({ hash: r })).blockNumber && (p = v.blockNumber);
                          },
                          { delay: m, retryCount: y }
                        ),
                        (C = !1)),
                      (x = await (0, i.T)(
                        e,
                        h.h,
                        "getTransactionReceipt"
                      )({ hash: r })),
                      t > 1 && (!x.blockNumber || p - x.blockNumber + 1n < t))
                    )
                      return;
                    f(() => a.resolve(x));
                  } catch (r) {
                    if (r instanceof s.Kz || r instanceof s.Kc) {
                      if (!v) {
                        C = !1;
                        return;
                      }
                      try {
                        (w = v), (C = !0);
                        let r = await (0, c.b)(
                          () =>
                            (0, i.T)(
                              e,
                              l.g,
                              "getBlock"
                            )({ blockNumber: p, includeTransactions: !0 }),
                          {
                            delay: m,
                            retryCount: y,
                            shouldRetry: ({ error: e }) => e instanceof n.l,
                          }
                        );
                        C = !1;
                        let s = r.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === w.from && t === w.nonce
                        );
                        if (
                          !s ||
                          ((x = await (0, i.T)(
                            e,
                            h.h,
                            "getTransactionReceipt"
                          )({ hash: s.hash })),
                          t > 1 &&
                            (!x.blockNumber || p - x.blockNumber + 1n < t))
                        )
                          return;
                        let o = "replaced";
                        s.to === w.to &&
                        s.value === w.value &&
                        s.input === w.input
                          ? (o = "repriced")
                          : s.from === s.to &&
                            0n === s.value &&
                            (o = "cancelled"),
                          f(() => {
                            a.onReplaced?.({
                              reason: o,
                              replacedTransaction: w,
                              transaction: s,
                              transactionReceipt: x,
                            }),
                              a.resolve(x);
                          });
                      } catch (e) {
                        f(() => a.reject(e));
                      }
                    } else f(() => a.reject(r));
                  }
              },
            });
          });
        return $;
      }
    },
    52623: (e, t, r) => {
      r.d(t, { e: () => n });
      function n(e, { args: t, eventName: r } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(r ? { args: t, eventName: r } : {}),
        };
      }
    },
    53098: (e, t, r) => {
      r.d(t, {
        FO: () => b,
        If: () => x,
        Ji: () => d,
        Rv: () => c,
        WL: () => p,
        Yo: () => g,
        ej: () => h,
        fC: () => $,
        iB: () => u,
        kz: () => a,
        l9: () => m,
        pc: () => i,
        sP: () => C,
        v7: () => I,
        v8: () => w,
      });
      var n = r(93398);
      let s = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function i(e) {
        return s.test(e);
      }
      function a(e) {
        return (0, n.Yv)(s, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return o.test(e);
      }
      function u(e) {
        return (0, n.Yv)(o, e);
      }
      let l =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return l.test(e);
      }
      function h(e) {
        return (0, n.Yv)(l, e);
      }
      let f =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return f.test(e);
      }
      function b(e) {
        return (0, n.Yv)(f, e);
      }
      let y =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function m(e) {
        return y.test(e);
      }
      function g(e) {
        return (0, n.Yv)(y, e);
      }
      let v = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function w(e) {
        return v.test(e);
      }
      function x(e) {
        return (0, n.Yv)(v, e);
      }
      let P = /^receive\(\) external payable$/;
      function C(e) {
        return P.test(e);
      }
      let $ = new Set(["indexed"]),
        I = new Set(["calldata", "memory", "storage"]);
    },
    53473: (e, t, r) => {
      r.d(t, { o: () => d });
      var n = r(13933),
        s = r(4058),
        i = r(73168),
        a = r(34561);
      let o = new (r(20390).A)(8192);
      var c = r(37407),
        u = r(59350),
        l = r(95789);
      function d(
        {
          key: e,
          methods: t,
          name: r,
          request: d,
          retryCount: h = 3,
          retryDelay: f = 150,
          timeout: p,
          type: b,
        },
        y
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: r,
            request: d,
            retryCount: h,
            retryDelay: f,
            timeout: p,
            type: b,
          },
          request: (function (e, t = {}) {
            return async (r, l = {}) => {
              let {
                  dedupe: d = !1,
                  methods: h,
                  retryDelay: f = 150,
                  retryCount: p = 3,
                  uid: b,
                } = { ...t, ...l },
                { method: y } = r;
              if (
                h?.exclude?.includes(y) ||
                (h?.include && !h.include.includes(y))
              )
                throw new i.ab(Error("method not supported"), { method: y });
              let m = d ? (0, a.i3)(`${b}.${(0, u.A)(r)}`) : void 0;
              return (function (e, { enabled: t = !0, id: r }) {
                if (!t || !r) return e();
                if (o.get(r)) return o.get(r);
                let n = e().finally(() => o.delete(r));
                return o.set(r, n), n;
              })(
                () =>
                  (0, c.b)(
                    async () => {
                      try {
                        return await e(r);
                      } catch (e) {
                        switch (e.code) {
                          case i.XU.code:
                            throw new i.XU(e);
                          case i.CL.code:
                            throw new i.CL(e);
                          case i.Gi.code:
                            throw new i.Gi(e, { method: r.method });
                          case i.D5.code:
                            throw new i.D5(e);
                          case i.bq.code:
                            throw new i.bq(e);
                          case i.Di.code:
                            throw new i.Di(e);
                          case i.hA.code:
                            throw new i.hA(e);
                          case i.qZ.code:
                            throw new i.qZ(e);
                          case i.YW.code:
                            throw new i.YW(e);
                          case i.ab.code:
                            throw new i.ab(e, { method: r.method });
                          case i.s0.code:
                            throw new i.s0(e);
                          case i.xQ.code:
                            throw new i.xQ(e);
                          case i.vx.code:
                            throw new i.vx(e);
                          case i.sV.code:
                            throw new i.sV(e);
                          case i.Sf.code:
                            throw new i.Sf(e);
                          case i.RV.code:
                            throw new i.RV(e);
                          case i.xq.code:
                            throw new i.xq(e);
                          case i.ch.code:
                            throw new i.ch(e);
                          case 5e3:
                            throw new i.vx(e);
                          default:
                            if (e instanceof n.C) throw e;
                            throw new i.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof s.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * f;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === i.s0.code ||
                              t.code === i.bq.code
                          : !(t instanceof s.Ci) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1;
                      },
                    }
                  ),
                { enabled: d, id: m }
              );
            };
          })(d, { methods: t, retryCount: h, retryDelay: f, uid: (0, l.L)() }),
          value: y,
        };
      }
    },
    54560: (e, t, r) => {
      r.d(t, { LX: () => n, WN: () => s, nP: () => i });
      let n =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        s =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        i =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    55563: (e, t, r) => {
      r.d(t, { Af: () => f, ZJ: () => u, aT: () => h });
      var n = r(13933),
        s = r(60587),
        i = r(72427),
        a = r(11914),
        o = r(34561);
      let c = new TextEncoder();
      function u(e, t = {}) {
        var r, n;
        return "number" == typeof e || "bigint" == typeof e
          ? ((r = e), (n = t), h((0, o.cK)(r, n)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(r, { size: t.size }),
                  (0, i.eV)(r, { size: t.size }))
                : r;
            })(e, t)
          : (0, s.q)(e)
          ? h(e, t)
          : f(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function h(e, t = {}) {
        let r = e;
        t.size &&
          ((0, a.Sl)(r, { size: t.size }),
          (r = (0, i.eV)(r, { dir: "right", size: t.size })));
        let s = r.slice(2);
        s.length % 2 && (s = `0${s}`);
        let o = s.length / 2,
          c = new Uint8Array(o);
        for (let e = 0, t = 0; e < o; e++) {
          let r = d(s.charCodeAt(t++)),
            i = d(s.charCodeAt(t++));
          if (void 0 === r || void 0 === i)
            throw new n.C(
              `Invalid byte sequence ("${s[t - 2]}${s[t - 1]}" in "${s}").`
            );
          c[e] = 16 * r + i;
        }
        return c;
      }
      function f(e, t = {}) {
        let r = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(r, { size: t.size }),
            (0, i.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    56195: (e, t, r) => {
      r.d(t, { m: () => s });
      var n = r(38445),
        s = new (class extends n.Q {
          #T;
          #A;
          #B;
          constructor() {
            super(),
              (this.#B = (e) => {
                if ("undefined" != typeof window && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#A || this.setEventListener(this.#B);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#A?.(), (this.#A = void 0));
          }
          setEventListener(e) {
            (this.#B = e),
              this.#A?.(),
              (this.#A = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#T !== e && ((this.#T = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#T
              ? this.#T
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    56996: (e, t, r) => {
      r.d(t, { h: () => c });
      var n = r(50879),
        s = r(11914),
        i = r(52623),
        a = r(15885);
      let o = { "0x0": "reverted", "0x1": "success" };
      async function c(e, { hash: t }) {
        let r = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!r) throw new n.Kc({ hash: t });
        return (
          e.chain?.formatters?.transactionReceipt?.format ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => (0, i.e)(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, s.ME)(e.transactionIndex)
                : null,
              status: e.status ? o[e.status] : null,
              type: e.type ? a.b4[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(r);
      }
    },
    59350: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    60186: (e, t, r) => {
      r.d(t, { g: () => a });
      var n = r(86186),
        s = r(34561),
        i = r(61936);
      async function a(
        e,
        {
          blockHash: t,
          blockNumber: r,
          blockTag: o,
          includeTransactions: c,
        } = {}
      ) {
        let u = c ?? !1,
          l = void 0 !== r ? (0, s.cK)(r) : void 0,
          d = null;
        if (
          !(d = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, u] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [l || (o ?? "latest"), u],
                },
                { dedupe: !!l }
              ))
        )
          throw new n.l({ blockHash: t, blockNumber: r });
        return (e.chain?.formatters?.block?.format || i.$)(d);
      }
    },
    60587: (e, t, r) => {
      r.d(t, { q: () => n });
      function n(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
    },
    61829: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(13933),
        s = r(88737);
      function i(e, t) {
        let r = (e.details || "").toLowerCase(),
          i = e instanceof n.C ? e.walk((e) => e?.code === s.A7.code) : e;
        return i instanceof n.C
          ? new s.A7({ cause: e, message: i.details })
          : s.A7.nodeMessage.test(r)
          ? new s.A7({ cause: e, message: e.details })
          : s.BG.nodeMessage.test(r)
          ? new s.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : s.jj.nodeMessage.test(r)
          ? new s.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : s.K0.nodeMessage.test(r)
          ? new s.K0({ cause: e, nonce: t?.nonce })
          : s.Oh.nodeMessage.test(r)
          ? new s.Oh({ cause: e, nonce: t?.nonce })
          : s.vW.nodeMessage.test(r)
          ? new s.vW({ cause: e, nonce: t?.nonce })
          : s.k5.nodeMessage.test(r)
          ? new s.k5({ cause: e })
          : s.lY.nodeMessage.test(r)
          ? new s.lY({ cause: e, gas: t?.gas })
          : s.Fo.nodeMessage.test(r)
          ? new s.Fo({ cause: e, gas: t?.gas })
          : s.uC.nodeMessage.test(r)
          ? new s.uC({ cause: e })
          : s.lN.nodeMessage.test(r)
          ? new s.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new s.RM({ cause: e });
      }
    },
    61936: (e, t, r) => {
      r.d(t, { $: () => s });
      var n = r(15885);
      function s(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, n.uP)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
    },
    62023: (e, t, r) => {
      r.d(t, { eL: () => n, pj: () => i, sz: () => s });
      let n = { gwei: 9, wei: 18 },
        s = { ether: -9, wei: 9 },
        i = { ether: -18, gwei: -9 };
    },
    63122: (e, t, r) => {
      r.d(t, { t: () => s });
      var n = r(38445),
        s = new (class extends n.Q {
          #F = !0;
          #A;
          #B;
          constructor() {
            super(),
              (this.#B = (e) => {
                if ("undefined" != typeof window && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#A || this.setEventListener(this.#B);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#A?.(), (this.#A = void 0));
          }
          setEventListener(e) {
            (this.#B = e),
              this.#A?.(),
              (this.#A = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#F !== e &&
              ((this.#F = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#F;
          }
        })();
    },
    64664: (e, t, r) => {
      r.d(t, { T: () => s, Z: () => i });
      var n = r(13933);
      class s extends n.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class i extends n.C {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    66969: (e, t, r) => {
      r.d(t, { Fl: () => i, NV: () => a, ii: () => s });
      var n = r(13933);
      class s extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class i extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    67550: (e, t, r) => {
      r.d(t, { u: () => i });
      var n = r(98722);
      let s = new Map();
      function i({ fn: e, id: t, shouldSplitBatch: r, wait: i = 0, sort: a }) {
        let o = async () => {
            let t = u();
            c();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let r = 0; r < t.length; r++) {
                    let { resolve: n } = t[r];
                    n?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    let { reject: n } = t[r];
                    n?.(e);
                  }
                });
          },
          c = () => s.delete(t),
          u = () => s.get(t) || [],
          l = (e) => s.set(t, [...u(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: s, reject: a } = (0, n.Y)();
            return (
              (r?.([...u().map(({ args: e }) => e), e]) && o(), u().length > 0)
                ? l({ args: e, resolve: s, reject: a })
                : (l({ args: e, resolve: s, reject: a }), setTimeout(o, i)),
              t
            );
          },
        };
      }
    },
    69781: (e, t, r) => {
      r.d(t, { k: () => a });
      var n = r(37126),
        s = r(17788),
        i = r(34049),
        a = class {
          #S;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#S = n.zs.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(
              this.gcTime || 0,
              e ?? (s.H.isServer() ? 1 / 0 : 3e5)
            );
          }
          clearGcTimeout() {
            void 0 !== this.#S &&
              (n.zs.clearTimeout(this.#S), (this.#S = void 0));
          }
        };
    },
    70054: (e, t, r) => {
      r.d(t, { G: () => a });
      let n = new Map(),
        s = new Map();
      async function i(e, { cacheKey: t, cacheTime: r = 1 / 0 }) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (r) => t.set(e, r),
              }),
              r = t(e, n),
              i = t(e, s);
            return {
              clear: () => {
                r.clear(), i.clear();
              },
              promise: r,
              response: i,
            };
          })(t),
          a = i.response.get();
        if (a && r > 0 && new Date().getTime() - a.created.getTime() < r)
          return a.data;
        let o = i.promise.get();
        o || ((o = e()), i.promise.set(o));
        try {
          let e = await o;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
      async function a(e, { cacheTime: t = e.cacheTime } = {}) {
        let r;
        return BigInt(
          await i(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: ((r = e.uid), `blockNumber.${r}`),
            cacheTime: t,
          })
        );
      }
    },
    71128: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(93398);
      let s = /^tuple(?<array>(\[(\d*)\])*)$/;
      function i(e) {
        let t = "",
          r = e.length;
        for (let i = 0; i < r; i++)
          (t += (function e(t) {
            let r = t.type;
            if (s.test(t.type) && "components" in t) {
              r = "(";
              let i = t.components.length;
              for (let n = 0; n < i; n++)
                (r += e(t.components[n])), n < i - 1 && (r += ", ");
              let a = (0, n.Yv)(s, t.type);
              return (r += `)${a?.array ?? ""}`), e({ ...t, type: r });
            }
            return ("indexed" in t && t.indexed && (r = `${r} indexed`), t.name)
              ? `${r} ${t.name}`
              : r;
          })(e[i])),
            i !== r - 1 && (t += ", ");
        return t;
      }
    },
    71552: (e, t, r) => {
      r.d(t, { M: () => s });
      var n = r(29454);
      function s({ blockNumber: e, chain: t, contract: r }) {
        let s = t?.contracts?.[r];
        if (!s) throw new n.rj({ chain: t, contract: { name: r } });
        if (e && s.blockCreated && s.blockCreated > e)
          throw new n.rj({
            blockNumber: e,
            chain: t,
            contract: { name: r, blockCreated: s.blockCreated },
          });
        return s.address;
      }
    },
    72427: (e, t, r) => {
      r.d(t, { db: () => i, eV: () => s });
      var n = r(66969);
      function s(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? i(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new n.Fl({
                  size: e.length,
                  targetSize: r,
                  type: "bytes",
                });
              let s = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let i = "right" === t;
                s[i ? n : r - n - 1] = e[i ? n : e.length - n - 1];
              }
              return s;
            })(e, { dir: t, size: r });
      }
      function i(e, { dir: t, size: r = 32 } = {}) {
        if (null === r) return e;
        let s = e.replace("0x", "");
        if (s.length > 2 * r)
          throw new n.Fl({
            size: Math.ceil(s.length / 2),
            targetSize: r,
            type: "hex",
          });
        return `0x${s["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
    },
    72707: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    72757: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let s = e[r];
        return "function" == typeof s ? s : (r) => t(e, r);
      }
    },
    72997: (e, t, r) => {
      r.d(t, { k: () => o });
      var n = r(55563),
        s = r(80329),
        i = r(93036),
        a = r(13933);
      function o(e) {
        var t;
        return (
          (t = (function (e) {
            let t = !0,
              r = "",
              n = 0,
              s = "",
              i = !1;
            for (let a = 0; a < e.length; a++) {
              let o = e[a];
              if (
                (["(", ")", ","].includes(o) && (t = !0),
                "(" === o && n++,
                ")" === o && n--,
                t)
              ) {
                if (0 === n) {
                  if (" " === o && ["event", "function", ""].includes(s))
                    s = "";
                  else if (((s += o), ")" === o)) {
                    i = !0;
                    break;
                  }
                  continue;
                }
                if (" " === o) {
                  "," !== e[a - 1] &&
                    "," !== r &&
                    ",(" !== r &&
                    ((r = ""), (t = !1));
                  continue;
                }
                (s += o), (r += o);
              }
            }
            if (!i) throw new a.C("Unable to normalize signature.");
            return s;
          })("string" == typeof e ? e : (0, i.B)(e))),
          (0, s.S)((0, n.ZJ)(t))
        );
      }
    },
    73168: (e, t, r) => {
      r.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => h,
        Gi: () => u,
        MI: () => I,
        RV: () => P,
        Sf: () => x,
        XU: () => o,
        YW: () => b,
        ab: () => y,
        bq: () => d,
        ch: () => $,
        hA: () => f,
        qZ: () => p,
        s0: () => m,
        sV: () => w,
        vx: () => v,
        xQ: () => g,
        xq: () => C,
      });
      var n = r(13933),
        s = r(4058);
      class i extends n.C {
        constructor(
          e,
          { code: t, docsPath: r, metaMessages: n, name: i, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: i || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = i || e.name),
            (this.code = e instanceof s.J8 ? e.code : t ?? -1);
        }
      }
      class a extends i {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class o extends i {
        constructor(e) {
          super(e, {
            code: o.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends i {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends i {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends i {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends i {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends i {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends i {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class b extends i {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class y extends i {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: y.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class m extends i {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends i {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class $ extends a {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class I extends i {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    74268: (e, t, r) => {
      r.d(t, { jG: () => s });
      var n = r(37126).Zq,
        s = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            s = (e) => {
              e();
            },
            i = n,
            a = (n) => {
              t
                ? e.push(n)
                : i(() => {
                    r(n);
                  });
            };
          return {
            batch: (n) => {
              let a;
              t++;
              try {
                a = n();
              } finally {
                --t ||
                  (() => {
                    let t = e;
                    (e = []),
                      t.length &&
                        i(() => {
                          s(() => {
                            t.forEach((e) => {
                              r(e);
                            });
                          });
                        });
                  })();
              }
              return a;
            },
            batchCalls:
              (e) =>
              (...t) => {
                a(() => {
                  e(...t);
                });
              },
            schedule: a,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              s = e;
            },
            setScheduler: (e) => {
              i = e;
            },
          };
        })();
    },
    74750: (e, t, r) => {
      r.d(t, { Bv: () => i });
      var n = r(34561);
      let s = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function i(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.contractAddress,
              r: e.r,
              s: e.s,
              chainId: (0, n.cK)(e.chainId),
              nonce: (0, n.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, n.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, n.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, n.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, n.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, n.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, n.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, n.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, n.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, n.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = s[e.type]),
          void 0 !== e.value && (t.value = (0, n.cK)(e.value)),
          t
        );
      }
    },
    75575: (e, t, r) => {
      r.d(t, { IT: () => i });
      var n = r(22454),
        s = r(47575);
      function i(e) {
        let t = (0, n.I)({ ...e, queryKeyHashFn: s.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    76115: (e, t, r) => {
      r.d(t, { M: () => s });
      var n = r(13933);
      class s extends n.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    76235: (e, t, r) => {
      r.d(t, { lY: () => x });
      var n = r(76590);
      let s = BigInt(0x100000000 - 1),
        i = BigInt(32);
      var a = r(890);
      let o = [],
        c = [],
        u = [],
        l = BigInt(0),
        d = BigInt(1),
        h = BigInt(2),
        f = BigInt(7),
        p = BigInt(256),
        b = BigInt(113);
      for (let e = 0, t = d, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          o.push(2 * (5 * n + r)),
          c.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = l;
        for (let e = 0; e < 7; e++)
          (t = ((t << d) ^ ((t >> f) * b)) % p) & h &&
            (s ^= d << ((d << BigInt(e)) - d));
        u.push(s);
      }
      let [y, m] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let a = 0; a < e.length; a++) {
            let { h: o, l: c } = (function (e, t = !1) {
              return t
                ? { h: Number(e & s), l: Number((e >> i) & s) }
                : { h: 0 | Number((e >> i) & s), l: 0 | Number(e & s) };
            })(e[a], t);
            [r[a], n[a]] = [o, c];
          }
          return [r, n];
        })(u, !0),
        g = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (t << (r - 32)) | (e >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (e << r) | (t >>> (32 - r)))(e, t, r),
        v = (e, t, r) =>
          r > 32
            ? ((e, t, r) => (e << (r - 32)) | (t >>> (64 - r)))(e, t, r)
            : ((e, t, r) => (t << r) | (e >>> (32 - r)))(e, t, r);
      class w extends a.Vw {
        constructor(e, t, r, s = !1, i = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = s),
            (this.rounds = i),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Fe)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, a.DH)(this.state));
        }
        keccak() {
          a.qv || (0, a.Fc)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    s = (t + 2) % 10,
                    i = r[s],
                    a = r[s + 1],
                    o = g(i, a, 1) ^ r[n],
                    c = v(i, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= o), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = c[r],
                    i = g(t, s, n),
                    a = v(t, s, n),
                    u = o[r];
                  (t = e[u]), (s = e[u + 1]), (e[u] = i), (e[u + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= y[n]), (e[1] ^= m[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            a.qv || (0, a.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, n.CC)(this);
          let { blockLen: t, state: r } = this,
            s = (e = (0, a.ZJ)(e)).length;
          for (let n = 0; n < s; ) {
            let i = Math.min(t - this.pos, s - n);
            for (let t = 0; t < i; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, n.CC)(this, !1), (0, n.DO)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, s = e.length; n < s; ) {
            this.posOut >= r && this.keccak();
            let i = Math.min(r - this.posOut, s - n);
            e.set(t.subarray(this.posOut, this.posOut + i), n),
              (this.posOut += i),
              (n += i);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, n.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, n.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: s,
            enableXOF: i,
          } = this;
          return (
            e || (e = new w(t, r, n, i, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let x = (0, a.ld)(() => new w(136, 1, 32));
    },
    76590: (e, t, r) => {
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function i(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function o(e, t) {
        s(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(t, {
        CC: () => a,
        DO: () => s,
        Fe: () => n,
        Ht: () => o,
        sd: () => i,
      });
    },
    77457: (e, t, r) => {
      r.d(t, { g: () => d });
      var n = r(88423),
        s = r(40290),
        i = r(55563),
        a = r(34561),
        o = r(13933),
        c = r(82427);
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new o.C("Length is too large.");
      }
      var l = r(80329);
      async function d(e) {
        let { authorization: t, signature: r } = e;
        return (0, n.x)({
          hash: (function (e) {
            let { chainId: t, contractAddress: r, nonce: n, to: o } = e,
              d = (0, l.S)(
                (0, s.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let r = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                r = u(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + r + t,
                                encode(n) {
                                  for (let { encode: s } of (t <= 55
                                    ? n.pushByte(192 + t)
                                    : (n.pushByte(247 + r),
                                      1 === r
                                        ? n.pushUint8(t)
                                        : 2 === r
                                        ? n.pushUint16(t)
                                        : 3 === r
                                        ? n.pushUint24(t)
                                        : n.pushUint32(t)),
                                  e))
                                    s(n);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, i.aT)(e) : e,
                                r = u(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + r + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + r),
                                        1 === r
                                          ? e.pushUint8(t.length)
                                          : 2 === r
                                          ? e.pushUint16(t.length)
                                          : 3 === r
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      n = (0, c.l)(new Uint8Array(r.length));
                    return (r.encode(n), "hex" === t)
                      ? (0, a.My)(n.bytes)
                      : n.bytes;
                  })([t ? (0, a.cK)(t) : "0x", r, n ? (0, a.cK)(n) : "0x"]),
                ])
              );
            return "bytes" === o ? (0, i.aT)(d) : d;
          })(t),
          signature: r ?? t,
        });
      }
    },
    77608: (e, t, r) => {
      r.d(t, { b: () => l, o: () => u });
      var n = r(76115),
        s = r(55563),
        i = r(80329),
        a = r(20390),
        o = r(24784);
      let c = new a.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (0, i.S)((0, s.Af)(r), "bytes"),
          a = (t ? r.substring(`${t}0x`.length) : r).split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let o = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, o), o;
      }
      function l(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new n.M({ address: e });
        return u(e, t);
      }
    },
    78140: (e, t, r) => {
      r.d(t, { u: () => n });
      async function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    80043: (e, t, r) => {
      r.d(t, { X: () => c, k: () => u });
      var n = r(34049),
        s = r(74268),
        i = r(93049),
        a = r(69781);
      function o(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      var c = class extends a.k {
        #j;
        #k;
        #U;
        #z;
        #e;
        #M;
        #G;
        #N;
        constructor(e) {
          super(),
            (this.#N = !1),
            (this.#G = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.#e = e.client),
            (this.#z = this.#e.getQueryCache()),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.#k = d(this.options)),
            (this.state = e.state ?? this.#k),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get queryType() {
          return this.#j;
        }
        get promise() {
          return this.#M?.promise;
        }
        setOptions(e) {
          if (
            ((this.options = { ...this.#G, ...e }),
            e?._type && (this.#j = e._type),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let e = d(this.options);
            void 0 !== e.data &&
              (this.setState(l(e.data, e.dataUpdatedAt)), (this.#k = e));
          }
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.#z.remove(this);
        }
        setData(e, t) {
          let r = (0, n.pl)(this.state.data, e, this.options);
          return (
            this.#R({
              data: r,
              type: "success",
              dataUpdatedAt: t?.updatedAt,
              manual: t?.manual,
            }),
            r
          );
        }
        setState(e) {
          this.#R({ type: "setState", state: e });
        }
        cancel(e) {
          let t = this.#M?.promise;
          return (
            this.#M?.cancel(e), t ? t.then(n.lQ).catch(n.lQ) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        get resetState() {
          return this.#k;
        }
        reset() {
          this.destroy(), this.setState(this.resetState);
        }
        isActive() {
          return this.observers.some(
            (e) => !1 !== (0, n.nU)(e.options.enabled, this)
          );
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === n.hT || !this.isFetched();
        }
        isFetched() {
          return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (e) => "static" === (0, n.d2)(e.options.staleTime, this)
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((e) => e.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(e = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== e &&
              (!!this.state.isInvalidated ||
                !(0, n.j3)(this.state.dataUpdatedAt, e)))
          );
        }
        onFocus() {
          let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          e?.refetch({ cancelRefetch: !1 }), this.#M?.continue();
        }
        onOnline() {
          let e = this.observers.find((e) => e.shouldFetchOnReconnect());
          e?.refetch({ cancelRefetch: !1 }), this.#M?.continue();
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.#z.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.#M &&
                (this.#N || this.#L()
                  ? this.#M.cancel({ revert: !0 })
                  : this.#M.cancelRetry()),
              this.scheduleGc()),
            this.#z.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        #L() {
          return (
            "paused" === this.state.fetchStatus &&
            "pending" === this.state.status
          );
        }
        invalidate() {
          this.state.isInvalidated || this.#R({ type: "invalidate" });
        }
        async fetch(e, t) {
          var r;
          if (
            "idle" !== this.state.fetchStatus &&
            this.#M?.status() !== "rejected"
          ) {
            if (void 0 !== this.state.data && t?.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.#M) return this.#M.continueRetry(), this.#M.promise;
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          let s = new AbortController(),
            a = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => ((this.#N = !0), s.signal),
              });
            },
            c = () => {
              let e = (0, n.ZM)(this.options, t),
                r = (() => {
                  let e = {
                    client: this.#e,
                    queryKey: this.queryKey,
                    meta: this.meta,
                  };
                  return a(e), e;
                })();
              return ((this.#N = !1), this.options.persister)
                ? this.options.persister(e, r, this)
                : e(r);
            },
            u = (() => {
              let e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#e,
                state: this.state,
                fetchFn: c,
              };
              return a(e), e;
            })(),
            l =
              "infinite" === this.#j
                ? ((r = this.options.pages),
                  {
                    onFetch: (e, t) => {
                      let s = e.options,
                        i = e.fetchOptions?.meta?.fetchMore?.direction,
                        a = e.state.data?.pages || [],
                        c = e.state.data?.pageParams || [],
                        u = { pages: [], pageParams: [] },
                        l = 0,
                        d = async () => {
                          let t = !1,
                            d = (0, n.ZM)(e.options, e.fetchOptions),
                            h = async (r, s, i) => {
                              if (t) return Promise.reject(e.signal.reason);
                              if (null == s && r.pages.length)
                                return Promise.resolve(r);
                              let a = (() => {
                                  let r = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: s,
                                    direction: i ? "backward" : "forward",
                                    meta: e.options.meta,
                                  };
                                  return (
                                    (0, n.ox)(
                                      r,
                                      () => e.signal,
                                      () => (t = !0)
                                    ),
                                    r
                                  );
                                })(),
                                o = await d(a),
                                { maxPages: c } = e.options,
                                u = i ? n.ZZ : n.y9;
                              return {
                                pages: u(r.pages, o, c),
                                pageParams: u(r.pageParams, s, c),
                              };
                            };
                          if (i && a.length) {
                            let e = "backward" === i,
                              t = { pages: a, pageParams: c },
                              r = (
                                e
                                  ? function (e, { pages: t, pageParams: r }) {
                                      return t.length > 0
                                        ? e.getPreviousPageParam?.(
                                            t[0],
                                            t,
                                            r[0],
                                            r
                                          )
                                        : void 0;
                                    }
                                  : o
                              )(s, t);
                            u = await h(t, r, e);
                          } else {
                            let e = r ?? a.length;
                            do {
                              let e =
                                0 === l ? c[0] ?? s.initialPageParam : o(s, u);
                              if (l > 0 && null == e) break;
                              (u = await h(u, e)), l++;
                            } while (l < e);
                          }
                          return u;
                        };
                      e.options.persister
                        ? (e.fetchFn = () =>
                            e.options.persister?.(
                              d,
                              {
                                client: e.client,
                                queryKey: e.queryKey,
                                meta: e.options.meta,
                                signal: e.signal,
                              },
                              t
                            ))
                        : (e.fetchFn = d);
                    },
                  })
                : this.options.behavior;
          l?.onFetch(u, this),
            (this.#U = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !== u.fetchOptions?.meta) &&
              this.#R({ type: "fetch", meta: u.fetchOptions?.meta }),
            (this.#M = (0, i.II)({
              initialPromise: t?.initialPromise,
              fn: u.fetchFn,
              onCancel: (e) => {
                e instanceof i.cc &&
                  e.revert &&
                  this.setState({ ...this.#U, fetchStatus: "idle" }),
                  s.abort();
              },
              onFail: (e, t) => {
                this.#R({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#R({ type: "pause" });
              },
              onContinue: () => {
                this.#R({ type: "continue" });
              },
              retry: u.options.retry,
              retryDelay: u.options.retryDelay,
              networkMode: u.options.networkMode,
              canRun: () => !0,
            }));
          try {
            let e = await this.#M.start();
            if (void 0 === e)
              throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(e),
              this.#z.config.onSuccess?.(e, this),
              this.#z.config.onSettled?.(e, this.state.error, this),
              e
            );
          } catch (e) {
            if (e instanceof i.cc) {
              if (e.silent) return this.#M.promise;
              else if (e.revert) {
                if (void 0 === this.state.data) throw e;
                return this.state.data;
              }
            }
            throw (
              (this.#R({ type: "error", error: e }),
              this.#z.config.onError?.(e, this),
              this.#z.config.onSettled?.(this.state.data, e, this),
              e)
            );
          } finally {
            this.scheduleGc();
          }
        }
        #R(e) {
          let t = (t) => {
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...t,
                  ...u(t.data, this.options),
                  fetchMeta: e.meta ?? null,
                };
              case "success":
                let r = {
                  ...t,
                  ...l(e.data, e.dataUpdatedAt),
                  dataUpdateCount: t.dataUpdateCount + 1,
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
                return (this.#U = e.manual ? r : void 0), r;
              case "error":
                let n = e.error;
                return {
                  ...t,
                  error: n,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: n,
                  fetchStatus: "idle",
                  status: "error",
                  isInvalidated: !0,
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          };
          (this.state = t(this.state)),
            s.jG.batch(() => {
              this.observers.forEach((e) => {
                e.onQueryUpdate();
              }),
                this.#z.notify({ query: this, type: "updated", action: e });
            });
        }
      };
      function u(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, i.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
      function l(e, t) {
        return {
          data: e,
          dataUpdatedAt: t ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function d(e) {
        let t =
            "function" == typeof e.initialData
              ? e.initialData()
              : e.initialData,
          r = void 0 !== t,
          n = r
            ? "function" == typeof e.initialDataUpdatedAt
              ? e.initialDataUpdatedAt()
              : e.initialDataUpdatedAt
            : 0;
        return {
          data: t,
          dataUpdateCount: 0,
          dataUpdatedAt: r ? n ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: r ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
    },
    80329: (e, t, r) => {
      r.d(t, { S: () => o });
      var n = r(76235),
        s = r(60587),
        i = r(55563),
        a = r(34561);
      function o(e, t) {
        let r = (0, n.lY)((0, s.q)(e, { strict: !1 }) ? (0, i.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? r : (0, a.nj)(r);
      }
    },
    80549: (e, t, r) => {
      r.d(t, { n: () => l });
      var n = r(12115),
        s = r(38559),
        i = r(74268),
        a = r(38445),
        o = r(34049),
        c = class extends a.Q {
          #e;
          #i = void 0;
          #q;
          #D;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#Q();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, o.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#q,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#q?.state.status === "pending" &&
                  this.#q.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#q?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#Q(), this.#C(e);
          }
          getCurrentResult() {
            return this.#i;
          }
          reset() {
            this.#q?.removeObserver(this),
              (this.#q = void 0),
              this.#Q(),
              this.#C();
          }
          mutate(e, t) {
            return (
              (this.#D = t),
              this.#q?.removeObserver(this),
              (this.#q = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#q.addObserver(this),
              this.#q.execute(e)
            );
          }
          #Q() {
            let e = this.#q?.state ?? (0, s.$)();
            this.#i = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #C(e) {
            i.jG.batch(() => {
              if (this.#D && this.hasListeners()) {
                let t = this.#i.variables,
                  r = this.#i.context,
                  n = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                if (e?.type === "success") {
                  try {
                    this.#D.onSuccess?.(e.data, t, r, n);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#D.onSettled?.(e.data, null, t, r, n);
                  } catch (e) {
                    Promise.reject(e);
                  }
                } else if (e?.type === "error") {
                  try {
                    this.#D.onError?.(e.error, t, r, n);
                  } catch (e) {
                    Promise.reject(e);
                  }
                  try {
                    this.#D.onSettled?.(void 0, e.error, t, r, n);
                  } catch (e) {
                    Promise.reject(e);
                  }
                }
              }
              this.listeners.forEach((e) => {
                e(this.#i);
              });
            });
          }
        },
        u = r(99776);
      function l(e, t) {
        let r = (0, u.jE)(t),
          [s] = n.useState(() => new c(r, e));
        n.useEffect(() => {
          s.setOptions(e);
        }, [s, e]);
        let a = n.useSyncExternalStore(
            n.useCallback((e) => s.subscribe(i.jG.batchCalls(e)), [s]),
            () => s.getCurrentResult(),
            () => s.getCurrentResult()
          ),
          l = n.useCallback(
            (e, t) => {
              s.mutate(e, t).catch(o.lQ);
            },
            [s]
          );
        if (a.error && (0, o.GU)(s.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: l, mutateAsync: a.mutate };
      }
    },
    80897: (e, t, r) => {
      r.d(t, { n: () => b });
      var n = r(97525),
        s = r(77608),
        i = r(82427),
        a = r(16871),
        o = r(44352),
        c = r(42438),
        u = r(35276),
        l = r(11914),
        d = r(34561);
      function h(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let r = (0, d.My)(e, t);
        return (0, l.ME)(r, t);
      }
      var f = r(55563),
        p = r(41706);
      function b(e, t) {
        let r = "string" == typeof t ? (0, f.aT)(t) : t,
          b = (0, i.l)(r);
        if (0 === (0, a.E)(r) && e.length > 0) throw new n.O();
        if ((0, a.E)(t) && 32 > (0, a.E)(t))
          throw new n.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let m = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let r = e[t];
          b.setPosition(m);
          let [i, a] = (function e(t, r, { staticPosition: i }) {
            let a = (0, p.k)(r.type);
            if (a) {
              let [n, s] = a;
              return (function (t, r, { length: n, staticPosition: s }) {
                if (!n) {
                  let n = s + h(t.readBytes(32)),
                    i = n + 32;
                  t.setPosition(n);
                  let a = h(t.readBytes(32)),
                    o = y(r),
                    c = 0,
                    u = [];
                  for (let n = 0; n < a; ++n) {
                    t.setPosition(i + (o ? 32 * n : c));
                    let [s, a] = e(t, r, { staticPosition: i });
                    (c += a), u.push(s);
                  }
                  return t.setPosition(s + 32), [u, 32];
                }
                if (y(r)) {
                  let i = s + h(t.readBytes(32)),
                    a = [];
                  for (let s = 0; s < n; ++s) {
                    t.setPosition(i + 32 * s);
                    let [n] = e(t, r, { staticPosition: i });
                    a.push(n);
                  }
                  return t.setPosition(s + 32), [a, 32];
                }
                let i = 0,
                  a = [];
                for (let o = 0; o < n; ++o) {
                  let [n, o] = e(t, r, { staticPosition: s + i });
                  (i += o), a.push(n);
                }
                return [a, i];
              })(t, { ...r, type: s }, { length: n, staticPosition: i });
            }
            if ("tuple" === r.type)
              return (function (t, r, { staticPosition: n }) {
                let s =
                    0 === r.components.length ||
                    r.components.some(({ name: e }) => !e),
                  i = s ? [] : {},
                  a = 0;
                if (y(r)) {
                  let o = n + h(t.readBytes(32));
                  for (let n = 0; n < r.components.length; ++n) {
                    let c = r.components[n];
                    t.setPosition(o + a);
                    let [u, l] = e(t, c, { staticPosition: o });
                    (a += l), (i[s ? n : c?.name] = u);
                  }
                  return t.setPosition(n + 32), [i, 32];
                }
                for (let o = 0; o < r.components.length; ++o) {
                  let c = r.components[o],
                    [u, l] = e(t, c, { staticPosition: n });
                  (i[s ? o : c?.name] = u), (a += l);
                }
                return [i, a];
              })(t, r, { staticPosition: i });
            if ("address" === r.type) {
              var f = t;
              let e = f.readBytes(32);
              return [(0, s.o)((0, d.My)((0, o.A1)(e, -20))), 32];
            }
            if ("bool" === r.type)
              return [
                (function (e, t = {}) {
                  let r = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(r, { size: t.size }), (r = (0, c.B)(r))),
                    r.length > 1 || r[0] > 1)
                  )
                    throw new u.xO(r);
                  return !!r[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (r.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: r }) {
                let [n, s] = t.type.split("bytes");
                if (!s) {
                  let t = h(e.readBytes(32));
                  e.setPosition(r + t);
                  let n = h(e.readBytes(32));
                  if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                  let s = e.readBytes(n);
                  return e.setPosition(r + 32), [(0, d.My)(s), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(s), 32)), 32];
              })(t, r, { staticPosition: i });
            if (r.type.startsWith("uint") || r.type.startsWith("int")) {
              var b = t,
                m = r;
              let e = m.type.startsWith("int"),
                n = Number.parseInt(m.type.split("int")[1] || "256"),
                s = b.readBytes(32);
              return [
                n > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                      let r = (0, d.My)(e, t);
                      return (0, l.uU)(r, t);
                    })(s, { signed: e })
                  : h(s, { signed: e }),
                32,
              ];
            }
            if ("string" === r.type)
              return (function (e, { staticPosition: t }) {
                let r = h(e.readBytes(32));
                e.setPosition(t + r);
                let n = h(e.readBytes(32));
                if (0 === n) return e.setPosition(t + 32), ["", 32];
                let s = e.readBytes(n, 32),
                  i = (function (e, t = {}) {
                    let r = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(r, { size: t.size }),
                        (r = (0, c.B)(r, { dir: "right" }))),
                      new TextDecoder().decode(r)
                    );
                  })((0, c.B)(s));
                return e.setPosition(t + 32), [i, 32];
              })(t, { staticPosition: i });
            throw new n.j(r.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(b, r, { staticPosition: 0 });
          (m += a), g.push(i);
        }
        return g;
      }
      function y(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(y);
        let r = (0, p.k)(e.type);
        return !!(r && y({ ...e, type: r[1] }));
      }
    },
    82427: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(27747);
      let s = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new n.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function i(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(s);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
    },
    83515: (e, t, r) => {
      r.d(t, { T: () => n });
      function n() {
        let e,
          t,
          r = new Promise((r, n) => {
            (e = r), (t = n);
          });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = "pending"),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: "fulfilled", value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: "rejected", reason: e }), t(e);
          }),
          r
        );
      }
    },
    83759: (e, t, r) => {
      r.d(t, { x: () => a });
      var n = r(50879),
        s = r(34561),
        i = r(15885);
      async function a(
        e,
        { blockHash: t, blockNumber: r, blockTag: a, hash: o, index: c }
      ) {
        let u = a || "latest",
          l = void 0 !== r ? (0, s.cK)(r) : void 0,
          d = null;
        if (
          (o
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [o] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, s.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (l || u) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [l || u, (0, s.cK)(c)],
                },
                { dedupe: !!l }
              )),
          !d)
        )
          throw new n.Kz({
            blockHash: t,
            blockNumber: r,
            blockTag: u,
            hash: o,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.uP)(d);
      }
    },
    86186: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(13933);
      class s extends n.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = "Block";
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    87639: (e, t, r) => {
      r.d(t, { lB: () => a });
      let n = new Map(),
        s = new Map(),
        i = 0;
      function a(e, t, r) {
        let a = ++i,
          o = () => n.get(e) || [],
          c = () => {
            let t = o();
            if (!t.some((e) => e.id === a)) return;
            let r = s.get(e);
            1 === t.length && r && r();
            let i = o();
            n.set(
              e,
              i.filter((e) => e.id !== a)
            );
          },
          u = o();
        if ((n.set(e, [...u, { id: a, fns: t }]), u && u.length > 0)) return c;
        let l = {};
        for (let e in t)
          l[e] = (...t) => {
            let r = o();
            if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
          };
        let d = r(l);
        return "function" == typeof d && s.set(e, d), c;
      }
    },
    88423: (e, t, r) => {
      r.d(t, { x: () => l });
      var n = r(77608),
        s = r(80329),
        i = r(60587),
        a = r(11914),
        o = r(34561);
      async function c({ hash: e, signature: t }) {
        let n = (0, i.q)(e) ? e : (0, o.nj)(e),
          { secp256k1: s } = await r.e(837).then(r.bind(r, 20837)),
          c = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: n, yParity: i } = t,
                o = u(Number(i ?? n));
              return new s.Signature((0, a.uU)(e), (0, a.uU)(r)).addRecoveryBit(
                o
              );
            }
            let e = (0, i.q)(t) ? t : (0, o.nj)(t),
              r = u((0, a.ME)(`0x${e.slice(130)}`));
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${c}`;
      }
      function u(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function l({ hash: e, signature: t }) {
        var r = await c({ hash: e, signature: t });
        let i = (0, s.S)(`0x${r.substring(4)}`).substring(26);
        return (0, n.o)(`0x${i}`);
      }
    },
    88737: (e, t, r) => {
      r.d(t, {
        A7: () => i,
        BG: () => a,
        Fo: () => f,
        K0: () => c,
        Oh: () => u,
        RM: () => y,
        jj: () => o,
        k5: () => d,
        lN: () => b,
        lY: () => h,
        uC: () => p,
        vW: () => l,
      });
      var n = r(42503),
        s = r(13933);
      class i extends s.C {
        constructor({ cause: e, message: t } = {}) {
          let r = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(i, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(i, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class o extends s.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends s.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends s.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends s.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends s.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends s.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: r,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              r ? ` = ${(0, n.Q)(r)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class y extends s.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    88878: (e, t, r) => {
      r.d(t, { V: () => i });
      var n = r(44352),
        s = r(72997);
      let i = (e) => (0, n.di)((0, s.k)(e), 0, 4);
    },
    90707: (e, t, r) => {
      r.d(t, { r: () => s });
      var n = r(34561);
      async function s(
        e,
        { address: t, blockNumber: r, blockTag: s = "latest" }
      ) {
        let i = r ? (0, n.cK)(r) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, i || s] })
        );
      }
    },
    93036: (e, t, r) => {
      r.d(t, { B: () => s });
      var n = r(71128);
      function s(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, n.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, n.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, n.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, n.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, n.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    93049: (e, t, r) => {
      r.d(t, { II: () => d, cc: () => l, v_: () => u });
      var n = r(56195),
        s = r(63122),
        i = r(83515),
        a = r(17788),
        o = r(34049);
      function c(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function u(e) {
        return (e ?? "online") !== "online" || s.t.isOnline();
      }
      var l = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function d(e) {
        let t,
          r = !1,
          d = 0,
          h = (0, i.T)(),
          f = () =>
            n.m.isFocused() &&
            ("always" === e.networkMode || s.t.isOnline()) &&
            e.canRun(),
          p = () => u(e.networkMode) && e.canRun(),
          b = (e) => {
            "pending" === h.status && (t?.(), h.resolve(e));
          },
          y = (e) => {
            "pending" === h.status && (t?.(), h.reject(e));
          },
          m = () =>
            new Promise((r) => {
              (t = (e) => {
                ("pending" !== h.status || f()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), "pending" === h.status && e.onContinue?.();
            }),
          g = () => {
            let t;
            if ("pending" !== h.status) return;
            let n = 0 === d ? e.initialPromise : void 0;
            try {
              t = n ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(b)
              .catch((t) => {
                if ("pending" !== h.status) return;
                let n = e.retry ?? 3 * !a.H.isServer(),
                  s = e.retryDelay ?? c,
                  i = "function" == typeof s ? s(d, t) : s,
                  u =
                    !0 === n ||
                    ("number" == typeof n && d < n) ||
                    ("function" == typeof n && n(d, t));
                if (r || !u) return void y(t);
                d++,
                  e.onFail?.(d, t),
                  (0, o.yy)(i)
                    .then(() => (f() ? void 0 : m()))
                    .then(() => {
                      r ? y(t) : g();
                    });
              });
          };
        return {
          promise: h,
          status: () => h.status,
          cancel: (t) => {
            if ("pending" === h.status) {
              let r = new l(t);
              y(r), e.onCancel?.(r);
            }
          },
          continue: () => (t?.(), h),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: p,
          start: () => (p() ? g() : m().then(g), h),
        };
      }
    },
    93398: (e, t, r) => {
      function n(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      r.d(t, { BD: () => s, Ge: () => i, Yv: () => n, wj: () => a });
      let s = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    94788: (e, t, r) => {
      r.d(t, { w: () => s });
      var n = r(78140);
      function s(e, { emitOnBegin: t, initialWaitTime: r, interval: s }) {
        let i = !0,
          a = () => (i = !1);
        return (
          (async () => {
            let o;
            t && (o = await e({ unpoll: a }));
            let c = (await r?.(o)) ?? s;
            await (0, n.u)(c);
            let u = async () => {
              i && (await e({ unpoll: a }), await (0, n.u)(s), u());
            };
            u();
          })(),
          a
        );
      }
    },
    95089: (e, t, r) => {
      r.d(t, { U: () => i });
      var n = r(97152),
        s = r(95789);
      function i(e) {
        let {
            batch: t,
            cacheTime: r = e.pollingInterval ?? 4e3,
            ccipRead: i,
            key: a = "base",
            name: o = "Base Client",
            pollingInterval: c = 4e3,
            type: u = "base",
          } = e,
          l = e.chain,
          d = e.account ? (0, n.J)(e.account) : void 0,
          {
            config: h,
            request: f,
            value: p,
          } = e.transport({ chain: l, pollingInterval: c }),
          b = {
            account: d,
            batch: t,
            cacheTime: r,
            ccipRead: i,
            chain: l,
            key: a,
            name: o,
            pollingInterval: c,
            request: f,
            transport: { ...h, ...p },
            type: u,
            uid: (0, s.L)(),
          };
        return Object.assign(b, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in b) delete n[e];
              let s = { ...t, ...n };
              return Object.assign(s, { extend: e(s) });
            };
          })(b),
        });
      }
    },
    95789: (e, t, r) => {
      let n;
      r.d(t, { L: () => i });
      let s = 256;
      function i(e = 11) {
        if (!n || s + e > 512) {
          (n = ""), (s = 0);
          for (let e = 0; e < 256; e++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(s, s++ + e);
      }
    },
    96565: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(35326),
        s = r(88737),
        i = r(61829);
      function a(e, { docsPath: t, ...r }) {
        let a = (() => {
          let t = (0, i.l)(e, r);
          return t instanceof s.RM ? e : t;
        })();
        return new n.zX(a, { docsPath: t, ...r });
      }
    },
    97152: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    97525: (e, t, r) => {
      r.d(t, {
        BI: () => w,
        Iy: () => c,
        Iz: () => m,
        MR: () => g,
        M_: () => y,
        Nc: () => l,
        O: () => u,
        Wq: () => f,
        YE: () => h,
        YF: () => o,
        YW: () => a,
        _z: () => p,
        d_: () => O,
        dm: () => I,
        fo: () => x,
        gH: () => d,
        j: () => $,
        kE: () => b,
        l3: () => P,
        nK: () => C,
        nM: () => v,
      });
      var n = r(23222),
        s = r(16871),
        i = r(13933);
      class a extends i.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends i.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      i.C;
      class c extends i.C {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, n.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${r} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = r);
        }
      }
      class u extends i.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends i.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends i.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, s.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends i.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      i.C, i.C;
      class f extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class p extends i.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class b extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class y extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class m extends i.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class g extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      i.C;
      class v extends i.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, n.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, n.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class w extends i.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class x extends i.C {
        constructor({ abiItem: e, data: t, params: r, size: s }) {
          super(
            `Data size of ${s} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, n.A)(r, { includeName: !0 })})`,
                `Data:   ${t} (${s} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = r),
            (this.size = s);
        }
      }
      class P extends i.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, n.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class C extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class $ extends i.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class I extends i.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class O extends i.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      i.C;
    },
    98292: (e, t, r) => {
      r.d(t, { O: () => u, _: () => c });
      var n = r(32915),
        s = r(72757),
        i = r(5935),
        a = r(60186),
        o = r(32395);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let {
            block: r,
            chain: c = e.chain,
            request: u,
            type: l = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: r, client: e, request: u })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new n.sM();
        let h = d.toString().split(".")[1]?.length ?? 0,
          f = 10 ** h,
          p = (e) => (e * BigInt(Math.ceil(d * f))) / BigInt(f),
          b = r || (await (0, s.T)(e, a.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: p,
            request: u,
            type: l,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === l) {
          if ("bigint" != typeof b.baseFeePerGas) throw new n.pw();
          let t =
              "bigint" == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, i.N)(e, { block: b, chain: c, request: u }),
            r = p(b.baseFeePerGas);
          return {
            maxFeePerGas: u?.maxFeePerGas ?? r + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: u?.gasPrice ?? p(await (0, s.T)(e, o.L, "getGasPrice")({})),
        };
      }
    },
    98722: (e, t, r) => {
      r.d(t, { Y: () => n });
      function n() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    99776: (e, t, r) => {
      r.d(t, { Ht: () => o, jE: () => a });
      var n = r(12115),
        s = r(95155),
        i = n.createContext(void 0),
        a = (e) => {
          let t = n.useContext(i);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        o = (e) => {
          let { client: t, children: r } = e;
          return (
            n.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, s.jsx)(i.Provider, { value: t, children: r })
          );
        };
    },
    99941: (e, t, r) => {
      function n(e) {
        return e.state.chainId;
      }
      r.d(t, { i: () => a });
      var s = r(12115),
        i = r(86475);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.U)(e);
        return (0, s.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe((e) => e.chainId, r);
            })(t, { onChange: e }),
          () => n(t),
          () => n(t)
        );
      }
    },
  },
]);
