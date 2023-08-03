import "./assets/modulepreload-polyfill-3cfb730f.js";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _n = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  Pr = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          l =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (l >> 10))),
          (e[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  yn = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          l = i + 2 < t.length,
          c = l ? t[i + 2] : 0,
          d = s >> 2,
          h = ((s & 3) << 4) | (a >> 4);
        let _ = ((a & 15) << 2) | (c >> 6),
          g = c & 63;
        l || ((g = 64), o || (_ = 64)), r.push(n[d], n[h], n[_], n[g]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(_n(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : Pr(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const c = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || c == null || h == null))
          throw new Nr();
        const _ = (s << 2) | (a >> 4);
        if ((r.push(_), c !== 64)) {
          const g = ((a << 4) & 240) | (c >> 2);
          if ((r.push(g), h !== 64)) {
            const f = ((c << 6) & 192) | h;
            r.push(f);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class Nr extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Dr = function (t) {
    const e = _n(t);
    return yn.encodeByteArray(e, !0);
  },
  En = function (t) {
    return Dr(t).replace(/\./g, "");
  },
  bn = function (t) {
    try {
      return yn.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lr() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mr = () => Lr().__FIREBASE_DEFAULTS__,
  Ur = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  xr = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && bn(t[1]);
    return e && JSON.parse(e);
  },
  yt = () => {
    try {
      return Mr() || Ur() || xr();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  Br = (t) => {
    var e, n;
    return (n =
      (e = yt()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  wn = () => {
    var t;
    return (t = yt()) === null || t === void 0 ? void 0 : t.config;
  },
  In = (t) => {
    var e;
    return (e = yt()) === null || e === void 0 ? void 0 : e[`_${t}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fr {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Hr() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())
  );
}
function $r() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function jr() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Vr() {
  const t = w();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Wr() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function zr() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qr = "FirebaseError";
class W extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = qr),
      Object.setPrototypeOf(this, W.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, de.prototype.create);
  }
}
class de {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? Kr(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new W(i, a, r);
  }
}
function Kr(t, e) {
  return t.replace(Gr, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Gr = /\{\$([^}]+)}/g;
function Jr(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Pe(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Mt(s) && Mt(o)) {
      if (!Pe(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Mt(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function he(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Xr(t, e) {
  const n = new Yr(t, e);
  return n.subscribe.bind(n);
}
class Yr {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Qr(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = Xe),
      i.error === void 0 && (i.error = Xe),
      i.complete === void 0 && (i.complete = Xe);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function Qr(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function Xe() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ne(t) {
  return t && t._delegate ? t._delegate : t;
}
class Z {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const z = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zr {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new Fr();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (ti(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: z });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = z) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = z) {
    return this.instances.has(e);
  }
  getOptions(e = z) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: ei(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = z) {
    return this.component ? (this.component.multipleInstances ? e : z) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function ei(t) {
  return t === z ? void 0 : t;
}
function ti(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ni {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new Zr(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var E;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(E || (E = {}));
const ri = {
    debug: E.DEBUG,
    verbose: E.VERBOSE,
    info: E.INFO,
    warn: E.WARN,
    error: E.ERROR,
    silent: E.SILENT,
  },
  ii = E.INFO,
  si = {
    [E.DEBUG]: "log",
    [E.VERBOSE]: "log",
    [E.INFO]: "info",
    [E.WARN]: "warn",
    [E.ERROR]: "error",
  },
  oi = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = si[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class vn {
  constructor(e) {
    (this.name = e),
      (this._logLevel = ii),
      (this._logHandler = oi),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in E))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? ri[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, E.DEBUG, ...e),
      this._logHandler(this, E.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, E.VERBOSE, ...e),
      this._logHandler(this, E.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, E.INFO, ...e),
      this._logHandler(this, E.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, E.WARN, ...e),
      this._logHandler(this, E.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, E.ERROR, ...e),
      this._logHandler(this, E.ERROR, ...e);
  }
}
const ai = (t, e) => e.some((n) => t instanceof n);
let Ut, xt;
function ci() {
  return (
    Ut ||
    (Ut = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function li() {
  return (
    xt ||
    (xt = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Tn = new WeakMap(),
  at = new WeakMap(),
  Sn = new WeakMap(),
  Ye = new WeakMap(),
  Et = new WeakMap();
function ui(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(j(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && Tn.set(n, t);
      })
      .catch(() => {}),
    Et.set(e, t),
    e
  );
}
function di(t) {
  if (at.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  at.set(t, e);
}
let ct = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return at.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || Sn.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return j(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function hi(t) {
  ct = t(ct);
}
function fi(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Qe(this), e, ...n);
        return Sn.set(r, e.sort ? e.sort() : [e]), j(r);
      }
    : li().includes(t)
    ? function (...e) {
        return t.apply(Qe(this), e), j(Tn.get(this));
      }
    : function (...e) {
        return j(t.apply(Qe(this), e));
      };
}
function pi(t) {
  return typeof t == "function"
    ? fi(t)
    : (t instanceof IDBTransaction && di(t),
      ai(t, ci()) ? new Proxy(t, ct) : t);
}
function j(t) {
  if (t instanceof IDBRequest) return ui(t);
  if (Ye.has(t)) return Ye.get(t);
  const e = pi(t);
  return e !== t && (Ye.set(t, e), Et.set(e, t)), e;
}
const Qe = (t) => Et.get(t);
function mi(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = j(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (l) => {
        r(j(o.result), l.oldVersion, l.newVersion, j(o.transaction), l);
      }),
    n && o.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        s && l.addEventListener("close", () => s()),
          i &&
            l.addEventListener("versionchange", (c) =>
              i(c.oldVersion, c.newVersion, c)
            );
      })
      .catch(() => {}),
    a
  );
}
const gi = ["get", "getKey", "getAll", "getAllKeys", "count"],
  _i = ["put", "add", "delete", "clear"],
  Ze = new Map();
function Bt(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Ze.get(e)) return Ze.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = _i.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || gi.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const l = this.transaction(o, i ? "readwrite" : "readonly");
    let c = l.store;
    return (
      r && (c = c.index(a.shift())),
      (await Promise.all([c[n](...a), i && l.done]))[0]
    );
  };
  return Ze.set(e, s), s;
}
hi((t) => ({
  ...t,
  get: (e, n, r) => Bt(e, n) || t.get(e, n, r),
  has: (e, n) => !!Bt(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yi {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Ei(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Ei(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const lt = "@firebase/app",
  Ft = "0.9.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const G = new vn("@firebase/app"),
  bi = "@firebase/app-compat",
  wi = "@firebase/analytics-compat",
  Ii = "@firebase/analytics",
  vi = "@firebase/app-check-compat",
  Ti = "@firebase/app-check",
  Si = "@firebase/auth",
  Ri = "@firebase/auth-compat",
  Ai = "@firebase/database",
  Ci = "@firebase/database-compat",
  Oi = "@firebase/functions",
  ki = "@firebase/functions-compat",
  Pi = "@firebase/installations",
  Ni = "@firebase/installations-compat",
  Di = "@firebase/messaging",
  Li = "@firebase/messaging-compat",
  Mi = "@firebase/performance",
  Ui = "@firebase/performance-compat",
  xi = "@firebase/remote-config",
  Bi = "@firebase/remote-config-compat",
  Fi = "@firebase/storage",
  Hi = "@firebase/storage-compat",
  $i = "@firebase/firestore",
  ji = "@firebase/firestore-compat",
  Vi = "firebase",
  Wi = "9.22.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ut = "[DEFAULT]",
  zi = {
    [lt]: "fire-core",
    [bi]: "fire-core-compat",
    [Ii]: "fire-analytics",
    [wi]: "fire-analytics-compat",
    [Ti]: "fire-app-check",
    [vi]: "fire-app-check-compat",
    [Si]: "fire-auth",
    [Ri]: "fire-auth-compat",
    [Ai]: "fire-rtdb",
    [Ci]: "fire-rtdb-compat",
    [Oi]: "fire-fn",
    [ki]: "fire-fn-compat",
    [Pi]: "fire-iid",
    [Ni]: "fire-iid-compat",
    [Di]: "fire-fcm",
    [Li]: "fire-fcm-compat",
    [Mi]: "fire-perf",
    [Ui]: "fire-perf-compat",
    [xi]: "fire-rc",
    [Bi]: "fire-rc-compat",
    [Fi]: "fire-gcs",
    [Hi]: "fire-gcs-compat",
    [$i]: "fire-fst",
    [ji]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Vi]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ne = new Map(),
  dt = new Map();
function qi(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    G.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function oe(t) {
  const e = t.name;
  if (dt.has(e))
    return (
      G.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  dt.set(e, t);
  for (const n of Ne.values()) qi(n, t);
  return !0;
}
function Rn(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ki = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]:
      "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["no-options"]:
      "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
    ["idb-open"]:
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get"]:
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set"]:
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete"]:
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  V = new de("app", "Firebase", Ki);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gi {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Z("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw V.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fe = Wi;
function An(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: ut, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw V.create("bad-app-name", { appName: String(i) });
  if ((n || (n = wn()), !n)) throw V.create("no-options");
  const s = Ne.get(i);
  if (s) {
    if (Pe(n, s.options) && Pe(r, s.config)) return s;
    throw V.create("duplicate-app", { appName: i });
  }
  const o = new ni(i);
  for (const l of dt.values()) o.addComponent(l);
  const a = new Gi(n, r, o);
  return Ne.set(i, a), a;
}
function Ji(t = ut) {
  const e = Ne.get(t);
  if (!e && t === ut && wn()) return An();
  if (!e) throw V.create("no-app", { appName: t });
  return e;
}
function X(t, e, n) {
  var r;
  let i = (r = zi[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      G.warn(a.join(" "));
    return;
  }
  oe(new Z(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xi = "firebase-heartbeat-database",
  Yi = 1,
  ae = "firebase-heartbeat-store";
let et = null;
function Cn() {
  return (
    et ||
      (et = mi(Xi, Yi, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(ae);
          }
        },
      }).catch((t) => {
        throw V.create("idb-open", { originalErrorMessage: t.message });
      })),
    et
  );
}
async function Qi(t) {
  try {
    return await (await Cn()).transaction(ae).objectStore(ae).get(On(t));
  } catch (e) {
    if (e instanceof W) G.warn(e.message);
    else {
      const n = V.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      G.warn(n.message);
    }
  }
}
async function Ht(t, e) {
  try {
    const r = (await Cn()).transaction(ae, "readwrite");
    await r.objectStore(ae).put(e, On(t)), await r.done;
  } catch (n) {
    if (n instanceof W) G.warn(n.message);
    else {
      const r = V.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      G.warn(r.message);
    }
  }
}
function On(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zi = 1024,
  es = 30 * 24 * 60 * 60 * 1e3;
class ts {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new rs(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = $t();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= es;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = $t(),
      { heartbeatsToSend: n, unsentEntries: r } = ns(
        this._heartbeatsCache.heartbeats
      ),
      i = En(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function $t() {
  return new Date().toISOString().substring(0, 10);
}
function ns(t, e = Zi) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), jt(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), jt(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class rs {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Wr()
      ? zr()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await Qi(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Ht(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Ht(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function jt(t) {
  return En(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function is(t) {
  oe(new Z("platform-logger", (e) => new yi(e), "PRIVATE")),
    oe(new Z("heartbeat", (e) => new ts(e), "PRIVATE")),
    X(lt, Ft, t),
    X(lt, Ft, "esm2017"),
    X("fire-js", "");
}
is("");
var ss = "firebase",
  os = "9.22.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ X(ss, os, "app");
function bt(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function kn() {
  return {
    ["dependent-sdk-initialized-before-auth"]:
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const as = kn,
  Pn = new de("auth", "Firebase", kn());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const De = new vn("@firebase/auth");
function cs(t, ...e) {
  De.logLevel <= E.WARN && De.warn(`Auth (${fe}): ${t}`, ...e);
}
function ve(t, ...e) {
  De.logLevel <= E.ERROR && De.error(`Auth (${fe}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function C(t, ...e) {
  throw wt(t, ...e);
}
function R(t, ...e) {
  return wt(t, ...e);
}
function Nn(t, e, n) {
  const r = Object.assign(Object.assign({}, as()), { [e]: n });
  return new de("auth", "Firebase", r).create(e, { appName: t.name });
}
function ls(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw (
      (r.name !== e.constructor.name && C(t, "argument-error"),
      Nn(
        t,
        "argument-error",
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function wt(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Pn.create(t, ...e);
}
function p(t, e, ...n) {
  if (!t) throw wt(e, ...n);
}
function N(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (ve(e), new Error(e));
}
function M(t, e) {
  t || N(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ht() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function us() {
  return Vt() === "http:" || Vt() === "https:";
}
function Vt() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ds() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (us() || $r() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function hs() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pe {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      M(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = Hr() || jr());
  }
  get() {
    return ds()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function It(t, e) {
  M(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dn {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    N(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    N(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    N(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fs = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ps = new pe(3e4, 6e4);
function Ln(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function me(t, e, n, r, i = {}) {
  return Mn(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = he(Object.assign({ key: t.config.apiKey }, o)).slice(1),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      t.languageCode && (l["X-Firebase-Locale"] = t.languageCode),
      Dn.fetch()(
        Un(t, t.config.apiHost, n, a),
        Object.assign(
          { method: e, headers: l, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function Mn(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, fs), e);
  try {
    const i = new gs(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Ie(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [l, c] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Ie(t, "credential-already-in-use", o);
      if (l === "EMAIL_EXISTS") throw Ie(t, "email-already-in-use", o);
      if (l === "USER_DISABLED") throw Ie(t, "user-disabled", o);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Nn(t, d, c);
      C(t, d);
    }
  } catch (i) {
    if (i instanceof W) throw i;
    C(t, "network-request-failed", { message: String(i) });
  }
}
async function ms(t, e, n, r, i = {}) {
  const s = await me(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      C(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function Un(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? It(t.config, i) : `${t.config.apiScheme}://${i}`;
}
class gs {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(R(this.auth, "network-request-failed")),
          ps.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Ie(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = R(t, e, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _s(t, e) {
  return me(t, "POST", "/v1/accounts:delete", e);
}
async function ys(t, e) {
  return me(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function se(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function Es(t, e = !1) {
  const n = ne(t),
    r = await n.getIdToken(e),
    i = vt(r);
  p(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: se(tt(i.auth_time)),
    issuedAtTime: se(tt(i.iat)),
    expirationTime: se(tt(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function tt(t) {
  return Number(t) * 1e3;
}
function vt(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return ve("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = bn(n);
    return i
      ? JSON.parse(i)
      : (ve("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      ve(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function bs(t) {
  const e = vt(t);
  return (
    p(e, "internal-error"),
    p(typeof e.exp < "u", "internal-error"),
    p(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ce(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof W &&
        ws(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function ws({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Is {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xn {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = se(this.lastLoginAt)),
      (this.creationTime = se(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Le(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await ce(t, ys(n, { idToken: r }));
  p(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  t._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? Ss(s.providerUserInfo)
        : [],
    a = Ts(t.providerData, o),
    l = t.isAnonymous,
    c = !(t.email && s.passwordHash) && !(a != null && a.length),
    d = l ? c : !1,
    h = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new xn(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(t, h);
}
async function vs(t) {
  const e = ne(t);
  await Le(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function Ts(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function Ss(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = bt(e, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Rs(t, e) {
  const n = await Mn(t, {}, async () => {
    const r = he({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = Un(t, i, "/v1/token", `key=${s}`),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"),
      Dn.fetch()(o, { method: "POST", headers: a, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class le {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    p(e.idToken, "internal-error"),
      p(typeof e.idToken < "u", "internal-error"),
      p(typeof e.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : bs(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  async getToken(e, n = !1) {
    return (
      p(!this.accessToken || this.refreshToken, e, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(e, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await Rs(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new le();
    return (
      r &&
        (p(typeof r == "string", "internal-error", { appName: e }),
        (o.refreshToken = r)),
      i &&
        (p(typeof i == "string", "internal-error", { appName: e }),
        (o.accessToken = i)),
      s &&
        (p(typeof s == "number", "internal-error", { appName: e }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new le(), this.toJSON());
  }
  _performRefresh() {
    return N("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function x(t, e) {
  p(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class K {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      s = bt(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new Is(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new xn(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await ce(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      p(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return Es(this, e);
  }
  reload() {
    return vs(this);
  }
  _assign(e) {
    this !== e &&
      (p(this.uid === e.uid, this.auth, "internal-error"),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new K(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    p(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await Le(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const e = await this.getIdToken();
    return (
      await ce(this, _s(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    var r, i, s, o, a, l, c, d;
    const h = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      _ = (i = n.email) !== null && i !== void 0 ? i : void 0,
      g = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      f = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      m = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      v = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      I = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
      k = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: U,
        emailVerified: we,
        isAnonymous: Dt,
        providerData: Ge,
        stsTokenManager: Lt,
      } = n;
    p(U && Lt, e, "internal-error");
    const Or = le.fromJSON(this.name, Lt);
    p(typeof U == "string", e, "internal-error"),
      x(h, e.name),
      x(_, e.name),
      p(typeof we == "boolean", e, "internal-error"),
      p(typeof Dt == "boolean", e, "internal-error"),
      x(g, e.name),
      x(f, e.name),
      x(m, e.name),
      x(v, e.name),
      x(I, e.name),
      x(k, e.name);
    const Je = new K({
      uid: U,
      auth: e,
      email: _,
      emailVerified: we,
      displayName: h,
      isAnonymous: Dt,
      photoURL: f,
      phoneNumber: g,
      tenantId: m,
      stsTokenManager: Or,
      createdAt: I,
      lastLoginAt: k,
    });
    return (
      Ge &&
        Array.isArray(Ge) &&
        (Je.providerData = Ge.map((kr) => Object.assign({}, kr))),
      v && (Je._redirectEventId = v),
      Je
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new le();
    i.updateFromServerResponse(n);
    const s = new K({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Le(s), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wt = new Map();
function D(t) {
  M(t instanceof Function, "Expected a class definition");
  let e = Wt.get(t);
  return e
    ? (M(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), Wt.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bn {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Bn.type = "NONE";
const zt = Bn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Te(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Y {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = Te(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Te("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? K._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length) return new Y(D(zt), e, r);
    const i = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let s = i[0] || D(zt);
    const o = Te(r, e.config.apiKey, e.name);
    let a = null;
    for (const c of n)
      try {
        const d = await c._get(o);
        if (d) {
          const h = K._fromJSON(e, d);
          c !== s && (a = h), (s = c);
          break;
        }
      } catch {}
    const l = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length
      ? new Y(s, e, r)
      : ((s = l[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          n.map(async (c) => {
            if (c !== s)
              try {
                await c._remove(o);
              } catch {}
          })
        ),
        new Y(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qt(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if ($n(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (Fn(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (Vn(e)) return "Blackberry";
  if (Wn(e)) return "Webos";
  if (Tt(e)) return "Safari";
  if ((e.includes("chrome/") || Hn(e)) && !e.includes("edge/")) return "Chrome";
  if (jn(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Fn(t = w()) {
  return /firefox\//i.test(t);
}
function Tt(t = w()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function Hn(t = w()) {
  return /crios\//i.test(t);
}
function $n(t = w()) {
  return /iemobile/i.test(t);
}
function jn(t = w()) {
  return /android/i.test(t);
}
function Vn(t = w()) {
  return /blackberry/i.test(t);
}
function Wn(t = w()) {
  return /webos/i.test(t);
}
function Fe(t = w()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function As(t = w()) {
  var e;
  return (
    Fe(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Cs() {
  return Vr() && document.documentMode === 10;
}
function zn(t = w()) {
  return Fe(t) || jn(t) || Wn(t) || Vn(t) || /windows phone/i.test(t) || $n(t);
}
function Os() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qn(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = qt(w());
      break;
    case "Worker":
      n = `${qt(w())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${fe}/${r}`;
}
async function Kn(t, e) {
  return me(t, "GET", "/v2/recaptchaConfig", Ln(t, e));
}
function Kt(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class Gn {
  constructor(e) {
    if (
      ((this.siteKey = ""),
      (this.emailPasswordEnabled = !1),
      e.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = e.recaptchaKey.split("/")[3]),
      (this.emailPasswordEnabled = e.recaptchaEnforcementState.some(
        (n) =>
          n.provider === "EMAIL_PASSWORD_PROVIDER" &&
          n.enforcementState !== "OFF"
      ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ks() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
function Jn(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", t),
      (r.onload = e),
      (r.onerror = (i) => {
        const s = R("internal-error");
        (s.customData = i), n(s);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      ks().appendChild(r);
  });
}
function Ps(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Ns = "https://www.google.com/recaptcha/enterprise.js?render=",
  Ds = "recaptcha-enterprise",
  Ls = "NO_RECAPTCHA";
class Ms {
  constructor(e) {
    (this.type = Ds), (this.auth = ge(e));
  }
  async verify(e = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        Kn(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((l) => {
            if (l.recaptchaKey === void 0)
              a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const c = new Gn(l);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = c)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = c),
                o(c.siteKey)
              );
            }
          })
          .catch((l) => {
            a(l);
          });
      });
    }
    function i(s, o, a) {
      const l = window.grecaptcha;
      Kt(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(s, { action: e })
              .then((c) => {
                o(c);
              })
              .catch(() => {
                o(Ls);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((a) => {
          if (!n && Kt(window.grecaptcha)) i(a, s, o);
          else {
            if (typeof window > "u") {
              o(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            Jn(Ns + a)
              .then(() => {
                i(a, s, o);
              })
              .catch((l) => {
                o(l);
              });
          }
        })
        .catch((a) => {
          o(a);
        });
    });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Us {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, a) => {
        try {
          const l = e(s);
          o(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xs {
  constructor(e, n, r, i) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Gt(this)),
      (this.idTokenSubscription = new Gt(this)),
      (this.beforeStateQueue = new Us(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Pn),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = D(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Y.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        l = await this.tryRedirectSignIn(e);
      (!o || o === a) && l != null && l.user && ((i = l.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      p(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Le(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = hs();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    const n = e ? ne(e) : null;
    return (
      n &&
        p(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && p(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(e) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(D(e));
    });
  }
  async initializeRecaptchaConfig() {
    const e = await Kn(this, {
        clientType: "CLIENT_TYPE_WEB",
        version: "RECAPTCHA_ENTERPRISE",
      }),
      n = new Gn(e);
    this.tenantId == null
      ? (this._agentRecaptchaConfig = n)
      : (this._tenantRecaptchaConfigs[this.tenantId] = n),
      n.emailPasswordEnabled && new Ms(this).verify();
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new de("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && D(e)) || this._popupRedirectResolver;
      p(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Y.create(
          this,
          [D(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === e
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n),
      o = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      p(o, this, "internal-error"),
      o.then(() => s(this.currentUser)),
      typeof n == "function" ? e.addObserver(n, r, i) : e.addObserver(n)
    );
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      p(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = qn(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { ["X-Client-Version"]: this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var e;
    const n = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      n != null &&
        n.error &&
        cs(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function ge(t) {
  return ne(t);
}
class Gt {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = Xr((n) => (this.observer = n)));
  }
  get next() {
    return (
      p(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bs(t, e) {
  const n = Rn(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Pe(s, e ?? {})) return i;
    C(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function Fs(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(D);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    );
}
function Hs(t, e, n) {
  const r = ge(t);
  p(r._canInitEmulator, r, "emulator-config-failed"),
    p(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    s = Xn(e),
    { host: o, port: a } = $s(e),
    l = a === null ? "" : `:${a}`;
  (r.config.emulator = { url: `${s}//${o}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || js();
}
function Xn(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function $s(t) {
  const e = Xn(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: Jt(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: Jt(o) };
  }
}
function Jt(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function js() {
  function t() {
    const e = document.createElement("p"),
      n = e.style;
    (e.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      e.classList.add("firebase-emulator-warning"),
      document.body.appendChild(e);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", t)
        : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yn {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return N("not implemented");
  }
  _getIdTokenResponse(e) {
    return N("not implemented");
  }
  _linkToIdToken(e, n) {
    return N("not implemented");
  }
  _getReauthenticationResolver(e) {
    return N("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Q(t, e) {
  return ms(t, "POST", "/v1/accounts:signInWithIdp", Ln(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vs = "http://localhost";
class J extends Yn {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new J(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : C("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      s = bt(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new J(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Q(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Q(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Q(e, n);
  }
  buildRequest() {
    const e = { requestUri: Vs, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = he(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class St {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _e extends St {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F extends _e {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return J._fromParams({
      providerId: F.PROVIDER_ID,
      signInMethod: F.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return F.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return F.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return F.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
F.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
F.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P extends _e {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return J._fromParams({
      providerId: P.PROVIDER_ID,
      signInMethod: P.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return P.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return P.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return P.credential(n, r);
    } catch {
      return null;
    }
  }
}
P.GOOGLE_SIGN_IN_METHOD = "google.com";
P.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H extends _e {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return J._fromParams({
      providerId: H.PROVIDER_ID,
      signInMethod: H.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return H.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return H.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return H.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
H.GITHUB_SIGN_IN_METHOD = "github.com";
H.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $ extends _e {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return J._fromParams({
      providerId: $.PROVIDER_ID,
      signInMethod: $.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return $.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return $.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return $.credential(n, r);
    } catch {
      return null;
    }
  }
}
$.TWITTER_SIGN_IN_METHOD = "twitter.com";
$.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await K._fromIdTokenResponse(e, r, i),
      o = Xt(r);
    return new ee({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Xt(r);
    return new ee({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Xt(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Me extends W {
  constructor(e, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Me.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Me(e, n, r, i);
  }
}
function Qn(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Me._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function Ws(t, e, n = !1) {
  const r = await ce(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return ee._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zs(t, e, n = !1) {
  const { auth: r } = t,
    i = "reauthenticate";
  try {
    const s = await ce(t, Qn(r, i, e, t), n);
    p(s.idToken, r, "internal-error");
    const o = vt(s.idToken);
    p(o, r, "internal-error");
    const { sub: a } = o;
    return p(t.uid === a, r, "user-mismatch"), ee._forOperation(t, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        C(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qs(t, e, n = !1) {
  const r = "signIn",
    i = await Qn(t, r, e),
    s = await ee._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(s.user)), s;
}
function Ks(t, e, n, r) {
  return ne(t).onIdTokenChanged(e, n, r);
}
function Gs(t, e, n) {
  return ne(t).beforeAuthStateChanged(e, n);
}
const Ue = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zn {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ue, "1"),
          this.storage.removeItem(Ue),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Js() {
  const t = w();
  return Tt(t) || Fe(t);
}
const Xs = 1e3,
  Ys = 10;
class er extends Zn {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = Js() && Os()),
      (this.fallbackToPolling = zn()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, l) => {
        this.notifyListeners(o, l);
      });
      return;
    }
    const r = e.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (e.newValue !== o)
        e.newValue !== null
          ? this.storage.setItem(r, e.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    Cs() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, Ys)
      : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
            !0
          );
        });
      }, Xs));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
er.type = "LOCAL";
const Qs = er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tr extends Zn {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
tr.type = "SESSION";
const nr = tr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zs(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class He {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new He(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const a = Array.from(o).map(async (c) => c(n.origin, s)),
      l = await Zs(a);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: l,
    });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
He.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rt(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eo {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener("message", e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((a, l) => {
      const c = Rt("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(h) {
          const _ = h;
          if (_.data.eventId === c)
            switch (_.data.status) {
              case "ack":
                clearTimeout(d),
                  (s = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), a(_.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(s),
                  l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: e, eventId: c, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A() {
  return window;
}
function to(t) {
  A().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rr() {
  return (
    typeof A().WorkerGlobalScope < "u" && typeof A().importScripts == "function"
  );
}
async function no() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ro() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function io() {
  return rr() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ir = "firebaseLocalStorageDb",
  so = 1,
  xe = "firebaseLocalStorage",
  sr = "fbase_key";
class ye {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function $e(t, e) {
  return t.transaction([xe], e ? "readwrite" : "readonly").objectStore(xe);
}
function oo() {
  const t = indexedDB.deleteDatabase(ir);
  return new ye(t).toPromise();
}
function ft() {
  const t = indexedDB.open(ir, so);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(xe, { keyPath: sr });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(xe)
          ? e(r)
          : (r.close(), await oo(), e(await ft()));
      });
  });
}
async function Yt(t, e, n) {
  const r = $e(t, !0).put({ [sr]: e, value: n });
  return new ye(r).toPromise();
}
async function ao(t, e) {
  const n = $e(t, !1).get(e),
    r = await new ye(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Qt(t, e) {
  const n = $e(t, !0).delete(e);
  return new ye(n).toPromise();
}
const co = 800,
  lo = 3;
class or {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await ft()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > lo) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return rr() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = He._getInstance(io())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await no()), !this.activeServiceWorker))
      return;
    this.sender = new eo(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        ro() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await ft();
      return await Yt(e, Ue, "1"), await Qt(e, Ue), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Yt(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => ao(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Qt(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = $e(i, !1).getAll();
      return new ye(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: s } of e)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
          (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), co));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
or.type = "LOCAL";
const uo = or;
new pe(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ar(t, e) {
  return e
    ? D(e)
    : (p(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At extends Yn {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return Q(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Q(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Q(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (n.idToken = e), n;
  }
}
function ho(t) {
  return qs(t.auth, new At(t), t.bypassAuthState);
}
function fo(t) {
  const { auth: e, user: n } = t;
  return p(n, e, "internal-error"), zs(n, new At(t), t.bypassAuthState);
}
async function po(t) {
  const { auth: e, user: n } = t;
  return p(n, e, "internal-error"), Ws(n, new At(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cr {
  constructor(e, n, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: a,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return ho;
      case "linkViaPopup":
      case "linkViaRedirect":
        return po;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return fo;
      default:
        C(this.auth, "internal-error");
    }
  }
  resolve(e) {
    M(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    M(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mo = new pe(2e3, 1e4);
async function go(t, e, n) {
  const r = ge(t);
  ls(t, e, St);
  const i = ar(r, n);
  return new q(r, "signInViaPopup", e, i).executeNotNull();
}
class q extends cr {
  constructor(e, n, r, i, s) {
    super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      q.currentPopupAction && q.currentPopupAction.cancel(),
      (q.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return p(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    M(this.filter.length === 1, "Popup operations only handle one event");
    const e = Rt();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(R(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(R(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (q.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(R(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, mo.get());
    };
    e();
  }
}
q.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _o = "pendingRedirect",
  Se = new Map();
class yo extends cr {
  constructor(e, n, r = !1) {
    super(
      e,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = Se.get(this.auth._key());
    if (!e) {
      try {
        const r = (await Eo(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Se.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Se.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Eo(t, e) {
  const n = Io(e),
    r = wo(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function bo(t, e) {
  Se.set(t._key(), e);
}
function wo(t) {
  return D(t._redirectPersistence);
}
function Io(t) {
  return Te(_o, t.config.apiKey, t.name);
}
async function vo(t, e, n = !1) {
  const r = ge(t),
    i = ar(r, e),
    o = await new yo(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const To = 10 * 60 * 1e3;
class So {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !Ro(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !lr(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(R(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= To &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Zt(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Zt(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function Zt(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function lr({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function Ro(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return lr(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ao(t, e = {}) {
  return me(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Co = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Oo = /^https?/;
async function ko(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await Ao(t);
  for (const n of e)
    try {
      if (Po(n)) return;
    } catch {}
  C(t, "unauthorized-domain");
}
function Po(t) {
  const e = ht(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!Oo.test(n)) return !1;
  if (Co.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const No = new pe(3e4, 6e4);
function en() {
  const t = A().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function Do(t) {
  return new Promise((e, n) => {
    var r, i, s;
    function o() {
      en(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            en(), n(R(t, "network-request-failed"));
          },
          timeout: No.get(),
        });
    }
    if (
      !(
        (i = (r = A().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = A().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = Ps("iframefcb");
      return (
        (A()[a] = () => {
          gapi.load ? o() : n(R(t, "network-request-failed"));
        }),
        Jn(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((e) => {
    throw ((Re = null), e);
  });
}
let Re = null;
function Lo(t) {
  return (Re = Re || Do(t)), Re;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mo = new pe(5e3, 15e3),
  Uo = "__/auth/iframe",
  xo = "emulator/auth/iframe",
  Bo = {
    "style": {
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px",
    },
    "aria-hidden": "true",
    "tabindex": "-1",
  },
  Fo = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function Ho(t) {
  const e = t.config;
  p(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? It(e, xo) : `https://${t.config.authDomain}/${Uo}`,
    r = { apiKey: e.apiKey, appName: t.name, v: fe },
    i = Fo.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${he(r).slice(1)}`;
}
async function $o(t) {
  const e = await Lo(t),
    n = A().gapi;
  return (
    p(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: Ho(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Bo,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = R(t, "network-request-failed"),
            a = A().setTimeout(() => {
              s(o);
            }, Mo.get());
          function l() {
            A().clearTimeout(a), i(r);
          }
          r.ping(l).then(l, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jo = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  Vo = 500,
  Wo = 600,
  zo = "_blank",
  qo = "http://localhost";
class tn {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function Ko(t, e, n, r = Vo, i = Wo) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, jo), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    c = w().toLowerCase();
  n && (a = Hn(c) ? zo : n), Fn(c) && ((e = e || qo), (l.scrollbars = "yes"));
  const d = Object.entries(l).reduce((_, [g, f]) => `${_}${g}=${f},`, "");
  if (As(c) && a !== "_self") return Go(e || "", a), new tn(null);
  const h = window.open(e || "", a, d);
  p(h, t, "popup-blocked");
  try {
    h.focus();
  } catch {}
  return new tn(h);
}
function Go(t, e) {
  const n = document.createElement("a");
  (n.href = t), (n.target = e);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jo = "__/auth/handler",
  Xo = "emulator/auth/handler",
  Yo = encodeURIComponent("fac");
async function nn(t, e, n, r, i, s) {
  p(t.config.authDomain, t, "auth-domain-config-required"),
    p(t.config.apiKey, t, "invalid-api-key");
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: fe,
    eventId: i,
  };
  if (e instanceof St) {
    e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      Jr(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries(s || {})) o[d] = h;
  }
  if (e instanceof _e) {
    const d = e.getScopes().filter((h) => h !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const a = o;
  for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
  const l = await t._getAppCheckToken(),
    c = l ? `#${Yo}=${encodeURIComponent(l)}` : "";
  return `${Qo(t)}?${he(a).slice(1)}${c}`;
}
function Qo({ config: t }) {
  return t.emulator ? It(t, Xo) : `https://${t.authDomain}/${Jo}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nt = "webStorageSupport";
class Zo {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = nr),
      (this._completeRedirectFn = vo),
      (this._overrideRedirectResult = bo);
  }
  async _openPopup(e, n, r, i) {
    var s;
    M(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await nn(e, n, r, ht(), i);
    return Ko(e, o, Rt());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await nn(e, n, r, ht(), i);
    return to(s), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (M(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await $o(e),
      r = new So(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          p(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      nt,
      { type: nt },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[nt];
        o !== void 0 && n(!!o), C(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = ko(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return zn() || Tt() || Fe();
  }
}
const ea = Zo;
var rn = "@firebase/auth",
  sn = "0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ta {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    p(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function na(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function ra(t) {
  oe(
    new Z(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          s = e.getProvider("app-check-internal"),
          { apiKey: o, authDomain: a } = r.options;
        p(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const l = {
            apiKey: o,
            authDomain: a,
            clientPlatform: t,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: qn(t),
          },
          c = new xs(r, i, s, l);
        return Fs(c, n), c;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      })
  ),
    oe(
      new Z(
        "auth-internal",
        (e) => {
          const n = ge(e.getProvider("auth").getImmediate());
          return ((r) => new ta(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    X(rn, sn, na(t)),
    X(rn, sn, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ia = 5 * 60,
  sa = In("authIdTokenMaxAge") || ia;
let on = null;
const oa = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > sa) return;
  const i = n == null ? void 0 : n.token;
  on !== i &&
    ((on = i),
    await fetch(t, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function aa(t = Ji()) {
  const e = Rn(t, "auth");
  if (e.isInitialized()) return e.getImmediate();
  const n = Bs(t, { popupRedirectResolver: ea, persistence: [uo, Qs, nr] }),
    r = In("authTokenSyncURL");
  if (r) {
    const s = oa(r);
    Gs(n, s, () => s(n.currentUser)), Ks(n, (o) => s(o));
  }
  const i = Br("auth");
  return i && Hs(n, `http://${i}`), n;
}
ra("Browser");
const ca = {
  apiKey: "AIzaSyA2i1n0MAWn3n0eX9oZsoZreT7yaOj0J54",
  authDomain: "visual-degree-f99a8.firebaseapp.com",
  projectId: "visual-degree-f99a8",
  storageBucket: "visual-degree-f99a8.appspot.com",
  messagingSenderId: "412236224408",
  appId: "1:412236224408:web:ab88a6985821fe76627ded",
  measurementId: "G-Z38JNSMNL6",
};
function ur(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: la } = Object.prototype,
  { getPrototypeOf: Ct } = Object,
  je = ((t) => (e) => {
    const n = la.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  O = (t) => ((t = t.toLowerCase()), (e) => je(e) === t),
  Ve = (t) => (e) => typeof e === t,
  { isArray: re } = Array,
  ue = Ve("undefined");
function ua(t) {
  return (
    t !== null &&
    !ue(t) &&
    t.constructor !== null &&
    !ue(t.constructor) &&
    T(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const dr = O("ArrayBuffer");
function da(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && dr(t.buffer)),
    e
  );
}
const ha = Ve("string"),
  T = Ve("function"),
  hr = Ve("number"),
  We = (t) => t !== null && typeof t == "object",
  fa = (t) => t === !0 || t === !1,
  Ae = (t) => {
    if (je(t) !== "object") return !1;
    const e = Ct(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  pa = O("Date"),
  ma = O("File"),
  ga = O("Blob"),
  _a = O("FileList"),
  ya = (t) => We(t) && T(t.pipe),
  Ea = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (T(t.append) &&
          ((e = je(t)) === "formdata" ||
            (e === "object" &&
              T(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  ba = O("URLSearchParams"),
  wa = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ee(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let r, i;
  if ((typeof t != "object" && (t = [t]), re(t)))
    for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), e.call(null, t[a], a, t);
  }
}
function fr(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
  return null;
}
const pr = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  mr = (t) => !ue(t) && t !== pr;
function pt() {
  const { caseless: t } = (mr(this) && this) || {},
    e = {},
    n = (r, i) => {
      const s = (t && fr(e, i)) || i;
      Ae(e[s]) && Ae(r)
        ? (e[s] = pt(e[s], r))
        : Ae(r)
        ? (e[s] = pt({}, r))
        : re(r)
        ? (e[s] = r.slice())
        : (e[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ee(arguments[r], n);
  return e;
}
const Ia = (t, e, n, { allOwnKeys: r } = {}) => (
    Ee(
      e,
      (i, s) => {
        n && T(i) ? (t[s] = ur(i, n)) : (t[s] = i);
      },
      { allOwnKeys: r }
    ),
    t
  ),
  va = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  Ta = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  Sa = (t, e, n, r) => {
    let i, s, o;
    const a = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, t, e)) && !a[o] && ((e[o] = t[o]), (a[o] = !0));
      t = n !== !1 && Ct(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  Ra = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  Aa = (t) => {
    if (!t) return null;
    if (re(t)) return t;
    let e = t.length;
    if (!hr(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  Ca = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && Ct(Uint8Array)),
  Oa = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      e.call(t, s[0], s[1]);
    }
  },
  ka = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  Pa = O("HTMLFormElement"),
  Na = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  an = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  Da = O("RegExp"),
  gr = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    Ee(n, (i, s) => {
      e(i, s, t) !== !1 && (r[s] = i);
    }),
      Object.defineProperties(t, r);
  },
  La = (t) => {
    gr(t, (e, n) => {
      if (T(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (T(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ma = (t, e) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return re(t) ? r(t) : r(String(t).split(e)), n;
  },
  Ua = () => {},
  xa = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  rt = "abcdefghijklmnopqrstuvwxyz",
  cn = "0123456789",
  _r = { DIGIT: cn, ALPHA: rt, ALPHA_DIGIT: rt + rt.toUpperCase() + cn },
  Ba = (t = 16, e = _r.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function Fa(t) {
  return !!(
    t &&
    T(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const Ha = (t) => {
    const e = new Array(10),
      n = (r, i) => {
        if (We(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[i] = r;
            const s = re(r) ? [] : {};
            return (
              Ee(r, (o, a) => {
                const l = n(o, i + 1);
                !ue(l) && (s[a] = l);
              }),
              (e[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  $a = O("AsyncFunction"),
  ja = (t) => t && (We(t) || T(t)) && T(t.then) && T(t.catch),
  u = {
    isArray: re,
    isArrayBuffer: dr,
    isBuffer: ua,
    isFormData: Ea,
    isArrayBufferView: da,
    isString: ha,
    isNumber: hr,
    isBoolean: fa,
    isObject: We,
    isPlainObject: Ae,
    isUndefined: ue,
    isDate: pa,
    isFile: ma,
    isBlob: ga,
    isRegExp: Da,
    isFunction: T,
    isStream: ya,
    isURLSearchParams: ba,
    isTypedArray: Ca,
    isFileList: _a,
    forEach: Ee,
    merge: pt,
    extend: Ia,
    trim: wa,
    stripBOM: va,
    inherits: Ta,
    toFlatObject: Sa,
    kindOf: je,
    kindOfTest: O,
    endsWith: Ra,
    toArray: Aa,
    forEachEntry: Oa,
    matchAll: ka,
    isHTMLForm: Pa,
    hasOwnProperty: an,
    hasOwnProp: an,
    reduceDescriptors: gr,
    freezeMethods: La,
    toObjectSet: Ma,
    toCamelCase: Na,
    noop: Ua,
    toFiniteNumber: xa,
    findKey: fr,
    global: pr,
    isContextDefined: mr,
    ALPHABET: _r,
    generateString: Ba,
    isSpecCompliantForm: Fa,
    toJSONObject: Ha,
    isAsyncFn: $a,
    isThenable: ja,
  };
function y(t, e, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
u.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: u.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const yr = y.prototype,
  Er = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  Er[t] = { value: t };
});
Object.defineProperties(y, Er);
Object.defineProperty(yr, "isAxiosError", { value: !0 });
y.from = (t, e, n, r, i, s) => {
  const o = Object.create(yr);
  return (
    u.toFlatObject(
      t,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    y.call(o, t.message, e, n, r, i),
    (o.cause = t),
    (o.name = t.name),
    s && Object.assign(o, s),
    o
  );
};
const Va = null;
function mt(t) {
  return u.isPlainObject(t) || u.isArray(t);
}
function br(t) {
  return u.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ln(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (i, s) {
          return (i = br(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : e;
}
function Wa(t) {
  return u.isArray(t) && !t.some(mt);
}
const za = u.toFlatObject(u, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function ze(t, e, n) {
  if (!u.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = u.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, v) {
        return !u.isUndefined(v[m]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && u.isSpecCompliantForm(e);
  if (!u.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (u.isDate(f)) return f.toISOString();
    if (!l && u.isBlob(f))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(f) || u.isTypedArray(f)
      ? l && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function d(f, m, v) {
    let I = f;
    if (f && !v && typeof f == "object") {
      if (u.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (u.isArray(f) && Wa(f)) ||
        ((u.isFileList(f) || u.endsWith(m, "[]")) && (I = u.toArray(f)))
      )
        return (
          (m = br(m)),
          I.forEach(function (U, we) {
            !(u.isUndefined(U) || U === null) &&
              e.append(
                o === !0 ? ln([m], we, s) : o === null ? m : m + "[]",
                c(U)
              );
          }),
          !1
        );
    }
    return mt(f) ? !0 : (e.append(ln(v, m, s), c(f)), !1);
  }
  const h = [],
    _ = Object.assign(za, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: mt,
    });
  function g(f, m) {
    if (!u.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(f),
        u.forEach(f, function (I, k) {
          (!(u.isUndefined(I) || I === null) &&
            i.call(e, I, u.isString(k) ? k.trim() : k, m, _)) === !0 &&
            g(I, m ? m.concat(k) : [k]);
        }),
        h.pop();
    }
  }
  if (!u.isObject(t)) throw new TypeError("data must be an object");
  return g(t), e;
}
function un(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function Ot(t, e) {
  (this._pairs = []), t && ze(t, this, e);
}
const wr = Ot.prototype;
wr.append = function (e, n) {
  this._pairs.push([e, n]);
};
wr.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, un);
      }
    : un;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function qa(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ir(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || qa,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(e, n))
      : (s = u.isURLSearchParams(e) ? e.toString() : new Ot(e, n).toString(r)),
    s)
  ) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return t;
}
class Ka {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    u.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const dn = Ka,
  vr = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ga = typeof URLSearchParams < "u" ? URLSearchParams : Ot,
  Ja = typeof FormData < "u" ? FormData : null,
  Xa = typeof Blob < "u" ? Blob : null,
  Ya = (() => {
    let t;
    return typeof navigator < "u" &&
      ((t = navigator.product) === "ReactNative" ||
        t === "NativeScript" ||
        t === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  Qa = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  S = {
    isBrowser: !0,
    classes: { URLSearchParams: Ga, FormData: Ja, Blob: Xa },
    isStandardBrowserEnv: Ya,
    isStandardBrowserWebWorkerEnv: Qa,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Za(t, e) {
  return ze(
    t,
    new S.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return S.isNode && u.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function ec(t) {
  return u
    .matchAll(/\w+|\[(\w*)]/g, t)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function tc(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (e[s] = t[s]);
  return e;
}
function Tr(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && u.isArray(i) ? i.length : o),
      l
        ? (u.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !u.isObject(i[o])) && (i[o] = []),
          e(n, r, i[o], s) && u.isArray(i[o]) && (i[o] = tc(i[o])),
          !a)
    );
  }
  if (u.isFormData(t) && u.isFunction(t.entries)) {
    const n = {};
    return (
      u.forEachEntry(t, (r, i) => {
        e(ec(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const nc = { "Content-Type": void 0 };
function rc(t, e, n) {
  if (u.isString(t))
    try {
      return (e || JSON.parse)(t), u.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
const qe = {
  transitional: vr,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = u.isObject(e);
      if ((s && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e)))
        return i && i ? JSON.stringify(Tr(e)) : e;
      if (
        u.isArrayBuffer(e) ||
        u.isBuffer(e) ||
        u.isStream(e) ||
        u.isFile(e) ||
        u.isBlob(e)
      )
        return e;
      if (u.isArrayBufferView(e)) return e.buffer;
      if (u.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Za(e, this.formSerializer).toString();
        if ((a = u.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return ze(
            a ? { "files[]": e } : e,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), rc(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || qe.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (e && u.isString(e) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(e);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? y.from(a, y.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: S.classes.FormData, Blob: S.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
u.forEach(["delete", "get", "head"], function (e) {
  qe.headers[e] = {};
});
u.forEach(["post", "put", "patch"], function (e) {
  qe.headers[e] = u.merge(nc);
});
const kt = qe,
  ic = u.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  sc = (t) => {
    const e = {};
    let n, r, i;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (e[n] && ic[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  hn = Symbol("internals");
function ie(t) {
  return t && String(t).trim().toLowerCase();
}
function Ce(t) {
  return t === !1 || t == null ? t : u.isArray(t) ? t.map(Ce) : String(t);
}
function oc(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
const ac = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function it(t, e, n, r, i) {
  if (u.isFunction(r)) return r.call(this, e, n);
  if ((i && (e = n), !!u.isString(e))) {
    if (u.isString(r)) return e.indexOf(r) !== -1;
    if (u.isRegExp(r)) return r.test(e);
  }
}
function cc(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function lc(t, e) {
  const n = u.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Ke {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(a, l, c) {
      const d = ie(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = u.findKey(i, d);
      (!h || i[h] === void 0 || c === !0 || (c === void 0 && i[h] !== !1)) &&
        (i[h || l] = Ce(a));
    }
    const o = (a, l) => u.forEach(a, (c, d) => s(c, d, l));
    return (
      u.isPlainObject(e) || e instanceof this.constructor
        ? o(e, n)
        : u.isString(e) && (e = e.trim()) && !ac(e)
        ? o(sc(e), n)
        : e != null && s(n, e, r),
      this
    );
  }
  get(e, n) {
    if (((e = ie(e)), e)) {
      const r = u.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return oc(i);
        if (u.isFunction(n)) return n.call(this, i, r);
        if (u.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = ie(e)), e)) {
      const r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || it(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = ie(o)), o)) {
        const a = u.findKey(r, o);
        a && (!n || it(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return u.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || it(this, this[s], s, e, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      u.forEach(this, (i, s) => {
        const o = u.findKey(r, s);
        if (o) {
          (n[o] = Ce(i)), delete n[s];
          return;
        }
        const a = e ? cc(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Ce(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      u.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = e && u.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[hn] = this[hn] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = ie(o);
      r[a] || (lc(i, o), (r[a] = !0));
    }
    return u.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Ke.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
u.freezeMethods(Ke.prototype);
u.freezeMethods(Ke);
const L = Ke;
function st(t, e) {
  const n = this || kt,
    r = e || n,
    i = L.from(r.headers);
  let s = r.data;
  return (
    u.forEach(t, function (a) {
      s = a.call(n, s, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function Sr(t) {
  return !!(t && t.__CANCEL__);
}
function be(t, e, n) {
  y.call(this, t ?? "canceled", y.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
u.inherits(be, y, { __CANCEL__: !0 });
function uc(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new y(
          "Request failed with status code " + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const dc = S.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, s, o, a) {
          const l = [];
          l.push(n + "=" + encodeURIComponent(r)),
            u.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()),
            u.isString(s) && l.push("path=" + s),
            u.isString(o) && l.push("domain=" + o),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function hc(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function fc(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Rr(t, e) {
  return t && !hc(e) ? fc(t, e) : e;
}
const pc = S.isStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let o = s;
        return (
          e && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const a = u.isString(o) ? i(o) : o;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function mc(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function gc(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let i = 0,
    s = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (l) {
      const c = Date.now(),
        d = r[s];
      o || (o = c), (n[i] = l), (r[i] = c);
      let h = s,
        _ = 0;
      for (; h !== i; ) (_ += n[h++]), (h = h % t);
      if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), c - o < e)) return;
      const g = d && c - d;
      return g ? Math.round((_ * 1e3) / g) : void 0;
    }
  );
}
function fn(t, e) {
  let n = 0;
  const r = gc(50, 250);
  return (i) => {
    const s = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      a = s - n,
      l = r(a),
      c = s <= o;
    n = s;
    const d = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && o && c ? (o - s) / l : void 0,
      event: i,
    };
    (d[e ? "download" : "upload"] = !0), t(d);
  };
}
const _c = typeof XMLHttpRequest < "u",
  yc =
    _c &&
    function (t) {
      return new Promise(function (n, r) {
        let i = t.data;
        const s = L.from(t.headers).normalize(),
          o = t.responseType;
        let a;
        function l() {
          t.cancelToken && t.cancelToken.unsubscribe(a),
            t.signal && t.signal.removeEventListener("abort", a);
        }
        u.isFormData(i) &&
          (S.isStandardBrowserEnv || S.isStandardBrowserWebWorkerEnv
            ? s.setContentType(!1)
            : s.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest();
        if (t.auth) {
          const g = t.auth.username || "",
            f = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(g + ":" + f));
        }
        const d = Rr(t.baseURL, t.url);
        c.open(t.method.toUpperCase(), Ir(d, t.params, t.paramsSerializer), !0),
          (c.timeout = t.timeout);
        function h() {
          if (!c) return;
          const g = L.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            m = {
              data:
                !o || o === "text" || o === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: t,
              request: c,
            };
          uc(
            function (I) {
              n(I), l();
            },
            function (I) {
              r(I), l();
            },
            m
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = h)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (c.onabort = function () {
            c &&
              (r(new y("Request aborted", y.ECONNABORTED, t, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new y("Network Error", y.ERR_NETWORK, t, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let f = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = t.transitional || vr;
            t.timeoutErrorMessage && (f = t.timeoutErrorMessage),
              r(
                new y(
                  f,
                  m.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  t,
                  c
                )
              ),
              (c = null);
          }),
          S.isStandardBrowserEnv)
        ) {
          const g =
            (t.withCredentials || pc(d)) &&
            t.xsrfCookieName &&
            dc.read(t.xsrfCookieName);
          g && s.set(t.xsrfHeaderName, g);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            u.forEach(s.toJSON(), function (f, m) {
              c.setRequestHeader(m, f);
            }),
          u.isUndefined(t.withCredentials) ||
            (c.withCredentials = !!t.withCredentials),
          o && o !== "json" && (c.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            c.addEventListener("progress", fn(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", fn(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((a = (g) => {
              c &&
                (r(!g || g.type ? new be(null, t, c) : g),
                c.abort(),
                (c = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(a),
            t.signal &&
              (t.signal.aborted ? a() : t.signal.addEventListener("abort", a)));
        const _ = mc(d);
        if (_ && S.protocols.indexOf(_) === -1) {
          r(new y("Unsupported protocol " + _ + ":", y.ERR_BAD_REQUEST, t));
          return;
        }
        c.send(i || null);
      });
    },
  Oe = { http: Va, xhr: yc };
u.forEach(Oe, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ec = {
  getAdapter: (t) => {
    t = u.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (
      let i = 0;
      i < e && ((n = t[i]), !(r = u.isString(n) ? Oe[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new y(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            u.hasOwnProp(Oe, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!u.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Oe,
};
function ot(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new be(null, t);
}
function pn(t) {
  return (
    ot(t),
    (t.headers = L.from(t.headers)),
    (t.data = st.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ec.getAdapter(t.adapter || kt.adapter)(t).then(
      function (r) {
        return (
          ot(t),
          (r.data = st.call(t, t.transformResponse, r)),
          (r.headers = L.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Sr(r) ||
            (ot(t),
            r &&
              r.response &&
              ((r.response.data = st.call(t, t.transformResponse, r.response)),
              (r.response.headers = L.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const mn = (t) => (t instanceof L ? t.toJSON() : t);
function te(t, e) {
  e = e || {};
  const n = {};
  function r(c, d, h) {
    return u.isPlainObject(c) && u.isPlainObject(d)
      ? u.merge.call({ caseless: h }, c, d)
      : u.isPlainObject(d)
      ? u.merge({}, d)
      : u.isArray(d)
      ? d.slice()
      : d;
  }
  function i(c, d, h) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(c)) return r(void 0, c, h);
    } else return r(c, d, h);
  }
  function s(c, d) {
    if (!u.isUndefined(d)) return r(void 0, d);
  }
  function o(c, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function a(c, d, h) {
    if (h in e) return r(c, d);
    if (h in t) return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, d) => i(mn(c), mn(d), !0),
  };
  return (
    u.forEach(Object.keys(Object.assign({}, t, e)), function (d) {
      const h = l[d] || i,
        _ = h(t[d], e[d], d);
      (u.isUndefined(_) && h !== a) || (n[d] = _);
    }),
    n
  );
}
const Ar = "1.4.0",
  Pt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    Pt[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const gn = {};
Pt.transitional = function (e, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      Ar +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (e === !1)
      throw new y(
        i(o, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return (
      n &&
        !gn[o] &&
        ((gn[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(s, o, a) : !0
    );
  };
};
function bc(t, e, n) {
  if (typeof t != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = e[s];
    if (o) {
      const a = t[s],
        l = a === void 0 || o(a, s, t);
      if (l !== !0)
        throw new y("option " + s + " must be " + l, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new y("Unknown option " + s, y.ERR_BAD_OPTION);
  }
}
const gt = { assertOptions: bc, validators: Pt },
  B = gt.validators;
class Be {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new dn(), response: new dn() });
  }
  request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = te(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      gt.assertOptions(
        r,
        {
          silentJSONParsing: B.transitional(B.boolean),
          forcedJSONParsing: B.transitional(B.boolean),
          clarifyTimeoutError: B.transitional(B.boolean),
        },
        !1
      ),
      i != null &&
        (u.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : gt.assertOptions(
              i,
              { encode: B.function, serialize: B.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = s && u.merge(s.common, s[n.method])),
      o &&
        u.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (f) => {
            delete s[f];
          }
        ),
      (n.headers = L.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((l = l && m.synchronous), a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (m) {
      c.push(m.fulfilled, m.rejected);
    });
    let d,
      h = 0,
      _;
    if (!l) {
      const f = [pn.bind(this), void 0];
      for (
        f.unshift.apply(f, a),
          f.push.apply(f, c),
          _ = f.length,
          d = Promise.resolve(n);
        h < _;

      )
        d = d.then(f[h++], f[h++]);
      return d;
    }
    _ = a.length;
    let g = n;
    for (h = 0; h < _; ) {
      const f = a[h++],
        m = a[h++];
      try {
        g = f(g);
      } catch (v) {
        m.call(this, v);
        break;
      }
    }
    try {
      d = pn.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, _ = c.length; h < _; ) d = d.then(c[h++], c[h++]);
    return d;
  }
  getUri(e) {
    e = te(this.defaults, e);
    const n = Rr(e.baseURL, e.url);
    return Ir(n, e.params, e.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function (e) {
  Be.prototype[e] = function (n, r) {
    return this.request(
      te(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
u.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        te(a || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (Be.prototype[e] = n()), (Be.prototype[e + "Form"] = n(!0));
});
const ke = Be;
class Nt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      e(function (s, o, a) {
        r.reason || ((r.reason = new be(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new Nt(function (i) {
        e = i;
      }),
      cancel: e,
    };
  }
}
const wc = Nt;
function Ic(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function vc(t) {
  return u.isObject(t) && t.isAxiosError === !0;
}
const _t = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(_t).forEach(([t, e]) => {
  _t[e] = t;
});
const Tc = _t;
function Cr(t) {
  const e = new ke(t),
    n = ur(ke.prototype.request, e);
  return (
    u.extend(n, ke.prototype, e, { allOwnKeys: !0 }),
    u.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Cr(te(t, i));
    }),
    n
  );
}
const b = Cr(kt);
b.Axios = ke;
b.CanceledError = be;
b.CancelToken = wc;
b.isCancel = Sr;
b.VERSION = Ar;
b.toFormData = ze;
b.AxiosError = y;
b.Cancel = b.CanceledError;
b.all = function (e) {
  return Promise.all(e);
};
b.spread = Ic;
b.isAxiosError = vc;
b.mergeConfig = te;
b.AxiosHeaders = L;
b.formToJSON = (t) => Tr(u.isHTMLForm(t) ? new FormData(t) : t);
b.HttpStatusCode = Tc;
b.default = b;
const Sc = b,
  Rc = An(ca),
  Ac = aa(Rc),
  Cc = new P(),
  Oc = async () => {
    try {
      const e = await (await go(Ac, Cc)).user.getIdToken();
      await kc(e), (window.location.href = "/app");
    } catch (t) {
      console.log(t);
    }
  };
function kc(t) {
  return Sc.post("http://localhost:3000/api/validate-idtoken", { token: t })
    .then((e) => (console.log(e.data), e.data.isValid))
    .catch((e) => {
      throw new Error("JWT validation request failed");
    });
}
const Pc = async () => {
  try {
    const t = await Oc();
  } catch {}
};
document.getElementById("googleLoginButton").addEventListener("click", Pc);
