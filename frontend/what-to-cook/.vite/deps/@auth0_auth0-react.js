import { __toESM, require_react } from "./chunk-IT4SZZ7J.js";

// node_modules/@auth0/auth0-react/dist/auth0-react.esm.js
var import_react = __toESM(require_react());
var extendStatics = function (d2, b2) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d3, b3) {
        d3.__proto__ = b3;
      }) ||
    function (d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
    };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError(
      "Class extends value " + String(b2) + " is not a constructor or null",
    );
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype =
    b2 === null ? Object.create(b2) : ((__.prototype = b2.prototype), new __());
}
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
      }
      return t2;
    };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (
      var i2 = 0, p2 = Object.getOwnPropertySymbols(s2);
      i2 < p2.length;
      i2++
    ) {
      if (
        e2.indexOf(p2[i2]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s2, p2[i2])
      )
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2
      ? value
      : new P2(function (resolve) {
          resolve(value);
        });
  }
  return new (P2 || (P2 = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = {
      label: 0,
      sent: function () {
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      },
      trys: [],
      ops: [],
    },
    f2,
    y2,
    t2,
    g2 = Object.create(
      (typeof Iterator === "function" ? Iterator : Object).prototype,
    );
  return (
    (g2.next = verb(0)),
    (g2["throw"] = verb(1)),
    (g2["return"] = verb(2)),
    typeof Symbol === "function" &&
      (g2[Symbol.iterator] = function () {
        return this;
      }),
    g2
  );
  function verb(n2) {
    return function (v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while ((g2 && ((g2 = 0), op[0] && (_2 = 0)), _2))
      try {
        if (
          ((f2 = 1),
          y2 &&
            (t2 =
              op[0] & 2
                ? y2["return"]
                : op[0]
                  ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0)
                  : y2.next) &&
            !(t2 = t2.call(y2, op[1])).done)
        )
          return t2;
        if (((y2 = 0), t2)) op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (
              !((t2 = _2.trys), (t2 = t2.length > 0 && t2[t2.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || (op[1] > t2[0] && op[1] < t2[3]))) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2]) _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function e(e2, t2) {
  var i2 = {};
  for (var o2 in e2)
    Object.prototype.hasOwnProperty.call(e2, o2) &&
      t2.indexOf(o2) < 0 &&
      (i2[o2] = e2[o2]);
  if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
    var n2 = 0;
    for (o2 = Object.getOwnPropertySymbols(e2); n2 < o2.length; n2++)
      t2.indexOf(o2[n2]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e2, o2[n2]) &&
        (i2[o2[n2]] = e2[o2[n2]]);
  }
  return i2;
}
var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
          ? self
          : {};
function i(e2) {
  return e2 &&
    e2.__esModule &&
    Object.prototype.hasOwnProperty.call(e2, "default")
    ? e2.default
    : e2;
}
function o(e2, t2) {
  return e2((t2 = { exports: {} }), t2.exports), t2.exports;
}
var n = o(function (e2, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  var i2 = (function () {
    function e3() {
      var e4 = this;
      (this.locked = /* @__PURE__ */ new Map()),
        (this.addToLocked = function (t3, i3) {
          var o2 = e4.locked.get(t3);
          void 0 === o2
            ? void 0 === i3
              ? e4.locked.set(t3, [])
              : e4.locked.set(t3, [i3])
            : void 0 !== i3 && (o2.unshift(i3), e4.locked.set(t3, o2));
        }),
        (this.isLocked = function (t3) {
          return e4.locked.has(t3);
        }),
        (this.lock = function (t3) {
          return new Promise(function (i3, o2) {
            e4.isLocked(t3)
              ? e4.addToLocked(t3, i3)
              : (e4.addToLocked(t3), i3());
          });
        }),
        (this.unlock = function (t3) {
          var i3 = e4.locked.get(t3);
          if (void 0 !== i3 && 0 !== i3.length) {
            var o2 = i3.pop();
            e4.locked.set(t3, i3), void 0 !== o2 && setTimeout(o2, 0);
          } else e4.locked.delete(t3);
        });
    }
    return (
      (e3.getInstance = function () {
        return void 0 === e3.instance && (e3.instance = new e3()), e3.instance;
      }),
      e3
    );
  })();
  t2.default = function () {
    return i2.getInstance();
  };
});
i(n);
var a = i(
  o(function (e2, i2) {
    var o2 =
        (t && t.__awaiter) ||
        function (e3, t2, i3, o3) {
          return new (i3 || (i3 = Promise))(function (n2, a3) {
            function r3(e4) {
              try {
                c3(o3.next(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function s3(e4) {
              try {
                c3(o3.throw(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function c3(e4) {
              e4.done
                ? n2(e4.value)
                : new i3(function (t3) {
                    t3(e4.value);
                  }).then(r3, s3);
            }
            c3((o3 = o3.apply(e3, t2 || [])).next());
          });
        },
      a2 =
        (t && t.__generator) ||
        function (e3, t2) {
          var i3,
            o3,
            n2,
            a3,
            r3 = {
              label: 0,
              sent: function () {
                if (1 & n2[0]) throw n2[1];
                return n2[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a3 = { next: s3(0), throw: s3(1), return: s3(2) }),
            "function" == typeof Symbol &&
              (a3[Symbol.iterator] = function () {
                return this;
              }),
            a3
          );
          function s3(a4) {
            return function (s4) {
              return (function (a5) {
                if (i3) throw new TypeError("Generator is already executing.");
                for (; r3; )
                  try {
                    if (
                      ((i3 = 1),
                      o3 &&
                        (n2 =
                          2 & a5[0]
                            ? o3.return
                            : a5[0]
                              ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0)
                              : o3.next) &&
                        !(n2 = n2.call(o3, a5[1])).done)
                    )
                      return n2;
                    switch (
                      ((o3 = 0), n2 && (a5 = [2 & a5[0], n2.value]), a5[0])
                    ) {
                      case 0:
                      case 1:
                        n2 = a5;
                        break;
                      case 4:
                        return r3.label++, { value: a5[1], done: false };
                      case 5:
                        r3.label++, (o3 = a5[1]), (a5 = [0]);
                        continue;
                      case 7:
                        (a5 = r3.ops.pop()), r3.trys.pop();
                        continue;
                      default:
                        if (
                          !((n2 = r3.trys),
                          (n2 = n2.length > 0 && n2[n2.length - 1]) ||
                            (6 !== a5[0] && 2 !== a5[0]))
                        ) {
                          r3 = 0;
                          continue;
                        }
                        if (
                          3 === a5[0] &&
                          (!n2 || (a5[1] > n2[0] && a5[1] < n2[3]))
                        ) {
                          r3.label = a5[1];
                          break;
                        }
                        if (6 === a5[0] && r3.label < n2[1]) {
                          (r3.label = n2[1]), (n2 = a5);
                          break;
                        }
                        if (n2 && r3.label < n2[2]) {
                          (r3.label = n2[2]), r3.ops.push(a5);
                          break;
                        }
                        n2[2] && r3.ops.pop(), r3.trys.pop();
                        continue;
                    }
                    a5 = t2.call(e3, r3);
                  } catch (e4) {
                    (a5 = [6, e4]), (o3 = 0);
                  } finally {
                    i3 = n2 = 0;
                  }
                if (5 & a5[0]) throw a5[1];
                return { value: a5[0] ? a5[1] : void 0, done: true };
              })([a4, s4]);
            };
          }
        },
      r2 = t;
    Object.defineProperty(i2, "__esModule", { value: true });
    var s2 = "browser-tabs-lock-key",
      c2 = {
        key: function (e3) {
          return o2(r2, void 0, void 0, function () {
            return a2(this, function (e4) {
              throw new Error("Unsupported");
            });
          });
        },
        getItem: function (e3) {
          return o2(r2, void 0, void 0, function () {
            return a2(this, function (e4) {
              throw new Error("Unsupported");
            });
          });
        },
        clear: function () {
          return o2(r2, void 0, void 0, function () {
            return a2(this, function (e3) {
              return [2, window.localStorage.clear()];
            });
          });
        },
        removeItem: function (e3) {
          return o2(r2, void 0, void 0, function () {
            return a2(this, function (e4) {
              throw new Error("Unsupported");
            });
          });
        },
        setItem: function (e3, t2) {
          return o2(r2, void 0, void 0, function () {
            return a2(this, function (e4) {
              throw new Error("Unsupported");
            });
          });
        },
        keySync: function (e3) {
          return window.localStorage.key(e3);
        },
        getItemSync: function (e3) {
          return window.localStorage.getItem(e3);
        },
        clearSync: function () {
          return window.localStorage.clear();
        },
        removeItemSync: function (e3) {
          return window.localStorage.removeItem(e3);
        },
        setItemSync: function (e3, t2) {
          return window.localStorage.setItem(e3, t2);
        },
      };
    function d2(e3) {
      return new Promise(function (t2) {
        return setTimeout(t2, e3);
      });
    }
    function u2(e3) {
      for (
        var t2 =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          i3 = "",
          o3 = 0;
        o3 < e3;
        o3++
      ) {
        i3 += t2[Math.floor(Math.random() * t2.length)];
      }
      return i3;
    }
    var l2 = (function () {
      function e3(t2) {
        (this.acquiredIatSet = /* @__PURE__ */ new Set()),
          (this.storageHandler = void 0),
          (this.id = Date.now().toString() + u2(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          (this.storageHandler = t2),
          void 0 === e3.waiters && (e3.waiters = []);
      }
      return (
        (e3.prototype.acquireLock = function (t2, i3) {
          return (
            void 0 === i3 && (i3 = 5e3),
            o2(this, void 0, void 0, function () {
              var o3, n2, r3, l3, h2, p2, m2;
              return a2(this, function (a3) {
                switch (a3.label) {
                  case 0:
                    (o3 = Date.now() + u2(4)),
                      (n2 = Date.now() + i3),
                      (r3 = s2 + "-" + t2),
                      (l3 =
                        void 0 === this.storageHandler
                          ? c2
                          : this.storageHandler),
                      (a3.label = 1);
                  case 1:
                    return Date.now() < n2 ? [4, d2(30)] : [3, 8];
                  case 2:
                    return (
                      a3.sent(),
                      null !== l3.getItemSync(r3)
                        ? [3, 5]
                        : ((h2 = this.id + "-" + t2 + "-" + o3),
                          [4, d2(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      a3.sent(),
                      l3.setItemSync(
                        r3,
                        JSON.stringify({
                          id: this.id,
                          iat: o3,
                          timeoutKey: h2,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        }),
                      ),
                      [4, d2(30)]
                    );
                  case 4:
                    return (
                      a3.sent(),
                      null !== (p2 = l3.getItemSync(r3)) &&
                      (m2 = JSON.parse(p2)).id === this.id &&
                      m2.iat === o3
                        ? (this.acquiredIatSet.add(o3),
                          this.refreshLockWhileAcquired(r3, o3),
                          [2, true])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      e3.lockCorrector(
                        void 0 === this.storageHandler
                          ? c2
                          : this.storageHandler,
                      ),
                      [4, this.waitForSomethingToChange(n2)]
                    );
                  case 6:
                    a3.sent(), (a3.label = 7);
                  case 7:
                    return (o3 = Date.now() + u2(4)), [3, 1];
                  case 8:
                    return [2, false];
                }
              });
            })
          );
        }),
        (e3.prototype.refreshLockWhileAcquired = function (e4, t2) {
          return o2(this, void 0, void 0, function () {
            var i3 = this;
            return a2(this, function (r3) {
              return (
                setTimeout(function () {
                  return o2(i3, void 0, void 0, function () {
                    var i4, o3, r4;
                    return a2(this, function (a3) {
                      switch (a3.label) {
                        case 0:
                          return [4, n.default().lock(t2)];
                        case 1:
                          return (
                            a3.sent(),
                            this.acquiredIatSet.has(t2)
                              ? ((i4 =
                                  void 0 === this.storageHandler
                                    ? c2
                                    : this.storageHandler),
                                null === (o3 = i4.getItemSync(e4))
                                  ? (n.default().unlock(t2), [2])
                                  : (((r4 = JSON.parse(o3)).timeRefreshed =
                                      Date.now()),
                                    i4.setItemSync(e4, JSON.stringify(r4)),
                                    n.default().unlock(t2),
                                    this.refreshLockWhileAcquired(e4, t2),
                                    [2]))
                              : (n.default().unlock(t2), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (e3.prototype.waitForSomethingToChange = function (t2) {
          return o2(this, void 0, void 0, function () {
            return a2(this, function (i3) {
              switch (i3.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (i4) {
                      var o3 = false,
                        n2 = Date.now(),
                        a3 = false;
                      function r3() {
                        if (
                          (a3 ||
                            (window.removeEventListener("storage", r3),
                            e3.removeFromWaiting(r3),
                            clearTimeout(s3),
                            (a3 = true)),
                          !o3)
                        ) {
                          o3 = true;
                          var t3 = 50 - (Date.now() - n2);
                          t3 > 0 ? setTimeout(i4, t3) : i4(null);
                        }
                      }
                      window.addEventListener("storage", r3),
                        e3.addToWaiting(r3);
                      var s3 = setTimeout(r3, Math.max(0, t2 - Date.now()));
                    }),
                  ];
                case 1:
                  return i3.sent(), [2];
              }
            });
          });
        }),
        (e3.addToWaiting = function (t2) {
          this.removeFromWaiting(t2),
            void 0 !== e3.waiters && e3.waiters.push(t2);
        }),
        (e3.removeFromWaiting = function (t2) {
          void 0 !== e3.waiters &&
            (e3.waiters = e3.waiters.filter(function (e4) {
              return e4 !== t2;
            }));
        }),
        (e3.notifyWaiters = function () {
          void 0 !== e3.waiters &&
            e3.waiters.slice().forEach(function (e4) {
              return e4();
            });
        }),
        (e3.prototype.releaseLock = function (e4) {
          return o2(this, void 0, void 0, function () {
            return a2(this, function (t2) {
              switch (t2.label) {
                case 0:
                  return [4, this.releaseLock__private__(e4)];
                case 1:
                  return [2, t2.sent()];
              }
            });
          });
        }),
        (e3.prototype.releaseLock__private__ = function (t2) {
          return o2(this, void 0, void 0, function () {
            var i3, o3, r3, d3;
            return a2(this, function (a3) {
              switch (a3.label) {
                case 0:
                  return (
                    (i3 =
                      void 0 === this.storageHandler
                        ? c2
                        : this.storageHandler),
                    (o3 = s2 + "-" + t2),
                    null === (r3 = i3.getItemSync(o3))
                      ? [2]
                      : (d3 = JSON.parse(r3)).id !== this.id
                        ? [3, 2]
                        : [4, n.default().lock(d3.iat)]
                  );
                case 1:
                  a3.sent(),
                    this.acquiredIatSet.delete(d3.iat),
                    i3.removeItemSync(o3),
                    n.default().unlock(d3.iat),
                    e3.notifyWaiters(),
                    (a3.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e3.lockCorrector = function (t2) {
          for (var i3 = Date.now() - 5e3, o3 = t2, n2 = [], a3 = 0; ; ) {
            var r3 = o3.keySync(a3);
            if (null === r3) break;
            n2.push(r3), a3++;
          }
          for (var c3 = false, d3 = 0; d3 < n2.length; d3++) {
            var u3 = n2[d3];
            if (u3.includes(s2)) {
              var l3 = o3.getItemSync(u3);
              if (null !== l3) {
                var h2 = JSON.parse(l3);
                ((void 0 === h2.timeRefreshed && h2.timeAcquired < i3) ||
                  (void 0 !== h2.timeRefreshed && h2.timeRefreshed < i3)) &&
                  (o3.removeItemSync(u3), (c3 = true));
              }
            }
          }
          c3 && e3.notifyWaiters();
        }),
        (e3.waiters = void 0),
        e3
      );
    })();
    i2.default = l2;
  }),
);
var r = { timeoutInSeconds: 60 };
var s = { name: "auth0-spa-js", version: "2.1.3" };
var c = () => Date.now();
var d = class _d extends Error {
  constructor(e2, t2) {
    super(t2),
      (this.error = e2),
      (this.error_description = t2),
      Object.setPrototypeOf(this, _d.prototype);
  }
  static fromPayload({ error: e2, error_description: t2 }) {
    return new _d(e2, t2);
  }
};
var u = class _u extends d {
  constructor(e2, t2, i2, o2 = null) {
    super(e2, t2),
      (this.state = i2),
      (this.appState = o2),
      Object.setPrototypeOf(this, _u.prototype);
  }
};
var l = class _l extends d {
  constructor() {
    super("timeout", "Timeout"), Object.setPrototypeOf(this, _l.prototype);
  }
};
var h = class _h extends l {
  constructor(e2) {
    super(), (this.popup = e2), Object.setPrototypeOf(this, _h.prototype);
  }
};
var p = class _p extends d {
  constructor(e2) {
    super("cancelled", "Popup closed"),
      (this.popup = e2),
      Object.setPrototypeOf(this, _p.prototype);
  }
};
var m = class _m extends d {
  constructor(e2, t2, i2) {
    super(e2, t2),
      (this.mfa_token = i2),
      Object.setPrototypeOf(this, _m.prototype);
  }
};
var f = class _f extends d {
  constructor(e2, t2) {
    super(
      "missing_refresh_token",
      `Missing Refresh Token (audience: '${g(e2, ["default"])}', scope: '${g(t2)}')`,
    ),
      (this.audience = e2),
      (this.scope = t2),
      Object.setPrototypeOf(this, _f.prototype);
  }
};
function g(e2, t2 = []) {
  return e2 && !t2.includes(e2) ? e2 : "";
}
var w = () => window.crypto;
var y = () => {
  const e2 =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
  let t2 = "";
  return (
    Array.from(w().getRandomValues(new Uint8Array(43))).forEach(
      (i2) => (t2 += e2[i2 % e2.length]),
    ),
    t2
  );
};
var k = (e2) => btoa(e2);
var v = (t2) => {
  var { clientId: i2 } = t2,
    o2 = e(t2, ["clientId"]);
  return new URLSearchParams(
    ((e2) =>
      Object.keys(e2)
        .filter((t3) => void 0 !== e2[t3])
        .reduce(
          (t3, i3) => Object.assign(Object.assign({}, t3), { [i3]: e2[i3] }),
          {},
        ))(Object.assign({ client_id: i2 }, o2)),
  ).toString();
};
var b = (e2) =>
  ((e3) =>
    decodeURIComponent(
      atob(e3)
        .split("")
        .map((e4) => "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    ))(e2.replace(/_/g, "/").replace(/-/g, "+"));
var _ = async (e2, t2) => {
  const i2 = await fetch(e2, t2);
  return { ok: i2.ok, json: await i2.json() };
};
var I = async (e2, t2, i2) => {
  const o2 = new AbortController();
  let n2;
  return (
    (t2.signal = o2.signal),
    Promise.race([
      _(e2, t2),
      new Promise((e3, t3) => {
        n2 = setTimeout(() => {
          o2.abort(), t3(new Error("Timeout when executing 'fetch'"));
        }, i2);
      }),
    ]).finally(() => {
      clearTimeout(n2);
    })
  );
};
var S = async (e2, t2, i2, o2, n2, a2, r2) => {
  return (
    (s2 = {
      auth: { audience: t2, scope: i2 },
      timeout: n2,
      fetchUrl: e2,
      fetchOptions: o2,
      useFormData: r2,
    }),
    (c2 = a2),
    new Promise(function (e3, t3) {
      const i3 = new MessageChannel();
      (i3.port1.onmessage = function (o3) {
        o3.data.error ? t3(new Error(o3.data.error)) : e3(o3.data),
          i3.port1.close();
      }),
        c2.postMessage(s2, [i3.port2]);
    })
  );
  var s2, c2;
};
var O = async (e2, t2, i2, o2, n2, a2, r2 = 1e4) =>
  n2 ? S(e2, t2, i2, o2, r2, n2, a2) : I(e2, o2, r2);
async function T(t2, i2) {
  var {
      baseUrl: o2,
      timeout: n2,
      audience: a2,
      scope: r2,
      auth0Client: c2,
      useFormData: u2,
    } = t2,
    l2 = e(t2, [
      "baseUrl",
      "timeout",
      "audience",
      "scope",
      "auth0Client",
      "useFormData",
    ]);
  const h2 = u2 ? v(l2) : JSON.stringify(l2);
  return await (async function (t3, i3, o3, n3, a3, r3, s2) {
    let c3,
      u3 = null;
    for (let e2 = 0; e2 < 3; e2++)
      try {
        (c3 = await O(t3, o3, n3, a3, r3, s2, i3)), (u3 = null);
        break;
      } catch (e3) {
        u3 = e3;
      }
    if (u3) throw u3;
    const l3 = c3.json,
      { error: h3, error_description: p2 } = l3,
      g2 = e(l3, ["error", "error_description"]),
      { ok: w2 } = c3;
    if (!w2) {
      const e2 = p2 || `HTTP error. Unable to fetch ${t3}`;
      if ("mfa_required" === h3) throw new m(h3, e2, g2.mfa_token);
      if ("missing_refresh_token" === h3) throw new f(o3, n3);
      throw new d(h3 || "request_error", e2);
    }
    return g2;
  })(
    `${o2}/oauth/token`,
    n2,
    a2 || "default",
    r2,
    {
      method: "POST",
      body: h2,
      headers: {
        "Content-Type": u2
          ? "application/x-www-form-urlencoded"
          : "application/json",
        "Auth0-Client": btoa(JSON.stringify(c2 || s)),
      },
    },
    i2,
    u2,
  );
}
var j = (...e2) => {
  return ((t2 = e2.filter(Boolean).join(" ").trim().split(/\s+/)),
  Array.from(new Set(t2))).join(" ");
  var t2;
};
var C = class _C {
  constructor(e2, t2 = "@@auth0spajs@@", i2) {
    (this.prefix = t2),
      (this.suffix = i2),
      (this.clientId = e2.clientId),
      (this.scope = e2.scope),
      (this.audience = e2.audience);
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix]
      .filter(Boolean)
      .join("::");
  }
  static fromKey(e2) {
    const [t2, i2, o2, n2] = e2.split("::");
    return new _C({ clientId: i2, scope: n2, audience: o2 }, t2);
  }
  static fromCacheEntry(e2) {
    const { scope: t2, audience: i2, client_id: o2 } = e2;
    return new _C({ scope: t2, audience: i2, clientId: o2 });
  }
};
var z = class {
  set(e2, t2) {
    localStorage.setItem(e2, JSON.stringify(t2));
  }
  get(e2) {
    const t2 = window.localStorage.getItem(e2);
    if (t2)
      try {
        return JSON.parse(t2);
      } catch (e3) {
        return;
      }
  }
  remove(e2) {
    localStorage.removeItem(e2);
  }
  allKeys() {
    return Object.keys(window.localStorage).filter((e2) =>
      e2.startsWith("@@auth0spajs@@"),
    );
  }
};
var P = class {
  constructor() {
    this.enclosedCache = /* @__PURE__ */ (function () {
      let e2 = {};
      return {
        set(t2, i2) {
          e2[t2] = i2;
        },
        get(t2) {
          const i2 = e2[t2];
          if (i2) return i2;
        },
        remove(t2) {
          delete e2[t2];
        },
        allKeys: () => Object.keys(e2),
      };
    })();
  }
};
var x = class {
  constructor(e2, t2, i2) {
    (this.cache = e2), (this.keyManifest = t2), (this.nowProvider = i2 || c);
  }
  async setIdToken(e2, t2, i2) {
    var o2;
    const n2 = this.getIdTokenCacheKey(e2);
    await this.cache.set(n2, { id_token: t2, decodedToken: i2 }),
      await (null === (o2 = this.keyManifest) || void 0 === o2
        ? void 0
        : o2.add(n2));
  }
  async getIdToken(e2) {
    const t2 = await this.cache.get(this.getIdTokenCacheKey(e2.clientId));
    if (!t2 && e2.scope && e2.audience) {
      const t3 = await this.get(e2);
      if (!t3) return;
      if (!t3.id_token || !t3.decodedToken) return;
      return { id_token: t3.id_token, decodedToken: t3.decodedToken };
    }
    if (t2) return { id_token: t2.id_token, decodedToken: t2.decodedToken };
  }
  async get(e2, t2 = 0) {
    var i2;
    let o2 = await this.cache.get(e2.toKey());
    if (!o2) {
      const t3 = await this.getCacheKeys();
      if (!t3) return;
      const i3 = this.matchExistingCacheKey(e2, t3);
      i3 && (o2 = await this.cache.get(i3));
    }
    if (!o2) return;
    const n2 = await this.nowProvider(),
      a2 = Math.floor(n2 / 1e3);
    return o2.expiresAt - t2 < a2
      ? o2.body.refresh_token
        ? ((o2.body = { refresh_token: o2.body.refresh_token }),
          await this.cache.set(e2.toKey(), o2),
          o2.body)
        : (await this.cache.remove(e2.toKey()),
          void (await (null === (i2 = this.keyManifest) || void 0 === i2
            ? void 0
            : i2.remove(e2.toKey()))))
      : o2.body;
  }
  async set(e2) {
    var t2;
    const i2 = new C({
        clientId: e2.client_id,
        scope: e2.scope,
        audience: e2.audience,
      }),
      o2 = await this.wrapCacheEntry(e2);
    await this.cache.set(i2.toKey(), o2),
      await (null === (t2 = this.keyManifest) || void 0 === t2
        ? void 0
        : t2.add(i2.toKey()));
  }
  async clear(e2) {
    var t2;
    const i2 = await this.getCacheKeys();
    i2 &&
      (await i2
        .filter((t3) => !e2 || t3.includes(e2))
        .reduce(async (e3, t3) => {
          await e3, await this.cache.remove(t3);
        }, Promise.resolve()),
      await (null === (t2 = this.keyManifest) || void 0 === t2
        ? void 0
        : t2.clear()));
  }
  async wrapCacheEntry(e2) {
    const t2 = await this.nowProvider();
    return { body: e2, expiresAt: Math.floor(t2 / 1e3) + e2.expires_in };
  }
  async getCacheKeys() {
    var e2;
    return this.keyManifest
      ? null === (e2 = await this.keyManifest.get()) || void 0 === e2
        ? void 0
        : e2.keys
      : this.cache.allKeys
        ? this.cache.allKeys()
        : void 0;
  }
  getIdTokenCacheKey(e2) {
    return new C({ clientId: e2 }, "@@auth0spajs@@", "@@user@@").toKey();
  }
  matchExistingCacheKey(e2, t2) {
    return t2.filter((t3) => {
      var i2;
      const o2 = C.fromKey(t3),
        n2 = new Set(o2.scope && o2.scope.split(" ")),
        a2 =
          (null === (i2 = e2.scope) || void 0 === i2
            ? void 0
            : i2.split(" ")) || [],
        r2 = o2.scope && a2.reduce((e3, t4) => e3 && n2.has(t4), true);
      return (
        "@@auth0spajs@@" === o2.prefix &&
        o2.clientId === e2.clientId &&
        o2.audience === e2.audience &&
        r2
      );
    })[0];
  }
};
var Z = class {
  constructor(e2, t2, i2) {
    (this.storage = e2),
      (this.clientId = t2),
      (this.cookieDomain = i2),
      (this.storageKey = `a0.spajs.txs.${this.clientId}`);
  }
  create(e2) {
    this.storage.save(this.storageKey, e2, {
      daysUntilExpire: 1,
      cookieDomain: this.cookieDomain,
    });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
};
var K = (e2) => "number" == typeof e2;
var W = [
  "iss",
  "aud",
  "exp",
  "nbf",
  "iat",
  "jti",
  "azp",
  "nonce",
  "auth_time",
  "at_hash",
  "c_hash",
  "acr",
  "amr",
  "sub_jwk",
  "cnf",
  "sip_from_tag",
  "sip_date",
  "sip_callid",
  "sip_cseq_num",
  "sip_via_branch",
  "orig",
  "dest",
  "mky",
  "events",
  "toe",
  "txn",
  "rph",
  "sid",
  "vot",
  "vtm",
];
var E = (e2) => {
  if (!e2.id_token) throw new Error("ID token is required but missing");
  const t2 = ((e3) => {
    const t3 = e3.split("."),
      [i3, o3, n3] = t3;
    if (3 !== t3.length || !i3 || !o3 || !n3)
      throw new Error("ID token could not be decoded");
    const a2 = JSON.parse(b(o3)),
      r2 = { __raw: e3 },
      s2 = {};
    return (
      Object.keys(a2).forEach((e4) => {
        (r2[e4] = a2[e4]), W.includes(e4) || (s2[e4] = a2[e4]);
      }),
      {
        encoded: { header: i3, payload: o3, signature: n3 },
        header: JSON.parse(b(i3)),
        claims: r2,
        user: s2,
      }
    );
  })(e2.id_token);
  if (!t2.claims.iss)
    throw new Error(
      "Issuer (iss) claim must be a string present in the ID token",
    );
  if (t2.claims.iss !== e2.iss)
    throw new Error(
      `Issuer (iss) claim mismatch in the ID token; expected "${e2.iss}", found "${t2.claims.iss}"`,
    );
  if (!t2.user.sub)
    throw new Error(
      "Subject (sub) claim must be a string present in the ID token",
    );
  if ("RS256" !== t2.header.alg)
    throw new Error(
      `Signature algorithm of "${t2.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`,
    );
  if (
    !t2.claims.aud ||
    ("string" != typeof t2.claims.aud && !Array.isArray(t2.claims.aud))
  )
    throw new Error(
      "Audience (aud) claim must be a string or array of strings present in the ID token",
    );
  if (Array.isArray(t2.claims.aud)) {
    if (!t2.claims.aud.includes(e2.aud))
      throw new Error(
        `Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but was not one of "${t2.claims.aud.join(", ")}"`,
      );
    if (t2.claims.aud.length > 1) {
      if (!t2.claims.azp)
        throw new Error(
          "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values",
        );
      if (t2.claims.azp !== e2.aud)
        throw new Error(
          `Authorized Party (azp) claim mismatch in the ID token; expected "${e2.aud}", found "${t2.claims.azp}"`,
        );
    }
  } else if (t2.claims.aud !== e2.aud)
    throw new Error(
      `Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but found "${t2.claims.aud}"`,
    );
  if (e2.nonce) {
    if (!t2.claims.nonce)
      throw new Error(
        "Nonce (nonce) claim must be a string present in the ID token",
      );
    if (t2.claims.nonce !== e2.nonce)
      throw new Error(
        `Nonce (nonce) claim mismatch in the ID token; expected "${e2.nonce}", found "${t2.claims.nonce}"`,
      );
  }
  if (e2.max_age && !K(t2.claims.auth_time))
    throw new Error(
      "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified",
    );
  if (null == t2.claims.exp || !K(t2.claims.exp))
    throw new Error(
      "Expiration Time (exp) claim must be a number present in the ID token",
    );
  if (!K(t2.claims.iat))
    throw new Error(
      "Issued At (iat) claim must be a number present in the ID token",
    );
  const i2 = e2.leeway || 60,
    o2 = new Date(e2.now || Date.now()),
    n2 = /* @__PURE__ */ new Date(0);
  if ((n2.setUTCSeconds(t2.claims.exp + i2), o2 > n2))
    throw new Error(
      `Expiration Time (exp) claim error in the ID token; current time (${o2}) is after expiration time (${n2})`,
    );
  if (null != t2.claims.nbf && K(t2.claims.nbf)) {
    const e3 = /* @__PURE__ */ new Date(0);
    if ((e3.setUTCSeconds(t2.claims.nbf - i2), o2 < e3))
      throw new Error(
        `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o2}) is before ${e3}`,
      );
  }
  if (null != t2.claims.auth_time && K(t2.claims.auth_time)) {
    const n3 = /* @__PURE__ */ new Date(0);
    if (
      (n3.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + i2),
      o2 > n3)
    )
      throw new Error(
        `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o2}) is after last auth at ${n3}`,
      );
  }
  if (e2.organization) {
    const i3 = e2.organization.trim();
    if (i3.startsWith("org_")) {
      const e3 = i3;
      if (!t2.claims.org_id)
        throw new Error(
          "Organization ID (org_id) claim must be a string present in the ID token",
        );
      if (e3 !== t2.claims.org_id)
        throw new Error(
          `Organization ID (org_id) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_id}"`,
        );
    } else {
      const e3 = i3.toLowerCase();
      if (!t2.claims.org_name)
        throw new Error(
          "Organization Name (org_name) claim must be a string present in the ID token",
        );
      if (e3 !== t2.claims.org_name)
        throw new Error(
          `Organization Name (org_name) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_name}"`,
        );
    }
  }
  return t2;
};
var R = o(function (e2, i2) {
  var o2 =
    (t && t.__assign) ||
    function () {
      return (
        (o2 =
          Object.assign ||
          function (e3) {
            for (var t2, i3 = 1, o3 = arguments.length; i3 < o3; i3++)
              for (var n3 in (t2 = arguments[i3]))
                Object.prototype.hasOwnProperty.call(t2, n3) &&
                  (e3[n3] = t2[n3]);
            return e3;
          }),
        o2.apply(this, arguments)
      );
    };
  function n2(e3, t2) {
    if (!t2) return "";
    var i3 = "; " + e3;
    return true === t2 ? i3 : i3 + "=" + t2;
  }
  function a2(e3, t2, i3) {
    return (
      encodeURIComponent(e3)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29") +
      "=" +
      encodeURIComponent(t2).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent,
      ) +
      (function (e4) {
        if ("number" == typeof e4.expires) {
          var t3 = /* @__PURE__ */ new Date();
          t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e4.expires),
            (e4.expires = t3);
        }
        return (
          n2("Expires", e4.expires ? e4.expires.toUTCString() : "") +
          n2("Domain", e4.domain) +
          n2("Path", e4.path) +
          n2("Secure", e4.secure) +
          n2("SameSite", e4.sameSite)
        );
      })(i3)
    );
  }
  function r2(e3) {
    for (
      var t2 = {},
        i3 = e3 ? e3.split("; ") : [],
        o3 = /(%[\dA-F]{2})+/gi,
        n3 = 0;
      n3 < i3.length;
      n3++
    ) {
      var a3 = i3[n3].split("="),
        r3 = a3.slice(1).join("=");
      '"' === r3.charAt(0) && (r3 = r3.slice(1, -1));
      try {
        t2[a3[0].replace(o3, decodeURIComponent)] = r3.replace(
          o3,
          decodeURIComponent,
        );
      } catch (e4) {}
    }
    return t2;
  }
  function s2() {
    return r2(document.cookie);
  }
  function c2(e3, t2, i3) {
    document.cookie = a2(e3, t2, o2({ path: "/" }, i3));
  }
  (i2.__esModule = true),
    (i2.encode = a2),
    (i2.parse = r2),
    (i2.getAll = s2),
    (i2.get = function (e3) {
      return s2()[e3];
    }),
    (i2.set = c2),
    (i2.remove = function (e3, t2) {
      c2(e3, "", o2(o2({}, t2), { expires: -1 }));
    });
});
i(R), R.encode, R.parse, R.getAll;
var U = R.get;
var L = R.set;
var D = R.remove;
var X = {
  get(e2) {
    const t2 = U(e2);
    if (void 0 !== t2) return JSON.parse(t2);
  },
  save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol &&
      (o2 = { secure: true, sameSite: "none" }),
      (null == i2 ? void 0 : i2.daysUntilExpire) &&
        (o2.expires = i2.daysUntilExpire),
      (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain),
      L(e2, JSON.stringify(t2), o2);
  },
  remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain),
      D(e2, i2);
  },
};
var N = {
  get(e2) {
    const t2 = X.get(e2);
    return t2 || X.get(`_legacy_${e2}`);
  },
  save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol && (o2 = { secure: true }),
      (null == i2 ? void 0 : i2.daysUntilExpire) &&
        (o2.expires = i2.daysUntilExpire),
      (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain),
      L(`_legacy_${e2}`, JSON.stringify(t2), o2),
      X.save(e2, t2, i2);
  },
  remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain),
      D(e2, i2),
      X.remove(e2, t2),
      X.remove(`_legacy_${e2}`, t2);
  },
};
var J = {
  get(e2) {
    if ("undefined" == typeof sessionStorage) return;
    const t2 = sessionStorage.getItem(e2);
    return null != t2 ? JSON.parse(t2) : void 0;
  },
  save(e2, t2) {
    sessionStorage.setItem(e2, JSON.stringify(t2));
  },
  remove(e2) {
    sessionStorage.removeItem(e2);
  },
};
function F(e2, t2, i2) {
  var o2 = void 0 === t2 ? null : t2,
    n2 = (function (e3, t3) {
      var i3 = atob(e3);
      if (t3) {
        for (
          var o3 = new Uint8Array(i3.length), n3 = 0, a3 = i3.length;
          n3 < a3;
          ++n3
        )
          o3[n3] = i3.charCodeAt(n3);
        return String.fromCharCode.apply(null, new Uint16Array(o3.buffer));
      }
      return i3;
    })(e2, void 0 !== i2 && i2),
    a2 = n2.indexOf("\n", 10) + 1,
    r2 = n2.substring(a2) + (o2 ? "//# sourceMappingURL=" + o2 : ""),
    s2 = new Blob([r2], { type: "application/javascript" });
  return URL.createObjectURL(s2);
}
var H;
var Y;
var G;
var V;
var M =
  ((H =
    "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
  (Y = null),
  (G = false),
  function (e2) {
    return (V = V || F(H, Y, G)), new Worker(V, e2);
  });
var A = {};
var B = class {
  constructor(e2, t2) {
    (this.cache = e2),
      (this.clientId = t2),
      (this.manifestKey = this.createManifestKeyFrom(this.clientId));
  }
  async add(e2) {
    var t2;
    const i2 = new Set(
      (null === (t2 = await this.cache.get(this.manifestKey)) || void 0 === t2
        ? void 0
        : t2.keys) || [],
    );
    i2.add(e2), await this.cache.set(this.manifestKey, { keys: [...i2] });
  }
  async remove(e2) {
    const t2 = await this.cache.get(this.manifestKey);
    if (t2) {
      const i2 = new Set(t2.keys);
      return (
        i2.delete(e2),
        i2.size > 0
          ? await this.cache.set(this.manifestKey, { keys: [...i2] })
          : await this.cache.remove(this.manifestKey)
      );
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(e2) {
    return `@@auth0spajs@@::${e2}`;
  }
};
var $ = { memory: () => new P().enclosedCache, localstorage: () => new z() };
var q = (e2) => $[e2];
var Q = (t2) => {
  const { openUrl: i2, onRedirect: o2 } = t2,
    n2 = e(t2, ["openUrl", "onRedirect"]);
  return Object.assign(Object.assign({}, n2), {
    openUrl: false === i2 || i2 ? i2 : o2,
  });
};
var ee = new a();
var te = class {
  constructor(e2) {
    let t2, i2;
    if (
      ((this.userCache = new P().enclosedCache),
      (this.defaultOptions = {
        authorizationParams: { scope: "openid profile email" },
        useRefreshTokensFallback: false,
        useFormData: true,
      }),
      (this._releaseLockOnPageHide = async () => {
        await ee.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }),
      (this.options = Object.assign(
        Object.assign(Object.assign({}, this.defaultOptions), e2),
        {
          authorizationParams: Object.assign(
            Object.assign({}, this.defaultOptions.authorizationParams),
            e2.authorizationParams,
          ),
        },
      )),
      "undefined" != typeof window &&
        (() => {
          if (!w())
            throw new Error(
              "For security reasons, `window.crypto` is required to run `auth0-spa-js`.",
            );
          if (void 0 === w().subtle)
            throw new Error(
              "\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ",
            );
        })(),
      e2.cache &&
        e2.cacheLocation &&
        console.warn(
          "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.",
        ),
      e2.cache)
    )
      i2 = e2.cache;
    else {
      if (((t2 = e2.cacheLocation || "memory"), !q(t2)))
        throw new Error(`Invalid cache location "${t2}"`);
      i2 = q(t2)();
    }
    (this.httpTimeoutMs = e2.httpTimeoutInSeconds
      ? 1e3 * e2.httpTimeoutInSeconds
      : 1e4),
      (this.cookieStorage = false === e2.legacySameSiteCookie ? X : N),
      (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
      (this.isAuthenticatedCookieName = ((e3) =>
        `auth0.${e3}.is.authenticated`)(this.options.clientId)),
      (this.sessionCheckExpiryDays = e2.sessionCheckExpiryDays || 1);
    const o2 = e2.useCookiesForTransactions ? this.cookieStorage : J;
    var n2;
    (this.scope = j(
      "openid",
      this.options.authorizationParams.scope,
      this.options.useRefreshTokens ? "offline_access" : "",
    )),
      (this.transactionManager = new Z(
        o2,
        this.options.clientId,
        this.options.cookieDomain,
      )),
      (this.nowProvider = this.options.nowProvider || c),
      (this.cacheManager = new x(
        i2,
        i2.allKeys ? void 0 : new B(i2, this.options.clientId),
        this.nowProvider,
      )),
      (this.domainUrl =
        ((n2 = this.options.domain),
        /^https?:\/\//.test(n2) ? n2 : `https://${n2}`)),
      (this.tokenIssuer = ((e3, t3) =>
        e3 ? (e3.startsWith("https://") ? e3 : `https://${e3}/`) : `${t3}/`)(
        this.options.issuer,
        this.domainUrl,
      )),
      "undefined" != typeof window &&
        window.Worker &&
        this.options.useRefreshTokens &&
        "memory" === t2 &&
        (this.options.workerUrl
          ? (this.worker = new Worker(this.options.workerUrl))
          : (this.worker = new M()));
  }
  _url(e2) {
    const t2 = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || s)),
    );
    return `${this.domainUrl}${e2}&auth0Client=${t2}`;
  }
  _authorizeUrl(e2) {
    return this._url(`/authorize?${v(e2)}`);
  }
  async _verifyIdToken(e2, t2, i2) {
    const o2 = await this.nowProvider();
    return E({
      iss: this.tokenIssuer,
      aud: this.options.clientId,
      id_token: e2,
      nonce: t2,
      organization: i2,
      leeway: this.options.leeway,
      max_age:
        ((n2 = this.options.authorizationParams.max_age),
        "string" != typeof n2 ? n2 : parseInt(n2, 10) || void 0),
      now: o2,
    });
    var n2;
  }
  _processOrgHint(e2) {
    e2
      ? this.cookieStorage.save(this.orgHintCookieName, e2, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        })
      : this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        });
  }
  async _prepareAuthorizeUrl(e2, t2, i2) {
    const o2 = k(y()),
      n2 = k(y()),
      a2 = y(),
      r2 = ((e3) => {
        const t3 = new Uint8Array(e3);
        return ((e4) => {
          const t4 = { "+": "-", "/": "_", "=": "" };
          return e4.replace(/[+/=]/g, (e5) => t4[e5]);
        })(window.btoa(String.fromCharCode(...Array.from(t3))));
      })(
        await (async (e3) => {
          const t3 = w().subtle.digest(
            { name: "SHA-256" },
            new TextEncoder().encode(e3),
          );
          return await t3;
        })(a2),
      ),
      s2 = ((e3, t3, i3, o3, n3, a3, r3, s3) =>
        Object.assign(
          Object.assign(
            Object.assign({ client_id: e3.clientId }, e3.authorizationParams),
            i3,
          ),
          {
            scope: j(t3, i3.scope),
            response_type: "code",
            response_mode: s3 || "query",
            state: o3,
            nonce: n3,
            redirect_uri: r3 || e3.authorizationParams.redirect_uri,
            code_challenge: a3,
            code_challenge_method: "S256",
          },
        ))(
        this.options,
        this.scope,
        e2,
        o2,
        n2,
        r2,
        e2.redirect_uri || this.options.authorizationParams.redirect_uri || i2,
        null == t2 ? void 0 : t2.response_mode,
      ),
      c2 = this._authorizeUrl(s2);
    return {
      nonce: n2,
      code_verifier: a2,
      scope: s2.scope,
      audience: s2.audience || "default",
      redirect_uri: s2.redirect_uri,
      state: o2,
      url: c2,
    };
  }
  async loginWithPopup(e2, t2) {
    var i2;
    if (
      ((e2 = e2 || {}),
      !(t2 = t2 || {}).popup &&
        ((t2.popup = ((e3) => {
          const t3 = window.screenX + (window.innerWidth - 400) / 2,
            i3 = window.screenY + (window.innerHeight - 600) / 2;
          return window.open(
            e3,
            "auth0:authorize:popup",
            `left=${t3},top=${i3},width=400,height=600,resizable,scrollbars=yes,status=1`,
          );
        })("")),
        !t2.popup))
    )
      throw new Error(
        "Unable to open a popup for loginWithPopup - window.open returned `null`",
      );
    const o2 = await this._prepareAuthorizeUrl(
      e2.authorizationParams || {},
      { response_mode: "web_message" },
      window.location.origin,
    );
    t2.popup.location.href = o2.url;
    const n2 = await ((e3) =>
      new Promise((t3, i3) => {
        let o3;
        const n3 = setInterval(() => {
            e3.popup &&
              e3.popup.closed &&
              (clearInterval(n3),
              clearTimeout(a3),
              window.removeEventListener("message", o3, false),
              i3(new p(e3.popup)));
          }, 1e3),
          a3 = setTimeout(
            () => {
              clearInterval(n3),
                i3(new h(e3.popup)),
                window.removeEventListener("message", o3, false);
            },
            1e3 * (e3.timeoutInSeconds || 60),
          );
        (o3 = function (r2) {
          if (r2.data && "authorization_response" === r2.data.type) {
            if (
              (clearTimeout(a3),
              clearInterval(n3),
              window.removeEventListener("message", o3, false),
              e3.popup.close(),
              r2.data.response.error)
            )
              return i3(d.fromPayload(r2.data.response));
            t3(r2.data.response);
          }
        }),
          window.addEventListener("message", o3);
      }))(
      Object.assign(Object.assign({}, t2), {
        timeoutInSeconds:
          t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
      }),
    );
    if (o2.state !== n2.state) throw new d("state_mismatch", "Invalid state");
    const a2 =
      (null === (i2 = e2.authorizationParams) || void 0 === i2
        ? void 0
        : i2.organization) || this.options.authorizationParams.organization;
    await this._requestToken(
      {
        audience: o2.audience,
        scope: o2.scope,
        code_verifier: o2.code_verifier,
        grant_type: "authorization_code",
        code: n2.code,
        redirect_uri: o2.redirect_uri,
      },
      { nonceIn: o2.nonce, organization: a2 },
    );
  }
  async getUser() {
    var e2;
    const t2 = await this._getIdTokenFromCache();
    return null === (e2 = null == t2 ? void 0 : t2.decodedToken) ||
      void 0 === e2
      ? void 0
      : e2.user;
  }
  async getIdTokenClaims() {
    var e2;
    const t2 = await this._getIdTokenFromCache();
    return null === (e2 = null == t2 ? void 0 : t2.decodedToken) ||
      void 0 === e2
      ? void 0
      : e2.claims;
  }
  async loginWithRedirect(t2 = {}) {
    var i2;
    const o2 = Q(t2),
      { openUrl: n2, fragment: a2, appState: r2 } = o2,
      s2 = e(o2, ["openUrl", "fragment", "appState"]),
      c2 =
        (null === (i2 = s2.authorizationParams) || void 0 === i2
          ? void 0
          : i2.organization) || this.options.authorizationParams.organization,
      d2 = await this._prepareAuthorizeUrl(s2.authorizationParams || {}),
      { url: u2 } = d2,
      l2 = e(d2, ["url"]);
    this.transactionManager.create(
      Object.assign(
        Object.assign(Object.assign({}, l2), { appState: r2 }),
        c2 && { organization: c2 },
      ),
    );
    const h2 = a2 ? `${u2}#${a2}` : u2;
    n2 ? await n2(h2) : window.location.assign(h2);
  }
  async handleRedirectCallback(e2 = window.location.href) {
    const t2 = e2.split("?").slice(1);
    if (0 === t2.length)
      throw new Error("There are no query params available for parsing.");
    const {
        state: i2,
        code: o2,
        error: n2,
        error_description: a2,
      } = ((e3) => {
        e3.indexOf("#") > -1 && (e3 = e3.substring(0, e3.indexOf("#")));
        const t3 = new URLSearchParams(e3);
        return {
          state: t3.get("state"),
          code: t3.get("code") || void 0,
          error: t3.get("error") || void 0,
          error_description: t3.get("error_description") || void 0,
        };
      })(t2.join("")),
      r2 = this.transactionManager.get();
    if (!r2) throw new d("missing_transaction", "Invalid state");
    if ((this.transactionManager.remove(), n2))
      throw new u(n2, a2 || n2, i2, r2.appState);
    if (!r2.code_verifier || (r2.state && r2.state !== i2))
      throw new d("state_mismatch", "Invalid state");
    const s2 = r2.organization,
      c2 = r2.nonce,
      l2 = r2.redirect_uri;
    return (
      await this._requestToken(
        Object.assign(
          {
            audience: r2.audience,
            scope: r2.scope,
            code_verifier: r2.code_verifier,
            grant_type: "authorization_code",
            code: o2,
          },
          l2 ? { redirect_uri: l2 } : {},
        ),
        { nonceIn: c2, organization: s2 },
      ),
      { appState: r2.appState }
    );
  }
  async checkSession(e2) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
        this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(e2);
    } catch (e3) {}
  }
  async getTokenSilently(e2 = {}) {
    var t2;
    const i2 = Object.assign(Object.assign({ cacheMode: "on" }, e2), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            e2.authorizationParams,
          ),
          {
            scope: j(
              this.scope,
              null === (t2 = e2.authorizationParams) || void 0 === t2
                ? void 0
                : t2.scope,
            ),
          },
        ),
      }),
      o2 = await ((e3, t3) => {
        let i3 = A[t3];
        return (
          i3 ||
            ((i3 = e3().finally(() => {
              delete A[t3], (i3 = null);
            })),
            (A[t3] = i3)),
          i3
        );
      })(
        () => this._getTokenSilently(i2),
        `${this.options.clientId}::${i2.authorizationParams.audience}::${i2.authorizationParams.scope}`,
      );
    return e2.detailedResponse ? o2 : null == o2 ? void 0 : o2.access_token;
  }
  async _getTokenSilently(t2) {
    const { cacheMode: i2 } = t2,
      o2 = e(t2, ["cacheMode"]);
    if ("off" !== i2) {
      const e2 = await this._getEntryFromCache({
        scope: o2.authorizationParams.scope,
        audience: o2.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      });
      if (e2) return e2;
    }
    if ("cache-only" !== i2) {
      if (
        !(await (async (e2, t3 = 3) => {
          for (let i3 = 0; i3 < t3; i3++) if (await e2()) return true;
          return false;
        })(() => ee.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
      )
        throw new l();
      try {
        if (
          (window.addEventListener("pagehide", this._releaseLockOnPageHide),
          "off" !== i2)
        ) {
          const e3 = await this._getEntryFromCache({
            scope: o2.authorizationParams.scope,
            audience: o2.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          });
          if (e3) return e3;
        }
        const e2 = this.options.useRefreshTokens
            ? await this._getTokenUsingRefreshToken(o2)
            : await this._getTokenFromIFrame(o2),
          {
            id_token: t3,
            access_token: n2,
            oauthTokenScope: a2,
            expires_in: r2,
          } = e2;
        return Object.assign(
          Object.assign(
            { id_token: t3, access_token: n2 },
            a2 ? { scope: a2 } : null,
          ),
          { expires_in: r2 },
        );
      } finally {
        await ee.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(e2 = {}, t2 = {}) {
    var i2;
    const o2 = Object.assign(Object.assign({}, e2), {
      authorizationParams: Object.assign(
        Object.assign(
          Object.assign({}, this.options.authorizationParams),
          e2.authorizationParams,
        ),
        {
          scope: j(
            this.scope,
            null === (i2 = e2.authorizationParams) || void 0 === i2
              ? void 0
              : i2.scope,
          ),
        },
      ),
    });
    (t2 = Object.assign(Object.assign({}, r), t2)),
      await this.loginWithPopup(o2, t2);
    return (
      await this.cacheManager.get(
        new C({
          scope: o2.authorizationParams.scope,
          audience: o2.authorizationParams.audience || "default",
          clientId: this.options.clientId,
        }),
      )
    ).access_token;
  }
  async isAuthenticated() {
    return !!(await this.getUser());
  }
  _buildLogoutUrl(t2) {
    null !== t2.clientId
      ? (t2.clientId = t2.clientId || this.options.clientId)
      : delete t2.clientId;
    const i2 = t2.logoutParams || {},
      { federated: o2 } = i2,
      n2 = e(i2, ["federated"]),
      a2 = o2 ? "&federated" : "";
    return (
      this._url(
        `/v2/logout?${v(Object.assign({ clientId: t2.clientId }, n2))}`,
      ) + a2
    );
  }
  async logout(t2 = {}) {
    const i2 = Q(t2),
      { openUrl: o2 } = i2,
      n2 = e(i2, ["openUrl"]);
    null === t2.clientId
      ? await this.cacheManager.clear()
      : await this.cacheManager.clear(t2.clientId || this.options.clientId),
      this.cookieStorage.remove(this.orgHintCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.cookieStorage.remove(this.isAuthenticatedCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.userCache.remove("@@user@@");
    const a2 = this._buildLogoutUrl(n2);
    o2 ? await o2(a2) : false !== o2 && window.location.assign(a2);
  }
  async _getTokenFromIFrame(e2) {
    const t2 = Object.assign(Object.assign({}, e2.authorizationParams), {
        prompt: "none",
      }),
      i2 = this.cookieStorage.get(this.orgHintCookieName);
    i2 && !t2.organization && (t2.organization = i2);
    const {
      url: o2,
      state: n2,
      nonce: a2,
      code_verifier: r2,
      redirect_uri: s2,
      scope: c2,
      audience: u2,
    } = await this._prepareAuthorizeUrl(
      t2,
      { response_mode: "web_message" },
      window.location.origin,
    );
    try {
      if (window.crossOriginIsolated)
        throw new d(
          "login_required",
          "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.",
        );
      const i3 = e2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
        h2 = await ((e3, t3, i4 = 60) =>
          new Promise((o3, n3) => {
            const a3 = window.document.createElement("iframe");
            a3.setAttribute("width", "0"),
              a3.setAttribute("height", "0"),
              (a3.style.display = "none");
            const r3 = () => {
              window.document.body.contains(a3) &&
                (window.document.body.removeChild(a3),
                window.removeEventListener("message", s3, false));
            };
            let s3;
            const c3 = setTimeout(() => {
              n3(new l()), r3();
            }, 1e3 * i4);
            (s3 = function (e4) {
              if (e4.origin != t3) return;
              if (!e4.data || "authorization_response" !== e4.data.type) return;
              const i5 = e4.source;
              i5 && i5.close(),
                e4.data.response.error
                  ? n3(d.fromPayload(e4.data.response))
                  : o3(e4.data.response),
                clearTimeout(c3),
                window.removeEventListener("message", s3, false),
                setTimeout(r3, 2e3);
            }),
              window.addEventListener("message", s3, false),
              window.document.body.appendChild(a3),
              a3.setAttribute("src", e3);
          }))(o2, this.domainUrl, i3);
      if (n2 !== h2.state) throw new d("state_mismatch", "Invalid state");
      const p2 = await this._requestToken(
        Object.assign(Object.assign({}, e2.authorizationParams), {
          code_verifier: r2,
          code: h2.code,
          grant_type: "authorization_code",
          redirect_uri: s2,
          timeout: e2.authorizationParams.timeout || this.httpTimeoutMs,
        }),
        { nonceIn: a2, organization: t2.organization },
      );
      return Object.assign(Object.assign({}, p2), {
        scope: c2,
        oauthTokenScope: p2.scope,
        audience: u2,
      });
    } catch (e3) {
      throw (
        ("login_required" === e3.error && this.logout({ openUrl: false }), e3)
      );
    }
  }
  async _getTokenUsingRefreshToken(e2) {
    const t2 = await this.cacheManager.get(
      new C({
        scope: e2.authorizationParams.scope,
        audience: e2.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      }),
    );
    if (!((t2 && t2.refresh_token) || this.worker)) {
      if (this.options.useRefreshTokensFallback)
        return await this._getTokenFromIFrame(e2);
      throw new f(
        e2.authorizationParams.audience || "default",
        e2.authorizationParams.scope,
      );
    }
    const i2 =
        e2.authorizationParams.redirect_uri ||
        this.options.authorizationParams.redirect_uri ||
        window.location.origin,
      o2 =
        "number" == typeof e2.timeoutInSeconds
          ? 1e3 * e2.timeoutInSeconds
          : null;
    try {
      const n2 = await this._requestToken(
        Object.assign(
          Object.assign(Object.assign({}, e2.authorizationParams), {
            grant_type: "refresh_token",
            refresh_token: t2 && t2.refresh_token,
            redirect_uri: i2,
          }),
          o2 && { timeout: o2 },
        ),
      );
      return Object.assign(Object.assign({}, n2), {
        scope: e2.authorizationParams.scope,
        oauthTokenScope: n2.scope,
        audience: e2.authorizationParams.audience || "default",
      });
    } catch (t3) {
      if (
        (t3.message.indexOf("Missing Refresh Token") > -1 ||
          (t3.message && t3.message.indexOf("invalid refresh token") > -1)) &&
        this.options.useRefreshTokensFallback
      )
        return await this._getTokenFromIFrame(e2);
      throw t3;
    }
  }
  async _saveEntryInCache(t2) {
    const { id_token: i2, decodedToken: o2 } = t2,
      n2 = e(t2, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: i2, decodedToken: o2 }),
      await this.cacheManager.setIdToken(
        this.options.clientId,
        t2.id_token,
        t2.decodedToken,
      ),
      await this.cacheManager.set(n2);
  }
  async _getIdTokenFromCache() {
    const e2 = this.options.authorizationParams.audience || "default",
      t2 = await this.cacheManager.getIdToken(
        new C({
          clientId: this.options.clientId,
          audience: e2,
          scope: this.scope,
        }),
      ),
      i2 = this.userCache.get("@@user@@");
    return t2 && t2.id_token === (null == i2 ? void 0 : i2.id_token)
      ? i2
      : (this.userCache.set("@@user@@", t2), t2);
  }
  async _getEntryFromCache({ scope: e2, audience: t2, clientId: i2 }) {
    const o2 = await this.cacheManager.get(
      new C({ scope: e2, audience: t2, clientId: i2 }),
      60,
    );
    if (o2 && o2.access_token) {
      const { access_token: e3, oauthTokenScope: t3, expires_in: i3 } = o2,
        n2 = await this._getIdTokenFromCache();
      return (
        n2 &&
        Object.assign(
          Object.assign(
            { id_token: n2.id_token, access_token: e3 },
            t3 ? { scope: t3 } : null,
          ),
          { expires_in: i3 },
        )
      );
    }
  }
  async _requestToken(e2, t2) {
    const { nonceIn: i2, organization: o2 } = t2 || {},
      n2 = await T(
        Object.assign(
          {
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
          },
          e2,
        ),
        this.worker,
      ),
      a2 = await this._verifyIdToken(n2.id_token, i2, o2);
    return (
      await this._saveEntryInCache(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, n2), {
              decodedToken: a2,
              scope: e2.scope,
              audience: e2.audience || "default",
            }),
            n2.scope ? { oauthTokenScope: n2.scope } : null,
          ),
          { client_id: this.options.clientId },
        ),
      ),
      this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
      this._processOrgHint(o2 || a2.claims.org_id),
      Object.assign(Object.assign({}, n2), { decodedToken: a2 })
    );
  }
};
var ie = class {};
var initialAuthState = {
  isAuthenticated: false,
  isLoading: true,
};
var stub = function () {
  throw new Error("You forgot to wrap your component in <Auth0Provider>.");
};
var initialContext = __assign(__assign({}, initialAuthState), {
  buildAuthorizeUrl: stub,
  buildLogoutUrl: stub,
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
  handleRedirectCallback: stub,
});
var Auth0Context = (0, import_react.createContext)(initialContext);
var OAuthError =
  /** @class */
  (function (_super) {
    __extends(OAuthError2, _super);
    function OAuthError2(error, error_description) {
      var _this = _super.call(this, error_description || error) || this;
      _this.error = error;
      _this.error_description = error_description;
      Object.setPrototypeOf(_this, OAuthError2.prototype);
      return _this;
    }
    return OAuthError2;
  })(Error);
var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (
    (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
    STATE_RE.test(searchParams)
  );
};
var normalizeErrorFn = function (fallbackMessage) {
  return function (error) {
    if (error instanceof Error) {
      return error;
    }
    if (
      error !== null &&
      typeof error === "object" &&
      "error" in error &&
      typeof error.error === "string"
    ) {
      if (
        "error_description" in error &&
        typeof error.error_description === "string"
      ) {
        return new OAuthError(error.error, error.error_description);
      }
      return new OAuthError(error.error);
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn("Login failed");
var tokenError = normalizeErrorFn("Get access token failed");
var deprecateRedirectUri = function (options) {
  var _a;
  if (options === null || options === void 0 ? void 0 : options.redirectUri) {
    console.warn(
      "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version",
    );
    options.authorizationParams = options.authorizationParams || {};
    options.authorizationParams.redirect_uri = options.redirectUri;
    delete options.redirectUri;
  }
  if (
    (_a =
      options === null || options === void 0
        ? void 0
        : options.authorizationParams) === null || _a === void 0
      ? void 0
      : _a.redirectUri
  ) {
    console.warn(
      "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version",
    );
    options.authorizationParams.redirect_uri =
      options.authorizationParams.redirectUri;
    delete options.authorizationParams.redirectUri;
  }
};
var reducer = function (state, action) {
  switch (action.type) {
    case "LOGIN_POPUP_STARTED":
      return __assign(__assign({}, state), { isLoading: true });
    case "LOGIN_POPUP_COMPLETE":
    case "INITIALISED":
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: void 0,
      });
    case "HANDLE_REDIRECT_COMPLETE":
    case "GET_ACCESS_TOKEN_COMPLETE":
      if (state.user === action.user) {
        return state;
      }
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case "LOGOUT":
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: void 0,
      });
    case "ERROR":
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};
var toAuth0ClientOptions = function (opts) {
  deprecateRedirectUri(opts);
  return __assign(__assign({}, opts), {
    auth0Client: {
      name: "auth0-react",
      version: "2.3.0",
    },
  });
};
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname,
  );
};
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    _b = opts.context,
    context = _b === void 0 ? Auth0Context : _b,
    clientOpts = __rest(opts, [
      "children",
      "skipRedirectCallback",
      "onRedirectCallback",
      "context",
    ]);
  var client = (0, import_react.useState)(function () {
    return new te(toAuth0ClientOptions(clientOpts));
  })[0];
  var _c = (0, import_react.useReducer)(reducer, initialAuthState),
    state = _c[0],
    dispatch = _c[1];
  var didInitialise = (0, import_react.useRef)(false);
  var handleError = (0, import_react.useCallback)(function (error) {
    dispatch({ type: "ERROR", error });
    return error;
  }, []);
  (0, import_react.useEffect)(
    function () {
      if (didInitialise.current) {
        return;
      }
      didInitialise.current = true;
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var user, appState, error_1;
          return __generator(this, function (_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 7, , 8]);
                user = void 0;
                if (!(hasAuthParams() && !skipRedirectCallback)) return [3, 3];
                return [4, client.handleRedirectCallback()];
              case 1:
                appState = _a2.sent().appState;
                return [4, client.getUser()];
              case 2:
                user = _a2.sent();
                onRedirectCallback(appState, user);
                return [3, 6];
              case 3:
                return [4, client.checkSession()];
              case 4:
                _a2.sent();
                return [4, client.getUser()];
              case 5:
                user = _a2.sent();
                _a2.label = 6;
              case 6:
                dispatch({ type: "INITIALISED", user });
                return [3, 8];
              case 7:
                error_1 = _a2.sent();
                handleError(loginError(error_1));
                return [3, 8];
              case 8:
                return [
                  2,
                  /*return*/
                ];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback, handleError],
  );
  var loginWithRedirect = (0, import_react.useCallback)(
    function (opts2) {
      deprecateRedirectUri(opts2);
      return client.loginWithRedirect(opts2);
    },
    [client],
  );
  var loginWithPopup = (0, import_react.useCallback)(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a2) {
          switch (_a2.label) {
            case 0:
              dispatch({ type: "LOGIN_POPUP_STARTED" });
              _a2.label = 1;
            case 1:
              _a2.trys.push([1, 3, , 4]);
              return [4, client.loginWithPopup(options, config)];
            case 2:
              _a2.sent();
              return [3, 4];
            case 3:
              error_2 = _a2.sent();
              handleError(loginError(error_2));
              return [
                2,
                /*return*/
              ];
            case 4:
              return [4, client.getUser()];
            case 5:
              user = _a2.sent();
              dispatch({ type: "LOGIN_POPUP_COMPLETE", user });
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    },
    [client],
  );
  var logout = (0, import_react.useCallback)(
    function (opts2) {
      if (opts2 === void 0) {
        opts2 = {};
      }
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a2) {
          switch (_a2.label) {
            case 0:
              return [4, client.logout(opts2)];
            case 1:
              _a2.sent();
              if (opts2.openUrl || opts2.openUrl === false) {
                dispatch({ type: "LOGOUT" });
              }
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    },
    [client],
  );
  var getAccessTokenSilently = (0, import_react.useCallback)(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (opts2) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, _a2;
        var _b2;
        return __generator(this, function (_c2) {
          switch (_c2.label) {
            case 0:
              _c2.trys.push([0, 2, 3, 5]);
              return [4, client.getTokenSilently(opts2)];
            case 1:
              token = _c2.sent();
              return [3, 5];
            case 2:
              error_3 = _c2.sent();
              throw tokenError(error_3);
            case 3:
              _a2 = dispatch;
              _b2 = {
                type: "GET_ACCESS_TOKEN_COMPLETE",
              };
              return [4, client.getUser()];
            case 4:
              _a2.apply(void 0, [((_b2.user = _c2.sent()), _b2)]);
              return [
                7,
                /*endfinally*/
              ];
            case 5:
              return [2, token];
          }
        });
      });
    },
    [client],
  );
  var getAccessTokenWithPopup = (0, import_react.useCallback)(
    function (opts2, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, _a2;
        var _b2;
        return __generator(this, function (_c2) {
          switch (_c2.label) {
            case 0:
              _c2.trys.push([0, 2, 3, 5]);
              return [4, client.getTokenWithPopup(opts2, config)];
            case 1:
              token = _c2.sent();
              return [3, 5];
            case 2:
              error_4 = _c2.sent();
              throw tokenError(error_4);
            case 3:
              _a2 = dispatch;
              _b2 = {
                type: "GET_ACCESS_TOKEN_COMPLETE",
              };
              return [4, client.getUser()];
            case 4:
              _a2.apply(void 0, [((_b2.user = _c2.sent()), _b2)]);
              return [
                7,
                /*endfinally*/
              ];
            case 5:
              return [2, token];
          }
        });
      });
    },
    [client],
  );
  var getIdTokenClaims = (0, import_react.useCallback)(
    function () {
      return client.getIdTokenClaims();
    },
    [client],
  );
  var handleRedirectCallback = (0, import_react.useCallback)(
    function (url) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_5, _a2;
        var _b2;
        return __generator(this, function (_c2) {
          switch (_c2.label) {
            case 0:
              _c2.trys.push([0, 2, 3, 5]);
              return [4, client.handleRedirectCallback(url)];
            case 1:
              return [2, _c2.sent()];
            case 2:
              error_5 = _c2.sent();
              throw tokenError(error_5);
            case 3:
              _a2 = dispatch;
              _b2 = {
                type: "HANDLE_REDIRECT_COMPLETE",
              };
              return [4, client.getUser()];
            case 4:
              _a2.apply(void 0, [((_b2.user = _c2.sent()), _b2)]);
              return [
                7,
                /*endfinally*/
              ];
            case 5:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    },
    [client],
  );
  var contextValue = (0, import_react.useMemo)(
    function () {
      return __assign(__assign({}, state), {
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        getIdTokenClaims,
        loginWithRedirect,
        loginWithPopup,
        logout,
        handleRedirectCallback,
      });
    },
    [
      state,
      getAccessTokenSilently,
      getAccessTokenWithPopup,
      getIdTokenClaims,
      loginWithRedirect,
      loginWithPopup,
      logout,
      handleRedirectCallback,
    ],
  );
  return import_react.default.createElement(
    context.Provider,
    { value: contextValue },
    children,
  );
};
var useAuth0 = function (context) {
  if (context === void 0) {
    context = Auth0Context;
  }
  return (0, import_react.useContext)(context);
};
var withAuth0 = function (Component, context) {
  if (context === void 0) {
    context = Auth0Context;
  }
  return function WithAuth(props) {
    return import_react.default.createElement(
      context.Consumer,
      null,
      function (auth) {
        return import_react.default.createElement(
          Component,
          __assign({}, props, { auth0: auth }),
        );
      },
    );
  };
};
var defaultOnRedirecting = function () {
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
  );
};
var defaultOnBeforeAuthentication = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [
        2,
        /*return*/
      ];
    });
  });
};
var defaultReturnTo = function () {
  return "".concat(window.location.pathname).concat(window.location.search);
};
var withAuthenticationRequired = function (Component, options) {
  if (options === void 0) {
    options = {};
  }
  return function WithAuthenticationRequired(props) {
    var _this = this;
    var _a = options.returnTo,
      returnTo = _a === void 0 ? defaultReturnTo : _a,
      _b = options.onRedirecting,
      onRedirecting = _b === void 0 ? defaultOnRedirecting : _b,
      _c = options.onBeforeAuthentication,
      onBeforeAuthentication =
        _c === void 0 ? defaultOnBeforeAuthentication : _c,
      loginOptions = options.loginOptions,
      _d = options.context,
      context = _d === void 0 ? Auth0Context : _d;
    var _e = useAuth0(context),
      isAuthenticated = _e.isAuthenticated,
      isLoading = _e.isLoading,
      loginWithRedirect = _e.loginWithRedirect;
    (0, import_react.useEffect)(
      function () {
        if (isLoading || isAuthenticated) {
          return;
        }
        var opts = __assign(__assign({}, loginOptions), {
          appState: __assign(
            __assign({}, loginOptions && loginOptions.appState),
            {
              returnTo: typeof returnTo === "function" ? returnTo() : returnTo,
            },
          ),
        });
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a2) {
              switch (_a2.label) {
                case 0:
                  return [4, onBeforeAuthentication()];
                case 1:
                  _a2.sent();
                  return [4, loginWithRedirect(opts)];
                case 2:
                  _a2.sent();
                  return [
                    2,
                    /*return*/
                  ];
              }
            });
          });
        })();
      },
      [
        isLoading,
        isAuthenticated,
        loginWithRedirect,
        onBeforeAuthentication,
        loginOptions,
        returnTo,
      ],
    );
    return isAuthenticated
      ? import_react.default.createElement(Component, __assign({}, props))
      : onRedirecting();
  };
};
export {
  Auth0Context,
  Auth0Provider,
  u as AuthenticationError,
  d as GenericError,
  P as InMemoryCache,
  z as LocalStorageCache,
  m as MfaRequiredError,
  f as MissingRefreshTokenError,
  OAuthError,
  p as PopupCancelledError,
  h as PopupTimeoutError,
  l as TimeoutError,
  ie as User,
  initialContext,
  useAuth0,
  withAuth0,
  withAuthenticationRequired,
};
//# sourceMappingURL=@auth0_auth0-react.js.map
