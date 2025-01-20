var $i = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ot(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const z = $i.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pt = $i.NODE_ENV !== "production" ? Object.freeze([]) : [], ae = () => {
}, Xr = () => !1, on = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), On = (e) => e.startsWith("onUpdate:"), le = Object.assign, xo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zr = Object.prototype.hasOwnProperty, W = (e, t) => Zr.call(e, t), A = Array.isArray, bt = (e) => kn(e) === "[object Map]", Pi = (e) => kn(e) === "[object Set]", R = (e) => typeof e == "function", ne = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", Do = (e) => (J(e) || R(e)) && R(e.then) && R(e.catch), Mi = Object.prototype.toString, kn = (e) => Mi.call(e), Vo = (e) => kn(e).slice(8, -1), Ai = (e) => kn(e) === "[object Object]", Co = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = /* @__PURE__ */ ot(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qr = /* @__PURE__ */ ot(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, es = /-(\w)/g, Ie = jn(
  (e) => e.replace(es, (t, n) => n ? n.toUpperCase() : "")
), ts = /\B([A-Z])/g, dt = jn(
  (e) => e.replace(ts, "-$1").toLowerCase()
), Fn = jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _t = jn(
  (e) => e ? `on${Fn(e)}` : ""
), ft = (e, t) => !Object.is(e, t), St = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, xn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, co = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let qo;
const rn = () => qo || (qo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pe(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = ne(o) ? rs(o) : Pe(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (ne(e) || J(e))
    return e;
}
const ns = /;(?![^(]*\))/g, os = /:([^]+)/, is = /\/\*[^]*?\*\//g;
function rs(e) {
  const t = {};
  return e.replace(is, "").split(ns).forEach((n) => {
    if (n) {
      const o = n.split(os);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const o = ge(e[n]);
      o && (t += o + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ss = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ls = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", cs = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", as = /* @__PURE__ */ ot(ss), us = /* @__PURE__ */ ot(ls), fs = /* @__PURE__ */ ot(cs), ds = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ps = /* @__PURE__ */ ot(ds);
function Ii(e) {
  return !!e || e === "";
}
const Ri = (e) => !!(e && e.__v_isRef === !0), Wt = (e) => ne(e) ? e : e == null ? "" : A(e) || J(e) && (e.toString === Mi || !R(e.toString)) ? Ri(e) ? Wt(e.value) : JSON.stringify(e, ki, 2) : String(e), ki = (e, t) => Ri(t) ? ki(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[Yn(o, r) + " =>"] = i, n),
    {}
  )
} : Pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yn(n))
} : ht(t) ? Yn(t) : J(t) && !A(t) && !Ai(t) ? String(t) : t, Yn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var X = {};
function Ge(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Se;
class hs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    } else X.NODE_ENV !== "production" && Ge("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Se = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Se = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function gs() {
  return Se;
}
let K;
const Xn = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xn.has(this) && (Xn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Go(this), Li(this);
    const t = K, n = Re;
    K = this, Re = !0;
    try {
      return this.fn();
    } finally {
      X.NODE_ENV !== "production" && K !== this && Ge(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ui(this), K = t, Re = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $o(t);
      this.deps = this.depsTail = void 0, Go(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ao(this) && this.run();
  }
  get dirty() {
    return ao(this);
  }
}
let Fi = 0, Gt, Jt;
function Hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Jt, Jt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function So() {
  Fi++;
}
function To() {
  if (--Fi > 0)
    return;
  if (Jt) {
    let t = Jt;
    for (Jt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Li(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ui(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), $o(o), ms(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function ao(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt))
    return;
  e.globalVersion = Zt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ao(e)) {
    e.flags &= -3;
    return;
  }
  const n = K, o = Re;
  K = e, Re = !0;
  try {
    Li(e);
    const i = e.fn(e._value);
    (t.version === 0 || ft(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    K = n, Re = o, Ui(e), e.flags &= -3;
  }
}
function $o(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), X.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      $o(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ms(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const Wi = [];
function it() {
  Wi.push(Re), Re = !1;
}
function rt() {
  const e = Wi.pop();
  Re = e === void 0 ? !0 : e;
}
function Go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = K;
    K = void 0;
    try {
      t();
    } finally {
      K = n;
    }
  }
}
let Zt = 0;
class _s {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Po {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, X.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !Re || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new _s(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, Ki(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = o);
    }
    return X.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      le(
        {
          effect: K
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    So();
    try {
      if (X.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            le(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      To();
    }
  }
}
function Ki(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ki(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), X.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const uo = /* @__PURE__ */ new WeakMap(), yt = Symbol(
  X.NODE_ENV !== "production" ? "Object iterate" : ""
), fo = Symbol(
  X.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Qt = Symbol(
  X.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ce(e, t, n) {
  if (Re && K) {
    let o = uo.get(e);
    o || uo.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Po()), i.map = o, i.key = n), X.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function We(e, t, n, o, i, r) {
  const s = uo.get(e);
  if (!s) {
    Zt++;
    return;
  }
  const l = (a) => {
    a && (X.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : a.trigger());
  };
  if (So(), t === "clear")
    s.forEach(l);
  else {
    const a = A(e), h = a && Co(n);
    if (a && n === "length") {
      const p = Number(o);
      s.forEach((f, m) => {
        (m === "length" || m === Qt || !ht(m) && m >= p) && l(f);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(Qt)), t) {
        case "add":
          a ? h && l(s.get("length")) : (l(s.get(yt)), bt(e) && l(s.get(fo)));
          break;
        case "delete":
          a || (l(s.get(yt)), bt(e) && l(s.get(fo)));
          break;
        case "set":
          bt(e) && l(s.get(yt));
          break;
      }
  }
  To();
}
function Dt(e) {
  const t = F(e);
  return t === e ? t : (ce(t, "iterate", Qt), Oe(e) ? t : t.map(me));
}
function Hn(e) {
  return ce(e = F(e), "iterate", Qt), e;
}
const vs = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zn(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Dt(this).concat(
      ...e.map((t) => A(t) ? Dt(t) : t)
    );
  },
  entries() {
    return Zn(this, "entries", (e) => (e[1] = me(e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(this, "filter", e, t, (n) => n.map(me), arguments);
  },
  find(e, t) {
    return Xe(this, "find", e, t, me, arguments);
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(this, "findLast", e, t, me, arguments);
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qn(this, "includes", e);
  },
  indexOf(...e) {
    return Qn(this, "indexOf", e);
  },
  join(e) {
    return Dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Qn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ht(this, "pop");
  },
  push(...e) {
    return Ht(this, "push", e);
  },
  reduce(e, ...t) {
    return Jo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Jo(this, "reduceRight", e, t);
  },
  shift() {
    return Ht(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ht(this, "splice", e);
  },
  toReversed() {
    return Dt(this).toReversed();
  },
  toSorted(e) {
    return Dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ht(this, "unshift", e);
  },
  values() {
    return Zn(this, "values", me);
  }
};
function Zn(e, t, n) {
  const o = Hn(e), i = o[t]();
  return o !== e && !Oe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const bs = Array.prototype;
function Xe(e, t, n, o, i, r) {
  const s = Hn(e), l = s !== e && !Oe(e), a = s[t];
  if (a !== bs[t]) {
    const f = a.apply(e, r);
    return l ? me(f) : f;
  }
  let h = n;
  s !== e && (l ? h = function(f, m) {
    return n.call(this, me(f), m, e);
  } : n.length > 2 && (h = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const p = a.call(s, h, o);
  return l && i ? i(p) : p;
}
function Jo(e, t, n, o) {
  const i = Hn(e);
  let r = n;
  return i !== e && (Oe(e) ? n.length > 3 && (r = function(s, l, a) {
    return n.call(this, s, l, a, e);
  }) : r = function(s, l, a) {
    return n.call(this, s, me(l), a, e);
  }), i[t](r, ...o);
}
function Qn(e, t, n) {
  const o = F(e);
  ce(o, "iterate", Qt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Dn(n[0]) ? (n[0] = F(n[0]), o[t](...n)) : i;
}
function Ht(e, t, n = []) {
  it(), So();
  const o = F(e)[t].apply(e, n);
  return To(), rt(), o;
}
const ys = /* @__PURE__ */ ot("__proto__,__v_isRef,__isVue"), zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
);
function Es(e) {
  ht(e) || (e = String(e));
  const t = F(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class qi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? Qi : Zi : r ? Xi : Yi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = A(t);
    if (!i) {
      let a;
      if (s && (a = vs[n]))
        return a;
      if (n === "hasOwnProperty")
        return Es;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      se(t) ? t : o
    );
    return (ht(n) ? zi.has(n) : ys(n)) || (i || ce(t, "get", n), r) ? l : se(l) ? s && Co(n) ? l : l.value : J(l) ? i ? er(l) : Mo(l) : l;
  }
}
class Gi extends qi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const a = nt(r);
      if (!Oe(o) && !nt(o) && (r = F(r), o = F(o)), !A(t) && se(r) && !se(o))
        return a ? !1 : (r.value = o, !0);
    }
    const s = A(t) && Co(n) ? Number(n) < t.length : W(t, n), l = Reflect.set(
      t,
      n,
      o,
      se(t) ? t : i
    );
    return t === F(i) && (s ? ft(o, r) && We(t, "set", n, o, r) : We(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = W(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && We(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ht(n) || !zi.has(n)) && ce(t, "has", n), o;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      A(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class Ji extends qi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return X.NODE_ENV !== "production" && Ge(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return X.NODE_ENV !== "production" && Ge(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ns = /* @__PURE__ */ new Gi(), ws = /* @__PURE__ */ new Ji(), Os = /* @__PURE__ */ new Gi(!0), xs = /* @__PURE__ */ new Ji(!0), po = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function Ds(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = F(i), s = bt(r), l = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, h = i[e](...o), p = n ? po : t ? ho : me;
    return !t && ce(
      r,
      "iterate",
      a ? fo : yt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: m } = h.next();
        return m ? { value: f, done: m } : {
          value: l ? [p(f[0]), p(f[1])] : p(f),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function pn(e) {
  return function(...t) {
    if (X.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ge(
        `${Fn(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vs(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = F(r), l = F(i);
      e || (ft(i, l) && ce(s, "get", i), ce(s, "get", l));
      const { has: a } = dn(s), h = t ? po : e ? ho : me;
      if (a.call(s, i))
        return h(r.get(i));
      if (a.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ce(F(i), "iterate", yt), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = F(r), l = F(i);
      return e || (ft(i, l) && ce(s, "has", i), ce(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, a = F(l), h = t ? po : e ? ho : me;
      return !e && ce(a, "iterate", yt), l.forEach((p, f) => i.call(r, h(p), h(f), s));
    }
  };
  return le(
    n,
    e ? {
      add: pn("add"),
      set: pn("set"),
      delete: pn("delete"),
      clear: pn("clear")
    } : {
      add(i) {
        !t && !Oe(i) && !nt(i) && (i = F(i));
        const r = F(this);
        return dn(r).has.call(r, i) || (r.add(i), We(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Oe(r) && !nt(r) && (r = F(r));
        const s = F(this), { has: l, get: a } = dn(s);
        let h = l.call(s, i);
        h ? X.NODE_ENV !== "production" && Yo(s, l, i) : (i = F(i), h = l.call(s, i));
        const p = a.call(s, i);
        return s.set(i, r), h ? ft(r, p) && We(s, "set", i, r, p) : We(s, "add", i, r), this;
      },
      delete(i) {
        const r = F(this), { has: s, get: l } = dn(r);
        let a = s.call(r, i);
        a ? X.NODE_ENV !== "production" && Yo(r, s, i) : (i = F(i), a = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, p = r.delete(i);
        return a && We(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = F(this), r = i.size !== 0, s = X.NODE_ENV !== "production" ? bt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && We(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Ds(i, e, t);
  }), n;
}
function Ln(e, t) {
  const n = Vs(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    W(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Cs = {
  get: /* @__PURE__ */ Ln(!1, !1)
}, Ss = {
  get: /* @__PURE__ */ Ln(!1, !0)
}, Ts = {
  get: /* @__PURE__ */ Ln(!0, !1)
}, $s = {
  get: /* @__PURE__ */ Ln(!0, !0)
};
function Yo(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const i = Vo(e);
    Ge(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Yi = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap();
function Ps(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ms(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ps(Vo(e));
}
function Mo(e) {
  return nt(e) ? e : Un(
    e,
    !1,
    Ns,
    Cs,
    Yi
  );
}
function As(e) {
  return Un(
    e,
    !1,
    Os,
    Ss,
    Xi
  );
}
function er(e) {
  return Un(
    e,
    !0,
    ws,
    Ts,
    Zi
  );
}
function ze(e) {
  return Un(
    e,
    !0,
    xs,
    $s,
    Qi
  );
}
function Un(e, t, n, o, i) {
  if (!J(e))
    return X.NODE_ENV !== "production" && Ge(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Ms(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function Et(e) {
  return nt(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Dn(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Is(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && xn(e, "__v_skip", !0), e;
}
const me = (e) => J(e) ? Mo(e) : e, ho = (e) => J(e) ? er(e) : e;
function se(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function de(e) {
  return Rs(e, !1);
}
function Rs(e, t) {
  return se(e) ? e : new ks(e, t);
}
class ks {
  constructor(t, n) {
    this.dep = new Po(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : F(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Oe(t) || nt(t);
    t = o ? t : F(t), ft(t, n) && (this._rawValue = t, this._value = o ? t : me(t), X.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function js(e) {
  return se(e) ? e.value : e;
}
const Fs = {
  get: (e, t, n) => t === "__v_raw" ? e : js(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return se(i) && !se(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function tr(e) {
  return Et(e) ? e : new Proxy(e, Fs);
}
class Hs {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Po(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return Hi(this, !0), !0;
  }
  get value() {
    const t = X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Bi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : X.NODE_ENV !== "production" && Ge("Write operation failed: computed value is readonly");
  }
}
function Ls(e, t, n = !1) {
  let o, i;
  return R(e) ? o = e : (o = e.get, i = e.set), new Hs(o, i, n);
}
const hn = {}, Vn = /* @__PURE__ */ new WeakMap();
let vt;
function Us(e, t = !1, n = vt) {
  if (n) {
    let o = Vn.get(n);
    o || Vn.set(n, o = []), o.push(e);
  } else X.NODE_ENV !== "production" && !t && Ge(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Bs(e, t, n = z) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: a } = n, h = ($) => {
    (n.onWarn || Ge)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = ($) => i ? $ : Oe($) || i === !1 || i === 0 ? Qe($, 1) : Qe($);
  let f, m, E, T, M = !1, re = !1;
  if (se(e) ? (m = () => e.value, M = Oe(e)) : Et(e) ? (m = () => p(e), M = !0) : A(e) ? (re = !0, M = e.some(($) => Et($) || Oe($)), m = () => e.map(($) => {
    if (se($))
      return $.value;
    if (Et($))
      return p($);
    if (R($))
      return a ? a($, 2) : $();
    X.NODE_ENV !== "production" && h($);
  })) : R(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (E) {
      it();
      try {
        E();
      } finally {
        rt();
      }
    }
    const $ = vt;
    vt = f;
    try {
      return a ? a(e, 3, [T]) : e(T);
    } finally {
      vt = $;
    }
  } : (m = ae, X.NODE_ENV !== "production" && h(e)), t && i) {
    const $ = m, oe = i === !0 ? 1 / 0 : i;
    m = () => Qe($(), oe);
  }
  const L = gs(), Z = () => {
    f.stop(), L && L.active && xo(L.effects, f);
  };
  if (r && t) {
    const $ = t;
    t = (...oe) => {
      $(...oe), Z();
    };
  }
  let B = re ? new Array(e.length).fill(hn) : hn;
  const _e = ($) => {
    if (!(!(f.flags & 1) || !f.dirty && !$))
      if (t) {
        const oe = f.run();
        if (i || M || (re ? oe.some((ve, ue) => ft(ve, B[ue])) : ft(oe, B))) {
          E && E();
          const ve = vt;
          vt = f;
          try {
            const ue = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              B === hn ? void 0 : re && B[0] === hn ? [] : B,
              T
            ];
            a ? a(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), B = oe;
          } finally {
            vt = ve;
          }
        }
      } else
        f.run();
  };
  return l && l(_e), f = new ji(m), f.scheduler = s ? () => s(_e, !1) : _e, T = ($) => Us($, !1, f), E = f.onStop = () => {
    const $ = Vn.get(f);
    if ($) {
      if (a)
        a($, 4);
      else
        for (const oe of $) oe();
      Vn.delete(f);
    }
  }, X.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? o ? _e(!0) : B = f.run() : s ? s(_e.bind(null, !0), !0) : f.run(), Z.pause = f.pause.bind(f), Z.resume = f.resume.bind(f), Z.stop = Z, Z;
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, se(e))
    Qe(e.value, t, n);
  else if (A(e))
    for (let o = 0; o < e.length; o++)
      Qe(e[o], t, n);
  else if (Pi(e) || bt(e))
    e.forEach((o) => {
      Qe(o, t, n);
    });
  else if (Ai(e)) {
    for (const o in e)
      Qe(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Qe(e[o], t, n);
  }
  return e;
}
var d = {};
const Nt = [];
function mn(e) {
  Nt.push(e);
}
function _n() {
  Nt.pop();
}
let eo = !1;
function O(e, ...t) {
  if (eo) return;
  eo = !0, it();
  const n = Nt.length ? Nt[Nt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Ws();
  if (o)
    It(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Gn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Ks(i)), console.warn(...r);
  }
  rt(), eo = !1;
}
function Ws() {
  let e = Nt[Nt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ks(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...zs(n));
  }), t;
}
function zs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Gn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...qs(e.props), r] : [i + r];
}
function qs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...nr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nr(e, t, n) {
  return ne(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : se(t) ? (t = nr(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const Ao = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function It(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    sn(i, t, n);
  }
}
function Je(e, t, n, o) {
  if (R(e)) {
    const i = It(e, t, n, o);
    return i && Do(i) && i.catch((r) => {
      sn(r, t, n);
    }), i;
  }
  if (A(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Je(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function sn(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, h = d.NODE_ENV !== "production" ? Ao[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let f = 0; f < p.length; f++)
          if (p[f](e, a, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      it(), It(r, null, 10, [
        e,
        a,
        h
      ]), rt();
      return;
    }
  }
  Gs(e, n, i, o, s);
}
function Gs(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = Ao[t];
    if (n && mn(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && _n(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const Ee = [];
let Be = -1;
const Mt = [];
let ct = null, Tt = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Cn = null;
const Js = 100;
function ir(e) {
  const t = Cn || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ys(e) {
  let t = Be + 1, n = Ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = Ee[o], r = en(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Bn(e) {
  if (!(e.flags & 1)) {
    const t = en(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= en(n) ? Ee.push(e) : Ee.splice(Ys(t), 0, e), e.flags |= 1, rr();
  }
}
function rr() {
  Cn || (Cn = or.then(cr));
}
function sr(e) {
  A(e) ? Mt.push(...e) : ct && e.id === -1 ? ct.splice(Tt + 1, 0, e) : e.flags & 1 || (Mt.push(e), e.flags |= 1), rr();
}
function Xo(e, t, n = Be + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ee.length; n++) {
    const o = Ee[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && Io(t, o))
        continue;
      Ee.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function lr(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)].sort(
      (n, o) => en(n) - en(o)
    );
    if (Mt.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Tt = 0; Tt < ct.length; Tt++) {
      const n = ct[Tt];
      d.NODE_ENV !== "production" && Io(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ct = null, Tt = 0;
  }
}
const en = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => Io(e, n) : ae;
  try {
    for (Be = 0; Be < Ee.length; Be++) {
      const n = Ee[Be];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), It(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Be < Ee.length; Be++) {
      const n = Ee[Be];
      n && (n.flags &= -2);
    }
    Be = -1, Ee.length = 0, lr(e), Cn = null, (Ee.length || Mt.length) && cr(e);
  }
}
function Io(e, t) {
  const n = e.get(t) || 0;
  if (n > Js) {
    const o = t.i, i = o && Wr(o.type);
    return sn(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let qe = !1;
const vn = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (rn().__VUE_HMR_RUNTIME__ = {
  createRecord: to(ar),
  rerender: to(Qs),
  reload: to(el)
});
const Ot = /* @__PURE__ */ new Map();
function Xs(e) {
  const t = e.type.__hmrId;
  let n = Ot.get(t);
  n || (ar(t, e.type), n = Ot.get(t)), n.instances.add(e);
}
function Zs(e) {
  Ot.get(e.type.__hmrId).instances.delete(e);
}
function ar(e, t) {
  return Ot.has(e) ? !1 : (Ot.set(e, {
    initialDef: Sn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Sn(e) {
  return Kr(e) ? e.__vccOpts : e;
}
function Qs(e, t) {
  const n = Ot.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Sn(o.type).render = t), o.renderCache = [], qe = !0, o.update(), qe = !1;
  }));
}
function el(e, t) {
  const n = Ot.get(e);
  if (!n) return;
  t = Sn(t), Zo(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = Sn(r.type);
    let l = vn.get(s);
    l || (s !== n.initialDef && Zo(s, t), vn.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Bn(() => {
      qe = !0, r.parent.update(), qe = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  sr(() => {
    vn.clear();
  });
}
function Zo(e, t) {
  le(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function to(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ke, Kt = [], go = !1;
function ln(e, ...t) {
  Ke ? Ke.emit(e, ...t) : go || Kt.push({ event: e, args: t });
}
function ur(e, t) {
  var n, o;
  Ke = e, Ke ? (Ke.enabled = !0, Kt.forEach(({ event: i, args: r }) => Ke.emit(i, ...r)), Kt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ur(r, t);
  }), setTimeout(() => {
    Ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, go = !0, Kt = []);
  }, 3e3)) : (go = !0, Kt = []);
}
function tl(e, t) {
  ln("app:init", e, t, {
    Fragment: Ne,
    Text: cn,
    Comment: $e,
    Static: En
  });
}
function nl(e) {
  ln("app:unmount", e);
}
const ol = /* @__PURE__ */ Ro(
  "component:added"
  /* COMPONENT_ADDED */
), fr = /* @__PURE__ */ Ro(
  "component:updated"
  /* COMPONENT_UPDATED */
), il = /* @__PURE__ */ Ro(
  "component:removed"
  /* COMPONENT_REMOVED */
), rl = (e) => {
  Ke && typeof Ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ke.cleanupBuffer(e) && il(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ro(e) {
  return (t) => {
    ln(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const sl = /* @__PURE__ */ dr(
  "perf:start"
  /* PERFORMANCE_START */
), ll = /* @__PURE__ */ dr(
  "perf:end"
  /* PERFORMANCE_END */
);
function dr(e) {
  return (t, n, o) => {
    ln(e, t.appContext.app, t.uid, t, n, o);
  };
}
function cl(e, t, n) {
  ln(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let we = null, pr = null;
function Tn(e) {
  const t = we;
  return we = e, pr = e && e.type.__scopeId || null, t;
}
function al(e, t = we, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && fi(-1);
    const r = Tn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Tn(r), o._d && fi(1);
    }
    return d.NODE_ENV !== "production" && fr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function hr(e) {
  Qr(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function Qo(e, t) {
  if (we === null)
    return d.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = qn(we), o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, l, a = z] = t[i];
    r && (R(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Qe(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function gt(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let a = l.dir[o];
    a && (it(), Je(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
  }
}
const ul = Symbol("_vte"), fl = (e) => e.__isTeleport;
function ko(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ko(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dl(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const pl = /* @__PURE__ */ new WeakSet();
function $n(e, t, n, o, i = !1) {
  if (A(e)) {
    e.forEach(
      (T, M) => $n(
        T,
        t && (A(t) ? t[M] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Yt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && $n(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? qn(o.component) : o.el, s = i ? null : r, { i: l, r: a } = e;
  if (d.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === z ? l.refs = {} : l.refs, f = l.setupState, m = F(f), E = f === z ? () => !1 : (T) => d.NODE_ENV !== "production" && (W(m, T) && !se(m[T]) && O(
    `Template ref "${T}" used on a non-ref value. It will not work in the production build.`
  ), pl.has(m[T])) ? !1 : W(m, T);
  if (h != null && h !== a && (ne(h) ? (p[h] = null, E(h) && (f[h] = null)) : se(h) && (h.value = null)), R(a))
    It(a, l, 12, [s, p]);
  else {
    const T = ne(a), M = se(a);
    if (T || M) {
      const re = () => {
        if (e.f) {
          const L = T ? E(a) ? f[a] : p[a] : a.value;
          i ? A(L) && xo(L, r) : A(L) ? L.includes(r) || L.push(r) : T ? (p[a] = [r], E(a) && (f[a] = p[a])) : (a.value = [r], e.k && (p[e.k] = a.value));
        } else T ? (p[a] = s, E(a) && (f[a] = s)) : M ? (a.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (re.id = -1, Ce(re, n)) : re();
    } else d.NODE_ENV !== "production" && O("Invalid template ref type:", a, `(${typeof a})`);
  }
}
rn().requestIdleCallback;
rn().cancelIdleCallback;
const Yt = (e) => !!e.type.__asyncLoader, jo = (e) => e.type.__isKeepAlive;
function hl(e, t) {
  mr(e, "a", t);
}
function gl(e, t) {
  mr(e, "da", t);
}
function mr(e, t, n = pe) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Wn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      jo(i.parent.vnode) && ml(o, t, n, i), i = i.parent;
  }
}
function ml(e, t, n, o) {
  const i = Wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Fo(() => {
    xo(o[t], i);
  }, n);
}
function Wn(e, t, n = pe, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      it();
      const l = an(n), a = Je(t, n, e, s);
      return l(), rt(), a;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = _t(Ao[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const st = (e) => (t, n = pe) => {
  (!nn || e === "sp") && Wn(e, (...o) => t(...o), n);
}, _l = st("bm"), _r = st("m"), vl = st(
  "bu"
), bl = st("u"), yl = st(
  "bum"
), Fo = st("um"), El = st(
  "sp"
), Nl = st("rtg"), wl = st("rtc");
function Ol(e, t = pe) {
  Wn("ec", e, t);
}
const xl = Symbol.for("v-ndc");
function gn(e, t, n, o) {
  let i;
  const r = n, s = A(e);
  if (s || ne(e)) {
    const l = s && Et(e);
    let a = !1;
    l && (a = !Oe(e), e = Hn(e)), i = new Array(e.length);
    for (let h = 0, p = e.length; h < p; h++)
      i[h] = t(
        a ? me(e[h]) : e[h],
        h,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    d.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (J(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, h = l.length; a < h; a++) {
        const p = l[a];
        i[a] = t(e[p], p, a, r);
      }
    }
  else
    i = [];
  return i;
}
const mo = (e) => e ? Ur(e) ? qn(e) : mo(e.parent) : null, wt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? ze(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? ze(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? ze(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? ze(e.refs) : e.refs,
    $parent: (e) => mo(e.parent),
    $root: (e) => mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ir.bind(e.proxy)),
    $watch: (e) => ic.bind(e)
  })
), Ho = (e) => e === "_" || e === "$", no = (e, t) => e !== z && !e.__isScriptSetup && W(e, t), vr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: a } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const E = s[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (no(o, t))
          return s[t] = 1, o[t];
        if (i !== z && W(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && W(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== z && W(n, t))
          return s[t] = 4, n[t];
        _o && (s[t] = 0);
      }
    }
    const p = wt[t];
    let f, m;
    if (p)
      return t === "$attrs" ? (ce(e.attrs, "get", ""), d.NODE_ENV !== "production" && An()) : d.NODE_ENV !== "production" && t === "$slots" && ce(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== z && W(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, W(m, t)
    )
      return m[t];
    d.NODE_ENV !== "production" && we && (!ne(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== z && Ho(t[0]) && W(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === we && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return no(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && W(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== z && W(o, t) ? (o[t] = n, !0) : W(e.props, t) ? (d.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let l;
    return !!n[s] || e !== z && W(e, s) || no(t, s) || (l = r[0]) && W(l, s) || W(o, s) || W(wt, s) || W(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (vr.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Dl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(wt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => wt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ae
    });
  }), t;
}
function Vl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ae
    });
  });
}
function Cl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ho(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ae
      });
    }
  });
}
function ei(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Sl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let _o = !0;
function Tl(e) {
  const t = yr(e), n = e.proxy, o = e.ctx;
  _o = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: a,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: f,
    mounted: m,
    beforeUpdate: E,
    updated: T,
    activated: M,
    deactivated: re,
    beforeDestroy: L,
    beforeUnmount: Z,
    destroyed: B,
    unmounted: _e,
    render: $,
    renderTracked: oe,
    renderTriggered: ve,
    errorCaptured: ue,
    serverPrefetch: he,
    // public API
    expose: Me,
    inheritAttrs: ke,
    // assets
    components: De,
    directives: xt,
    filters: un
  } = t, je = d.NODE_ENV !== "production" ? Sl() : null;
  if (d.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const C in H)
        je("Props", C);
  }
  if (h && $l(h, o, je), s)
    for (const H in s) {
      const C = s[H];
      R(C) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, H, {
        value: C.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[H] = C.bind(n), d.NODE_ENV !== "production" && je("Methods", H)) : d.NODE_ENV !== "production" && O(
        `Method "${H}" has type "${typeof C}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !R(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = i.call(n, n);
    if (d.NODE_ENV !== "production" && Do(H) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !J(H))
      d.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Mo(H), d.NODE_ENV !== "production")
      for (const C in H)
        je("Data", C), Ho(C[0]) || Object.defineProperty(o, C, {
          configurable: !0,
          enumerable: !0,
          get: () => H[C],
          set: ae
        });
  }
  if (_o = !0, r)
    for (const H in r) {
      const C = r[H], V = R(C) ? C.bind(n, n) : R(C.get) ? C.get.bind(n, n) : ae;
      d.NODE_ENV !== "production" && V === ae && O(`Computed property "${H}" has no getter.`);
      const S = !R(C) && R(C.set) ? C.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      } : ae, G = Tc({
        get: V,
        set: S
      });
      Object.defineProperty(o, H, {
        enumerable: !0,
        configurable: !0,
        get: () => G.value,
        set: (te) => G.value = te
      }), d.NODE_ENV !== "production" && je("Computed", H);
    }
  if (l)
    for (const H in l)
      br(l[H], o, n, H);
  if (a) {
    const H = R(a) ? a.call(n) : a;
    Reflect.ownKeys(H).forEach((C) => {
      kl(C, H[C]);
    });
  }
  p && ti(p, e, "c");
  function fe(H, C) {
    A(C) ? C.forEach((V) => H(V.bind(n))) : C && H(C.bind(n));
  }
  if (fe(_l, f), fe(_r, m), fe(vl, E), fe(bl, T), fe(hl, M), fe(gl, re), fe(Ol, ue), fe(wl, oe), fe(Nl, ve), fe(yl, Z), fe(Fo, _e), fe(El, he), A(Me))
    if (Me.length) {
      const H = e.exposed || (e.exposed = {});
      Me.forEach((C) => {
        Object.defineProperty(H, C, {
          get: () => n[C],
          set: (V) => n[C] = V
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === ae && (e.render = $), ke != null && (e.inheritAttrs = ke), De && (e.components = De), xt && (e.directives = xt), he && gr(e);
}
function $l(e, t, n = ae) {
  A(e) && (e = vo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    J(i) ? "default" in i ? r = bn(
      i.from || o,
      i.default,
      !0
    ) : r = bn(i.from || o) : r = bn(i), se(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ti(e, t, n) {
  Je(
    A(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function br(e, t, n, o) {
  let i = o.includes(".") ? Mr(n, o) : () => n[o];
  if (ne(e)) {
    const r = t[e];
    R(r) ? io(i, r) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (R(e))
    io(i, e.bind(n));
  else if (J(e))
    if (A(e))
      e.forEach((r) => br(r, t, n, o));
    else {
      const r = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(r) ? io(i, r, e) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function yr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !o ? a = t : (a = {}, i.length && i.forEach(
    (h) => Pn(a, h, s, !0)
  ), Pn(a, t, s)), J(t) && r.set(t, a), a;
}
function Pn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Pn(e, r, n, !0), i && i.forEach(
    (s) => Pn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Pl[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Pl = {
  data: ni,
  props: oi,
  emits: oi,
  // objects
  methods: zt,
  computed: zt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: zt,
  directives: zt,
  // watch
  watch: Al,
  // provide / inject
  provide: ni,
  inject: Ml
};
function ni(e, t) {
  return t ? e ? function() {
    return le(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ml(e, t) {
  return zt(vo(e), vo(t));
}
function vo(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function oi(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    ei(e),
    ei(t ?? {})
  ) : t;
}
function Al(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ye(e[o], t[o]);
  return n;
}
function Er() {
  return {
    app: null,
    config: {
      isNativeTag: Xr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Il = 0;
function Rl(e, t) {
  return function(o, i = null) {
    R(o) || (o = le({}, o)), i != null && !J(i) && (d.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = Er(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const h = r.app = {
      _uid: Il++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: gi,
      get config() {
        return r.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...f) {
        return s.has(p) ? d.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && R(p.install) ? (s.add(p), p.install(h, ...f)) : R(p) ? (s.add(p), p(h, ...f)) : d.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, f) {
        return d.NODE_ENV !== "production" && wo(p, r.config), f ? (d.NODE_ENV !== "production" && r.components[p] && O(`Component "${p}" has already been registered in target app.`), r.components[p] = f, h) : r.components[p];
      },
      directive(p, f) {
        return d.NODE_ENV !== "production" && hr(p), f ? (d.NODE_ENV !== "production" && r.directives[p] && O(`Directive "${p}" has already been registered in target app.`), r.directives[p] = f, h) : r.directives[p];
      },
      mount(p, f, m) {
        if (a)
          d.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const E = h._ceVNode || et(o, i);
          return E.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), d.NODE_ENV !== "production" && (r.reload = () => {
            e(
              pt(E),
              p,
              m
            );
          }), e(E, p, m), a = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = E.component, tl(h, gi)), qn(E.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        a ? (Je(
          l,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, nl(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, f) {
        return d.NODE_ENV !== "production" && p in r.provides && O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = f, h;
      },
      runWithContext(p) {
        const f = At;
        At = h;
        try {
          return p();
        } finally {
          At = f;
        }
      }
    };
    return h;
  };
}
let At = null;
function kl(e, t) {
  if (!pe)
    d.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = pe.provides;
    const o = pe.parent && pe.parent.provides;
    o === n && (n = pe.provides = Object.create(o)), n[e] = t;
  }
}
function bn(e, t, n = !1) {
  const o = pe || we;
  if (o || At) {
    const i = At ? At._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Nr = {}, wr = () => Object.create(Nr), Or = (e) => Object.getPrototypeOf(e) === Nr;
function jl(e, t, n, o = !1) {
  const i = {}, r = wr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && Vr(t || {}, i, e), n ? e.props = o ? i : As(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Fl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Hl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = F(i), [a] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && Fl(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        let m = p[f];
        if (Kn(e.emitsOptions, m))
          continue;
        const E = t[m];
        if (a)
          if (W(r, m))
            E !== r[m] && (r[m] = E, h = !0);
          else {
            const T = Ie(m);
            i[T] = bo(
              a,
              l,
              T,
              E,
              e,
              !1
            );
          }
        else
          E !== r[m] && (r[m] = E, h = !0);
      }
    }
  } else {
    xr(e, t, i, r) && (h = !0);
    let p;
    for (const f in l)
      (!t || // for camelCase
      !W(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = dt(f)) === f || !W(t, p))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[f] = bo(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (r !== l)
      for (const f in r)
        (!t || !W(t, f)) && (delete r[f], h = !0);
  }
  h && We(e.attrs, "set", ""), d.NODE_ENV !== "production" && Vr(t || {}, i, e);
}
function xr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let a in t) {
      if (qt(a))
        continue;
      const h = t[a];
      let p;
      i && W(i, p = Ie(a)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Kn(e.emitsOptions, a) || (!(a in o) || h !== o[a]) && (o[a] = h, s = !0);
    }
  if (r) {
    const a = F(n), h = l || z;
    for (let p = 0; p < r.length; p++) {
      const f = r[p];
      n[f] = bo(
        i,
        a,
        f,
        h[f],
        e,
        !W(h, f)
      );
    }
  }
  return s;
}
function bo(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = W(s, "default");
    if (l && o === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && R(a)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = an(i);
          o = h[n] = a.call(
            null,
            t
          ), p();
        }
      } else
        o = a;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === dt(n)) && (o = !0));
  }
  return o;
}
const Ll = /* @__PURE__ */ new WeakMap();
function Dr(e, t, n = !1) {
  const o = n ? Ll : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let a = !1;
  if (!R(e)) {
    const p = (f) => {
      a = !0;
      const [m, E] = Dr(f, t, !0);
      le(s, m), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !a)
    return J(e) && o.set(e, Pt), Pt;
  if (A(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !ne(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const f = Ie(r[p]);
      ii(f) && (s[f] = z);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !J(r) && O("invalid props options", r);
    for (const p in r) {
      const f = Ie(p);
      if (ii(f)) {
        const m = r[p], E = s[f] = A(m) || R(m) ? { type: m } : le({}, m), T = E.type;
        let M = !1, re = !0;
        if (A(T))
          for (let L = 0; L < T.length; ++L) {
            const Z = T[L], B = R(Z) && Z.name;
            if (B === "Boolean") {
              M = !0;
              break;
            } else B === "String" && (re = !1);
          }
        else
          M = R(T) && T.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = M, E[
          1
          /* shouldCastTrue */
        ] = re, (M || W(E, "default")) && l.push(f);
      }
    }
  }
  const h = [s, l];
  return J(e) && o.set(e, h), h;
}
function ii(e) {
  return e[0] !== "$" && !qt(e) ? !0 : (d.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ul(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Vr(e, t, n) {
  const o = F(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => Ie(s));
  for (const s in i) {
    let l = i[s];
    l != null && Bl(
      s,
      o[s],
      l,
      d.NODE_ENV !== "production" ? ze(o) : o,
      !r.includes(s)
    );
  }
}
function Bl(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: a } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !a) {
      let h = !1;
      const p = A(r) ? r : [r], f = [];
      for (let m = 0; m < p.length && !h; m++) {
        const { valid: E, expectedType: T } = Kl(t, p[m]);
        f.push(T || ""), h = E;
      }
      if (!h) {
        O(zl(e, t, f));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Wl = /* @__PURE__ */ ot(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Kl(e, t) {
  let n;
  const o = Ul(t);
  if (o === "null")
    n = e === null;
  else if (Wl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = J(e) : o === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function zl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Fn).join(" | ")}`;
  const i = n[0], r = Vo(t), s = ri(t, i), l = ri(t, r);
  return n.length === 1 && si(i) && !ql(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, si(r) && (o += `with value ${l}.`), o;
}
function ri(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function si(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ql(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Cr = (e) => e[0] === "_" || e === "$stable", Lo = (e) => A(e) ? e.map(Ae) : [Ae(e)], Gl = (e, t, n) => {
  if (t._n)
    return t;
  const o = al((...i) => (d.NODE_ENV !== "production" && pe && (!n || n.root === pe.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Lo(t(...i))), n);
  return o._c = !1, o;
}, Sr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Cr(i)) continue;
    const r = e[i];
    if (R(r))
      t[i] = Gl(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Lo(r);
      t[i] = () => s;
    }
  }
}, Tr = (e, t) => {
  d.NODE_ENV !== "production" && !jo(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Lo(t);
  e.slots.default = () => n;
}, yo = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Jl = (e, t, n) => {
  const o = e.slots = wr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (yo(o, t, n), n && xn(o, "_", i, !0)) : Sr(t, o);
  } else t && Tr(e, t);
}, Yl = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = z;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && qe ? (yo(i, t, n), We(e, "set", "$slots")) : n && l === 1 ? r = !1 : yo(i, t, n) : (r = !t.$stable, Sr(t, i)), s = t;
  } else t && (Tr(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Cr(l) && s[l] == null && delete i[l];
};
let Lt, ut;
function Vt(e, t) {
  e.appContext.config.performance && Mn() && ut.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && sl(e, t, Mn() ? ut.now() : Date.now());
}
function Ct(e, t) {
  if (e.appContext.config.performance && Mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ut.mark(o), ut.measure(
      `<${Gn(e, e.type)}> ${t}`,
      n,
      o
    ), ut.clearMarks(n), ut.clearMarks(o);
  }
  d.NODE_ENV !== "production" && ll(e, t, Mn() ? ut.now() : Date.now());
}
function Mn() {
  return Lt !== void 0 || (typeof window < "u" && window.performance ? (Lt = !0, ut = window.performance) : Lt = !1), Lt;
}
function Xl() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ce = fc;
function Zl(e) {
  return Ql(e);
}
function Ql(e, t) {
  Xl();
  const n = rn();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && ur(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: a,
    setText: h,
    setElementText: p,
    parentNode: f,
    nextSibling: m,
    setScopeId: E = ae,
    insertStaticContent: T
  } = e, M = (c, u, g, b = null, _ = null, v = null, x = void 0, w = null, N = d.NODE_ENV !== "production" && qe ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ut(c, u) && (b = fn(c), ie(c, _, v, !0), c = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: y, ref: I, shapeFlag: D } = u;
    switch (y) {
      case cn:
        re(c, u, g, b);
        break;
      case $e:
        L(c, u, g, b);
        break;
      case En:
        c == null ? Z(u, g, b, x) : d.NODE_ENV !== "production" && B(c, u, g, x);
        break;
      case Ne:
        xt(
          c,
          u,
          g,
          b,
          _,
          v,
          x,
          w,
          N
        );
        break;
      default:
        D & 1 ? oe(
          c,
          u,
          g,
          b,
          _,
          v,
          x,
          w,
          N
        ) : D & 6 ? un(
          c,
          u,
          g,
          b,
          _,
          v,
          x,
          w,
          N
        ) : D & 64 || D & 128 ? y.process(
          c,
          u,
          g,
          b,
          _,
          v,
          x,
          w,
          N,
          jt
        ) : d.NODE_ENV !== "production" && O("Invalid VNode type:", y, `(${typeof y})`);
    }
    I != null && _ && $n(I, c && c.ref, v, u || c, !u);
  }, re = (c, u, g, b) => {
    if (c == null)
      o(
        u.el = l(u.children),
        g,
        b
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && h(_, u.children);
    }
  }, L = (c, u, g, b) => {
    c == null ? o(
      u.el = a(u.children || ""),
      g,
      b
    ) : u.el = c.el;
  }, Z = (c, u, g, b) => {
    [c.el, c.anchor] = T(
      c.children,
      u,
      g,
      b,
      c.el,
      c.anchor
    );
  }, B = (c, u, g, b) => {
    if (u.children !== c.children) {
      const _ = m(c.anchor);
      $(c), [u.el, u.anchor] = T(
        u.children,
        g,
        _,
        b
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, _e = ({ el: c, anchor: u }, g, b) => {
    let _;
    for (; c && c !== u; )
      _ = m(c), o(c, g, b), c = _;
    o(u, g, b);
  }, $ = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = m(c), i(c), c = g;
    i(u);
  }, oe = (c, u, g, b, _, v, x, w, N) => {
    u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), c == null ? ve(
      u,
      g,
      b,
      _,
      v,
      x,
      w,
      N
    ) : Me(
      c,
      u,
      _,
      v,
      x,
      w,
      N
    );
  }, ve = (c, u, g, b, _, v, x, w) => {
    let N, y;
    const { props: I, shapeFlag: D, transition: P, dirs: j } = c;
    if (N = c.el = s(
      c.type,
      v,
      I && I.is,
      I
    ), D & 8 ? p(N, c.children) : D & 16 && he(
      c.children,
      N,
      null,
      b,
      _,
      oo(c, v),
      x,
      w
    ), j && gt(c, null, b, "created"), ue(N, c, c.scopeId, x, b), I) {
      for (const Y in I)
        Y !== "value" && !qt(Y) && r(N, Y, null, I[Y], v, b);
      "value" in I && r(N, "value", null, I.value, v), (y = I.onVnodeBeforeMount) && Ue(y, b, c);
    }
    d.NODE_ENV !== "production" && (xn(N, "__vnode", c, !0), xn(N, "__vueParentComponent", b, !0)), j && gt(c, null, b, "beforeMount");
    const U = ec(_, P);
    U && P.beforeEnter(N), o(N, u, g), ((y = I && I.onVnodeMounted) || U || j) && Ce(() => {
      y && Ue(y, b, c), U && P.enter(N), j && gt(c, null, b, "mounted");
    }, _);
  }, ue = (c, u, g, b, _) => {
    if (g && E(c, g), b)
      for (let v = 0; v < b.length; v++)
        E(c, b[v]);
    if (_) {
      let v = _.subTree;
      if (d.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Uo(v.children) || v), u === v || Rr(v.type) && (v.ssContent === u || v.ssFallback === u)) {
        const x = _.vnode;
        ue(
          c,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, he = (c, u, g, b, _, v, x, w, N = 0) => {
    for (let y = N; y < c.length; y++) {
      const I = c[y] = w ? at(c[y]) : Ae(c[y]);
      M(
        null,
        I,
        u,
        g,
        b,
        _,
        v,
        x,
        w
      );
    }
  }, Me = (c, u, g, b, _, v, x) => {
    const w = u.el = c.el;
    d.NODE_ENV !== "production" && (w.__vnode = u);
    let { patchFlag: N, dynamicChildren: y, dirs: I } = u;
    N |= c.patchFlag & 16;
    const D = c.props || z, P = u.props || z;
    let j;
    if (g && mt(g, !1), (j = P.onVnodeBeforeUpdate) && Ue(j, g, u, c), I && gt(u, c, g, "beforeUpdate"), g && mt(g, !0), d.NODE_ENV !== "production" && qe && (N = 0, x = !1, y = null), (D.innerHTML && P.innerHTML == null || D.textContent && P.textContent == null) && p(w, ""), y ? (ke(
      c.dynamicChildren,
      y,
      w,
      g,
      b,
      oo(u, _),
      v
    ), d.NODE_ENV !== "production" && yn(c, u)) : x || V(
      c,
      u,
      w,
      null,
      g,
      b,
      oo(u, _),
      v,
      !1
    ), N > 0) {
      if (N & 16)
        De(w, D, P, g, _);
      else if (N & 2 && D.class !== P.class && r(w, "class", null, P.class, _), N & 4 && r(w, "style", D.style, P.style, _), N & 8) {
        const U = u.dynamicProps;
        for (let Y = 0; Y < U.length; Y++) {
          const q = U[Y], Ve = D[q], xe = P[q];
          (xe !== Ve || q === "value") && r(w, q, Ve, xe, _, g);
        }
      }
      N & 1 && c.children !== u.children && p(w, u.children);
    } else !x && y == null && De(w, D, P, g, _);
    ((j = P.onVnodeUpdated) || I) && Ce(() => {
      j && Ue(j, g, u, c), I && gt(u, c, g, "updated");
    }, b);
  }, ke = (c, u, g, b, _, v, x) => {
    for (let w = 0; w < u.length; w++) {
      const N = c[w], y = u[w], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ut(N, y) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 70) ? f(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      M(
        N,
        y,
        I,
        null,
        b,
        _,
        v,
        x,
        !0
      );
    }
  }, De = (c, u, g, b, _) => {
    if (u !== g) {
      if (u !== z)
        for (const v in u)
          !qt(v) && !(v in g) && r(
            c,
            v,
            u[v],
            null,
            _,
            b
          );
      for (const v in g) {
        if (qt(v)) continue;
        const x = g[v], w = u[v];
        x !== w && v !== "value" && r(c, v, w, x, _, b);
      }
      "value" in g && r(c, "value", u.value, g.value, _);
    }
  }, xt = (c, u, g, b, _, v, x, w, N) => {
    const y = u.el = c ? c.el : l(""), I = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: P, slotScopeIds: j } = u;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (qe || D & 2048) && (D = 0, N = !1, P = null), j && (w = w ? w.concat(j) : j), c == null ? (o(y, g, b), o(I, g, b), he(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      I,
      _,
      v,
      x,
      w,
      N
    )) : D > 0 && D & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (ke(
      c.dynamicChildren,
      P,
      g,
      _,
      v,
      x,
      w
    ), d.NODE_ENV !== "production" ? yn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && yn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : V(
      c,
      u,
      g,
      I,
      _,
      v,
      x,
      w,
      N
    );
  }, un = (c, u, g, b, _, v, x, w, N) => {
    u.slotScopeIds = w, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      g,
      b,
      x,
      N
    ) : je(
      u,
      g,
      b,
      _,
      v,
      x,
      N
    ) : fe(c, u, N);
  }, je = (c, u, g, b, _, v, x) => {
    const w = c.component = bc(
      c,
      b,
      _
    );
    if (d.NODE_ENV !== "production" && w.type.__hmrId && Xs(w), d.NODE_ENV !== "production" && (mn(c), Vt(w, "mount")), jo(c) && (w.ctx.renderer = jt), d.NODE_ENV !== "production" && Vt(w, "init"), Nc(w, !1, x), d.NODE_ENV !== "production" && Ct(w, "init"), w.asyncDep) {
      if (d.NODE_ENV !== "production" && qe && (c.el = null), _ && _.registerDep(w, H, x), !c.el) {
        const N = w.subTree = et($e);
        L(null, N, u, g);
      }
    } else
      H(
        w,
        c,
        u,
        g,
        _,
        v,
        x
      );
    d.NODE_ENV !== "production" && (_n(), Ct(w, "mount"));
  }, fe = (c, u, g) => {
    const b = u.component = c.component;
    if (ac(c, u, g))
      if (b.asyncDep && !b.asyncResolved) {
        d.NODE_ENV !== "production" && mn(u), C(b, u, g), d.NODE_ENV !== "production" && _n();
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, H = (c, u, g, b, _, v, x) => {
    const w = () => {
      if (c.isMounted) {
        let { next: D, bu: P, u: j, parent: U, vnode: Y } = c;
        {
          const He = $r(c);
          if (He) {
            D && (D.el = Y.el, C(c, D, x)), He.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let q = D, Ve;
        d.NODE_ENV !== "production" && mn(D || c.vnode), mt(c, !1), D ? (D.el = Y.el, C(c, D, x)) : D = Y, P && St(P), (Ve = D.props && D.props.onVnodeBeforeUpdate) && Ue(Ve, U, D, Y), mt(c, !0), d.NODE_ENV !== "production" && Vt(c, "render");
        const xe = ci(c);
        d.NODE_ENV !== "production" && Ct(c, "render");
        const Fe = c.subTree;
        c.subTree = xe, d.NODE_ENV !== "production" && Vt(c, "patch"), M(
          Fe,
          xe,
          // parent may have changed if it's in a teleport
          f(Fe.el),
          // anchor may have changed if it's in a fragment
          fn(Fe),
          c,
          _,
          v
        ), d.NODE_ENV !== "production" && Ct(c, "patch"), D.el = xe.el, q === null && uc(c, xe.el), j && Ce(j, _), (Ve = D.props && D.props.onVnodeUpdated) && Ce(
          () => Ue(Ve, U, D, Y),
          _
        ), d.NODE_ENV !== "production" && fr(c), d.NODE_ENV !== "production" && _n();
      } else {
        let D;
        const { el: P, props: j } = u, { bm: U, m: Y, parent: q, root: Ve, type: xe } = c, Fe = Yt(u);
        mt(c, !1), U && St(U), !Fe && (D = j && j.onVnodeBeforeMount) && Ue(D, q, u), mt(c, !0);
        {
          Ve.ce && Ve.ce._injectChildStyle(xe), d.NODE_ENV !== "production" && Vt(c, "render");
          const He = c.subTree = ci(c);
          d.NODE_ENV !== "production" && Ct(c, "render"), d.NODE_ENV !== "production" && Vt(c, "patch"), M(
            null,
            He,
            g,
            b,
            c,
            _,
            v
          ), d.NODE_ENV !== "production" && Ct(c, "patch"), u.el = He.el;
        }
        if (Y && Ce(Y, _), !Fe && (D = j && j.onVnodeMounted)) {
          const He = u;
          Ce(
            () => Ue(D, q, He),
            _
          );
        }
        (u.shapeFlag & 256 || q && Yt(q.vnode) && q.vnode.shapeFlag & 256) && c.a && Ce(c.a, _), c.isMounted = !0, d.NODE_ENV !== "production" && ol(c), u = g = b = null;
      }
    };
    c.scope.on();
    const N = c.effect = new ji(w);
    c.scope.off();
    const y = c.update = N.run.bind(N), I = c.job = N.runIfDirty.bind(N);
    I.i = c, I.id = c.uid, N.scheduler = () => Bn(I), mt(c, !0), d.NODE_ENV !== "production" && (N.onTrack = c.rtc ? (D) => St(c.rtc, D) : void 0, N.onTrigger = c.rtg ? (D) => St(c.rtg, D) : void 0), y();
  }, C = (c, u, g) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, Hl(c, u.props, b, g), Yl(c, u.children, g), it(), Xo(c), rt();
  }, V = (c, u, g, b, _, v, x, w, N = !1) => {
    const y = c && c.children, I = c ? c.shapeFlag : 0, D = u.children, { patchFlag: P, shapeFlag: j } = u;
    if (P > 0) {
      if (P & 128) {
        G(
          y,
          D,
          g,
          b,
          _,
          v,
          x,
          w,
          N
        );
        return;
      } else if (P & 256) {
        S(
          y,
          D,
          g,
          b,
          _,
          v,
          x,
          w,
          N
        );
        return;
      }
    }
    j & 8 ? (I & 16 && kt(y, _, v), D !== y && p(g, D)) : I & 16 ? j & 16 ? G(
      y,
      D,
      g,
      b,
      _,
      v,
      x,
      w,
      N
    ) : kt(y, _, v, !0) : (I & 8 && p(g, ""), j & 16 && he(
      D,
      g,
      b,
      _,
      v,
      x,
      w,
      N
    ));
  }, S = (c, u, g, b, _, v, x, w, N) => {
    c = c || Pt, u = u || Pt;
    const y = c.length, I = u.length, D = Math.min(y, I);
    let P;
    for (P = 0; P < D; P++) {
      const j = u[P] = N ? at(u[P]) : Ae(u[P]);
      M(
        c[P],
        j,
        g,
        null,
        _,
        v,
        x,
        w,
        N
      );
    }
    y > I ? kt(
      c,
      _,
      v,
      !0,
      !1,
      D
    ) : he(
      u,
      g,
      b,
      _,
      v,
      x,
      w,
      N,
      D
    );
  }, G = (c, u, g, b, _, v, x, w, N) => {
    let y = 0;
    const I = u.length;
    let D = c.length - 1, P = I - 1;
    for (; y <= D && y <= P; ) {
      const j = c[y], U = u[y] = N ? at(u[y]) : Ae(u[y]);
      if (Ut(j, U))
        M(
          j,
          U,
          g,
          null,
          _,
          v,
          x,
          w,
          N
        );
      else
        break;
      y++;
    }
    for (; y <= D && y <= P; ) {
      const j = c[D], U = u[P] = N ? at(u[P]) : Ae(u[P]);
      if (Ut(j, U))
        M(
          j,
          U,
          g,
          null,
          _,
          v,
          x,
          w,
          N
        );
      else
        break;
      D--, P--;
    }
    if (y > D) {
      if (y <= P) {
        const j = P + 1, U = j < I ? u[j].el : b;
        for (; y <= P; )
          M(
            null,
            u[y] = N ? at(u[y]) : Ae(u[y]),
            g,
            U,
            _,
            v,
            x,
            w,
            N
          ), y++;
      }
    } else if (y > P)
      for (; y <= D; )
        ie(c[y], _, v, !0), y++;
    else {
      const j = y, U = y, Y = /* @__PURE__ */ new Map();
      for (y = U; y <= P; y++) {
        const be = u[y] = N ? at(u[y]) : Ae(u[y]);
        be.key != null && (d.NODE_ENV !== "production" && Y.has(be.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(be.key),
          "Make sure keys are unique."
        ), Y.set(be.key, y));
      }
      let q, Ve = 0;
      const xe = P - U + 1;
      let Fe = !1, He = 0;
      const Ft = new Array(xe);
      for (y = 0; y < xe; y++) Ft[y] = 0;
      for (y = j; y <= D; y++) {
        const be = c[y];
        if (Ve >= xe) {
          ie(be, _, v, !0);
          continue;
        }
        let Le;
        if (be.key != null)
          Le = Y.get(be.key);
        else
          for (q = U; q <= P; q++)
            if (Ft[q - U] === 0 && Ut(be, u[q])) {
              Le = q;
              break;
            }
        Le === void 0 ? ie(be, _, v, !0) : (Ft[Le - U] = y + 1, Le >= He ? He = Le : Fe = !0, M(
          be,
          u[Le],
          g,
          null,
          _,
          v,
          x,
          w,
          N
        ), Ve++);
      }
      const Ko = Fe ? tc(Ft) : Pt;
      for (q = Ko.length - 1, y = xe - 1; y >= 0; y--) {
        const be = U + y, Le = u[be], zo = be + 1 < I ? u[be + 1].el : b;
        Ft[y] === 0 ? M(
          null,
          Le,
          g,
          zo,
          _,
          v,
          x,
          w,
          N
        ) : Fe && (q < 0 || y !== Ko[q] ? te(Le, g, zo, 2) : q--);
      }
    }
  }, te = (c, u, g, b, _ = null) => {
    const { el: v, type: x, transition: w, children: N, shapeFlag: y } = c;
    if (y & 6) {
      te(c.component.subTree, u, g, b);
      return;
    }
    if (y & 128) {
      c.suspense.move(u, g, b);
      return;
    }
    if (y & 64) {
      x.move(c, u, g, jt);
      return;
    }
    if (x === Ne) {
      o(v, u, g);
      for (let D = 0; D < N.length; D++)
        te(N[D], u, g, b);
      o(c.anchor, u, g);
      return;
    }
    if (x === En) {
      _e(c, u, g);
      return;
    }
    if (b !== 2 && y & 1 && w)
      if (b === 0)
        w.beforeEnter(v), o(v, u, g), Ce(() => w.enter(v), _);
      else {
        const { leave: D, delayLeave: P, afterLeave: j } = w, U = () => o(v, u, g), Y = () => {
          D(v, () => {
            U(), j && j();
          });
        };
        P ? P(v, U, Y) : Y();
      }
    else
      o(v, u, g);
  }, ie = (c, u, g, b = !1, _ = !1) => {
    const {
      type: v,
      props: x,
      ref: w,
      children: N,
      dynamicChildren: y,
      shapeFlag: I,
      patchFlag: D,
      dirs: P,
      cacheIndex: j
    } = c;
    if (D === -2 && (_ = !1), w != null && $n(w, null, g, c, !0), j != null && (u.renderCache[j] = void 0), I & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const U = I & 1 && P, Y = !Yt(c);
    let q;
    if (Y && (q = x && x.onVnodeBeforeUnmount) && Ue(q, u, c), I & 6)
      Yr(c.component, g, b);
    else {
      if (I & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      U && gt(c, null, u, "beforeUnmount"), I & 64 ? c.type.remove(
        c,
        u,
        g,
        jt,
        b
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Ne || D > 0 && D & 64) ? kt(
        y,
        u,
        g,
        !1,
        !0
      ) : (v === Ne && D & 384 || !_ && I & 16) && kt(N, u, g), b && Rt(c);
    }
    (Y && (q = x && x.onVnodeUnmounted) || U) && Ce(() => {
      q && Ue(q, u, c), U && gt(c, null, u, "unmounted");
    }, g);
  }, Rt = (c) => {
    const { type: u, el: g, anchor: b, transition: _ } = c;
    if (u === Ne) {
      d.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((x) => {
        x.type === $e ? i(x.el) : Rt(x);
      }) : Jr(g, b);
      return;
    }
    if (u === En) {
      $(c);
      return;
    }
    const v = () => {
      i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: w } = _, N = () => x(g, v);
      w ? w(c.el, v, N) : N();
    } else
      v();
  }, Jr = (c, u) => {
    let g;
    for (; c !== u; )
      g = m(c), i(c), c = g;
    i(u);
  }, Yr = (c, u, g) => {
    d.NODE_ENV !== "production" && c.type.__hmrId && Zs(c);
    const { bum: b, scope: _, job: v, subTree: x, um: w, m: N, a: y } = c;
    li(N), li(y), b && St(b), _.stop(), v && (v.flags |= 8, ie(x, c, u, g)), w && Ce(w, u), Ce(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), d.NODE_ENV !== "production" && rl(c);
  }, kt = (c, u, g, b = !1, _ = !1, v = 0) => {
    for (let x = v; x < c.length; x++)
      ie(c[x], u, g, b, _);
  }, fn = (c) => {
    if (c.shapeFlag & 6)
      return fn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = m(c.anchor || c.el), g = u && u[ul];
    return g ? m(g) : u;
  };
  let Jn = !1;
  const Wo = (c, u, g) => {
    c == null ? u._vnode && ie(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, Jn || (Jn = !0, Xo(), lr(), Jn = !1);
  }, jt = {
    p: M,
    um: ie,
    m: te,
    r: Rt,
    mt: je,
    mc: he,
    pc: V,
    pbc: ke,
    n: fn,
    o: e
  };
  return {
    render: Wo,
    hydrate: void 0,
    createApp: Rl(Wo)
  };
}
function oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ec(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (A(o) && A(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = at(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && yn(s, l)), l.type === cn && (l.el = s.el), d.NODE_ENV !== "production" && l.type === $e && !l.el && (l.el = s.el);
    }
}
function tc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < h ? r = l + 1 : s = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function $r(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $r(t);
}
function li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const nc = Symbol.for("v-scx"), oc = () => {
  {
    const e = bn(nc);
    return e || d.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function io(e, t, n) {
  return d.NODE_ENV !== "production" && !R(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Pr(e, t, n);
}
function Pr(e, t, n = z) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = le({}, n);
  d.NODE_ENV !== "production" && (l.onWarn = O);
  const a = t && o || !t && r !== "post";
  let h;
  if (nn) {
    if (r === "sync") {
      const E = oc();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!a) {
      const E = () => {
      };
      return E.stop = ae, E.resume = ae, E.pause = ae, E;
    }
  }
  const p = pe;
  l.call = (E, T, M) => Je(E, p, T, M);
  let f = !1;
  r === "post" ? l.scheduler = (E) => {
    Ce(E, p && p.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (E, T) => {
    T ? E() : Bn(E);
  }), l.augmentJob = (E) => {
    t && (E.flags |= 4), f && (E.flags |= 2, p && (E.id = p.uid, E.i = p));
  };
  const m = Bs(e, t, l);
  return nn && (h ? h.push(m) : a && m()), m;
}
function ic(e, t, n) {
  const o = this.proxy, i = ne(e) ? e.includes(".") ? Mr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const s = an(this), l = Pr(i, r.bind(o), n);
  return s(), l;
}
function Mr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${dt(t)}Modifiers`];
function sc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || z;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [f]
    } = e;
    if (p)
      if (!(t in p))
        (!f || !(_t(Ie(t)) in f)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${_t(Ie(t))}" prop.`
        );
      else {
        const m = p[t];
        R(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && rc(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => ne(p) ? p.trim() : p)), s.number && (i = n.map(co))), d.NODE_ENV !== "production" && cl(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[_t(p)] && O(
      `Event "${p}" is emitted in component ${Gn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${dt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = _t(t)] || // also try camelCase event handler (#2249)
  o[l = _t(Ie(t))];
  !a && r && (a = o[l = _t(dt(t))]), a && Je(
    a,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Je(
      h,
      e,
      6,
      i
    );
  }
}
function Ar(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!R(e)) {
    const a = (h) => {
      const p = Ar(h, t, !0);
      p && (l = !0, le(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (J(e) && o.set(e, null), null) : (A(r) ? r.forEach((a) => s[a] = null) : le(s, r), J(e) && o.set(e, s), s);
}
function Kn(e, t) {
  return !e || !on(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, dt(t)) || W(e, t));
}
let Eo = !1;
function An() {
  Eo = !0;
}
function ci(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: a,
    render: h,
    renderCache: p,
    props: f,
    data: m,
    setupState: E,
    ctx: T,
    inheritAttrs: M
  } = e, re = Tn(e);
  let L, Z;
  d.NODE_ENV !== "production" && (Eo = !1);
  try {
    if (n.shapeFlag & 4) {
      const $ = i || o, oe = d.NODE_ENV !== "production" && E.__isScriptSetup ? new Proxy($, {
        get(ve, ue, he) {
          return O(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, ue, he);
        }
      }) : $;
      L = Ae(
        h.call(
          oe,
          $,
          p,
          d.NODE_ENV !== "production" ? ze(f) : f,
          E,
          m,
          T
        )
      ), Z = l;
    } else {
      const $ = t;
      d.NODE_ENV !== "production" && l === f && An(), L = Ae(
        $.length > 1 ? $(
          d.NODE_ENV !== "production" ? ze(f) : f,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return An(), ze(l);
            },
            slots: s,
            emit: a
          } : { attrs: l, slots: s, emit: a }
        ) : $(
          d.NODE_ENV !== "production" ? ze(f) : f,
          null
        )
      ), Z = t.props ? l : lc(l);
    }
  } catch ($) {
    Xt.length = 0, sn($, e, 1), L = et($e);
  }
  let B = L, _e;
  if (d.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([B, _e] = Ir(L)), Z && M !== !1) {
    const $ = Object.keys(Z), { shapeFlag: oe } = B;
    if ($.length) {
      if (oe & 7)
        r && $.some(On) && (Z = cc(
          Z,
          r
        )), B = pt(B, Z, !1, !0);
      else if (d.NODE_ENV !== "production" && !Eo && B.type !== $e) {
        const ve = Object.keys(l), ue = [], he = [];
        for (let Me = 0, ke = ve.length; Me < ke; Me++) {
          const De = ve[Me];
          on(De) ? On(De) || ue.push(De[2].toLowerCase() + De.slice(3)) : he.push(De);
        }
        he.length && O(
          `Extraneous non-props attributes (${he.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ue.length && O(
          `Extraneous non-emits event listeners (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !ai(B) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = pt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !ai(B) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ko(B, n.transition)), d.NODE_ENV !== "production" && _e ? _e(B) : L = B, Tn(re), L;
}
const Ir = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Uo(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ir(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ae(o), s];
};
function Uo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (zn(i)) {
      if (i.type !== $e || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Uo(n.children);
      }
    } else
      return;
  }
  return n;
}
const lc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || on(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, cc = (e, t) => {
  const n = {};
  for (const o in e)
    (!On(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ai = (e) => e.shapeFlag & 7 || e.type === $e;
function ac(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: a } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || l) && qe || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? ui(o, s, h) : !!s;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        const m = p[f];
        if (s[m] !== o[m] && !Kn(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? ui(o, s, h) : !0 : !!s;
  return !1;
}
function ui(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Kn(n, r))
      return !0;
  }
  return !1;
}
function uc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Rr = (e) => e.__isSuspense;
function fc(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : sr(e);
}
const Ne = Symbol.for("v-fgt"), cn = Symbol.for("v-txt"), $e = Symbol.for("v-cmt"), En = Symbol.for("v-stc"), Xt = [];
let Te = null;
function Q(e = !1) {
  Xt.push(Te = e ? null : []);
}
function dc() {
  Xt.pop(), Te = Xt[Xt.length - 1] || null;
}
let tn = 1;
function fi(e, t = !1) {
  tn += e, e < 0 && Te && t && (Te.hasOnce = !0);
}
function kr(e) {
  return e.dynamicChildren = tn > 0 ? Te || Pt : null, dc(), tn > 0 && Te && Te.push(e), e;
}
function ee(e, t, n, o, i, r) {
  return kr(
    k(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function pc(e, t, n, o, i) {
  return kr(
    et(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ut(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = vn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const hc = (...e) => Fr(
  ...e
), jr = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || se(e) || R(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, o = 0, i = null, r = e === Ne ? 0 : 1, s = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jr(t),
    ref: t && Nn(t),
    scopeId: pr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  };
  return l ? (Bo(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ne(n) ? 8 : 16), d.NODE_ENV !== "production" && a.key !== a.key && O("VNode created with invalid key (NaN). VNode type:", a.type), tn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Te.push(a), a;
}
const et = d.NODE_ENV !== "production" ? hc : Fr;
function Fr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === xl) && (d.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = $e), zn(e)) {
    const l = pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bo(l, n), tn > 0 && !r && Te && (l.shapeFlag & 6 ? Te[Te.indexOf(e)] = l : Te.push(l)), l.patchFlag = -2, l;
  }
  if (Kr(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: l, style: a } = t;
    l && !ne(l) && (t.class = ge(l)), J(a) && (Dn(a) && !A(a) && (a = le({}, a)), t.style = Pe(a));
  }
  const s = ne(e) ? 1 : Rr(e) ? 128 : fl(e) ? 64 : J(e) ? 4 : R(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && Dn(e) && (e = F(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), k(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function gc(e) {
  return e ? Dn(e) || Or(e) ? le({}, e) : e : null;
}
function pt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: a } = e, h = t ? mc(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && jr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? A(r) ? r.concat(Nn(t)) : [r, Nn(t)] : Nn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && A(l) ? l.map(Hr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ne ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && ko(
    p,
    a.clone(p)
  ), p;
}
function Hr(e) {
  const t = pt(e);
  return A(e.children) && (t.children = e.children.map(Hr)), t;
}
function Lr(e = " ", t = 0) {
  return et(cn, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (Q(), pc($e, null, e)) : et($e, null, e);
}
function Ae(e) {
  return e == null || typeof e == "boolean" ? et($e) : A(e) ? et(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : zn(e) ? at(e) : et(cn, null, String(e));
}
function at(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pt(e);
}
function Bo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Or(t) ? t._ctx = we : i === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Lr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = ge([t.class, o.class]));
      else if (i === "style")
        t.style = Pe([t.style, o.style]);
      else if (on(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(A(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Ue(e, t, n, o = null) {
  Je(e, t, 7, [
    n,
    o
  ]);
}
const _c = Er();
let vc = 0;
function bc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || _c, r = {
    uid: vc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new hs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Dr(o, i),
    emitsOptions: Ar(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: z,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: z,
    data: z,
    props: z,
    attrs: z,
    slots: z,
    refs: z,
    setupState: z,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? r.ctx = Dl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = sc.bind(null, r), e.ce && e.ce(r), r;
}
let pe = null;
const yc = () => pe || we;
let In, No;
{
  const e = rn(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  In = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), No = t(
    "__VUE_SSR_SETTERS__",
    (n) => nn = n
  );
}
const an = (e) => {
  const t = pe;
  return In(e), e.scope.on(), () => {
    e.scope.off(), In(t);
  };
}, di = () => {
  pe && pe.scope.off(), In(null);
}, Ec = /* @__PURE__ */ ot("slot,component");
function wo(e, { isNativeTag: t }) {
  (Ec(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function Nc(e, t = !1, n = !1) {
  t && No(t);
  const { props: o, children: i } = e.vnode, r = Ur(e);
  jl(e, o, r, t), Jl(e, i, n);
  const s = r ? wc(e, t) : void 0;
  return t && No(!1), s;
}
function wc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && wo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        wo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        hr(r[s]);
    }
    o.compilerOptions && xc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vr), d.NODE_ENV !== "production" && Vl(e);
  const { setup: i } = o;
  if (i) {
    it();
    const r = e.setupContext = i.length > 1 ? Vc(e) : null, s = an(e), l = It(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? ze(e.props) : e.props,
        r
      ]
    ), a = Do(l);
    if (rt(), s(), (a || e.sp) && !Yt(e) && gr(e), a) {
      if (l.then(di, di), t)
        return l.then((h) => {
          pi(e, h, t);
        }).catch((h) => {
          sn(h, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      pi(e, l, t);
  } else
    Br(e, t);
}
function pi(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) ? (d.NODE_ENV !== "production" && zn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = tr(t), d.NODE_ENV !== "production" && Cl(e)) : d.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Br(e, n);
}
let Oc;
const xc = () => !Oc;
function Br(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ae);
  {
    const i = an(e);
    it();
    try {
      Tl(e);
    } finally {
      rt(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === ae && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const hi = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return An(), ce(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function Dc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ce(e, "get", "$slots"), t[n];
    }
  });
}
function Vc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (A(n) ? o = "array" : se(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, hi));
      },
      get slots() {
        return o || (o = Dc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, hi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function qn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tr(Is(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in wt)
        return wt[n](e);
    },
    has(t, n) {
      return n in t || n in wt;
    }
  })) : e.proxy;
}
const Cc = /(?:^|[-_])(\w)/g, Sc = (e) => e.replace(Cc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Wr(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gn(e, t, n = !1) {
  let o = Wr(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Sc(o) : n ? "App" : "Anonymous";
}
function Kr(e) {
  return R(e) && "__vccOpts" in e;
}
const Tc = (e, t) => {
  const n = Ls(e, t, nn);
  if (d.NODE_ENV !== "production") {
    const o = yc();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $c() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(f) {
      return J(f) ? f.__isVue ? ["div", e, "VueInstance"] : se(f) ? [
        "div",
        {},
        ["span", e, p(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : Et(f) ? [
        "div",
        {},
        ["span", e, Oe(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${nt(f) ? " (readonly)" : ""}`
      ] : nt(f) ? [
        "div",
        {},
        ["span", e, Oe(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const m = [];
    f.type.props && f.props && m.push(s("props", F(f.props))), f.setupState !== z && m.push(s("setup", f.setupState)), f.data !== z && m.push(s("data", F(f.data)));
    const E = a(f, "computed");
    E && m.push(s("computed", E));
    const T = a(f, "inject");
    return T && m.push(s("injected", T)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), m;
  }
  function s(f, m) {
    return m = le({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((E) => [
          "div",
          {},
          ["span", o, E + ": "],
          l(m[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, m = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : J(f) ? ["object", { object: m ? F(f) : f }] : ["span", n, String(f)];
  }
  function a(f, m) {
    const E = f.type;
    if (R(E))
      return;
    const T = {};
    for (const M in f.ctx)
      h(E, M, m) && (T[M] = f.ctx[M]);
    return T;
  }
  function h(f, m, E) {
    const T = f[E];
    if (A(T) && T.includes(m) || J(T) && m in T || f.extends && h(f.extends, m, E) || f.mixins && f.mixins.some((M) => h(M, m, E)))
      return !0;
  }
  function p(f) {
    return Oe(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const gi = "3.5.13", tt = d.NODE_ENV !== "production" ? O : ae;
var Ye = {};
let Oo;
const mi = typeof window < "u" && window.trustedTypes;
if (mi)
  try {
    Oo = /* @__PURE__ */ mi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ye.NODE_ENV !== "production" && tt(`Error creating trusted types policy: ${e}`);
  }
const zr = Oo ? (e) => Oo.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Ze = typeof document < "u" ? document : null, _i = Ze && /* @__PURE__ */ Ze.createElement("template"), Ac = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ze.createElementNS(Pc, e) : t === "mathml" ? Ze.createElementNS(Mc, e) : n ? Ze.createElement(e, { is: n }) : Ze.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      _i.innerHTML = zr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = _i.content;
      if (o === "svg" || o === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ic = Symbol("_vtc");
function Rc(e, t, n) {
  const o = e[Ic];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rn = Symbol("_vod"), qr = Symbol("_vsh"), Gr = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Bt(e, !0), o.enter(e)) : o.leave(e, () => {
      Bt(e, !1);
    }) : Bt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bt(e, t);
  }
};
Ye.NODE_ENV !== "production" && (Gr.name = "show");
function Bt(e, t) {
  e.style.display = t ? e[Rn] : "none", e[qr] = !t;
}
const kc = Symbol(Ye.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), jc = /(^|;)\s*display\s*:/;
function Fc(e, t, n) {
  const o = e.style, i = ne(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (ne(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && wn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && wn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), wn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[kc];
      s && (n += ";" + s), o.cssText = n, r = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Rn in e && (e[Rn] = r ? o.display : "", e[qr] && (o.display = "none"));
}
const Hc = /[^\\];\s*$/, vi = /\s*!important$/;
function wn(e, t, n) {
  if (A(n))
    n.forEach((o) => wn(e, t, o));
  else if (n == null && (n = ""), Ye.NODE_ENV !== "production" && Hc.test(n) && tt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Lc(e, t);
    vi.test(n) ? e.setProperty(
      dt(o),
      n.replace(vi, ""),
      "important"
    ) : e[o] = n;
  }
}
const bi = ["Webkit", "Moz", "ms"], ro = {};
function Lc(e, t) {
  const n = ro[t];
  if (n)
    return n;
  let o = Ie(t);
  if (o !== "filter" && o in e)
    return ro[t] = o;
  o = Fn(o);
  for (let i = 0; i < bi.length; i++) {
    const r = bi[i] + o;
    if (r in e)
      return ro[t] = r;
  }
  return t;
}
const yi = "http://www.w3.org/1999/xlink";
function Ei(e, t, n, o, i, r = ps(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yi, t.slice(6, t.length)) : e.setAttributeNS(yi, t, n) : n == null || r && !Ii(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ht(n) ? String(n) : n
  );
}
function Ni(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ii(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Ye.NODE_ENV !== "production" && !s && tt(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function $t(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Uc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const wi = Symbol("_vei");
function Bc(e, t, n, o, i = null) {
  const r = e[wi] || (e[wi] = {}), s = r[t];
  if (o && s)
    s.value = Ye.NODE_ENV !== "production" ? xi(o, t) : o;
  else {
    const [l, a] = Wc(t);
    if (o) {
      const h = r[t] = qc(
        Ye.NODE_ENV !== "production" ? xi(o, t) : o,
        i
      );
      $t(e, l, h, a);
    } else s && (Uc(e, l, s, a), r[t] = void 0);
  }
}
const Oi = /(?:Once|Passive|Capture)$/;
function Wc(e) {
  let t;
  if (Oi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Oi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t];
}
let so = 0;
const Kc = /* @__PURE__ */ Promise.resolve(), zc = () => so || (Kc.then(() => so = 0), so = Date.now());
function qc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Je(
      Gc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = zc(), n;
}
function xi(e, t) {
  return R(e) || A(e) ? e : (tt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ae);
}
function Gc(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jc = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Rc(e, o, s) : t === "style" ? Fc(e, n, o) : on(t) ? On(t) || Bc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yc(e, t, o, s)) ? (Ni(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ei(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ne(o)) ? Ni(e, Ie(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ei(e, t, o, s));
};
function Yc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Di(t) && ne(n) ? !1 : t in e;
}
const Vi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (n) => St(t, n) : t;
};
function Xc(e) {
  e.target.composing = !0;
}
function Ci(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const lo = Symbol("_assign"), Zc = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[lo] = Vi(i);
    const r = o || i.props && i.props.type === "number";
    $t(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = co(l)), e[lo](l);
    }), n && $t(e, "change", () => {
      e.value = e.value.trim();
    }), t || ($t(e, "compositionstart", Xc), $t(e, "compositionend", Ci), $t(e, "change", Ci));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: r } }, s) {
    if (e[lo] = Vi(s), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? co(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === a) || (e.value = a));
  }
}, Qc = /* @__PURE__ */ le({ patchProp: Jc }, Ac);
let Si;
function ea() {
  return Si || (Si = Zl(Qc));
}
const ta = (...e) => {
  const t = ea().createApp(...e);
  Ye.NODE_ENV !== "production" && (oa(t), ia(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = ra(o);
    if (!i) return;
    const r = t._component;
    !R(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, na(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function na(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oa(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => as(t) || us(t) || fs(t),
    writable: !1
  });
}
function ia(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        tt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return tt(o), n;
      },
      set() {
        tt(o);
      }
    });
  }
}
function ra(e) {
  if (ne(e)) {
    const t = document.querySelector(e);
    return Ye.NODE_ENV !== "production" && !t && tt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Ye.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && tt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var sa = {};
function la() {
  $c();
}
sa.NODE_ENV !== "production" && la();
const ca = { class: "chat-widget" }, aa = {
  key: 0,
  class: "fixed bottom-4 right-4 p-4"
}, ua = { class: "hidden md:inline font-medium" }, fa = { class: "flex items-center space-x-3" }, da = { class: "relative" }, pa = { class: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" }, ha = ["src"], ga = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, ma = { class: "font-semibold text-lg" }, _a = { class: "whitespace-pre-wrap text-[15px] font-normal leading-[1.5]" }, va = { class: "flex items-center gap-1.5" }, ba = ["src", "onTimeupdate", "onLoadedmetadata", "onEnded"], ya = ["onClick"], Ea = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Na = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, wa = ["onClick"], Oa = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, xa = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Da = {
  key: 0,
  class: "flex items-center space-x-2 p-4 bg-white rounded-2xl w-fit shadow-sm border border-gray-100 animate-fade-in"
}, Va = { class: "flex items-center space-x-2" }, Ca = { class: "flex-1 relative" }, Sa = ["placeholder", "disabled"], Ta = {
  key: 0,
  class: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5"
}, $a = { class: "processing-indicator-container" }, Pa = {
  key: 1,
  class: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5"
}, Ma = { class: "recording-wave-container" }, Aa = ["disabled"], Ia = ["disabled"], Ra = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, ka = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, ja = /* @__PURE__ */ dl({
  __name: "ChatWidgetCopy",
  props: {
    botId: {},
    apiKey: {}
  },
  setup(e) {
    const t = e, n = de(!1), o = de(""), i = de(null), r = de(!1), s = de(!1), l = de(window.innerWidth < 768), a = de(), h = de(""), p = de(), f = de([]), m = de(null), E = de(!1), T = de([]), M = de(window.speechSynthesis), re = de([]), L = de(null), Z = de([]), B = de(!1), _e = async () => {
      const C = {
        userAgent: navigator.userAgent,
        browserLanguage: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        isOnline: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
      return p.value = C, C;
    }, $ = async () => {
      var C, V;
      try {
        B.value = !0;
        const G = await (await fetch(`https://api.dev.kb.promptstudio.dev/chatbot/${t.botId}/widget-config`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })).json();
        a.value = {
          company: G.company,
          iconUrl: G.iconUrl,
          welcomeMessage: G.welcomeMessage,
          colors: {
            primary: (C = G.colors) == null ? void 0 : C.primary,
            secondary: (V = G.colors) == null ? void 0 : V.secondary
          }
        }, f.value = [{
          id: "1",
          content: a.value.welcomeMessage,
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1
        }];
      } catch (S) {
        console.warn("Failed to fetch bot configuration, using defaults:", S);
      } finally {
        B.value = !1;
      }
    }, oe = () => {
      l.value = window.innerWidth < 768;
    }, ve = () => {
      M.value && (re.value = M.value.getVoices());
    }, ue = (C) => {
      if (!M.value) {
        console.warn("Speech synthesis is not available in this browser");
        return;
      }
      if (L.value) {
        M.value.cancel(), L.value = null, f.value.forEach((G) => G.isPlaying = !1);
        return;
      }
      const V = new SpeechSynthesisUtterance(C.content), S = re.value.find(
        (G) => G.lang.startsWith(navigator.language) || G.lang.startsWith("en")
      );
      S && (V.voice = S), V.rate = 1, V.pitch = 1, V.onstart = () => {
        C.isPlaying = !0, L.value = V;
      }, V.onend = () => {
        C.isPlaying = !1, L.value = null;
      }, V.onerror = () => {
        C.isPlaying = !1, L.value = null;
      }, M.value.speak(V);
    }, he = (C) => {
      const V = f.value.findIndex((S) => S.audioId === C.audioId);
      if (V !== -1 && Z.value[V]) {
        const S = Z.value[V];
        f.value.forEach((G, te) => {
          if (G.audioId && te !== V) {
            const ie = Z.value[te];
            ie && !ie.paused && (ie.pause(), G.isAudioPlaying = !1, G.audioProgress = ie.currentTime / ie.duration * 100);
          }
        }), S.paused ? (S.play(), C.isAudioPlaying = !0) : (S.pause(), C.isAudioPlaying = !1);
      }
    }, Me = (C, V) => {
      const S = V.target;
      C.audioProgress = S.currentTime / S.duration * 100, C.audioDuration = S.currentTime;
    }, ke = (C, V) => {
      const S = V.target;
      C.audioDuration = S.duration;
    }, De = (C) => {
      C.isAudioPlaying = !1, C.audioProgress = 0;
    }, xt = async () => {
      try {
        M.value && L.value && (M.value.cancel(), L.value = null, f.value.forEach((V) => V.isPlaying = !1));
        const C = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        m.value = new MediaRecorder(C), T.value = [], E.value = !0, m.value.ondataavailable = (V) => {
          T.value.push(V.data);
        }, m.value.onstop = async () => {
          const V = new Blob(T.value, { type: "audio/wav" });
          await je(V), E.value = !1, C.getTracks().forEach((S) => S.stop());
        }, m.value.start();
      } catch (C) {
        console.error("Error accessing microphone:", C), E.value = !1;
      }
    }, un = () => {
      m.value && E.value && m.value.stop();
    }, je = async (C) => {
      try {
        s.value = !0;
        const V = Date.now(), S = new File([C], `recording_${V}.wav`, { type: "audio/wav" }), G = new FormData();
        G.append("file", S), G.append("chatbot_id", t.botId);
        const te = await fetch("https://api.dev.kb.promptstudio.dev/audio/process", {
          method: "POST",
          headers: {
            accept: "application/json"
          },
          body: G
        });
        if (!te.ok)
          throw new Error("Failed to process audio");
        const ie = await te.json();
        o.value = ie.text;
        const Rt = ie.audioUrl;
        await H(Rt);
      } catch (V) {
        console.error("Error processing audio:", V), f.value.push({
          id: Date.now().toString(),
          content: "Sorry, I could not process the audio. Please try again.",
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        }), await fe();
      } finally {
        s.value = !1;
      }
    }, fe = async () => {
      await ir(), i.value && (i.value.scrollTop = i.value.scrollHeight);
    }, H = async (C) => {
      C instanceof Event && C.preventDefault();
      const V = typeof C == "string" ? C : void 0;
      if (o.value.trim() && !r.value) {
        const S = o.value.trim(), G = {
          id: Date.now().toString(),
          content: S,
          sender: "user",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1,
          audioUrl: V,
          audioId: V ? `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : void 0
        };
        f.value.push(G), o.value = "", r.value = !0, await fe();
        try {
          const ie = await (await fetch("https://api.dev.kb.promptstudio.dev/chatbot/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              "x-api-key": t.apiKey
            },
            body: JSON.stringify({
              query: S,
              type: "qna",
              session_id: h.value,
              chatbot_id: t.botId,
              tag: p.value
              // Include browser information in the request
            })
          })).json();
          ie.session_id && (h.value = ie.session_id), f.value.push({
            id: Date.now().toString(),
            content: ie.response.trim(),
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          });
        } catch (te) {
          f.value.push({
            id: Date.now().toString(),
            content: "I apologize, but I encountered an error. Please try again later.",
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          }), console.error("Error:", te);
        } finally {
          r.value = !1, await fe();
        }
      }
    };
    return _r(async () => {
      window.addEventListener("resize", oe), await _e(), $(), M.value && (ve(), M.value.onvoiceschanged !== void 0 && (M.value.onvoiceschanged = ve));
    }), Fo(() => {
      window.removeEventListener("resize", oe), m.value && E.value && m.value.stop(), M.value && M.value.cancel();
    }), (C, V) => (Q(), ee("div", ca, [
      B.value ? (Q(), ee("div", aa, V[3] || (V[3] = [
        k("div", { class: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900" }, null, -1)
      ]))) : a.value ? (Q(), ee(Ne, { key: 1 }, [
        n.value ? lt("", !0) : (Q(), ee("button", {
          key: 0,
          onClick: V[0] || (V[0] = (S) => n.value = !0),
          style: Pe(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
          class: "fixed bottom-4 right-4 bg-gradient-custom text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 md:p-5 animate-bounce"
        }, [
          V[4] || (V[4] = k("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            k("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            })
          ], -1)),
          k("span", ua, "Chat with " + Wt(a.value.company || "our company"), 1),
          V[5] || (V[5] = k("span", { class: "md:hidden" }, "Chat", -1))
        ], 4)),
        Qo(k("div", {
          class: ge(["fixed md:bottom-4 md:right-4 md:w-[400px] bg-gradient-to-b from-gray-50 to-white md:rounded-2xl shadow-2xl overflow-hidden border-0 transition-all duration-300 ease-in-out flex flex-col", { "bottom-0 right-0 w-full h-[100dvh]": l.value, "max-h-[90vh]": !l.value }])
        }, [
          k("div", {
            style: Pe(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
            class: "bg-gradient-custom p-4 text-white flex justify-between items-center relative shrink-0"
          }, [
            k("div", fa, [
              k("div", da, [
                k("div", pa, [
                  a.value.iconUrl ? (Q(), ee("img", {
                    key: 0,
                    src: a.value.iconUrl,
                    class: "h-10 w-10 border rounded-full"
                  }, null, 8, ha)) : (Q(), ee("svg", ga, V[6] || (V[6] = [
                    k("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 15.546c-.523 0-1.046.151-1.5.454a9 9 0 01-2.486.804c-.057 0-.113.002-.17.002-2.486.022-4.773 1.823-4.773 5.423v.002c0 3.624 2.29 6.604 5.46 6.604 3.18 0 5.473-2.98 5.473-6.604v-.002c0-.576-.223-1.084-.632-1.5a9 9 0 01-.804-2.486c-.022-2.486-1.823-4.773-5.423-4.773-3.6 0-6.604 2.29-6.604 5.46v.002zM11.5 4c2.177 0 4.23.93 5.46 2.514.059.118.113.242.17.363a6.5 6.5 0 00-13-.002c.057-.12.113-.24.17-.36C7.27 4.93 9.323 4 11.5 4z"
                    }, null, -1)
                  ])))
                ]),
                k("div", {
                  class: ge(["absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white", [r.value ? "bg-green-400 animate-pulse" : "bg-gray-300"]])
                }, null, 2)
              ]),
              k("div", null, [
                k("h3", ma, Wt(a.value.company), 1),
                V[7] || (V[7] = k("p", { class: "text-xs text-white/80" }, "AI Assistant", -1))
              ])
            ]),
            k("button", {
              onClick: V[1] || (V[1] = (S) => n.value = !1),
              class: ge(["hover:bg-white/10 transition-colors p-2 rounded-full", { "absolute right-4": l.value }])
            }, V[8] || (V[8] = [
              k("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                k("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ]), 2)
          ], 4),
          k("div", {
            class: ge(["overflow-y-auto p-4 bg-[#F0F0F0] scroll-smooth flex-grow", { "pb-[100px]": l.value }]),
            ref_key: "chatContainer",
            ref: i
          }, [
            (Q(!0), ee(Ne, null, gn(f.value, (S, G) => (Q(), ee("div", {
              key: S.id,
              class: ge(["message mb-6 animate-fade-in w-full", [S.sender === "user" ? "flex justify-end" : "flex justify-start"]])
            }, [
              k("div", {
                class: ge([
                  "max-w-[85%] p-4 shadow-lg relative message-bubble transition-all duration-300",
                  S.sender === "user" ? "bg-gradient-custom text-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] user-message" : "bg-white/90 border-[0.5px] border-gray-100 text-gray-800 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] bot-message",
                  S.isPlaying ? "playing-message ring-2 ring-offset-2" : ""
                ]),
                style: Pe(S.sender === "user" ? `--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}` : S.isPlaying ? `--ring-color: ${a.value.colors.primary || "#8b5cf6"}; --gradient-start: ${a.value.colors.primary || "#8b5cf6"}; --gradient-end: ${a.value.colors.secondary || "#d946ef"};` : "")
              }, [
                k("div", _a, Wt(S.content), 1),
                k("div", {
                  class: ge([
                    "text-[11px] mt-2 flex items-center gap-1.5 font-medium justify-between",
                    S.sender === "user" ? "text-white/90" : "text-gray-400"
                  ])
                }, [
                  k("div", va, [
                    Lr(Wt(new Date(S.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: !0 })) + " ", 1),
                    k("audio", {
                      ref_for: !0,
                      ref: (te) => Z.value[G] = te,
                      src: S.audioUrl,
                      onTimeupdate: (te) => Me(S, te),
                      onLoadedmetadata: (te) => ke(S, te),
                      onEnded: (te) => De(S)
                    }, null, 40, ba)
                  ]),
                  S.sender === "bot" ? (Q(), ee("button", {
                    key: 0,
                    onClick: (te) => ue(S),
                    class: ge([
                      "p-1.5 rounded-full transition-all duration-300 hover:scale-110",
                      S.isPlaying ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg" : "hover:bg-gray-100"
                    ])
                  }, [
                    (Q(), ee("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: ge(["h-4 w-4 transition-transform duration-300", { "scale-110 animate-pulse": S.isPlaying }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      S.isPlaying ? (Q(), ee("path", Na)) : (Q(), ee("path", Ea))
                    ], 2))
                  ], 10, ya)) : lt("", !0),
                  S.sender === "user" && S.audioUrl ? (Q(), ee("button", {
                    key: 1,
                    onClick: (te) => he(S),
                    class: ge([
                      "p-1.5 rounded-full transition-all duration-300 hover:scale-110",
                      S.isAudioPlaying ? "bg-white/20 text-white" : "hover:bg-white/10"
                    ])
                  }, [
                    (Q(), ee("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: ge(["h-4 w-4 transition-transform duration-300", { "scale-110 animate-pulse": S.isAudioPlaying }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      S.isAudioPlaying ? (Q(), ee("path", xa)) : (Q(), ee("path", Oa))
                    ], 2))
                  ], 10, wa)) : lt("", !0)
                ], 2)
              ], 6)
            ], 2))), 128)),
            r.value ? (Q(), ee("div", Da, [
              k("div", Va, [
                (Q(), ee(Ne, null, gn(3, (S) => k("div", {
                  key: S,
                  class: "w-3 h-3 rounded-full animate-loader",
                  style: Pe({
                    "animation-delay": `${(S - 1) * 0.2}s`,
                    background: `linear-gradient(to right, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                  })
                }, null, 4)), 64))
              ])
            ])) : lt("", !0)
          ], 2),
          k("div", {
            class: ge(["border-t border-gray-100 p-4 bg-white/80", { "fixed bottom-0 left-0 right-0 shadow-[0_-1px_10px_rgba(0,0,0,0.1)]": l.value }])
          }, [
            k("form", {
              onSubmit: H,
              class: "flex gap-3 max-w-[400px] mx-auto"
            }, [
              k("div", Ca, [
                Qo(k("input", {
                  "onUpdate:modelValue": V[2] || (V[2] = (S) => o.value = S),
                  type: "text",
                  placeholder: s.value ? "" : E.value ? "Listening..." : "Type your message...",
                  class: "w-full p-3 pl-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white/50 hover:border-[var(--primary)] transition-all duration-300",
                  style: Pe(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  disabled: r.value || E.value || s.value
                }, null, 12, Sa), [
                  [Zc, o.value]
                ]),
                s.value ? (Q(), ee("div", Ta, [
                  k("div", $a, [
                    (Q(), ee(Ne, null, gn(5, (S) => k("div", {
                      key: S,
                      class: "processing-dot",
                      style: Pe({
                        animationDelay: `${(S - 1) * 0.2}s`,
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 4)), 64))
                  ]),
                  V[9] || (V[9] = k("span", { class: "text-sm text-gray-500 ml-2" }, "Processing", -1))
                ])) : lt("", !0),
                E.value && !s.value ? (Q(), ee("div", Pa, [
                  k("div", Ma, [
                    (Q(), ee(Ne, null, gn(5, (S) => k("div", {
                      key: S,
                      class: ge(["recording-wave", `wave-line-${S}`]),
                      style: Pe({
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 6)), 64))
                  ]),
                  k("button", {
                    onClick: un,
                    class: "p-1.5 bg-red-50 rounded-full text-red-500 hover:text-red-600 transition-colors hover:bg-red-100"
                  }, V[10] || (V[10] = [
                    k("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      k("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }),
                      k("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      })
                    ], -1)
                  ]))
                ])) : lt("", !0),
                !E.value && !s.value ? (Q(), ee("button", {
                  key: 2,
                  type: "button",
                  onClick: xt,
                  style: Pe(`background-color: ${a.value.colors.primary}; --primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  class: "absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-1.5 rounded-full",
                  disabled: r.value
                }, V[11] || (V[11] = [
                  k("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    k("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    })
                  ], -1)
                ]), 12, Aa)) : lt("", !0)
              ]),
              k("button", {
                type: "submit",
                style: Pe(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                class: "bg-gradient-custom text-white p-3 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-12 h-12 shrink-0",
                disabled: r.value || !o.value.trim() && !E.value || s.value
              }, [
                r.value ? (Q(), ee("svg", ka, V[13] || (V[13] = [
                  k("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  }, null, -1)
                ]))) : (Q(), ee("svg", Ra, V[12] || (V[12] = [
                  k("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  }, null, -1)
                ])))
              ], 12, Ia)
            ], 32)
          ], 2)
        ], 2), [
          [Gr, n.value]
        ])
      ], 64)) : lt("", !0)
    ]));
  }
}), Fa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Ha = /* @__PURE__ */ Fa(ja, [["__scopeId", "data-v-eeec04d1"]]);
function Ti() {
  const e = document.getElementById("chat-widget-container");
  if (!e) {
    console.error("Chat widget container not found");
    return;
  }
  const t = e.getAttribute("data-bot-id") || "";
  ta(Ha, {
    botId: t
  }).mount(e);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ti) : Ti();
