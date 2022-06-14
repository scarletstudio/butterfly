var x1=Object.defineProperty,b1=Object.defineProperties;var P1=Object.getOwnPropertyDescriptors;var lo=Object.getOwnPropertySymbols;var Ih=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable;var kh=(t,e,n)=>e in t?x1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,be=(t,e)=>{for(var n in e||(e={}))Ih.call(e,n)&&kh(t,n,e[n]);if(lo)for(var n of lo(e))Th.call(e,n)&&kh(t,n,e[n]);return t},yt=(t,e)=>b1(t,P1(e));var Wl=(t,e)=>{var n={};for(var r in t)Ih.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&lo)for(var r of lo(t))e.indexOf(r)<0&&Th.call(t,r)&&(n[r]=t[r]);return n};const R1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};R1();var R={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=Symbol.for("react.element"),A1=Symbol.for("react.portal"),O1=Symbol.for("react.fragment"),L1=Symbol.for("react.strict_mode"),M1=Symbol.for("react.profiler"),D1=Symbol.for("react.provider"),F1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),z1=Symbol.for("react.suspense"),$1=Symbol.for("react.memo"),B1=Symbol.for("react.lazy"),Nh=Symbol.iterator;function j1(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var Cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sg=Object.assign,kg={};function ui(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Cg}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=ui.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Cg}var hd=fd.prototype=new Ig;hd.constructor=fd;Sg(hd,ui.prototype);hd.isPureReactComponent=!0;var xh=Array.isArray,Tg=Object.prototype.hasOwnProperty,pd={current:null},Ng={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,r)&&!Ng.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zs,type:t,key:s,ref:o,props:i,_owner:pd.current}}function W1(t,e){return{$$typeof:zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===zs}function H1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?H1(""+t.key):e.toString(36)}function Lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zs:case A1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hl(o,0):r,xh(i)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),Lo(i,e,n,"",function(u){return u})):i!=null&&(md(i)&&(i=W1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Hl(s,a);o+=Lo(s,e,n,l,i)}else if(l=j1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Hl(s,a++),o+=Lo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uo(t,e,n){if(t==null)return t;var r=[],i=0;return Lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function V1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},Mo={transition:null},q1={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:pd};H.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=ui;H.Fragment=O1;H.Profiler=M1;H.PureComponent=fd;H.StrictMode=L1;H.Suspense=z1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!Ng.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zs,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:F1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:D1,_context:t},t.Consumer=t};H.createElement=xg;H.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:U1,render:t}};H.isValidElement=md;H.lazy=function(t){return{$$typeof:B1,_payload:{_status:-1,_result:t},_init:V1}};H.memo=function(t,e){return{$$typeof:$1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Mo.transition;Mo.transition={};try{t()}finally{Mo.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Le.current.useCallback(t,e)};H.useContext=function(t){return Le.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};H.useEffect=function(t,e){return Le.current.useEffect(t,e)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Le.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};H.useRef=function(t){return Le.current.useRef(t)};H.useState=function(t){return Le.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.0.0-fc46dba67-20220329";R.exports=H;var bg=R.exports;function Xo(){return Xo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xo.apply(this,arguments)}var zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zn||(zn={}));var Ph=function(t){return t},Rh="beforeunload",G1="popstate";function Y1(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var w=r.location,k=w.pathname,M=w.search,D=w.hash,re=i.state||{};return[re.idx,Ph({pathname:k,search:M,hash:D,state:re.usr||null,key:re.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var w=zn.Pop,k=s(),M=k[0],D=k[1];if(g.length){if(M!=null){var re=c-M;re&&(o={action:w,location:D,retry:function(){C(re*-1)}},C(re))}}else p(w)}}r.addEventListener(G1,a);var l=zn.Pop,u=s(),c=u[0],d=u[1],f=Oh(),g=Oh();c==null&&(c=0,i.replaceState(Xo({},i.state,{idx:c}),""));function y(w){return typeof w=="string"?w:Mu(w)}function E(w,k){return k===void 0&&(k=null),Ph(Xo({pathname:d.pathname,hash:"",search:""},typeof w=="string"?dr(w):w,{state:k,key:K1()}))}function b(w,k){return[{usr:w.state,key:w.key,idx:k},y(w)]}function m(w,k,M){return!g.length||(g.call({action:w,location:k,retry:M}),!1)}function p(w){l=w;var k=s();c=k[0],d=k[1],f.call({action:l,location:d})}function v(w,k){var M=zn.Push,D=E(w,k);function re(){v(w,k)}if(m(M,D,re)){var Ze=b(D,c+1),Pt=Ze[0],An=Ze[1];try{i.pushState(Pt,"",An)}catch{r.location.assign(An)}p(M)}}function _(w,k){var M=zn.Replace,D=E(w,k);function re(){_(w,k)}if(m(M,D,re)){var Ze=b(D,c),Pt=Ze[0],An=Ze[1];i.replaceState(Pt,"",An),p(M)}}function C(w){i.go(w)}var N={get action(){return l},get location(){return d},createHref:y,push:v,replace:_,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(k){return f.push(k)},block:function(k){var M=g.push(k);return g.length===1&&r.addEventListener(Rh,Ah),function(){M(),g.length||r.removeEventListener(Rh,Ah)}}};return N}function Ah(t){t.preventDefault(),t.returnValue=""}function Oh(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function K1(){return Math.random().toString(36).substr(2,8)}function Mu(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function dr(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const gd=R.exports.createContext(null),vd=R.exports.createContext(null),ci=R.exports.createContext({outlet:null,matches:[]});function Tt(t,e){if(!t)throw new Error(e)}function Q1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?dr(e):e,i=Ag(r.pathname||"/",n);if(i==null)return null;let s=Pg(t);X1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ow(s[a],i);return o}function Pg(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Tt(!1),o.relativePath=o.relativePath.slice(r.length));let a=fn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Tt(!1),Pg(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:iw(a,i.index),routesMeta:l})}),e}function X1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:\w+$/,Z1=3,ew=2,tw=1,nw=10,rw=-2,Lh=t=>t==="*";function iw(t,e){let n=t.split("/"),r=n.length;return n.some(Lh)&&(r+=rw),e&&(r+=ew),n.filter(i=>!Lh(i)).reduce((i,s)=>i+(J1.test(s)?Z1:s===""?tw:nw),r)}function sw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ow(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:Og(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function aw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=uw(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function uw(t,e){try{return decodeURIComponent(t)}catch{return t}}function cw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?dr(t):t;return{pathname:n?n.startsWith("/")?n:dw(n,e):e,search:hw(r),hash:pw(i)}}function dw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rg(t,e,n){let r=typeof t=="string"?dr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=cw(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function fw(t){return t===""||t.pathname===""?"/":typeof t=="string"?dr(t).pathname:t.pathname}function Ag(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),Og=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),hw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mw(t){$s()||Tt(!1);let{basename:e,navigator:n}=R.exports.useContext(gd),{hash:r,pathname:i,search:s}=Mg(t),o=i;if(e!=="/"){let a=fw(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):fn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function $s(){return R.exports.useContext(vd)!=null}function Ya(){return $s()||Tt(!1),R.exports.useContext(vd).location}function yd(){$s()||Tt(!1);let{basename:t,navigator:e}=R.exports.useContext(gd),{matches:n}=R.exports.useContext(ci),{pathname:r}=Ya(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=R.exports.useRef(!1);return R.exports.useEffect(()=>{s.current=!0}),R.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Rg(a,JSON.parse(i),r);t!=="/"&&(u.pathname=fn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const gw=R.exports.createContext(null);function vw(t){let e=R.exports.useContext(ci).outlet;return e&&R.exports.createElement(gw.Provider,{value:t},e)}function Lg(){let{matches:t}=R.exports.useContext(ci),e=t[t.length-1];return e?e.params:{}}function Mg(t){let{matches:e}=R.exports.useContext(ci),{pathname:n}=Ya(),r=JSON.stringify(e.map(i=>i.pathnameBase));return R.exports.useMemo(()=>Rg(t,JSON.parse(r),n),[t,r,n])}function yw(t,e){$s()||Tt(!1);let{matches:n}=R.exports.useContext(ci),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ya(),a;if(e){var l;let f=typeof e=="string"?dr(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||Tt(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=Q1(t,{pathname:c});return _w(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:fn([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:fn([s,f.pathnameBase])})),n)}function _w(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>R.exports.createElement(ci.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function ww(t){return vw(t.context)}function Pe(t){Tt(!1)}function Ew(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zn.Pop,navigator:s,static:o=!1}=t;$s()&&Tt(!1);let a=Og(e),l=R.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,y=R.exports.useMemo(()=>{let E=Ag(u,a);return E==null?null:{pathname:E,search:c,hash:d,state:f,key:g}},[a,u,c,d,f,g]);return y==null?null:R.exports.createElement(gd.Provider,{value:l},R.exports.createElement(vd.Provider,{children:n,value:{location:y,navigationType:i}}))}function Cw(t){let{children:e,location:n}=t;return yw(Du(e),n)}function Du(t){let e=[];return R.exports.Children.forEach(t,n=>{if(!R.exports.isValidElement(n))return;if(n.type===R.exports.Fragment){e.push.apply(e,Du(n.props.children));return}n.type!==Pe&&Tt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Du(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fu.apply(this,arguments)}function Sw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const kw=["onClick","reloadDocument","replace","state","target","to"];function Iw(t){let{basename:e,children:n,window:r}=t,i=R.exports.useRef();i.current==null&&(i.current=Y1({window:r}));let s=i.current,[o,a]=R.exports.useState({action:s.action,location:s.location});return R.exports.useLayoutEffect(()=>s.listen(a),[s]),R.exports.createElement(Ew,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Tw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const at=R.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=Sw(e,kw),c=mw(l),d=Nw(l,{replace:s,state:o,target:a});function f(g){r&&r(g),!g.defaultPrevented&&!i&&d(g)}return R.exports.createElement("a",Fu({},u,{href:c,onClick:f,ref:n,target:a}))});function Nw(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=yd(),o=Ya(),a=Mg(t);return R.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Tw(l)){l.preventDefault();let u=!!r||Mu(o)===Mu(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Mh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mh(Object(n),!0).forEach(function(r){Pw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jo(t){return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jo(t)}function xw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bw(t,e,n){return e&&Dh(t.prototype,e),n&&Dh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Pw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _d(t,e){return Aw(t)||Lw(t,e)||Dg(t,e)||Dw()}function Ka(t){return Rw(t)||Ow(t)||Dg(t)||Mw()}function Rw(t){if(Array.isArray(t))return Uu(t)}function Aw(t){if(Array.isArray(t))return t}function Ow(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Lw(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Dg(t,e){if(!!t){if(typeof t=="string")return Uu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(t,e)}}function Uu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Mw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fh=function(){},wd={},Fg={},Ug=null,zg={mark:Fh,measure:Fh};try{typeof window!="undefined"&&(wd=window),typeof document!="undefined"&&(Fg=document),typeof MutationObserver!="undefined"&&(Ug=MutationObserver),typeof performance!="undefined"&&(zg=performance)}catch{}var Fw=wd.navigator||{},Uh=Fw.userAgent,zh=Uh===void 0?"":Uh,En=wd,ee=Fg,$h=Ug,co=zg;En.document;var Kt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",$g=~zh.indexOf("MSIE")||~zh.indexOf("Trident/"),jt="___FONT_AWESOME___",zu=16,Bg="fa",jg="svg-inline--fa",Jn="data-fa-i2svg",$u="data-fa-pseudo-element",Uw="data-fa-pseudo-element-pending",Ed="data-prefix",Cd="data-icon",Bh="fontawesome-i2svg",zw="async",$w=["HTML","HEAD","STYLE","SCRIPT"],Wg=function(){try{return!0}catch{return!1}}(),Sd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Zo={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Hg={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Bw={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},jw=/fa[srltdbk\-\ ]/,Vg="fa-layers-text",Ww=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Hw={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},qg=[1,2,3,4,5,6,7,8,9,10],Vw=qg.concat([11,12,13,14,15,16,17,18,19,20]),qw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$n={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gw=[].concat(Ka(Object.keys(Zo)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$n.GROUP,$n.SWAP_OPACITY,$n.PRIMARY,$n.SECONDARY]).concat(qg.map(function(t){return"".concat(t,"x")})).concat(Vw.map(function(t){return"w-".concat(t)})),Gg=En.FontAwesomeConfig||{};function Yw(t){var e=ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ee&&typeof ee.querySelector=="function"){var Qw=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qw.forEach(function(t){var e=_d(t,2),n=e[0],r=e[1],i=Kw(Yw(n));i!=null&&(Gg[r]=i)})}var Xw={familyPrefix:Bg,styleDefault:"solid",replacementClass:jg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Yi=P(P({},Xw),Gg);Yi.autoReplaceSvg||(Yi.observeMutations=!1);var O={};Object.keys(Yi).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Yi[t]=n,Do.forEach(function(r){return r(O)})},get:function(){return Yi[t]}})});En.FontAwesomeConfig=O;var Do=[];function Jw(t){return Do.push(t),function(){Do.splice(Do.indexOf(t),1)}}var Jt=zu,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zw(t){if(!(!t||!Kt)){var e=ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ee.head.insertBefore(e,r),t}}var eE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function us(){for(var t=12,e="";t-- >0;)e+=eE[Math.random()*62|0];return e}function di(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function kd(t){return t.classList?di(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Yg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Yg(t[n]),'" ')},"").trim()}function Qa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Id(t){return t.size!==wt.size||t.x!==wt.x||t.y!==wt.y||t.rotate!==wt.rotate||t.flipX||t.flipY}function nE(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function rE(t){var e=t.transform,n=t.width,r=n===void 0?zu:n,i=t.height,s=i===void 0?zu:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&$g?l+="translate(".concat(e.x/Jt-r/2,"em, ").concat(e.y/Jt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Jt,"em), calc(-50% + ").concat(e.y/Jt,"em)) "):l+="translate(".concat(e.x/Jt,"em, ").concat(e.y/Jt,"em) "),l+="scale(".concat(e.size/Jt*(e.flipX?-1:1),", ").concat(e.size/Jt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var iE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Kg(){var t=Bg,e=jg,n=O.familyPrefix,r=O.replacementClass,i=iE;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var jh=!1;function Vl(){O.autoAddCss&&!jh&&(Zw(Kg()),jh=!0)}var sE={mixout:function(){return{dom:{css:Kg,insertCss:Vl}}},hooks:function(){return{beforeDOMElementCreation:function(){Vl()},beforeI2svg:function(){Vl()}}}},Wt=En||{};Wt[jt]||(Wt[jt]={});Wt[jt].styles||(Wt[jt].styles={});Wt[jt].hooks||(Wt[jt].hooks={});Wt[jt].shims||(Wt[jt].shims=[]);var ht=Wt[jt],Qg=[],oE=function t(){ee.removeEventListener("DOMContentLoaded",t),ea=1,Qg.map(function(e){return e()})},ea=!1;Kt&&(ea=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ea||ee.addEventListener("DOMContentLoaded",oE));function aE(t){!Kt||(ea?setTimeout(t,0):Qg.push(t))}function Bs(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Yg(t):"<".concat(e," ").concat(tE(r),">").concat(s.map(Bs).join(""),"</").concat(e,">")}function Wh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lE=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ql=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?lE(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function uE(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bu(t){var e=uE(t);return e.length===1?e[0].toString(16):null}function cE(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Hh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ju(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Hh(e);typeof ht.hooks.addPack=="function"&&!i?ht.hooks.addPack(t,Hh(e)):ht.styles[t]=P(P({},ht.styles[t]||{}),s),t==="fas"&&ju("fa",e)}var Ki=ht.styles,dE=ht.shims,fE=Object.values(Hg),Td=null,Xg={},Jg={},Zg={},ev={},tv={},hE=Object.keys(Sd);function pE(t){return~Gw.indexOf(t)}function mE(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!pE(i)?i:null}var nv=function(){var e=function(s){return ql(Ki,function(o,a,l){return o[l]=ql(a,s,{}),o},{})};Xg=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Jg=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),tv=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ki||O.autoFetchSvg,r=ql(dE,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Zg=r.names,ev=r.unicodes,Td=Xa(O.styleDefault)};Jw(function(t){Td=Xa(t.styleDefault)});nv();function Nd(t,e){return(Xg[t]||{})[e]}function gE(t,e){return(Jg[t]||{})[e]}function _r(t,e){return(tv[t]||{})[e]}function rv(t){return Zg[t]||{prefix:null,iconName:null}}function vE(t){var e=ev[t],n=Nd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Cn(){return Td}var xd=function(){return{prefix:null,iconName:null,rest:[]}};function Xa(t){var e=Sd[t],n=Zo[t]||Zo[e],r=t in ht.styles?t:null;return n||r||null}function Ja(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=mE(O.familyPrefix,a);if(Ki[a]?(a=fE.includes(a)?Bw[a]:a,i=a,o.prefix=a):hE.indexOf(a)>-1?(i=a,o.prefix=Xa(a)):l?o.iconName=l:a!==O.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?rv(o.iconName):{},c=_r(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ki.far&&Ki.fas&&!O.autoFetchSvg&&(o.prefix="fas")}return o},xd());return(s.prefix==="fa"||i==="fa")&&(s.prefix=Cn()||"fas"),s}var yE=function(){function t(){xw(this,t),this.definitions={}}return bw(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),o[a]),ju(a,o[a]);var l=Hg[a];l&&ju(l,o[a]),nv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Vh=[],wr={},Lr={},_E=Object.keys(Lr);function wE(t,e){var n=e.mixoutsTo;return Vh=t,wr={},Object.keys(Lr).forEach(function(r){_E.indexOf(r)===-1&&delete Lr[r]}),Vh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Jo(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){wr[o]||(wr[o]=[]),wr[o].push(s[o])})}r.provides&&r.provides(Lr)}),n}function Wu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=wr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Zn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=wr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ht(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Lr[t]?Lr[t].apply(null,e):void 0}function Hu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Cn();if(!!e)return e=_r(n,e)||e,Wh(iv.definitions,n,e)||Wh(ht.styles,n,e)}var iv=new yE,EE=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Zn("noAuto")},CE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(Zn("beforeI2svg",e),Ht("pseudoElements2svg",e),Ht("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,aE(function(){kE({autoReplaceSvgRoot:n}),Zn("watch",e)})}},SE={icon:function(e){if(e===null)return null;if(Jo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xa(e[0]);return{prefix:r,iconName:_r(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.familyPrefix,"-"))>-1||e.match(jw))){var i=Ja(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Cn(),iconName:_r(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Cn();return{prefix:s,iconName:_r(s,e)||e}}}},Qe={noAuto:EE,config:O,dom:CE,parse:SE,library:iv,findIconDefinition:Hu,toHtml:Bs},kE=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(ht.styles).length>0||O.autoFetchSvg)&&Kt&&O.autoReplaceSvg&&Qe.dom.i2svg({node:r})};function Za(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Bs(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Kt){var r=ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function IE(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Id(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qa(P(P({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function TE(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:r}]}]}function bd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,y=r.found?r:n,E=y.width,b=y.height,m=i==="fak",p=[O.replacementClass,s?"".concat(O.familyPrefix,"-").concat(s):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),v={children:[],attributes:P(P({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(b)})},_=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/b*16*.0625,"em")}:{};g&&(v.attributes[Jn]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||us())},children:[l]}),delete v.attributes.title);var C=P(P({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:P(P({},_),d.styles)}),N=r.found&&n.found?Ht("generateAbstractMask",C)||{children:[],attributes:{}}:Ht("generateAbstractIcon",C)||{children:[],attributes:{}},w=N.children,k=N.attributes;return C.children=w,C.attributes=k,a?TE(C):IE(C)}function qh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=P(P(P({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Jn]="");var c=P({},o.styles);Id(i)&&(c.transform=rE({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Qa(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function NE(t){var e=t.content,n=t.title,r=t.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Qa(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gl=ht.styles;function Vu(t){var e=t[0],n=t[1],r=t.slice(4),i=_d(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.familyPrefix,"-").concat($n.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var xE={found:!1,width:512,height:512};function bE(t,e){!Wg&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qu(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=Cn()),new Promise(function(r,i){if(Ht("missingIconAbstract"),n==="fa"){var s=rv(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Gl[e]&&Gl[e][t]){var o=Gl[e][t];return r(Vu(o))}bE(t,e),r(P(P({},xE),{},{icon:O.showMissingIcons&&t?Ht("missingIconAbstract")||{}:{}}))})}var Gh=function(){},Gu=O.measurePerformance&&co&&co.mark&&co.measure?co:{mark:Gh,measure:Gh},zi='FA "6.1.1"',PE=function(e){return Gu.mark("".concat(zi," ").concat(e," begins")),function(){return sv(e)}},sv=function(e){Gu.mark("".concat(zi," ").concat(e," ends")),Gu.measure("".concat(zi," ").concat(e),"".concat(zi," ").concat(e," begins"),"".concat(zi," ").concat(e," ends"))},Pd={begin:PE,end:sv},Fo=function(){};function Yh(t){var e=t.getAttribute?t.getAttribute(Jn):null;return typeof e=="string"}function RE(t){var e=t.getAttribute?t.getAttribute(Ed):null,n=t.getAttribute?t.getAttribute(Cd):null;return e&&n}function AE(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function OE(){if(O.autoReplaceSvg===!0)return Uo.replace;var t=Uo[O.autoReplaceSvg];return t||Uo.replace}function LE(t){return ee.createElementNS("http://www.w3.org/2000/svg",t)}function ME(t){return ee.createElement(t)}function ov(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?LE:ME:n;if(typeof t=="string")return ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ov(o,{ceFn:r}))}),i}function DE(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Uo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ov(i),n)}),n.getAttribute(Jn)===null&&O.keepOriginalSource){var r=ee.createComment(DE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~kd(n).indexOf(O.replacementClass))return Uo.replace(e);var i=new RegExp("".concat(O.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Bs(a)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=o}};function Kh(t){t()}function av(t,e){var n=typeof e=="function"?e:Fo;if(t.length===0)n();else{var r=Kh;O.mutateApproach===zw&&(r=En.requestAnimationFrame||Kh),r(function(){var i=OE(),s=Pd.begin("mutate");t.map(i),s(),n()})}}var Rd=!1;function lv(){Rd=!0}function Yu(){Rd=!1}var ta=null;function Qh(t){if(!!$h&&!!O.observeMutations){var e=t.treeCallback,n=e===void 0?Fo:e,r=t.nodeCallback,i=r===void 0?Fo:r,s=t.pseudoElementsCallback,o=s===void 0?Fo:s,a=t.observeMutationsRoot,l=a===void 0?ee:a;ta=new $h(function(u){if(!Rd){var c=Cn();di(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Yh(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Yh(d.target)&&~qw.indexOf(d.attributeName))if(d.attributeName==="class"&&RE(d.target)){var f=Ja(kd(d.target)),g=f.prefix,y=f.iconName;d.target.setAttribute(Ed,g||c),y&&d.target.setAttribute(Cd,y)}else AE(d.target)&&i(d.target)})}}),Kt&&ta.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function FE(){!ta||ta.disconnect()}function UE(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function zE(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ja(kd(t));return i.prefix||(i.prefix=Cn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=gE(i.prefix,t.innerText)||Nd(i.prefix,Bu(t.innerText))),i}function $E(t){var e=di(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||us()):(e["aria-hidden"]="true",e.focusable="false")),e}function BE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zE(t),r=n.iconName,i=n.prefix,s=n.rest,o=$E(t),a=Wu("parseNodeAttributes",{},t),l=e.styleParser?UE(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var jE=ht.styles;function uv(t){var e=O.autoReplaceSvg==="nest"?Xh(t,{styleParser:!1}):Xh(t);return~e.extra.classes.indexOf(Vg)?Ht("generateLayersText",t,e):Ht("generateSvgReplacementMutation",t,e)}function Jh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var n=ee.documentElement.classList,r=function(d){return n.add("".concat(Bh,"-").concat(d))},i=function(d){return n.remove("".concat(Bh,"-").concat(d))},s=O.autoFetchSvg?Object.keys(Sd):Object.keys(jE),o=[".".concat(Vg,":not([").concat(Jn,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Jn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=di(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Pd.begin("onTree"),u=a.reduce(function(c,d){try{var f=uv(d);f&&c.push(f)}catch(g){Wg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){av(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function WE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;uv(t).then(function(n){n&&av([n],e)})}function HE(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hu(i||{})),t(r,P(P({},n),{},{mask:i}))}}var VE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,E=n.classes,b=E===void 0?[]:E,m=n.attributes,p=m===void 0?{}:m,v=n.styles,_=v===void 0?{}:v;if(!!e){var C=e.prefix,N=e.iconName,w=e.icon;return Za(P({type:"icon"},e),function(){return Zn("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(f?p["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(y||us()):(p["aria-hidden"]="true",p.focusable="false")),bd({icons:{main:Vu(w),mask:l?Vu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:P(P({},wt),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:p,styles:_,classes:b}})})}},qE={mixout:function(){return{icon:HE(VE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Jh,n.nodeCallback=WE,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,s=n.callback,o=s===void 0?function(){}:s;return Jh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,y){Promise.all([qu(i,a),c.iconName?qu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var b=_d(E,2),m=b[0],p=b[1];g([n,bd({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Qa(a);l.length>0&&(i.style=l);var u;return Id(o)&&(u=Ht("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},GE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Za({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.familyPrefix,"-layers")].concat(Ka(s)).join(" ")},children:o}]})}}}},YE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Za({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),NE({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(O.familyPrefix,"-layers-counter")].concat(Ka(a))}})})}}}},KE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?wt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return Za({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),qh({content:n,transform:P(P({},wt),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(O.familyPrefix,"-layers-text")].concat(Ka(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if($g){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},QE=new RegExp('"',"ug"),Zh=[1105920,1112319];function XE(t){var e=t.replace(QE,""),n=cE(e,0),r=n>=Zh[0]&&n<=Zh[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bu(i?e[0]:e),isSecondary:r||i}}function ep(t,e){var n="".concat(Uw).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=di(t.children),o=s.filter(function(N){return N.getAttribute($u)===e})[0],a=En.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Ww),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zo[l[2].toLowerCase()]:Hw[u],g=XE(d),y=g.value,E=g.isSecondary,b=l[0].startsWith("FontAwesome"),m=Nd(f,y),p=m;if(b){var v=vE(y);v.iconName&&v.prefix&&(m=v.iconName,f=v.prefix)}if(m&&!E&&(!o||o.getAttribute(Ed)!==f||o.getAttribute(Cd)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);var _=BE(),C=_.extra;C.attributes[$u]=e,qu(m,f).then(function(N){var w=bd(P(P({},_),{},{icons:{main:N,mask:xd()},prefix:f,iconName:p,extra:C,watchable:!0})),k=ee.createElement("svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=w.map(function(M){return Bs(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function JE(t){return Promise.all([ep(t,"::before"),ep(t,"::after")])}function ZE(t){return t.parentNode!==document.head&&!~$w.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($u)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tp(t){if(!!Kt)return new Promise(function(e,n){var r=di(t.querySelectorAll("*")).filter(ZE).map(JE),i=Pd.begin("searchPseudoElements");lv(),Promise.all(r).then(function(){i(),Yu(),e()}).catch(function(){i(),Yu(),n()})})}var eC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=tp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;O.searchPseudoElements&&tp(i)}}},np=!1,tC={mixout:function(){return{dom:{unwatch:function(){lv(),np=!0}}}},hooks:function(){return{bootstrap:function(){Qh(Wu("mutationObserverCallbacks",{}))},noAuto:function(){FE()},watch:function(n){var r=n.observeMutationsRoot;np?Yu():Qh(Wu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},rp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},nC={mixout:function(){return{parse:{transform:function(n){return rp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=rp(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},Yl={x:0,y:0,width:"100%",height:"100%"};function ip(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rC(t){return t.tag==="g"?t.children:[t]}var iC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ja(i.split(" ").map(function(o){return o.trim()})):xd();return s.prefix||(s.prefix=Cn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=nE({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:P(P({},Yl),{},{fill:"white"})},E=c.children?{children:c.children.map(ip)}:{},b={tag:"g",attributes:P({},g.inner),children:[ip(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},E))]},m={tag:"g",attributes:P({},g.outer),children:[b]},p="mask-".concat(a||us()),v="clip-".concat(a||us()),_={tag:"mask",attributes:P(P({},Yl),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:rC(f)},_]};return r.push(C,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Yl)}),{children:r,attributes:i}}}},sC={provides:function(e){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},aC=[sE,qE,GE,YE,KE,eC,tC,nC,iC,sC,oC];wE(aC,{mixoutsTo:Qe});Qe.noAuto;Qe.config;var lC=Qe.library;Qe.dom;var Ku=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var uC=Qe.icon;Qe.layer;Qe.text;Qe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var cC={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"]},dC={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"]},fC={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"]},hC={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"]},pC={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},mC=pC,gC={prefix:"fas",iconName:"comments",icon:[640,512,[61670,128490],"f086","M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"]},vC={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"]},yC={prefix:"fas",iconName:"ghost",icon:[384,512,[128123],"f6e2","M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"]},_C={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},wC={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},EC=wC,cv={prefix:"fas",iconName:"user-ninja",icon:[512,512,[129399],"f504","M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"]},Qu={},dv={exports:{}},Xe={},fv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var z=A.length;A.push(U);e:for(;0<z;){var ue=z-1>>>1,pe=A[ue];if(0<i(pe,U))A[ue]=U,A[z]=pe,z=ue;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],z=A.pop();if(z!==U){A[0]=z;e:for(var ue=0,pe=A.length,oo=pe>>>1;ue<oo;){var On=2*(ue+1)-1,jl=A[On],Ln=On+1,ao=A[Ln];if(0>i(jl,z))Ln<pe&&0>i(ao,jl)?(A[ue]=ao,A[Ln]=z,ue=Ln):(A[ue]=jl,A[On]=z,ue=On);else if(Ln<pe&&0>i(ao,z))A[ue]=ao,A[Ln]=z,ue=Ln;else break e}}return U}function i(A,U){var z=A.sortIndex-U.sortIndex;return z!==0?z:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function _(A){if(E=!1,v(A),!y)if(n(l)!==null)y=!0,$l(C);else{var U=n(u);U!==null&&Bl(_,U.startTime-A)}}function C(A,U){y=!1,E&&(E=!1,m(k),k=-1),g=!0;var z=f;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||A&&!re());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var pe=ue(d.expirationTime<=U);U=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(l)&&r(l),v(U)}else r(l);d=n(l)}if(d!==null)var oo=!0;else{var On=n(u);On!==null&&Bl(_,On.startTime-U),oo=!1}return oo}finally{d=null,f=z,g=!1}}var N=!1,w=null,k=-1,M=5,D=-1;function re(){return!(t.unstable_now()-D<M)}function Ze(){if(w!==null){var A=t.unstable_now();D=A;var U=!0;try{U=w(!0,A)}finally{U?Pt():(N=!1,w=null)}}else N=!1}var Pt;if(typeof p=="function")Pt=function(){p(Ze)};else if(typeof MessageChannel!="undefined"){var An=new MessageChannel,Sh=An.port2;An.port1.onmessage=Ze,Pt=function(){Sh.postMessage(null)}}else Pt=function(){b(Ze,0)};function $l(A){w=A,N||(N=!0,Pt())}function Bl(A,U){k=b(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,$l(C))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var z=f;f=U;try{return A()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=f;f=A;try{return U()}finally{f=z}},t.unstable_scheduleCallback=function(A,U,z){var ue=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,A){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=z+pe,A={id:c++,callback:U,priorityLevel:A,startTime:z,expirationTime:pe,sortIndex:-1},z>ue?(A.sortIndex=z,e(u,A),n(l)===null&&A===n(u)&&(E?(m(k),k=-1):E=!0,Bl(_,z-ue))):(A.sortIndex=pe,e(l,A),y||g||(y=!0,$l(C))),A},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(A){var U=f;return function(){var z=f;f=U;try{return A.apply(this,arguments)}finally{f=z}}}})(hv);fv.exports=hv;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=R.exports,Ye=fv.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,cs={};function fr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(cs[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var Vt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Xu=Object.prototype.hasOwnProperty,CC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function SC(t){return Xu.call(op,t)?!0:Xu.call(sp,t)?!1:CC.test(t)?op[t]=!0:(sp[t]=!0,!1)}function kC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IC(t,e,n,r){if(e===null||typeof e=="undefined"||kC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ad,Od);Ce[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ad,Od);Ce[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ad,Od);Ce[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IC(e,n,i,r)&&(n=null),r||i===null?SC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),yv=Symbol.for("react.offscreen"),ap=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Kl;function $i(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Ql=!1;function Xl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$i(t):""}function TC(t){switch(t.tag){case 5:return $i(t.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case Er:return"Portal";case Ju:return"Profiler";case Md:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case gv:return(t._context.displayName||"Context")+".Provider";case Dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function NC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _v(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xC(t){var e=_v(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=xC(t))}function wv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_v(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function na(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ev(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function rc(t,e){Ev(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||na(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Bi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function Cv(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,kv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bC=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(t){bC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qi[e]=Qi[t]})});function Iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qi.hasOwnProperty(t)&&Qi[t]?(""+e).trim():e+"px"}function Tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PC=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(PC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,Dr=null,Fr=null;function fp(t){if(t=Hs(t)){if(typeof cc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=il(e),cc(t.stateNode,t.type,e))}}function Nv(t){Dr?Fr?Fr.push(t):Fr=[t]:Dr=t}function xv(){if(Dr){var t=Dr,e=Fr;if(Fr=Dr=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function bv(t,e){return t(e)}function Pv(){}var Jl=!1;function Rv(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return bv(t,e,n)}finally{Jl=!1,(Dr!==null||Fr!==null)&&(Pv(),xv())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var dc=!1;if(Vt)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{dc=!1}function RC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xi=!1,ra=null,ia=!1,fc=null,AC={onError:function(t){Xi=!0,ra=t}};function OC(t,e,n,r,i,s,o,a,l){Xi=!1,ra=null,RC.apply(AC,arguments)}function LC(t,e,n,r,i,s,o,a,l){if(OC.apply(this,arguments),Xi){if(Xi){var u=ra;Xi=!1,ra=null}else throw Error(S(198));ia||(ia=!0,fc=u)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hp(t){if(hr(t)!==t)throw Error(S(188))}function MC(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hp(i),t;if(s===r)return hp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Ov(t){return t=MC(t),t!==null?Lv(t):null}function Lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lv(t);if(e!==null)return e;t=t.sibling}return null}var Mv=Ye.unstable_scheduleCallback,pp=Ye.unstable_cancelCallback,DC=Ye.unstable_shouldYield,FC=Ye.unstable_requestPaint,ce=Ye.unstable_now,UC=Ye.unstable_getCurrentPriorityLevel,zd=Ye.unstable_ImmediatePriority,Dv=Ye.unstable_UserBlockingPriority,sa=Ye.unstable_NormalPriority,zC=Ye.unstable_LowPriority,Fv=Ye.unstable_IdlePriority,el=null,Ct=null;function $C(t){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:WC,BC=Math.log,jC=Math.LN2;function WC(t){return t>>>=0,t===0?32:31-(BC(t)/jC|0)|0}var mo=64,go=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ji(a):(s&=o,s!==0&&(r=ji(s)))}else o=n&~i,o!==0?r=ji(o):s!==0&&(r=ji(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function HC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=HC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function qC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Uv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zv,Bd,$v,Bv,jv,pc=!1,vo=[],hn=null,pn=null,mn=null,hs=new Map,ps=new Map,nn=[],GC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hs(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YC(t,e,n,r,i){switch(e){case"focusin":return hn=xi(hn,t,e,n,r,i),!0;case"dragenter":return pn=xi(pn,t,e,n,r,i),!0;case"mouseover":return mn=xi(mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return hs.set(s,xi(hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ps.set(s,xi(ps.get(s)||null,t,e,n,r,i)),!0}return!1}function Wv(t){var e=Bn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,jv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=Hs(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){zo(t)&&n.delete(e)}function KC(){pc=!1,hn!==null&&zo(hn)&&(hn=null),pn!==null&&zo(pn)&&(pn=null),mn!==null&&zo(mn)&&(mn=null),hs.forEach(gp),ps.forEach(gp)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,KC)))}function ms(t){function e(i){return bi(i,t)}if(0<vo.length){bi(vo[0],t);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hn!==null&&bi(hn,t),pn!==null&&bi(pn,t),mn!==null&&bi(mn,t),hs.forEach(e),ps.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&nn.shift()}var Ur=Qt.ReactCurrentBatchConfig;function QC(t,e,n,r){var i=G,s=Ur.transition;Ur.transition=null;try{G=1,jd(t,e,n,r)}finally{G=i,Ur.transition=s}}function XC(t,e,n,r){var i=G,s=Ur.transition;Ur.transition=null;try{G=4,jd(t,e,n,r)}finally{G=i,Ur.transition=s}}function jd(t,e,n,r){var i=mc(t,e,n,r);if(i===null)uu(t,e,r,aa,n),mp(t,r);else if(YC(i,t,e,n,r))r.stopPropagation();else if(mp(t,r),e&4&&-1<GC.indexOf(t)){for(;i!==null;){var s=Hs(i);if(s!==null&&zv(s),s=mc(t,e,n,r),s===null&&uu(t,e,r,aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}var aa=null;function mc(t,e,n,r){if(aa=null,t=Ud(r),t=Bn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return aa=t,null}function Hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UC()){case zd:return 1;case Dv:return 4;case sa:case zC:return 16;case Fv:return 536870912;default:return 16}default:return 16}}var ln=null,Wd=null,$o=null;function Vv(){if($o)return $o;var t,e=Wd,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $o=i.slice(t,1<r?1-r:void 0)}function Bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function vp(){return!1}function Je(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:vp,this.isPropagationStopped=vp,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=Je(fi),Ws=oe({},fi,{view:0,detail:0}),JC=Je(Ws),eu,tu,Pi,tl=oe({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(eu=t.screenX-Pi.screenX,tu=t.screenY-Pi.screenY):tu=eu=0,Pi=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),yp=Je(tl),ZC=oe({},tl,{dataTransfer:0}),eS=Je(ZC),tS=oe({},Ws,{relatedTarget:0}),nu=Je(tS),nS=oe({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Je(nS),iS=oe({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sS=Je(iS),oS=oe({},fi,{data:0}),_p=Je(oS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uS[t])?!!e[t]:!1}function Vd(){return cS}var dS=oe({},Ws,{key:function(t){if(t.key){var e=aS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=Je(dS),hS=oe({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Je(hS),pS=oe({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),mS=Je(pS),gS=oe({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Je(gS),yS=oe({},tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Je(yS),wS=[9,13,27,32],qd=Vt&&"CompositionEvent"in window,Ji=null;Vt&&"documentMode"in document&&(Ji=document.documentMode);var ES=Vt&&"TextEvent"in window&&!Ji,qv=Vt&&(!qd||Ji&&8<Ji&&11>=Ji),Ep=String.fromCharCode(32),Cp=!1;function Gv(t,e){switch(t){case"keyup":return wS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function CS(t,e){switch(t){case"compositionend":return Yv(e);case"keypress":return e.which!==32?null:(Cp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Cp?null:t;default:return null}}function SS(t,e){if(Sr)return t==="compositionend"||!qd&&Gv(t,e)?(t=Vv(),$o=Wd=ln=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var kS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kS[t.type]:e==="textarea"}function Kv(t,e,n,r){Nv(r),e=la(e,"onChange"),0<e.length&&(n=new Hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zi=null,gs=null;function IS(t){oy(t,0)}function nl(t){var e=Tr(t);if(wv(e))return t}function TS(t,e){if(t==="change")return e}var Qv=!1;if(Vt){var ru;if(Vt){var iu="oninput"in document;if(!iu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),iu=typeof kp.oninput=="function"}ru=iu}else ru=!1;Qv=ru&&(!document.documentMode||9<document.documentMode)}function Ip(){Zi&&(Zi.detachEvent("onpropertychange",Xv),gs=Zi=null)}function Xv(t){if(t.propertyName==="value"&&nl(gs)){var e=[];Kv(e,gs,t,Ud(t)),Rv(IS,e)}}function NS(t,e,n){t==="focusin"?(Ip(),Zi=e,gs=n,Zi.attachEvent("onpropertychange",Xv)):t==="focusout"&&Ip()}function xS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(gs)}function bS(t,e){if(t==="click")return nl(e)}function PS(t,e){if(t==="input"||t==="change")return nl(e)}function RS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:RS;function vs(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xu.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,e){var n=Tp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function Jv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zv(){for(var t=window,e=na();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=na(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AS(t){var e=Zv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jv(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Np(n,s);var o=Np(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OS=Vt&&"documentMode"in document&&11>=document.documentMode,kr=null,gc=null,es=null,vc=!1;function xp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||kr==null||kr!==na(r)||(r=kr,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),es&&vs(es,r)||(es=r,r=la(gc,"onSelect"),0<r.length&&(e=new Hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kr)))}function _o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ir={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},su={},ey={};Vt&&(ey=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function rl(t){if(su[t])return su[t];if(!Ir[t])return t;var e=Ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ey)return su[t]=e[n];return t}var ty=rl("animationend"),ny=rl("animationiteration"),ry=rl("animationstart"),iy=rl("transitionend"),sy=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(t,e){sy.set(t,e),fr(e,[t])}for(var ou=0;ou<bp.length;ou++){var au=bp[ou],LS=au.toLowerCase(),MS=au[0].toUpperCase()+au.slice(1);bn(LS,"on"+MS)}bn(ty,"onAnimationEnd");bn(ny,"onAnimationIteration");bn(ry,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(iy,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LC(r,e,void 0,t),t.currentTarget=null}function oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pp(i,a,u),s=l}}}if(ia)throw t=fc,ia=!1,fc=null,t}function Z(t,e){var n=e[Ec];n===void 0&&(n=e[Ec]=new Set);var r=t+"__bubble";n.has(r)||(ay(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),ay(n,t,r,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[wo]){t[wo]=!0,mv.forEach(function(n){n!=="selectionchange"&&(DS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,lu("selectionchange",!1,e))}}function ay(t,e,n,r){switch(Hv(e)){case 1:var i=QC;break;case 4:i=XC;break;default:i=jd}n=i.bind(null,e,n,t),i=void 0,!dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Bn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Rv(function(){var u=s,c=Ud(n),d=[];e:{var f=sy.get(t);if(f!==void 0){var g=Hd,y=t;switch(t){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":g=fS;break;case"focusin":y="focus",g=nu;break;case"focusout":y="blur",g=nu;break;case"beforeblur":case"afterblur":g=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mS;break;case ty:case ny:case ry:g=rS;break;case iy:g=vS;break;case"scroll":g=JC;break;case"wheel":g=_S;break;case"copy":case"cut":case"paste":g=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wp}var E=(e&4)!==0,b=!E&&t==="scroll",m=E?f!==null?f+"Capture":null:f;E=[];for(var p=u,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,m!==null&&(_=fs(p,m),_!=null&&E.push(_s(p,_,v)))),b)break;p=p.return}0<E.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:E}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==uc&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[qt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Bn(y):null,y!==null&&(b=hr(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(E=yp,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=wp,_="onPointerLeave",m="onPointerEnter",p="pointer"),b=g==null?f:Tr(g),v=y==null?f:Tr(y),f=new E(_,p+"leave",g,n,c),f.target=b,f.relatedTarget=v,_=null,Bn(c)===u&&(E=new E(m,p+"enter",y,n,c),E.target=v,E.relatedTarget=b,_=E),b=_,g&&y)t:{for(E=g,m=y,p=0,v=E;v;v=vr(v))p++;for(v=0,_=m;_;_=vr(_))v++;for(;0<p-v;)E=vr(E),p--;for(;0<v-p;)m=vr(m),v--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=vr(E),m=vr(m)}E=null}else E=null;g!==null&&Rp(d,f,g,E,!1),y!==null&&b!==null&&Rp(d,b,y,E,!0)}}e:{if(f=u?Tr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=TS;else if(Sp(f))if(Qv)C=PS;else{C=xS;var N=NS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=bS);if(C&&(C=C(t,u))){Kv(d,C,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ic(f,"number",f.value)}switch(N=u?Tr(u):window,t){case"focusin":(Sp(N)||N.contentEditable==="true")&&(kr=N,gc=u,es=null);break;case"focusout":es=gc=kr=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,xp(d,n,c);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":xp(d,n,c)}var w;if(qd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Sr?Gv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(qv&&n.locale!=="ko"&&(Sr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Sr&&(w=Vv()):(ln=c,Wd="value"in ln?ln.value:ln.textContent,Sr=!0)),N=la(u,k),0<N.length&&(k=new _p(k,t,null,n,c),d.push({event:k,listeners:N}),w?k.data=w:(w=Yv(n),w!==null&&(k.data=w)))),(w=ES?CS(t,n):SS(t,n))&&(u=la(u,"onBeforeInput"),0<u.length&&(c=new _p("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}oy(d,e)})}function _s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function la(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(_s(t,s,i)),s=fs(t,e),s!=null&&r.push(_s(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fs(n,s),l!=null&&o.unshift(_s(n,l,a))):i||(l=fs(n,s),l!=null&&o.push(_s(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,US=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(US,"")}function Eo(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(S(425))}function ua(){}var yc=null;function _c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof Op!="undefined"?function(t){return Op.resolve(null).then(t).catch(BS)}:wc;function BS(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(e)}function Lt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),_t="__reactFiber$"+hi,ws="__reactProps$"+hi,qt="__reactContainer$"+hi,Ec="__reactEvents$"+hi,jS="__reactListeners$"+hi,WS="__reactHandles$"+hi;function Bn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[_t])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function Hs(t){return t=t[_t]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function il(t){return t[ws]||null}var Cc=[],Nr=-1;function Pn(t){return{current:t}}function te(t){0>Nr||(t.current=Cc[Nr],Cc[Nr]=null,Nr--)}function J(t,e){Nr++,Cc[Nr]=t.current,t.current=e}var kn={},Ne=Pn(kn),Be=Pn(!1),er=kn;function Gr(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function ca(){te(Be),te(Ne)}function Mp(t,e,n){if(Ne.current!==kn)throw Error(S(168));J(Ne,e),J(Be,n)}function ly(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,NC(t)||"Unknown",i));return oe({},n,r)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,er=Ne.current,J(Ne,t),J(Be,Be.current),!0}function Dp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=ly(t,e,er),r.__reactInternalMemoizedMergedChildContext=t,te(Be),te(Ne),J(Ne,t)):te(Be),J(Be,n)}var At=null,sl=!1,du=!1;function uy(t){At===null?At=[t]:At.push(t)}function HS(t){sl=!0,uy(t)}function Rn(){if(!du&&At!==null){du=!0;var t=0,e=G;try{var n=At;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}At=null,sl=!1}catch(i){throw At!==null&&(At=At.slice(t+1)),Mv(zd,Rn),i}finally{G=e,du=!1}}return null}var VS=Qt.ReactCurrentBatchConfig;function ct(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fa=Pn(null),ha=null,xr=null,Yd=null;function Kd(){Yd=xr=ha=null}function Qd(t){var e=fa.current;te(fa),t._currentValue=e}function Sc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zr(t,e){ha=t,Yd=xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(qe=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},xr===null){if(ha===null)throw Error(S(308));xr=t,ha.dependencies={lanes:0,firstContext:t}}else xr=xr.next=t;return e}var Et=null,tn=!1;function Xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,fe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=n.interleaved,t===null?(e.next=e,Et===null?Et=[n]:Et.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}function Fp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pa(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(f=e,g=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=oe({},d,f);break e;case 2:tn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=d}}function Up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var dy=new pv.Component().refs;function kc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ol={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=yn(t),s=$t(r,i);s.payload=e,n!=null&&(s.callback=n),gn(t,s),e=ot(t,i,r),e!==null&&jo(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=yn(t),s=$t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),gn(t,s),e=ot(t,i,r),e!==null&&jo(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=yn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),gn(t,i),e=ot(t,r,n),e!==null&&jo(e,t,r)}};function zp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function fy(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=lt(s):(i=je(e)?er:Ne.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $p(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ol.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dy,Xd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=lt(s):(s=je(e)?er:Ne.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ol.enqueueReplaceState(i,i.state,null),pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var br=[],Pr=0,ma=null,ga=0,et=[],tt=0,tr=null,Mt=1,Dt="";function Mn(t,e){br[Pr++]=ga,br[Pr++]=ma,ma=t,ga=e}function hy(t,e,n){et[tt++]=Mt,et[tt++]=Dt,et[tt++]=tr,tr=t;var r=Mt;t=Dt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mt=1<<32-mt(e)+i|n<<i|r,Dt=s+t}else Mt=1<<s|n<<i|r,Dt=t}function Jd(t){t.return!==null&&(Mn(t,1),hy(t,1,0))}function Zd(t){for(;t===ma;)ma=br[--Pr],br[Pr]=null,ga=br[--Pr],br[Pr]=null;for(;t===tr;)tr=et[--tt],et[tt]=null,Dt=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null}var Ge=null,Fe=null,ne=!1,dt=null;function py(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,Fe=Lt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=tr!==null?{id:Mt,overflow:Dt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,Fe=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(ne){var e=Fe;if(e){var n=e;if(!Bp(t,e)){if(Tc(t))throw Error(S(418));e=Lt(n.nextSibling);var r=Ge;e&&Bp(t,e)?py(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ge=t)}}else{if(Tc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,Ge=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function Ri(t){if(t!==Ge)return!1;if(!ne)return jp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_c(t.type,t.memoizedProps)),e&&(e=Fe)){if(Tc(t)){for(t=Fe;t;)t=Lt(t.nextSibling);throw Error(S(418))}for(;e;)py(t,e),e=Lt(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=Lt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=Ge?Lt(t.stateNode.nextSibling):null;return!0}function Yr(){Fe=Ge=null,ne=!1}function ef(t){dt===null?dt=[t]:dt.push(t)}function Ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===dy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function my(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=In(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,_){return p===null||p.tag!==6?(p=vu(v,m.mode,_),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,_){var C=v.type;return C===Cr?c(m,p,v.props.children,_,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Wp(C)===p.type)?(_=i(p,v.props),_.ref=Ai(m,p,v),_.return=m,_):(_=Go(v.type,v.key,v.props,null,m.mode,_),_.ref=Ai(m,p,v),_.return=m,_)}function u(m,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=yu(v,m.mode,_),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,_,C){return p===null||p.tag!==7?(p=Yn(v,m.mode,_,C),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vu(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fo:return v=Go(p.type,p.key,p.props,null,m.mode,v),v.ref=Ai(m,null,p),v.return=m,v;case Er:return p=yu(p,m.mode,v),p.return=m,p;case en:var _=p._init;return d(m,_(p._payload),v)}if(Bi(p)||Ti(p))return p=Yn(p,m.mode,v,null),p.return=m,p;Co(m,p)}return null}function f(m,p,v,_){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(m,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:return v.key===C?l(m,p,v,_):null;case Er:return v.key===C?u(m,p,v,_):null;case en:return C=v._init,f(m,p,C(v._payload),_)}if(Bi(v)||Ti(v))return C!==null?null:c(m,p,v,_,null);Co(m,v)}return null}function g(m,p,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(v)||null,a(p,m,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fo:return m=m.get(_.key===null?v:_.key)||null,l(p,m,_,C);case Er:return m=m.get(_.key===null?v:_.key)||null,u(p,m,_,C);case en:var N=_._init;return g(m,p,v,N(_._payload),C)}if(Bi(_)||Ti(_))return m=m.get(v)||null,c(p,m,_,C,null);Co(p,_)}return null}function y(m,p,v,_){for(var C=null,N=null,w=p,k=p=0,M=null;w!==null&&k<v.length;k++){w.index>k?(M=w,w=null):M=w.sibling;var D=f(m,w,v[k],_);if(D===null){w===null&&(w=M);break}t&&w&&D.alternate===null&&e(m,w),p=s(D,p,k),N===null?C=D:N.sibling=D,N=D,w=M}if(k===v.length)return n(m,w),ne&&Mn(m,k),C;if(w===null){for(;k<v.length;k++)w=d(m,v[k],_),w!==null&&(p=s(w,p,k),N===null?C=w:N.sibling=w,N=w);return ne&&Mn(m,k),C}for(w=r(m,w);k<v.length;k++)M=g(w,m,k,v[k],_),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?k:M.key),p=s(M,p,k),N===null?C=M:N.sibling=M,N=M);return t&&w.forEach(function(re){return e(m,re)}),ne&&Mn(m,k),C}function E(m,p,v,_){var C=Ti(v);if(typeof C!="function")throw Error(S(150));if(v=C.call(v),v==null)throw Error(S(151));for(var N=C=null,w=p,k=p=0,M=null,D=v.next();w!==null&&!D.done;k++,D=v.next()){w.index>k?(M=w,w=null):M=w.sibling;var re=f(m,w,D.value,_);if(re===null){w===null&&(w=M);break}t&&w&&re.alternate===null&&e(m,w),p=s(re,p,k),N===null?C=re:N.sibling=re,N=re,w=M}if(D.done)return n(m,w),ne&&Mn(m,k),C;if(w===null){for(;!D.done;k++,D=v.next())D=d(m,D.value,_),D!==null&&(p=s(D,p,k),N===null?C=D:N.sibling=D,N=D);return ne&&Mn(m,k),C}for(w=r(m,w);!D.done;k++,D=v.next())D=g(w,m,k,D.value,_),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?k:D.key),p=s(D,p,k),N===null?C=D:N.sibling=D,N=D);return t&&w.forEach(function(Ze){return e(m,Ze)}),ne&&Mn(m,k),C}function b(m,p,v,_){if(typeof v=="object"&&v!==null&&v.type===Cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fo:e:{for(var C=v.key,N=p;N!==null;){if(N.key===C){if(C=v.type,C===Cr){if(N.tag===7){n(m,N.sibling),p=i(N,v.props.children),p.return=m,m=p;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===en&&Wp(C)===N.type){n(m,N.sibling),p=i(N,v.props),p.ref=Ai(m,N,v),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}v.type===Cr?(p=Yn(v.props.children,m.mode,_,v.key),p.return=m,m=p):(_=Go(v.type,v.key,v.props,null,m.mode,_),_.ref=Ai(m,p,v),_.return=m,m=_)}return o(m);case Er:e:{for(N=v.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=yu(v,m.mode,_),p.return=m,m=p}return o(m);case en:return N=v._init,b(m,p,N(v._payload),_)}if(Bi(v))return y(m,p,v,_);if(Ti(v))return E(m,p,v,_);Co(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=vu(v,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return b}var Kr=my(!0),gy=my(!1),Vs={},St=Pn(Vs),Es=Pn(Vs),Cs=Pn(Vs);function jn(t){if(t===Vs)throw Error(S(174));return t}function tf(t,e){switch(J(Cs,e),J(Es,t),J(St,Vs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}te(St),J(St,e)}function Qr(){te(St),te(Es),te(Cs)}function vy(t){jn(Cs.current);var e=jn(St.current),n=oc(e,t.type);e!==n&&(J(Es,t),J(St,n))}function nf(t){Es.current===t&&(te(St),te(Es))}var ie=Pn(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function rf(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Wo=Qt.ReactCurrentDispatcher,it=Qt.ReactCurrentBatchConfig,Xr=0,le=null,Te=null,ge=null,ya=!1,ts=!1,Ss=0,qS=0;function ke(){throw Error(S(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function of(t,e,n,r,i,s){if(Xr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?QS:XS,t=n(r,i),ts){s=0;do{if(ts=!1,Ss=0,25<=s)throw Error(S(301));s+=1,ge=Te=null,e.updateQueue=null,Wo.current=JS,t=n(r,i)}while(ts)}if(Wo.current=_a,e=Te!==null&&Te.next!==null,Xr=0,ge=Te=le=null,ya=!1,e)throw Error(S(300));return t}function af(){var t=Ss!==0;return Ss=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=t:ge=ge.next=t,ge}function xt(){if(Te===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=ge===null?le.memoizedState:ge.next;if(e!==null)ge=e,Te=t;else{if(t===null)throw Error(S(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},ge===null?le.memoizedState=ge=t:ge=ge.next=t}return ge}function qn(t,e){return typeof e=="function"?e(t):e}function So(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,le.lanes|=c,Jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ko(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function yy(){}function _y(t,e){var n=le,r=xt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,qe=!0),r=r.queue,Is(Cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,ks(9,Ey.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(S(349));(Xr&30)!==0||wy(n,e,i)}return i}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ey(t,e,n,r){e.value=n,e.getSnapshot=r,Sy(e)&&ot(t,1,-1)}function Cy(t,e,n){return n(function(){Sy(e)&&ot(t,1,-1)})}function Sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function hu(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:t},e.queue=t,t=t.dispatch=KS.bind(null,le,t),[e.memoizedState,t]}function ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ky(){return xt().memoizedState}function Ho(t,e,n,r){var i=Rt();le.flags|=t,i.memoizedState=ks(1|e,n,void 0,r===void 0?null:r)}function al(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&sf(r,o.deps)){i.memoizedState=ks(e,n,s,r);return}}le.flags|=t,i.memoizedState=ks(1|e,n,s,r)}function pu(t,e){return Ho(8390656,8,t,e)}function Is(t,e){return al(2048,8,t,e)}function Iy(t,e){return al(4,2,t,e)}function Ty(t,e){return al(4,4,t,e)}function Ny(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xy(t,e,n){return n=n!=null?n.concat([t]):null,al(4,4,Ny.bind(null,e,t),n)}function lf(){}function by(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Py(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GS(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=it.transition;it.transition={};try{t(!1),e()}finally{G=n,it.transition=r}}function Ry(){return xt().memoizedState}function YS(t,e,n){var r=yn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ay(t)?Oy(e,n):(Ly(t,e,n),n=Ae(),t=ot(t,r,n),t!==null&&My(t,e,r))}function KS(t,e,n){var r=yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ay(t))Oy(e,i);else{Ly(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o))return}catch{}finally{}n=Ae(),t=ot(t,r,n),t!==null&&My(t,e,r)}}function Ay(t){var e=t.alternate;return t===le||e!==null&&e===le}function Oy(t,e){ts=ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ly(t,e,n){fe!==null&&(t.mode&1)!==0&&(V&2)===0?(t=e.interleaved,t===null?(n.next=n,Et===null?Et=[e]:Et.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function My(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$d(t,n)}}var _a={readContext:lt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},QS={readContext:lt,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,Ny.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YS.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:hu,useDebugValue:lf,useDeferredValue:function(t){var e=hu(t),n=e[0],r=e[1];return pu(function(){var i=it.transition;it.transition={};try{r(t)}finally{it.transition=i}},[t]),n},useTransition:function(){var t=hu(!1),e=t[0];return t=GS.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Rt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),fe===null)throw Error(S(349));(Xr&30)!==0||wy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pu(Cy.bind(null,r,s,t),[t]),r.flags|=2048,ks(9,Ey.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=fe.identifierPrefix;if(ne){var n=Dt,r=Mt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XS={readContext:lt,useCallback:by,useContext:lt,useEffect:Is,useImperativeHandle:xy,useInsertionEffect:Iy,useLayoutEffect:Ty,useMemo:Py,useReducer:So,useRef:ky,useState:function(){return So(qn)},useDebugValue:lf,useDeferredValue:function(t){var e=So(qn),n=e[0],r=e[1];return Is(function(){var i=it.transition;it.transition={};try{r(t)}finally{it.transition=i}},[t]),n},useTransition:function(){var t=So(qn)[0],e=xt().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:_y,useId:Ry,unstable_isNewReconciler:!1},JS={readContext:lt,useCallback:by,useContext:lt,useEffect:Is,useImperativeHandle:xy,useInsertionEffect:Iy,useLayoutEffect:Ty,useMemo:Py,useReducer:ko,useRef:ky,useState:function(){return ko(qn)},useDebugValue:lf,useDeferredValue:function(t){var e=ko(qn),n=e[0],r=e[1];return Is(function(){var i=it.transition;it.transition={};try{r(t)}finally{it.transition=i}},[t]),n},useTransition:function(){var t=ko(qn)[0],e=xt().memoizedState;return[t,e]},useMutableSource:yy,useSyncExternalStore:_y,useId:Ry,unstable_isNewReconciler:!1};function uf(t,e){try{var n="",r=e;do n+=TC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZS=typeof WeakMap=="function"?WeakMap:Map;function Dy(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ca||(Ca=!0,Fc=r),xc(t,e)},n}function Fy(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hk.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,gn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Uy,bc,zy,$y;Uy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};zy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(St.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ua)}ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$y=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ek(t,e,n){var r=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return je(e.type)&&ca(),Ie(e),null;case 3:return r=e.stateNode,Qr(),te(Be),te(Ne),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ri(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,dt!==null&&($c(dt),dt=null))),bc(t,e),Ie(e),null;case 5:nf(e);var i=jn(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)zy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ie(e),null}if(t=jn(St.current),Ri(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[ws]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)Z(Wi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":lp(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":cp(r,s),Z("invalid",r)}ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(Eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(Eo(r.textContent,a,t),i=["children",""+a]):cs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":ho(r),up(r,s,!0);break;case"textarea":ho(r),dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ua)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[ws]=r,Uy(t,e,!1,!1),e.stateNode=t;e:{switch(o=lc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)Z(Wi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":lp(t,r),i=nc(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":cp(t,r),i=sc(t,r),Z("invalid",t);break;default:i=r}ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Tv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ds(t,l):typeof l=="number"&&ds(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Ld(t,s,l,o))}switch(n){case"input":ho(t),up(t,r,!1);break;case"textarea":ho(t),dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=jn(Cs.current),jn(St.current),Ri(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ge,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:Eo(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&Eo(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ie(e),null;case 13:if(te(ie),r=e.memoizedState,ne&&Fe!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=Fe;r;)r=Lt(r.nextSibling);return Yr(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Ri(e),t===null){if(!r)throw Error(S(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[_t]=e}else Yr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ie(e),null}return dt!==null&&($c(dt),dt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Ri(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ie.current&1)!==0?he===0&&(he=3):mf())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Qr(),bc(t,e),t===null&&ys(e.stateNode.containerInfo),Ie(e),null;case 10:return Qd(e.type._context),Ie(e),null;case 17:return je(e.type)&&ca(),Ie(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Oi(s,!1);else{if(he!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=va(t),o!==null){for(e.flags|=128,Oi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Zr&&(e.flags|=128,r=!0,Oi(s,!1),e.lanes=4194304)}else{if(!r)if(t=va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ie(e),null}else 2*ce()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,Oi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ve&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}var tk=Qt.ReactCurrentOwner,qe=!1;function Re(t,e,n,r){e.child=t===null?gy(e,null,n,r):Kr(e,t.child,n,r)}function Gp(t,e,n,r,i){n=n.render;var s=e.ref;return zr(e,i),r=of(t,e,n,r,s,i),n=af(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&n&&Jd(e),e.flags|=1,Re(t,e,r,i),e.child)}function Yp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,By(t,e,s,r,i)):(t=Go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function By(t,e,n,r,i){if(t!==null&&vs(t.memoizedProps,r)&&t.ref===e.ref)if(qe=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(qe=!0);else return e.lanes=t.lanes,Gt(t,e,i);return Pc(t,e,n,r,i)}function jy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},J(Rr,Ve),Ve|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,J(Rr,Ve),Ve|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,J(Rr,Ve),Ve|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Rr,Ve),Ve|=r;return Re(t,e,i,n),e.child}function Wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,r,i){var s=je(n)?er:Ne.current;return s=Gr(e,s),zr(e,i),n=of(t,e,n,r,s,i),r=af(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&r&&Jd(e),e.flags|=1,Re(t,e,n,i),e.child)}function Kp(t,e,n,r,i){if(je(n)){var s=!0;da(e)}else s=!1;if(zr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),fy(e,n,r),Ic(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=je(n)?er:Ne.current,u=Gr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$p(e,o,r,u),tn=!1;var f=e.memoizedState;o.state=f,pa(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Be.current||tn?(typeof c=="function"&&(kc(e,n,c,r),l=e.memoizedState),(a=tn||zp(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ct(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=je(n)?er:Ne.current,l=Gr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&$p(e,o,r,l),tn=!1,f=e.memoizedState,o.state=f,pa(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Be.current||tn?(typeof g=="function"&&(kc(e,n,g,r),y=e.memoizedState),(u=tn||zp(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Rc(t,e,n,r,s,i)}function Rc(t,e,n,r,i,s){Wy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dp(e,n,!1),Gt(t,e,s);r=e.stateNode,tk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Kr(e,t.child,null,s),e.child=Kr(e,null,a,s)):Re(t,e,a,s),e.memoizedState=r.state,i&&Dp(e,n,!0),e.child}function Hy(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),tf(t,e.containerInfo)}function Qp(t,e,n,r,i){return Yr(),ef(i),e.flags|=256,Re(t,e,n,r),e.child}var Io={dehydrated:null,treeContext:null,retryLane:0};function To(t){return{baseLanes:t,cachePool:null}}function Vy(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ia(i,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=To(n),e.memoizedState=Io,t):Ac(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,No(t,e,n,Error(S(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ia({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Kr(e,t.child,null,n),e.child.memoizedState=To(n),e.memoizedState=Io,s);if((e.mode&1)===0)e=No(t,e,n,null);else if(a.data==="$!")e=No(t,e,n,Error(S(419)));else if(r=(n&t.childLanes)!==0,qe||r){if(r=fe,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,ot(t,r,-1))}mf(),e=No(t,e,n,Error(S(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=pk.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,Fe=Lt(a.nextSibling),Ge=e,ne=!0,dt=null,n!==null&&(et[tt++]=Mt,et[tt++]=Dt,et[tt++]=tr,Mt=n.id,Dt=n.overflow,tr=e),e=Ac(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=Jp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?To(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=Io,r):(n=Xp(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=Jp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?To(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=Io,r):(n=Xp(t,e,r.children,n),e.memoizedState=null,n)}function Ac(t,e){return e=Ia({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xp(t,e,n,r){var i=t.child;return t=i.sibling,n=In(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function Jp(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=In(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=In(o,r):(r=Yn(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function No(t,e,n,r){return r!==null&&ef(r),Kr(e,t.child,null,n),t=Ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sc(t.return,e,n)}function mu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=ie.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nk(t,e,n){switch(e.tag){case 3:Hy(e),Yr();break;case 5:vy(e);break;case 1:je(e.type)&&da(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Vy(t,e,n):(J(ie,ie.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,jy(t,e,n)}return Gt(t,e,n)}function rk(t,e){switch(Zd(e),e.tag){case 1:return je(e.type)&&ca(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qr(),te(Be),te(Ne),rf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Qr(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var xo=!1,Wn=!1,ik=typeof WeakSet=="function"?WeakSet:Set,x=null;function wa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Oc(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var em=!1;function sk(t,e){if(t=Zv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:t,selectionRange:n},x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,b=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:ct(e.type,E),b);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;if(v.nodeType===1)v.textContent="";else if(v.nodeType===9){var _=v.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(C){Ue(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=em,em=!1,y}function Ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Oc(e,n,s)}i=i.next}while(i!==r)}}function ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tm(t,e,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(el,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&Oc(e,n,s),r=r.next}while(r!==t)}break;case 1:if(wa(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){Ue(e,n,o)}break;case 5:wa(e,n);break;case 4:Ky(t,e,n)}}function Gy(t){var e=t.alternate;e!==null&&(t.alternate=null,Gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[ws],delete e[Ec],delete e[jS],delete e[WS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yy(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rm(t){e:{for(var e=t.return;e!==null;){if(Yy(e))break e;e=e.return}throw Error(S(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(ds(e,""),n.flags&=-33),n=nm(t),Dc(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=nm(t),Mc(t,n,e);break;default:throw Error(S(161))}}function Mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ua));else if(r!==4&&(t=t.child,t!==null))for(Mc(t,e,n),t=t.sibling;t!==null;)Mc(t,e,n),t=t.sibling}function Dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function Ky(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(S(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(tm(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?cu(a.parentNode,l):a.nodeType===1&&cu(a,l),ms(a)):cu(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(tm(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function gu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:Ts(3,e,e.return),ll(3,e),Ts(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&Ev(n,r),lc(t,i),e=lc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Tv(n,a):o==="dangerouslySetInnerHTML"?kv(n,a):o==="children"?ds(n,a):Ld(n,o,a,e)}switch(t){case"input":rc(n,r);break;case"textarea":Cv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Mr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Mr(n,!!r.multiple,r.defaultValue,!0):Mr(n,!!r.multiple,r.multiple?[]:"",!1))}n[ws]=r}}return;case 6:if(e.stateNode===null)throw Error(S(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&ms(e.stateNode.containerInfo);return;case 12:return;case 13:im(e);return;case 19:im(e);return;case 17:return}throw Error(S(163))}function im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ik),e.forEach(function(r){var i=mk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ok(t,e){for(x=e;x!==null;){e=x;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{Ky(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(k){Ue(i,e,k)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,x=n;else for(;x!==null;){e=x;try{var o=e.flags;if(o&32&&ds(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(ff=ce())}break;case 22:var c=e.memoizedState!==null,d=e.alternate,f=d!==null&&d.memoizedState!==null;n=e;e:{r=n,i=c;for(var g=null,y=r;;){if(y.tag===5){if(g===null){g=y;var E=y.stateNode;if(i){var b=E.style;typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"}else{var m=y.stateNode,p=y.memoizedProps.style,v=p!=null&&p.hasOwnProperty("display")?p.display:null;m.style.display=Iv("display",v)}}}else if(y.tag===6)g===null&&(y.stateNode.nodeValue=i?"":y.memoizedProps);else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===r)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;g===y&&(g=null),y=y.return}g===y&&(g=null),y.sibling.return=y.return,y=y.sibling}}if(c&&!f&&(n.mode&1)!==0){x=n;for(var _=n.child;_!==null;){for(n=x=_;x!==null;){r=x;var C=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Ts(4,r,r.return);break;case 1:wa(r,r.return);var N=r.stateNode;if(typeof N.componentWillUnmount=="function"){var w=r.return;try{N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(k){Ue(r,w,k)}}break;case 5:wa(r,r.return);break;case 22:if(r.memoizedState!==null){om(n);continue}}C!==null?(C.return=r,x=C):om(n)}_=_.sibling}}}switch(o&4102){case 2:rm(e),e.flags&=-3;break;case 6:rm(e),e.flags&=-3,gu(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,gu(e.alternate,e);break;case 4:gu(e.alternate,e)}}catch(k){Ue(e,e.return,k)}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}}function ak(t,e,n){x=t,Qy(t)}function Qy(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Wn;a=xo;var u=Wn;if(xo=o,(Wn=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?am(i):l!==null?(l.return=o,x=l):am(i);for(;s!==null;)x=s,Qy(s),s=s.sibling;x=i,xo=a,Wn=u}sm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,x=s):sm(t)}}function sm(t){for(;x!==null;){var e=x;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Wn||ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ms(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Wn||e.flags&512&&Lc(e)}catch(f){Ue(e,e.return,f)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function om(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function am(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ll(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ue(e,i,l)}}var s=e.return;try{Lc(e)}catch(l){Ue(e,s,l)}break;case 5:var o=e.return;try{Lc(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var lk=Math.ceil,Ea=Qt.ReactCurrentDispatcher,cf=Qt.ReactCurrentOwner,st=Qt.ReactCurrentBatchConfig,V=0,fe=null,de=null,Ee=0,Ve=0,Rr=Pn(0),he=0,Ns=null,Jr=0,ul=0,df=0,ns=null,De=null,ff=0,Zr=1/0,Ca=!1,Fc=null,vn=null,bo=!1,un=null,Sa=0,rs=0,Uc=null,Vo=-1,qo=0;function Ae(){return(V&6)!==0?ce():Vo!==-1?Vo:Vo=ce()}function yn(t){return(t.mode&1)===0?1:(V&2)!==0&&Ee!==0?Ee&-Ee:VS.transition!==null?(qo===0&&(t=mo,mo<<=1,(mo&4194240)===0&&(mo=64),qo=t),qo):(t=G,t!==0||(t=window.event,t=t===void 0?16:Hv(t.type)),t)}function ot(t,e,n){if(50<rs)throw rs=0,Uc=null,Error(S(185));var r=cl(t,e);return r===null?null:(js(r,e,n),((V&2)===0||r!==fe)&&(r===fe&&((V&2)===0&&(ul|=e),he===4&&rn(r,Ee)),We(r,n),e===1&&V===0&&(t.mode&1)===0&&(Zr=ce()+500,sl&&Rn())),r)}function cl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function We(t,e){var n=t.callbackNode;VC(t,e);var r=oa(t,t===fe?Ee:0);if(r===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?HS(lm.bind(null,t)):uy(lm.bind(null,t)),$S(function(){V===0&&Rn()}),n=null;else{switch(Uv(r)){case 1:n=zd;break;case 4:n=Dv;break;case 16:n=sa;break;case 536870912:n=Fv;break;default:n=sa}n=i_(n,Xy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xy(t,e){if(Vo=-1,qo=0,(V&6)!==0)throw Error(S(327));var n=t.callbackNode;if($r()&&t.callbackNode!==n)return null;var r=oa(t,t===fe?Ee:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ka(t,r);else{e=r;var i=V;V|=2;var s=Zy();(fe!==t||Ee!==e)&&(Zr=ce()+500,Gn(t,e));do try{dk();break}catch(a){Jy(t,a)}while(1);Kd(),Ea.current=s,V=i,de!==null?e=0:(fe=null,Ee=0,e=he)}if(e!==0){if(e===2&&(i=hc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=Ns,Gn(t,0),rn(t,r),We(t,ce()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!uk(i)&&(e=ka(t,r),e===2&&(s=hc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=Ns,Gn(t,0),rn(t,r),We(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Dn(t,De);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=ff+500-ce(),10<e)){if(oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wc(Dn.bind(null,t,De),e);break}Dn(t,De);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lk(r/1960))-r,10<r){t.timeoutHandle=wc(Dn.bind(null,t,De),r);break}Dn(t,De);break;case 5:Dn(t,De);break;default:throw Error(S(329))}}}return We(t,ce()),t.callbackNode===n?Xy.bind(null,t):null}function zc(t,e){var n=ns;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=ka(t,e),t!==2&&(e=De,De=n,e!==null&&$c(e)),t}function $c(t){De===null?De=t:De.push.apply(De,t)}function uk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~df,e&=~ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function lm(t){if((V&6)!==0)throw Error(S(327));$r();var e=oa(t,0);if((e&1)===0)return We(t,ce()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=hc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=Ns,Gn(t,0),rn(t,e),We(t,ce()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,De),We(t,ce()),null}function hf(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(Zr=ce()+500,sl&&Rn())}}function nr(t){un!==null&&un.tag===0&&(V&6)===0&&$r();var e=V;V|=1;var n=st.transition,r=G;try{if(st.transition=null,G=1,t)return t()}finally{G=r,st.transition=n,V=e,(V&6)===0&&Rn()}}function pf(){Ve=Rr.current,te(Rr)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ca();break;case 3:Qr(),te(Be),te(Ne),rf();break;case 5:nf(r);break;case 4:Qr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Qd(r.type._context);break;case 22:case 23:pf()}n=n.return}if(fe=t,de=t=In(t.current,null),Ee=Ve=e,he=0,Ns=null,df=ul=Jr=0,De=ns=null,Et!==null){for(e=0;e<Et.length;e++)if(n=Et[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Et=null}return t}function Jy(t,e){do{var n=de;try{if(Kd(),Wo.current=_a,ya){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ya=!1}if(Xr=0,ge=Te=le=null,ts=!1,Ss=0,cf.current=null,n===null||n.return===null){he=1,Ns=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Vp(o);if(g!==null){g.flags&=-257,qp(g,o,a,s,e),g.mode&1&&Hp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if((e&1)===0){Hp(s,u,e),mf();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var b=Vp(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),qp(b,o,a,s,e),ef(l);break e}}s=l,he!==4&&(he=2),ns===null?ns=[s]:ns.push(s),l=uf(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=Dy(a,l,e);Fp(a,m);break e;case 1:s=l;var p=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vn===null||!vn.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=Fy(a,s,e);Fp(a,_);break e}}a=a.return}while(a!==null)}t_(n)}catch(C){e=C,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function Zy(){var t=Ea.current;return Ea.current=_a,t===null?_a:t}function mf(){(he===0||he===3||he===2)&&(he=4),fe===null||(Jr&268435455)===0&&(ul&268435455)===0||rn(fe,Ee)}function ka(t,e){var n=V;V|=2;var r=Zy();fe===t&&Ee===e||Gn(t,e);do try{ck();break}catch(i){Jy(t,i)}while(1);if(Kd(),V=n,Ea.current=r,de!==null)throw Error(S(261));return fe=null,Ee=0,he}function ck(){for(;de!==null;)e_(de)}function dk(){for(;de!==null&&!DC();)e_(de)}function e_(t){var e=r_(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?t_(t):de=e,cf.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ek(n,e,Ve),n!==null){de=n;return}}else{if(n=rk(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,de=null;return}}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);he===0&&(he=5)}function Dn(t,e){var n=G,r=st.transition;try{st.transition=null,G=1,fk(t,e,n)}finally{st.transition=r,G=n}return null}function fk(t,e,n){do $r();while(un!==null);if((V&6)!==0)throw Error(S(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(qC(t,s),t===fe&&(de=fe=null,Ee=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||bo||(bo=!0,i_(sa,function(){return $r(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=st.transition,st.transition=null;var o=G;G=1;var a=V;V|=4,cf.current=null,sk(t,r),ok(t,r),AS(yc),yc=null,t.current=r,ak(r),FC(),V=a,G=o,st.transition=s}else t.current=r;if(bo&&(bo=!1,un=t,Sa=i),s=t.pendingLanes,s===0&&(vn=null),$C(r.stateNode),We(t,ce()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(Ca)throw Ca=!1,t=Fc,Fc=null,t;return(Sa&1)!==0&&t.tag!==0&&$r(),s=t.pendingLanes,(s&1)!==0?t===Uc?rs++:(rs=0,Uc=t):rs=0,Rn(),null}function $r(){if(un!==null){var t=Uv(Sa),e=st.transition,n=G;try{if(st.transition=null,G=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,Sa=0,(V&6)!==0)throw Error(S(331));var i=V;for(V|=4,x=t.current;x!==null;){var s=x,o=s.child;if((x.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Ts(8,c,s)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var f=c.sibling,g=c.return;if(Gy(c),c===u){x=null;break}if(f!==null){f.return=g,x=f;break}x=g}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var b=E.sibling;E.sibling=null,E=b}while(E!==null)}}x=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ts(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,x=v;else e:for(o=p;x!==null;){if(a=x,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ll(9,a)}}catch(C){Ue(a,a.return,C)}if(a===o){x=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,x=_;break e}x=a.return}}if(V=i,Rn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(el,t)}catch{}r=!0}return r}finally{G=n,st.transition=e}}return!1}function um(t,e,n){e=uf(n,e),e=Dy(t,e,1),gn(t,e),e=Ae(),t=cl(t,1),t!==null&&(js(t,1,e),We(t,e))}function Ue(t,e,n){if(t.tag===3)um(t,t,n);else for(;e!==null;){if(e.tag===3){um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=uf(n,t),t=Fy(e,t,1),gn(e,t),t=Ae(),e=cl(e,1),e!==null&&(js(e,1,t),We(e,t));break}}e=e.return}}function hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>ce()-ff?Gn(t,0):df|=n),We(t,e)}function n_(t,e){e===0&&((t.mode&1)===0?e=1:(e=go,go<<=1,(go&130023424)===0&&(go=4194304)));var n=Ae();t=cl(t,e),t!==null&&(js(t,e,n),We(t,n))}function pk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function mk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),n_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)qe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return qe=!1,nk(t,e,n);qe=(t.flags&131072)!==0}else qe=!1,ne&&(e.flags&1048576)!==0&&hy(e,ga,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Gr(e,Ne.current);zr(e,n),i=of(null,e,r,t,i,n);var s=af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xd(e),i.updater=ol,e.stateNode=i,i._reactInternals=e,Ic(e,r,t,n),e=Rc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Jd(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vk(r),t=ct(r,t),i){case 0:e=Pc(null,e,r,t,n);break e;case 1:e=Kp(null,e,r,t,n);break e;case 11:e=Gp(null,e,r,t,n);break e;case 14:e=Yp(null,e,r,ct(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Kp(t,e,r,i,n);case 3:e:{if(Hy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cy(t,e),pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(S(423)),e=Qp(t,e,r,n,i);break e}else if(r!==i){i=Error(S(424)),e=Qp(t,e,r,n,i);break e}else for(Fe=Lt(e.stateNode.containerInfo.firstChild),Ge=e,ne=!0,dt=null,n=gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Gt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return vy(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_c(r,i)?o=null:s!==null&&_c(r,s)&&(e.flags|=32),Wy(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Vy(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Kr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Gp(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(fa,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Be.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$t(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zr(e,n),i=lt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=ct(r,e.pendingProps),i=ct(r.type,i),Yp(t,e,r,i,n);case 15:return By(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,je(r)?(t=!0,da(e)):t=!1,zr(e,n),fy(e,r,i),Ic(e,r,i,n),Rc(null,e,r,!0,t,n);case 19:return qy(t,e,n);case 22:return jy(t,e,n)}throw Error(S(156,e.tag))};function i_(t,e){return Mv(t,e)}function gk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new gk(t,e,n,r)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vk(t){if(typeof t=="function")return gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dd)return 11;if(t===Fd)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cr:return Yn(n.children,i,s,e);case Md:o=8,i|=8;break;case Ju:return t=nt(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=nt(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=nt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case yv:return Ia(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gv:o=10;break e;case vv:o=9;break e;case Dd:o=11;break e;case Fd:o=14;break e;case en:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function Ia(t,e,n,r){return t=nt(22,t,r,e),t.elementType=yv,t.lanes=n,t.stateNode={},t}function vu(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(t,e,n,r,i,s,o,a,l){return t=new yk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Xd(s),t}function _k(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return kn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(je(n))return ly(t,n,e)}return e}function o_(t,e,n,r,i,s,o,a,l){return t=vf(n,r,!0,t,i,s,o,a,l),t.context=s_(null),n=t.current,r=Ae(),i=yn(n),s=$t(r,i),s.callback=e!=null?e:null,gn(n,s),t.current.lanes=i,js(t,i,r),We(t,r),t}function dl(t,e,n,r){var i=e.current,s=Ae(),o=yn(i);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),gn(i,e),t=ot(i,o,s),t!==null&&jo(t,i,o),o}function Ta(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yf(t,e){cm(t,e),(t=t.alternate)&&cm(t,e)}function wk(){return null}var a_=typeof reportError=="function"?reportError:function(t){console.error(t)};function _f(t){this._internalRoot=t}fl.prototype.render=_f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));dl(t,e,null,null)};fl.prototype.unmount=_f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){dl(null,t,null,null)}),e[qt]=null}};function fl(t){this._internalRoot=t}fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&Wv(t)}};function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function Ek(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ta(o);s.call(u)}}var o=o_(e,r,t,0,null,!1,!1,"",dm);return t._reactRootContainer=o,t[qt]=o.current,ys(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ta(l);a.call(u)}}var l=vf(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[qt]=l.current,ys(t.nodeType===8?t.parentNode:t),nr(function(){dl(e,l,n,r)}),l}function pl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ta(o);a.call(l)}}dl(e,o,t,i)}else o=Ek(n,e,t,i,r);return Ta(o)}zv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ji(e.pendingLanes);n!==0&&($d(e,n|1),We(e,ce()),(V&6)===0&&(Zr=ce()+500,Rn()))}break;case 13:var r=Ae();nr(function(){return ot(t,1,r)}),yf(t,1)}};Bd=function(t){if(t.tag===13){var e=Ae();ot(t,134217728,e),yf(t,134217728)}};$v=function(t){if(t.tag===13){var e=Ae(),n=yn(t);ot(t,n,e),yf(t,n)}};Bv=function(){return G};jv=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=il(r);if(!i)throw Error(S(90));wv(r),rc(r,i)}}}break;case"textarea":Cv(t,n);break;case"select":e=n.value,e!=null&&Mr(t,!!n.multiple,e,!1)}};bv=hf;Pv=nr;var Ck={usingClientEntryPoint:!1,Events:[Hs,Tr,il,Nv,xv,hf]},Li={findFiberByHostInstance:Bn,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},Sk={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ov(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||wk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{el=Po.inject(Sk),Ct=Po}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ck;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error(S(200));return _k(t,e,null,n)};Xe.createRoot=function(t,e){if(!wf(t))throw Error(S(299));var n=!1,r="",i=a_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vf(t,1,!1,null,null,n,!1,r,i),t[qt]=e.current,ys(t.nodeType===8?t.parentNode:t),new _f(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Ov(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return nr(t)};Xe.hydrate=function(t,e,n){if(!hl(e))throw Error(S(200));return pl(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!wf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=a_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[qt]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fl(e)};Xe.render=function(t,e,n){if(!hl(e))throw Error(S(200));return pl(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!hl(t))throw Error(S(40));return t._reactRootContainer?(nr(function(){pl(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};Xe.unstable_batchedUpdates=hf;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return pl(t,e,n,!1,r)};Xe.version="18.0.0-fc46dba67-20220329";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(t){console.error(t)}}l_(),dv.exports=Xe;var fm=dv.exports;Qu.createRoot=fm.createRoot,Qu.hydrateRoot=fm.hydrateRoot;const kk=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"});function u_(t){return t&&kk.format(t)}function Ik(t){return e=>e.keyCode===13&&t&&t(e)}const c_="https://sds-butterfly-api.herokuapp.com";async function Tk({route:t,options:e={}}){const n=`${c_}${t}`;return await(await fetch(n,e)).json()}function Nk({url:t,options:e={},deps:n=[]}){const[r,i]=R.exports.useState(null),[s,o]=R.exports.useState(null);return R.exports.useEffect(()=>{async function a(){try{const u=await(await fetch(t,e)).json();i(u)}catch(l){o(l)}}a()},n),[r,s]}function xk(n){var r=n,{route:t}=r,e=Wl(r,["route"]);return Nk(be({url:`${c_}${t}`},e))}/**
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
 */const d_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw pi(e)},pi=function(t){return new Error("Firebase Database ("+d_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const f_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},h_=function(t){const e=f_(t);return Ef.encodeByteArray(e,!0)},p_=function(t){return h_(t).replace(/\./g,"")},Bc=function(t){try{return Ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pk(t){return m_(void 0,t)}function m_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rk(n)||(t[n]=m_(t[n],e[n]));return t}function Rk(t){return t!=="__proto__"}/**
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
 */class qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Ak(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ok(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v_(){return d_.NODE_ADMIN===!0}function Lk(){return typeof indexedDB=="object"}function Mk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dk="FirebaseError";class mi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dk,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Fk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mi(i,a,r)}}function Fk(t,e){return t.replace(Uk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uk=/\{\$([^}]+)}/g;/**
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
 */function xs(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
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
 */const y_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=xs(Bc(s[0])||""),n=xs(Bc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zk=function(t){const e=y_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$k=function(t){const e=y_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hm(s)&&hm(o)){if(!xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hm(t){return t!==null&&typeof t=="object"}/**
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
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Bk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function jk(t,e){const n=new Wk(t,e);return n.subscribe.bind(n)}class Wk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_u),i.error===void 0&&(i.error=_u),i.complete===void 0&&(i.complete=_u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function Ys(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ml=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}/**
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
 */function qi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class pm{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new __(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new w_(this._db.createObjectStore(e,n))}close(){this._db.close()}}class __{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new w_(this._transaction.objectStore(e))}}class w_{constructor(e){this._store=e}index(e){return new mm(this._store.index(e))}createIndex(e,n,r){return new mm(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return qi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return qi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return qi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return qi(e,"Error clearing IndexedDB object store")}}class mm{constructor(e){this._index=e}get(e){const n=this._index.get(e);return qi(n,"Error reading from IndexedDB")}}function qk(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new pm(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new pm(s.result),o.oldVersion,o.newVersion,new __(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class Gk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kk(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yk(t){return t===Fn?void 0:t}function Kk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const Xk={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Jk=K.INFO,Zk={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},eI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sf{constructor(e){this.name=e,this._logLevel=Jk,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}/**
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
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",gm="0.7.21";/**
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
 */const kf=new Sf("@firebase/app"),rI="@firebase/app-compat",iI="@firebase/analytics-compat",sI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",lI="@firebase/auth",uI="@firebase/auth-compat",cI="@firebase/database",dI="@firebase/database-compat",fI="@firebase/functions",hI="@firebase/functions-compat",pI="@firebase/installations",mI="@firebase/installations-compat",gI="@firebase/messaging",vI="@firebase/messaging-compat",yI="@firebase/performance",_I="@firebase/performance-compat",wI="@firebase/remote-config",EI="@firebase/remote-config-compat",CI="@firebase/storage",SI="@firebase/storage-compat",kI="@firebase/firestore",II="@firebase/firestore-compat",TI="firebase",NI="9.6.11";/**
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
 */const E_="[DEFAULT]",xI={[Wc]:"fire-core",[rI]:"fire-core-compat",[sI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[lI]:"fire-auth",[uI]:"fire-auth-compat",[cI]:"fire-rtdb",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[hI]:"fire-fn-compat",[pI]:"fire-iid",[mI]:"fire-iid-compat",[gI]:"fire-fcm",[vI]:"fire-fcm-compat",[yI]:"fire-perf",[_I]:"fire-perf-compat",[wI]:"fire-rc",[EI]:"fire-rc-compat",[CI]:"fire-gcs",[SI]:"fire-gcs-compat",[kI]:"fire-fst",[II]:"fire-fst-compat","fire-js":"fire-js",[TI]:"fire-js-all"};/**
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
 */const ba=new Map,Hc=new Map;function bI(t,e){try{t.container.addComponent(e)}catch(n){kf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Hc.has(e))return kf.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of ba.values())bI(n,t);return!0}function If(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const PI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ir=new Gs("app","Firebase",PI);/**
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
 */class RI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=NI;function AI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:E_,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ir.create("bad-app-name",{appName:String(r)});const i=ba.get(r);if(i){if(xa(t,i.options)&&xa(n,i.config))return i;throw ir.create("duplicate-app",{appName:r})}const s=new Qk(r);for(const a of Hc.values())s.addComponent(a);const o=new RI(t,n,s);return ba.set(r,o),o}function C_(t=E_){const e=ba.get(t);if(!e)throw ir.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=xI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kf.warn(a.join(" "));return}ti(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OI="firebase-heartbeat-database",LI=1,bs="firebase-heartbeat-store";let wu=null;function S_(){return wu||(wu=qk(OI,LI,(t,e)=>{switch(e){case 0:t.createObjectStore(bs)}}).catch(t=>{throw ir.create("storage-open",{originalErrorMessage:t.message})})),wu}async function MI(t){try{return(await S_()).transaction(bs).objectStore(bs).get(k_(t))}catch(e){throw ir.create("storage-get",{originalErrorMessage:e.message})}}async function vm(t,e){try{const r=(await S_()).transaction(bs,"readwrite");return await r.objectStore(bs).put(e,k_(t)),r.complete}catch(n){throw ir.create("storage-set",{originalErrorMessage:n.message})}}function k_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DI=1024,FI=30*24*60*60*1e3;class UI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ym();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ym(),{heartbeatsToSend:n,unsentEntries:r}=zI(this._heartbeatsCache.heartbeats),i=p_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ym(){return new Date().toISOString().substring(0,10)}function zI(t,e=DI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_m(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_m(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lk()?Mk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await MI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _m(t){return p_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BI(t){ti(new rr("platform-logger",e=>new tI(e),"PRIVATE")),ti(new rr("heartbeat",e=>new UI(e),"PRIVATE")),_n(Wc,gm,t),_n(Wc,gm,"esm2017"),_n("fire-js","")}BI("");var jI="firebase",WI="9.6.11";/**
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
 */_n(jI,WI,"app");const HI="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",VI="sds-butterfly.firebaseapp.com",qI="sds-butterfly",GI="sds-butterfly.appspot.com",YI="265457992927",KI="1:265457992927:web:f8b8781a13dd1e4b3fd56a";function QI(){return AI({apiKey:HI,authDomain:VI,projectId:qI,storageBucket:GI,messagingSenderId:YI,appId:KI})}const XI=R.exports.createContext();function JI(t,e,n=null){const r=n||`${e}s`;return t===1?`${t} ${e}`:`${t} ${r}`}var gl={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZI=R.exports,eT=Symbol.for("react.element"),tT=Symbol.for("react.fragment"),nT=Object.prototype.hasOwnProperty,rT=ZI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iT={key:!0,ref:!0,__self:!0,__source:!0};function I_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nT.call(e,r)&&!iT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eT,type:t,key:s,ref:o,props:i,_owner:rT.current}}vl.Fragment=tT;vl.jsx=I_;vl.jsxs=I_;gl.exports=vl;const h=gl.exports.jsx,T=gl.exports.jsxs,yl=gl.exports.Fragment;function sT(){return h("div",{className:"Layout",children:h(ww,{})})}function oT(){return h("div",{className:"Layout Page NotFoundPage FullHeight VerticalCenter",children:T("div",{children:[h("h1",{className:"BigTitle",children:"Page Not Found"}),h("p",{children:"Sorry about that!"}),h(at,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}var T_={exports:{}},aT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lT=aT,uT=lT;function N_(){}function x_(){}x_.resetWarningCache=N_;var cT=function(){function t(r,i,s,o,a,l){if(l!==uT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:x_,resetWarningCache:N_};return n.PropTypes=n,n};T_.exports=cT();var W=T_.exports;function wm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wm(Object(n),!0).forEach(function(r){Ar(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pa(t){return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pa(t)}function Ar(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b_(t,e){if(t==null)return{};var n=dT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Vc(t){return fT(t)||hT(t)||pT(t)||mT()}function fT(t){if(Array.isArray(t))return qc(t)}function hT(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pT(t,e){if(!!t){if(typeof t=="string")return qc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qc(t,e)}}function qc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function mT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gT(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,y=t.border,E=t.listItem,b=t.flip,m=t.size,p=t.rotation,v=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":y,"fa-li":E,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Ar(e,"fa-".concat(m),typeof m!="undefined"&&m!==null),Ar(e,"fa-rotate-".concat(p),typeof p!="undefined"&&p!==null&&p!==0),Ar(e,"fa-pull-".concat(v),typeof v!="undefined"&&v!==null),Ar(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function vT(t){return t=t-0,t===t}function P_(t){return vT(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var yT=["style"];function _T(t){return t.charAt(0).toUpperCase()+t.slice(1)}function wT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=P_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[_T(i)]=s:e[i]=s,e},{})}function R_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return R_(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=wT(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[P_(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=b_(n,yT);return i.attrs.style=cn(cn({},i.attrs.style),o),t.apply(void 0,[e.tag,cn(cn({},i.attrs),a)].concat(Vc(r)))}var A_=!1;try{A_=!0}catch{}function ET(){if(!A_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Em(t){if(t&&Pa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ku.icon)return Ku.icon(t);if(t===null)return null;if(t&&Pa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Eu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ar({},t,e):{}}var CT=["forwardedRef"];function Ke(t){var e=t.forwardedRef,n=b_(t,CT),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=Em(r),d=Eu("classes",[].concat(Vc(gT(n)),Vc(o.split(" ")))),f=Eu("transform",typeof n.transform=="string"?Ku.transform(n.transform):n.transform),g=Eu("mask",Em(i)),y=uC(c,cn(cn(cn(cn({},d),f),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!y)return ET("Could not find icon",c),null;var E=y.abstract,b={ref:e};return Object.keys(n).forEach(function(m){Ke.defaultProps.hasOwnProperty(m)||(b[m]=n[m])}),ST(E[0],b)}Ke.displayName="FontAwesomeIcon";Ke.propTypes={beat:W.bool,border:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf(["horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};Ke.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ST=R_.bind(null,bg.createElement);const _l=a=>{var l=a,{label:t,primary:e=!1,iconBefore:n=null,iconAfter:r=null,role:i="button",tabIndex:s=0}=l,o=Wl(l,["label","primary","iconBefore","iconAfter","role","tabIndex"]);const c=["Button",e?"Primary":""].join(" "),d=n&&h(Ke,{icon:n,className:"IconBefore"}),f=r&&h(Ke,{icon:r,className:"IconAfter"}),g=yt(be({},o),{className:c,role:i,tabIndex:s,onKeyDown:(o==null?void 0:o.onKeyDown)||Ik(o==null?void 0:o.onClick)});return T("span",yt(be({},g),{children:[d,h("span",{children:t}),f]}))};function wl({hasError:t,children:e}){return t&&h("div",{className:"Card Full Error",children:e})}function Ps({user:t}){const{displayName:e,photoURL:n}=t,r=`Profile image for ${e}.`;return T("div",{className:"UserTile",children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:r,className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:e})})]})}var kT="/butterfly/assets/logo-butterfly-rainbow.bb6a1027.png";function Tf({size:t,align:e}){return h("div",{className:`Logo ${t} ${e}`,children:h("img",{alt:"Butterfly Logo",src:kT})})}function IT(){return h("div",{className:"Layout Page HomePage FullHeight VerticalCenter",children:T("div",{children:[h(Tf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(at,{to:"/login",children:h(_l,{label:"Login",primary:!0})})]})})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var TT={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Nf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function O_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NT=O_,L_=new Gs("auth","Firebase",O_());/**
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
 */const Cm=new Sf("@firebase/auth");function Yo(t,...e){Cm.logLevel<=K.ERROR&&Cm.error(`Auth (${Ks}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw xf(t,...e)}function kt(t,...e){return xf(t,...e)}function M_(t,e,n){const r=Object.assign(Object.assign({},NT()),{[e]:n});return new Gs("auth","Firebase",r).create(e,{appName:t.name})}function xT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),M_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function F(t,e,...n){if(!t)throw xf(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function Yt(t,e){t||Ft(e)}/**
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
 */const Sm=new Map;function Ut(t){Yt(t instanceof Function,"Expected a class definition");let e=Sm.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sm.set(t,e),e)}/**
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
 */function bT(t,e){const n=If(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xa(s,e!=null?e:{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function PT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Gc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RT(){return km()==="http:"||km()==="https:"}function km(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||Ak()||"connection"in navigator)?navigator.onLine:!0}function OT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Cf()||g_()}get(){return AT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bf(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class D_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const MT=new Qs(3e4,6e4);function El(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,i={}){return F_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D_.fetch()(U_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function F_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LT),e);try{const i=new DT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cu(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw M_(t,c,u);ut(t,c)}}catch(i){if(i instanceof mi)throw i;ut(t,"network-request-failed")}}async function Cl(t,e,n,r,i={}){const s=await vi(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bf(t.config,i):`${t.config.apiScheme}://${i}`}class DT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),MT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function FT(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function UT(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zT(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Pf(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:is(Su(i.auth_time)),issuedAtTime:is(Su(i.iat)),expirationTime:is(Su(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Su(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bc(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i),null}}function $T(t){const e=Pf(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mi&&BT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class z_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ni(t,UT(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?VT(s.providerUserInfo):[],a=HT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new z_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function WT(t){const e=He(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VT(t){return t.map(e=>{var{providerId:n}=e,r=Nf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qT(t,e){const n=await F_(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$T(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function Zt(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new z_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zT(this,e)}reload(){return WT(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ni(this,FT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:C,providerData:N,stsTokenManager:w}=n;F(v&&w,e,"internal-error");const k=Rs.fromJSON(this.name,w);F(typeof v=="string",e,"internal-error"),Zt(d,e.name),Zt(f,e.name),F(typeof _=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),Zt(g,e.name),Zt(y,e.name),Zt(E,e.name),Zt(b,e.name),Zt(m,e.name),Zt(p,e.name);const M=new Kn({uid:v,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:k,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(M.providerData=N.map(D=>Object.assign({},D))),b&&(M._redirectEventId=b),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new Kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ra(s),s}}/**
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
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$_.type="NONE";const Im=$_;/**
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ko(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ko("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(Ut(Im),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(Im);const o=Ko(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Kn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Br(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Br(s,e,r))}}/**
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
 */function Tm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V_(e))return"Blackberry";if(q_(e))return"Webos";if(Rf(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(H_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=xe()){return/firefox\//i.test(t)}function Rf(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(t=xe()){return/crios\//i.test(t)}function W_(t=xe()){return/iemobile/i.test(t)}function H_(t=xe()){return/android/i.test(t)}function V_(t=xe()){return/blackberry/i.test(t)}function q_(t=xe()){return/webos/i.test(t)}function Sl(t=xe()){return/iphone|ipad|ipod/i.test(t)}function GT(t=xe()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YT(){return Ok()&&document.documentMode===10}function G_(t=xe()){return Sl(t)||H_(t)||q_(t)||V_(t)||/windows phone/i.test(t)||W_(t)}function KT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=Tm(xe());break;case"Worker":n=`${Tm(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
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
 */class QT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nm(this),this.idTokenSubscription=new Nm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function kl(t){return He(t)}class Nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=jk(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function XT(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function JT(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",El(t,e))}/**
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
 */async function ZT(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}async function e2(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",El(t,e))}/**
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
 */class As extends Af{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new As(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return JT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ZT(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return XT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return e2(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jr(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",El(t,e))}/**
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
 */const t2="http://localhost";class sr extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:t2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
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
 */function n2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r2(t){const e=Hi(Vi(t)).link,n=e?Hi(Vi(e)).deep_link_id:null,r=Hi(Vi(t)).deep_link_id;return(r?Hi(Vi(r)).link:null)||r||n||e||t}class Of{constructor(e){var n,r,i,s,o,a;const l=Hi(Vi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=n2((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r2(e);try{return new Of(n)}catch{return null}}}/**
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
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Of.parseLink(n);return F(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends Lf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends Xs{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class on extends Xs{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends Xs{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kn._fromIdTokenResponse(e,r,i),o=xm(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xm(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Aa extends mi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Aa(e,n,r,i)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,s,e,r):s})}async function i2(t,e,n=!1){const r=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function s2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ni(t,K_(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Pf(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
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
 */async function Q_(t,e,n=!1){const r="signIn",i=await K_(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function o2(t,e){return Q_(kl(t),e)}function a2(t,e,n){return o2(He(t),yi.credential(e,n))}/**
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
 */async function l2(t,e){return vi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function u2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ni(r,l2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function c2(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function d2(t){return He(t).signOut()}const Oa="__sak";/**
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
 */class X_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function f2(){const t=xe();return Rf(t)||Sl(t)}const h2=1e3,p2=10;class J_ extends X_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=f2()&&KT(),this.fallbackToPolling=G_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,p2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const m2=J_;/**
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
 */class Z_ extends X_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z_.type="SESSION";const e0=Z_;/**
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
 */function g2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await g2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
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
 */function Mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class v2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Mf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function y2(t){It().location.href=t}/**
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
 */function t0(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function _2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function E2(){return t0()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",C2=1,La="firebaseLocalStorage",r0="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function S2(){const t=indexedDB.deleteDatabase(n0);return new Js(t).toPromise()}function Yc(){const t=indexedDB.open(n0,C2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(La,{keyPath:r0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(La)?e(r):(r.close(),await S2(),e(await Yc()))})})}async function bm(t,e,n){const r=Tl(t,!0).put({[r0]:e,value:n});return new Js(r).toPromise()}async function k2(t,e){const n=Tl(t,!1).get(e),r=await new Js(n).toPromise();return r===void 0?null:r.value}function Pm(t,e){const n=Tl(t,!0).delete(e);return new Js(n).toPromise()}const I2=800,T2=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>T2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(E2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _2(),!this.activeServiceWorker)return;this.sender=new v2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await bm(e,Oa,"1"),await Pm(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>k2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new Js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const N2=i0;/**
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
 */function x2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function b2(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",x2().appendChild(r)})}function P2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qs(3e4,6e4);/**
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
 */function s0(t,e){return e?Ut(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Df extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R2(t){return Q_(t.auth,new Df(t),t.bypassAuthState)}function A2(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),s2(n,new Df(t),t.bypassAuthState)}async function O2(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),i2(n,new Df(t),t.bypassAuthState)}/**
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
 */class o0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R2;case"linkViaPopup":case"linkViaRedirect":return O2;case"reauthViaPopup":case"reauthViaRedirect":return A2;default:ut(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L2=new Qs(2e3,1e4);async function M2(t,e,n){const r=kl(t);xT(t,e,Lf);const i=s0(r,n);return new Hn(r,"signInViaPopup",e,i).executeNotNull()}class Hn extends o0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,L2.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const D2="pendingRedirect",ku=new Map;class F2 extends o0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await U2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U2(t,e){const n=$2(e),r=z2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function z2(t){return Ut(t._redirectPersistence)}function $2(t){return Ko(D2,t.config.apiKey,t.name)}async function B2(t,e,n=!1){const r=kl(t),i=s0(r,e),o=await new F2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const j2=10*60*1e3;class W2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
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
 */async function V2(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
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
 */const q2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G2=/^https?/;async function Y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await V2(t);for(const n of e)try{if(K2(n))return}catch{}ut(t,"unauthorized-domain")}function K2(t){const e=Gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G2.test(n))return!1;if(q2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Q2=new Qs(3e4,6e4);function Am(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function X2(t){return new Promise((e,n)=>{var r,i,s;function o(){Am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Am(),n(kt(t,"network-request-failed"))},timeout:Q2.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const a=P2("iframefcb");return It()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},b2(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qo=null,e})}let Qo=null;function J2(t){return Qo=Qo||X2(t),Qo}/**
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
 */const Z2=new Qs(5e3,15e3),eN="__/auth/iframe",tN="emulator/auth/iframe",nN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iN(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bf(e,tN):`https://${t.config.authDomain}/${eN}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=rN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${gi(r).slice(1)}`}async function sN(t){const e=await J2(t),n=It().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:iN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=It().setTimeout(()=>{s(o)},Z2.get());function l(){It().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const oN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aN=500,lN=600,uN="_blank",cN="http://localhost";class Om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dN(t,e,n,r=aN,i=lN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(a=j_(u)?uN:n),B_(u)&&(e=e||cN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(GT(u)&&a!=="_self")return fN(e||"",a),new Om(null);const d=window.open(e||"",a,c);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Om(d)}function fN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hN="__/auth/handler",pN="emulator/auth/handler";function Lm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof Lf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Xs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${mN(t)}?${gi(a).slice(1)}`}function mN({config:t}){return t.emulator?bf(t,pN):`https://${t.authDomain}/${hN}`}/**
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
 */const Iu="webStorageSupport";class gN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=B2}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Lm(e,n,r,Gc(),i);return dN(e,o,Mf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),y2(Lm(e,n,r,Gc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sN(e),r=new W2(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Iu,{type:Iu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Iu];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G_()||Rf()||Sl()}}const vN=gN;var Mm="@firebase/auth",Dm="0.19.12";/**
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
 */class yN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wN(t){ti(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},c=new QT(a,l,u);return PT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new rr("auth-internal",e=>{const n=kl(e.getProvider("auth").getImmediate());return(r=>new yN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Mm,Dm,_N(t)),_n(Mm,Dm,"esm2017")}/**
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
 */function Nl(t=C_()){const e=If(t,"auth");return e.isInitialized()?e.getImmediate():bT(t,{popupRedirectResolver:vN,persistence:[N2,m2,e0]})}wN("Browser");async function EN(){try{const t=Nl(),e=new Ot,{user:n}=await M2(t,e);return{user:n,signInError:null}}catch(t){return{user:null,signInError:t}}}async function l0(){try{const t=Nl();return await d2(t),{isSuccess:!0,signOutError:null}}catch(t){return{isSuccess:!1,signOutError:t}}}function Zs(){const[t,e]=R.exports.useState(null),n=Nl();return R.exports.useEffect(()=>c2(n,i=>{e(s=>(s==null?void 0:s.uid)!==(i==null?void 0:i.uid)?i:s)}),[n]),t}function u0({authUser:t,doLogOut:e}){return t&&T("div",{children:[h("hr",{}),T("p",{children:["Currently logged in as ",t.displayName,"."]}),h("p",{children:h(at,{to:"/chats",children:"Go to Chats"})}),h("p",{children:T("span",{className:"Button",role:"button",tabIndex:0,onClick:e,onKeyDown:e,children:[h(Ke,{icon:EC,className:"IconBefore"}),h("span",{children:"Log Out"})]})})]})}const Fm="@firebase/database",Um="0.12.8";/**
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
 */let c0="";function CN(t){c0=t}/**
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
 */class SN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const d0=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SN(e)}}catch{}return new kN},Vn=d0("localStorage"),Kc=d0("sessionStorage");/**
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
 */const Wr=new Sf("@firebase/database"),IN=function(){let t=1;return function(){return t++}}(),f0=function(t){const e=Vk(t),n=new Bk;n.update(e);const r=n.digest();return Ef.encodeByteArray(r)},eo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=eo.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Qn=null,zm=!0;const TN=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wr.logLevel=K.VERBOSE,Qn=Wr.log.bind(Wr),e&&Kc.set("logging_enabled",!0)):typeof t=="function"?Qn=t:(Qn=null,Kc.remove("logging_enabled"))},we=function(...t){if(zm===!0&&(zm=!1,Qn===null&&Kc.get("logging_enabled")===!0&&TN(!0)),Qn){const e=eo.apply(null,t);Qn(e)}},to=function(t){return function(...e){we(t,...e)}},Qc=function(...t){const e="FIREBASE INTERNAL ERROR: "+eo(...t);Wr.error(e)},or=function(...t){const e=`FIREBASE FATAL ERROR: ${eo(...t)}`;throw Wr.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+eo(...t);Wr.warn(e)},NN=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ff=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ar="[MIN_NAME]",Tn="[MAX_NAME]",pr=function(t,e){if(t===e)return 0;if(t===ar||e===Tn)return-1;if(e===ar||t===Tn)return 1;{const n=$m(t),r=$m(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bN=function(t,e){return t===e?0:t<e?-1:1},Mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Uf=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Uf(t[e[r]]);return n+="}",n},h0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const p0=function(t){I(!Ff(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},PN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ON=new RegExp("^-?(0*)\\d{1,10}$"),LN=-2147483648,MN=2147483647,$m=function(t){if(ON.test(t)){const e=Number(t);if(e>=LN&&e<=MN)return e}return null},_i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},DN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class UN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Xc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xc.OWNER="owner";/**
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
 */const zf="5",m0="v",g0="s",v0="r",y0="f",_0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,w0="ls",zN="p",Jc="ac",E0="websocket",C0="long_polling";/**
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
 */class $N{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function S0(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===E0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===C0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BN(t)&&(n.ns=t.namespace);const i=[];return Se(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class jN{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pk(this.counters_)}}/**
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
 */const Tu={},Nu={};function $f(t){const e=t.toString();return Tu[e]||(Tu[e]=new jN),Tu[e]}function WN(t,e){const n=t.toString();return Nu[n]||(Nu[n]=e()),Nu[n]}/**
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
 */class HN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&_i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Bm="start",VN="close",qN="pLPCommand",GN="pRTLPCB",k0="id",I0="pw",T0="ser",YN="cb",KN="seg",QN="ts",XN="d",JN="dframe",N0=1870,x0=30,ZN=N0-x0,ex=25e3,tx=3e4;class Or{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=to(e),this.stats_=$f(n),this.urlFn=l=>(this.appCheckToken&&(l[Jc]=this.appCheckToken),S0(n,C0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tx)),xN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bm)this.id=a,this.password=l;else if(o===VN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bm]="t",r[T0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[m0]=zf,this.transportSessionId&&(r[g0]=this.transportSessionId),this.lastSessionId&&(r[w0]=this.lastSessionId),this.applicationId&&(r[zN]=this.applicationId),this.appCheckToken&&(r[Jc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&_0.test(location.hostname)&&(r[v0]=y0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Or.forceAllow_=!0}static forceDisallow(){Or.forceDisallow_=!0}static isAvailable(){return Or.forceAllow_?!0:!Or.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!PN()&&!RN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=h_(n),i=h0(r,ZN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[JN]="t",r[k0]=e,r[I0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IN(),window[qN+this.uniqueCallbackIdentifier]=e,window[GN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bf.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[k0]=this.myID,e[I0]=this.myPW,e[T0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+x0+r.length<=N0;){const o=this.pendingSegs.shift();r=r+"&"+KN+i+"="+o.seg+"&"+QN+i+"="+o.ts+"&"+XN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ex)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const nx=16384,rx=45e3;let Ma=null;typeof MozWebSocket!="undefined"?Ma=MozWebSocket:typeof WebSocket!="undefined"&&(Ma=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=to(this.connId),this.stats_=$f(n),this.connURL=ft.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[m0]=zf,typeof location!="undefined"&&location.hostname&&_0.test(location.hostname)&&(s[v0]=y0),n&&(s[g0]=n),r&&(s[w0]=r),i&&(s[Jc]=i),S0(e,E0,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{if(!v_()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ma(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!ft.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=h0(n,nx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
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
 */class jf{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Or,ft]}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of jf.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const ix=6e4,sx=5e3,ox=10*1024,ax=100*1024,xu="t",jm="d",lx="s",Wm="r",ux="e",Hm="o",Vm="a",qm="n",Gm="p",cx="h";class dx{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=to("c:"+this.id+":"),this.transportManager_=new jf(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ax?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ox?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xu in e){const n=e[xu];n===Vm?this.upgradeIfSecondaryHealthy_():n===Wm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mi(xu,e);if(jm in e){const r=e[jm];if(n===cx)this.onHandshake_(r);else if(n===qm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lx?this.onConnectionShutdown_(r):n===Wm?this.onReset_(r):n===ux?Qc("Server Error: "+r):n===Hm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zf!==r&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ix))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class b0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class P0{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Da extends P0{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Cf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Da}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ym=32,Km=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new Y("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function Wf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Os(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return ze(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hx(t,e){const n=Os(t,0),r=Os(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=pr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Hf(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class px{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ml(this.parts_[r]);A0(this)}}function mx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ml(e),A0(t)}function gx(t){const e=t.parts_.pop();t.byteLength_-=ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function A0(t){if(t.byteLength_>Km)throw new Error(t.errorPrefix_+"has a key path longer than "+Km+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ym)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ym+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vf extends P0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vf}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Di=1e3,vx=60*5*1e3,yx=3*1e3,Qm=30*1e3,_x=1.3,wx=3e4,Ex="server_kill",Xm=3;class Bt extends b0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=to("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=vx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!v_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Da.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new qs,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},yx),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$k(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qc("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wx&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_x)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new dx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Oe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ex)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Oe(d),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],jc(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Uf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xm&&(this.reconnectDelay_=Qm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+c0.replace(/\./g,"-")]=1,Cf()?e["framework.cordova"]=1:g_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Da.getInstance().currentlyOnline();return jc(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(ar,e),i=new j(ar,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Ro;class O0 extends xl{static get __EMPTY_NODE(){return Ro}static set __EMPTY_NODE(e){Ro=e}compare(e,n){return pr(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Tn,Ro)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ro)}toString(){return".key"}}const Xn=new O0;/**
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
 */class Ao{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ve.RED,this.left=i!=null?i:$e.EMPTY_NODE,this.right=s!=null?s:$e.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Cx{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ao(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ao(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ao(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ao(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new Cx;/**
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
 */function Sx(t,e){return pr(t.name,e.name)}function qf(t,e){return pr(t,e)}/**
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
 */let Zc;function kx(t){Zc=t}const L0=function(t){return typeof t=="number"?"number:"+p0(t):"string:"+t},M0=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else I(t===Zc||t.isEmpty(),"priority of unexpected type.");I(t===Zc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jm;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),M0(this.priorityNode_)}static set __childrenNodeConstructor(e){Jm=e}static get __childrenNodeConstructor(){return Jm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:$(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+L0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=p0(this.value_):e+=this.value_,this.lazyHash_=f0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let D0,F0;function Ix(t){D0=t}function Tx(t){F0=t}class Nx extends xl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Tn,new me("[PRIORITY-POST]",F0))}makePost(e,n){const r=D0(e);return new j(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new Nx;/**
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
 */const xx=Math.log(2);class bx{constructor(e){const n=s=>parseInt(Math.log(s)/xx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fa=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ve(f,d.node,ve.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),E=i(g+1,u);return d=t[g],f=n?n(d):d,new ve(f,d.node,ve.BLACK,y,E)}},s=function(l){let u=null,c=null,d=t.length;const f=function(y,E){const b=d-y,m=d;d-=y;const p=i(b+1,m),v=t[b],_=n?n(v):v;g(new ve(_,v.node,E,null,p))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const E=l.nextBitIsOne(),b=Math.pow(2,l.count-(y+1));E?f(b,ve.BLACK):(f(b,ve.BLACK),f(b,ve.RED))}return c},o=new bx(t.length),a=s(o);return new $e(r||e,a)};/**
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
 */let bu;const yr={};class zt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(yr&&se,"ChildrenNode.ts has not been loaded"),bu=bu||new zt({".priority":yr},{".priority":se}),bu}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Fa(r,e.getCompare()):a=yr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new zt(c,u)}addToIndexes(e,n){const r=Na(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===yr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Fa(a,o.getCompare())}else return yr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new zt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Na(this.indexes_,i=>{if(i===yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new zt(r,this.indexSet_)}}/**
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
 */let Fi;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&M0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fi||(Fi=new L(new $e(qf),null,zt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fi}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fi:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fi:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{I($(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+L0(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":f0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===no?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Px extends L{constructor(){super(new $e(qf),L.EMPTY_NODE,zt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const no=new Px;Object.defineProperties(j,{MIN:{value:new j(ar,L.EMPTY_NODE)},MAX:{value:new j(Tn,no)}});O0.__EMPTY_NODE=L.EMPTY_NODE;me.__childrenNodeConstructor=L;kx(no);Tx(no);/**
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
 */const Rx=!0;function ye(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ye(e))}if(!(t instanceof Array)&&Rx){const n=[];let r=!1;if(Se(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ye(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=Fa(n,Sx,o=>o.name,qf);if(r){const o=Fa(n,se.getCompare());return new L(s,ye(e),new zt({".priority":o},{".priority":se}))}else return new L(s,ye(e),zt.Default)}else{let n=L.EMPTY_NODE;return Se(t,(r,i)=>{if(bt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}Ix(ye);/**
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
 */class Gf extends xl{constructor(e){super(),this.indexPath_=e,I(!B(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,no);return new j(Tn,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
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
 */class Ax extends xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ye(e);return new j(n,r)}toString(){return".value"}}const U0=new Ax;/**
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
 */const Zm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ox=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Zm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Zm.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function z0(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Lx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ls(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(Ms(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ls(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ms(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ds{constructor(e){this.indexedFilter_=new Yf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ds.getStartPost_(e),this.endPost_=Ds.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Mx{constructor(e){this.rangedFilter_=new Ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,g)=>d(g,f)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ms(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ls(n,d));const E=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ii(f.name,f.node)),E.updateImmediateChild(f.name,f.node)):E}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ls(u.name,u.node)),s.trackChildChange(ii(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
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
 */class Kf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ar}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Kf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dx(t){return t.loadsAllData()?new Yf(t.getIndex()):t.hasLimit()?new Mx(t):new Ds(t)}function Fx(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Ux(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function zx(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function $x(t,e){const n=t.copy();return n.index_=e,n}function eg(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===U0?n="$value":t.index_===Xn?n="$key":(I(t.index_ instanceof Gf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_&&(e.startAt=_e(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+_e(t.indexStartName_))),t.endSet_&&(e.endAt=_e(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+_e(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class Ua extends b0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=to("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ua.getListenId_(e,r),a={};this.listens_[o]=a;const l=eg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ei(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Ua.getListenId_(e,n);delete this.listens_[r]}get(e){const n=eg(e._queryParams),r=e._path.toString(),i=new qs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+gi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xs(a.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Bx{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function za(){return{value:null,children:new Map}}function $0(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,za());const i=t.children.get(r);e=X(e),$0(i,e,n)}}function ed(t,e,n){t.value!==null?n(e,t.value):jx(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);ed(i,s,n)})}function jx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Wx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ng=10*1e3,Hx=30*1e3,Vx=5*60*1e3;class qx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Wx(e);const r=ng+(Hx-ng)*Math.random();ss(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Se(e,(i,s)=>{s>0&&bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vx))}}/**
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
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function Qf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $a{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pt.ACK_USER_WRITE,this.source=Qf()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new $a(q(),n,this.revert)}}else return I($(this.path)===e,"operationForChild called for unrelated child."),new $a(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fs{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Fs(this.source,q()):new Fs(this.source,X(this.path))}}/**
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
 */class lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pt.OVERWRITE}operationForChild(e){return B(this.path)?new lr(this.source,q(),this.snap.getImmediateChild(e)):new lr(this.source,X(this.path),this.snap)}}/**
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
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new lr(this.source,q(),n.value):new si(this.source,q(),n)}else return I($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ur{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Gx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Lx(o.childName,o.snapshotNode))}),Ui(t,i,"child_removed",e,r,n),Ui(t,i,"child_added",e,r,n),Ui(t,i,"child_moved",s,r,n),Ui(t,i,"child_changed",e,r,n),Ui(t,i,"value",e,r,n),i}function Ui(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Qx(t,a,l)),o.forEach(a=>{const l=Kx(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Kx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Qx(t,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function bl(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,r){return bl(new ur(e,n,r),t.serverCache)}function B0(t,e,n,r){return bl(t.eventCache,new ur(e,n,r))}function td(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pu;const Xx=()=>(Pu||(Pu=new $e(bN)),Pu);class Q{constructor(e,n=Xx()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Se(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(B(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ae(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Q(null)}}set(e,n){if(B(e))return new Q(n,this.children);{const r=$(e),s=(this.children.get(r)||new Q(null)).set(X(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(B(e))return n;{const r=$(e),s=(this.children.get(r)||new Q(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new Q(null))}}function as(t,e,n){if(B(e))return new gt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function nd(t,e,n){let r=t;return Se(n,(i,s)=>{r=as(r,ae(e,i),s)}),r}function rg(t,e){if(B(e))return gt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new gt(n)}}function rd(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function ig(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function wn(t,e){if(B(e))return t;{const n=mr(t,e);return n!=null?new gt(new Q(n)):new gt(t.writeTree_.subtree(e))}}function id(t){return t.writeTree_.isEmpty()}function oi(t,e){return j0(q(),t.writeTree_,e)}function j0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=j0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Zf(t,e){return q0(e,t)}function Jx(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=r}function Zx(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=nd(t.visibleWrites,e,n),t.lastWriteId=r}function eb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function tb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nb(a,r.path)?i=!1:rt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return rb(t),!0;if(r.snap)t.visibleWrites=rg(t.visibleWrites,r.path);else{const a=r.children;Se(a,l=>{t.visibleWrites=rg(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function nb(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(ae(t.path,n),e))return!0;return!1}function rb(t){t.visibleWrites=W0(t.allWrites,ib,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ib(t){return t.visible}function W0(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)rt(n,o)?(a=ze(n,o),r=as(r,a,s.snap)):rt(o,n)&&(a=ze(o,n),r=as(r,q(),s.snap.getChild(a)));else if(s.children){if(rt(n,o))a=ze(n,o),r=nd(r,a,s.children);else if(rt(o,n))if(a=ze(o,n),B(a))r=nd(r,q(),s.children);else{const l=ei(s.children,$(a));if(l){const u=l.getChild(X(a));r=as(r,q(),u)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function H0(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=wn(t.visibleWrites,e);if(id(o))return n;if(n==null&&!rd(o,q()))return null;{const a=n||L.EMPTY_NODE;return oi(o,a)}}}else{const s=wn(t.visibleWrites,e);if(!i&&id(s))return n;if(!i&&n==null&&!rd(s,q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},a=W0(t.allWrites,o,e),l=n||L.EMPTY_NODE;return oi(a,l)}}}function sb(t,e,n){let r=L.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wn(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=oi(wn(s,new Y(o)),a);r=r.updateImmediateChild(o,l)}),ig(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wn(t.visibleWrites,e);return ig(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ob(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(rd(t.visibleWrites,s))return null;{const o=wn(t.visibleWrites,s);return id(o)?i.getChild(n):oi(o,i.getChild(n))}}function ab(t,e,n,r){const i=ae(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wn(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function lb(t,e){return mr(t.visibleWrites,e)}function ub(t,e,n,r,i,s,o){let a;const l=wn(t.visibleWrites,e),u=mr(l,q());if(u!=null)a=u;else if(n!=null)a=oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function cb(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Ba(t,e,n,r){return H0(t.writeTree,t.treePath,e,n,r)}function eh(t,e){return sb(t.writeTree,t.treePath,e)}function sg(t,e,n,r){return ob(t.writeTree,t.treePath,e,n,r)}function ja(t,e){return lb(t.writeTree,ae(t.treePath,e))}function db(t,e,n,r,i,s){return ub(t.writeTree,t.treePath,e,n,r,i,s)}function th(t,e,n){return ab(t.writeTree,t.treePath,e,n)}function V0(t,e){return q0(ae(t.treePath,e),t.writeTree)}function q0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class fb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ls(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ms(r,e.snapshotNode,i.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const G0=new hb;class nh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return th(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),s=db(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function pb(t){return{filter:t}}function mb(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gb(t,e,n,r,i){const s=new fb;let o,a;if(n.type===pt.OVERWRITE){const u=n;u.source.fromUser?o=sd(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=Wa(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===pt.MERGE){const u=n;u.source.fromUser?o=yb(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=od(t,e,u.path,u.children,r,i,a,s))}else if(n.type===pt.ACK_USER_WRITE){const u=n;u.revert?o=Eb(t,e,u.path,r,i,s):o=_b(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pt.LISTEN_COMPLETE)o=wb(t,e,n.path,r,s);else throw pi("Unknown operation type: "+n.type);const l=s.getChanges();return vb(e,o,l),{viewCache:o,changes:l}}function vb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=td(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(z0(td(e)))}}function Y0(t,e,n,r,i,s){const o=e.eventCache;if(ja(r,n)!=null)return e;{let a,l;if(B(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=cr(e),c=u instanceof L?u:L.EMPTY_NODE,d=eh(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ba(r,cr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=$(n);if(u===".priority"){I(Nn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=sg(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=X(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=sg(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=th(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return os(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Wa(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=$(n);if(!l.isCompleteForPath(n)&&Nn(n)>1)return e;const y=X(n),b=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),b):u=c.updateChild(l.getNode(),g,b,y,G0,null)}const d=B0(e,u,l.isFullyInitialized()||B(n),c.filtersNodes()),f=new nh(i,d,s);return Y0(t,d,n,i,f,a)}function sd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new nh(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=os(e,u,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=os(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=X(n),g=a.getNode().getImmediateChild(d);let y;if(B(f))y=r;else{const E=c.getCompleteChild(d);E!=null?Wf(f)===".priority"&&E.getChild(R0(f)).isEmpty()?y=E:y=E.updateChild(f,r):y=L.EMPTY_NODE}if(g.equals(y))l=e;else{const E=t.filter.updateChild(a.getNode(),d,y,f,c,o);l=os(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function og(t,e){return t.eventCache.isCompleteForChild(e)}function yb(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ae(n,l);og(e,$(c))&&(a=sd(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ae(n,l);og(e,$(c))||(a=sd(t,a,c,u,i,s,o))}),a}function ag(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function od(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;B(n)?u=r:u=new Q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=ag(t,g,f);l=Wa(t,l,new Y(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===void 0;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),E=ag(t,y,f);l=Wa(t,l,new Y(d),E,i,s,o,a)}}),l}function _b(t,e,n,r,i,s,o){if(ja(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Wa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let u=new Q(null);return l.getNode().forEachChild(Xn,(c,d)=>{u=u.set(new Y(c),d)}),od(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((c,d)=>{const f=ae(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),od(t,e,n,u,i,s,a,o)}}function wb(t,e,n,r,i){const s=e.serverCache,o=B0(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Y0(t,o,n,r,G0,i)}function Eb(t,e,n,r,i,s){let o;if(ja(r,n)!=null)return e;{const a=new nh(r,e,i),l=e.eventCache.getNode();let u;if(B(n)||$(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ba(r,cr(e));else{const d=e.serverCache.getNode();I(d instanceof L,"serverChildren would be complete if leaf node"),c=eh(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=$(n);let d=th(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,X(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,X(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ba(r,cr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ja(r,q())!=null,os(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Cb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yf(r.getIndex()),s=Dx(r);this.processor_=pb(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new ur(l,o.isFullyInitialized(),i.filtersNodes()),d=new ur(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bl(d,c),this.eventGenerator_=new Gx(this.query_)}get query(){return this.query_}}function Sb(t){return t.viewCache_.serverCache.getNode()}function kb(t,e){const n=cr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function lg(t){return t.eventRegistrations_.length===0}function Ib(t,e){t.eventRegistrations_.push(e)}function ug(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cg(t,e,n,r){e.type===pt.MERGE&&e.source.queryId!==null&&(I(cr(t.viewCache_),"We should always have a full cache before handling merges"),I(td(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gb(t.processor_,i,e,n,r);return mb(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,K0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Tb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(z0(n.getNode())),K0(t,r,n.getNode(),e)}function K0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Yx(t.eventGenerator_,e,n,i)}/**
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
 */let Ha;class Nb{constructor(){this.views=new Map}}function xb(t){I(!Ha,"__referenceConstructor has already been defined"),Ha=t}function bb(){return I(Ha,"Reference.ts has not been loaded"),Ha}function Pb(t){return t.views.size===0}function rh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),cg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(cg(o,e,n,r));return s}}function Rb(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ba(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=eh(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=bl(new ur(a,l,!1),new ur(r,i,!1));return new Cb(e,u)}return o}function Ab(t,e,n,r,i,s){const o=Rb(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ib(o,n),Tb(o,n)}function Ob(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(ug(u,n,r)),lg(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(ug(l,n,r)),lg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!xn(t)&&s.push(new(bb())(e._repo,e._path)),{removed:s,events:o}}function Q0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||kb(r,e);return n}function X0(t,e){if(e._queryParams.loadsAllData())return Pl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function J0(t,e){return X0(t,e)!=null}function xn(t){return Pl(t)!=null}function Pl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Va;function Lb(t){I(!Va,"__referenceConstructor has already been defined"),Va=t}function Mb(){return I(Va,"Reference.ts has not been loaded"),Va}let Db=1;class dg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=cb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Z0(t,e,n,r,i){return Jx(t.pendingWriteTree_,e,n,r,i),i?wi(t,new lr(Qf(),e,n)):[]}function Fb(t,e,n,r){Zx(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return wi(t,new si(Qf(),e,i))}function dn(t,e,n=!1){const r=eb(t.pendingWriteTree_,e);if(tb(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(q(),!0):Se(r.children,o=>{s=s.set(new Y(o),!0)}),wi(t,new $a(r.path,s,n))}else return[]}function Rl(t,e,n){return wi(t,new lr(Xf(),e,n))}function Ub(t,e,n){const r=Q.fromObject(n);return wi(t,new si(Xf(),e,r))}function zb(t,e){return wi(t,new Fs(Xf(),e))}function $b(t,e,n){const r=sh(t,n);if(r){const i=oh(r),s=i.path,o=i.queryId,a=ze(s,e),l=new Fs(Jf(o),a);return ah(t,s,l)}else return[]}function ad(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||J0(s,e))){const a=Ob(s,e,n,r);Pb(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(d,f)=>xn(f));if(u&&!c){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const f=Wb(d);for(let g=0;g<f.length;++g){const y=f[g],E=y.query,b=n1(t,y);t.listenProvider_.startListening(ls(E),qa(t,E),b.hashFn,b.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(ls(e),null):l.forEach(d=>{const f=t.queryToTagMap.get(Al(d));t.listenProvider_.stopListening(ls(d),f)})),Hb(t,l)}return o}function Bb(t,e,n,r){const i=sh(t,r);if(i!=null){const s=oh(i),o=s.path,a=s.queryId,l=ze(o,e),u=new lr(Jf(a),l,n);return ah(t,o,u)}else return[]}function jb(t,e,n,r){const i=sh(t,r);if(i){const s=oh(i),o=s.path,a=s.queryId,l=ze(o,e),u=Q.fromObject(n),c=new si(Jf(a),l,u);return ah(t,o,c)}else return[]}function fg(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,f)=>{const g=ze(d,r);i=i||Hr(f,g),s=s||xn(f)});let o=t.syncPointTree_.get(r);o?(s=s||xn(o),i=i||Hr(o,q())):(o=new Nb,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,g)=>{const y=Hr(g,q());y&&(i=i.updateImmediateChild(f,y))}));const l=J0(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=Al(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Vb();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Zf(t.pendingWriteTree_,r);let c=Ab(o,e,n,u,i,a);if(!l&&!s){const d=X0(o,e);c=c.concat(qb(t,e,d))}return c}function ih(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),u=Hr(a,l);if(u)return u});return H0(i,e,s,n,!0)}function wi(t,e){return e1(e,t.syncPointTree_,null,Zf(t.pendingWriteTree_,q()))}function e1(t,e,n,r){if(B(t.path))return t1(t,e,n,r);{const i=e.get(q());n==null&&i!=null&&(n=Hr(i,q()));let s=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=V0(r,o);s=s.concat(e1(a,l,u,c))}return i&&(s=s.concat(rh(i,t,r,n))),s}}function t1(t,e,n,r){const i=e.get(q());n==null&&i!=null&&(n=Hr(i,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=V0(r,o),c=t.operationForChild(o);c&&(s=s.concat(t1(c,a,l,u)))}),i&&(s=s.concat(rh(i,t,r,n))),s}function n1(t,e){const n=e.query,r=qa(t,n);return{hashFn:()=>(Sb(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?$b(t,n._path,r):zb(t,n._path);{const s=AN(i,n);return ad(t,n,null,s)}}}}function qa(t,e){const n=Al(e);return t.queryToTagMap.get(n)}function Al(t){return t._path.toString()+"$"+t._queryIdentifier}function sh(t,e){return t.tagToQueryMap.get(e)}function oh(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function ah(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Zf(t.pendingWriteTree_,e);return rh(r,n,i,null)}function Wb(t){return t.fold((e,n,r)=>{if(n&&xn(n))return[Pl(n)];{let i=[];return n&&(i=Q0(n)),Se(r,(s,o)=>{i=i.concat(o)}),i}})}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Mb())(t._repo,t._path):t}function Hb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Al(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Vb(){return Db++}function qb(t,e,n){const r=e._path,i=qa(t,e),s=n1(t,n),o=t.listenProvider_.startListening(ls(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!xn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!B(u)&&c&&xn(c))return[Pl(c).query];{let f=[];return c&&(f=f.concat(Q0(c).map(g=>g.query))),Se(d,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(ls(c),qa(t,c))}}return o}/**
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
 */class lh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lh(n)}node(){return this.node_}}class uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new uh(this.syncTree_,n)}node(){return ih(this.syncTree_,this.path_)}}const Gb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hg=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Kb(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Kb=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},r1=function(t,e,n,r){return ch(e,new uh(n,t),r)},i1=function(t,e,n){return ch(t,new lh(e),n)};function ch(t,e,n){const r=t.getPriority().val(),i=hg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=hg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new me(a,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(se,(a,l)=>{const u=ch(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class dh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fh(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=$(n);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new dh(i,r,s),n=X(n),i=$(n)}return r}function Ei(t){return t.node.value}function s1(t,e){t.node.value=e,ld(t)}function o1(t){return t.node.childCount>0}function Qb(t){return Ei(t)===void 0&&!o1(t)}function Ol(t,e){Se(t.node.children,(n,r)=>{e(new dh(n,t,r))})}function a1(t,e,n,r){n&&!r&&e(t),Ol(t,i=>{a1(i,e,!0,r)}),n&&r&&e(t)}function Xb(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ro(t){return new Y(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function ld(t){t.parent!==null&&Jb(t.parent,t.name,t)}function Jb(t,e,n){const r=Qb(n),i=bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ld(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ld(t))}/**
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
 */const Zb=/[\[\].#$\/\u0000-\u001F\u007F]/,eP=/[\[\].#$\u0000-\u001F\u007F]/,Ru=10*1024*1024,Ll=function(t){return typeof t=="string"&&t.length!==0&&!Zb.test(t)},l1=function(t){return typeof t=="string"&&t.length!==0&&!eP.test(t)},tP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),l1(t)},ud=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ff(t)||t&&typeof t=="object"&&bt(t,".sv")},io=function(t,e,n,r){r&&e===void 0||Ml(Ys(t,"value"),e,n)},Ml=function(t,e,n){const r=n instanceof Y?new px(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(Ff(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Ru/3&&ml(e)>Ru)throw new Error(t+"contains a string greater than "+Ru+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ll(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mx(r,o),Ml(t,a,r),gx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},nP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Os(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ll(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&rt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},rP=function(t,e,n,r){if(r&&e===void 0)return;const i=Ys(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Se(e,(o,a)=>{const l=new Y(o);if(Ml(i,a,ae(n,l)),Wf(l)===".priority"&&!ud(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),nP(i,s)},iP=function(t,e,n,r){if(!(r&&n===void 0)&&!Ll(n))throw new Error(Ys(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},hh=function(t,e,n,r){if(!(r&&n===void 0)&&!l1(n))throw new Error(Ys(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hh(t,e,n,r)},u1=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tP(n))throw new Error(Ys(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Hf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function c1(t,e,n){Dl(t,n),d1(t,r=>Hf(r,e))}function vt(t,e,n){Dl(t,n),d1(t,r=>rt(r,e)||rt(e,r))}function d1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(lP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Qn&&we("event: "+n.toString()),_i(r)}}}/**
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
 */const uP="repo_interrupt",cP=25;class dP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fP(t,e,n){if(t.stats_=$f(t.repoInfo_),t.forceRestClient_||DN())t.server_=new Ua(t.repoInfo_,(r,i,s,o)=>{pg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mg(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(r,i,s,o)=>{pg(t,r,i,s,o)},r=>{mg(t,r)},r=>{hP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WN(t.repoInfo_,()=>new qx(t.stats_,t.server_)),t.infoData_=new Bx,t.infoSyncTree_=new dg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Rl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ph(t,"connected",!1),t.serverSyncTree_=new dg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);vt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function f1(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fl(t){return Gb({timestamp:f1(t)})}function pg(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Na(n,u=>ye(u));o=jb(t.serverSyncTree_,s,l,i)}else{const l=ye(n);o=Bb(t.serverSyncTree_,s,l,i)}else if(r){const l=Na(n,u=>ye(u));o=Ub(t.serverSyncTree_,s,l)}else{const l=ye(n);o=Rl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ai(t,s)),vt(t.eventQueue_,a,o)}function mg(t,e){ph(t,"connected",e),e===!1&&gP(t)}function hP(t,e){Se(e,(n,r)=>{ph(t,n,r)})}function ph(t,e,n){const r=new Y("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Rl(t.infoSyncTree_,r,i);vt(t.eventQueue_,r,s)}function mh(t){return t.nextWriteId_++}function pP(t,e,n,r,i){Ul(t,"set",{path:e.toString(),value:n,priority:r});const s=Fl(t),o=ye(n,r),a=ih(t.serverSyncTree_,e),l=i1(o,a,s),u=mh(t),c=Z0(t.serverSyncTree_,e,l,u,!0);Dl(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||Oe("set at "+e+" failed: "+f);const E=dn(t.serverSyncTree_,u,!y);vt(t.eventQueue_,e,E),cd(t,i,f,g)});const d=vh(t,e);ai(t,d),vt(t.eventQueue_,d,[])}function mP(t,e,n,r){Ul(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fl(t),o={};if(Se(n,(a,l)=>{i=!1,o[a]=r1(ae(e,a),ye(l),t.serverSyncTree_,s)}),i)we("update() called with empty data.  Don't do anything."),cd(t,r,"ok",void 0);else{const a=mh(t),l=Fb(t.serverSyncTree_,e,o,a);Dl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Oe("update at "+e+" failed: "+u);const f=dn(t.serverSyncTree_,a,!d),g=f.length>0?ai(t,e):e;vt(t.eventQueue_,g,f),cd(t,r,u,c)}),Se(n,u=>{const c=vh(t,ae(e,u));ai(t,c)}),vt(t.eventQueue_,e,[])}}function gP(t){Ul(t,"onDisconnectEvents");const e=Fl(t),n=za();ed(t.onDisconnect_,q(),(i,s)=>{const o=r1(i,s,t.serverSyncTree_,e);$0(n,i,o)});let r=[];ed(n,q(),(i,s)=>{r=r.concat(Rl(t.serverSyncTree_,i,s));const o=vh(t,i);ai(t,o)}),t.onDisconnect_=za(),vt(t.eventQueue_,q(),r)}function vP(t,e,n){let r;$(e._path)===".info"?r=fg(t.infoSyncTree_,e,n):r=fg(t.serverSyncTree_,e,n),c1(t.eventQueue_,e._path,r)}function gg(t,e,n){let r;$(e._path)===".info"?r=ad(t.infoSyncTree_,e,n):r=ad(t.serverSyncTree_,e,n),c1(t.eventQueue_,e._path,r)}function yP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uP)}function Ul(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function cd(t,e,n,r){e&&_i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function h1(t,e,n){return ih(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function gh(t,e=t.transactionQueueTree_){if(e||zl(t,e),Ei(e)){const n=m1(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_P(t,ro(e),n)}else o1(e)&&Ol(e,n=>{gh(t,n)})}function _P(t,e,n){const r=n.map(u=>u.currentWriteId),i=h1(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ze(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ul(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(dn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zl(t,fh(t.transactionQueueTree_,e)),gh(t,t.transactionQueueTree_),vt(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)_i(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Oe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ai(t,e)}},o)}function ai(t,e){const n=p1(t,e),r=ro(n),i=m1(t,n);return wP(t,i,r),r}function wP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ze(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cP)c=!0,d="maxretry",i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=h1(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ml("transaction failed: Data returned ",g,l.path);let y=ye(g);typeof g=="object"&&g!=null&&bt(g,".priority")||(y=y.updatePriority(f.getPriority()));const b=l.currentWriteId,m=Fl(t),p=i1(y,f,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=mh(t),o.splice(o.indexOf(b),1),i=i.concat(Z0(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(dn(t.serverSyncTree_,b,!0))}else c=!0,d="nodata",i=i.concat(dn(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}zl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)_i(r[a]);gh(t,t.transactionQueueTree_)}function p1(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&Ei(r)===void 0;)r=fh(r,n),e=X(e),n=$(e);return r}function m1(t,e){const n=[];return g1(t,e,n),n.sort((r,i)=>r.order-i.order),n}function g1(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ol(e,i=>{g1(t,i,n)})}function zl(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,s1(e,n.length>0?n:void 0)}Ol(e,r=>{zl(t,r)})}function vh(t,e){const n=ro(p1(t,e)),r=fh(t.transactionQueueTree_,e);return Xb(r,i=>{Au(t,i)}),Au(t,r),a1(r,i=>{Au(t,i)}),n}function Au(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?s1(e,void 0):n.length=s+1,vt(t.eventQueue_,ro(e),i);for(let o=0;o<r.length;o++)_i(r[o])}}/**
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
 */function EP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const vg=function(t,e){const n=SP(t),r=n.namespace;n.domain==="firebase.com"&&or(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&or("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||NN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $N(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},SP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=EP(t.substring(c,d)));const f=CP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class v1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class y1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gr{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Wf(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=tg(this._queryParams),n=Uf(e);return n==="{}"?"default":n}get _queryObject(){return tg(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof gr))return!1;const n=this._repo===e._repo,r=Hf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fx(this._path)}}function IP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function yh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Xn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ar)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Tn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===se){if(e!=null&&!ud(e)||n!=null&&!ud(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Gf||t.getIndex()===U0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function _1(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Xt extends gr{constructor(e,n){super(e,n,new Kf,!1)}get parent(){const e=R0(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Us{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=li(this.ref,e);return new Us(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Us(i,li(this.ref,r),se)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ci(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?li(t._root,e):t._root}function li(t,e){return t=He(t),$(t._path)===null?sP("child","path",e,!1):hh("child","path",e,!1),new Xt(t._repo,ae(t._path,e))}function TP(t,e){t=He(t),u1("push",t._path),io("push",e,t._path,!0);const n=f1(t._repo),r=Ox(n),i=li(t,r),s=li(t,r);let o;return e!=null?o=NP(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function NP(t,e){t=He(t),u1("set",t._path),io("set",e,t._path,!1);const n=new qs;return pP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function xP(t,e){rP("update",e,t._path,!1);const n=new qs;return mP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class _h{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new v1("value",this,new Us(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new y1(this,e,n):null}matches(e){return e instanceof _h?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wh{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new y1(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=li(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new v1(e.type,this,new Us(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function w1(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{gg(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new kP(n,s||void 0),a=e==="value"?new _h(o):new wh(e,o);return vP(t._repo,t,a),()=>gg(t._repo,t,a)}function Eh(t,e,n,r){return w1(t,"value",e,n,r)}function bP(t,e,n,r){return w1(t,"child_added",e,n,r)}class so{}class PP extends so{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){io("endAt",this._value,e._path,!0);const n=zx(e._queryParams,this._value,this._key);if(_1(n),yh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new gr(e._repo,e._path,n,e._orderByCalled)}}class RP extends so{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){io("startAt",this._value,e._path,!0);const n=Ux(e._queryParams,this._value,this._key);if(_1(n),yh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new gr(e._repo,e._path,n,e._orderByCalled)}}class AP extends so{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new gr(e._repo,e._path,Fx(e._queryParams,this._limit),e._orderByCalled)}}function OP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new AP(t)}class LP extends so{constructor(e){super(),this._path=e}_apply(e){IP(e,"orderByChild");const n=new Y(this._path);if(B(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Gf(n),i=$x(e._queryParams,r);return yh(i),new gr(e._repo,e._path,i,!0)}}function E1(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return hh("orderByChild","path",t,!1),new LP(t)}class MP extends so{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(io("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new PP(this._value,this._key)._apply(new RP(this._value,this._key)._apply(e))}}function DP(t,e){return iP("equalTo","key",e,!0),new MP(t,e)}function C1(t,...e){let n=He(t);for(const r of e)n=r._apply(n);return n}xb(Xt);Lb(Xt);/**
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
 */const FP="FIREBASE_DATABASE_EMULATOR_HOST",dd={};let UP=!1;function zP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||or("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vg(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[FP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=vg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Xc(Xc.OWNER):new UN(t.name,t.options,e);oP("Invalid Firebase Database URL",o),B(o.path)||or("Database URL must point to the root of a Firebase Database (not including a child path).");const d=BP(a,t,c,new FN(t.name,n));return new jP(d,t)}function $P(t,e){const n=dd[e];(!n||n[t.key]!==t)&&or(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yP(t),delete n[t.key]}function BP(t,e,n,r){let i=dd[e.name];i||(i={},dd[e.name]=i);let s=i[t.toURLString()];return s&&or("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dP(t,UP,n,r),i[t.toURLString()]=s,s}class jP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&($P(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&or("Cannot call "+e+" on a deleted database.")}}function Si(t=C_(),e){return If(t,"database").getImmediate({identifier:e})}/**
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
 */function WP(t){CN(Ks),ti(new rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(Fm,Um,t),_n(Fm,Um,"esm2017")}/**
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
 */const HP={".sv":"timestamp"};function S1(){return HP}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WP();const ki={MESSAGES:"messages",USERS:"users",MATCHES:"matches"},VP={uid:null,displayName:"Unknown User"},Ga="demo";function qP(t,e){const[n,r]=R.exports.useState([]);return R.exports.useEffect(()=>{if(!t||!e)return;const i=Si(),s=`${ki.MATCHES}/${t}`,o=Ci(i,s),a=C1(o,E1("for"),DP(e));Eh(a,l=>{const u=l.val()||{},c=Object.values(u);r(c)})},[t,e]),n}async function GP(t){const e=await Tk({route:`/core/user/${t}`});return e==null?void 0:e.data}function YP(t){const e=Si(),n=`${ki.USERS}/${t}`,r=Ci(e,n);return new Promise(i=>{Eh(r,s=>{const o=s.val();i(o&&be({uid:s.key},o))})})}function k1(t){const[e,n]=R.exports.useState({});return R.exports.useEffect(()=>{Object.keys(t).filter(r=>!(r in e)).map(GP).forEach(r=>{r.then(i=>{i!=null&&i.uid&&n(s=>yt(be({},s),{[i.uid]:i}))}).catch(i=>{console.log("Error while fetching many user records."),console.error(i)})})},[t,e]),e}async function I1(t){try{if(!(t!=null&&t.uid))throw new Error("No user ID provided to update user details.");const{uid:e,email:n,displayName:r,photoURL:i}=t,s=Si(),o=`${ki.USERS}/${e}`,a=Ci(s,o);return await xP(a,{uid:e,email:n,displayName:r,photoURL:i,latestLogin:S1()}),null}catch(e){return console.error("Failed to update user details."),console.log(t),console.error(e),e}}function KP(){return h("div",{className:"FloatingButton MockLoginButton",children:T(at,{to:"/mocklogin",className:"NoDecorate",children:[h(Ke,{icon:cv,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Go to Mock Login"})]})})}function QP(){const[t,e]=R.exports.useState(null),n=Zs(),r=yd(),i=async()=>{const{user:o,signInError:a}=await EN();o?(await I1(o),e(null),r("/chats")):(console.error(a),e(a))},s=async()=>{const{isSuccess:o,signOutError:a}=await l0();o||e(a)};return T("div",{className:"Page LoginPage FullHeight VerticalCenter",children:[T("div",{children:[h(Tf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h(_l,{label:"Log in with Google",primary:!0,iconBefore:TT,onClick:i}),T(wl,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(u0,{authUser:n,doLogOut:s})]}),h(KP,{})]})}function XP(){var i;const{uid:t}=Lg(),e=(i=k1({[t]:!0}))==null?void 0:i[t];if(!e)return h("p",{children:"User not found."});const{photoURL:n,displayName:r}=e;return T("div",{children:[h("div",{className:"ProfileImage",children:h("img",{src:n,alt:"Profile",className:"Image"})}),h("div",{className:"DisplayName",children:h("span",{children:r})})]})}function JP({match:t,users:e}){const{id:n,release_timestamp:r,participants:i}=t,s=Object.keys(i).filter(o=>o!==t.for).map(o=>(e==null?void 0:e[o])||{uid:o}).map(o=>h(Ps,{user:o},o.uid));return T("div",{className:"MatchTile Card Full",children:[T("h3",{children:["Week of ",u_(r)]}),h("div",{className:"UserRow",children:s}),h("p",{children:h(at,{to:`/chats/${n}`,children:h(_l,{label:"Open Chat",iconBefore:gC})})})]})}const Vr={demo:{id:"demo",name:"Demo Community",intents:[{code:"tutoring",name:"Tutoring"},{code:"tv-movie-recs",name:"TV/Movie Recommendations"}],interests:[{code:"running",name:"Running"},{code:"biking",name:"Biking"},{code:"swimming",name:"Swimming"}]},sds:{id:"sds",name:"Scarlet Data Studio",intents:[],interests:[]}};function ZP(){const t=Zs(),e=(Vr==null?void 0:Vr[Ga])||{},n=qP(Ga,t==null?void 0:t.uid),r=n.reduce((o,a)=>be(be({},o),a.participants),{}),i=k1(r),s=n.length>0?n.sort((o,a)=>a.release_timestamp-o.release_timestamp).map(o=>h(JP,{match:o,users:i},o.id)):h("p",{children:"No matches yet."});return T("div",{className:"AllChatsPage",children:[T("div",{className:"Header",children:[h("h1",{className:"BigTitle",children:h(at,{to:"/",children:h("span",{children:"Butterfly Chats"})})}),h("p",{children:"Each week, you will be matched to another person in your community."}),T("p",{children:[h("span",{children:"Check back on Mondays to see who you are matched with! "}),T("span",{children:["Update ",h(at,{to:"/me",children:"your profile"})," for better matches."]})]})]}),T("div",{className:"Page",children:[h("h2",{children:(e==null?void 0:e.name)||"Your Matches"}),s]})]})}const T1="MESSAGE";function eR(t){const[e,n]=R.exports.useState({});return R.exports.useEffect(()=>{const r=Si(),i=`${ki.MATCHES}/${t}`,s=Ci(r,i);return Eh(s,async a=>{const l=a.val(),u=(l==null?void 0:l.participants)||{},c=await Object.keys(u).reduce(async(d,f)=>{const g=await YP(f);return yt(be({},await d),{[f]:g})},u);n(yt(be({isLoaded:!0,exists:a.exists()},l),{participants:c}))})},[t]),e}function tR(t,e=50){const[n,r]=R.exports.useState({keys:{},values:[]});return R.exports.useEffect(()=>{const i=Si(),s=`${ki.MESSAGES}/${t}`,o=C1(Ci(i,s),E1("timestamp"),OP(e));return bP(o,l=>{const{key:u}=l,c=be({key:u},l.val());r(d=>{if(u in d.keys)return d;const{keys:f,values:g}=d;return{isLoaded:!0,keys:yt(be({},f),{[u]:!0}),values:[...g,c]}})})},[t,e]),n.values}async function nR(t,e){if(!e.from)throw new Error("Missing `from` in message data.");if(!e.message)throw new Error("Missing `message` in message data.");const n={type:T1,timestamp:S1(),message:e.message,from:e.from},r=Si(),i=`${ki.MESSAGES}/${t}`,s=Ci(r,i);await TP(s,n)}function rR(t,e){return Object.keys(t).filter(n=>n!==e).sort().reduce((n,r,i)=>yt(be({},n),{[r]:`Theirs Participant${i}`}),{[e]:"Mine"})}function Gi({data:t,myUserId:e,participants:n}){const{message:r,from:i,type:s}=t,o=rR(n,e);if(s!==T1)return null;const a=(n==null?void 0:n[i])||VP,l=r.split(`
`).map((u,c)=>h("p",{children:u},c));return h("div",{className:`Message ${o[i]}`,children:T("div",{className:"MessageInner",children:[h("p",{className:"Author",children:a.displayName}),h("div",{className:"Body",children:l})]})})}function iR(){return h("p",{className:"Centered",children:"Loading chat..."})}function sR(t,e,n){const r=(e==null?void 0:e.participants)||{};return e.isLoaded?e!=null&&e.exists?n in r?null:"You are not a participant in this chat.":`No chat found for ID: ${t}`:null}const Ii=R.exports.createContext();function oR({chatId:t,header:e,conversation:n,composer:r}){const{chat:i,myUserId:s}=R.exports.useContext(Ii),o=sR(t,i,s),a=i.isLoaded&&!o,l=T("div",{className:"ChatAppInner HideScroll",children:[h("div",{className:"ChatHeader HideScroll",children:e}),h("div",{className:"ChatMessages",children:n}),h("div",{className:"ChatComposer",children:r})]});return T("div",{className:"ChatApp",children:[!i.isLoaded&&h(iR,{}),a&&l,T(wl,{hasError:o,children:[h("h1",{children:"No Chat Here..."}),h("pre",{children:o})]})]})}function aR({chatId:t,header:e,conversation:n,composer:r}){const i=Zs(),s=i==null?void 0:i.uid,o=eR(`${t}~${s}`),a=tR(t),l=c=>{!s||!c||nR(t,{message:c,from:s})},u=R.exports.useMemo(()=>({chat:o,messages:a,myUserId:s,sendChatMessage:l}));return h(Ii.Provider,{value:u,children:h(oR,{chatId:t,header:e,conversation:n,composer:r})})}function lR(){const t=R.exports.createRef(),{sendChatMessage:e}=R.exports.useContext(Ii);return T(yl,{children:[h("textarea",{ref:t,className:"Input"}),h("button",{type:"button",onClick:()=>{e(t.current.value),t.current.value=""},className:"Button Send",children:h(Ke,{icon:cC,className:"IconBefore"})})]})}const uR=({commonLetters:t})=>{const e=JI(t.length,"letter"),n=t.join(", ");return h("div",{className:"CommonLettersStarter",children:T("p",{children:["Fun fact, your names have ",e," in common: ",n,"!"]})})},cR=({chat:t})=>{var e;return h(uR,{commonLetters:(e=t==null?void 0:t.metadata)==null?void 0:e.commonLetters})};const dR=({})=>h("div",{}),yg=({chat:t})=>h(dR,{});const fR=({})=>h("div",{}),_g=({chat:t})=>h(fR,{});const hR=({})=>h("div",{}),wg=({chat:t})=>h(hR,{}),Ou={commonLettersGenerator:cR,rareIntentsGenerator:yg,similarIntentsGenerator:yg,rareInterestsGenerator:_g,similarInterestsGenerator:_g,limitedSchedulesGenerator:wg,similarSchedulesGenerator:wg};function pR(t){var r;const e=(r=t==null?void 0:t.metadata)==null?void 0:r.generator,n=Ou==null?void 0:Ou[e];return!e||!n?null:n}function mR(){const{chat:t,messages:e,myUserId:n}=R.exports.useContext(Ii),r=pR(t),i=r&&h("div",{children:h(r,{chat:t})},"conversation_starter"),s=h("p",{children:"Loading chat..."}),o=h("p",{children:"No messages yet, will you start things off?"}),a=t.isLoaded&&e.map(l=>h(Gi,{data:l,myUserId:n,participants:t.participants},l.key));return t.isLoaded?i?[i,...a]:e.length>0?a:o:s}function Ch({label:t,icon:e,onClick:n}){return T("div",{className:"FloatingButton ChatAppMenuButton",tabIndex:0,role:"button",onClick:n,onKeyDown:n,children:[h("span",{className:"FloatingButtonTooltip",children:t}),h(Ke,{icon:e,className:"IconBefore"})]})}function gR({menuConfig:t,onMenuClick:e,setOption:n}){var r;return T(yl,{children:[h(Ch,{label:"Close Menu",icon:hC,onClick:e}),T("div",{className:"ChatMenu",children:[h("h2",{children:"Chat Menu"}),(r=t==null?void 0:t.options)==null?void 0:r.map(i=>h("div",{className:"MenuOption",tabIndex:0,role:"button",onClick:()=>n(i.id),onKeyDown:()=>n(i.id),children:h("span",{children:i.name})},i.id))]})]})}function vR({name:t,onClick:e,children:n}){return T(yl,{children:[h(Ch,{label:"Chat Menu",icon:fC,onClick:e}),T("div",{className:"ChatMenu",children:[h("h2",{children:t}),n]})]})}function yR(){return h("p",{children:"Coming soon..."})}function _R({menuConfig:t,onMenuClick:e}){var l;const n=(l=t==null?void 0:t.options)==null?void 0:l.reduce((u,c)=>yt(be({},u),{[c.id]:c}),{}),[r,i]=R.exports.useState(null),s=()=>i(null),o=n==null?void 0:n[r],{chat:a}=R.exports.useContext(Ii);if(o){const u=(o==null?void 0:o.component)||yR;return h(vR,{name:o==null?void 0:o.name,onClick:s,children:h(u,{chat:a,config:o})})}return h(gR,{menuConfig:t,onMenuClick:e,setOption:i})}function wR(){return h("div",{className:"FloatingButton BackToChatsButton",children:T(at,{to:"/chats",className:"NoDecorate",children:[h(Ke,{icon:mC,className:"IconBefore"}),h("span",{className:"FloatingButtonTooltip",children:"Back to Chats"})]})})}function ER({chat:t,onMenuClick:e}){const n=Object.values((t==null?void 0:t.participants)||{}).map(i=>h(Ps,{user:i},i.uid)),r=u_(t==null?void 0:t.release_timestamp);return T(yl,{children:[h(wR,{}),h(Ch,{label:"Open Menu",icon:dC,onClick:e}),h("h1",{children:"Butterfly Chat"}),h("p",{children:"Messages will disappear after 30 days."}),T("p",{children:["Your match for the week of ",r,"."]}),h("div",{className:"UserRowCentered",children:n})]})}function CR({menuConfig:t}){const[e,n]=R.exports.useState(!1),r=()=>n(!0),i=()=>n(!1),{chat:s}=R.exports.useContext(Ii);return e?h(_R,{menuConfig:t,onMenuClick:i}):h(ER,{chat:s,onMenuClick:r})}const SR=({})=>h("div",{}),kR=({chat:t,config:e})=>h(SR,{});const IR=({})=>h("div",{}),TR=({chat:t,config:e})=>h(IR,{});const NR=({})=>h("div",{}),xR=({chat:t,config:e})=>h(NR,{});const bR=({})=>h("div",{}),PR=({chat:t,config:e})=>h(bR,{}),RR={options:[{id:"search",name:"Search Messages",component:kR},{id:"block",name:"Block User",component:TR},{id:"rate",name:"Rate Match",component:xR},{id:"upvote",name:"Upvote User",component:PR}]};function AR(){const{chatId:t}=Lg(),e=`${Ga}/${t}`;return h("div",{className:"ChatPage",children:h("div",{className:"ChatContainer",children:h(aR,{chatId:e,header:h(CR,{menuConfig:RR}),conversation:h(mR,{}),composer:h(lR,{})})})})}const OR=({})=>h("div",{});const LR=({})=>h("div",{});function MR(){const t=Zs(),e=(Vr==null?void 0:Vr[Ga])||{};return t&&T("div",{className:"EditProfilePage",children:[T("div",{className:"Header",children:[h("h1",{className:"BigTitle",children:"Edit Profile"}),h("p",{children:"Update your profile to help us give you better matches!"}),h(Ps,{user:t}),h(at,{to:"/chats",children:h("p",{children:"Back to your matches."})})]}),T("div",{className:"Page",children:[h("h2",{children:"Support"}),h(OR,{allIntents:e==null?void 0:e.intents}),h("h2",{children:"Interests"}),h("h2",{children:"Schedule"}),h(LR,{allInterests:e==null?void 0:e.interests}),h("p",{children:"Coming soon..."})]})]})}const DR="Contacting backend API...";function FR(t,e){return e?`Error: ${e}`:t?JSON.stringify(t,null,4):DR}function UR(){const[t,e]=xk({route:"/"}),n=FR(t,e);return h("div",{className:"Layout Page",children:T("div",{children:[h("h1",{className:"BigTitle",children:"Status"}),h(at,{to:"/",children:"Back to Home"}),h("pre",{children:n})]})})}const zR="7MIFL%Jj960nT^QX",N1=[{displayName:"Pradeep Balaram",email:"scarletdatastudio+pradeep@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/45.jpg"},{displayName:"Si-Woo Yun-Seo",email:"scarletdatastudio+siwoo@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/92.jpg"},{displayName:"Ilya Viktoria",email:"scarletdatastudio+ilya@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/31.jpg"},{displayName:"Asabe Oyibo",email:"scarletdatastudio+asabe@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/89.jpg"},{displayName:"Ernesto Sa\xFAl",email:"scarletdatastudio+ernesto@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"},{displayName:"Quy\xEAn H\u01B0\u01A1ng",email:"scarletdatastudio+quyen@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}],Lu=N1.reduce((t,e)=>yt(be({},t),{[e.email]:e}),{});async function $R(t){const e=Lu==null?void 0:Lu[t];if(!e)return{user:null,signInError:`No mock user for email: '${t}'`};try{const n=Nl(),{email:r,displayName:i,photoURL:s}=e,{user:o}=await a2(n,r,zR);return await u2(n.currentUser,{displayName:i,photoURL:s}),{user:o,signInError:null}}catch(n){return{user:null,signInError:n}}}function BR({mockUsers:t,doLogIn:e}){const n=R.exports.createRef(),r=()=>{const s=n.current.value;s&&e(s)},i=t.map(({email:s,displayName:o})=>h("option",{value:s,children:o},s));return T("div",{children:[h("p",{children:h("select",{ref:n,className:"LoginUserSelector",children:i})}),h(_l,{label:"Log in as Mock User",primary:!0,iconBefore:cv,onClick:r}),T("p",{children:[h(at,{to:"/login",children:"Back to Real Login"}),h("span",{children:" | "}),h(at,{to:"/status",children:"Status Page"})]})]})}function jR(){const[t,e]=R.exports.useState(null),n=Zs(),r=async s=>{const{user:o,signInError:a}=await $R(s);o?(await I1(o),e(null)):(console.error(a),e(a))},i=async()=>{const{isSuccess:s,signOutError:o}=await l0();s||e(o)};return h("div",{className:"Page LoginPage FullHeight VerticalCenter",children:T("div",{children:[h(Tf,{size:"Big",align:"Centered"}),h("h1",{className:"BigTitle",children:"Butterfly"}),h("p",{children:"Meet people in your community."}),h("hr",{}),h("h2",{children:"Mock User Login"}),h(BR,{doLogIn:r,mockUsers:N1}),T(wl,{hasError:t,children:[h("p",{children:"Something went wrong:"}),h("pre",{children:t==null?void 0:t.toString()})]}),h(u0,{authUser:n,doLogOut:i})]})})}const Oo={"user-a":{displayName:"Me"},"user-b":{displayName:"User B"},"user-c":{displayName:"User C"},"user-d":{displayName:"User D"}};function WR(){return T("div",{className:"Layout",children:[h("div",{className:"Header",children:h("h1",{className:"BigTitle",children:"Style Guide"})}),T("div",{className:"Page",children:[T("section",{className:"Section",children:[h("h2",{children:"Typography"}),h("hr",{}),h("h1",{children:"Heading 1"}),h("h2",{children:"Heading 2"}),h("h3",{children:"Heading 3"}),h("h4",{children:"Heading 4"}),h("h5",{children:"Heading 5"}),h("h6",{children:"Heading 6"}),h("p",{children:"Paragraph"})]}),T("section",{className:"Section",children:[h("h2",{children:"User Elements"}),h("hr",{}),T("div",{className:"UserRow",children:[h(Ps,{user:{displayName:"Ernesto Sa\xFAl",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"}}),h(Ps,{user:{displayName:"Quy\xEAn H\u01B0\u01A1ng",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Chat Elements"}),h("hr",{}),h(Gi,{data:{type:"MESSAGE",from:"user-a",message:`Hello,
This is a multi-paragraph message I sent!`},myUserId:"user-a",participants:Oo}),h(Gi,{data:{type:"MESSAGE",from:"user-b",message:"And I am replying to you."},myUserId:"user-a",participants:Oo}),h(Gi,{data:{type:"MESSAGE",from:"user-c",message:"I am another participant."},myUserId:"user-a",participants:Oo}),h(Gi,{data:{type:"MESSAGE",from:"user-d",message:"And I am yet another participant."},myUserId:"user-a",participants:Oo})]}),T("section",{className:"Section",children:[h("h2",{children:"Card Elements"}),h("hr",{}),h("h4",{children:"Full Cards"}),T("div",{className:"Card Full",children:[h("h4",{children:"Card 1"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card Full",children:[h("h4",{children:"Card 2"}),h("p",{children:"Card Content"})]}),h("h3",{children:"Card Row"}),T("div",{className:"CardRow",children:[T("div",{className:"Card",children:[h("h4",{children:"Card A"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card",children:[h("h4",{children:"Card B"}),h("p",{children:"Card Content"})]}),T("div",{className:"Card",children:[h("h4",{children:"Card C"}),h("p",{children:"Card Content"})]})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Buttons"}),h("hr",{}),T("div",{className:"ButtonRow",children:[h("span",{className:"Button Primary",children:"Primary"}),h("span",{className:"Button",children:"Secondary"})]}),T("div",{className:"ButtonRow",children:[T("span",{className:"Button Primary",children:[h(Ke,{icon:vC,className:"IconBefore"}),h("span",{children:"With Icon"})]}),T("span",{className:"Button",children:[h(Ke,{icon:yC,className:"IconBefore"}),h("span",{children:"With Icon"})]})]}),h("span",{className:"Button",children:"Single Button"})]}),T("section",{className:"Section",children:[h("h2",{children:"Error Elements"}),h("hr",{}),T(wl,{hasError:!0,children:[h("h4",{children:"Something went wrong."}),h("p",{children:"We broke it, sorry about that!"})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Lists"}),h("hr",{}),h("h3",{children:"Unordered List"}),T("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]}),h("h3",{children:"Ordered List"}),T("ol",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),T("section",{className:"Section",children:[h("h2",{children:"Columns"}),h("hr",{}),h("h3",{children:"Two Columns"}),T("div",{className:"Columns",children:[T("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Three Columns"}),T("div",{className:"Columns",children:[T("div",{className:"Column Third",children:[h("h4",{children:"Col 1"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Third",children:[h("h4",{children:"Col 2"}),h("p",{children:"Column Content"})]}),T("div",{className:"Column Third",children:[h("h4",{children:"Col 3"}),h("p",{children:"Column Content"})]})]}),h("h3",{children:"Columns with Elements"}),T("div",{className:"Columns",children:[T("div",{className:"Column Half",children:[h("h4",{children:"Column 1"}),h("h5",{children:"List"}),T("ul",{children:[h("li",{children:"List Item 1"}),h("li",{children:"List Item 2"}),h("li",{children:"List Item 3"}),h("li",{children:"List item with a lot of content that should wrap over to the next line."})]})]}),T("div",{className:"Column Half",children:[h("h4",{children:"Column 2"}),T("div",{className:"Card Full",children:[h("h5",{children:"Card"}),h("p",{children:"Card Content"})]})]})]})]})]})]})}const HR="/butterfly",Eg="butterfly__pathname";function VR(){const t=yd();return R.exports.useEffect(()=>{const e=localStorage.getItem(Eg);if(e){localStorage.setItem(Eg,"");const n=e.substring(HR.length);t(n)}},[t]),T(Cw,{children:[h(Pe,{index:!0,element:h(IT,{})}),T(Pe,{path:"/",element:h(sT,{}),children:[h(Pe,{path:"login",element:h(QP,{})}),h(Pe,{path:"me",element:h(MR,{})}),h(Pe,{path:"profile",children:h(Pe,{path:":uid",element:h(XP,{})})}),T(Pe,{path:"chats",children:[h(Pe,{index:!0,element:h(ZP,{})}),h(Pe,{path:":chatId",element:h(AR,{})})]}),h(Pe,{path:"status",element:h(UR,{})}),h(Pe,{path:"mocklogin",element:h(jR,{})}),h(Pe,{path:"resources",children:h(Pe,{path:"styleguide",element:h(WR,{})})})]}),h(Pe,{path:"*",element:h(oT,{})})]})}function qR(){const t=QI();return h("div",{className:"App Theme",children:h(XI.Provider,{value:t,children:h(VR,{})})})}const GR=[_C];lC.add(GR);document.title="Butterfly";Qu.createRoot(document.getElementById("root")).render(h(bg.StrictMode,{children:h(Iw,{basename:"butterfly",children:h(qR,{})})}));
