(()=>{var t={75:function(t){(function(){var e,n,r,i,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(e()-o)/1e6},n=process.hrtime,i=(e=function(){var t;return 1e9*(t=n())[0]+t[1]})(),s=1e9*process.uptime(),o=i-s):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},87:(t,e,n)=>{for(var r=n(75),i="undefined"==typeof window?n.g:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],h=i["cancel"+s]||i["cancelRequest"+s],c=0;!a&&c<o.length;c++)a=i[o[c]+"Request"+s],h=i[o[c]+"Cancel"+s]||i[o[c]+"CancelRequest"+s];if(!a||!h){var u=0,l=0,p=[];a=function(t){if(0===p.length){var e=r(),n=Math.max(0,16.666666666666668-(e-u));u=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},h=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(i,t)},t.exports.cancel=function(){h.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=a,t.cancelAnimationFrame=h}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";const t=n.p+"4b8520c2f411bc0084f2616612f1c07b.png";class e{constructor(t){this.__source=t,this.ready=0}eventTracking(t,e){this.ready--,this.ready<1&&t({source:this.source,object:e})}get source(){return this.__source}}class r extends e{}class i extends r{test(){return i.regexp.test(this.source)}load(){return this.ready=3,new Promise(((t,e)=>{const n=new Audio;n.addEventListener("load",(()=>{this.eventTracking(t,n)})),n.addEventListener("canplay",(()=>{this.eventTracking(t,n)})),n.addEventListener("canplaythrough",(()=>{this.eventTracking(t,n)})),n.addEventListener("error",e),n.src=this.source}))}}i.regexp=/\.(mp3|wav|ogg|aac)/i;class o extends r{test(){return o.regexp.test(this.source)}load(){return this.ready=1,new Promise(((t,e)=>{const n=new Image;n.addEventListener("load",(()=>{this.eventTracking(t,n)})),n.addEventListener("error",e),n.src=this.source}))}}o.regexp=/\.(jpe?g|png|svg|bmp|webp|webm|gif)/i;class s{constructor(t){this.callback=()=>{},s.sources.push(...t);const e=t.map((t=>{for(const e of s.loaders){const n=new e(t);if(n.test())return n.load()}throw new Error("No available driver for file: "+t)}));Promise.all(e).then((t=>{t.forEach((t=>{s.assets.set(t.source,t.object)})),this.callback()}))}then(t){this.callback=t}static get(t){return s.assets.get(t)}}s.assets=new Map,s.sources=[],s.loaders=[i,o];const a=s.get,h=s,c=(t,e)=>{const n={width:0,height:0};return"width"in e?(n.width=e.width,n.height=t.height/t.width*e.width):"height"in e&&(n.height=e.height,n.width=t.width*e.height/t.height),n},u=n.p+"9515c2eef10d98cc0700d0ae2fdab2df.png",l=n.p+"ed0226bd23a0ffc4dbfbc2fcff5eadb0.png",p=class{constructor(t){this.position={x:0,y:0},this.pos="",this.width=0,this.height=0,this.velocity={x:0,y:0},this.imgs={top:a(u),bottom:a(l)},this.setOptions(t)}setOptions(t){Object.assign(this,t)}isOut(){return this.position.x+this.width<0}update(){this.position.x-=this.velocity.x}display(t){const{x:e,y:n}=this.position,{width:r,height:i}=this;if("top"===this.pos){const o=c({width:this.imgs.top.width,height:this.imgs.top.height},{width:r});t.drawImage(this.imgs.top,e,n+(i-o.height),o.width,o.height)}else if("bottom"===this.pos){const i=c({width:this.imgs.bottom.width,height:this.imgs.bottom.height},{width:r});t.drawImage(this.imgs.bottom,e,n,i.width,i.height)}}},g=n.p+"4972cd415873dd0ddc6d1425a0a64ce9.png";class d{constructor(t){this.contextAttr={width:0,height:0},this.position={x:0,y:0},this.speed=0,this.imgSrc="",this.img=void 0,this.imgAttr={width:0,height:0},t&&this.setOptions(t)}resize({width:t,height:e}){this.contextAttr={width:t,height:e},this.imgAttr=c({width:this.img.width,height:this.img.height},{height:e})}setOptions(t){const{width:e,height:n,imgSrc:r}=Object.assign(this,t);""===r&&(this.imgSrc=g),this.img=a(this.imgSrc),this.resize({width:e,height:n})}update(){this.position.x+=this.speed}display(t){const{width:e}=this.contextAttr,{x:n,y:r}=this.position,i=Math.ceil(e/this.imgAttr.width)+1,o=n%this.imgAttr.width;for(let e=0;e<i;e++)t.drawImage(this.img,e*this.imgAttr.width-o,r,this.imgAttr.width,this.imgAttr.height)}}class f{constructor(t,e){this.score=t,this.network=Object.assign({neurons:[],weights:[]},e)}}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},b=function(t,e){return t===e||t!=t&&e!=e},w=b,v=function(t,e){for(var n=t.length;n--;)if(w(t[n][0],e))return n;return-1},m=v,_=Array.prototype.splice,j=v,x=v,O=v,A=function(){this.__data__=[],this.size=0},k=function(t){var e=this.__data__,n=m(e,t);return!(n<0||(n==e.length-1?e.pop():_.call(e,n,1),--this.size,0))},P=function(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]},S=function(t){return x(this.__data__,t)>-1},T=function(t,e){var n=this.__data__,r=O(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function M(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}M.prototype.clear=A,M.prototype.delete=k,M.prototype.get=P,M.prototype.has=S,M.prototype.set=T;var G=M,N=G,E="object"==typeof y&&y&&y.Object===Object&&y,L=E,C="object"==typeof self&&self&&self.Object===Object&&self,z=L||C||Function("return this")(),I=z.Symbol,D=I,F=Object.prototype,R=F.hasOwnProperty,q=F.toString,U=D?D.toStringTag:void 0,B=Object.prototype.toString,H=function(t){var e=R.call(t,U),n=t[U];try{t[U]=void 0;var r=!0}catch(t){}var i=q.call(t);return r&&(e?t[U]=n:delete t[U]),i},$=function(t){return B.call(t)},W=I?I.toStringTag:void 0,V=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":W&&W in Object(t)?H(t):$(t)},J=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},X=V,K=J,Q=function(t){if(!K(t))return!1;var e=X(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Y=z["__core-js_shared__"],Z=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),tt=Function.prototype.toString,et=function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=Q,rt=function(t){return!!Z&&Z in t},it=J,ot=et,st=/^\[object .+?Constructor\]$/,at=Function.prototype,ht=Object.prototype,ct=at.toString,ut=ht.hasOwnProperty,lt=RegExp("^"+ct.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=function(t){return!(!it(t)||rt(t))&&(nt(t)?lt:st).test(ot(t))},gt=function(t,e){return null==t?void 0:t[e]},dt=function(t,e){var n=gt(t,e);return pt(n)?n:void 0},ft=dt(z,"Map"),yt=dt(Object,"create"),bt=yt,wt=yt,vt=Object.prototype.hasOwnProperty,mt=yt,_t=Object.prototype.hasOwnProperty,jt=yt,xt=function(){this.__data__=bt?bt(null):{},this.size=0},Ot=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},At=function(t){var e=this.__data__;if(wt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return vt.call(e,t)?e[t]:void 0},kt=function(t){var e=this.__data__;return mt?void 0!==e[t]:_t.call(e,t)},Pt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=jt&&void 0===e?"__lodash_hash_undefined__":e,this};function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=xt,St.prototype.delete=Ot,St.prototype.get=At,St.prototype.has=kt,St.prototype.set=Pt;var Tt=St,Mt=G,Gt=ft,Nt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},Et=function(t,e){var n=t.__data__;return Nt(e)?n["string"==typeof e?"string":"hash"]:n.map},Lt=Et,Ct=Et,zt=Et,It=Et,Dt=function(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e},Ft=function(t){return Ct(this,t).get(t)},Rt=function(t){return zt(this,t).has(t)},qt=function(t,e){var n=It(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=function(){this.size=0,this.__data__={hash:new Tt,map:new(Gt||Mt),string:new Tt}},Ut.prototype.delete=Dt,Ut.prototype.get=Ft,Ut.prototype.has=Rt,Ut.prototype.set=qt;var Bt=G,Ht=ft,$t=Ut,Wt=G,Vt=function(){this.__data__=new N,this.size=0},Jt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Xt=function(t){return this.__data__.get(t)},Kt=function(t){return this.__data__.has(t)},Qt=function(t,e){var n=this.__data__;if(n instanceof Bt){var r=n.__data__;if(!Ht||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new $t(r)}return n.set(t,e),this.size=n.size,this};function Yt(t){var e=this.__data__=new Wt(t);this.size=e.size}Yt.prototype.clear=Vt,Yt.prototype.delete=Jt,Yt.prototype.get=Xt,Yt.prototype.has=Kt,Yt.prototype.set=Qt;var Zt=Yt,te=dt,ee=function(){try{var t=te(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),ne=ee,re=function(t,e,n){"__proto__"==e&&ne?ne(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},ie=re,oe=b,se=Object.prototype.hasOwnProperty,ae=function(t,e,n){var r=t[e];se.call(t,e)&&oe(r,n)&&(void 0!==n||e in t)||ie(t,e,n)},he=ae,ce=re,ue=function(t,e,n,r){var i=!n;n||(n={});for(var o=-1,s=e.length;++o<s;){var a=e[o],h=r?r(n[a],t[a],a,n,t):void 0;void 0===h&&(h=t[a]),i?ce(n,a,h):he(n,a,h)}return n},le=function(t){return null!=t&&"object"==typeof t},pe=V,ge=le,de=function(t){return ge(t)&&"[object Arguments]"==pe(t)},fe=le,ye=Object.prototype,be=ye.hasOwnProperty,we=ye.propertyIsEnumerable,ve=de(function(){return arguments}())?de:function(t){return fe(t)&&be.call(t,"callee")&&!we.call(t,"callee")},me=ve,_e=Array.isArray,je={},xe={get exports(){return je},set exports(t){je=t}},Oe=function(){return!1};!function(t,e){var n=z,r=Oe,i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,s=o&&o.exports===i?n.Buffer:void 0,a=(s?s.isBuffer:void 0)||r;t.exports=a}(xe,je);var Ae=/^(?:0|[1-9]\d*)$/,ke=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Pe=V,Se=ke,Te=le,Me={};Me["[object Float32Array]"]=Me["[object Float64Array]"]=Me["[object Int8Array]"]=Me["[object Int16Array]"]=Me["[object Int32Array]"]=Me["[object Uint8Array]"]=Me["[object Uint8ClampedArray]"]=Me["[object Uint16Array]"]=Me["[object Uint32Array]"]=!0,Me["[object Arguments]"]=Me["[object Array]"]=Me["[object ArrayBuffer]"]=Me["[object Boolean]"]=Me["[object DataView]"]=Me["[object Date]"]=Me["[object Error]"]=Me["[object Function]"]=Me["[object Map]"]=Me["[object Number]"]=Me["[object Object]"]=Me["[object RegExp]"]=Me["[object Set]"]=Me["[object String]"]=Me["[object WeakMap]"]=!1;var Ge=function(t){return function(e){return t(e)}},Ne={},Ee={get exports(){return Ne},set exports(t){Ne=t}};!function(t,e){var n=E,r=e&&!e.nodeType&&e,i=r&&t&&!t.nodeType&&t,o=i&&i.exports===r&&n.process,s=function(){try{return i&&i.require&&i.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=s}(Ee,Ne);var Le=function(t){return Te(t)&&Se(t.length)&&!!Me[Pe(t)]},Ce=Ge,ze=Ne&&Ne.isTypedArray,Ie=ze?Ce(ze):Le,De=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Fe=me,Re=_e,qe=je,Ue=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Ae.test(t))&&t>-1&&t%1==0&&t<e},Be=Ie,He=Object.prototype.hasOwnProperty,$e=function(t,e){var n=Re(t),r=!n&&Fe(t),i=!n&&!r&&qe(t),o=!n&&!r&&!i&&Be(t),s=n||r||i||o,a=s?De(t.length,String):[],h=a.length;for(var c in t)!e&&!He.call(t,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ue(c,h))||a.push(c);return a},We=Object.prototype,Ve=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||We)},Je=function(t,e){return function(n){return t(e(n))}},Xe=Je(Object.keys,Object),Ke=Ve,Qe=Xe,Ye=Object.prototype.hasOwnProperty,Ze=Q,tn=ke,en=function(t){return null!=t&&tn(t.length)&&!Ze(t)},nn=$e,rn=function(t){if(!Ke(t))return Qe(t);var e=[];for(var n in Object(t))Ye.call(t,n)&&"constructor"!=n&&e.push(n);return e},on=en,sn=function(t){return on(t)?nn(t):rn(t)},an=ue,hn=sn,cn=J,un=Ve,ln=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},pn=Object.prototype.hasOwnProperty,gn=$e,dn=function(t){if(!cn(t))return ln(t);var e=un(t),n=[];for(var r in t)("constructor"!=r||!e&&pn.call(t,r))&&n.push(r);return n},fn=en,yn=function(t){return fn(t)?gn(t,!0):dn(t)},bn=ue,wn=yn,vn={},mn={get exports(){return vn},set exports(t){vn=t}};!function(t,e){var n=z,r=e&&!e.nodeType&&e,i=r&&t&&!t.nodeType&&t,o=i&&i.exports===r?n.Buffer:void 0,s=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}(mn,vn);var _n=function(){return[]},jn=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o},xn=_n,On=Object.prototype.propertyIsEnumerable,An=Object.getOwnPropertySymbols,kn=An?function(t){return null==t?[]:(t=Object(t),jn(An(t),(function(e){return On.call(t,e)})))}:xn,Pn=kn,Sn=ue,Tn=Pn,Mn=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t},Gn=Je(Object.getPrototypeOf,Object),Nn=Mn,En=Gn,Ln=Pn,Cn=_n,zn=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Nn(e,Ln(t)),t=En(t);return e}:Cn,In=ue,Dn=zn,Fn=Mn,Rn=_e,qn=function(t,e,n){var r=e(t);return Rn(t)?r:Fn(r,n(t))},Un=qn,Bn=Pn,Hn=sn,$n=qn,Wn=zn,Vn=yn,Jn=dt(z,"DataView"),Xn=ft,Kn=dt(z,"Promise"),Qn=dt(z,"Set"),Yn=dt(z,"WeakMap"),Zn=V,tr=et,er="[object Map]",nr="[object Promise]",rr="[object Set]",ir="[object WeakMap]",or="[object DataView]",sr=tr(Jn),ar=tr(Xn),hr=tr(Kn),cr=tr(Qn),ur=tr(Yn),lr=Zn;(Jn&&lr(new Jn(new ArrayBuffer(1)))!=or||Xn&&lr(new Xn)!=er||Kn&&lr(Kn.resolve())!=nr||Qn&&lr(new Qn)!=rr||Yn&&lr(new Yn)!=ir)&&(lr=function(t){var e=Zn(t),n="[object Object]"==e?t.constructor:void 0,r=n?tr(n):"";if(r)switch(r){case sr:return or;case ar:return er;case hr:return nr;case cr:return rr;case ur:return ir}return e});var pr=lr,gr=Object.prototype.hasOwnProperty,dr=z.Uint8Array,fr=function(t){var e=new t.constructor(t.byteLength);return new dr(e).set(new dr(t)),e},yr=fr,br=/\w*$/,wr=I?I.prototype:void 0,vr=wr?wr.valueOf:void 0,mr=fr,_r=fr,jr=function(t,e){var n=e?yr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},xr=function(t){var e=new t.constructor(t.source,br.exec(t));return e.lastIndex=t.lastIndex,e},Or=function(t){return vr?Object(vr.call(t)):{}},Ar=function(t,e){var n=e?mr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},kr=J,Pr=Object.create,Sr=function(){function t(){}return function(e){if(!kr(e))return{};if(Pr)return Pr(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),Tr=Sr,Mr=Gn,Gr=Ve,Nr=pr,Er=le,Lr=function(t){return Er(t)&&"[object Map]"==Nr(t)},Cr=Ge,zr=Ne&&Ne.isMap,Ir=zr?Cr(zr):Lr,Dr=pr,Fr=le,Rr=function(t){return Fr(t)&&"[object Set]"==Dr(t)},qr=Ge,Ur=Ne&&Ne.isSet,Br=Ur?qr(Ur):Rr,Hr=Zt,$r=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},Wr=ae,Vr=function(t,e){return t&&an(e,hn(e),t)},Jr=function(t,e){return t&&bn(e,wn(e),t)},Xr=vn,Kr=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e},Qr=function(t,e){return Sn(t,Tn(t),e)},Yr=function(t,e){return In(t,Dn(t),e)},Zr=function(t){return Un(t,Hn,Bn)},ti=function(t){return $n(t,Vn,Wn)},ei=pr,ni=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&gr.call(t,"index")&&(n.index=t.index,n.input=t.input),n},ri=function(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return _r(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return jr(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ar(t,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return xr(t);case"[object Symbol]":return Or(t)}},ii=function(t){return"function"!=typeof t.constructor||Gr(t)?{}:Tr(Mr(t))},oi=_e,si=je,ai=Ir,hi=J,ci=Br,ui=sn,li=yn,pi="[object Arguments]",gi="[object Function]",di="[object Object]",fi={};fi[pi]=fi["[object Array]"]=fi["[object ArrayBuffer]"]=fi["[object DataView]"]=fi["[object Boolean]"]=fi["[object Date]"]=fi["[object Float32Array]"]=fi["[object Float64Array]"]=fi["[object Int8Array]"]=fi["[object Int16Array]"]=fi["[object Int32Array]"]=fi["[object Map]"]=fi["[object Number]"]=fi[di]=fi["[object RegExp]"]=fi["[object Set]"]=fi["[object String]"]=fi["[object Symbol]"]=fi["[object Uint8Array]"]=fi["[object Uint8ClampedArray]"]=fi["[object Uint16Array]"]=fi["[object Uint32Array]"]=!0,fi["[object Error]"]=fi[gi]=fi["[object WeakMap]"]=!1;var yi=function t(e,n,r,i,o,s){var a,h=1&n,c=2&n,u=4&n;if(r&&(a=o?r(e,i,o,s):r(e)),void 0!==a)return a;if(!hi(e))return e;var l=oi(e);if(l){if(a=ni(e),!h)return Kr(e,a)}else{var p=ei(e),g=p==gi||"[object GeneratorFunction]"==p;if(si(e))return Xr(e,h);if(p==di||p==pi||g&&!o){if(a=c||g?{}:ii(e),!h)return c?Yr(e,Jr(a,e)):Qr(e,Vr(a,e))}else{if(!fi[p])return o?e:{};a=ri(e,p,h)}}s||(s=new Hr);var d=s.get(e);if(d)return d;s.set(e,a),ci(e)?e.forEach((function(i){a.add(t(i,n,r,i,e,s))})):ai(e)&&e.forEach((function(i,o){a.set(o,t(i,n,r,o,e,s))}));var f=l?void 0:(u?c?ti:Zr:c?li:ui)(e);return $r(f||e,(function(i,o){f&&(i=e[o=i]),Wr(a,o,t(i,n,r,o,e,s))})),a},bi=function(t){return yi(t,5)},wi=me,vi=_e,mi=I?I.isConcatSpreadable:void 0,_i=Mn,ji=function(t){return vi(t)||wi(t)||!!(mi&&t&&t[mi])},xi=function t(e,n,r,i,o){var s=-1,a=e.length;for(r||(r=ji),o||(o=[]);++s<a;){var h=e[s];n>0&&r(h)?n>1?t(h,n-1,r,i,o):_i(o,h):i||(o[o.length]=h)}return o},Oi=function(t){return null!=t&&t.length?xi(t,1):[]};class Ai{constructor(t){this.genomes=[],this.ne=t}addGenome(t){for(let e=0;e<this.genomes.length;e++)if(this.ne.options.scoreSort<0){if(t.score>this.genomes[e].score)return this.genomes.splice(e,0,t),e}else if(t.score<this.genomes[e].score)return this.genomes.splice(e,0,t),e;return this.genomes.push(t),0}generateNextGeneration(){if(0===this.genomes.length)throw new Error("No genome to start with");const t=[],{elitism:e,population:n,randomBehaviour:r}=this.ne.options,i=Math.round(e*n),o=Math.round(r*n);for(let e=0;e<i;e++)t.length<n&&t.push(bi(this.genomes[e].network));if(o>0&&t.length<n)for(let e=0;e<o;e++){const e=this.genomes[0].network.weights.length,n={neurons:Oi(this.ne.options.network),weights:[]};for(let t=0;t<e;t++)n.weights[t]=this.randomClamped();t.push(n)}if(t.length>=n)return t.slice(0,n);let s=1;for(;;){for(let e=0;e<s;e++){const r=this.breeder(this.genomes[e],this.genomes[s]);for(const e of r)if(t.push(e.network),t.length>=n)return t}s++,s>=this.genomes.length&&(s=0)}}breeder(t,e){let{nbChild:n}=this.ne.options;return n=n>0?n:1,this.randomClamped()<0?this.breeder_1(t,e,n):this.breeder_2(t,e,n)}breeder_1(t,e,n){const r=[],{mutationRate:i,crossoverFactor:o}=this.ne.options;for(let s=0;s<n;s++){const n=new f(t.score,t.network);for(let t=0;t<e.network.weights.length;t++)Math.random()<=o&&(n.network.weights[t]=e.network.weights[t]);for(let t=0;t<n.network.weights.length;t++)Math.random()<=i&&(n.network.weights[t]+=Math.random()*i*2-i);r.push(n)}return r}breeder_2(t,e,n){const r=[],{mutationRate:i}=this.ne.options,o=e.network.weights.length;for(let s=0;s<n;s++){const n=new f(t.score,t.network);let s=Math.floor(Math.random()*o),a=Math.floor(Math.random()*o);s>a&&([s,a]=[a,s]);for(let t=s;t<a;t++)n.network.weights[t]=e.network.weights[t];for(let t=0;t<n.network.weights.length;t++)Math.random()<=i&&(n.network.weights[t]+=Math.random()*i*2-i);r.push(n)}return r}randomClamped(){return 2*Math.random()-1}}class ki{constructor(){this.value=0,this.weights=[]}populate(t){for(let e=0;e<t;e++)this.weights.push(this.randomClamped())}resetWeights(){this.weights=[]}randomClamped(){return 2*Math.random()-1}}class Pi{constructor(){this.neurons=[]}populate(t,e){for(let n=0;n<t;n++){const t=new ki;t.populate(e),this.neurons.push(t)}}}class Si{constructor(){this.__layers__=[]}get layers(){return this.__layers__}generateNetworkLayers(t,e,n){let r=0,i=0;const o=new Pi,s=new Pi;for(o.populate(t,i),s.populate(n,e[e.length-1]),this.__layers__.push(o),i=t,r++;r<=e.length;r++){const t=new Pi;t.populate(e[r-1],i),this.__layers__.push(t),i=e[r-1]}this.__layers__.push(s)}getCopyOfTheNetwork(){const t={neurons:[],weights:[]},e=this.__layers__.length;for(let n=0;n<e;n++){const e=this.__layers__[n].neurons,r=e.length;t.neurons.push(r);for(let n=0;n<r;n++)t.weights.splice(t.weights.length,0,...e[n].weights)}return t}loadNetworkWithData(t){const e=t.neurons.length;let n=0,r=0;this.resetNetwork();for(let i=0;i<e;i++){const e=new Pi;e.populate(t.neurons[i],r);const o=e.neurons;for(const e of o){const r=e.weights.length;for(let i=0;i<r;i++)e.weights[i]=t.weights[n],n++}this.__layers__.push(e),r=t.neurons[i]}}compute(t){const e=t.length,n=this.layers.length,r=[];for(let n=0;n<e;n++){const e=this.layers[0];this.layers[0]&&e.neurons[n]&&(e.neurons[n].value=t[n])}for(let t=1;t<n;t++){const e=this.layers[t-1],n=this.layers[t],r=e.neurons.length,i=n.neurons.length;for(let t=0;t<i;t++){let i=0;for(let o=0;o<r;o++)i+=e.neurons[o].value*n.neurons[t].weights[o];n.neurons[t].value=this.activation(i)}}const i=this.layers[n-1],o=i.neurons.length;for(let t=0;t<o;t++)r.push(i.neurons[t].value);return r}activation(t){const e=-t/1;return 1/(1+Math.exp(e))}resetNetwork(){this.__layers__=[]}}class Ti{constructor(t){this.generations=[],this.ne=t}firstGeneration(t,e,n){const r=[];for(let i=0;i<this.ne.options.population;i++){const i=new Si;i.generateNetworkLayers(t,e,n),r.push(i.getCopyOfTheNetwork())}return this.generations.push(new Ai(this.ne)),r}nextGeneration(){if(0===this.generations.length)throw new TypeError("Must call method Generations.firstGeneration() first.");const t=this.generations[this.generations.length-1].generateNextGeneration();return this.generations.push(new Ai(this.ne)),t}addGenome(t){if(0===this.generations.length)throw new Error("Cannot insert genome. Generations.generations has no item");return this.generations[this.generations.length-1].addGenome(t)}}class Mi{constructor(t){this.configuration=Object.assign({network:[1,[2],1],population:50,elitism:.2,randomBehaviour:.2,mutationRate:.1,historic:0,lowHistoric:!1,scoreSort:-1,nbChild:1,crossoverFactor:.5},t),this.generations=new Ti(this),this.exportableGenerations=[]}get options(){return this.configuration}setConfiguration(t){this.configuration=Object.assign(this.configuration,t)}resetGeneration(){this.generations=new Ti(this)}nextGeneration(){let t=[];const e=this.generations.generations;this.exportableGenerations=bi(e),t=0===e.length?this.generations.firstGeneration(this.options.network[0],this.options.network[1],this.options.network[2]):this.generations.nextGeneration();const n=[];for(const e of t){const t=new Si;t.loadNetworkWithData(e),n.push(t)}if(this.options.lowHistoric&&e.length>1){const t=e[e.length-2].genomes;t.splice(0,t.length-1)}return-1!==this.options.historic&&e.length>this.options.historic+1&&e.splice(0,e.length-(this.options.historic+1)),n}exportData(){const t={config:this.options,data:[]};return this.exportableGenerations.length<1||(t.data=this.exportableGenerations.map((t=>t.genomes.map((t=>({network:t.network,score:t.score})))))),t}importData(t){t.config&&this.setConfiguration(t.config),t.data.forEach((t=>{const e=new Ai(this);t.forEach((({score:t,network:n})=>{e.addGenome(new f(t,n))})),this.generations.generations.push(e)}))}networkScore(t,e){const n=new f(e,t.getCopyOfTheNetwork());return this.generations.addGenome(n)}}const Gi=[],Ni="zero-timeout-message";window.addEventListener("message",(t=>{if(t.source==window&&t.data===Ni&&(t.stopPropagation(),Gi.length>0)){const t=Gi.shift();t&&t()}}),!0);var Ei=n(87),Li=n.n(Ei);const Ci={game:{speedRange:document.querySelector("#gs-speed"),toggle:document.querySelector("#gs-toggle"),reset:document.querySelector("#gs-reset"),endGen:document.querySelector("#gs-end-gen")},ai:{toggle:document.querySelector("#as-toggle"),reset:document.querySelector("#as-reset"),import:document.querySelector("#as-imp"),export:document.querySelector("#as-exp")}},zi={alive:document.querySelector("#alive"),score:document.querySelector("#score"),highest:document.querySelector("#highest"),generation:document.querySelector("#generation")},Ii=document.querySelector("#main-canvas"),Di=document.querySelector("#current-speed"),Fi=new class{constructor(t){this.background=new d,this.birds=[],this.pipes=[],this.canvas=t,this.context=this.canvas.getContext("2d"),this.isPause=!1,this.pipeInterval=170,this.pipeUsedInterval=0,this.birdsAlive=0,this.globalPause=!1,this.Neuvol=new Mi({network:[2,[3],1],population:50}),this.NeuvolGen=[],this.score=0,this.generationCount=0,this.pauseAfterGen=!1,this.endGen=!1,window.Neuroevolution=this.Neuvol,window.NeuvolGen=this.NeuvolGen,this.threshold=.5}initialize(){this.background.setOptions({width:this.canvas.width,height:this.canvas.height,speed:.5})}clearContext(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}update(){if(this.isPause||this.globalPause)return;this.background.update(),this.birds.length<1&&this.restart(),this.score++,this.pipeUsedInterval++,this.pipeInterval<=this.pipeUsedInterval&&(this.addPipe(),this.pipeUsedInterval=0);let t=0;for(const e of this.pipes)try{if(e.position.x+e.width>this.birds[0].position.x){t=e.height/this.canvas.height;break}}catch(t){}for(let e=0;e<this.NeuvolGen.length;e++)this.birds[e].alive&&(this.NeuvolGen[e].compute([this.birds[e].position.y/this.canvas.height,t])[0]>this.threshold&&this.birds[e].flap(),this.birds[e].update(),(this.endGen||this.birds[e].isDead(this.canvas.height,this.pipes))&&(this.birds[e].alive=!1,this.birdsAlive--,this.Neuvol.networkScore(this.NeuvolGen[e],this.score),this.birdsAlive<=0&&this.restart()));for(let t=0;t<this.pipes.length;t++)this.pipes[t].update(),this.pipes[t].isOut()&&(this.pipes.splice(t,1),t--)}display(){if(this.clearContext(),this.background.display(this.context),!this.globalPause){for(const t of this.pipes)try{t.display(this.context)}catch(t){}for(const t of this.birds)t.display(this.context)}}addPipe(){const{height:t,width:e}=this.canvas,n=t-140-200,r=Math.round(Math.random()*n)+70,i={position:{x:e,y:0},width:110,height:r,pos:"top",velocity:{x:3,y:0}},o={position:{x:e,y:r+200},width:110,height:t,pos:"bottom",velocity:{x:3,y:0}};this.pipes.push(new p(i)),this.pipes.push(new p(o))}addBird(e){e=Object.assign({alive:!0,position:{x:200,y:500},width:70,height:60,gravity:0,velocity:{y:.3,x:.3},jump:-6},e),this.birdsAlive++,this.birds.push(new class{constructor(e){this.position={x:0,y:0},this.width=0,this.height=0,this.alive=!1,this.gravity=0,this.velocity={x:0,y:0},this.jump=0,this.img=a(t),this.setOptions(e)}setOptions(t){Object.assign(this,t)}flap(){this.gravity=this.jump}isDead(t,e){const n=this.position.y,r=this.position.x;if(n>=t)return!0;if(n+this.height<=0)return!0;for(const t of e)try{const{x:e,y:i}=t.position,{width:o,height:s}=t;if(e-o>r)continue;if(!(r>=e+o||n>=i+s||r+this.width<=e||n+this.height<=i))return!0}catch(t){}return!1}update(){this.alive&&(this.gravity+=this.velocity.y,this.position.y+=this.gravity)}display(t){if(!this.alive)return;const{x:e,y:n}=this.position,{width:r,gravity:i}=this,o=c({width:this.img.width,height:this.img.height},{width:r});t.save(),t.translate(e,n),t.translate(o.width/2,o.height/2),t.rotate(Math.PI/2*i/20),t.drawImage(this.img,-o.width/2,-o.height/2,o.width,o.height),t.restore()}}(e))}onResize({width:t,height:e}){this.canvas.width=t,this.canvas.height=e,this.background.resize({width:t,height:e})}pause(){this.isPause=!0}resume(){this.isPause=!1}get state(){return!0===this.isPause?"pause":"play"}endGeneration(){this.endGen=!0}restart(){this.globalPause=!0,this.pipes.splice(0,this.pipes.length),this.birds.splice(0,this.birds.length),this.score=0,this.birdsAlive=0;for(let t=0;t<this.Neuvol.options.population;t++)this.addBird();try{this.NeuvolGen=this.Neuvol.nextGeneration()}catch(t){this.Neuvol.resetGeneration(),this.NeuvolGen=this.Neuvol.nextGeneration(),this.generationCount=-1}this.endGen=!1,this.generationCount++,this.globalPause=!1}exportData(){return this.Neuvol.exportData()}importData(t){t&&(this.generationCount=0),this.Neuvol.importData(t)}}(Ii);let Ri,qi=60,Ui=!1,Bi=0,Hi=!1;const $i=new class{constructor(t){this.fps=0,this.timeArray=[],this.context=t,this.containerOpacity=.4,this.textProps={position:{x:0,y:0},preText:"",postText:""},this.containerProps={startingPoint:{x:0,y:0},endPoint:{x:0,y:0}}}text(t,e,n){this.textProps.position=t,this.textProps.preText=e,this.textProps.postText=n}container(t,e){this.containerProps={startingPoint:t,endPoint:e}}mark(){const t=performance.now();for(;this.timeArray.length>0&&this.timeArray[0]<=t-1e3;)this.timeArray.shift();this.timeArray.push(t),this.fps=this.timeArray.length,this.drawContainer(),this.drawText(String(this.fps))}drawContainer(){const t=this.context,{startingPoint:e,endPoint:n}=this.containerProps;t.beginPath(),t.globalAlpha=this.containerOpacity,t.fillStyle="#1e1e20",t.fillRect(e.x,e.y,n.x,n.y),t.fill(),t.closePath()}drawText(t){const e=this.context,{preText:n,postText:r,position:i}=this.textProps,o=`${n}${t}${r}`;e.beginPath(),e.globalAlpha=1,e.font="30px monospace",e.fillStyle="#58d130",e.fillText(o,i.x,i.y),e.closePath()}}(Fi.context);$i.container({x:10,y:10},{x:180,y:60}),$i.text({x:50,y:50},"","fps");const Wi=()=>{var t;Fi.update(),0===qi?(t=Wi,Gi.push(t),window.postMessage(Ni,"*")):60===qi?Li()(Wi):Ri=setTimeout(Wi,1e3/qi)},Vi=()=>{Fi.display(),zi.alive.innerHTML=String(Fi.birdsAlive),Fi.score>Bi&&(Bi=Fi.score),$i.mark(),zi.highest.innerHTML=String(Bi),zi.score.innerHTML=String(Fi.score),zi.generation.innerHTML=String(Fi.generationCount),Li()(Vi)};window.addEventListener("DOMContentLoaded",(()=>{new h([g,u,t,l]).then((()=>{Fi.initialize(),Fi.onResize({width:1e3,height:1e3}),Li()(Vi),Hi=!0,Ci.game.toggle.innerHTML="Play",Di.innerHTML=String(qi)}))})),Ci.game.toggle.addEventListener("click",(()=>{if(Hi&&!Ui)return Ci.game.reset.click(),void(Ci.game.toggle.innerHTML="Pause");"play"===Fi.state?(Fi.pause(),Ci.game.toggle.innerHTML="Resume"):"pause"===Fi.state&&(Fi.resume(),Ci.game.toggle.innerHTML="Pause")})),Ci.game.reset.addEventListener("click",(()=>{Hi&&(Ui||Wi(),Ci.game.toggle.innerHTML="play"===Fi.state?"Pause":"Resume",Ui=!0,Fi.restart())})),Ci.game.speedRange.addEventListener("input",(()=>{if(Hi){switch(parseInt(Ci.game.speedRange.value)){case 0:qi=60;break;case 1:qi=256;break;case 2:qi=512;break;case 3:qi=700;break;case 4:qi=1e3;break;case 5:return qi=0,window.clearTimeout(Ri),Ui&&Wi(),void(Di.innerHTML="MAX");case-1:qi=30;break;default:qi=10}Di.innerHTML=String(qi)}})),Ci.ai.export.addEventListener("click",(()=>{const t=Fi.exportData(),e=new Blob([JSON.stringify(t)],{type:"text/plain"}),n=document.createElement("a");n.setAttribute("href",URL.createObjectURL(e)),n.setAttribute("download","Neuroevolution-export.json"),n.style.display="none",document.body.appendChild(n),n.click(),n.remove()})),Ci.ai.import.addEventListener("click",(()=>{const t=document.createElement("input"),e=new FileReader;t.setAttribute("type","file"),t.style.display="none",t.addEventListener("change",(()=>{null!=t.files[0]&&e.readAsText(t.files[0])})),e.onload=()=>{try{const t=JSON.parse(e.result);Fi.importData(t),alert("Imported")}catch(t){console.warn(t),alert("Failed to import")}},document.body.appendChild(t),t.click(),t.remove()})),Ci.game.endGen.addEventListener("click",(()=>{Fi.endGeneration(),Ci.game.toggle.click()}))})()})();