(()=>{var t={75:function(t){(function(){var e,r,n,i,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(e()-o)/1e6},r=process.hrtime,i=(e=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*process.uptime(),o=i-s):Date.now?(t.exports=function(){return Date.now()-n},n=Date.now()):(t.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},87:(t,e,r)=>{for(var n=r(75),i="undefined"==typeof window?r.g:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],h=i["cancel"+s]||i["cancelRequest"+s],c=0;!a&&c<o.length;c++)a=i[o[c]+"Request"+s],h=i[o[c]+"Cancel"+s]||i[o[c]+"CancelRequest"+s];if(!a||!h){var u=0,l=0,p=[];a=function(t){if(0===p.length){var e=n(),r=Math.max(0,16.666666666666668-(e-u));u=r+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(r))}return p.push({handle:++l,callback:t,cancelled:!1}),l},h=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(i,t)},t.exports.cancel=function(){h.apply(i,arguments)},t.exports.polyfill=function(t){t||(t=i),t.requestAnimationFrame=a,t.cancelAnimationFrame=h}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";const t=r.p+"4b8520c2f411bc0084f2616612f1c07b.png";class e{constructor(t){this.__source=t,this.ready=0}eventTracking(t,e){this.ready--,this.ready<1&&t({source:this.source,object:e})}get source(){return this.__source}}class n extends e{}class i extends n{test(){return i.regexp.test(this.source)}load(){return this.ready=3,new Promise(((t,e)=>{const r=new Audio;r.addEventListener("load",(()=>{this.eventTracking(t,r)})),r.addEventListener("canplay",(()=>{this.eventTracking(t,r)})),r.addEventListener("canplaythrough",(()=>{this.eventTracking(t,r)})),r.addEventListener("error",e),r.src=this.source}))}}i.regexp=/\.(mp3|wav|ogg|aac)/i;class o extends n{test(){return o.regexp.test(this.source)}load(){return this.ready=1,new Promise(((t,e)=>{const r=new Image;r.addEventListener("load",(()=>{this.eventTracking(t,r)})),r.addEventListener("error",e),r.src=this.source}))}}o.regexp=/\.(jpe?g|png|svg|bmp|webp|webm|gif)/i;class s{constructor(t){this.callback=()=>{},s.sources.push(...t);const e=t.map((t=>{for(const e of s.loaders){const r=new e(t);if(r.test())return r.load()}throw new Error("No available driver for file: "+t)}));Promise.all(e).then((t=>{t.forEach((t=>{s.assets.set(t.source,t.object)})),this.callback()}))}then(t){this.callback=t}static get(t){return s.assets.get(t)}}s.assets=new Map,s.sources=[],s.loaders=[i,o];const a=s.get,h=s,c=(t,e)=>{const r={width:0,height:0};return"width"in e?(r.width=e.width,r.height=t.height/t.width*e.width):"height"in e&&(r.height=e.height,r.width=t.width*e.height/t.height),r},u=r.p+"9515c2eef10d98cc0700d0ae2fdab2df.png",l=r.p+"ed0226bd23a0ffc4dbfbc2fcff5eadb0.png",p=class{constructor(t){this.position={x:0,y:0},this.pos="",this.width=0,this.height=0,this.velocity={x:0,y:0},this.imgs={top:a(u),bottom:a(l)},this.setOptions(t)}setOptions(t){Object.assign(this,t)}isOut(){return this.position.x+this.width<0}update(){this.position.x-=this.velocity.x}display(t){const{x:e,y:r}=this.position,{width:n,height:i}=this;if("top"===this.pos){const o=c({width:this.imgs.top.width,height:this.imgs.top.height},{width:n});t.drawImage(this.imgs.top,e,r+(i-o.height),o.width,o.height)}else if("bottom"===this.pos){const i=c({width:this.imgs.bottom.width,height:this.imgs.bottom.height},{width:n});t.drawImage(this.imgs.bottom,e,r,i.width,i.height)}}},g=r.p+"4972cd415873dd0ddc6d1425a0a64ce9.png";class d{constructor(t){this.contextAttr={width:0,height:0},this.position={x:0,y:0},this.speed=0,this.imgSrc="",this.img=void 0,this.imgAttr={width:0,height:0},t&&this.setOptions(t)}resize({width:t,height:e}){this.contextAttr={width:t,height:e},this.imgAttr=c({width:this.img.width,height:this.img.height},{height:e})}setOptions(t){const{width:e,height:r,imgSrc:n}=Object.assign(this,t);""===n&&(this.imgSrc=g),this.img=a(this.imgSrc),this.resize({width:e,height:r})}update(){this.position.x+=this.speed}display(t){const{width:e}=this.contextAttr,{x:r,y:n}=this.position,i=Math.ceil(e/this.imgAttr.width)+1,o=r%this.imgAttr.width;for(let e=0;e<i;e++)t.drawImage(this.img,e*this.imgAttr.width-o,n,this.imgAttr.width,this.imgAttr.height)}}class f{constructor(t,e){this.score=t,this.network=Object.assign({neurons:[],weights:[]},e)}}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v=function(t,e){return t===e||t!=t&&e!=e},b=v,w=function(t,e){for(var r=t.length;r--;)if(b(t[r][0],e))return r;return-1},m=w,_=Array.prototype.splice;var j=w;var x=w;var O=w;var A=function(){this.__data__=[],this.size=0},k=function(t){var e=this.__data__;return!((t=m(e,t))<0||(t==e.length-1?e.pop():_.call(e,t,1),--this.size,0))},P=function(t){var e=this.__data__;return(t=j(e,t))<0?void 0:e[t][1]},S=function(t){return-1<x(this.__data__,t)},T=function(t,e){var r=this.__data__,n=O(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function M(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}M.prototype.clear=A,M.prototype.delete=k,M.prototype.get=P,M.prototype.has=S,M.prototype.set=T;var G=M,N=G,E="object"==typeof y&&y&&y.Object===Object&&y,L=E,C="object"==typeof self&&self&&self.Object===Object&&self,z=L||C||Function("return this")(),I=z.Symbol,D=I,F=Object.prototype,R=F.hasOwnProperty,q=F.toString,U=D?D.toStringTag:void 0,B=Object.prototype.toString;var H,$=function(t){var e=R.call(t,U),r=t[U];try{var n=!(t[U]=void 0)}catch(t){}var i=q.call(t);return n&&(e?t[U]=r:delete t[U]),i},W=function(t){return B.call(t)},V=I?I.toStringTag:void 0,J=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":(V&&V in Object(t)?$:W)(t)},X=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},K=J,Q=X,Y=function(t){return!!Q(t)&&("[object Function]"==(t=K(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)},Z=z["__core-js_shared__"],tt=(H=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",et=Function.prototype.toString,rt=function(t){if(null!=t){try{return et.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=Y,it=function(t){return!!tt&&tt in t},ot=X,st=rt,at=/^\[object .+?Constructor\]$/,ht=Function.prototype,ct=Object.prototype,ut=ht.toString,lt=ct.hasOwnProperty,pt=RegExp("^"+ut.call(lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var gt=function(t){return!(!ot(t)||it(t))&&(nt(t)?pt:at).test(st(t))},dt=function(t,e){return null==t?void 0:t[e]},ft=function(t,e){return t=dt(t,e),gt(t)?t:void 0},yt=ft(z,"Map"),vt=ft(Object,"create"),bt=vt,wt=vt,mt=Object.prototype.hasOwnProperty,_t=vt,jt=Object.prototype.hasOwnProperty;var xt=vt;var Ot=function(){this.__data__=bt?bt(null):{},this.size=0},At=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},kt=function(t){var e,r=this.__data__;return wt?"__lodash_hash_undefined__"===(e=r[t])?void 0:e:mt.call(r,t)?r[t]:void 0},Pt=function(t){var e=this.__data__;return _t?void 0!==e[t]:jt.call(e,t)},St=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=xt&&void 0===e?"__lodash_hash_undefined__":e,this};function Tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Tt.prototype.clear=Ot,Tt.prototype.delete=At,Tt.prototype.get=kt,Tt.prototype.has=Pt,Tt.prototype.set=St;var Mt=Tt,Gt=G,Nt=yt;var Et=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};function Lt(t,e){return t=t.__data__,Et(e)?t["string"==typeof e?"string":"hash"]:t.map}var Ct=Lt;var zt=Lt;var It=Lt;var Dt=Lt;var Ft=function(){this.size=0,this.__data__={hash:new Mt,map:new(Nt||Gt),string:new Mt}},Rt=function(t){return t=Ct(this,t).delete(t),this.size-=t?1:0,t},qt=function(t){return zt(this,t).get(t)},Ut=function(t){return It(this,t).has(t)},Bt=function(t,e){var r=Dt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ht.prototype.clear=Ft,Ht.prototype.delete=Rt,Ht.prototype.get=qt,Ht.prototype.has=Ut,Ht.prototype.set=Bt;var $t=G,Wt=yt,Vt=Ht;var Jt=G,Xt=function(){this.__data__=new N,this.size=0},Kt=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Qt=function(t){return this.__data__.get(t)},Yt=function(t){return this.__data__.has(t)},Zt=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!Wt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Vt(n)}return r.set(t,e),this.size=r.size,this};function te(t){t=this.__data__=new Jt(t),this.size=t.size}te.prototype.clear=Xt,te.prototype.delete=Kt,te.prototype.get=Qt,te.prototype.has=Yt,te.prototype.set=Zt;var ee=te,re=ft,ne=function(){try{var t=re(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),ie=ne,oe=function(t,e,r){"__proto__"==e&&ie?ie(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},se=oe,ae=v,he=Object.prototype.hasOwnProperty,ce=function(t,e,r){var n=t[e];he.call(t,e)&&ae(n,r)&&(void 0!==r||e in t)||se(t,e,r)},ue=ce,le=oe,pe=function(t,e,r,n){for(var i=!r,o=(r=r||{},-1),s=e.length;++o<s;){var a=e[o],h=n?n(r[a],t[a],a,r,t):void 0;void 0===h&&(h=t[a]),(i?le:ue)(r,a,h)}return r},ge=function(t){return null!=t&&"object"==typeof t},de=J,fe=ge;var ye=function(t){return fe(t)&&"[object Arguments]"==de(t)},ve=ge,be=Object.prototype,we=be.hasOwnProperty,me=be.propertyIsEnumerable,_e=ye(function(){return arguments}())?ye:function(t){return ve(t)&&we.call(t,"callee")&&!me.call(t,"callee")},je=_e,xe=Array.isArray,Oe={},Ae={get exports(){return Oe},set exports(t){Oe=t}},ke=function(){return!1},Pe=(function(t,e){var r;e=(r=(r=(e=e&&!e.nodeType&&e)&&t&&!t.nodeType&&t)&&r.exports===e?z.Buffer:void 0)?r.isBuffer:void 0,t.exports=e||ke}(Ae,Oe),9007199254740991),Se=/^(?:0|[1-9]\d*)$/,Te=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991},Me=J,Ge=Te,Ne=ge,Ee={};Ee["[object Float32Array]"]=Ee["[object Float64Array]"]=Ee["[object Int8Array]"]=Ee["[object Int16Array]"]=Ee["[object Int32Array]"]=Ee["[object Uint8Array]"]=Ee["[object Uint8ClampedArray]"]=Ee["[object Uint16Array]"]=Ee["[object Uint32Array]"]=!0,Ee["[object Arguments]"]=Ee["[object Array]"]=Ee["[object ArrayBuffer]"]=Ee["[object Boolean]"]=Ee["[object DataView]"]=Ee["[object Date]"]=Ee["[object Error]"]=Ee["[object Function]"]=Ee["[object Map]"]=Ee["[object Number]"]=Ee["[object Object]"]=Ee["[object RegExp]"]=Ee["[object Set]"]=Ee["[object String]"]=Ee["[object WeakMap]"]=!1;var Le=function(t){return function(e){return t(e)}},Ce={},ze={get exports(){return Ce},set exports(t){Ce=t}},Ie=(function(t,e){var r=(e=e&&!e.nodeType&&e)&&t&&!t.nodeType&&t,n=r&&r.exports===e&&E.process;e=function(){try{return r&&r.require&&r.require("util").types||n&&n.binding&&n.binding("util")}catch(t){}}(),t.exports=e}(ze,Ce),function(t){return Ne(t)&&Ge(t.length)&&!!Ee[Me(t)]}),De=Le,Fe=Ce&&Ce.isTypedArray,Re=Fe?De(Fe):Ie,qe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},Ue=je,Be=xe,He=Oe,$e=function(t,e){var r=typeof t;return!!(e=null==e?Pe:e)&&("number"==r||"symbol"!=r&&Se.test(t))&&-1<t&&t%1==0&&t<e},We=Re,Ve=Object.prototype.hasOwnProperty,Je=function(t,e){var r,n=Be(t),i=!n&&Ue(t),o=!n&&!i&&He(t),s=!n&&!i&&!o&&We(t),a=n||i||o||s,h=a?qe(t.length,String):[],c=h.length;for(r in t)!e&&!Ve.call(t,r)||a&&("length"==r||o&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||$e(r,c))||h.push(r);return h},Xe=Object.prototype,Ke=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Xe)},Qe=function(t,e){return function(r){return t(e(r))}},Ye=Qe(Object.keys,Object),Ze=Ke,tr=Ye,er=Object.prototype.hasOwnProperty;var rr=Y,nr=Te,ir=function(t){return null!=t&&nr(t.length)&&!rr(t)},or=Je,sr=function(t){if(!Ze(t))return tr(t);var e,r=[];for(e in Object(t))er.call(t,e)&&"constructor"!=e&&r.push(e);return r},ar=ir,hr=function(t){return(ar(t)?or:sr)(t)},cr=pe,ur=hr;var lr=X,pr=Ke,gr=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},dr=Object.prototype.hasOwnProperty;var fr=Je,yr=function(t){if(!lr(t))return gr(t);var e,r=pr(t),n=[];for(e in t)("constructor"!=e||!r&&dr.call(t,e))&&n.push(e);return n},vr=ir,br=function(t){return vr(t)?fr(t,!0):yr(t)},wr=pe,mr=br,_r={},jr={get exports(){return _r},set exports(t){_r=t}};!function(t,e){var r,n=(r=(r=(e=e&&!e.nodeType&&e)&&t&&!t.nodeType&&t)&&r.exports===e?z.Buffer:void 0)?r.allocUnsafe:void 0;t.exports=function(t,e){return e?t.slice():(e=t.length,e=n?n(e):new t.constructor(e),t.copy(e),e)}}(jr,_r);var xr=function(){return[]},Or=function(t,e){for(var r=-1,n=null==t?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o},Ar=xr,kr=Object.prototype.propertyIsEnumerable,Pr=Object.getOwnPropertySymbols,Sr=Pr?function(t){return null==t?[]:(t=Object(t),Or(Pr(t),(function(e){return kr.call(t,e)})))}:Ar,Tr=Sr,Mr=pe,Gr=Tr,Nr=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t},Er=Qe(Object.getPrototypeOf,Object),Lr=Nr,Cr=Er,zr=Tr,Ir=xr,Dr=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Lr(e,zr(t)),t=Cr(t);return e}:Ir,Fr=pe,Rr=Dr,qr=Nr,Ur=xe;function Br(t,e,r){return e=e(t),Ur(t)?e:qr(e,r(t))}var Hr=Br,$r=Tr,Wr=hr,Vr=Br,Jr=Dr,Xr=br,Kr=ft(z,"DataView"),Qr=yt,Yr=ft(z,"Promise"),Zr=ft(z,"Set"),tn=ft(z,"WeakMap"),en=J,rn=rt,nn="[object Map]",on="[object Promise]",sn="[object Set]",an="[object WeakMap]",hn="[object DataView]",cn=rn(Kr),un=rn(Qr),ln=rn(Yr),pn=rn(Zr),gn=rn(tn),dn=en,fn=dn=Kr&&dn(new Kr(new ArrayBuffer(1)))!=hn||Qr&&dn(new Qr)!=nn||Yr&&dn(Yr.resolve())!=on||Zr&&dn(new Zr)!=sn||tn&&dn(new tn)!=an?function(t){var e=en(t);if(t=(t="[object Object]"==e?t.constructor:void 0)?rn(t):"")switch(t){case cn:return hn;case un:return nn;case ln:return on;case pn:return sn;case gn:return an}return e}:dn,yn=Object.prototype.hasOwnProperty,vn=z.Uint8Array,bn=function(t){var e=new t.constructor(t.byteLength);return new vn(e).set(new vn(t)),e},wn=bn,mn=/\w*$/,_n=I?I.prototype:void 0,jn=_n?_n.valueOf:void 0;var xn=bn;var On=bn,An=function(t,e){return e=e?wn(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength)},kn=function(t){var e=new t.constructor(t.source,mn.exec(t));return e.lastIndex=t.lastIndex,e},Pn=function(t){return jn?Object(jn.call(t)):{}},Sn=function(t,e){return e=e?xn(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.length)},Tn=X,Mn=Object.create,Gn=function(){function t(){}return function(e){return Tn(e)?Mn?Mn(e):(t.prototype=e,e=new t,t.prototype=void 0,e):{}}}(),Nn=Gn,En=Er,Ln=Ke,Cn=fn,zn=ge;var In=function(t){return zn(t)&&"[object Map]"==Cn(t)},Dn=Le,Fn=Ce&&Ce.isMap,Rn=Fn?Dn(Fn):In,qn=fn,Un=ge;var Bn=function(t){return Un(t)&&"[object Set]"==qn(t)},Hn=Le,$n=Ce&&Ce.isSet,Wn=$n?Hn($n):Bn,Vn=ee,Jn=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},Xn=ce,Kn=function(t,e){return t&&cr(e,ur(e),t)},Qn=function(t,e){return t&&wr(e,mr(e),t)},Yn=_r,Zn=function(t,e){var r=-1,n=t.length;for(e=e||Array(n);++r<n;)e[r]=t[r];return e},ti=function(t,e){return Mr(t,Gr(t),e)},ei=function(t,e){return Fr(t,Rr(t),e)},ri=function(t){return Hr(t,Wr,$r)},ni=function(t){return Vr(t,Xr,Jr)},ii=fn,oi=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&yn.call(t,"index")&&(r.index=t.index,r.input=t.input),r},si=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return On(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return An(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Sn(t,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return kn(t);case"[object Symbol]":return Pn(t)}},ai=function(t){return"function"!=typeof t.constructor||Ln(t)?{}:Nn(En(t))},hi=xe,ci=Oe,ui=Rn,li=X,pi=Wn,gi=hr,di=br,fi="[object Arguments]",yi="[object Function]",vi="[object Object]",bi={};bi[fi]=bi["[object Array]"]=bi["[object ArrayBuffer]"]=bi["[object DataView]"]=bi["[object Boolean]"]=bi["[object Date]"]=bi["[object Float32Array]"]=bi["[object Float64Array]"]=bi["[object Int8Array]"]=bi["[object Int16Array]"]=bi["[object Int32Array]"]=bi["[object Map]"]=bi["[object Number]"]=bi[vi]=bi["[object RegExp]"]=bi["[object Set]"]=bi["[object String]"]=bi["[object Symbol]"]=bi["[object Uint8Array]"]=bi["[object Uint8ClampedArray]"]=bi["[object Uint16Array]"]=bi["[object Uint32Array]"]=!0,bi["[object Error]"]=bi[yi]=bi["[object WeakMap]"]=!1;var wi=function t(e,r,n,i,o,s){var a,h=1&r,c=2&r,u=4&r;if(void 0===(a=n?o?n(e,i,o,s):n(e):a)){if(!li(e))return e;if(i=hi(e)){if(a=oi(e),!h)return Zn(e,a)}else{var l=ii(e),p=l==yi||"[object GeneratorFunction]"==l;if(ci(e))return Yn(e,h);if(l==vi||l==fi||p&&!o){if(a=c||p?{}:ai(e),!h)return c?ei(e,Qn(a,e)):ti(e,Kn(a,e))}else{if(!bi[l])return o?e:{};a=si(e,l,h)}}if(p=(s=s||new Vn).get(e))return p;s.set(e,a),pi(e)?e.forEach((function(i){a.add(t(i,r,n,i,e,s))})):ui(e)&&e.forEach((function(i,o){a.set(o,t(i,r,n,o,e,s))}));var g=i?void 0:(u?c?ni:ri:c?di:gi)(e);Jn(g||e,(function(i,o){g&&(i=e[o=i]),Xn(a,o,t(i,r,n,o,e,s))}))}return a},mi=function(t){return wi(t,5)},_i=je,ji=xe,xi=I?I.isConcatSpreadable:void 0;var Oi=Nr,Ai=function(t){return ji(t)||_i(t)||!!(xi&&t&&t[xi])};var ki=function t(e,r,n,i,o){var s=-1,a=e.length;for(n=n||Ai,o=o||[];++s<a;){var h=e[s];0<r&&n(h)?1<r?t(h,r-1,n,i,o):Oi(o,h):i||(o[o.length]=h)}return o},Pi=function(t){return null!=t&&t.length?ki(t,1):[]};class Si{constructor(t){this.genomes=[],this.ne=t}addGenome(t){for(let e=0;e<this.genomes.length;e++)if(this.ne.options.scoreSort<0){if(t.score>this.genomes[e].score)return this.genomes.splice(e,0,t),e}else if(t.score<this.genomes[e].score)return this.genomes.splice(e,0,t),e;return this.genomes.push(t),0}generateNextGeneration(){if(0===this.genomes.length)throw new Error("No genome to start with");var t=[],{elitism:e,population:r,randomBehaviour:n}=this.ne.options,i=Math.round(e*r),o=Math.round(n*r);for(let e=0;e<i;e++)t.length<r&&t.push(mi(this.genomes[e].network));if(0<o&&t.length<r)for(let e=0;e<o;e++){var s=this.genomes[0].network.weights.length,a={neurons:Pi(this.ne.options.network),weights:[]};for(let t=0;t<s;t++)a.weights[t]=this.randomClamped();t.push(a)}if(r<=t.length)return t.slice(0,r);let h=1;for(;;){for(let e=0;e<h;e++)for(const n of this.breeder(this.genomes[e],this.genomes[h]))if(t.push(n.network),r<=t.length)return t;++h>=this.genomes.length&&(h=0)}}breeder(t,e){var r=0<(r=this.ne.options.nbChild)?r:1;return this.randomClamped()<0?this.breeder_1(t,e,r):this.breeder_2(t,e,r)}breeder_1(t,e,r){var n=[],{mutationRate:i,crossoverFactor:o}=this.ne.options;for(let a=0;a<r;a++){var s=new f(t.score,t.network);for(let t=0;t<e.network.weights.length;t++)Math.random()<=o&&(s.network.weights[t]=e.network.weights[t]);for(let t=0;t<s.network.weights.length;t++)Math.random()<=i&&(s.network.weights[t]+=Math.random()*i*2-i);n.push(s)}return n}breeder_2(t,e,r){var n=[],i=this.ne.options.mutationRate,o=e.network.weights.length;for(let a=0;a<r;a++){var s=new f(t.score,t.network);let r=Math.floor(Math.random()*o),a=Math.floor(Math.random()*o);r>a&&([r,a]=[a,r]);for(let t=r;t<a;t++)s.network.weights[t]=e.network.weights[t];for(let t=0;t<s.network.weights.length;t++)Math.random()<=i&&(s.network.weights[t]+=Math.random()*i*2-i);n.push(s)}return n}randomClamped(){return 2*Math.random()-1}}class Ti{constructor(){this.value=0,this.weights=[]}populate(t){for(let e=0;e<t;e++)this.weights.push(this.randomClamped())}resetWeights(){this.weights=[]}randomClamped(){return 2*Math.random()-1}}class Mi{constructor(){this.neurons=[]}populate(t,e){for(let n=0;n<t;n++){var r=new Ti;r.populate(e),this.neurons.push(r)}}}class Gi{constructor(){this.__layers__=[]}get layers(){return this.__layers__}generateNetworkLayers(t,e,r){let n=0,i=0;var o=new Mi,s=new Mi;for(o.populate(t,i),s.populate(r,e[e.length-1]),this.__layers__.push(o),i=t,++n;n<=e.length;n++){var a=new Mi;a.populate(e[n-1],i),this.__layers__.push(a),i=e[n-1]}this.__layers__.push(s)}getCopyOfTheNetwork(){var t={neurons:[],weights:[]},e=this.__layers__.length;for(let i=0;i<e;i++){var r=this.__layers__[i].neurons,n=r.length;t.neurons.push(n);for(let e=0;e<n;e++)t.weights.splice(t.weights.length,0,...r[e].weights)}return t}loadNetworkWithData(t){var e=t.neurons.length;let r=0,n=0;this.resetNetwork();for(let a=0;a<e;a++){var i=new Mi,o=(i.populate(t.neurons[a],n),i.neurons);for(const e of o){var s=e.weights.length;for(let n=0;n<s;n++)e.weights[n]=t.weights[r],r++}this.__layers__.push(i),n=t.neurons[a]}}compute(t){var e=t.length,r=this.layers.length,n=[];for(let r=0;r<e;r++){var i=this.layers[0];this.layers[0]&&i.neurons[r]&&(i.neurons[r].value=t[r])}for(let t=1;t<r;t++){var o=this.layers[t-1],s=this.layers[t],a=o.neurons.length,h=s.neurons.length;for(let t=0;t<h;t++){let e=0;for(let r=0;r<a;r++)e+=o.neurons[r].value*s.neurons[t].weights[r];s.neurons[t].value=this.activation(e)}}var c=this.layers[r-1],u=c.neurons.length;for(let t=0;t<u;t++)n.push(c.neurons[t].value);return n}activation(t){return 1/(1+Math.exp(-t))}resetNetwork(){this.__layers__=[]}}class Ni{constructor(t){this.generations=[],this.ne=t}firstGeneration(t,e,r){var n=[];for(let o=0;o<this.ne.options.population;o++){var i=new Gi;i.generateNetworkLayers(t,e,r),n.push(i.getCopyOfTheNetwork())}return this.generations.push(new Si(this.ne)),n}nextGeneration(){if(0===this.generations.length)throw new TypeError("Must call method Generations.firstGeneration() first.");var t=this.generations[this.generations.length-1].generateNextGeneration();return this.generations.push(new Si(this.ne)),t}addGenome(t){if(0===this.generations.length)throw new Error("Cannot insert genome. Generations.generations has no item");return this.generations[this.generations.length-1].addGenome(t)}}class Ei{constructor(t){this.configuration=Object.assign({network:[1,[2],1],population:50,elitism:.2,randomBehaviour:.2,mutationRate:.1,historic:0,lowHistoric:!1,scoreSort:-1,nbChild:1,crossoverFactor:.5},t),this.generations=new Ni(this),this.exportableGenerations=[]}get options(){return this.configuration}setConfiguration(t){this.configuration=Object.assign(this.configuration,t)}resetGeneration(){this.generations=new Ni(this)}nextGeneration(){let t=[];var e,r=this.generations.generations,n=(this.exportableGenerations=mi(r),[]);for(const e of t=0===r.length?this.generations.firstGeneration(this.options.network[0],this.options.network[1],this.options.network[2]):this.generations.nextGeneration()){var i=new Gi;i.loadNetworkWithData(e),n.push(i)}return this.options.lowHistoric&&1<r.length&&(e=r[r.length-2].genomes).splice(0,e.length-1),-1!==this.options.historic&&r.length>this.options.historic+1&&r.splice(0,r.length-(this.options.historic+1)),n}exportData(){var t={config:this.options,data:[]};return this.exportableGenerations.length<1||(t.data=this.exportableGenerations.map((t=>t.genomes.map((t=>({network:t.network,score:t.score})))))),t}importData(t){t.config&&this.setConfiguration(t.config),t.data.forEach((t=>{const e=new Si(this);t.forEach((({score:t,network:r})=>{e.addGenome(new f(t,r))})),this.generations.generations.push(e)}))}networkScore(t,e){return e=new f(e,t.getCopyOfTheNetwork()),this.generations.addGenome(e)}}const Li=[],Ci="zero-timeout-message";window.addEventListener("message",(t=>{if(t.source==window&&t.data===Ci&&(t.stopPropagation(),Li.length>0)){const t=Li.shift();t&&t()}}),!0);var zi=r(87),Ii=r.n(zi);const Di={game:{speedRange:document.querySelector("#gs-speed"),toggle:document.querySelector("#gs-toggle"),reset:document.querySelector("#gs-reset"),endGen:document.querySelector("#gs-end-gen")},ai:{toggle:document.querySelector("#as-toggle"),reset:document.querySelector("#as-reset"),import:document.querySelector("#as-imp"),export:document.querySelector("#as-exp")}},Fi={alive:document.querySelector("#alive"),score:document.querySelector("#score"),highest:document.querySelector("#highest"),generation:document.querySelector("#generation")},Ri=document.querySelector("#main-canvas"),qi=document.querySelector("#current-speed"),Ui=new class{constructor(t){this.background=new d,this.birds=[],this.pipes=[],this.canvas=t,this.context=this.canvas.getContext("2d"),this.isPause=!1,this.pipeInterval=170,this.pipeUsedInterval=0,this.birdsAlive=0,this.globalPause=!1,this.Neuvol=new Ei({network:[2,[3],1],population:50}),this.NeuvolGen=[],this.score=0,this.generationCount=0,this.pauseAfterGen=!1,this.endGen=!1,window.Neuroevolution=this.Neuvol,window.NeuvolGen=this.NeuvolGen,this.threshold=.5}initialize(){this.background.setOptions({width:this.canvas.width,height:this.canvas.height,speed:.5})}clearContext(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}update(){if(this.isPause||this.globalPause)return;this.background.update(),this.birds.length<1&&this.restart(),this.score++,this.pipeUsedInterval++,this.pipeInterval<=this.pipeUsedInterval&&(this.addPipe(),this.pipeUsedInterval=0);let t=0;for(const e of this.pipes)try{if(e.position.x+e.width>this.birds[0].position.x){t=e.height/this.canvas.height;break}}catch(t){}for(let e=0;e<this.NeuvolGen.length;e++)this.birds[e].alive&&(this.NeuvolGen[e].compute([this.birds[e].position.y/this.canvas.height,t])[0]>this.threshold&&this.birds[e].flap(),this.birds[e].update(),(this.endGen||this.birds[e].isDead(this.canvas.height,this.pipes))&&(this.birds[e].alive=!1,this.birdsAlive--,this.Neuvol.networkScore(this.NeuvolGen[e],this.score),this.birdsAlive<=0&&this.restart()));for(let t=0;t<this.pipes.length;t++)this.pipes[t].update(),this.pipes[t].isOut()&&(this.pipes.splice(t,1),t--)}display(){if(this.clearContext(),this.background.display(this.context),!this.globalPause){for(const t of this.pipes)try{t.display(this.context)}catch(t){}for(const t of this.birds)t.display(this.context)}}addPipe(){const{height:t,width:e}=this.canvas,r=t-140-200,n=Math.round(Math.random()*r)+70,i={position:{x:e,y:0},width:110,height:n,pos:"top",velocity:{x:3,y:0}},o={position:{x:e,y:n+200},width:110,height:t,pos:"bottom",velocity:{x:3,y:0}};this.pipes.push(new p(i)),this.pipes.push(new p(o))}addBird(e){e=Object.assign({alive:!0,position:{x:200,y:500},width:70,height:60,gravity:0,velocity:{y:.3,x:.3},jump:-6},e),this.birdsAlive++,this.birds.push(new class{constructor(e){this.position={x:0,y:0},this.width=0,this.height=0,this.alive=!1,this.gravity=0,this.velocity={x:0,y:0},this.jump=0,this.img=a(t),this.setOptions(e)}setOptions(t){Object.assign(this,t)}flap(){this.gravity=this.jump}isDead(t,e){const r=this.position.y,n=this.position.x;if(r>=t)return!0;if(r+this.height<=0)return!0;for(const t of e)try{const{x:e,y:i}=t.position,{width:o,height:s}=t;if(e-o>n)continue;if(!(n>=e+o||r>=i+s||n+this.width<=e||r+this.height<=i))return!0}catch(t){}return!1}update(){this.alive&&(this.gravity+=this.velocity.y,this.position.y+=this.gravity)}display(t){if(!this.alive)return;const{x:e,y:r}=this.position,{width:n,gravity:i}=this,o=c({width:this.img.width,height:this.img.height},{width:n});t.save(),t.translate(e,r),t.translate(o.width/2,o.height/2),t.rotate(Math.PI/2*i/20),t.drawImage(this.img,-o.width/2,-o.height/2,o.width,o.height),t.restore()}}(e))}onResize({width:t,height:e}){this.canvas.width=t,this.canvas.height=e,this.background.resize({width:t,height:e})}pause(){this.isPause=!0}resume(){this.isPause=!1}get state(){return!0===this.isPause?"pause":"play"}endGeneration(){this.endGen=!0}restart(){this.globalPause=!0,this.pipes.splice(0,this.pipes.length),this.birds.splice(0,this.birds.length),this.score=0,this.birdsAlive=0;for(let t=0;t<this.Neuvol.options.population;t++)this.addBird();try{this.NeuvolGen=this.Neuvol.nextGeneration()}catch(t){this.Neuvol.resetGeneration(),this.NeuvolGen=this.Neuvol.nextGeneration(),this.generationCount=-1}this.endGen=!1,this.generationCount++,this.globalPause=!1}exportData(){return this.Neuvol.exportData()}importData(t){t&&(this.generationCount=0),this.Neuvol.importData(t)}}(Ri);let Bi,Hi=60,$i=!1,Wi=0,Vi=!1;const Ji=new class{constructor(t){this.fps=0,this.timeArray=[],this.context=t,this.containerOpacity=.4,this.textProps={position:{x:0,y:0},preText:"",postText:""},this.containerProps={startingPoint:{x:0,y:0},endPoint:{x:0,y:0}}}text(t,e,r){this.textProps.position=t,this.textProps.preText=e,this.textProps.postText=r}container(t,e){this.containerProps={startingPoint:t,endPoint:e}}mark(){const t=performance.now();for(;this.timeArray.length>0&&this.timeArray[0]<=t-1e3;)this.timeArray.shift();this.timeArray.push(t),this.fps=this.timeArray.length,this.drawContainer(),this.drawText(String(this.fps))}drawContainer(){const t=this.context,{startingPoint:e,endPoint:r}=this.containerProps;t.beginPath(),t.globalAlpha=this.containerOpacity,t.fillStyle="#1e1e20",t.fillRect(e.x,e.y,r.x,r.y),t.fill(),t.closePath()}drawText(t){const e=this.context,{preText:r,postText:n,position:i}=this.textProps,o=`${r}${t}${n}`;e.beginPath(),e.globalAlpha=1,e.font="30px monospace",e.fillStyle="#58d130",e.fillText(o,i.x,i.y),e.closePath()}}(Ui.context);Ji.container({x:10,y:10},{x:180,y:60}),Ji.text({x:50,y:50},"","fps");const Xi=()=>{var t;Ui.update(),0===Hi?(t=Xi,Li.push(t),window.postMessage(Ci,"*")):60===Hi?Ii()(Xi):Bi=setTimeout(Xi,1e3/Hi)},Ki=()=>{Ui.display(),Fi.alive.innerHTML=String(Ui.birdsAlive),Ui.score>Wi&&(Wi=Ui.score),Ji.mark(),Fi.highest.innerHTML=String(Wi),Fi.score.innerHTML=String(Ui.score),Fi.generation.innerHTML=String(Ui.generationCount),Ii()(Ki)};window.addEventListener("DOMContentLoaded",(()=>{new h([g,u,t,l]).then((()=>{Ui.initialize(),Ui.onResize({width:1e3,height:1e3}),Ii()(Ki),Vi=!0,Di.game.toggle.innerHTML="Play",qi.innerHTML=String(Hi)}))})),Di.game.toggle.addEventListener("click",(()=>{if(Vi&&!$i)return Di.game.reset.click(),void(Di.game.toggle.innerHTML="Pause");"play"===Ui.state?(Ui.pause(),Di.game.toggle.innerHTML="Resume"):"pause"===Ui.state&&(Ui.resume(),Di.game.toggle.innerHTML="Pause")})),Di.game.reset.addEventListener("click",(()=>{Vi&&($i||Xi(),Di.game.toggle.innerHTML="play"===Ui.state?"Pause":"Resume",$i=!0,Ui.restart())})),Di.game.speedRange.addEventListener("input",(()=>{if(Vi){switch(parseInt(Di.game.speedRange.value)){case 0:Hi=60;break;case 1:Hi=256;break;case 2:Hi=512;break;case 3:Hi=700;break;case 4:Hi=1e3;break;case 5:return Hi=0,window.clearTimeout(Bi),$i&&Xi(),void(qi.innerHTML="MAX");case-1:Hi=30;break;default:Hi=10}qi.innerHTML=String(Hi)}})),Di.ai.export.addEventListener("click",(()=>{const t=Ui.exportData(),e=new Blob([JSON.stringify(t)],{type:"text/plain"}),r=document.createElement("a");r.setAttribute("href",URL.createObjectURL(e)),r.setAttribute("download","Neuroevolution-export.json"),r.style.display="none",document.body.appendChild(r),r.click(),r.remove()})),Di.ai.import.addEventListener("click",(()=>{const t=document.createElement("input"),e=new FileReader;t.setAttribute("type","file"),t.style.display="none",t.addEventListener("change",(()=>{null!=t.files[0]&&e.readAsText(t.files[0])})),e.onload=()=>{try{const t=JSON.parse(e.result);Ui.importData(t),alert("Imported")}catch(t){console.warn(t),alert("Failed to import")}},document.body.appendChild(t),t.click(),t.remove()})),Di.game.endGen.addEventListener("click",(()=>{Ui.endGeneration(),Di.game.toggle.click()}))})()})();