(()=>{var t={75:function(t){(function(){var e,n,r,o,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(t.exports=function(){return(e()-i)/1e6},n=process.hrtime,o=(e=function(){var t;return 1e9*(t=n())[0]+t[1]})(),s=1e9*process.uptime(),i=o-s):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},87:(t,e,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,i=["moz","webkit"],s="AnimationFrame",a=o["request"+s],c=o["cancel"+s]||o["cancelRequest"+s],h=0;!a&&h<i.length;h++)a=o[i[h]+"Request"+s],c=o[i[h]+"Cancel"+s]||o[i[h]+"CancelRequest"+s];if(!a||!c){var u=0,l=0,p=[];a=function(t){if(0===p.length){var e=r(),n=Math.max(0,16.666666666666668-(e-u));u=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return p.push({handle:++l,callback:t,cancelled:!1}),l},c=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){c.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=c}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";const t=function(){const t=window.MutationObserver||window.WebKitMutationObserver;return(e,n)=>{if(e&&1===e.nodeType){if(t){const r=new t(n);return r.observe(e,{childList:!0,subtree:!0}),r}e.addEventListener("DOMNodeInserted",n,!1),e.addEventListener("DOMNodeRemoved",n,!1)}}}();window.dataLayer=window.dataLayer||[];const e=t=>{const e=t.currentTarget||t.target;"A"!==(e.tagName||e.nodeName)&&"on-side"!==e.getAttribute("aria-label-navigate")||gtag("event","url_clicked",{addr:e.href,text:encodeURIComponent(e.innerText)})};!function(n){if(!window.location.protocol.toString().startsWith("https"))return;const r=document.createElement("script");r.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+n),r.async=!0,r.setAttribute("type","application/javascript"),document.getElementsByTagName("head")[0].appendChild(r),window.gtag=window.gtag||function(...t){window.dataLayer.push(...t)},gtag("js",new Date),gtag("config",n);const o=()=>{Array.prototype.forEach.call(document.getElementsByClassName("listen-on-click"),(t=>{(t=>{t.removeEventListener("click",e),t.addEventListener("click",e)})(t)}))};document.addEventListener("DOMContentLoaded",o),t(document.body,o)}("G-JPJZGW7PW6");const r=n.p+"4b8520c2f411bc0084f2616612f1c07b.png";class o{constructor(t){this.callback=()=>{},o.sources.push(...t);const e=[{test:/\.(png|jpe?g|gif)$/i,loader:o.img}],n=t.map((t=>new Promise(((n,r)=>{return o=this,i=void 0,a=function*(){for(const{test:o,loader:i}of e)if(o.test(t)){i(t,n,r);break}},new((s=void 0)||(s=Promise))((function(t,e){function n(t){try{c(a.next(t))}catch(t){e(t)}}function r(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){var o;e.done?t(e.value):(o=e.value,o instanceof s?o:new s((function(t){t(o)}))).then(n,r)}c((a=a.apply(o,i||[])).next())}));var o,i,s,a}))));Promise.all(n).then((t=>{t.forEach((t=>{o.assets.set(t.source,t.object)})),this.callback()}))}static img(t,e,n){const r=new Image;r.src=t,r.onload=()=>e({source:t,object:r}),r.onerror=()=>n(t)}then(t){this.callback=t}static get(t){return o.assets.get(t)}}o.assets=new Map,o.sources=[];const i=o.get,s=n.p+"9515c2eef10d98cc0700d0ae2fdab2df.png",a=n.p+"ed0226bd23a0ffc4dbfbc2fcff5eadb0.png",c=class{constructor(t){this.position={x:0,y:0},this.pos="",this.width=0,this.height=0,this.velocity={x:0,y:0},this.imgs={top:i(s),bottom:i(a)},this.setOptions(t)}setOptions(t){const e=Object.assign(this,t);this.position=e.position,this.width=e.width,this.height=e.height,this.velocity=e.velocity,this.imgs=e.imgs,this.pos=e.pos}isOut(){return this.position.x+this.width<0}update(){this.position.x-=this.velocity.x}display(t){const{x:e,y:n}=this.position,{width:r,height:o}=this;if("top"===this.pos){const i=this.imgs.top.height/this.imgs.top.width*r;t.drawImage(this.imgs.top,e,n+(o-i),r,i)}else if("bottom"===this.pos){const o=this.imgs.bottom.height/this.imgs.bottom.width*r;t.drawImage(this.imgs.bottom,e,n,r,o)}}},h=n.p+"4972cd415873dd0ddc6d1425a0a64ce9.png";class u{constructor(){this.contextAttr={width:0,height:0},this.position={x:0,y:0},this.speed=0,this.imgSrc="",this.img=void 0}resize({width:t,height:e}){this.contextAttr={width:t,height:e}}setOptions(t){let{speed:e,width:n,height:r,imgSrc:o}=Object.assign(this,t);""===o&&(this.imgSrc=h),this.img=i(this.imgSrc),this.contextAttr={width:n,height:r},this.speed=e}update(){this.position.x+=this.speed}display(t){const{width:e,height:n}=this.contextAttr,{x:r,y:o}=this.position,i=this.img.width,s=i/this.img.height,a=Math.ceil(e/(i*s))+1,c=e*s-(i+e);for(let e=0;e<a;e++)t.drawImage(this.img,e*i-r%i,o,c,n)}}class l{constructor(t,e){this.score=t,this.network=Object.assign({neurons:[],weights:[]},e)}}var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=function(t,e){return t===e||t!=t&&e!=e},g=d,f=function(t,e){for(var n=t.length;n--;)if(g(t[n][0],e))return n;return-1},y=f,b=Array.prototype.splice,v=f,w=f,m=f,_=function(){this.__data__=[],this.size=0},j=function(t){var e=this.__data__,n=y(e,t);return!(n<0||(n==e.length-1?e.pop():b.call(e,n,1),--this.size,0))},x=function(t){var e=this.__data__,n=v(e,t);return n<0?void 0:e[n][1]},O=function(t){return w(this.__data__,t)>-1},k=function(t,e){var n=this.__data__,r=m(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function A(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}A.prototype.clear=_,A.prototype.delete=j,A.prototype.get=x,A.prototype.has=O,A.prototype.set=k;var S=A,M=S,P="object"==typeof p&&p&&p.Object===Object&&p,G=P,N="object"==typeof self&&self&&self.Object===Object&&self,T=G||N||Function("return this")(),E=T.Symbol,L=E,C=Object.prototype,D=C.hasOwnProperty,I=C.toString,z=L?L.toStringTag:void 0,F=Object.prototype.toString,R=function(t){var e=D.call(t,z),n=t[z];try{t[z]=void 0;var r=!0}catch(t){}var o=I.call(t);return r&&(e?t[z]=n:delete t[z]),o},U=function(t){return F.call(t)},q=E?E.toStringTag:void 0,B=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":q&&q in Object(t)?R(t):U(t)},H=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},$=B,W=H,V=function(t){if(!W(t))return!1;var e=$(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=T["__core-js_shared__"],K=function(){var t=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),X=Function.prototype.toString,Z=function(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=V,Y=function(t){return!!K&&K in t},tt=H,et=Z,nt=/^\[object .+?Constructor\]$/,rt=Function.prototype,ot=Object.prototype,it=rt.toString,st=ot.hasOwnProperty,at=RegExp("^"+it.call(st).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ct=function(t){return!(!tt(t)||Y(t))&&(Q(t)?at:nt).test(et(t))},ht=function(t,e){return null==t?void 0:t[e]},ut=function(t,e){var n=ht(t,e);return ct(n)?n:void 0},lt=ut(T,"Map"),pt=ut(Object,"create"),dt=pt,gt=pt,ft=Object.prototype.hasOwnProperty,yt=pt,bt=Object.prototype.hasOwnProperty,vt=pt,wt=function(){this.__data__=dt?dt(null):{},this.size=0},mt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},_t=function(t){var e=this.__data__;if(gt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(e,t)?e[t]:void 0},jt=function(t){var e=this.__data__;return yt?void 0!==e[t]:bt.call(e,t)},xt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=wt,Ot.prototype.delete=mt,Ot.prototype.get=_t,Ot.prototype.has=jt,Ot.prototype.set=xt;var kt=Ot,At=S,St=lt,Mt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},Pt=function(t,e){var n=t.__data__;return Mt(e)?n["string"==typeof e?"string":"hash"]:n.map},Gt=Pt,Nt=Pt,Tt=Pt,Et=Pt,Lt=function(t){var e=Gt(this,t).delete(t);return this.size-=e?1:0,e},Ct=function(t){return Nt(this,t).get(t)},Dt=function(t){return Tt(this,t).has(t)},It=function(t,e){var n=Et(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=function(){this.size=0,this.__data__={hash:new kt,map:new(St||At),string:new kt}},zt.prototype.delete=Lt,zt.prototype.get=Ct,zt.prototype.has=Dt,zt.prototype.set=It;var Ft=S,Rt=lt,Ut=zt,qt=S,Bt=function(){this.__data__=new M,this.size=0},Ht=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},$t=function(t){return this.__data__.get(t)},Wt=function(t){return this.__data__.has(t)},Vt=function(t,e){var n=this.__data__;if(n instanceof Ft){var r=n.__data__;if(!Rt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ut(r)}return n.set(t,e),this.size=n.size,this};function Jt(t){var e=this.__data__=new qt(t);this.size=e.size}Jt.prototype.clear=Bt,Jt.prototype.delete=Ht,Jt.prototype.get=$t,Jt.prototype.has=Wt,Jt.prototype.set=Vt;var Kt=Jt,Xt=ut,Zt=function(){try{var t=Xt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Qt=Zt,Yt=function(t,e,n){"__proto__"==e&&Qt?Qt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},te=Yt,ee=d,ne=Object.prototype.hasOwnProperty,re=function(t,e,n){var r=t[e];ne.call(t,e)&&ee(r,n)&&(void 0!==n||e in t)||te(t,e,n)},oe=re,ie=Yt,se=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?ie(n,a,c):oe(n,a,c)}return n},ae=function(t){return null!=t&&"object"==typeof t},ce=B,he=ae,ue=function(t){return he(t)&&"[object Arguments]"==ce(t)},le=ae,pe=Object.prototype,de=pe.hasOwnProperty,ge=pe.propertyIsEnumerable,fe=ue(function(){return arguments}())?ue:function(t){return le(t)&&de.call(t,"callee")&&!ge.call(t,"callee")},ye=fe,be=Array.isArray,ve={},we={get exports(){return ve},set exports(t){ve=t}},me=function(){return!1};!function(t,e){var n=T,r=me,o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,s=i&&i.exports===o?n.Buffer:void 0,a=(s?s.isBuffer:void 0)||r;t.exports=a}(we,ve);var _e=/^(?:0|[1-9]\d*)$/,je=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},xe=B,Oe=je,ke=ae,Ae={};Ae["[object Float32Array]"]=Ae["[object Float64Array]"]=Ae["[object Int8Array]"]=Ae["[object Int16Array]"]=Ae["[object Int32Array]"]=Ae["[object Uint8Array]"]=Ae["[object Uint8ClampedArray]"]=Ae["[object Uint16Array]"]=Ae["[object Uint32Array]"]=!0,Ae["[object Arguments]"]=Ae["[object Array]"]=Ae["[object ArrayBuffer]"]=Ae["[object Boolean]"]=Ae["[object DataView]"]=Ae["[object Date]"]=Ae["[object Error]"]=Ae["[object Function]"]=Ae["[object Map]"]=Ae["[object Number]"]=Ae["[object Object]"]=Ae["[object RegExp]"]=Ae["[object Set]"]=Ae["[object String]"]=Ae["[object WeakMap]"]=!1;var Se=function(t){return function(e){return t(e)}},Me={},Pe={get exports(){return Me},set exports(t){Me=t}};!function(t,e){var n=P,r=e&&!e.nodeType&&e,o=r&&t&&!t.nodeType&&t,i=o&&o.exports===r&&n.process,s=function(){try{return o&&o.require&&o.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=s}(Pe,Me);var Ge=function(t){return ke(t)&&Oe(t.length)&&!!Ae[xe(t)]},Ne=Se,Te=Me&&Me.isTypedArray,Ee=Te?Ne(Te):Ge,Le=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},Ce=ye,De=be,Ie=ve,ze=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&_e.test(t))&&t>-1&&t%1==0&&t<e},Fe=Ee,Re=Object.prototype.hasOwnProperty,Ue=function(t,e){var n=De(t),r=!n&&Ce(t),o=!n&&!r&&Ie(t),i=!n&&!r&&!o&&Fe(t),s=n||r||o||i,a=s?Le(t.length,String):[],c=a.length;for(var h in t)!e&&!Re.call(t,h)||s&&("length"==h||o&&("offset"==h||"parent"==h)||i&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||ze(h,c))||a.push(h);return a},qe=Object.prototype,Be=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||qe)},He=function(t,e){return function(n){return t(e(n))}},$e=He(Object.keys,Object),We=Be,Ve=$e,Je=Object.prototype.hasOwnProperty,Ke=V,Xe=je,Ze=function(t){return null!=t&&Xe(t.length)&&!Ke(t)},Qe=Ue,Ye=function(t){if(!We(t))return Ve(t);var e=[];for(var n in Object(t))Je.call(t,n)&&"constructor"!=n&&e.push(n);return e},tn=Ze,en=function(t){return tn(t)?Qe(t):Ye(t)},nn=se,rn=en,on=H,sn=Be,an=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},cn=Object.prototype.hasOwnProperty,hn=Ue,un=function(t){if(!on(t))return an(t);var e=sn(t),n=[];for(var r in t)("constructor"!=r||!e&&cn.call(t,r))&&n.push(r);return n},ln=Ze,pn=function(t){return ln(t)?hn(t,!0):un(t)},dn=se,gn=pn,fn={},yn={get exports(){return fn},set exports(t){fn=t}};!function(t,e){var n=T,r=e&&!e.nodeType&&e,o=r&&t&&!t.nodeType&&t,i=o&&o.exports===r?n.Buffer:void 0,s=i?i.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}(yn,fn);var bn=function(){return[]},vn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s)}return i},wn=bn,mn=Object.prototype.propertyIsEnumerable,_n=Object.getOwnPropertySymbols,jn=_n?function(t){return null==t?[]:(t=Object(t),vn(_n(t),(function(e){return mn.call(t,e)})))}:wn,xn=jn,On=se,kn=xn,An=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t},Sn=He(Object.getPrototypeOf,Object),Mn=An,Pn=Sn,Gn=xn,Nn=bn,Tn=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Mn(e,Gn(t)),t=Pn(t);return e}:Nn,En=se,Ln=Tn,Cn=An,Dn=be,In=function(t,e,n){var r=e(t);return Dn(t)?r:Cn(r,n(t))},zn=In,Fn=xn,Rn=en,Un=In,qn=Tn,Bn=pn,Hn=ut(T,"DataView"),$n=lt,Wn=ut(T,"Promise"),Vn=ut(T,"Set"),Jn=ut(T,"WeakMap"),Kn=B,Xn=Z,Zn="[object Map]",Qn="[object Promise]",Yn="[object Set]",tr="[object WeakMap]",er="[object DataView]",nr=Xn(Hn),rr=Xn($n),or=Xn(Wn),ir=Xn(Vn),sr=Xn(Jn),ar=Kn;(Hn&&ar(new Hn(new ArrayBuffer(1)))!=er||$n&&ar(new $n)!=Zn||Wn&&ar(Wn.resolve())!=Qn||Vn&&ar(new Vn)!=Yn||Jn&&ar(new Jn)!=tr)&&(ar=function(t){var e=Kn(t),n="[object Object]"==e?t.constructor:void 0,r=n?Xn(n):"";if(r)switch(r){case nr:return er;case rr:return Zn;case or:return Qn;case ir:return Yn;case sr:return tr}return e});var cr=ar,hr=Object.prototype.hasOwnProperty,ur=T.Uint8Array,lr=function(t){var e=new t.constructor(t.byteLength);return new ur(e).set(new ur(t)),e},pr=lr,dr=/\w*$/,gr=E?E.prototype:void 0,fr=gr?gr.valueOf:void 0,yr=lr,br=lr,vr=function(t,e){var n=e?pr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},wr=function(t){var e=new t.constructor(t.source,dr.exec(t));return e.lastIndex=t.lastIndex,e},mr=function(t){return fr?Object(fr.call(t)):{}},_r=function(t,e){var n=e?yr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},jr=H,xr=Object.create,Or=function(){function t(){}return function(e){if(!jr(e))return{};if(xr)return xr(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),kr=Or,Ar=Sn,Sr=Be,Mr=cr,Pr=ae,Gr=function(t){return Pr(t)&&"[object Map]"==Mr(t)},Nr=Se,Tr=Me&&Me.isMap,Er=Tr?Nr(Tr):Gr,Lr=cr,Cr=ae,Dr=function(t){return Cr(t)&&"[object Set]"==Lr(t)},Ir=Se,zr=Me&&Me.isSet,Fr=zr?Ir(zr):Dr,Rr=Kt,Ur=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},qr=re,Br=function(t,e){return t&&nn(e,rn(e),t)},Hr=function(t,e){return t&&dn(e,gn(e),t)},$r=fn,Wr=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e},Vr=function(t,e){return On(t,kn(t),e)},Jr=function(t,e){return En(t,Ln(t),e)},Kr=function(t){return zn(t,Rn,Fn)},Xr=function(t){return Un(t,Bn,qn)},Zr=cr,Qr=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&hr.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Yr=function(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return br(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return vr(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return _r(t,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return wr(t);case"[object Symbol]":return mr(t)}},to=function(t){return"function"!=typeof t.constructor||Sr(t)?{}:kr(Ar(t))},eo=be,no=ve,ro=Er,oo=H,io=Fr,so=en,ao=pn,co="[object Arguments]",ho="[object Function]",uo="[object Object]",lo={};lo[co]=lo["[object Array]"]=lo["[object ArrayBuffer]"]=lo["[object DataView]"]=lo["[object Boolean]"]=lo["[object Date]"]=lo["[object Float32Array]"]=lo["[object Float64Array]"]=lo["[object Int8Array]"]=lo["[object Int16Array]"]=lo["[object Int32Array]"]=lo["[object Map]"]=lo["[object Number]"]=lo[uo]=lo["[object RegExp]"]=lo["[object Set]"]=lo["[object String]"]=lo["[object Symbol]"]=lo["[object Uint8Array]"]=lo["[object Uint8ClampedArray]"]=lo["[object Uint16Array]"]=lo["[object Uint32Array]"]=!0,lo["[object Error]"]=lo[ho]=lo["[object WeakMap]"]=!1;var po=function t(e,n,r,o,i,s){var a,c=1&n,h=2&n,u=4&n;if(r&&(a=i?r(e,o,i,s):r(e)),void 0!==a)return a;if(!oo(e))return e;var l=eo(e);if(l){if(a=Qr(e),!c)return Wr(e,a)}else{var p=Zr(e),d=p==ho||"[object GeneratorFunction]"==p;if(no(e))return $r(e,c);if(p==uo||p==co||d&&!i){if(a=h||d?{}:to(e),!c)return h?Jr(e,Hr(a,e)):Vr(e,Br(a,e))}else{if(!lo[p])return i?e:{};a=Yr(e,p,c)}}s||(s=new Rr);var g=s.get(e);if(g)return g;s.set(e,a),io(e)?e.forEach((function(o){a.add(t(o,n,r,o,e,s))})):ro(e)&&e.forEach((function(o,i){a.set(i,t(o,n,r,i,e,s))}));var f=l?void 0:(u?h?Xr:Kr:h?ao:so)(e);return Ur(f||e,(function(o,i){f&&(o=e[i=o]),qr(a,i,t(o,n,r,i,e,s))})),a},go=function(t){return po(t,5)},fo=ye,yo=be,bo=E?E.isConcatSpreadable:void 0,vo=An,wo=function(t){return yo(t)||fo(t)||!!(bo&&t&&t[bo])},mo=function t(e,n,r,o,i){var s=-1,a=e.length;for(r||(r=wo),i||(i=[]);++s<a;){var c=e[s];n>0&&r(c)?n>1?t(c,n-1,r,o,i):vo(i,c):o||(i[i.length]=c)}return i},_o=function(t){return null!=t&&t.length?mo(t,1):[]};class jo{constructor(t){this.genomes=[],this.ne=t}addGenome(t){for(let e=0;e<this.genomes.length;e++)if(this.ne.options.scoreSort<0){if(t.score>this.genomes[e].score)return this.genomes.splice(e,0,t),e}else if(t.score<this.genomes[e].score)return this.genomes.splice(e,0,t),e;return this.genomes.push(t),0}generateNextGeneration(){if(0===this.genomes.length)throw new Error("No genome to start with");const t=[],{elitism:e,population:n,randomBehaviour:r}=this.ne.options,o=Math.round(e*n),i=Math.round(r*n);for(let e=0;e<o;e++)t.length<n&&t.push(go(this.genomes[e].network));if(i>0&&t.length<n)for(let e=0;e<i;e++){const e=this.genomes[0].network.weights.length,n={neurons:_o(this.ne.options.network),weights:[]};for(let t=0;t<e;t++)n.weights[t]=this.randomClamped();t.push(n)}if(t.length>=n)return t.slice(0,n);let s=1;for(;;){for(let e=0;e<s;e++){const r=this.breeder(this.genomes[e],this.genomes[s]);for(const e of r)if(t.push(e.network),t.length>=n)return t}s++,s>=this.genomes.length&&(s=0)}}breeder(t,e){let{nbChild:n}=this.ne.options;return n=n>0?n:1,this.randomClamped()<0?this.breeder_1(t,e,n):this.breeder_2(t,e,n)}breeder_1(t,e,n){const r=[],{mutationRate:o,crossoverFactor:i}=this.ne.options;for(let s=0;s<n;s++){const n=new l(t.score,t.network);for(let t=0;t<e.network.weights.length;t++)Math.random()<=i&&(n.network.weights[t]=e.network.weights[t]);for(let t=0;t<n.network.weights.length;t++)Math.random()<=o&&(n.network.weights[t]+=Math.random()*o*2-o);r.push(n)}return r}breeder_2(t,e,n){const r=[],{mutationRate:o}=this.ne.options,i=e.network.weights.length;for(let s=0;s<n;s++){const n=new l(t.score,t.network);let s=Math.floor(Math.random()*i),a=Math.floor(Math.random()*i);s>a&&([s,a]=[a,s]);for(let t=s;t<a;t++)n.network.weights[t]=e.network.weights[t];for(let t=0;t<n.network.weights.length;t++)Math.random()<=o&&(n.network.weights[t]+=Math.random()*o*2-o);r.push(n)}return r}randomClamped(){return 2*Math.random()-1}}class xo{constructor(){this.value=0,this.weights=[]}populate(t){for(let e=0;e<t;e++)this.weights.push(this.randomClamped())}resetWeights(){this.weights=[]}randomClamped(){return 2*Math.random()-1}}class Oo{constructor(){this.neurons=[]}populate(t,e){for(let n=0;n<t;n++){const t=new xo;t.populate(e),this.neurons.push(t)}}}class ko{constructor(){this.__layers__=[]}get layers(){return this.__layers__}generateNetworkLayers(t,e,n){let r=0,o=0;const i=new Oo,s=new Oo;for(i.populate(t,o),s.populate(n,e[e.length-1]),this.__layers__.push(i),o=t,r++;r<=e.length;r++){const t=new Oo;t.populate(e[r-1],o),this.__layers__.push(t),o=e[r-1]}this.__layers__.push(s)}getCopyOfTheNetwork(){const t={neurons:[],weights:[]},e=this.__layers__.length;for(let n=0;n<e;n++){const e=this.__layers__[n].neurons,r=e.length;t.neurons.push(r);for(let n=0;n<r;n++)t.weights.splice(t.weights.length,0,...e[n].weights)}return t}loadNetworkWithData(t){const e=t.neurons.length;let n=0,r=0;this.resetNetwork();for(let o=0;o<e;o++){const e=new Oo;e.populate(t.neurons[o],r);const i=e.neurons;for(const e of i){const r=e.weights.length;for(let o=0;o<r;o++)e.weights[o]=t.weights[n],n++}this.__layers__.push(e),r=t.neurons[o]}}compute(t){const e=t.length,n=this.layers.length,r=[];for(let n=0;n<e;n++){const e=this.layers[0];this.layers[0]&&e.neurons[n]&&(e.neurons[n].value=t[n])}for(let t=1;t<n;t++){const e=this.layers[t-1],n=this.layers[t],r=e.neurons.length,o=n.neurons.length;for(let t=0;t<o;t++){let o=0;for(let i=0;i<r;i++)o+=e.neurons[i].value*n.neurons[t].weights[i];n.neurons[t].value=this.activation(o)}}const o=this.layers[n-1],i=o.neurons.length;for(let t=0;t<i;t++)r.push(o.neurons[t].value);return r}activation(t){const e=-t/1;return 1/(1+Math.exp(e))}resetNetwork(){this.__layers__=[]}}class Ao{constructor(t){this.generations=[],this.ne=t}firstGeneration(t,e,n){const r=[];for(let o=0;o<this.ne.options.population;o++){const o=new ko;o.generateNetworkLayers(t,e,n),r.push(o.getCopyOfTheNetwork())}return this.generations.push(new jo(this.ne)),r}nextGeneration(){if(0===this.generations.length)throw new TypeError("Must call method Generations.firstGeneration() first.");const t=this.generations[this.generations.length-1].generateNextGeneration();return this.generations.push(new jo(this.ne)),t}addGenome(t){if(0===this.generations.length)throw new Error("Cannot insert genome. Generations.generations has no item");return this.generations[this.generations.length-1].addGenome(t)}}class So{constructor(t){this.configuration=Object.assign({network:[1,[2],1],population:50,elitism:.2,randomBehaviour:.2,mutationRate:.1,historic:0,lowHistoric:!1,scoreSort:-1,nbChild:1,crossoverFactor:.5},t),this.generations=new Ao(this),this.exportableGenerations=[]}get options(){return this.configuration}setConfiguration(t){this.configuration=Object.assign(this.configuration,t)}resetGeneration(){this.generations=new Ao(this)}nextGeneration(){let t=[];const e=this.generations.generations;this.exportableGenerations=go(e),t=0===e.length?this.generations.firstGeneration(this.options.network[0],this.options.network[1],this.options.network[2]):this.generations.nextGeneration();const n=[];for(const e of t){const t=new ko;t.loadNetworkWithData(e),n.push(t)}if(this.options.lowHistoric&&e.length>1){const t=e[e.length-2].genomes;t.splice(0,t.length-1)}return-1!==this.options.historic&&e.length>this.options.historic+1&&e.splice(0,e.length-(this.options.historic+1)),n}exportData(){const t={config:this.options,data:[]};return this.exportableGenerations.length<1||(t.data=this.exportableGenerations.map((t=>t.genomes.map((t=>({network:t.network,score:t.score})))))),t}importData(t){t.config&&this.setConfiguration(t.config),t.data.forEach((t=>{const e=new jo(this);t.forEach((({score:t,network:n})=>{e.addGenome(new l(t,n))})),this.generations.generations.push(e)}))}networkScore(t,e){const n=new l(e,t.getCopyOfTheNetwork());return this.generations.addGenome(n)}}const Mo=[],Po="zero-timeout-message";window.addEventListener("message",(t=>{if(t.source==window&&t.data===Po&&(t.stopPropagation(),Mo.length>0)){const t=Mo.shift();t&&t()}}),!0);var Go,No=n(87),To=n.n(No);Go=window.location.href.toString(),window.dataLayer.push({event:"pageview",url:Go});const Eo={game:{speedRange:document.querySelector("#gs-speed"),toggle:document.querySelector("#gs-toggle"),reset:document.querySelector("#gs-reset"),endGen:document.querySelector("#gs-end-gen")},ai:{toggle:document.querySelector("#as-toggle"),reset:document.querySelector("#as-reset"),import:document.querySelector("#as-imp"),export:document.querySelector("#as-exp")}},Lo={alive:document.querySelector("#alive"),score:document.querySelector("#score"),highest:document.querySelector("#highest"),generation:document.querySelector("#generation")},Co=document.querySelector("#main-canvas"),Do=document.querySelector("#current-speed"),Io=new class{constructor(t){this.background=new u,this.birds=[],this.pipes=[],this.canvas=t,this.context=this.canvas.getContext("2d"),this.isPause=!1,this.pipeInterval=170,this.pipeUsedInterval=0,this.birdsAlive=0,this.globalPause=!1,this.Neuvol=new So({network:[2,[3],1],population:50}),this.NeuvolGen=[],this.score=0,this.generationCount=0,this.pauseAfterGen=!1,this.endGen=!1,window.Neuroevolution=this.Neuvol,this.threshold=.5}initialize(){this.background.setOptions({width:this.canvas.width,height:this.canvas.height,speed:.5})}clearContext(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}update(){if(this.isPause||this.globalPause)return;this.background.update(),this.birds.length<1&&this.restart(),this.score++,this.pipeUsedInterval++,this.pipeInterval<=this.pipeUsedInterval&&(this.addPipe(),this.pipeUsedInterval=0);let t=0;for(const e of this.pipes)try{if(e.position.x+e.width>this.birds[0].position.x){t=e.height/this.canvas.height;break}}catch(t){}for(let e=0;e<this.NeuvolGen.length;e++)this.birds[e].alive&&(this.NeuvolGen[e].compute([this.birds[e].position.y/this.canvas.height,t])[0]>this.threshold&&this.birds[e].flap(),this.birds[e].update(),(this.endGen||this.birds[e].isDead(this.canvas.height,this.pipes))&&(this.birds[e].alive=!1,this.birdsAlive--,this.Neuvol.networkScore(this.NeuvolGen[e],this.score),this.birdsAlive<=0&&this.restart()));for(let t=0;t<this.pipes.length;t++)this.pipes[t].update(),this.pipes[t].isOut()&&(this.pipes.splice(t,1),t--)}display(){if(this.clearContext(),this.background.display(this.context),!this.globalPause){for(const t of this.pipes)try{t.display(this.context)}catch(t){}for(const t of this.birds)t.display(this.context)}}addPipe(){const{height:t,width:e}=this.canvas,n=t-140-200,r=Math.round(Math.random()*n)+70,o={position:{x:e,y:0},width:110,height:r,pos:"top",velocity:{x:3,y:0}},i={position:{x:e,y:r+200},width:110,height:t,pos:"bottom",velocity:{x:3,y:0}};this.pipes.push(new c(o)),this.pipes.push(new c(i))}addBird(t){t=Object.assign({alive:!0,position:{x:200,y:500},width:70,height:60,gravity:0,velocity:{y:.3,x:.3},jump:-6},t),this.birdsAlive++,this.birds.push(new class{constructor(t){this.position={x:0,y:0},this.width=0,this.height=0,this.alive=!1,this.gravity=0,this.velocity={x:0,y:0},this.jump=0,this.img=i(r),this.setOptions(t)}setOptions(t){const e=Object.assign(this,t);this.position=e.position,this.width=e.width,this.height=e.height,this.alive=e.alive,this.gravity=e.gravity,this.velocity=e.velocity,this.jump=e.jump,this.img=e.img}flap(){this.gravity=this.jump}isDead(t,e){const n=this.position.y,r=this.position.x;if(n>=t)return!0;if(n+this.height<=0)return!0;for(const t of e)try{const{x:e,y:o}=t.position,{width:i,height:s}=t;if(e-i>r)continue;if(!(r>=e+i||n>=o+s||r+this.width<=e||n+this.height<=o))return!0}catch(t){}return!1}update(){this.alive&&(this.gravity+=this.velocity.y,this.position.y+=this.gravity)}display(t){if(!this.alive)return;const{x:e,y:n}=this.position,{width:r,height:o,gravity:i,img:s}=this;t.save(),t.translate(e,n),t.translate(r/2,o/2),t.rotate(Math.PI/2*i/20),t.drawImage(s,-r/2,-o/2,r,o),t.restore()}}(t))}onResize({width:t,height:e}){this.canvas.width=t,this.canvas.height=e,this.background.resize({width:t,height:e})}pause(){this.isPause=!0}resume(){this.isPause=!1}get state(){return!0===this.isPause?"pause":"play"}endGeneration(){this.endGen=!0}restart(){this.globalPause=!0,this.pipes.splice(0,this.pipes.length),this.birds.splice(0,this.birds.length),this.score=0,this.birdsAlive=0;for(let t=0;t<this.Neuvol.options.population;t++)this.addBird();try{this.NeuvolGen=this.Neuvol.nextGeneration()}catch(t){this.Neuvol.resetGeneration(),this.NeuvolGen=this.Neuvol.nextGeneration(),this.generationCount=-1}this.endGen=!1,this.generationCount++,this.globalPause=!1}exportData(){return this.Neuvol.exportData()}importData(t){t&&(this.generationCount=0),this.Neuvol.importData(t)}}(Co);let zo,Fo=60,Ro=!1,Uo=0,qo=!1;const Bo=()=>{var t;Io.update(),0===Fo?(t=Bo,Mo.push(t),window.postMessage(Po,"*")):60===Fo?To()(Bo):zo=setTimeout(Bo,1e3/Fo)},Ho=()=>{Io.display(),Lo.alive.innerHTML=String(Io.birdsAlive),Io.score>Uo&&(Uo=Io.score),Lo.highest.innerHTML=String(Uo),Lo.score.innerHTML=String(Io.score),Lo.generation.innerHTML=String(Io.generationCount),To()(Ho)};window.addEventListener("DOMContentLoaded",(()=>{new o([h,s,r,a]).then((()=>{Io.initialize(),Io.onResize({width:1e3,height:1e3}),To()(Ho),qo=!0,Eo.game.toggle.innerHTML="Play",Do.innerHTML=String(Fo)}))})),Eo.game.toggle.addEventListener("click",(()=>{if(qo&&!Ro)return Eo.game.reset.click(),void(Eo.game.toggle.innerHTML="Pause");"play"===Io.state?(Io.pause(),Eo.game.toggle.innerHTML="Resume"):"pause"===Io.state&&(Io.resume(),Eo.game.toggle.innerHTML="Pause")})),Eo.game.reset.addEventListener("click",(()=>{qo&&(Ro||Bo(),Ro=!0,Io.restart())})),Eo.game.speedRange.addEventListener("input",(()=>{if(qo){switch(parseInt(Eo.game.speedRange.value)){case 0:Fo=60;break;case 1:Fo=256;break;case 2:Fo=512;break;case 3:Fo=700;break;case 4:Fo=1e3;break;case 5:return Fo=0,window.clearTimeout(zo),Ro&&Bo(),void(Do.innerHTML="MAX");case-1:Fo=30;break;default:Fo=10}Do.innerHTML=String(Fo)}})),Eo.ai.export.addEventListener("click",(()=>{const t=Io.exportData(),e=new Blob([JSON.stringify(t)],{type:"text/plain"}),n=document.createElement("a");n.setAttribute("href",URL.createObjectURL(e)),n.setAttribute("download","Neuroevolution-export.json"),n.style.display="none",document.body.appendChild(n),n.click(),n.remove()})),Eo.ai.import.addEventListener("click",(()=>{const t=document.createElement("input"),e=new FileReader;t.setAttribute("type","file"),t.style.display="none",t.addEventListener("change",(()=>{null!=t.files[0]&&e.readAsText(t.files[0])})),e.onload=()=>{try{const t=JSON.parse(e.result);Io.importData(t),alert("Imported")}catch(t){console.warn(t),alert("Failed to import")}},document.body.appendChild(t),t.click(),t.remove()})),Eo.game.endGen.addEventListener("click",(()=>{Io.endGeneration(),Eo.game.toggle.click()}))})()})();