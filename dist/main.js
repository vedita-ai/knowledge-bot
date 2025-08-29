var zo = Object.defineProperty;
var Uo = (e, t, n) => t in e ? zo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ee = (e, t, n) => Uo(e, typeof t != "symbol" ? t + "" : t, n);
var pi = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = pi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = pi.NODE_ENV !== "production" ? Object.freeze([]) : [], be = () => {
}, Wo = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), pe = Object.assign, Gs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qo = Object.prototype.hasOwnProperty, U = (e, t) => qo.call(e, t), P = Array.isArray, Dt = (e) => ss(e) === "[object Map]", hi = (e) => ss(e) === "[object Set]", M = (e) => typeof e == "function", ie = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Zs = (e) => (Y(e) || M(e)) && M(e.then) && M(e.catch), mi = Object.prototype.toString, ss = (e) => mi.call(e), Js = (e) => ss(e).slice(8, -1), gi = (e) => ss(e) === "[object Object]", Qs = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ ft(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ko = /* @__PURE__ */ ft(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Go = /-(\w)/g, Be = rs(
  (e) => e.replace(Go, (t, n) => n ? n.toUpperCase() : "")
), Zo = /\B([A-Z])/g, yt = rs(
  (e) => e.replace(Zo, "-$1").toLowerCase()
), is = rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nt = rs(
  (e) => e ? `on${is(e)}` : ""
), _t = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Bn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, $s = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Er;
const bn = () => Er || (Er = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ie(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? Xo(s) : Ie(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Y(e))
    return e;
}
const Jo = /;(?![^(]*\))/g, Qo = /:([^]+)/, Yo = /\/\*[^]*?\*\//g;
function Xo(e) {
  const t = {};
  return e.replace(Yo, "").split(Jo).forEach((n) => {
    if (n) {
      const s = n.split(Qo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = Te(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const el = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", sl = /* @__PURE__ */ ft(el), rl = /* @__PURE__ */ ft(tl), il = /* @__PURE__ */ ft(nl), ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ ft(ol);
function bi(e) {
  return !!e || e === "";
}
const ki = (e) => !!(e && e.__v_isRef === !0), Vn = (e) => ie(e) ? e : e == null ? "" : P(e) || Y(e) && (e.toString === mi || !M(e.toString)) ? ki(e) ? Vn(e.value) : JSON.stringify(e, _i, 2) : String(e), _i = (e, t) => ki(t) ? _i(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[ks(s, i) + " =>"] = r, n),
    {}
  )
} : hi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ks(n))
} : xt(t) ? ks(t) : Y(t) && !P(t) && !gi(t) ? String(t) : t, ks = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
function nt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Re;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    } else te.NODE_ENV !== "production" && nt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Re = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Re = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function cl() {
  return Re;
}
let K;
const _s = /* @__PURE__ */ new WeakSet();
class yi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _s.has(this) && (_s.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nr(this), vi(this);
    const t = K, n = ze;
    K = this, ze = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && K !== this && nt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ei(this), K = t, ze = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        er(t);
      this.deps = this.depsTail = void 0, Nr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _s.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cs(this) && this.run();
  }
  get dirty() {
    return Cs(this);
  }
}
let wi = 0, rn, on;
function xi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = rn, rn = e;
}
function Ys() {
  wi++;
}
function Xs() {
  if (--wi > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ei(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), er(s), ul(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ni(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ni(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn))
    return;
  e.globalVersion = fn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Cs(e)) {
    e.flags &= -3;
    return;
  }
  const n = K, s = ze;
  K = e, ze = !0;
  try {
    vi(e);
    const r = e.fn(e._value);
    (t.version === 0 || _t(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    K = n, ze = s, Ei(e), e.flags &= -3;
  }
}
function er(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), te.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      er(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ze = !0;
const Oi = [];
function dt() {
  Oi.push(ze), ze = !1;
}
function pt() {
  const e = Oi.pop();
  ze = e === void 0 ? !0 : e;
}
function Nr(e) {
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
let fn = 0;
class fl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, te.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !ze || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new fl(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, Di(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = s);
    }
    return te.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      pe(
        {
          effect: K
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      if (te.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            pe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xs();
    }
  }
}
function Di(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Di(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), te.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Vs = /* @__PURE__ */ new WeakMap(), St = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Rs = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ge(e, t, n) {
  if (ze && K) {
    let s = Vs.get(e);
    s || Vs.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new tr()), r.map = s, r.key = n), te.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Ye(e, t, n, s, r, i) {
  const o = Vs.get(e);
  if (!o) {
    fn++;
    return;
  }
  const l = (a) => {
    a && (te.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (Ys(), t === "clear")
    o.forEach(l);
  else {
    const a = P(e), u = a && Qs(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((d, m) => {
        (m === "length" || m === dn || !xt(m) && m >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(dn)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(St)), Dt(e) && l(o.get(Rs)));
          break;
        case "delete":
          a || (l(o.get(St)), Dt(e) && l(o.get(Rs)));
          break;
        case "set":
          Dt(e) && l(o.get(St));
          break;
      }
  }
  Xs();
}
function It(e) {
  const t = j(e);
  return t === e ? t : (ge(t, "iterate", dn), De(e) ? t : t.map(ye));
}
function os(e) {
  return ge(e = j(e), "iterate", dn), e;
}
const dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, ye);
  },
  concat(...e) {
    return It(this).concat(
      ...e.map((t) => P(t) ? It(t) : t)
    );
  },
  entries() {
    return ys(this, "entries", (e) => (e[1] = ye(e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(this, "filter", e, t, (n) => n.map(ye), arguments);
  },
  find(e, t) {
    return it(this, "find", e, t, ye, arguments);
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(this, "findLast", e, t, ye, arguments);
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ws(this, "includes", e);
  },
  indexOf(...e) {
    return ws(this, "indexOf", e);
  },
  join(e) {
    return It(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ws(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Zt(this, "pop");
  },
  push(...e) {
    return Zt(this, "push", e);
  },
  reduce(e, ...t) {
    return Or(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Or(this, "reduceRight", e, t);
  },
  shift() {
    return Zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Zt(this, "splice", e);
  },
  toReversed() {
    return It(this).toReversed();
  },
  toSorted(e) {
    return It(this).toSorted(e);
  },
  toSpliced(...e) {
    return It(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zt(this, "unshift", e);
  },
  values() {
    return ys(this, "values", ye);
  }
};
function ys(e, t, n) {
  const s = os(e), r = s[t]();
  return s !== e && !De(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const pl = Array.prototype;
function it(e, t, n, s, r, i) {
  const o = os(e), l = o !== e && !De(e), a = o[t];
  if (a !== pl[t]) {
    const d = a.apply(e, i);
    return l ? ye(d) : d;
  }
  let u = n;
  o !== e && (l ? u = function(d, m) {
    return n.call(this, ye(d), m, e);
  } : n.length > 2 && (u = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const c = a.call(o, u, s);
  return l && r ? r(c) : c;
}
function Or(e, t, n, s) {
  const r = os(e);
  let i = n;
  return r !== e && (De(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, ye(l), a, e);
  }), r[t](i, ...s);
}
function ws(e, t, n) {
  const s = j(e);
  ge(s, "iterate", dn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && zn(n[0]) ? (n[0] = j(n[0]), s[t](...n)) : r;
}
function Zt(e, t, n = []) {
  dt(), Ys();
  const s = j(e)[t].apply(e, n);
  return Xs(), pt(), s;
}
const hl = /* @__PURE__ */ ft("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function ml(e) {
  xt(e) || (e = String(e));
  const t = j(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Ti {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Pi : Ai : i ? Ri : Vi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = P(t);
    if (!r) {
      let a;
      if (o && (a = dl[n]))
        return a;
      if (n === "hasOwnProperty")
        return ml;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : s
    );
    return (xt(n) ? Si.has(n) : hl(n)) || (r || ge(t, "get", n), i) ? l : de(l) ? o && Qs(n) ? l : l.value : Y(l) ? r ? Ii(l) : nr(l) : l;
  }
}
class $i extends Ti {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = ut(i);
      if (!De(s) && !ut(s) && (i = j(i), s = j(s)), !P(t) && de(i) && !de(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = P(t) && Qs(n) ? Number(n) < t.length : U(t, n), l = Reflect.set(
      t,
      n,
      s,
      de(t) ? t : r
    );
    return t === j(r) && (o ? _t(s, i) && Ye(t, "set", n, s, i) : Ye(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = U(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && Ye(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!xt(n) || !Si.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      P(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class Ci extends Ti {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return te.NODE_ENV !== "production" && nt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return te.NODE_ENV !== "production" && nt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const gl = /* @__PURE__ */ new $i(), bl = /* @__PURE__ */ new Ci(), kl = /* @__PURE__ */ new $i(!0), _l = /* @__PURE__ */ new Ci(!0), As = (e) => e, Dn = (e) => Reflect.getPrototypeOf(e);
function yl(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = j(r), o = Dt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = r[e](...s), c = n ? As : t ? Ps : ye;
    return !t && ge(
      i,
      "iterate",
      a ? Rs : St
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = u.next();
        return m ? { value: d, done: m } : {
          value: l ? [c(d[0]), c(d[1])] : c(d),
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
function Sn(e) {
  return function(...t) {
    if (te.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      nt(
        `${is(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      e || (_t(r, l) && ge(o, "get", r), ge(o, "get", l));
      const { has: a } = Dn(o), u = t ? As : e ? Ps : ye;
      if (a.call(o, r))
        return u(i.get(r));
      if (a.call(o, l))
        return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ge(j(r), "iterate", St), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      return e || (_t(r, l) && ge(o, "has", r), ge(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = j(l), u = t ? As : e ? Ps : ye;
      return !e && ge(a, "iterate", St), l.forEach((c, d) => r.call(i, u(c), u(d), o));
    }
  };
  return pe(
    n,
    e ? {
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear")
    } : {
      add(r) {
        !t && !De(r) && !ut(r) && (r = j(r));
        const i = j(this);
        return Dn(i).has.call(i, r) || (i.add(r), Ye(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !De(i) && !ut(i) && (i = j(i));
        const o = j(this), { has: l, get: a } = Dn(o);
        let u = l.call(o, r);
        u ? te.NODE_ENV !== "production" && Dr(o, l, r) : (r = j(r), u = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), u ? _t(i, c) && Ye(o, "set", r, i, c) : Ye(o, "add", r, i), this;
      },
      delete(r) {
        const i = j(this), { has: o, get: l } = Dn(i);
        let a = o.call(i, r);
        a ? te.NODE_ENV !== "production" && Dr(i, o, r) : (r = j(r), a = o.call(i, r));
        const u = l ? l.call(i, r) : void 0, c = i.delete(r);
        return a && Ye(i, "delete", r, void 0, u), c;
      },
      clear() {
        const r = j(this), i = r.size !== 0, o = te.NODE_ENV !== "production" ? Dt(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return i && Ye(
          r,
          "clear",
          void 0,
          void 0,
          o
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = yl(r, e, t);
  }), n;
}
function ls(e, t) {
  const n = wl(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    U(n, r) && r in s ? n : s,
    r,
    i
  );
}
const xl = {
  get: /* @__PURE__ */ ls(!1, !1)
}, vl = {
  get: /* @__PURE__ */ ls(!1, !0)
}, El = {
  get: /* @__PURE__ */ ls(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ ls(!0, !0)
};
function Dr(e, t, n) {
  const s = j(n);
  if (s !== n && t.call(e, s)) {
    const r = Js(e);
    nt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Vi = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap();
function Ol(e) {
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
function Dl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ol(Js(e));
}
function nr(e) {
  return ut(e) ? e : as(
    e,
    !1,
    gl,
    xl,
    Vi
  );
}
function Sl(e) {
  return as(
    e,
    !1,
    kl,
    vl,
    Ri
  );
}
function Ii(e) {
  return as(
    e,
    !0,
    bl,
    El,
    Ai
  );
}
function et(e) {
  return as(
    e,
    !0,
    _l,
    Nl,
    Pi
  );
}
function as(e, t, n, s, r) {
  if (!Y(e))
    return te.NODE_ENV !== "production" && nt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Dl(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function Tt(e) {
  return ut(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
function De(e) {
  return !!(e && e.__v_isShallow);
}
function zn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Tl(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && Bn(e, "__v_skip", !0), e;
}
const ye = (e) => Y(e) ? nr(e) : e, Ps = (e) => Y(e) ? Ii(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function me(e) {
  return $l(e, !1);
}
function $l(e, t) {
  return de(e) ? e : new Cl(e, t);
}
class Cl {
  constructor(t, n) {
    this.dep = new tr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : ye(t), this.__v_isShallow = n;
  }
  get value() {
    return te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || De(t) || ut(t);
    t = s ? t : j(t), _t(t, n) && (this._rawValue = t, this._value = s ? t : ye(t), te.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Mi(e) {
  return de(e) ? e.value : e;
}
const Vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Mi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return de(r) && !de(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Li(e) {
  return Tt(e) ? e : new Proxy(e, Vl);
}
class Rl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return xi(this, !0), !0;
  }
  get value() {
    const t = te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ni(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && nt("Write operation failed: computed value is readonly");
  }
}
function Al(e, t, n = !1) {
  let s, r;
  return M(e) ? s = e : (s = e.get, r = e.set), new Rl(s, r, n);
}
const Tn = {}, Un = /* @__PURE__ */ new WeakMap();
let Ot;
function Pl(e, t = !1, n = Ot) {
  if (n) {
    let s = Un.get(n);
    s || Un.set(n, s = []), s.push(e);
  } else te.NODE_ENV !== "production" && !t && nt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Il(e, t, n = G) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, u = (V) => {
    (n.onWarn || nt)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (V) => r ? V : De(V) || r === !1 || r === 0 ? lt(V, 1) : lt(V);
  let d, m, b, S, O = !1, W = !1;
  if (de(e) ? (m = () => e.value, O = De(e)) : Tt(e) ? (m = () => c(e), O = !0) : P(e) ? (W = !0, O = e.some((V) => Tt(V) || De(V)), m = () => e.map((V) => {
    if (de(V))
      return V.value;
    if (Tt(V))
      return c(V);
    if (M(V))
      return a ? a(V, 2) : V();
    te.NODE_ENV !== "production" && u(V);
  })) : M(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (b) {
      dt();
      try {
        b();
      } finally {
        pt();
      }
    }
    const V = Ot;
    Ot = d;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Ot = V;
    }
  } : (m = be, te.NODE_ENV !== "production" && u(e)), t && r) {
    const V = m, oe = r === !0 ? 1 / 0 : r;
    m = () => lt(V(), oe);
  }
  const z = cl(), q = () => {
    d.stop(), z && z.active && Gs(z.effects, d);
  };
  if (i && t) {
    const V = t;
    t = (...oe) => {
      V(...oe), q();
    };
  }
  let H = W ? new Array(e.length).fill(Tn) : Tn;
  const ce = (V) => {
    if (!(!(d.flags & 1) || !d.dirty && !V))
      if (t) {
        const oe = d.run();
        if (r || O || (W ? oe.some((he, se) => _t(he, H[se])) : _t(oe, H))) {
          b && b();
          const he = Ot;
          Ot = d;
          try {
            const se = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              H === Tn ? void 0 : W && H[0] === Tn ? [] : H,
              S
            ];
            a ? a(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            ), H = oe;
          } finally {
            Ot = he;
          }
        }
      } else
        d.run();
  };
  return l && l(ce), d = new yi(m), d.scheduler = o ? () => o(ce, !1) : ce, S = (V) => Pl(V, !1, d), b = d.onStop = () => {
    const V = Un.get(d);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const oe of V) oe();
      Un.delete(d);
    }
  }, te.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? ce(!0) : H = d.run() : o ? o(ce.bind(null, !0), !0) : d.run(), q.pause = d.pause.bind(d), q.resume = d.resume.bind(d), q.stop = q, q;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, de(e))
    lt(e.value, t, n);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      lt(e[s], t, n);
  else if (hi(e) || Dt(e))
    e.forEach((s) => {
      lt(s, t, n);
    });
  else if (gi(e)) {
    for (const s in e)
      lt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && lt(e[s], t, n);
  }
  return e;
}
var h = {};
const $t = [];
function Rn(e) {
  $t.push(e);
}
function An() {
  $t.pop();
}
let xs = !1;
function E(e, ...t) {
  if (xs) return;
  xs = !0, dt();
  const n = $t.length ? $t[$t.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Ml();
  if (s)
    Wt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, l;
          return (l = (o = i.toString) == null ? void 0 : o.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${hs(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Ll(r)), console.warn(...i);
  }
  pt(), xs = !1;
}
function Ml() {
  let e = $t[$t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ll(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...jl(n));
  }), t;
}
function jl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${hs(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...Fl(e.props), i] : [r + i];
}
function Fl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...ji(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ji(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : de(t) ? (t = ji(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : M(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const sr = {
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
function Wt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    kn(r, t, n);
  }
}
function st(e, t, n, s) {
  if (M(e)) {
    const r = Wt(e, t, n, s);
    return r && Zs(r) && r.catch((i) => {
      kn(i, t, n);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(st(e[i], t, n, s));
    return r;
  } else h.NODE_ENV !== "production" && E(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function kn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = h.NODE_ENV !== "production" ? sr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      dt(), Wt(i, null, 10, [
        e,
        a,
        u
      ]), pt();
      return;
    }
  }
  Hl(e, n, r, s, o);
}
function Hl(e, t, n, s = !0, r = !1) {
  if (h.NODE_ENV !== "production") {
    const i = sr[t];
    if (n && Rn(n), E(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && An(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const Ee = [];
let Qe = -1;
const zt = [];
let gt = null, Ft = 0;
const Fi = /* @__PURE__ */ Promise.resolve();
let Wn = null;
const Bl = 100;
function Hi(e) {
  const t = Wn || Fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zl(e) {
  let t = Qe + 1, n = Ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ee[s], i = pn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function cs(e) {
  if (!(e.flags & 1)) {
    const t = pn(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pn(n) ? Ee.push(e) : Ee.splice(zl(t), 0, e), e.flags |= 1, Bi();
  }
}
function Bi() {
  Wn || (Wn = Fi.then(Wi));
}
function zi(e) {
  P(e) ? zt.push(...e) : gt && e.id === -1 ? gt.splice(Ft + 1, 0, e) : e.flags & 1 || (zt.push(e), e.flags |= 1), Bi();
}
function Sr(e, t, n = Qe + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || h.NODE_ENV !== "production" && rr(t, s))
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ui(e) {
  if (zt.length) {
    const t = [...new Set(zt)].sort(
      (n, s) => pn(n) - pn(s)
    );
    if (zt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft = 0; Ft < gt.length; Ft++) {
      const n = gt[Ft];
      h.NODE_ENV !== "production" && rr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, Ft = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wi(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => rr(e, n) : be;
  try {
    for (Qe = 0; Qe < Ee.length; Qe++) {
      const n = Ee[Qe];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Wt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Qe < Ee.length; Qe++) {
      const n = Ee[Qe];
      n && (n.flags &= -2);
    }
    Qe = -1, Ee.length = 0, Ui(e), Wn = null, (Ee.length || zt.length) && Wi(e);
  }
}
function rr(e, t) {
  const n = e.get(t) || 0;
  if (n > Bl) {
    const s = t.i, r = s && Do(s.type);
    return kn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tt = !1;
const Pn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (bn().__VUE_HMR_RUNTIME__ = {
  createRecord: vs(qi),
  rerender: vs(ql),
  reload: vs(Kl)
});
const Vt = /* @__PURE__ */ new Map();
function Ul(e) {
  const t = e.type.__hmrId;
  let n = Vt.get(t);
  n || (qi(t, e.type), n = Vt.get(t)), n.instances.add(e);
}
function Wl(e) {
  Vt.get(e.type.__hmrId).instances.delete(e);
}
function qi(e, t) {
  return Vt.has(e) ? !1 : (Vt.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return So(e) ? e.__vccOpts : e;
}
function ql(e, t) {
  const n = Vt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, qn(s.type).render = t), s.renderCache = [], tt = !0, s.update(), tt = !1;
  }));
}
function Kl(e, t) {
  const n = Vt.get(e);
  if (!n) return;
  t = qn(t), Tr(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = qn(i.type);
    let l = Pn.get(o);
    l || (o !== n.initialDef && Tr(o, t), Pn.set(o, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? cs(() => {
      tt = !0, i.parent.update(), tt = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  zi(() => {
    Pn.clear();
  });
}
function Tr(e, t) {
  pe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function vs(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Xe, tn = [], Is = !1;
function _n(e, ...t) {
  Xe ? Xe.emit(e, ...t) : Is || tn.push({ event: e, args: t });
}
function Ki(e, t) {
  var n, s;
  Xe = e, Xe ? (Xe.enabled = !0, tn.forEach(({ event: r, args: i }) => Xe.emit(r, ...i)), tn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ki(i, t);
  }), setTimeout(() => {
    Xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Is = !0, tn = []);
  }, 3e3)) : (Is = !0, tn = []);
}
function Gl(e, t) {
  _n("app:init", e, t, {
    Fragment: we,
    Text: yn,
    Comment: Pe,
    Static: Ln
  });
}
function Zl(e) {
  _n("app:unmount", e);
}
const Jl = /* @__PURE__ */ ir(
  "component:added"
  /* COMPONENT_ADDED */
), Gi = /* @__PURE__ */ ir(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ql = /* @__PURE__ */ ir(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yl = (e) => {
  Xe && typeof Xe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Xe.cleanupBuffer(e) && Ql(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return (t) => {
    _n(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Xl = /* @__PURE__ */ Zi(
  "perf:start"
  /* PERFORMANCE_START */
), ea = /* @__PURE__ */ Zi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zi(e) {
  return (t, n, s) => {
    _n(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ta(e, t, n) {
  _n(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ne = null, Ji = null;
function Kn(e) {
  const t = Ne;
  return Ne = e, Ji = e && e.type.__scopeId || null, t;
}
function na(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Br(-1);
    const i = Kn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Kn(i), s._d && Br(1);
    }
    return h.NODE_ENV !== "production" && Gi(t), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Qi(e) {
  Ko(e) && E("Do not use built-in directive ids as custom directive id: " + e);
}
function $r(e, t) {
  if (Ne === null)
    return h.NODE_ENV !== "production" && E("withDirectives can only be used inside render functions."), e;
  const n = ps(Ne), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = G] = t[r];
    i && (M(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && lt(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function vt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (dt(), st(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), pt());
  }
}
const sa = Symbol("_vte"), ra = (e) => e.__isTeleport;
function or(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ia(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const oa = /* @__PURE__ */ new WeakSet();
function Gn(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (S, O) => Gn(
        S,
        t && (P(t) ? t[O] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (ln(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Gn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? ps(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    E(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, d = l.setupState, m = j(d), b = d === G ? () => !1 : (S) => h.NODE_ENV !== "production" && (U(m, S) && !de(m[S]) && E(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), oa.has(m[S])) ? !1 : U(m, S);
  if (u != null && u !== a && (ie(u) ? (c[u] = null, b(u) && (d[u] = null)) : de(u) && (u.value = null)), M(a))
    Wt(a, l, 12, [o, c]);
  else {
    const S = ie(a), O = de(a);
    if (S || O) {
      const W = () => {
        if (e.f) {
          const z = S ? b(a) ? d[a] : c[a] : a.value;
          r ? P(z) && Gs(z, i) : P(z) ? z.includes(i) || z.push(i) : S ? (c[a] = [i], b(a) && (d[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value));
        } else S ? (c[a] = o, b(a) && (d[a] = o)) : O ? (a.value = o, e.k && (c[e.k] = o)) : h.NODE_ENV !== "production" && E("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (W.id = -1, Ve(W, n)) : W();
    } else h.NODE_ENV !== "production" && E("Invalid template ref type:", a, `(${typeof a})`);
  }
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, lr = (e) => e.type.__isKeepAlive;
function la(e, t) {
  Xi(e, "a", t);
}
function aa(e, t) {
  Xi(e, "da", t);
}
function Xi(e, t, n = ke) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (us(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      lr(r.parent.vnode) && ca(s, t, n, r), r = r.parent;
  }
}
function ca(e, t, n, s) {
  const r = us(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ar(() => {
    Gs(s[t], r);
  }, n);
}
function us(e, t, n = ke, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      dt();
      const l = wn(n), a = st(t, n, e, o);
      return l(), pt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  } else if (h.NODE_ENV !== "production") {
    const r = Nt(sr[e].replace(/ hook$/, ""));
    E(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ht = (e) => (t, n = ke) => {
  (!mn || e === "sp") && us(e, (...s) => t(...s), n);
}, ua = ht("bm"), eo = ht("m"), fa = ht(
  "bu"
), da = ht("u"), pa = ht(
  "bum"
), ar = ht("um"), ha = ht(
  "sp"
), ma = ht("rtg"), ga = ht("rtc");
function ba(e, t = ke) {
  us("ec", e, t);
}
const ka = Symbol.for("v-ndc");
function $n(e, t, n, s) {
  let r;
  const i = n, o = P(e);
  if (o || ie(e)) {
    const l = o && Tt(e);
    let a = !1;
    l && (a = !De(e), e = os(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        a ? ye(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Ms = (e) => e ? No(e) ? ps(e) : Ms(e.parent) : null, Ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? et(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? et(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? et(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? et(e.refs) : e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => so(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hi.bind(e.proxy)),
    $watch: (e) => Qa.bind(e)
  })
), cr = (e) => e === "_" || e === "$", Es = (e, t) => e !== G && !e.__isScriptSetup && U(e, t), to = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const b = o[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Es(s, t))
          return o[t] = 1, s[t];
        if (r !== G && U(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && U(u, t)
        )
          return o[t] = 3, i[t];
        if (n !== G && U(n, t))
          return o[t] = 4, n[t];
        Ls && (o[t] = 0);
      }
    }
    const c = Ct[t];
    let d, m;
    if (c)
      return t === "$attrs" ? (ge(e.attrs, "get", ""), h.NODE_ENV !== "production" && Qn()) : h.NODE_ENV !== "production" && t === "$slots" && ge(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== G && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, U(m, t)
    )
      return m[t];
    h.NODE_ENV !== "production" && Ne && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== G && cr(t[0]) && U(r, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ne && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Es(r, t) ? (r[t] = n, !0) : h.NODE_ENV !== "production" && r.__isScriptSetup && U(r, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== G && U(s, t) ? (s[t] = n, !0) : U(e.props, t) ? (h.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== G && U(e, o) || Es(t, o) || (l = i[0]) && U(l, o) || U(s, o) || U(Ct, o) || U(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (to.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _a(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ct).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ct[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: be
    });
  }), t;
}
function ya(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: be
    });
  });
}
function wa(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (cr(s[0])) {
        E(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: be
      });
    }
  });
}
function Cr(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? E(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ls = !0;
function va(e) {
  const t = so(e), n = e.proxy, s = e.ctx;
  Ls = !1, t.beforeCreate && Vr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: m,
    beforeUpdate: b,
    updated: S,
    activated: O,
    deactivated: W,
    beforeDestroy: z,
    beforeUnmount: q,
    destroyed: H,
    unmounted: ce,
    render: V,
    renderTracked: oe,
    renderTriggered: he,
    errorCaptured: se,
    serverPrefetch: _e,
    // public API
    expose: je,
    inheritAttrs: Ue,
    // assets
    components: $e,
    directives: Pt,
    filters: vn
  } = t, We = h.NODE_ENV !== "production" ? xa() : null;
  if (h.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const $ in F)
        We("Props", $);
  }
  if (u && Ea(u, s, We), o)
    for (const F in o) {
      const $ = o[F];
      M($) ? (h.NODE_ENV !== "production" ? Object.defineProperty(s, F, {
        value: $.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[F] = $.bind(n), h.NODE_ENV !== "production" && We("Methods", F)) : h.NODE_ENV !== "production" && E(
        `Method "${F}" has type "${typeof $}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    h.NODE_ENV !== "production" && !M(r) && E(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = r.call(n, n);
    if (h.NODE_ENV !== "production" && Zs(F) && E(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(F))
      h.NODE_ENV !== "production" && E("data() should return an object.");
    else if (e.data = nr(F), h.NODE_ENV !== "production")
      for (const $ in F)
        We("Data", $), cr($[0]) || Object.defineProperty(s, $, {
          configurable: !0,
          enumerable: !0,
          get: () => F[$],
          set: be
        });
  }
  if (Ls = !0, i)
    for (const F in i) {
      const $ = i[F], T = M($) ? $.bind(n, n) : M($.get) ? $.get.bind(n, n) : be;
      h.NODE_ENV !== "production" && T === be && E(`Computed property "${F}" has no getter.`);
      const C = !M($) && M($.set) ? $.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        E(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : be, ne = vc({
        get: T,
        set: C
      });
      Object.defineProperty(s, F, {
        enumerable: !0,
        configurable: !0,
        get: () => ne.value,
        set: (le) => ne.value = le
      }), h.NODE_ENV !== "production" && We("Computed", F);
    }
  if (l)
    for (const F in l)
      no(l[F], s, n, F);
  if (a) {
    const F = M(a) ? a.call(n) : a;
    Reflect.ownKeys(F).forEach(($) => {
      $a($, F[$]);
    });
  }
  c && Vr(c, e, "c");
  function ue(F, $) {
    P($) ? $.forEach((T) => F(T.bind(n))) : $ && F($.bind(n));
  }
  if (ue(ua, d), ue(eo, m), ue(fa, b), ue(da, S), ue(la, O), ue(aa, W), ue(ba, se), ue(ga, oe), ue(ma, he), ue(pa, q), ue(ar, ce), ue(ha, _e), P(je))
    if (je.length) {
      const F = e.exposed || (e.exposed = {});
      je.forEach(($) => {
        Object.defineProperty(F, $, {
          get: () => n[$],
          set: (T) => n[$] = T
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === be && (e.render = V), Ue != null && (e.inheritAttrs = Ue), $e && (e.components = $e), Pt && (e.directives = Pt), _e && Yi(e);
}
function Ea(e, t, n = be) {
  P(e) && (e = js(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Y(r) ? "default" in r ? i = In(
      r.from || s,
      r.default,
      !0
    ) : i = In(r.from || s) : i = In(r), de(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i, h.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Vr(e, t, n) {
  st(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function no(e, t, n, s) {
  let r = s.includes(".") ? bo(n, s) : () => n[s];
  if (ie(e)) {
    const i = t[e];
    M(i) ? Os(r, i) : h.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e}"`, i);
  } else if (M(e))
    Os(r, e.bind(n));
  else if (Y(e))
    if (P(e))
      e.forEach((i) => no(i, t, n, s));
    else {
      const i = M(e.handler) ? e.handler.bind(n) : t[e.handler];
      M(i) ? Os(r, i, e) : h.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else h.NODE_ENV !== "production" && E(`Invalid watch option: "${s}"`, e);
}
function so(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Zn(a, u, o, !0)
  ), Zn(a, t, o)), Y(t) && i.set(t, a), a;
}
function Zn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Zn(e, i, n, !0), r && r.forEach(
    (o) => Zn(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      h.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Na[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Na = {
  data: Rr,
  props: Ar,
  emits: Ar,
  // objects
  methods: nn,
  computed: nn,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: nn,
  directives: nn,
  // watch
  watch: Da,
  // provide / inject
  provide: Rr,
  inject: Oa
};
function Rr(e, t) {
  return t ? e ? function() {
    return pe(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oa(e, t) {
  return nn(js(e), js(t));
}
function js(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nn(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ar(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    Cr(e),
    Cr(t ?? {})
  ) : t;
}
function Da(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: Wo,
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
let Sa = 0;
function Ta(e, t) {
  return function(s, r = null) {
    M(s) || (s = pe({}, s)), r != null && !Y(r) && (h.NODE_ENV !== "production" && E("root props passed to app.mount() must be an object."), r = null);
    const i = ro(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: Sa++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: qr,
      get config() {
        return i.config;
      },
      set config(c) {
        h.NODE_ENV !== "production" && E(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return o.has(c) ? h.NODE_ENV !== "production" && E("Plugin has already been applied to target app.") : c && M(c.install) ? (o.add(c), c.install(u, ...d)) : M(c) ? (o.add(c), c(u, ...d)) : h.NODE_ENV !== "production" && E(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(c) {
        return i.mixins.includes(c) ? h.NODE_ENV !== "production" && E(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : i.mixins.push(c), u;
      },
      component(c, d) {
        return h.NODE_ENV !== "production" && Ws(c, i.config), d ? (h.NODE_ENV !== "production" && i.components[c] && E(`Component "${c}" has already been registered in target app.`), i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return h.NODE_ENV !== "production" && Qi(c), d ? (h.NODE_ENV !== "production" && i.directives[c] && E(`Directive "${c}" has already been registered in target app.`), i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, m) {
        if (a)
          h.NODE_ENV !== "production" && E(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && c.__vue_app__ && E(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = u._ceVNode || at(s, r);
          return b.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), h.NODE_ENV !== "production" && (i.reload = () => {
            e(
              wt(b),
              c,
              m
            );
          }), e(b, c, m), a = !0, u._container = c, c.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = b.component, Gl(u, qr)), ps(b.component);
        }
      },
      onUnmount(c) {
        h.NODE_ENV !== "production" && typeof c != "function" && E(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (st(
          l,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, Zl(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && E("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return h.NODE_ENV !== "production" && c in i.provides && E(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = Ut;
        Ut = u;
        try {
          return c();
        } finally {
          Ut = d;
        }
      }
    };
    return u;
  };
}
let Ut = null;
function $a(e, t) {
  if (!ke)
    h.NODE_ENV !== "production" && E("provide() can only be used inside setup().");
  else {
    let n = ke.provides;
    const s = ke.parent && ke.parent.provides;
    s === n && (n = ke.provides = Object.create(s)), n[e] = t;
  }
}
function In(e, t, n = !1) {
  const s = ke || Ne;
  if (s || Ut) {
    const r = Ut ? Ut._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && M(t) ? t.call(s && s.proxy) : t;
    h.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const io = {}, oo = () => Object.create(io), lo = (e) => Object.getPrototypeOf(e) === io;
function Ca(e, t, n, s = !1) {
  const r = {}, i = oo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ao(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  h.NODE_ENV !== "production" && uo(t || {}, r, e), n ? e.props = s ? r : Sl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Va(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ra(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = j(r), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Va(e)) && (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let m = c[d];
        if (fs(e.emitsOptions, m))
          continue;
        const b = t[m];
        if (a)
          if (U(i, m))
            b !== i[m] && (i[m] = b, u = !0);
          else {
            const S = Be(m);
            r[S] = Fs(
              a,
              l,
              S,
              b,
              e,
              !1
            );
          }
        else
          b !== i[m] && (i[m] = b, u = !0);
      }
    }
  } else {
    ao(e, t, r, i) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !U(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yt(d)) === d || !U(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = Fs(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !U(t, d)) && (delete i[d], u = !0);
  }
  u && Ye(e.attrs, "set", ""), h.NODE_ENV !== "production" && uo(t || {}, r, e);
}
function ao(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const u = t[a];
      let c;
      r && U(r, c = Be(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : fs(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
    }
  if (i) {
    const a = j(n), u = l || G;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = Fs(
        r,
        a,
        d,
        u[d],
        e,
        !U(u, d)
      );
    }
  }
  return o;
}
function Fs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = U(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && M(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const c = wn(r);
          s = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === yt(n)) && (s = !0));
  }
  return s;
}
const Aa = /* @__PURE__ */ new WeakMap();
function co(e, t, n = !1) {
  const s = n ? Aa : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let a = !1;
  if (!M(e)) {
    const c = (d) => {
      a = !0;
      const [m, b] = co(d, t, !0);
      pe(o, m), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return Y(e) && s.set(e, Bt), Bt;
  if (P(i))
    for (let c = 0; c < i.length; c++) {
      h.NODE_ENV !== "production" && !ie(i[c]) && E("props must be strings when using array syntax.", i[c]);
      const d = Be(i[c]);
      Pr(d) && (o[d] = G);
    }
  else if (i) {
    h.NODE_ENV !== "production" && !Y(i) && E("invalid props options", i);
    for (const c in i) {
      const d = Be(c);
      if (Pr(d)) {
        const m = i[c], b = o[d] = P(m) || M(m) ? { type: m } : pe({}, m), S = b.type;
        let O = !1, W = !0;
        if (P(S))
          for (let z = 0; z < S.length; ++z) {
            const q = S[z], H = M(q) && q.name;
            if (H === "Boolean") {
              O = !0;
              break;
            } else H === "String" && (W = !1);
          }
        else
          O = M(S) && S.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = O, b[
          1
          /* shouldCastTrue */
        ] = W, (O || U(b, "default")) && l.push(d);
      }
    }
  }
  const u = [o, l];
  return Y(e) && s.set(e, u), u;
}
function Pr(e) {
  return e[0] !== "$" && !sn(e) ? !0 : (h.NODE_ENV !== "production" && E(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Pa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function uo(e, t, n) {
  const s = j(t), r = n.propsOptions[0], i = Object.keys(e).map((o) => Be(o));
  for (const o in r) {
    let l = r[o];
    l != null && Ia(
      o,
      s[o],
      l,
      h.NODE_ENV !== "production" ? et(s) : s,
      !i.includes(o)
    );
  }
}
function Ia(e, t, n, s, r) {
  const { type: i, required: o, validator: l, skipCheck: a } = n;
  if (o && r) {
    E('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (i != null && i !== !0 && !a) {
      let u = !1;
      const c = P(i) ? i : [i], d = [];
      for (let m = 0; m < c.length && !u; m++) {
        const { valid: b, expectedType: S } = La(t, c[m]);
        d.push(S || ""), u = b;
      }
      if (!u) {
        E(ja(e, t, d));
        return;
      }
    }
    l && !l(t, s) && E('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ma = /* @__PURE__ */ ft(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function La(e, t) {
  let n;
  const s = Pa(t);
  if (s === "null")
    n = e === null;
  else if (Ma(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Y(e) : s === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function ja(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(is).join(" | ")}`;
  const r = n[0], i = Js(t), o = Ir(t, r), l = Ir(t, i);
  return n.length === 1 && Mr(r) && !Fa(r, i) && (s += ` with value ${o}`), s += `, got ${i} `, Mr(i) && (s += `with value ${l}.`), s;
}
function Ir(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Mr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const fo = (e) => e[0] === "_" || e === "$stable", ur = (e) => P(e) ? e.map(He) : [He(e)], Ha = (e, t, n) => {
  if (t._n)
    return t;
  const s = na((...r) => (h.NODE_ENV !== "production" && ke && (!n || n.root === ke.root) && E(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ur(t(...r))), n);
  return s._c = !1, s;
}, po = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (fo(r)) continue;
    const i = e[r];
    if (M(i))
      t[r] = Ha(r, i, s);
    else if (i != null) {
      h.NODE_ENV !== "production" && E(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = ur(i);
      t[r] = () => o;
    }
  }
}, ho = (e, t) => {
  h.NODE_ENV !== "production" && !lr(e.vnode) && E(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ur(t);
  e.slots.default = () => n;
}, Hs = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Ba = (e, t, n) => {
  const s = e.slots = oo();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Hs(s, t, n), n && Bn(s, "_", r, !0)) : po(t, s);
  } else t && ho(e, t);
}, za = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = G;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && tt ? (Hs(r, t, n), Ye(e, "set", "$slots")) : n && l === 1 ? i = !1 : Hs(r, t, n) : (i = !t.$stable, po(t, r)), o = t;
  } else t && (ho(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !fo(l) && o[l] == null && delete r[l];
};
let Jt, kt;
function Mt(e, t) {
  e.appContext.config.performance && Jn() && kt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && Xl(e, t, Jn() ? kt.now() : Date.now());
}
function Lt(e, t) {
  if (e.appContext.config.performance && Jn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    kt.mark(s), kt.measure(
      `<${hs(e, e.type)}> ${t}`,
      n,
      s
    ), kt.clearMarks(n), kt.clearMarks(s);
  }
  h.NODE_ENV !== "production" && ea(e, t, Jn() ? kt.now() : Date.now());
}
function Jn() {
  return Jt !== void 0 || (typeof window < "u" && window.performance ? (Jt = !0, kt = window.performance) : Jt = !1), Jt;
}
function Ua() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ve = rc;
function Wa(e) {
  return qa(e);
}
function qa(e, t) {
  Ua();
  const n = bn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Ki(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: m,
    setScopeId: b = be,
    insertStaticContent: S
  } = e, O = (f, p, g, y = null, k = null, _ = null, N = void 0, v = null, x = h.NODE_ENV !== "production" && tt ? !1 : !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Qt(f, p) && (y = On(f), fe(f, k, _, !0), f = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
    const { type: w, ref: I, shapeFlag: D } = p;
    switch (w) {
      case yn:
        W(f, p, g, y);
        break;
      case Pe:
        z(f, p, g, y);
        break;
      case Ln:
        f == null ? q(p, g, y, N) : h.NODE_ENV !== "production" && H(f, p, g, N);
        break;
      case we:
        Pt(
          f,
          p,
          g,
          y,
          k,
          _,
          N,
          v,
          x
        );
        break;
      default:
        D & 1 ? oe(
          f,
          p,
          g,
          y,
          k,
          _,
          N,
          v,
          x
        ) : D & 6 ? vn(
          f,
          p,
          g,
          y,
          k,
          _,
          N,
          v,
          x
        ) : D & 64 || D & 128 ? w.process(
          f,
          p,
          g,
          y,
          k,
          _,
          N,
          v,
          x,
          Kt
        ) : h.NODE_ENV !== "production" && E("Invalid VNode type:", w, `(${typeof w})`);
    }
    I != null && k && Gn(I, f && f.ref, _, p || f, !p);
  }, W = (f, p, g, y) => {
    if (f == null)
      s(
        p.el = l(p.children),
        g,
        y
      );
    else {
      const k = p.el = f.el;
      p.children !== f.children && u(k, p.children);
    }
  }, z = (f, p, g, y) => {
    f == null ? s(
      p.el = a(p.children || ""),
      g,
      y
    ) : p.el = f.el;
  }, q = (f, p, g, y) => {
    [f.el, f.anchor] = S(
      f.children,
      p,
      g,
      y,
      f.el,
      f.anchor
    );
  }, H = (f, p, g, y) => {
    if (p.children !== f.children) {
      const k = m(f.anchor);
      V(f), [p.el, p.anchor] = S(
        p.children,
        g,
        k,
        y
      );
    } else
      p.el = f.el, p.anchor = f.anchor;
  }, ce = ({ el: f, anchor: p }, g, y) => {
    let k;
    for (; f && f !== p; )
      k = m(f), s(f, g, y), f = k;
    s(p, g, y);
  }, V = ({ el: f, anchor: p }) => {
    let g;
    for (; f && f !== p; )
      g = m(f), r(f), f = g;
    r(p);
  }, oe = (f, p, g, y, k, _, N, v, x) => {
    p.type === "svg" ? N = "svg" : p.type === "math" && (N = "mathml"), f == null ? he(
      p,
      g,
      y,
      k,
      _,
      N,
      v,
      x
    ) : je(
      f,
      p,
      k,
      _,
      N,
      v,
      x
    );
  }, he = (f, p, g, y, k, _, N, v) => {
    let x, w;
    const { props: I, shapeFlag: D, transition: R, dirs: L } = f;
    if (x = f.el = o(
      f.type,
      _,
      I && I.is,
      I
    ), D & 8 ? c(x, f.children) : D & 16 && _e(
      f.children,
      x,
      null,
      y,
      k,
      Ns(f, _),
      N,
      v
    ), L && vt(f, null, y, "created"), se(x, f, f.scopeId, N, y), I) {
      for (const X in I)
        X !== "value" && !sn(X) && i(x, X, null, I[X], _, y);
      "value" in I && i(x, "value", null, I.value, _), (w = I.onVnodeBeforeMount) && Ze(w, y, f);
    }
    h.NODE_ENV !== "production" && (Bn(x, "__vnode", f, !0), Bn(x, "__vueParentComponent", y, !0)), L && vt(f, null, y, "beforeMount");
    const B = Ka(k, R);
    B && R.beforeEnter(x), s(x, p, g), ((w = I && I.onVnodeMounted) || B || L) && Ve(() => {
      w && Ze(w, y, f), B && R.enter(x), L && vt(f, null, y, "mounted");
    }, k);
  }, se = (f, p, g, y, k) => {
    if (g && b(f, g), y)
      for (let _ = 0; _ < y.length; _++)
        b(f, y[_]);
    if (k) {
      let _ = k.subTree;
      if (h.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = fr(_.children) || _), p === _ || yo(_.type) && (_.ssContent === p || _.ssFallback === p)) {
        const N = k.vnode;
        se(
          f,
          N,
          N.scopeId,
          N.slotScopeIds,
          k.parent
        );
      }
    }
  }, _e = (f, p, g, y, k, _, N, v, x = 0) => {
    for (let w = x; w < f.length; w++) {
      const I = f[w] = v ? bt(f[w]) : He(f[w]);
      O(
        null,
        I,
        p,
        g,
        y,
        k,
        _,
        N,
        v
      );
    }
  }, je = (f, p, g, y, k, _, N) => {
    const v = p.el = f.el;
    h.NODE_ENV !== "production" && (v.__vnode = p);
    let { patchFlag: x, dynamicChildren: w, dirs: I } = p;
    x |= f.patchFlag & 16;
    const D = f.props || G, R = p.props || G;
    let L;
    if (g && Et(g, !1), (L = R.onVnodeBeforeUpdate) && Ze(L, g, p, f), I && vt(p, f, g, "beforeUpdate"), g && Et(g, !0), h.NODE_ENV !== "production" && tt && (x = 0, N = !1, w = null), (D.innerHTML && R.innerHTML == null || D.textContent && R.textContent == null) && c(v, ""), w ? (Ue(
      f.dynamicChildren,
      w,
      v,
      g,
      y,
      Ns(p, k),
      _
    ), h.NODE_ENV !== "production" && Mn(f, p)) : N || T(
      f,
      p,
      v,
      null,
      g,
      y,
      Ns(p, k),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        $e(v, D, R, g, k);
      else if (x & 2 && D.class !== R.class && i(v, "class", null, R.class, k), x & 4 && i(v, "style", D.style, R.style, k), x & 8) {
        const B = p.dynamicProps;
        for (let X = 0; X < B.length; X++) {
          const J = B[X], Ce = D[J], Se = R[J];
          (Se !== Ce || J === "value") && i(v, J, Ce, Se, k, g);
        }
      }
      x & 1 && f.children !== p.children && c(v, p.children);
    } else !N && w == null && $e(v, D, R, g, k);
    ((L = R.onVnodeUpdated) || I) && Ve(() => {
      L && Ze(L, g, p, f), I && vt(p, f, g, "updated");
    }, y);
  }, Ue = (f, p, g, y, k, _, N) => {
    for (let v = 0; v < p.length; v++) {
      const x = f[v], w = p[v], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(x, w) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? d(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      O(
        x,
        w,
        I,
        null,
        y,
        k,
        _,
        N,
        !0
      );
    }
  }, $e = (f, p, g, y, k) => {
    if (p !== g) {
      if (p !== G)
        for (const _ in p)
          !sn(_) && !(_ in g) && i(
            f,
            _,
            p[_],
            null,
            k,
            y
          );
      for (const _ in g) {
        if (sn(_)) continue;
        const N = g[_], v = p[_];
        N !== v && _ !== "value" && i(f, _, v, N, k, y);
      }
      "value" in g && i(f, "value", p.value, g.value, k);
    }
  }, Pt = (f, p, g, y, k, _, N, v, x) => {
    const w = p.el = f ? f.el : l(""), I = p.anchor = f ? f.anchor : l("");
    let { patchFlag: D, dynamicChildren: R, slotScopeIds: L } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tt || D & 2048) && (D = 0, x = !1, R = null), L && (v = v ? v.concat(L) : L), f == null ? (s(w, g, y), s(I, g, y), _e(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      I,
      k,
      _,
      N,
      v,
      x
    )) : D > 0 && D & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Ue(
      f.dynamicChildren,
      R,
      g,
      k,
      _,
      N,
      v
    ), h.NODE_ENV !== "production" ? Mn(f, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || k && p === k.subTree) && Mn(
        f,
        p,
        !0
        /* shallow */
      )
    )) : T(
      f,
      p,
      g,
      I,
      k,
      _,
      N,
      v,
      x
    );
  }, vn = (f, p, g, y, k, _, N, v, x) => {
    p.slotScopeIds = v, f == null ? p.shapeFlag & 512 ? k.ctx.activate(
      p,
      g,
      y,
      N,
      x
    ) : We(
      p,
      g,
      y,
      k,
      _,
      N,
      x
    ) : ue(f, p, x);
  }, We = (f, p, g, y, k, _, N) => {
    const v = f.component = dc(
      f,
      y,
      k
    );
    if (h.NODE_ENV !== "production" && v.type.__hmrId && Ul(v), h.NODE_ENV !== "production" && (Rn(f), Mt(v, "mount")), lr(f) && (v.ctx.renderer = Kt), h.NODE_ENV !== "production" && Mt(v, "init"), mc(v, !1, N), h.NODE_ENV !== "production" && Lt(v, "init"), v.asyncDep) {
      if (h.NODE_ENV !== "production" && tt && (f.el = null), k && k.registerDep(v, F, N), !f.el) {
        const x = v.subTree = at(Pe);
        z(null, x, p, g);
      }
    } else
      F(
        v,
        f,
        p,
        g,
        k,
        _,
        N
      );
    h.NODE_ENV !== "production" && (An(), Lt(v, "mount"));
  }, ue = (f, p, g) => {
    const y = p.component = f.component;
    if (nc(f, p, g))
      if (y.asyncDep && !y.asyncResolved) {
        h.NODE_ENV !== "production" && Rn(p), $(y, p, g), h.NODE_ENV !== "production" && An();
        return;
      } else
        y.next = p, y.update();
    else
      p.el = f.el, y.vnode = p;
  }, F = (f, p, g, y, k, _, N) => {
    const v = () => {
      if (f.isMounted) {
        let { next: D, bu: R, u: L, parent: B, vnode: X } = f;
        {
          const Ke = mo(f);
          if (Ke) {
            D && (D.el = X.el, $(f, D, N)), Ke.asyncDep.then(() => {
              f.isUnmounted || v();
            });
            return;
          }
        }
        let J = D, Ce;
        h.NODE_ENV !== "production" && Rn(D || f.vnode), Et(f, !1), D ? (D.el = X.el, $(f, D, N)) : D = X, R && jt(R), (Ce = D.props && D.props.onVnodeBeforeUpdate) && Ze(Ce, B, D, X), Et(f, !0), h.NODE_ENV !== "production" && Mt(f, "render");
        const Se = jr(f);
        h.NODE_ENV !== "production" && Lt(f, "render");
        const qe = f.subTree;
        f.subTree = Se, h.NODE_ENV !== "production" && Mt(f, "patch"), O(
          qe,
          Se,
          // parent may have changed if it's in a teleport
          d(qe.el),
          // anchor may have changed if it's in a fragment
          On(qe),
          f,
          k,
          _
        ), h.NODE_ENV !== "production" && Lt(f, "patch"), D.el = Se.el, J === null && sc(f, Se.el), L && Ve(L, k), (Ce = D.props && D.props.onVnodeUpdated) && Ve(
          () => Ze(Ce, B, D, X),
          k
        ), h.NODE_ENV !== "production" && Gi(f), h.NODE_ENV !== "production" && An();
      } else {
        let D;
        const { el: R, props: L } = p, { bm: B, m: X, parent: J, root: Ce, type: Se } = f, qe = ln(p);
        Et(f, !1), B && jt(B), !qe && (D = L && L.onVnodeBeforeMount) && Ze(D, J, p), Et(f, !0);
        {
          Ce.ce && Ce.ce._injectChildStyle(Se), h.NODE_ENV !== "production" && Mt(f, "render");
          const Ke = f.subTree = jr(f);
          h.NODE_ENV !== "production" && Lt(f, "render"), h.NODE_ENV !== "production" && Mt(f, "patch"), O(
            null,
            Ke,
            g,
            y,
            f,
            k,
            _
          ), h.NODE_ENV !== "production" && Lt(f, "patch"), p.el = Ke.el;
        }
        if (X && Ve(X, k), !qe && (D = L && L.onVnodeMounted)) {
          const Ke = p;
          Ve(
            () => Ze(D, J, Ke),
            k
          );
        }
        (p.shapeFlag & 256 || J && ln(J.vnode) && J.vnode.shapeFlag & 256) && f.a && Ve(f.a, k), f.isMounted = !0, h.NODE_ENV !== "production" && Jl(f), p = g = y = null;
      }
    };
    f.scope.on();
    const x = f.effect = new yi(v);
    f.scope.off();
    const w = f.update = x.run.bind(x), I = f.job = x.runIfDirty.bind(x);
    I.i = f, I.id = f.uid, x.scheduler = () => cs(I), Et(f, !0), h.NODE_ENV !== "production" && (x.onTrack = f.rtc ? (D) => jt(f.rtc, D) : void 0, x.onTrigger = f.rtg ? (D) => jt(f.rtg, D) : void 0), w();
  }, $ = (f, p, g) => {
    p.component = f;
    const y = f.vnode.props;
    f.vnode = p, f.next = null, Ra(f, p.props, y, g), za(f, p.children, g), dt(), Sr(f), pt();
  }, T = (f, p, g, y, k, _, N, v, x = !1) => {
    const w = f && f.children, I = f ? f.shapeFlag : 0, D = p.children, { patchFlag: R, shapeFlag: L } = p;
    if (R > 0) {
      if (R & 128) {
        ne(
          w,
          D,
          g,
          y,
          k,
          _,
          N,
          v,
          x
        );
        return;
      } else if (R & 256) {
        C(
          w,
          D,
          g,
          y,
          k,
          _,
          N,
          v,
          x
        );
        return;
      }
    }
    L & 8 ? (I & 16 && qt(w, k, _), D !== w && c(g, D)) : I & 16 ? L & 16 ? ne(
      w,
      D,
      g,
      y,
      k,
      _,
      N,
      v,
      x
    ) : qt(w, k, _, !0) : (I & 8 && c(g, ""), L & 16 && _e(
      D,
      g,
      y,
      k,
      _,
      N,
      v,
      x
    ));
  }, C = (f, p, g, y, k, _, N, v, x) => {
    f = f || Bt, p = p || Bt;
    const w = f.length, I = p.length, D = Math.min(w, I);
    let R;
    for (R = 0; R < D; R++) {
      const L = p[R] = x ? bt(p[R]) : He(p[R]);
      O(
        f[R],
        L,
        g,
        null,
        k,
        _,
        N,
        v,
        x
      );
    }
    w > I ? qt(
      f,
      k,
      _,
      !0,
      !1,
      D
    ) : _e(
      p,
      g,
      y,
      k,
      _,
      N,
      v,
      x,
      D
    );
  }, ne = (f, p, g, y, k, _, N, v, x) => {
    let w = 0;
    const I = p.length;
    let D = f.length - 1, R = I - 1;
    for (; w <= D && w <= R; ) {
      const L = f[w], B = p[w] = x ? bt(p[w]) : He(p[w]);
      if (Qt(L, B))
        O(
          L,
          B,
          g,
          null,
          k,
          _,
          N,
          v,
          x
        );
      else
        break;
      w++;
    }
    for (; w <= D && w <= R; ) {
      const L = f[D], B = p[R] = x ? bt(p[R]) : He(p[R]);
      if (Qt(L, B))
        O(
          L,
          B,
          g,
          null,
          k,
          _,
          N,
          v,
          x
        );
      else
        break;
      D--, R--;
    }
    if (w > D) {
      if (w <= R) {
        const L = R + 1, B = L < I ? p[L].el : y;
        for (; w <= R; )
          O(
            null,
            p[w] = x ? bt(p[w]) : He(p[w]),
            g,
            B,
            k,
            _,
            N,
            v,
            x
          ), w++;
      }
    } else if (w > R)
      for (; w <= D; )
        fe(f[w], k, _, !0), w++;
    else {
      const L = w, B = w, X = /* @__PURE__ */ new Map();
      for (w = B; w <= R; w++) {
        const xe = p[w] = x ? bt(p[w]) : He(p[w]);
        xe.key != null && (h.NODE_ENV !== "production" && X.has(xe.key) && E(
          "Duplicate keys found during update:",
          JSON.stringify(xe.key),
          "Make sure keys are unique."
        ), X.set(xe.key, w));
      }
      let J, Ce = 0;
      const Se = R - B + 1;
      let qe = !1, Ke = 0;
      const Gt = new Array(Se);
      for (w = 0; w < Se; w++) Gt[w] = 0;
      for (w = L; w <= D; w++) {
        const xe = f[w];
        if (Ce >= Se) {
          fe(xe, k, _, !0);
          continue;
        }
        let Ge;
        if (xe.key != null)
          Ge = X.get(xe.key);
        else
          for (J = B; J <= R; J++)
            if (Gt[J - B] === 0 && Qt(xe, p[J])) {
              Ge = J;
              break;
            }
        Ge === void 0 ? fe(xe, k, _, !0) : (Gt[Ge - B] = w + 1, Ge >= Ke ? Ke = Ge : qe = !0, O(
          xe,
          p[Ge],
          g,
          null,
          k,
          _,
          N,
          v,
          x
        ), Ce++);
      }
      const xr = qe ? Ga(Gt) : Bt;
      for (J = xr.length - 1, w = Se - 1; w >= 0; w--) {
        const xe = B + w, Ge = p[xe], vr = xe + 1 < I ? p[xe + 1].el : y;
        Gt[w] === 0 ? O(
          null,
          Ge,
          g,
          vr,
          k,
          _,
          N,
          v,
          x
        ) : qe && (J < 0 || w !== xr[J] ? le(Ge, g, vr, 2) : J--);
      }
    }
  }, le = (f, p, g, y, k = null) => {
    const { el: _, type: N, transition: v, children: x, shapeFlag: w } = f;
    if (w & 6) {
      le(f.component.subTree, p, g, y);
      return;
    }
    if (w & 128) {
      f.suspense.move(p, g, y);
      return;
    }
    if (w & 64) {
      N.move(f, p, g, Kt);
      return;
    }
    if (N === we) {
      s(_, p, g);
      for (let D = 0; D < x.length; D++)
        le(x[D], p, g, y);
      s(f.anchor, p, g);
      return;
    }
    if (N === Ln) {
      ce(f, p, g);
      return;
    }
    if (y !== 2 && w & 1 && v)
      if (y === 0)
        v.beforeEnter(_), s(_, p, g), Ve(() => v.enter(_), k);
      else {
        const { leave: D, delayLeave: R, afterLeave: L } = v, B = () => s(_, p, g), X = () => {
          D(_, () => {
            B(), L && L();
          });
        };
        R ? R(_, B, X) : X();
      }
    else
      s(_, p, g);
  }, fe = (f, p, g, y = !1, k = !1) => {
    const {
      type: _,
      props: N,
      ref: v,
      children: x,
      dynamicChildren: w,
      shapeFlag: I,
      patchFlag: D,
      dirs: R,
      cacheIndex: L
    } = f;
    if (D === -2 && (k = !1), v != null && Gn(v, null, g, f, !0), L != null && (p.renderCache[L] = void 0), I & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const B = I & 1 && R, X = !ln(f);
    let J;
    if (X && (J = N && N.onVnodeBeforeUnmount) && Ze(J, p, f), I & 6)
      Nn(f.component, g, y);
    else {
      if (I & 128) {
        f.suspense.unmount(g, y);
        return;
      }
      B && vt(f, null, p, "beforeUnmount"), I & 64 ? f.type.remove(
        f,
        p,
        g,
        Kt,
        y
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== we || D > 0 && D & 64) ? qt(
        w,
        p,
        g,
        !1,
        !0
      ) : (_ === we && D & 384 || !k && I & 16) && qt(x, p, g), y && Fe(f);
    }
    (X && (J = N && N.onVnodeUnmounted) || B) && Ve(() => {
      J && Ze(J, p, f), B && vt(f, null, p, "unmounted");
    }, g);
  }, Fe = (f) => {
    const { type: p, el: g, anchor: y, transition: k } = f;
    if (p === we) {
      h.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && k && !k.persisted ? f.children.forEach((N) => {
        N.type === Pe ? r(N.el) : Fe(N);
      }) : En(g, y);
      return;
    }
    if (p === Ln) {
      V(f);
      return;
    }
    const _ = () => {
      r(g), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (f.shapeFlag & 1 && k && !k.persisted) {
      const { leave: N, delayLeave: v } = k, x = () => N(g, _);
      v ? v(f.el, _, x) : x();
    } else
      _();
  }, En = (f, p) => {
    let g;
    for (; f !== p; )
      g = m(f), r(f), f = g;
    r(p);
  }, Nn = (f, p, g) => {
    h.NODE_ENV !== "production" && f.type.__hmrId && Wl(f);
    const { bum: y, scope: k, job: _, subTree: N, um: v, m: x, a: w } = f;
    Lr(x), Lr(w), y && jt(y), k.stop(), _ && (_.flags |= 8, fe(N, f, p, g)), v && Ve(v, p), Ve(() => {
      f.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && Yl(f);
  }, qt = (f, p, g, y = !1, k = !1, _ = 0) => {
    for (let N = _; N < f.length; N++)
      fe(f[N], p, g, y, k);
  }, On = (f) => {
    if (f.shapeFlag & 6)
      return On(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = m(f.anchor || f.el), g = p && p[sa];
    return g ? m(g) : p;
  };
  let bs = !1;
  const wr = (f, p, g) => {
    f == null ? p._vnode && fe(p._vnode, null, null, !0) : O(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = f, bs || (bs = !0, Sr(), Ui(), bs = !1);
  }, Kt = {
    p: O,
    um: fe,
    m: le,
    r: Fe,
    mt: We,
    mc: _e,
    pc: T,
    pbc: Ue,
    n: On,
    o: e
  };
  return {
    render: wr,
    hydrate: void 0,
    createApp: Ta(wr)
  };
}
function Ns({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Et({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ka(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mn(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = bt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Mn(o, l)), l.type === yn && (l.el = o.el), h.NODE_ENV !== "production" && l.type === Pe && !l.el && (l.el = o.el);
    }
}
function Ga(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < u ? i = l + 1 : o = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function mo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mo(t);
}
function Lr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Za = Symbol.for("v-scx"), Ja = () => {
  {
    const e = In(Za);
    return e || h.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Os(e, t, n) {
  return h.NODE_ENV !== "production" && !M(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), go(e, t, n);
}
function go(e, t, n = G) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  h.NODE_ENV !== "production" && !t && (s !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = pe({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = E);
  const a = t && s || !t && i !== "post";
  let u;
  if (mn) {
    if (i === "sync") {
      const b = Ja();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!a) {
      const b = () => {
      };
      return b.stop = be, b.resume = be, b.pause = be, b;
    }
  }
  const c = ke;
  l.call = (b, S, O) => st(b, c, S, O);
  let d = !1;
  i === "post" ? l.scheduler = (b) => {
    Ve(b, c && c.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (b, S) => {
    S ? b() : cs(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), d && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const m = Il(e, t, l);
  return mn && (u ? u.push(m) : a && m()), m;
}
function Qa(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? bo(s, e) : () => s[e] : e.bind(s, s);
  let i;
  M(t) ? i = t : (i = t.handler, n = t);
  const o = wn(this), l = go(r, i.bind(s), n);
  return o(), l;
}
function bo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || G;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = e;
    if (c)
      if (!(t in c))
        (!d || !(Nt(Be(t)) in d)) && E(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Nt(Be(t))}" prop.`
        );
      else {
        const m = c[t];
        M(m) && (m(...n) || E(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), o = i && Ya(s, t.slice(7));
  if (o && (o.trim && (r = n.map((c) => ie(c) ? c.trim() : c)), o.number && (r = n.map($s))), h.NODE_ENV !== "production" && ta(e, t, r), h.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && s[Nt(c)] && E(
      `Event "${c}" is emitted in component ${hs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${yt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Nt(t)] || // also try camelCase event handler (#2249)
  s[l = Nt(Be(t))];
  !a && i && (a = s[l = Nt(yt(t))]), a && st(
    a,
    e,
    6,
    r
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, st(
      u,
      e,
      6,
      r
    );
  }
}
function ko(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!M(e)) {
    const a = (u) => {
      const c = ko(u, t, !0);
      c && (l = !0, pe(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Y(e) && s.set(e, null), null) : (P(i) ? i.forEach((a) => o[a] = null) : pe(o, i), Y(e) && s.set(e, o), o);
}
function fs(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, yt(t)) || U(e, t));
}
let Bs = !1;
function Qn() {
  Bs = !0;
}
function jr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: m,
    setupState: b,
    ctx: S,
    inheritAttrs: O
  } = e, W = Kn(e);
  let z, q;
  h.NODE_ENV !== "production" && (Bs = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = r || s, oe = h.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(V, {
        get(he, se, _e) {
          return E(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(he, se, _e);
        }
      }) : V;
      z = He(
        u.call(
          oe,
          V,
          c,
          h.NODE_ENV !== "production" ? et(d) : d,
          b,
          m,
          S
        )
      ), q = l;
    } else {
      const V = t;
      h.NODE_ENV !== "production" && l === d && Qn(), z = He(
        V.length > 1 ? V(
          h.NODE_ENV !== "production" ? et(d) : d,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Qn(), et(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : V(
          h.NODE_ENV !== "production" ? et(d) : d,
          null
        )
      ), q = t.props ? l : ec(l);
    }
  } catch (V) {
    an.length = 0, kn(V, e, 1), z = at(Pe);
  }
  let H = z, ce;
  if (h.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && ([H, ce] = _o(z)), q && O !== !1) {
    const V = Object.keys(q), { shapeFlag: oe } = H;
    if (V.length) {
      if (oe & 7)
        i && V.some(Hn) && (q = tc(
          q,
          i
        )), H = wt(H, q, !1, !0);
      else if (h.NODE_ENV !== "production" && !Bs && H.type !== Pe) {
        const he = Object.keys(l), se = [], _e = [];
        for (let je = 0, Ue = he.length; je < Ue; je++) {
          const $e = he[je];
          gn($e) ? Hn($e) || se.push($e[2].toLowerCase() + $e.slice(3)) : _e.push($e);
        }
        _e.length && E(
          `Extraneous non-props attributes (${_e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), se.length && E(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Fr(H) && E(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = wt(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Fr(H) && E(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), or(H, n.transition)), h.NODE_ENV !== "production" && ce ? ce(H) : z = H, Kn(W), z;
}
const _o = (e) => {
  const t = e.children, n = e.dynamicChildren, s = fr(t, !1);
  if (s) {
    if (h.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return _o(s);
  } else return [e, void 0];
  const r = t.indexOf(s), i = n ? n.indexOf(s) : -1, o = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(s), o];
};
function fr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (ds(r)) {
      if (r.type !== Pe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return fr(n.children);
      }
    } else
      return;
  }
  return n;
}
const ec = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Hn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Fr = (e) => e.shapeFlag & 7 || e.type === Pe;
function nc(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (h.NODE_ENV !== "production" && (r || l) && tt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Hr(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const m = c[d];
        if (o[m] !== s[m] && !fs(u, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Hr(s, o, u) : !0 : !!o;
  return !1;
}
function Hr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !fs(n, i))
      return !0;
  }
  return !1;
}
function sc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const yo = (e) => e.__isSuspense;
function rc(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : zi(e);
}
const we = Symbol.for("v-fgt"), yn = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), Ln = Symbol.for("v-stc"), an = [];
let Ae = null;
function re(e = !1) {
  an.push(Ae = e ? null : []);
}
function ic() {
  an.pop(), Ae = an[an.length - 1] || null;
}
let hn = 1;
function Br(e, t = !1) {
  hn += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function wo(e) {
  return e.dynamicChildren = hn > 0 ? Ae || Bt : null, ic(), hn > 0 && Ae && Ae.push(e), e;
}
function ae(e, t, n, s, r, i) {
  return wo(
    A(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function oc(e, t, n, s, r) {
  return wo(
    at(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function ds(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const lc = (...e) => vo(
  ...e
), xo = ({ key: e }) => e ?? null, jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || de(e) || M(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, s = 0, r = null, i = e === we ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xo(t),
    ref: t && jn(t),
    scopeId: Ji,
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
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return l ? (dr(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && E("VNode created with invalid key (NaN). VNode type:", a.type), hn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const at = h.NODE_ENV !== "production" ? lc : vo;
function vo(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ka) && (h.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), ds(e)) {
    const l = wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && dr(l, n), hn > 0 && !i && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (So(e) && (e = e.__vccOpts), t) {
    t = ac(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = Te(l)), Y(a) && (zn(a) && !P(a) && (a = pe({}, a)), t.style = Ie(a));
  }
  const o = ie(e) ? 1 : yo(e) ? 128 : ra(e) ? 64 : Y(e) ? 4 : M(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && o & 4 && zn(e) && (e = j(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), A(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function ac(e) {
  return e ? zn(e) || lo(e) ? pe({}, e) : e : null;
}
function wt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, u = t ? cc(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && xo(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? P(i) ? i.concat(jn(t)) : [i, jn(t)] : jn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && o === -1 && P(l) ? l.map(Eo) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && or(
    c,
    a.clone(c)
  ), c;
}
function Eo(e) {
  const t = wt(e);
  return P(e.children) && (t.children = e.children.map(Eo)), t;
}
function zs(e = " ", t = 0) {
  return at(yn, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? (re(), oc(Pe, null, e)) : at(Pe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? at(Pe) : P(e) ? at(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ds(e) ? bt(e) : at(yn, null, String(e));
}
function bt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wt(e);
}
function dr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), dr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !lo(t) ? t._ctx = Ne : r === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: Ne }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [zs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function cc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Te([t.class, s.class]));
      else if (r === "style")
        t.style = Ie([t.style, s.style]);
      else if (gn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(P(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ze(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const uc = ro();
let fc = 0;
function dc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || uc, i = {
    uid: fc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new al(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: co(s, r),
    emitsOptions: ko(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
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
  return h.NODE_ENV !== "production" ? i.ctx = _a(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Xa.bind(null, i), e.ce && e.ce(i), i;
}
let ke = null;
const pc = () => ke || Ne;
let Yn, Us;
{
  const e = bn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ke = n
  ), Us = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const wn = (e) => {
  const t = ke;
  return Yn(e), e.scope.on(), () => {
    e.scope.off(), Yn(t);
  };
}, zr = () => {
  ke && ke.scope.off(), Yn(null);
}, hc = /* @__PURE__ */ ft("slot,component");
function Ws(e, { isNativeTag: t }) {
  (hc(e) || t(e)) && E(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function No(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function mc(e, t = !1, n = !1) {
  t && Us(t);
  const { props: s, children: r } = e.vnode, i = No(e);
  Ca(e, s, i, t), Ba(e, r, n);
  const o = i ? gc(e, t) : void 0;
  return t && Us(!1), o;
}
function gc(e, t) {
  var n;
  const s = e.type;
  if (h.NODE_ENV !== "production") {
    if (s.name && Ws(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let o = 0; o < i.length; o++)
        Ws(i[o], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let o = 0; o < i.length; o++)
        Qi(i[o]);
    }
    s.compilerOptions && kc() && E(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to), h.NODE_ENV !== "production" && ya(e);
  const { setup: r } = s;
  if (r) {
    dt();
    const i = e.setupContext = r.length > 1 ? yc(e) : null, o = wn(e), l = Wt(
      r,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? et(e.props) : e.props,
        i
      ]
    ), a = Zs(l);
    if (pt(), o(), (a || e.sp) && !ln(e) && Yi(e), a) {
      if (l.then(zr, zr), t)
        return l.then((u) => {
          Ur(e, u, t);
        }).catch((u) => {
          kn(u, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        E(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ur(e, l, t);
  } else
    Oo(e, t);
}
function Ur(e, t, n) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (h.NODE_ENV !== "production" && ds(t) && E(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Li(t), h.NODE_ENV !== "production" && wa(e)) : h.NODE_ENV !== "production" && t !== void 0 && E(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Oo(e, n);
}
let bc;
const kc = () => !bc;
function Oo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || be);
  {
    const r = wn(e);
    dt();
    try {
      va(e);
    } finally {
      pt(), r();
    }
  }
  h.NODE_ENV !== "production" && !s.render && e.render === be && !t && (s.template ? E(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : E("Component is missing template or render function: ", s));
}
const Wr = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qn(), ge(e, "get", ""), e[t];
  },
  set() {
    return E("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return E("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function _c(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ge(e, "get", "$slots"), t[n];
    }
  });
}
function yc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && E("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (P(n) ? s = "array" : de(n) && (s = "ref")), s !== "object" && E(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Wr));
      },
      get slots() {
        return s || (s = _c(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Wr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ps(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Li(Tl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ct)
        return Ct[n](e);
    },
    has(t, n) {
      return n in t || n in Ct;
    }
  })) : e.proxy;
}
const wc = /(?:^|[-_])(\w)/g, xc = (e) => e.replace(wc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Do(e, t = !0) {
  return M(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hs(e, t, n = !1) {
  let s = Do(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? xc(s) : n ? "App" : "Anonymous";
}
function So(e) {
  return M(e) && "__vccOpts" in e;
}
const vc = (e, t) => {
  const n = Al(e, t, mn);
  if (h.NODE_ENV !== "production") {
    const s = pc();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ec() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(d) {
      return Y(d) ? d.__isVue ? ["div", e, "VueInstance"] : de(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in d ? d._value : d),
        ">"
      ] : Tt(d) ? [
        "div",
        {},
        ["span", e, De(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${ut(d) ? " (readonly)" : ""}`
      ] : ut(d) ? [
        "div",
        {},
        ["span", e, De(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const m = [];
    d.type.props && d.props && m.push(o("props", j(d.props))), d.setupState !== G && m.push(o("setup", d.setupState)), d.data !== G && m.push(o("data", j(d.data)));
    const b = a(d, "computed");
    b && m.push(o("computed", b));
    const S = a(d, "inject");
    return S && m.push(o("injected", S)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), m;
  }
  function o(d, m) {
    return m = pe({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((b) => [
          "div",
          {},
          ["span", s, b + ": "],
          l(m[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, m = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Y(d) ? ["object", { object: m ? j(d) : d }] : ["span", n, String(d)];
  }
  function a(d, m) {
    const b = d.type;
    if (M(b))
      return;
    const S = {};
    for (const O in d.ctx)
      u(b, O, m) && (S[O] = d.ctx[O]);
    return S;
  }
  function u(d, m, b) {
    const S = d[b];
    if (P(S) && S.includes(m) || Y(S) && m in S || d.extends && u(d.extends, m, b) || d.mixins && d.mixins.some((O) => u(O, m, b)))
      return !0;
  }
  function c(d) {
    return De(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const qr = "3.5.13", ct = h.NODE_ENV !== "production" ? E : be;
var rt = {};
let qs;
const Kr = typeof window < "u" && window.trustedTypes;
if (Kr)
  try {
    qs = /* @__PURE__ */ Kr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    rt.NODE_ENV !== "production" && ct(`Error creating trusted types policy: ${e}`);
  }
const To = qs ? (e) => qs.createHTML(e) : (e) => e, Nc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Gr = ot && /* @__PURE__ */ ot.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? ot.createElementNS(Nc, e) : t === "mathml" ? ot.createElementNS(Oc, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Gr.innerHTML = To(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Gr.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Sc = Symbol("_vtc");
function Tc(e, t, n) {
  const s = e[Sc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xn = Symbol("_vod"), $o = Symbol("_vsh"), Co = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Yt(e, !0), s.enter(e)) : s.leave(e, () => {
      Yt(e, !1);
    }) : Yt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yt(e, t);
  }
};
rt.NODE_ENV !== "production" && (Co.name = "show");
function Yt(e, t) {
  e.style.display = t ? e[Xn] : "none", e[$o] = !t;
}
const $c = Symbol(rt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cc = /(^|;)\s*display\s*:/;
function Vc(e, t, n) {
  const s = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Fn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Fn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Fn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[$c];
      o && (n += ";" + o), s.cssText = n, i = Cc.test(n);
    }
  } else t && e.removeAttribute("style");
  Xn in e && (e[Xn] = i ? s.display : "", e[$o] && (s.display = "none"));
}
const Rc = /[^\\];\s*$/, Zr = /\s*!important$/;
function Fn(e, t, n) {
  if (P(n))
    n.forEach((s) => Fn(e, t, s));
  else if (n == null && (n = ""), rt.NODE_ENV !== "production" && Rc.test(n) && ct(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ac(e, t);
    Zr.test(n) ? e.setProperty(
      yt(s),
      n.replace(Zr, ""),
      "important"
    ) : e[s] = n;
  }
}
const Jr = ["Webkit", "Moz", "ms"], Ds = {};
function Ac(e, t) {
  const n = Ds[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Ds[t] = s;
  s = is(s);
  for (let r = 0; r < Jr.length; r++) {
    const i = Jr[r] + s;
    if (i in e)
      return Ds[t] = i;
  }
  return t;
}
const Qr = "http://www.w3.org/1999/xlink";
function Yr(e, t, n, s, r, i = ll(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qr, t.slice(6, t.length)) : e.setAttributeNS(Qr, t, n) : n == null || i && !bi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : xt(n) ? String(n) : n
  );
}
function Xr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? To(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = bi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    rt.NODE_ENV !== "production" && !o && ct(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  o && e.removeAttribute(r || t);
}
function Ht(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ei = Symbol("_vei");
function Ic(e, t, n, s, r = null) {
  const i = e[ei] || (e[ei] = {}), o = i[t];
  if (s && o)
    o.value = rt.NODE_ENV !== "production" ? ni(s, t) : s;
  else {
    const [l, a] = Mc(t);
    if (s) {
      const u = i[t] = Fc(
        rt.NODE_ENV !== "production" ? ni(s, t) : s,
        r
      );
      Ht(e, l, u, a);
    } else o && (Pc(e, l, o, a), i[t] = void 0);
  }
}
const ti = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (ti.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ti); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let Ss = 0;
const Lc = /* @__PURE__ */ Promise.resolve(), jc = () => Ss || (Lc.then(() => Ss = 0), Ss = Date.now());
function Fc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    st(
      Hc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function ni(e, t) {
  return M(e) || P(e) ? e : (ct(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), be);
}
function Hc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const si = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Tc(e, s, o) : t === "style" ? Vc(e, n, s) : gn(t) ? Hn(t) || Ic(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zc(e, t, s, o)) ? (Xr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yr(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? Xr(e, Be(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Yr(e, t, s, o));
};
function zc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && si(t) && M(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return si(t) && ie(n) ? !1 : t in e;
}
const ri = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (n) => jt(t, n) : t;
};
function Uc(e) {
  e.target.composing = !0;
}
function ii(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ts = Symbol("_assign"), Wc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Ts] = ri(r);
    const i = s || r.props && r.props.type === "number";
    Ht(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = $s(l)), e[Ts](l);
    }), n && Ht(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ht(e, "compositionstart", Uc), Ht(e, "compositionend", ii), Ht(e, "change", ii));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Ts] = ri(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? $s(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, qc = /* @__PURE__ */ pe({ patchProp: Bc }, Dc);
let oi;
function Kc() {
  return oi || (oi = Wa(qc));
}
const Gc = (...e) => {
  const t = Kc().createApp(...e);
  rt.NODE_ENV !== "production" && (Jc(t), Qc(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = Yc(s);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Zc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function Zc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => sl(t) || rl(t) || il(t),
    writable: !1
  });
}
function Qc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ct(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ct(s), n;
      },
      set() {
        ct(s);
      }
    });
  }
}
function Yc(e) {
  if (ie(e)) {
    const t = document.querySelector(e);
    return rt.NODE_ENV !== "production" && !t && ct(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return rt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ct(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Xc = {};
function eu() {
  Ec();
}
Xc.NODE_ENV !== "production" && eu();
function pr() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let At = pr();
function Vo(e) {
  At = e;
}
const cn = { exec: () => null };
function Q(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(Oe.caret, "$1"), n = n.replace(r, o), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
}
const Oe = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, tu = /^(?:[ \t]*(?:\n|$))+/, nu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, su = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, xn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ru = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ro = /(?:[*+-]|\d{1,9}[.)])/, Ao = Q(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ro).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), hr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, iu = /^[^\n]+/, mr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ou = Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", mr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), lu = Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ro).getRegex(), ms = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", gr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, au = Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", gr).replace("tag", ms).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Po = Q(hr).replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ms).getRegex(), cu = Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Po).getRegex(), br = {
  blockquote: cu,
  code: nu,
  def: ou,
  fences: su,
  heading: ru,
  hr: xn,
  html: au,
  lheading: Ao,
  list: lu,
  newline: tu,
  paragraph: Po,
  table: cn,
  text: iu
}, li = Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ms).getRegex(), uu = {
  ...br,
  table: li,
  paragraph: Q(hr).replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", li).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ms).getRegex()
}, fu = {
  ...br,
  html: Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", gr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: cn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Q(hr).replace("hr", xn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ao).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, du = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Io = /^( {2,}|\\)\n(?!\s*$)/, hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, gs = /[\p{P}\p{S}]/u, kr = /[\s\p{P}\p{S}]/u, Mo = /[^\s\p{P}\p{S}]/u, mu = Q(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, kr).getRegex(), Lo = /(?!~)[\p{P}\p{S}]/u, gu = /(?!~)[\s\p{P}\p{S}]/u, bu = /(?:[^\s\p{P}\p{S}]|~)/u, ku = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, jo = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, _u = Q(jo, "u").replace(/punct/g, gs).getRegex(), yu = Q(jo, "u").replace(/punct/g, Lo).getRegex(), Fo = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", wu = Q(Fo, "gu").replace(/notPunctSpace/g, Mo).replace(/punctSpace/g, kr).replace(/punct/g, gs).getRegex(), xu = Q(Fo, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, gu).replace(/punct/g, Lo).getRegex(), vu = Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Mo).replace(/punctSpace/g, kr).replace(/punct/g, gs).getRegex(), Eu = Q(/\\(punct)/, "gu").replace(/punct/g, gs).getRegex(), Nu = Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ou = Q(gr).replace("(?:-->|$)", "-->").getRegex(), Du = Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ou).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), es = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Su = Q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", es).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ho = Q(/^!?\[(label)\]\[(ref)\]/).replace("label", es).replace("ref", mr).getRegex(), Bo = Q(/^!?\[(ref)\](?:\[\])?/).replace("ref", mr).getRegex(), Tu = Q("reflink|nolink(?!\\()", "g").replace("reflink", Ho).replace("nolink", Bo).getRegex(), _r = {
  _backpedal: cn,
  // only used for GFM url
  anyPunctuation: Eu,
  autolink: Nu,
  blockSkip: ku,
  br: Io,
  code: pu,
  del: cn,
  emStrongLDelim: _u,
  emStrongRDelimAst: wu,
  emStrongRDelimUnd: vu,
  escape: du,
  link: Su,
  nolink: Bo,
  punctuation: mu,
  reflink: Ho,
  reflinkSearch: Tu,
  tag: Du,
  text: hu,
  url: cn
}, $u = {
  ..._r,
  link: Q(/^!?\[(label)\]\((.*?)\)/).replace("label", es).getRegex(),
  reflink: Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", es).getRegex()
}, Ks = {
  ..._r,
  emStrongRDelimAst: xu,
  emStrongLDelim: yu,
  url: Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Cu = {
  ...Ks,
  br: Q(Io).replace("{2,}", "*").getRegex(),
  text: Q(Ks.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Cn = {
  normal: br,
  gfm: uu,
  pedantic: fu
}, Xt = {
  normal: _r,
  gfm: Ks,
  breaks: Cu,
  pedantic: $u
}, Vu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ai = (e) => Vu[e];
function Je(e, t) {
  if (t) {
    if (Oe.escapeTest.test(e))
      return e.replace(Oe.escapeReplace, ai);
  } else if (Oe.escapeTestNoEncode.test(e))
    return e.replace(Oe.escapeReplaceNoEncode, ai);
  return e;
}
function ci(e) {
  try {
    e = encodeURI(e).replace(Oe.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ui(e, t) {
  var i;
  const n = e.replace(Oe.findPipe, (o, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(Oe.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((i = s.at(-1)) != null && i.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; )
        s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(Oe.slashPipe, "|");
  return s;
}
function en(e, t, n) {
  const s = e.length;
  if (s === 0)
    return "";
  let r = 0;
  for (; r < s && e.charAt(s - r - 1) === t; )
    r++;
  return e.slice(0, s - r);
}
function Ru(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    if (e[s] === "\\")
      s++;
    else if (e[s] === t[0])
      n++;
    else if (e[s] === t[1] && (n--, n < 0))
      return s;
  return -1;
}
function fi(e, t, n, s, r) {
  const i = t.href, o = t.title || null, l = e[1].replace(r.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: i,
      title: o,
      text: l,
      tokens: s.inlineTokens(l)
    };
    return s.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: i,
    title: o,
    text: l
  };
}
function Au(e, t, n) {
  const s = e.match(n.other.indentCodeCompensation);
  if (s === null)
    return t;
  const r = s[1];
  return t.split(`
`).map((i) => {
    const o = i.match(n.other.beginningSpace);
    if (o === null)
      return i;
    const [l] = o;
    return l.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
class ts {
  // set by the lexer
  constructor(t) {
    ee(this, "options");
    ee(this, "rules");
    // set by the lexer
    ee(this, "lexer");
    this.options = t || At;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const s = n[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : en(s, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const s = n[0], r = Au(s, n[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: r
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let s = n[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const r = en(s, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (s = r.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return {
        type: "hr",
        raw: en(n[0], `
`)
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let s = en(n[0], `
`).split(`
`), r = "", i = "";
      const o = [];
      for (; s.length > 0; ) {
        let l = !1;
        const a = [];
        let u;
        for (u = 0; u < s.length; u++)
          if (this.rules.other.blockquoteStart.test(s[u]))
            a.push(s[u]), l = !0;
          else if (!l)
            a.push(s[u]);
          else
            break;
        s = s.slice(u);
        const c = a.join(`
`), d = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, i = i ? `${i}
${d}` : d;
        const m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, o, !0), this.lexer.state.top = m, s.length === 0)
          break;
        const b = o.at(-1);
        if ((b == null ? void 0 : b.type) === "code")
          break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          const S = b, O = S.raw + `
` + s.join(`
`), W = this.blockquote(O);
          o[o.length - 1] = W, r = r.substring(0, r.length - S.raw.length) + W.raw, i = i.substring(0, i.length - S.text.length) + W.text;
          break;
        } else if ((b == null ? void 0 : b.type) === "list") {
          const S = b, O = S.raw + `
` + s.join(`
`), W = this.list(O);
          o[o.length - 1] = W, r = r.substring(0, r.length - b.raw.length) + W.raw, i = i.substring(0, i.length - S.raw.length) + W.raw, s = O.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: o,
        text: i
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let s = n[1].trim();
      const r = s.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = r ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = r ? s : "[*+-]");
      const o = this.rules.other.listItemRegex(s);
      let l = !1;
      for (; t; ) {
        let u = !1, c = "", d = "";
        if (!(n = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = n[0], t = t.substring(c.length);
        let m = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (q) => " ".repeat(3 * q.length)), b = t.split(`
`, 1)[0], S = !m.trim(), O = 0;
        if (this.options.pedantic ? (O = 2, d = m.trimStart()) : S ? O = n[1].length + 1 : (O = n[2].search(this.rules.other.nonSpaceChar), O = O > 4 ? 1 : O, d = m.slice(O), O += n[1].length), S && this.rules.other.blankLine.test(b) && (c += b + `
`, t = t.substring(b.length + 1), u = !0), !u) {
          const q = this.rules.other.nextBulletRegex(O), H = this.rules.other.hrRegex(O), ce = this.rules.other.fencesBeginRegex(O), V = this.rules.other.headingBeginRegex(O), oe = this.rules.other.htmlBeginRegex(O);
          for (; t; ) {
            const he = t.split(`
`, 1)[0];
            let se;
            if (b = he, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), se = b) : se = b.replace(this.rules.other.tabCharGlobal, "    "), ce.test(b) || V.test(b) || oe.test(b) || q.test(b) || H.test(b))
              break;
            if (se.search(this.rules.other.nonSpaceChar) >= O || !b.trim())
              d += `
` + se.slice(O);
            else {
              if (S || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ce.test(m) || V.test(m) || H.test(m))
                break;
              d += `
` + b;
            }
            !S && !b.trim() && (S = !0), c += he + `
`, t = t.substring(he.length + 1), m = se.slice(O);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let W = null, z;
        this.options.gfm && (W = this.rules.other.listIsTask.exec(d), W && (z = W[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!W,
          checked: z,
          loose: !1,
          text: d,
          tokens: []
        }), i.raw += c;
      }
      const a = i.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let u = 0; u < i.items.length; u++)
        if (this.lexer.state.top = !1, i.items[u].tokens = this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
          const c = i.items[u].tokens.filter((m) => m.type === "space"), d = c.length > 0 && c.some((m) => this.rules.other.anyLine.test(m.raw));
          i.loose = d;
        }
      if (i.loose)
        for (let u = 0; u < i.items.length; u++)
          i.items[u].loose = !0;
      return i;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const s = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: s,
        raw: n[0],
        href: r,
        title: i
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const s = ui(n[1]), r = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === r.length) {
      for (const a of r)
        this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < s.length; a++)
        o.header.push({
          text: s[a],
          tokens: this.lexer.inline(s[a]),
          header: !0,
          align: o.align[a]
        });
      for (const a of i)
        o.rows.push(ui(a, o.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: o.align[c]
        })));
      return o;
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const s = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: n[1]
      };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0]
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const s = n[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s))
          return;
        const o = en(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Ru(n[2], "()");
        if (o > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + o;
          n[2] = n[2].substring(0, o), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let r = n[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = n[3] ? n[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), fi(n, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const r = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = n[r.toLowerCase()];
      if (!i) {
        const o = s[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return fi(s, i, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, s = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && s.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(r[1] || r[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...r[0]].length - 1;
      let l, a, u = o, c = 0;
      const d = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, n = n.slice(-1 * t.length + o); (r = d.exec(n)) != null; ) {
        if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l)
          continue;
        if (a = [...l].length, r[3] || r[4]) {
          u += a;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const m = [...r[0]][0].length, b = t.slice(0, o + r.index + m + a);
        if (Math.min(o, a) % 2) {
          const O = b.slice(1, -1);
          return {
            type: "em",
            raw: b,
            text: O,
            tokens: this.lexer.inlineTokens(O)
          };
        }
        const S = b.slice(2, -2);
        return {
          type: "strong",
          raw: b,
          text: S,
          tokens: this.lexer.inlineTokens(S)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let s = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(s), i = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return r && i && (s = s.substring(1, s.length - 1)), {
        type: "codespan",
        raw: n[0],
        text: s
      };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let s, r;
      return n[2] === "@" ? (s = n[1], r = "mailto:" + s) : (s = n[1], r = s), {
        type: "link",
        raw: n[0],
        text: s,
        href: r,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  url(t) {
    var s;
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let r, i;
      if (n[2] === "@")
        r = n[0], i = "mailto:" + r;
      else {
        let o;
        do
          o = n[0], n[0] = ((s = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : s[0]) ?? "";
        while (o !== n[0]);
        r = n[0], n[1] === "www." ? i = "http://" + n[0] : i = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: r,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      const s = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        escaped: s
      };
    }
  }
}
class Me {
  constructor(t) {
    ee(this, "tokens");
    ee(this, "options");
    ee(this, "state");
    ee(this, "tokenizer");
    ee(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || At, this.options.tokenizer = this.options.tokenizer || new ts(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Oe,
      block: Cn.normal,
      inline: Xt.normal
    };
    this.options.pedantic ? (n.block = Cn.pedantic, n.inline = Xt.pedantic) : this.options.gfm && (n.block = Cn.gfm, this.options.breaks ? n.inline = Xt.breaks : n.inline = Xt.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Cn,
      inline: Xt
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new Me(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new Me(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Oe.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, i, o;
    for (this.options.pedantic && (t = t.replace(Oe.tabCharGlobal, "    ").replace(Oe.spaceLine, "")); t; ) {
      let l;
      if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
        continue;
      if (l = this.tokenizer.space(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        l.raw.length === 1 && u !== void 0 ? u.raw += `
` : n.push(l);
        continue;
      }
      if (l = this.tokenizer.code(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (l = this.tokenizer.fences(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.heading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.hr(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.blockquote(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.list(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.html(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.def(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
          href: l.href,
          title: l.title
        });
        continue;
      }
      if (l = this.tokenizer.table(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.lheading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      let a = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let u = 1 / 0;
        const c = t.slice(1);
        let d;
        this.options.extensions.startBlock.forEach((m) => {
          d = m.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
        }), u < 1 / 0 && u >= 0 && (a = t.substring(0, u + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(a))) {
        const u = n.at(-1);
        s && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l), s = a.length !== t.length, t = t.substring(l.raw.length);
        continue;
      }
      if (l = this.tokenizer.text(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (t) {
        const u = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else
          throw new Error(u);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    var l, a, u;
    let s = t, r = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i = !1, o = "";
    for (; t; ) {
      i || (o = ""), i = !1;
      let c;
      if ((a = (l = this.options.extensions) == null ? void 0 : l.inline) != null && a.some((m) => (c = m.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.link(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(c.raw.length);
        const m = n.at(-1);
        c.type === "text" && (m == null ? void 0 : m.type) === "text" ? (m.raw += c.raw, m.text += c.text) : n.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(t, s, o)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.br(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.del(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(t))) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      let d = t;
      if ((u = this.options.extensions) != null && u.startInline) {
        let m = 1 / 0;
        const b = t.slice(1);
        let S;
        this.options.extensions.startInline.forEach((O) => {
          S = O.call({ lexer: this }, b), typeof S == "number" && S >= 0 && (m = Math.min(m, S));
        }), m < 1 / 0 && m >= 0 && (d = t.substring(0, m + 1));
      }
      if (c = this.tokenizer.inlineText(d)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)), i = !0;
        const m = n.at(-1);
        (m == null ? void 0 : m.type) === "text" ? (m.raw += c.raw, m.text += c.text) : n.push(c);
        continue;
      }
      if (t) {
        const m = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(m);
          break;
        } else
          throw new Error(m);
      }
    }
    return n;
  }
}
class ns {
  // set by the parser
  constructor(t) {
    ee(this, "options");
    ee(this, "parser");
    this.options = t || At;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: s }) {
    var o;
    const r = (o = (n || "").match(Oe.notSpaceStart)) == null ? void 0 : o[0], i = t.replace(Oe.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Je(r) + '">' + (s ? i : Je(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : Je(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: n }) {
    return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const n = t.ordered, s = t.start;
    let r = "";
    for (let l = 0; l < t.items.length; l++) {
      const a = t.items[l];
      r += this.listitem(a);
    }
    const i = n ? "ol" : "ul", o = n && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + i + o + `>
` + r + "</" + i + `>
`;
  }
  listitem(t) {
    var s;
    let n = "";
    if (t.task) {
      const r = this.checkbox({ checked: !!t.checked });
      t.loose ? ((s = t.tokens[0]) == null ? void 0 : s.type) === "paragraph" ? (t.tokens[0].text = r + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = r + " " + Je(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: r + " ",
        text: r + " ",
        escaped: !0
      }) : n += r + " ";
    }
    return n += this.parser.parse(t.tokens, !!t.loose), `<li>${n}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let n = "", s = "";
    for (let i = 0; i < t.header.length; i++)
      s += this.tablecell(t.header[i]);
    n += this.tablerow({ text: s });
    let r = "";
    for (let i = 0; i < t.rows.length; i++) {
      const o = t.rows[i];
      s = "";
      for (let l = 0; l < o.length; l++)
        s += this.tablecell(o[l]);
      r += this.tablerow({ text: s });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const n = this.parser.parseInline(t.tokens), s = t.header ? "th" : "td";
    return (t.align ? `<${s} align="${t.align}">` : `<${s}>`) + n + `</${s}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Je(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: s }) {
    const r = this.parser.parseInline(s), i = ci(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return n && (o += ' title="' + Je(n) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: n, text: s }) {
    const r = ci(t);
    if (r === null)
      return Je(s);
    t = r;
    let i = `<img src="${t}" alt="${s}"`;
    return n && (i += ` title="${Je(n)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Je(t.text);
  }
}
class yr {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}
class Le {
  constructor(t) {
    ee(this, "options");
    ee(this, "renderer");
    ee(this, "textRenderer");
    this.options = t || At, this.options.renderer = this.options.renderer || new ns(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new yr();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new Le(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new Le(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[l.type]) {
        const u = l, c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          s += c || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "space": {
          s += this.renderer.space(a);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(a);
          continue;
        }
        case "code": {
          s += this.renderer.code(a);
          continue;
        }
        case "table": {
          s += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          s += this.renderer.list(a);
          continue;
        }
        case "html": {
          s += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let u = a, c = this.renderer.text(u);
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            u = t[++o], c += `
` + this.renderer.text(u);
          n ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : s += c;
          continue;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[l.type]) {
        const u = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          s += u || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "escape": {
          s += n.text(a);
          break;
        }
        case "html": {
          s += n.html(a);
          break;
        }
        case "link": {
          s += n.link(a);
          break;
        }
        case "image": {
          s += n.image(a);
          break;
        }
        case "strong": {
          s += n.strong(a);
          break;
        }
        case "em": {
          s += n.em(a);
          break;
        }
        case "codespan": {
          s += n.codespan(a);
          break;
        }
        case "br": {
          s += n.br(a);
          break;
        }
        case "del": {
          s += n.del(a);
          break;
        }
        case "text": {
          s += n.text(a);
          break;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return s;
  }
}
class un {
  constructor(t) {
    ee(this, "options");
    ee(this, "block");
    this.options = t || At;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Me.lex : Me.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Le.parse : Le.parseInline;
  }
}
ee(un, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Pu {
  constructor(...t) {
    ee(this, "defaults", pr());
    ee(this, "options", this.setOptions);
    ee(this, "parse", this.parseMarkdown(!0));
    ee(this, "parseInline", this.parseMarkdown(!1));
    ee(this, "Parser", Le);
    ee(this, "Renderer", ns);
    ee(this, "TextRenderer", yr);
    ee(this, "Lexer", Me);
    ee(this, "Tokenizer", ts);
    ee(this, "Hooks", un);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var r, i;
    let s = [];
    for (const o of t)
      switch (s = s.concat(n.call(this, o)), o.type) {
        case "table": {
          const l = o;
          for (const a of l.header)
            s = s.concat(this.walkTokens(a.tokens, n));
          for (const a of l.rows)
            for (const u of a)
              s = s.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = o;
          s = s.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = o;
          (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
            const u = l[a].flat(1 / 0);
            s = s.concat(this.walkTokens(u, n));
          }) : l.tokens && (s = s.concat(this.walkTokens(l.tokens, n)));
        }
      }
    return s;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((s) => {
      const r = { ...s };
      if (r.async = this.defaults.async || r.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const o = n.renderers[i.name];
          o ? n.renderers[i.name] = function(...l) {
            let a = i.renderer.apply(this, l);
            return a === !1 && (a = o.apply(this, l)), a;
          } : n.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = n[i.level];
          o ? o.unshift(i.tokenizer) : n[i.level] = [i.tokenizer], i.start && (i.level === "block" ? n.startBlock ? n.startBlock.push(i.start) : n.startBlock = [i.start] : i.level === "inline" && (n.startInline ? n.startInline.push(i.start) : n.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (n.childTokens[i.name] = i.childTokens);
      }), r.extensions = n), s.renderer) {
        const i = this.defaults.renderer || new ns(this.defaults);
        for (const o in s.renderer) {
          if (!(o in i))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const l = o, a = s.renderer[l], u = i[l];
          i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d || "";
          };
        }
        r.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new ts(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in i))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, a = s.tokenizer[l], u = i[l];
          i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
          };
        }
        r.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new un();
        for (const o in s.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, a = s.hooks[l], u = i[l];
          un.passThroughHooks.has(o) ? i[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(i, c)).then((m) => u.call(i, m));
            const d = a.call(i, c);
            return u.call(i, d);
          } : i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
          };
        }
        r.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens, o = s.walkTokens;
        r.walkTokens = function(l) {
          let a = [];
          return a.push(o.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return Me.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return Le.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (s, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const a = o.hooks ? o.hooks.provideLexer() : t ? Me.lex : Me.lexInline, u = o.hooks ? o.hooks.provideParser() : t ? Le.parse : Le.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((c) => a(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => u(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(l);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let c = a(s, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let d = u(c, o);
        return o.hooks && (d = o.hooks.postprocess(d)), d;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, n) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + Je(s.message + "", !0) + "</pre>";
        return n ? Promise.resolve(r) : r;
      }
      if (n)
        return Promise.reject(s);
      throw s;
    };
  }
}
const Rt = new Pu();
function Z(e, t) {
  return Rt.parse(e, t);
}
Z.options = Z.setOptions = function(e) {
  return Rt.setOptions(e), Z.defaults = Rt.defaults, Vo(Z.defaults), Z;
};
Z.getDefaults = pr;
Z.defaults = At;
Z.use = function(...e) {
  return Rt.use(...e), Z.defaults = Rt.defaults, Vo(Z.defaults), Z;
};
Z.walkTokens = function(e, t) {
  return Rt.walkTokens(e, t);
};
Z.parseInline = Rt.parseInline;
Z.Parser = Le;
Z.parser = Le.parse;
Z.Renderer = ns;
Z.TextRenderer = yr;
Z.Lexer = Me;
Z.lexer = Me.lex;
Z.Tokenizer = ts;
Z.Hooks = un;
Z.parse = Z;
Z.options;
Z.setOptions;
Z.use;
Z.walkTokens;
Z.parseInline;
Le.parse;
Me.lex;
const Iu = { class: "pskbdllm-chat-widget" }, Mu = {
  key: 0,
  class: "pskbdllm-fixed pskbdllm-bottom-4 pskbdllm-right-4 pskbdllm-p-4"
}, Lu = { class: "pskbdllm-hidden pskbdllm-md:inline pskbdllm-font-medium" }, ju = { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-space-x-3" }, Fu = { class: "pskbdllm-relative" }, Hu = { class: "pskbdllm-w-10 pskbdllm-h-10 pskbdllm-rounded-full pskbdllm-bg-white/10 pskbdllm-flex pskbdllm-items-center pskbdllm-justify-center" }, Bu = ["src"], zu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "pskbdllm-h-6 pskbdllm-w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Uu = { class: "pskbdllm-font-semibold pskbdllm-text-lg" }, Wu = {
  key: 0,
  class: "pskbdllm-transfer-separator pskbdllm-flex pskbdllm-items-center pskbdllm-justify-center pskbdllm-my-6 pskbdllm-mx-4"
}, qu = ["innerHTML"], Ku = { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5" }, Gu = ["src", "onTimeupdate", "onLoadedmetadata", "onEnded"], Zu = ["onClick"], Ju = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Qu = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Yu = {
  key: 0,
  class: "pskbdllm-flex pskbdllm-items-center pskbdllm-space-x-2 pskbdllm-p-4 pskbdllm-bg-white pskbdllm-rounded-2xl pskbdllm-w-fit pskbdllm-shadow-sm pskbdllm-border pskbdllm-border-gray-100 pskbdllm-animate-fade-in"
}, Xu = { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-space-x-2" }, ef = { class: "pskbdllm-flex-1 pskbdllm-relative" }, tf = ["placeholder", "disabled"], nf = {
  key: 0,
  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5"
}, sf = { class: "pskbdllm-processing-indicator-container" }, rf = {
  key: 1,
  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5"
}, of = { class: "pskbdllm-recording-wave-container" }, lf = ["disabled"], af = ["disabled"], cf = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "pskbdllm-h-5 pskbdllm-w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, uf = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "pskbdllm-h-5 pskbdllm-w-5 pskbdllm-animate-spin",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, ff = /* @__PURE__ */ ia({
  __name: "ChatWidgetNoTW",
  props: {
    botId: {},
    apiKey: {}
  },
  setup(e) {
    Z.use({
      gfm: !0,
      breaks: !0
    });
    const t = e, n = me(!1), s = me(""), r = me(null), i = me(!1), o = me(!1), l = me(window.innerWidth < 768), a = me(), u = me(""), c = me(), d = me([]), m = me(null), b = me(!1), S = me([]), O = me(window.speechSynthesis), W = me([]), z = me(null), q = me([]), H = me(!1), ce = me(!1), V = async () => {
      const $ = {
        userAgent: navigator.userAgent,
        browserLanguage: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        isOnline: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
      return c.value = $, $;
    }, oe = async () => {
      var $, T;
      try {
        H.value = !0;
        const ne = await (await fetch(
          `https://api.dev.kb.promptstudio.dev/chatbot/${t.botId}/widget-config`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        )).json();
        a.value = {
          company: ne.company,
          iconUrl: ne.iconUrl,
          welcomeMessage: ne.welcomeMessage,
          colors: {
            primary: ($ = ne.colors) == null ? void 0 : $.primary,
            secondary: (T = ne.colors) == null ? void 0 : T.secondary
          },
          isTransferable: ne.isTransferable,
          showTransfer: ne.showTransfer ?? !0
        }, d.value = [
          {
            id: "1",
            content: a.value.welcomeMessage,
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date(),
            isPlaying: !1
          }
        ];
      } catch (C) {
        console.warn(
          "Failed to fetch bot configuration, using defaults:",
          C
        );
      } finally {
        H.value = !1;
      }
    }, he = () => {
      l.value = window.innerWidth < 768;
    }, se = () => {
      O.value && (W.value = O.value.getVoices());
    }, _e = ($) => {
      const T = d.value.findIndex(
        (C) => C.audioId === $.audioId
      );
      if (T !== -1 && q.value[T]) {
        const C = q.value[T];
        d.value.forEach((ne, le) => {
          if (ne.audioId && le !== T) {
            const fe = q.value[le];
            fe && !fe.paused && (fe.pause(), ne.isAudioPlaying = !1, ne.audioProgress = fe.currentTime / fe.duration * 100);
          }
        }), C.paused ? (C.play(), $.isAudioPlaying = !0) : (C.pause(), $.isAudioPlaying = !1);
      }
    }, je = ($, T) => {
      const C = T.target;
      $.audioProgress = C.currentTime / C.duration * 100, $.audioDuration = C.currentTime;
    }, Ue = ($, T) => {
      const C = T.target;
      $.audioDuration = C.duration;
    }, $e = ($) => {
      $.isAudioPlaying = !1, $.audioProgress = 0;
    }, Pt = async () => {
      try {
        O.value && z.value && (O.value.cancel(), z.value = null, d.value.forEach((T) => T.isPlaying = !1));
        const $ = await navigator.mediaDevices.getUserMedia({
          audio: !0
        });
        m.value = new MediaRecorder($), S.value = [], b.value = !0, m.value.ondataavailable = (T) => {
          S.value.push(T.data);
        }, m.value.onstop = async () => {
          const T = new Blob(S.value, {
            type: "audio/wav"
          });
          await We(T), b.value = !1, $.getTracks().forEach((C) => C.stop());
        }, m.value.start();
      } catch ($) {
        console.error("Error accessing microphone:", $), b.value = !1;
      }
    }, vn = () => {
      m.value && b.value && m.value.stop();
    }, We = async ($) => {
      try {
        o.value = !0;
        const T = Date.now(), C = new File([$], `recording_${T}.wav`, {
          type: "audio/wav"
        }), ne = new FormData();
        ne.append("file", C), ne.append("chatbot_id", t.botId);
        const le = await fetch(
          "https://api.dev.kb.promptstudio.dev/audio/process",
          {
            method: "POST",
            headers: {
              accept: "application/json"
            },
            body: ne
          }
        );
        if (!le.ok)
          throw new Error("Failed to process audio");
        const fe = await le.json();
        s.value = fe.text;
        const Fe = fe.audioUrl;
        await F(Fe);
      } catch (T) {
        console.error("Error processing audio:", T), d.value.push({
          id: Date.now().toString(),
          content: "Sorry, I could not process the audio. Please try again.",
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        }), await ue();
      } finally {
        o.value = !1;
      }
    }, ue = async () => {
      await Hi(), r.value && (r.value.scrollTop = r.value.scrollHeight);
    }, F = async ($) => {
      var C;
      $ instanceof Event && $.preventDefault();
      const T = typeof $ == "string" ? $ : void 0;
      if (s.value.trim() && !i.value) {
        const ne = s.value.trim(), le = {
          id: Date.now().toString(),
          content: ne,
          sender: "user",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1,
          audioUrl: T,
          audioId: T ? `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : void 0
        };
        d.value.push(le), s.value = "", i.value = !0, await ue();
        try {
          const Fe = await (await fetch(
            "https://api.dev.kb.promptstudio.dev/chatbot/chat",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "x-api-key": t.apiKey
              },
              body: JSON.stringify({
                query: ne,
                type: "qna",
                session_id: u.value,
                chatbot_id: t.botId,
                tag: c.value
                // Include browser information in the request
              })
            }
          )).json();
          if (Fe.session_id && (u.value = Fe.session_id), d.value.push({
            id: Date.now().toString(),
            content: Fe.response.trim(),
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date(),
            startTransfer: Fe.startTransfer
          }), await ue(), Fe.startTransfer && ((C = a.value) != null && C.isTransferable)) {
            ce.value = !0;
            try {
              const Nn = await (await fetch(
                `https://api.dev.kb.promptstudio.dev/chatbot/${t.botId}/transfer`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                    "x-api-key": t.apiKey
                  },
                  body: JSON.stringify({
                    session_id: u.value
                  })
                }
              )).json();
              Nn.response && d.value.push({
                id: Date.now().toString(),
                content: Nn.response,
                sender: "bot",
                timestamp: /* @__PURE__ */ new Date(),
                startTransfer: !0,
                isTransferNotice: !0
              });
            } catch (En) {
              console.error("Transfer error:", En), d.value.push({
                id: Date.now().toString(),
                content: "Sorry, there was an error transferring your chat. Please try again.",
                sender: "bot",
                timestamp: /* @__PURE__ */ new Date()
              });
            } finally {
              await ue(), ce.value = !1;
            }
          }
        } catch (fe) {
          d.value.push({
            id: Date.now().toString(),
            content: "I apologize, but I encountered an error. Please try again later.",
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          }), console.error("Error:", fe);
        } finally {
          i.value = !1, await ue();
        }
      }
    };
    return eo(async () => {
      window.addEventListener("resize", he), await V(), oe(), O.value && (se(), O.value.onvoiceschanged !== void 0 && (O.value.onvoiceschanged = se));
    }), ar(() => {
      window.removeEventListener("resize", he), m.value && b.value && m.value.stop(), O.value && O.value.cancel();
    }), ($, T) => (re(), ae("div", Iu, [
      H.value ? (re(), ae("div", Mu, T[3] || (T[3] = [
        A("div", { class: "pskbdllm-animate-spin pskbdllm-rounded-full pskbdllm-h-8 pskbdllm-w-8 pskbdllm-border-t-2 pskbdllm-border-b-2 pskbdllm-border-gray-900" }, null, -1)
      ]))) : a.value ? (re(), ae(we, { key: 1 }, [
        n.value ? mt("", !0) : (re(), ae("button", {
          key: 0,
          onClick: T[0] || (T[0] = (C) => n.value = !0),
          style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
          class: "pskbdllm-fixed pskbdllm-bottom-4 pskbdllm-right-4 pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-p-4 pskbdllm-rounded-full pskbdllm-shadow-lg pskbdllm-hover:opacity-90 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-2 pskbdllm-md:p-5 pskbdllm-animate-bounce"
        }, [
          T[4] || (T[4] = A("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "pskbdllm-h-6 pskbdllm-w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            A("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            })
          ], -1)),
          A("span", Lu, "Chat with " + Vn(a.value.company || "our company"), 1),
          T[5] || (T[5] = A("span", { class: "pskbdllm-md:hidden" }, "Chat", -1))
        ], 4)),
        $r(A("div", {
          class: Te(["pskbdllm-fixed pskbdllm-md:bottom-4 pskbdllm-md:right-4 pskbdllm-md:w-[400px] pskbdllm-bg-gradient-to-b pskbdllm-from-gray-50 pskbdllm-to-white pskbdllm-md:rounded-2xl pskbdllm-shadow-2xl pskbdllm-overflow-hidden pskbdllm-border-0 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-ease-in-out pskbdllm-flex pskbdllm-flex-col", {
            "pskbdllm-bottom-0 pskbdllm-right-0 pskbdllm-w-full pskbdllm-h-[100dvh]": l.value,
            "pskbdllm-max-h-[90vh]": !l.value
          }])
        }, [
          A("div", {
            style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
            class: "pskbdllm-bg-gradient-custom pskbdllm-p-4 pskbdllm-text-white pskbdllm-flex pskbdllm-justify-between pskbdllm-items-center pskbdllm-relative pskbdllm-shrink-0"
          }, [
            A("div", ju, [
              A("div", Fu, [
                A("div", Hu, [
                  a.value.iconUrl ? (re(), ae("img", {
                    key: 0,
                    src: a.value.iconUrl,
                    class: "pskbdllm-h-10 pskbdllm-w-10 pskbdllm-border pskbdllm-rounded-full"
                  }, null, 8, Bu)) : (re(), ae("svg", zu, T[6] || (T[6] = [
                    A("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 15.546c-.523 0-1.046.151-1.5.454a9 9 0 01-2.486.804c-.057 0-.113.002-.17.002-2.486.022-4.773 1.823-4.773 5.423v.002c0 3.624 2.29 6.604 5.46 6.604 3.18 0 5.473-2.98 5.473-6.604v-.002c0-.576-.223-1.084-.632-1.5a9 9 0 01-.804-2.486c-.022-2.486-1.823-4.773-5.423-4.773-3.6 0-6.604 2.29-6.604 5.46v.002zM11.5 4c2.177 0 4.23.93 5.46 2.514.059.118.113.242.17.363a6.5 6.5 0 00-13-.002c.057-.12.113-.24.17-.36C7.27 4.93 9.323 4 11.5 4z"
                    }, null, -1)
                  ])))
                ]),
                A("div", {
                  class: Te(["pskbdllm-absolute pskbdllm--top-1 pskbdllm--right-1 pskbdllm-w-3 pskbdllm-h-3 pskbdllm-rounded-full pskbdllm-border-2 pskbdllm-border-white", [
                    i.value ? "pskbdllm-bg-green-400 pskbdllm-animate-pulse" : "pskbdllm-bg-gray-300"
                  ]])
                }, null, 2)
              ]),
              A("div", null, [
                A("h3", Uu, Vn(a.value.company), 1),
                T[7] || (T[7] = A("p", { class: "pskbdllm-text-xs pskbdllm-text-white/80" }, "AI Assistant", -1))
              ])
            ]),
            A("button", {
              onClick: T[1] || (T[1] = (C) => n.value = !1),
              class: Te(["pskbdllm-hover:bg-white/10 pskbdllm-transition-colors pskbdllm-p-2 pskbdllm-rounded-full", { "pskbdllm-absolute pskbdllm-right-4": l.value }])
            }, T[8] || (T[8] = [
              A("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "pskbdllm-h-6 pskbdllm-w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                A("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ]), 2)
          ], 4),
          A("div", {
            class: Te(["pskbdllm-overflow-y-auto pskbdllm-p-4 pskbdllm-bg-[#F0F0F0] pskbdllm-scroll-smooth pskbdllm-flex-grow", { "pskbdllm-pb-[100px]": l.value }]),
            ref_key: "chatContainer",
            ref: r
          }, [
            (re(!0), ae(we, null, $n(d.value, (C, ne) => (re(), ae(we, {
              key: C.id
            }, [
              a.value.showTransfer && C.isTransferNotice ? (re(), ae("div", Wu, T[9] || (T[9] = [
                A("div", { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-bg-blue-50 pskbdllm-border pskbdllm-border-blue-200 pskbdllm-rounded-full pskbdllm-px-6 pskbdllm-py-3 pskbdllm-shadow-sm pskbdllm-text-sm" }, [
                  A("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "pskbdllm-h-4 pskbdllm-w-4 pskbdllm-text-blue-600 pskbdllm-mr-2 pskbdllm-flex-shrink-0",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    A("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    })
                  ]),
                  A("span", { class: "pskbdllm-font-medium pskbdllm-text-blue-700" }, " Chat transferred ")
                ], -1)
              ]))) : mt("", !0),
              A("div", {
                class: Te(["pskbdllm-message pskbdllm-mb-6 pskbdllm-animate-fade-in pskbdllm-w-full", [
                  C.sender === "user" ? "pskbdllm-flex pskbdllm-justify-end" : "pskbdllm-flex pskbdllm-justify-start"
                ]])
              }, [
                A("div", {
                  class: Te([
                    "pskbdllm-max-w-[85%] pskbdllm-p-4 pskbdllm-shadow-lg pskbdllm-relative pskbdllm-message-bubble pskbdllm-transition-all pskbdllm-duration-300",
                    C.sender === "user" ? "pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-rounded-tl-[20px] pskbdllm-rounded-tr-[20px] pskbdllm-rounded-bl-[20px] pskbdllm-user-message" : "pskbdllm-bg-white/90 pskbdllm-border-[0.5px] pskbdllm-border-gray-100 pskbdllm-text-gray-800 pskbdllm-rounded-tr-[20px] pskbdllm-rounded-tl-[20px] pskbdllm-rounded-br-[20px] pskbdllm-bot-message",
                    C.isPlaying ? "pskbdllm-playing-message pskbdllm-ring-2 pskbdllm-ring-offset-2" : ""
                  ]),
                  style: Ie(
                    C.sender === "user" ? `--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}` : C.isPlaying ? `--ring-color: ${a.value.colors.primary || "#8b5cf6"}; --gradient-start: ${a.value.colors.primary || "#8b5cf6"}; --gradient-end: ${a.value.colors.secondary || "#d946ef"};` : ""
                  )
                }, [
                  A("div", {
                    class: "pskbdllm-whitespace-pre-wrap pskbdllm-text-[15px] pskbdllm-font-normal pskbdllm-leading-[1.5] pskbdllm-markdown-content",
                    innerHTML: Mi(Z)(C.content)
                  }, null, 8, qu),
                  A("div", {
                    class: Te([
                      "pskbdllm-text-[11px] pskbdllm-mt-2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5 pskbdllm-font-medium pskbdllm-justify-between",
                      C.sender === "user" ? "pskbdllm-text-white/90" : "pskbdllm-text-gray-400"
                    ])
                  }, [
                    A("div", Ku, [
                      zs(Vn(new Date(C.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: !0
                      })) + " ", 1),
                      A("audio", {
                        ref_for: !0,
                        ref: (le) => q.value[ne] = le,
                        src: C.audioUrl,
                        onTimeupdate: (le) => je(C, le),
                        onLoadedmetadata: (le) => Ue(C, le),
                        onEnded: (le) => $e(C)
                      }, null, 40, Gu)
                    ]),
                    C.sender === "user" && C.audioUrl ? (re(), ae("button", {
                      key: 0,
                      onClick: (le) => _e(C),
                      class: Te([
                        "pskbdllm-p-1.5 pskbdllm-rounded-full pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-hover:scale-110",
                        C.isAudioPlaying ? "pskbdllm-bg-white/20 pskbdllm-text-white" : "pskbdllm-hover:bg-white/10"
                      ])
                    }, [
                      (re(), ae("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: Te(["pskbdllm-h-4 pskbdllm-w-4 pskbdllm-transition-transform pskbdllm-duration-300", {
                          "pskbdllm-scale-110 pskbdllm-animate-pulse": C.isAudioPlaying
                        }]),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        C.isAudioPlaying ? (re(), ae("path", Qu)) : (re(), ae("path", Ju))
                      ], 2))
                    ], 10, Zu)) : mt("", !0)
                  ], 2)
                ], 6)
              ], 2)
            ], 64))), 128)),
            i.value ? (re(), ae("div", Yu, [
              A("div", Xu, [
                (re(), ae(we, null, $n(3, (C) => A("div", {
                  key: C,
                  class: "pskbdllm-w-3 pskbdllm-h-3 pskbdllm-rounded-full pskbdllm-animate-loader",
                  style: Ie({
                    "animation-delay": `${(C - 1) * 0.2}s`,
                    background: `linear-gradient(to right, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                  })
                }, null, 4)), 64))
              ])
            ])) : mt("", !0)
          ], 2),
          A("div", {
            class: Te(["pskbdllm-border-t pskbdllm-border-gray-100 pskbdllm-p-4 pskbdllm-bg-white/80", {
              "pskbdllm-fixed pskbdllm-bottom-0 pskbdllm-left-0 pskbdllm-right-0 pskbdllm-shadow-[0_-1px_10px_rgba(0,0,0,0.1)]": l.value
            }])
          }, [
            A("form", {
              onSubmit: F,
              class: "pskbdllm-flex pskbdllm-gap-3 pskbdllm-max-w-[400px] pskbdllm-mx-auto"
            }, [
              A("div", ef, [
                $r(A("input", {
                  "onUpdate:modelValue": T[2] || (T[2] = (C) => s.value = C),
                  type: "text",
                  placeholder: o.value ? "" : b.value ? "Listening..." : ce.value ? "Transferring ..." : "Type your message...",
                  class: "pskbdllm-w-full pskbdllm-p-3 pskbdllm-pl-4 pskbdllm-pr-12 pskbdllm-border pskbdllm-border-gray-200 pskbdllm-rounded-xl pskbdllm-focus:outline-none pskbdllm-focus:ring-2 pskbdllm-focus:ring-[var(--primary)] pskbdllm-focus:border-transparent pskbdllm-bg-white/50 pskbdllm-hover:border-[var(--primary)] pskbdllm-transition-all pskbdllm-duration-300",
                  style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  disabled: i.value || b.value || o.value || ce.value
                }, null, 12, tf), [
                  [Wc, s.value]
                ]),
                o.value ? (re(), ae("div", nf, [
                  A("div", sf, [
                    (re(), ae(we, null, $n(5, (C) => A("div", {
                      key: C,
                      class: "pskbdllm-processing-dot",
                      style: Ie({
                        animationDelay: `${(C - 1) * 0.2}s`,
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 4)), 64))
                  ]),
                  T[10] || (T[10] = A("span", { class: "pskbdllm-text-sm pskbdllm-text-gray-500 pskbdllm-ml-2" }, "Processing", -1))
                ])) : mt("", !0),
                b.value && !o.value ? (re(), ae("div", rf, [
                  A("div", of, [
                    (re(), ae(we, null, $n(5, (C) => A("div", {
                      key: C,
                      class: Te(["pskbdllm-recording-wave", `pskbdllm-wave-line-${C}`]),
                      style: Ie({
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 6)), 64))
                  ]),
                  A("button", {
                    onClick: vn,
                    class: "pskbdllm-p-1.5 pskbdllm-bg-red-50 pskbdllm-rounded-full pskbdllm-text-red-500 pskbdllm-hover:text-red-600 pskbdllm-transition-colors pskbdllm-hover:bg-red-100"
                  }, T[11] || (T[11] = [
                    A("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "pskbdllm-h-5 pskbdllm-w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      A("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }),
                      A("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      })
                    ], -1)
                  ]))
                ])) : mt("", !0),
                !b.value && !o.value ? (re(), ae("button", {
                  key: 2,
                  type: "button",
                  onClick: Pt,
                  style: Ie(`background-color: ${a.value.colors.primary}; --primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-text-white pskbdllm-hover:opacity-80 pskbdllm-transition-colors pskbdllm-disabled:opacity-50 pskbdllm-disabled:cursor-not-allowed pskbdllm-p-1.5 pskbdllm-rounded-full",
                  disabled: i.value
                }, T[12] || (T[12] = [
                  A("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "pskbdllm-h-5 pskbdllm-w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    A("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    })
                  ], -1)
                ]), 12, lf)) : mt("", !0)
              ]),
              A("button", {
                type: "submit",
                style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                class: "pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-p-3 pskbdllm-rounded-xl pskbdllm-hover:opacity-90 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-disabled:opacity-50 pskbdllm-disabled:cursor-not-allowed pskbdllm-flex pskbdllm-items-center pskbdllm-justify-center pskbdllm-w-12 pskbdllm-h-12 pskbdllm-shrink-0",
                disabled: i.value || !s.value.trim() && !b.value || o.value
              }, [
                i.value ? (re(), ae("svg", uf, T[14] || (T[14] = [
                  A("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  }, null, -1)
                ]))) : (re(), ae("svg", cf, T[13] || (T[13] = [
                  A("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  }, null, -1)
                ])))
              ], 12, af)
            ], 32),
            T[15] || (T[15] = A("div", { class: "pskbdllm-text-center pskbdllm-mt-2 pskbdllm-text-xs pskbdllm-text-gray-400" }, [
              zs(" Powered by "),
              A("a", {
                href: "https://microbeings.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                class: "pskbdllm-watermark-link"
              }, " MicroBeings ")
            ], -1))
          ], 2)
        ], 2), [
          [Co, n.value]
        ])
      ], 64)) : mt("", !0)
    ]));
  }
}), df = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, pf = /* @__PURE__ */ df(ff, [["__scopeId", "data-v-11ea3c47"]]);
function di() {
  const e = document.getElementById("chat-widget-container");
  if (!e) {
    console.error("Chat widget container not found");
    return;
  }
  const t = e.getAttribute("data-bot-id") || "";
  Gc(pf, {
    botId: t
  }).mount(e);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", di) : di();
