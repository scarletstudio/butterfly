var r1=Object.defineProperty,i1=Object.defineProperties;var s1=Object.getOwnPropertyDescriptors;var ah=Object.getOwnPropertySymbols;var o1=Object.prototype.hasOwnProperty,a1=Object.prototype.propertyIsEnumerable;var lh=(t,e,n)=>e in t?r1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,An=(t,e)=>{for(var n in e||(e={}))o1.call(e,n)&&lh(t,n,e[n]);if(ah)for(var n of ah(e))a1.call(e,n)&&lh(t,n,e[n]);return t},yi=(t,e)=>i1(t,s1(e));const l1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};l1();var O={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),u1=Symbol.for("react.portal"),c1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),p1=Symbol.for("react.context"),m1=Symbol.for("react.forward_ref"),g1=Symbol.for("react.suspense"),v1=Symbol.for("react.memo"),_1=Symbol.for("react.lazy"),uh=Symbol.iterator;function y1(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,rg={};function si(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}si.prototype.isReactComponent={};si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=si.prototype;function Qc(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}var Xc=Qc.prototype=new ig;Xc.constructor=Qc;ng(Xc,si.prototype);Xc.isPureReactComponent=!0;var ch=Array.isArray,sg=Object.prototype.hasOwnProperty,Jc={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,r)&&!og.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Rs,type:t,key:s,ref:o,props:i,_owner:Jc.current}}function w1(t,e){return{$$typeof:Rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rs}function E1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?E1(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rs:case u1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bl(o,0):r,ch(i)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),ko(i,e,n,"",function(u){return u})):i!=null&&(Zc(i)&&(i=w1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ch(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+bl(s,a);o+=ko(s,e,n,l,i)}else if(l=y1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+bl(s,a++),o+=ko(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function eo(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function C1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},Io={transition:null},S1={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Jc};B.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Zc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=si;B.Fragment=c1;B.Profiler=d1;B.PureComponent=Qc;B.StrictMode=f1;B.Suspense=g1;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sg.call(e,l)&&!og.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Rs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:p1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};B.createElement=ag;B.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:m1,render:t}};B.isValidElement=Zc;B.lazy=function(t){return{$$typeof:_1,_payload:{_status:-1,_result:t},_init:C1}};B.memo=function(t,e){return{$$typeof:v1,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Ae.current.useCallback(t,e)};B.useContext=function(t){return Ae.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ae.current.useEffect(t,e)};B.useId=function(){return Ae.current.useId()};B.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ae.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};B.useRef=function(t){return Ae.current.useRef(t)};B.useState=function(t){return Ae.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ae.current.useTransition()};B.version="18.0.0-fc46dba67-20220329";O.exports=B;var lg=O.exports;function jo(){return jo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));var dh=function(t){return t},hh="beforeunload",k1="popstate";function I1(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var y=r.location,S=y.pathname,L=y.search,M=y.hash,ne=i.state||{};return[ne.idx,dh({pathname:S,search:L,hash:M,state:ne.usr||null,key:ne.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var y=Fn.Pop,S=s(),L=S[0],M=S[1];if(g.length){if(L!=null){var ne=c-L;ne&&(o={action:y,location:M,retry:function(){E(ne*-1)}},E(ne))}}else h(y)}}r.addEventListener(k1,a);var l=Fn.Pop,u=s(),c=u[0],f=u[1],d=mh(),g=mh();c==null&&(c=0,i.replaceState(jo({},i.state,{idx:c}),""));function v(y){return typeof y=="string"?y:yu(y)}function w(y,S){return S===void 0&&(S=null),dh(jo({pathname:f.pathname,hash:"",search:""},typeof y=="string"?ur(y):y,{state:S,key:T1()}))}function N(y,S){return[{usr:y.state,key:y.key,idx:S},v(y)]}function p(y,S,L){return!g.length||(g.call({action:y,location:S,retry:L}),!1)}function h(y){l=y;var S=s();c=S[0],f=S[1],d.call({action:l,location:f})}function m(y,S){var L=Fn.Push,M=w(y,S);function ne(){m(y,S)}if(p(L,M,ne)){var Qe=N(M,c+1),It=Qe[0],bn=Qe[1];try{i.pushState(It,"",bn)}catch{r.location.assign(bn)}h(L)}}function _(y,S){var L=Fn.Replace,M=w(y,S);function ne(){_(y,S)}if(p(L,M,ne)){var Qe=N(M,c),It=Qe[0],bn=Qe[1];i.replaceState(It,"",bn),h(L)}}function E(y){i.go(y)}var T={get action(){return l},get location(){return f},createHref:v,push:m,replace:_,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(S){return d.push(S)},block:function(S){var L=g.push(S);return g.length===1&&r.addEventListener(hh,ph),function(){L(),g.length||r.removeEventListener(hh,ph)}}};return T}function ph(t){t.preventDefault(),t.returnValue=""}function mh(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function T1(){return Math.random().toString(36).substr(2,8)}function yu(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ur(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ef=O.exports.createContext(null),tf=O.exports.createContext(null),oi=O.exports.createContext({outlet:null,matches:[]});function Et(t,e){if(!t)throw new Error(e)}function x1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ur(e):e,i=fg(r.pathname||"/",n);if(i==null)return null;let s=ug(t);N1(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=F1(s[a],i);return o}function ug(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Et(!1),o.relativePath=o.relativePath.slice(r.length));let a=ln([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Et(!1),ug(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:M1(a,i.index),routesMeta:l})}),e}function N1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:D1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b1=/^:\w+$/,P1=3,R1=2,A1=1,O1=10,L1=-2,gh=t=>t==="*";function M1(t,e){let n=t.split("/"),r=n.length;return n.some(gh)&&(r+=L1),e&&(r+=R1),n.filter(i=>!gh(i)).reduce((i,s)=>i+(b1.test(s)?P1:s===""?A1:O1),r)}function D1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function F1(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=U1({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:ln([i,c.pathname]),pathnameBase:dg(ln([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=ln([i,c.pathnameBase]))}return s}function U1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=z1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=W1(a[f]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function z1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function W1(t,e){try{return decodeURIComponent(t)}catch{return t}}function j1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ur(t):t;return{pathname:n?n.startsWith("/")?n:$1(n,e):e,search:H1(r),hash:V1(i)}}function $1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cg(t,e,n){let r=typeof t=="string"?ur(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=j1(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function B1(t){return t===""||t.pathname===""?"/":typeof t=="string"?ur(t).pathname:t.pathname}function fg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const ln=t=>t.join("/").replace(/\/\/+/g,"/"),dg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),H1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,V1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function q1(t){As()||Et(!1);let{basename:e,navigator:n}=O.exports.useContext(ef),{hash:r,pathname:i,search:s}=hg(t),o=i;if(e!=="/"){let a=B1(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):ln([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function As(){return O.exports.useContext(tf)!=null}function Fa(){return As()||Et(!1),O.exports.useContext(tf).location}function nf(){As()||Et(!1);let{basename:t,navigator:e}=O.exports.useContext(ef),{matches:n}=O.exports.useContext(oi),{pathname:r}=Fa(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=cg(a,JSON.parse(i),r);t!=="/"&&(u.pathname=ln([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const G1=O.exports.createContext(null);function Y1(t){let e=O.exports.useContext(oi).outlet;return e&&O.exports.createElement(G1.Provider,{value:t},e)}function K1(){let{matches:t}=O.exports.useContext(oi),e=t[t.length-1];return e?e.params:{}}function hg(t){let{matches:e}=O.exports.useContext(oi),{pathname:n}=Fa(),r=JSON.stringify(e.map(i=>i.pathnameBase));return O.exports.useMemo(()=>cg(t,JSON.parse(r),n),[t,r,n])}function Q1(t,e){As()||Et(!1);let{matches:n}=O.exports.useContext(oi),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Fa(),a;if(e){var l;let d=typeof e=="string"?ur(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Et(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",f=x1(t,{pathname:c});return X1(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:ln([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:ln([s,d.pathnameBase])})),n)}function X1(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>O.exports.createElement(oi.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function J1(t){return Y1(t.context)}function Tt(t){Et(!1)}function Z1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:s,static:o=!1}=t;As()&&Et(!1);let a=dg(e),l=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ur(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,v=O.exports.useMemo(()=>{let w=fg(u,a);return w==null?null:{pathname:w,search:c,hash:f,state:d,key:g}},[a,u,c,f,d,g]);return v==null?null:O.exports.createElement(ef.Provider,{value:l},O.exports.createElement(tf.Provider,{children:n,value:{location:v,navigationType:i}}))}function ew(t){let{children:e,location:n}=t;return Q1(wu(e),n)}function wu(t){let e=[];return O.exports.Children.forEach(t,n=>{if(!O.exports.isValidElement(n))return;if(n.type===O.exports.Fragment){e.push.apply(e,wu(n.props.children));return}n.type!==Tt&&Et(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=wu(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eu(){return Eu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eu.apply(this,arguments)}function tw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const nw=["onClick","reloadDocument","replace","state","target","to"];function rw(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=I1({window:r}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),O.exports.createElement(Z1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function iw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const ai=O.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=tw(e,nw),c=q1(l),f=sw(l,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&f(g)}return O.exports.createElement("a",Eu({},u,{href:c,onClick:d,ref:n,target:a}))});function sw(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=nf(),o=Fa(),a=hg(t);return O.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!iw(l)){l.preventDefault();let u=!!r||yu(o)===yu(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function vh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vh(Object(n),!0).forEach(function(r){lw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $o(t){return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$o(t)}function ow(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function aw(t,e,n){return e&&_h(t.prototype,e),n&&_h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function lw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rf(t,e){return cw(t)||dw(t,e)||pg(t,e)||pw()}function Ua(t){return uw(t)||fw(t)||pg(t)||hw()}function uw(t){if(Array.isArray(t))return Cu(t)}function cw(t){if(Array.isArray(t))return t}function fw(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dw(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function pg(t,e){if(!!t){if(typeof t=="string")return Cu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cu(t,e)}}function Cu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yh=function(){},sf={},mg={},gg=null,vg={mark:yh,measure:yh};try{typeof window!="undefined"&&(sf=window),typeof document!="undefined"&&(mg=document),typeof MutationObserver!="undefined"&&(gg=MutationObserver),typeof performance!="undefined"&&(vg=performance)}catch{}var mw=sf.navigator||{},wh=mw.userAgent,Eh=wh===void 0?"":wh,vn=sf,Z=mg,Ch=gg,to=vg;vn.document;var Vt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",_g=~Eh.indexOf("MSIE")||~Eh.indexOf("Trident/"),Ut="___FONT_AWESOME___",Su=16,yg="fa",wg="svg-inline--fa",Qn="data-fa-i2svg",ku="data-fa-pseudo-element",gw="data-fa-pseudo-element-pending",of="data-prefix",af="data-icon",Sh="fontawesome-i2svg",vw="async",_w=["HTML","HEAD","STYLE","SCRIPT"],Eg=function(){try{return!0}catch{return!1}}(),lf={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Bo={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Cg={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},yw={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ww=/fa[srltdbk\-\ ]/,Sg="fa-layers-text",Ew=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Cw={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},kg=[1,2,3,4,5,6,7,8,9,10],Sw=kg.concat([11,12,13,14,15,16,17,18,19,20]),kw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Un={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Iw=[].concat(Ua(Object.keys(Bo)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Un.GROUP,Un.SWAP_OPACITY,Un.PRIMARY,Un.SECONDARY]).concat(kg.map(function(t){return"".concat(t,"x")})).concat(Sw.map(function(t){return"w-".concat(t)})),Ig=vn.FontAwesomeConfig||{};function Tw(t){var e=Z.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xw(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Z&&typeof Z.querySelector=="function"){var Nw=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nw.forEach(function(t){var e=rf(t,2),n=e[0],r=e[1],i=xw(Tw(n));i!=null&&(Ig[r]=i)})}var bw={familyPrefix:yg,styleDefault:"solid",replacementClass:wg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ji=b(b({},bw),Ig);ji.autoReplaceSvg||(ji.observeMutations=!1);var R={};Object.keys(ji).forEach(function(t){Object.defineProperty(R,t,{enumerable:!0,set:function(n){ji[t]=n,To.forEach(function(r){return r(R)})},get:function(){return ji[t]}})});vn.FontAwesomeConfig=R;var To=[];function Pw(t){return To.push(t),function(){To.splice(To.indexOf(t),1)}}var Yt=Su,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rw(t){if(!(!t||!Vt)){var e=Z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Z.head.insertBefore(e,r),t}}var Aw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ns(){for(var t=12,e="";t-- >0;)e+=Aw[Math.random()*62|0];return e}function li(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function uf(t){return t.classList?li(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Tg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ow(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Tg(t[n]),'" ')},"").trim()}function za(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function cf(t){return t.size!==mt.size||t.x!==mt.x||t.y!==mt.y||t.rotate!==mt.rotate||t.flipX||t.flipY}function Lw(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Mw(t){var e=t.transform,n=t.width,r=n===void 0?Su:n,i=t.height,s=i===void 0?Su:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_g?l+="translate(".concat(e.x/Yt-r/2,"em, ").concat(e.y/Yt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Yt,"em), calc(-50% + ").concat(e.y/Yt,"em)) "):l+="translate(".concat(e.x/Yt,"em, ").concat(e.y/Yt,"em) "),l+="scale(".concat(e.size/Yt*(e.flipX?-1:1),", ").concat(e.size/Yt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Dw=`:root, :host {
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
}`;function xg(){var t=yg,e=wg,n=R.familyPrefix,r=R.replacementClass,i=Dw;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var kh=!1;function Pl(){R.autoAddCss&&!kh&&(Rw(xg()),kh=!0)}var Fw={mixout:function(){return{dom:{css:xg,insertCss:Pl}}},hooks:function(){return{beforeDOMElementCreation:function(){Pl()},beforeI2svg:function(){Pl()}}}},zt=vn||{};zt[Ut]||(zt[Ut]={});zt[Ut].styles||(zt[Ut].styles={});zt[Ut].hooks||(zt[Ut].hooks={});zt[Ut].shims||(zt[Ut].shims=[]);var ut=zt[Ut],Ng=[],Uw=function t(){Z.removeEventListener("DOMContentLoaded",t),Ho=1,Ng.map(function(e){return e()})},Ho=!1;Vt&&(Ho=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Ho||Z.addEventListener("DOMContentLoaded",Uw));function zw(t){!Vt||(Ho?setTimeout(t,0):Ng.push(t))}function Os(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Tg(t):"<".concat(e," ").concat(Ow(r),">").concat(s.map(Os).join(""),"</").concat(e,">")}function Ih(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ww=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Rl=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Ww(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function jw(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Iu(t){var e=jw(t);return e.length===1?e[0].toString(16):null}function $w(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Th(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Th(e);typeof ut.hooks.addPack=="function"&&!i?ut.hooks.addPack(t,Th(e)):ut.styles[t]=b(b({},ut.styles[t]||{}),s),t==="fas"&&Tu("fa",e)}var $i=ut.styles,Bw=ut.shims,Hw=Object.values(Cg),ff=null,bg={},Pg={},Rg={},Ag={},Og={},Vw=Object.keys(lf);function qw(t){return~Iw.indexOf(t)}function Gw(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qw(i)?i:null}var Lg=function(){var e=function(s){return Rl($i,function(o,a,l){return o[l]=Rl(a,s,{}),o},{})};bg=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Pg=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Og=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in $i||R.autoFetchSvg,r=Rl(Bw,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Rg=r.names,Ag=r.unicodes,ff=Wa(R.styleDefault)};Pw(function(t){ff=Wa(t.styleDefault)});Lg();function df(t,e){return(bg[t]||{})[e]}function Yw(t,e){return(Pg[t]||{})[e]}function gr(t,e){return(Og[t]||{})[e]}function Mg(t){return Rg[t]||{prefix:null,iconName:null}}function Kw(t){var e=Ag[t],n=df("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return ff}var hf=function(){return{prefix:null,iconName:null,rest:[]}};function Wa(t){var e=lf[t],n=Bo[t]||Bo[e],r=t in ut.styles?t:null;return n||r||null}function ja(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=Gw(R.familyPrefix,a);if($i[a]?(a=Hw.includes(a)?yw[a]:a,i=a,o.prefix=a):Vw.indexOf(a)>-1?(i=a,o.prefix=Wa(a)):l?o.iconName=l:a!==R.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?Mg(o.iconName):{},c=gr(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!$i.far&&$i.fas&&!R.autoFetchSvg&&(o.prefix="fas")}return o},hf());return(s.prefix==="fa"||i==="fa")&&(s.prefix=_n()||"fas"),s}var Qw=function(){function t(){ow(this,t),this.definitions={}}return aw(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=b(b({},n.definitions[a]||{}),o[a]),Tu(a,o[a]);var l=Cg[a];l&&Tu(l,o[a]),Lg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),xh=[],vr={},Rr={},Xw=Object.keys(Rr);function Jw(t,e){var n=e.mixoutsTo;return xh=t,vr={},Object.keys(Rr).forEach(function(r){Xw.indexOf(r)===-1&&delete Rr[r]}),xh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$o(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){vr[o]||(vr[o]=[]),vr[o].push(s[o])})}r.provides&&r.provides(Rr)}),n}function xu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=vr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Xn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=vr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Wt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Rr[t]?Rr[t].apply(null,e):void 0}function Nu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||_n();if(!!e)return e=gr(n,e)||e,Ih(Dg.definitions,n,e)||Ih(ut.styles,n,e)}var Dg=new Qw,Zw=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Xn("noAuto")},eE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Xn("beforeI2svg",e),Wt("pseudoElements2svg",e),Wt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,zw(function(){nE({autoReplaceSvgRoot:n}),Xn("watch",e)})}},tE={icon:function(e){if(e===null)return null;if($o(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Wa(e[0]);return{prefix:r,iconName:gr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(R.familyPrefix,"-"))>-1||e.match(ww))){var i=ja(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:gr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=_n();return{prefix:s,iconName:gr(s,e)||e}}}},Ge={noAuto:Zw,config:R,dom:eE,parse:tE,library:Dg,findIconDefinition:Nu,toHtml:Os},nE=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(ut.styles).length>0||R.autoFetchSvg)&&Vt&&R.autoReplaceSvg&&Ge.dom.i2svg({node:r})};function $a(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Os(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Vt){var r=Z.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function rE(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(cf(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=za(b(b({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iE(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(R.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},i),{},{id:o}),children:r}]}]}function pf(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,g=d===void 0?!1:d,v=r.found?r:n,w=v.width,N=v.height,p=i==="fak",h=[R.replacementClass,s?"".concat(R.familyPrefix,"-").concat(s):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),m={children:[],attributes:b(b({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(N)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/N*16*.0625,"em")}:{};g&&(m.attributes[Qn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ns())},children:[l]}),delete m.attributes.title);var E=b(b({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:b(b({},_),f.styles)}),T=r.found&&n.found?Wt("generateAbstractMask",E)||{children:[],attributes:{}}:Wt("generateAbstractIcon",E)||{children:[],attributes:{}},y=T.children,S=T.attributes;return E.children=y,E.attributes=S,a?iE(E):rE(E)}function Nh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=b(b(b({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Qn]="");var c=b({},o.styles);cf(i)&&(c.transform=Mw({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=za(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function sE(t){var e=t.content,n=t.title,r=t.extra,i=b(b(b({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=za(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Al=ut.styles;function bu(t){var e=t[0],n=t[1],r=t.slice(4),i=rf(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.familyPrefix,"-").concat(Un.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(Un.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(Un.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var oE={found:!1,width:512,height:512};function aE(t,e){!Eg&&!R.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pu(t,e){var n=e;return e==="fa"&&R.styleDefault!==null&&(e=_n()),new Promise(function(r,i){if(Wt("missingIconAbstract"),n==="fa"){var s=Mg(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Al[e]&&Al[e][t]){var o=Al[e][t];return r(bu(o))}aE(t,e),r(b(b({},oE),{},{icon:R.showMissingIcons&&t?Wt("missingIconAbstract")||{}:{}}))})}var bh=function(){},Ru=R.measurePerformance&&to&&to.mark&&to.measure?to:{mark:bh,measure:bh},Oi='FA "6.1.1"',lE=function(e){return Ru.mark("".concat(Oi," ").concat(e," begins")),function(){return Fg(e)}},Fg=function(e){Ru.mark("".concat(Oi," ").concat(e," ends")),Ru.measure("".concat(Oi," ").concat(e),"".concat(Oi," ").concat(e," begins"),"".concat(Oi," ").concat(e," ends"))},mf={begin:lE,end:Fg},xo=function(){};function Ph(t){var e=t.getAttribute?t.getAttribute(Qn):null;return typeof e=="string"}function uE(t){var e=t.getAttribute?t.getAttribute(of):null,n=t.getAttribute?t.getAttribute(af):null;return e&&n}function cE(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(R.replacementClass)}function fE(){if(R.autoReplaceSvg===!0)return No.replace;var t=No[R.autoReplaceSvg];return t||No.replace}function dE(t){return Z.createElementNS("http://www.w3.org/2000/svg",t)}function hE(t){return Z.createElement(t)}function Ug(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?dE:hE:n;if(typeof t=="string")return Z.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Ug(o,{ceFn:r}))}),i}function pE(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var No={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Ug(i),n)}),n.getAttribute(Qn)===null&&R.keepOriginalSource){var r=Z.createComment(pE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~uf(n).indexOf(R.replacementClass))return No.replace(e);var i=new RegExp("".concat(R.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Os(a)}).join(`
`);n.setAttribute(Qn,""),n.innerHTML=o}};function Rh(t){t()}function zg(t,e){var n=typeof e=="function"?e:xo;if(t.length===0)n();else{var r=Rh;R.mutateApproach===vw&&(r=vn.requestAnimationFrame||Rh),r(function(){var i=fE(),s=mf.begin("mutate");t.map(i),s(),n()})}}var gf=!1;function Wg(){gf=!0}function Au(){gf=!1}var Vo=null;function Ah(t){if(!!Ch&&!!R.observeMutations){var e=t.treeCallback,n=e===void 0?xo:e,r=t.nodeCallback,i=r===void 0?xo:r,s=t.pseudoElementsCallback,o=s===void 0?xo:s,a=t.observeMutationsRoot,l=a===void 0?Z:a;Vo=new Ch(function(u){if(!gf){var c=_n();li(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ph(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Ph(f.target)&&~kw.indexOf(f.attributeName))if(f.attributeName==="class"&&uE(f.target)){var d=ja(uf(f.target)),g=d.prefix,v=d.iconName;f.target.setAttribute(of,g||c),v&&f.target.setAttribute(af,v)}else cE(f.target)&&i(f.target)})}}),Vt&&Vo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mE(){!Vo||Vo.disconnect()}function gE(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function vE(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ja(uf(t));return i.prefix||(i.prefix=_n()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=Yw(i.prefix,t.innerText)||df(i.prefix,Iu(t.innerText))),i}function _E(t){var e=li(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return R.autoA11y&&(n?e["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||ns()):(e["aria-hidden"]="true",e.focusable="false")),e}function yE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vE(t),r=n.iconName,i=n.prefix,s=n.rest,o=_E(t),a=xu("parseNodeAttributes",{},t),l=e.styleParser?gE(t):[];return b({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var wE=ut.styles;function jg(t){var e=R.autoReplaceSvg==="nest"?Oh(t,{styleParser:!1}):Oh(t);return~e.extra.classes.indexOf(Sg)?Wt("generateLayersText",t,e):Wt("generateSvgReplacementMutation",t,e)}function Lh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=Z.documentElement.classList,r=function(f){return n.add("".concat(Sh,"-").concat(f))},i=function(f){return n.remove("".concat(Sh,"-").concat(f))},s=R.autoFetchSvg?Object.keys(lf):Object.keys(wE),o=[".".concat(Sg,":not([").concat(Qn,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Qn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=li(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=mf.begin("onTree"),u=a.reduce(function(c,f){try{var d=jg(f);d&&c.push(d)}catch(g){Eg||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){zg(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function EE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jg(t).then(function(n){n&&zg([n],e)})}function CE(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Nu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nu(i||{})),t(r,b(b({},n),{},{mask:i}))}}var SE=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,N=w===void 0?[]:w,p=n.attributes,h=p===void 0?{}:p,m=n.styles,_=m===void 0?{}:m;if(!!e){var E=e.prefix,T=e.iconName,y=e.icon;return $a(b({type:"icon"},e),function(){return Xn("beforeDOMElementCreation",{iconDefinition:e,params:n}),R.autoA11y&&(d?h["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||ns()):(h["aria-hidden"]="true",h.focusable="false")),pf({icons:{main:bu(y),mask:l?bu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:T,transform:b(b({},mt),i),symbol:o,title:d,maskId:c,titleId:v,extra:{attributes:h,styles:_,classes:N}})})}},kE={mixout:function(){return{icon:CE(SE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lh,n.nodeCallback=EE,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,s=n.callback,o=s===void 0?function(){}:s;return Lh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,v){Promise.all([Pu(i,a),c.iconName?Pu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var N=rf(w,2),p=N[0],h=N[1];g([n,pf({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=za(a);l.length>0&&(i.style=l);var u;return cf(o)&&(u=Wt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},IE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return $a({type:"layer"},function(){Xn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.familyPrefix,"-layers")].concat(Ua(s)).join(" ")},children:o}]})}}}},TE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return $a({type:"counter",content:n},function(){return Xn("beforeDOMElementCreation",{content:n,params:r}),sE({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(R.familyPrefix,"-layers-counter")].concat(Ua(a))}})})}}}},xE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return $a({type:"text",content:n},function(){return Xn("beforeDOMElementCreation",{content:n,params:r}),Nh({content:n,transform:b(b({},mt),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(R.familyPrefix,"-layers-text")].concat(Ua(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_g){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nh({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},NE=new RegExp('"',"ug"),Mh=[1105920,1112319];function bE(t){var e=t.replace(NE,""),n=$w(e,0),r=n>=Mh[0]&&n<=Mh[1],i=e.length===2?e[0]===e[1]:!1;return{value:Iu(i?e[0]:e),isSecondary:r||i}}function Dh(t,e){var n="".concat(gw).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=li(t.children),o=s.filter(function(T){return T.getAttribute(ku)===e})[0],a=vn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Ew),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Bo[l[2].toLowerCase()]:Cw[u],g=bE(f),v=g.value,w=g.isSecondary,N=l[0].startsWith("FontAwesome"),p=df(d,v),h=p;if(N){var m=Kw(v);m.iconName&&m.prefix&&(p=m.iconName,d=m.prefix)}if(p&&!w&&(!o||o.getAttribute(of)!==d||o.getAttribute(af)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);var _=yE(),E=_.extra;E.attributes[ku]=e,Pu(p,d).then(function(T){var y=pf(b(b({},_),{},{icons:{main:T,mask:hf()},prefix:d,iconName:h,extra:E,watchable:!0})),S=Z.createElement("svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=y.map(function(L){return Os(L)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function PE(t){return Promise.all([Dh(t,"::before"),Dh(t,"::after")])}function RE(t){return t.parentNode!==document.head&&!~_w.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ku)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fh(t){if(!!Vt)return new Promise(function(e,n){var r=li(t.querySelectorAll("*")).filter(RE).map(PE),i=mf.begin("searchPseudoElements");Wg(),Promise.all(r).then(function(){i(),Au(),e()}).catch(function(){i(),Au(),n()})})}var AE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fh,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;R.searchPseudoElements&&Fh(i)}}},Uh=!1,OE={mixout:function(){return{dom:{unwatch:function(){Wg(),Uh=!0}}}},hooks:function(){return{bootstrap:function(){Ah(xu("mutationObserverCallbacks",{}))},noAuto:function(){mE()},watch:function(n){var r=n.observeMutationsRoot;Uh?Au():Ah(xu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},LE={mixout:function(){return{parse:{transform:function(n){return zh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=zh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b(b({},r.icon.attributes),g.path)}]}]}}}},Ol={x:0,y:0,width:"100%",height:"100%"};function Wh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ME(t){return t.tag==="g"?t.children:[t]}var DE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ja(i.split(" ").map(function(o){return o.trim()})):hf();return s.prefix||(s.prefix=_n()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,g=Lw({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:b(b({},Ol),{},{fill:"white"})},w=c.children?{children:c.children.map(Wh)}:{},N={tag:"g",attributes:b({},g.inner),children:[Wh(b({tag:c.tag,attributes:b(b({},c.attributes),g.path)},w))]},p={tag:"g",attributes:b({},g.outer),children:[N]},h="mask-".concat(a||ns()),m="clip-".concat(a||ns()),_={tag:"mask",attributes:b(b({},Ol),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:ME(d)},_]};return r.push(E,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Ol)}),{children:r,attributes:i}}}},FE={provides:function(e){var n=!1;vn.matchMedia&&(n=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:b(b({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:b(b({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:b(b({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:b(b({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:b(b({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},zE=[Fw,kE,IE,TE,xE,AE,OE,LE,DE,FE,UE];Jw(zE,{mixoutsTo:Ge});Ge.noAuto;Ge.config;var WE=Ge.library;Ge.dom;var Ou=Ge.parse;Ge.findIconDefinition;Ge.toHtml;var jE=Ge.icon;Ge.layer;Ge.text;Ge.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var $E={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"]},BE={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},HE={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},VE=HE,qE={prefix:"fas",iconName:"user-ninja",icon:[512,512,[129399],"f504","M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"]},Lu={},$g={exports:{}},Ye={},Bg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var U=P.length;P.push(F);e:for(;0<U;){var ue=U-1>>>1,pe=P[ue];if(0<i(pe,F))P[ue]=F,P[U]=pe,U=ue;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],U=P.pop();if(U!==F){P[0]=U;e:for(var ue=0,pe=P.length,Js=pe>>>1;ue<Js;){var Pn=2*(ue+1)-1,Nl=P[Pn],Rn=Pn+1,Zs=P[Rn];if(0>i(Nl,U))Rn<pe&&0>i(Zs,Nl)?(P[ue]=Zs,P[Rn]=U,ue=Rn):(P[ue]=Nl,P[Pn]=U,ue=Pn);else if(Rn<pe&&0>i(Zs,U))P[ue]=Zs,P[Rn]=U,ue=Rn;else break e}}return F}function i(P,F){var U=P.sortIndex-F.sortIndex;return U!==0?U:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,v=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=P)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function _(P){if(w=!1,m(P),!v)if(n(l)!==null)v=!0,Tl(E);else{var F=n(u);F!==null&&xl(_,F.startTime-P)}}function E(P,F){v=!1,w&&(w=!1,p(S),S=-1),g=!0;var U=d;try{for(m(F),f=n(l);f!==null&&(!(f.expirationTime>F)||P&&!ne());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var pe=ue(f.expirationTime<=F);F=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&r(l),m(F)}else r(l);f=n(l)}if(f!==null)var Js=!0;else{var Pn=n(u);Pn!==null&&xl(_,Pn.startTime-F),Js=!1}return Js}finally{f=null,d=U,g=!1}}var T=!1,y=null,S=-1,L=5,M=-1;function ne(){return!(t.unstable_now()-M<L)}function Qe(){if(y!==null){var P=t.unstable_now();M=P;var F=!0;try{F=y(!0,P)}finally{F?It():(T=!1,y=null)}}else T=!1}var It;if(typeof h=="function")It=function(){h(Qe)};else if(typeof MessageChannel!="undefined"){var bn=new MessageChannel,oh=bn.port2;bn.port1.onmessage=Qe,It=function(){oh.postMessage(null)}}else It=function(){N(Qe,0)};function Tl(P){y=P,T||(T=!0,It())}function xl(P,F){S=N(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Tl(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var U=d;d=F;try{return P()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=d;d=P;try{return F()}finally{d=U}},t.unstable_scheduleCallback=function(P,F,U){var ue=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ue+U:ue):U=ue,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=U+pe,P={id:c++,callback:F,priorityLevel:P,startTime:U,expirationTime:pe,sortIndex:-1},U>ue?(P.sortIndex=U,e(u,P),n(l)===null&&P===n(u)&&(w?(p(S),S=-1):w=!0,xl(_,U-ue))):(P.sortIndex=pe,e(l,P),v||g||(v=!0,Tl(E))),P},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(P){var F=d;return function(){var U=d;d=F;try{return P.apply(this,arguments)}finally{d=U}}}})(Hg);Bg.exports=Hg;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg=O.exports,qe=Bg.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,rs={};function cr(t,e){$r(t,e),$r(t+"Capture",e)}function $r(t,e){for(rs[t]=e,t=0;t<e.length;t++)qg.add(e[t])}var jt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Mu=Object.prototype.hasOwnProperty,GE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jh={},$h={};function YE(t){return Mu.call($h,t)?!0:Mu.call(jh,t)?!1:GE.test(t)?$h[t]=!0:(jh[t]=!0,!1)}function KE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QE(t,e,n,r){if(e===null||typeof e=="undefined"||KE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,_f);Ce[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,_f);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,_f);Ce[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QE(e,n,i,r)&&(n=null),r||i===null?YE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),_r=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Ll;function Li(t){if(Ll===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ll=e&&e[1]||""}return`
`+Ll+t}var Ml=!1;function Dl(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Li(t):""}function XE(t){switch(t.tag){case 5:return Li(t.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return t=Dl(t.type,!1),t;case 11:return t=Dl(t.type.render,!1),t;case 1:return t=Dl(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yr:return"Fragment";case _r:return"Portal";case Du:return"Profiler";case wf:return"StrictMode";case Fu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case Qt:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function JE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=Qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=ZE(t))}function Xg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function ju(t,e){Jg(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mi=Array.isArray;function Ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Mi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function Zg(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,tv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eC=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){eC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tC=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(tC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Or=null,Lr=null;function Yh(t){if(t=Ds(t)){if(typeof Yu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ga(e),Yu(t.stateNode,t.type,e))}}function iv(t){Or?Lr?Lr.push(t):Lr=[t]:Or=t}function sv(){if(Or){var t=Or,e=Lr;if(Lr=Or=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function ov(t,e){return t(e)}function av(){}var Fl=!1;function lv(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return ov(t,e,n)}finally{Fl=!1,(Or!==null||Lr!==null)&&(av(),sv())}}function ss(t,e){var n=t.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Ku=!1;if(jt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Ku=!1}function nC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Hi=!1,Go=null,Yo=!1,Qu=null,rC={onError:function(t){Hi=!0,Go=t}};function iC(t,e,n,r,i,s,o,a,l){Hi=!1,Go=null,nC.apply(rC,arguments)}function sC(t,e,n,r,i,s,o,a,l){if(iC.apply(this,arguments),Hi){if(Hi){var u=Go;Hi=!1,Go=null}else throw Error(C(198));Yo||(Yo=!0,Qu=u)}}function fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kh(t){if(fr(t)!==t)throw Error(C(188))}function oC(t){var e=t.alternate;if(!e){if(e=fr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kh(i),t;if(s===r)return Kh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function cv(t){return t=oC(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var dv=qe.unstable_scheduleCallback,Qh=qe.unstable_cancelCallback,aC=qe.unstable_shouldYield,lC=qe.unstable_requestPaint,ce=qe.unstable_now,uC=qe.unstable_getCurrentPriorityLevel,kf=qe.unstable_ImmediatePriority,hv=qe.unstable_UserBlockingPriority,Ko=qe.unstable_NormalPriority,cC=qe.unstable_LowPriority,pv=qe.unstable_IdlePriority,Ba=null,vt=null;function fC(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ba,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:pC,dC=Math.log,hC=Math.LN2;function pC(t){return t>>>=0,t===0?32:31-(dC(t)/hC|0)|0}var so=64,oo=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Di(a):(s&=o,s!==0&&(r=Di(s)))}else o=n&~i,o!==0?r=Di(o):s!==0&&(r=Di(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ft(e),i=1<<n,r|=t[n],e&=~i;return r}function mC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ft(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=mC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=n}function vC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function mv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var gv,Tf,vv,_v,yv,Ju=!1,ao=[],un=null,cn=null,fn=null,os=new Map,as=new Map,Jt=[],_C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(t,e){switch(t){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":os.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(e.pointerId)}}function Ci(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ds(e),e!==null&&Tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yC(t,e,n,r,i){switch(e){case"focusin":return un=Ci(un,t,e,n,r,i),!0;case"dragenter":return cn=Ci(cn,t,e,n,r,i),!0;case"mouseover":return fn=Ci(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return os.set(s,Ci(os.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,Ci(as.get(s)||null,t,e,n,r,i)),!0}return!1}function wv(t){var e=zn(t.target);if(e!==null){var n=fr(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,yv(t.priority,function(){vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gu=r,n.target.dispatchEvent(r),Gu=null}else return e=Ds(n),e!==null&&Tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Jh(t,e,n){bo(t)&&n.delete(e)}function wC(){Ju=!1,un!==null&&bo(un)&&(un=null),cn!==null&&bo(cn)&&(cn=null),fn!==null&&bo(fn)&&(fn=null),os.forEach(Jh),as.forEach(Jh)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,wC)))}function ls(t){function e(i){return Si(i,t)}if(0<ao.length){Si(ao[0],t);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(un!==null&&Si(un,t),cn!==null&&Si(cn,t),fn!==null&&Si(fn,t),os.forEach(e),as.forEach(e),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)wv(n),n.blockedOn===null&&Jt.shift()}var Mr=qt.ReactCurrentBatchConfig;function EC(t,e,n,r){var i=q,s=Mr.transition;Mr.transition=null;try{q=1,xf(t,e,n,r)}finally{q=i,Mr.transition=s}}function CC(t,e,n,r){var i=q,s=Mr.transition;Mr.transition=null;try{q=4,xf(t,e,n,r)}finally{q=i,Mr.transition=s}}function xf(t,e,n,r){var i=Zu(t,e,n,r);if(i===null)Yl(t,e,r,Xo,n),Xh(t,r);else if(yC(i,t,e,n,r))r.stopPropagation();else if(Xh(t,r),e&4&&-1<_C.indexOf(t)){for(;i!==null;){var s=Ds(i);if(s!==null&&gv(s),s=Zu(t,e,n,r),s===null&&Yl(t,e,r,Xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yl(t,e,r,null,n)}var Xo=null;function Zu(t,e,n,r){if(Xo=null,t=Sf(r),t=zn(t),t!==null)if(e=fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function Ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uC()){case kf:return 1;case hv:return 4;case Ko:case cC:return 16;case pv:return 536870912;default:return 16}default:return 16}}var rn=null,Nf=null,Po=null;function Cv(){if(Po)return Po;var t,e=Nf,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Po=i.slice(t,1<r?1-r:void 0)}function Ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Zh(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Zh,this.isPropagationStopped=Zh,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Ke(ui),Ms=se({},ui,{view:0,detail:0}),SC=Ke(Ms),zl,Wl,ki,Ha=se({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(zl=t.screenX-ki.screenX,Wl=t.screenY-ki.screenY):Wl=zl=0,ki=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),ep=Ke(Ha),kC=se({},Ha,{dataTransfer:0}),IC=Ke(kC),TC=se({},Ms,{relatedTarget:0}),jl=Ke(TC),xC=se({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),NC=Ke(xC),bC=se({},ui,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PC=Ke(bC),RC=se({},ui,{data:0}),tp=Ke(RC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LC[t])?!!e[t]:!1}function Pf(){return MC}var DC=se({},Ms,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FC=Ke(DC),UC=se({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Ke(UC),zC=se({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),WC=Ke(zC),jC=se({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),$C=Ke(jC),BC=se({},Ha,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HC=Ke(BC),VC=[9,13,27,32],Rf=jt&&"CompositionEvent"in window,Vi=null;jt&&"documentMode"in document&&(Vi=document.documentMode);var qC=jt&&"TextEvent"in window&&!Vi,Sv=jt&&(!Rf||Vi&&8<Vi&&11>=Vi),rp=String.fromCharCode(32),ip=!1;function kv(t,e){switch(t){case"keyup":return VC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function GC(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(ip=!0,rp);case"textInput":return t=e.data,t===rp&&ip?null:t;default:return null}}function YC(t,e){if(wr)return t==="compositionend"||!Rf&&kv(t,e)?(t=Cv(),Po=Nf=rn=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var KC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KC[t.type]:e==="textarea"}function Tv(t,e,n,r){iv(r),e=Jo(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qi=null,us=null;function QC(t){Fv(t,0)}function Va(t){var e=Sr(t);if(Xg(e))return t}function XC(t,e){if(t==="change")return e}var xv=!1;if(jt){var $l;if(jt){var Bl="oninput"in document;if(!Bl){var op=document.createElement("div");op.setAttribute("oninput","return;"),Bl=typeof op.oninput=="function"}$l=Bl}else $l=!1;xv=$l&&(!document.documentMode||9<document.documentMode)}function ap(){qi&&(qi.detachEvent("onpropertychange",Nv),us=qi=null)}function Nv(t){if(t.propertyName==="value"&&Va(us)){var e=[];Tv(e,us,t,Sf(t)),lv(QC,e)}}function JC(t,e,n){t==="focusin"?(ap(),qi=e,us=n,qi.attachEvent("onpropertychange",Nv)):t==="focusout"&&ap()}function ZC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Va(us)}function eS(t,e){if(t==="click")return Va(e)}function tS(t,e){if(t==="input"||t==="change")return Va(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:nS;function cs(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mu.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function Af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&Af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=up(n,s);var o=up(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=jt&&"documentMode"in document&&11>=document.documentMode,Er=null,ec=null,Gi=null,tc=!1;function cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tc||Er==null||Er!==qo(r)||(r=Er,"selectionStart"in r&&Af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&cs(Gi,r)||(Gi=r,r=Jo(ec,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Hl={},Rv={};jt&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function qa(t){if(Hl[t])return Hl[t];if(!Cr[t])return t;var e=Cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return Hl[t]=e[n];return t}var Av=qa("animationend"),Ov=qa("animationiteration"),Lv=qa("animationstart"),Mv=qa("transitionend"),Dv=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Dv.set(t,e),cr(e,[t])}for(var Vl=0;Vl<fp.length;Vl++){var ql=fp[Vl],sS=ql.toLowerCase(),oS=ql[0].toUpperCase()+ql.slice(1);In(sS,"on"+oS)}In(Av,"onAnimationEnd");In(Ov,"onAnimationIteration");In(Lv,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Mv,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function dp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sC(r,e,void 0,t),t.currentTarget=null}function Fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dp(i,a,u),s=l}}}if(Yo)throw t=Qu,Yo=!1,Qu=null,t}function J(t,e){var n=e[sc];n===void 0&&(n=e[sc]=new Set);var r=t+"__bubble";n.has(r)||(Uv(e,t,2,!1),n.add(r))}function Gl(t,e,n){var r=0;e&&(r|=4),Uv(n,t,r,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[co]){t[co]=!0,qg.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Gl("selectionchange",!1,e))}}function Uv(t,e,n,r){switch(Ev(e)){case 1:var i=EC;break;case 4:i=CC;break;default:i=xf}n=i.bind(null,e,n,t),i=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yl(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}lv(function(){var u=s,c=Sf(n),f=[];e:{var d=Dv.get(t);if(d!==void 0){var g=bf,v=t;switch(t){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=FC;break;case"focusin":v="focus",g=jl;break;case"focusout":v="blur",g=jl;break;case"beforeblur":case"afterblur":g=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=IC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=WC;break;case Av:case Ov:case Lv:g=NC;break;case Mv:g=$C;break;case"scroll":g=SC;break;case"wheel":g=HC;break;case"copy":case"cut":case"paste":g=PC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=np}var w=(e&4)!==0,N=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,m;h!==null;){m=h;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=ss(h,p),_!=null&&w.push(ds(h,_,m)))),N)break;h=h.return}0<w.length&&(d=new g(d,v,null,n,c),f.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Gu&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[$t]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?zn(v):null,v!==null&&(N=fr(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=ep,_="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=np,_="onPointerLeave",p="onPointerEnter",h="pointer"),N=g==null?d:Sr(g),m=v==null?d:Sr(v),d=new w(_,h+"leave",g,n,c),d.target=N,d.relatedTarget=m,_=null,zn(c)===u&&(w=new w(p,h+"enter",v,n,c),w.target=m,w.relatedTarget=N,_=w),N=_,g&&v)t:{for(w=g,p=v,h=0,m=w;m;m=pr(m))h++;for(m=0,_=p;_;_=pr(_))m++;for(;0<h-m;)w=pr(w),h--;for(;0<m-h;)p=pr(p),m--;for(;h--;){if(w===p||p!==null&&w===p.alternate)break t;w=pr(w),p=pr(p)}w=null}else w=null;g!==null&&hp(f,d,g,w,!1),v!==null&&N!==null&&hp(f,N,v,w,!0)}}e:{if(d=u?Sr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var E=XC;else if(sp(d))if(xv)E=tS;else{E=ZC;var T=JC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=eS);if(E&&(E=E(t,u))){Tv(f,E,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&$u(d,"number",d.value)}switch(T=u?Sr(u):window,t){case"focusin":(sp(T)||T.contentEditable==="true")&&(Er=T,ec=u,Gi=null);break;case"focusout":Gi=ec=Er=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,cp(f,n,c);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":cp(f,n,c)}var y;if(Rf)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else wr?kv(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Sv&&n.locale!=="ko"&&(wr||S!=="onCompositionStart"?S==="onCompositionEnd"&&wr&&(y=Cv()):(rn=c,Nf="value"in rn?rn.value:rn.textContent,wr=!0)),T=Jo(u,S),0<T.length&&(S=new tp(S,t,null,n,c),f.push({event:S,listeners:T}),y?S.data=y:(y=Iv(n),y!==null&&(S.data=y)))),(y=qC?GC(t,n):YC(t,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(c=new tp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=y))}Fv(f,e)})}function ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ss(t,n),s!=null&&r.unshift(ds(t,s,i)),s=ss(t,e),s!=null&&r.push(ds(t,s,i))),t=t.return}return r}function pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ss(n,s),l!=null&&o.unshift(ds(n,l,a))):i||(l=ss(n,s),l!=null&&o.push(ds(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(uS,"")}function fo(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(C(425))}function Zo(){}var nc=null;function rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof mp!="undefined"?function(t){return mp.resolve(null).then(t).catch(dS)}:ic;function dS(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ls(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ls(e)}function Pt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),pt="__reactFiber$"+ci,hs="__reactProps$"+ci,$t="__reactContainer$"+ci,sc="__reactEvents$"+ci,hS="__reactListeners$"+ci,pS="__reactHandles$"+ci;function zn(t){var e=t[pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$t]||n[pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[pt])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function Ds(t){return t=t[pt]||t[$t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Sr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ga(t){return t[hs]||null}var oc=[],kr=-1;function Tn(t){return{current:t}}function ee(t){0>kr||(t.current=oc[kr],oc[kr]=null,kr--)}function X(t,e){kr++,oc[kr]=t.current,t.current=e}var wn={},xe=Tn(wn),ze=Tn(!1),Jn=wn;function Br(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function ea(){ee(ze),ee(xe)}function vp(t,e,n){if(xe.current!==wn)throw Error(C(168));X(xe,e),X(ze,n)}function zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,JE(t)||"Unknown",i));return se({},n,r)}function ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Jn=xe.current,X(xe,t),X(ze,ze.current),!0}function _p(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=zv(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,ee(ze),ee(xe),X(xe,t)):ee(ze),X(ze,n)}var Nt=null,Ya=!1,Ql=!1;function Wv(t){Nt===null?Nt=[t]:Nt.push(t)}function mS(t){Ya=!0,Wv(t)}function xn(){if(!Ql&&Nt!==null){Ql=!0;var t=0,e=q;try{var n=Nt;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nt=null,Ya=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(t+1)),dv(kf,xn),i}finally{q=e,Ql=!1}}return null}var gS=qt.ReactCurrentBatchConfig;function ot(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var na=Tn(null),ra=null,Ir=null,Of=null;function Lf(){Of=Ir=ra=null}function Mf(t){var e=na.current;ee(na),t._currentValue=e}function ac(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dr(t,e){ra=t,Of=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(He=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(ra===null)throw Error(C(308));Ir=t,ra.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var gt=null,Xt=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,de!==null&&(t.mode&1)!==0&&(H&2)===0?(t=n.interleaved,t===null?(e.next=e,gt===null?gt=[n]:gt.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Ao(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}function yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ia(t,e,n,r){var i=t.updateQueue;Xt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=se({},f,d);break e;case 2:Xt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=f}}function wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var $v=new Vg.Component().refs;function lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ka={isMounted:function(t){return(t=t._reactInternals)?fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=pn(t),s=Dt(r,i);s.payload=e,n!=null&&(s.callback=n),dn(t,s),e=rt(t,i,r),e!==null&&Ao(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=pn(t),s=Dt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),dn(t,s),e=rt(t,i,r),e!==null&&Ao(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=pn(t),i=Dt(n,r);i.tag=2,e!=null&&(i.callback=e),dn(t,i),e=rt(t,r,n),e!==null&&Ao(e,t,r)}};function Ep(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!cs(n,r)||!cs(i,s):!0}function Bv(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=We(e)?Jn:xe.current,r=e.contextTypes,s=(r=r!=null)?Br(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ka,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ka.enqueueReplaceState(e,e.state,null)}function uc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$v,Df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=We(e)?Jn:xe.current,i.context=Br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ka.enqueueReplaceState(i,i.state,null),ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Tr=[],xr=0,sa=null,oa=0,Xe=[],Je=0,Zn=null,Rt=1,At="";function On(t,e){Tr[xr++]=oa,Tr[xr++]=sa,sa=t,oa=e}function Hv(t,e,n){Xe[Je++]=Rt,Xe[Je++]=At,Xe[Je++]=Zn,Zn=t;var r=Rt;t=At;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-ft(e)+i|n<<i|r,At=s+t}else Rt=1<<s|n<<i|r,At=t}function Ff(t){t.return!==null&&(On(t,1),Hv(t,1,0))}function Uf(t){for(;t===sa;)sa=Tr[--xr],Tr[xr]=null,oa=Tr[--xr],Tr[xr]=null;for(;t===Zn;)Zn=Xe[--Je],Xe[Je]=null,At=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null}var Ve=null,Me=null,te=!1,at=null;function Vv(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,Me=Pt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,Me=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:Rt,overflow:At}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,Me=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(te){var e=Me;if(e){var n=e;if(!Sp(t,e)){if(cc(t))throw Error(C(418));e=Pt(n.nextSibling);var r=Ve;e&&Sp(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,te=!1,Ve=t)}}else{if(cc(t))throw Error(C(418));t.flags=t.flags&-4097|2,te=!1,Ve=t}}}function kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Ii(t){if(t!==Ve)return!1;if(!te)return kp(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rc(t.type,t.memoizedProps)),e&&(e=Me)){if(cc(t)){for(t=Me;t;)t=Pt(t.nextSibling);throw Error(C(418))}for(;e;)Vv(t,e),e=Pt(e.nextSibling)}if(kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Me=Pt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Me=null}}else Me=Ve?Pt(t.stateNode.nextSibling):null;return!0}function Hr(){Me=Ve=null,te=!1}function zf(t){at===null?at=[t]:at.push(t)}function Ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$v&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ip(t){var e=t._init;return e(t._payload)}function qv(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=En(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,_){return h===null||h.tag!==6?(h=nu(m,p.mode,_),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,_){var E=m.type;return E===yr?c(p,h,m.props.children,_,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&Ip(E)===h.type)?(_=i(h,m.props),_.ref=Ti(p,h,m),_.return=p,_):(_=Fo(m.type,m.key,m.props,null,p.mode,_),_.ref=Ti(p,h,m),_.return=p,_)}function u(p,h,m,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ru(m,p.mode,_),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,_,E){return h===null||h.tag!==7?(h=qn(m,p.mode,_,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=nu(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case no:return m=Fo(h.type,h.key,h.props,null,p.mode,m),m.ref=Ti(p,null,h),m.return=p,m;case _r:return h=ru(h,p.mode,m),h.return=p,h;case Qt:var _=h._init;return f(p,_(h._payload),m)}if(Mi(h)||wi(h))return h=qn(h,p.mode,m,null),h.return=p,h;ho(p,h)}return null}function d(p,h,m,_){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,h,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return m.key===E?l(p,h,m,_):null;case _r:return m.key===E?u(p,h,m,_):null;case Qt:return E=m._init,d(p,h,E(m._payload),_)}if(Mi(m)||wi(m))return E!==null?null:c(p,h,m,_,null);ho(p,m)}return null}function g(p,h,m,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,a(h,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case no:return p=p.get(_.key===null?m:_.key)||null,l(h,p,_,E);case _r:return p=p.get(_.key===null?m:_.key)||null,u(h,p,_,E);case Qt:var T=_._init;return g(p,h,m,T(_._payload),E)}if(Mi(_)||wi(_))return p=p.get(m)||null,c(h,p,_,E,null);ho(h,_)}return null}function v(p,h,m,_){for(var E=null,T=null,y=h,S=h=0,L=null;y!==null&&S<m.length;S++){y.index>S?(L=y,y=null):L=y.sibling;var M=d(p,y,m[S],_);if(M===null){y===null&&(y=L);break}t&&y&&M.alternate===null&&e(p,y),h=s(M,h,S),T===null?E=M:T.sibling=M,T=M,y=L}if(S===m.length)return n(p,y),te&&On(p,S),E;if(y===null){for(;S<m.length;S++)y=f(p,m[S],_),y!==null&&(h=s(y,h,S),T===null?E=y:T.sibling=y,T=y);return te&&On(p,S),E}for(y=r(p,y);S<m.length;S++)L=g(y,p,S,m[S],_),L!==null&&(t&&L.alternate!==null&&y.delete(L.key===null?S:L.key),h=s(L,h,S),T===null?E=L:T.sibling=L,T=L);return t&&y.forEach(function(ne){return e(p,ne)}),te&&On(p,S),E}function w(p,h,m,_){var E=wi(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var T=E=null,y=h,S=h=0,L=null,M=m.next();y!==null&&!M.done;S++,M=m.next()){y.index>S?(L=y,y=null):L=y.sibling;var ne=d(p,y,M.value,_);if(ne===null){y===null&&(y=L);break}t&&y&&ne.alternate===null&&e(p,y),h=s(ne,h,S),T===null?E=ne:T.sibling=ne,T=ne,y=L}if(M.done)return n(p,y),te&&On(p,S),E;if(y===null){for(;!M.done;S++,M=m.next())M=f(p,M.value,_),M!==null&&(h=s(M,h,S),T===null?E=M:T.sibling=M,T=M);return te&&On(p,S),E}for(y=r(p,y);!M.done;S++,M=m.next())M=g(y,p,S,M.value,_),M!==null&&(t&&M.alternate!==null&&y.delete(M.key===null?S:M.key),h=s(M,h,S),T===null?E=M:T.sibling=M,T=M);return t&&y.forEach(function(Qe){return e(p,Qe)}),te&&On(p,S),E}function N(p,h,m,_){if(typeof m=="object"&&m!==null&&m.type===yr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case no:e:{for(var E=m.key,T=h;T!==null;){if(T.key===E){if(E=m.type,E===yr){if(T.tag===7){n(p,T.sibling),h=i(T,m.props.children),h.return=p,p=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&Ip(E)===T.type){n(p,T.sibling),h=i(T,m.props),h.ref=Ti(p,T,m),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===yr?(h=qn(m.props.children,p.mode,_,m.key),h.return=p,p=h):(_=Fo(m.type,m.key,m.props,null,p.mode,_),_.ref=Ti(p,h,m),_.return=p,p=_)}return o(p);case _r:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=ru(m,p.mode,_),h.return=p,p=h}return o(p);case Qt:return T=m._init,N(p,h,T(m._payload),_)}if(Mi(m))return v(p,h,m,_);if(wi(m))return w(p,h,m,_);ho(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=nu(m,p.mode,_),h.return=p,p=h),o(p)):n(p,h)}return N}var Vr=qv(!0),Gv=qv(!1),Fs={},_t=Tn(Fs),ps=Tn(Fs),ms=Tn(Fs);function Wn(t){if(t===Fs)throw Error(C(174));return t}function Wf(t,e){switch(X(ms,e),X(ps,t),X(_t,Fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hu(e,t)}ee(_t),X(_t,e)}function qr(){ee(_t),ee(ps),ee(ms)}function Yv(t){Wn(ms.current);var e=Wn(_t.current),n=Hu(e,t.type);e!==n&&(X(ps,t),X(_t,n))}function jf(t){ps.current===t&&(ee(_t),ee(ps))}var re=Tn(0);function aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function $f(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var Oo=qt.ReactCurrentDispatcher,tt=qt.ReactCurrentBatchConfig,Gr=0,ae=null,Te=null,ge=null,la=!1,Yi=!1,gs=0,vS=0;function ke(){throw Error(C(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function Hf(t,e,n,r,i,s){if(Gr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oo.current=t===null||t.memoizedState===null?ES:CS,t=n(r,i),Yi){s=0;do{if(Yi=!1,gs=0,25<=s)throw Error(C(301));s+=1,ge=Te=null,e.updateQueue=null,Oo.current=SS,t=n(r,i)}while(Yi)}if(Oo.current=ua,e=Te!==null&&Te.next!==null,Gr=0,ge=Te=ae=null,la=!1,e)throw Error(C(300));return t}function Vf(){var t=gs!==0;return gs=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ae.memoizedState=ge=t:ge=ge.next=t,ge}function St(){if(Te===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=ge===null?ae.memoizedState:ge.next;if(e!==null)ge=e,Te=t;else{if(t===null)throw Error(C(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},ge===null?ae.memoizedState=ge=t:ge=ge.next=t}return ge}function Hn(t,e){return typeof e=="function"?e(t):e}function po(t){var e=St(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ae.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ct(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mo(t){var e=St(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kv(){}function Qv(t,e){var n=ae,r=St(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,_s(Zv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,vs(9,Jv.bind(null,n,r,i,e),void 0,null),de===null)throw Error(C(349));(Gr&30)!==0||Xv(n,e,i)}return i}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jv(t,e,n,r){e.value=n,e.getSnapshot=r,e_(e)&&rt(t,1,-1)}function Zv(t,e,n){return n(function(){e_(e)&&rt(t,1,-1)})}function e_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function Jl(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,ae,t),[e.memoizedState,t]}function vs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t_(){return St().memoizedState}function Lo(t,e,n,r){var i=xt();ae.flags|=t,i.memoizedState=vs(1|e,n,void 0,r===void 0?null:r)}function Qa(t,e,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&Bf(r,o.deps)){i.memoizedState=vs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=vs(1|e,n,s,r)}function Zl(t,e){return Lo(8390656,8,t,e)}function _s(t,e){return Qa(2048,8,t,e)}function n_(t,e){return Qa(4,2,t,e)}function r_(t,e){return Qa(4,4,t,e)}function i_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s_(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4,4,i_.bind(null,e,t),n)}function qf(){}function o_(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a_(t,e){var n=St();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _S(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=tt.transition;tt.transition={};try{t(!1),e()}finally{q=n,tt.transition=r}}function l_(){return St().memoizedState}function yS(t,e,n){var r=pn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u_(t)?c_(e,n):(f_(t,e,n),n=Pe(),t=rt(t,r,n),t!==null&&d_(t,e,r))}function wS(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u_(t))c_(e,i);else{f_(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ct(a,o))return}catch{}finally{}n=Pe(),t=rt(t,r,n),t!==null&&d_(t,e,r)}}function u_(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function c_(t,e){Yi=la=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f_(t,e,n){de!==null&&(t.mode&1)!==0&&(H&2)===0?(t=e.interleaved,t===null?(n.next=n,gt===null?gt=[e]:gt.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function d_(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}var ua={readContext:it,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},ES={readContext:it,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:Zl,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lo(4194308,4,i_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:Jl,useDebugValue:qf,useDeferredValue:function(t){var e=Jl(t),n=e[0],r=e[1];return Zl(function(){var i=tt.transition;tt.transition={};try{r(t)}finally{tt.transition=i}},[t]),n},useTransition:function(){var t=Jl(!1),e=t[0];return t=_S.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=xt();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),de===null)throw Error(C(349));(Gr&30)!==0||Xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zl(Zv.bind(null,r,s,t),[t]),r.flags|=2048,vs(9,Jv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=de.identifierPrefix;if(te){var n=At,r=Rt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CS={readContext:it,useCallback:o_,useContext:it,useEffect:_s,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:po,useRef:t_,useState:function(){return po(Hn)},useDebugValue:qf,useDeferredValue:function(t){var e=po(Hn),n=e[0],r=e[1];return _s(function(){var i=tt.transition;tt.transition={};try{r(t)}finally{tt.transition=i}},[t]),n},useTransition:function(){var t=po(Hn)[0],e=St().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:l_,unstable_isNewReconciler:!1},SS={readContext:it,useCallback:o_,useContext:it,useEffect:_s,useImperativeHandle:s_,useInsertionEffect:n_,useLayoutEffect:r_,useMemo:a_,useReducer:mo,useRef:t_,useState:function(){return mo(Hn)},useDebugValue:qf,useDeferredValue:function(t){var e=mo(Hn),n=e[0],r=e[1];return _s(function(){var i=tt.transition;tt.transition={};try{r(t)}finally{tt.transition=i}},[t]),n},useTransition:function(){var t=mo(Hn)[0],e=St().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:l_,unstable_isNewReconciler:!1};function Gf(t,e){try{var n="",r=e;do n+=XE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function h_(t,e,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){da||(da=!0,Ec=r),dc(t,e)},n}function p_(t,e,n){n=Dt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dc(t,e),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=US.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dt(-1,1),e.tag=2,dn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var m_,hc,g_,v_;m_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};g_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(_t.current);var s=null;switch(n){case"input":i=Wu(t,i),r=Wu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Bu(t,i),r=Bu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zo)}Vu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(rs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(rs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};v_=function(t,e,n,r){n!==r&&(e.flags|=4)};function xi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IS(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return We(e.type)&&ea(),Ie(e),null;case 3:return r=e.stateNode,qr(),ee(ze),ee(xe),$f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ii(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,at!==null&&(kc(at),at=null))),hc(t,e),Ie(e),null;case 5:jf(e);var i=Wn(ms.current);if(n=e.type,t!==null&&e.stateNode!=null)g_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ie(e),null}if(t=Wn(_t.current),Ii(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pt]=e,r[hs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Fi.length;i++)J(Fi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Hh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":qh(r,s),J("invalid",r)}Vu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(fo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(fo(r.textContent,a,t),i=["children",""+a]):rs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":ro(r),Vh(r,s,!0);break;case"textarea":ro(r),Gh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pt]=e,t[hs]=r,m_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fi.length;i++)J(Fi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Hh(t,r),i=Wu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":qh(t,r),i=Bu(t,r),J("invalid",t);break;default:i=r}Vu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&is(t,l):typeof l=="number"&&is(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(rs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&yf(t,s,l,o))}switch(n){case"input":ro(t),Vh(t,r,!1);break;case"textarea":ro(t),Gh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Wn(ms.current),Wn(_t.current),Ii(e)){if(r=e.stateNode,n=e.memoizedProps,r[pt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(o=(t.mode&1)!==0,t.tag){case 3:fo(r.nodeValue,n,o);break;case 5:t.memoizedProps[void 0]!==!0&&fo(r.nodeValue,n,o)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return Ie(e),null;case 13:if(ee(re),r=e.memoizedState,te&&Me!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=Me;r;)r=Pt(r.nextSibling);return Hr(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Ii(e),t===null){if(!r)throw Error(C(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(C(317));r[pt]=e}else Hr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ie(e),null}return at!==null&&(kc(at),at=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Ii(e):n=t.memoizedState!==null,r&&!n&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(re.current&1)!==0?he===0&&(he=3):Zf())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return qr(),hc(t,e),t===null&&fs(e.stateNode.containerInfo),Ie(e),null;case 10:return Mf(e.type._context),Ie(e),null;case 17:return We(e.type)&&ea(),Ie(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xi(s,!1);else{if(he!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=aa(t),o!==null){for(e.flags|=128,xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Kr&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ie(e),null}else 2*ce()-s.renderingStartTime>Kr&&n!==1073741824&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Be&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}var TS=qt.ReactCurrentOwner,He=!1;function be(t,e,n,r){e.child=t===null?Gv(e,null,n,r):Vr(e,t.child,n,r)}function bp(t,e,n,r,i){n=n.render;var s=e.ref;return Dr(e,i),r=Hf(t,e,n,r,s,i),n=Vf(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(te&&n&&Ff(e),e.flags|=1,be(t,e,r,i),e.child)}function Pp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,__(t,e,s,r,i)):(t=Fo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:cs,n(o,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=En(s,r),t.ref=e.ref,t.return=e,e.child=t}function __(t,e,n,r,i){if(t!==null&&cs(t.memoizedProps,r)&&t.ref===e.ref)if(He=!1,(t.lanes&i)!==0)(t.flags&131072)!==0&&(He=!0);else return e.lanes=t.lanes,Bt(t,e,i);return pc(t,e,n,r,i)}function y_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null},X(Nr,Be),Be|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null},r=s!==null?s.baseLanes:n,X(Nr,Be),Be|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null},e.updateQueue=null,X(Nr,Be),Be|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Nr,Be),Be|=r;return be(t,e,i,n),e.child}function w_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pc(t,e,n,r,i){var s=We(n)?Jn:xe.current;return s=Br(e,s),Dr(e,i),n=Hf(t,e,n,r,s,i),r=Vf(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(te&&r&&Ff(e),e.flags|=1,be(t,e,n,i),e.child)}function Rp(t,e,n,r,i){if(We(n)){var s=!0;ta(e)}else s=!1;if(Dr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Bv(e,n,r),uc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=We(n)?Jn:xe.current,u=Br(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cp(e,o,r,u),Xt=!1;var d=e.memoizedState;o.state=d,ia(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ze.current||Xt?(typeof c=="function"&&(lc(e,n,c,r),l=e.memoizedState),(a=Xt||Ep(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ot(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=We(n)?Jn:xe.current,l=Br(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Cp(e,o,r,l),Xt=!1,d=e.memoizedState,o.state=d,ia(e,r,o,i);var v=e.memoizedState;a!==f||d!==v||ze.current||Xt?(typeof g=="function"&&(lc(e,n,g,r),v=e.memoizedState),(u=Xt||Ep(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return mc(t,e,n,r,s,i)}function mc(t,e,n,r,i,s){w_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_p(e,n,!1),Bt(t,e,s);r=e.stateNode,TS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vr(e,t.child,null,s),e.child=Vr(e,null,a,s)):be(t,e,a,s),e.memoizedState=r.state,i&&_p(e,n,!0),e.child}function E_(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),Wf(t,e.containerInfo)}function Ap(t,e,n,r,i){return Hr(),zf(i),e.flags|=256,be(t,e,n,r),e.child}var go={dehydrated:null,treeContext:null,retryLane:0};function vo(t){return{baseLanes:t,cachePool:null}}function C_(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ma(i,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vo(n),e.memoizedState=go,t):gc(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,_o(t,e,n,Error(C(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ma({mode:"visible",children:r.children},i,0,null),s=qn(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Vr(e,t.child,null,n),e.child.memoizedState=vo(n),e.memoizedState=go,s);if((e.mode&1)===0)e=_o(t,e,n,null);else if(a.data==="$!")e=_o(t,e,n,Error(C(419)));else if(r=(n&t.childLanes)!==0,He||r){if(r=de,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,rt(t,r,-1))}Zf(),e=_o(t,e,n,Error(C(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=zS.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,Me=Pt(a.nextSibling),Ve=e,te=!0,at=null,n!==null&&(Xe[Je++]=Rt,Xe[Je++]=At,Xe[Je++]=Zn,Rt=n.id,At=n.overflow,Zn=e),e=gc(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=Lp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?vo(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=go,r):(n=Op(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=Lp(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?vo(n):{baseLanes:i.baseLanes|n,cachePool:null},s.childLanes=t.childLanes&~n,e.memoizedState=go,r):(n=Op(t,e,r.children,n),e.memoizedState=null,n)}function gc(t,e){return e=ma({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Op(t,e,n,r){var i=t.child;return t=i.sibling,n=En(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function Lp(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=En(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=En(o,r):(r=qn(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function _o(t,e,n,r){return r!==null&&zf(r),Vr(e,t.child,null,n),t=gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ac(t.return,e,n)}function eu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(be(t,e,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xS(t,e,n){switch(e.tag){case 3:E_(e),Hr();break;case 5:Yv(e);break;case 1:We(e.type)&&ta(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?C_(t,e,n):(X(re,re.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return S_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,y_(t,e,n)}return Bt(t,e,n)}function NS(t,e){switch(Uf(e),e.tag){case 1:return We(e.type)&&ea(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qr(),ee(ze),ee(xe),$f(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return qr(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var yo=!1,jn=!1,bS=typeof WeakSet=="function"?WeakSet:Set,x=null;function ca(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function vc(t,e,n){try{n()}catch(r){De(t,e,r)}}var Dp=!1;function PS(t,e){if(t=Pv(),Af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:t,selectionRange:n},x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,N=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ot(e.type,w),N);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;if(m.nodeType===1)m.textContent="";else if(m.nodeType===9){var _=m.body;_!=null&&(_.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){De(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Dp,Dp=!1,v}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vc(e,n,s)}i=i.next}while(i!==r)}}function Xa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _c(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fp(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ba,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t=t.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&vc(e,n,s),r=r.next}while(r!==t)}break;case 1:if(ca(e,n),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(o){De(e,n,o)}break;case 5:ca(e,n);break;case 4:T_(t,e,n)}}function k_(t){var e=t.alternate;e!==null&&(t.alternate=null,k_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pt],delete e[hs],delete e[sc],delete e[hS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zp(t){e:{for(var e=t.return;e!==null;){if(I_(e))break e;e=e.return}throw Error(C(160))}var n=e;switch(n.tag){case 5:e=n.stateNode,n.flags&32&&(is(e,""),n.flags&=-33),n=Up(t),wc(t,n,e);break;case 3:case 4:e=n.stateNode.containerInfo,n=Up(t),yc(t,n,e);break;default:throw Error(C(161))}}function yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(r!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}function wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wc(t,e,n),t=t.sibling;t!==null;)wc(t,e,n),t=t.sibling}function T_(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(C(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(Fp(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===18)o?(a=s,l=r.stateNode,a.nodeType===8?Kl(a.parentNode,l):a.nodeType===1&&Kl(a,l),ls(a)):Kl(s,r.stateNode);else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Fp(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function tu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:ys(3,e,e.return),Xa(3,e),ys(5,e,e.return);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(t==="input"&&r.type==="radio"&&r.name!=null&&Jg(n,r),qu(t,i),e=qu(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?rv(n,a):o==="dangerouslySetInnerHTML"?tv(n,a):o==="children"?is(n,a):yf(n,o,a,e)}switch(t){case"input":ju(n,r);break;case"textarea":Zg(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Ar(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Ar(n,!!r.multiple,r.defaultValue,!0):Ar(n,!!r.multiple,r.multiple?[]:"",!1))}n[hs]=r}}return;case 6:if(e.stateNode===null)throw Error(C(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:t!==null&&t.memoizedState.isDehydrated&&ls(e.stateNode.containerInfo);return;case 12:return;case 13:Wp(e);return;case 19:Wp(e);return;case 17:return}throw Error(C(163))}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(r){var i=WS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function RS(t,e){for(x=e;x!==null;){e=x;var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{T_(t,i,e);var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(S){De(i,e,S)}}if(n=e.child,(e.subtreeFlags&12854)!==0&&n!==null)n.return=e,x=n;else for(;x!==null;){e=x;try{var o=e.flags;if(o&32&&is(e.stateNode,""),o&512){var a=e.alternate;if(a!==null){var l=a.ref;l!==null&&(typeof l=="function"?l(null):l.current=null)}}if(o&8192)switch(e.tag){case 13:if(e.memoizedState!==null){var u=e.alternate;(u===null||u.memoizedState===null)&&(Qf=ce())}break;case 22:var c=e.memoizedState!==null,f=e.alternate,d=f!==null&&f.memoizedState!==null;n=e;e:{r=n,i=c;for(var g=null,v=r;;){if(v.tag===5){if(g===null){g=v;var w=v.stateNode;if(i){var N=w.style;typeof N.setProperty=="function"?N.setProperty("display","none","important"):N.display="none"}else{var p=v.stateNode,h=v.memoizedProps.style,m=h!=null&&h.hasOwnProperty("display")?h.display:null;p.style.display=nv("display",m)}}}else if(v.tag===6)g===null&&(v.stateNode.nodeValue=i?"":v.memoizedProps);else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===r)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}if(c&&!d&&(n.mode&1)!==0){x=n;for(var _=n.child;_!==null;){for(n=x=_;x!==null;){r=x;var E=r.child;switch(r.tag){case 0:case 11:case 14:case 15:ys(4,r,r.return);break;case 1:ca(r,r.return);var T=r.stateNode;if(typeof T.componentWillUnmount=="function"){var y=r.return;try{T.props=r.memoizedProps,T.state=r.memoizedState,T.componentWillUnmount()}catch(S){De(r,y,S)}}break;case 5:ca(r,r.return);break;case 22:if(r.memoizedState!==null){$p(n);continue}}E!==null?(E.return=r,x=E):$p(n)}_=_.sibling}}}switch(o&4102){case 2:zp(e),e.flags&=-3;break;case 6:zp(e),e.flags&=-3,tu(e.alternate,e);break;case 4096:e.flags&=-4097;break;case 4100:e.flags&=-4097,tu(e.alternate,e);break;case 4:tu(e.alternate,e)}}catch(S){De(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}}function AS(t,e,n){x=t,x_(t)}function x_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jn;a=yo;var u=jn;if(yo=o,(jn=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Bp(i):l!==null?(l.return=o,x=l):Bp(i);for(;s!==null;)x=s,x_(s),s=s.sibling;x=i,yo=a,jn=u}jp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,x=s):jp(t)}}function jp(t){for(;x!==null;){var e=x;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:jn||Xa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ls(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(C(163))}jn||e.flags&512&&_c(e)}catch(d){De(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function $p(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Bp(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xa(4,e)}catch(l){De(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){De(e,i,l)}}var s=e.return;try{_c(e)}catch(l){De(e,s,l)}break;case 5:var o=e.return;try{_c(e)}catch(l){De(e,o,l)}}}catch(l){De(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var OS=Math.ceil,fa=qt.ReactCurrentDispatcher,Yf=qt.ReactCurrentOwner,nt=qt.ReactCurrentBatchConfig,H=0,de=null,fe=null,Ee=0,Be=0,Nr=Tn(0),he=0,ws=null,Yr=0,Ja=0,Kf=0,Ki=null,Le=null,Qf=0,Kr=1/0,da=!1,Ec=null,hn=null,wo=!1,sn=null,ha=0,Qi=0,Cc=null,Mo=-1,Do=0;function Pe(){return(H&6)!==0?ce():Mo!==-1?Mo:Mo=ce()}function pn(t){return(t.mode&1)===0?1:(H&2)!==0&&Ee!==0?Ee&-Ee:gS.transition!==null?(Do===0&&(t=so,so<<=1,(so&4194240)===0&&(so=64),Do=t),Do):(t=q,t!==0||(t=window.event,t=t===void 0?16:Ev(t.type)),t)}function rt(t,e,n){if(50<Qi)throw Qi=0,Cc=null,Error(C(185));var r=Za(t,e);return r===null?null:(Ls(r,e,n),((H&2)===0||r!==de)&&(r===de&&((H&2)===0&&(Ja|=e),he===4&&Zt(r,Ee)),je(r,n),e===1&&H===0&&(t.mode&1)===0&&(Kr=ce()+500,Ya&&xn())),r)}function Za(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function je(t,e){var n=t.callbackNode;gC(t,e);var r=Qo(t,t===de?Ee:0);if(r===0)n!==null&&Qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qh(n),e===1)t.tag===0?mS(Hp.bind(null,t)):Wv(Hp.bind(null,t)),fS(function(){H===0&&xn()}),n=null;else{switch(mv(r)){case 1:n=kf;break;case 4:n=hv;break;case 16:n=Ko;break;case 536870912:n=pv;break;default:n=Ko}n=M_(n,N_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N_(t,e){if(Mo=-1,Do=0,(H&6)!==0)throw Error(C(327));var n=t.callbackNode;if(Fr()&&t.callbackNode!==n)return null;var r=Qo(t,t===de?Ee:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=pa(t,r);else{e=r;var i=H;H|=2;var s=P_();(de!==t||Ee!==e)&&(Kr=ce()+500,Vn(t,e));do try{DS();break}catch(a){b_(t,a)}while(1);Lf(),fa.current=s,H=i,fe!==null?e=0:(de=null,Ee=0,e=he)}if(e!==0){if(e===2&&(i=Xu(t),i!==0&&(r=i,e=Sc(t,i))),e===1)throw n=ws,Vn(t,0),Zt(t,r),je(t,ce()),n;if(e===6)Zt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!LS(i)&&(e=pa(t,r),e===2&&(s=Xu(t),s!==0&&(r=s,e=Sc(t,s))),e===1))throw n=ws,Vn(t,0),Zt(t,r),je(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Ln(t,Le);break;case 3:if(Zt(t,r),(r&130023424)===r&&(e=Qf+500-ce(),10<e)){if(Qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ic(Ln.bind(null,t,Le),e);break}Ln(t,Le);break;case 4:if(Zt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OS(r/1960))-r,10<r){t.timeoutHandle=ic(Ln.bind(null,t,Le),r);break}Ln(t,Le);break;case 5:Ln(t,Le);break;default:throw Error(C(329))}}}return je(t,ce()),t.callbackNode===n?N_.bind(null,t):null}function Sc(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=pa(t,e),t!==2&&(e=Le,Le=n,e!==null&&kc(e)),t}function kc(t){Le===null?Le=t:Le.push.apply(Le,t)}function LS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zt(t,e){for(e&=~Kf,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ft(e),r=1<<n;t[n]=-1,e&=~r}}function Hp(t){if((H&6)!==0)throw Error(C(327));Fr();var e=Qo(t,0);if((e&1)===0)return je(t,ce()),null;var n=pa(t,e);if(t.tag!==0&&n===2){var r=Xu(t);r!==0&&(e=r,n=Sc(t,r))}if(n===1)throw n=ws,Vn(t,0),Zt(t,e),je(t,ce()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,Le),je(t,ce()),null}function Xf(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Kr=ce()+500,Ya&&xn())}}function er(t){sn!==null&&sn.tag===0&&(H&6)===0&&Fr();var e=H;H|=1;var n=nt.transition,r=q;try{if(nt.transition=null,q=1,t)return t()}finally{q=r,nt.transition=n,H=e,(H&6)===0&&xn()}}function Jf(){Be=Nr.current,ee(Nr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:qr(),ee(ze),ee(xe),$f();break;case 5:jf(r);break;case 4:qr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Mf(r.type._context);break;case 22:case 23:Jf()}n=n.return}if(de=t,fe=t=En(t.current,null),Ee=Be=e,he=0,ws=null,Kf=Ja=Yr=0,Le=Ki=null,gt!==null){for(e=0;e<gt.length;e++)if(n=gt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gt=null}return t}function b_(t,e){do{var n=fe;try{if(Lf(),Oo.current=ua,la){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}la=!1}if(Gr=0,ge=Te=ae=null,Yi=!1,gs=0,Yf.current=null,n===null||n.return===null){he=1,ws=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=xp(o);if(g!==null){g.flags&=-257,Np(g,o,a,s,e),g.mode&1&&Tp(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){Tp(s,u,e),Zf();break e}l=Error(C(426))}}else if(te&&a.mode&1){var N=xp(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Np(N,o,a,s,e),zf(l);break e}}s=l,he!==4&&(he=2),Ki===null?Ki=[s]:Ki.push(s),l=Gf(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=h_(a,l,e);yp(a,p);break e;case 1:s=l;var h=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=p_(a,s,e);yp(a,_);break e}}a=a.return}while(a!==null)}A_(n)}catch(E){e=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function P_(){var t=fa.current;return fa.current=ua,t===null?ua:t}function Zf(){(he===0||he===3||he===2)&&(he=4),de===null||(Yr&268435455)===0&&(Ja&268435455)===0||Zt(de,Ee)}function pa(t,e){var n=H;H|=2;var r=P_();de===t&&Ee===e||Vn(t,e);do try{MS();break}catch(i){b_(t,i)}while(1);if(Lf(),H=n,fa.current=r,fe!==null)throw Error(C(261));return de=null,Ee=0,he}function MS(){for(;fe!==null;)R_(fe)}function DS(){for(;fe!==null&&!aC();)R_(fe)}function R_(t){var e=L_(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?A_(t):fe=e,Yf.current=null}function A_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=IS(n,e,Be),n!==null){fe=n;return}}else{if(n=NS(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,fe=null;return}}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);he===0&&(he=5)}function Ln(t,e){var n=q,r=nt.transition;try{nt.transition=null,q=1,FS(t,e,n)}finally{nt.transition=r,q=n}return null}function FS(t,e,n){do Fr();while(sn!==null);if((H&6)!==0)throw Error(C(327));var r=t.finishedWork,i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=r.lanes|r.childLanes;if(vC(t,s),t===de&&(fe=de=null,Ee=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||wo||(wo=!0,M_(Ko,function(){return Fr(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=nt.transition,nt.transition=null;var o=q;q=1;var a=H;H|=4,Yf.current=null,PS(t,r),RS(t,r),rS(nc),nc=null,t.current=r,AS(r),lC(),H=a,q=o,nt.transition=s}else t.current=r;if(wo&&(wo=!1,sn=t,ha=i),s=t.pendingLanes,s===0&&(hn=null),fC(r.stateNode),je(t,ce()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)n(e[r]);if(da)throw da=!1,t=Ec,Ec=null,t;return(ha&1)!==0&&t.tag!==0&&Fr(),s=t.pendingLanes,(s&1)!==0?t===Cc?Qi++:(Qi=0,Cc=t):Qi=0,xn(),null}function Fr(){if(sn!==null){var t=mv(ha),e=nt.transition,n=q;try{if(nt.transition=null,q=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,ha=0,(H&6)!==0)throw Error(C(331));var i=H;for(H|=4,x=t.current;x!==null;){var s=x,o=s.child;if((x.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:ys(8,c,s)}var f=c.child;if(f!==null)f.return=c,x=f;else for(;x!==null;){c=x;var d=c.sibling,g=c.return;if(k_(c),c===u){x=null;break}if(d!==null){d.return=g,x=d;break}x=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}x=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var h=t.current;for(x=h;x!==null;){o=x;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,x=m;else e:for(o=h;x!==null;){if(a=x,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Xa(9,a)}}catch(E){De(a,a.return,E)}if(a===o){x=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,x=_;break e}x=a.return}}if(H=i,xn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ba,t)}catch{}r=!0}return r}finally{q=n,nt.transition=e}}return!1}function Vp(t,e,n){e=Gf(n,e),e=h_(t,e,1),dn(t,e),e=Pe(),t=Za(t,1),t!==null&&(Ls(t,1,e),je(t,e))}function De(t,e,n){if(t.tag===3)Vp(t,t,n);else for(;e!==null;){if(e.tag===3){Vp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=Gf(n,t),t=p_(e,t,1),dn(e,t),t=Pe(),e=Za(e,1),e!==null&&(Ls(e,1,t),je(e,t));break}}e=e.return}}function US(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>ce()-Qf?Vn(t,0):Kf|=n),je(t,e)}function O_(t,e){e===0&&((t.mode&1)===0?e=1:(e=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var n=Pe();t=Za(t,e),t!==null&&(Ls(t,e,n),je(t,n))}function zS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function WS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),O_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)He=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return He=!1,xS(t,e,n);He=(t.flags&131072)!==0}else He=!1,te&&(e.flags&1048576)!==0&&Hv(e,oa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=Br(e,xe.current);Dr(e,n),i=Hf(null,e,r,t,i,n);var s=Vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,ta(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(e),i.updater=Ka,e.stateNode=i,i._reactInternals=e,uc(e,r,t,n),e=mc(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Ff(e),be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$S(r),t=ot(r,t),i){case 0:e=pc(null,e,r,t,n);break e;case 1:e=Rp(null,e,r,t,n);break e;case 11:e=bp(null,e,r,t,n);break e;case 14:e=Pp(null,e,r,ot(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Rp(t,e,r,i,n);case 3:e:{if(E_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jv(t,e),ia(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(C(423)),e=Ap(t,e,r,n,i);break e}else if(r!==i){i=Error(C(424)),e=Ap(t,e,r,n,i);break e}else for(Me=Pt(e.stateNode.containerInfo.firstChild),Ve=e,te=!0,at=null,n=Gv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){e=Bt(t,e,n);break e}be(t,e,r,n)}e=e.child}return e;case 5:return Yv(e),t===null&&fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rc(r,i)?o=null:s!==null&&rc(r,s)&&(e.flags|=32),w_(t,e),be(t,e,o,n),e.child;case 6:return t===null&&fc(e),null;case 13:return C_(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vr(e,null,r,n):be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),bp(t,e,r,i,n);case 7:return be(t,e,e.pendingProps,n),e.child;case 8:return be(t,e,e.pendingProps.children,n),e.child;case 12:return be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(na,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!ze.current){e=Bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ac(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ac(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dr(e,n),i=it(i),r=r(i),e.flags|=1,be(t,e,r,n),e.child;case 14:return r=e.type,i=ot(r,e.pendingProps),i=ot(r.type,i),Pp(t,e,r,i,n);case 15:return __(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,We(r)?(t=!0,ta(e)):t=!1,Dr(e,n),Bv(e,r,i),uc(e,r,i,n),mc(null,e,r,!0,t,n);case 19:return S_(t,e,n);case 22:return y_(t,e,n)}throw Error(C(156,e.tag))};function M_(t,e){return dv(t,e)}function jS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new jS(t,e,n,r)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $S(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ef)return 11;if(t===Cf)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yr:return qn(n.children,i,s,e);case wf:o=8,i|=8;break;case Du:return t=Ze(12,n,e,i|2),t.elementType=Du,t.lanes=s,t;case Fu:return t=Ze(13,n,e,i),t.elementType=Fu,t.lanes=s,t;case Uu:return t=Ze(19,n,e,i),t.elementType=Uu,t.lanes=s,t;case Kg:return ma(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case Yg:o=9;break e;case Ef:o=11;break e;case Cf:o=14;break e;case Qt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function ma(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=Kg,t.lanes=n,t.stateNode={},t}function nu(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(t,e,n,r,i,s,o,a,l){return t=new BS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null},Df(s),t}function HS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return wn;t=t._reactInternals;e:{if(fr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(We(n))return zv(t,n,e)}return e}function F_(t,e,n,r,i,s,o,a,l){return t=td(n,r,!0,t,i,s,o,a,l),t.context=D_(null),n=t.current,r=Pe(),i=pn(n),s=Dt(r,i),s.callback=e!=null?e:null,dn(n,s),t.current.lanes=i,Ls(t,i,r),je(t,r),t}function el(t,e,n,r){var i=e.current,s=Pe(),o=pn(i);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=Dt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),dn(i,e),t=rt(i,o,s),t!==null&&Ao(t,i,o),o}function ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function VS(){return null}var U_=typeof reportError=="function"?reportError:function(t){console.error(t)};function rd(t){this._internalRoot=t}tl.prototype.render=rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));el(t,e,null,null)};tl.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;er(function(){el(null,t,null,null)}),e[$t]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jt.length&&e!==0&&e<Jt[n].priority;n++);Jt.splice(n,0,t),n===0&&wv(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function qS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ga(o);s.call(u)}}var o=F_(e,r,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=o,t[$t]=o.current,fs(t.nodeType===8?t.parentNode:t),er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ga(l);a.call(u)}}var l=td(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[$t]=l.current,fs(t.nodeType===8?t.parentNode:t),er(function(){el(e,l,n,r)}),l}function rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ga(o);a.call(l)}}el(e,o,t,i)}else o=qS(n,e,t,i,r);return ga(o)}gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(If(e,n|1),je(e,ce()),(H&6)===0&&(Kr=ce()+500,xn()))}break;case 13:var r=Pe();er(function(){return rt(t,1,r)}),nd(t,1)}};Tf=function(t){if(t.tag===13){var e=Pe();rt(t,134217728,e),nd(t,134217728)}};vv=function(t){if(t.tag===13){var e=Pe(),n=pn(t);rt(t,n,e),nd(t,n)}};_v=function(){return q};yv=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};Yu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ga(r);if(!i)throw Error(C(90));Xg(r),ju(r,i)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&Ar(t,!!n.multiple,e,!1)}};ov=Xf;av=er;var GS={usingClientEntryPoint:!1,Events:[Ds,Sr,Ga,iv,sv,Xf]},Ni={findFiberByHostInstance:zn,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"},YS={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||VS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Ba=Eo.inject(YS),vt=Eo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Ye.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(C(200));return HS(t,e,null,n)};Ye.createRoot=function(t,e){if(!id(t))throw Error(C(299));var n=!1,r="",i=U_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=td(t,1,!1,null,null,n,!1,r,i),t[$t]=e.current,fs(t.nodeType===8?t.parentNode:t),new rd(e)};Ye.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Ye.flushSync=function(t){return er(t)};Ye.hydrate=function(t,e,n){if(!nl(e))throw Error(C(200));return rl(null,t,e,!0,n)};Ye.hydrateRoot=function(t,e,n){if(!id(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=U_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[$t]=e.current,fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tl(e)};Ye.render=function(t,e,n){if(!nl(e))throw Error(C(200));return rl(null,t,e,!1,n)};Ye.unmountComponentAtNode=function(t){if(!nl(t))throw Error(C(40));return t._reactRootContainer?(er(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[$t]=null})}),!0):!1};Ye.unstable_batchedUpdates=Xf;Ye.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return rl(t,e,n,!1,r)};Ye.version="18.0.0-fc46dba67-20220329";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(t){console.error(t)}}z_(),$g.exports=Ye;var Yp=$g.exports;Lu.createRoot=Yp.createRoot,Lu.hydrateRoot=Yp.hydrateRoot;/**
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
 */const W_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw fi(e)},fi=function(t){return new Error("Firebase Database ("+W_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const j_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$_=function(t){const e=j_(t);return sd.encodeByteArray(e,!0)},B_=function(t){return $_(t).replace(/\./g,"")},Ic=function(t){try{return sd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QS(t){return H_(void 0,t)}function H_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!XS(n)||(t[n]=H_(t[n],e[n]));return t}function XS(t){return t!=="__proto__"}/**
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
 */class Us{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function JS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function V_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZS(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q_(){return W_.NODE_ADMIN===!0}function ek(){return typeof indexedDB=="object"}function tk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const nk="FirebaseError";class di extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nk,Object.setPrototypeOf(this,di.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new di(i,a,r)}}function rk(t,e){return t.replace(ik,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ik=/\{\$([^}]+)}/g;/**
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
 */function Es(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const G_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Es(Ic(s[0])||""),n=Es(Ic(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},sk=function(t){const e=G_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ok=function(t){const e=G_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _a(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kp(s)&&Kp(o)){if(!_a(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kp(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class ak{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function lk(t,e){const n=new uk(t,e);return n.subscribe.bind(n)}class uk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ck(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=iu),i.error===void 0&&(i.error=iu),i.complete===void 0&&(i.complete=iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}function il(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Wi(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class Qp{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Y_(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new K_(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Y_{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new K_(this._transaction.objectStore(e))}}class K_{constructor(e){this._store=e}index(e){return new Xp(this._store.index(e))}createIndex(e,n,r){return new Xp(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Wi(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Wi(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Wi(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Wi(e,"Error clearing IndexedDB object store")}}class Xp{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Wi(n,"Error reading from IndexedDB")}}function dk(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new Qp(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Qp(s.result),o.oldVersion,o.newVersion,new Y_(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class hk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Us;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mk(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pk(t){return t===Mn?void 0:t}function mk(t){return t.instantiationMode==="EAGER"}/**
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
 */class gk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const vk={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},_k=Y.INFO,yk={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},wk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=_k,this._logHandler=wk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}/**
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
 */class Ek{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ck(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ck(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",Jp="0.7.21";/**
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
 */const ld=new ad("@firebase/app"),Sk="@firebase/app-compat",kk="@firebase/analytics-compat",Ik="@firebase/analytics",Tk="@firebase/app-check-compat",xk="@firebase/app-check",Nk="@firebase/auth",bk="@firebase/auth-compat",Pk="@firebase/database",Rk="@firebase/database-compat",Ak="@firebase/functions",Ok="@firebase/functions-compat",Lk="@firebase/installations",Mk="@firebase/installations-compat",Dk="@firebase/messaging",Fk="@firebase/messaging-compat",Uk="@firebase/performance",zk="@firebase/performance-compat",Wk="@firebase/remote-config",jk="@firebase/remote-config-compat",$k="@firebase/storage",Bk="@firebase/storage-compat",Hk="@firebase/firestore",Vk="@firebase/firestore-compat",qk="firebase",Gk="9.6.11";/**
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
 */const Q_="[DEFAULT]",Yk={[xc]:"fire-core",[Sk]:"fire-core-compat",[Ik]:"fire-analytics",[kk]:"fire-analytics-compat",[xk]:"fire-app-check",[Tk]:"fire-app-check-compat",[Nk]:"fire-auth",[bk]:"fire-auth-compat",[Pk]:"fire-rtdb",[Rk]:"fire-rtdb-compat",[Ak]:"fire-fn",[Ok]:"fire-fn-compat",[Lk]:"fire-iid",[Mk]:"fire-iid-compat",[Dk]:"fire-fcm",[Fk]:"fire-fcm-compat",[Uk]:"fire-perf",[zk]:"fire-perf-compat",[Wk]:"fire-rc",[jk]:"fire-rc-compat",[$k]:"fire-gcs",[Bk]:"fire-gcs-compat",[Hk]:"fire-fst",[Vk]:"fire-fst-compat","fire-js":"fire-js",[qk]:"fire-js-all"};/**
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
 */const ya=new Map,Nc=new Map;function Kk(t,e){try{t.container.addComponent(e)}catch(n){ld.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(Nc.has(e))return ld.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of ya.values())Kk(n,t);return!0}function ud(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},nr=new zs("app","Firebase",Qk);/**
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
 */class Xk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=Gk;function Jk(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Q_,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw nr.create("bad-app-name",{appName:String(r)});const i=ya.get(r);if(i){if(_a(t,i.options)&&_a(n,i.config))return i;throw nr.create("duplicate-app",{appName:r})}const s=new gk(r);for(const a of Nc.values())s.addComponent(a);const o=new Xk(t,n,s);return ya.set(r,o),o}function X_(t=Q_){const e=ya.get(t);if(!e)throw nr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=Yk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ld.warn(a.join(" "));return}Xr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zk="firebase-heartbeat-database",eI=1,Cs="firebase-heartbeat-store";let su=null;function J_(){return su||(su=dk(Zk,eI,(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}).catch(t=>{throw nr.create("storage-open",{originalErrorMessage:t.message})})),su}async function tI(t){try{return(await J_()).transaction(Cs).objectStore(Cs).get(Z_(t))}catch(e){throw nr.create("storage-get",{originalErrorMessage:e.message})}}async function Zp(t,e){try{const r=(await J_()).transaction(Cs,"readwrite");return await r.objectStore(Cs).put(e,Z_(t)),r.complete}catch(n){throw nr.create("storage-set",{originalErrorMessage:n.message})}}function Z_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=em();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=em(),{heartbeatsToSend:n,unsentEntries:r}=sI(this._heartbeatsCache.heartbeats),i=B_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function em(){return new Date().toISOString().substring(0,10)}function sI(t,e=nI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ek()?tk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tm(t){return B_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aI(t){Xr(new tr("platform-logger",e=>new Ek(e),"PRIVATE")),Xr(new tr("heartbeat",e=>new iI(e),"PRIVATE")),mn(xc,Jp,t),mn(xc,Jp,"esm2017"),mn("fire-js","")}aI("");var lI="firebase",uI="9.6.11";/**
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
 */mn(lI,uI,"app");const cI="AIzaSyCfjxatTVD8kWt_1hHAFDgrOGgXjNw1ZC0",fI="sds-butterfly.firebaseapp.com",dI="sds-butterfly",hI="sds-butterfly.appspot.com",pI="265457992927",mI="1:265457992927:web:f8b8781a13dd1e4b3fd56a";function gI(){return Jk({apiKey:cI,authDomain:fI,projectId:dI,storageBucket:hI,messagingSenderId:pI,appId:mI})}const vI=O.exports.createContext();var ol={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=O.exports,yI=Symbol.for("react.element"),wI=Symbol.for("react.fragment"),EI=Object.prototype.hasOwnProperty,CI=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SI={key:!0,ref:!0,__self:!0,__source:!0};function ey(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EI.call(e,r)&&!SI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yI,type:t,key:s,ref:o,props:i,_owner:CI.current}}al.Fragment=wI;al.jsx=ey;al.jsxs=ey;ol.exports=al;const k=ol.exports.jsx,le=ol.exports.jsxs,kI=ol.exports.Fragment;function II(){return k("div",{className:"Layout FullPage ",children:k(J1,{})})}function TI(){return k("div",{className:"Layout Page Content FullPage NotFoundPage VerticalCenter",children:le("div",{children:[k("h1",{className:"BigTitle",children:"Page Not Found"}),k("p",{children:"Sorry about that!"}),k(ai,{to:"/",className:"Button Primary",children:"Back to Home"})]})})}function xI(){return k("div",{className:"Page Content HomePage FullPage VerticalCenter",children:le("div",{children:[k("h1",{className:"BigTitle",children:"Butterfly"}),k("p",{children:"Meet people in your community."}),k(ai,{to:"/login",className:"Button Primary",children:"Login"})]})})}var ty={exports:{}},NI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bI=NI,PI=bI;function ny(){}function ry(){}ry.resetWarningCache=ny;var RI=function(){function t(r,i,s,o,a,l){if(l!==PI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ry,resetWarningCache:ny};return n.PropTypes=n,n};ty.exports=RI();var $=ty.exports;function nm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function on(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nm(Object(n),!0).forEach(function(r){br(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wa(t){return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wa(t)}function br(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function AI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iy(t,e){if(t==null)return{};var n=AI(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function bc(t){return OI(t)||LI(t)||MI(t)||DI()}function OI(t){if(Array.isArray(t))return Pc(t)}function LI(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function MI(t,e){if(!!t){if(typeof t=="string")return Pc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pc(t,e)}}function Pc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function DI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FI(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,g=t.inverse,v=t.border,w=t.listItem,N=t.flip,p=t.size,h=t.rotation,m=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},br(e,"fa-".concat(p),typeof p!="undefined"&&p!==null),br(e,"fa-rotate-".concat(h),typeof h!="undefined"&&h!==null&&h!==0),br(e,"fa-pull-".concat(m),typeof m!="undefined"&&m!==null),br(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function UI(t){return t=t-0,t===t}function sy(t){return UI(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zI=["style"];function WI(t){return t.charAt(0).toUpperCase()+t.slice(1)}function jI(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=sy(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[WI(i)]=s:e[i]=s,e},{})}function oy(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return oy(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=jI(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[sy(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=iy(n,zI);return i.attrs.style=on(on({},i.attrs.style),o),t.apply(void 0,[e.tag,on(on({},i.attrs),a)].concat(bc(r)))}var ay=!1;try{ay=!0}catch{}function $I(){if(!ay&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function rm(t){if(t&&wa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ou.icon)return Ou.icon(t);if(t===null)return null;if(t&&wa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ou(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?br({},t,e):{}}var BI=["forwardedRef"];function Nn(t){var e=t.forwardedRef,n=iy(t,BI),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=rm(r),f=ou("classes",[].concat(bc(FI(n)),bc(o.split(" ")))),d=ou("transform",typeof n.transform=="string"?Ou.transform(n.transform):n.transform),g=ou("mask",rm(i)),v=jE(c,on(on(on(on({},f),d),g),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!v)return $I("Could not find icon",c),null;var w=v.abstract,N={ref:e};return Object.keys(n).forEach(function(p){Nn.defaultProps.hasOwnProperty(p)||(N[p]=n[p])}),HI(w[0],N)}Nn.displayName="FontAwesomeIcon";Nn.propTypes={beat:$.bool,border:$.bool,bounce:$.bool,className:$.string,fade:$.bool,flash:$.bool,mask:$.oneOfType([$.object,$.array,$.string]),maskId:$.string,fixedWidth:$.bool,inverse:$.bool,flip:$.oneOf(["horizontal","vertical","both"]),icon:$.oneOfType([$.object,$.array,$.string]),listItem:$.bool,pull:$.oneOf(["right","left"]),pulse:$.bool,rotation:$.oneOf([0,90,180,270]),shake:$.bool,size:$.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$.bool,spinPulse:$.bool,spinReverse:$.bool,symbol:$.oneOfType([$.bool,$.string]),title:$.string,titleId:$.string,transform:$.oneOfType([$.string,$.object]),swapOpacity:$.bool};Nn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var HI=oy.bind(null,lg.createElement);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var VI={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/*! *****************************************************************************
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
***************************************************************************** */function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ly(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=ly,uy=new zs("auth","Firebase",ly());/**
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
 */const im=new ad("@firebase/auth");function Uo(t,...e){im.logLevel<=Y.ERROR&&im.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function st(t,...e){throw fd(t,...e)}function yt(t,...e){return fd(t,...e)}function cy(t,e,n){const r=Object.assign(Object.assign({},qI()),{[e]:n});return new zs("auth","Firebase",r).create(e,{appName:t.name})}function GI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),cy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uy.create(t,...e)}function D(t,e,...n){if(!t)throw fd(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function Ht(t,e){t||Ot(e)}/**
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
 */const sm=new Map;function Lt(t){Ht(t instanceof Function,"Expected a class definition");let e=sm.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sm.set(t,e),e)}/**
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
 */function YI(t,e){const n=ud(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_a(s,e!=null?e:{}))return i;st(i,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Rc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QI(){return om()==="http:"||om()==="https:"}function om(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QI()||JS()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||V_()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dd(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const eT=new js(3e4,6e4);function ll(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pi(t,e,n,r,i={}){return dy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fy.fetch()(hy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function dy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZI),e);try{const i=new tT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw au(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cy(t,c,u);st(t,c)}}catch(i){if(i instanceof di)throw i;st(t,"network-request-failed")}}async function ul(t,e,n,r,i={}){const s=await pi(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dd(t.config,i):`${t.config.apiScheme}://${i}`}class tT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),eT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function nT(t,e){return pi(t,"POST","/v1/accounts:delete",e)}async function rT(t,e){return pi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iT(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=hd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xi(lu(i.auth_time)),issuedAtTime:Xi(lu(i.iat)),expirationTime:Xi(lu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lu(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ic(n);return i?JSON.parse(i):(Uo("Failed to decode base64 JWT payload"),null)}catch(i){return Uo("Caught error parsing JWT payload as JSON",i),null}}function sT(t){const e=hd(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof di&&oT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class py{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Jr(t,rT(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cT(s.providerUserInfo):[],a=uT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new py(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function lT(t){const e=$e(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cT(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fT(t,e){const n=await dy(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):sT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ss;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Kt(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new py(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iT(this,e)}reload(){return lT(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jr(this,nT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:E,providerData:T,stsTokenManager:y}=n;D(m&&y,e,"internal-error");const S=Ss.fromJSON(this.name,y);D(typeof m=="string",e,"internal-error"),Kt(f,e.name),Kt(d,e.name),D(typeof _=="boolean",e,"internal-error"),D(typeof E=="boolean",e,"internal-error"),Kt(g,e.name),Kt(v,e.name),Kt(w,e.name),Kt(N,e.name),Kt(p,e.name),Kt(h,e.name);const L=new Gn({uid:m,auth:e,email:d,emailVerified:_,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:S,createdAt:p,lastLoginAt:h});return T&&Array.isArray(T)&&(L.providerData=T.map(M=>Object.assign({},M))),N&&(L._redirectEventId=N),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ea(s),s}}/**
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
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}my.type="NONE";const am=my;/**
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
 */function zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,s),this.fullPersistenceKey=zo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(Lt(am),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Lt(am);const o=zo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Gn._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ur(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ur(s,e,r))}}/**
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
 */function lm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wy(e))return"Blackberry";if(Ey(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||vy(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=Ne()){return/firefox\//i.test(t)}function pd(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vy(t=Ne()){return/crios\//i.test(t)}function _y(t=Ne()){return/iemobile/i.test(t)}function yy(t=Ne()){return/android/i.test(t)}function wy(t=Ne()){return/blackberry/i.test(t)}function Ey(t=Ne()){return/webos/i.test(t)}function cl(t=Ne()){return/iphone|ipad|ipod/i.test(t)}function dT(t=Ne()){var e;return cl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hT(){return ZS()&&document.documentMode===10}function Cy(t=Ne()){return cl(t)||yy(t)||Ey(t)||wy(t)||/windows phone/i.test(t)||_y(t)}function pT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sy(t,e=[]){let n;switch(t){case"Browser":n=lm(Ne());break;case"Worker":n=`${lm(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class mT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fl(t){return $e(t)}class um{constructor(e){this.auth=e,this.observer=null,this.addObserver=lk(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function gT(t,e){return pi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vT(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",ll(t,e))}/**
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
 */async function _T(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ll(t,e))}async function yT(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ll(t,e))}/**
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
 */class ks extends md{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ks(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ks(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _T(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yT(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zr(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",ll(t,e))}/**
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
 */const wT="http://localhost";class rr extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:wT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */function ET(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CT(t){const e=Ui(zi(t)).link,n=e?Ui(zi(e)).deep_link_id:null,r=Ui(zi(t)).deep_link_id;return(r?Ui(zi(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,i,s,o,a;const l=Ui(zi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=ET((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CT(e);try{return new gd(n)}catch{return null}}}/**
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
 */class mi{constructor(){this.providerId=mi.PROVIDER_ID}static credential(e,n){return ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return D(r,"argument-error"),ks._fromEmailAndCode(e,r.code,r.tenantId)}}mi.PROVIDER_ID="password";mi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $s extends vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends $s{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class bt extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class tn extends $s{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends $s{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=cm(r);return new Zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cm(r);return new Zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ca extends di{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ca(e,n,r,i)}}function ky(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ca._fromErrorAndOperation(t,s,e,r):s})}async function ST(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
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
 */async function kT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Jr(t,ky(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=hd(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
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
 */async function Iy(t,e,n=!1){const r="signIn",i=await ky(t,r,e),s=await Zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function IT(t,e){return Iy(fl(t),e)}function TT(t,e,n){return IT($e(t),mi.credential(e,n))}/**
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
 */async function xT(t,e){return pi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function NT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Jr(r,xT(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bT(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function PT(t){return $e(t).signOut()}const Sa="__sak";/**
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
 */class Ty{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function RT(){const t=Ne();return pd(t)||cl(t)}const AT=1e3,OT=10;class xy extends Ty{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RT()&&pT(),this.fallbackToPolling=Cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xy.type="LOCAL";const LT=xy;/**
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
 */class Ny extends Ty{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ny.type="SESSION";const by=Ny;/**
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
 */function MT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await MT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
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
 */function _d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_d("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function FT(t){wt().location.href=t}/**
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
 */function Py(){return typeof wt().WorkerGlobalScope!="undefined"&&typeof wt().importScripts=="function"}async function UT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WT(){return Py()?self:null}/**
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
 */const Ry="firebaseLocalStorageDb",jT=1,ka="firebaseLocalStorage",Ay="fbase_key";class Bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hl(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function $T(){const t=indexedDB.deleteDatabase(Ry);return new Bs(t).toPromise()}function Ac(){const t=indexedDB.open(Ry,jT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:Ay})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await $T(),e(await Ac()))})})}async function fm(t,e,n){const r=hl(t,!0).put({[Ay]:e,value:n});return new Bs(r).toPromise()}async function BT(t,e){const n=hl(t,!1).get(e),r=await new Bs(n).toPromise();return r===void 0?null:r.value}function dm(t,e){const n=hl(t,!0).delete(e);return new Bs(n).toPromise()}const HT=800,VT=3;class Oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(WT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UT(),!this.activeServiceWorker)return;this.sender=new DT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await fm(e,Sa,"1"),await dm(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hl(i,!1).getAll();return new Bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oy.type="LOCAL";const qT=Oy;/**
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
 */function GT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GT().appendChild(r)})}function KT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new js(3e4,6e4);/**
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
 */function Ly(t,e){return e?Lt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QT(t){return Iy(t.auth,new yd(t),t.bypassAuthState)}function XT(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),kT(n,new yd(t),t.bypassAuthState)}async function JT(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),ST(n,new yd(t),t.bypassAuthState)}/**
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
 */class My{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QT;case"linkViaPopup":case"linkViaRedirect":return JT;case"reauthViaPopup":case"reauthViaRedirect":return XT;default:st(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZT=new js(2e3,1e4);async function ex(t,e,n){const r=fl(t);GI(t,e,vd);const i=Ly(r,n);return new $n(r,"signInViaPopup",e,i).executeNotNull()}class $n extends My{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ZT.get())};e()}}$n.currentPopupAction=null;/**
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
 */const tx="pendingRedirect",uu=new Map;class nx extends My{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uu.get(this.auth._key());if(!e){try{const r=await rx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uu.set(this.auth._key(),e)}return this.bypassAuthState||uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rx(t,e){const n=sx(e),r=ix(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ix(t){return Lt(t._redirectPersistence)}function sx(t){return zo(tx,t.config.apiKey,t.name)}async function ox(t,e,n=!1){const r=fl(t),i=Ly(r,e),o=await new nx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ax=10*60*1e3;class lx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ux(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ax&&this.cachedEventUids.clear(),this.cachedEventUids.has(hm(e))}saveEventToCache(e){this.cachedEventUids.add(hm(e)),this.lastProcessedEventTime=Date.now()}}function hm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dy(t);default:return!1}}/**
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
 */async function cx(t,e={}){return pi(t,"GET","/v1/projects",e)}/**
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
 */const fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dx=/^https?/;async function hx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cx(t);for(const n of e)try{if(px(n))return}catch{}st(t,"unauthorized-domain")}function px(t){const e=Rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dx.test(n))return!1;if(fx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const mx=new js(3e4,6e4);function pm(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gx(t){return new Promise((e,n)=>{var r,i,s;function o(){pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pm(),n(yt(t,"network-request-failed"))},timeout:mx.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=KT("iframefcb");return wt()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},YT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wo=null,e})}let Wo=null;function vx(t){return Wo=Wo||gx(t),Wo}/**
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
 */const _x=new js(5e3,15e3),yx="__/auth/iframe",wx="emulator/auth/iframe",Ex={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sx(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,wx):`https://${t.config.authDomain}/${yx}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=Cx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function kx(t){const e=await vx(t),n=wt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Sx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ex,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},_x.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ix={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tx=500,xx=600,Nx="_blank",bx="http://localhost";class mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Px(t,e,n,r=Tx,i=xx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ix),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(a=vy(u)?Nx:n),gy(u)&&(e=e||bx,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(dT(u)&&a!=="_self")return Rx(e||"",a),new mm(null);const f=window.open(e||"",a,c);D(f,t,"popup-blocked");try{f.focus()}catch{}return new mm(f)}function Rx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ax="__/auth/handler",Ox="emulator/auth/handler";function gm(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof vd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof $s){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Lx(t)}?${hi(a).slice(1)}`}function Lx({config:t}){return t.emulator?dd(t,Ox):`https://${t.authDomain}/${Ax}`}/**
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
 */const cu="webStorageSupport";class Mx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=by,this._completeRedirectFn=ox}async _openPopup(e,n,r,i){var s;Ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gm(e,n,r,Rc(),i);return Px(e,o,_d())}async _openRedirect(e,n,r,i){return await this._originValidation(e),FT(gm(e,n,r,Rc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kx(e),r=new lx(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cu,{type:cu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cu];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cy()||pd()||cl()}}const Dx=Mx;var vm="@firebase/auth",_m="0.19.12";/**
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
 */class Fx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ux(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zx(t){Xr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sy(t)},c=new mT(a,l,u);return KI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new tr("auth-internal",e=>{const n=fl(e.getProvider("auth").getImmediate());return(r=>new Fx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(vm,_m,Ux(t)),mn(vm,_m,"esm2017")}/**
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
 */function pl(t=X_()){const e=ud(t,"auth");return e.isInitialized()?e.getImmediate():YI(t,{popupRedirectResolver:Dx,persistence:[qT,LT,by]})}zx("Browser");async function Wx(){try{const t=pl(),e=new bt;return{user:(await ex(t,e)).user,signInError:null}}catch(t){return{user:null,signInError:t}}}async function Fy(){try{const t=pl();return await PT(t),{isSuccess:!0,signOutError:null}}catch(t){return{isSuccess:!1,signOutError:t}}}function wd(){const[t,e]=O.exports.useState(null),n=pl();return bT(n,r=>{e(i=>i!==r?r:t)}),t}const ym="@firebase/database",wm="0.12.8";/**
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
 */let Uy="";function jx(t){Uy=t}/**
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
 */class $x{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Bx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const zy=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $x(e)}}catch{}return new Bx},Bn=zy("localStorage"),Oc=zy("sessionStorage");/**
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
 */const Wr=new ad("@firebase/database"),Hx=function(){let t=1;return function(){return t++}}(),Wy=function(t){const e=fk(t),n=new ak;n.update(e);const r=n.digest();return sd.encodeByteArray(r)},Hs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Hs.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let Yn=null,Em=!0;const Vx=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wr.logLevel=Y.VERBOSE,Yn=Wr.log.bind(Wr),e&&Oc.set("logging_enabled",!0)):typeof t=="function"?Yn=t:(Yn=null,Oc.remove("logging_enabled"))},we=function(...t){if(Em===!0&&(Em=!1,Yn===null&&Oc.get("logging_enabled")===!0&&Vx(!0)),Yn){const e=Hs.apply(null,t);Yn(e)}},Vs=function(t){return function(...e){we(t,...e)}},Lc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hs(...t);Wr.error(e)},ir=function(...t){const e=`FIREBASE FATAL ERROR: ${Hs(...t)}`;throw Wr.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+Hs(...t);Wr.warn(e)},qx=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ed=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Gx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},sr="[MIN_NAME]",Cn="[MAX_NAME]",dr=function(t,e){if(t===e)return 0;if(t===sr||e===Cn)return-1;if(e===sr||t===Cn)return 1;{const n=Cm(t),r=Cm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Yx=function(t,e){return t===e?0:t<e?-1:1},bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Cd=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=Cd(t[e[r]]);return n+="}",n},jy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $y=function(t){I(!Ed(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Kx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Qx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Jx=new RegExp("^-?(0*)\\d{1,10}$"),Zx=-2147483648,eN=2147483647,Cm=function(t){if(Jx.test(t)){const e=Number(t);if(e>=Zx&&e<=eN)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},tN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class rN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class Mc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mc.OWNER="owner";/**
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
 */const Sd="5",By="v",Hy="s",Vy="r",qy="f",Gy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yy="ls",iN="p",Dc="ac",Ky="websocket",Qy="long_polling";/**
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
 */class sN{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xy(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Ky)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(t)&&(n.ns=t.namespace);const i=[];return Se(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class aN{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return QS(this.counters_)}}/**
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
 */const fu={},du={};function kd(t){const e=t.toString();return fu[e]||(fu[e]=new aN),fu[e]}function lN(t,e){const n=t.toString();return du[n]||(du[n]=e()),du[n]}/**
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
 */class uN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Sm="start",cN="close",fN="pLPCommand",dN="pRTLPCB",Jy="id",Zy="pw",e0="ser",hN="cb",pN="seg",mN="ts",gN="d",vN="dframe",t0=1870,n0=30,_N=t0-n0,yN=25e3,wN=3e4;class Pr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vs(e),this.stats_=kd(n),this.urlFn=l=>(this.appCheckToken&&(l[Dc]=this.appCheckToken),Xy(n,Qy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wN)),Gx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sm)this.id=a,this.password=l;else if(o===cN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Sm]="t",r[e0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[By]=Sd,this.transportSessionId&&(r[Hy]=this.transportSessionId),this.lastSessionId&&(r[Yy]=this.lastSessionId),this.applicationId&&(r[iN]=this.applicationId),this.appCheckToken&&(r[Dc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Gy.test(location.hostname)&&(r[Vy]=qy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pr.forceAllow_=!0}static forceDisallow(){Pr.forceDisallow_=!0}static isAvailable(){return Pr.forceAllow_?!0:!Pr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Kx()&&!Qx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$_(n),i=jy(r,_N);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vN]="t",r[Jy]=e,r[Zy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hx(),window[fN+this.uniqueCallbackIdentifier]=e,window[dN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jy]=this.myID,e[Zy]=this.myPW,e[e0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+n0+r.length<=t0;){const o=this.pendingSegs.shift();r=r+"&"+pN+i+"="+o.seg+"&"+mN+i+"="+o.ts+"&"+gN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const EN=16384,CN=45e3;let Ia=null;typeof MozWebSocket!="undefined"?Ia=MozWebSocket:typeof WebSocket!="undefined"&&(Ia=WebSocket);class lt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vs(this.connId),this.stats_=kd(n),this.connURL=lt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[By]=Sd,typeof location!="undefined"&&location.hostname&&Gy.test(location.hostname)&&(s[Vy]=qy),n&&(s[Hy]=n),r&&(s[Yy]=r),i&&(s[Dc]=i),Xy(e,Ky,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{if(!q_()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ia(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ia!==null&&!lt.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jy(n,EN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
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
 */class Td{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pr,lt]}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of Td.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const SN=6e4,kN=5e3,IN=10*1024,TN=100*1024,hu="t",km="d",xN="s",Im="r",NN="e",Tm="o",xm="a",Nm="n",bm="p",bN="h";class PN{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vs("c:"+this.id+":"),this.transportManager_=new Td(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hu in e){const n=e[hu];n===xm?this.upgradeIfSecondaryHealthy_():n===Im?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bi("t",e),r=bi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bi(hu,e);if(km in e){const r=e[km];if(n===bN)this.onHandshake_(r);else if(n===Nm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xN?this.onConnectionShutdown_(r):n===Im?this.onReset_(r):n===NN?Lc("Server Error: "+r):n===Tm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sd!==r&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class r0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class i0{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ta extends i0{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!od()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ta}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Pm=32,Rm=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new G("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function xd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Is(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function s0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Fe(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function AN(t,e){const n=Is(t,0),r=Is(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=dr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Nd(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function et(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ON{constructor(e,n){this.errorPrefix_=n,this.parts_=Is(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sl(this.parts_[r]);o0(this)}}function LN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sl(e),o0(t)}function MN(t){const e=t.parts_.pop();t.byteLength_-=sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function o0(t){if(t.byteLength_>Rm)throw new Error(t.errorPrefix_+"has a key path longer than "+Rm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Pm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pm+") or object contains a cycle "+Dn(t))}function Dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class bd extends i0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Pi=1e3,DN=60*5*1e3,FN=3*1e3,Am=30*1e3,UN=1.3,zN=3e4,WN="server_kill",Om=3;class Ft extends r0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ft.nextPersistentConnectionId_++,this.log_=Vs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=DN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!q_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ta.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Us,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},FN),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Ft.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const r=Qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ok(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Am)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lc("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zN&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new PN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(WN)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Re(f),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tc(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Cd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Om&&(this.reconnectDelay_=Am,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Om&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uy.replace(/\./g,"-")]=1,od()?e["framework.cordova"]=1:V_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ta.getInstance().currentlyOnline();return Tc(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
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
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(sr,e),i=new j(sr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Co;class a0 extends ml{static get __EMPTY_NODE(){return Co}static set __EMPTY_NODE(e){Co=e}compare(e,n){return dr(e.name,n.name)}isDefinedOn(e){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Cn,Co)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Co)}toString(){return".key"}}const Kn=new a0;/**
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
 */class So{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ve.RED,this.left=i!=null?i:Ue.EMPTY_NODE,this.right=s!=null?s:Ue.EMPTY_NODE}copy(e,n,r,i,s){return new ve(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class jN{copy(e,n,r,i,s){return this}insert(e,n,r){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new So(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new So(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new So(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new jN;/**
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
 */function $N(t,e){return dr(t.name,e.name)}function Pd(t,e){return dr(t,e)}/**
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
 */let Fc;function BN(t){Fc=t}const l0=function(t){return typeof t=="number"?"number:"+$y(t):"string:"+t},u0=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else I(t===Fc||t.isEmpty(),"priority of unexpected type.");I(t===Fc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lm;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),u0(this.priorityNode_)}static set __childrenNodeConstructor(e){Lm=e}static get __childrenNodeConstructor(){return Lm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$y(this.value_):e+=this.value_,this.lazyHash_=Wy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let c0,f0;function HN(t){c0=t}function VN(t){f0=t}class qN extends ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?dr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Cn,new me("[PRIORITY-POST]",f0))}makePost(e,n){const r=c0(e);return new j(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new qN;/**
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
 */const GN=Math.log(2);class YN{constructor(e){const n=s=>parseInt(Math.log(s)/GN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xa=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let f,d;if(c===0)return null;if(c===1)return f=t[l],d=n?n(f):f,new ve(d,f.node,ve.BLACK,null,null);{const g=parseInt(c/2,10)+l,v=i(l,g),w=i(g+1,u);return f=t[g],d=n?n(f):f,new ve(d,f.node,ve.BLACK,v,w)}},s=function(l){let u=null,c=null,f=t.length;const d=function(v,w){const N=f-v,p=f;f-=v;const h=i(N+1,p),m=t[N],_=n?n(m):m;g(new ve(_,m.node,w,null,h))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const w=l.nextBitIsOne(),N=Math.pow(2,l.count-(v+1));w?d(N,ve.BLACK):(d(N,ve.BLACK),d(N,ve.RED))}return c},o=new YN(t.length),a=s(o);return new Ue(r||e,a)};/**
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
 */let pu;const mr={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(mr&&ie,"ChildrenNode.ts has not been loaded"),pu=pu||new Mt({".priority":mr},{".priority":ie}),pu}get(e){const n=Qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xa(r,e.getCompare()):a=mr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Mt(c,u)}addToIndexes(e,n){const r=va(this.indexes_,(i,s)=>{const o=Qr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===mr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),xa(a,o.getCompare())}else return mr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=va(this.indexes_,i=>{if(i===mr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
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
 */let Ri;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&u0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ri||(Ri=new A(new Ue(Pd),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ri}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ri:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ri:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{I(z(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l0(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qs?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KN extends A{constructor(){super(new Ue(Pd),A.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const qs=new KN;Object.defineProperties(j,{MIN:{value:new j(sr,A.EMPTY_NODE)},MAX:{value:new j(Cn,qs)}});a0.__EMPTY_NODE=A.EMPTY_NODE;me.__childrenNodeConstructor=A;BN(qs);VN(qs);/**
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
 */const QN=!0;function _e(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,_e(e))}if(!(t instanceof Array)&&QN){const n=[];let r=!1;if(Se(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=xa(n,$N,o=>o.name,Pd);if(r){const o=xa(n,ie.getCompare());return new A(s,_e(e),new Mt({".priority":o},{".priority":ie}))}else return new A(s,_e(e),Mt.Default)}else{let n=A.EMPTY_NODE;return Se(t,(r,i)=>{if(kt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}HN(_e);/**
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
 */class Rd extends ml{constructor(e){super(),this.indexPath_=e,I(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?dr(e.name,n.name):s}makePost(e,n){const r=_e(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,qs);return new j(Cn,e)}toString(){return Is(this.indexPath_,0).join("/")}}/**
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
 */class XN extends ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?dr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=_e(e);return new j(n,r)}toString(){return".value"}}const d0=new XN;/**
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
 */const Mm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",JN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Mm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Mm.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function h0(t){return{type:"value",snapshotNode:t}}function ei(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ad{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ei(n,r)):o.trackChildChange(xs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ts(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(xs(i,s,o))}else r.trackChildChange(ei(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ns{constructor(e){this.indexedFilter_=new Ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,a)=>{s.matches(new j(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class eb{constructor(e){this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,g)=>f(g,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const f=l.getNext();!c&&a(s,f)<=0&&(c=!0),c&&u<this.limit_&&a(f,o)<=0?u++:i=i.updateImmediateChild(f.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,g)=>f(g,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new j(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(xs(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ts(n,f));const w=a.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ei(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ts(u.name,u.node)),s.trackChildChange(ei(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class Od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:sr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tb(t){return t.loadsAllData()?new Ad(t.getIndex()):t.hasLimit()?new eb(t):new Ns(t)}function nb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function rb(t,e){const n=t.copy();return n.index_=e,n}function Dm(t){const e={};if(t.isDefault())return e;let n;return t.index_===ie?n="$priority":t.index_===d0?n="$value":t.index_===Kn?n="$key":(I(t.index_ instanceof Rd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_&&(e.startAt=ye(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ye(t.indexStartName_))),t.endSet_&&(e.endAt=ye(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ye(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class Na extends r0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Vs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Na.getListenId_(e,r),a={};this.listens_[o]=a;const l=Dm(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,r),Qr(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Dm(e._queryParams),r=e._path.toString(),i=new Us;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Es(a.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ib{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ba(){return{value:null,children:new Map}}function p0(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,ba());const i=t.children.get(r);e=Q(e),p0(i,e,n)}}function Uc(t,e,n){t.value!==null?n(e,t.value):sb(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Uc(i,s,n)})}function sb(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class ob{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Um=10*1e3,ab=30*1e3,lb=5*60*1e3;class ub{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ob(e);const r=Um+(ab-Um)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Se(e,(i,s)=>{s>0&&kt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*lb))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function Ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=Ld()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Pa(V(),n,this.revert)}}else return I(z(this.path)===e,"operationForChild called for unrelated child."),new Pa(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class bs{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new bs(this.source,V()):new bs(this.source,Q(this.path))}}/**
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
 */class or{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return W(this.path)?new or(this.source,V(),this.snap.getImmediateChild(e)):new or(this.source,Q(this.path),this.snap)}}/**
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
 */class ti{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new or(this.source,V(),n.value):new ti(this.source,V(),n)}else return I(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ar{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class cb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZN(o.childName,o.snapshotNode))}),Ai(t,i,"child_removed",e,r,n),Ai(t,i,"child_added",e,r,n),Ai(t,i,"child_moved",s,r,n),Ai(t,i,"child_changed",e,r,n),Ai(t,i,"value",e,r,n),i}function Ai(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>hb(t,a,l)),o.forEach(a=>{const l=db(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function db(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hb(t,e,n){if(e.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function gl(t,e){return{eventCache:t,serverCache:e}}function Zi(t,e,n,r){return gl(new ar(e,n,r),t.serverCache)}function m0(t,e,n,r){return gl(t.eventCache,new ar(e,n,r))}function zc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let mu;const pb=()=>(mu||(mu=new Ue(Yx)),mu);class K{constructor(e,n=pb()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return Se(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:oe(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new K(null)}}set(e,n){if(W(e))return new K(n,this.children);{const r=z(e),s=(this.children.get(r)||new K(null)).set(Q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new K(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),oe(n,i),r):new K(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class dt{constructor(e){this.writeTree_=e}static empty(){return new dt(new K(null))}}function es(t,e,n){if(W(e))return new dt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Fe(i,e);return s=s.updateChild(o,n),new dt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new dt(s)}}}function Wc(t,e,n){let r=t;return Se(n,(i,s)=>{r=es(r,oe(e,i),s)}),r}function zm(t,e){if(W(e))return dt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new dt(n)}}function jc(t,e){return hr(t,e)!=null}function hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Wm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function gn(t,e){if(W(e))return t;{const n=hr(t,e);return n!=null?new dt(new K(n)):new dt(t.writeTree_.subtree(e))}}function $c(t){return t.writeTree_.isEmpty()}function ni(t,e){return g0(V(),t.writeTree_,e)}function g0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=g0(oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
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
 */function Fd(t,e){return w0(e,t)}function mb(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=r}function gb(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Wc(t.visibleWrites,e,n),t.lastWriteId=r}function vb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _b(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yb(a,r.path)?i=!1:et(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return wb(t),!0;if(r.snap)t.visibleWrites=zm(t.visibleWrites,r.path);else{const a=r.children;Se(a,l=>{t.visibleWrites=zm(t.visibleWrites,oe(r.path,l))})}return!0}else return!1}function yb(t,e){if(t.snap)return et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&et(oe(t.path,n),e))return!0;return!1}function wb(t){t.visibleWrites=v0(t.allWrites,Eb,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Eb(t){return t.visible}function v0(t,e,n){let r=dt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)et(n,o)?(a=Fe(n,o),r=es(r,a,s.snap)):et(o,n)&&(a=Fe(o,n),r=es(r,V(),s.snap.getChild(a)));else if(s.children){if(et(n,o))a=Fe(n,o),r=Wc(r,a,s.children);else if(et(o,n))if(a=Fe(o,n),W(a))r=Wc(r,V(),s.children);else{const l=Qr(s.children,z(a));if(l){const u=l.getChild(Q(a));r=es(r,V(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function _0(t,e,n,r,i){if(!r&&!i){const s=hr(t.visibleWrites,e);if(s!=null)return s;{const o=gn(t.visibleWrites,e);if($c(o))return n;if(n==null&&!jc(o,V()))return null;{const a=n||A.EMPTY_NODE;return ni(o,a)}}}else{const s=gn(t.visibleWrites,e);if(!i&&$c(s))return n;if(!i&&n==null&&!jc(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(et(u.path,e)||et(e,u.path))},a=v0(t.allWrites,o,e),l=n||A.EMPTY_NODE;return ni(a,l)}}}function Cb(t,e,n){let r=A.EMPTY_NODE;const i=hr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=gn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=ni(gn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),Wm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=gn(t.visibleWrites,e);return Wm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Sb(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=oe(e,n);if(jc(t.visibleWrites,s))return null;{const o=gn(t.visibleWrites,s);return $c(o)?i.getChild(n):ni(o,i.getChild(n))}}function kb(t,e,n,r){const i=oe(e,n),s=hr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=gn(t.visibleWrites,i);return ni(o,r.getNode().getImmediateChild(n))}else return null}function Ib(t,e){return hr(t.visibleWrites,e)}function Tb(t,e,n,r,i,s,o){let a;const l=gn(t.visibleWrites,e),u=hr(l,V());if(u!=null)a=u;else if(n!=null)a=ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)f(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function xb(){return{visibleWrites:dt.empty(),allWrites:[],lastWriteId:-1}}function Ra(t,e,n,r){return _0(t.writeTree,t.treePath,e,n,r)}function Ud(t,e){return Cb(t.writeTree,t.treePath,e)}function jm(t,e,n,r){return Sb(t.writeTree,t.treePath,e,n,r)}function Aa(t,e){return Ib(t.writeTree,oe(t.treePath,e))}function Nb(t,e,n,r,i,s){return Tb(t.writeTree,t.treePath,e,n,r,i,s)}function zd(t,e,n){return kb(t.writeTree,t.treePath,e,n)}function y0(t,e){return w0(oe(t.treePath,e),t.writeTree)}function w0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,xs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ei(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,xs(r,e.snapshotNode,i.oldSnap));else throw fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Pb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const E0=new Pb;class Wd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:lr(this.viewCache_),s=Nb(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Rb(t){return{filter:t}}function Ab(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ob(t,e,n,r,i){const s=new bb;let o,a;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=Bc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Oa(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=Mb(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Hc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=Ub(t,e,u.path,r,i,s):o=Db(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=Fb(t,e,n.path,r,s);else throw fi("Unknown operation type: "+n.type);const l=s.getChanges();return Lb(e,o,l),{viewCache:o,changes:l}}function Lb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(h0(zc(e)))}}function C0(t,e,n,r,i,s){const o=e.eventCache;if(Aa(r,n)!=null)return e;{let a,l;if(W(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=lr(e),c=u instanceof A?u:A.EMPTY_NODE,f=Ud(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const u=Ra(r,lr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){I(Sn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const f=jm(r,n,c,l);f!=null?a=t.filter.updatePriority(c,f):a=o.getNode()}else{const c=Q(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=jm(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(u).updateChild(c,d):f=o.getNode().getImmediateChild(u)}else f=zd(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,c,i,s):a=o.getNode()}}return Zi(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Oa(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=z(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const v=Q(n),N=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(l.getNode(),N):u=c.updateChild(l.getNode(),g,N,v,E0,null)}const f=m0(e,u,l.isFullyInitialized()||W(n),c.filtersNodes()),d=new Wd(i,f,s);return C0(t,f,n,i,d,a)}function Bc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Wd(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Zi(e,u,!0,t.filter.filtersNodes());else{const f=z(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Zi(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Q(n),g=a.getNode().getImmediateChild(f);let v;if(W(d))v=r;else{const w=c.getCompleteChild(f);w!=null?xd(d)===".priority"&&w.getChild(s0(d)).isEmpty()?v=w:v=w.updateChild(d,r):v=A.EMPTY_NODE}if(g.equals(v))l=e;else{const w=t.filter.updateChild(a.getNode(),f,v,d,c,o);l=Zi(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $m(t,e){return t.eventCache.isCompleteForChild(e)}function Mb(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=oe(n,l);$m(e,z(c))&&(a=Bc(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=oe(n,l);$m(e,z(c))||(a=Bc(t,a,c,u,i,s,o))}),a}function Bm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;W(n)?u=r:u=new K(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(c.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),v=Bm(t,g,d);l=Oa(t,l,new G(f),v,i,s,o,a)}}),u.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===void 0;if(!c.hasChild(f)&&!g){const v=e.serverCache.getNode().getImmediateChild(f),w=Bm(t,v,d);l=Oa(t,l,new G(f),w,i,s,o,a)}}),l}function Db(t,e,n,r,i,s,o){if(Aa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Oa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let u=new K(null);return l.getNode().forEachChild(Kn,(c,f)=>{u=u.set(new G(c),f)}),Hc(t,e,n,u,i,s,a,o)}else return e}else{let u=new K(null);return r.foreach((c,f)=>{const d=oe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Hc(t,e,n,u,i,s,a,o)}}function Fb(t,e,n,r,i){const s=e.serverCache,o=m0(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return C0(t,o,n,r,E0,i)}function Ub(t,e,n,r,i,s){let o;if(Aa(r,n)!=null)return e;{const a=new Wd(r,e,i),l=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ra(r,lr(e));else{const f=e.serverCache.getNode();I(f instanceof A,"serverChildren would be complete if leaf node"),c=Ud(r,f)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=z(n);let f=zd(r,c,e.serverCache);f==null&&e.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=t.filter.updateChild(l,c,f,Q(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,A.EMPTY_NODE,Q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ra(r,lr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Aa(r,V())!=null,Zi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class zb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ad(r.getIndex()),s=tb(r);this.processor_=Rb(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),c=new ar(l,o.isFullyInitialized(),i.filtersNodes()),f=new ar(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=gl(f,c),this.eventGenerator_=new cb(this.query_)}get query(){return this.query_}}function Wb(t){return t.viewCache_.serverCache.getNode()}function jb(t,e){const n=lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Hm(t){return t.eventRegistrations_.length===0}function $b(t,e){t.eventRegistrations_.push(e)}function Vm(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qm(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(I(lr(t.viewCache_),"We should always have a full cache before handling merges"),I(zc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ob(t.processor_,i,e,n,r);return Ab(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,S0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Bb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(ei(s,o))}),n.isFullyInitialized()&&r.push(h0(n.getNode())),S0(t,r,n.getNode(),e)}function S0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return fb(t.eventGenerator_,e,n,i)}/**
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
 */let La;class Hb{constructor(){this.views=new Map}}function Vb(t){I(!La,"__referenceConstructor has already been defined"),La=t}function qb(){return I(La,"Reference.ts has not been loaded"),La}function Gb(t){return t.views.size===0}function jd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),qm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qm(o,e,n,r));return s}}function Yb(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ra(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=Ud(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const u=gl(new ar(a,l,!1),new ar(r,i,!1));return new zb(e,u)}return o}function Kb(t,e,n,r,i,s){const o=Yb(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$b(o,n),Bb(o,n)}function Qb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Vm(u,n,r)),Hm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Vm(l,n,r)),Hm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kn(t)&&s.push(new(qb())(e._repo,e._path)),{removed:s,events:o}}function k0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jr(t,e){let n=null;for(const r of t.views.values())n=n||jb(r,e);return n}function I0(t,e){if(e._queryParams.loadsAllData())return vl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function T0(t,e){return I0(t,e)!=null}function kn(t){return vl(t)!=null}function vl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ma;function Xb(t){I(!Ma,"__referenceConstructor has already been defined"),Ma=t}function Jb(){return I(Ma,"Reference.ts has not been loaded"),Ma}let Zb=1;class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=xb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function x0(t,e,n,r,i){return mb(t.pendingWriteTree_,e,n,r,i),i?vi(t,new or(Ld(),e,n)):[]}function eP(t,e,n,r){gb(t.pendingWriteTree_,e,n,r);const i=K.fromObject(n);return vi(t,new ti(Ld(),e,i))}function an(t,e,n=!1){const r=vb(t.pendingWriteTree_,e);if(_b(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(V(),!0):Se(r.children,o=>{s=s.set(new G(o),!0)}),vi(t,new Pa(r.path,s,n))}else return[]}function _l(t,e,n){return vi(t,new or(Md(),e,n))}function tP(t,e,n){const r=K.fromObject(n);return vi(t,new ti(Md(),e,r))}function nP(t,e){return vi(t,new bs(Md(),e))}function rP(t,e,n){const r=Bd(t,n);if(r){const i=Hd(r),s=i.path,o=i.queryId,a=Fe(s,e),l=new bs(Dd(o),a);return Vd(t,s,l)}else return[]}function Vc(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||T0(s,e))){const a=Qb(s,e,n,r);Gb(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(f,d)=>kn(d));if(u&&!c){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const d=oP(f);for(let g=0;g<d.length;++g){const v=d[g],w=v.query,N=P0(t,v);t.listenProvider_.startListening(ts(w),Da(t,w),N.hashFn,N.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(ts(e),null):l.forEach(f=>{const d=t.queryToTagMap.get(yl(f));t.listenProvider_.stopListening(ts(f),d)})),aP(t,l)}return o}function iP(t,e,n,r){const i=Bd(t,r);if(i!=null){const s=Hd(i),o=s.path,a=s.queryId,l=Fe(o,e),u=new or(Dd(a),l,n);return Vd(t,o,u)}else return[]}function sP(t,e,n,r){const i=Bd(t,r);if(i){const s=Hd(i),o=s.path,a=s.queryId,l=Fe(o,e),u=K.fromObject(n),c=new ti(Dd(a),l,u);return Vd(t,o,c)}else return[]}function Ym(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(f,d)=>{const g=Fe(f,r);i=i||jr(d,g),s=s||kn(d)});let o=t.syncPointTree_.get(r);o?(s=s||kn(o),i=i||jr(o,V())):(o=new Hb,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=A.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((d,g)=>{const v=jr(g,V());v&&(i=i.updateImmediateChild(d,v))}));const l=T0(o,e);if(!l&&!e._queryParams.loadsAllData()){const f=yl(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=lP();t.queryToTagMap.set(f,d),t.tagToQueryMap.set(d,f)}const u=Fd(t.pendingWriteTree_,r);let c=Kb(o,e,n,u,i,a);if(!l&&!s){const f=I0(o,e);c=c.concat(uP(t,e,f))}return c}function $d(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),u=jr(a,l);if(u)return u});return _0(i,e,s,n,!0)}function vi(t,e){return N0(e,t.syncPointTree_,null,Fd(t.pendingWriteTree_,V()))}function N0(t,e,n,r){if(W(t.path))return b0(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=jr(i,V()));let s=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=y0(r,o);s=s.concat(N0(a,l,u,c))}return i&&(s=s.concat(jd(i,t,r,n))),s}}function b0(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=jr(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=y0(r,o),c=t.operationForChild(o);c&&(s=s.concat(b0(c,a,l,u)))}),i&&(s=s.concat(jd(i,t,r,n))),s}function P0(t,e){const n=e.query,r=Da(t,n);return{hashFn:()=>(Wb(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rP(t,n._path,r):nP(t,n._path);{const s=Xx(i,n);return Vc(t,n,null,s)}}}}function Da(t,e){const n=yl(e);return t.queryToTagMap.get(n)}function yl(t){return t._path.toString()+"$"+t._queryIdentifier}function Bd(t,e){return t.tagToQueryMap.get(e)}function Hd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Vd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Fd(t.pendingWriteTree_,e);return jd(r,n,i,null)}function oP(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[vl(n)];{let i=[];return n&&(i=k0(n)),Se(r,(s,o)=>{i=i.concat(o)}),i}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Jb())(t._repo,t._path):t}function aP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=yl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function lP(){return Zb++}function uP(t,e,n){const r=e._path,i=Da(t,e),s=P0(t,n),o=t.listenProvider_.startListening(ts(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,f)=>{if(!W(u)&&c&&kn(c))return[vl(c).query];{let d=[];return c&&(d=d.concat(k0(c).map(g=>g.query))),Se(f,(g,v)=>{d=d.concat(v)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(ts(c),Da(t,c))}}return o}/**
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
 */class qd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qd(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new Gd(this.syncTree_,n)}node(){return $d(this.syncTree_,this.path_)}}const cP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Km=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dP(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},dP=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},R0=function(t,e,n,r){return Yd(e,new Gd(n,t),r)},A0=function(t,e,n){return Yd(t,new qd(e),n)};function Yd(t,e,n){const r=t.getPriority().val(),i=Km(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Km(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new me(a,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(ie,(a,l)=>{const u=Yd(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Kd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qd(t,e){let n=e instanceof G?e:new G(e),r=t,i=z(n);for(;i!==null;){const s=Qr(r.node.children,i)||{children:{},childCount:0};r=new Kd(i,r,s),n=Q(n),i=z(n)}return r}function _i(t){return t.node.value}function O0(t,e){t.node.value=e,qc(t)}function L0(t){return t.node.childCount>0}function hP(t){return _i(t)===void 0&&!L0(t)}function wl(t,e){Se(t.node.children,(n,r)=>{e(new Kd(n,t,r))})}function M0(t,e,n,r){n&&!r&&e(t),wl(t,i=>{M0(i,e,!0,r)}),n&&r&&e(t)}function pP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gs(t){return new G(t.parent===null?t.name:Gs(t.parent)+"/"+t.name)}function qc(t){t.parent!==null&&mP(t.parent,t.name,t)}function mP(t,e,n){const r=hP(n),i=kt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qc(t))}/**
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
 */const gP=/[\[\].#$\/\u0000-\u001F\u007F]/,vP=/[\[\].#$\u0000-\u001F\u007F]/,gu=10*1024*1024,Xd=function(t){return typeof t=="string"&&t.length!==0&&!gP.test(t)},D0=function(t){return typeof t=="string"&&t.length!==0&&!vP.test(t)},_P=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),D0(t)},Gc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ed(t)||t&&typeof t=="object"&&kt(t,".sv")},F0=function(t,e,n,r){r&&e===void 0||El(il(t,"value"),e,n)},El=function(t,e,n){const r=n instanceof G?new ON(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Dn(r)+" with contents = "+e.toString());if(Ed(e))throw new Error(t+"contains "+e.toString()+" "+Dn(r));if(typeof e=="string"&&e.length>gu/3&&sl(e)>gu)throw new Error(t+"contains a string greater than "+gu+" utf8 bytes "+Dn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LN(r,o),El(t,a,r),MN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Dn(r)+" in addition to actual children.")}},yP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Is(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Xd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(AN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&et(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},wP=function(t,e,n,r){if(r&&e===void 0)return;const i=il(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Se(e,(o,a)=>{const l=new G(o);if(El(i,a,oe(n,l)),xd(l)===".priority"&&!Gc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),yP(i,s)},Jd=function(t,e,n,r){if(!(r&&n===void 0)&&!D0(n))throw new Error(il(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},EP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jd(t,e,n,r)},U0=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},CP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_P(n))throw new Error(il(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class SP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Nd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function z0(t,e,n){Cl(t,n),W0(t,r=>Nd(r,e))}function ht(t,e,n){Cl(t,n),W0(t,r=>et(r,e)||et(e,r))}function W0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(kP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Yn&&we("event: "+n.toString()),gi(r)}}}/**
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
 */const IP="repo_interrupt",TP=25;class xP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NP(t,e,n){if(t.stats_=kd(t.repoInfo_),t.forceRestClient_||tN())t.server_=new Na(t.repoInfo_,(r,i,s,o)=>{Qm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xm(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(r,i,s,o)=>{Qm(t,r,i,s,o)},r=>{Xm(t,r)},r=>{bP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lN(t.repoInfo_,()=>new ub(t.stats_,t.server_)),t.infoData_=new ib,t.infoSyncTree_=new Gm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_l(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zd(t,"connected",!1),t.serverSyncTree_=new Gm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ht(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function j0(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sl(t){return cP({timestamp:j0(t)})}function Qm(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=va(n,u=>_e(u));o=sP(t.serverSyncTree_,s,l,i)}else{const l=_e(n);o=iP(t.serverSyncTree_,s,l,i)}else if(r){const l=va(n,u=>_e(u));o=tP(t.serverSyncTree_,s,l)}else{const l=_e(n);o=_l(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ri(t,s)),ht(t.eventQueue_,a,o)}function Xm(t,e){Zd(t,"connected",e),e===!1&&AP(t)}function bP(t,e){Se(e,(n,r)=>{Zd(t,n,r)})}function Zd(t,e,n){const r=new G("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=_l(t.infoSyncTree_,r,i);ht(t.eventQueue_,r,s)}function eh(t){return t.nextWriteId_++}function PP(t,e,n,r,i){kl(t,"set",{path:e.toString(),value:n,priority:r});const s=Sl(t),o=_e(n,r),a=$d(t.serverSyncTree_,e),l=A0(o,a,s),u=eh(t),c=x0(t.serverSyncTree_,e,l,u,!0);Cl(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||Re("set at "+e+" failed: "+d);const w=an(t.serverSyncTree_,u,!v);ht(t.eventQueue_,e,w),Yc(t,i,d,g)});const f=nh(t,e);ri(t,f),ht(t.eventQueue_,f,[])}function RP(t,e,n,r){kl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Sl(t),o={};if(Se(n,(a,l)=>{i=!1,o[a]=R0(oe(e,a),_e(l),t.serverSyncTree_,s)}),i)we("update() called with empty data.  Don't do anything."),Yc(t,r,"ok",void 0);else{const a=eh(t),l=eP(t.serverSyncTree_,e,o,a);Cl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const f=u==="ok";f||Re("update at "+e+" failed: "+u);const d=an(t.serverSyncTree_,a,!f),g=d.length>0?ri(t,e):e;ht(t.eventQueue_,g,d),Yc(t,r,u,c)}),Se(n,u=>{const c=nh(t,oe(e,u));ri(t,c)}),ht(t.eventQueue_,e,[])}}function AP(t){kl(t,"onDisconnectEvents");const e=Sl(t),n=ba();Uc(t.onDisconnect_,V(),(i,s)=>{const o=R0(i,s,t.serverSyncTree_,e);p0(n,i,o)});let r=[];Uc(n,V(),(i,s)=>{r=r.concat(_l(t.serverSyncTree_,i,s));const o=nh(t,i);ri(t,o)}),t.onDisconnect_=ba(),ht(t.eventQueue_,V(),r)}function OP(t,e,n){let r;z(e._path)===".info"?r=Ym(t.infoSyncTree_,e,n):r=Ym(t.serverSyncTree_,e,n),z0(t.eventQueue_,e._path,r)}function Jm(t,e,n){let r;z(e._path)===".info"?r=Vc(t.infoSyncTree_,e,n):r=Vc(t.serverSyncTree_,e,n),z0(t.eventQueue_,e._path,r)}function LP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(IP)}function kl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Yc(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function $0(t,e,n){return $d(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function th(t,e=t.transactionQueueTree_){if(e||Il(t,e),_i(e)){const n=H0(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MP(t,Gs(e),n)}else L0(e)&&wl(e,n=>{th(t,n)})}function MP(t,e,n){const r=n.map(u=>u.currentWriteId),i=$0(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=Fe(e,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{kl(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(an(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Il(t,Qd(t.transactionQueueTree_,e)),th(t,t.transactionQueueTree_),ht(t.eventQueue_,e,c);for(let d=0;d<f.length;d++)gi(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Re("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}ri(t,e)}},o)}function ri(t,e){const n=B0(t,e),r=Gs(n),i=H0(t,n);return DP(t,i,r),r}function DP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Fe(n,l.path);let c=!1,f;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=TP)c=!0,f="maxretry",i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0));else{const d=$0(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){El("transaction failed: Data returned ",g,l.path);let v=_e(g);typeof g=="object"&&g!=null&&kt(g,".priority")||(v=v.updatePriority(d.getPriority()));const N=l.currentWriteId,p=Sl(t),h=A0(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=eh(t),o.splice(o.indexOf(N),1),i=i.concat(x0(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(an(t.serverSyncTree_,N,!0))}else c=!0,f="nodata",i=i.concat(an(t.serverSyncTree_,l.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Il(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gi(r[a]);th(t,t.transactionQueueTree_)}function B0(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&_i(r)===void 0;)r=Qd(r,n),e=Q(e),n=z(e);return r}function H0(t,e){const n=[];return V0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function V0(t,e,n){const r=_i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);wl(e,i=>{V0(t,i,n)})}function Il(t,e){const n=_i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,O0(e,n.length>0?n:void 0)}wl(e,r=>{Il(t,r)})}function nh(t,e){const n=Gs(B0(t,e)),r=Qd(t.transactionQueueTree_,e);return pP(r,i=>{vu(t,i)}),vu(t,r),M0(r,i=>{vu(t,i)}),n}function vu(t,e){const n=_i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(an(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?O0(e,void 0):n.length=s+1,ht(t.eventQueue_,Gs(e),i);for(let o=0;o<r.length;o++)gi(r[o])}}/**
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
 */function FP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zm=function(t,e){const n=zP(t),r=n.namespace;n.domain==="firebase.com"&&ir(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ir("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||qx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sN(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},zP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=FP(t.substring(c,f)));const d=UP(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class q0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class G0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class WP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ys{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:xd(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=Fm(this._queryParams),n=Cd(e);return n==="{}"?"default":n}get _queryObject(){return Fm(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Ys))return!1;const n=this._repo===e._repo,r=Nd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+RN(this._path)}}function jP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function $P(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Kn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==sr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Cn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ie){if(e!=null&&!Gc(e)||n!=null&&!Gc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Rd||t.getIndex()===d0,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Gt extends Ys{constructor(e,n){super(e,n,new Od,!1)}get parent(){const e=s0(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=ii(this.ref,e);return new Ps(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ps(i,ii(this.ref,r),ie)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ks(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?ii(t._root,e):t._root}function ii(t,e){return t=$e(t),z(t._path)===null?EP("child","path",e,!1):Jd("child","path",e,!1),new Gt(t._repo,oe(t._path,e))}function BP(t,e){t=$e(t),U0("push",t._path),F0("push",e,t._path,!0);const n=j0(t._repo),r=JN(n),i=ii(t,r),s=ii(t,r);let o;return e!=null?o=HP(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function HP(t,e){t=$e(t),U0("set",t._path),F0("set",e,t._path,!1);const n=new Us;return PP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function VP(t,e){wP("update",e,t._path,!1);const n=new Us;return RP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class rh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new q0("value",this,new Ps(e.snapshotNode,new Gt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G0(this,e,n):null}matches(e){return e instanceof rh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ih{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G0(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=ii(new Gt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new q0(e.type,this,new Ps(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ih?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Y0(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,f)=>{Jm(t._repo,t,a),l(c,f)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new WP(n,s||void 0),a=e==="value"?new rh(o):new ih(e,o);return OP(t._repo,t,a),()=>Jm(t._repo,t,a)}function K0(t,e,n,r){return Y0(t,"value",e,n,r)}function qP(t,e,n,r){return Y0(t,"child_added",e,n,r)}class Q0{}class GP extends Q0{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ys(e._repo,e._path,nb(e._queryParams,this._limit),e._orderByCalled)}}function YP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new GP(t)}class KP extends Q0{constructor(e){super(),this._path=e}_apply(e){jP(e,"orderByChild");const n=new G(this._path);if(W(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Rd(n),i=rb(e._queryParams,r);return $P(i),new Ys(e._repo,e._path,i,!0)}}function QP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Jd("orderByChild","path",t,!1),new KP(t)}function XP(t,...e){let n=$e(t);for(const r of e)n=r._apply(n);return n}Vb(Gt);Xb(Gt);/**
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
 */const JP="FIREBASE_DATABASE_EMULATOR_HOST",Kc={};let ZP=!1;function eR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ir("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Zm(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[JP]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Zm(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Mc(Mc.OWNER):new rN(t.name,t.options,e);CP("Invalid Firebase Database URL",o),W(o.path)||ir("Database URL must point to the root of a Firebase Database (not including a child path).");const f=nR(a,t,c,new nN(t.name,n));return new rR(f,t)}function tR(t,e){const n=Kc[e];(!n||n[t.key]!==t)&&ir(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LP(t),delete n[t.key]}function nR(t,e,n,r){let i=Kc[e.name];i||(i={},Kc[e.name]=i);let s=i[t.toURLString()];return s&&ir("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xP(t,ZP,n,r),i[t.toURLString()]=s,s}class rR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ir("Cannot call "+e+" on a deleted database.")}}function Qs(t=X_(),e){return ud(t,"database").getImmediate({identifier:e})}/**
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
 */function iR(t){jx(Ws),Xr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return eR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(ym,wm,t),mn(ym,wm,"esm2017")}/**
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
 */const sR={".sv":"timestamp"};function X0(){return sR}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iR();const Xs={MESSAGES:"messages",CHATS:"chats",USERS:"users"},J0="MESSAGE",Z0={uid:null,displayName:"Unknown User"};async function e1(t){try{if(!(t!=null&&t.uid))throw"No user ID provided to update user details.";const{uid:e,email:n,displayName:r,photoURL:i}=t,s=Qs(),o=`${Xs.USERS}/${e}`,a=Ks(s,o);return await VP(a,{email:n,displayName:r,photoURL:i,latestLogin:X0()}),null}catch(e){return console.error("Failed to update user details."),console.log(t),console.error(e),e}}function t1({authUser:t,doLogOut:e}){return t&&le("div",{children:[k("hr",{}),le("p",{children:["Currently logged in as ",t.displayName,"."]}),k("p",{children:k(ai,{to:"/chats",children:"Go to Chats"})}),k("p",{children:le("span",{className:"Button",onClick:e,children:[k(Nn,{icon:VE,className:"IconBefore"}),k("span",{children:"Log Out"})]})})]})}function sh({hasError:t,children:e}){return t&&k("div",{className:"Error",children:e})}function oR(){const[t,e]=O.exports.useState(null),n=wd(),r=nf(),i=async()=>{const{user:o,signInError:a}=await Wx();o?(await e1(o),console.log(`Welcome, ${o.displayName}!`),e(null),r("/chats")):(console.error(a),e(a))},s=async()=>{const{isSuccess:o,signOutError:a}=await Fy();o||e(a)};return k("div",{className:"Page Content LoginPage FullPage VerticalCenter",children:le("div",{children:[k("h1",{className:"BigTitle",children:"Butterfly"}),k("p",{children:"Meet people in your community."}),k("p",{children:le("span",{className:"Button Primary",onClick:i,children:[k(Nn,{icon:VI,className:"IconBefore"}),k("span",{children:"Log in with Google"})]})}),le(sh,{hasError:t,children:[k("p",{children:"Something went wrong:"}),k("pre",{children:t==null?void 0:t.toString()})]}),k(t1,{authUser:n,doLogOut:s})]})})}function aR(){return le("div",{className:"Page Content AllChatsPage FullPage",children:[k("h1",{children:"Chats"}),k("p",{children:"Your chats will appear here."}),k(ai,{to:"/chats/123",children:"Chat 123"})]})}function lR(t){const e=Qs(),n=`${Xs.USERS}/${t}`,r=Ks(e,n);return new Promise((i,s)=>{K0(r,o=>{i(An({uid:o.key},o.val()))})})}function uR(t){const[e,n]=O.exports.useState({});return O.exports.useEffect(()=>{const r=Qs(),i=`${Xs.CHATS}/${t}`,s=Ks(r,i);return K0(s,async a=>{const l=a.val(),u=(l==null?void 0:l.participants)||{},c=await Object.keys(u).reduce(async(f,d)=>{const g=await lR(d);return yi(An({},await f),{[d]:g})},u);n(yi(An({isLoaded:!0,exists:a.exists()},l),{participants:c}))})},[t]),e}function cR(t,e=50){const[n,r]=O.exports.useState({keys:{},values:[]});return O.exports.useEffect(()=>{const i=Qs(),s=`${Xs.MESSAGES}/${t}`,o=XP(Ks(i,s),QP("timestamp"),YP(e));return qP(o,l=>{const u=l.key,c=An({key:u},l.val());r(f=>{if(u in f.keys)return f;const{keys:d,values:g}=f;return{isLoaded:!0,keys:yi(An({},d),{[u]:!0}),values:[...g,c]}})})},[t]),n.values}async function fR(t,e){if(!e.from)throw"Missing `from` in message data.";if(!e.message)throw"Missing `message` in message data.";const n={type:J0,timestamp:X0(),message:e.message,from:e.from},r=Qs(),i=`${Xs.MESSAGES}/${t}`,s=Ks(r,i);await BP(s,n)}function dR({data:t,myUserId:e,participants:n}){const{message:r,from:i,type:s,timestamp:o}=t;if(s!==J0)return null;const a=(n==null?void 0:n[i])||Z0;return k("div",{className:`Message ${i===e?"Mine":"Theirs"}`,children:le("div",{className:"MessageInner",children:[k("p",{children:a.displayName}),k("p",{children:r})]})})}function hR({chatId:t,chat:e,myUserId:n}){const r=cR(t),i=e.isLoaded&&r.length>0,s=i&&r.map(a=>k(dR,{data:a,myUserId:n,participants:e.participants},a.key));return k("div",{className:"ChatMessages",children:i?s:k("p",{children:"Loading messages..."})})}function pR({chatId:t,myUserId:e}){const n=O.exports.createRef();return le("div",{className:"ChatComposer",children:[k("textarea",{ref:n,className:"Input"}),k("button",{onClick:()=>{const i=n.current.value;!e||!i||(fR(t,{message:i,from:e}),n.current.value="")},className:"Button Send",children:k(Nn,{icon:$E,className:"IconBefore"})})]})}function mR(t,e={}){const n=Object.keys(e).filter(r=>r!==t);return(e==null?void 0:e[n==null?void 0:n[0]])||Z0}function gR({myUserId:t,chat:e}){const n=mR(t,e.participants);return k("div",{className:"ChatHeader",children:le("h1",{children:["Chat with ",n.displayName]})})}function vR(){return k("p",{children:"Loading chat..."})}function _R(t,e,n){const r=(e==null?void 0:e.participants)||{};if(e.isLoaded)if(e!=null&&e.exists){if(!(n in r))return"You are not a participant in this chat."}else return`No chat found for ID: ${t}`;else return null;return null}function yR({chatId:t}){const e=uR(t),n=wd(),r=n==null?void 0:n.uid,i=_R(t,e,r),s=e.isLoaded&&!i,o=le(kI,{children:[k(gR,{myUserId:r,chat:e}),k(hR,{chatId:t,myUserId:r,chat:e}),k(pR,{chatId:t,myUserId:r})]});return le("div",{className:"ChatApp",children:[!e.isLoaded&&k(vR,{}),s&&o,le(sh,{hasError:i,children:[k("h1",{children:"No Chat Here..."}),k("pre",{children:i}),k("p",{children:k(ai,{to:"/chats",children:k("span",{children:"Back to Chats"})})})]})]})}function wR(){const{chatId:t}=K1();return k("div",{className:"Content ChatPage FullPage",children:k("div",{className:"ChatContainer",children:k(yR,{chatId:t})})})}const ER="7MIFL%Jj960nT^QX",n1=[{displayName:"Pradeep Balaram",email:"scarletdatastudio+pradeep@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/45.jpg"},{displayName:"Si-Woo Yun-Seo",email:"scarletdatastudio+siwoo@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/92.jpg"},{displayName:"Ilya Viktoria",email:"scarletdatastudio+ilya@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/31.jpg"},{displayName:"Asabe Oyibo",email:"scarletdatastudio+asabe@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/89.jpg"},{displayName:"Ernesto Sa\xFAl",email:"scarletdatastudio+ernesto@gmail.com",photoURL:"https://randomuser.me/api/portraits/men/61.jpg"},{displayName:"Quy\xEAn H\u01B0\u01A1ng",email:"scarletdatastudio+quyen@gmail.com",photoURL:"https://randomuser.me/api/portraits/women/12.jpg"}],_u=n1.reduce((t,e)=>yi(An({},t),{[e.email]:e}),{});async function CR(t){const e=_u==null?void 0:_u[t];if(!e)return{user:null,signInError:`No mock user for email: '${t}'`};try{const n=pl(),{email:r,displayName:i,photoURL:s}=e,a=(await TT(n,r,ER)).user;return await NT(n.currentUser,{displayName:i,photoURL:s}),{user:a,signInError:null}}catch(n){return{user:null,signInError:n}}}function SR({mockUsers:t,doLogIn:e}){const n=O.exports.createRef(),r=()=>{const s=n.current.value;s&&e(s)},i=t.map(({email:s,displayName:o})=>k("option",{value:s,children:o},s));return le("div",{children:[k("p",{children:k("select",{ref:n,className:"LoginUserSelector",children:i})}),k("p",{children:le("span",{className:"Button Primary",onClick:r,children:[k(Nn,{icon:qE,className:"IconBefore"}),k("span",{children:"Log in as Mock User"})]})}),k("p",{children:k(ai,{to:"/login",children:"Back to Real Login"})})]})}function kR(){const[t,e]=O.exports.useState(null),n=wd(),r=async s=>{const{user:o,signInError:a}=await CR(s);o?(await e1(o),console.log(`Welcome, ${o.displayName}!`),e(null)):(console.error(a),e(a))},i=async()=>{const{isSuccess:s,signOutError:o}=await Fy();s||e(o)};return k("div",{className:"Page Content LoginPage FullPage VerticalCenter",children:le("div",{children:[k("h1",{className:"BigTitle",children:"Butterfly"}),k("p",{children:"Meet people in your community."}),k("hr",{}),k("h2",{children:"Mock User Login"}),k(SR,{doLogIn:r,mockUsers:n1}),le(sh,{hasError:t,children:[k("p",{children:"Something went wrong:"}),k("pre",{children:t==null?void 0:t.toString()})]}),k(t1,{authUser:n,doLogOut:i})]})})}const IR="/butterfly",eg="butterfly__pathname";function TR(){const t=nf();return O.exports.useEffect(()=>{const e=localStorage.getItem(eg);if(e){localStorage.setItem(eg,"");const n=e.substring(IR.length);t(n)}},[]),k("div",{className:"App Theme",children:le(ew,{children:[k(Tt,{index:!0,element:k(xI,{})}),le(Tt,{path:"/",element:k(II,{}),children:[k(Tt,{path:"login",element:k(oR,{})}),le(Tt,{path:"chats",children:[k(Tt,{index:!0,element:k(aR,{})}),k(Tt,{path:":chatId",element:k(wR,{})})]}),k(Tt,{path:"mocklogin",element:k(kR,{})})]}),k(Tt,{path:"*",element:k(TI,{})})]})})}function xR(){const t=gI();return k("div",{className:"App Theme",children:k(vI.Provider,{value:t,children:k(TR,{})})})}const NR=[BE];WE.add(NR);document.title="Butterfly";Lu.createRoot(document.getElementById("root")).render(k(lg.StrictMode,{children:k(rw,{basename:"butterfly",children:k(xR,{})})}));
