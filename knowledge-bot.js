var zs = Object.defineProperty;
var Us = (e, t, n) => t in e ? zs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var te = (e, t, n) => Us(e, typeof t != "symbol" ? t + "" : t, n);
var uo = {};
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
const G = uo.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ht = uo.NODE_ENV !== "production" ? Object.freeze([]) : [], he = () => {
}, Ws = () => !1, mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jn = (e) => e.startsWith("onUpdate:"), fe = Object.assign, Wr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qs = Object.prototype.hasOwnProperty, W = (e, t) => qs.call(e, t), A = Array.isArray, Ot = (e) => tr(e) === "[object Map]", fo = (e) => tr(e) === "[object Set]", I = (e) => typeof e == "function", ae = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", qr = (e) => (X(e) || I(e)) && I(e.then) && I(e.catch), po = Object.prototype.toString, tr = (e) => po.call(e), Kr = (e) => tr(e).slice(8, -1), ho = (e) => tr(e) === "[object Object]", Gr = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ ut(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ks = /* @__PURE__ */ ut(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), nr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gs = /-(\w)/g, He = nr(
  (e) => e.replace(Gs, (t, n) => n ? n.toUpperCase() : "")
), Zs = /\B([A-Z])/g, yt = nr(
  (e) => e.replace(Zs, "-$1").toLowerCase()
), rr = nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = nr(
  (e) => e ? `on${rr(e)}` : ""
), _t = (e, t) => !Object.is(e, t), Lt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Dr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vi;
const bn = () => vi || (vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ie(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = ae(r) ? Xs(r) : Ie(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (ae(e) || X(e))
    return e;
}
const Js = /;(?![^(]*\))/g, Qs = /:([^]+)/, Ys = /\/\*[^]*?\*\//g;
function Xs(e) {
  const t = {};
  return e.replace(Ys, "").split(Js).forEach((n) => {
    if (n) {
      const r = n.split(Qs);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function we(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const r = we(e[n]);
      r && (t += r + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const el = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", rl = /* @__PURE__ */ ut(el), il = /* @__PURE__ */ ut(tl), ol = /* @__PURE__ */ ut(nl), sl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ ut(sl);
function go(e) {
  return !!e || e === "";
}
const mo = (e) => !!(e && e.__v_isRef === !0), Tn = (e) => ae(e) ? e : e == null ? "" : A(e) || X(e) && (e.toString === po || !I(e.toString)) ? mo(e) ? Tn(e.value) : JSON.stringify(e, bo, 2) : String(e), bo = (e, t) => mo(t) ? bo(e, t.value) : Ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[mr(r, o) + " =>"] = i, n),
    {}
  )
} : fo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => mr(n))
} : vt(t) ? mr(t) : X(t) && !A(t) && !ho(t) ? String(t) : t, mr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var ne = {};
function tt(e, ...t) {
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
    } else ne.NODE_ENV !== "production" && tt("cannot run an inactive effect scope.");
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
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
function cl() {
  return Re;
}
let K;
const br = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, br.has(this) && (br.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), vo(this);
    const t = K, n = Be;
    K = this, Be = !0;
    try {
      return this.fn();
    } finally {
      ne.NODE_ENV !== "production" && K !== this && tt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), xo(this), K = t, Be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qr(t);
      this.deps = this.depsTail = void 0, xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? br.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $r(this) && this.run();
  }
  get dirty() {
    return $r(this);
  }
}
let yo = 0, on, sn;
function wo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sn, sn = e;
    return;
  }
  e.next = on, on = e;
}
function Zr() {
  yo++;
}
function Jr() {
  if (--yo > 0)
    return;
  if (sn) {
    let t = sn;
    for (sn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; on; ) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Qr(r), ul(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function $r(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn))
    return;
  e.globalVersion = fn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !$r(e)) {
    e.flags &= -3;
    return;
  }
  const n = K, r = Be;
  K = e, Be = !0;
  try {
    vo(e);
    const i = e.fn(e._value);
    (t.version === 0 || _t(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    K = n, Be = r, xo(e), e.flags &= -3;
  }
}
function Qr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), ne.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Qr(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const ko = [];
function ft() {
  ko.push(Be), Be = !1;
}
function dt() {
  const e = ko.pop();
  Be = e === void 0 ? !0 : e;
}
function xi(e) {
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
class Yr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, ne.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !Be || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new fl(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, No(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = r);
    }
    return ne.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      fe(
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
    Zr();
    try {
      if (ne.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            fe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Jr();
    }
  }
}
function No(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        No(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), ne.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Tr = /* @__PURE__ */ new WeakMap(), St = Symbol(
  ne.NODE_ENV !== "production" ? "Object iterate" : ""
), Cr = Symbol(
  ne.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dn = Symbol(
  ne.NODE_ENV !== "production" ? "Array iterate" : ""
);
function pe(e, t, n) {
  if (Be && K) {
    let r = Tr.get(e);
    r || Tr.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Yr()), i.map = r, i.key = n), ne.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Qe(e, t, n, r, i, o) {
  const s = Tr.get(e);
  if (!s) {
    fn++;
    return;
  }
  const l = (a) => {
    a && (ne.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: i,
      oldTarget: o
    }) : a.trigger());
  };
  if (Zr(), t === "clear")
    s.forEach(l);
  else {
    const a = A(e), u = a && Gr(n);
    if (a && n === "length") {
      const c = Number(r);
      s.forEach((d, g) => {
        (g === "length" || g === dn || !vt(g) && g >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), u && l(s.get(dn)), t) {
        case "add":
          a ? u && l(s.get("length")) : (l(s.get(St)), Ot(e) && l(s.get(Cr)));
          break;
        case "delete":
          a || (l(s.get(St)), Ot(e) && l(s.get(Cr)));
          break;
        case "set":
          Ot(e) && l(s.get(St));
          break;
      }
  }
  Jr();
}
function Pt(e) {
  const t = j(e);
  return t === e ? t : (pe(t, "iterate", dn), De(e) ? t : t.map(ve));
}
function ir(e) {
  return pe(e = j(e), "iterate", dn), e;
}
const dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return _r(this, Symbol.iterator, ve);
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => A(t) ? Pt(t) : t)
    );
  },
  entries() {
    return _r(this, "entries", (e) => (e[1] = ve(e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(this, "filter", e, t, (n) => n.map(ve), arguments);
  },
  find(e, t) {
    return it(this, "find", e, t, ve, arguments);
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(this, "findLast", e, t, ve, arguments);
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yr(this, "includes", e);
  },
  indexOf(...e) {
    return yr(this, "indexOf", e);
  },
  join(e) {
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return yr(this, "lastIndexOf", e);
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
    return Ei(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ei(this, "reduceRight", e, t);
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
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Zt(this, "unshift", e);
  },
  values() {
    return _r(this, "values", ve);
  }
};
function _r(e, t, n) {
  const r = ir(e), i = r[t]();
  return r !== e && !De(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const pl = Array.prototype;
function it(e, t, n, r, i, o) {
  const s = ir(e), l = s !== e && !De(e), a = s[t];
  if (a !== pl[t]) {
    const d = a.apply(e, o);
    return l ? ve(d) : d;
  }
  let u = n;
  s !== e && (l ? u = function(d, g) {
    return n.call(this, ve(d), g, e);
  } : n.length > 2 && (u = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const c = a.call(s, u, r);
  return l && i ? i(c) : c;
}
function Ei(e, t, n, r) {
  const i = ir(e);
  let o = n;
  return i !== e && (De(e) ? n.length > 3 && (o = function(s, l, a) {
    return n.call(this, s, l, a, e);
  }) : o = function(s, l, a) {
    return n.call(this, s, ve(l), a, e);
  }), i[t](o, ...r);
}
function yr(e, t, n) {
  const r = j(e);
  pe(r, "iterate", dn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && Hn(n[0]) ? (n[0] = j(n[0]), r[t](...n)) : i;
}
function Zt(e, t, n = []) {
  ft(), Zr();
  const r = j(e)[t].apply(e, n);
  return Jr(), dt(), r;
}
const hl = /* @__PURE__ */ ut("__proto__,__v_isRef,__isVue"), Oo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function gl(e) {
  vt(e) || (e = String(e));
  const t = j(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class So {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? Ro : Vo : o ? Co : To).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = A(t);
    if (!i) {
      let a;
      if (s && (a = dl[n]))
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
      ue(t) ? t : r
    );
    return (vt(n) ? Oo.has(n) : hl(n)) || (i || pe(t, "get", n), o) ? l : ue(l) ? s && Gr(n) ? l : l.value : X(l) ? i ? Ao(l) : Xr(l) : l;
  }
}
class Do extends So {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    if (!this._isShallow) {
      const a = ct(o);
      if (!De(r) && !ct(r) && (o = j(o), r = j(r)), !A(t) && ue(o) && !ue(r))
        return a ? !1 : (o.value = r, !0);
    }
    const s = A(t) && Gr(n) ? Number(n) < t.length : W(t, n), l = Reflect.set(
      t,
      n,
      r,
      ue(t) ? t : i
    );
    return t === j(i) && (s ? _t(r, o) && Qe(t, "set", n, r, o) : Qe(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = W(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && Qe(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!vt(n) || !Oo.has(n)) && pe(t, "has", n), r;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      A(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class $o extends So {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ne.NODE_ENV !== "production" && tt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ne.NODE_ENV !== "production" && tt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ml = /* @__PURE__ */ new Do(), bl = /* @__PURE__ */ new $o(), _l = /* @__PURE__ */ new Do(!0), yl = /* @__PURE__ */ new $o(!0), Vr = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function wl(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = j(i), s = Ot(o), l = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, u = i[e](...r), c = n ? Vr : t ? Rr : ve;
    return !t && pe(
      o,
      "iterate",
      a ? Cr : St
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
function On(e) {
  return function(...t) {
    if (ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      tt(
        `${rr(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vl(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = j(o), l = j(i);
      e || (_t(i, l) && pe(s, "get", i), pe(s, "get", l));
      const { has: a } = Nn(s), u = t ? Vr : e ? Rr : ve;
      if (a.call(s, i))
        return u(o.get(i));
      if (a.call(s, l))
        return u(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && pe(j(i), "iterate", St), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, s = j(o), l = j(i);
      return e || (_t(i, l) && pe(s, "has", i), pe(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, a = j(l), u = t ? Vr : e ? Rr : ve;
      return !e && pe(a, "iterate", St), l.forEach((c, d) => i.call(o, u(c), u(d), s));
    }
  };
  return fe(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(i) {
        !t && !De(i) && !ct(i) && (i = j(i));
        const o = j(this);
        return Nn(o).has.call(o, i) || (o.add(i), Qe(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !De(o) && !ct(o) && (o = j(o));
        const s = j(this), { has: l, get: a } = Nn(s);
        let u = l.call(s, i);
        u ? ne.NODE_ENV !== "production" && ki(s, l, i) : (i = j(i), u = l.call(s, i));
        const c = a.call(s, i);
        return s.set(i, o), u ? _t(o, c) && Qe(s, "set", i, o, c) : Qe(s, "add", i, o), this;
      },
      delete(i) {
        const o = j(this), { has: s, get: l } = Nn(o);
        let a = s.call(o, i);
        a ? ne.NODE_ENV !== "production" && ki(o, s, i) : (i = j(i), a = s.call(o, i));
        const u = l ? l.call(o, i) : void 0, c = o.delete(i);
        return a && Qe(o, "delete", i, void 0, u), c;
      },
      clear() {
        const i = j(this), o = i.size !== 0, s = ne.NODE_ENV !== "production" ? Ot(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return o && Qe(
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
    n[i] = wl(i, e, t);
  }), n;
}
function or(e, t) {
  const n = vl(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    W(n, i) && i in r ? n : r,
    i,
    o
  );
}
const xl = {
  get: /* @__PURE__ */ or(!1, !1)
}, El = {
  get: /* @__PURE__ */ or(!1, !0)
}, kl = {
  get: /* @__PURE__ */ or(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ or(!0, !0)
};
function ki(e, t, n) {
  const r = j(n);
  if (r !== n && t.call(e, r)) {
    const i = Kr(e);
    tt(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const To = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap();
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
function Sl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ol(Kr(e));
}
function Xr(e) {
  return ct(e) ? e : sr(
    e,
    !1,
    ml,
    xl,
    To
  );
}
function Dl(e) {
  return sr(
    e,
    !1,
    _l,
    El,
    Co
  );
}
function Ao(e) {
  return sr(
    e,
    !0,
    bl,
    kl,
    Vo
  );
}
function Xe(e) {
  return sr(
    e,
    !0,
    yl,
    Nl,
    Ro
  );
}
function sr(e, t, n, r, i) {
  if (!X(e))
    return ne.NODE_ENV !== "production" && tt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = Sl(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? r : n
  );
  return i.set(e, l), l;
}
function Dt(e) {
  return ct(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function De(e) {
  return !!(e && e.__v_isShallow);
}
function Hn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function $l(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Fn(e, "__v_skip", !0), e;
}
const ve = (e) => X(e) ? Xr(e) : e, Rr = (e) => X(e) ? Ao(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function be(e) {
  return Tl(e, !1);
}
function Tl(e, t) {
  return ue(e) ? e : new Cl(e, t);
}
class Cl {
  constructor(t, n) {
    this.dep = new Yr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || De(t) || ct(t);
    t = r ? t : j(t), _t(t, n) && (this._rawValue = t, this._value = r ? t : ve(t), ne.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Po(e) {
  return ue(e) ? e.value : e;
}
const Vl = {
  get: (e, t, n) => t === "__v_raw" ? e : Po(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return ue(i) && !ue(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return Dt(e) ? e : new Proxy(e, Vl);
}
class Rl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return wo(this, !0), !0;
  }
  get value() {
    const t = ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Eo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ne.NODE_ENV !== "production" && tt("Write operation failed: computed value is readonly");
  }
}
function Al(e, t, n = !1) {
  let r, i;
  return I(e) ? r = e : (r = e.get, i = e.set), new Rl(r, i, n);
}
const Sn = {}, Bn = /* @__PURE__ */ new WeakMap();
let Nt;
function Pl(e, t = !1, n = Nt) {
  if (n) {
    let r = Bn.get(n);
    r || Bn.set(n, r = []), r.push(e);
  } else ne.NODE_ENV !== "production" && !t && tt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Il(e, t, n = G) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: a } = n, u = (V) => {
    (n.onWarn || tt)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (V) => i ? V : De(V) || i === !1 || i === 0 ? st(V, 1) : st(V);
  let d, g, b, D, N = !1, U = !1;
  if (ue(e) ? (g = () => e.value, N = De(e)) : Dt(e) ? (g = () => c(e), N = !0) : A(e) ? (U = !0, N = e.some((V) => Dt(V) || De(V)), g = () => e.map((V) => {
    if (ue(V))
      return V.value;
    if (Dt(V))
      return c(V);
    if (I(V))
      return a ? a(V, 2) : V();
    ne.NODE_ENV !== "production" && u(V);
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
      return a ? a(e, 3, [D]) : e(D);
    } finally {
      Nt = V;
    }
  } : (g = he, ne.NODE_ENV !== "production" && u(e)), t && i) {
    const V = g, le = i === !0 ? 1 / 0 : i;
    g = () => st(V(), le);
  }
  const F = cl(), q = () => {
    d.stop(), F && F.active && Wr(F.effects, d);
  };
  if (o && t) {
    const V = t;
    t = (...le) => {
      V(...le), q();
    };
  }
  let B = U ? new Array(e.length).fill(Sn) : Sn;
  const ge = (V) => {
    if (!(!(d.flags & 1) || !d.dirty && !V))
      if (t) {
        const le = d.run();
        if (i || N || (U ? le.some((de, oe) => _t(de, B[oe])) : _t(le, B))) {
          b && b();
          const de = Nt;
          Nt = d;
          try {
            const oe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              B === Sn ? void 0 : U && B[0] === Sn ? [] : B,
              D
            ];
            a ? a(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), B = le;
          } finally {
            Nt = de;
          }
        }
      } else
        d.run();
  };
  return l && l(ge), d = new _o(g), d.scheduler = s ? () => s(ge, !1) : ge, D = (V) => Pl(V, !1, d), b = d.onStop = () => {
    const V = Bn.get(d);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const le of V) le();
      Bn.delete(d);
    }
  }, ne.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? r ? ge(!0) : B = d.run() : s ? s(ge.bind(null, !0), !0) : d.run(), q.pause = d.pause.bind(d), q.resume = d.resume.bind(d), q.stop = q, q;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    st(e.value, t, n);
  else if (A(e))
    for (let r = 0; r < e.length; r++)
      st(e[r], t, n);
  else if (fo(e) || Ot(e))
    e.forEach((r) => {
      st(r, t, n);
    });
  else if (ho(e)) {
    for (const r in e)
      st(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && st(e[r], t, n);
  }
  return e;
}
var h = {};
const $t = [];
function Cn(e) {
  $t.push(e);
}
function Vn() {
  $t.pop();
}
let wr = !1;
function k(e, ...t) {
  if (wr) return;
  wr = !0, ft();
  const n = $t.length ? $t[$t.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Ml();
  if (r)
    Ut(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var s, l;
          return (l = (s = o.toString) == null ? void 0 : s.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${dr(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Ll(i)), console.warn(...o);
  }
  dt(), wr = !1;
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
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Ll(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...jl(n));
  }), t;
}
function jl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${dr(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [i, ...Fl(e.props), o] : [i + o];
}
function Fl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Mo(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Mo(e, t, n) {
  return ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Mo(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
const ei = {
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
function Ut(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    _n(i, t, n);
  }
}
function nt(e, t, n, r) {
  if (I(e)) {
    const i = Ut(e, t, n, r);
    return i && qr(i) && i.catch((o) => {
      _n(o, t, n);
    }), i;
  }
  if (A(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(nt(e[o], t, n, r));
    return i;
  } else h.NODE_ENV !== "production" && k(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function _n(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = h.NODE_ENV !== "production" ? ei[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      ft(), Ut(o, null, 10, [
        e,
        a,
        u
      ]), dt();
      return;
    }
  }
  Hl(e, n, i, r, s);
}
function Hl(e, t, n, r = !0, i = !1) {
  if (h.NODE_ENV !== "production") {
    const o = ei[t];
    if (n && Cn(n), k(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Vn(), r)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const ke = [];
let Je = -1;
const Bt = [];
let gt = null, jt = 0;
const Lo = /* @__PURE__ */ Promise.resolve();
let zn = null;
const Bl = 100;
function jo(e) {
  const t = zn || Lo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zl(e) {
  let t = Je + 1, n = ke.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = ke[r], o = pn(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function lr(e) {
  if (!(e.flags & 1)) {
    const t = pn(e), n = ke[ke.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pn(n) ? ke.push(e) : ke.splice(zl(t), 0, e), e.flags |= 1, Fo();
  }
}
function Fo() {
  zn || (zn = Lo.then(zo));
}
function Ho(e) {
  A(e) ? Bt.push(...e) : gt && e.id === -1 ? gt.splice(jt + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), Fo();
}
function Ni(e, t, n = Je + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ke.length; n++) {
    const r = ke[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && ti(t, r))
        continue;
      ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Bo(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (n, r) => pn(n) - pn(r)
    );
    if (Bt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), jt = 0; jt < gt.length; jt++) {
      const n = gt[jt];
      h.NODE_ENV !== "production" && ti(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, jt = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zo(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => ti(e, n) : he;
  try {
    for (Je = 0; Je < ke.length; Je++) {
      const n = ke[Je];
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
    for (; Je < ke.length; Je++) {
      const n = ke[Je];
      n && (n.flags &= -2);
    }
    Je = -1, ke.length = 0, Bo(e), zn = null, (ke.length || Bt.length) && zo(e);
  }
}
function ti(e, t) {
  const n = e.get(t) || 0;
  if (n > Bl) {
    const r = t.i, i = r && Ns(r.type);
    return _n(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let et = !1;
const Rn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (bn().__VUE_HMR_RUNTIME__ = {
  createRecord: vr(Uo),
  rerender: vr(ql),
  reload: vr(Kl)
});
const Ct = /* @__PURE__ */ new Map();
function Ul(e) {
  const t = e.type.__hmrId;
  let n = Ct.get(t);
  n || (Uo(t, e.type), n = Ct.get(t)), n.instances.add(e);
}
function Wl(e) {
  Ct.get(e.type.__hmrId).instances.delete(e);
}
function Uo(e, t) {
  return Ct.has(e) ? !1 : (Ct.set(e, {
    initialDef: Un(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Un(e) {
  return Os(e) ? e.__vccOpts : e;
}
function ql(e, t) {
  const n = Ct.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Un(r.type).render = t), r.renderCache = [], et = !0, r.update(), et = !1;
  }));
}
function Kl(e, t) {
  const n = Ct.get(e);
  if (!n) return;
  t = Un(t), Oi(n.initialDef, t);
  const r = [...n.instances];
  for (let i = 0; i < r.length; i++) {
    const o = r[i], s = Un(o.type);
    let l = Rn.get(s);
    l || (s !== n.initialDef && Oi(s, t), Rn.set(s, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? lr(() => {
      et = !0, o.parent.update(), et = !1, l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(s);
  }
  Ho(() => {
    Rn.clear();
  });
}
function Oi(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function vr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ye, tn = [], Ar = !1;
function yn(e, ...t) {
  Ye ? Ye.emit(e, ...t) : Ar || tn.push({ event: e, args: t });
}
function Wo(e, t) {
  var n, r;
  Ye = e, Ye ? (Ye.enabled = !0, tn.forEach(({ event: i, args: o }) => Ye.emit(i, ...o)), tn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Wo(o, t);
  }), setTimeout(() => {
    Ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ar = !0, tn = []);
  }, 3e3)) : (Ar = !0, tn = []);
}
function Gl(e, t) {
  yn("app:init", e, t, {
    Fragment: Ne,
    Text: wn,
    Comment: Pe,
    Static: In
  });
}
function Zl(e) {
  yn("app:unmount", e);
}
const Jl = /* @__PURE__ */ ni(
  "component:added"
  /* COMPONENT_ADDED */
), qo = /* @__PURE__ */ ni(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ql = /* @__PURE__ */ ni(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yl = (e) => {
  Ye && typeof Ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ye.cleanupBuffer(e) && Ql(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return (t) => {
    yn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Xl = /* @__PURE__ */ Ko(
  "perf:start"
  /* PERFORMANCE_START */
), ea = /* @__PURE__ */ Ko(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ko(e) {
  return (t, n, r) => {
    yn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function ta(e, t, n) {
  yn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Oe = null, Go = null;
function Wn(e) {
  const t = Oe;
  return Oe = e, Go = e && e.type.__scopeId || null, t;
}
function na(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ji(-1);
    const o = Wn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Wn(o), r._d && ji(1);
    }
    return h.NODE_ENV !== "production" && qo(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Zo(e) {
  Ks(e) && k("Do not use built-in directive ids as custom directive id: " + e);
}
function Si(e, t) {
  if (Oe === null)
    return h.NODE_ENV !== "production" && k("withDirectives can only be used inside render functions."), e;
  const n = fr(Oe), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, a = G] = t[i];
    o && (I(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && st(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function xt(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let a = l.dir[r];
    a && (ft(), nt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), dt());
  }
}
const ra = Symbol("_vte"), ia = (e) => e.__isTeleport;
function ri(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ri(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Jo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const sa = /* @__PURE__ */ new WeakSet();
function qn(e, t, n, r, i = !1) {
  if (A(e)) {
    e.forEach(
      (D, N) => qn(
        D,
        t && (A(t) ? t[N] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (ln(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && qn(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? fr(r.component) : r.el, s = i ? null : o, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    k(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, d = l.setupState, g = j(d), b = d === G ? () => !1 : (D) => h.NODE_ENV !== "production" && (W(g, D) && !ue(g[D]) && k(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), sa.has(g[D])) ? !1 : W(g, D);
  if (u != null && u !== a && (ae(u) ? (c[u] = null, b(u) && (d[u] = null)) : ue(u) && (u.value = null)), I(a))
    Ut(a, l, 12, [s, c]);
  else {
    const D = ae(a), N = ue(a);
    if (D || N) {
      const U = () => {
        if (e.f) {
          const F = D ? b(a) ? d[a] : c[a] : a.value;
          i ? A(F) && Wr(F, o) : A(F) ? F.includes(o) || F.push(o) : D ? (c[a] = [o], b(a) && (d[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else D ? (c[a] = s, b(a) && (d[a] = s)) : N ? (a.value = s, e.k && (c[e.k] = s)) : h.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (U.id = -1, Ve(U, n)) : U();
    } else h.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
  }
}
bn().requestIdleCallback;
bn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, ii = (e) => e.type.__isKeepAlive;
function la(e, t) {
  Qo(e, "a", t);
}
function aa(e, t) {
  Qo(e, "da", t);
}
function Qo(e, t, n = _e) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ar(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ii(i.parent.vnode) && ca(r, t, n, i), i = i.parent;
  }
}
function ca(e, t, n, r) {
  const i = ar(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  oi(() => {
    Wr(r[t], i);
  }, n);
}
function ar(e, t, n = _e, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      ft();
      const l = vn(n), a = nt(t, n, e, s);
      return l(), dt(), a;
    });
    return r ? i.unshift(o) : i.push(o), o;
  } else if (h.NODE_ENV !== "production") {
    const i = kt(ei[e].replace(/ hook$/, ""));
    k(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const pt = (e) => (t, n = _e) => {
  (!gn || e === "sp") && ar(e, (...r) => t(...r), n);
}, ua = pt("bm"), Yo = pt("m"), fa = pt(
  "bu"
), da = pt("u"), pa = pt(
  "bum"
), oi = pt("um"), ha = pt(
  "sp"
), ga = pt("rtg"), ma = pt("rtc");
function ba(e, t = _e) {
  ar("ec", e, t);
}
const _a = Symbol.for("v-ndc");
function Dn(e, t, n, r) {
  let i;
  const o = n, s = A(e);
  if (s || ae(e)) {
    const l = s && Dt(e);
    let a = !1;
    l && (a = !De(e), e = ir(e)), i = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(
        a ? ve(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && k(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (X(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        i[a] = t(e[c], c, a, o);
      }
    }
  else
    i = [];
  return i;
}
const Pr = (e) => e ? Es(e) ? fr(e) : Pr(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? Xe(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? Xe(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? Xe(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? Xe(e.refs) : e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ts(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      lr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jo.bind(e.proxy)),
    $watch: (e) => Qa.bind(e)
  })
), si = (e) => e === "_" || e === "$", xr = (e, t) => e !== G && !e.__isScriptSetup && W(e, t), Xo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: a } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (xr(r, t))
          return s[t] = 1, r[t];
        if (i !== G && W(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && W(u, t)
        )
          return s[t] = 3, o[t];
        if (n !== G && W(n, t))
          return s[t] = 4, n[t];
        Ir && (s[t] = 0);
      }
    }
    const c = Tt[t];
    let d, g;
    if (c)
      return t === "$attrs" ? (pe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Zn()) : h.NODE_ENV !== "production" && t === "$slots" && pe(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== G && W(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, W(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && Oe && (!ae(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== G && si(t[0]) && W(i, t) ? k(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && k(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return xr(i, t) ? (i[t] = n, !0) : h.NODE_ENV !== "production" && i.__isScriptSetup && W(i, t) ? (k(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== G && W(r, t) ? (r[t] = n, !0) : W(e.props, t) ? (h.NODE_ENV !== "production" && k(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && k(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o }
  }, s) {
    let l;
    return !!n[s] || e !== G && W(e, s) || xr(t, s) || (l = o[0]) && W(l, s) || W(r, s) || W(Tt, s) || W(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (Xo.ownKeys = (e) => (k(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ya(e) {
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
      set: he
    });
  }), t;
}
function wa(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: he
    });
  });
}
function va(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (si(r[0])) {
        k(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: he
      });
    }
  });
}
function Di(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? k(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ir = !0;
function Ea(e) {
  const t = ts(e), n = e.proxy, r = e.ctx;
  Ir = !1, t.beforeCreate && $i(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: g,
    beforeUpdate: b,
    updated: D,
    activated: N,
    deactivated: U,
    beforeDestroy: F,
    beforeUnmount: q,
    destroyed: B,
    unmounted: ge,
    render: V,
    renderTracked: le,
    renderTriggered: de,
    errorCaptured: oe,
    serverPrefetch: ye,
    // public API
    expose: je,
    inheritAttrs: ze,
    // assets
    components: Te,
    directives: At,
    filters: En
  } = t, Ue = h.NODE_ENV !== "production" ? xa() : null;
  if (h.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const T in H)
        Ue("Props", T);
  }
  if (u && ka(u, r, Ue), s)
    for (const H in s) {
      const T = s[H];
      I(T) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, H, {
        value: T.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[H] = T.bind(n), h.NODE_ENV !== "production" && Ue("Methods", H)) : h.NODE_ENV !== "production" && k(
        `Method "${H}" has type "${typeof T}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    h.NODE_ENV !== "production" && !I(i) && k(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = i.call(n, n);
    if (h.NODE_ENV !== "production" && qr(H) && k(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !X(H))
      h.NODE_ENV !== "production" && k("data() should return an object.");
    else if (e.data = Xr(H), h.NODE_ENV !== "production")
      for (const T in H)
        Ue("Data", T), si(T[0]) || Object.defineProperty(r, T, {
          configurable: !0,
          enumerable: !0,
          get: () => H[T],
          set: he
        });
  }
  if (Ir = !0, o)
    for (const H in o) {
      const T = o[H], $ = I(T) ? T.bind(n, n) : I(T.get) ? T.get.bind(n, n) : he;
      h.NODE_ENV !== "production" && $ === he && k(`Computed property "${H}" has no getter.`);
      const C = !I(T) && I(T.set) ? T.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        k(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      } : he, Y = Ec({
        get: $,
        set: C
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Y.value,
        set: (se) => Y.value = se
      }), h.NODE_ENV !== "production" && Ue("Computed", H);
    }
  if (l)
    for (const H in l)
      es(l[H], r, n, H);
  if (a) {
    const H = I(a) ? a.call(n) : a;
    Reflect.ownKeys(H).forEach((T) => {
      Ta(T, H[T]);
    });
  }
  c && $i(c, e, "c");
  function me(H, T) {
    A(T) ? T.forEach(($) => H($.bind(n))) : T && H(T.bind(n));
  }
  if (me(ua, d), me(Yo, g), me(fa, b), me(da, D), me(la, N), me(aa, U), me(ba, oe), me(ma, le), me(ga, de), me(pa, q), me(oi, ge), me(ha, ye), A(je))
    if (je.length) {
      const H = e.exposed || (e.exposed = {});
      je.forEach((T) => {
        Object.defineProperty(H, T, {
          get: () => n[T],
          set: ($) => n[T] = $
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === he && (e.render = V), ze != null && (e.inheritAttrs = ze), Te && (e.components = Te), At && (e.directives = At), ye && Jo(e);
}
function ka(e, t, n = he) {
  A(e) && (e = Mr(e));
  for (const r in e) {
    const i = e[r];
    let o;
    X(i) ? "default" in i ? o = An(
      i.from || r,
      i.default,
      !0
    ) : o = An(i.from || r) : o = An(i), ue(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function $i(e, t, n) {
  nt(
    A(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function es(e, t, n, r) {
  let i = r.includes(".") ? hs(n, r) : () => n[r];
  if (ae(e)) {
    const o = t[e];
    I(o) ? kr(i, o) : h.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e}"`, o);
  } else if (I(e))
    kr(i, e.bind(n));
  else if (X(e))
    if (A(e))
      e.forEach((o) => es(o, t, n, r));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) ? kr(i, o, e) : h.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else h.NODE_ENV !== "production" && k(`Invalid watch option: "${r}"`, e);
}
function ts(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !i.length && !n && !r ? a = t : (a = {}, i.length && i.forEach(
    (u) => Kn(a, u, s, !0)
  ), Kn(a, t, s)), X(t) && o.set(t, a), a;
}
function Kn(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Kn(e, o, n, !0), i && i.forEach(
    (s) => Kn(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      h.NODE_ENV !== "production" && k(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Na[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Na = {
  data: Ti,
  props: Ci,
  emits: Ci,
  // objects
  methods: nn,
  computed: nn,
  // lifecycle
  beforeCreate: Ee,
  created: Ee,
  beforeMount: Ee,
  mounted: Ee,
  beforeUpdate: Ee,
  updated: Ee,
  beforeDestroy: Ee,
  beforeUnmount: Ee,
  destroyed: Ee,
  unmounted: Ee,
  activated: Ee,
  deactivated: Ee,
  errorCaptured: Ee,
  serverPrefetch: Ee,
  // assets
  components: nn,
  directives: nn,
  // watch
  watch: Sa,
  // provide / inject
  provide: Ti,
  inject: Oa
};
function Ti(e, t) {
  return t ? e ? function() {
    return fe(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oa(e, t) {
  return nn(Mr(e), Mr(t));
}
function Mr(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nn(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ci(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Di(e),
    Di(t ?? {})
  ) : t;
}
function Sa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ee(e[r], t[r]);
  return n;
}
function ns() {
  return {
    app: null,
    config: {
      isNativeTag: Ws,
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
let Da = 0;
function $a(e, t) {
  return function(r, i = null) {
    I(r) || (r = fe({}, r)), i != null && !X(i) && (h.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), i = null);
    const o = ns(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = o.app = {
      _uid: Da++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: zi,
      get config() {
        return o.config;
      },
      set config(c) {
        h.NODE_ENV !== "production" && k(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return s.has(c) ? h.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : c && I(c.install) ? (s.add(c), c.install(u, ...d)) : I(c) ? (s.add(c), c(u, ...d)) : h.NODE_ENV !== "production" && k(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(c) {
        return o.mixins.includes(c) ? h.NODE_ENV !== "production" && k(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : o.mixins.push(c), u;
      },
      component(c, d) {
        return h.NODE_ENV !== "production" && Br(c, o.config), d ? (h.NODE_ENV !== "production" && o.components[c] && k(`Component "${c}" has already been registered in target app.`), o.components[c] = d, u) : o.components[c];
      },
      directive(c, d) {
        return h.NODE_ENV !== "production" && Zo(c), d ? (h.NODE_ENV !== "production" && o.directives[c] && k(`Directive "${c}" has already been registered in target app.`), o.directives[c] = d, u) : o.directives[c];
      },
      mount(c, d, g) {
        if (a)
          h.NODE_ENV !== "production" && k(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && c.__vue_app__ && k(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = u._ceVNode || lt(r, i);
          return b.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (o.reload = () => {
            e(
              wt(b),
              c,
              g
            );
          }), e(b, c, g), a = !0, u._container = c, c.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = b.component, Gl(u, zi)), fr(b.component);
        }
      },
      onUnmount(c) {
        h.NODE_ENV !== "production" && typeof c != "function" && k(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (nt(
          l,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, Zl(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return h.NODE_ENV !== "production" && c in o.provides && k(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), o.provides[c] = d, u;
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
  if (!_e)
    h.NODE_ENV !== "production" && k("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === n && (n = _e.provides = Object.create(r)), n[e] = t;
  }
}
function An(e, t, n = !1) {
  const r = _e || Oe;
  if (r || zt) {
    const i = zt ? zt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && k(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
const rs = {}, is = () => Object.create(rs), os = (e) => Object.getPrototypeOf(e) === rs;
function Ca(e, t, n, r = !1) {
  const i = {}, o = is();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ss(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  h.NODE_ENV !== "production" && as(t || {}, i, e), n ? e.props = r ? i : Dl(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Va(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ra(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = j(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Va(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let g = c[d];
        if (cr(e.emitsOptions, g))
          continue;
        const b = t[g];
        if (a)
          if (W(o, g))
            b !== o[g] && (o[g] = b, u = !0);
          else {
            const D = He(g);
            i[D] = Lr(
              a,
              l,
              D,
              b,
              e,
              !1
            );
          }
        else
          b !== o[g] && (o[g] = b, u = !0);
      }
    }
  } else {
    ss(e, t, i, o) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !W(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = yt(d)) === d || !W(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = Lr(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (o !== l)
      for (const d in o)
        (!t || !W(t, d)) && (delete o[d], u = !0);
  }
  u && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && as(t || {}, i, e);
}
function ss(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let a in t) {
      if (rn(a))
        continue;
      const u = t[a];
      let c;
      i && W(i, c = He(a)) ? !o || !o.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : cr(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, s = !0);
    }
  if (o) {
    const a = j(n), u = l || G;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Lr(
        i,
        a,
        d,
        u[d],
        e,
        !W(u, d)
      );
    }
  }
  return s;
}
function Lr(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = W(s, "default");
    if (l && r === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && I(a)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const c = vn(i);
          r = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        r = a;
      i.ce && i.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === yt(n)) && (r = !0));
  }
  return r;
}
const Aa = /* @__PURE__ */ new WeakMap();
function ls(e, t, n = !1) {
  const r = n ? Aa : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let a = !1;
  if (!I(e)) {
    const c = (d) => {
      a = !0;
      const [g, b] = ls(d, t, !0);
      fe(s, g), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return X(e) && r.set(e, Ht), Ht;
  if (A(o))
    for (let c = 0; c < o.length; c++) {
      h.NODE_ENV !== "production" && !ae(o[c]) && k("props must be strings when using array syntax.", o[c]);
      const d = He(o[c]);
      Vi(d) && (s[d] = G);
    }
  else if (o) {
    h.NODE_ENV !== "production" && !X(o) && k("invalid props options", o);
    for (const c in o) {
      const d = He(c);
      if (Vi(d)) {
        const g = o[c], b = s[d] = A(g) || I(g) ? { type: g } : fe({}, g), D = b.type;
        let N = !1, U = !0;
        if (A(D))
          for (let F = 0; F < D.length; ++F) {
            const q = D[F], B = I(q) && q.name;
            if (B === "Boolean") {
              N = !0;
              break;
            } else B === "String" && (U = !1);
          }
        else
          N = I(D) && D.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = N, b[
          1
          /* shouldCastTrue */
        ] = U, (N || W(b, "default")) && l.push(d);
      }
    }
  }
  const u = [s, l];
  return X(e) && r.set(e, u), u;
}
function Vi(e) {
  return e[0] !== "$" && !rn(e) ? !0 : (h.NODE_ENV !== "production" && k(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Pa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function as(e, t, n) {
  const r = j(t), i = n.propsOptions[0], o = Object.keys(e).map((s) => He(s));
  for (const s in i) {
    let l = i[s];
    l != null && Ia(
      s,
      r[s],
      l,
      h.NODE_ENV !== "production" ? Xe(r) : r,
      !o.includes(s)
    );
  }
}
function Ia(e, t, n, r, i) {
  const { type: o, required: s, validator: l, skipCheck: a } = n;
  if (s && i) {
    k('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (o != null && o !== !0 && !a) {
      let u = !1;
      const c = A(o) ? o : [o], d = [];
      for (let g = 0; g < c.length && !u; g++) {
        const { valid: b, expectedType: D } = La(t, c[g]);
        d.push(D || ""), u = b;
      }
      if (!u) {
        k(ja(e, t, d));
        return;
      }
    }
    l && !l(t, r) && k('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ma = /* @__PURE__ */ ut(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function La(e, t) {
  let n;
  const r = Pa(t);
  if (r === "null")
    n = e === null;
  else if (Ma(r)) {
    const i = typeof e;
    n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else r === "Object" ? n = X(e) : r === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function ja(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rr).join(" | ")}`;
  const i = n[0], o = Kr(t), s = Ri(t, i), l = Ri(t, o);
  return n.length === 1 && Ai(i) && !Fa(i, o) && (r += ` with value ${s}`), r += `, got ${o} `, Ai(o) && (r += `with value ${l}.`), r;
}
function Ri(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ai(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const cs = (e) => e[0] === "_" || e === "$stable", li = (e) => A(e) ? e.map(Fe) : [Fe(e)], Ha = (e, t, n) => {
  if (t._n)
    return t;
  const r = na((...i) => (h.NODE_ENV !== "production" && _e && (!n || n.root === _e.root) && k(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), li(t(...i))), n);
  return r._c = !1, r;
}, us = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (cs(i)) continue;
    const o = e[i];
    if (I(o))
      t[i] = Ha(i, o, r);
    else if (o != null) {
      h.NODE_ENV !== "production" && k(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = li(o);
      t[i] = () => s;
    }
  }
}, fs = (e, t) => {
  h.NODE_ENV !== "production" && !ii(e.vnode) && k(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = li(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, Ba = (e, t, n) => {
  const r = e.slots = is();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (jr(r, t, n), n && Fn(r, "_", i, !0)) : us(t, r);
  } else t && fs(e, t);
}, za = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = G;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && et ? (jr(i, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? o = !1 : jr(i, t, n) : (o = !t.$stable, us(t, i)), s = t;
  } else t && (fs(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !cs(l) && s[l] == null && delete i[l];
};
let Jt, bt;
function It(e, t) {
  e.appContext.config.performance && Gn() && bt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && Xl(e, t, Gn() ? bt.now() : Date.now());
}
function Mt(e, t) {
  if (e.appContext.config.performance && Gn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    bt.mark(r), bt.measure(
      `<${dr(e, e.type)}> ${t}`,
      n,
      r
    ), bt.clearMarks(n), bt.clearMarks(r);
  }
  h.NODE_ENV !== "production" && ea(e, t, Gn() ? bt.now() : Date.now());
}
function Gn() {
  return Jt !== void 0 || (typeof window < "u" && window.performance ? (Jt = !0, bt = window.performance) : Jt = !1), Jt;
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
const Ve = ic;
function Wa(e) {
  return qa(e);
}
function qa(e, t) {
  Ua();
  const n = bn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Wo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: g,
    setScopeId: b = he,
    insertStaticContent: D
  } = e, N = (f, p, m, w = null, _ = null, y = null, O = void 0, E = null, x = h.NODE_ENV !== "production" && et ? !1 : !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Qt(f, p) && (w = kn(f), ce(f, _, y, !0), f = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
    const { type: v, ref: P, shapeFlag: S } = p;
    switch (v) {
      case wn:
        U(f, p, m, w);
        break;
      case Pe:
        F(f, p, m, w);
        break;
      case In:
        f == null ? q(p, m, w, O) : h.NODE_ENV !== "production" && B(f, p, m, O);
        break;
      case Ne:
        At(
          f,
          p,
          m,
          w,
          _,
          y,
          O,
          E,
          x
        );
        break;
      default:
        S & 1 ? le(
          f,
          p,
          m,
          w,
          _,
          y,
          O,
          E,
          x
        ) : S & 6 ? En(
          f,
          p,
          m,
          w,
          _,
          y,
          O,
          E,
          x
        ) : S & 64 || S & 128 ? v.process(
          f,
          p,
          m,
          w,
          _,
          y,
          O,
          E,
          x,
          Kt
        ) : h.NODE_ENV !== "production" && k("Invalid VNode type:", v, `(${typeof v})`);
    }
    P != null && _ && qn(P, f && f.ref, y, p || f, !p);
  }, U = (f, p, m, w) => {
    if (f == null)
      r(
        p.el = l(p.children),
        m,
        w
      );
    else {
      const _ = p.el = f.el;
      p.children !== f.children && u(_, p.children);
    }
  }, F = (f, p, m, w) => {
    f == null ? r(
      p.el = a(p.children || ""),
      m,
      w
    ) : p.el = f.el;
  }, q = (f, p, m, w) => {
    [f.el, f.anchor] = D(
      f.children,
      p,
      m,
      w,
      f.el,
      f.anchor
    );
  }, B = (f, p, m, w) => {
    if (p.children !== f.children) {
      const _ = g(f.anchor);
      V(f), [p.el, p.anchor] = D(
        p.children,
        m,
        _,
        w
      );
    } else
      p.el = f.el, p.anchor = f.anchor;
  }, ge = ({ el: f, anchor: p }, m, w) => {
    let _;
    for (; f && f !== p; )
      _ = g(f), r(f, m, w), f = _;
    r(p, m, w);
  }, V = ({ el: f, anchor: p }) => {
    let m;
    for (; f && f !== p; )
      m = g(f), i(f), f = m;
    i(p);
  }, le = (f, p, m, w, _, y, O, E, x) => {
    p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), f == null ? de(
      p,
      m,
      w,
      _,
      y,
      O,
      E,
      x
    ) : je(
      f,
      p,
      _,
      y,
      O,
      E,
      x
    );
  }, de = (f, p, m, w, _, y, O, E) => {
    let x, v;
    const { props: P, shapeFlag: S, transition: R, dirs: L } = f;
    if (x = f.el = s(
      f.type,
      y,
      P && P.is,
      P
    ), S & 8 ? c(x, f.children) : S & 16 && ye(
      f.children,
      x,
      null,
      w,
      _,
      Er(f, y),
      O,
      E
    ), L && xt(f, null, w, "created"), oe(x, f, f.scopeId, O, w), P) {
      for (const ee in P)
        ee !== "value" && !rn(ee) && o(x, ee, null, P[ee], y, w);
      "value" in P && o(x, "value", null, P.value, y), (v = P.onVnodeBeforeMount) && Ge(v, w, f);
    }
    h.NODE_ENV !== "production" && (Fn(x, "__vnode", f, !0), Fn(x, "__vueParentComponent", w, !0)), L && xt(f, null, w, "beforeMount");
    const z = Ka(_, R);
    z && R.beforeEnter(x), r(x, p, m), ((v = P && P.onVnodeMounted) || z || L) && Ve(() => {
      v && Ge(v, w, f), z && R.enter(x), L && xt(f, null, w, "mounted");
    }, _);
  }, oe = (f, p, m, w, _) => {
    if (m && b(f, m), w)
      for (let y = 0; y < w.length; y++)
        b(f, w[y]);
    if (_) {
      let y = _.subTree;
      if (h.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = ai(y.children) || y), p === y || bs(y.type) && (y.ssContent === p || y.ssFallback === p)) {
        const O = _.vnode;
        oe(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, ye = (f, p, m, w, _, y, O, E, x = 0) => {
    for (let v = x; v < f.length; v++) {
      const P = f[v] = E ? mt(f[v]) : Fe(f[v]);
      N(
        null,
        P,
        p,
        m,
        w,
        _,
        y,
        O,
        E
      );
    }
  }, je = (f, p, m, w, _, y, O) => {
    const E = p.el = f.el;
    h.NODE_ENV !== "production" && (E.__vnode = p);
    let { patchFlag: x, dynamicChildren: v, dirs: P } = p;
    x |= f.patchFlag & 16;
    const S = f.props || G, R = p.props || G;
    let L;
    if (m && Et(m, !1), (L = R.onVnodeBeforeUpdate) && Ge(L, m, p, f), P && xt(p, f, m, "beforeUpdate"), m && Et(m, !0), h.NODE_ENV !== "production" && et && (x = 0, O = !1, v = null), (S.innerHTML && R.innerHTML == null || S.textContent && R.textContent == null) && c(E, ""), v ? (ze(
      f.dynamicChildren,
      v,
      E,
      m,
      w,
      Er(p, _),
      y
    ), h.NODE_ENV !== "production" && Pn(f, p)) : O || $(
      f,
      p,
      E,
      null,
      m,
      w,
      Er(p, _),
      y,
      !1
    ), x > 0) {
      if (x & 16)
        Te(E, S, R, m, _);
      else if (x & 2 && S.class !== R.class && o(E, "class", null, R.class, _), x & 4 && o(E, "style", S.style, R.style, _), x & 8) {
        const z = p.dynamicProps;
        for (let ee = 0; ee < z.length; ee++) {
          const J = z[ee], Ce = S[J], $e = R[J];
          ($e !== Ce || J === "value") && o(E, J, Ce, $e, _, m);
        }
      }
      x & 1 && f.children !== p.children && c(E, p.children);
    } else !O && v == null && Te(E, S, R, m, _);
    ((L = R.onVnodeUpdated) || P) && Ve(() => {
      L && Ge(L, m, p, f), P && xt(p, f, m, "updated");
    }, w);
  }, ze = (f, p, m, w, _, y, O) => {
    for (let E = 0; E < p.length; E++) {
      const x = f[E], v = p[E], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qt(x, v) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? d(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      N(
        x,
        v,
        P,
        null,
        w,
        _,
        y,
        O,
        !0
      );
    }
  }, Te = (f, p, m, w, _) => {
    if (p !== m) {
      if (p !== G)
        for (const y in p)
          !rn(y) && !(y in m) && o(
            f,
            y,
            p[y],
            null,
            _,
            w
          );
      for (const y in m) {
        if (rn(y)) continue;
        const O = m[y], E = p[y];
        O !== E && y !== "value" && o(f, y, E, O, _, w);
      }
      "value" in m && o(f, "value", p.value, m.value, _);
    }
  }, At = (f, p, m, w, _, y, O, E, x) => {
    const v = p.el = f ? f.el : l(""), P = p.anchor = f ? f.anchor : l("");
    let { patchFlag: S, dynamicChildren: R, slotScopeIds: L } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (et || S & 2048) && (S = 0, x = !1, R = null), L && (E = E ? E.concat(L) : L), f == null ? (r(v, m, w), r(P, m, w), ye(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      P,
      _,
      y,
      O,
      E,
      x
    )) : S > 0 && S & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (ze(
      f.dynamicChildren,
      R,
      m,
      _,
      y,
      O,
      E
    ), h.NODE_ENV !== "production" ? Pn(f, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || _ && p === _.subTree) && Pn(
        f,
        p,
        !0
        /* shallow */
      )
    )) : $(
      f,
      p,
      m,
      P,
      _,
      y,
      O,
      E,
      x
    );
  }, En = (f, p, m, w, _, y, O, E, x) => {
    p.slotScopeIds = E, f == null ? p.shapeFlag & 512 ? _.ctx.activate(
      p,
      m,
      w,
      O,
      x
    ) : Ue(
      p,
      m,
      w,
      _,
      y,
      O,
      x
    ) : me(f, p, x);
  }, Ue = (f, p, m, w, _, y, O) => {
    const E = f.component = dc(
      f,
      w,
      _
    );
    if (h.NODE_ENV !== "production" && E.type.__hmrId && Ul(E), h.NODE_ENV !== "production" && (Cn(f), It(E, "mount")), ii(f) && (E.ctx.renderer = Kt), h.NODE_ENV !== "production" && It(E, "init"), gc(E, !1, O), h.NODE_ENV !== "production" && Mt(E, "init"), E.asyncDep) {
      if (h.NODE_ENV !== "production" && et && (f.el = null), _ && _.registerDep(E, H, O), !f.el) {
        const x = E.subTree = lt(Pe);
        F(null, x, p, m);
      }
    } else
      H(
        E,
        f,
        p,
        m,
        _,
        y,
        O
      );
    h.NODE_ENV !== "production" && (Vn(), Mt(E, "mount"));
  }, me = (f, p, m) => {
    const w = p.component = f.component;
    if (nc(f, p, m))
      if (w.asyncDep && !w.asyncResolved) {
        h.NODE_ENV !== "production" && Cn(p), T(w, p, m), h.NODE_ENV !== "production" && Vn();
        return;
      } else
        w.next = p, w.update();
    else
      p.el = f.el, w.vnode = p;
  }, H = (f, p, m, w, _, y, O) => {
    const E = () => {
      if (f.isMounted) {
        let { next: S, bu: R, u: L, parent: z, vnode: ee } = f;
        {
          const qe = ds(f);
          if (qe) {
            S && (S.el = ee.el, T(f, S, O)), qe.asyncDep.then(() => {
              f.isUnmounted || E();
            });
            return;
          }
        }
        let J = S, Ce;
        h.NODE_ENV !== "production" && Cn(S || f.vnode), Et(f, !1), S ? (S.el = ee.el, T(f, S, O)) : S = ee, R && Lt(R), (Ce = S.props && S.props.onVnodeBeforeUpdate) && Ge(Ce, z, S, ee), Et(f, !0), h.NODE_ENV !== "production" && It(f, "render");
        const $e = Ii(f);
        h.NODE_ENV !== "production" && Mt(f, "render");
        const We = f.subTree;
        f.subTree = $e, h.NODE_ENV !== "production" && It(f, "patch"), N(
          We,
          $e,
          // parent may have changed if it's in a teleport
          d(We.el),
          // anchor may have changed if it's in a fragment
          kn(We),
          f,
          _,
          y
        ), h.NODE_ENV !== "production" && Mt(f, "patch"), S.el = $e.el, J === null && rc(f, $e.el), L && Ve(L, _), (Ce = S.props && S.props.onVnodeUpdated) && Ve(
          () => Ge(Ce, z, S, ee),
          _
        ), h.NODE_ENV !== "production" && qo(f), h.NODE_ENV !== "production" && Vn();
      } else {
        let S;
        const { el: R, props: L } = p, { bm: z, m: ee, parent: J, root: Ce, type: $e } = f, We = ln(p);
        Et(f, !1), z && Lt(z), !We && (S = L && L.onVnodeBeforeMount) && Ge(S, J, p), Et(f, !0);
        {
          Ce.ce && Ce.ce._injectChildStyle($e), h.NODE_ENV !== "production" && It(f, "render");
          const qe = f.subTree = Ii(f);
          h.NODE_ENV !== "production" && Mt(f, "render"), h.NODE_ENV !== "production" && It(f, "patch"), N(
            null,
            qe,
            m,
            w,
            f,
            _,
            y
          ), h.NODE_ENV !== "production" && Mt(f, "patch"), p.el = qe.el;
        }
        if (ee && Ve(ee, _), !We && (S = L && L.onVnodeMounted)) {
          const qe = p;
          Ve(
            () => Ge(S, J, qe),
            _
          );
        }
        (p.shapeFlag & 256 || J && ln(J.vnode) && J.vnode.shapeFlag & 256) && f.a && Ve(f.a, _), f.isMounted = !0, h.NODE_ENV !== "production" && Jl(f), p = m = w = null;
      }
    };
    f.scope.on();
    const x = f.effect = new _o(E);
    f.scope.off();
    const v = f.update = x.run.bind(x), P = f.job = x.runIfDirty.bind(x);
    P.i = f, P.id = f.uid, x.scheduler = () => lr(P), Et(f, !0), h.NODE_ENV !== "production" && (x.onTrack = f.rtc ? (S) => Lt(f.rtc, S) : void 0, x.onTrigger = f.rtg ? (S) => Lt(f.rtg, S) : void 0), v();
  }, T = (f, p, m) => {
    p.component = f;
    const w = f.vnode.props;
    f.vnode = p, f.next = null, Ra(f, p.props, w, m), za(f, p.children, m), ft(), Ni(f), dt();
  }, $ = (f, p, m, w, _, y, O, E, x = !1) => {
    const v = f && f.children, P = f ? f.shapeFlag : 0, S = p.children, { patchFlag: R, shapeFlag: L } = p;
    if (R > 0) {
      if (R & 128) {
        Y(
          v,
          S,
          m,
          w,
          _,
          y,
          O,
          E,
          x
        );
        return;
      } else if (R & 256) {
        C(
          v,
          S,
          m,
          w,
          _,
          y,
          O,
          E,
          x
        );
        return;
      }
    }
    L & 8 ? (P & 16 && qt(v, _, y), S !== v && c(m, S)) : P & 16 ? L & 16 ? Y(
      v,
      S,
      m,
      w,
      _,
      y,
      O,
      E,
      x
    ) : qt(v, _, y, !0) : (P & 8 && c(m, ""), L & 16 && ye(
      S,
      m,
      w,
      _,
      y,
      O,
      E,
      x
    ));
  }, C = (f, p, m, w, _, y, O, E, x) => {
    f = f || Ht, p = p || Ht;
    const v = f.length, P = p.length, S = Math.min(v, P);
    let R;
    for (R = 0; R < S; R++) {
      const L = p[R] = x ? mt(p[R]) : Fe(p[R]);
      N(
        f[R],
        L,
        m,
        null,
        _,
        y,
        O,
        E,
        x
      );
    }
    v > P ? qt(
      f,
      _,
      y,
      !0,
      !1,
      S
    ) : ye(
      p,
      m,
      w,
      _,
      y,
      O,
      E,
      x,
      S
    );
  }, Y = (f, p, m, w, _, y, O, E, x) => {
    let v = 0;
    const P = p.length;
    let S = f.length - 1, R = P - 1;
    for (; v <= S && v <= R; ) {
      const L = f[v], z = p[v] = x ? mt(p[v]) : Fe(p[v]);
      if (Qt(L, z))
        N(
          L,
          z,
          m,
          null,
          _,
          y,
          O,
          E,
          x
        );
      else
        break;
      v++;
    }
    for (; v <= S && v <= R; ) {
      const L = f[S], z = p[R] = x ? mt(p[R]) : Fe(p[R]);
      if (Qt(L, z))
        N(
          L,
          z,
          m,
          null,
          _,
          y,
          O,
          E,
          x
        );
      else
        break;
      S--, R--;
    }
    if (v > S) {
      if (v <= R) {
        const L = R + 1, z = L < P ? p[L].el : w;
        for (; v <= R; )
          N(
            null,
            p[v] = x ? mt(p[v]) : Fe(p[v]),
            m,
            z,
            _,
            y,
            O,
            E,
            x
          ), v++;
      }
    } else if (v > R)
      for (; v <= S; )
        ce(f[v], _, y, !0), v++;
    else {
      const L = v, z = v, ee = /* @__PURE__ */ new Map();
      for (v = z; v <= R; v++) {
        const xe = p[v] = x ? mt(p[v]) : Fe(p[v]);
        xe.key != null && (h.NODE_ENV !== "production" && ee.has(xe.key) && k(
          "Duplicate keys found during update:",
          JSON.stringify(xe.key),
          "Make sure keys are unique."
        ), ee.set(xe.key, v));
      }
      let J, Ce = 0;
      const $e = R - z + 1;
      let We = !1, qe = 0;
      const Gt = new Array($e);
      for (v = 0; v < $e; v++) Gt[v] = 0;
      for (v = L; v <= S; v++) {
        const xe = f[v];
        if (Ce >= $e) {
          ce(xe, _, y, !0);
          continue;
        }
        let Ke;
        if (xe.key != null)
          Ke = ee.get(xe.key);
        else
          for (J = z; J <= R; J++)
            if (Gt[J - z] === 0 && Qt(xe, p[J])) {
              Ke = J;
              break;
            }
        Ke === void 0 ? ce(xe, _, y, !0) : (Gt[Ke - z] = v + 1, Ke >= qe ? qe = Ke : We = !0, N(
          xe,
          p[Ke],
          m,
          null,
          _,
          y,
          O,
          E,
          x
        ), Ce++);
      }
      const yi = We ? Ga(Gt) : Ht;
      for (J = yi.length - 1, v = $e - 1; v >= 0; v--) {
        const xe = z + v, Ke = p[xe], wi = xe + 1 < P ? p[xe + 1].el : w;
        Gt[v] === 0 ? N(
          null,
          Ke,
          m,
          wi,
          _,
          y,
          O,
          E,
          x
        ) : We && (J < 0 || v !== yi[J] ? se(Ke, m, wi, 2) : J--);
      }
    }
  }, se = (f, p, m, w, _ = null) => {
    const { el: y, type: O, transition: E, children: x, shapeFlag: v } = f;
    if (v & 6) {
      se(f.component.subTree, p, m, w);
      return;
    }
    if (v & 128) {
      f.suspense.move(p, m, w);
      return;
    }
    if (v & 64) {
      O.move(f, p, m, Kt);
      return;
    }
    if (O === Ne) {
      r(y, p, m);
      for (let S = 0; S < x.length; S++)
        se(x[S], p, m, w);
      r(f.anchor, p, m);
      return;
    }
    if (O === In) {
      ge(f, p, m);
      return;
    }
    if (w !== 2 && v & 1 && E)
      if (w === 0)
        E.beforeEnter(y), r(y, p, m), Ve(() => E.enter(y), _);
      else {
        const { leave: S, delayLeave: R, afterLeave: L } = E, z = () => r(y, p, m), ee = () => {
          S(y, () => {
            z(), L && L();
          });
        };
        R ? R(y, z, ee) : ee();
      }
    else
      r(y, p, m);
  }, ce = (f, p, m, w = !1, _ = !1) => {
    const {
      type: y,
      props: O,
      ref: E,
      children: x,
      dynamicChildren: v,
      shapeFlag: P,
      patchFlag: S,
      dirs: R,
      cacheIndex: L
    } = f;
    if (S === -2 && (_ = !1), E != null && qn(E, null, m, f, !0), L != null && (p.renderCache[L] = void 0), P & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const z = P & 1 && R, ee = !ln(f);
    let J;
    if (ee && (J = O && O.onVnodeBeforeUnmount) && Ge(J, p, f), P & 6)
      Bs(f.component, m, w);
    else {
      if (P & 128) {
        f.suspense.unmount(m, w);
        return;
      }
      z && xt(f, null, p, "beforeUnmount"), P & 64 ? f.type.remove(
        f,
        p,
        m,
        Kt,
        w
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Ne || S > 0 && S & 64) ? qt(
        v,
        p,
        m,
        !1,
        !0
      ) : (y === Ne && S & 384 || !_ && P & 16) && qt(x, p, m), w && Wt(f);
    }
    (ee && (J = O && O.onVnodeUnmounted) || z) && Ve(() => {
      J && Ge(J, p, f), z && xt(f, null, p, "unmounted");
    }, m);
  }, Wt = (f) => {
    const { type: p, el: m, anchor: w, transition: _ } = f;
    if (p === Ne) {
      h.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && _ && !_.persisted ? f.children.forEach((O) => {
        O.type === Pe ? i(O.el) : Wt(O);
      }) : Hs(m, w);
      return;
    }
    if (p === In) {
      V(f);
      return;
    }
    const y = () => {
      i(m), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (f.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: E } = _, x = () => O(m, y);
      E ? E(f.el, y, x) : x();
    } else
      y();
  }, Hs = (f, p) => {
    let m;
    for (; f !== p; )
      m = g(f), i(f), f = m;
    i(p);
  }, Bs = (f, p, m) => {
    h.NODE_ENV !== "production" && f.type.__hmrId && Wl(f);
    const { bum: w, scope: _, job: y, subTree: O, um: E, m: x, a: v } = f;
    Pi(x), Pi(v), w && Lt(w), _.stop(), y && (y.flags |= 8, ce(O, f, p, m)), E && Ve(E, p), Ve(() => {
      f.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && Yl(f);
  }, qt = (f, p, m, w = !1, _ = !1, y = 0) => {
    for (let O = y; O < f.length; O++)
      ce(f[O], p, m, w, _);
  }, kn = (f) => {
    if (f.shapeFlag & 6)
      return kn(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = g(f.anchor || f.el), m = p && p[ra];
    return m ? g(m) : p;
  };
  let gr = !1;
  const _i = (f, p, m) => {
    f == null ? p._vnode && ce(p._vnode, null, null, !0) : N(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = f, gr || (gr = !0, Ni(), Bo(), gr = !1);
  }, Kt = {
    p: N,
    um: ce,
    m: se,
    r: Wt,
    mt: Ue,
    mc: ye,
    pc: $,
    pbc: ze,
    n: kn,
    o: e
  };
  return {
    render: _i,
    hydrate: void 0,
    createApp: $a(_i)
  };
}
function Er({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Et({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ka(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pn(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (A(r) && A(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = mt(i[o]), l.el = s.el), !n && l.patchFlag !== -2 && Pn(s, l)), l.type === wn && (l.el = s.el), h.NODE_ENV !== "production" && l.type === Pe && !l.el && (l.el = s.el);
    }
}
function Ga(e) {
  const t = e.slice(), n = [0];
  let r, i, o, s, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < u ? o = l + 1 : s = l;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function ds(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ds(t);
}
function Pi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Za = Symbol.for("v-scx"), Ja = () => {
  {
    const e = An(Za);
    return e || h.NODE_ENV !== "production" && k(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function kr(e, t, n) {
  return h.NODE_ENV !== "production" && !I(t) && k(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ps(e, t, n);
}
function ps(e, t, n = G) {
  const { immediate: r, deep: i, flush: o, once: s } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && k(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && k(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && k(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = k);
  const a = t && r || !t && o !== "post";
  let u;
  if (gn) {
    if (o === "sync") {
      const b = Ja();
      u = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!a) {
      const b = () => {
      };
      return b.stop = he, b.resume = he, b.pause = he, b;
    }
  }
  const c = _e;
  l.call = (b, D, N) => nt(b, c, D, N);
  let d = !1;
  o === "post" ? l.scheduler = (b) => {
    Ve(b, c && c.suspense);
  } : o !== "sync" && (d = !0, l.scheduler = (b, D) => {
    D ? b() : lr(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), d && (b.flags |= 2, c && (b.id = c.uid, b.i = c));
  };
  const g = Il(e, t, l);
  return gn && (u ? u.push(g) : a && g()), g;
}
function Qa(e, t, n) {
  const r = this.proxy, i = ae(e) ? e.includes(".") ? hs(r, e) : () => r[e] : e.bind(r, r);
  let o;
  I(t) ? o = t : (o = t.handler, n = t);
  const s = vn(this), l = ps(i, o.bind(r), n);
  return s(), l;
}
function hs(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function Xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || G;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = e;
    if (c)
      if (!(t in c))
        (!d || !(kt(He(t)) in d)) && k(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${kt(He(t))}" prop.`
        );
      else {
        const g = c[t];
        I(g) && (g(...n) || k(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), s = o && Ya(r, t.slice(7));
  if (s && (s.trim && (i = n.map((c) => ae(c) ? c.trim() : c)), s.number && (i = n.map(Dr))), h.NODE_ENV !== "production" && ta(e, t, i), h.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && r[kt(c)] && k(
      `Event "${c}" is emitted in component ${dr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${yt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = kt(t)] || // also try camelCase event handler (#2249)
  r[l = kt(He(t))];
  !a && o && (a = r[l = kt(yt(t))]), a && nt(
    a,
    e,
    6,
    i
  );
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, nt(
      u,
      e,
      6,
      i
    );
  }
}
function gs(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, l = !1;
  if (!I(e)) {
    const a = (u) => {
      const c = gs(u, t, !0);
      c && (l = !0, fe(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (X(e) && r.set(e, null), null) : (A(o) ? o.forEach((a) => s[a] = null) : fe(s, o), X(e) && r.set(e, s), s);
}
function cr(e, t) {
  return !e || !mn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, yt(t)) || W(e, t));
}
let Fr = !1;
function Zn() {
  Fr = !0;
}
function Ii(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: g,
    setupState: b,
    ctx: D,
    inheritAttrs: N
  } = e, U = Wn(e);
  let F, q;
  h.NODE_ENV !== "production" && (Fr = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = i || r, le = h.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(V, {
        get(de, oe, ye) {
          return k(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(de, oe, ye);
        }
      }) : V;
      F = Fe(
        u.call(
          le,
          V,
          c,
          h.NODE_ENV !== "production" ? Xe(d) : d,
          b,
          g,
          D
        )
      ), q = l;
    } else {
      const V = t;
      h.NODE_ENV !== "production" && l === d && Zn(), F = Fe(
        V.length > 1 ? V(
          h.NODE_ENV !== "production" ? Xe(d) : d,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), Xe(l);
            },
            slots: s,
            emit: a
          } : { attrs: l, slots: s, emit: a }
        ) : V(
          h.NODE_ENV !== "production" ? Xe(d) : d,
          null
        )
      ), q = t.props ? l : ec(l);
    }
  } catch (V) {
    an.length = 0, _n(V, e, 1), F = lt(Pe);
  }
  let B = F, ge;
  if (h.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([B, ge] = ms(F)), q && N !== !1) {
    const V = Object.keys(q), { shapeFlag: le } = B;
    if (V.length) {
      if (le & 7)
        o && V.some(jn) && (q = tc(
          q,
          o
        )), B = wt(B, q, !1, !0);
      else if (h.NODE_ENV !== "production" && !Fr && B.type !== Pe) {
        const de = Object.keys(l), oe = [], ye = [];
        for (let je = 0, ze = de.length; je < ze; je++) {
          const Te = de[je];
          mn(Te) ? jn(Te) || oe.push(Te[2].toLowerCase() + Te.slice(3)) : ye.push(Te);
        }
        ye.length && k(
          `Extraneous non-props attributes (${ye.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && k(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Mi(B) && k(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = wt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Mi(B) && k(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ri(B, n.transition)), h.NODE_ENV !== "production" && ge ? ge(B) : F = B, Wn(U), F;
}
const ms = (e) => {
  const t = e.children, n = e.dynamicChildren, r = ai(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return ms(r);
  } else return [e, void 0];
  const i = t.indexOf(r), o = n ? n.indexOf(r) : -1, s = (l) => {
    t[i] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Fe(r), s];
};
function ai(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (ur(i)) {
      if (i.type !== Pe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ai(n.children);
      }
    } else
      return;
  }
  return n;
}
const ec = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || mn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tc = (e, t) => {
  const n = {};
  for (const r in e)
    (!jn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Mi = (e) => e.shapeFlag & 7 || e.type === Pe;
function nc(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: a } = t, u = o.emitsOptions;
  if (h.NODE_ENV !== "production" && (i || l) && et || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Li(r, s, u) : !!s;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const g = c[d];
        if (s[g] !== r[g] && !cr(u, g))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? Li(r, s, u) : !0 : !!s;
  return !1;
}
function Li(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (t[o] !== e[o] && !cr(n, o))
      return !0;
  }
  return !1;
}
function rc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const bs = (e) => e.__isSuspense;
function ic(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Ho(e);
}
const Ne = Symbol.for("v-fgt"), wn = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), In = Symbol.for("v-stc"), an = [];
let Ae = null;
function re(e = !1) {
  an.push(Ae = e ? null : []);
}
function oc() {
  an.pop(), Ae = an[an.length - 1] || null;
}
let hn = 1;
function ji(e, t = !1) {
  hn += e, e < 0 && Ae && t && (Ae.hasOnce = !0);
}
function _s(e) {
  return e.dynamicChildren = hn > 0 ? Ae || Ht : null, oc(), hn > 0 && Ae && Ae.push(e), e;
}
function ie(e, t, n, r, i, o) {
  return _s(
    M(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function sc(e, t, n, r, i) {
  return _s(
    lt(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function ur(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Rn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const lc = (...e) => ws(
  ...e
), ys = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || ue(e) || I(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function M(e, t = null, n = null, r = 0, i = null, o = e === Ne ? 0 : 1, s = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ys(t),
    ref: t && Mn(t),
    scopeId: Go,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe
  };
  return l ? (ci(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && k("VNode created with invalid key (NaN). VNode type:", a.type), hn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ae.push(a), a;
}
const lt = h.NODE_ENV !== "production" ? lc : ws;
function ws(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === _a) && (h.NODE_ENV !== "production" && !e && k(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), ur(e)) {
    const l = wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ci(l, n), hn > 0 && !o && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l;
  }
  if (Os(e) && (e = e.__vccOpts), t) {
    t = ac(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = we(l)), X(a) && (Hn(a) && !A(a) && (a = fe({}, a)), t.style = Ie(a));
  }
  const s = ae(e) ? 1 : bs(e) ? 128 : ia(e) ? 64 : X(e) ? 4 : I(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && s & 4 && Hn(e) && (e = j(e), k(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), M(
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    !0
  );
}
function ac(e) {
  return e ? Hn(e) || os(e) ? fe({}, e) : e : null;
}
function wt(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: a } = e, u = t ? cc(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && ys(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? A(o) ? o.concat(Mn(t)) : [o, Mn(t)] : Mn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && s === -1 && A(l) ? l.map(vs) : l,
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
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && ri(
    c,
    a.clone(c)
  ), c;
}
function vs(e) {
  const t = wt(e);
  return A(e.children) && (t.children = e.children.map(vs)), t;
}
function xs(e = " ", t = 0) {
  return lt(wn, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (re(), sc(Pe, null, e)) : lt(Pe, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? lt(Pe) : A(e) ? lt(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ur(e) ? mt(e) : lt(wn, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wt(e);
}
function ci(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ci(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !os(t) ? t._ctx = Oe : i === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [xs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function cc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = we([t.class, r.class]));
      else if (i === "style")
        t.style = Ie([t.style, r.style]);
      else if (mn(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(A(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Ge(e, t, n, r = null) {
  nt(e, t, 7, [
    n,
    r
  ]);
}
const uc = ns();
let fc = 0;
function dc(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || uc, o = {
    uid: fc++,
    vnode: e,
    type: r,
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
    scope: new al(
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
    propsOptions: ls(r, i),
    emitsOptions: gs(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
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
  return h.NODE_ENV !== "production" ? o.ctx = ya(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Xa.bind(null, o), e.ce && e.ce(o), o;
}
let _e = null;
const pc = () => _e || Oe;
let Jn, Hr;
{
  const e = bn(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), Hr = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const vn = (e) => {
  const t = _e;
  return Jn(e), e.scope.on(), () => {
    e.scope.off(), Jn(t);
  };
}, Fi = () => {
  _e && _e.scope.off(), Jn(null);
}, hc = /* @__PURE__ */ ut("slot,component");
function Br(e, { isNativeTag: t }) {
  (hc(e) || t(e)) && k(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Es(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function gc(e, t = !1, n = !1) {
  t && Hr(t);
  const { props: r, children: i } = e.vnode, o = Es(e);
  Ca(e, r, o, t), Ba(e, i, n);
  const s = o ? mc(e, t) : void 0;
  return t && Hr(!1), s;
}
function mc(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && Br(r.name, e.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let s = 0; s < o.length; s++)
        Br(o[s], e.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let s = 0; s < o.length; s++)
        Zo(o[s]);
    }
    r.compilerOptions && _c() && k(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xo), h.NODE_ENV !== "production" && wa(e);
  const { setup: i } = r;
  if (i) {
    ft();
    const o = e.setupContext = i.length > 1 ? wc(e) : null, s = vn(e), l = Ut(
      i,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? Xe(e.props) : e.props,
        o
      ]
    ), a = qr(l);
    if (dt(), s(), (a || e.sp) && !ln(e) && Jo(e), a) {
      if (l.then(Fi, Fi), t)
        return l.then((u) => {
          Hi(e, u, t);
        }).catch((u) => {
          _n(u, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        k(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Hi(e, l, t);
  } else
    ks(e, t);
}
function Hi(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) ? (h.NODE_ENV !== "production" && ur(t) && k(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Io(t), h.NODE_ENV !== "production" && va(e)) : h.NODE_ENV !== "production" && t !== void 0 && k(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ks(e, n);
}
let bc;
const _c = () => !bc;
function ks(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || he);
  {
    const i = vn(e);
    ft();
    try {
      Ea(e);
    } finally {
      dt(), i();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === he && !t && (r.template ? k(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : k("Component is missing template or render function: ", r));
}
const Bi = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Zn(), pe(e, "get", ""), e[t];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function yc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return pe(e, "get", "$slots"), t[n];
    }
  });
}
function wc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && k("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (A(n) ? r = "array" : ue(n) && (r = "ref")), r !== "object" && k(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Bi));
      },
      get slots() {
        return r || (r = yc(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Bi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function fr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io($l(e.exposed)), {
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
const vc = /(?:^|[-_])(\w)/g, xc = (e) => e.replace(vc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ns(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dr(e, t, n = !1) {
  let r = Ns(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (o) => {
      for (const s in o)
        if (o[s] === t)
          return s;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? xc(r) : n ? "App" : "Anonymous";
}
function Os(e) {
  return I(e) && "__vccOpts" in e;
}
const Ec = (e, t) => {
  const n = Al(e, t, gn);
  if (h.NODE_ENV !== "production") {
    const r = pc();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function kc() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(d) {
      return X(d) ? d.__isVue ? ["div", e, "VueInstance"] : ue(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in d ? d._value : d),
        ">"
      ] : Dt(d) ? [
        "div",
        {},
        ["span", e, De(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${ct(d) ? " (readonly)" : ""}`
      ] : ct(d) ? [
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
          ...o(d.$)
        ];
    }
  };
  function o(d) {
    const g = [];
    d.type.props && d.props && g.push(s("props", j(d.props))), d.setupState !== G && g.push(s("setup", d.setupState)), d.data !== G && g.push(s("data", j(d.data)));
    const b = a(d, "computed");
    b && g.push(s("computed", b));
    const D = a(d, "inject");
    return D && g.push(s("injected", D)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function s(d, g) {
    return g = fe({}, g), Object.keys(g).length ? [
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
          ["span", r, b + ": "],
          l(g[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : X(d) ? ["object", { object: g ? j(d) : d }] : ["span", n, String(d)];
  }
  function a(d, g) {
    const b = d.type;
    if (I(b))
      return;
    const D = {};
    for (const N in d.ctx)
      u(b, N, g) && (D[N] = d.ctx[N]);
    return D;
  }
  function u(d, g, b) {
    const D = d[b];
    if (A(D) && D.includes(g) || X(D) && g in D || d.extends && u(d.extends, g, b) || d.mixins && d.mixins.some((N) => u(N, g, b)))
      return !0;
  }
  function c(d) {
    return De(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const zi = "3.5.13", at = h.NODE_ENV !== "production" ? k : he;
var rt = {};
let zr;
const Ui = typeof window < "u" && window.trustedTypes;
if (Ui)
  try {
    zr = /* @__PURE__ */ Ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    rt.NODE_ENV !== "production" && at(`Error creating trusted types policy: ${e}`);
  }
const Ss = zr ? (e) => zr.createHTML(e) : (e) => e, Nc = "http://www.w3.org/2000/svg", Oc = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Wi = ot && /* @__PURE__ */ ot.createElement("template"), Sc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? ot.createElementNS(Nc, e) : t === "mathml" ? ot.createElementNS(Oc, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
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
  insertStaticContent(e, t, n, r, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Wi.innerHTML = Ss(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Wi.content;
      if (r === "svg" || r === "mathml") {
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
}, Dc = Symbol("_vtc");
function $c(e, t, n) {
  const r = e[Dc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qn = Symbol("_vod"), Ds = Symbol("_vsh"), $s = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Qn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Yt(e, !0), r.enter(e)) : r.leave(e, () => {
      Yt(e, !1);
    }) : Yt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yt(e, t);
  }
};
rt.NODE_ENV !== "production" && ($s.name = "show");
function Yt(e, t) {
  e.style.display = t ? e[Qn] : "none", e[Ds] = !t;
}
const Tc = Symbol(rt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cc = /(^|;)\s*display\s*:/;
function Vc(e, t, n) {
  const r = e.style, i = ae(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (ae(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Ln(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Ln(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Ln(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Tc];
      s && (n += ";" + s), r.cssText = n, o = Cc.test(n);
    }
  } else t && e.removeAttribute("style");
  Qn in e && (e[Qn] = o ? r.display : "", e[Ds] && (r.display = "none"));
}
const Rc = /[^\\];\s*$/, qi = /\s*!important$/;
function Ln(e, t, n) {
  if (A(n))
    n.forEach((r) => Ln(e, t, r));
  else if (n == null && (n = ""), rt.NODE_ENV !== "production" && Rc.test(n) && at(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ac(e, t);
    qi.test(n) ? e.setProperty(
      yt(r),
      n.replace(qi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ki = ["Webkit", "Moz", "ms"], Nr = {};
function Ac(e, t) {
  const n = Nr[t];
  if (n)
    return n;
  let r = He(t);
  if (r !== "filter" && r in e)
    return Nr[t] = r;
  r = rr(r);
  for (let i = 0; i < Ki.length; i++) {
    const o = Ki[i] + r;
    if (o in e)
      return Nr[t] = o;
  }
  return t;
}
const Gi = "http://www.w3.org/1999/xlink";
function Zi(e, t, n, r, i, o = ll(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gi, t.slice(6, t.length)) : e.setAttributeNS(Gi, t, n) : n == null || o && !go(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : vt(n) ? String(n) : n
  );
}
function Ji(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ss(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = go(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    rt.NODE_ENV !== "production" && !s && at(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function Ft(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Pc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Qi = Symbol("_vei");
function Ic(e, t, n, r, i = null) {
  const o = e[Qi] || (e[Qi] = {}), s = o[t];
  if (r && s)
    s.value = rt.NODE_ENV !== "production" ? Xi(r, t) : r;
  else {
    const [l, a] = Mc(t);
    if (r) {
      const u = o[t] = Fc(
        rt.NODE_ENV !== "production" ? Xi(r, t) : r,
        i
      );
      Ft(e, l, u, a);
    } else s && (Pc(e, l, s, a), o[t] = void 0);
  }
}
const Yi = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (Yi.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Yi); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let Or = 0;
const Lc = /* @__PURE__ */ Promise.resolve(), jc = () => Or || (Lc.then(() => Or = 0), Or = Date.now());
function Fc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    nt(
      Hc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function Xi(e, t) {
  return I(e) || A(e) ? e : (at(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), he);
}
function Hc(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const eo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? $c(e, r, s) : t === "style" ? Vc(e, n, r) : mn(t) ? jn(t) || Ic(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zc(e, t, r, s)) ? (Ji(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(r)) ? Ji(e, He(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Zi(e, t, r, s));
};
function zc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && eo(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return eo(t) && ae(n) ? !1 : t in e;
}
const to = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return A(t) ? (n) => Lt(t, n) : t;
};
function Uc(e) {
  e.target.composing = !0;
}
function no(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sr = Symbol("_assign"), Wc = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[Sr] = to(i);
    const o = r || i.props && i.props.type === "number";
    Ft(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Dr(l)), e[Sr](l);
    }), n && Ft(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ft(e, "compositionstart", Uc), Ft(e, "compositionend", no), Ft(e, "change", no));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[Sr] = to(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Dr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === a) || (e.value = a));
  }
}, qc = /* @__PURE__ */ fe({ patchProp: Bc }, Sc);
let ro;
function Kc() {
  return ro || (ro = Wa(qc));
}
const Gc = (...e) => {
  const t = Kc().createApp(...e);
  rt.NODE_ENV !== "production" && (Jc(t), Qc(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const i = Yc(r);
    if (!i) return;
    const o = t._component;
    !I(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Zc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
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
    value: (t) => rl(t) || il(t) || ol(t),
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
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return at(r), n;
      },
      set() {
        at(r);
      }
    });
  }
}
function Yc(e) {
  if (ae(e)) {
    const t = document.querySelector(e);
    return rt.NODE_ENV !== "production" && !t && at(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return rt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && at(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Xc = {};
function eu() {
  kc();
}
Xc.NODE_ENV !== "production" && eu();
function ui() {
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
let Rt = ui();
function Ts(e) {
  Rt = e;
}
const cn = { exec: () => null };
function Q(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const r = {
    replace: (i, o) => {
      let s = typeof o == "string" ? o : o.source;
      return s = s.replace(Se.caret, "$1"), n = n.replace(i, s), r;
    },
    getRegex: () => new RegExp(n, t)
  };
  return r;
}
const Se = {
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
}, tu = /^(?:[ \t]*(?:\n|$))+/, nu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, ru = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, xn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, iu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Cs = /(?:[*+-]|\d{1,9}[.)])/, Vs = Q(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Cs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), fi = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ou = /^[^\n]+/, di = /(?!\s*\])(?:\\.|[^\[\]\\])+/, su = Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", di).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), lu = Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Cs).getRegex(), pr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", pi = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, au = Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", pi).replace("tag", pr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Rs = Q(fi).replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pr).getRegex(), cu = Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Rs).getRegex(), hi = {
  blockquote: cu,
  code: nu,
  def: su,
  fences: ru,
  heading: iu,
  hr: xn,
  html: au,
  lheading: Vs,
  list: lu,
  newline: tu,
  paragraph: Rs,
  table: cn,
  text: ou
}, io = Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pr).getRegex(), uu = {
  ...hi,
  table: io,
  paragraph: Q(fi).replace("hr", xn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", io).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", pr).getRegex()
}, fu = {
  ...hi,
  html: Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", pi).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: cn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Q(fi).replace("hr", xn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Vs).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, du = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, As = /^( {2,}|\\)\n(?!\s*$)/, hu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, hr = /[\p{P}\p{S}]/u, gi = /[\s\p{P}\p{S}]/u, Ps = /[^\s\p{P}\p{S}]/u, gu = Q(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, gi).getRegex(), Is = /(?!~)[\p{P}\p{S}]/u, mu = /(?!~)[\s\p{P}\p{S}]/u, bu = /(?:[^\s\p{P}\p{S}]|~)/u, _u = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Ms = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, yu = Q(Ms, "u").replace(/punct/g, hr).getRegex(), wu = Q(Ms, "u").replace(/punct/g, Is).getRegex(), Ls = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", vu = Q(Ls, "gu").replace(/notPunctSpace/g, Ps).replace(/punctSpace/g, gi).replace(/punct/g, hr).getRegex(), xu = Q(Ls, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, mu).replace(/punct/g, Is).getRegex(), Eu = Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ps).replace(/punctSpace/g, gi).replace(/punct/g, hr).getRegex(), ku = Q(/\\(punct)/, "gu").replace(/punct/g, hr).getRegex(), Nu = Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ou = Q(pi).replace("(?:-->|$)", "-->").getRegex(), Su = Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ou).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Yn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Du = Q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Yn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), js = Q(/^!?\[(label)\]\[(ref)\]/).replace("label", Yn).replace("ref", di).getRegex(), Fs = Q(/^!?\[(ref)\](?:\[\])?/).replace("ref", di).getRegex(), $u = Q("reflink|nolink(?!\\()", "g").replace("reflink", js).replace("nolink", Fs).getRegex(), mi = {
  _backpedal: cn,
  // only used for GFM url
  anyPunctuation: ku,
  autolink: Nu,
  blockSkip: _u,
  br: As,
  code: pu,
  del: cn,
  emStrongLDelim: yu,
  emStrongRDelimAst: vu,
  emStrongRDelimUnd: Eu,
  escape: du,
  link: Du,
  nolink: Fs,
  punctuation: gu,
  reflink: js,
  reflinkSearch: $u,
  tag: Su,
  text: hu,
  url: cn
}, Tu = {
  ...mi,
  link: Q(/^!?\[(label)\]\((.*?)\)/).replace("label", Yn).getRegex(),
  reflink: Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Yn).getRegex()
}, Ur = {
  ...mi,
  emStrongRDelimAst: xu,
  emStrongLDelim: wu,
  url: Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Cu = {
  ...Ur,
  br: Q(As).replace("{2,}", "*").getRegex(),
  text: Q(Ur.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, $n = {
  normal: hi,
  gfm: uu,
  pedantic: fu
}, Xt = {
  normal: mi,
  gfm: Ur,
  breaks: Cu,
  pedantic: Tu
}, Vu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, oo = (e) => Vu[e];
function Ze(e, t) {
  if (t) {
    if (Se.escapeTest.test(e))
      return e.replace(Se.escapeReplace, oo);
  } else if (Se.escapeTestNoEncode.test(e))
    return e.replace(Se.escapeReplaceNoEncode, oo);
  return e;
}
function so(e) {
  try {
    e = encodeURI(e).replace(Se.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function lo(e, t) {
  var o;
  const n = e.replace(Se.findPipe, (s, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), r = n.split(Se.splitPipe);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((o = r.at(-1)) != null && o.trim()) && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(Se.slashPipe, "|");
  return r;
}
function en(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r && e.charAt(r - i - 1) === t; )
    i++;
  return e.slice(0, r - i);
}
function Ru(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === "\\")
      r++;
    else if (e[r] === t[0])
      n++;
    else if (e[r] === t[1] && (n--, n < 0))
      return r;
  return -1;
}
function ao(e, t, n, r, i) {
  const o = t.href, s = t.title || null, l = e[1].replace(i.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: o,
      title: s,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: o,
    title: s,
    text: l
  };
}
function Au(e, t, n) {
  const r = e.match(n.other.indentCodeCompensation);
  if (r === null)
    return t;
  const i = r[1];
  return t.split(`
`).map((o) => {
    const s = o.match(n.other.beginningSpace);
    if (s === null)
      return o;
    const [l] = s;
    return l.length >= i.length ? o.slice(i.length) : o;
  }).join(`
`);
}
class Xn {
  // set by the lexer
  constructor(t) {
    te(this, "options");
    te(this, "rules");
    // set by the lexer
    te(this, "lexer");
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
      const r = n[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : en(r, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0], i = Au(r, n[3] || "", this.rules);
      return {
        type: "code",
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: i
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        const i = en(r, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (r = i.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r)
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
      let r = en(n[0], `
`).split(`
`), i = "", o = "";
      const s = [];
      for (; r.length > 0; ) {
        let l = !1;
        const a = [];
        let u;
        for (u = 0; u < r.length; u++)
          if (this.rules.other.blockquoteStart.test(r[u]))
            a.push(r[u]), l = !0;
          else if (!l)
            a.push(r[u]);
          else
            break;
        r = r.slice(u);
        const c = a.join(`
`), d = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${c}` : c, o = o ? `${o}
${d}` : d;
        const g = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, s, !0), this.lexer.state.top = g, r.length === 0)
          break;
        const b = s.at(-1);
        if ((b == null ? void 0 : b.type) === "code")
          break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          const D = b, N = D.raw + `
` + r.join(`
`), U = this.blockquote(N);
          s[s.length - 1] = U, i = i.substring(0, i.length - D.raw.length) + U.raw, o = o.substring(0, o.length - D.text.length) + U.text;
          break;
        } else if ((b == null ? void 0 : b.type) === "list") {
          const D = b, N = D.raw + `
` + r.join(`
`), U = this.list(N);
          s[s.length - 1] = U, i = i.substring(0, i.length - b.raw.length) + U.raw, o = o.substring(0, o.length - D.raw.length) + U.raw, r = N.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: s,
        text: o
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const i = r.length > 1, o = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      const s = this.rules.other.listItemRegex(r);
      let l = !1;
      for (; t; ) {
        let u = !1, c = "", d = "";
        if (!(n = s.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = n[0], t = t.substring(c.length);
        let g = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (q) => " ".repeat(3 * q.length)), b = t.split(`
`, 1)[0], D = !g.trim(), N = 0;
        if (this.options.pedantic ? (N = 2, d = g.trimStart()) : D ? N = n[1].length + 1 : (N = n[2].search(this.rules.other.nonSpaceChar), N = N > 4 ? 1 : N, d = g.slice(N), N += n[1].length), D && this.rules.other.blankLine.test(b) && (c += b + `
`, t = t.substring(b.length + 1), u = !0), !u) {
          const q = this.rules.other.nextBulletRegex(N), B = this.rules.other.hrRegex(N), ge = this.rules.other.fencesBeginRegex(N), V = this.rules.other.headingBeginRegex(N), le = this.rules.other.htmlBeginRegex(N);
          for (; t; ) {
            const de = t.split(`
`, 1)[0];
            let oe;
            if (b = de, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), oe = b) : oe = b.replace(this.rules.other.tabCharGlobal, "    "), ge.test(b) || V.test(b) || le.test(b) || q.test(b) || B.test(b))
              break;
            if (oe.search(this.rules.other.nonSpaceChar) >= N || !b.trim())
              d += `
` + oe.slice(N);
            else {
              if (D || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ge.test(g) || V.test(g) || B.test(g))
                break;
              d += `
` + b;
            }
            !D && !b.trim() && (D = !0), c += de + `
`, t = t.substring(de.length + 1), g = oe.slice(N);
          }
        }
        o.loose || (l ? o.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let U = null, F;
        this.options.gfm && (U = this.rules.other.listIsTask.exec(d), U && (F = U[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), o.items.push({
          type: "list_item",
          raw: c,
          task: !!U,
          checked: F,
          loose: !1,
          text: d,
          tokens: []
        }), o.raw += c;
      }
      const a = o.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      o.raw = o.raw.trimEnd();
      for (let u = 0; u < o.items.length; u++)
        if (this.lexer.state.top = !1, o.items[u].tokens = this.lexer.blockTokens(o.items[u].text, []), !o.loose) {
          const c = o.items[u].tokens.filter((g) => g.type === "space"), d = c.length > 0 && c.some((g) => this.rules.other.anyLine.test(g.raw));
          o.loose = d;
        }
      if (o.loose)
        for (let u = 0; u < o.items.length; u++)
          o.items[u].loose = !0;
      return o;
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
      const r = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: r,
        raw: n[0],
        href: i,
        title: o
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const r = lo(n[1]), i = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === i.length) {
      for (const a of i)
        this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < r.length; a++)
        s.header.push({
          text: r[a],
          tokens: this.lexer.inline(r[a]),
          header: !0,
          align: s.align[a]
        });
      for (const a of o)
        s.rows.push(lo(a, s.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: s.align[c]
        })));
      return s;
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
      const r = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r)
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
      const r = n[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r))
          return;
        const s = en(r.slice(0, -1), "\\");
        if ((r.length - s.length) % 2 === 0)
          return;
      } else {
        const s = Ru(n[2], "()");
        if (s > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + s;
          n[2] = n[2].substring(0, s), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let i = n[2], o = "";
      if (this.options.pedantic) {
        const s = this.rules.other.pedanticHrefTitle.exec(i);
        s && (i = s[1], o = s[3]);
      } else
        o = n[3] ? n[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), ao(n, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: o && o.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const i = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = n[i.toLowerCase()];
      if (!o) {
        const s = r[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return ao(r, o, r[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, r = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && r.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(i[1] || i[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const s = [...i[0]].length - 1;
      let l, a, u = s, c = 0;
      const d = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, n = n.slice(-1 * t.length + s); (i = d.exec(n)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l)
          continue;
        if (a = [...l].length, i[3] || i[4]) {
          u += a;
          continue;
        } else if ((i[5] || i[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const g = [...i[0]][0].length, b = t.slice(0, s + i.index + g + a);
        if (Math.min(s, a) % 2) {
          const N = b.slice(1, -1);
          return {
            type: "em",
            raw: b,
            text: N,
            tokens: this.lexer.inlineTokens(N)
          };
        }
        const D = b.slice(2, -2);
        return {
          type: "strong",
          raw: b,
          text: D,
          tokens: this.lexer.inlineTokens(D)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(r), o = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return i && o && (r = r.substring(1, r.length - 1)), {
        type: "codespan",
        raw: n[0],
        text: r
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
      let r, i;
      return n[2] === "@" ? (r = n[1], i = "mailto:" + r) : (r = n[1], i = r), {
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
  url(t) {
    var r;
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let i, o;
      if (n[2] === "@")
        i = n[0], o = "mailto:" + i;
      else {
        let s;
        do
          s = n[0], n[0] = ((r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) ?? "";
        while (s !== n[0]);
        i = n[0], n[1] === "www." ? o = "http://" + n[0] : o = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: i,
        href: o,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      const r = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        escaped: r
      };
    }
  }
}
class Me {
  constructor(t) {
    te(this, "tokens");
    te(this, "options");
    te(this, "state");
    te(this, "tokenizer");
    te(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Rt, this.options.tokenizer = this.options.tokenizer || new Xn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Se,
      block: $n.normal,
      inline: Xt.normal
    };
    this.options.pedantic ? (n.block = $n.pedantic, n.inline = Xt.pedantic) : this.options.gfm && (n.block = $n.gfm, this.options.breaks ? n.inline = Xt.breaks : n.inline = Xt.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: $n,
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
    t = t.replace(Se.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    var i, o, s;
    for (this.options.pedantic && (t = t.replace(Se.tabCharGlobal, "    ").replace(Se.spaceLine, "")); t; ) {
      let l;
      if ((o = (i = this.options.extensions) == null ? void 0 : i.block) != null && o.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
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
      if ((s = this.options.extensions) != null && s.startBlock) {
        let u = 1 / 0;
        const c = t.slice(1);
        let d;
        this.options.extensions.startBlock.forEach((g) => {
          d = g.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
        }), u < 1 / 0 && u >= 0 && (a = t.substring(0, u + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(a))) {
        const u = n.at(-1);
        r && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l), r = a.length !== t.length, t = t.substring(l.raw.length);
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
    let r = t, i = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let o = !1, s = "";
    for (; t; ) {
      o || (s = ""), o = !1;
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
      if (c = this.tokenizer.emStrong(t, r, s)) {
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
        let D;
        this.options.extensions.startInline.forEach((N) => {
          D = N.call({ lexer: this }, b), typeof D == "number" && D >= 0 && (g = Math.min(g, D));
        }), g < 1 / 0 && g >= 0 && (d = t.substring(0, g + 1));
      }
      if (c = this.tokenizer.inlineText(d)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (s = c.raw.slice(-1)), o = !0;
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
class er {
  // set by the parser
  constructor(t) {
    te(this, "options");
    te(this, "parser");
    this.options = t || Rt;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    var s;
    const i = (s = (n || "").match(Se.notSpaceStart)) == null ? void 0 : s[0], o = t.replace(Se.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + Ze(i) + '">' + (r ? o : Ze(o, !0)) + `</code></pre>
` : "<pre><code>" + (r ? o : Ze(o, !0)) + `</code></pre>
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
    const n = t.ordered, r = t.start;
    let i = "";
    for (let l = 0; l < t.items.length; l++) {
      const a = t.items[l];
      i += this.listitem(a);
    }
    const o = n ? "ol" : "ul", s = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + o + s + `>
` + i + "</" + o + `>
`;
  }
  listitem(t) {
    var r;
    let n = "";
    if (t.task) {
      const i = this.checkbox({ checked: !!t.checked });
      t.loose ? ((r = t.tokens[0]) == null ? void 0 : r.type) === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + Ze(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: i + " ",
        text: i + " ",
        escaped: !0
      }) : n += i + " ";
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
    let n = "", r = "";
    for (let o = 0; o < t.header.length; o++)
      r += this.tablecell(t.header[o]);
    n += this.tablerow({ text: r });
    let i = "";
    for (let o = 0; o < t.rows.length; o++) {
      const s = t.rows[o];
      r = "";
      for (let l = 0; l < s.length; l++)
        r += this.tablecell(s[l]);
      i += this.tablerow({ text: r });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const n = this.parser.parseInline(t.tokens), r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + n + `</${r}>
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
  link({ href: t, title: n, tokens: r }) {
    const i = this.parser.parseInline(r), o = so(t);
    if (o === null)
      return i;
    t = o;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Ze(n) + '"'), s += ">" + i + "</a>", s;
  }
  image({ href: t, title: n, text: r }) {
    const i = so(t);
    if (i === null)
      return Ze(r);
    t = i;
    let o = `<img src="${t}" alt="${r}"`;
    return n && (o += ` title="${Ze(n)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Ze(t.text);
  }
}
class bi {
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
    te(this, "options");
    te(this, "renderer");
    te(this, "textRenderer");
    this.options = t || Rt, this.options.renderer = this.options.renderer || new er(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new bi();
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
    var i, o;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const l = t[s];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[l.type]) {
        const u = l, c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          r += c || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "space": {
          r += this.renderer.space(a);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(a);
          continue;
        }
        case "code": {
          r += this.renderer.code(a);
          continue;
        }
        case "table": {
          r += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          r += this.renderer.list(a);
          continue;
        }
        case "html": {
          r += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let u = a, c = this.renderer.text(u);
          for (; s + 1 < t.length && t[s + 1].type === "text"; )
            u = t[++s], c += `
` + this.renderer.text(u);
          n ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : r += c;
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
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var i, o;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const l = t[s];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[l.type]) {
        const u = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          r += u || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "escape": {
          r += n.text(a);
          break;
        }
        case "html": {
          r += n.html(a);
          break;
        }
        case "link": {
          r += n.link(a);
          break;
        }
        case "image": {
          r += n.image(a);
          break;
        }
        case "strong": {
          r += n.strong(a);
          break;
        }
        case "em": {
          r += n.em(a);
          break;
        }
        case "codespan": {
          r += n.codespan(a);
          break;
        }
        case "br": {
          r += n.br(a);
          break;
        }
        case "del": {
          r += n.del(a);
          break;
        }
        case "text": {
          r += n.text(a);
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
    return r;
  }
}
class un {
  constructor(t) {
    te(this, "options");
    te(this, "block");
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
te(un, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Pu {
  constructor(...t) {
    te(this, "defaults", ui());
    te(this, "options", this.setOptions);
    te(this, "parse", this.parseMarkdown(!0));
    te(this, "parseInline", this.parseMarkdown(!1));
    te(this, "Parser", Le);
    te(this, "Renderer", er);
    te(this, "TextRenderer", bi);
    te(this, "Lexer", Me);
    te(this, "Tokenizer", Xn);
    te(this, "Hooks", un);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var i, o;
    let r = [];
    for (const s of t)
      switch (r = r.concat(n.call(this, s)), s.type) {
        case "table": {
          const l = s;
          for (const a of l.header)
            r = r.concat(this.walkTokens(a.tokens, n));
          for (const a of l.rows)
            for (const u of a)
              r = r.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = s;
          r = r.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = s;
          (o = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && o[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
            const u = l[a].flat(1 / 0);
            r = r.concat(this.walkTokens(u, n));
          }) : l.tokens && (r = r.concat(this.walkTokens(l.tokens, n)));
        }
      }
    return r;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      const i = { ...r };
      if (i.async = this.defaults.async || i.async || !1, r.extensions && (r.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const s = n.renderers[o.name];
          s ? n.renderers[o.name] = function(...l) {
            let a = o.renderer.apply(this, l);
            return a === !1 && (a = s.apply(this, l)), a;
          } : n.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = n[o.level];
          s ? s.unshift(o.tokenizer) : n[o.level] = [o.tokenizer], o.start && (o.level === "block" ? n.startBlock ? n.startBlock.push(o.start) : n.startBlock = [o.start] : o.level === "inline" && (n.startInline ? n.startInline.push(o.start) : n.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (n.childTokens[o.name] = o.childTokens);
      }), i.extensions = n), r.renderer) {
        const o = this.defaults.renderer || new er(this.defaults);
        for (const s in r.renderer) {
          if (!(s in o))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          const l = s, a = r.renderer[l], u = o[l];
          o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d || "";
          };
        }
        i.renderer = o;
      }
      if (r.tokenizer) {
        const o = this.defaults.tokenizer || new Xn(this.defaults);
        for (const s in r.tokenizer) {
          if (!(s in o))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const l = s, a = r.tokenizer[l], u = o[l];
          o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d;
          };
        }
        i.tokenizer = o;
      }
      if (r.hooks) {
        const o = this.defaults.hooks || new un();
        for (const s in r.hooks) {
          if (!(s in o))
            throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s))
            continue;
          const l = s, a = r.hooks[l], u = o[l];
          un.passThroughHooks.has(s) ? o[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(o, c)).then((g) => u.call(o, g));
            const d = a.call(o, c);
            return u.call(o, d);
          } : o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d;
          };
        }
        i.hooks = o;
      }
      if (r.walkTokens) {
        const o = this.defaults.walkTokens, s = r.walkTokens;
        i.walkTokens = function(l) {
          let a = [];
          return a.push(s.call(this, l)), o && (a = a.concat(o.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...i };
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
    return (r, i) => {
      const o = { ...i }, s = { ...this.defaults, ...o }, l = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && o.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = t);
      const a = s.hooks ? s.hooks.provideLexer() : t ? Me.lex : Me.lexInline, u = s.hooks ? s.hooks.provideParser() : t ? Le.parse : Le.parseInline;
      if (s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r).then((c) => a(c, s)).then((c) => s.hooks ? s.hooks.processAllTokens(c) : c).then((c) => s.walkTokens ? Promise.all(this.walkTokens(c, s.walkTokens)).then(() => c) : c).then((c) => u(c, s)).then((c) => s.hooks ? s.hooks.postprocess(c) : c).catch(l);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let c = a(r, s);
        s.hooks && (c = s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
        let d = u(c, s);
        return s.hooks && (d = s.hooks.postprocess(d)), d;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + Ze(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(i) : i;
      }
      if (n)
        return Promise.reject(r);
      throw r;
    };
  }
}
const Vt = new Pu();
function Z(e, t) {
  return Vt.parse(e, t);
}
Z.options = Z.setOptions = function(e) {
  return Vt.setOptions(e), Z.defaults = Vt.defaults, Ts(Z.defaults), Z;
};
Z.getDefaults = ui;
Z.defaults = Rt;
Z.use = function(...e) {
  return Vt.use(...e), Z.defaults = Vt.defaults, Ts(Z.defaults), Z;
};
Z.walkTokens = function(e, t) {
  return Vt.walkTokens(e, t);
};
Z.parseInline = Vt.parseInline;
Z.Parser = Le;
Z.parser = Le.parse;
Z.Renderer = er;
Z.TextRenderer = bi;
Z.Lexer = Me;
Z.lexer = Me.lex;
Z.Tokenizer = Xn;
Z.Hooks = un;
Z.parse = Z;
Z.options;
Z.setOptions;
Z.use;
Z.walkTokens;
Z.parseInline;
Le.parse;
Me.lex;
const Iu = { class: "chat-widget" }, Mu = {
  key: 0,
  class: "fixed bottom-4 right-4 p-4"
}, Lu = { class: "hidden md:inline font-medium" }, ju = { class: "flex items-center space-x-3" }, Fu = { class: "relative" }, Hu = { class: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" }, Bu = ["src"], zu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Uu = { class: "font-semibold text-lg" }, Wu = ["innerHTML"], qu = { class: "flex items-center gap-1.5" }, Ku = ["src", "onTimeupdate", "onLoadedmetadata", "onEnded"], Gu = ["onClick"], Zu = {
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
}, Qu = ["onClick"], Yu = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, Xu = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
}, ef = {
  key: 0,
  class: "flex items-center space-x-2 p-4 bg-white rounded-2xl w-fit shadow-sm border border-gray-100 animate-fade-in"
}, tf = { class: "flex items-center space-x-2" }, nf = { class: "flex-1 relative" }, rf = ["placeholder", "disabled"], of = {
  key: 0,
  class: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5"
}, sf = { class: "processing-indicator-container" }, lf = {
  key: 1,
  class: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5"
}, af = { class: "recording-wave-container" }, cf = ["disabled"], uf = ["disabled"], ff = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, df = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, pf = /* @__PURE__ */ oa({
  __name: "ChatWidgetCopy",
  props: {
    botId: {},
    apiKey: {}
  },
  setup(e) {
    Z.use({
      gfm: !0,
      breaks: !0
    });
    const t = e, n = be(!1), r = be(""), i = be(null), o = be(!1), s = be(!1), l = be(window.innerWidth < 768), a = be(), u = be(""), c = be(), d = be([]), g = be(null), b = be(!1), D = be([]), N = be(window.speechSynthesis), U = be([]), F = be(null), q = be([]), B = be(!1), ge = async () => {
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
      var T, $;
      try {
        B.value = !0;
        const Y = await (await fetch(`https://api.dev.kb.promptstudio.dev/chatbot/${t.botId}/widget-config`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })).json();
        a.value = {
          company: Y.company,
          iconUrl: Y.iconUrl,
          welcomeMessage: Y.welcomeMessage,
          colors: {
            primary: (T = Y.colors) == null ? void 0 : T.primary,
            secondary: ($ = Y.colors) == null ? void 0 : $.secondary
          }
        }, d.value = [{
          id: "1",
          content: a.value.welcomeMessage,
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1
        }];
      } catch (C) {
        console.warn("Failed to fetch bot configuration, using defaults:", C);
      } finally {
        B.value = !1;
      }
    }, le = () => {
      l.value = window.innerWidth < 768;
    }, de = () => {
      N.value && (U.value = N.value.getVoices());
    }, oe = (T) => {
      if (!N.value) {
        console.warn("Speech synthesis is not available in this browser");
        return;
      }
      if (F.value) {
        N.value.cancel(), F.value = null, d.value.forEach((Y) => Y.isPlaying = !1);
        return;
      }
      const $ = new SpeechSynthesisUtterance(T.content), C = U.value.find(
        (Y) => Y.lang.startsWith(navigator.language) || Y.lang.startsWith("en")
      );
      C && ($.voice = C), $.rate = 1, $.pitch = 1, $.onstart = () => {
        T.isPlaying = !0, F.value = $;
      }, $.onend = () => {
        T.isPlaying = !1, F.value = null;
      }, $.onerror = () => {
        T.isPlaying = !1, F.value = null;
      }, N.value.speak($);
    }, ye = (T) => {
      const $ = d.value.findIndex((C) => C.audioId === T.audioId);
      if ($ !== -1 && q.value[$]) {
        const C = q.value[$];
        d.value.forEach((Y, se) => {
          if (Y.audioId && se !== $) {
            const ce = q.value[se];
            ce && !ce.paused && (ce.pause(), Y.isAudioPlaying = !1, Y.audioProgress = ce.currentTime / ce.duration * 100);
          }
        }), C.paused ? (C.play(), T.isAudioPlaying = !0) : (C.pause(), T.isAudioPlaying = !1);
      }
    }, je = (T, $) => {
      const C = $.target;
      T.audioProgress = C.currentTime / C.duration * 100, T.audioDuration = C.currentTime;
    }, ze = (T, $) => {
      const C = $.target;
      T.audioDuration = C.duration;
    }, Te = (T) => {
      T.isAudioPlaying = !1, T.audioProgress = 0;
    }, At = async () => {
      try {
        N.value && F.value && (N.value.cancel(), F.value = null, d.value.forEach(($) => $.isPlaying = !1));
        const T = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        g.value = new MediaRecorder(T), D.value = [], b.value = !0, g.value.ondataavailable = ($) => {
          D.value.push($.data);
        }, g.value.onstop = async () => {
          const $ = new Blob(D.value, { type: "audio/wav" });
          await Ue($), b.value = !1, T.getTracks().forEach((C) => C.stop());
        }, g.value.start();
      } catch (T) {
        console.error("Error accessing microphone:", T), b.value = !1;
      }
    }, En = () => {
      g.value && b.value && g.value.stop();
    }, Ue = async (T) => {
      try {
        s.value = !0;
        const $ = Date.now(), C = new File([T], `recording_${$}.wav`, { type: "audio/wav" }), Y = new FormData();
        Y.append("file", C), Y.append("chatbot_id", t.botId);
        const se = await fetch("https://api.dev.kb.promptstudio.dev/audio/process", {
          method: "POST",
          headers: {
            accept: "application/json"
          },
          body: Y
        });
        if (!se.ok)
          throw new Error("Failed to process audio");
        const ce = await se.json();
        r.value = ce.text;
        const Wt = ce.audioUrl;
        await H(Wt);
      } catch ($) {
        console.error("Error processing audio:", $), d.value.push({
          id: Date.now().toString(),
          content: "Sorry, I could not process the audio. Please try again.",
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        }), await me();
      } finally {
        s.value = !1;
      }
    }, me = async () => {
      await jo(), i.value && (i.value.scrollTop = i.value.scrollHeight);
    }, H = async (T) => {
      T instanceof Event && T.preventDefault();
      const $ = typeof T == "string" ? T : void 0;
      if (r.value.trim() && !o.value) {
        const C = r.value.trim(), Y = {
          id: Date.now().toString(),
          content: C,
          sender: "user",
          timestamp: /* @__PURE__ */ new Date(),
          isPlaying: !1,
          audioUrl: $,
          audioId: $ ? `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` : void 0
        };
        d.value.push(Y), r.value = "", o.value = !0, await me();
        try {
          const ce = await (await fetch("https://api.dev.kb.promptstudio.dev/chatbot/chat", {
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
          })).json();
          ce.session_id && (u.value = ce.session_id), d.value.push({
            id: Date.now().toString(),
            content: ce.response.trim(),
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          });
        } catch (se) {
          d.value.push({
            id: Date.now().toString(),
            content: "I apologize, but I encountered an error. Please try again later.",
            sender: "bot",
            timestamp: /* @__PURE__ */ new Date()
          }), console.error("Error:", se);
        } finally {
          o.value = !1, await me();
        }
      }
    };
    return Yo(async () => {
      window.addEventListener("resize", le), await ge(), V(), N.value && (de(), N.value.onvoiceschanged !== void 0 && (N.value.onvoiceschanged = de));
    }), oi(() => {
      window.removeEventListener("resize", le), g.value && b.value && g.value.stop(), N.value && N.value.cancel();
    }), (T, $) => (re(), ie("div", Iu, [
      B.value ? (re(), ie("div", Mu, $[3] || ($[3] = [
        M("div", { class: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900" }, null, -1)
      ]))) : a.value ? (re(), ie(Ne, { key: 1 }, [
        n.value ? ht("", !0) : (re(), ie("button", {
          key: 0,
          onClick: $[0] || ($[0] = (C) => n.value = !0),
          style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
          class: "fixed bottom-4 right-4 bg-gradient-custom text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 md:p-5 animate-bounce"
        }, [
          $[4] || ($[4] = M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6",
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
          M("span", Lu, "Chat with " + Tn(a.value.company || "our company"), 1),
          $[5] || ($[5] = M("span", { class: "md:hidden" }, "Chat", -1))
        ], 4)),
        Si(M("div", {
          class: we(["fixed md:bottom-4 md:right-4 md:w-[400px] bg-gradient-to-b from-gray-50 to-white md:rounded-2xl shadow-2xl overflow-hidden border-0 transition-all duration-300 ease-in-out flex flex-col", { "bottom-0 right-0 w-full h-[100dvh]": l.value, "max-h-[90vh]": !l.value }])
        }, [
          M("div", {
            style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
            class: "bg-gradient-custom p-4 text-white flex justify-between items-center relative shrink-0"
          }, [
            M("div", ju, [
              M("div", Fu, [
                M("div", Hu, [
                  a.value.iconUrl ? (re(), ie("img", {
                    key: 0,
                    src: a.value.iconUrl,
                    class: "h-10 w-10 border rounded-full"
                  }, null, 8, Bu)) : (re(), ie("svg", zu, $[6] || ($[6] = [
                    M("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 15.546c-.523 0-1.046.151-1.5.454a9 9 0 01-2.486.804c-.057 0-.113.002-.17.002-2.486.022-4.773 1.823-4.773 5.423v.002c0 3.624 2.29 6.604 5.46 6.604 3.18 0 5.473-2.98 5.473-6.604v-.002c0-.576-.223-1.084-.632-1.5a9 9 0 01-.804-2.486c-.022-2.486-1.823-4.773-5.423-4.773-3.6 0-6.604 2.29-6.604 5.46v.002zM11.5 4c2.177 0 4.23.93 5.46 2.514.059.118.113.242.17.363a6.5 6.5 0 00-13-.002c.057-.12.113-.24.17-.36C7.27 4.93 9.323 4 11.5 4z"
                    }, null, -1)
                  ])))
                ]),
                M("div", {
                  class: we(["absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white", [o.value ? "bg-green-400 animate-pulse" : "bg-gray-300"]])
                }, null, 2)
              ]),
              M("div", null, [
                M("h3", Uu, Tn(a.value.company), 1),
                $[7] || ($[7] = M("p", { class: "text-xs text-white/80" }, "AI Assistant", -1))
              ])
            ]),
            M("button", {
              onClick: $[1] || ($[1] = (C) => n.value = !1),
              class: we(["hover:bg-white/10 transition-colors p-2 rounded-full", { "absolute right-4": l.value }])
            }, $[8] || ($[8] = [
              M("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6",
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
            class: we(["overflow-y-auto p-4 bg-[#F0F0F0] scroll-smooth flex-grow", { "pb-[100px]": l.value }]),
            ref_key: "chatContainer",
            ref: i
          }, [
            (re(!0), ie(Ne, null, Dn(d.value, (C, Y) => (re(), ie("div", {
              key: C.id,
              class: we(["message mb-6 animate-fade-in w-full", [C.sender === "user" ? "flex justify-end" : "flex justify-start"]])
            }, [
              M("div", {
                class: we([
                  "max-w-[85%] p-4 shadow-lg relative message-bubble transition-all duration-300",
                  C.sender === "user" ? "bg-gradient-custom text-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] user-message" : "bg-white/90 border-[0.5px] border-gray-100 text-gray-800 rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] bot-message",
                  C.isPlaying ? "playing-message ring-2 ring-offset-2" : ""
                ]),
                style: Ie(C.sender === "user" ? `--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}` : C.isPlaying ? `--ring-color: ${a.value.colors.primary || "#8b5cf6"}; --gradient-start: ${a.value.colors.primary || "#8b5cf6"}; --gradient-end: ${a.value.colors.secondary || "#d946ef"};` : "")
              }, [
                M("div", {
                  class: "whitespace-pre-wrap text-[15px] font-normal leading-[1.5] markdown-content",
                  innerHTML: Po(Z)(C.content)
                }, null, 8, Wu),
                M("div", {
                  class: we([
                    "text-[11px] mt-2 flex items-center gap-1.5 font-medium justify-between",
                    C.sender === "user" ? "text-white/90" : "text-gray-400"
                  ])
                }, [
                  M("div", qu, [
                    xs(Tn(new Date(C.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: !0 })) + " ", 1),
                    M("audio", {
                      ref_for: !0,
                      ref: (se) => q.value[Y] = se,
                      src: C.audioUrl,
                      onTimeupdate: (se) => je(C, se),
                      onLoadedmetadata: (se) => ze(C, se),
                      onEnded: (se) => Te(C)
                    }, null, 40, Ku)
                  ]),
                  C.sender === "bot" ? (re(), ie("button", {
                    key: 0,
                    onClick: (se) => oe(C),
                    class: we([
                      "p-1.5 rounded-full transition-all duration-300 hover:scale-110",
                      C.isPlaying ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg" : "hover:bg-gray-100"
                    ])
                  }, [
                    (re(), ie("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: we(["h-4 w-4 transition-transform duration-300", { "scale-110 animate-pulse": C.isPlaying }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      C.isPlaying ? (re(), ie("path", Ju)) : (re(), ie("path", Zu))
                    ], 2))
                  ], 10, Gu)) : ht("", !0),
                  C.sender === "user" && C.audioUrl ? (re(), ie("button", {
                    key: 1,
                    onClick: (se) => ye(C),
                    class: we([
                      "p-1.5 rounded-full transition-all duration-300 hover:scale-110",
                      C.isAudioPlaying ? "bg-white/20 text-white" : "hover:bg-white/10"
                    ])
                  }, [
                    (re(), ie("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: we(["h-4 w-4 transition-transform duration-300", { "scale-110 animate-pulse": C.isAudioPlaying }]),
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      C.isAudioPlaying ? (re(), ie("path", Xu)) : (re(), ie("path", Yu))
                    ], 2))
                  ], 10, Qu)) : ht("", !0)
                ], 2)
              ], 6)
            ], 2))), 128)),
            o.value ? (re(), ie("div", ef, [
              M("div", tf, [
                (re(), ie(Ne, null, Dn(3, (C) => M("div", {
                  key: C,
                  class: "w-3 h-3 rounded-full animate-loader",
                  style: Ie({
                    "animation-delay": `${(C - 1) * 0.2}s`,
                    background: `linear-gradient(to right, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                  })
                }, null, 4)), 64))
              ])
            ])) : ht("", !0)
          ], 2),
          M("div", {
            class: we(["border-t border-gray-100 p-4 bg-white/80", { "fixed bottom-0 left-0 right-0 shadow-[0_-1px_10px_rgba(0,0,0,0.1)]": l.value }])
          }, [
            M("form", {
              onSubmit: H,
              class: "flex gap-3 max-w-[400px] mx-auto"
            }, [
              M("div", nf, [
                Si(M("input", {
                  "onUpdate:modelValue": $[2] || ($[2] = (C) => r.value = C),
                  type: "text",
                  placeholder: s.value ? "" : b.value ? "Listening..." : "Type your message...",
                  class: "w-full p-3 pl-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white/50 hover:border-[var(--primary)] transition-all duration-300",
                  style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  disabled: o.value || b.value || s.value
                }, null, 12, rf), [
                  [Wc, r.value]
                ]),
                s.value ? (re(), ie("div", of, [
                  M("div", sf, [
                    (re(), ie(Ne, null, Dn(5, (C) => M("div", {
                      key: C,
                      class: "processing-dot",
                      style: Ie({
                        animationDelay: `${(C - 1) * 0.2}s`,
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 4)), 64))
                  ]),
                  $[9] || ($[9] = M("span", { class: "text-sm text-gray-500 ml-2" }, "Processing", -1))
                ])) : ht("", !0),
                b.value && !s.value ? (re(), ie("div", lf, [
                  M("div", af, [
                    (re(), ie(Ne, null, Dn(5, (C) => M("div", {
                      key: C,
                      class: we(["recording-wave", `wave-line-${C}`]),
                      style: Ie({
                        background: `linear-gradient(to bottom, ${a.value.colors.primary || "#8b5cf6"}, ${a.value.colors.secondary || "#d946ef"})`
                      })
                    }, null, 6)), 64))
                  ]),
                  M("button", {
                    onClick: En,
                    class: "p-1.5 bg-red-50 rounded-full text-red-500 hover:text-red-600 transition-colors hover:bg-red-100"
                  }, $[10] || ($[10] = [
                    M("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5",
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
                ])) : ht("", !0),
                !b.value && !s.value ? (re(), ie("button", {
                  key: 2,
                  type: "button",
                  onClick: At,
                  style: Ie(`background-color: ${a.value.colors.primary}; --primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                  class: "absolute right-3 top-1/2 -translate-y-1/2 text-white hover:opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-1.5 rounded-full",
                  disabled: o.value
                }, $[11] || ($[11] = [
                  M("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-5 w-5",
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
                ]), 12, cf)) : ht("", !0)
              ]),
              M("button", {
                type: "submit",
                style: Ie(`--primary: ${a.value.colors.primary}; --secondary: ${a.value.colors.secondary}`),
                class: "bg-gradient-custom text-white p-3 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-12 h-12 shrink-0",
                disabled: o.value || !r.value.trim() && !b.value || s.value
              }, [
                o.value ? (re(), ie("svg", df, $[13] || ($[13] = [
                  M("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  }, null, -1)
                ]))) : (re(), ie("svg", ff, $[12] || ($[12] = [
                  M("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  }, null, -1)
                ])))
              ], 12, uf)
            ], 32)
          ], 2)
        ], 2), [
          [$s, n.value]
        ])
      ], 64)) : ht("", !0)
    ]));
  }
}), hf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, gf = /* @__PURE__ */ hf(pf, [["__scopeId", "data-v-ea01b222"]]);
function co() {
  const e = document.getElementById("chat-widget-container");
  if (!e) {
    console.error("Chat widget container not found");
    return;
  }
  const t = e.getAttribute("data-bot-id") || "";
  Gc(gf, {
    botId: t
  }).mount(e);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", co) : co();
