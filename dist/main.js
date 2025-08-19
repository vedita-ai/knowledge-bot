var zo = Object.defineProperty;
var Uo = (e, t, n) => t in e ? zo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var X = (e, t, n) => Uo(e, typeof t != "symbol" ? t + "" : t, n);
var ui = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ut(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = ui.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ht = ui.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, Wo = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ln = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qo = Object.prototype.hasOwnProperty, z = (e, t) => qo.call(e, t), A = Array.isArray, Ot = (e) => es(e) === "[object Map]", fi = (e) => es(e) === "[object Set]", I = (e) => typeof e == "function", se = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", qs = (e) => (Q(e) || I(e)) && I(e.then) && I(e.catch), di = Object.prototype.toString, es = (e) => di.call(e), Ks = (e) => es(e).slice(8, -1), pi = (e) => es(e) === "[object Object]", Gs = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ut(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ko = /* @__PURE__ */ ut(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ts = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Go = /-(\w)/g, He = ts(
  (e) => e.replace(Go, (t, n) => n ? n.toUpperCase() : "")
), Zo = /\B([A-Z])/g, kt = ts(
  (e) => e.replace(Zo, "-$1").toLowerCase()
), ns = ts((e) => e.charAt(0).toUpperCase() + e.slice(1)), Et = ts(
  (e) => e ? `on${ns(e)}` : ""
), bt = (e, t) => !Object.is(e, t), Lt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let wr;
const mn = () => wr || (wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ie(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = se(s) ? Xo(s) : Ie(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (se(e) || Q(e))
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
function Se(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = Se(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const el = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", sl = /* @__PURE__ */ ut(el), rl = /* @__PURE__ */ ut(tl), il = /* @__PURE__ */ ut(nl), ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ ut(ol);
function hi(e) {
  return !!e || e === "";
}
const gi = (e) => !!(e && e.__v_isRef === !0), $n = (e) => se(e) ? e : e == null ? "" : A(e) || Q(e) && (e.toString === di || !I(e.toString)) ? gi(e) ? $n(e.value) : JSON.stringify(e, mi, 2) : String(e), mi = (e, t) => gi(t) ? mi(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[ms(s, i) + " =>"] = r, n),
    {}
  )
} : fi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ms(n))
} : yt(t) ? ms(t) : Q(t) && !A(t) && !pi(t) ? String(t) : t, ms = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var ee = {};
function tt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ve;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ve, !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(
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
      const n = Ve;
      try {
        return Ve = this, t();
      } finally {
        Ve = n;
      }
    } else ee.NODE_ENV !== "production" && tt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ve = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ve = this.parent;
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
  return Ve;
}
let q;
const bs = /* @__PURE__ */ new WeakSet();
class bi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ve && Ve.active && Ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bs.has(this) && (bs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xr(this), yi(this);
    const t = q, n = Be;
    q = this, Be = !0;
    try {
      return this.fn();
    } finally {
      ee.NODE_ENV !== "production" && q !== this && tt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), wi(this), q = t, Be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qs(t);
      this.deps = this.depsTail = void 0, xr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $s(this) && this.run();
  }
  get dirty() {
    return $s(this);
  }
}
let ki = 0, sn, rn;
function _i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = sn, sn = e;
}
function Zs() {
  ki++;
}
function Js() {
  if (--ki > 0)
    return;
  if (rn) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; sn; ) {
    let t = sn;
    for (sn = void 0; t; ) {
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
function yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Qs(s), ul(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === un))
    return;
  e.globalVersion = un;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !$s(e)) {
    e.flags &= -3;
    return;
  }
  const n = q, s = Be;
  q = e, Be = !0;
  try {
    yi(e);
    const r = e.fn(e._value);
    (t.version === 0 || bt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    q = n, Be = s, wi(e), e.flags &= -3;
  }
}
function Qs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), ee.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Qs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const vi = [];
function ft() {
  vi.push(Be), Be = !1;
}
function dt() {
  const e = vi.pop();
  Be = e === void 0 ? !0 : e;
}
function xr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = q;
    q = void 0;
    try {
      t();
    } finally {
      q = n;
    }
  }
}
let un = 0;
class fl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, ee.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!q || !Be || q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== q)
      n = this.activeLink = new fl(q, this), q.deps ? (n.prevDep = q.depsTail, q.depsTail.nextDep = n, q.depsTail = n) : q.deps = q.depsTail = n, Ei(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = q.depsTail, n.nextDep = void 0, q.depsTail.nextDep = n, q.depsTail = n, q.deps === n && (q.deps = s);
    }
    return ee.NODE_ENV !== "production" && q.onTrack && q.onTrack(
      ce(
        {
          effect: q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, un++, this.notify(t);
  }
  notify(t) {
    Zs();
    try {
      if (ee.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ce(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Js();
    }
  }
}
function Ei(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ei(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), ee.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ts = /* @__PURE__ */ new WeakMap(), Dt = Symbol(
  ee.NODE_ENV !== "production" ? "Object iterate" : ""
), Cs = Symbol(
  ee.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fn = Symbol(
  ee.NODE_ENV !== "production" ? "Array iterate" : ""
);
function de(e, t, n) {
  if (Be && q) {
    let s = Ts.get(e);
    s || Ts.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ys()), r.map = s, r.key = n), ee.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Qe(e, t, n, s, r, i) {
  const o = Ts.get(e);
  if (!o) {
    un++;
    return;
  }
  const l = (a) => {
    a && (ee.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (Zs(), t === "clear")
    o.forEach(l);
  else {
    const a = A(e), u = a && Gs(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((d, g) => {
        (g === "length" || g === fn || !yt(g) && g >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(fn)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Dt)), Ot(e) && l(o.get(Cs)));
          break;
        case "delete":
          a || (l(o.get(Dt)), Ot(e) && l(o.get(Cs)));
          break;
        case "set":
          Ot(e) && l(o.get(Dt));
          break;
      }
  }
  Js();
}
function Pt(e) {
  const t = j(e);
  return t === e ? t : (de(t, "iterate", fn), Oe(e) ? t : t.map(_e));
}
function ss(e) {
  return de(e = j(e), "iterate", fn), e;
}
const dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ks(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => A(t) ? Pt(t) : t)
    );
  },
  entries() {
    return ks(this, "entries", (e) => (e[1] = _e(e[1]), e));
  },
  every(e, t) {
    return rt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rt(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return rt(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return rt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rt(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return rt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return _s(this, "includes", e);
  },
  indexOf(...e) {
    return _s(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _s(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return vr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vr(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return ks(this, "values", _e);
  }
};
function ks(e, t, n) {
  const s = ss(e), r = s[t]();
  return s !== e && !Oe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const pl = Array.prototype;
function rt(e, t, n, s, r, i) {
  const o = ss(e), l = o !== e && !Oe(e), a = o[t];
  if (a !== pl[t]) {
    const d = a.apply(e, i);
    return l ? _e(d) : d;
  }
  let u = n;
  o !== e && (l ? u = function(d, g) {
    return n.call(this, _e(d), g, e);
  } : n.length > 2 && (u = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const c = a.call(o, u, s);
  return l && r ? r(c) : c;
}
function vr(e, t, n, s) {
  const r = ss(e);
  let i = n;
  return r !== e && (Oe(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, _e(l), a, e);
  }), r[t](i, ...s);
}
function _s(e, t, n) {
  const s = j(e);
  de(s, "iterate", fn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Fn(n[0]) ? (n[0] = j(n[0]), s[t](...n)) : r;
}
function Gt(e, t, n = []) {
  ft(), Zs();
  const s = j(e)[t].apply(e, n);
  return Js(), dt(), s;
}
const hl = /* @__PURE__ */ ut("__proto__,__v_isRef,__isVue"), Ni = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function gl(e) {
  yt(e) || (e = String(e));
  const t = j(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class Oi {
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
      return s === (r ? i ? Vi : Ci : i ? Ti : $i).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = A(t);
    if (!r) {
      let a;
      if (o && (a = dl[n]))
        return a;
      if (n === "hasOwnProperty")
        return gl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : s
    );
    return (yt(n) ? Ni.has(n) : hl(n)) || (r || de(t, "get", n), i) ? l : ae(l) ? o && Gs(n) ? l : l.value : Q(l) ? r ? Ri(l) : Xs(l) : l;
  }
}
class Di extends Oi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = ct(i);
      if (!Oe(s) && !ct(s) && (i = j(i), s = j(s)), !A(t) && ae(i) && !ae(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = A(t) && Gs(n) ? Number(n) < t.length : z(t, n), l = Reflect.set(
      t,
      n,
      s,
      ae(t) ? t : r
    );
    return t === j(r) && (o ? bt(s, i) && Qe(t, "set", n, s, i) : Qe(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = z(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && Qe(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !Ni.has(n)) && de(t, "has", n), s;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      A(t) ? "length" : Dt
    ), Reflect.ownKeys(t);
  }
}
class Si extends Oi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ee.NODE_ENV !== "production" && tt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ee.NODE_ENV !== "production" && tt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ml = /* @__PURE__ */ new Di(), bl = /* @__PURE__ */ new Si(), kl = /* @__PURE__ */ new Di(!0), _l = /* @__PURE__ */ new Si(!0), Vs = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function yl(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = j(r), o = Ot(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = r[e](...s), c = n ? Vs : t ? Rs : _e;
    return !t && de(
      i,
      "iterate",
      a ? Cs : Dt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: g } = u.next();
        return g ? { value: d, done: g } : {
          value: l ? [c(d[0]), c(d[1])] : c(d),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Nn(e) {
  return function(...t) {
    if (ee.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      tt(
        `${ns(e)} operation ${n}failed: target is readonly.`,
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
      e || (bt(r, l) && de(o, "get", r), de(o, "get", l));
      const { has: a } = En(o), u = t ? Vs : e ? Rs : _e;
      if (a.call(o, r))
        return u(i.get(r));
      if (a.call(o, l))
        return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && de(j(r), "iterate", Dt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      return e || (bt(r, l) && de(o, "has", r), de(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = j(l), u = t ? Vs : e ? Rs : _e;
      return !e && de(a, "iterate", Dt), l.forEach((c, d) => r.call(i, u(c), u(d), o));
    }
  };
  return ce(
    n,
    e ? {
      add: Nn("add"),
      set: Nn("set"),
      delete: Nn("delete"),
      clear: Nn("clear")
    } : {
      add(r) {
        !t && !Oe(r) && !ct(r) && (r = j(r));
        const i = j(this);
        return En(i).has.call(i, r) || (i.add(r), Qe(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Oe(i) && !ct(i) && (i = j(i));
        const o = j(this), { has: l, get: a } = En(o);
        let u = l.call(o, r);
        u ? ee.NODE_ENV !== "production" && Er(o, l, r) : (r = j(r), u = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), u ? bt(i, c) && Qe(o, "set", r, i, c) : Qe(o, "add", r, i), this;
      },
      delete(r) {
        const i = j(this), { has: o, get: l } = En(i);
        let a = o.call(i, r);
        a ? ee.NODE_ENV !== "production" && Er(i, o, r) : (r = j(r), a = o.call(i, r));
        const u = l ? l.call(i, r) : void 0, c = i.delete(r);
        return a && Qe(i, "delete", r, void 0, u), c;
      },
      clear() {
        const r = j(this), i = r.size !== 0, o = ee.NODE_ENV !== "production" ? Ot(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return i && Qe(
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
function rs(e, t) {
  const n = wl(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    z(n, r) && r in s ? n : s,
    r,
    i
  );
}
const xl = {
  get: /* @__PURE__ */ rs(!1, !1)
}, vl = {
  get: /* @__PURE__ */ rs(!1, !0)
}, El = {
  get: /* @__PURE__ */ rs(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ rs(!0, !0)
};
function Er(e, t, n) {
  const s = j(n);
  if (s !== n && t.call(e, s)) {
    const r = Ks(e);
    tt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const $i = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ol(Ks(e));
}
function Xs(e) {
  return ct(e) ? e : is(
    e,
    !1,
    ml,
    xl,
    $i
  );
}
function Sl(e) {
  return is(
    e,
    !1,
    kl,
    vl,
    Ti
  );
}
function Ri(e) {
  return is(
    e,
    !0,
    bl,
    El,
    Ci
  );
}
function Xe(e) {
  return is(
    e,
    !0,
    _l,
    Nl,
    Vi
  );
}
function is(e, t, n, s, r) {
  if (!Q(e))
    return ee.NODE_ENV !== "production" && tt(
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
function St(e) {
  return ct(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function Fn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function $l(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && jn(e, "__v_skip", !0), e;
}
const _e = (e) => Q(e) ? Xs(e) : e, Rs = (e) => Q(e) ? Ri(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ge(e) {
  return Tl(e, !1);
}
function Tl(e, t) {
  return ae(e) ? e : new Cl(e, t);
}
class Cl {
  constructor(t, n) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Oe(t) || ct(t);
    t = s ? t : j(t), bt(t, n) && (this._rawValue = t, this._value = s ? t : _e(t), ee.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ai(e) {
  return ae(e) ? e.value : e;
}
const Vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Ai(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ae(r) && !ae(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Pi(e) {
  return St(e) ? e : new Proxy(e, Vl);
}
class Rl {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    q !== this)
      return _i(this, !0), !0;
  }
  get value() {
    const t = ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return xi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ee.NODE_ENV !== "production" && tt("Write operation failed: computed value is readonly");
  }
}
function Al(e, t, n = !1) {
  let s, r;
  return I(e) ? s = e : (s = e.get, r = e.set), new Rl(s, r, n);
}
const On = {}, Hn = /* @__PURE__ */ new WeakMap();
let Nt;
function Pl(e, t = !1, n = Nt) {
  if (n) {
    let s = Hn.get(n);
    s || Hn.set(n, s = []), s.push(e);
  } else ee.NODE_ENV !== "production" && !t && tt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Il(e, t, n = K) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, u = (V) => {
    (n.onWarn || tt)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (V) => r ? V : Oe(V) || r === !1 || r === 0 ? ot(V, 1) : ot(V);
  let d, g, b, $, D = !1, U = !1;
  if (ae(e) ? (g = () => e.value, D = Oe(e)) : St(e) ? (g = () => c(e), D = !0) : A(e) ? (U = !0, D = e.some((V) => St(V) || Oe(V)), g = () => e.map((V) => {
    if (ae(V))
      return V.value;
    if (St(V))
      return c(V);
    if (I(V))
      return a ? a(V, 2) : V();
    ee.NODE_ENV !== "production" && u(V);
  })) : I(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (b) {
      ft();
      try {
        b();
      } finally {
        dt();
      }
    }
    const V = Nt;
    Nt = d;
    try {
      return a ? a(e, 3, [$]) : e($);
    } finally {
      Nt = V;
    }
  } : (g = pe, ee.NODE_ENV !== "production" && u(e)), t && r) {
    const V = g, ne = r === !0 ? 1 / 0 : r;
    g = () => ot(V(), ne);
  }
  const B = cl(), W = () => {
    d.stop(), B && B.active && Ws(B.effects, d);
  };
  if (i && t) {
    const V = t;
    t = (...ne) => {
      V(...ne), W();
    };
  }
  let F = U ? new Array(e.length).fill(On) : On;
  const he = (V) => {
    if (!(!(d.flags & 1) || !d.dirty && !V))
      if (t) {
        const ne = d.run();
        if (r || D || (U ? ne.some((ue, te) => bt(ue, F[te])) : bt(ne, F))) {
          b && b();
          const ue = Nt;
          Nt = d;
          try {
            const te = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              F === On ? void 0 : U && F[0] === On ? [] : F,
              $
            ];
            a ? a(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            ), F = ne;
          } finally {
            Nt = ue;
          }
        }
      } else
        d.run();
  };
  return l && l(he), d = new bi(g), d.scheduler = o ? () => o(he, !1) : he, $ = (V) => Pl(V, !1, d), b = d.onStop = () => {
    const V = Hn.get(d);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const ne of V) ne();
      Hn.delete(d);
    }
  }, ee.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? he(!0) : F = d.run() : o ? o(he.bind(null, !0), !0) : d.run(), W.pause = d.pause.bind(d), W.resume = d.resume.bind(d), W.stop = W, W;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ae(e))
    ot(e.value, t, n);
  else if (A(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (fi(e) || Ot(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (pi(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
var h = {};
const $t = [];
function Tn(e) {
  $t.push(e);
}
function Cn() {
  $t.pop();
}
let ys = !1;
function N(e, ...t) {
  if (ys) return;
  ys = !0, ft();
  const n = $t.length ? $t[$t.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Ml();
  if (s)
    Ut(
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
          ({ vnode: i }) => `at <${fs(n, i.type)}>`
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
  dt(), ys = !1;
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${fs(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...Fl(e.props), i] : [r + i];
}
function Fl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Ii(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ii(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = Ii(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const er = {
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
function Ut(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    bn(r, t, n);
  }
}
function nt(e, t, n, s) {
  if (I(e)) {
    const r = Ut(e, t, n, s);
    return r && qs(r) && r.catch((i) => {
      bn(i, t, n);
    }), r;
  }
  if (A(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(nt(e[i], t, n, s));
    return r;
  } else h.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function bn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = h.NODE_ENV !== "production" ? er[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      ft(), Ut(i, null, 10, [
        e,
        a,
        u
      ]), dt();
      return;
    }
  }
  Hl(e, n, r, s, o);
}
function Hl(e, t, n, s = !0, r = !1) {
  if (h.NODE_ENV !== "production") {
    const i = er[t];
    if (n && Tn(n), N(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Cn(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const xe = [];
let Je = -1;
const Bt = [];
let ht = null, jt = 0;
const Mi = /* @__PURE__ */ Promise.resolve();
let Bn = null;
const Bl = 100;
function Li(e) {
  const t = Bn || Mi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zl(e) {
  let t = Je + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = xe[s], i = dn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function os(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(n) ? xe.push(e) : xe.splice(zl(t), 0, e), e.flags |= 1, ji();
  }
}
function ji() {
  Bn || (Bn = Mi.then(Bi));
}
function Fi(e) {
  A(e) ? Bt.push(...e) : ht && e.id === -1 ? ht.splice(jt + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), ji();
}
function Nr(e, t, n = Je + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || h.NODE_ENV !== "production" && tr(t, s))
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Hi(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (n, s) => dn(n) - dn(s)
    );
    if (Bt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), jt = 0; jt < ht.length; jt++) {
      const n = ht[jt];
      h.NODE_ENV !== "production" && tr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, jt = 0;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bi(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => tr(e, n) : pe;
  try {
    for (Je = 0; Je < xe.length; Je++) {
      const n = xe[Je];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ut(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Je < xe.length; Je++) {
      const n = xe[Je];
      n && (n.flags &= -2);
    }
    Je = -1, xe.length = 0, Hi(e), Bn = null, (xe.length || Bt.length) && Bi(e);
  }
}
function tr(e, t) {
  const n = e.get(t) || 0;
  if (n > Bl) {
    const s = t.i, r = s && No(s.type);
    return bn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let et = !1;
const Vn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (mn().__VUE_HMR_RUNTIME__ = {
  createRecord: ws(zi),
  rerender: ws(ql),
  reload: ws(Kl)
});
const Ct = /* @__PURE__ */ new Map();
function Ul(e) {
  const t = e.type.__hmrId;
  let n = Ct.get(t);
  n || (zi(t, e.type), n = Ct.get(t)), n.instances.add(e);
}
function Wl(e) {
  Ct.get(e.type.__hmrId).instances.delete(e);
}
function zi(e, t) {
  return Ct.has(e) ? !1 : (Ct.set(e, {
    initialDef: zn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function zn(e) {
  return Oo(e) ? e.__vccOpts : e;
}
function ql(e, t) {
  const n = Ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, zn(s.type).render = t), s.renderCache = [], et = !0, s.update(), et = !1;
  }));
}
function Kl(e, t) {
  const n = Ct.get(e);
  if (!n) return;
  t = zn(t), Or(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = zn(i.type);
    let l = Vn.get(o);
    l || (o !== n.initialDef && Or(o, t), Vn.set(o, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? os(() => {
      et = !0, i.parent.update(), et = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  Fi(() => {
    Vn.clear();
  });
}
function Or(e, t) {
  ce(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ws(e) {
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
let Ye, en = [], As = !1;
function kn(e, ...t) {
  Ye ? Ye.emit(e, ...t) : As || en.push({ event: e, args: t });
}
function Ui(e, t) {
  var n, s;
  Ye = e, Ye ? (Ye.enabled = !0, en.forEach(({ event: r, args: i }) => Ye.emit(r, ...i)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ui(i, t);
  }), setTimeout(() => {
    Ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, As = !0, en = []);
  }, 3e3)) : (As = !0, en = []);
}
function Gl(e, t) {
  kn("app:init", e, t, {
    Fragment: ve,
    Text: _n,
    Comment: Ae,
    Static: Pn
  });
}
function Zl(e) {
  kn("app:unmount", e);
}
const Jl = /* @__PURE__ */ nr(
  "component:added"
  /* COMPONENT_ADDED */
), Wi = /* @__PURE__ */ nr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ql = /* @__PURE__ */ nr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yl = (e) => {
  Ye && typeof Ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ye.cleanupBuffer(e) && Ql(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return (t) => {
    kn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Xl = /* @__PURE__ */ qi(
  "perf:start"
  /* PERFORMANCE_START */
), ea = /* @__PURE__ */ qi(
  "perf:end"
  /* PERFORMANCE_END */
);
function qi(e) {
  return (t, n, s) => {
    kn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ta(e, t, n) {
  kn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Ki = null;
function Un(e) {
  const t = Ee;
  return Ee = e, Ki = e && e.type.__scopeId || null, t;
}
function na(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && jr(-1);
    const i = Un(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Un(i), s._d && jr(1);
    }
    return h.NODE_ENV !== "production" && Wi(t), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Gi(e) {
  Ko(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function Dr(e, t) {
  if (Ee === null)
    return h.NODE_ENV !== "production" && N("withDirectives can only be used inside render functions."), e;
  const n = us(Ee), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = K] = t[r];
    i && (I(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(o), s.push({
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
function wt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (ft(), nt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), dt());
  }
}
const sa = Symbol("_vte"), ra = (e) => e.__isTeleport;
function sr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, sr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ia(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const oa = /* @__PURE__ */ new WeakSet();
function Wn(e, t, n, s, r = !1) {
  if (A(e)) {
    e.forEach(
      ($, D) => Wn(
        $,
        t && (A(t) ? t[D] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (on(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? us(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, c = l.refs === K ? l.refs = {} : l.refs, d = l.setupState, g = j(d), b = d === K ? () => !1 : ($) => h.NODE_ENV !== "production" && (z(g, $) && !ae(g[$]) && N(
    `Template ref "${$}" used on a non-ref value. It will not work in the production build.`
  ), oa.has(g[$])) ? !1 : z(g, $);
  if (u != null && u !== a && (se(u) ? (c[u] = null, b(u) && (d[u] = null)) : ae(u) && (u.value = null)), I(a))
    Ut(a, l, 12, [o, c]);
  else {
    const $ = se(a), D = ae(a);
    if ($ || D) {
      const U = () => {
        if (e.f) {
          const B = $ ? b(a) ? d[a] : c[a] : a.value;
          r ? A(B) && Ws(B, i) : A(B) ? B.includes(i) || B.push(i) : $ ? (c[a] = [i], b(a) && (d[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value));
        } else $ ? (c[a] = o, b(a) && (d[a] = o)) : D ? (a.value = o, e.k && (c[e.k] = o)) : h.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (U.id = -1, Ce(U, n)) : U();
    } else h.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
  }
}
mn().requestIdleCallback;
mn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, rr = (e) => e.type.__isKeepAlive;
function la(e, t) {
  Ji(e, "a", t);
}
function aa(e, t) {
  Ji(e, "da", t);
}
function Ji(e, t, n = me) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ls(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      rr(r.parent.vnode) && ca(s, t, n, r), r = r.parent;
  }
}
function ca(e, t, n, s) {
  const r = ls(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ir(() => {
    Ws(s[t], r);
  }, n);
}
function ls(e, t, n = me, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      ft();
      const l = yn(n), a = nt(t, n, e, o);
      return l(), dt(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  } else if (h.NODE_ENV !== "production") {
    const r = Et(er[e].replace(/ hook$/, ""));
    N(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const pt = (e) => (t, n = me) => {
  (!hn || e === "sp") && ls(e, (...s) => t(...s), n);
}, ua = pt("bm"), Qi = pt("m"), fa = pt(
  "bu"
), da = pt("u"), pa = pt(
  "bum"
), ir = pt("um"), ha = pt(
  "sp"
), ga = pt("rtg"), ma = pt("rtc");
function ba(e, t = me) {
  ls("ec", e, t);
}
const ka = Symbol.for("v-ndc");
function Dn(e, t, n, s) {
  let r;
  const i = n, o = A(e);
  if (o || se(e)) {
    const l = o && St(e);
    let a = !1;
    l && (a = !Oe(e), e = ss(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        a ? _e(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Q(e))
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
const Ps = (e) => e ? vo(e) ? us(e) : Ps(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? Xe(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? Xe(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? Xe(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? Xe(e.refs) : e.refs,
    $parent: (e) => Ps(e.parent),
    $root: (e) => Ps(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      os(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Li.bind(e.proxy)),
    $watch: (e) => Qa.bind(e)
  })
), or = (e) => e === "_" || e === "$", xs = (e, t) => e !== K && !e.__isScriptSetup && z(e, t), Yi = {
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
        if (xs(s, t))
          return o[t] = 1, s[t];
        if (r !== K && z(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && z(u, t)
        )
          return o[t] = 3, i[t];
        if (n !== K && z(n, t))
          return o[t] = 4, n[t];
        Is && (o[t] = 0);
      }
    }
    const c = Tt[t];
    let d, g;
    if (c)
      return t === "$attrs" ? (de(e.attrs, "get", ""), h.NODE_ENV !== "production" && Gn()) : h.NODE_ENV !== "production" && t === "$slots" && de(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== K && z(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, z(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && Ee && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== K && or(t[0]) && z(r, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return xs(r, t) ? (r[t] = n, !0) : h.NODE_ENV !== "production" && r.__isScriptSetup && z(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== K && z(s, t) ? (s[t] = n, !0) : z(e.props, t) ? (h.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && N(
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
    return !!n[o] || e !== K && z(e, o) || xs(t, o) || (l = i[0]) && z(l, o) || z(s, o) || z(Tt, o) || z(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (Yi.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _a(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Tt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Tt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: pe
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
      set: pe
    });
  });
}
function wa(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (or(s[0])) {
        N(
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
        set: pe
      });
    }
  });
}
function Sr(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Is = !0;
function va(e) {
  const t = eo(e), n = e.proxy, s = e.ctx;
  Is = !1, t.beforeCreate && $r(t.beforeCreate, e, "bc");
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
    mounted: g,
    beforeUpdate: b,
    updated: $,
    activated: D,
    deactivated: U,
    beforeDestroy: B,
    beforeUnmount: W,
    destroyed: F,
    unmounted: he,
    render: V,
    renderTracked: ne,
    renderTriggered: ue,
    errorCaptured: te,
    serverPrefetch: ke,
    // public API
    expose: je,
    inheritAttrs: ze,
    // assets
    components: $e,
    directives: At,
    filters: xn
  } = t, Pe = h.NODE_ENV !== "production" ? xa() : null;
  if (h.NODE_ENV !== "production") {
    const [T] = e.propsOptions;
    if (T)
      for (const x in T)
        Pe("Props", x);
  }
  if (u && Ea(u, s, Pe), o)
    for (const T in o) {
      const x = o[T];
      I(x) ? (h.NODE_ENV !== "production" ? Object.defineProperty(s, T, {
        value: x.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[T] = x.bind(n), h.NODE_ENV !== "production" && Pe("Methods", T)) : h.NODE_ENV !== "production" && N(
        `Method "${T}" has type "${typeof x}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    h.NODE_ENV !== "production" && !I(r) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const T = r.call(n, n);
    if (h.NODE_ENV !== "production" && qs(T) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Q(T))
      h.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = Xs(T), h.NODE_ENV !== "production")
      for (const x in T)
        Pe("Data", x), or(x[0]) || Object.defineProperty(s, x, {
          configurable: !0,
          enumerable: !0,
          get: () => T[x],
          set: pe
        });
  }
  if (Is = !0, i)
    for (const T in i) {
      const x = i[T], C = I(x) ? x.bind(n, n) : I(x.get) ? x.get.bind(n, n) : pe;
      h.NODE_ENV !== "production" && C === pe && N(`Computed property "${T}" has no getter.`);
      const oe = !I(x) && I(x.set) ? x.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${T}" is readonly.`
        );
      } : pe, re = vc({
        get: C,
        set: oe
      });
      Object.defineProperty(s, T, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: (fe) => re.value = fe
      }), h.NODE_ENV !== "production" && Pe("Computed", T);
    }
  if (l)
    for (const T in l)
      Xi(l[T], s, n, T);
  if (a) {
    const T = I(a) ? a.call(n) : a;
    Reflect.ownKeys(T).forEach((x) => {
      Ta(x, T[x]);
    });
  }
  c && $r(c, e, "c");
  function be(T, x) {
    A(x) ? x.forEach((C) => T(C.bind(n))) : x && T(x.bind(n));
  }
  if (be(ua, d), be(Qi, g), be(fa, b), be(da, $), be(la, D), be(aa, U), be(ba, te), be(ma, ne), be(ga, ue), be(pa, W), be(ir, he), be(ha, ke), A(je))
    if (je.length) {
      const T = e.exposed || (e.exposed = {});
      je.forEach((x) => {
        Object.defineProperty(T, x, {
          get: () => n[x],
          set: (C) => n[x] = C
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === pe && (e.render = V), ze != null && (e.inheritAttrs = ze), $e && (e.components = $e), At && (e.directives = At), ke && Zi(e);
}
function Ea(e, t, n = pe) {
  A(e) && (e = Ms(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Q(r) ? "default" in r ? i = Rn(
      r.from || s,
      r.default,
      !0
    ) : i = Rn(r.from || s) : i = Rn(r), ae(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i, h.NODE_ENV !== "production" && n("Inject", s);
  }
}
function $r(e, t, n) {
  nt(
    A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xi(e, t, n, s) {
  let r = s.includes(".") ? ho(n, s) : () => n[s];
  if (se(e)) {
    const i = t[e];
    I(i) ? Es(r, i) : h.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, i);
  } else if (I(e))
    Es(r, e.bind(n));
  else if (Q(e))
    if (A(e))
      e.forEach((i) => Xi(i, t, n, s));
    else {
      const i = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(i) ? Es(r, i, e) : h.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else h.NODE_ENV !== "production" && N(`Invalid watch option: "${s}"`, e);
}
function eo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => qn(a, u, o, !0)
  ), qn(a, t, o)), Q(t) && i.set(t, a), a;
}
function qn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && qn(e, i, n, !0), r && r.forEach(
    (o) => qn(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      h.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Na[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Na = {
  data: Tr,
  props: Cr,
  emits: Cr,
  // objects
  methods: tn,
  computed: tn,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: tn,
  directives: tn,
  // watch
  watch: Da,
  // provide / inject
  provide: Tr,
  inject: Oa
};
function Tr(e, t) {
  return t ? e ? function() {
    return ce(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oa(e, t) {
  return tn(Ms(e), Ms(t));
}
function Ms(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tn(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Cr(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Sr(e),
    Sr(t ?? {})
  ) : t;
}
function Da(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function to() {
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
function $a(e, t) {
  return function(s, r = null) {
    I(s) || (s = ce({}, s)), r != null && !Q(r) && (h.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const i = to(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: Sa++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: zr,
      get config() {
        return i.config;
      },
      set config(c) {
        h.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return o.has(c) ? h.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : c && I(c.install) ? (o.add(c), c.install(u, ...d)) : I(c) ? (o.add(c), c(u, ...d)) : h.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(c) {
        return i.mixins.includes(c) ? h.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : i.mixins.push(c), u;
      },
      component(c, d) {
        return h.NODE_ENV !== "production" && Bs(c, i.config), d ? (h.NODE_ENV !== "production" && i.components[c] && N(`Component "${c}" has already been registered in target app.`), i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return h.NODE_ENV !== "production" && Gi(c), d ? (h.NODE_ENV !== "production" && i.directives[c] && N(`Directive "${c}" has already been registered in target app.`), i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, g) {
        if (a)
          h.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && c.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = u._ceVNode || lt(s, r);
          return b.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (i.reload = () => {
            e(
              _t(b),
              c,
              g
            );
          }), e(b, c, g), a = !0, u._container = c, c.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = b.component, Gl(u, zr)), us(b.component);
        }
      },
      onUnmount(c) {
        h.NODE_ENV !== "production" && typeof c != "function" && N(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (nt(
          l,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, Zl(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return h.NODE_ENV !== "production" && c in i.provides && N(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = zt;
        zt = u;
        try {
          return c();
        } finally {
          zt = d;
        }
      }
    };
    return u;
  };
}
let zt = null;
function Ta(e, t) {
  if (!me)
    h.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = me.provides;
    const s = me.parent && me.parent.provides;
    s === n && (n = me.provides = Object.create(s)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const s = me || Ee;
  if (s || zt) {
    const r = zt ? zt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
    h.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const no = {}, so = () => Object.create(no), ro = (e) => Object.getPrototypeOf(e) === no;
function Ca(e, t, n, s = !1) {
  const r = {}, i = so();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), io(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  h.NODE_ENV !== "production" && lo(t || {}, r, e), n ? e.props = s ? r : Sl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
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
        let g = c[d];
        if (as(e.emitsOptions, g))
          continue;
        const b = t[g];
        if (a)
          if (z(i, g))
            b !== i[g] && (i[g] = b, u = !0);
          else {
            const $ = He(g);
            r[$] = Ls(
              a,
              l,
              $,
              b,
              e,
              !1
            );
          }
        else
          b !== i[g] && (i[g] = b, u = !0);
      }
    }
  } else {
    io(e, t, r, i) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !z(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = kt(d)) === d || !z(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = Ls(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !z(t, d)) && (delete i[d], u = !0);
  }
  u && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && lo(t || {}, r, e);
}
function io(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (nn(a))
        continue;
      const u = t[a];
      let c;
      r && z(r, c = He(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : as(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
    }
  if (i) {
    const a = j(n), u = l || K;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = Ls(
        r,
        a,
        d,
        u[d],
        e,
        !z(u, d)
      );
    }
  }
  return o;
}
function Ls(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = z(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && I(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const c = yn(r);
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
    ] && (s === "" || s === kt(n)) && (s = !0));
  }
  return s;
}
const Aa = /* @__PURE__ */ new WeakMap();
function oo(e, t, n = !1) {
  const s = n ? Aa : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let a = !1;
  if (!I(e)) {
    const c = (d) => {
      a = !0;
      const [g, b] = oo(d, t, !0);
      ce(o, g), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return Q(e) && s.set(e, Ht), Ht;
  if (A(i))
    for (let c = 0; c < i.length; c++) {
      h.NODE_ENV !== "production" && !se(i[c]) && N("props must be strings when using array syntax.", i[c]);
      const d = He(i[c]);
      Vr(d) && (o[d] = K);
    }
  else if (i) {
    h.NODE_ENV !== "production" && !Q(i) && N("invalid props options", i);
    for (const c in i) {
      const d = He(c);
      if (Vr(d)) {
        const g = i[c], b = o[d] = A(g) || I(g) ? { type: g } : ce({}, g), $ = b.type;
        let D = !1, U = !0;
        if (A($))
          for (let B = 0; B < $.length; ++B) {
            const W = $[B], F = I(W) && W.name;
            if (F === "Boolean") {
              D = !0;
              break;
            } else F === "String" && (U = !1);
          }
        else
          D = I($) && $.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = D, b[
          1
          /* shouldCastTrue */
        ] = U, (D || z(b, "default")) && l.push(d);
      }
    }
  }
  const u = [o, l];
  return Q(e) && s.set(e, u), u;
}
function Vr(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (h.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Pa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function lo(e, t, n) {
  const s = j(t), r = n.propsOptions[0], i = Object.keys(e).map((o) => He(o));
  for (const o in r) {
    let l = r[o];
    l != null && Ia(
      o,
      s[o],
      l,
      h.NODE_ENV !== "production" ? Xe(s) : s,
      !i.includes(o)
    );
  }
}
function Ia(e, t, n, s, r) {
  const { type: i, required: o, validator: l, skipCheck: a } = n;
  if (o && r) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (i != null && i !== !0 && !a) {
      let u = !1;
      const c = A(i) ? i : [i], d = [];
      for (let g = 0; g < c.length && !u; g++) {
        const { valid: b, expectedType: $ } = La(t, c[g]);
        d.push($ || ""), u = b;
      }
      if (!u) {
        N(ja(e, t, d));
        return;
      }
    }
    l && !l(t, s) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ma = /* @__PURE__ */ ut(
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
  } else s === "Object" ? n = Q(e) : s === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function ja(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ns).join(" | ")}`;
  const r = n[0], i = Ks(t), o = Rr(t, r), l = Rr(t, i);
  return n.length === 1 && Ar(r) && !Fa(r, i) && (s += ` with value ${o}`), s += `, got ${i} `, Ar(i) && (s += `with value ${l}.`), s;
}
function Rr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ar(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ao = (e) => e[0] === "_" || e === "$stable", lr = (e) => A(e) ? e.map(Fe) : [Fe(e)], Ha = (e, t, n) => {
  if (t._n)
    return t;
  const s = na((...r) => (h.NODE_ENV !== "production" && me && (!n || n.root === me.root) && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), lr(t(...r))), n);
  return s._c = !1, s;
}, co = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ao(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = Ha(r, i, s);
    else if (i != null) {
      h.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const o = lr(i);
      t[r] = () => o;
    }
  }
}, uo = (e, t) => {
  h.NODE_ENV !== "production" && !rr(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = lr(t);
  e.slots.default = () => n;
}, js = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Ba = (e, t, n) => {
  const s = e.slots = so();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (js(s, t, n), n && jn(s, "_", r, !0)) : co(t, s);
  } else t && uo(e, t);
}, za = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = K;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && et ? (js(r, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? i = !1 : js(r, t, n) : (i = !t.$stable, co(t, r)), o = t;
  } else t && (uo(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !ao(l) && o[l] == null && delete r[l];
};
let Zt, mt;
function It(e, t) {
  e.appContext.config.performance && Kn() && mt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && Xl(e, t, Kn() ? mt.now() : Date.now());
}
function Mt(e, t) {
  if (e.appContext.config.performance && Kn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    mt.mark(s), mt.measure(
      `<${fs(e, e.type)}> ${t}`,
      n,
      s
    ), mt.clearMarks(n), mt.clearMarks(s);
  }
  h.NODE_ENV !== "production" && ea(e, t, Kn() ? mt.now() : Date.now());
}
function Kn() {
  return Zt !== void 0 || (typeof window < "u" && window.performance ? (Zt = !0, mt = window.performance) : Zt = !1), Zt;
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
const Ce = rc;
function Wa(e) {
  return qa(e);
}
function qa(e, t) {
  Ua();
  const n = mn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Ui(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: g,
    setScopeId: b = pe,
    insertStaticContent: $
  } = e, D = (f, p, m, y = null, k = null, _ = null, O = void 0, E = null, v = h.NODE_ENV !== "production" && et ? !1 : !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Jt(f, p) && (y = vn(f), Ue(f, k, _, !0), f = null), p.patchFlag === -2 && (v = !1, p.dynamicChildren = null);
    const { type: w, ref: P, shapeFlag: S } = p;
    switch (w) {
      case _n:
        U(f, p, m, y);
        break;
      case Ae:
        B(f, p, m, y);
        break;
      case Pn:
        f == null ? W(p, m, y, O) : h.NODE_ENV !== "production" && F(f, p, m, O);
        break;
      case ve:
        At(
          f,
          p,
          m,
          y,
          k,
          _,
          O,
          E,
          v
        );
        break;
      default:
        S & 1 ? ne(
          f,
          p,
          m,
          y,
          k,
          _,
          O,
          E,
          v
        ) : S & 6 ? xn(
          f,
          p,
          m,
          y,
          k,
          _,
          O,
          E,
          v
        ) : S & 64 || S & 128 ? w.process(
          f,
          p,
          m,
          y,
          k,
          _,
          O,
          E,
          v,
          qt
        ) : h.NODE_ENV !== "production" && N("Invalid VNode type:", w, `(${typeof w})`);
    }
    P != null && k && Wn(P, f && f.ref, _, p || f, !p);
  }, U = (f, p, m, y) => {
    if (f == null)
      s(
        p.el = l(p.children),
        m,
        y
      );
    else {
      const k = p.el = f.el;
      p.children !== f.children && u(k, p.children);
    }
  }, B = (f, p, m, y) => {
    f == null ? s(
      p.el = a(p.children || ""),
      m,
      y
    ) : p.el = f.el;
  }, W = (f, p, m, y) => {
    [f.el, f.anchor] = $(
      f.children,
      p,
      m,
      y,
      f.el,
      f.anchor
    );
  }, F = (f, p, m, y) => {
    if (p.children !== f.children) {
      const k = g(f.anchor);
      V(f), [p.el, p.anchor] = $(
        p.children,
        m,
        k,
        y
      );
    } else
      p.el = f.el, p.anchor = f.anchor;
  }, he = ({ el: f, anchor: p }, m, y) => {
    let k;
    for (; f && f !== p; )
      k = g(f), s(f, m, y), f = k;
    s(p, m, y);
  }, V = ({ el: f, anchor: p }) => {
    let m;
    for (; f && f !== p; )
      m = g(f), r(f), f = m;
    r(p);
  }, ne = (f, p, m, y, k, _, O, E, v) => {
    p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null ? ue(
      p,
      m,
      y,
      k,
      _,
      O,
      E,
      v
    ) : je(
      f,
      p,
      k,
      _,
      O,
      E,
      v
    );
  }, ue = (f, p, m, y, k, _, O, E) => {
    let v, w;
    const { props: P, shapeFlag: S, transition: R, dirs: L } = f;
    if (v = f.el = o(
      f.type,
      _,
      P && P.is,
      P
    ), S & 8 ? c(v, f.children) : S & 16 && ke(
      f.children,
      v,
      null,
      y,
      k,
      vs(f, _),
      O,
      E
    ), L && wt(f, null, y, "created"), te(v, f, f.scopeId, O, y), P) {
      for (const Y in P)
        Y !== "value" && !nn(Y) && i(v, Y, null, P[Y], _, y);
      "value" in P && i(v, "value", null, P.value, _), (w = P.onVnodeBeforeMount) && Ge(w, y, f);
    }
    h.NODE_ENV !== "production" && (jn(v, "__vnode", f, !0), jn(v, "__vueParentComponent", y, !0)), L && wt(f, null, y, "beforeMount");
    const H = Ka(k, R);
    H && R.beforeEnter(v), s(v, p, m), ((w = P && P.onVnodeMounted) || H || L) && Ce(() => {
      w && Ge(w, y, f), H && R.enter(v), L && wt(f, null, y, "mounted");
    }, k);
  }, te = (f, p, m, y, k) => {
    if (m && b(f, m), y)
      for (let _ = 0; _ < y.length; _++)
        b(f, y[_]);
    if (k) {
      let _ = k.subTree;
      if (h.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = ar(_.children) || _), p === _ || bo(_.type) && (_.ssContent === p || _.ssFallback === p)) {
        const O = k.vnode;
        te(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          k.parent
        );
      }
    }
  }, ke = (f, p, m, y, k, _, O, E, v = 0) => {
    for (let w = v; w < f.length; w++) {
      const P = f[w] = E ? gt(f[w]) : Fe(f[w]);
      D(
        null,
        P,
        p,
        m,
        y,
        k,
        _,
        O,
        E
      );
    }
  }, je = (f, p, m, y, k, _, O) => {
    const E = p.el = f.el;
    h.NODE_ENV !== "production" && (E.__vnode = p);
    let { patchFlag: v, dynamicChildren: w, dirs: P } = p;
    v |= f.patchFlag & 16;
    const S = f.props || K, R = p.props || K;
    let L;
    if (m && xt(m, !1), (L = R.onVnodeBeforeUpdate) && Ge(L, m, p, f), P && wt(p, f, m, "beforeUpdate"), m && xt(m, !0), h.NODE_ENV !== "production" && et && (v = 0, O = !1, w = null), (S.innerHTML && R.innerHTML == null || S.textContent && R.textContent == null) && c(E, ""), w ? (ze(
      f.dynamicChildren,
      w,
      E,
      m,
      y,
      vs(p, k),
      _
    ), h.NODE_ENV !== "production" && An(f, p)) : O || C(
      f,
      p,
      E,
      null,
      m,
      y,
      vs(p, k),
      _,
      !1
    ), v > 0) {
      if (v & 16)
        $e(E, S, R, m, k);
      else if (v & 2 && S.class !== R.class && i(E, "class", null, R.class, k), v & 4 && i(E, "style", S.style, R.style, k), v & 8) {
        const H = p.dynamicProps;
        for (let Y = 0; Y < H.length; Y++) {
          const Z = H[Y], Te = S[Z], De = R[Z];
          (De !== Te || Z === "value") && i(E, Z, Te, De, k, m);
        }
      }
      v & 1 && f.children !== p.children && c(E, p.children);
    } else !O && w == null && $e(E, S, R, m, k);
    ((L = R.onVnodeUpdated) || P) && Ce(() => {
      L && Ge(L, m, p, f), P && wt(p, f, m, "updated");
    }, y);
  }, ze = (f, p, m, y, k, _, O) => {
    for (let E = 0; E < p.length; E++) {
      const v = f[E], w = p[E], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(v, w) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? d(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      D(
        v,
        w,
        P,
        null,
        y,
        k,
        _,
        O,
        !0
      );
    }
  }, $e = (f, p, m, y, k) => {
    if (p !== m) {
      if (p !== K)
        for (const _ in p)
          !nn(_) && !(_ in m) && i(
            f,
            _,
            p[_],
            null,
            k,
            y
          );
      for (const _ in m) {
        if (nn(_)) continue;
        const O = m[_], E = p[_];
        O !== E && _ !== "value" && i(f, _, E, O, k, y);
      }
      "value" in m && i(f, "value", p.value, m.value, k);
    }
  }, At = (f, p, m, y, k, _, O, E, v) => {
    const w = p.el = f ? f.el : l(""), P = p.anchor = f ? f.anchor : l("");
    let { patchFlag: S, dynamicChildren: R, slotScopeIds: L } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (et || S & 2048) && (S = 0, v = !1, R = null), L && (E = E ? E.concat(L) : L), f == null ? (s(w, m, y), s(P, m, y), ke(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      P,
      k,
      _,
      O,
      E,
      v
    )) : S > 0 && S & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (ze(
      f.dynamicChildren,
      R,
      m,
      k,
      _,
      O,
      E
    ), h.NODE_ENV !== "production" ? An(f, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || k && p === k.subTree) && An(
        f,
        p,
        !0
        /* shallow */
      )
    )) : C(
      f,
      p,
      m,
      P,
      k,
      _,
      O,
      E,
      v
    );
  }, xn = (f, p, m, y, k, _, O, E, v) => {
    p.slotScopeIds = E, f == null ? p.shapeFlag & 512 ? k.ctx.activate(
      p,
      m,
      y,
      O,
      v
    ) : Pe(
      p,
      m,
      y,
      k,
      _,
      O,
      v
    ) : be(f, p, v);
  }, Pe = (f, p, m, y, k, _, O) => {
    const E = f.component = dc(
      f,
      y,
      k
    );
    if (h.NODE_ENV !== "production" && E.type.__hmrId && Ul(E), h.NODE_ENV !== "production" && (Tn(f), It(E, "mount")), rr(f) && (E.ctx.renderer = qt), h.NODE_ENV !== "production" && It(E, "init"), gc(E, !1, O), h.NODE_ENV !== "production" && Mt(E, "init"), E.asyncDep) {
      if (h.NODE_ENV !== "production" && et && (f.el = null), k && k.registerDep(E, T, O), !f.el) {
        const v = E.subTree = lt(Ae);
        B(null, v, p, m);
      }
    } else
      T(
        E,
        f,
        p,
        m,
        k,
        _,
        O
      );
    h.NODE_ENV !== "production" && (Cn(), Mt(E, "mount"));
  }, be = (f, p, m) => {
    const y = p.component = f.component;
    if (nc(f, p, m))
      if (y.asyncDep && !y.asyncResolved) {
        h.NODE_ENV !== "production" && Tn(p), x(y, p, m), h.NODE_ENV !== "production" && Cn();
        return;
      } else
        y.next = p, y.update();
    else
      p.el = f.el, y.vnode = p;
  }, T = (f, p, m, y, k, _, O) => {
    const E = () => {
      if (f.isMounted) {
        let { next: S, bu: R, u: L, parent: H, vnode: Y } = f;
        {
          const qe = fo(f);
          if (qe) {
            S && (S.el = Y.el, x(f, S, O)), qe.asyncDep.then(() => {
              f.isUnmounted || E();
            });
            return;
          }
        }
        let Z = S, Te;
        h.NODE_ENV !== "production" && Tn(S || f.vnode), xt(f, !1), S ? (S.el = Y.el, x(f, S, O)) : S = Y, R && Lt(R), (Te = S.props && S.props.onVnodeBeforeUpdate) && Ge(Te, H, S, Y), xt(f, !0), h.NODE_ENV !== "production" && It(f, "render");
        const De = Ir(f);
        h.NODE_ENV !== "production" && Mt(f, "render");
        const We = f.subTree;
        f.subTree = De, h.NODE_ENV !== "production" && It(f, "patch"), D(
          We,
          De,
          // parent may have changed if it's in a teleport
          d(We.el),
          // anchor may have changed if it's in a fragment
          vn(We),
          f,
          k,
          _
        ), h.NODE_ENV !== "production" && Mt(f, "patch"), S.el = De.el, Z === null && sc(f, De.el), L && Ce(L, k), (Te = S.props && S.props.onVnodeUpdated) && Ce(
          () => Ge(Te, H, S, Y),
          k
        ), h.NODE_ENV !== "production" && Wi(f), h.NODE_ENV !== "production" && Cn();
      } else {
        let S;
        const { el: R, props: L } = p, { bm: H, m: Y, parent: Z, root: Te, type: De } = f, We = on(p);
        xt(f, !1), H && Lt(H), !We && (S = L && L.onVnodeBeforeMount) && Ge(S, Z, p), xt(f, !0);
        {
          Te.ce && Te.ce._injectChildStyle(De), h.NODE_ENV !== "production" && It(f, "render");
          const qe = f.subTree = Ir(f);
          h.NODE_ENV !== "production" && Mt(f, "render"), h.NODE_ENV !== "production" && It(f, "patch"), D(
            null,
            qe,
            m,
            y,
            f,
            k,
            _
          ), h.NODE_ENV !== "production" && Mt(f, "patch"), p.el = qe.el;
        }
        if (Y && Ce(Y, k), !We && (S = L && L.onVnodeMounted)) {
          const qe = p;
          Ce(
            () => Ge(S, Z, qe),
            k
          );
        }
        (p.shapeFlag & 256 || Z && on(Z.vnode) && Z.vnode.shapeFlag & 256) && f.a && Ce(f.a, k), f.isMounted = !0, h.NODE_ENV !== "production" && Jl(f), p = m = y = null;
      }
    };
    f.scope.on();
    const v = f.effect = new bi(E);
    f.scope.off();
    const w = f.update = v.run.bind(v), P = f.job = v.runIfDirty.bind(v);
    P.i = f, P.id = f.uid, v.scheduler = () => os(P), xt(f, !0), h.NODE_ENV !== "production" && (v.onTrack = f.rtc ? (S) => Lt(f.rtc, S) : void 0, v.onTrigger = f.rtg ? (S) => Lt(f.rtg, S) : void 0), w();
  }, x = (f, p, m) => {
    p.component = f;
    const y = f.vnode.props;
    f.vnode = p, f.next = null, Ra(f, p.props, y, m), za(f, p.children, m), ft(), Nr(f), dt();
  }, C = (f, p, m, y, k, _, O, E, v = !1) => {
    const w = f && f.children, P = f ? f.shapeFlag : 0, S = p.children, { patchFlag: R, shapeFlag: L } = p;
    if (R > 0) {
      if (R & 128) {
        re(
          w,
          S,
          m,
          y,
          k,
          _,
          O,
          E,
          v
        );
        return;
      } else if (R & 256) {
        oe(
          w,
          S,
          m,
          y,
          k,
          _,
          O,
          E,
          v
        );
        return;
      }
    }
    L & 8 ? (P & 16 && Wt(w, k, _), S !== w && c(m, S)) : P & 16 ? L & 16 ? re(
      w,
      S,
      m,
      y,
      k,
      _,
      O,
      E,
      v
    ) : Wt(w, k, _, !0) : (P & 8 && c(m, ""), L & 16 && ke(
      S,
      m,
      y,
      k,
      _,
      O,
      E,
      v
    ));
  }, oe = (f, p, m, y, k, _, O, E, v) => {
    f = f || Ht, p = p || Ht;
    const w = f.length, P = p.length, S = Math.min(w, P);
    let R;
    for (R = 0; R < S; R++) {
      const L = p[R] = v ? gt(p[R]) : Fe(p[R]);
      D(
        f[R],
        L,
        m,
        null,
        k,
        _,
        O,
        E,
        v
      );
    }
    w > P ? Wt(
      f,
      k,
      _,
      !0,
      !1,
      S
    ) : ke(
      p,
      m,
      y,
      k,
      _,
      O,
      E,
      v,
      S
    );
  }, re = (f, p, m, y, k, _, O, E, v) => {
    let w = 0;
    const P = p.length;
    let S = f.length - 1, R = P - 1;
    for (; w <= S && w <= R; ) {
      const L = f[w], H = p[w] = v ? gt(p[w]) : Fe(p[w]);
      if (Jt(L, H))
        D(
          L,
          H,
          m,
          null,
          k,
          _,
          O,
          E,
          v
        );
      else
        break;
      w++;
    }
    for (; w <= S && w <= R; ) {
      const L = f[S], H = p[R] = v ? gt(p[R]) : Fe(p[R]);
      if (Jt(L, H))
        D(
          L,
          H,
          m,
          null,
          k,
          _,
          O,
          E,
          v
        );
      else
        break;
      S--, R--;
    }
    if (w > S) {
      if (w <= R) {
        const L = R + 1, H = L < P ? p[L].el : y;
        for (; w <= R; )
          D(
            null,
            p[w] = v ? gt(p[w]) : Fe(p[w]),
            m,
            H,
            k,
            _,
            O,
            E,
            v
          ), w++;
      }
    } else if (w > R)
      for (; w <= S; )
        Ue(f[w], k, _, !0), w++;
    else {
      const L = w, H = w, Y = /* @__PURE__ */ new Map();
      for (w = H; w <= R; w++) {
        const ye = p[w] = v ? gt(p[w]) : Fe(p[w]);
        ye.key != null && (h.NODE_ENV !== "production" && Y.has(ye.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(ye.key),
          "Make sure keys are unique."
        ), Y.set(ye.key, w));
      }
      let Z, Te = 0;
      const De = R - H + 1;
      let We = !1, qe = 0;
      const Kt = new Array(De);
      for (w = 0; w < De; w++) Kt[w] = 0;
      for (w = L; w <= S; w++) {
        const ye = f[w];
        if (Te >= De) {
          Ue(ye, k, _, !0);
          continue;
        }
        let Ke;
        if (ye.key != null)
          Ke = Y.get(ye.key);
        else
          for (Z = H; Z <= R; Z++)
            if (Kt[Z - H] === 0 && Jt(ye, p[Z])) {
              Ke = Z;
              break;
            }
        Ke === void 0 ? Ue(ye, k, _, !0) : (Kt[Ke - H] = w + 1, Ke >= qe ? qe = Ke : We = !0, D(
          ye,
          p[Ke],
          m,
          null,
          k,
          _,
          O,
          E,
          v
        ), Te++);
      }
      const _r = We ? Ga(Kt) : Ht;
      for (Z = _r.length - 1, w = De - 1; w >= 0; w--) {
        const ye = H + w, Ke = p[ye], yr = ye + 1 < P ? p[ye + 1].el : y;
        Kt[w] === 0 ? D(
          null,
          Ke,
          m,
          yr,
          k,
          _,
          O,
          E,
          v
        ) : We && (Z < 0 || w !== _r[Z] ? fe(Ke, m, yr, 2) : Z--);
      }
    }
  }, fe = (f, p, m, y, k = null) => {
    const { el: _, type: O, transition: E, children: v, shapeFlag: w } = f;
    if (w & 6) {
      fe(f.component.subTree, p, m, y);
      return;
    }
    if (w & 128) {
      f.suspense.move(p, m, y);
      return;
    }
    if (w & 64) {
      O.move(f, p, m, qt);
      return;
    }
    if (O === ve) {
      s(_, p, m);
      for (let S = 0; S < v.length; S++)
        fe(v[S], p, m, y);
      s(f.anchor, p, m);
      return;
    }
    if (O === Pn) {
      he(f, p, m);
      return;
    }
    if (y !== 2 && w & 1 && E)
      if (y === 0)
        E.beforeEnter(_), s(_, p, m), Ce(() => E.enter(_), k);
      else {
        const { leave: S, delayLeave: R, afterLeave: L } = E, H = () => s(_, p, m), Y = () => {
          S(_, () => {
            H(), L && L();
          });
        };
        R ? R(_, H, Y) : Y();
      }
    else
      s(_, p, m);
  }, Ue = (f, p, m, y = !1, k = !1) => {
    const {
      type: _,
      props: O,
      ref: E,
      children: v,
      dynamicChildren: w,
      shapeFlag: P,
      patchFlag: S,
      dirs: R,
      cacheIndex: L
    } = f;
    if (S === -2 && (k = !1), E != null && Wn(E, null, m, f, !0), L != null && (p.renderCache[L] = void 0), P & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const H = P & 1 && R, Y = !on(f);
    let Z;
    if (Y && (Z = O && O.onVnodeBeforeUnmount) && Ge(Z, p, f), P & 6)
      Bo(f.component, m, y);
    else {
      if (P & 128) {
        f.suspense.unmount(m, y);
        return;
      }
      H && wt(f, null, p, "beforeUnmount"), P & 64 ? f.type.remove(
        f,
        p,
        m,
        qt,
        y
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ve || S > 0 && S & 64) ? Wt(
        w,
        p,
        m,
        !1,
        !0
      ) : (_ === ve && S & 384 || !k && P & 16) && Wt(v, p, m), y && hs(f);
    }
    (Y && (Z = O && O.onVnodeUnmounted) || H) && Ce(() => {
      Z && Ge(Z, p, f), H && wt(f, null, p, "unmounted");
    }, m);
  }, hs = (f) => {
    const { type: p, el: m, anchor: y, transition: k } = f;
    if (p === ve) {
      h.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && k && !k.persisted ? f.children.forEach((O) => {
        O.type === Ae ? r(O.el) : hs(O);
      }) : Ho(m, y);
      return;
    }
    if (p === Pn) {
      V(f);
      return;
    }
    const _ = () => {
      r(m), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (f.shapeFlag & 1 && k && !k.persisted) {
      const { leave: O, delayLeave: E } = k, v = () => O(m, _);
      E ? E(f.el, _, v) : v();
    } else
      _();
  }, Ho = (f, p) => {
    let m;
    for (; f !== p; )
      m = g(f), r(f), f = m;
    r(p);
  }, Bo = (f, p, m) => {
    h.NODE_ENV !== "production" && f.type.__hmrId && Wl(f);
    const { bum: y, scope: k, job: _, subTree: O, um: E, m: v, a: w } = f;
    Pr(v), Pr(w), y && Lt(y), k.stop(), _ && (_.flags |= 8, Ue(O, f, p, m)), E && Ce(E, p), Ce(() => {
      f.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && Yl(f);
  }, Wt = (f, p, m, y = !1, k = !1, _ = 0) => {
    for (let O = _; O < f.length; O++)
      Ue(f[O], p, m, y, k);
  }, vn = (f) => {
    if (f.shapeFlag & 6)
      return vn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = g(f.anchor || f.el), m = p && p[sa];
    return m ? g(m) : p;
  };
  let gs = !1;
  const kr = (f, p, m) => {
    f == null ? p._vnode && Ue(p._vnode, null, null, !0) : D(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = f, gs || (gs = !0, Nr(), Hi(), gs = !1);
  }, qt = {
    p: D,
    um: Ue,
    m: fe,
    r: hs,
    mt: Pe,
    mc: ke,
    pc: C,
    pbc: ze,
    n: vn,
    o: e
  };
  return {
    render: kr,
    hydrate: void 0,
    createApp: $a(kr)
  };
}
function vs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ka(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function An(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (A(s) && A(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = gt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && An(o, l)), l.type === _n && (l.el = o.el), h.NODE_ENV !== "production" && l.type === Ae && !l.el && (l.el = o.el);
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
function fo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fo(t);
}
function Pr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Za = Symbol.for("v-scx"), Ja = () => {
  {
    const e = Rn(Za);
    return e || h.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Es(e, t, n) {
  return h.NODE_ENV !== "production" && !I(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), po(e, t, n);
}
function po(e, t, n = K) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  h.NODE_ENV !== "production" && !t && (s !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ce({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = N);
  const a = t && s || !t && i !== "post";
  let u;
  if (hn) {
    if (i === "sync") {
      const b = Ja();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!a) {
      const b = () => {
      };
      return b.stop = pe, b.resume = pe, b.pause = pe, b;
    }
  }
  const c = me;
  l.call = (b, $, D) => nt(b, c, $, D);
  let d = !1;
  i === "post" ? l.scheduler = (b) => {
    Ce(b, c && c.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (b, $) => {
    $ ? b() : os(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), d && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const g = Il(e, t, l);
  return hn && (u ? u.push(g) : a && g()), g;
}
function Qa(e, t, n) {
  const s = this.proxy, r = se(e) ? e.includes(".") ? ho(s, e) : () => s[e] : e.bind(s, s);
  let i;
  I(t) ? i = t : (i = t.handler, n = t);
  const o = yn(this), l = po(r, i.bind(s), n);
  return o(), l;
}
function ho(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${kt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || K;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = e;
    if (c)
      if (!(t in c))
        (!d || !(Et(He(t)) in d)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Et(He(t))}" prop.`
        );
      else {
        const g = c[t];
        I(g) && (g(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), o = i && Ya(s, t.slice(7));
  if (o && (o.trim && (r = n.map((c) => se(c) ? c.trim() : c)), o.number && (r = n.map(Ss))), h.NODE_ENV !== "production" && ta(e, t, r), h.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && s[Et(c)] && N(
      `Event "${c}" is emitted in component ${fs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${kt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Et(t)] || // also try camelCase event handler (#2249)
  s[l = Et(He(t))];
  !a && i && (a = s[l = Et(kt(t))]), a && nt(
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
    e.emitted[l] = !0, nt(
      u,
      e,
      6,
      r
    );
  }
}
function go(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!I(e)) {
    const a = (u) => {
      const c = go(u, t, !0);
      c && (l = !0, ce(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Q(e) && s.set(e, null), null) : (A(i) ? i.forEach((a) => o[a] = null) : ce(o, i), Q(e) && s.set(e, o), o);
}
function as(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, kt(t)) || z(e, t));
}
let Fs = !1;
function Gn() {
  Fs = !0;
}
function Ir(e) {
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
    data: g,
    setupState: b,
    ctx: $,
    inheritAttrs: D
  } = e, U = Un(e);
  let B, W;
  h.NODE_ENV !== "production" && (Fs = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = r || s, ne = h.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(V, {
        get(ue, te, ke) {
          return N(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ue, te, ke);
        }
      }) : V;
      B = Fe(
        u.call(
          ne,
          V,
          c,
          h.NODE_ENV !== "production" ? Xe(d) : d,
          b,
          g,
          $
        )
      ), W = l;
    } else {
      const V = t;
      h.NODE_ENV !== "production" && l === d && Gn(), B = Fe(
        V.length > 1 ? V(
          h.NODE_ENV !== "production" ? Xe(d) : d,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Gn(), Xe(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : V(
          h.NODE_ENV !== "production" ? Xe(d) : d,
          null
        )
      ), W = t.props ? l : ec(l);
    }
  } catch (V) {
    ln.length = 0, bn(V, e, 1), B = lt(Ae);
  }
  let F = B, he;
  if (h.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && ([F, he] = mo(B)), W && D !== !1) {
    const V = Object.keys(W), { shapeFlag: ne } = F;
    if (V.length) {
      if (ne & 7)
        i && V.some(Ln) && (W = tc(
          W,
          i
        )), F = _t(F, W, !1, !0);
      else if (h.NODE_ENV !== "production" && !Fs && F.type !== Ae) {
        const ue = Object.keys(l), te = [], ke = [];
        for (let je = 0, ze = ue.length; je < ze; je++) {
          const $e = ue[je];
          gn($e) ? Ln($e) || te.push($e[2].toLowerCase() + $e.slice(3)) : ke.push($e);
        }
        ke.length && N(
          `Extraneous non-props attributes (${ke.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && N(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Mr(F) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), F = _t(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Mr(F) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), sr(F, n.transition)), h.NODE_ENV !== "production" && he ? he(F) : B = F, Un(U), B;
}
const mo = (e) => {
  const t = e.children, n = e.dynamicChildren, s = ar(t, !1);
  if (s) {
    if (h.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return mo(s);
  } else return [e, void 0];
  const r = t.indexOf(s), i = n ? n.indexOf(s) : -1, o = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Fe(s), o];
};
function ar(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (cs(r)) {
      if (r.type !== Ae || r.children === "v-if") {
        if (n)
          return;
        if (n = r, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ar(n.children);
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
    (!Ln(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Mr = (e) => e.shapeFlag & 7 || e.type === Ae;
function nc(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (h.NODE_ENV !== "production" && (r || l) && et || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Lr(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const g = c[d];
        if (o[g] !== s[g] && !as(u, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Lr(s, o, u) : !0 : !!o;
  return !1;
}
function Lr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !as(n, i))
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
const bo = (e) => e.__isSuspense;
function rc(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e);
}
const ve = Symbol.for("v-fgt"), _n = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), Pn = Symbol.for("v-stc"), ln = [];
let Re = null;
function ie(e = !1) {
  ln.push(Re = e ? null : []);
}
function ic() {
  ln.pop(), Re = ln[ln.length - 1] || null;
}
let pn = 1;
function jr(e, t = !1) {
  pn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function ko(e) {
  return e.dynamicChildren = pn > 0 ? Re || Ht : null, ic(), pn > 0 && Re && Re.push(e), e;
}
function le(e, t, n, s, r, i) {
  return ko(
    M(
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
  return ko(
    lt(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function cs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Vn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const lc = (...e) => yo(
  ...e
), _o = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ae(e) || I(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, s = 0, r = null, i = e === ve ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _o(t),
    ref: t && In(t),
    scopeId: Ki,
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
    ctx: Ee
  };
  return l ? (cr(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= se(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && N("VNode created with invalid key (NaN). VNode type:", a.type), pn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const lt = h.NODE_ENV !== "production" ? lc : yo;
function yo(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ka) && (h.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), cs(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cr(l, n), pn > 0 && !i && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (Oo(e) && (e = e.__vccOpts), t) {
    t = ac(t);
    let { class: l, style: a } = t;
    l && !se(l) && (t.class = Se(l)), Q(a) && (Fn(a) && !A(a) && (a = ce({}, a)), t.style = Ie(a));
  }
  const o = se(e) ? 1 : bo(e) ? 128 : ra(e) ? 64 : Q(e) ? 4 : I(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && o & 4 && Fn(e) && (e = j(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), M(
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
  return e ? Fn(e) || ro(e) ? ce({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, u = t ? cc(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && _o(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? A(i) ? i.concat(In(t)) : [i, In(t)] : In(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && o === -1 && A(l) ? l.map(wo) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && sr(
    c,
    a.clone(c)
  ), c;
}
function wo(e) {
  const t = _t(e);
  return A(e.children) && (t.children = e.children.map(wo)), t;
}
function xo(e = " ", t = 0) {
  return lt(_n, null, e, t);
}
function vt(e = "", t = !1) {
  return t ? (ie(), oc(Ae, null, e)) : lt(Ae, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? lt(Ae) : A(e) ? lt(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cs(e) ? gt(e) : lt(_n, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function cr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), cr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ro(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [xo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function cc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Se([t.class, s.class]));
      else if (r === "style")
        t.style = Ie([t.style, s.style]);
      else if (gn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(A(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ge(e, t, n, s = null) {
  nt(e, t, 7, [
    n,
    s
  ]);
}
const uc = to();
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
    propsOptions: oo(s, r),
    emitsOptions: go(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
let me = null;
const pc = () => me || Ee;
let Zn, Hs;
{
  const e = mn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (n) => hn = n
  );
}
const yn = (e) => {
  const t = me;
  return Zn(e), e.scope.on(), () => {
    e.scope.off(), Zn(t);
  };
}, Fr = () => {
  me && me.scope.off(), Zn(null);
}, hc = /* @__PURE__ */ ut("slot,component");
function Bs(e, { isNativeTag: t }) {
  (hc(e) || t(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vo(e) {
  return e.vnode.shapeFlag & 4;
}
let hn = !1;
function gc(e, t = !1, n = !1) {
  t && Hs(t);
  const { props: s, children: r } = e.vnode, i = vo(e);
  Ca(e, s, i, t), Ba(e, r, n);
  const o = i ? mc(e, t) : void 0;
  return t && Hs(!1), o;
}
function mc(e, t) {
  var n;
  const s = e.type;
  if (h.NODE_ENV !== "production") {
    if (s.name && Bs(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let o = 0; o < i.length; o++)
        Bs(i[o], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let o = 0; o < i.length; o++)
        Gi(i[o]);
    }
    s.compilerOptions && kc() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yi), h.NODE_ENV !== "production" && ya(e);
  const { setup: r } = s;
  if (r) {
    ft();
    const i = e.setupContext = r.length > 1 ? yc(e) : null, o = yn(e), l = Ut(
      r,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? Xe(e.props) : e.props,
        i
      ]
    ), a = qs(l);
    if (dt(), o(), (a || e.sp) && !on(e) && Zi(e), a) {
      if (l.then(Fr, Fr), t)
        return l.then((u) => {
          Hr(e, u, t);
        }).catch((u) => {
          bn(u, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        N(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Hr(e, l, t);
  } else
    Eo(e, t);
}
function Hr(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) ? (h.NODE_ENV !== "production" && cs(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Pi(t), h.NODE_ENV !== "production" && wa(e)) : h.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Eo(e, n);
}
let bc;
const kc = () => !bc;
function Eo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || pe);
  {
    const r = yn(e);
    ft();
    try {
      va(e);
    } finally {
      dt(), r();
    }
  }
  h.NODE_ENV !== "production" && !s.render && e.render === pe && !t && (s.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function: ", s));
}
const Br = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Gn(), de(e, "get", ""), e[t];
  },
  set() {
    return N("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return N("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return de(e, "get", ""), e[t];
  }
};
function _c(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return de(e, "get", "$slots"), t[n];
    }
  });
}
function yc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (A(n) ? s = "array" : ae(n) && (s = "ref")), s !== "object" && N(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Br));
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
      attrs: new Proxy(e.attrs, Br),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function us(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pi($l(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Tt)
        return Tt[n](e);
    },
    has(t, n) {
      return n in t || n in Tt;
    }
  })) : e.proxy;
}
const wc = /(?:^|[-_])(\w)/g, xc = (e) => e.replace(wc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function No(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fs(e, t, n = !1) {
  let s = No(t);
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
function Oo(e) {
  return I(e) && "__vccOpts" in e;
}
const vc = (e, t) => {
  const n = Al(e, t, hn);
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
      return Q(d) ? d.__isVue ? ["div", e, "VueInstance"] : ae(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in d ? d._value : d),
        ">"
      ] : St(d) ? [
        "div",
        {},
        ["span", e, Oe(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${ct(d) ? " (readonly)" : ""}`
      ] : ct(d) ? [
        "div",
        {},
        ["span", e, Oe(d) ? "ShallowReadonly" : "Readonly"],
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
    const g = [];
    d.type.props && d.props && g.push(o("props", j(d.props))), d.setupState !== K && g.push(o("setup", d.setupState)), d.data !== K && g.push(o("data", j(d.data)));
    const b = a(d, "computed");
    b && g.push(o("computed", b));
    const $ = a(d, "inject");
    return $ && g.push(o("injected", $)), g.push([
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
    ]), g;
  }
  function o(d, g) {
    return g = ce({}, g), Object.keys(g).length ? [
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
        ...Object.keys(g).map((b) => [
          "div",
          {},
          ["span", s, b + ": "],
          l(g[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : Q(d) ? ["object", { object: g ? j(d) : d }] : ["span", n, String(d)];
  }
  function a(d, g) {
    const b = d.type;
    if (I(b))
      return;
    const $ = {};
    for (const D in d.ctx)
      u(b, D, g) && ($[D] = d.ctx[D]);
    return $;
  }
  function u(d, g, b) {
    const $ = d[b];
    if (A($) && $.includes(g) || Q($) && g in $ || d.extends && u(d.extends, g, b) || d.mixins && d.mixins.some((D) => u(D, g, b)))
      return !0;
  }
  function c(d) {
    return Oe(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const zr = "3.5.13", at = h.NODE_ENV !== "production" ? N : pe;
var st = {};
let zs;
const Ur = typeof window < "u" && window.trustedTypes;
if (Ur)
  try {
    zs = /* @__PURE__ */ Ur.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    st.NODE_ENV !== "production" && at(`Error creating trusted types policy: ${e}`);
  }
const Do = zs ? (e) => zs.createHTML(e) : (e) => e, Nc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", it = typeof document < "u" ? document : null, Wr = it && /* @__PURE__ */ it.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? it.createElementNS(Nc, e) : t === "mathml" ? it.createElementNS(Oc, e) : n ? it.createElement(e, { is: n }) : it.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
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
      Wr.innerHTML = Do(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Wr.content;
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
function $c(e, t, n) {
  const s = e[Sc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Jn = Symbol("_vod"), So = Symbol("_vsh"), $o = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Jn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Qt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Qt(e, !0), s.enter(e)) : s.leave(e, () => {
      Qt(e, !1);
    }) : Qt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qt(e, t);
  }
};
st.NODE_ENV !== "production" && ($o.name = "show");
function Qt(e, t) {
  e.style.display = t ? e[Jn] : "none", e[So] = !t;
}
const Tc = Symbol(st.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cc = /(^|;)\s*display\s*:/;
function Vc(e, t, n) {
  const s = e.style, r = se(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Mn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Mn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Mn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Tc];
      o && (n += ";" + o), s.cssText = n, i = Cc.test(n);
    }
  } else t && e.removeAttribute("style");
  Jn in e && (e[Jn] = i ? s.display : "", e[So] && (s.display = "none"));
}
const Rc = /[^\\];\s*$/, qr = /\s*!important$/;
function Mn(e, t, n) {
  if (A(n))
    n.forEach((s) => Mn(e, t, s));
  else if (n == null && (n = ""), st.NODE_ENV !== "production" && Rc.test(n) && at(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ac(e, t);
    qr.test(n) ? e.setProperty(
      kt(s),
      n.replace(qr, ""),
      "important"
    ) : e[s] = n;
  }
}
const Kr = ["Webkit", "Moz", "ms"], Ns = {};
function Ac(e, t) {
  const n = Ns[t];
  if (n)
    return n;
  let s = He(t);
  if (s !== "filter" && s in e)
    return Ns[t] = s;
  s = ns(s);
  for (let r = 0; r < Kr.length; r++) {
    const i = Kr[r] + s;
    if (i in e)
      return Ns[t] = i;
  }
  return t;
}
const Gr = "http://www.w3.org/1999/xlink";
function Zr(e, t, n, s, r, i = ll(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gr, t.slice(6, t.length)) : e.setAttributeNS(Gr, t, n) : n == null || i && !hi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : yt(n) ? String(n) : n
  );
}
function Jr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Do(n) : n);
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
    l === "boolean" ? n = hi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    st.NODE_ENV !== "production" && !o && at(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  o && e.removeAttribute(r || t);
}
function Ft(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Qr = Symbol("_vei");
function Ic(e, t, n, s, r = null) {
  const i = e[Qr] || (e[Qr] = {}), o = i[t];
  if (s && o)
    o.value = st.NODE_ENV !== "production" ? Xr(s, t) : s;
  else {
    const [l, a] = Mc(t);
    if (s) {
      const u = i[t] = Fc(
        st.NODE_ENV !== "production" ? Xr(s, t) : s,
        r
      );
      Ft(e, l, u, a);
    } else o && (Pc(e, l, o, a), i[t] = void 0);
  }
}
const Yr = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (Yr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Yr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : kt(e.slice(2)), t];
}
let Os = 0;
const Lc = /* @__PURE__ */ Promise.resolve(), jc = () => Os || (Lc.then(() => Os = 0), Os = Date.now());
function Fc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    nt(
      Hc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function Xr(e, t) {
  return I(e) || A(e) ? e : (at(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), pe);
}
function Hc(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? $c(e, s, o) : t === "style" ? Vc(e, n, s) : gn(t) ? Ln(t) || Ic(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zc(e, t, s, o)) ? (Jr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zr(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !se(s)) ? Jr(e, He(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Zr(e, t, s, o));
};
function zc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ei(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ei(t) && se(n) ? !1 : t in e;
}
const ti = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (n) => Lt(t, n) : t;
};
function Uc(e) {
  e.target.composing = !0;
}
function ni(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ds = Symbol("_assign"), Wc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Ds] = ti(r);
    const i = s || r.props && r.props.type === "number";
    Ft(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Ss(l)), e[Ds](l);
    }), n && Ft(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ft(e, "compositionstart", Uc), Ft(e, "compositionend", ni), Ft(e, "change", ni));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Ds] = ti(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ss(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, qc = /* @__PURE__ */ ce({ patchProp: Bc }, Dc);
let si;
function Kc() {
  return si || (si = Wa(qc));
}
const Gc = (...e) => {
  const t = Kc().createApp(...e);
  st.NODE_ENV !== "production" && (Jc(t), Qc(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = Yc(s);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
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
        at(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return at(s), n;
      },
      set() {
        at(s);
      }
    });
  }
}
function Yc(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return st.NODE_ENV !== "production" && !t && at(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return st.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && at(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Xc = {};
function eu() {
  Ec();
}
Xc.NODE_ENV !== "production" && eu();
function ur() {
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
let Rt = ur();
function To(e) {
  Rt = e;
}
const an = { exec: () => null };
function J(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(Ne.caret, "$1"), n = n.replace(r, o), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
}
const Ne = {
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
}, tu = /^(?:[ \t]*(?:\n|$))+/, nu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, su = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, wn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ru = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Co = /(?:[*+-]|\d{1,9}[.)])/, Vo = J(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Co).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), fr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, iu = /^[^\n]+/, dr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, ou = J(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", dr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), lu = J(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Co).getRegex(), ds = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", pr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, au = J("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", pr).replace("tag", ds).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ro = J(fr).replace("hr", wn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex(), cu = J(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ro).getRegex(), hr = {
  blockquote: cu,
  code: nu,
  def: ou,
  fences: su,
  heading: ru,
  hr: wn,
  html: au,
  lheading: Vo,
  list: lu,
  newline: tu,
  paragraph: Ro,
  table: an,
  text: iu
}, ri = J("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", wn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex(), uu = {
  ...hr,
  table: ri,
  paragraph: J(fr).replace("hr", wn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ri).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ds).getRegex()
}, fu = {
  ...hr,
  html: J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", pr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: an,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: J(fr).replace("hr", wn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Vo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, du = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ao = /^( {2,}|\\)\n(?!\s*$)/, hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ps = /[\p{P}\p{S}]/u, gr = /[\s\p{P}\p{S}]/u, Po = /[^\s\p{P}\p{S}]/u, gu = J(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, gr).getRegex(), Io = /(?!~)[\p{P}\p{S}]/u, mu = /(?!~)[\s\p{P}\p{S}]/u, bu = /(?:[^\s\p{P}\p{S}]|~)/u, ku = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Mo = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, _u = J(Mo, "u").replace(/punct/g, ps).getRegex(), yu = J(Mo, "u").replace(/punct/g, Io).getRegex(), Lo = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", wu = J(Lo, "gu").replace(/notPunctSpace/g, Po).replace(/punctSpace/g, gr).replace(/punct/g, ps).getRegex(), xu = J(Lo, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, mu).replace(/punct/g, Io).getRegex(), vu = J("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Po).replace(/punctSpace/g, gr).replace(/punct/g, ps).getRegex(), Eu = J(/\\(punct)/, "gu").replace(/punct/g, ps).getRegex(), Nu = J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ou = J(pr).replace("(?:-->|$)", "-->").getRegex(), Du = J("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ou).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Qn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Su = J(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Qn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), jo = J(/^!?\[(label)\]\[(ref)\]/).replace("label", Qn).replace("ref", dr).getRegex(), Fo = J(/^!?\[(ref)\](?:\[\])?/).replace("ref", dr).getRegex(), $u = J("reflink|nolink(?!\\()", "g").replace("reflink", jo).replace("nolink", Fo).getRegex(), mr = {
  _backpedal: an,
  // only used for GFM url
  anyPunctuation: Eu,
  autolink: Nu,
  blockSkip: ku,
  br: Ao,
  code: pu,
  del: an,
  emStrongLDelim: _u,
  emStrongRDelimAst: wu,
  emStrongRDelimUnd: vu,
  escape: du,
  link: Su,
  nolink: Fo,
  punctuation: gu,
  reflink: jo,
  reflinkSearch: $u,
  tag: Du,
  text: hu,
  url: an
}, Tu = {
  ...mr,
  link: J(/^!?\[(label)\]\((.*?)\)/).replace("label", Qn).getRegex(),
  reflink: J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Qn).getRegex()
}, Us = {
  ...mr,
  emStrongRDelimAst: xu,
  emStrongLDelim: yu,
  url: J(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Cu = {
  ...Us,
  br: J(Ao).replace("{2,}", "*").getRegex(),
  text: J(Us.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Sn = {
  normal: hr,
  gfm: uu,
  pedantic: fu
}, Yt = {
  normal: mr,
  gfm: Us,
  breaks: Cu,
  pedantic: Tu
}, Vu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ii = (e) => Vu[e];
function Ze(e, t) {
  if (t) {
    if (Ne.escapeTest.test(e))
      return e.replace(Ne.escapeReplace, ii);
  } else if (Ne.escapeTestNoEncode.test(e))
    return e.replace(Ne.escapeReplaceNoEncode, ii);
  return e;
}
function oi(e) {
  try {
    e = encodeURI(e).replace(Ne.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function li(e, t) {
  var i;
  const n = e.replace(Ne.findPipe, (o, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(Ne.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((i = s.at(-1)) != null && i.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; )
        s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(Ne.slashPipe, "|");
  return s;
}
function Xt(e, t, n) {
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
function ai(e, t, n, s, r) {
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
class Yn {
  // set by the lexer
  constructor(t) {
    X(this, "options");
    X(this, "rules");
    // set by the lexer
    X(this, "lexer");
    this.options = t || Rt;
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
        text: this.options.pedantic ? s : Xt(s, `
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
        const r = Xt(s, "#");
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
        raw: Xt(n[0], `
`)
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let s = Xt(n[0], `
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
        const g = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, o, !0), this.lexer.state.top = g, s.length === 0)
          break;
        const b = o.at(-1);
        if ((b == null ? void 0 : b.type) === "code")
          break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          const $ = b, D = $.raw + `
` + s.join(`
`), U = this.blockquote(D);
          o[o.length - 1] = U, r = r.substring(0, r.length - $.raw.length) + U.raw, i = i.substring(0, i.length - $.text.length) + U.text;
          break;
        } else if ((b == null ? void 0 : b.type) === "list") {
          const $ = b, D = $.raw + `
` + s.join(`
`), U = this.list(D);
          o[o.length - 1] = U, r = r.substring(0, r.length - b.raw.length) + U.raw, i = i.substring(0, i.length - $.raw.length) + U.raw, s = D.substring(o.at(-1).raw.length).split(`
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
        let g = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (W) => " ".repeat(3 * W.length)), b = t.split(`
`, 1)[0], $ = !g.trim(), D = 0;
        if (this.options.pedantic ? (D = 2, d = g.trimStart()) : $ ? D = n[1].length + 1 : (D = n[2].search(this.rules.other.nonSpaceChar), D = D > 4 ? 1 : D, d = g.slice(D), D += n[1].length), $ && this.rules.other.blankLine.test(b) && (c += b + `
`, t = t.substring(b.length + 1), u = !0), !u) {
          const W = this.rules.other.nextBulletRegex(D), F = this.rules.other.hrRegex(D), he = this.rules.other.fencesBeginRegex(D), V = this.rules.other.headingBeginRegex(D), ne = this.rules.other.htmlBeginRegex(D);
          for (; t; ) {
            const ue = t.split(`
`, 1)[0];
            let te;
            if (b = ue, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), te = b) : te = b.replace(this.rules.other.tabCharGlobal, "    "), he.test(b) || V.test(b) || ne.test(b) || W.test(b) || F.test(b))
              break;
            if (te.search(this.rules.other.nonSpaceChar) >= D || !b.trim())
              d += `
` + te.slice(D);
            else {
              if ($ || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || he.test(g) || V.test(g) || F.test(g))
                break;
              d += `
` + b;
            }
            !$ && !b.trim() && ($ = !0), c += ue + `
`, t = t.substring(ue.length + 1), g = te.slice(D);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let U = null, B;
        this.options.gfm && (U = this.rules.other.listIsTask.exec(d), U && (B = U[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!U,
          checked: B,
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
          const c = i.items[u].tokens.filter((g) => g.type === "space"), d = c.length > 0 && c.some((g) => this.rules.other.anyLine.test(g.raw));
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
    const s = li(n[1]), r = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        o.rows.push(li(a, o.header.length).map((u, c) => ({
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
        const o = Xt(s.slice(0, -1), "\\");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), ai(n, {
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
      return ai(s, i, s[0], this.lexer, this.rules);
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
        const g = [...r[0]][0].length, b = t.slice(0, o + r.index + g + a);
        if (Math.min(o, a) % 2) {
          const D = b.slice(1, -1);
          return {
            type: "em",
            raw: b,
            text: D,
            tokens: this.lexer.inlineTokens(D)
          };
        }
        const $ = b.slice(2, -2);
        return {
          type: "strong",
          raw: b,
          text: $,
          tokens: this.lexer.inlineTokens($)
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
    X(this, "tokens");
    X(this, "options");
    X(this, "state");
    X(this, "tokenizer");
    X(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Rt, this.options.tokenizer = this.options.tokenizer || new Yn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Ne,
      block: Sn.normal,
      inline: Yt.normal
    };
    this.options.pedantic ? (n.block = Sn.pedantic, n.inline = Yt.pedantic) : this.options.gfm && (n.block = Sn.gfm, this.options.breaks ? n.inline = Yt.breaks : n.inline = Yt.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Sn,
      inline: Yt
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
    t = t.replace(Ne.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, i, o;
    for (this.options.pedantic && (t = t.replace(Ne.tabCharGlobal, "    ").replace(Ne.spaceLine, "")); t; ) {
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
        this.options.extensions.startBlock.forEach((g) => {
          d = g.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
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
      if ((a = (l = this.options.extensions) == null ? void 0 : l.inline) != null && a.some((g) => (c = g.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1))
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
        const g = n.at(-1);
        c.type === "text" && (g == null ? void 0 : g.type) === "text" ? (g.raw += c.raw, g.text += c.text) : n.push(c);
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
        let g = 1 / 0;
        const b = t.slice(1);
        let $;
        this.options.extensions.startInline.forEach((D) => {
          $ = D.call({ lexer: this }, b), typeof $ == "number" && $ >= 0 && (g = Math.min(g, $));
        }), g < 1 / 0 && g >= 0 && (d = t.substring(0, g + 1));
      }
      if (c = this.tokenizer.inlineText(d)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)), i = !0;
        const g = n.at(-1);
        (g == null ? void 0 : g.type) === "text" ? (g.raw += c.raw, g.text += c.text) : n.push(c);
        continue;
      }
      if (t) {
        const g = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(g);
          break;
        } else
          throw new Error(g);
      }
    }
    return n;
  }
}
class Xn {
  // set by the parser
  constructor(t) {
    X(this, "options");
    X(this, "parser");
    this.options = t || Rt;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: s }) {
    var o;
    const r = (o = (n || "").match(Ne.notSpaceStart)) == null ? void 0 : o[0], i = t.replace(Ne.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Ze(r) + '">' + (s ? i : Ze(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : Ze(i, !0)) + `</code></pre>
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
      t.loose ? ((s = t.tokens[0]) == null ? void 0 : s.type) === "paragraph" ? (t.tokens[0].text = r + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = r + " " + Ze(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
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
    return `<code>${Ze(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: s }) {
    const r = this.parser.parseInline(s), i = oi(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return n && (o += ' title="' + Ze(n) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: n, text: s }) {
    const r = oi(t);
    if (r === null)
      return Ze(s);
    t = r;
    let i = `<img src="${t}" alt="${s}"`;
    return n && (i += ` title="${Ze(n)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Ze(t.text);
  }
}
class br {
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
    X(this, "options");
    X(this, "renderer");
    X(this, "textRenderer");
    this.options = t || Rt, this.options.renderer = this.options.renderer || new Xn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new br();
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
class cn {
  constructor(t) {
    X(this, "options");
    X(this, "block");
    this.options = t || Rt;
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
X(cn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Pu {
  constructor(...t) {
    X(this, "defaults", ur());
    X(this, "options", this.setOptions);
    X(this, "parse", this.parseMarkdown(!0));
    X(this, "parseInline", this.parseMarkdown(!1));
    X(this, "Parser", Le);
    X(this, "Renderer", Xn);
    X(this, "TextRenderer", br);
    X(this, "Lexer", Me);
    X(this, "Tokenizer", Yn);
    X(this, "Hooks", cn);
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
        const i = this.defaults.renderer || new Xn(this.defaults);
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
        const i = this.defaults.tokenizer || new Yn(this.defaults);
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
        const i = this.defaults.hooks || new cn();
        for (const o in s.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, a = s.hooks[l], u = i[l];
          cn.passThroughHooks.has(o) ? i[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(i, c)).then((g) => u.call(i, g));
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
        const r = "<p>An error occurred:</p><pre>" + Ze(s.message + "", !0) + "</pre>";
        return n ? Promise.resolve(r) : r;
      }
      if (n)
        return Promise.reject(s);
      throw s;
    };
  }
}
const Vt = new Pu();
function G(e, t) {
  return Vt.parse(e, t);
}
G.options = G.setOptions = function(e) {
  return Vt.setOptions(e), G.defaults = Vt.defaults, To(G.defaults), G;
};
G.getDefaults = ur;
G.defaults = Rt;
G.use = function(...e) {
  return Vt.use(...e), G.defaults = Vt.defaults, To(G.defaults), G;
};
G.walkTokens = function(e, t) {
  return Vt.walkTokens(e, t);
};
G.parseInline = Vt.parseInline;
G.Parser = Le;
G.parser = Le.parse;
G.Renderer = Xn;
G.TextRenderer = br;
G.Lexer = Me;
G.lexer = Me.lex;
G.Tokenizer = Yn;
G.Hooks = cn;
G.parse = G;
G.options;
G.setOptions;
G.use;
G.walkTokens;
G.parseInline;
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
}, Uu = { class: "pskbdllm-font-semibold pskbdllm-text-lg" }, Wu = ["innerHTML"], qu = { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5" }, Ku = ["src", "onTimeupdate", "onLoadedmetadata", "onEnded"], Gu = ["onClick"], Zu = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Ju = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Qu = {
  key: 0,
  class: "pskbdllm-flex pskbdllm-items-center pskbdllm-space-x-2 pskbdllm-p-4 pskbdllm-bg-white pskbdllm-rounded-2xl pskbdllm-w-fit pskbdllm-shadow-sm pskbdllm-border pskbdllm-border-gray-100 pskbdllm-animate-fade-in"
}, Yu = { class: "pskbdllm-flex pskbdllm-items-center pskbdllm-space-x-2" }, Xu = { class: "pskbdllm-flex-1 pskbdllm-relative" }, ef = ["placeholder", "disabled"], tf = {
  key: 0,
  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5"
}, nf = { class: "pskbdllm-processing-indicator-container" }, sf = {
  key: 1,
  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5"
}, rf = { class: "pskbdllm-recording-wave-container" }, of = ["disabled"], lf = ["disabled"], af = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "pskbdllm-h-5 pskbdllm-w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, cf = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "pskbdllm-h-5 pskbdllm-w-5 pskbdllm-animate-spin",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, uf = /* @__PURE__ */ ia({
  __name: "ChatWidgetNoTW",
  props: {
    botId: {},
    apiKey: {}
  },
  setup(e) {
    G.use({
      gfm: !0,
      breaks: !0
    });
    const t = e, n = ge(!1), s = ge(""), r = ge(null), i = ge(!1), o = ge(!1), l = ge(window.innerWidth < 768), a = ge(), u = ge(""), c = ge(), d = ge([]), g = ge(null), b = ge(!1), $ = ge([]), D = ge(window.speechSynthesis), U = ge([]), B = ge(null), W = ge([]), F = ge(!1), he = async () => {
      const T = {
        userAgent: navigator.userAgent,
        browserLanguage: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        isOnline: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
      return c.value = T, T;
    }, V = async () => {
      var T, x;
      try {
        F.value = !0;
        const oe = await (await fetch(
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
          company: oe.company,
          iconUrl: oe.iconUrl,
          welcomeMessage: oe.welcomeMessage,
          colors: {
            primary: (T = oe.colors) == null ? void 0 : T.primary,
            secondary: (x = oe.colors) == null ? void 0 : x.secondary
          }
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
        F.value = !1;
      }
    }, ne = () => {
      l.value = window.innerWidth < 768;
    }, ue = () => {
      D.value && (U.value = D.value.getVoices());
    }, te = (T) => {
      const x = d.value.findIndex(
        (C) => C.audioId === T.audioId
      );
      if (x !== -1 && W.value[x]) {
        const C = W.value[x];
        d.value.forEach((oe, re) => {
          if (oe.audioId && re !== x) {
            const fe = W.value[re];
            fe && !fe.paused && (fe.pause(), oe.isAudioPlaying = !1, oe.audioProgress = fe.currentTime / fe.duration * 100);
          }
        }), C.paused ? (C.play(), T.isAudioPlaying = !0) : (C.pause(), T.isAudioPlaying = !1);
      }
    }, ke = (T, x) => {
      const C = x.target;
      T.audioProgress = C.currentTime / C.duration * 100, T.audioDuration = C.currentTime;
    }, je = (T, x) => {
      const C = x.target;
      T.audioDuration = C.duration;
    }, ze = (T) => {
      T.isAudioPlaying = !1, T.audioProgress = 0;
    }, $e = async () => {
      try {
        D.value && B.value && (D.value.cancel(), B.value = null, d.value.forEach((x) => x.isPlaying = !1));
        const T = await navigator.mediaDevices.getUserMedia({
          audio: !0
        });
        g.value = new MediaRecorder(T), $.value = [], b.value = !0, g.value.ondataavailable = (x) => {
          $.value.push(x.data);
        }, g.value.onstop = async () => {
          const x = new Blob($.value, {
            type: "audio/wav"
          });
          await xn(x), b.value = !1, T.getTracks().forEach((C) => C.stop());
        }, g.value.start();
      } catch (T) {
        console.error("Error accessing microphone:", T), b.value = !1;
      }
    }, At = () => {
      g.value && b.value && g.value.stop();
    }, xn = async (T) => {
      try {
        o.value = !0;
        const x = Date.now(), C = new File([T], `recording_${x}.wav`, {
          type: "audio/wav"
        }), oe = new FormData();
        oe.append("file", C), oe.append("chatbot_id", t.botId);
        const re = await fetch(
          "https://api.dev.kb.promptstudio.dev/audio/process",
          {
            method: "POST",
            headers: {
              accept: "application/json"
            },
            body: oe
          }
        );
        if (!re.ok)
          throw new Error("Failed to process audio");
        const fe = await re.json();
        s.value = fe.text;
        const Ue = fe.audioUrl;
        await be(Ue);
      } catch (x) {
        console.error("Error processing audio:", x), d.value.push({
          id: Date.now().toString(),
          content: "Sorry, I could not process the audio. Please try again.",
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        }), await Pe();
      } finally {
        o.value = !1;
      }
    }, Pe = async () => {
      await Li(), r.value && (r.value.scrollTop = r.value.scrollHeight);
    }, be = async (T) => {
      T instanceof Event && T.preventDefault();
      const x = typeof T == "string" ? T : void 0;
      if (s.value.trim() && !i.value) {
        const C = s.value.trim(), oe = {
          id: Date.now().toString(),
          content: C,
          sender: "user",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1,
          audioUrl: x,
          audioId: x ? `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : void 0
        };
        d.value.push(oe), s.value = "", i.value = !0, await Pe();
        try {
          const fe = await (await fetch(
            "https://api.dev.kb.promptstudio.dev/chatbot/chat",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "x-api-key": t.apiKey
              },
              body: JSON.stringify({
                query: C,
                type: "qna",
                session_id: u.value,
                chatbot_id: t.botId,
                tag: c.value
                // Include browser information in the request
              })
            }
          )).json();
          fe.session_id && (u.value = fe.session_id), d.value.push({
            id: Date.now().toString(),
            content: fe.response.trim(),
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          });
        } catch (re) {
          d.value.push({
            id: Date.now().toString(),
            content: "I apologize, but I encountered an error. Please try again later.",
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          }), console.error("Error:", re);
        } finally {
          i.value = !1, await Pe();
        }
      }
    };
    return Qi(async () => {
      window.addEventListener("resize", ne), await he(), V(), D.value && (ue(), D.value.onvoiceschanged !== void 0 && (D.value.onvoiceschanged = ue));
    }), ir(() => {
      window.removeEventListener("resize", ne), g.value && b.value && g.value.stop(), D.value && D.value.cancel();
    }), (T, x) => (ie(), le("div", Iu, [
      F.value ? (ie(), le("div", Mu, x[3] || (x[3] = [
        M("div", { class: "pskbdllm-animate-spin pskbdllm-rounded-full pskbdllm-h-8 pskbdllm-w-8 pskbdllm-border-t-2 pskbdllm-border-b-2 pskbdllm-border-gray-900" }, null, -1)
      ]))) : a.value ? (ie(), le(ve, { key: 1 }, [
        n.value ? vt("", !0) : (ie(), le("button", {
          key: 0,
          onClick: x[0] || (x[0] = (C) => n.value = !0),
          style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
          class: "pskbdllm-fixed pskbdllm-bottom-4 pskbdllm-right-4 pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-p-4 pskbdllm-rounded-full pskbdllm-shadow-lg pskbdllm-hover:opacity-90 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-2 pskbdllm-md:p-5 pskbdllm-animate-bounce"
        }, [
          x[4] || (x[4] = M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "pskbdllm-h-6 pskbdllm-w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            M("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            })
          ], -1)),
          M("span", Lu, "Chat with " + $n(a.value.company || "our company"), 1),
          x[5] || (x[5] = M("span", { class: "pskbdllm-md:hidden" }, "Chat", -1))
        ], 4)),
        Dr(M("div", {
          class: Se(["pskbdllm-fixed pskbdllm-md:bottom-4 pskbdllm-md:right-4 pskbdllm-md:w-[400px] pskbdllm-bg-gradient-to-b pskbdllm-from-gray-50 pskbdllm-to-white pskbdllm-md:rounded-2xl pskbdllm-shadow-2xl pskbdllm-overflow-hidden pskbdllm-border-0 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-ease-in-out pskbdllm-flex pskbdllm-flex-col", {
            "pskbdllm-bottom-0 pskbdllm-right-0 pskbdllm-w-full pskbdllm-h-[100dvh]": l.value,
            "pskbdllm-max-h-[90vh]": !l.value
          }])
        }, [
          M("div", {
            style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
            class: "pskbdllm-bg-gradient-custom pskbdllm-p-4 pskbdllm-text-white pskbdllm-flex pskbdllm-justify-between pskbdllm-items-center pskbdllm-relative pskbdllm-shrink-0"
          }, [
            M("div", ju, [
              M("div", Fu, [
                M("div", Hu, [
                  a.value.iconUrl ? (ie(), le("img", {
                    key: 0,
                    src: a.value.iconUrl,
                    class: "pskbdllm-h-10 pskbdllm-w-10 pskbdllm-border pskbdllm-rounded-full"
                  }, null, 8, Bu)) : (ie(), le("svg", zu, x[6] || (x[6] = [
                    M("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 15.546c-.523 0-1.046.151-1.5.454a9 9 0 01-2.486.804c-.057 0-.113.002-.17.002-2.486.022-4.773 1.823-4.773 5.423v.002c0 3.624 2.29 6.604 5.46 6.604 3.18 0 5.473-2.98 5.473-6.604v-.002c0-.576-.223-1.084-.632-1.5a9 9 0 01-.804-2.486c-.022-2.486-1.823-4.773-5.423-4.773-3.6 0-6.604 2.29-6.604 5.46v.002zM11.5 4c2.177 0 4.23.93 5.46 2.514.059.118.113.242.17.363a6.5 6.5 0 00-13-.002c.057-.12.113-.24.17-.36C7.27 4.93 9.323 4 11.5 4z"
                    }, null, -1)
                  ])))
                ]),
                M("div", {
                  class: Se(["pskbdllm-absolute pskbdllm--top-1 pskbdllm--right-1 pskbdllm-w-3 pskbdllm-h-3 pskbdllm-rounded-full pskbdllm-border-2 pskbdllm-border-white", [
                    i.value ? "pskbdllm-bg-green-400 pskbdllm-animate-pulse" : "pskbdllm-bg-gray-300"
                  ]])
                }, null, 2)
              ]),
              M("div", null, [
                M("h3", Uu, $n(a.value.company), 1),
                x[7] || (x[7] = M("p", { class: "pskbdllm-text-xs pskbdllm-text-white/80" }, "AI Assistant", -1))
              ])
            ]),
            M("button", {
              onClick: x[1] || (x[1] = (C) => n.value = !1),
              class: Se(["pskbdllm-hover:bg-white/10 pskbdllm-transition-colors pskbdllm-p-2 pskbdllm-rounded-full", { "pskbdllm-absolute pskbdllm-right-4": l.value }])
            }, x[8] || (x[8] = [
              M("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "pskbdllm-h-6 pskbdllm-w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                M("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ]), 2)
          ], 4),
          M("div", {
            class: Se(["pskbdllm-overflow-y-auto pskbdllm-p-4 pskbdllm-bg-[#F0F0F0] pskbdllm-scroll-smooth pskbdllm-flex-grow", { "pskbdllm-pb-[100px]": l.value }]),
            ref_key: "chatContainer",
            ref: r
          }, [
            (ie(!0), le(ve, null, Dn(d.value, (C, oe) => (ie(), le("div", {
              key: C.id,
              class: Se(["pskbdllm-message pskbdllm-mb-6 pskbdllm-animate-fade-in pskbdllm-w-full", [
                C.sender === "user" ? "pskbdllm-flex pskbdllm-justify-end" : "pskbdllm-flex pskbdllm-justify-start"
              ]])
            }, [
              M("div", {
                class: Se([
                  "pskbdllm-max-w-[85%] pskbdllm-p-4 pskbdllm-shadow-lg pskbdllm-relative pskbdllm-message-bubble pskbdllm-transition-all pskbdllm-duration-300",
                  C.sender === "user" ? "pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-rounded-tl-[20px] pskbdllm-rounded-tr-[20px] pskbdllm-rounded-bl-[20px] pskbdllm-user-message" : "pskbdllm-bg-white/90 pskbdllm-border-[0.5px] pskbdllm-border-gray-100 pskbdllm-text-gray-800 pskbdllm-rounded-tr-[20px] pskbdllm-rounded-tl-[20px] pskbdllm-rounded-br-[20px] pskbdllm-bot-message",
                  C.isPlaying ? "pskbdllm-playing-message pskbdllm-ring-2 pskbdllm-ring-offset-2" : ""
                ]),
                style: Ie(
                  C.sender === "user" ? `--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}` : C.isPlaying ? `--ring-color: ${a.value.colors.primary || "#8b5cf6"}; --gradient-start: ${a.value.colors.primary || "#8b5cf6"}; --gradient-end: ${a.value.colors.secondary || "#d946ef"};` : ""
                )
              }, [
                M("div", {
                  class: "pskbdllm-whitespace-pre-wrap pskbdllm-text-[15px] pskbdllm-font-normal pskbdllm-leading-[1.5] pskbdllm-markdown-content",
                  innerHTML: Ai(G)(C.content)
                }, null, 8, Wu),
                M("div", {
                  class: Se([
                    "pskbdllm-text-[11px] pskbdllm-mt-2 pskbdllm-flex pskbdllm-items-center pskbdllm-gap-1.5 pskbdllm-font-medium pskbdllm-justify-between",
                    C.sender === "user" ? "pskbdllm-text-white/90" : "pskbdllm-text-gray-400"
                  ])
                }, [
                  M("div", qu, [
                    xo($n(new Date(
                      C.timestamp
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: !0
                    })) + " ", 1),
                    M("audio", {
                      ref_for: !0,
                      ref: (re) => W.value[oe] = re,
                      src: C.audioUrl,
                      onTimeupdate: (re) => ke(C, re),
                      onLoadedmetadata: (re) => je(C, re),
                      onEnded: (re) => ze(C)
                    }, null, 40, Ku)
                  ]),
                  C.sender === "user" && C.audioUrl ? (ie(), le("button", {
                    key: 0,
                    onClick: (re) => te(C),
                    class: Se([
                      "pskbdllm-p-1.5 pskbdllm-rounded-full pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-hover:scale-110",
                      C.isAudioPlaying ? "pskbdllm-bg-white/20 pskbdllm-text-white" : "pskbdllm-hover:bg-white/10"
                    ])
                  }, [
                    (ie(), le("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: Se(["pskbdllm-h-4 pskbdllm-w-4 pskbdllm-transition-transform pskbdllm-duration-300", {
                        "pskbdllm-scale-110 pskbdllm-animate-pulse": C.isAudioPlaying
                      }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      C.isAudioPlaying ? (ie(), le("path", Ju)) : (ie(), le("path", Zu))
                    ], 2))
                  ], 10, Gu)) : vt("", !0)
                ], 2)
              ], 6)
            ], 2))), 128)),
            i.value ? (ie(), le("div", Qu, [
              M("div", Yu, [
                (ie(), le(ve, null, Dn(3, (C) => M("div", {
                  key: C,
                  class: "pskbdllm-w-3 pskbdllm-h-3 pskbdllm-rounded-full pskbdllm-animate-loader",
                  style: Ie({
                    "animation-delay": `${(C - 1) * 0.2}s`,
                    background: `linear-gradient(to right, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                  })
                }, null, 4)), 64))
              ])
            ])) : vt("", !0)
          ], 2),
          M("div", {
            class: Se(["pskbdllm-border-t pskbdllm-border-gray-100 pskbdllm-p-4 pskbdllm-bg-white/80", {
              "pskbdllm-fixed pskbdllm-bottom-0 pskbdllm-left-0 pskbdllm-right-0 pskbdllm-shadow-[0_-1px_10px_rgba(0,0,0,0.1)]": l.value
            }])
          }, [
            M("form", {
              onSubmit: be,
              class: "pskbdllm-flex pskbdllm-gap-3 pskbdllm-max-w-[400px] pskbdllm-mx-auto"
            }, [
              M("div", Xu, [
                Dr(M("input", {
                  "onUpdate:modelValue": x[2] || (x[2] = (C) => s.value = C),
                  type: "text",
                  placeholder: o.value ? "" : b.value ? "Listening..." : "Type your message...",
                  class: "pskbdllm-w-full pskbdllm-p-3 pskbdllm-pl-4 pskbdllm-pr-12 pskbdllm-border pskbdllm-border-gray-200 pskbdllm-rounded-xl pskbdllm-focus:outline-none pskbdllm-focus:ring-2 pskbdllm-focus:ring-[var(--primary)] pskbdllm-focus:border-transparent pskbdllm-bg-white/50 pskbdllm-hover:border-[var(--primary)] pskbdllm-transition-all pskbdllm-duration-300",
                  style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  disabled: i.value || b.value || o.value
                }, null, 12, ef), [
                  [Wc, s.value]
                ]),
                o.value ? (ie(), le("div", tf, [
                  M("div", nf, [
                    (ie(), le(ve, null, Dn(5, (C) => M("div", {
                      key: C,
                      class: "pskbdllm-processing-dot",
                      style: Ie({
                        animationDelay: `${(C - 1) * 0.2}s`,
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 4)), 64))
                  ]),
                  x[9] || (x[9] = M("span", { class: "pskbdllm-text-sm pskbdllm-text-gray-500 pskbdllm-ml-2" }, "Processing", -1))
                ])) : vt("", !0),
                b.value && !o.value ? (ie(), le("div", sf, [
                  M("div", rf, [
                    (ie(), le(ve, null, Dn(5, (C) => M("div", {
                      key: C,
                      class: Se(["pskbdllm-recording-wave", `pskbdllm-wave-line-${C}`]),
                      style: Ie({
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 6)), 64))
                  ]),
                  M("button", {
                    onClick: At,
                    class: "pskbdllm-p-1.5 pskbdllm-bg-red-50 pskbdllm-rounded-full pskbdllm-text-red-500 pskbdllm-hover:text-red-600 pskbdllm-transition-colors pskbdllm-hover:bg-red-100"
                  }, x[10] || (x[10] = [
                    M("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "pskbdllm-h-5 pskbdllm-w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      M("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }),
                      M("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      })
                    ], -1)
                  ]))
                ])) : vt("", !0),
                !b.value && !o.value ? (ie(), le("button", {
                  key: 2,
                  type: "button",
                  onClick: $e,
                  style: Ie(`background-color: ${a.value.colors.primary}; --primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  class: "pskbdllm-absolute pskbdllm-right-3 pskbdllm-top-1/2 pskbdllm--translate-y-1/2 pskbdllm-text-white pskbdllm-hover:opacity-80 pskbdllm-transition-colors pskbdllm-disabled:opacity-50 pskbdllm-disabled:cursor-not-allowed pskbdllm-p-1.5 pskbdllm-rounded-full",
                  disabled: i.value
                }, x[11] || (x[11] = [
                  M("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "pskbdllm-h-5 pskbdllm-w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    M("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    })
                  ], -1)
                ]), 12, of)) : vt("", !0)
              ]),
              M("button", {
                type: "submit",
                style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                class: "pskbdllm-bg-gradient-custom pskbdllm-text-white pskbdllm-p-3 pskbdllm-rounded-xl pskbdllm-hover:opacity-90 pskbdllm-transition-all pskbdllm-duration-300 pskbdllm-disabled:opacity-50 pskbdllm-disabled:cursor-not-allowed pskbdllm-flex pskbdllm-items-center pskbdllm-justify-center pskbdllm-w-12 pskbdllm-h-12 pskbdllm-shrink-0",
                disabled: i.value || !s.value.trim() && !b.value || o.value
              }, [
                i.value ? (ie(), le("svg", cf, x[13] || (x[13] = [
                  M("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  }, null, -1)
                ]))) : (ie(), le("svg", af, x[12] || (x[12] = [
                  M("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  }, null, -1)
                ])))
              ], 12, lf)
            ], 32)
          ], 2)
        ], 2), [
          [$o, n.value]
        ])
      ], 64)) : vt("", !0)
    ]));
  }
}), ff = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, df = /* @__PURE__ */ ff(uf, [["__scopeId", "data-v-56319f66"]]);
function ci() {
  const e = document.getElementById("chat-widget-container");
  if (!e) {
    console.error("Chat widget container not found");
    return;
  }
  const t = e.getAttribute("data-bot-id") || "";
  Gc(df, {
    botId: t
  }).mount(e);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", ci) : ci();
